import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage'
import {DataProvider} from '../providers/data';
import {Flower} from '../model/Flower';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    private route: ActivatedRoute
    public data: DataProvider
    public flower: Flower

    constructor(activatedRoute: ActivatedRoute, storage: Storage) {
        this.route = activatedRoute
        this.data = new DataProvider(storage)
    }

    ngOnInit() {
        var id = +this.route.snapshot.paramMap.get('id')
        this.data.find(id).then((flower) => {
            console.log(flower)
            //this.flower = flower
        })
    }

}
