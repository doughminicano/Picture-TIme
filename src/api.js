import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID TT5vARwlHwbaUbsCIMMkH2l12ibgvws3_Bb6U_ljK9M",
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);

  return response.data.results;
};

export default searchImages;