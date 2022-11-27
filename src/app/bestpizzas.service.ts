import { Injectable } from '@angular/core';
import { Palacsinta } from './palacsinta';
import { Hamburger } from './hamburger';
import { Gyros } from './gyros';
import { Pizza } from './pizza';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class BestpizzasService {

  palacsintak: Array<Palacsinta> = new Array<Palacsinta>();
  hamburgerek: Array<Hamburger> = new Array<Hamburger>();
  gyrosok: Array<Gyros> = new Array<Gyros>();
  pizzak: Array<Pizza> = new Array<Pizza>();

  constructor(private db: AngularFireDatabase, private router: Router) {

    db.list<Palacsinta>('palacsintak').valueChanges().subscribe(t => {
      this.palacsintak = t;
    })
    db.list<Hamburger>('hamburgerek').valueChanges().subscribe(t => {
      this.hamburgerek = t;
    })
    db.list<Gyros>('gyrosok').valueChanges().subscribe(t => {
      this.gyrosok = t;
    })
    db.list<Pizza>('pizzak').valueChanges().subscribe(t => {
      this.pizzak = t;
    })
   }

   addPalacsinta(t: Palacsinta){
    this.db.list<Palacsinta>('palacsintak').push(t);
   }

   addHamburger(t: Hamburger){
    this.db.list<Hamburger>('hamburgerek').push(t);
   }

   addPizza(t: Pizza){
    this.db.list<Pizza>('pizzak').push(t);
   }

   addGyros(t: Gyros){
    this.db.list<Gyros>('gyrosok').push(t);
   }



   
}
