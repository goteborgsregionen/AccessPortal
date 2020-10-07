using GR.Laromedel.AccessPortal.Services.Services.Contracts;
using GR.Laromedel.AccessPortal.Services.Services.Mocks;
using Lamar;

namespace GR.Laromedel.AccessPortal.Services.Init
{
    public static class IoC
    {
        public static void Initialize(ServiceRegistry x)
        {
            Business.Init.IoC.Initialize(x);

            x.Scan(scan =>
            {
                scan.TheCallingAssembly();
                scan.WithDefaultConventions();
            });

            // for now
            x.For<IResourceService>().Use<MockResourceService>();
        }
    }
}