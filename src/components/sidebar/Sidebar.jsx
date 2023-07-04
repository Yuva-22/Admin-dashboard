import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>DashBoard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <PersonRoundedIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <InventoryIcon className="icon"/>
                    <span>Products</span>
                </li>
                <li>
                    <ShoppingCartIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL LINKS</p>
                <li>
                    <InsertChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <SystemUpdateAltIcon className="icon"/>
                    <span>System help</span>
                </li>
                <li>
                    <WebStoriesIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="color"></div>
            <div className="color"></div>
        </div>
    </div>
  )
}

export default Sidebar