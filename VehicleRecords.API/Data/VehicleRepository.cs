using System.Threading.Tasks;
using VehicleRecords.API.Models;
using System.Linq;
using System.Collections.Generic;

namespace VehicleRecords.API.Data
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly DataContext _context;
        public VehicleRepository(DataContext context)
        {
            _context = context;

        }
        public List<Vehicle> GetAllVehicles()
        {
            var vehicleRecords = _context.Vehicle.ToList();
            return vehicleRecords;
        }
    }
}