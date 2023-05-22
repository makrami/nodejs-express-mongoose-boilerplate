export const paginationOptions = (paginationOptions) => {
  let page = paginationOptions?.page;
  let limit = paginationOptions?.limit;
  const regex = /^[0-9]+$/;

  const myCustomLabels = {
    totalDocs: 'itemCount',
    docs: 'itemsList',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    meta: 'paginator',
  };

  // page and limit validator
  page = !page || !regex.test(page) || page == 0 ? 1 : +page;
  limit = !limit || !regex.test(limit) || limit == 0 ? 10 : +limit;

  return { ...paginationOptions, page, limit, customLabels: myCustomLabels };
};
