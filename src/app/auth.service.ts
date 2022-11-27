import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private db: AngularFireDatabase, private fireauth : AngularFireAuth, private router: Router ) { 

  }

  
    login(email: string, password: string){
      this.fireauth.signInWithEmailAndPassword(email, password).then( () =>{
        localStorage.setItem('token', 'true');
        this.router.navigate(['main']);
      }, err =>{
        alert(err.message)
        this.router.navigate(['login']);
      })
    }
  
      register(email: string, password: string){
        this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
          alert('Sikeres Regisztráció');
          this.router.navigate(['login']);
        }, err =>{
          alert(err.message);
          this.router.navigate(['create']);
        })
      }
  
        logout(){
          this.fireauth.signOut().then( () => {
            localStorage.removeItem('token');
            this.router.navigate(['login']);
          }, err =>{
            alert(err.message)
          })
        }
  


      }
    