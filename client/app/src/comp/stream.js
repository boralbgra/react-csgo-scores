import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { Image, Space } from 'antd';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const url = 'http://localhost:4000'


export default class Stream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: props.channel
        };

    }

    render() {
        return (
            <div className="TwitchContainer">
                <ReactTwitchEmbedVideo
                    channel={this.state.channel}
                    layout="video"
                    width="100%"
                    height="370"
                />
            </div>
        )
    }

}