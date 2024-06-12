using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class PlacesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public PlacesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Place>>> GetPlaces()
    {
        return await _context.Places.Include(p => p.PlaceDetails).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Place>> GetPlace(int id)
    {
        var place = await _context.Places.Include(p => p.PlaceDetails).FirstOrDefaultAsync(p => p.PlaceId == id);

        if (place == null)
        {
            return NotFound();
        }

        return place;
    }

    [HttpPost]
    public async Task<ActionResult<Place>> PostPlace(Place place)
    {
        _context.Places.Add(place);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetPlace), new { id = place.PlaceId }, place);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutPlace(int id, Place place)
    {
        if (id != place.PlaceId)
        {
            return BadRequest();
        }

        _context.Entry(place).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Places.Any(e => e.PlaceId == id))
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

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePlace(int id)
    {
        var place = await _context.Places.FindAsync(id);
        if (place == null)
        {
            return NotFound();
        }

        _context.Places.Remove(place);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
