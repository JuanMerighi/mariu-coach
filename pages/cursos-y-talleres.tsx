import Head from 'next/head';
import Layout from '../components/Layout';

const FOTOS = [
  { src: '/img/cursos/curso1.png', alt: 'Cursos y talleres — Mariana Alvarez' },
  { src: '/img/cursos/curso2.png', alt: 'Taller de inteligencia emocional' },
  { src: '/img/cursos/curso3.jpeg', alt: 'Formación en coaching' },
];

export default function CursosYTalleres() {
  return (
    <Layout>
      <Head>
        <title>Cursos y Talleres · Mariana Alvarez Coach</title>
        <meta name="description" content="Cursos, talleres y charlas en empresas y grupos. Inteligencia emocional, liderazgo, comunicación y formación de coaches." />
      </Head>

      <div className="ma-page-header">
        <img
          src="https://static.wixstatic.com/media/d257b5_fee12f57b338475f9ad0a199d5a6fda9~mv2.jpg"
          alt="Cursos y talleres"
          className="ma-page-header__img"
        />
        <div className="ma-page-header__overlay">
          <h1 className="ma-page-header__title">
            Cursos y <span>Talleres</span>
          </h1>
        </div>
      </div>

      {/* Próximo taller */}
      <section className="ma-section ma-section--beige" id="proximo-taller">
        <div className="ma-section__inner">
          <div className="ma-taller" data-reveal>
            <div className="ma-taller__text">
              <p className="ma-heading__eyebrow">Próximo taller</p>
              <h2 className="ma-heading__title">
                Coaching: <em>El Arte de Acompañar</em>
              </h2>
              <div className="ma-heading__line" />
              <p className="ma-taller__desc">
                Un espacio para descubrir que el rol del coach no consiste en demostrar perfección
                ni resolverle la vida al cliente, sino en <strong>crear un espacio seguro de presencia,
                escucha activa y confianza</strong>, transformando tu mirada sobre las competencias.
              </p>

              <ul className="ma-taller__datos">
                <li><span>Fecha</span>5 de diciembre</li>
                <li><span>Horario</span>9 a 11 hs (Argentina)</li>
                <li><span>Modalidad</span>Abierto, gratuito y online</li>
                <li><span>Facilitan</span>Mariana Álvarez y Eliana Prieto</li>
                <li><span>Dirigido a</span>Coaches, estudiantes de coaching y quienes quieran saber de coaching</li>
                <li><span>Organiza</span>Coaching en dos</li>
              </ul>

              <a
                href="https://forms.gle/sXq1RjiVDJtXe6WX7"
                className="ma-btn-primary ma-taller__btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscribirme gratis
              </a>
            </div>

            <a
              href="https://forms.gle/sXq1RjiVDJtXe6WX7"
              className="ma-taller__flyer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inscribirme al taller Coaching: El Arte de Acompañar"
            >
              <img
                src="/img/cursos/taller-arte-de-acompanar.jpeg"
                alt="Flyer del taller Coaching: El Arte de Acompañar, con Mariana Álvarez y Eliana Prieto. 5 de diciembre, 9 hs Argentina. Abierto, gratuito y online."
                width={900}
                height={1600}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--light">
        <div className="ma-section__inner">
          <div className="ma-heading" data-reveal>
            <p className="ma-heading__eyebrow">Cursos disponibles</p>
            <h2 className="ma-heading__title">
              Cursos que podés <em>hacer conmigo</em>
            </h2>
            <div className="ma-heading__line" />
            <p className="ma-heading__desc">
              Facilito procesos dinámicos, cursos, talleres y charlas en empresas y grupos.
              También soy formadora de futuros coaches en la Escuela de coaching Lider Coach Profesional.
            </p>
          </div>

          <div className="ma-cursos-video" data-reveal>
            <video
              src="/video/necesito-venderme.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/img/cursos/curso3.jpeg"
              className="ma-cursos-video__player"
            />
          </div>

          <div className="ma-cursos-grid" data-reveal-stagger>
            {FOTOS.map((foto) => (
              <a
                key={foto.src}
                href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Me%20gustar%C3%ADa%20consultar%20sobre%20cursos%20y%20talleres."
                className="ma-cursos-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quiero este curso"
              >
                <img src={foto.src} alt={foto.alt} />
                <div className="ma-cursos-grid__overlay">
                  <span className="ma-cursos-grid__overlay-pill">¡Lo quiero!</span>
                </div>
              </a>
            ))}
          </div>

          <div className="ma-cursos-compra">
            <div className="ma-cursos-compra__text">
              <p className="ma-cursos-compra__eyebrow">¿Ya elegiste?</p>
              <h3 className="ma-cursos-compra__title">Escribime y arrancamos</h3>
              <p className="ma-cursos-compra__desc">Elegí el curso que más te interese y escribime por WhatsApp. Te cuento los detalles y lo dejamos agendado.</p>
            </div>
            <a
              href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Me%20gustar%C3%ADa%20consultar%20sobre%20cursos%20y%20talleres."
              className="ma-cursos-compra__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escribime por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--beige">
        <div className="ma-section__inner">
          <div className="ma-heading ma-heading--center" data-reveal>
            <p className="ma-heading__eyebrow">Temáticas disponibles</p>
            <h2 className="ma-heading__title">¿Sobre qué <em>trabajamos</em>?</h2>
            <div className="ma-heading__line" style={{ margin: '16px auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginTop: 40 }}>
            {[
              { title: 'Inteligencia Emocional', desc: 'Herramientas para gestionar emociones en el trabajo y la vida personal.' },
              { title: 'Liderazgo', desc: 'Comunicación efectiva, toma de decisiones y presencia para equipos.' },
              { title: 'Comunicación No Verbal', desc: 'Lectura e interpretación del lenguaje corporal en contextos profesionales.' },
              { title: 'Formación de Coaches', desc: 'Programa formativo en la Escuela Lider Coach Profesional.' },
              { title: 'Coaching de Ventas', desc: 'Herramientas de coaching aplicadas a equipos comerciales.' },
              { title: 'Customer Experience', desc: 'Metodología Disney aplicada a la experiencia del cliente.' },
              { title: 'Neurociencias', desc: 'Aplicación de neurociencias al desarrollo personal, la toma de decisiones y la gestión emocional.' },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                boxShadow: 'var(--shadow)',
                borderLeft: '3px solid var(--accent)',
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--brown)', marginBottom: 8, fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--texto-suave)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--dark">
        <div className="ma-section__inner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'white', marginBottom: 12 }}>
            ¿Organizamos algo juntos?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: '1rem' }}>
            Empresas, grupos y escuelas de coaching. Adaptamos la propuesta a tu necesidad.
          </p>
          <a
            href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Me%20gustar%C3%ADa%20consultar%20sobre%20cursos%20y%20talleres."
            className="ma-btn-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribime por WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
