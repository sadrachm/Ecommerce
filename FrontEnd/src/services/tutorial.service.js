import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }  
  findByColor(color) {
    return http.get(`/tutorials/color?color=${color}`);
  }  
  findByMin(price) {
    return http.get(`/tutorials/min?price=${price}`);
  }  
  findByMax(price) {
    return http.get(`/tutorials/max?price=${price}`);
  }
}

export default new TutorialDataService();