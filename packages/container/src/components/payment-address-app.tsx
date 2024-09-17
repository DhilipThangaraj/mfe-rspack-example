import React, { useEffect, useRef } from "react";

import { mount } from "shared_app4/PaymentAddressApp";

const RemotePaymentAddressApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default RemotePaymentAddressApp;
