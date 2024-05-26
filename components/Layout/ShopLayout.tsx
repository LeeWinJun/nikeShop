import Sidebar from "../component/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type ShopLayoutPorps = {
  children: React.ReactNode;
};

//생각을 해보자 여기서 하는 것 보다 그냥 저기 가서 하는 게 좀 더 변한 거 아니가

const ShopLayout: React.FC<ShopLayoutPorps> = ({ children }) => {
  const selectMenu = useSelector((state: RootState) => {
    state.menu.menu;
  });

  return (
    <div className="flex">
      <Sidebar menus={selectMenu} />
      <main>{children}</main>
    </div>
  );
};

export default ShopLayout;
