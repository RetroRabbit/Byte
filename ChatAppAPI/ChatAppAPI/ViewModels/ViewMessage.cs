using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChatAppAPI.ViewModels
{
    public class ViewMessage
    {
        [Required]
        public string Body { get; set; }

        [Required]
        public DateTime TimeStamp { get; set; }
    }
}
