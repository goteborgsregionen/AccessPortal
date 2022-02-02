using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GR.Laromedel.AccessPortal.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class ResourcesController : ControllerBase
    {
        private readonly IResourceService _resourceService;
        private readonly ILogger<ResourcesController> _logger;

        public ResourcesController(IResourceService resourceService, ILogger<ResourcesController> logger)
        {
            _resourceService = resourceService;
            _logger = logger;
        }

        [HttpGet]
        public ActionResult Get()
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;

            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            return Ok(_resourceService.GetResources(userId));
        }
    }
}