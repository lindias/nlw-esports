import { MagnifyingGlassPlus } from "phosphor-react";
import game1Img from "./assets/game-1.png";
import game2Img from "./assets/game-2.png";
import game3Img from "./assets/game-3.png";
import game4Img from "./assets/game-4.png";
import game5Img from "./assets/game-5.png";
import game6Img from "./assets/game-6.png";
import logoImg from "./assets/logo-nlw-esports.svg";

export function App() {
  return (
    <div className="max-w-[1344px] flex flex-col items-center mx-auto mt-20">
      <img src={logoImg} alt="" />
      <h1 className="text-white font-black text-6xl mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={game1Img} alt="" />
          <div className="w-full bg-game-gradient px-4 pb-4 pt-16 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={game2Img} alt="" />
          <div className="w-full bg-game-gradient px-4 pb-4 pt-16 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={game3Img} alt="" />
          <div className="w-full bg-game-gradient px-4 pb-4 pt-16 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS:GO</strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={game4Img} alt="" />
          <div className="w-full bg-game-gradient px-4 pb-4 pt-16 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={game5Img} alt="" />
          <div className="w-full bg-game-gradient px-4 pb-4 pt-16 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={game6Img} alt="" />
          <div className="w-full bg-game-gradient px-4 pb-4 pt-16 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-sm text-zinc-300 block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="self-stretch rounded-lg overflow-hidden mt-8 bg-nlw-gradient pt-1">
        <div className="bg-[#2A2634] py-6 px-8 flex justify-between">
          <div>
            <strong className="text-white text-2xl font-black block">
              Não encontrou seu duo?
            </strong>
            <small className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </small>
          </div>
          <button className="px-3 py-4 bg-violet-500 hover:bg-violet-600 rounded text-white transition-colors flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}
