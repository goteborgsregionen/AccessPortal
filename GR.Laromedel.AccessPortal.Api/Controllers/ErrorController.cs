using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GR.Laromedel.AccessPortal.Api.Controllers
{
    [ApiController]
    [Route("api/errors")]
    public class ErrorController : Controller
    {
        [HttpGet("{code}")]
        public async Task<IActionResult> Get(int code)
        {
            return await Task.Run(() =>
            {
                return StatusCode(code, new ProblemDetails()
                {
                    Instance = HttpContext.Request.Path,
                    Status = code,
                    Title = ((HttpStatusCode)code).ToString(),
                });
            });
        }
    }
}