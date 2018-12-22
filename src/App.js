import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import HelloWorld from './pages/helloworld';

const Index = () => {
    return (
        <div>
            <div>基础样例</div>
            <ul>
                <li><Link to='/helloworld'>HelloWorld</Link></li>
            </ul>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/helloworld' component={HelloWorld} />
                    <Route path='/' component={Index} />
                </Switch>
            </div>
        );
    }
}

export default App;
