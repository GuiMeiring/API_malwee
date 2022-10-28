import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {
onNoClick() {
throw new Error('Method not implemented.');
}
groupAdd() {
throw new Error('Method not implemented.');
}
name: any;
cnpj: any;
razaoSocial: any;

  constructor() { }

  ngOnInit(): void {
  }

}
