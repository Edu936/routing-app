import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public x !: number;

 @Input() set number(x: number) {
  this.x = x;
 }
}
