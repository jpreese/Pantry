using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Pantry.Models;

namespace Pantry.Context
{
    public class RecipeContext : DbContext
    {
        public DbSet<Recipe> Recipe { get; set; }
    }
}
