import {Component} from '@angular/core';

// Especificar lo que vamos a extraer
@Component({
    selector: 'app-contador', // Nombre de la aplicación que estamos definiendo
    template: `
        <h1>{{titulo}}</h1>

        <h3>La base es: <strong>{{base}}</strong></h3>
        
        <button (click)="acumular(base)"> + {{base}}</button>
        
        <span>{{numero}}</span>
        
        <button (click)="acumular(-base)"> - {{base}}</button>
    `
})

export class ContadorComponent{
    title = 'bases';
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number){
        this.numero += valor;
    }
}