import{ Component, Input } from "@angular/core";

@Component({
    moduleId:module.id, //Trabalhando com caminhos relativos para templates. Faz com que o componente procure o template relativo à sua pasta.
    selector:"foto",
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
    // ,encapsulation: ViewEncapsulation.Emulated,  encapsulation: ViewEncapsulation.Native

})
export class FotoComponent{
   @Input()
    titulo: string ="";

    @Input()
    url:string ="";

    descricao: string="";
}

/**
 * =====================================================
 * Trabalhando com caminhos relativos para templates
 * =====================================================
   Você deve ter reparado que tanto no componente AppComponent e no FotoComponent precisamos utilizar 
   URL's absolutas para indicar a localização de seus templates na propriedade templateUrl. Contudo, 
   isso não precisa ser assim. Vamos adicionar no decorator dos dois componentes a propriedade moduleId 
   e passar o valor enigmático module.id. Com ele, podemos passar o caminho relativo dos templates:
 */


 /**
  * =================================================
    Encapsulando CSS
    =================================================
    styleUrls: ['./foto.component.css']
    Veja que através da configuração styleUrls dos nossos componentes indicamos em um array todos os 
    CSS's utilizados por eles, em nosso caso, apenas um arquivo. Depois de darmos um tempo para o 
    TypeScript compilar nosso arquivo e recarregarmos a página, vemos que nosso painel continua
     funcionando.
  */