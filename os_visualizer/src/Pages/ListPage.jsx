import React, { useState } from "react";
import AlgorithmCard from "../Components/AlgorithmCard";
import style from "../styles/card.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

export default function ListPage() {
  const navigate = useNavigate();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(0);

  const handleAlgorithmClick = (id) => {
    setSelectedAlgorithm(id);
  };

  return (
    <div>
      <div
        className={`card my-5 mx-3 shadow p-3 mb-5 bg-white rounded ${style.listbody}`}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flexStart",
          alignItems: "center",
          height: "78vh",
          width: "94vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          overflow: "auto",
        }}
      >
        <h2 className={style.header}>OS Algorithms</h2>
        <AlgorithmCard
          onClick={() => handleAlgorithmClick(1)}
          name={"First Come First Serve"}
          isSelected={selectedAlgorithm === 1}
        />
        <AlgorithmCard
          onClick={() => handleAlgorithmClick(2)}
          name={"Shortest Job First"}
          isSelected={selectedAlgorithm === 2}
        />
        <AlgorithmCard
          onClick={() => handleAlgorithmClick(3)}
          name={"Shortest Job First (Preemptive)"}
          isSelected={selectedAlgorithm === 3}
        />
        <AlgorithmCard
          onClick={() => handleAlgorithmClick(4)}
          name={"Priority"}
          isSelected={selectedAlgorithm === 4}
        />
        <AlgorithmCard
          onClick={() => handleAlgorithmClick(5)}
          name={"Priority (Preemptive)"}
          isSelected={selectedAlgorithm === 5}
        />
        <AlgorithmCard
          onClick={() => handleAlgorithmClick(6)}
          name={"Round Robin"}
          isSelected={selectedAlgorithm === 6}
        />
      </div>
      <Button
        variant="success"
        style={{
          padding: "0.5rem 2rem",
        }}
        onClick={() => {
          navigate("/input");
        }}
      >
        NEXT
      </Button>{" "}
    </div>
  );
}
