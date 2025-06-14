import React, { useState } from "react";
// import contacts from "../contacts";
// import Cards from "./caards";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
// import notes from "../notes";
import CreateArea from "./createArea";

// function Statment(props) {
//   return (
//     <Note 
//       key = {props.id}
//       tittle = {props.title} 
//       words = {props.content}
//     />
//   );
// }


function App() {
  
    // <div>
    //   <Header />
    //   {notes.map(Statment)}
    //   <Footer />
    // </div>
    // <div>
    //   <h1 className="heading">My Contacts</h1>
    //   <Cards
    //     name = {contacts[0].name}
    //     img = {contacts[0].imgURL}
    //     phone = {contacts[0].phone}
    //     email = {contacts[0].email}
    //   />
    //   <Cards
    //     name = {contacts[1].name}
    //     img = {contacts[1].imgURL}
    //     phone = {contacts[1].phone}
    //     email = {contacts[1].email}
    //   />
    //   <Cards
    //     name = {contacts[2].name}
    //     img = {contacts[2].imgURL}
    //     phone = {contacts[2].phone}
    //     email = {contacts[2].email}
    //   />
    // </div>
  const [notes, setNotes] = useState([]);
  
  function added(inputText) {
    setNotes((prevNote) => {
      return [...prevNote, inputText];
    });
  }
  function deleteCon(id) {
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
    console.log("peace out")
  }
  return (
    <div>
      <Header />
      <CreateArea boys={added} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            baby={deleteCon}
            
          />
        );
      })}

      <Footer />
    </div>
  );
     
  
}

export default App;