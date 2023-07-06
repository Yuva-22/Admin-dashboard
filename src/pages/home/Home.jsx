import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="User"/>
          <Widget type="Order"/>
          <Widget type="Earnings"/>
          <Widget type="Balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={ 2 / 1} title="Last 6 Months(Revenue)" />
        </div>
        <div className="listcontainer">
          <div className="listtitle">Latest Transaction</div>
          < Table />
        </div>
       </div>
    </div>
  )
}

export default Home    