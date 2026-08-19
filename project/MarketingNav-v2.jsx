// MarketingNav-v2.jsx — uses 'NavV2' to avoid global collision
const NavV2 = () => (
  <nav className="fs-nav">
    <div className="fs-nav__inner">
      <a href="#" className="fs-nav__logo">
        <img src="assets/logos/funnelspace-mark-lime.svg" alt="" />
        <span>Funnelspace</span>
      </a>
      <div className="fs-nav__links">
        <a href="#produkt" className="active">Produkt</a>
        <a href="#funktionen">Funktionen</a>
        <a href="#preise">Preise</a>
        <a href="#academy">Academy</a>
        <a href="#blog">Blog</a>
      </div>
      <div className="fs-nav__spacer" />
      <div className="fs-nav__auth">
        <a href="#login">Login</a>
        <a href="#signup" className="btn btn-primary">14 Tage testen</a>
      </div>
    </div>
  </nav>
);
window.NavV2 = NavV2;
