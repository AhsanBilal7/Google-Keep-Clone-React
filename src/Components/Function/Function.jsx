import React, { useEffect, useState } from "react";

function Function(properties) {
  let {
    final,
    para,
    head,
    flag,
    count,
    setflag,
    setfinal,
    deleteflag,
    setdelete,
  } = properties.properties;
  // const [info, setinfo] = useState([{}]);

  if (deleteflag[0]) {
    setfinal((current) =>
      current.filter((employee) => {
        // 👇️ remove object that has id equal to 2
        return employee.id !== deleteflag[1];
      })
    );
    setdelete([false, deleteflag[1]]);
  }

  useEffect(() => {
    let arr = [];
    if (flag) {
      arr = [...final];
      console.log(final)
      arr.push({
        id: count - 1,
        para: para,
        head: head,
      });
      setflag(false);
    }
    // setFinal(arr);
    setfinal(arr);
    // return console.log("Flag turn ON"), console.log("Flag turn OFF");
  }, [count]);
  return (
    <div>
      {/* {console.log(final)}
      {console.log(deleteflag)} */}
    </div>
  );
}

export default Function;
