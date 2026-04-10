import "../globals.css";
import CustomCursor from "../components/common/CustomCursor";
import Header from "../components/common/Header";
import SiteFooter from "../components/common/SiteFooter";

export default function FrontLayout({ children }) {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <SiteFooter />

    </>
  );
}
