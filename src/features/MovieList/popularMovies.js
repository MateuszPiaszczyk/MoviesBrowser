import { key, movieID } from "../../core/App/apiCodes";

export const popularMovies = async (id) => {
  try {
    const response = await fetch(
      `${movieID}${id}?api_key=${key}&language=en-US`
    );
    if (!response.ok) {
      throw new Error("not found movie.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
