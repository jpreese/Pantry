using System.Linq;
using System.Web.Http;
using Pantry.Context;

namespace Pantry.Controllers
{
    [Authorize]
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
    }
}
