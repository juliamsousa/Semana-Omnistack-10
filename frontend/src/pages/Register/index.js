import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default function Register() {
    // // para cada estado temos a variavel que ira armazena-lo e a funcao responsavel por fazer sua alteracao
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    // permite fazer a navegacao sem utilizar o Link do router-dom
    const history = useHistory();

    // funcao chamada ao disparo de um evento 'e'
    async function handleRegister(e) {
        e.preventDefault();
        // recebe os dados enviados pelo evento
        const data = {
            name, 
            email,
            whatsapp,
            city,
            uf
        };

        try {
            // envia os dados para a api, que envia-os no formato json para o backend
            const response = await api.post('ongs', data);
            // data contem os dados da resposta
            // alert( `Seu ID de acesso: ${response.data.id}`);
            // apos o cadastro redireciona o usuario para a pagina raiz de Logon
            history.push('/register-success');
        }
            catch (error) {
                alert('Erro no cadastro, tente novamente :(');
            }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link"to="/">
                        {/* os icones aceitam tamanho e cor */}
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para o Logon
                    </Link>

                </section>

                {/* quando o form é cadastrado dispara a funcao handleRegister */}
                <form onSubmit={ handleRegister }>
                    <input 
                        placeholder="Nome da ONG"
                        value={ name }
                        // pega o valor do elemento que disparou o evento e
                        onChange={e => setName(e.target.value)}
                    ></input>

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={ email }
                        // pega o valor do elemento que disparou o evento e
                        onChange={e => setEmail(e.target.value)}
                    ></input>

                    <input 
                        placeholder="WhatsApp"
                        value={ whatsapp }
                        // pega o valor do elemento que disparou o evento e
                        onChange={e => setWhatsapp(e.target.value)}
                    ></input>

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={ city }
                            // pega o valor do elemento que disparou o evento e
                            onChange={e => setCity(e.target.value)}
                        ></input>

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={ uf }
                            // pega o valor do elemento que disparou o evento e
                            onChange={e => setUf(e.target.value)}
                        ></input>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}