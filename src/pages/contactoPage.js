import '../styles/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

//para recibir la información del formulario a mi mail
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState ('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
// FIN para recibir la información del formulario a mi mail

    return (
        <main>
        <h2 class="titu-contacto"><span>A</span>cérquese con <span>N</span>osotros</h2>
        <div class="contenedor-contactos">
            <div class="contacto">
                <h3><span>C</span>ontacto / <span>C</span>onsultas</h3>
                <form action="/contacto" method='post' onSubmit={handleSubmit} className="formulario">
                    <p>
                        <i class="fa-solid fa-user"></i> <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                    </p>
                    <p>
                        <i class="fa-solid fa-at"></i><label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                    </p>
                    <p>
                        <i class="fa-solid fa-mobile-screen-button"></i><label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                    </p>
                    <p>
                        <textarea name='mensaje' value={formData.mensaje} onChange={handleChange} cols="30" rows="10" placeholder="Escriba aquí su mensaje"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar"></input>
                    </p>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
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