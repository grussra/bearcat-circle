import React from 'react';
import '../../css/chat.css'
import '../../index.css';
import ChatMessages from './chat.messages';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import AddChat from '../../static/AddChat.svg';

export class Chat extends React.Component {
  render() {
    return (
      <div className="chats">
        <Container Fluid>
          <Row>
            <Col>
              <Row id="Header" style={{marginBottom: "30px"}}>
                <h2>Chats</h2>
                <Button style={{marginLeft: "259px"}}>
                  <img src={AddChat} alt="Create New Chat"/>
                </Button>
              </Row>
              <Row style={{marginLeft: "-15px"}}>
                <input type="text" placeholder="Search"/>
              </Row>
              <Row>
                <ChatMessages/>
              </Row>
            </Col>
            <Col>
              <Row>
                <Card className="messageCard" style={{width:"850px", position: 'absolute', left: "-200px"}}>
                  <Card.Header>
                    <Container fluid >
                      <Row>
                        <Col md={{ span: 1}} style={{padding: "0"}}>
                            <img /*src={BearcatCircle}*/ alt="Profile" />
                        </Col>
                        <Col>
                            <h3>Nathan Berning</h3>
                        </Col>
                      </Row>
                    </Container>
                  </Card.Header>
                  <Container fluid className="messages">
                      <Row style={{height:"730px"}}>
                        <Col>
                            
                        </Col>
                      </Row>
                      <Row>
                        <input type="text" placeholder="Type a message here">
                          
                        </input>
                      </Row>
                    </Container>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}