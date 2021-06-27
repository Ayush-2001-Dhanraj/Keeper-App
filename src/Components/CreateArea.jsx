import React from "react";

function CreateArea(props) {
  return (<div>
    <form onSubmit={props.addNote}>
      <input onChange={props.handleChange} value={props.note.title} name="title" placeholder="Title"/>
      <textarea onChange={props.handleChange} value={props.note.content} name="content" placeholder="Take a note..." rows="3"/>
      <button type="submit">Add</button>
    </form>
  </div>);
}

export default CreateArea;
