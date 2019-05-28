import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Flower} from '../model/Flower';
import {DataProvider} from '../providers/data';
import {Storage} from '@ionic/storage'

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private router
    private data: DataProvider

    constructor(router: Router, data: DataProvider) {
        this.router = router
        this.data = data
    }

    showDetailsOf(id) {
        this.router.navigateByUrl('/flower/'+id)
    }

}
