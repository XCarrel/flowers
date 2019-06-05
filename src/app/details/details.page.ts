import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage'
import {DataProvider} from '../providers/data';
import {Flower} from '../model/Flower';
import {HttpClient} from '@angular/common/http';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    private route: ActivatedRoute
    public data: DataProvider
    public flower: Flower
    private httpClient: HttpClient
    private toastCtrl: ToastController

    constructor(activatedRoute: ActivatedRoute, data: DataProvider, httpClient: HttpClient, toastCtrl: ToastController) {
        this.route = activatedRoute
        this.data = data
        this.httpClient = httpClient
        this.toastCtrl = toastCtrl
        this.flower = new Flower(0, []);
    }

    ngOnInit() {
        var id = +this.route.snapshot.paramMap.get('id')
        this.data.find(id).then((flower) => {
            this.flower = flower
        })
    }

    grow() { // the flower grows by 1 cm
        this.flower.size++
        this.data.updateItemOnBackend(this.flower.id).then(() => {
            this.toastCtrl.create({ message: 'Enregistré!', duration: 1000 }).then((toastData)=>{ toastData.present() })
        }).catch ((err) => {
            this.toastCtrl.create({ message: 'Erreur lors de l\'enregistrement!', duration: 1000 }).then((toastData)=>{ toastData.present() })
        })
    }
}
