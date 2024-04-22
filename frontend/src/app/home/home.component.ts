import { Component, Input, OnInit, inject } from '@angular/core';
import { PropertyLocationComponent } from '../property-location/property-location.component';
import { PropertyLocation } from '../propertylocation';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PropertyLocationComponent, HttpClientModule, NgForOf],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by state" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-property-location
        *ngFor="let propertyLocation of filteredLocationList"
        [propertyLocation]="propertyLocation"
      >
      </app-property-location>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {
    this.propertyLocationList = [];
    this.filteredLocationList = this.propertyLocationList;
  }
  /* Inject HttpClient into component. */
  httpClient = inject(HttpClient);
  /* Holds the values of all properties */
  propertyLocationList: PropertyLocation[] = [];
  hostApi: string = 'http://localhost:3000';
  ngOnInit(): void {
    this.fetchPropertyLocationList();
  }

  /* Getting data from API */
  fetchPropertyLocationList() {
    this.httpClient
      .get<PropertyLocation[]>(`${this.hostApi}/properties/all`)
      .subscribe((data: PropertyLocation[]) => {
        this.propertyLocationList = data;
      });
  }

  /* Holds the values of filtered properties */
  filteredLocationList: PropertyLocation[] = this.propertyLocationList;

  /* Filtering the properties based on city */
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.propertyLocationList;
      return;
    }

    this.filteredLocationList = this.propertyLocationList.filter(
      (propertyLocation) =>
        propertyLocation?.state.toLowerCase().includes(text.toLowerCase())
    );
  }
}
