import Slider from "react-slick";
import ItemCard from "./ItemCard";

interface SlideProps {
  set: object;
  data: SlideData[];
}

interface SlideData {
  id: string;
  title: string;
  price: string;
  option: string;
  image: string;
}

const Slide: React.FC<SlideProps> = ({ set, data }) => {
  return (
    <Slider {...set}>
      {data.map((data: any) => {
        return (
          <div className="item-card" key={data.id}>
            <ItemCard data={data} />
          </div>
        );
      })}
    </Slider>
  );
};

export default Slide;
