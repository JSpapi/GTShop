import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../components";
import { getContext } from "../Context";

const Searched = () => {
  const { totalProducts } = getContext();
  const { search } = useParams();
  const searchedProducts = useMemo(() => {
    return totalProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  console.log(searchedProducts);
  return (
    <div>
      <div className="container">
        <div className="mb-10">
          <h2
            className="text-start
         text-white text-[16px] md:text-[20px] leading-[30px] font-medium"
          >
            Результаты поиска: {search}
          </h2>
          <p className="text-start text-gray-300 text-[16px] leading-[20px]">
            {searchedProducts.length} товаров найдено
          </p>
        </div>

        {searchedProducts.length ? (
          <ProductList products={searchedProducts} />
        ) : (
          <h1 className="text-center text-[25px] md:text-[50px] text-white font-bold">
            По вашему запросу товаров не нашлось
          </h1>
        )}
      </div>
    </div>
  );
};

export default Searched;
