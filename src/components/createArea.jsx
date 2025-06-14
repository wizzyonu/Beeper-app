import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
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
  

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={inputText.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={inputText.content}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
