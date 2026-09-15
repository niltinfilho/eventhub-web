import events from "../_utils/events-mock";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <section className="w-275 mx-auto! mt-10! mb-15!">
      <div className="flex items-end justify-between mb-5!">
        <div>
          <span className="block mb-1! text-[#5b8bc7] text-[10px] font-bold tracking-[1.2px]">
            AGENDA
          </span>

          <h2 className="text-2xl font-bold">
            Próximos eventos
          </h2>
        </div>

        <a href="#" className="flex items-center gap-2! text-[#2176ed] text-sm font-semibold">
          Ver todos
          <span className="text-lg">→</span>
        </a>
      </div>

      <div className="grid grid-cols-3 gap-5">
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
