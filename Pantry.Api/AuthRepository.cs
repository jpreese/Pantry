using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Pantry.Context;
using Pantry.Models;

namespace Pantry
{
    public class AuthRepository
    {
        private readonly UserManager<IdentityUser> _userManager;

        public AuthRepository()
        {
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(new DataContext()));
        }

        public async Task<IdentityResult> RegisterUserAsync(User userModel)
        {
            var user = new IdentityUser
            {
                UserName = userModel.UserName
            };

            var result = await _userManager.CreateAsync(user, userModel.Password);

            return result;
        }

        public async Task<IdentityUser> FindUserAsync(User userModel)
        {
            var user = await _userManager.FindAsync(userModel.UserName, userModel.Password);

            return user;
        }
    }
}