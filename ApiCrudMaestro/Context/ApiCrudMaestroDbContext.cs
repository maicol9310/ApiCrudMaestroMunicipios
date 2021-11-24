using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiCrudMaestro.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiCrudMaestro.Context
{
    public class ApiCrudMaestroDbContext: DbContext
    {
        public ApiCrudMaestroDbContext(DbContextOptions<ApiCrudMaestroDbContext> options)
            : base(options)
        {
            
        }

        public DbSet<Municipios> Municipios { get; set; }
    }
}
