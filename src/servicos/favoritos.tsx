import axios from "axios";

const favoritosAPI = axios.create({
  baseURL: "http://localhost:8000/favoritos",
});

async function getFavoritos() {
  const response = await favoritosAPI.get("/");
  console.log("asddsaadssad", response.data);

  return response.data;
  //   await favoritosAPI.get("/").then((res) => {
  //     return res.data;
  //   });
}

async function postFavorito(id: string) {
  await favoritosAPI.post(`/${id}`);
}

async function deleteFavorito(id: string) {
  await favoritosAPI.delete(`/${id}`);
}

export { getFavoritos, postFavorito, deleteFavorito };
