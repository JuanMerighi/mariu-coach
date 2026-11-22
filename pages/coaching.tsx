import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const CARDS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: 'Alcanzá tus metas',
    text: 'Definimos juntos adónde querés llegar y trazamos un camino concreto para lograrlo, paso a paso.',
    wide: true,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: 'Gestioná tus emociones',
    text: 'Aprendés herramientas de inteligencia emocional para responder —en lugar de reaccionar— ante los desafíos.',
    wide: false,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: 'Superá creencias limitantes',
    text: 'Identificamos los patrones y miedos que te frenan, y los transformamos en impulso para avanzar.',
    wide: false,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Fortalecé tu autoestima',
    text: 'Construís una relación más sana con vos mismo/a, desde la aceptación y el crecimiento genuino.',
    wide: true,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg>,
    title: 'Desarrollá tu liderazgo',
    text: 'Trabajamos tu presencia, comunicación y toma de decisiones para que lideres con claridad y autenticidad.',
    wide: true,
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v4l3 3"/></svg>,
    title: 'Transformación personal',
    text: 'Un proceso profundo de autoconocimiento que te permite ser la mejor versión de vos mismo/a.',
    wide: false,
  },
];

export default function Coaching() {
  return (
    <Layout>
      <Head>
        <title>Coaching · Mariana Alvarez Coach</title>
        <meta name="description" content="Coaching ontológico profesional para alcanzar metas, gestionar emociones, superar creencias limitantes y desarrollar liderazgo." />
      </Head>

      <div className="ma-page-header">
        <img
          src="https://static.wixstatic.com/media/d257b5_fee12f57b338475f9ad0a199d5a6fda9~mv2.jpg"
          alt="Sesión de coaching"
          className="ma-page-header__img"
        />
        <div className="ma-page-header__overlay">
          <h1 className="ma-page-header__title">
            <span>Coaching</span>
          </h1>
        </div>
      </div>

      <section className="ma-section ma-section--light">
        <div className="ma-section__inner">
          <div className="ma-heading" data-reveal>
            <p className="ma-heading__eyebrow">¿Qué es el coaching?</p>
            <h2 className="ma-heading__title">
              Un proceso que te transforma<br /><em>desde adentro</em>
            </h2>
            <div className="ma-heading__line" />
            <p className="ma-heading__desc">
              El coaching es un proceso de conversación en el que, a través de preguntas poderosas,
              una coach certificada te acompaña a descubrir tus propias respuestas y alcanzar tus metas.
            </p>
          </div>

          <div className="ma-coaching-grid" data-reveal-stagger>
            {CARDS.map((card) => (
              <div key={card.title} className="ma-ccard">
                <div className="ma-coaching-grid__icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--beige">
        <div className="ma-section__inner" style={{ textAlign: 'center' }}>
          <div className="ma-heading ma-heading--center">
            <p className="ma-heading__eyebrow">Modalidades</p>
            <h2 className="ma-heading__title">¿Dónde y cómo trabajo?</h2>
            <div className="ma-heading__line" style={{ margin: '16px auto' }} />
            <p className="ma-heading__desc">
              Sesiones virtuales desde cualquier lugar del mundo.
              Cada sesión dura entre 40 minutos y 1 hora.
            </p>
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/como-funciona" className="ma-btn-primary">
              Ver cómo funciona
            </Link>
          </div>
        </div>
      </section>

      <section className="ma-section ma-section--dark">
        <div className="ma-section__inner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'white', marginBottom: 12 }}>
            ¿Listo/a para empezar?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: '1rem' }}>
            Coordinamos tu primera sesión sin compromiso.
          </p>
          <a
            href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n."
            className="ma-btn-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendá por WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
