import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (<div>
    <Header/> {notes.map(item => <Note key={item.key} heading={item.title} info={item.content}/>)}
    <Footer/>
  </div>);
}

export default App;
