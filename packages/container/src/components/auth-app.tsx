import { mount } from "shared_app1/AuthApp";
import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface AuthAppProps {
  onSignIn: () => void;
}

const RemoteLoginApp: React.FC<AuthAppProps> = ({ onSignIn = () => {} }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }: { pathname: string }) => {
        if (location.pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
      onSignIn,
    });

    return () => {
      // Cleanup if necessary when component unmounts
    };
  }, [location, navigate]);

  return <div ref={ref} />;
};

export default RemoteLoginApp;
