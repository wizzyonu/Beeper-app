import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
  const [pensi, setPensi] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((previeValue) => {
      return {
        ...previeValue,
        [name]: value,
      };
    });
  }
  function submit(event) {
    event.preventDefault();
    setInputText({
      title: "",
      content: ""
    })
    props.boys(inputText);
  }
  function peno () {
    setPensi(true)
  }

  return (
    <div>
      <form className="create-note">
        {pensi && (<input
        
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={inputText.title}
      />)}
        <textarea
          onClick = {peno}
          name="content"
          placeholder="Take a note..."
          rows= {pensi ? 3 : 1}
          onChange={handleChange}
          value={inputText.content}
        />
        <Zoom in = {pensi}>
          <Fab onClick={submit}>
            <AddIcon />
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
