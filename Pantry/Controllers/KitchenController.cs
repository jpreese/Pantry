using System.Web.Mvc;

namespace Pantry.Controllers
{
    public class KitchenController : Controller
    {
        public ActionResult Index()
        {
            return View("Kitchen");
        }
    }
}
