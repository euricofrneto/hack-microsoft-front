import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {Pagination} from "swiper";

SwiperCore.use([Pagination]);

@Component({
    selector: 'app-start-hackathon',
    templateUrl: './start-hackathon.component.html',
    styleUrls: ['./start-hackathon.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class StartHackathonComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {

    }






}
