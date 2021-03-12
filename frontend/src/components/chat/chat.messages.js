import React from 'react';
import '../../css/chat.messages.css'
import ChatMessagesCard from './chat.messages.card';

export default class ChatMessages extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           items: [],
           isLoaded: false,
       };
   }

   componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/comments')
           .then(res => res.json())
           .then(result => {
               this.setState({
                   isLoaded: true,
                   items: result
               });
           });
   }

   render() {
       const { items } = this.state;
       if (!this.state.isLoaded) {
           return <div>Loading ... </div>;
       } else {
           return (
               <div className="chatMessages">
                   {items.map(item => (
                       <ChatMessagesCard title = {item.name} body = {item.body}/>
                   ))}
               </div>
           );
       }
   }
}