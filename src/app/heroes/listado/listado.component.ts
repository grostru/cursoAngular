import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Hulk','Ironman', 'Thor'];
  heroeBorrado: string = '';

  // El constructor se lanza antes que el método onInit
  constructor() { }

  // Método creado por defecto cuando se crea el componente y sirve para Inicializar cosas
  ngOnInit(): void {
  }

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }
  
}
