
"use client";

import { useMemo, useState } from "react";
import { brotherhoods } from "@/data/brotherhoods";

const countryNames: Record<string, string> = {
  Germany: "Alemania",
  Spain: "España",
  Italy: "Italia",
  France: "Francia",
  Portugal: "Portugal",
  Netherlands: "Países Bajos",
  Belgium: "Bélgica",
  Switzerland: "Suiza",
  Austria: "Austria",
  Poland: "Polonia",
  Sweden: "Suecia",
  Norway: "Noruega",
  Denmark: "Dinamarca",
  Finland: "Finlandia",
  Ireland: "Irlanda",
  "United Kingdom": "Reino Unido",
};

export default function BrotherhoodSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
 
  const results = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("es");

    if (!search) return [];

    return brotherhoods.filter((item) => {
      const country =
        countryNames[item.country] || item.country;

      return (
        item.name.toLocaleLowerCase("es").includes(search) ||
        country.toLocaleLowerCase("es").includes(search) ||
        item.country.toLocaleLowerCase("es").includes(search) ||
        item.city?.toLocaleLowerCase("es").includes(search)
      );
    }).slice(0, 6);
  }, [query]);

  function selectBrotherhood(country: string, brotherhoodId: string) {
  setIsOpen(false);
  setQuery("");

  window.dispatchEvent(
    new CustomEvent("select-brotherhood-country", {
      detail: { country, brotherhoodId },
    })
  );

  document.getElementById("hermandades")?.scrollIntoView({
    behavior: "smooth",
  });
}

  return (
    <div className="brotherhood-search">
      <div className="search-input-wrapper">
        <span className="search-icon" aria-hidden="true">⌕</span>

        <input
          type="search"
          value={query}
          placeholder="Buscar hermandad..."
          aria-label="Buscar hermandad por ciudad o país"
          aria-expanded={isOpen}
          onFocus={() => setIsOpen(true)}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
            }
          }}
        />
      </div>

      {isOpen && query.trim() && (
        <div className="search-results">
          {results.length > 0 ? (
            results.map((item) => (
              <button
                type="button"
                className="search-result"
                key={item.id}
                onClick={() => selectBrotherhood(item.country, item.id)}
              >
                <span className="search-result-name">
                  {item.name}
                </span>
                <span className="search-result-country">
                  {countryNames[item.country] || item.country}
                </span>
              </button>
            ))
          ) : (
            <p className="search-empty">
              No encontramos hermandades con ese nombre.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
