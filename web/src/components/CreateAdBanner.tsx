import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
    <div className="mt-8 self-stretch overflow-hidden rounded-lg bg-nlw-gradient pt-1">
      <div className="flex justify-between bg-[#2A2634] py-6 px-8">
        <div>
          <strong className="block text-2xl font-black text-white">
            Não encontrou seu duo?
          </strong>
          <small className="block text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </small>
        </div>
        <Dialog.Trigger>
          <button className="flex items-center gap-3 rounded bg-violet-500 px-3 py-4 text-white transition-colors hover:bg-violet-600">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </Dialog.Trigger>
      </div>
    </div>
  );
}
