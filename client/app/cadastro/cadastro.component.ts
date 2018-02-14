import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent { 

    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;
    route: ActivatedRoute; // nova propriedade
    mensagem: string = ''; // nova propriedade  
    router: Router; //rotiador - vai redirecionar

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router : Router) {
        this.route = route;
        //rotiador
        this.router = router; 

        this.service = service;

        this.route.params.subscribe(params => {

            let id = params['id'];

            if(id) {

                this.service.buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro));    
            }            
         });


        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);

        this.service.cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();              
                this.mensagem = 'Foto salva com sucesso'
                this.router.navigate(['']);
            }, erro => {
                this.mensagem = "Ocorreu um erro ao tentar cadastrar"
                console.log(erro);
            });
    }
}