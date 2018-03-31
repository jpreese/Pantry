using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using Pantry.Entities;

namespace Pantry.Context
{
    public class DataContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<Ingredient> Ingredient { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredient { get; set; }
        public DbSet<UserIngredient> UserIngredient { get; set; }
    }
}