using System.Threading.Tasks;
using System.Web.Http;
using Pantry.Models;

namespace Pantry.Controllers
{
    public class AccountsController : ApiController
    {
        private readonly AuthRepository _authRepository;

        public AccountsController()
        {
            _authRepository = new AuthRepository();
        }

        public async Task<IHttpActionResult> Register(User userModel)
        {
            var result = await _authRepository.RegisterUserAsync(userModel);

            return Ok();
        }
    }
}
