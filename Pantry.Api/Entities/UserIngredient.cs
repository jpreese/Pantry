using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Pantry.Entities
{
    public class UserIngredient
    {
        public int UserIngredientId { get; set; }
        public int IngredientId { get; set; }
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public IdentityUser IdentityUser { get; set; }
        public Ingredient Ingredient { get; set; }
    }
}