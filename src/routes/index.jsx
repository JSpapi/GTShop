import {
  CartPage,
  ChosenCategory,
  CyberSport,
  Locations,
  Products,
  Reviews,
  Sales,
  Searched,
  ProductInfo,
} from "../pages";

export const routes = [
  { id: "page-2", path: "/locations", element: <Locations /> },
  { id: "page-3", path: "/sales", element: <Sales /> },
  { id: "page-4", path: "/searched/:search", element: <Searched /> },
  { id: "page-5", path: "/categories/:type", element: <ChosenCategory /> },
  { id: "page-6", path: "/cartPage", element: <CartPage /> },
  { id: "page-7", path: "/reviews", element: <Reviews /> },
  { id: "page-8", path: "/cybersport", element: <CyberSport /> },
  { id: "page-10", path: "/products", element: <Products /> },
  { id: "page-11", path: "/products/:chosenProduct", element: <ProductInfo /> },
];
