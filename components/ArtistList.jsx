"use client";

import ArtistCard from "./ArtistCard";
import { useArtists } from "@/context/ArtistContext";

const ArtistList = ({ query }) => {
  const { artists } = useArtists();

  const filtered = (query
    ? artists.filter((artist) =>
        artist?.name?.toLowerCase?.().includes(query) ||
        artist?.category?.toLowerCase?.().includes(query) ||
        artist?.location?.toLowerCase?.().includes(query)
      )
    : artists
  ).sort((a, b) => {
    const aTime = typeof a.id === "string" ? 0 : a.id;
    const bTime = typeof b.id === "string" ? 0 : b.id;
    return bTime - aTime;
  });

  return (
    <ul className="mt-7 card_grid">
      {filtered.map((artist, index) => (
        <ArtistCard key={artist.id || `${artist.name}-${index}`} artist={artist} />
      ))}
    </ul>
  );
};

export default ArtistList;
