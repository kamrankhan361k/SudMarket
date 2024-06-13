import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { RoleComponent } from './role/role.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CoreModule } from '../core/core.module';
import { RoleFormComponent } from './role/role-form/role-form.component';
@NgModule({
  declarations: [
    SettingsComponent,
    RoleComponent,
    RoleFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class SettingsModule { }
