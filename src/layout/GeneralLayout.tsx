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
      {/* TODO 4-2: Recoil atom `UserAtom`을 이용해 userProfile props 대체 및 삭제 */}
      <HeaderBar Content={"SidebarContent"} />
      <div className="general-layout__body">{children}</div>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
