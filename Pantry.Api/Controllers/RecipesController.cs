using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Pantry.Context;

namespace Pantry.Controllers
{
    [Authorize]
    public class RecipesController : ApiController
    {
        private readonly DataContext db = new DataContext();

        public IHttpActionResult GetRecipe(int id)
        {
            var recipe = db.Recipe.FirstOrDefault(r => r.RecipeId == id);
            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        public IHttpActionResult GetRecipes()
        {
            var userId = User.Identity.GetUserId();

            var results = from RI in db.RecipeIngredient
                join UI in db.UserIngredient on RI.IngredientId equals UI.IngredientId
                where
                    UI.UserId == userId
                group RI.Recipe by new
                {
                    RecipeId = (int?) RI.Recipe.RecipeId,
                    RI.Recipe.Name,
                    RI.Recipe.Category,
                    WebId = (int?) RI.Recipe.WebId
                }
                into g
                where g.Count() ==
                      (from rii in db.RecipeIngredient
                          where
                              rii.RecipeId == g.Key.RecipeId
                          select new
                          {
                              rii
                          }).Count()
                orderby
                    g.Key.RecipeId
                select new
                {
                    g.Key.RecipeId,
                    g.Key.Name,
                    g.Key.Category,
                    g.Key.WebId
                };

            if (results.Any() == false)
            {
                return NotFound();
            }

            return Ok(results);
        }
    }
}
