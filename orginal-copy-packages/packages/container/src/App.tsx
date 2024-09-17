import React, { lazy } from "react";

const RemoteLogin = lazy(() => import("shared_app1/Login"));
// const RemoteMarketingMount = lazy(() => import("shared_app2/Marketing"));

const App = () => {
  return (
    <div className="content">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "yellow",
          color: "black",
          fontSize: "20px",
        }}
      >
        {"Container App"}
      </div>
      <div>
        <RemoteLogin />
      </div>
    </div>
  );
};

export default App;
