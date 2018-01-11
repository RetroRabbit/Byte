using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatAppAPI.Models;

namespace ChatAppAPI.DataContext
{
    public class ChatApiDbContext : DbContext
    {
        public ChatApiDbContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<Message> Messages { get; set; }
    }
}

