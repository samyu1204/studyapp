import React from "react";
import data from "../database/data.json"

function Home() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="">The home page</h1>
        <h1 className="">{data["transactions"][0]['type']}</h1>
      </div>
    </div>
  );
}

export default Home;
