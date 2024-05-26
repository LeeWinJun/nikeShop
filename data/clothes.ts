export const clothesBrands: string[] = [];
export const clothesMenus: string[] = [];

export const clothesData = [
  //아이디를 여기서 생성하지말고 math.random으로 해서 자동으로 생성되게 만들어 보자고
  { id: 1, best: true, title: "옷 에어 포스 1 '07", jender: "남성신발", price: 139000, code: "CW2288-111", color: "화이트/화이트", menu: "옷스타일", brand: "나이키" },
  { id: 2, best: false, title: "나이키 덩크 로우 레트로", jender: "남성신발", price: 139000, code: "DD1391-103", color: "화이트/그레이포그", menu: "조던", brand: "나이키" },
  { id: 3, best: false, title: "나이키 덩크 로우 레트로", jender: "남성신발", price: 139000, code: "DD1391-103", color: "블루", menu: "라이프스타일", brand: "조던" },
  { id: 4, best: false, title: "나이키 덩크 로우 레트로", jender: "남성신발", price: 139000, code: "DD1391-103", color: "레드", menu: "러닝", brand: "AGC" },
  { id: 5, best: false, title: "나이키 덩크 로우 레트로", jender: "남성신발", price: 139000, code: "DD1391-103", color: "블랙", menu: "라이프스타일", brand: "조던" },
];



clothesData.forEach((clothes) => {
  //사이드바 신발 카테고리

  if (!clothesMenus.includes(clothes.menu)) {
    clothesMenus.push(clothes.menu);
  }

  //사이드바 신발 브랜드

  if (!clothesBrands.includes(clothes.brand)) {
    clothesBrands.push(clothes.brand);
  }
});
