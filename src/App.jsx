import { Footer } from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <br />
      <div className="flex justify-center md:pt-20 pb-10">
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
