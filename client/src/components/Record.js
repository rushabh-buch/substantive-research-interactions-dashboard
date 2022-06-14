import React, { useState } from "react";
import "./Record.css";
export default function Record(props) {
  const [open, setOpen] = useState(true);

  const handleChange = () => {
    setOpen(!open);
  };

  let dates = "Dates:";
  for (var i = 0; i < props.date.length; i++) {
    dates += " || " + props.date[i];
  }

  return (
    <React.Fragment>
      <div className="record" onClick={handleChange}>
        <table>
          <tr>
            <td>
              <h3>{props.name}</h3>
            </td>
            <td>
              <h4>{props.percentage}%</h4>
            </td>
          </tr>
        </table>
      </div>
      <div className="date_div" hidden={open}>
        {/* {props.date} */}
        {(dates += " || ")}
      </div>
    </React.Fragment>
  );
}
