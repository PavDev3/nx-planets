import { Component, Input } from '@angular/core';
import { Planet } from '../domain/planet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss',
})
export class PlanetDetailComponent {
  @Input() planet?: Planet;
}
