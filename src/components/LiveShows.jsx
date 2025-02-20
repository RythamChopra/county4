import Card from "../Card";
import { liveShowsData } from "../constants";
import Section from "./Section";

const LiveShows = () => {
  return (
    <Section className="overflow-hidden" id="liveShows">
      <div className="mx-auto px-5 sm:px-10 md:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:py-20">
          {liveShowsData.map((show) => (
            <Card
              key={show.id}
              imageSrc={show.artistProfilePicture || "src/images/default.jpg"} // Fallback image
              showDate={show.showDate}
              ticketUrl={show.ticketUrl}
              artistName={show.artistName}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default LiveShows;
