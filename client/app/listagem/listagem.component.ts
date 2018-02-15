import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent { 

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
         /*
        =================================================================================================
        -- Então angular usa RxJS? ----------------------------------------------------------------------
        =================================================================================================
        Mas o que realmente é esse stream (fluxo)? Ele é proveniente da Reactive Extensions for 
        JavaScript (RxJS), criadas pela Microsoft Open Technologies, Inc em parceria com a comunidade
        open source. O RxJS é um conjunto de bibliotecas para compor programas assíncronos e baseados
        em eventos, usando coleções observáveis. Que tal continuarmos com a prática para entendermos 
        a teoria?

        Interagimos com um fluxo observável (observable stream) do RxJS através de suas funções.
        Usamos a função subscribe para que possamos "observar" os dados que são retornados, em nosso caso,
        a resposta do servidor:
         */
        
       // var stream = http.get('v1/fotos');
       // stream.subscribe(res=> {
            /*
                =============================================
                -- res -------------------------------------
                =============================================
                A resposta que recebemos ainda não é nossa lista de fotos, mas um objeto no qual 
                solicitamos essa lista no formato que for interessante para nós. Por exemplo, 
                há a função res.text(), que retorna os dados como string e a res.json(),
                 que realiza automaticamente o parser para nós do JSON retornado em um array de objetos:
             */

             /*Arrow function
             se estivesemos utlizando o function() o this do codigo abaixo nao funcionaria, porque ele teria
             outro contexto. mas com o arrow function esse erro nao ocorre.

             **********************************************************************
             toda arrow function compartilha o mesmo this léxico de seu escopo pai.
             ***********************************************************************
              */


              /*
              Nosso código é funcional, mas o RxJS permite realizar uma série de operações sobre esse fluxo 
              de maneira encadeada. Que tal já disponibilizarmos para a função subscribe a lista de fotos 
              já parseada? Podemos fazer isso usando a extensão map:
               */
            //this.fotos = res.json();
            //console.log(this.fotos);
       // });

       //         http.get('v1/fotos')
//             .map(res => res.json())
//             .subscribe(
//                 fotos => this.fotos = fotos,
//                 erro => console.log(erro)
//             );
//     }

        this.service = service;
        this.service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

    remove(foto) {
        /**
         * =============================
         * --Change Detection
         * =============================
         * Angular só monitora a referência de this.fotos do nosso componente. 
         * Se alguém incluir ou remover um novo item da lista ele não saberá. 
         * Para isso, precisamos criar uma nova lista e atribuir essa lista em this.fotos. 
         * Como estamos reatribuindo um valor para a variável o Angular desencadeará 
         * seu mecanismo de deteção de mudança e renderizará a view. Nosso código fica assim:
         */

         if(confirm('Would you like to remove this picture?')){
            this.service
                .remove(foto)
                .subscribe(
                    () => {                  
                        let novasFotos = this.fotos.slice(0);
                        let indice = novasFotos.indexOf(foto);
                        novasFotos.splice(indice, 1);
                        this.fotos = novasFotos; //Change detection
                        this.mensagem = 'Foto removida com sucesso';
                    }, 
                    erro =>{
                        console.log(erro);
                        this.mensagem = 'Não foi possível remover a foto';
                        }
                );
            }

    }
}