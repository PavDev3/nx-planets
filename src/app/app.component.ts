import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, PlanetListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // @ViewChild(PlanetListComponent)
  @ViewChild('pl')
  listaPlanetasComponent!: PlanetListComponent;

  title = 'wplanetas';
}
