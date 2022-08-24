import moment from "moment";

export const searchProfile = (arr, searchStr) => {
  return arr.filter((item) => {
    return `${item.gender}${item.first_name}${item.last_name}${item.category}${
      item.followers
    }${item.location}${moment(item.birthdate).format("MMM Do, YYYY")}`
      .toLowerCase()
      .split(/\s+/)
      .join("")
      .includes(`${searchStr}`.toLowerCase().split(/\s+/).join(""));
  });
};
