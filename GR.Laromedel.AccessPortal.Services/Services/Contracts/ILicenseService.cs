using System.Collections.Generic;
using GR.Laromedel.AccessPortal.Services.Models;

namespace GR.Laromedel.AccessPortal.Services.Services.Contracts
{
    public interface ILicenseService
    {
        List<LicenseViewModel> GetLicenses();
    }
}