import {Flower} from '../model/Flower';
import {Storage} from '@ionic/storage'

export class DataProvider {

    public flowers: Flower[]
    private storage: Storage

    constructor(storage: Storage) {
        this.storage = storage
        //this.init()
        this.loadFromStorage()
    }

    public loadFromStorage() {
        this.flowers = []
        this.storage.get('flowers').then((data) => {
            data.forEach((value) => {
                var f = new Flower(value.id, value.names)
                f.size = value.size
                this.flowers.push(f)
            })
        })
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
        this.storage.set('flowers',this.flowers)
    }

    public find(id)
    {
        return new Promise((resolve, reject) => {
            this.flowers.forEach((flower) => {
                if (flower.id == id) resolve(flower)
            })
            reject ('Flower #'+id+' not found')
        })
    }

}










