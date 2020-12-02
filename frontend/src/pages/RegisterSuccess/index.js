import React, { useState } from 'react';
import space from '../../assets/404.png'
import { FiCopy } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg'

import api from '../../services/api';

import './styles.css'

export default function RegisterSuccess () {

	// busca os dados da ong no armazenamento local
	const ongName = localStorage.getItem('ongName');
	const ongId = localStorage.getItem('ongId');
	
	// funcao que copia o id do input
	function copyClipboard () {
		var copyText = document.getElementsByClassName("input");
		console.log('elemento encontrado', copyText);

		/* Select the text field */
		copyText[0].select();
	
		document.execCommand("copy");
	  
		/* Alert the copied text */
		alert(`Seu ID ${copyText[0].value}, foi copiado com sucesso!`);
	} 

    return (
        <div className="logon-success-container">

			<div className="successImg">
        		<img src={ logoImg } alt="Be the Hero"></img>		 
			</div>

			<section className="navigation">
				{/* logo do site */}

				{/* mensagem de sucesso */}
				<h1>{ongName} foi cadastrada com sucesso!</h1>

				<p className="message">Para acessar a plataforma Be The Hero, será 
				preciso um ID de Login. O seu está logo abaixo:</p>

				<div className="exibe-id">
					{/* input que exibira o id do usuario para ser copiado */}
					<input className="input" value="{ongId}" disabled="true"></input>

					<button className="copyButton" onClick={ copyClipboard }>
						<FiCopy size={16} color="#000"/>
					</button>
				</div>

				{/* retorna o usuario perdido para a pagina inicial */}
				<Link className="button"to="/">
					Fazer Logon
				</Link>

			</section>
        </div>
    );
}