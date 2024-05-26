function SlideLeftBtn(props: any) {
  const { onClick } = props;
  return (
    <div className={"w-[48px] h-[48px] bg-[#F5F5F5] rounded-full flex justify-center items-center absolute z-10 -top-16 right-0 cursor-pointer"} onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M158.999 62.0001C160.969 61.9992 162.92 62.3865 164.74 63.1397C166.561 63.893 168.215 64.9975 169.609 66.3902L354.499 251.29C357.311 254.103 358.891 257.918 358.891 261.895C358.891 265.873 357.311 269.687 354.499 272.5L169.609 457.4C168.216 458.793 166.563 459.899 164.743 460.653C162.923 461.407 160.972 461.796 159.002 461.796C157.032 461.797 155.082 461.409 153.261 460.656C151.441 459.902 149.787 458.798 148.394 457.405C147 456.012 145.895 454.359 145.141 452.539C144.387 450.719 143.998 448.769 143.998 446.799C143.997 444.829 144.385 442.878 145.138 441.058C145.892 439.237 146.996 437.583 148.389 436.19L322.679 261.9L148.389 87.6101C146.29 85.5123 144.86 82.839 144.281 79.9284C143.701 77.0178 143.998 74.0007 145.134 71.259C146.27 68.5172 148.194 66.1741 150.662 64.5259C153.13 62.8778 156.031 61.9988 158.999 62.0001Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default SlideLeftBtn;