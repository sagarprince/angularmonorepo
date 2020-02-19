// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Shared Services
import { DialogService } from '../../../../shared/services/dialog.service';

// Components
import { AddEditUniversityComponent } from '../add-edit-university/add-edit-university.component';

@Component({
  selector: 'lms-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesComponent implements OnInit {

  constructor(
    private dialogService: DialogService
  ) { }

  /**
   * ngOnInit
   * @return void
   */
  public ngOnInit(): void { }

  /**
   * On Add University
   * @return void
   */
  public onAdd(): void {
    this.dialogService.openAddEditFormDialog(AddEditUniversityComponent, 'add');
  }
}
