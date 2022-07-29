import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['../../app.component.css']
})
export class HeroeComponent{
    public nombre: string = 'Iron-Man';
    public edad  : number = 45;
    
    public get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spider-Man';
    }

    cambiarEdad():void{
        this.edad = 30;
    }
}