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
                new Guid("3BE8E47E-5BDF-491C-8B8F-00173D6249AA"),
                new Guid("2FE43ED0-DBAA-4237-AEC0-00250094E163"),
                new Guid("DDA76E85-F9DA-4AC4-8B23-0032ADC82AA8")
            };
            using (var client = new HttpClient { BaseAddress = new Uri("https://apitest.laromedel.goteborgsregionen.se/PublicArticle/Get") })
            {
                var otherList = string.Join("&articleIds=", ids.Except(new List<Guid> { ids[0] }));
                var getParameters = $"?articleIds={ids[0]}&articleIds={otherList}";
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("applications/json"));

                var response = client.GetAsync(getParameters);

                var content = response.Result.Content.ReadAsStringAsync().Result;

                var models = JsonConvert.DeserializeObject<ResourceViewModel[]>(content);

                return models.ToList();
            }
        }
    }
}