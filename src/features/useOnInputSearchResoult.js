import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const useOnInputSearchResult = () => {
  const location = useLocation();
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchFilteredMovies = async (query) => {
      try {
        // Tutaj wykonaj żądanie do API, aby pobrać przefiltrowane filmy
        // na podstawie wprowadzonego zapytania (query).
        // Możesz użyć biblioteki do zarządzania stanem (np. Redux) lub
        // wykorzystać fetch lub axios, aby wykonać żądanie HTTP.

        // Przykład:
        const response = await fetch(`/api/movies?query=${query}`);
        const data = await response.json();
        setFilteredMovies(data.movies);
      } catch (error) {
        console.error("Błąd podczas pobierania przefiltrowanych filmów:", error);
      }
    };

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search");

    if (location.pathname.includes("movie") && query) {
      fetchFilteredMovies(query);
    } else {
      setFilteredMovies([]);
    }
  }, [location]);

  return filteredMovies;
};
