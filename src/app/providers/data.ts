import {Flower} from '../model/Flower';
import {Storage} from '@ionic/storage'
import {Promise} from 'es6-promise'
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IonDatetime} from '@ionic/angular';

@Injectable()
export class DataProvider {

    private apiurl: string = 'http://mob1-apiserver/api/xcl'

    public flowers: Flower[]
    public lastUpdateTime: Date
    public lastUpdateSuccess: boolean

    private storage: Storage
    private httpClient: HttpClient
    constructor(storage: Storage, httpClient: HttpClient) {
        this.storage = storage
        this.httpClient = httpClient
        //this.init()
        this.loadFromAPI()
        this.loadFromStorage()
        this.lastUpdateTime = null
        this.lastUpdateSuccess = false
    }

    public loadFromAPI() {
        this.httpClient.get(this.apiurl+'/flowers').subscribe(
            data => { // API is responding, let's do it
                this.storage.set('flowers',data).then(() => {
                    this.lastUpdateSuccess = true
                    this.lastUpdateTime = new Date()
                    this.storage.set('lastUpdateTime',this.lastUpdateTime).then(() => {
                        console.log ('data from API stored')
                    })
                })
            },
            err => {
                this.storage.get('lastUpdateTime').then((value) => { this.lastUpdateTime=value })
                this.lastUpdateSuccess = false
                console.log('Load from API failed with error '+err)
            }
        )
    }

    // Convert the json format stored in storage to array of Flower objects
    public loadFromStorage() {
        this.flowers = []
        console.log('loadFromStorage')
        this.storage.get('flowers').then((data) => {
            data.data.forEach((value) => {
                var stringnames: string[] = []
                value.names.forEach((objname) => {
                    stringnames.push(objname.name)
                })
                var f = new Flower(value.id, stringnames)
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










