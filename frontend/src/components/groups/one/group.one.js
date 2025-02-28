import React from 'react';
import '../../../css/groups/group.one.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import General from "../../../static/groups/one/General.svg";
import Search from "../../../static/groups/one/Search.svg";
import AddGroup from "../../../static/plus_button.svg";
import Group1 from "../../../static/groups/group1.svg";

//Todo Improve CSS styling if time permits

export default class GroupOne extends React.Component {
    render() {
        return (
            <div className="groupone">
                <Link to="/groups">
                    <h1>Back to Groups</h1>
                </Link>
                <Container fluid style={{padding: "0"}}>
                    <Row style={{marginLeft: "75px"}}>
                        <Col md="auto" style={{marginRight: "80px", padding: "0"}}>
                            <Row>
                                <Card className="groupcard">
                                    <Container style={{padding: "0", textAlign: "center"}}>
                                        <img src={Group1} alt="Group 1" />
                                        <h2>Calculus 1</h2>
                                        <h3>Community for Cohen's Calculus class</h3>
                                        <h3>53 members</h3>
                                        <h3>Status: Make sure to check out the homework discussion</h3>
                                    </Container>
                                </Card>
                            </Row>
                            <Row>
                                <Card className="channelcard">
                                    <Card.Header id="groupsCardHeader">
                                        Channels
                                        <Button id="addbutton" style={{padding: "0 0 0 0", backgroundColor: "transparent", borderWidth:"0", marginLeft:"325px"}}>
                                            <img src={AddGroup} alt="Add Group" />
                                        </Button>
                                    </Card.Header>
                                    <Container fluid style={{margin: "45px 0px 0px 25px"}}>
                                        <Row>
                                            <Col>
                                                <Button id="channelbutton" style={{backgroundColor: "#30475E", color: "white"}}>
                                                    General
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button id="channelbutton" >
                                                    Q&A
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button id="channelbutton" >
                                                    Test Prep
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card>
                            </Row>
                        </Col>
                        <Col md="auto">
                            <Row style={{marginBottom: "30px"}}>
                                <img src={General} style={{boxShadow: "0 2px 10px lightgray"}} alt="Search" />
                            </Row>
                            <Row style={{marginBottom: "20px"}}>
                                <img src={Search} style={{boxShadow: "0 2px 10px lightgray"}} alt="Search" />
                            </Row>
                            {/*<Row style={{marginBottom: "30px"}}>*/}
                            {/*</Row>*/}
                            {/*<Row>*/}
                            {/*</Row>*/}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}