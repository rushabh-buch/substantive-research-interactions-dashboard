import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Record from "./Record";

function Home() {
  let ui = [];
  const [data, setData] = useState();
  const [totalData, setTotal] = useState();
  const [open, setOpen] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios("http://localhost:8000/interactions").then((response) => {
      setData(response.data.data);
      setTotal(response.data.total);
    });
  }
  console.log(data);

  for (var key in data) {
    var percent = parseFloat((data[key].total * 100) / totalData).toFixed(2);
    ui.push(
      <Record name={key} date={data[key].date} percentage={percent}></Record>
    );
  }
  return (
    <div className="main">
      <header className="header">
        <h1>Substantive Research Interactions Dashboard</h1>
      </header>
      <marquee className="note">
        Click on Sector to see when the interactions happened.
      </marquee>
      <hr></hr>
      {ui}
    </div>
  );
}
export default Home;
