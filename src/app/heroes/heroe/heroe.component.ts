import {Component} from '@angular/core';

// Especificar lo que vamos a extraer
@Component({
    selector    : 'app-heroe', // Nombre de la aplicación que estamos definiendo
    templateUrl : 'heroe.component.html'
})

export class HeroeComponent{
    nombre  : string = 'Ironman';
    edad    : number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}