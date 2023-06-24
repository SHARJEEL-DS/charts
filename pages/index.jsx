import Example from "./Example";
import ChartPage from "./charts";
import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import PieChart from "./Charts/PieChart";
import LineChart from "./Charts/LineChart";
// import Aarea from "./Charts/Aarea"
export default function Home() {
  return (
    <div>
    
    <Example/>
    <div className=" m-7">
  <BarChart/>
</div>
    <div className=" m-7">
    <DoughnutChart/>
    </div>
    <PieChart/>
    <div className=" m-7">
    <LineChart/>
    </div>
    </div>
  )
}
