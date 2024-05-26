import Image from "next/image";

//인터페이스로 받아오는 데이터의 타입을 제네릭으로 해서 타입을 정해줬다.
interface ItemCardProps {
  data: {
    title: string;
    price: string;
    option: string;
    image: string;
  };
}

//받아오는 데이터의 타입을 지정해줬다.
const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
  return (
    <>
      <figure className="group cursor-pointer">
        <div className="img-wrapper relative aspect-square overflow-hidden">
          <Image className="h-8 group-hover:scale-110 transition-all duration-300" fill={true} src={data.image} alt={data.title} />
        </div>
        <figcaption className="mt-3">
          <div className="flex justify-between">
            <p className="title font-medium group-hover:underline">{data.title}</p>
            <p className="font-medium">{data.price} 원</p>
          </div>
          <p className="text-[#757575]">{data.option}</p>
        </figcaption>
      </figure>
    </>
  );
};

export default ItemCard;
