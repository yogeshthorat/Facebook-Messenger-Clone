import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import logo from './Logo.png';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}) ))
    })
  }, [])

  
  useEffect(() => {
    setUsername( prompt( 'Please enter name which you want to be as your Username!'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  } 

  
  return (
    <div className="App">
      <h1><img src={logo} className="logo" alt="React Messenger" /></h1>

      <h1> HEllo EveryOne... </h1>
      <h2>Welcome {username}</h2>

      <form className="app__form" onSubmit={sendMessage} >
      <FormControl className="app__formControl">
        
        <Input className="app__input" placeholder='Enter A Message!' value={input} onChange={event => setInput(event.target.value)} />

        <IconButton className="app__button" disabled={!input} color="primary" variant="contained" type="submit" onClick={sendMessage}><SendIcon /></IconButton>
      </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key = {id} username={username}  message={message} />
          ))
        }
      </FlipMove>

      
    </div>
  );
}

export default App;
