import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private infoUrl = '/assets/json/info.json';

  constructor(private http: HttpClient) {}

  public getInfo() {
    return this.http.get(this.infoUrl);
  }
}
