import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ringoffire';
  firestore: Firestore = inject(Firestore);

  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'game')
    this.items$ = collectionData(aCollection);
  }
}

// import { Component, inject } from '@angular/core';
// import { AsyncPipe } from '@angular/common';
// import { Observable } from 'rxjs';
// import { Firestore, collection, collectionData } from '@angular/fire/firestore';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [AsyncPipe],
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.css']
// })
// export class AppComponent {
//   firestore: Firestore = inject(Firestore);
//   items$: Observable<any[]>;

//   constructor() {
//     const aCollection = collection(this.firestore, 'items')
//     this.items$ = collectionData(aCollection);
//   }
// }
