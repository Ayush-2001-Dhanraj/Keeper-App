import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArr, setNotesArr] = useState([]);
  const [note, setNote] = useState({title: "", content: ""});

  function handleChange(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    setNote((preValue) => {
      if (name === "title") {
        return {title: newValue, content: preValue.content}
      } else if (name === "content") {
        return {title: preValue.title, content: newValue}
      }
    })
  }

  function addNote(event) {
    setNotesArr((preValue) => [
      ...preValue,
      note
    ])
    event.preventDefault();
    setNote({title: "", content: ""});
  }

  function deleteNote(id) {
    setNotesArr((preValue) => {
      return preValue.filter((note, index) => index !== id)
    })
  }

  return (<div>
    <Header/>
    <CreateArea handleChange={handleChange} note={note} addNote={addNote}/> {
      notesArr.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
      })
    }

    <Footer/>
  </div>);
}

export default App;
