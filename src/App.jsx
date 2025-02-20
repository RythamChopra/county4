import BookAComic from "./components/BookAComic";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LiveShows from "./components/liveShows";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <LiveShows/>
        <BookAComic/>
        <Testimonials/>
        <Footer />
      </div>
    </>
  );
};

export default App;
