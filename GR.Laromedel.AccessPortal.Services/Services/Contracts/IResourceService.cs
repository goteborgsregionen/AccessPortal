using System.Collections.Generic;
using GR.Laromedel.AccessPortal.Services.Models;

namespace GR.Laromedel.AccessPortal.Services.Services.Contracts
{
    public interface IResourceService
    {
        List<ResourceViewModel> GetResources();
    }
}