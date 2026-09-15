export default function Hero() {
  return (
    <section className="hero">
      <div className="relative z-2 py-14! px-12!">
        <span className="block mb-2! text-[#3d9aff] text-[12px] font-bold tracking-[1.5px]">EVENTHUB</span>
        <h1 className="w-115 text-4xl leading-[1.08] font-bold">
          Encontre seu próximo <strong className="block text-[#2386ff]">evento.</strong>
        </h1>
        <p className="w-107.5 mt-4! text-[#b8c6d9] leading-6">Descubra eventos, workshops, palestras e experiências perto de você.</p>

        <div className="flex gap-3! mt-6!">
          <div className="w-96 h-11 flex items-center py-0! px-4! rounded-lg bg-white">
            <span className="mr-2! text-[#68778c] text-xl">⌕</span>
            <input
              type="text"
              id="searchInput"
              placeholder="Buscar eventos..."
              className="search-box-input"
            ></input>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-120 h-full">
        <div className="calendar-icon">
          <span>▦</span>
        </div>

        <div className="location-icon">
          ●
        </div>
      </div>

    </section>
  );
}
