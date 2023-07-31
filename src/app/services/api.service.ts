import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../models/quote.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private API_URL = 'https://api.seriesquotes.10cyrilc.me/quote/?series=how_i_met_your_mother&count=1'

  getQuote(): Observable<Quote[]>{
    return this.http.get<Quote[]>(this.API_URL);
  }

}
