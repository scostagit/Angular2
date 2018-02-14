import{ NgModule }from "@angular/core";
import { FotoComponent } from "./foto.component";
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';


@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ],
    exports: [FotoComponent, FiltroPorTitulo],
    providers: [ FotoService ] //Provedor porque em qualquer momento vc vai querer injetar esse cara. Provider diz ao Angular que esse cara é injetavel
})
export class FotoModule {

}