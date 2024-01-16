import Chart from "react-apexcharts";

export const BarChart = () => {
  const chartData = {
    options: {
      title: {
        text: "Company Growth",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      chart: {
        id: "basic-bar",
        toolbar: {
          show: true,
        },
      },
      // annotations: {
      //   yaxis: [
      //     {
      //       y: 120,
      //       // y2: 80,
      //       // fillColor: "#00E3911",
      //       borderColor: "black",
      //       label: {
      //         borderColor: "black",
      //         style: {
      //           color: "white",
      //           background: "black",
      //         },
      //         text: "Y-axis annotation on 120",
      //       },
      //     },
      //   ],
      // },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2000],
        title: {
          // text: "Year",
        },
        // labels: {
        //   style: {
        //     colors: "red",
        //     fontSize: "12px",
        //     fontWeight: 800,
        //   },
        // },
      },
      yaxis: {
        title: {
          text: "Number of Employees",
        },
      },
    },
    series: [
      {
        name: "Company 1",
        data: [30, 40, 45, 50, 49, 60, 70, 0, 91],
      },
      {
        name: "Company 2",
        data: [102, 110, 115, 100, 159, 120, 130, 111],
      },
      {
        name: "Company 3",
        data: [10, 20, 25, 30, 29, 30, 40, 11],
      },
    ],
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      width="800"
    />
  );
};
