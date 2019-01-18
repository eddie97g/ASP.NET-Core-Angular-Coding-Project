namespace VehicleRecords.API.Models
{
    public class Vehicle
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Color { get; set; }
        public double Miles { get; set; }
        public string Description { get; set; }
    }
}