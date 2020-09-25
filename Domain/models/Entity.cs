using System;

namespace Domain.models
{
    public class Entity
    {
        public string CreatedBy { get; set; } = "Prem";
        public string ModifiedBy { get; set; } = "Prem";
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime ModifiedAt { get; set; } = DateTime.Now;
        public string CreatedAtstr { get; set; }
    }

}