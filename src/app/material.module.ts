import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
      MatButtonModule,
      MatInputModule,
      MatToolbarModule,
      MatGridListModule,
      MatSidenavModule,
      MatMenuModule,
      MatIconModule,
      MatFormFieldModule,
      MatTabsModule,
      MatCardModule,
      MatListModule
    ],
  exports: [
      MatButtonModule,
      MatInputModule,
      MatToolbarModule,
      MatGridListModule,
      MatSidenavModule,
      MatMenuModule,
      MatIconModule,
      MatFormFieldModule,
      MatTabsModule,
      MatCardModule,
      MatListModule
    ],
})
export class MaterialModule { }
