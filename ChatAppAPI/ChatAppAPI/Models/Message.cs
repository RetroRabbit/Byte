using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChatAppAPI.Models
{
    public class Message
    {
        public int Id { get; set; }

        [Required]
        public string Body { get; set; }

        [Required]
        public DateTime Timestamp { get; set; }
    }
}
