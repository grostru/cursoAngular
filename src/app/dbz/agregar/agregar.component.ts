import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // Comento esta línea y su uso en el método agregar porque con la inyección de dependencias del servicio ya tenemos
  // especificado el método agregar en el servicio y no hace falta emitir nada más, solo llamar a dicho servicio y dicho
  // método
  //@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService){}

  agregar() {    
    if (this.nuevo.nombre.trim().length == 0){
      return; // Si no tiene nada el campo, no hacemos nada
    }

    //this.onNewPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }    
  }
}
