import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/api/user'


  getData() {
    return this.http.get(`${this.url}/task`)
  }

  create(obj: any) {
    return this.http.post(`${this.url}/task`, obj)
  }

  delete(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }

  update(id: any, obj: any) {
    // console.log(`${this.url}/${id}`);

    return this.http.patch(`${this.url}/${id}`, obj)
  }


  // --------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------


  createProjects(obj: any) {
    return this.http.post(`${this.url}/projects`, obj)
  }

  readProjects(){
    return this.http.get(`${this.url}/projects`)
  }

  deleteProject(id: any) {
    return this.http.delete(`${this.url}/projects/${id}`)
  }
}
