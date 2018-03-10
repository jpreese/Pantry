using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Pantry.Models;

namespace Pantry.Context
{
    public class RecipesContext : DbContext
    {
        public DbSet<Recipe> Recipe { get; set; }

        public DbSet<Ingredient> Ingredient { get; set; }

        public DbSet<RecipeIngredient> RecipeIngredient { get; set; }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }
}
