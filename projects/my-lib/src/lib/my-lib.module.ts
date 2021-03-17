import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ContentCardComponent } from './content-card/content-card.component';
import { FooComponent } from './foo/foo.component';
import { MyLibComponent } from './my-lib.component';
const ZORRO_MODULES = [
  NzPopoverModule,
  NzButtonModule,
  NzIconModule,
  NzToolTipModule
];

@NgModule({
  declarations: [MyLibComponent, FooComponent,ContentCardComponent],
  imports: [
    CommonModule,
    ...ZORRO_MODULES
  ],
  exports: [MyLibComponent, FooComponent, ContentCardComponent]
})
export class MyLibModule { }
