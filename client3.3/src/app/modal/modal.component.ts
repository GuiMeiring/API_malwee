import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  htmlAdd: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.htmlAdd;
  }


}
