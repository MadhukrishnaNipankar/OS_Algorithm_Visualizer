import React from "react";
import { useNavigate } from "react-router";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div
      className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "80rem",
      }}
    >
      <h1 className="my-2">Algo.Visualizer</h1>
      <p className="my-2 p-3">
        Unlock the Power of OS Job Scheduling Algorithms. Explore, learn, and
        master job scheduling algorithms effortlessly. Your gateway to OS
        efficiency starts here
      </p>
      <button
        type="button"
        className="btn btn-danger my-2"
        style={{ width: "10rem" }}
        onClick={() => {
          navigate("/algo");
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
