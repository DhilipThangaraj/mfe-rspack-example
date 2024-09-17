import React, { Suspense } from "react";

// Higher-Order Component to wrap lazy-loaded components in Suspense
const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
