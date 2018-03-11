using System.Threading.Tasks;
using System.Web.Http;
using Pantry.Models;

namespace Pantry.Controllers
{
    public class AccountController : ApiController
    {
        private readonly AuthRepository _authRepository;

        public AccountController()
        {
            _authRepository = new AuthRepository();
        }

        public async Task<IHttpActionResult> Register(User userModel)
        {
            var result = await _authRepository.RegisterUser(userModel);

            return Ok();
        }
    }
}
