const PortfolioVideo = ({
  vimeoUrl,
  vimeoTitle,
}: {
  vimeoUrl: string;
  vimeoTitle?: string;
}) => {
  const vimeoId = vimeoUrl?.split("/").pop();

  return (
    <iframe
      title={vimeoTitle || "Portfolio Video"}
      src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&loop=1&title=0&byline=0&portrait=0`}
      referrerPolicy="strict-origin-when-cross-origin"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      allowFullScreen
      className="w-auto h-full min-h-[532.8px] mx-auto"
    />
  );
};

export default PortfolioVideo;
