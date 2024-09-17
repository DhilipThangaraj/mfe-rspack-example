import React, { useEffect, useRef } from "react";

import { mount } from "shared_app1/Login";

const RemoteLoginApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default RemoteLoginApp;
