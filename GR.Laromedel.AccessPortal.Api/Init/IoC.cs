using Lamar;

namespace GR.Laromedel.AccessPortal.Api.Init
{
    public static class IoC
    {
        public static void Initialize(ServiceRegistry x)
        {
            x.Scan(scan =>
            {
                scan.TheCallingAssembly();
                scan.WithDefaultConventions();
            });

            Services.Init.IoC.Initialize(x);
        }
    }
}