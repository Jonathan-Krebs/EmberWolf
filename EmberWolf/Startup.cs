using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EmberWolf.Startup))]
namespace EmberWolf
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
