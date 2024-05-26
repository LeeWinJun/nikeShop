import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "@/store/reducer/slices/selectReducer";
import { RootState } from "@/store/store";

interface MenuCategory {
  menus: string[];
  brands: string[];
  className: string;
}

const Sidebar: React.FC<MenuCategory> = ({ brands, menus, className }) => {
  const dispatch = useDispatch();
  //가격대
  const valuetext = (value: number) => {
    return `${value}`;
  };

  const [value, setValue] = React.useState<number[]>([0, 150000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  //메뉴 숨기기
  const [hideMenu, setHideMenu] = useState({
    color: true,
    brand: true,
    price: true,
  });

  //typeof는 객체의 데이터를 객체 타입으로 변환해 준다.
  //keyof는 객체 형태의 타입을, 따로 속성들만 뽑아 모아 유니온 타입으로 만들어주는 연산자
  //같이 사용한 이유는 데이터를 객체 타입으로 변환 시키고 그 안에서 각 각의 키를 가져온다.
  const handleHideMenu = (menuState: keyof typeof hideMenu) => {
    setHideMenu((prevState) => ({
      ...prevState,
      [menuState]: !prevState[menuState],
    }));
  };

  //아이템 필터링

  const handleSelectedChecked = (value: string) => {
    dispatch(filterAction.filteredItems(value));
  };

  return (
    <div className={`sidebar min-w-[260px] h-lvh  ${className}`}>
      <div className={`menu-section`}>
        <ul>
          {menus.map((menuItem: any, index) => {
            return (
              <li className="font-medium mb-3" key={index}>
                <input id={menuItem} type="checkbox" className="w-5 h-5 rounded border checked:bg-black mr-2" onClick={() => handleSelectedChecked(menuItem)} value={menuItem} />
                <label htmlFor={menuItem}>{menuItem}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="menu-section border-t border-solid  ">
        <div className="flex justify-between">
          <h4>브랜드</h4>
          <button onClick={() => handleHideMenu("brand")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5906 16.5L19.5 15.5297L12 7.5L4.5 15.5297L5.40469 16.5L12 9.44531L18.5906 16.5Z" fill="black" />
            </svg>
          </button>
        </div>
        {hideMenu.brand ? (
          <ul>
            {brands.map((brandItem: any, index) => {
              return (
                <li className="flex items-center mb-4" key={index}>
                  <input id={brandItem} type="checkbox" onChange={() => handleSelectedChecked(brandItem)} className=" w-5  h-5 mr-2  border rounded checked:bg-black"></input>
                  <label htmlFor={brandItem}>{brandItem}</label>
                  <div className="flex items-center me-4"></div>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      <div className="menu-section border-t border-solid ">
        <div className="flex justify-between">
          <h4>색상</h4>
          <button onClick={() => handleHideMenu("color")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5906 16.5L19.5 15.5297L12 7.5L4.5 15.5297L5.40469 16.5L12 9.44531L18.5906 16.5Z" fill="black" />
            </svg>
          </button>
        </div>
        {hideMenu.color ? (
          <ul className="flex color-menu">
            <li>
              <input className=" bg-white checked:border-black checked:bg-gray-400" onChange={() => handleSelectedChecked("화이트")} value={"화이트"} type="checkbox" id="화이트" />
              <label htmlFor="화이트">화이트</label>
            </li>
            <li>
              <input className=" bg-black   checked:border-white checked:bg-black" onChange={() => handleSelectedChecked("블랙")} value={"블랙"} type="checkbox" id="블랙" />
              <label htmlFor="블랙">블랙</label>
            </li>
            <li>
              <input className=" bg-[#C63232]    checked:border-black checked:bg-red-700" onChange={() => handleSelectedChecked("레드")} value={"레드"} type="checkbox" id="레드" />
              <label htmlFor="레드">레드</label>
            </li>
            <li>
              <input className=" bg-[#1790C8]  checked:border-black checked:bg-blue-700" onChange={() => handleSelectedChecked("블루")} value={"블루"} type="checkbox" id="블루" />
              <label htmlFor="블루">블루</label>
            </li>
          </ul>
        ) : null}
      </div>
      <div className="menu-section border-t border-solid ">
        <div className="flex justify-between">
          <h4>가격대</h4>
          <button onClick={() => handleHideMenu("price")}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5906 16.5L19.5 15.5297L12 7.5L4.5 15.5297L5.40469 16.5L12 9.44531L18.5906 16.5Z" fill="black" />
            </svg>
          </button>
        </div>
        {hideMenu.price ? <Slider className="max-w-[230px]" getAriaLabel={() => "Temperature range"} value={value} min={0} max={150000} step={1000} onChange={handleChange} valueLabelDisplay="auto" getAriaValueText={valuetext} /> : null}
      </div>
    </div>
  );
};

export default Sidebar;
