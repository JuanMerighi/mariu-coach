import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/mariu.scss';

function initReveal() {
  const els = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  if (!els.length) return () => {};
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );
  els.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    return initReveal();
  }, [router.pathname]);

  return <Component {...pageProps} />;
};

export default App;
