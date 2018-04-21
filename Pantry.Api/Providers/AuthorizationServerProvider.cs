using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Owin.Security.OAuth;
using Pantry.Models;

namespace Pantry.Providers
{
    public class AuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        private readonly AuthRepository _authRepository;

        public AuthorizationServerProvider()
        {
            _authRepository = new AuthRepository();
        }

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            var id = context.Identity.Claims.Where(t => t.Type.Equals(ClaimTypes.NameIdentifier)).Select(c => c.Value).FirstOrDefault();
            context.AdditionalResponseParameters.Add("userId", id);
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            var userModel = new User
            {
                UserName = context.UserName,
                Password = context.Password
            };

            var user = await _authRepository.RegisterUserIfNotFound(userModel);
            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                context.Rejected();
                return;
            }

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
            context.Validated(identity);
        }
    }
}