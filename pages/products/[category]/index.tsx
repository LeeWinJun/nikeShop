import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";

import { fetchDataByMenu } from "@/data/fetchData/fetchData";
import Sidebar from "@/components/component/Sidebar";
import ShopCard from "@/components/component/ShopCard";
import { NextPage } from "next";

interface data {
  menus: string[];
  brands: string[];
  products: any[];
  category: string;
}

const CategoryPage: NextPage<data> = ({ menus, brands, products, category }) => {
  //useSelector는 사용되는 페이지에서 사용해야 하는 건가 보다 Layout컴포넌트에서 사용하니까 getStaticprops가 잘못 됐다는 오류가 나온다.
  const selectMenu = useSelector((state: RootState) => state.menu.menu);

  const [hideMenu, setHideMenu] = useState(false);
  const handleHideMenu = () => {
    setHideMenu(!hideMenu);
  };

  //데이터
  return (
    <div className="category">
      <div className="wrapper flex justify-between  my-10">
        <p className="text-2xl">{`${selectMenu} (${selectMenu.length})`}</p>
        <p className="flex items-center" onClick={handleHideMenu}>
          <span className="mr-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 8.25H10M4.75 8.25H3" stroke="#111111" stroke-width="1.5" />
              <path
                d="M7.5 6C7.20453 6 6.91194 6.0582 6.63896 6.17127C6.36598 6.28434 6.11794 6.45008 5.90901 6.65901C5.70008 6.86794 5.53434 7.11598 5.42127 7.38896C5.3082 7.66194 5.25 7.95453 5.25 8.25C5.25 8.54547 5.3082 8.83806 5.42127 9.11104C5.53434 9.38402 5.70008 9.63206 5.90901 9.84099C6.11794 10.0499 6.36598 10.2157 6.63896 10.3287C6.91194 10.4418 7.20453 10.5 7.5 10.5C8.09674 10.5 8.66903 10.2629 9.09099 9.84099C9.51295 9.41903 9.75 8.84674 9.75 8.25C9.75 7.65326 9.51295 7.08097 9.09099 6.65901C8.66903 6.23705 8.09674 6 7.5 6Z"
                stroke="#111111"
                stroke-width="1.5"
              />
              <path d="M3 15.75H13.75M18.75 15.75H21" stroke="#111111" stroke-width="1.5" />
              <path
                d="M16.5 13.5C15.9033 13.5 15.331 13.7371 14.909 14.159C14.4871 14.581 14.25 15.1533 14.25 15.75C14.25 16.3467 14.4871 16.919 14.909 17.341C15.331 17.7629 15.9033 18 16.5 18C17.0967 18 17.669 17.7629 18.091 17.341C18.5129 16.919 18.75 16.3467 18.75 15.75C18.75 15.1533 18.5129 14.581 18.091 14.159C17.669 13.7371 17.0967 13.5 16.5 13.5Z"
                stroke="#111111"
                stroke-width="1.5"
              />
            </svg>
          </span>
          필터 숨기기
        </p>
      </div>
      <div className="wrapper flex">
        <Sidebar className={hideMenu ? "hide" : ""} menus={menus} brands={brands} />
        <ShopCard products={products} hideMenu={hideMenu} category={category} />
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(context: any) {
  //현재 params를 파악하는 코드
  const { category } = context.params;
  const { products, menus, brands } = fetchDataByMenu(category);

  return {
    props: {
      products,
      menus,
      brands,
      category,
    },
  };
}
