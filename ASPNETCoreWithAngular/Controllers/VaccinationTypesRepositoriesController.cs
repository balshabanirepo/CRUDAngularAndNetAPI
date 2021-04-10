using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataRepository;
using DataRepository.GateWay;
using Microsoft.AspNetCore.Cors;

namespace WebAPIToBeAccessedByAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   //// [EnableCors("_myAllowSpecificOrigins")]
    public class VaccinationTypesRepositoriesController : ControllerBase
    {
        private readonly DbConext _context;

        public VaccinationTypesRepositoriesController(DbConext context)
        {
            _context = context;
        }

        // GET: api/VaccinationTypesRepositories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VaccinationTypesRepository>>> GetVaccinationTypes()
        {
            return await _context.VaccinationTypes.ToListAsync();
        }

        // GET: api/VaccinationTypesRepositories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VaccinationTypesRepository>> GetVaccinationTypesRepository(int id)
        {
            var vaccinationTypesRepository = await _context.VaccinationTypes.FindAsync(id);

            if (vaccinationTypesRepository == null)
            {
                return NotFound();
            }

            return vaccinationTypesRepository;
        }

        // PUT: api/VaccinationTypesRepositories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVaccinationTypesRepository(int id, VaccinationTypesRepository vaccinationTypesRepository)
        {
            if (id != vaccinationTypesRepository.Id)
            {
                return BadRequest();
            }

            _context.Entry(vaccinationTypesRepository).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VaccinationTypesRepositoryExists(id))
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

        // POST: api/VaccinationTypesRepositories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<VaccinationTypesRepository>> PostVaccinationTypesRepository(VaccinationTypesRepository vaccinationTypesRepository)
        {
            _context.VaccinationTypes.Add(vaccinationTypesRepository);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVaccinationTypesRepository", new { id = vaccinationTypesRepository.Id }, vaccinationTypesRepository);
        }

        // DELETE: api/VaccinationTypesRepositories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<VaccinationTypesRepository>> DeleteVaccinationTypesRepository(int id)
        {
            var vaccinationTypesRepository = await _context.VaccinationTypes.FindAsync(id);
            if (vaccinationTypesRepository == null)
            {
                return NotFound();
            }

            _context.VaccinationTypes.Remove(vaccinationTypesRepository);
            await _context.SaveChangesAsync();

            return vaccinationTypesRepository;
        }

        private bool VaccinationTypesRepositoryExists(int id)
        {
            return _context.VaccinationTypes.Any(e => e.Id == id);
        }
    }
}
