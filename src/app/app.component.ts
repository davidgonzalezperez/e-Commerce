import { Component } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { ContactoService } from './services/contacto.services';
import { InsertarService } from './services/insertar.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  prueba1: {};
  cookieValue = 'Anil Singh';

  save_localstorage () {
    let name: string="David Gonzalez";

    /*let person = {
      name: "Adri",
      age: 22,
      profesion: "it developer"
    }*/

    localStorage.setItem("Cookie on INIT", name);
    /*localStorage.setItem("person", JSON.stringify( person ));*/

  }
  savecookie(id,titulo,foto,precio){
    this.prueba1== {   
      titulo: titulo.value,
      precio: precio.value,
      foto: foto.value
   };

   this.cookieService.set(id.value, JSON.stringify(this.prueba1)); 
  }
  

  save_sessionstorage () {
    let name: string="123";

    let person = {
      name: "david",
      age: 18,
      profesion: "IT"
    }

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("person", JSON.stringify( person ));

  }

  constructor( private cookieService: CookieService, private insertarService: InsertarService, private contactoService: ContactoService ){
    this.save_localstorage();
    this.save_sessionstorage();
   }

  ngOnInit(): void {
    //Set cookies
    //this.cookieService.set('cookieApp', 'Welcome you, Anil!' );
    //Get Cookies
    //this.cookieValue = this.cookieService.get('cookieApp');

    // //Check Cookies
    // const IsCookieExists: boolean = this.cookieService.check('cookieApp');

    // //Get Cookies
    // const value: string = this.cookieService.get('cookieApp');

    // //Get all cookies
    // const allCookies: {} = this.cookieService.getAll();

    // //delete cookies
    // this.cookieService.delete('cookieApp');

    // //delete all cookies
    // this.cookieService.deleteAll();
  }

}
