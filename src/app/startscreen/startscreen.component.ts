// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-startscreen',
//   standalone: true,
//   imports: [],
//   templateUrl: './startscreen.component.html',
//   styleUrl: './startscreen.component.scss'
// })
// export class StartscreenComponent {

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  newGame() {
    this.router.navigateByUrl('/game');
  }

}