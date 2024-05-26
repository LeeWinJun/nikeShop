import Link from "next/link";
import { menuAction } from "@/store/reducer/slices/menuReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { fetchLoginData } from "@/store/reducer/slices/authReducer";
import { useEffect } from "react";
import { RootState } from "@/store/store";

const MainNavigation: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.status);
  const issLogin = useSelector((state: RootState) => state.auth.isLogin);


  console.log("LoginStatus", isLogin);
  console.log("Is Login", issLogin);

  function menuSelectHandle(menu: string) {
    dispatch(menuAction.selectedMenu(menu));
  }

  useEffect(() => {
    dispatch(fetchLoginData());
  }, [dispatch]);

  return (
    <header className="border border-solid border-[#f5f5f5]">
      <div>
        <div>
          <div className="contents-wrapper bg-[#f5f5f5] flex justify-between items-center">
            <ul className="flex">
              <li className="jordan  pr-6 py-2">
                <Link className=" w-6 h-6  " href="jordan" aria-label="jordan">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.0509 4.14V4.08C13.0509 3.8 13.1409 3.55 13.3209 3.33C13.5009 3.11 13.7309 3 14.0109 3C14.2909 3 14.5409 3.09 14.7609 3.27C14.9809 3.45 15.1009 3.69 15.1209 3.99C15.1409 4.29 15.0509 4.54 14.8509 4.74C14.6509 4.94 14.4109 5.04 14.1309 5.04L13.9509 5.1L14.0109 5.19L13.9509 5.52L13.8309 6.48C13.8709 6.52 13.8909 6.56 13.8909 6.6L13.7709 7.2C13.7309 7.28 13.6909 7.34 13.6509 7.38L13.5909 7.62C13.5109 7.94 13.4409 8.2 13.3809 8.4C13.3209 8.6 13.2709 8.76 13.2309 8.88V9C13.1909 9.2 13.1609 9.36 13.1409 9.48C13.1209 9.6 13.0509 9.8 12.9309 10.08C12.8509 10.24 12.8509 10.5 12.9309 10.86L12.9909 10.92C12.9909 11.04 13.0409 11.18 13.1409 11.34C13.2409 11.5 13.2909 11.64 13.2909 11.76C13.3309 12.56 13.2709 13.24 13.1109 13.8L13.2309 14.16C13.7109 14.4 13.8509 14.66 13.6509 14.94L13.9509 15.06C14.4309 15.3 14.7709 15.51 14.9709 15.69C15.1709 15.87 15.3709 16.06 15.5709 16.26C15.7309 16.3 15.8509 16.36 15.9309 16.44L16.1109 16.5C16.9509 17.06 17.7909 17.74 18.6309 18.54L18.8709 18.72V18.78L18.8109 18.9L18.9909 19.02H19.0509C19.1709 19.1 19.2509 19.14 19.2909 19.14H19.3509C19.3909 19.14 19.4309 19.12 19.4709 19.08L19.5909 19.02C19.6709 18.94 19.7509 18.88 19.8309 18.84H20.0709C20.1109 18.84 20.1109 18.86 20.0709 18.9L19.8309 19.02L19.5309 19.38H19.9509L20.3709 19.44C20.4909 19.4 20.5909 19.36 20.6709 19.32L20.9709 19.14C21.0909 19.1 21.2109 19.14 21.3309 19.26H21.3909C21.4309 19.3 21.4109 19.36 21.3309 19.44L20.6109 20.1C20.4109 20.26 20.2309 20.36 20.0709 20.4L19.2909 20.94C19.2509 20.98 19.2109 20.98 19.1709 20.94L18.9909 20.7L18.8709 20.46L18.7209 20.25L18.5409 20.01L18.3909 19.83L18.2709 19.68L18.0309 19.5C17.9509 19.5 17.8709 19.48 17.7909 19.44L17.0109 18.84C16.8909 18.84 16.7509 18.78 16.5909 18.66C15.9909 18.14 15.5909 17.82 15.3909 17.7L15.0309 17.46L14.3109 17.34C14.0709 17.3 13.7509 17.18 13.3509 16.98L12.8709 16.74C12.5509 16.58 12.3309 16.5 12.2109 16.5L11.9709 16.38C11.8109 16.34 11.6909 16.3 11.6109 16.26L11.4909 16.14C11.4109 16.14 11.3309 16.16 11.2509 16.2L10.0509 16.8L8.55094 17.46C8.15094 17.78 7.77094 18.04 7.41094 18.24L6.75094 18.54L5.73094 19.26C5.65094 19.34 5.57094 19.34 5.49094 19.26L5.37094 19.38C5.25094 19.42 5.17094 19.44 5.13094 19.44L4.89094 19.56V19.68H4.77094L4.65094 19.86C4.57094 20.02 4.49094 20.11 4.41094 20.13C4.33094 20.15 4.28094 20.18 4.26094 20.22C4.24094 20.26 4.22094 20.29 4.20094 20.31L4.08094 20.43L3.90094 20.55L3.63094 20.52L3.27094 20.58L3.03094 20.64C2.83094 20.68 2.67094 20.65 2.55094 20.55C2.43094 20.45 2.33094 20.3 2.25094 20.1C2.17094 19.98 2.21094 19.88 2.37094 19.8L2.43094 19.74C2.47094 19.7 2.53094 19.68 2.61094 19.68H2.97094L3.45094 19.5L3.69094 19.44C3.69094 19.36 3.71094 19.3 3.75094 19.26C3.79094 19.22 3.85094 19.2 3.93094 19.2V19.14C3.89094 19.06 3.87094 18.98 3.87094 18.9C3.83094 18.82 3.82094 18.76 3.84094 18.72C3.86094 18.68 3.88094 18.66 3.90094 18.66H3.93094L3.99094 18.84C4.03094 19.04 4.09094 19.1 4.17094 19.02L4.23094 18.9C4.27094 18.82 4.33094 18.78 4.41094 18.78L4.53094 18.9L4.65094 18.78L4.59094 18.72C4.59094 18.68 4.61094 18.66 4.65094 18.66L4.89094 18.42C5.09094 18.18 5.33094 17.96 5.61094 17.76C6.17094 17.32 6.77094 16.98 7.41094 16.74C7.61094 16.54 7.83094 16.44 8.07094 16.44C8.23094 16.16 8.47094 15.86 8.79094 15.54C9.07094 15.34 9.27094 15.2 9.39094 15.12C9.47094 14.96 9.57094 14.88 9.69094 14.88H9.75094L9.87094 14.76C9.95094 14.72 10.0109 14.68 10.0509 14.64V14.34C10.0509 14.14 10.0709 13.98 10.1109 13.86C10.1509 13.74 10.2509 13.68 10.4109 13.68L10.6509 13.44C10.5709 13.28 10.5309 13.1 10.5309 12.9H10.4709C10.3909 12.78 10.3509 12.66 10.3509 12.54C10.2309 12.34 10.1509 12.18 10.1109 12.06H9.93094C9.89094 12.18 9.79094 12.26 9.63094 12.3L9.57094 12.42C9.41094 12.7 9.27094 12.91 9.15094 13.05C9.03094 13.19 8.81094 13.36 8.49094 13.56C8.29094 13.76 8.15094 13.98 8.07094 14.22C8.03094 14.34 8.03094 14.46 8.07094 14.58L8.01094 14.7H8.07094C8.07094 14.78 8.09094 14.82 8.13094 14.82H8.19094C8.27094 14.86 8.31094 14.91 8.31094 14.97C8.31094 15.03 8.25094 15.05 8.13094 15.03C8.01094 15.01 7.92094 14.97 7.86094 14.91C7.80094 14.85 7.75094 14.82 7.71094 14.82L7.53094 15C7.45094 15.12 7.37094 15.17 7.29094 15.15C7.21094 15.13 7.19094 15.1 7.23094 15.06L7.29094 15C7.33094 14.92 7.33094 14.88 7.29094 14.88L6.81094 15C6.77094 15.04 6.72094 15.04 6.66094 15C6.60094 14.96 6.61094 14.92 6.69094 14.88L6.99094 14.76C6.99094 14.72 6.97094 14.7 6.93094 14.7C6.77094 14.78 6.61094 14.8 6.45094 14.76L6.15094 14.7L6.09094 14.64C6.09094 14.6 6.11094 14.58 6.15094 14.58C6.31094 14.62 6.51094 14.6 6.75094 14.52L7.17094 14.34L7.65094 13.8L7.71094 13.68C7.87094 13.36 8.04094 13.07 8.22094 12.81C8.40094 12.55 8.59094 12.34 8.79094 12.18L8.85094 11.94C8.93094 11.78 9.01094 11.64 9.09094 11.52C9.17094 11.4 9.27094 11.24 9.39094 11.04L9.57094 10.8C9.73094 10.56 9.91094 10.44 10.1109 10.44L10.2909 10.26C10.3309 10.22 10.3509 10.16 10.3509 10.08L10.4709 9.96L10.4109 9.9C10.1709 9.7 10.0509 9.52 10.0509 9.36C10.0109 9.08 10.1009 8.84 10.3209 8.64C10.5409 8.44 10.7609 8.35 10.9809 8.37C11.2009 8.39 11.3709 8.46 11.4909 8.58L11.6109 8.7C11.6509 8.7 11.6709 8.72 11.6709 8.76L11.9109 8.88V9.06C11.9909 9.14 12.0309 9.2 12.0309 9.24C12.1109 9.12 12.2309 8.98 12.3909 8.82L12.6909 7.86C12.6909 7.7 12.7309 7.54 12.8109 7.38L12.9309 7.2V7.08L13.1109 6.36H13.2309L13.4109 5.64C13.4509 5.52 13.4509 5.38 13.4109 5.22L13.1709 4.62L13.0509 4.14Z"
                      fill="#111111"
                    />
                  </svg>
                </Link>
              </li>
              <li className="converse py-2">
                <Link className=" w-6 h-6" href="converse" aria-label="converse">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.73102 17.6161L4.12425 14.2309L0.122406 15.557L2.42025 12.0149L0.0664062 8.47826L4.12179 9.72811L6.59933 6.35949L6.68548 10.5349L10.7716 11.8733L6.71379 13.3786L6.73102 17.6161ZM7.2381 22.0709L15.8239 11.9829L7.26395 1.91211H14.4621L23.6135 11.9976L14.5058 22.0709H7.2381Z"
                      fill="#111111"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
            <ul className="member flex ">
              <li className="text-xs">
                <Link href="/signup">가입하기</Link>
              </li>
              <li className="text-xs">
                <Link href="/login">로그인</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="absolute left-12">
            <Link href="/" className=" w-16 h-16" aria-label="nike">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M52.716 21.7974L19.806 35.7574C17.066 36.9199 14.761 37.4999 12.9035 37.4999C10.8135 37.4999 9.29097 36.7624 8.35597 35.2899C7.14347 33.3899 7.67347 30.3349 9.75347 27.1099C10.9885 25.2249 12.5585 23.4949 14.0885 21.8399C13.7285 22.4249 10.551 27.7124 14.026 30.2024C14.7135 30.7024 15.691 30.9474 16.8935 30.9474C17.8585 30.9474 18.966 30.7899 20.1835 30.4724L52.716 21.7974Z"
                  fill="#111111"
                />
              </svg>
            </Link>
          </h1>
          <nav>
            <ul className="main-menu flex">
              <li>
                <Link href="/products/new-featured" onClick={() => menuSelectHandle("new-featured")}>
                  New Featured
                </Link>
              </li>
              <li>
                <Link href="/products/shoes" onClick={() => menuSelectHandle("shoes")}>
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="/products/clothes" onClick={() => menuSelectHandle("clothes")}>
                  Clothes
                </Link>
              </li>
              <li>
                <Link href="/products/jordan" onClick={() => menuSelectHandle("jordan")}>
                  Jordan
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="icon-menu flex absolute right-12 items-center">
            <li className="relative">
              <input type="text" className="w-48 rounded-3xl bg-[#ECECEC] px-[52px] py-2 box-border   border-none" placeholder="검색" />
              <button className="absolute left-5 top-1/2 -translate-y-1/2  items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                    stroke="black"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link className="" href={isLogin === "succeeded" ? "/mypage" : "/login"} aria-label="user">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.805 12.1349C17.7351 12.0655 17.6522 12.0105 17.561 11.9731C17.4698 11.9357 17.3722 11.9166 17.2736 11.917C17.1751 11.9173 17.0776 11.9371 16.9867 11.9751C16.8958 12.0132 16.8132 12.0687 16.7438 12.1387C16.6744 12.2086 16.6194 12.2915 16.582 12.3827C16.5446 12.4739 16.5255 12.5715 16.5259 12.6701C16.5262 12.7686 16.546 12.8661 16.584 12.957C16.622 13.0479 16.6776 13.1305 16.7475 13.1999C17.3822 13.8278 17.8859 14.5754 18.2297 15.3993C18.5734 16.2232 18.7503 17.1072 18.75 17.9999C18.75 18.9149 16.1175 20.2499 12 20.2499C7.88255 20.2499 5.25005 18.9149 5.25005 17.9999C5.24886 17.113 5.42245 16.2346 5.7609 15.4149C6.09935 14.5951 6.59603 13.8501 7.22255 13.2224C7.36223 13.0819 7.44064 12.8918 7.44064 12.6937C7.44064 12.4955 7.36223 12.3054 7.22255 12.1649C7.08202 12.0252 6.89194 11.9468 6.6938 11.9468C6.49566 11.9468 6.30557 12.0252 6.16505 12.1649C5.39638 12.9293 4.7871 13.8387 4.37254 14.8403C3.95798 15.8419 3.74639 16.9159 3.75005 17.9999C3.75005 20.4374 8.00255 21.7499 12 21.7499C15.9975 21.7499 20.25 20.4374 20.25 17.9999C20.2529 16.9089 20.0382 15.8282 19.6183 14.8211C19.1985 13.8141 18.5821 12.9008 17.805 12.1349Z"
                    fill="black"
                  />
                  <path
                    d="M12 12.75C13.0384 12.75 14.0534 12.4421 14.9167 11.8652C15.7801 11.2883 16.453 10.4684 16.8504 9.50909C17.2477 8.54978 17.3517 7.49418 17.1491 6.47578C16.9466 5.45738 16.4465 4.52192 15.7123 3.78769C14.9781 3.05347 14.0426 2.55345 13.0242 2.35088C12.0058 2.14831 10.9502 2.25227 9.99091 2.64963C9.0316 3.04699 8.21166 3.7199 7.63478 4.58326C7.05791 5.44662 6.75 6.46165 6.75 7.5C6.75 8.89239 7.30312 10.2277 8.28769 11.2123C9.27226 12.1969 10.6076 12.75 12 12.75ZM12 3.75C12.7417 3.75 13.4667 3.96994 14.0834 4.38199C14.7001 4.79405 15.1807 5.37972 15.4645 6.06494C15.7484 6.75016 15.8226 7.50416 15.6779 8.23159C15.5333 8.95902 15.1761 9.62721 14.6517 10.1517C14.1272 10.6761 13.459 11.0333 12.7316 11.1779C12.0042 11.3226 11.2502 11.2484 10.5649 10.9646C9.87971 10.6807 9.29404 10.2001 8.88199 9.58339C8.46993 8.96671 8.25 8.24168 8.25 7.5C8.25 6.50544 8.64509 5.55161 9.34835 4.84835C10.0516 4.14509 11.0054 3.75 12 3.75Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link className="" href="/" aria-label="wishlist">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7959 3.75002C18.1199 3.75002 19.3639 4.26602 20.2999 5.20102C21.2281 6.13093 21.7494 7.39113 21.7494 8.70502C21.7494 10.0189 21.2281 11.2791 20.2999 12.209L12.0019 20.508L3.70291 12.209C2.77502 11.2791 2.25391 10.0192 2.25391 8.70552C2.25391 7.39188 2.77502 6.13189 3.70291 5.20202C4.16194 4.74032 4.708 4.37425 5.30946 4.12501C5.91093 3.87578 6.55585 3.74832 7.20691 3.75002C8.53091 3.75002 9.77491 4.26602 10.7109 5.20102L11.4709 5.96102L12.0019 6.49202L12.5319 5.96102L13.2919 5.20102C13.7511 4.73963 14.2972 4.37384 14.8987 4.12478C15.5001 3.87573 16.1449 3.74835 16.7959 3.75002Z"
                    stroke="#111111"
                    stroke-width="1.5"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link className="" href="/" aria-label="basket">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.25 8.25V6C8.25 5.40326 8.48705 4.83097 8.90901 4.40901C9.33097 3.98705 9.90326 3.75 10.5 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6C15.75 6.59674 15.5129 7.16903 15.091 7.59099C14.669 8.01295 14.0967 8.25 13.5 8.25H3.75V16.5C3.75 17.4946 4.14509 18.4484 4.84835 19.1517C5.55161 19.8549 6.50544 20.25 7.5 20.25H16.5C17.4946 20.25 18.4484 19.8549 19.1517 19.1517C19.8549 18.4484 20.25 17.4946 20.25 16.5V8.25H17.5"
                    stroke="#111111"
                    stroke-width="1.5"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;