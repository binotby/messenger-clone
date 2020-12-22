import { FormControl, IconButton, Input } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import Message from "./Message";
import "./Message.css";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamps", "asc123")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  return (
    <div className="App">
      <img
        src="https://cdn1.iconfinder.com/data/icons/free-love-valentine-s-set/128/Artboard_1484-512.png"
        alt="logo"
        className="app-logo"
      />

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
