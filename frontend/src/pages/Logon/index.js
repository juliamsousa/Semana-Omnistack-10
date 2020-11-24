import React, { useState } from 'react';
// importa o icone de login de /react-icons/feather icons
import { FiLogIn } from 'react-icons/fi'
// importa o componet de link
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

// importacao das imagens utilizadas na pagina
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

// pagina principal na qual o usuario fara seu logon
export default function Logon () {

    const [id, setId] = useState('');
    
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            // console.log(response.data);

            if(response.data === "")
                throw new Error("ID nao cadastrado");

            // armazena os dados do estado no armazenamento local do navegador
            // serao utilizados na pagina de perfil da ong
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }
            catch(error) {
                alert('Falha no login, tente novamente :(');
            }
    }

    return (
        <div className="logon-container">

            <section className="form">
                {/* logo principal Be The Hero */}
                <img src={ logoImg } alt="Be the Hero"></img>

                {/* Formulario de Logon */}
                <form onSubmit={ handleLogin }>
                    <h1>Faça seu Logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={ id }
                        onChange={e => setId(e.target.value)}
                    ></input>

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