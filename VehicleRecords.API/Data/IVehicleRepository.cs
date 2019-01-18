using System.Collections.Generic;
using System.Threading.Tasks;
using VehicleRecords.API.Models;

namespace VehicleRecords.API.Data
{
    public interface IVehicleRepository
    {
         List<Vehicle> GetAllVehicles();
    }
}