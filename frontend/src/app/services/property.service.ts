import { Injectable, NgModule, inject } from '@angular/core';
import { PropertyLocation } from '../propertylocation';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
@NgModule({
  imports: [HttpClientModule],
})
export class PropertyService {
  constructor() {}
  /* Inject HttpClient into component. */
  httpClient = inject(HttpClient);
  data: PropertyLocation[] = [];
  hostApi: string = 'http://localhost:3000';
  ngOnInit(): void {
    this.fetchData();
  }

  /* Getting data from API */
  fetchData() {
    this.httpClient
      .get<PropertyLocation[]>(`${this.hostApi}/properties/all`)
      .subscribe((data: PropertyLocation[]) => {
        this.data = data;
      });
  }
  propertyLocationList: PropertyLocation[] = this.data;

  /* Get all property locations */
  getAllPropertyLocations(): PropertyLocation[] {
    return this.propertyLocationList;
  }

  /* Get property location by id */
  getPropertyLocationById(id: number): PropertyLocation | undefined {
    return this.propertyLocationList.find(
      (propertyLocation) => propertyLocation.id === id
    );
  }
}
