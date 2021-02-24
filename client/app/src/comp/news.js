import React, { Component } from 'react';
import { Row, Col, Spin, Card, Collapse } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const url = 'http://localhost:4000'
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'black' }} spin />;

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(url)
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
        function callback(key) {
            console.log(key);
        }
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Spin className="spinCenter" indicator={antIcon} />;
        } else {
            return (
                <Row>
                    <Col span={24}>
                        <Collapse defaultActiveKey={['0']} onChange={callback}>
                            {items.map(item => (
                                <Panel header={item.title} key={item.id}>
                                    <p>{item.description}</p>
                                </Panel>
                            ))}
                        </Collapse>,
                    </Col>
                </Row>
            );
        }
    }
}