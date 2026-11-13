
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import EuropeMap from "@/components/EuropeMap";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/hermandadesunidas"
    : "";

const contactInfo = {
  contacts: [
    {
      name: "Hno. Luis Bustillos",
      role: "Coordinador General",
      phone: "+33 6 50 96 23 78",
    },
    {
      name: "Hno. Edgar Medina",
      role: "Coordinador Adjunto",
      phone: "+49 176 473 573 31",
    },
    {
      name: "Hno. José Medina",
      role: "Secretario",
      phone: "+34 614 39 95 04",
    },
  ],
  email: "hermandadesunidaseuropa@gmail.com",
  facebook: "Hermandades Unidas del Señor de los Milagros en Europa",
};

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
<EuropeMap />

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

      {/* CONTACT */}
      <section className="contact-section section-padding" id="contacto">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <p className="eyebrow">ESTAMOS PARA SERVIR</p>
              <h2 className="section-title">
                Conectemos nuestras hermandades.
              </h2>
              <p>
                Para consultas, información y comunicación institucional,
                ponemos a tu disposición nuestros canales de contacto.
              </p>
            </div>
          </ScrollReveal>

          <div className="contact-grid">
            <ScrollReveal>
              <div className="contact-intro">
                <p className="eyebrow">HERMANDADES UNIDAS · EUROPA</p>
                <h3>Una misma fe, siempre en contacto.</h3>
                <p>
                  Estamos abiertos a recibir consultas y mensajes de
                  hermandades, comunidades y personas que comparten
                  nuestra devoción al Señor de los Milagros.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="contact-details">
{contactInfo.contacts.map((person) => (
  <div className="contact-item" key={person.name}>
    <span className="contact-icon">☎</span>
    <div className="contact-person">
      <p>{person.role}</p>
      <strong>{person.name}</strong>
      <a href={`tel:${person.phone.replaceAll(" ", "")}`}>
        {person.phone}
      </a>
    </div>
  </div>
))}


                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  <div>
                    <p>Correo electrónico</p>
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">f</span>
                  <div>
                    <p>Facebook</p>
                    <span>{contactInfo.facebook}</span>
                  </div>
                </div>

                <div className="contact-note">
                  <span>FE · TRADICIÓN · UNIDAD</span>
                  <p>
                    Unidos por nuestra devoción y comprometidos
                    con nuestras comunidades en Europa.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          
          </div>

          {/* FORMULARIO DE CONTACTO */}
          <ScrollReveal>
            <div className="contact-form-wrapper">
              <div className="contact-form-heading">
                <p className="eyebrow">ESCRÍBENOS</p>
                <h3>Estamos encantados de escucharte.</h3>
                <p>
                  Envíanos tu consulta o mensaje. Nuestro equipo
                  recibirá tu comunicación a través del formulario.
                </p>
              </div>

              <form
                className="contact-form"
                action="https://formspree.io/f/xbgolgdo"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Nuevo mensaje desde la web de Hermandades Unidas"
                />

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Nombre completo</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email">Correo electrónico</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="nombre@correo.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">Asunto</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="asunto"
                    placeholder="¿Sobre qué deseas escribirnos?"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Mensaje</label>
                  <textarea
                    id="contact-message"
                    name="mensaje"
                    rows={6}
                    placeholder="Escribe aquí tu mensaje..."
                    required
                  />
                </div>

                <button type="submit" className="contact-submit">
                  ENVIAR MENSAJE <span>→</span>
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
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
