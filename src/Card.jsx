import Button from "./components/Button";

const Card = ({ imageSrc, showDate, ticketUrl, artistName }) => {
  return (
    <div
      className="relative w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] 
      h-[22rem] sm:h-[24rem] md:h-[26rem] lg:h-[28rem]
      overflow-hidden rounded-lg shadow-lg group mx-auto flex justify-center"
    >
      <img
        className="w-full h-full object-cover aspect-[4/5] 
        transition-transform group-hover:scale-105 duration-300"
        src={imageSrc}
        alt={artistName}
      />

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-3 w-full text-white text-center">
          <h1 className="uppercase text-lg sm:text-xl">{showDate}</h1>
          <h2 className="text-base sm:text-lg font-semibold">{artistName}</h2>
          <Button
            className="relative h-10 w-full text-center rounded bg-neutral-950 
            px-3 py-2 text-white transition-all duration-300 
            hover:bg-white hover:text-black hover:ring-2 hover:ring-black hover:ring-offset-2"
            href={ticketUrl}
          >
            Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
