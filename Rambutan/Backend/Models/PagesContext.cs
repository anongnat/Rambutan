using System.Data.Entity;

namespace Backend.Models
{
    public class PagesContext : DbContext
    {
        public DbSet<Pages> Pages { get; set; }
    }


    public class Pages
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;    

        public DateTimeOffset CreatedDate { get; set; }

        public string Created { get; set; } = string.Empty;
    }
}
