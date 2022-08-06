import React, { useState } from "react";

import "./Main.css";
function Main(props) {
  const [valhead, setValh] = useState("");
  const [valpara, setValp] = useState("");

  const clickmain = () => {
    if (valpara !== "" || valhead !== "") {
      props.setcount((prev) => prev + 1);
      return props.setflag(true), setValp(() => ""), setValh(() => "");
    }
  };
  const changehead = (event) => {
    props.sethead(event.target.value);
    setValh(event.target.value);
  };
  const changepara = (event) => {
    props.setpara(event.target.value);
    setValp(event.target.value);
  };
  return (
    <>
      <div className="main">
        <label htmlFor="">Enter the Task..... {props.count + 1}</label>
        <input
          value={valhead}
          onChange={changehead}
          placeholder="Task Name"
          type="text"
        />
        <textarea
          value={valpara}
          onChange={changepara}
          name="taskarea"
          id=""
          placeholder="Type you here"
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={clickmain} className="mainbutton">
          +
        </button>
      </div>
    </>
  );
}

export default Main;
