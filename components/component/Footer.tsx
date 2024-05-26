const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] ">
      <div className="px-12">
        <div className="footer-menu-wrapper flex justify-center py-6 border-b border-solid border-[#333333]">
          <ul className="footer-menu flex">
            <li>
              <span>FIND A STORE</span>매장안내
            </li>
            <li>
              <span> TEAM WEAR</span>팀/단체복 구매
            </li>
            <li>
              <span>MEMBER JOIN</span>회원가입
            </li>
            <li>
              <span>DOWNLOAD APP</span>App 다운로드
            </li>
          </ul>
        </div>
        <div className="footer-m-section flex flex-col items-center mt-[84px]">
          <p className="text-[120px] font-bold text-center">JUST DO IT</p>
          <div>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M105.432 43.595L39.6119 71.515C34.1319 73.84 29.5219 75 25.8069 75C21.6269 75 18.5819 73.525 16.7119 70.58C14.2869 66.78 15.3469 60.67 19.5069 54.22C21.9769 50.45 25.1169 46.99 28.1769 43.68C27.4569 44.85 21.1019 55.425 28.0519 60.405C29.4269 61.405 31.3819 61.895 33.7869 61.895C35.7169 61.895 37.9319 61.58 40.3669 60.945L105.432 43.595Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="footer-b-section text-xs mt-[84px] text-[#757575]">
            <div className="footer-b-t pb-3 flex justify-between border-b border-solid border-[#333333]">
              <div className="flex">
                <p>대한민국</p>
                <p>© 2023 Nike, Inc. All Rights Reserved</p>
              </div>
              <ul className="footer-b-r-menu flex">
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>위치 기반 서비스 약관</li>
                <li>영상정보처리기기 운영 방침</li>
              </ul>
            </div>
            <div className="flex pt-3">
              <div className="footer-b-l mr-[84px] ">
                <p>
                  (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구 테헤란로 1522 강남파이낸스센터 30층 | 통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068 <a className="inline-block decoration-white">사업자 정보 확인</a>
                </p>
                <div className="footer-tel">
                  <p className="mt-6">
                    고객센터 전화 문의 <span>080-0221-0182</span> FAX 02-6744-5880 | 이메일 <span>serveice@nike.co.kr</span> | 호스팅서비스사업자 (유)나이키코리아
                  </p>
                </div>
              </div>
              <div className="footer-b-r">
                <p>현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신 한국결제네트웍스 유한회사의 구매안전 서비스(결제대금예치)를 이용하실 수 있습니다.</p>
                <p className="mt-6">
                  콘텐츠산업진흥법에 의한 콘텐츠 보호 안내 <a className="inline-block">자세히 보기</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
