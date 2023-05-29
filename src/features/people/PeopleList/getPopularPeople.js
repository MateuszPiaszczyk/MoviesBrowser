import { API_KEY, ApiPopularPeople } from "../../../core/apiCodes";

export const getPopularPeople = async () => {
  try {
    const response = await fetch(
      `${ApiPopularPeople}?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error("not found movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
