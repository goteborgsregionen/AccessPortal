using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GR.Laromedel.AccessPortal.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RedirectionController : ControllerBase
    {
        public RedirectionController()
        {
        }

        [HttpGet]
        public ActionResult Get(string url)
        {
            var decodedUrl = System.Web.HttpUtility.UrlDecode(url);
            if (decodedUrl == null) {
                return BadRequest();
            }
            return Redirect(decodedUrl);
        }
    }
}