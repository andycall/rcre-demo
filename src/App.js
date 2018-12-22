import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import HelloWorld from './pages/helloworld';
import TwoWayBinding from './pages/two-way-binding';
import CustomProp from './pages/customProp';
import OneWayBinding from './pages/one-way-data-flow';
import LimitedRunTime from './pages/limited-runtime';

const list = [{
    to: '/helloworld',
    title: 'HelloWorld',
    component: HelloWorld
}, {
    to: '/two-way-binding',
    title: '双向绑定',
    component: TwoWayBinding
}, {
    to: '/one-way-data-flow',
    title: '可自定义的单向数据流',
    component: OneWayBinding
}, {
    to: '/custom-props',
    title: '组件属性自定义传值',
    component: CustomProp
}, {
    to: '/limitedRunTime',
    title: '受限制的代码执行环境',
    component: LimitedRunTime
}];

const Index = () => {


    return (
        <div>
            <div>基础样例</div>
            <ul>
                {
                    list.map(item => {
                        return <li key={item.to}><Link to={item.to}>{item.title}</Link></li>;
                    })
                }
            </ul>
        </div>
    )
};

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {
                        list.map(item => {
                            return <Route path={item.to} key={item.to} component={item.component} />
                        })
                    }
                    <Route path='/' component={Index} />
                </Switch>
            </div>
        );
    }
}

export default App;
