import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage'
import {DataProvider} from '../providers/data';
import {Flower} from '../model/Flower';
import {HttpClient} from '@angular/common/http';

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

    constructor(activatedRoute: ActivatedRoute, data: DataProvider, httpClient: HttpClient) {
        this.route = activatedRoute
        this.data = data
        this.httpClient = httpClient
        this.flower = new Flower(0, []);
    }

    ngOnInit() {
        var id = +this.route.snapshot.paramMap.get('id')
        this.data.find(id).then((flower) => {
            this.flower = flower
        })
    }

    getsomething() {
        this.httpClient.get('http://mob1-apiserver/api/xcl/flowers').subscribe(
            data => { // API is responding, let's do it
                console.log(data)
            },
            err => {
                console.log(err)
            }
        )
    }
}
