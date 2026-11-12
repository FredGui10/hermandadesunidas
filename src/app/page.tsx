
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/hermandadesunidas"
    : "";

const brotherhoods = [
  { name: "Hamburgo", country: "Alemania", image: "sm-hamburgo.jpeg" },
  { name: "Hannover", country: "Alemania", image: "sm-hannover.jpeg" },
  { name: "Hospitalet", country: "España", image: "sm-hospitalet.jpeg" },
  { name: "Madrid", country: "España", image: "sm-madrid.jpeg" },
  { name: "Majadahonda", country: "España", image: "sm-majadahonda.jpeg" },
  { name: "Sevilla", country: "España", image: "sm-sevilla.jpeg" },
  { name: "Torino", country: "Italia", image: "sm-torino.jpeg" },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand">
            <Image
              src={`${basePath}/images/sm-hermandadesunidas.jpeg`}
              alt="Emblema de Hermandades Unidas"
              width={58}
              height={58}
              className="brand-logo"
            />
            <span>
              <strong>HERMANDADES UNIDAS</strong>
              <small>DEL SEÑOR DE LOS MILAGROS · EUROPA</small>
            </span>
          </a>

          <nav className="main-nav">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#hermandades">Hermandades</a>
            <a href="#historia">Historia</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a href="#hermandades" className="header-button">
            DIRECTORIO <span>↗</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <Image
          src={`${basePath}/images/sm-principal.jpeg`}
          alt="Multitud reunida en una celebración del Señor de los Milagros"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />

        <div className="hero-overlay" />

        <div className="container hero-content">
          <ScrollReveal>
            <p className="eyebrow">FE · TRADICIÓN · HERMANDAD</p>
            <h1>
              Unidos por una
              <br />
              misma <em>devoción.</em>
            </h1>
            <div className="gold-line" />
            <p className="hero-description">
              Una comunidad de hermandades que mantiene viva
              la fe y la tradición del Señor de los Milagros
              en Europa.
            </p>
            <a href="#hermandades" className="primary-button">
              DESCUBRIR LAS HERMANDADES <span>→</span>
            </a>
          </ScrollReveal>
        </div>

        <div className="hero-caption">
          UNA SOLA FE · MUCHAS CIUDADES · UN MISMO SENTIMIENTO
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro section-padding" id="nosotros">
        <div className="container intro-grid">
          <ScrollReveal>
            <p className="eyebrow">NUESTRA IDENTIDAD</p>
            <h2 className="section-title">
              La fe nos une.
              <br />
              La hermandad nos fortalece.
            </h2>
            <div className="gold-line" />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="intro-text">
              Somos una comunidad que reúne a las hermandades
              del Señor de los Milagros presentes en Europa.
              Unidos por una misma devoción, trabajamos para
              preservar nuestras tradiciones, fortalecer
              nuestros lazos y transmitir nuestra fe a las
              nuevas generaciones.
            </p>
            <a href="#historia" className="text-link">
              CONOCE NUESTRA HISTORIA <span>↗</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* BROTHERHOODS */}
      <section className="brotherhood-section section-padding" id="hermandades">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <p className="eyebrow">NUESTRA COMUNIDAD EUROPEA</p>
              <h2 className="section-title">
                Hermandades que nos unen
              </h2>
              <p>
                Descubre las comunidades que mantienen viva
                esta devoción en diferentes ciudades de Europa.
              </p>
            </div>
          </ScrollReveal>

          <div className="brotherhood-grid">
            {brotherhoods.map((item, index) => (
              <ScrollReveal key={item.name} delay={(index % 3) * 100}>
                <article className="brotherhood-card">
                  <div className="card-image">
                    <Image
                      src={`${basePath}/images/${item.image}`}
                      alt={`Emblema de la hermandad de ${item.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="card-info">
                    <p>{item.country}</p>
                    <h3>{item.name}</h3>
                    <span className="card-arrow">↗</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="directory-note">
            Estas son algunas de las hermandades que forman parte
            de nuestra comunidad. El directorio se ampliará a
            medida que se incorporen y validen sus perfiles.
          </p>
        </div>
      </section>

      {/* HISTORY */}
      <section className="history-section section-padding" id="historia">
        <div className="container history-grid">
          <ScrollReveal>
            <div className="history-image">
              <Image
                src={`${basePath}/images/sm-image1.jpeg`}
                alt="Espacio de devoción al Señor de los Milagros"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="history-copy">
              <p className="eyebrow">NUESTRA DEVOCIÓN</p>
              <h2 className="section-title">
                Una tradición que cruza fronteras.
              </h2>
              <div className="gold-line" />
              <p>
                Lejos de nuestra tierra de origen, la devoción
                al Señor de los Milagros sigue reuniendo a
                familias y comunidades. Cada hermandad es
                testimonio de una fe que permanece viva y
                encuentra nuevos caminos para crecer.
              </p>
              <a href="#contacto" className="text-link">
                CONOCE NUESTRA MISIÓN <span>↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing-section" id="contacto">
        <ScrollReveal>
          <p className="eyebrow">HERMANDADES UNIDAS · EUROPA</p>
          <h2>
            Amar es servir.
            <br />
            Unidos en la fe.
          </h2>
          <a href="mailto:contacto@hermandadesunidas.eu" className="closing-link">
            CONTACTAR CON NOSOTROS <span>→</span>
          </a>
        </ScrollReveal>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Hermandades Unidas del Señor de los Milagros en Europa.</p>
          <p>Fe · Tradición · Unidad</p>
        </div>
      </footer>
    </main>
  );
}
