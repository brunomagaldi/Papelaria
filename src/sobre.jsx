import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function Sobre() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="sobre">
        <h1>Sobre</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem illo
          harum sed laudantium suscipit reiciendis, neque possimus ea delectus
          architecto perferendis necessitatibus eos cumque sequi, dolorem nobis
          vitae? Earum, fugiat.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Sobre;
