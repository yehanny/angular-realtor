import { Component, Input } from '@angular/core';
import { PropertyLocation } from '../propertylocation';

@Component({
  selector: 'app-property-search',
  standalone: true,
  imports: [],
  templateUrl: './property-search.component.html',
  styleUrl: './property-search.component.scss',
})
export class PropertySearchComponent {
  @Input() propertyLocation!: PropertyLocation;
}
