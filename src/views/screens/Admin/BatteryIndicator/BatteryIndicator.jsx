//Packages
import React from "react";

//Componentes
import { Chart } from "react-google-charts";

//Hooks
import useViews from "../../..";

//Styles
import { StyledChart } from "./BatteryIndicator.styles";

const data = [
  ["Task", "Hours per Day"],
  ["Activos", 11],
  ["Inactivos", 2],
];

const options = {
  title: "Indice de continuidad en educacion de los egrasados gimnasistas",
  is3D: true,
};

const data2 = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

const BatteryIndicator = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();
  return (
    <AdminLayout>
      <h2 className="text-center font-bold text-2xl">
        {" "}
        Bateria de indicadores{" "}
      </h2>

      <StyledChart>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data2}
          options={{ title: "Tipo de estudio" }}
        />
      </StyledChart>
    </AdminLayout>
  );
};

export default BatteryIndicator;
