using System;

namespace Domain.models
{
    public class Entity
    {
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }
        public string CreatedAtstr { get; set; }
    }

}