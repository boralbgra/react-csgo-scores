import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { Image, Space, List } from 'antd';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

import twitchLogo from '../twitch.svg';


const url = 'http://localhost:4000'


export default class StreamList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };

    }

    render() {
        const { data } = this.state;
        if (data.unplayed) {
            return (
                <List
                    itemLayout="horizontal"
                    dataSource={data.stream}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <div className="watchList">
                                        <div className="containerTwitch">
                                            <img src={twitchLogo} className="twitchLogo"></img>
                                            <a href={"https://www.twitch.tv/" + item} target="_blank" className="nameStream">{item}</a>
                                        </div>
                                        <a onClick={() => this.props.changeStream(item, true)} className="desktopTwichA">
                                            <span className="material-icons tvIcon">
                                                play_arrow
                                            </span>
                                        </a>
                                        <a href={"https://www.twitch.tv/" + item} target="_blank" className="mobileTwicthA">
                                            <span className="material-icons tvIcon">
                                                cast
                                            </span>
                                        </a>
                                    </div>
                                }

                            />
                        </List.Item>
                    )}
                />
            )
        }
        else {
            return (null)
        }
    }

}