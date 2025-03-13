import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
 
  @Input()
  photoCover:String =""
  @Input()
  cardTitle:string =""
  @Input()
  cardDescription:String =""
}
