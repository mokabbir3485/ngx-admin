import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})

export class GmapsComponent {
  
  readonly position = { lat: 23.7803453, lng: 90.4166239 };
  // readonly position: any[] = [
  //   { lat: 23.7803453, lng: 90.4166239 },
  //   { lat: 23.7802373, lng: 90.4156824 },
  //   { lat: 23.7803649, lng: 90.4186329 }
  // ]
}
