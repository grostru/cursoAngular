import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // Nombre de la aplicación
  templateUrl: './app.component.html', // lugar en el que se encuentra el path del html a mostrar
  styleUrls: ['./app.component.css']  // lugar en el que se encuentra el path del estilo
})

// Estas variables son propiedades de clase y con Doble {{}} lo podemos mostrar en el html
export class AppComponent {
  title = 'bases';

}
