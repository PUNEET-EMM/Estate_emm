import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Estate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/list">Buy</Link>
        <Link to="/add">Sell</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="User avatar" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">Sign up</Link>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/list" onClick={() => setOpen(false)}>Buy</Link>
          <Link to="/add" onClick={() => setOpen(false)}>Sell</Link>
          {currentUser ? (
            <>
              <Link to="/profile" onClick={() => setOpen(false)}>My Profile</Link>
              <Link to="/profile/update" onClick={() => setOpen(false)}>Edit Profile</Link>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Sign in</Link>
              <Link to="/register" onClick={() => setOpen(false)}>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
