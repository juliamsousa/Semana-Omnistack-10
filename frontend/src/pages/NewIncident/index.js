import React, { useState } from 'react';
import { Link,  useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

export default function NewIncident () {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        // previne o comportamento padrao do form
        e.preventDefault();

        const data = {
            title, 
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                // id da ong que esta cadastrando um incidente
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        }   
            catch (error) {
                alert('Erro ao cadastrar o caso, tente novamente :(');
            }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={ logoImg } alt="Be The Hero" />

                <h1>Cadastrar novo caso</h1>
                <p>Cadastre o caso detalhadamente para encontrar um herói para resolvê-lo.</p>

                <Link className="back-link"to="/profile">
                    {/* os icones aceitam tamanho e cor */}
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para a Home
                </Link>

            </section>

            <form>
                <input 
                    placeholder="Título do Caso"
                    value={ title }
                    onChange={e => setTitle(e.target.value)}
                ></input>

                <textarea 
                    placeholder="Descrição"
                    value={ description }
                    onChange={e => setDescription(e.target.value)}
                ></textarea>

                <input 
                    placeholder="Valor em reais"
                    value={ value }
                    onChange={e => setValue(e.target.value)}
                ></input>

                <button onClick={ handleNewIncident }className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
        
    );
}