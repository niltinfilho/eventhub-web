import EventCard from "./EventCard";

export default function Events() {
  const events = [
    {
      type: "technology",
      category: "Tecnologia",
      title: "Workshop de Java e Spring Boot",
      description: "Aprenda os fundamentos do desenvolvimento de APIs REST utilizando Java e Spring Boot.",
      date: "10 Nov 2026",
      location: "Fatec Jales"
    },
    {
      type: "programming",
      category: "Programação",
      title: "Hackathon Fatec 2026",
      description: " Uma experiência prática para criar soluções utilizando tecnologia.",
      date: "15 Nov 2026",
      location: "Fatec Jales"
    },
    {
      type: "artificial-intelligence",
      category: "Inteligência Artificial",
      title: "Introdução à Inteligência Artificial",
      description: "Conheça os conceitos fundamentais de inteligência artificial.",
      date: "20 Nov 2026",
      location: "Fatec Jales"
    }
  ];

  return (
    <section className="events-section">
      <div className="section-header">
        <div>
          <span className="section-label">
            AGENDA
          </span>

          <h2>
            Próximos eventos
          </h2>
        </div>

        <a href="#" className="see-all">
          Ver todos
          <span>→</span>
        </a>
      </div>

      <div className="events-grid" id="eventsContainer">
        {events.map(event => (
          <EventCard
            type={event.type}
            category={event.category}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}>
          </EventCard>
        ))}
      </div>
    </section>
  );
}
