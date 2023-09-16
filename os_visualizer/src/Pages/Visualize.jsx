import React, { useEffect, useState } from "react";

function Visualize() {
  const [globleTime, setGlobleTime] = useState(0);
  const [readyQueue, setReadyQueue] = useState([]);
  const [ganttChart, setganttChart] = useState([]);

  const changeTime = async (increment) => {
    const newTime = globleTime + increment;
    await setGlobleTime(newTime);
    fillReadyQueue(newTime);
  };

  const fillReadyQueue = (time) => {
    const data = JSON.parse(localStorage.getItem("fcfsResult"));
    data.sort((a, b) => a.arrivalTime - b.arrivalTime);

    const newReadyQueue = data.filter((item) => item.arrivalTime <= time);
    setReadyQueue(newReadyQueue);
  };

  useEffect(() => {
    fillReadyQueue(globleTime);
  }, [globleTime]);

  // const fillReadyQueue = () => {
  //   const data = JSON.parse(localStorage.getItem("fcfsResult"));
  //   data.sort((a,b)=>(a.arrivalTime-b.arrivalTime));
  //   setReadyQueue([]);

  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].arrivalTime <= globleTime) {

  //        setReadyQueue([...readyQueue, data[i]]);
  //     }
  //   }

  //   console.log(globleTime,readyQueue);
  // };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
        style={{
          display: "flex",
          minHeight: "fitContent",
          width: "70rem",
        }}
      >
        {/* Timer */}
        <h4
          className="p-2"
          style={{
            // border: "2px solid red",
            borderRadius: "0.4rem",
            backgroundColor: "black",
            color: "white",
            width: "5rem",
            height: "5rem",
          }}
        >
          {globleTime} secs
        </h4>

        {/* Execution Unit  */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {/* processor */}
          <div>
            <p>Processor</p>
            <h4
              style={{
                // border: "2px solid red",
                borderRadius: "0.4rem",
                backgroundColor: "black",
                color: "white",
                width: "5rem",
                height: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5
                style={{
                  width: "3rem",
                  height: "60%",
                  backgroundColor: "rgb(193 84 84)",
                  margin: "auto 0.25rem",
                  borderRadius: "0.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                1
              </h5>
            </h4>
          </div>

          <div
            className="mt-1"
            style={{ fontSize: "5rem", color: "rgb(147 138 148)" }}
          >
            ⇠
          </div>
          {/* Ready Queue */}
          <div
            style={{
              overflow: "hidden" /* Hide the scrollbar */,
            }}
          >
            <p>Ready Queue</p>
            <div
              id="readyQueueContainer"
              style={{
                borderRadius: "0.4rem",
                overflowX: "auto",
                backgroundColor: "black",
                height: "3rem",
                width: "18rem",
                display: "flex",
                flexDirection: "row",
                color: "white",
                // alignItems: "center",
              }}
            >
              {/* processes */}

              {readyQueue.map((process) => {
                // Get the container element by ID
                const container = document.getElementById(
                  "readyQueueContainer"
                );

                // Scroll to the end of the container
                container.scrollLeft = container.scrollWidth;
                return (
                  <>
                    <h5
                      style={{
                        width: "3rem",
                        minWidth: "3rem",
                        flexWrap: "wrap",
                        height: "85%",
                        backgroundColor: "#5454c1",
                        margin: "auto 0.25rem",
                        borderRadius: "0.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      P{process.pid}
                    </h5>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gantt Chart  */}
        <div style={{ marginTop: "10rem" }}>
          <h5>Gantt Chart</h5>
          <div
            style={{
              borderRadius: "0.4rem",
              backgroundColor: "black",
              height: "3rem",
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignItems: "center",
            }}
          >
            {/* processes */}
            <h5
              style={{
                width: "3rem",
                height: "85%",
                backgroundColor: "#5454c1",
                margin: "auto 0.25rem",
                borderRadius: "0.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </h5>
            <h5
              style={{
                width: "3rem",
                height: "85%",
                backgroundColor: "#5454c1",
                margin: "auto 0.25rem",
                borderRadius: "0.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </h5>
            <h5
              style={{
                width: "3rem",
                height: "85%",
                backgroundColor: "#5454c1",
                margin: "auto 0.25rem",
                borderRadius: "0.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </h5>
            <h5
              style={{
                width: "3rem",
                height: "85%",
                backgroundColor: "#5454c1",
                margin: "auto 0.25rem",
                borderRadius: "0.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </h5>
            <h5
              style={{
                width: "3rem",
                height: "85%",
                backgroundColor: "#5454c1",
                margin: "auto 0.25rem",
                borderRadius: "0.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </h5>
            <h5
              style={{
                width: "3rem",
                height: "85%",
                backgroundColor: "#5454c1",
                margin: "auto 0.25rem",
                borderRadius: "0.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </h5>
          </div>
        </div>
        {/* Gantt Chart End */}
      </div>

      {/* next and prev buttons */}
      <div style={{ display: "flex" }}>
        <button
          type="button"
          className="mb-4 mx-3 btn btn-info"
          onClick={() => {
            changeTime(-1);
          }}
        >
          Prev
        </button>
        <button
          type="button"
          className="mb-4 mx-3 btn btn-info"
          onClick={() => {
            changeTime(1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Visualize;
