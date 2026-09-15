import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";

export default function EventCard(props: any) {
  return (
    <>
      <article className="overflow-hidden border border-[#e1e7ef] rounded-lg bg-white shadow-[0_3px_12px_rgba(16,42,72,0.04)] transition-[0.2s] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(16,42,72,0.09)]">
        <div className={"card-header " + props.type}>
          <span className="event-category">
            {props.category}
          </span>
        </div>

        <div className="p-5!">
          <h3 className="min-h-10 text-[#142238] leading-[1.3]">
            {props.title}
          </h3>

          <p className="min-h-14 mt-2! text-[#718096] text-sm leading-normal">
            {props.description}
          </p>

          <div className="flex items-center gap-4! mt-4! text-[#66758a] text-[11px]">
            <span className="flex items-center gap-1">
              <strong className="text-[#4f6685] text-sm">
                <FaCalendarDays />
              </strong>
              {props.date}
            </span>

            <span className="flex items-center gap-1">
              <strong>
                <FaLocationDot />
              </strong>
              {props.location}
            </span>
          </div>

          <a href="evento.html?id=1" className="flex items-center justify-between w-full mt-5! py-3! px-4! rounded-md bg-[#071f42] text-white! text-[11px] font-semibold transition-[0.2s] hover:bg-[#0d3469]">
            Ver evento
            <span className="text-base">→</span>
          </a>
        </div>
      </article>
    </>
  );
}
