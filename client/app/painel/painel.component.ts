import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
    @Input() titulo: string;

    ngOnInit(){
        //********************************************************************************* */
        //Por que esse codigo nao esta no construtor da classe?
        //********************************************************************************** */
        /**
         * O problema é que toda property com o decorator Input só recebe os dados associados à 
         * propriedade depois da chamada do construtor. Sendo assim, quando tentamos manipular
         * o título ele é undefined. A solução do problema mora no entendimento de que um componente
         * em Angular 2 possui um ciclo de vida, e um deles é chamado de OnInit. Nele, o componente 
         * é iniciado, mas só depois das inbound properties terem sido atribuídas, como é o caso do 
         * título do nosso painel.
         */
        this.titulo = this.titulo.length > 7 
                        ? this.titulo.substr(0,7) + "..."
                        : this.titulo;

    }
}