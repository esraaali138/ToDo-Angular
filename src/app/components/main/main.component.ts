import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  faHeart = faHeart;
  faLocation = faLocationDot;

  text: string =
    'Welcome to our website! Discover a world where you can explore.';
  displayedText: string = '';
  index: number = 0;

  sliderData = [
    {
      url: 'assets/italy.webp',
      text: 'Almond Blossom Festival',
      location: 'Italy, Roma',
    },
    {
      url: 'assets/farnsa.jpg',
      text: 'Almond Blossom Festival',
      location: 'France, Paris',
    },
    {
      url: 'assets/india.jpg',
      text: 'Almond Blossom Festival',
      location: 'India, Delhi',
    },
    {
      url: 'assets/germany.jpg',
      text: 'Almond Blossom Festival',
      location: 'Germany, Berlin',
    },
  ];

  constructor() {
    this.typeText();
  }

  typeText() {
    if (this.index < this.text.length) {
      this.displayedText += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 100);
    }
  }
}
