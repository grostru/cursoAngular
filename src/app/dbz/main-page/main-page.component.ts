import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  // Voy a comentar esta manera de hacerlo porque hay 2 maneras de hacer la inyeccón
  // Solución 1
  //personajes: Personaje[] = [];

  // Solución 2
  //get personajes(): Personaje[]{
    //return this.dbzService.personajes;
  //}

  // Con esto hemos realizado la inyección de dependencias del array de personajes que se encuentra
  // definido en el servicio. Solo hemos de declarar la variable e inicializarla.
  // En cualquier componente declaramos el servicio y usamos el array sin necesidad de definirlo
  constructor(private dbzService: DbzService) { 
    // Solución 1
    //this.personajes = this.dbzService.personajes;
  }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  //agregarNuevoPersonaje(arg: Personaje){
    //this.personajes.push(arg);
  //}
}
