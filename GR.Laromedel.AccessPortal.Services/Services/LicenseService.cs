using System.Collections.Generic;
using GR.Laromedel.AccessPortal.Services.Models;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;

namespace GR.Laromedel.AccessPortal.Services.Services
{
    public class LicenseService : ILicenseService
    {
        public List<LicenseViewModel> GetLicenses()
        {
            return new List<LicenseViewModel>
            {
                new LicenseViewModel
                {
                    Title = "Vägar till SO",
                    Description =
                        "Eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                new LicenseViewModel
                {
                    Title = "Levande Historia 8",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                },
                new LicenseViewModel
                {
                    Title = "Summit Matematik",
                    Description =
                        "Consectetur elit, sed do eiusmod tempor incididunt ut labore et Ut enim ad minim veniam"
                },
                new LicenseViewModel
                {
                    Title = "PULS Biologi",
                    Description =
                        "Adipiscing elit, sed do eiusmod tempor"
                },
                new LicenseViewModel
                {
                    Title = "Minecraft som pedagogiskt verktyg",
                    Description =
                        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                new LicenseViewModel
                {
                    Title = "Ess i svenska - Lärobok 8",
                    Description =
                        "Excepteur sint occaecat cupidatat non proident."
                },
            };
        }
    }
}
