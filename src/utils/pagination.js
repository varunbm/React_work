import _ from "lodash";

export function paginate(items, pageNumber, PageSize) {
  const startIndex = (pageNumber - 1) * PageSize;
  console.log(startIndex);
  return _(items)
    .slice(startIndex)
    .take(PageSize)
    .value();
}
