using Microsoft.AspNetCore.Mvc;
using Mission_5.Models;
using System.Diagnostics;

namespace Mission_5.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Consulting()
        {
            return View();
        }
    }
}
