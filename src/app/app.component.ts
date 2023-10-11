import { Component } from '@angular/core';
import { ApiService } from './functions/apiFetch'; // Import your ApiService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeverse-angular';
  firstObject: any;

  constructor(private apiService: ApiService) {
    this.apiService.fetchJSONFromAPI().then((data) => {
      this.firstObject = data[0];
    });
  }
}

