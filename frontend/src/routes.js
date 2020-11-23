import React from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes () {

    return (
        <BrowserRouter>
            {/* o switch impede que mais de uma rota seja chamada */}
            <Switch>
                {/* utilizamos o especificador exact para que diferencie as rotas, uma vez que todas possuem '/' no inicio */}
                {/* definimos o componente Logon para ser renderizado na rota raiz ('/') */}
                <Route path="/" exact component={ Logon }></Route>
                {/* rota para registro do ususario */}
                <Route path="/register" component={ Register }></Route>
                {/* Rota de acesso do perfil da ONG */}
                <Route path="/profile" component={ Profile }></Route>
                {/* Rota de acesso de cricao de um novo incidente da ONG */}
                <Route path="/incident-new" component={ NewIncident }></Route>

            </Switch>
        </BrowserRouter>
    )
}
