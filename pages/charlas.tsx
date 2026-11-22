import Head from 'next/head';
import Layout from '../components/Layout';

export default function Charlas() {
  return (
    <Layout>
      <Head>
        <title>Charlas · Mariana Alvarez Coach</title>
        <meta name="description" content="Charlas, conferencias y entrevistas de Mariana Alvarez sobre coaching, inteligencia emocional y transformación personal." />
      </Head>

      <div className="ma-page-header">
        <img
          src="https://static.wixstatic.com/media/d257b5_fee12f57b338475f9ad0a199d5a6fda9~mv2.jpg"
          alt="Charlas Mariana Alvarez"
          className="ma-page-header__img"
        />
        <div className="ma-page-header__overlay">
          <h1 className="ma-page-header__title">
            <span>Charlas</span>
          </h1>
        </div>
      </div>

      <section className="ma-section ma-section--light">
        <div className="ma-section__inner">
          <div className="ma-heading" data-reveal>
            <p className="ma-heading__eyebrow">Conferencias y entrevistas</p>
            <h2 className="ma-heading__title">
              El coaching en <em>acción</em>
            </h2>
            <div className="ma-heading__line" />
            <p className="ma-heading__desc">
              Comparto herramientas de coaching, inteligencia emocional y transformación personal
              en charlas, conferencias y entrevistas. Mirá y escuchame hablar sobre los temas que
              más me apasionan.
            </p>
          </div>

          <div className="ma-charla-video" data-reveal>
            <iframe
              src="https://www.youtube.com/embed/nndwIqlyW20"
              title="Charla Mariana Alvarez Coach"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: 'var(--texto-suave)', marginBottom: 24, fontSize: '0.95rem' }}>
              ¿Querés ver más contenido? Seguime en YouTube para no perderte las próximas charlas.
            </p>
            <a
              href="https://www.youtube.com/@coach.marianaalvarez"
              className="ma-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver canal de YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--dark">
        <div className="ma-section__inner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'white', marginBottom: 12 }}>
            ¿Querés que dé una charla en tu empresa o grupo?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: '1rem' }}>
            Consultame por WhatsApp y diseñamos una propuesta a medida.
          </p>
          <a
            href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Me%20gustar%C3%ADa%20consultar%20sobre%20una%20charla."
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
