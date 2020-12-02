import React, { useState } from 'react';
import space from '../../assets/404.png'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default function NotFound() {

    return (
        <div className="not-found-container">

			<div className="imgContainer">
        		<img src={ space } alt="Be the Hero"></img>		
			</div>

			<section className="navigation">

				<h1>Está perdido?</h1>
				<p>A página que você procura não existe.</p>

				{/* retorna o usuario perdido para a pagina inicial */}
				<Link className="button"to="/">
					Me traga para a Terra
				</Link>

			</section>
        </div>
    );
}