import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" });

async function getLivros() {
  const response = await livrosAPI.get("/");

  return response.data;
  //   await livrosAPI.get("/").then((res) => {
  //     return res.data;
  //   });
}

export { getLivros };
