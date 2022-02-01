using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GR.Laromedel.AccessPortal.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Authorize]
    public class ResourcesController : ControllerBase
    {
        private readonly IResourceService _resourceService;

        public ResourcesController(IResourceService resourceService)
        {
            _resourceService = resourceService;
        }

        [HttpGet]
        public ActionResult Get()
        {
            var userId = "test"; //User.Claims.FirstOrDefault(c => c.Type == "uuid").Value;

            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            return Ok(_resourceService.GetResources(userId));
        }
    }
}