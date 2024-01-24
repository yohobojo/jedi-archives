import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { ModalData } from '../modal';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() url: string = '';
  modalData: ModalData = { data: 'Loading' };

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.getModal(this.url);
  }

  getModal(url: string): void {
    if (url) {
      this.modalService
        .getModalData(url)
        .subscribe((data) => (this.modalData = data));
    }
  }

  clearModal(): void {
    this.modalData = { data: 'Loading' };
  }

  getObjectKeys(obj: Object): string[] {
    return Object.keys(obj);
  }
}
