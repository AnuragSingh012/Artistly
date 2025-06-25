"use client";

import { createContext, useContext, useEffect, useState } from "react";
import staticArtists from "@/data/artists.json";

const ArtistContext = createContext();

export const useArtists = () => useContext(ArtistContext);

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("artists") || "[]");

    const merged = [
      ...stored,
      ...staticArtists.filter(
        (staticA) => !stored.some((s) => s.id === staticA.id)
      )
    ];

    setArtists(merged);
  }, []);

  const addArtist = (artist) => {
    const updated = [artist, ...artists];
    setArtists(updated);
    localStorage.setItem("artists", JSON.stringify(updated));
  };

  return (
    <ArtistContext.Provider value={{ artists, addArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};
