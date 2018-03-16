using Pantry.Models;
using Pantry.Context;
using System.Data.Entity.Migrations;

namespace Pantry.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(DataContext context)
        {
            context.Recipe.AddOrUpdate(new Recipe { RecipeId = 1, Name = "Bread", Category = "Snack"});
            context.Recipe.AddOrUpdate(new Recipe { RecipeId = 2, Name = "Cheese Pizza", Category = "Dinner" });
            context.Recipe.AddOrUpdate(new Recipe { RecipeId = 3, Name = "Chocolate Milk", Category = "Breakfast" });

            context.Ingredient.AddOrUpdate(new Ingredient { IngredientId = 1, Name = "Salt"});
            context.Ingredient.AddOrUpdate(new Ingredient { IngredientId = 2, Name = "Pepper" });
            context.Ingredient.AddOrUpdate(new Ingredient { IngredientId = 3, Name = "Basil" });
            context.Ingredient.AddOrUpdate(new Ingredient { IngredientId = 4, Name = "Flour" });
            context.Ingredient.AddOrUpdate(new Ingredient { IngredientId = 5, Name = "Chocolate" });
            context.Ingredient.AddOrUpdate(new Ingredient { IngredientId = 6, Name = "Milk" });

            context.RecipeIngredient.AddOrUpdate(new RecipeIngredient { RecipeIngredientId = 1, RecipeId = 1, IngredientId = 1 });
            context.RecipeIngredient.AddOrUpdate(new RecipeIngredient { RecipeIngredientId = 1, RecipeId = 1, IngredientId = 4 });
            context.RecipeIngredient.AddOrUpdate(new RecipeIngredient { RecipeIngredientId = 1, RecipeId = 1, IngredientId = 6 });
        }
    }
}