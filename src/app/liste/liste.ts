import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss',
})
export class Liste {
  public films = [
    {
      title: 'The Dark Knight',
      image: '/images/films/dark-knight.jpg',
    },
    {
      title: 'Interstellar',
      image: '/images/films/interstellar.jpg',
    },
    {
      title: 'Fight Club',
      image: '/images/films/fight-club.jpg',
    },
    {
      title: 'Pulp Fiction',
      image: '/images/films/pulp-fiction.jpg',
    },
    {
      title: 'Blade Runner 2049',
      image: '/images/films/blade-runner.jpg',
    },
  ];

  public selectedFilm: any = null;

  public selectFilm(film: any) {
    this.selectedFilm = film;
  }
}
