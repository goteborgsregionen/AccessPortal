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
            return Ok(_resourceService.GetResources());
        }
    }
}