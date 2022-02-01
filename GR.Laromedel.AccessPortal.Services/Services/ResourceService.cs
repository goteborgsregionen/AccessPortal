using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using GR.Laromedel.AccessPortal.Infrastructure.Models;
using GR.Laromedel.AccessPortal.Services.Configuration;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace GR.Laromedel.AccessPortal.Services.Services
{
    public class ResourceService : IResourceService
    {
        private readonly IConfiguration _configuration;

        public ResourceService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public List<ResourceViewModel> GetResources(string userId)
        {
            var licences = new List<LicenseModel>();

            var apiConfiguration = _configuration.GetSection(nameof(ServiceConfiguration)).Get<ServiceConfiguration>();

            using (var client = new HttpClient { BaseAddress = new Uri(apiConfiguration.LicensePortalUrl) })
            {
                client.DefaultRequestHeaders.Accept.Add(
                    new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json")
                );

                var getParameters = $"?id={userId}";
                var response = client.GetAsync(getParameters);


                var content = response.Result.Content.ReadAsStringAsync().Result;
                licences = JsonConvert.DeserializeObject<LicenseModel[]>(content).ToList();
            }

            using (var client = new HttpClient { BaseAddress = new Uri(apiConfiguration.LaromedelUrl)})
            {
                client.DefaultRequestHeaders.Accept.Add(
                    new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json")
                );

                var ids = licences.Select(x => x.ArticleId);

                var getParameters = "?articleIds=" + string.Join("&articleIds=", ids);
                var response = client.GetAsync(getParameters);

                var content = response.Result.Content.ReadAsStringAsync().Result;
                var models = JsonConvert.DeserializeObject<ResourceViewModel[]>(content).ToList();

                 models.ForEach(x => x.ResourceUri = licences.First(y => y.ArticleId == x.ArticleId).Url);

                 return models;
            }
        }
    }
}
