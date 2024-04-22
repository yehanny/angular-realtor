import { Component, Input } from '@angular/core';
import { PropertyLocation } from '../propertylocation';

@Component({
  selector: 'app-property-location',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="propertyLocation.photo"
        alt="Exterior photo of {{ propertyLocation.photo }}"
      />
      <h2 class="listing-heading">{{ propertyLocation.title }}</h2>
      <p class="listing-location">
        {{ propertyLocation.city }}, {{ propertyLocation.state }}
      </p>
    </section>
  `,
  styleUrl: './property-location.component.scss',
})
export class PropertyLocationComponent {
  @Input() propertyLocation!: PropertyLocation;
}
