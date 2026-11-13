
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { brotherhoods } from "@/data/brotherhoods";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/hermandadesunidas"
    : "";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const europeanCountries = new Set([
  "Albania", "Andorra", "Austria", "Belarus", "Belgium",
  "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus",
  "Czechia", "Denmark", "Estonia", "Finland", "France",
  "Germany", "Greece", "Hungary", "Iceland", "Ireland",
  "Italy", "Latvia", "Liechtenstein", "Lithuania",
  "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro",
  "Netherlands", "North Macedonia", "Norway", "Poland",
  "Portugal", "Romania", "San Marino", "Serbia", "Slovakia",
  "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine",
  "United Kingdom", "Vatican",
]);

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

export default function EuropeMap() {
  const [selectedCountry, setSelectedCountry] = useState("Germany");
  const [selectedBrotherhood, setSelectedBrotherhood] = useState<string | null>(null);
    useEffect(() => {
    function handleBrotherhoodSelection(event: Event) {
      const customEvent = event as CustomEvent<{
        country: string;
        brotherhoodId: string;
      }>;

      const { country, brotherhoodId } = customEvent.detail;

      setSelectedCountry(country);

      const selected = brotherhoods.find(
        (item) => item.id === brotherhoodId
      );

      setSelectedBrotherhood(selected?.name ?? null);
    }

    window.addEventListener(
      "select-brotherhood-country",
      handleBrotherhoodSelection
    );

    return () => {
      window.removeEventListener(
        "select-brotherhood-country",
        handleBrotherhoodSelection
      );
    };
  }, []);

  const selectedBrotherhoods = brotherhoods.filter(
    (item) => item.country === selectedCountry
  );
  const countryBrotherhoodCount = brotherhoods.filter(
  (item) => item.country === selectedCountry
).length;

  const countryName =
    countryNames[selectedCountry] || selectedCountry;

  const brotherhoodCount = selectedBrotherhoods.length;

  function selectCountry(country: string) {
    setSelectedCountry(country);
    setSelectedBrotherhood(null);
  }

  return (
    <section
  className="europe-map-section section-padding"
  id="hermandades">
      <div className="container">
        <ScrollReveal>
        <div className="section-heading">
          <p className="eyebrow">NUESTRA PRESENCIA EN EUROPA</p>

          <h2 className="section-title">
            Una devoción que nos une
          </h2>

          <p>
            Selecciona un país en el mapa para descubrir
            sus hermandades.
          </p>

          <p className="map-interaction-hint">
            <span>✦</span> Explora Europa: haz clic sobre un país
          </p>
        </div></ScrollReveal>

        <ScrollReveal>
  <div className="europe-map">
    <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              center: [15, 54],
              scale: 650,
            }}
            width={900}
            height={580}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const country =
                    String(geo.properties?.name ?? "");

                  const isEuropean =
                    europeanCountries.has(country);

                  const isSelected =
                    selectedCountry === country;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        if (isEuropean) {
                          selectCountry(country);
                        }
                      }}
                      style={{
                        fill: isSelected
                          ? "#321044"
                          : isEuropean
                            ? "#E9DFD0"
                            : "#F7F3ED",
                        stroke: "#C5A15D",
                        strokeWidth: 0.7,
                        outline: "none",
                      }}
                    />
                  );
                })
              }
            </Geographies>
              </ComposableMap>
  </div>
</ScrollReveal>

        <ScrollReveal>
        <div className="country-results" key={selectedCountry}>
          <p className="eyebrow">NUESTRA COMUNIDAD</p>

          <h3>
            Hermandades de {countryName}
          </h3>

          <p className="country-count">
            {brotherhoodCount}{" "}
            {brotherhoodCount === 1
              ? "hermandad registrada"
              : "hermandades registradas"}
          </p>

          {selectedBrotherhoods.length > 0 ? (
            <div className="country-brotherhoods">
              {selectedBrotherhoods.map((item, index) => (
                <button
                  type="button"
                  className={`country-brotherhood-card ${
                    selectedBrotherhood === item.name
                      ? "is-selected"
                      : ""
                  }`}
                  key={item.name}
                  style={{ animationDelay: `${index * 120}ms` }}
                  onClick={() =>
                    setSelectedBrotherhood(item.name)
                  }
                  aria-pressed={selectedBrotherhood === item.name}
                  aria-label={`Seleccionar hermandad de ${item.name}`}
                >
                  <div className="country-card-image">
                    <Image
                      src={`${basePath}/images/${item.image}`}
                      alt={`Escudo de la hermandad de ${item.name}`}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                  </div>

                  <div className="country-card-info">
                    <p>{countryName}</p>
                    <h4>{item.name}</h4>
                    <span>↗</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="empty-country">
              Estamos recopilando la información de las
              hermandades de este país. Próximamente
              encontrarás aquí sus perfiles.
            </p>
          )}

          {selectedBrotherhood && (
            <p className="brotherhood-selection-note">
              Has seleccionado la hermandad de {selectedBrotherhood}.
              Próximamente podrás consultar su ficha completa.
            </p>
          )}
        </div></ScrollReveal>
      </div>
    </section>
  );
}
