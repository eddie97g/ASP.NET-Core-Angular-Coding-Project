using System.ComponentModel.DataAnnotations;

namespace VehicleRecords.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set;}

        [Required]
        public string Password { get; set; }
    }
}