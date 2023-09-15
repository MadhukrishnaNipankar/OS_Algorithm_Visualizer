import React from "react";
import style from "../styles/chart.module.css";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from 'recharts';
import  { PureComponent } from 'react';
import { BarChart, Bar, Cell } from 'recharts';
import { RadialBarChart, RadialBar } from 'recharts';


export default function Chart() {


    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


      const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
      };

  return (
    <div className={style.Main}>


      <div style={{"backgroundColor": "#d0d0c7",
    "padding": "1rem 0rem",
    "borderRadius": "0.4rem",
    "fontSize": "1.5rem",
    "MarginTop": "2rem"
    
    }}>Graphs</div>
      <div className={style.main}>
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
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
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
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
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
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
            <h1 className="my-2">Algo.Visualizer</h1>
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
            <h1 className="my-2">Algo.Visualizer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
