import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import './styles.css';

export default function Profile () {

    const history = useHistory();
    const [incidents, setIncidents] = useState([]);

    // busca os dados no localStorage para serem utilizados na pagina
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    // permite que alguma funcao seja disparada ao longo do componente
    // recebe qual funcao sera executada e quando
    useEffect(() => {
        api.get('profile', { 
            headers: {
                Authorization: ongId
            }
        }).then(response => {
                setIncidents(response.data);
            })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                // para apagar um incidente é necessario passar o id da ong que deseja realizar a operacao
                headers: {
                    Authorization: ongId,
                }
            });

            // filtra o array de incidents para que o array apagado nao seja renderizado
            setIncidents(incidents.filter(incident => incident.id !== id));
        }
            catch(error) {
                console.log('Erro ao apagar o caso, tente novamente :(');
            }
    }
    
    // funcao que realiza o logout da ong
    function handleLogout() {
        // limpa os dados de login da ong
        localStorage.clear();
        // redireciona o usuario para a pagina de logon
        history.push('/');
    }


    return (
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be The Hero"></img>
                <span>Boas vindas, { ongName }</span>

                <Link className="button" to="/incident-new">Cadastrar novo caso</Link>
                <button onClick={ handleLogout } type="button">
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {/* utilizamos uma funcao map que percorre todos os elementos e executa uma funcao passada */}
                {/* é necessario utilizar um atributo unico que diferencie cada elemento */}
                { incidents.map(incident =>(
                    <li key={ incident.id }>
                        <strong>CASO:</strong>
                        <p>{ incident.title }</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{ incident.description }</p>

                        <strong>VALOR:</strong>

                        {/* Intl é um objeto do JS que serve para formatar dados, por exemplo data, moeda, entre outros */}
                        <p>{ Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(incident.value)}</p>

                        {/* passamos a funcao dentro de uma arrow function */}
                        {/* desse modo, nao executa quando o elemento button for renderizado, sera executada no evento onClick */}
                        <button onClick={()=> handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}