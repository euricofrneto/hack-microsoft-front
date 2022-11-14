import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  images: any[] = [];
  loading: boolean = true;

  alta: any[] = [];
  recentes: any[] = [];
  curtidos: any[] = [];
  relevantes: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.start();
  }

  start(): void {
    this.loading = false;









  }


  seeVideo(video): void {
    console.log('video', video)
  }
}

