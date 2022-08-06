import React from "react";
import "./Notes.css";
function Notes(props) {
  let info = props.final;
  const clicknote = (number) => {
    console.log(`Delete is pressed for the item no ${number}  `);
    props.setdelete([true, number]);
  };

  return (
    <div className="mainn">
      {info.map((items) => {
        return (
          <>
            <div className="note">
              <h2>{items.head}</h2>
              <p>{items.para}</p>
              <button onClick={() => clicknote(items.id)}>Delete</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Notes;
