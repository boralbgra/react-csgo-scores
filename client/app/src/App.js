import Events from './comp/events';
import News from './comp/news';
import Stream from './comp/stream';
import Nav from './comp/nav';

import { Row, Col, DatePicker, Alert } from 'antd';
import React, { Component } from 'react';

import './App.css';

import moment from 'moment';
import 'moment/locale/zh-cn';

export default class App extends Component {
  constructor(props) {
    super(props)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.state = {
      day: yyyy + '-' + mm + '-' + dd,
      stream: 'percmau',
      showStream: false
    };
  
  }

  onChange = ((date, dateString) => {
    this.setState({ day: dateString })
  });

  changeStream = ((channel, show) => {
    this.setState({ 
      stream: channel,
      showStream: show
     })
  })

  render() {
    const { day } = this.state;
    return (
      <div>
        <Row className="navRow">
          <Col span={3} className="colorCol"></Col>

          <Col span={18} className="flexNavCol">
            <Nav />
          </Col>

          <Col span={3} className="colorCol"></Col>
        </Row>

        <Row className="dataRow">
          <Col span={3} className="colorCol"></Col>

          <Col span={9} className="colBorderMatches">
            <Row className="CalContainer">
              <Col className="">
                <DatePicker onChange={this.onChange} defaultValue={moment(day, 'YYYY-MM-DD')} />
              </Col>
            </Row>
            <Events key={this.state.day} day={this.state.day} changeStream={this.changeStream}/>
          </Col>

          <Col span={9} className="colBorderNews">
            {this.state.showStream ? <Stream key={this.state.stream} channel={this.state.stream}/> : null }
          </Col>

          <Col span={3} className="colorCol"></Col>
        </Row >
      </div>
    )
  }
}
