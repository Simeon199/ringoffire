import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ringoffire';
  games$!: Observable<any[]>;
  firestoreService: FirestoreService = inject(FirestoreService);

  constructor() { }

  ngOnInit(): void {
    this.games$ = this.firestoreService.getGames();
  }
}
