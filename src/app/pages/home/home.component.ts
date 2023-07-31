import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  quote!:Quote;

  constructor(private api:ApiService){}
  
  ngOnInit(): void {
    this.loadQuote();         
  }

  loadQuote(){
    this.api.getQuote().subscribe((res)=>{
      this.quote=res[0];    
    })
  }

}
