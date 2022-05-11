import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [ // los módulos que queremos definir
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule{

}