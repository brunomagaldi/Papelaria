import Navbar from "./components/navbar"
import Header from "./components/header"
import Footer from "./components/footer"
function Contato(){
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="vh">
            <img src="/logo.svg" alt="" />
            <div className="info">
                <ul>
                    <li>Instagran @Paper</li>
                    <li>email paper@email.com</li>
                    <li>Linkedin Paper</li>
                </ul>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Contato