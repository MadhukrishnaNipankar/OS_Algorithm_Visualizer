import React, { useEffect } from "react";
import stl from "../styles/chart.module.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { PureComponent } from "react";
import { BarChart, Bar, Cell } from "recharts";
import { RadialBarChart, RadialBar } from "recharts";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function Chart() {
  const data = JSON.parse(localStorage.getItem("fcfsResult"));

  useEffect(() => {
    console.log(data);
  }, []);

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <div className={stl.Main}>
      <div className={stl.head}>Scheduling Report</div>
      <div className={stl.main}>
        <div style={{ display: "flex" }}>
          <div
            className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "54vh",
              width: "38rem",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pid" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="startTime"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="arrivalTime" stroke="#82ca9d" />
                <Line
                  type="monotone"
                  dataKey="priority"
                  stroke="rgb(216, 132, 132)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div
            className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "54vh",
              width: "38rem",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pid" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="startTime"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="endTime"
                  stroke="rgb(216 132 132)"
                  fill="rgb(216 132 132)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "54vh",
              width: "38rem",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pid" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="waitTime" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="turnAroundTime" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div
            className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "54vh",
              width: "38rem",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={10}
                data={data}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: "insideStart", fill: "#8884d8" }}
                  background
                  clockWise
                  dataKey="burstTime"
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={style}
                  dataKey="pid"
                  name="pid"
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <p>Brust Time Time</p>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "54vh",
              width: "38rem",
            }}
          >
            <div style={{ width: "100%" }}>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  width={500}
                  height={200}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="pid" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="waitTime"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />

                  <Line
                    type="monotone"
                    dataKey="turnAroundTime"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
              <p>Wait Time</p>
            </div>
          </div>

          <div
            className="card my-5 mx-3 shadow p-3 mb-5 bg-white rounded"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "54vh",
              width: "38rem",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="pid" />
                <PolarRadiusAxis />
                <Radar
                  name="Mike"
                  dataKey="turnAroundTime"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
            <p>Turn Around Time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
