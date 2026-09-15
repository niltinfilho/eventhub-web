export default function EventCard(props: any) {
  return (
    <>
      <article className="event-card">

        <div className={"card-header " + props.type}>
          <span className="event-category">
            {props.category}
          </span>
        </div>

        <div className="card-content">

          <h3>
            {props.title}
          </h3>

          <p>
            {props.description}
          </p>

          <div className="event-info">

            <span>
              <strong>▣</strong>
              {props.date}
            </span>

            <span>
              <strong>⌖</strong>
              {props.location}
            </span>

          </div>

          <a href="evento.html?id=1" className="btn-event">
            Ver evento
            <span>→</span>
          </a>

        </div>

      </article>
    </>
  );
}
