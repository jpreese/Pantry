using System.Linq;
using System.Web.Http;
using Pantry.Context;

namespace Pantry.Controllers
{
    public class RecipesController : ApiController
    {
        private DataContext db = new DataContext();

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }

            base.Dispose(disposing);
        }

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
            if (db.Recipe.Any() == false)
            {
                return NotFound();
            }

            return Ok(db.Recipe);
        }
    }
}
