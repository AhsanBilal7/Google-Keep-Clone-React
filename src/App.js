import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import Function from "./Components/Function/Function";
import { useEffect, useState } from "react";
import Notes from "./Components/Notes/Notes";
function App() {
  const [head, sethead] = useState("");
  const [flag, setflag] = useState(false);
  const [para, setpara] = useState("");
  const [count, setcount] = useState(0);
  const [final, setfinal] = useState([{}]);
  const [deleteflag, setdelete] = useState([false, 0]);
  useEffect(() => {
    // console.log(count);
    // console.log("Count change");
    // console.log(head);
    // console.log(para);
  }, [count]);
  const properties = {
    final: final,
    head: head,
    para: para,
    flag: flag,
    count: count,
    setflag: setflag,
    setfinal: setfinal,
    setcount: setcount,
    deleteflag: deleteflag,
    setdelete: setdelete,
  };
  return (
    <div className="App">
      <Main
        setflag={setflag}
        setcount={setcount}
        setpara={setpara}
        sethead={sethead}
        count={count}
      />
      <Function properties={properties} />
      <Notes setdelete={setdelete} final={final} />
    </div>
  );
}

export default App;
