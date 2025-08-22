import { Component, OnInit } from '@angular/core';
import { Autor } from '../../models/autor.model';
import { AutorService } from '../../services/autor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autor-list.html',
  styleUrl: './autor-list.scss'
})
export class AutorList implements OnInit {
  autores: Autor[] = [];

  constructor(private autorService: AutorService) {}

  ngOnInit(): void {
    this.loadAutores();
  }

  loadAutores(): void {
    this.autorService.getAll().subscribe({
      next: (data) => {
        console.log('Autores fetched successfully:', data);
        this.autores = data;
        console.log('Autores fetched successfully:', this.autores);
      },
      error: (err) => {
        console.error('Error fetching autores', err);
      }
    });
  }

}
