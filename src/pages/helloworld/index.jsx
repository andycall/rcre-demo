import React from 'react';
import code from './config/index';
import marked from 'marked';
const doc = require('./README.md');

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
                <Render code={code} />
            </div>
        );
    }
}