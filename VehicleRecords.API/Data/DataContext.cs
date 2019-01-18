using Microsoft.EntityFrameworkCore;
using VehicleRecords.API.Models;

namespace VehicleRecords.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Vehicle> Vehicle { get; set; }
        public DbSet<User> Users { get; set; }
    }
}