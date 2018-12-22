import React from 'react';
import code from './config/index';
import marked from 'marked';
const doc = require('./README.md');

/* eslint-disable import/first */
import './filters/toSum';

const Render = window.RCRE.Render;

export default class Hellworld extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            html: ''
        };

        fetch(doc).then(response => {
            return response.text();
        }).then(text => {
            this.setState({
                html: text
            });
        });
    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: marked(this.state.html)}} />
                <hr />
                <Render code={code} />
            </div>
        );
    }
}