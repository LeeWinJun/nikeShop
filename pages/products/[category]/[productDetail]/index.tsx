import { fetchDetailData } from "@/data/fetchData/fetchDetailData";
import { NextPage } from "next";
import ImageZoom from "react-image-zooom";
interface detailPropsType {
  filteredDetailProduct: any;
  notFound: boolean;
}

const shoesDetail: NextPage<detailPropsType> = ({ filteredDetailProduct, notFound }) => {
  const shoesSize: string[] = ["225", "230", "235", "240", "245", "250", "255", "260", "265", "270", "275", "280", "285", "290"];

  return (
    <>
      {notFound ? (
        <p className="fixed left-1/2 top-1/2  -translate-x-1/2  -translate-y-1/2">해당 상품을 찾을 수 없습니다. 다시 시도해주세요</p>
      ) : (
        <div className="mx-12 flex mt-12">
          <div className="flex image-zoom flex-wrap ">
            <ImageZoom src={filteredDetailProduct.src_1_1} alt={filteredDetailProduct.title} />
            <ImageZoom src={filteredDetailProduct.src_1_2} alt={filteredDetailProduct.title} />
            <ImageZoom src={filteredDetailProduct.src_1_3} alt={filteredDetailProduct.title} />
            <ImageZoom src={filteredDetailProduct.src_1_4} alt={filteredDetailProduct.title} />
          </div>
          <div className="order ml-4 max-w-[438px] px-10 sticky top-12 h-full mt-12">
            <h3 className="font-bold m-0 leading-normal">{filteredDetailProduct.title}</h3>
            <p className="text-[#757575] mb-6">{filteredDetailProduct.jender}</p>
            <p className="font-medium mb-6">{filteredDetailProduct.price} 원</p>
            <div>
              <ul className="flex justify-between">
                <li className="font-medium">사이즈 선택</li>
                <li className="text-[#999999]">사이즈 가이드</li>
              </ul>
              <ul className="flex flex-wrap gap-1 justify-stretch mb-6">
                {shoesSize.map((size) => {
                  return (
                    <li key={size} className="relative ">
                      <label htmlFor={size} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {size}
                      </label>
                      <input id={size} type="checkbox" className="w-[68px] h-10 rounded-[5px]" />
                    </li>
                  );
                })}
              </ul>
              <div className="addCart mb-9">
                <button type="button" className="w-[355px] h-[63px] bg-[#111111] text-white rounded-full mb-3 flex justify-center items-center">
                  장바구니
                  <span className="ml-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.5 5.5V4C5.5 3.60218 5.65804 3.22064 5.93934 2.93934C6.22064 2.65804 6.60218 2.5 7 2.5H9C9.39782 2.5 9.77936 2.65804 10.0607 2.93934C10.342 3.22064 10.5 3.60218 10.5 4C10.5 4.39782 10.342 4.77936 10.0607 5.06066C9.77936 5.34196 9.39782 5.5 9 5.5H2.5V11C2.5 11.663 2.76339 12.2989 3.23223 12.7678C3.70107 13.2366 4.33696 13.5 5 13.5H11C11.663 13.5 12.2989 13.2366 12.7678 12.7678C13.2366 12.2989 13.5 11.663 13.5 11V5.5H11.6667"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </span>
                </button>
                <button type="button" className="w-[355px] h-[63px] rounded-full border-[#a9a9a9] border-solid border-[1px] flex justify-center items-center">
                  위시리스트
                  <span className="ml-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.1947 2.50001C12.0773 2.50001 12.9067 2.84401 13.5307 3.46734C14.1495 4.08729 14.497 4.92742 14.497 5.80334C14.497 6.67927 14.1495 7.5194 13.5307 8.13934L7.99867 13.672L2.466 8.13934C1.84741 7.51943 1.5 6.67944 1.5 5.80368C1.5 4.92792 1.84741 4.08793 2.466 3.46801C2.77202 3.16021 3.13606 2.91617 3.53704 2.75001C3.93801 2.58385 4.36797 2.49888 4.802 2.50001C5.68467 2.50001 6.514 2.84401 7.138 3.46734L7.64467 3.97401L7.99867 4.32801L8.352 3.97401L8.85867 3.46734C9.16481 3.15975 9.52889 2.91589 9.92985 2.74986C10.3308 2.58382 10.7607 2.4989 11.1947 2.50001Z"
                        stroke="#111111"
                        stroke-width="1.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <p className="mb-9">{filteredDetailProduct.desc}</p>
              <p>컬러: {filteredDetailProduct.color}</p>
              <p>스타일: {filteredDetailProduct.code}</p>
              <p>리뷰</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default shoesDetail;

export async function getServerSideProps(context: any) {
  //현재 경로 가져오기
  const url = context.req.url || "";

  //동적 세그먼트
  const category = url.split("/")[5] || "";
  const detailFind = url.split("/")[6] || "";
  const detailNum = detailFind.split(".")[0] || "";

  const filteredDetailProduct = fetchDetailData(category, detailNum);

  if (filteredDetailProduct == null) {
    return {
      props: {
        notFound: true,
        filteredDetailProduct: null,
      },
    };
  } else {
    return {
      props: {
        filteredDetailProduct,
        notFound: false,
      },
    };
  }
}
