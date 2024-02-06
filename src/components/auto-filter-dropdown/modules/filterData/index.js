import { getDataByKey } from "../getDataByKey";

export const filterData = ({ data, property, filterValue }) => {
  return data.filter((item) =>
    getDataByKey(item, property)
      ?.toLowerCase()
      .includes(filterValue?.toLowerCase())
  );
};
