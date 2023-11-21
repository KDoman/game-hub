import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b32c3302b1b34c92a48dd145847ab690",
  },
});
