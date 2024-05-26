import MainNavigation from "../component/MainNavigation";

type MyComponentProps = {
  children: React.ReactNode;
}
const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
