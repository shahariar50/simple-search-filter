import moment from "moment";

export const searchProfile = (arr, searchStr) => {
  return arr.filter((profile) => {
    // marging all the value of profile and check if the search string available in that
    return `${profile.gender}${profile.first_name}${profile.last_name}${
      profile.category
    }${profile.followers}${profile.location}${moment(profile.birthdate).format(
      "MMM Do, YYYY"
    )}`
      .toLowerCase()
      .split(/\s+/)
      .join("")
      .includes(`${searchStr}`.toLowerCase().split(/\s+/).join(""));
  });
};
