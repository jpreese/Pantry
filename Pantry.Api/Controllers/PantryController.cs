using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Pantry.Context;
using Pantry.Entities;

namespace Pantry.Controllers
{
    [Authorize]
    public class PantryController : ApiController
    {
        private readonly DataContext _db = new DataContext();

        public IHttpActionResult GetPantry()
        {
            var userId = User.Identity.GetUserId();
            var ingredients = _db.Ingredient
                .Join(_db.UserIngredient, i => i.IngredientId, ui => ui.IngredientId, (i, ui) => new { Ingredient = i, UserIngredient = ui })
                .Where(ui => ui.UserIngredient.UserId == userId)
                .Select(i => i.Ingredient);

            return Ok(ingredients);
        }

        public void PostIngredient(int id)
        {
            var currentUser = User.Identity.GetUserId();
            var ingredient = new UserIngredient { IngredientId = id, UserId = currentUser };
            _db.UserIngredient.Add(ingredient);
            _db.SaveChanges();
        }
    }
}
