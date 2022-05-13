import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {

  // Comentamos esta línea y usamos la inyección de dependencias en el constructor
  //@Input() personajes: any[] = [];

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService){
  }

}
