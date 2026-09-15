export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-label">
          EVENTHUB
        </span>

        <h1>
          Encontre seu próximo
          <strong>evento.</strong>
        </h1>

        <p>
          Descubra eventos, workshops, palestras e
          experiências perto de você.
        </p>

        <div className="search-area">

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              id="searchInput"
              placeholder="Buscar eventos..."
            ></input>
          </div>

          <select id="categoryFilter">
            <option value="">Todos</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="programacao">Programação</option>
            <option value="ia">Inteligência Artificial</option>
          </select>

        </div>

      </div>

      <div className="hero-decoration">

        <div className="calendar-icon">
          <span>▦</span>
        </div>

        <div className="location-icon">
          ●
        </div>

        <div className="decoration-circle"></div>

      </div>

    </section>
  );
}
