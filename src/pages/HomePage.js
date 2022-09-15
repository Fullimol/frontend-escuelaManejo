import '../styles/pages/HomePage.css';

const HomePage = (props) => {
return (
    <main>
    <h2 className="subtitulo"><span>E</span>scuelas de <span>c</span>onducción</h2>
    <div className="banner">
        <img src="images/banner.jpeg" alt='banner'></img>
    </div>
    <div className="bienvenida">
        <h2><span>B</span>ienvenidos</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ab, exercitationem nostrum odit incidunt
            quidem
            libero sed labore ipsam neque vero voluptates dolorem rem officia, magnam debitis. Dignissimos, delectus
            maxime?</p>
    </div>
</main>
)

}

export default HomePage;