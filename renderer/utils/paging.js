export const getNextPage = (slug, reports) => {
  const index = reports.findIndex((report) => report.title === slug);
  const nextPage = reports[index + 1];
  if (!nextPage) return slug;

  return nextPage.title;
};

export const getPrevPage = (slug, reports) => {
  const index = reports.findIndex((report) => report.title === slug);
  const prevPage = reports[index - 1];

  if (!prevPage) return slug;

  return prevPage.title;
};
