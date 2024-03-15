import { instance } from "../../axios";
export default class MovieServices {
  static getPopularMovies() {
    const res = instance.get("movie/popular");
    return res;
  }
  static getMovieById(id) {
    const res = instance.get(`movie/${id}`);
    return res;
  }
}
