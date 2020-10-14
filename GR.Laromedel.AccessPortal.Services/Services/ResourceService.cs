using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using GR.Laromedel.AccessPortal.Services.Models;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;

namespace GR.Laromedel.AccessPortal.Services.Services
{
    public class ResourceService : IResourceService
    {
        public List<ResourceViewModel> GetResources()
        {
            var ids = new List<Guid> {
                new Guid("3BE8E47E-5BDF-491C-8B8F-00173D6249AA")
            };
            using(var client = new HttpClient { BaseAddress = new Uri("https://apitest.laromedel.goteborgsregionen.se/PublicArticle") }) {
                var getParameters = $"?articleIds={ids[0]}" + string.Join("&articleIds=", ids.GetRange(1, ids.Count));
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("applications/json"));
                var content = JsonSerializer.Deserialize<LaromedelResourceModel>(client.GetAsync(getParameters).Result);
                /*
                [2:55 PM] Michaela Vesterlund
    
var content = response.Result.Content.ReadAsStringAsync().Result;
 var schoolUnitId = JsonConvert.DeserializeObject<EgilIdModel>(content);

                */
            }
        }
    }
}