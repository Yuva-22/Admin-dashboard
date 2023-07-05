import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize="small" />
        </div>
        <div className="bottom">
            <div className="featuredchart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous Transactions Processing...</p>
            <div className="summary">
               <div className="item">
                   <div className="itemtitle">Our Target</div>
                   <div className="itemresult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    <div className="resultamount">$36.4k</div>
                   </div>
               </div>
               <div className="item">
                   <div className="itemtitle">Last Week</div>
                   <div className="itemresult negative">
                    <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    <div className="resultamount">$22.4k</div>
                   </div>
               </div>
               <div className="item">
                   <div className="itemtitle">Last Month</div>
                   <div className="itemresult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    <div className="resultamount">$48.4k</div>
                   </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Featured