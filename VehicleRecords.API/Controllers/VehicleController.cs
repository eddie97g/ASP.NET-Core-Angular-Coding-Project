using Microsoft.AspNetCore.Mvc;
using VehicleRecords.API.Data;
using System.Linq;

namespace VehicleRecords.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly IVehicleRepository _repo;
        public VehicleController(IVehicleRepository repo)
        {
            _repo = repo;


        }

        [HttpGet("all-records")]
        public IActionResult GetAllRecords()
        {
            var vehicles = _repo.GetAllVehicles();
            return Ok(vehicles);
        }
    }
}