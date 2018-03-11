using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Pantry.Context
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext() : base("AuthContext")
        {
        }
    }
}
