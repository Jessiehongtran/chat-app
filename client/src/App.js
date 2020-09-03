import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
    <Router>
        <Switch>
            <Route path="/room/:roomName" exact component={Join}/>
            <Route path="/chat" exact component={Chat}/>
        </Switch>
    </Router>
);

export default App;
