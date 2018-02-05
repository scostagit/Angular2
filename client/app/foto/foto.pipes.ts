import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from "./foto.component"
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
/*
Aprendemos que Pipes (tubos, em português) podem gerar transformações nos dados e 
que podemos criar os nossos. Para que seja um Pipe, sua classe deve ser anotada com 
o decorator Pipe, o que não é suficiente. Ele precisa implementar o método transform 
que possui determinada assinatura (parâmetros).
 */
    transform(fotos:FotoComponent[], digitado:string) {
        console.log(fotos); // quem deve ser filtrado
        console.log(digitado); // o que deve ser usado como filtro  
        
        digitado = digitado.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }
}