import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/',                  label: 'Home' },
  { href: '/sobre-mi',          label: 'Sobre mí' },
  { href: '/coaching',          label: 'Coaching' },
  { href: '/como-funciona',     label: 'Cómo funciona' },
  { href: '/cursos-y-talleres', label: 'Cursos y Talleres' },
  { href: '/charlas',           label: 'Charlas' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="ma-nav">
        <div className="ma-nav__inner">
          <Link href="/" className="ma-nav__logo" onClick={() => setOpen(false)}>
            Mariana <span>Alvarez</span> Coach
          </Link>

          <button
            className={`ma-nav__burger${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`ma-nav__links${open ? ' open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={router.pathname === link.href ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ma-nav__cta">
              <Link href="/contacto" onClick={() => setOpen(false)}>
                Contactame
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="ma-footer">
        <div className="ma-footer__inner">
          <div className="ma-footer__brand">
            <strong>Mariana Alvarez</strong>
            <p>Coach Profesional Certificada ICF. Acompañamiento en gestión emocional, liderazgo y transformación personal. Buenos Aires y online.</p>
          </div>

          <div className="ma-footer__contact">
            <p><strong style={{ color: 'white' }}>Contacto</strong></p>
            <p>WhatsApp: +54 9 11 6355 2105</p>
            <p><a href="mailto:coach.marianaalvarez@gmail.com">coach.marianaalvarez@gmail.com</a></p>
            <p>CABA, Argentina · España</p>
          </div>

          <div className="ma-footer__links">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="ma-footer__bottom">
          <p>
            © {new Date().getFullYear()} Mariana Alvarez ·{' '}
            Desarrollado por <a href="#">TTC Management</a>
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/5491163552105?text=Hola%20Mariana!%20Vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n."
        className="ma-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
