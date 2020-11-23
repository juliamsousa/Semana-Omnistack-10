import React from 'react';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './styles.css'

export default function Register() {

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

                <form>
                    <input placeholder="Nome da ONG"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input placeholder="WhatsApp"></input>

                    <div className="input-group">
                        <input placeholder="Cidade"></input>
                        <input placeholder="UF" style={{ width: 80 }}></input>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}