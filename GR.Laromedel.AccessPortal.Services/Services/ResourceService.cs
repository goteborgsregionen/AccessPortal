using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using GR.Laromedel.AccessPortal.Infrastructure.Models;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;
using Newtonsoft.Json;

namespace GR.Laromedel.AccessPortal.Services.Services
{
    public class ResourceService : IResourceService
    {
        public List<ResourceViewModel> GetResources()
        {
            var ids = new List<Guid> {
                new Guid("f747dbca-6556-4a25-8118-6b61d939d642"),
                new Guid("dfca95b4-86ef-4df5-a859-7f5bea6ce32d"),
                new Guid("037f2408-e350-4c83-8a63-fc397a1f6865"),
                new Guid("d6d1c282-bcda-4bde-a10e-b0695ab6a71d"),
                new Guid("5fe81ac0-868f-40cc-8a7b-cd3abc3b9638"),
                new Guid("e75d519d-dc08-4db6-bf51-1df2d963237c"),
                new Guid("a061ed3f-96b6-4dff-a1ee-4f170e1aac92"),
                new Guid("54f166d8-8941-4215-8b39-66ff1bca2fbc"),
                new Guid("9c211382-ced5-4ed3-bc0e-9c460a3ca6c3")
            };
            using (
                var client = new HttpClient { 
                    BaseAddress = new Uri("https://apitest.laromedel.goteborgsregionen.se/PublicArticle/Get")
                }
            )
            {
                client.DefaultRequestHeaders.Accept.Add(
                    new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json")
                );

                var getParameters = "?articleIds=" + string.Join("&articleIds=", ids);
                var response = client.GetAsync(getParameters);

                var content = response.Result.Content.ReadAsStringAsync().Result;
                var models = JsonConvert.DeserializeObject<ResourceViewModel[]>(content);
                return models.ToList();
            }
        }
    }
}