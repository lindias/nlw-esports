interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner({ bannerUrl, title, adsCount }: GameBannerProps) {
  return (
    <a href="" className="relative overflow-hidden rounded-lg">
      <img src={bannerUrl} alt="" />
      <div className="absolute bottom-0 left-0 right-0 w-full bg-game-gradient px-4 pb-4 pt-16">
        <strong className="block font-bold text-white">{title}</strong>
        <span className="block text-sm text-zinc-300">
          {adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
