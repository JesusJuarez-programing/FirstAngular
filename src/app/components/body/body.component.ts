import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{

    mostrar = true;


    frase: any = {
        mensaje: 'tu mamam',
        autor: 'Tu'
    };

    personajes: string[] = ['Batman', 'Iron Man', 'Widow'];
    
}
