import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { Image, Space } from 'antd';
import StreamList from './streamList'


const url = 'http://localhost:4000'


export default class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: null,
            showOptions: false
        };
    }

    componentDidMount() {
        let hours;
        let minutes;

        if (new Date(this.props.match.time).getUTCHours() <= 9)
            hours = '0' + new Date(this.props.match.time).getUTCHours();
        else
            hours = new Date(this.props.match.time).getUTCHours();

        if (new Date(this.props.match.time).getUTCMinutes() == 0)
            minutes = new Date(this.props.match.time).getUTCMinutes() + '0';

        else if (new Date(this.props.match.time).getUTCMinutes() <= 9)
            minutes = '0' + new Date(this.props.match.time).getUTCMinutes();
        else
            minutes = new Date(this.props.match.time).getUTCMinutes();

        this.setState({
            time: hours + ':' + minutes + 'h'
        })
    }

    showLinks = (() => {
        if(this.state.showOptions == true) {
          this.setState({
            showOptions: false
          })
        }
        else {
          this.setState({
            showOptions: true
          })
        }
        
      })

    render() {
        const { time } = this.state;
        const items = this.props.match;
        if (items.teams[0].name.length > 0 && items.teams[1].name.length > 0) {
            if (items.teams[0].result !== undefined && items.teams[1].result !== undefined) {
                return (
                    <Row justify="center" className="match">
                        <Col className="teamLeft" span={10}>
                            <Space size="large">
                                <p className="teamName">{items.teams[0].name}</p>
                                <img src={items.teams[0].crest} className="teamLogo"></img>
                            </Space>
                        </Col>
                        <Col span={4} className="resultCol">
                            <p className="teamName">{items.teams[0].result}</p>
                            <p className="teamName">-</p>
                            <p className="teamName">{items.teams[1].result}</p>
                        </Col>
                        <Col className="teamRight" span={10}>
                            <Space size="large">
                                <img src={items.teams[1].crest} className="teamLogo"></img>
                                <p className="teamName">{items.teams[1].name}</p>
                            </Space>
                        </Col>
                    </Row>
                );
            }

            return (
                <Row>
                    <Col span={24}>
                        <Row justify="center" className="match">
                            <Col className="teamLeft" span={10}>
                                <Space size="large">
                                    <p className="teamName">{items.teams[0].name}</p>
                                    <img src={items.teams[0].crest} className="teamLogo"></img>
                                </Space>
                            </Col>
                            <Col span={4} className="vsCol">
                                <p className="teamName">{time}</p>
                            </Col>
                            <Col className="teamRight" span={10}>
                                <Space size="large">
                                    <img src={items.teams[1].crest} className="teamLogo"></img>
                                    <p className="teamName">{items.teams[1].name}</p>
                                </Space>
                                <a onClick={() => this.showLinks()}>
                                    <span className="material-icons tvIcon">
                                        live_tv
                        </span>
                                </a>
                            </Col>
                            <Col span={2}>
                            </Col>
                        </Row>
                    </Col>
                    {this.state.showOptions ? <StreamList data={items} changeStream={this.props.changeStream} key={this.state.showOptions}/> : null}
                </Row>
            );
        }
        else return (null)

    }

}