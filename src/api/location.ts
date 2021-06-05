import axios from "axios";

export const getLocations = async () =>
  axios({
    url: `${process.env["REACT_APP_SERVER_URL"]}/location`,
    method: "get",
  });
