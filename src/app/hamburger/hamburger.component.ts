import { Component } from '@angular/core';
import { BestpizzasService } from '../bestpizzas.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent {

  constructor(public service: BestpizzasService) { }

  ngOnInit(): void {
  }
}
