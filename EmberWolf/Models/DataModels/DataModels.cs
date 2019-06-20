using EmberWolf.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace EmberWolf.Database
{
    public class DataModel : DbContext
    {
        public DataModel() : base("DataModels")
        {
        }

        public DbSet<Layout> Layouts { get; set; }
        public DbSet<Layout_Section> Layout_Sections { get; set; }
        public DbSet<Resume_Item> Resume_Items { get; set; }
        public DbSet<Resume_Info> Resume_Info { get; set; }
        public DbSet<Portfolio_Item> Portfolio_Items { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }
}