using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Place> Places { get; set; }
    public DbSet<PlaceDetail> PlaceDetails { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Place>()
            .HasMany(p => p.PlaceDetails)
            .WithOne(d => d.Place)
            .HasForeignKey(d => d.PlaceId);
    }
}
