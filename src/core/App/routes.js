export const toMovies = () => "/movies";
export const toPeople = () => "/people";
export const toMovie = ({ id } = { id: ":id" }) => `/movie/${id}`;
export const toPerson = ({ personId } = { personId: ":personId" }) => `/people/${personId}`;
