import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message: string = 'Home component is already to use!';
  canEdit = false;

  constructor() {}

  ngOnInit(): void {}

  /* function onEditClick */
  onEditClick(): void {
    this.canEdit = !this.canEdit;

    if(this.canEdit)
    {
      this.message = 'You can edit me!';
    }else {
      this.message = 'I\'m read only!';

    }
  }
}
