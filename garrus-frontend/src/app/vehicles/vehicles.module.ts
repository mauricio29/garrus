import { DriverService } from './driver.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleHistoryComponent } from './vehicle-history/vehicle-history.component';
import { VehicleService } from './vehicle.service';

import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {CustomersRoutingModule} from './vehicles-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CustomersRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports:  [VehicleTableComponent, VehicleDetailComponent, VehicleHistoryComponent],
  declarations: [VehicleTableComponent, VehicleDetailComponent, VehicleHistoryComponent],
  providers: [ VehicleService, DriverService],
})
export class VehiclesModule { }
