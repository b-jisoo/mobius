import React from "react";
import HeaderBar from "../components/HeaderBar";
import { useRouter } from "../hooks/useRouter";
import Footer from "./Footer";

interface GeneralLayoutProps {
  children: React.ReactNode;
  isAdminPage?: boolean;
}

const GeneralLayout = ({ children, isAdminPage }: GeneralLayoutProps) => {
  const { routeTo } = useRouter();

  return (
    <div className="general-layout">
      <HeaderBar Content={"SidebarContent"} />
      <div className="general-layout__body">{children}</div>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
