
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from 'src/core/Candidat';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  baseUrl = environment.server + "/candidats"

  constructor(private http: HttpClient) { }
  
  getCandidats () {
    return this.http.get(this.baseUrl)
  }

  getCandidatById (id : number) {
    let url = this.baseUrl + "/" + id
    return this.http.get(url)
  }

  addCandidat (candidat: Candidat) {
    return this.http.post(this.baseUrl, candidat)
  }

  updateCandidat (candidat: Candidat) {
    let url = this.baseUrl + "/" + candidat.id
    return this.http.put(url, candidat)
  }

  deleteCandidat (candidat: Candidat) {
    let url = this.baseUrl + "/" + candidat.id
    return this.http.delete(url)
  }
    
}
