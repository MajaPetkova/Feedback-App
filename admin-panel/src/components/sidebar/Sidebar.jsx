import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">MayAdmin</span>
      </div>
      <hr />
      <div className="center">
        <p className="title">MAIN</p>
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon />
            <span>User</span>
          </li>
          <li>
            <StoreIcon />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
}

export default Sidebar;
