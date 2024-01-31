import ReactEcharts from "echarts-for-react";
import PropTypes from "prop-types";

const getChartColorsArray = (dataColors) => {
  return dataColors || ["#4CAF50", "#2196F3", "#FFC107", "#FF5722", "#9C27B0"];
};

// Doughnut Chart
const ProjectStatus = ({ dataColors }) => {
  const chartDoughnutColors = getChartColorsArray(dataColors);

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      itemGap: 10,
      left: "20",
      textStyle: {
        color: "grey",
      },
    },
    color: chartDoughnutColors,
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        top: "20%",
        width: "350px",
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "project 1" },
          { value: 735, name: "project 2" },
          { value: 580, name: "project 3" },
          { value: 484, name: "project 4" },
          { value: 300, name: "project 5" },
        ],
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        marginTop: "26px",
        marginRight: "24px",
        marginLeft: "-10px",
        backgroundColor: "white",
      }}
    >
      <ReactEcharts
        option={option}
        style={{ height: "350px", width: "300px" }}
      />
    </div>
  );
};

// Prop validation for DoughnutChart component
ProjectStatus.propTypes = {
  dataColors: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectStatus;
