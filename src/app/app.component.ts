import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    // RouterLink,
    RouterOutlet,
    // RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routing-app';

  private _router: Router= inject(Router);

  mudarPagina(number: number) {
    this._router.navigate([`/about/${number}`])
  }
}
