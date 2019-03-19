import { Component } from '@angular/core';
import { Car } from '../../interfaces/Car';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})

export class CarComponent implements Car {
    public name: string = "Tesla Model S";
    public mileage: number = 5;
    public tank: number = 426;
    public fuel: number = 320;
    public properties: String[] = ['baterry: Lithium-ion', 'acceleration: 2.9 sec', 'maxSped: 209 km/h', 'charging: 2-8 hours', 'superCharge: 40 min'];

    constructor() {}

    public drive():void {
        this.mileage += 190;
        this.fuel -= 85;
    }

    public refill():void {
        this.fuel += 85;
    }

    public onclickHandlerDrive(e: Event) {
        this.drive();
    }

    public onclickHandlerRefill(e: Event) {
        this.refill();
    }
}