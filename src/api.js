import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID MsqcIQE4SOtxf5Unlgn3uHj0Q1KYFbM2_B3qQ814fg8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
