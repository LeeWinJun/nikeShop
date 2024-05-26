import Image from "next/image";
import { useState } from "react";

interface ImageProps {
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  desc: string;
  videoSrc: string;
}
const Figure: React.FC<ImageProps> = ({ title, subtitle, src, alt, desc, videoSrc }) => {
  const formattedDesc = desc.split("<br>").map((desc, index) => {
    return <p key={index}>{desc}</p>;
  });

  //클릭 시 불리언을 변경하고 불리언에 따라 조건부 렌더링 여기서 해서 onClick의 값을 가져와보자
  const [changeVideo, setChangeVideo] = useState(false);

  const clickHandler = () => {
    setChangeVideo(true);
  };

  return (
    <figure onClick={clickHandler}>
      <div className="relative">
        <div className="img-wrapper w-full relative">
          {!changeVideo ? (
            <Image src={src} layout="responsive" width={1824} height={960} alt={alt} priority/>
          ) : (
            <video className="w-full" autoPlay muted loop>
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
        {!changeVideo ? <button className="btn absolute left-12 bottom-12">영상 보기</button> : ""}
      </div>
      <figcaption className="text-wrapper ">
        <div className="card-container text-center mt-12">
          <p className="mb-4 font-medium">{subtitle}</p>
          <h2>{title}</h2>
          <div className="mt-9">{formattedDesc}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default Figure;
