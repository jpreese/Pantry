using System.Linq;
using System.Web.Http;
using Pantry.Context;
using Pantry.Entities;

namespace Pantry.Controllers
{
    public class IngredientsController : ApiController
    {
        private readonly DataContext _db = new DataContext();

        public IHttpActionResult GetIngredients()
        {
            if (_db.Ingredient.Any() == false)
            {
                return NotFound();
            }

            return Ok(_db.Ingredient);
        }

        public IHttpActionResult GetIngredients(string userId)
        {
            var ingredients = _db.Ingredient
                .Join(_db.UserIngredient, i => i.IngredientId, ui => ui.IngredientId, (i, ui) => new { Ingredient = i, UserIngredient = ui })
                .Where(ui => ui.UserIngredient.UserId == userId)
                .Select(i => i.Ingredient);

            return Ok(ingredients);
        }
    }
}
