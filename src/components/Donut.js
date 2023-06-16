import Chart from "react-apexcharts";
export default function Donut() {
  const options = {
    dataLabels: {
      enabled: false
    },
    labels: ["tamil nadu", "other states", "other countries"],
    plotOptions: {
      donut: {
        size: "80%"
      }
    }
  };
  const series = [65, 32, 3];

  return (
    <>
      <Chart
        series={series}
        options={options}
        type="donut"
        width={400}
        height={200}
      />
    </>
  );
}
// import "./styles.css";
// import { useState } from "react";
// import Chart from "react-apexcharts";
// export default function App() {
//   const [state, setstate] = useState({
//     options: {
// dataLabels: {
//   enabled: false,
//     },
//     chart:{
//       id:"basic-bar"
//     },
// plotOptions: {
//   pie: {
//     donut: {
//       size: "80%"
//     }
//   }
// }
//     },
//     series: [44, 55, 41],
//     chartOptions: {
//       labels: ["Apple", "Mango", "Orange"]
//     }
//   });

//   return (
//     <div className="App">
//       <Chart
//         options={state.options}
//         series={state.series}
//         type="donut"
//         width="380"
//       />
//     </div>
//   );
// }
