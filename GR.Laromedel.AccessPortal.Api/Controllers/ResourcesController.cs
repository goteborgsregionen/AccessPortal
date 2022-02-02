using System;
using System.Collections.Generic;
using System.Linq;
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
            //_logger.LogDebug(Newtonsoft.Json.JsonConvert.SerializeObject(User));

            var claims = User.Claims.ToList();
            _logger.LogInformation($"Antal claims {claims.Count()}");
            foreach (var claim in claims)
            {
                _logger.LogInformation($"{claim.Type} {claim.Value}");
            }

            var userId = User.Claims.FirstOrDefault(c => c.Type == "uuid")?.Value;

            _logger.LogInformation($"-----");

            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            return Ok(_resourceService.GetResources(userId));
        }
    }
}