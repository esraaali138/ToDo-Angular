import { Component } from '@angular/core';
import { faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faSearch = faSearch;
  faSignIn = faSignInAlt;
  isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}


}
