export interface Car {
    name: string,
    mileage: number,
    tank: number,
    fuel: number,
    properties: String[]

    drive():void;

    refill(): void; 
}