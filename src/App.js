import React from "react";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="App container text-center">
         
         <div>
          <h2 className="heading">Click the component to view</h2>
         </div>

        <div className="grid-container ">
          <a className="grid-card" href="https://searchbox-theta.vercel.app/">
            <div className="text">Search-Bar</div>
          </a>

          <a className="grid-card" href="https://pagination-livid.vercel.app/">
            <div className="text">Pagination</div>
          </a>

          <a className="grid-card" href="https://table-five-teal.vercel.app/">
            <div className="text">Table</div>
          </a>

          <a className="grid-card" href="https://table-pagination-eight.vercel.app/">
            <div className="text">Table + Searchbar + Pagination</div>
          </a>

          <a className="grid-card" href="https://ruptok-assignment.vercel.app/">
            <div className="text">Table + Modal</div>
          </a>

        </div>
      </div>
    </>
  );
}
