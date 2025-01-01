// import {Fragment} from "react";
import NetflixSeries from "./components/NetflixSeries";
import './index.css'
export const App = ()=>{
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix series</h1>
        <NetflixSeries/>
    </section>

  );
};


