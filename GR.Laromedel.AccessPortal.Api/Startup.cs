using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GR.Laromedel.AccessPortal.Api.Configuration;
using GR.Laromedel.AccessPortal.Api.Init;
using Lamar;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace GR.Laromedel.AccessPortal.Api
{
    public class Startup
    {
        readonly string AllowOrigins = "_allowOrigins";
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureContainer(ServiceRegistry services)
        {
            IoC.Initialize(services);
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var apiConfiguration = _configuration.GetSection(nameof(ApiConfiguration)).Get<ApiConfiguration>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = apiConfiguration.Authority;

                    // if you are using API resources, you can specify the name here
                    options.Audience = apiConfiguration.Audience;
                });

            services.AddCors(options =>
            {
                options.AddPolicy(name: AllowOrigins,
                                  builder => 
                                  {
                                      builder.WithOrigins(apiConfiguration.SPAClient)
                                          .AllowAnyHeader()
                                          .AllowAnyMethod();
                                  });
            });

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseExceptionHandler("/api/errors/500");
            app.UseStatusCodePagesWithReExecute("/api/errors/{0}");

            app.UseHttpsRedirection();

            app.UseCors(AllowOrigins);

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
