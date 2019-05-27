import {Flower} from '../model/Flower';

export class DataProvider {

    public flowers: Flower[]

    constructor() {
        this.init()
    }

    public init() { // Initialize storage with hardcoded data
        this.flowers = []
        let f = new Flower(1,['Ianthis', 'Violette'])
        f.size = 12
        this.flowers.push(f)
        f = new Flower(2,['Gladiolus', 'Glaïeul'])
        f.size = 23
        this.flowers.push(f)
        f = new Flower(3,['Lilium', 'Lys'])
        f.size = 17
        this.flowers.push(f)
        f = new Flower(4,['Primula vulgaris', 'Primevère'])
        f.size = 7
        this.flowers.push(f)
    }

}










