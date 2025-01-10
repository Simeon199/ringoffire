import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { FirestoreService } from './services/firestore.service';
// import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // AsyncPipe
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
