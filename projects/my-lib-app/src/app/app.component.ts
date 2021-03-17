import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'my-lib-app';
  info = {
    id: 1,
    isStar: true,
    status: 1,
    icon: '../assets/selfTypeImg.png',
    isHot: false,
    tag_type_id: 12,
    title: 'test',
    desc: '',
  };
}
