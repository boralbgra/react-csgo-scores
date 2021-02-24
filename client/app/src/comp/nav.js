import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { Image, Space, Drawer } from 'antd';

import BorjaLogo from '../01_FINAL-LOGO-v2.svg'

const url = 'http://localhost:4000'


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: null,
            visible: false,
            placement: 'left'
        };
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        const { placement, visible } = this.state;
        return (
            <div className="navBar">
                <img src={"https://gist.githubusercontent.com/boralbgra/1d13428570e710f1aea95ba560e35962/raw/5d7c43171dfbc7cec1b13fc1da6e70391bc3fc0d/boralbgra-logo-face.svg"} />
                <div className="menuNav">
                    <a href="https://github.com/boralbgra" target="_blank">Github</a>
                    <a href="https://twitter.com/borjaalbert_" target="_blank">Twitter</a>
                    <a href="https://www.linkedin.com/in/boralbgra/" target="_blank">LinkedIn</a>
                    <span class="material-icons menuIcon" onClick={this.showDrawer}>
                        menu
                    </span>
                    <Drawer
                        title={<img src={BorjaLogo} className="borjaLogo"></img>}
                        placement={placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={visible}
                        key={placement}
                    >
                        <p><a href="https://github.com/boralbgra" target="_blank" className="linkDrawer">Github</a></p>
                        <p><a href="https://twitter.com/borjaalbert_" target="_blank" className="linkDrawer">Twitter</a></p>
                        <p><a href="https://www.linkedin.com/in/boralbgra/" target="_blank" className="linkDrawer">LinkedIn</a></p>
                    </Drawer>
                </div>
            </div>

        )
    }

}