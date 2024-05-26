import { shoesData } from "../shoes";
import { clothesData } from "../clothes";

export const fetchDetailData = (category: string, detailNum: string) => {
  let productDetailItem: any = null;
  if (category === "shoes") {
    productDetailItem = shoesData.find((item) => item.id === parseInt(detailNum));
  } else if (category === "clothes") {
    productDetailItem = clothesData.find((item) => item.id === parseInt(detailNum));
  }

  console.log("아이템", productDetailItem);

  if (!productDetailItem) {
    console.log(`카테고리 ${category} 상품의 ${detailNum}번째 상품을 찾지 못하였습니다.`);
  } else {
    console.log(`카테고리${category}의 ${detailNum}번째 상품을 찾았습니다.`);
  }
  return productDetailItem;
};
