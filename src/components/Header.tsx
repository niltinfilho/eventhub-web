export default function Header() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <a href="index.html" className="logo">
          <span className="logo-icon">◈</span>
          EventHub
        </a>

        <nav className="nav-links">
          <a href="index.html" className="active">Eventos</a>
          <a href="#">Sobre</a>
        </nav>

        <div className="nav-actions">

          <a href="criar-evento.html" className="btn-create">
            <span>+</span>
            Criar evento
          </a>

          <div className="profile">
            <span>●</span>
          </div>

        </div>

      </div>

    </header>
  );
}
