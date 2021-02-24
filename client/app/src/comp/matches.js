import React, { Component } from 'react';
import Match from './match'
import StreamList from './streamList'

import { Row, Col, Spin, Space, DatePicker } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const url = 'http://localhost:4000';
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />;

export default class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      day: props.day,
      event: props.event,
      showOptions: false
    };
  }


  componentDidMount() {
    fetch(url + "/filter/" + this.state.event.replace(/ /g, '').replace("/", "").replace("#", "").replace("-", "") + '/' + this.state.day)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            error: error,
            isLoaded: true,
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Spin className="spinCenter" indicator={antIcon} />;
    } else {
      return (
        <Row>
          <Col span={24}>
            {items.map(item => (
              <div>
                <Row key={item.id}>
                  <Col key={item.id} span={24}>
                    <Match match={item} changeStream={this.props.changeStream} showLinks={this.showLinks}/>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      );
    }
  }

}