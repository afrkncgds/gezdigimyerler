public class Place
{
    public int PlaceId { get; set; }
    public string Name { get; set; }
    public ICollection<PlaceDetail> PlaceDetails { get; set; }
}

public class PlaceDetail
{
    public int PlaceDetailId { get; set; }
    public string Address { get; set; }
    public int PlaceId { get; set; }
    public Place Place { get; set; }
}
