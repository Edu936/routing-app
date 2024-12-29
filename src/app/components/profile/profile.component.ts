import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  /**
   * Primeira versão para pegar dados de uma url
   * 
   * public x !: number; // Declaração de uma variavel para receber o dado da url
   * 
   * @Input() set id (itemId: number) {
   *    this.x = itemId;
   * }
   */

  /**
   * Segunda versão para pegar dados de uma url
   * 
   * public x : number = 0;
   * 
   * private _router: ActivatedRoute = inject(ActivatedRoute);
   * 
   * ngOnInit(): void {
   *   this.x = parseInt(this._router.snapshot.params['id'],10);
   * }
   */
  
}
