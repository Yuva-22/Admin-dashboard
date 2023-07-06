import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singlecontainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s" alt="image" className="itemimg" />
              <div className="details">
                  <h1 className="itemtitle">John Smith</h1>
                  <div className="detailitem">
                    <span className="itemkey">Email:</span>
                    <span className="itemvalue">abc@gmail.com</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">Phone:</span>
                    <span className="itemvalue">9876543210</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">Address:</span>
                    <span className="itemvalue">abc street,melbourne</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">Country:</span>
                    <span className="itemvalue">USA</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={ 3 / 1 } title="User Transacation(Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">User Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single