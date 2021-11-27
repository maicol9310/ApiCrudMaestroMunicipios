using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiCrudMaestro.Context;
using ApiCrudMaestro.Models;

namespace ApiCrudMaestro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MunicipiosController : ControllerBase
    {
        private readonly ApiCrudMaestroDbContext _context;

        public MunicipiosController(ApiCrudMaestroDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Municipios>>> GetMunicipios()
        {
            return await _context.Municipios.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Municipios>> GetMunicipios(int id)
        {
            var municipios = await _context.Municipios.FindAsync(id);

            if (municipios == null)
            {
                return NotFound();
            }

            return municipios;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutMunicipios(int id, Municipios municipios)
        {
            if (id != municipios.ConsecutivoInterno)
            {
                return BadRequest();
            }

            _context.Entry(municipios).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MunicipiosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Municipios>> PostMunicipios(Municipios municipios)
        {
            _context.Municipios.Add(municipios);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMunicipios", new { id = municipios.ConsecutivoInterno }, municipios);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMunicipios(int id)
        {
            var municipios = await _context.Municipios.FindAsync(id);
            if (municipios == null)
            {
                return NotFound();
            }

            _context.Municipios.Remove(municipios);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MunicipiosExists(int id)
        {
            return _context.Municipios.Any(e => e.ConsecutivoInterno == id);
        }
    }
}
