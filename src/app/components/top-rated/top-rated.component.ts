import { Component } from '@angular/core';
import { faStar  , faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css',
})
export class TopRatedComponent {
  isActive: false;
  activeIndex: number = 0;
  faStar = faStar;
  faUser = faUser
  countries = ['Show All', 'USA', 'Canada', 'Germany', 'Spain'];
  Cards = [
    { 
      url: 'assets/greece.avif', 
      name: 'Greece', 
      price: '1000', 
      description: 'Explore the ancient ruins, stunning islands, and rich history of Greece.' 
    },
    { 
      url: 'assets/italy.avif', 
      name: 'Italy', 
      price: '740', 
      description: 'Enjoy the breathtaking landscapes, delicious cuisine, and cultural treasures of Italy.' 
    },
    { 
      url: 'assets/Sweden.jpg', 
      name: 'Sweden', 
      price: '850', 
      description: 'Experience Sweden’s charming cities, northern lights, and scenic countryside.' 
    }
  ];
  
  setActive(index: number) {
    this.activeIndex = index;
  }
}
