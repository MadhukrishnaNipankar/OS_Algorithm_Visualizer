import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function InputPage() {
  // for storing complete data that is added
  const [parentData, setParentData] = useState([]);

  //   for handling temporary change of input fields
  const [data, setData] = useState({
    pid: "",
    arrivalTime: "",
    burstTime: "",
    priority: "",
  });

  const addProcess = () => {
    setParentData([...parentData, data]);
    // set parentData to localStorage
    localStorage.setItem("data", JSON.stringify(parentData));
    console.log(JSON.parse(localStorage.getItem("data")));
    setData({
      pid: "",
      arrivalTime: "",
      burstTime: "",
      priority: "",
    });
  };

  const clearAllData = () => {
    if (
      !window.confirm("Are You Sure you want to clear all the added processes?")
    )
      return;

    setParentData([]);
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
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
        >
          Visualize
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
    </div>
  );
}

export default InputPage;
