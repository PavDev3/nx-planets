import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../domain/planet';
import { PlanetDetailComponent } from '../planet-detail/planet-detail.component';
import { PlanetService } from '../services/planet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [PlanetDetailComponent, CommonModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.scss',
})
export class PlanetListComponent implements OnInit {
  @Input() planets: Planet[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe({
      next: (d) => {
        this.planets = d;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
