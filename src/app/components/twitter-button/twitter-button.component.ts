import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-button',
  templateUrl: './twitter-button.component.html',
  styleUrls: ['./twitter-button.component.scss']
})
export class TwitterButtonComponent {
  
  @Input() quote!:string;

}
