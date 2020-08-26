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
                    Title = "Some title",
                    Description =
                        "Varius! Justo congue eos, itaque non consequuntur animi suscipit quisquam elementum rhoncus tempora recusandae habitasse excepteur? Urna labore qui nam, dolor! Incididunt! Metus quo sit sequi, perspiciatis, commodi ullamcorper quis exercitation odit. Nunc, habitant hymenaeos? Sagittis, arcu fringilla cursus pellentesque, feugiat doloribus, recusandae voluptatum necessitatibus nostrud? Sem illo? Cupidatat litora."
                },
                new LicenseViewModel
                {
                    Title = "Some other title",
                    Description =
                        "Varius! Justo congue eos, itaque non consequuntur animi suscipit quisquam elementum rhoncus tempora recusandae habitasse excepteur?"
                }
            };
        }
    }
}