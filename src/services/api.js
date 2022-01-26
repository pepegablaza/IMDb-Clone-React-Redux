export const API_KEY = "9f0b482795afd0cf5e71f34aed75c5a0";

export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;
export const IMG_API = "https://image.tmdb.org/t/p/original/";

export const DISCOVER = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
export const TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
export const FEATURED = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;

export const COMING_SOON = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const TOP_RATED_MOVIES = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const POPULAR_TV = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const COMING_TV = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;
export const TOP_RATED_TV = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const LATEST_PEOPLE = `https://api.themoviedb.org/3/person/latest?api_key=${API_KEY}&language=en-US`;
export const POPULAR_PEOPLE = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;
