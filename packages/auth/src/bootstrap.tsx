import React from "react";
import ReactDOM from "react-dom/client";
import {
  createMemoryRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

type MountOptions = {
  onNavigate?: ({ pathname }: { pathname: string }) => void;
  onSignIn?: () => void;
  defaultHistory?: boolean;
  initialPath?: string;
};

const mount = (
  el: HTMLElement | null,
  { onNavigate, onSignIn, defaultHistory, initialPath }: MountOptions
): void => {
  if (!el) return;

  let router;

  if (defaultHistory) {
    // If we're running in isolation, create a BrowserRouter
    router = createBrowserRouter([{ path: "*", element: <App /> }]);
  } else {
    // If we're running inside the parent, rely on the parent's Router
    router = createMemoryRouter([{ path: "*", element: <App /> }], {
      initialEntries: [initialPath || "/"],
    });
  }

  if (onNavigate) {
    router.subscribe(({ location }) => {
      const nextPathname = location.pathname;
      onNavigate({ pathname: nextPathname });
    });
  }

  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("shared_app1_auth");

  if (devRoot) {
    mount(devRoot, { defaultHistory: true });
  }
}

export { mount };
