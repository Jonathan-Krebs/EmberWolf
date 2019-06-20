using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EmberWolf.Models;
using EmberWolf.Database;

namespace EmberWolf.Controllers
{
    public class HomeController : Controller
    {

        //private Database.DataModel db = new Database.DataModel();
        public ActionResult Index()
        {
            //Layout Layout = db.Layouts.FirstOrDefault();
            //ViewBag.A = Layout;
            return View();
        }

        public ActionResult CoverLetter()
        {
            return View();
        }

        public ActionResult Battery()
        {
            return View();
        }

        public ActionResult NeuralNet()
        {

            return View();
        }

        public ActionResult Results()
        {

            return View();
        }
    }
}