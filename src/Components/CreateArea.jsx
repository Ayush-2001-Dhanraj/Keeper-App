import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  function Expand() {
    setIsExpanded(true);
  }
  return (<div>
    <form onSubmit={props.addNote} className="create-note">
      {isExpanded && <input onChange={props.handleChange} value={props.note.title} name="title" placeholder="Title"/>}
      <textarea onClick={Expand} onChange={props.handleChange} value={props.note.content} name="content" placeholder="Take a note..." rows={(
          isExpanded)
          ? "3"
          : "1"}/>
      <Zoom in={isExpanded}>
        <Fab type="submit"><AddIcon/></Fab>
      </Zoom>
    </form>
  </div>);
}

export default CreateArea;
