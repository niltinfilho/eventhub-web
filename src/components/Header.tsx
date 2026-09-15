import { FaCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="h-20 bg-[#071b38] text-white">
      <div className="w-300 h-full mx-auto! flex items-center justify-between">
        <a href="index.html" className="flex items-center gap-2.5 text-lg font-bold">
          <span className="text-[#2386ff] text-2xl">◈</span>
          EventHub
        </a>

        <nav className="nav-links flex items-center gap-9 mr-auto">
          <a href="index.html" className="active">Eventos</a>
          <a href="#">Sobre</a>
        </nav>

        <div className="flex items-center gap-4!">
          <a href="criar-evento.html" className="flex items-center gap-2 py-3! px-5! rounded-lg bg-[#2176ed] text-sm font-semibold transition-[0.2s] hover:bg-[#1765d4]">
            <span className="text-lg">+</span>
            Criar evento
          </a>

          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#2d83ff] text-white">
            <FaCircleUser />
          </div>
        </div>
      </div>
    </header>
  );
}
