import Link from "next/link";
import { Button } from "./ui/button";

const ArtistCard = ({ artist }) => {
  const {
    id,
    name = "Unknown",
    category = "N/A",
    location = "N/A",
    price = "N/A"
  } = artist || {};

  return (
    <Link href={`/artist/${id}`}>
      <li className="artist-card group">
        <div className="flex-between gap-5">
          <p className="artist-card_location">{location}</p>
          <div className="flex gap-1.5">
            <div className="text-xs bg-gray-200 px-2 py-0.5 rounded">
              {category}
            </div>
          </div>
        </div>

        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <p className="text-16-medium line-clamp-1 truncate max-w-[180px]">{name}</p>
            <h3 className="text-26-semibold">{category}</h3>
          </div>
          <div className="artist-card_profile">
            {name.charAt(0)}
          </div>
        </div>

        <p className="artist-card_price">{price}</p>
        <Button className='artist-card_btn'>Ask for Quote</Button>
      </li>
    </Link>
  );
};

export default ArtistCard;
