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
            var licences = new List<LicenseModel>();
            
            //TODO: get userId
            var userId ="BE33FDED-73B1-4741-9550-6BB28C30C661";


            using (var client = new HttpClient { BaseAddress = new Uri("https://localhost:55001/licenses/Get")})
            {
                client.DefaultRequestHeaders.Accept.Add(
                    new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json")
                );

                var getParameters = $"?id={userId}";
                var response = client.GetAsync(getParameters);

                var content = response.Result.Content.ReadAsStringAsync().Result;
                licences = JsonConvert.DeserializeObject<LicenseModel[]>(content).ToList();
            }

            using (var client = new HttpClient { BaseAddress = new Uri("https://apitest.laromedel.goteborgsregionen.se/PublicArticle/Get")})
            {
                client.DefaultRequestHeaders.Accept.Add(
                    new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json")
                );

                var ids = licences.Select(x => x.ArticleId);

                var getParameters = "?articleIds=" + string.Join("&articleIds=", ids);
                var response = client.GetAsync(getParameters);

                var content = response.Result.Content.ReadAsStringAsync().Result;
                var models = JsonConvert.DeserializeObject<ResourceViewModel[]>(content).ToList();

                 models.ForEach(x => x.ResourceUri = licences.Single(y => y.ArticleId == x.ArticleId).Url);

                 return models;
            }
        }
    }
}