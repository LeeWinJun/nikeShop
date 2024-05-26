import Head from "next/head";
import Image from "next/image";

import Footer from "@/components/component/Footer";
import Video from "@/components/component/Video";
import Figure from "@/components/component/Figure";
import Slide from "@/components/component/Slide";
import SlideLeftBtn from "@/components/UI/SlideLeftBtn";
import SlideRightBtn from "@/components/UI/SlideRightBtn";
import { NextPage } from "next";

const DUMMY_DATA = [
  {
    id: "s-1",
    title: "나이키 에어포스",
    price: "139,000",
    option: "남성 신발",
    image: "/shoes_1.jpg",
  },
  {
    id: "s-2",
    title: "나이키 에어포스2",
    price: "149,000",
    option: "남성 신발",
    image: "/shoes_1.jpg",
  },
  {
    id: "s-3",
    title: "나이키 에어포스3",
    price: "139,000",
    option: "남성 신발",
    image: "/shoes_1.jpg",
  },
  {
    id: "s-4",
    title: "나이키 에어포스4",
    price: "139,000",
    option: "남성 신발",
    image: "/shoes_1.jpg",
  },
];

const Home: NextPage = (props: any) => {
  const settings = {
    dot: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SlideLeftBtn />,
    prevArrow: <SlideRightBtn />,
  };

  return (
    <>
      <Head>
        <title>Nike</title>
      </Head>
      <main>
        <div className="contents-wrapper">
          <section>
            <Figure
              src="/main-banner-1.jpg"
              videoSrc="/newjeans.mp4"
              title="스타일을 한 단계 높여보세요"
              subtitle="에어맥스 90 LV8"
              alt="newjeans"
              desc="시선을 사로잡는 디자인과 편안한 착화감으로 하루 종일 놀고, 밤새도록 추춰 보세요.<br>다양한 스타일을 더욱 매려적으로 완성 시키는 에어맥스 90 LV8을 소개합니다.<br>뉴진스만의 에어맥스 스타일을 선보이는 스타일 챌린지를 나이키 앱에서 확인해 보세요."
              
            />
            <Image className="mt-12" src="/newjeansQR.jpg" width={1377} height={102} alt="newjeansQR" />
            <p className="text-center mt-6">뉴진스의 에어맥스 스타일 보러가기</p>
          </section>
          <section>
            <h3>Featured Shoes</h3>
            <div className="slider-container">
              <Slide set={settings} data={DUMMY_DATA} />
            </div>
          </section>
          <section>
            <Video
              src="/new-challenge.mp4"
              title="새로운 시작"
              subtitle="new challenge"
              desc="“남들이 정해놓은 속도가 아닌, 자신만의 페이스로 달려보세요.<br>연기든 마라톤이든, 목표를 이루기 위해서는  자신만의 속도를 찾는 것이 중요하다고 생각해요.”"
            />
          </section>
          <section>
            <div className="text-center">
              <h2 className="mb-6">베스트 셀러</h2>
              <p className="mb-28">나이키닷컴 최고의 제품들을 만나보세요.</p>
            </div>
            <figure className="flex justify-between group hover:bg-slate-100">
              <div className="img-wrapper  overflow-hidden">
                <Image className="group-hover:scale-110 transition-all duration-300" src="/best-1.jpg" alt="베스트 셀러-나이키 스포츠웨어 솔로 스우시" width={900} height={455} />
              </div>
              <figcaption className="w-[792px]  flex flex-col justify-center ">
                <h3 className="">나이키 스포츠웨어 솔로 스우시</h3>
                <p className="text-[#757575]">남성 신발</p>
                <p className="font-medium">179,000 원</p>
                <p className="text-justify">
                  트랙에서 영감을 얻은 이 재킷은 깔끔한 라인에 빳빳한 크링클 우븐 소재로 디자인되었으며, 넉넉한 핏으로 멋스럽게 차려 입을 때나 캐주얼하게 입을 때나 다 잘 어울립니다. 풀 지퍼 디자인으로 스타일과 커버력을 바꿀 수 있으며, 밑단과 커프스의
                  부드러운 신축성이 온종일 편안하게 움직일 수 있도록 도와줍니다.
                </p>
                <button className="btn self-start mt-12">구매하기</button>
              </figcaption>
            </figure>
            <figure className="flex justify-between group hover:bg-slate-100 mt-12">
              <div className="img-wrapper  overflow-hidden">
                <Image className="group-hover:scale-110 transition-all duration-300" src="/best-2.jpg" alt="베스트 셀러-나이키 덩크 로우 레트로 SE" width={900} height={455} />
              </div>
              <figcaption className="w-[792px]  flex flex-col justify-center ">
                <h3 className="">나이키 스포츠웨어 솔로 스우시</h3>
                <p className="text-[#757575]">남성 트랙 재킷</p>
                <p className="font-medium">179,000 원</p>
                <p className="text-justify">
                  하드우드 코트를 위해 태어나 스트리트로 무대를 옮겨온 80년대의 농구 아이콘이 자수 디테일, 대조적인 스티치와 레트로 농구 스타일로 돌아옵니다. 패딩 처리된 로우컷 카라가 어디서든 편안한 발걸음을 이끌어 줍니다.
                </p>
                <button className="btn self-start mt-12">구매하기</button>
              </figcaption>
            </figure>
            <figure className="flex justify-between group hover:bg-slate-100 mt-12">
              <div className="img-wrapper  overflow-hidden">
                <Image className="group-hover:scale-110 transition-all duration-300" src="/best-3.jpg" alt="베스트 셀러" width={900} height={455} />
              </div>
              <figcaption className="w-[792px]  flex flex-col justify-center ">
                <h3 className="">나이키 스포츠웨어 솔로 스우시</h3>
                <p className="text-[#757575]">남성 트랙 팬츠</p>
                <p className="font-medium ">143,600 원</p>
                <p className="text-justify">
                  트랙에서 영감을 얻은 이 팬츠는 깔끔한 라인, 산뜻한 크링클 우븐 소재로 제작되었으며, 넉넉한 핏으로 매일 캐주얼한 편안함을 누릴 수 있습니다. 부드럽고 신축성 있는 허리와 커프스 덕분에 온종일 편안하게 움직일 수 있습니다.
                </p>
                <button className="btn self-start mt-12">구매하기</button>
              </figcaption>
            </figure>
          </section>
          <section className="jender-menu flex">
            <figure className="relative">
              <div className="img-wrapper">
                <Image src="/men.jpg" width={592} height={617} alt="men-menu" />
              </div>
              <figcaption className="absolute bottom-0">
                <h4>Men</h4>
                <button className="btn">자세히 보기</button>
              </figcaption>
            </figure>
            <figure>
              <div className="img-wrapper">
                <Image src="/women.jpg" width={592} height={617} alt="women-menu" />
              </div>
              <figcaption>
                <h4>Women</h4>
                <button className="btn">자세히 보기</button>
              </figcaption>
            </figure>
            <figure>
              <div className="img-wrapper">
                <Image src="/kids.jpg" width={592} height={617} alt="kids-menu" />
              </div>
              <figcaption>
                <h4>Kids</h4>
                <button className="btn">자세히 보기</button>
              </figcaption>
            </figure>
          </section>
          <section className="flex justify-between">
            <figure className="flex-1 mr-6">
              <div className="img-wrapper">
                <Image src="/ntc.jpg" width={900} height={760} alt="kids-menu" />
              </div>
              <figcaption className="mt-9">
                <h3>나이키 트레이닝 클럽(NTC)</h3>
                <p>
                  NTC 앱으로 개인 맞춤형 트레이닝 가이드를 만나 보세요.
                  <br />
                  운동, 마음가짐, 영양, 수면 등 몸과 마음을 위한 전문가 팁도 함께 제공됩니다.
                </p>
                <button className="btn mt-9">자세히 보기</button>
              </figcaption>
            </figure>
            <figure className="flex-1">
              <div className="img-wrapper">
                <Image src="/nrc.jpg" width={900} height={760} alt="kids-menu" />
              </div>
              <figcaption className="mt-9">
                <h3>나이키 런 클럽(NRC)</h3>
                <p>
                  NRC 앱과 함께 언제 어디서든 러닝을 시작해 보세요.
                  <br /> 전문 러닝 코치들의 오디오 가이드 런으로 올바른 러닝 루틴을 만들 수 있습니다.
                </p>
                <button className="btn mt-9">자세히 보기</button>
              </figcaption>
            </figure>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
