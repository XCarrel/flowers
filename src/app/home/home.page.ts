import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DataProvider} from '../providers/data';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private router
    private data: DataProvider
    private toastCtrl: ToastController

    constructor(router: Router, data: DataProvider, toastCtrl: ToastController) {
        this.toastCtrl = toastCtrl
        this.router = router
        this.data = data
        this.load()
    }

    showDetailsOf(id) {
        this.router.navigateByUrl('/flower/' + id)
    }

    private load(): Promise<string> {
        return new Promise<string> ((resolve, reject) => {
            this.data.loadFromAPI().then(() => {
                this.data.loadFromStorage().then(() => {
                    console.log('load.resolve');
                    resolve('Ok')
                })
            }).catch(() => {
                this.data.loadFromStorage()
                console.log('load.reject');
                reject('Ko')
            })
        })
    }

    doRefresh(event) {
        console.log('Begin refresh');
        this.load().then(() => {
            this.toastCtrl.create({ message: 'Rechargé!', duration: 1000 }).then((toastData)=>{ toastData.present() })
            event.target.complete();
            console.log('Success refresh');
        }).catch(() => {
            this.toastCtrl.create({ message: 'Erreur de connexion!', duration: 1000 }).then((toastData)=>{ toastData.present() })
            event.target.complete();
            console.log('Failed refresh');
        })
    }
}
