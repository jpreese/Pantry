using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using Pantry.Models;

namespace Pantry.Context
{
    public class DataContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<Recipe> Recipe { get; set; }

        public DbSet<Ingredient> Ingredient { get; set; }

        public DbSet<RecipeIngredient> RecipeIngredient { get; set; }
    }
}
