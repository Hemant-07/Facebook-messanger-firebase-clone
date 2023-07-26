import React, { useEffect, useState } from "react";
import Messanger from "./Messanger";
import { FormControl, Input, InputLabel } from "@mui/material";
import "../web/Style.css";
import db from "./firebase";
import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import FlipMove from "react-flip-move";
import SendIcon from '@mui/icons-material/Send';
import IconButton from "@mui/material/IconButton";

function Clone() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    // {username :"Hemant", message:"hey guys"},
    // {username :"Arora", message:"Whatsapp !"}
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter a value"));
  }, []);
  const SendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages,{username:username, text: input}])
    setInput("");
  };

  return (
    <>
      <div>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <h1>Hello Programmer</h1>
        <h2>Welcome {username}</h2>

        <form className="app__form">
          <FormControl className="app__formcontrol">
            <InputLabel className="input">Enter a message...</InputLabel>
            <Input placeholder="Enter a message..."
              value={input}
              onChange={(event) => setInput(event.target.value)} className="app__Input"
            />
            <IconButton className="app__Iconbutton"
              disabled={!input}
              type="submit"
              onClick={SendMessage}
              class="primary" variant="contained"
              
            >
              {/* Send Message */}
            <SendIcon className="send"/>
            </IconButton>
          </FormControl>
        </form>

        <FlipMove>
          {messages.map(({ id, message }) => (
            <Messanger key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
    </>
  );
}

export default Clone;
