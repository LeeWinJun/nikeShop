export const shoesBrands: string[] = [];
export const shoesMenus: string[] = [];

export const shoesData = [
  {
    id: 0,
    best: false,
    title: "나이키 덩크 로우 레트로",
    jender: "남성신발",
    price: 139000,
    code: "DD1391-103",
    color: "화이트/그레이포그",
    menu: "조던",
    brand: "나이키",
    src_1_1: "/shoes-image/shoes-detail-1-1.png",
    src_1_2: "/shoes-image/shoes-detail-1-2.png",
    src_1_3: "/shoes-image/shoes-detail-1-3.png",
    src_1_4: "/shoes-image/shoes-detail-1-4.png",
    desc:"빛이 그대로 살아 있는 나이키 에어 포스 1 ’07은 OG 농구화로서 많은 사랑을 받아온 디자인에 새로운 멋을 더했습니다. 튼튼하게 스티치 처리된 오버레이와 깔끔한 마감 처리, 과하지 않은 딱 절제된 화려함으로 빛나는 존재감을 발휘해 보세요. "
  },
  {
    id: 1,
    best: false,
    title: "나이키 덩크 로우 레트로",
    jender: "남성신발",
    price: 139000,
    code: "DD1391-103",
    color: "블루",
    menu: "라이프스타일",
    brand: "조던",
    src_1_1: "/shoes-image/shoes-detail-2-1.png",
    src_1_2: "/shoes-image/shoes-detail-2-2.png",
    src_1_3: "/shoes-image/shoes-detail-2-3.png",
    src_1_4: "/shoes-image/shoes-detail-2-4.png",
  },
  {
    id: 2,
    best: false,
    title: "나이키 킬샷 2 레더",
    jender: "남성신발",
    price: 119000,
    code: "432997-124",
    color: " 화이트",
    menu: "라이프스타일",
    brand: "나이키",
    src_1_1: "/shoes-image/shoes-detail-3-1.png",
    src_1_2: "/shoes-image/shoes-detail-3-2.png",
    src_1_3: "/shoes-image/shoes-detail-3-3.png",
    src_1_4: "/shoes-image/shoes-detail-3-4.png",
  },
  { id: 3, best: false, title: "나이키 덩크 로우 레트로", jender: "남성신발", price: 139000, code: "DD1391-103", color: "블랙", menu: "라이프스타일", brand: "조던" },
  { id: 4, best: false, title: "나이키 덩크 로우 레트로", jender: "남성신발", price: 139000, code: "DD1391-103", color: "블랙", menu: "라이프스타일", brand: "조던" },
  { id: 5, best: false, title: "나이키 덩크 로우 레트로", jender: "남성신발", price: 139000, code: "DD1391-103", color: "블랙", menu: "라이프스타일", brand: "조던" },
  { id: 6, best: false, title: "나이키 덩크 로우 레트로", jender: "남성신발", price: 139000, code: "DD1391-103", color: "블랙", menu: "라이프스타일", brand: "조던" },
];

shoesData.forEach((shoes) => {
  //사이드바 신발 카테고리

  if (!shoesMenus.includes(shoes.menu)) {
    shoesMenus.push(shoes.menu);
  }

  //사이드바 신발 브랜드

  if (!shoesBrands.includes(shoes.brand)) {
    shoesBrands.push(shoes.brand);
  }
});

shoesData.forEach((shoes:any) => {
  const id = shoes.id;
  for (let j = 1; j <= 4; j++) {
    shoes["src_" + id + "_" + j] = "shoes-detail-" + id + "-" + j + ".png";
  }
});
