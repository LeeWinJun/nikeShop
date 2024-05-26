import { fetchDetailData } from "./fetchDetailData";

export const fetchUrl = (url: string) => {
  //동적 세그먼트
  const category = url.split("/")[5] || "";
  const detailFind = url.split("/")[6] || "";
  const detailNum = detailFind.split(".")[0] || "";

  const filteredDetailProduct = fetchDetailData(category, detailNum);

  return filteredDetailProduct;
};
