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

        public IHttpActionResult PostIngredient(int id)
        {
            var currentUser = User.Identity.GetUserId();
            var ingredient = _db.Ingredient.FirstOrDefault(i => i.IngredientId == id);

            _db.UserIngredient.Add(new UserIngredient { IngredientId = id, UserId = currentUser });
            _db.SaveChanges();

            return Ok(ingredient);
        }

        public IHttpActionResult DeleteIngredient(int id)
        {
            var currentUser = User.Identity.GetUserId();
            var ingredient = _db.Ingredient.FirstOrDefault(i => i.IngredientId == id);
            var userIngredient = _db.UserIngredient.FirstOrDefault(ui => ui.IngredientId == id && ui.UserId == currentUser);

            _db.UserIngredient.Remove(userIngredient);
            _db.SaveChanges();

            return Ok(ingredient);
        }
    }
}
