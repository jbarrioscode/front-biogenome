export interface IHeadquarter {
    nombre: string;
    descripcion: string;
    ciudad_id: number
}
export interface IHeadquarters {
    headquarters: IHeadquarter[];
}