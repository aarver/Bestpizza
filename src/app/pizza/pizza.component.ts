import { Component } from '@angular/core';
import { BestpizzasService } from '../bestpizzas.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {

  constructor(public service: BestpizzasService) { }

  ngOnInit(): void {
  }
}


