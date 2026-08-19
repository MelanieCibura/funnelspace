// ui_kits/marketing/Nav.jsx
const Nav = () => (
  <nav className="fs-nav">
    <div className="fs-nav__inner">
      <a href="#" className="fs-nav__logo">
        <img src="../assets/logos/funnelspace-mark-lime.svg" alt="" />
        <span>Funnelspace</span>
      </a>
      <div className="fs-nav__links">
        <a href="../marketing-startseite.html">Produkt</a>
        <a href="../ai-studio.html" className="active">AI Studio</a>
        <a href="#preise">Preise</a>
        <a href="../experten.html">Academy</a>
        <a href="../blog.html">Blog</a>
      </div>
      <div className="fs-nav__spacer" />
      <div className="fs-nav__auth">
        <a href="#login">Login</a>
        <a href="#anmelden" className="btn btn-primary">Webinar-Platz sichern</a>
      </div>
    </div>
  </nav>
);
window.Nav = Nav;
