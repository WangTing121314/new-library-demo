import { NgModule } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [MyLibComponent, FooComponent],
  imports: [
  ],
  exports: [MyLibComponent, FooComponent]
})
export class MyLibModule { }
