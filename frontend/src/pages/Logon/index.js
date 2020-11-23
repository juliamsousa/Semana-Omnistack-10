import React from 'react';
// importa o icone de login de /react-icons/feather icons
import { FiLogIn } from 'react-icons/fi'
// importa o componet de link
import { Link } from 'react-router-dom';
import './styles.css';

// importacao das imagens utilizadas na pagina
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

// pagina principal na qual o usuario fara seu logon
export default function Logon () {

    return (
        <div className="logon-container">

            <section className="form">
                {/* logo principal Be The Hero */}
                <img src={ logoImg } alt="Be the Hero"></img>

                {/* Formulario de Logon */}
                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>

                    {/* link que redireciona o usuario a realizar seu cadastro */}
                    {/* com essa propriedade apenas muda a rota, nao recarrega a pagina inteira */}
                    <Link className="back-link"to="/register">
                        {/* os icones aceitam tamanho e cor */}
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            {/* Imagem principal da pagina de Logon */}
            <img src={ heroesImg } alt="Heroes"></img>

        </div>
    );
}