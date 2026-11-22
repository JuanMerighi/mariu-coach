import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const CREDENCIALES = [
  'Coach Ejecutivo y de Liderazgo',
  'Coach Profesional ACC — ICF (International Coaching Federation)',
  'Coach Inmobiliario',
  'Coach en Neurociencias',
  'Analista en Comunicación No Verbal',
  'Diplomada en Inteligencia Emocional, Consciencia Corporal y Neurociencias aplicadas, PNL',
  'Certificada en Coaching de Ventas',
  'Customer Experience (Disney)',
];

export default function SobreMi() {
  return (
    <Layout>
      <Head>
        <title>Sobre mí · Mariana Alvarez Coach</title>
        <meta name="description" content="Conocé a Mariana Alvarez, Coach Profesional ACC certificada por la ICF, especialista en Inteligencia Emocional, PNL y Neurociencias." />
      </Head>

      <div className="ma-page-header">
        <img
          src="https://static.wixstatic.com/media/d257b5_fee12f57b338475f9ad0a199d5a6fda9~mv2.jpg"
          alt="Mariana Alvarez"
          className="ma-page-header__img"
        />
        <div className="ma-page-header__overlay">
          <h1 className="ma-page-header__title">
            Sobre <span>mí</span>
          </h1>
        </div>
      </div>

      <section className="ma-section ma-section--light">
        <div className="ma-section__inner">
          <div className="ma-sobre">
            <div className="ma-sobre__img-wrap">
              <img
                src="https://static.wixstatic.com/media/d257b5_9bdf0c79568941ffaf2c949106ea780c~mv2.jpeg"
                alt="Mariana Alvarez Coach"
              />
            </div>

            <div className="ma-sobre__text">
              <div className="ma-heading" data-reveal>
                <p className="ma-heading__eyebrow">Mi historia</p>
                <h2 className="ma-heading__title">Hola, soy <em>Mariana</em></h2>
                <div className="ma-heading__line" />
              </div>

              <p>
                En medio de la pandemia de Covid, me certifiqué como Analista en Comunicación No Verbal y más luego en Coach Ontológico Profesional ACC con el aval internacional más alto en International Coaching Federation; también soy Coach en Neurociencias, me diplomé en Neurociencias aplicadas e Inteligencia Emocional y Consciencia Corporal, Liderazgo, Dinámicas para Equipos, Coaching de ventas y Storytelling & Customer Experience Basada en Disney y PNL. Además, me certifiqué como Coach Ejecutivo y de Liderazgo y como Coach Inmobiliario.
              </p>
              <p>
                Facilito procesos dinámicos, cursos, talleres y charlas en Empresas y soy Formadora de futuros Coaches en la Escuela de coaching Lider Coach Profesional.
              </p>
              <p>
                Nací en Buenos Aires en 1971. Soy mamá de tres hijos y tuve una historia de vida que me enseñó de primera mano lo que significa atravesar momentos difíciles y salir transformada: trabajé con personas con VIH, acompañé procesos post-cirugía bariátrica y superé un cáncer de tiroides.
              </p>
              <p>
                Esas experiencias me hicieron quien soy hoy: una coach que acompaña desde un lugar genuino, con herramientas profesionales y mucha humanidad.
              </p>

              <div className="ma-credenciales" data-reveal-stagger>
                {CREDENCIALES.map((c) => (
                  <div key={c} className="ma-credencial">{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--dark">
        <div className="ma-section__inner" style={{ textAlign: 'center' }}>
          <h2 className="ma-heading__title ma-heading__title--white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'white', marginBottom: 12 }}>
            ¿Te acompaño?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: '1rem' }}>
            Escribime y coordinamos tu primera sesión.
          </p>
          <a
            href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n."
            className="ma-btn-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendá tu sesión
          </a>
        </div>
      </section>
    </Layout>
  );
}
