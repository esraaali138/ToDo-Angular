import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
})
export class OffersComponent {
  faArrowRight = faArrowRight;
  cards = [
    {url :'assets/photo2.avif', price : 1200, tour : 'Sea'},
    {url :'assets/photo6.jpg', price : 3000, tour : 'Hiking'},
    {url :'assets/photo4.avif', price : 1900, tour : 'Skiing'},
    {url :'assets/photo1.avif', price : 1500, tour : 'Desert'},
    {url :'assets/photo5.avif', price : 2500, tour : 'Mountain'},

  ];
}
