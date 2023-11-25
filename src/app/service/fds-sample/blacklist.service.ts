import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {
  private blacklist_url = 'http://localhost:8000/api/v1/listing/blacklist?offset=0&limit=100&type=all'
  private authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTg3NTIzNjYsInVzZXJfaWQiOiIxIn0.yacFA9S-hFhfJcl_2SFUY6YbMvAHzNYF78KgHoYzAvc";
  constructor(private http: HttpClient) { }

  fetchBlacklist() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}` // Use 'Bearer' if it's a bearer token
    });
    return this.http.get(this.blacklist_url, { headers })
  }
  deleteBlacklist(blacklist_id: number) {
    const delete_blacklist_url = `http://localhost:8000/api/v1/listing/blacklist/${blacklist_id}`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.delete(delete_blacklist_url, {headers})
  }
  createBlacklist(data: object){
    const create_blacklist_url = 'http://localhost:8000/api/v1/listing/blacklist'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.post(create_blacklist_url, data, {headers})
  }
  updateBlacklist(data: object, blacklist_id: number) {
    const update_blacklist_url = `http://localhost:8000/api/v1/listing/blacklist/${blacklist_id}`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.put(update_blacklist_url, data, {headers})
  }
}
