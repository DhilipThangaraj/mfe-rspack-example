import React, { useEffect, useRef } from "react";

import { mount } from "shared_app2/MarketingHomeApp";

const RemoteMarketingHomeApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default RemoteMarketingHomeApp;
