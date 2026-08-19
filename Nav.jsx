const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className="nav" style={scrolled ? {boxShadow: 'var(--shadow-sm)'} : {}}>
      <div className="nav__inner">
        <a href="#" className="nav__logo">
          <img src={(window.__resources && window.__resources.fsMark) || "assets/logos/funnelspace-mark-lime.svg"} alt="" />
          Funnelspace
        </a>
        <div className="nav__links">
          <a href="#produkt" className="active">Produkt</a>
          <a href="#funktionen">Funktionen</a>
          <a href="#preise">Preise</a>
          <a href="#testimonials">Kunden</a>
          <a href="#footer">Ressourcen</a>
        </div>
        <div className="nav__spacer" />
        <div className="nav__auth">
          <a href="#login">Login</a>
          <a href="#signup" className="btn btn--primary btn-sm">14 Tage testen</a>
        </div>
      </div>
    </nav>
  );
};
window.Nav = Nav;
