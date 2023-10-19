import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  cover:string=""
  @Input()
  game:string=""
  @Input()
  gameType:string="digital"
  @Input()
  price:string="R$299,99"

  constructor() { }

  ngOnInit(): void {
  }

}
