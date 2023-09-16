import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function InputPage() {
  const navigate = useNavigate();
  // for storing complete data that is added
  const [parentData, setParentData] = useState([]);
  const [resultData, setResultData] = useState([]);

  //   for handling temporary change of input fields
  const [data, setData] = useState({
    pid: 0,
    arrivalTime: 0,
    burstTime: 0,
    priority: 0,
    waitTime: 0,
    startTime: 0,
    endTime: 0,
    remainTime: 0,
    turnAroundTime: 0,
  });

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setParentData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  const execute = () => {
    localStorage.setItem("data", JSON.stringify(parentData));
    console.log(JSON.parse(localStorage.getItem("data")));
    console.log("EXE");
    FCFS();
    setResultData(JSON.parse(localStorage.getItem("fcfsResult")));
    // navigate("/charts");
  };

  const addProcess = () => {
    setParentData([...parentData, data]);
    // set parentData to localStorage
    // localStorage.setItem("data", JSON.stringify(parentData));
    // console.log(JSON.parse(localStorage.getItem("data")));
    setData({
      pid: 0,
      arrivalTime: 0,
      burstTime: 0,
      priority: 0,
      waitTime: 0,
      startTime: 0,
      endTime: 0,
      remainTime: 0,
      turnAroundTime: 0,
    });
  };

  const clearAllData = () => {
    if (
      !window.confirm("Are You Sure you want to clear all the added processes?")
    )
      return;

    localStorage.clear();
    setParentData([]);
  };

  function FCFS() {

    console.log("FUNCTION CALL");
    let Time = 0;
    const p = JSON.parse(localStorage.getItem("data"));
    console.log("mi", p);
    p.sort((a, b) => a.arrivalTime - b.arrivalTime);

    for (let i = 0; i < p.length; i++) {

      while (p[i].arrivalTime > Time) Time++;

      p[i].startTime = Time;
      p[i].endTime = Time + p[i].burstTime;
      Time += p[i].burstTime;
      p[i].turnAroundTime = p[i].endTime - p[i].arrivalTime;
      p[i].waitTime = p[i].turnAroundTime - p[i].burstTime;
      console.log(p[i]);
    }

    console.log("pid\t\tSt\t\tEt\t\tTaT\t\tWt");
    for (let i = 0; i < p.length; i++) {
      console.log(
        ` ${p[i].pid}\t\t${p[i].startTime}\t\t${p[i].endTime}\t\t${p[i].turnAroundTime}\t\t${p[i].waitTime}`
      );
    }
    localStorage.setItem("fcfsResult", JSON.stringify(p));
    console.log("FUNCTION DONE");
  }

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: parseFloat(event.target.value),
    });
  };

  useEffect(() => {
    console.log(parentData);
  }, [parentData]);

  return (
    <div
      className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
      style={{
        display: "flex",
        width: "80rem",
        minHeight: "fitContent",
      }}
    >
      <h4 className="my-3">Enter Process Details...</h4>
      <div
        className="my-3 p-4 text-start card"
        style={{
          width: "60rem",
          maxWidth: "95%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <div className="mb-3 mx-2" style={{ width: "12rem" }}>
          <label for="exampleFormControlInput1" className="form-label">
            Process Id
          </label>
          <input
            type="number"
            name="pid"
            value={data.pid}
            onChange={handleChange}
            className="form-control"
            placeholder="eg.1"
          />
        </div>
        <div className="mb-3 mx-2" style={{ width: "12rem" }}>
          <label for="exampleFormControlInput1" className="form-label">
            Arrival Time
          </label>
          <input
            type="number"
            name="arrivalTime"
            value={data.arrivalTime}
            onChange={handleChange}
            className="form-control"
            placeholder="eg.3"
          />
        </div>
        <div className="mb-3 mx-2" style={{ width: "12rem" }}>
          <label for="exampleFormControlInput1" className="form-label">
            Burst Time
          </label>
          <input
            onChange={handleChange}
            type="number"
            name="burstTime"
            value={data.burstTime}
            className="form-control"
            placeholder="eg.5"
          />
        </div>
        <div className="mb-3 mx-2" style={{ width: "12rem" }}>
          <label for="exampleFormControlInput1" className="form-label">
            Priority
          </label>
          <input
            onChange={handleChange}
            name="priority"
            type="number"
            value={data.priority}
            className="form-control"
            placeholder="eg.0"
          />
        </div>
        <div className="my-3" style={{ display: "flex", flexWrap: "wrap" }}>
          <button
            onClick={addProcess}
            type="button"
            className="btn btn-success m-2"
            style={{ width: "10rem" }}
          >
            + Add
          </button>
          <button
            onClick={() => {
              setData({
                pid: "",
                arrivalTime: "",
                burstTime: "",
                priority: "",
              });
            }}
            type="button"
            className="btn btn-danger m-2"
            style={{ width: "10rem" }}
          >
            ↻ Clear
          </button>
        </div>
      </div>

      {/* process table */}
      <div
        className="my-2 p-2"
        style={
          parentData.length
            ? { display: "block", maxHeight: "20rem", overflow: "auto" }
            : { display: "none" }
        }
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Process Id</th>
              <th>Arrival Time</th>
              <th>Burst Time</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {parentData.map((process) => {
              return (
                <>
                  <tr>
                    <td>{process.pid}</td>
                    <td>{process.arrivalTime}</td>
                    <td>{process.burstTime} units</td>
                    <td>{process.priority}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>

      <div
        style={
          parentData.length
            ? {
                display: "block",
                display: "flex",
                flexWrap: "wrap",
                alignSelf: "end",
              }
            : { display: "none" }
        }
      >
        <button
          type="button"
          className="btn btn-success m-2 "
          style={{ width: "10rem" }}
          onClick={execute}
        >
          Execute
        </button>
        <button
          onClick={clearAllData}
          type="button"
          className="btn btn-danger m-2 "
          style={{ width: "10rem" }}
        >
          ↻ Clear All
        </button>
      </div>

      <h5>Result</h5>
      {/* result process table */}
      <div
        className="my-2 p-2"
        style={
          parentData.length
            ? { display: "block", maxHeight: "20rem", overflow: "auto" }
            : { display: "none" }
        }
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Process Id</th>
              <th>Arrival Time</th>
              <th>Burst Time</th>
              <th>Priority</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Wait Time</th>
              <th>Turn Around Time</th>
            </tr>
          </thead>
          <tbody>
            {resultData.map((process) => {
              return (
                <>
                  <tr>
                    <td>{process.pid}</td>
                    <td>{process.arrivalTime}</td>
                    <td>{process.burstTime} units</td>
                    <td>{process.priority}</td>
                    <td>{process.startTime}</td>
                    <td>{process.endTime}</td>
                    <td>{process.waitTime}</td>
                    <td>{process.turnAroundTime}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="button"
            className="btn btn-outline-success m-2 "
            style={{ width: "10rem" }}
          >
            Visualize
          </button>
          <button
            type="button"
            className="btn btn-outline-dark m-2 "
            style={{ width: "10rem" }}
            onClick={() => {
              navigate("/charts");
            }}
          >
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputPage;
