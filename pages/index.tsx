import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const CARDS = [
  {
    img: '/img/foto-home.jpeg',
    imgPos: 'center top',
    title: 'Sobre mí',
    text: [
      'Coach Ontológica Profesional ACC – ICF',
      'Coach Ejecutivo e Inmobiliario',
      'Coach de Ventas',
      'Especialista en Inteligencia Emocional – PNL y Neurociencias',
    ],
    href: '/sobre-mi',
  },
  {
    img: '/img/logo-home.jpeg',
    imgPos: 'center center',
    title: 'Coaching',
    text: 'Un proceso de conversación que te acompaña a alcanzar tus metas, gestionar emociones y transformarte desde adentro.',
    href: '/coaching',
  },
  {
    img: '/img/foto-cursos-home.jpeg',
    imgPos: 'center center',
    title: 'Cursos y Talleres',
    text: 'Talleres, charlas y cursos en empresas y grupos. Formación en inteligencia emocional, liderazgo y comunicación.',
    href: '/cursos-y-talleres',
  },
  {
    img: '/img/foto-charlas-home.jpeg',
    imgPos: 'center center',
    title: 'Charlas',
    text: 'Escuchame hablar sobre coaching, inteligencia emocional y transformación personal en conferencias y entrevistas.',
    href: '/charlas',
  },
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mariana Alvarez — Coach Profesional ICF</title>
        <meta name="description" content="Coaching ontológico profesional certificado ICF. Gestión emocional, transformación personal e inteligencia emocional. Buenos Aires y online." />
      </Head>

      {/* Hero */}
      <section className="ma-hero">
        <div className="ma-hero__text">
          <p className="ma-hero__label">Coach Profesional y Ejecutivo ACC – ICF</p>
          <h1 className="ma-hero__title">
            El cambio que buscás<br />
            empieza con una<br />
            <em>conversación.</em>
          </h1>
          <p className="ma-hero__subtitle">
            Acompañamiento profesional para transformar tu vida desde adentro,
            tu profesión, tu vida empresarial, tu PYME, tu empresa.
            Sesiones presenciales y virtuales desde Buenos Aires al mundo.
          </p>
          <div className="ma-hero__ctas">
            <a
              href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n."
              className="ma-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendá tu sesión
            </a>
            <Link href="/coaching" className="ma-btn-outline" style={{ color: 'var(--brown)', borderColor: 'rgba(61,43,31,0.3)' }}>
              Conocé el coaching
            </Link>
          </div>
        </div>

        <div className="ma-hero__image">
          <img
            src="https://static.wixstatic.com/media/d257b5_9bdf0c79568941ffaf2c949106ea780c~mv2.jpeg"
            alt="Mariana Alvarez — Coach Profesional"
          />
        </div>
      </section>

      {/* El proceso */}
      <section className="ma-section ma-section--light">
        <div className="ma-section__inner">
          <div className="ma-heading" data-reveal>
            <p className="ma-heading__eyebrow">Mariana Alvarez Coach</p>
            <h2 className="ma-heading__title">
              Un acompañamiento<br />a medida de <em>tu proceso</em>
            </h2>
            <div className="ma-heading__line" />
            <p className="ma-heading__desc">
              Cada persona tiene su propio camino. Trabajamos juntos desde un lugar genuino,
              con herramientas profesionales y metodologías certificadas internacionalmente.
            </p>
          </div>

          <div className="ma-cards" data-reveal-stagger>
            {CARDS.map((card) => (
              <article key={card.href} className="ma-cards__item">
                <img
                  src={card.img}
                  alt={card.title}
                  className="ma-cards__img"
                  style={{ objectPosition: card.imgPos }}
                />
                <div className="ma-cards__body">
                  <h3 className="ma-cards__title">{card.title}</h3>
                  <p className="ma-cards__text">
                    {Array.isArray(card.text)
                      ? card.text.map((line, i) => (
                          <span key={line}>{i > 0 && <br />}{line}</span>
                        ))
                      : card.text}
                  </p>
                  <Link href={card.href} className="ma-cards__link">
                    Ver más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA oscuro */}
      <section className="ma-section ma-section--dark">
        <div className="ma-section__inner" style={{ textAlign: 'center' }}>
          <div className="ma-heading ma-heading--center" data-reveal>
            <p className="ma-heading__eyebrow" style={{ color: 'rgba(196,154,108,0.8)' }}>Primera sesión</p>
            <h2 className="ma-heading__title ma-heading__title--white">
              ¿Querés dar el primer paso?
            </h2>
            <div className="ma-heading__line" style={{ margin: '16px auto' }} />
            <p className="ma-heading__desc" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Escribime por WhatsApp o email y coordinamos tu primera sesión sin compromiso.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n."
              className="ma-btn-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp directo
            </a>
            <Link href="/contacto" className="ma-btn-outline">
              Ver todos los contactos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
