using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Pantry.Models
{
    public class UserIngredient
    {
        public int UserIngredientId { get; set; }
        public int IngredientId { get; set; }
        public IdentityUser IdentityUser { get; set; }
        public Ingredient Ingredient { get; set; }
    }
}