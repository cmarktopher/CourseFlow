import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Unit } from '../interfaces/unit.model';

@Component({
  selector: 'app-unit-detail-dialog',
  templateUrl: `./unit-detail-dialog.component.html`,
  styleUrls: ['./unit-detail-dialog.component.css']
})
export class UnitDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: Unit,
  public dialogRef: MatDialogRef<UnitDetailDialogComponent>) { }

  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeUnitPopup(): void {
    this.dialogRef.close();
  }
  
}
