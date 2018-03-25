﻿using System.Linq;
using System.Web.Http;
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
            if (db.Recipe.Any() == false)
            {
                return NotFound();
            }

            return Ok(db.Recipe);
        }
    }
}
