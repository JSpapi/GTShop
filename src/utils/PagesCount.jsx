export const getPageCount = (totalProducts, productsPerPage) => {
  return Math.ceil(totalProducts.slice(0, 125).length / productsPerPage);
};
