import '../styles/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main>
        <h2 class="titu-contacto"><span>A</span>cérquese con <span>N</span>osotros</h2>
        <div class="contenedor-contactos">
            <div class="contacto">
                <h3><span>C</span>ontacto / <span>C</span>onsultas</h3>
                <form action="" class="formulario">
                    <p>
                        <i class="fa-solid fa-user"></i> <label for="nombre">Nombre</label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <i class="fa-solid fa-at"></i><label for="email">Email</label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <i class="fa-solid fa-mobile-screen-button"></i><label for="telefono">Teléfono</label>
                        <input type="text" name=""></input>
                    </p>
                    <p>
                        <textarea name="" cols="30" rows="10" placeholder="Escriba aquí su mensaje"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar"></input>
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios:</p>
                    <ul>
                        <li>Teléfono: 4217-2548</li>
                        <li>Email: contacto@anonymouscompany.com</li>
                        <li>Av. La Plata 1234, CABA</li>
                    </ul>
                <img src="images/contacto/dress.png" alt=""></img>
            </div>
        </div>
    </main>
    )

}

export default ContactoPage;