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

    constructor(router: Router, storage:Storage) {
        this.router = router
        this.data = new DataProvider(storage)
    }

    showDetailsOf(id) {
        this.router.navigateByUrl('/details')
    }

}
