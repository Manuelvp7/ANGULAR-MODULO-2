import { Component } from '@angular/core';

@Component({
    selector: 'body-component',
    templateUrl : './body.component.html'
})

export class BodyComponent{
    title = 'BODY COMPONENT';
    mostrar = true;

    frase:any = {
        mensaje: 'Un gran poder requiere de una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personajes:string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}