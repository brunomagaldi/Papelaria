import Header from "./components/header"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
const produtos = [
    {
        nome: "Papel",
        preco: "10,00 R$",
        img: "https://images.tcdn.com.br/img/img_prod/1041864/papel_fotografico_a4_115g_50_folhas_356703_1_ba0d4f88ef1f2c044fe682b50b001c94.jpg"
    },
    {
        nome: "Caneta",
        preco: "2,00 R$",
        img: "https://d20yuiaop8roon.cloudfront.net/Custom/Content/Products/36/58/3658_caneta-cristal-media-azul-bic_m10_637732622579695889.jpg"
    },
    {
        nome: "Lapis",
        preco: "1,00 R$",
        img: "https://img.kalunga.com.br/fotosdeprodutos/414335z_2.jpg"
    }
]
function Home(){
    return(
        <>
            <Header/>
            <Navbar/>
            <section>
                <img src="https://img.freepik.com/fotos-gratis/vista-superior-de-volta-aos-artigos-de-papelaria-da-escola-com-espaco-de-copia_23-2148587552.jpg?w=2000" alt="" className="banner"/>
                <h1>Bem vindo !</h1>
                <div className="Produtos">
                {produtos.map(({nome, preco, img}) => (
                    <div className='card' key={nome}>
                        <img src={img} alt="" />
                        <h2>{nome}</h2>
                        <p>{preco}</p>
                    </div>
                ))
                }
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Home