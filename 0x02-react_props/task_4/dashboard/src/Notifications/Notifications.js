import React, { Fragment } from "react";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer }) => {
  return (
    <Fragment>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
          <button
            type="button"
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
            style={{
              display: "inline-block",
              position: "absolute",
              right: "0.5rem",
              top: "0.5rem",
              border: "none",
              margin: "0.5rem",
              backgroundColor: "transparent",
              zIndex: "1",
            }}
          >
            <img
              src={close_icon}
              alt=""
              style={{ width: "1rem", height: "1rem", padding: "0.2rem" }}
            />
          </button>
        </div>
      )}
    </Fragment>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;