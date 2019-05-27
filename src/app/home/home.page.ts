import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Flower} from '../model/Flower';
import {DataProvider} from '../providers/data';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private router
    private data: DataProvider

    constructor(router: Router) {
        this.router = router
        this.data = new DataProvider()
    }

    showDetailsOf(id) {
        this.router.navigateByUrl('/details')
    }

}
