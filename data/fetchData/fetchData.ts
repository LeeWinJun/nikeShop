import { shoesBrands, shoesData, shoesMenus } from "../shoes";
import { clothesBrands, clothesData, clothesMenus } from "../clothes";

export const fetchDataByMenu = (selectMenu: any) => {
  let products: any[] = [];
  let menus: string[] = [];
  let brands: string[] = [];

  if (selectMenu === "shoes") {
    products = shoesData;
    menus = shoesMenus;
    brands = shoesBrands;
  } else if (selectMenu === "clothes") {
    products = clothesData;
    menus = clothesMenus;
    brands = clothesBrands;
  }

  return {
    products,
    menus,
    brands,
  };
};
