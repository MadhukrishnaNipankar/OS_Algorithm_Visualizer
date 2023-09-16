import React from "react";

function Visualize() {
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
          5 secs
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
          <div>
            <p>Ready Queue</p>
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
        <button type="button" className="mb-4 mx-3 btn btn-info">
          Prev
        </button>
        <button type="button" className="mb-4 mx-3 btn btn-info">
          Next
        </button>
      </div>
    </div>
  );
}

export default Visualize;
