import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor() { }

  async fetchJSONFromAPI(): Promise<object[]> {
    try {
      const response = await fetch(this.apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (Array.isArray(data.results)) {
        return data.results;
      } else {
        throw new Error('API response is not an array of objects.');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
