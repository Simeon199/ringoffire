// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-player',
//   standalone: true,
//   imports: [],
//   templateUrl: './player.component.html',
//   styleUrl: './player.component.scss'
// })
// export class PlayerComponent {

// }

// import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-player',
//   templateUrl: './player.component.html',
//   styleUrls: ['./player.component.scss']
// })
// export class PlayerComponent implements OnInit {
//   @Input() name;
//   @Input() playerActive: boolean = false;
//   constructor() { }
//   ngOnInit(): void {
//   }
// }

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,  // Diese Zeile macht die Komponente Standalone
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() name!: string;  // Definiere den Typ
  @Input() playerActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}