import Head from 'next/head';
import Layout from '../components/Layout';

const PASOS = [
  {
    num: '1',
    title: 'Tomás contacto',
    text: 'Me escribís por WhatsApp o email y coordinamos un primer encuentro sin compromiso.',
  },
  {
    num: '2',
    title: 'Elegís el horario',
    text: 'Me decís cuándo podés y coordinamos el día y hora que mejor te quede.',
  },
  {
    num: '3',
    title: 'Agendamos',
    text: 'Confirmás tu sesión con anticipación. Cada encuentro dura entre 40 minutos y 1 hora.',
  },
  {
    num: '4',
    title: 'Empezamos',
    text: 'En un espacio de confianza y confidencialidad absoluta, trabajamos juntos en lo que necesitás.',
  },
];

export default function ComoFunciona() {
  return (
    <Layout>
      <Head>
        <title>Cómo funciona · Mariana Alvarez Coach</title>
        <meta name="description" content="Conocé cómo son las sesiones de coaching con Mariana Alvarez. Simple, flexible y adaptado a tu realidad." />
      </Head>

      <div className="ma-page-header">
        <img
          src="https://static.wixstatic.com/media/d257b5_fee12f57b338475f9ad0a199d5a6fda9~mv2.jpg"
          alt="Cómo funciona el coaching"
          className="ma-page-header__img"
        />
        <div className="ma-page-header__overlay">
          <h1 className="ma-page-header__title">
            Cómo <span>funciona</span>
          </h1>
        </div>
      </div>

      <section className="ma-section ma-section--light">
        <div className="ma-section__inner">
          <div className="ma-heading ma-heading--center" data-reveal>
            <p className="ma-heading__eyebrow">El proceso</p>
            <h2 className="ma-heading__title">¿Cómo son las sesiones?</h2>
            <div className="ma-heading__line" style={{ margin: '16px auto' }} />
            <p className="ma-heading__desc">Simple, flexible y adaptado a tu realidad.</p>
          </div>

          <div className="ma-pasos" data-reveal-stagger>
            {PASOS.map((paso) => (
              <div key={paso.num} className="ma-pasos__item">
                <div className="ma-pasos__num">{paso.num}</div>
                <h3>{paso.title}</h3>
                <p>{paso.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--beige">
        <div className="ma-section__inner">
          <div className="ma-heading ma-heading--center">
            <p className="ma-heading__eyebrow">Modalidad</p>
            <h2 className="ma-heading__title"><em>Sesiones virtuales</em></h2>
            <div className="ma-heading__line" style={{ margin: '16px auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 40 }}>
            {[
              { icon: '💻', title: 'Virtual', desc: 'Sesiones por Zoom, Skype o videollamada de WhatsApp.' },
              { icon: '⏱️', title: 'Duración', desc: 'Entre 40 minutos y 1 hora por sesión.' },
              { icon: '🌎', title: 'Para todo el mundo', desc: 'Desde cualquier parte del mundo, sin importar la zona horaria.' },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                boxShadow: 'var(--shadow)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--brown)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--texto-suave)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--dark">
        <div className="ma-section__inner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'white', marginBottom: 12 }}>
            ¿Estás listo/a para dar el primer paso?
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
            Escribime por WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
