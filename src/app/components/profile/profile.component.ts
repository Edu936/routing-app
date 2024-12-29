import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public x!: number;

  @Input() set id(itemId: number) {
    this.x = itemId;
  }
}
