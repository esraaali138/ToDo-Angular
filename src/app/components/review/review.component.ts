import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  faStar = faStar
  reviews = [
    { 
      name: 'Mark Johnson', 
      text: 'Visiting Santorini was a dream come true! The breathtaking views of the caldera, the charming white-washed buildings, and the stunning sunsets made this trip unforgettable. The hospitality was amazing, and the food was beyond delicious. I highly recommend staying in Oia for the most picturesque experience!',
      rating: 5, 
      time: '2 hours ago',
      url: 'assets/user1.jpg'
    },
    { 
      name: 'James Wilson', 
      text: 'I had an incredible time exploring the Swiss Alps. The scenery was out of this world, with snow-capped mountains, crystal-clear lakes, and picturesque villages. The train rides through the mountains were truly magical. If you love nature and adventure, Switzerland is a must-visit destination!',
      rating: 5, 
      time: 'Yesterday',
      url: 'assets/user2.webp'

    },
    { 
      name: 'Devid Martinez', 
      text: 'Paris is the most romantic city I have ever visited. From walking along the Seine River to admiring the Eiffel Tower at night, every moment felt like a fairy tale. The museums, especially the Louvre, were incredible. The croissants and coffee in the morning were simply delightful!',
      rating: 5, 
      time: '3 days ago',
      url: 'assets/user3.jpg'

    }
  ];

  activeIndex = 0;

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
}
