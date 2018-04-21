using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Pantry.Context;

namespace Pantry.Controllers
{
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
    }
}
