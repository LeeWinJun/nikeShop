import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../store/reducer/slices/selectReducer";
import { detailAction } from "@/store/reducer/slices/detatilPageReducer";
import { RootState } from "@/store/store";
import Link from "next/link";
interface products {
  products: any;
  hideMenu: boolean;
  category: string;
}

const ShopCard: React.FC<products> = ({ products, hideMenu, category }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterAction.initProducts(products));
    dispatch(detailAction.initProduct(products));
  }, products);

  const filteredItemList = useSelector((state: RootState) => state.filtered.filteredItemsList);

  return (
    <div className={`${hideMenu ? "w-full" : "w-[1543px]"} grid grid-cols-4 gap-4 ml-12 `}>
      {filteredItemList.map((product: any) => (
        <Link key={product.id} href={`/products/${category}/${product.id}`}>
          <div className="group ">
            <div className=" w-full aspect-square overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img src={product.src_1_1} alt={product.title} className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopCard;
