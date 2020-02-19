// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Shared Services
import { DialogService } from '../../../../shared/services/dialog.service';

// Components
import { AddEditFacultyComponent } from '../add-edit-faculty/add-edit-faculty.component';

@Component({
  selector: 'lms-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacultiesComponent implements OnInit {

  constructor(
    private dialogService: DialogService
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }

  /**
   * On Add Faculty
   * @return void
   */
  public onAdd(): void {
    this.dialogService.openAddEditFormDialog(AddEditFacultyComponent, 'add');
  }
}
