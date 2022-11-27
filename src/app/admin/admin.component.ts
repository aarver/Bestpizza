import { Component } from '@angular/core';
import { BestpizzasService } from '../bestpizzas.service';
import { Hamburger } from '../hamburger';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  hamburgerek: Hamburger = new Hamburger();


  constructor(public service: BestpizzasService) { }

  ngOnInit(): void {
  }



}
