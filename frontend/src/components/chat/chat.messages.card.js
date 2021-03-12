import React from "react";
import '../../css/chat.messages.card.css'
import { Card, Col, Container, Row } from "react-bootstrap";

export default class ChatMessagesCard extends React.Component {
   render() {
       return (
           <Card className="chatMessagesCard" onClick={() => alert(this.props.title)}>
               <Container fluid>
                   <Row>
                       <Col md={{ span: 1}} style={{padding: "0"}}>
                           <img /*src={BearcatCircle}*/ alt="Profile" />
                       </Col>
                       <Col style={{padding: "0", marginLeft: "40px", marginRight: "40px"}}>
                           <h3>{this.props.title}</h3>
                           <h5>{this.props.body}</h5>
                       </Col>
                   </Row>
               </Container>
           </Card>
       )
   }
}