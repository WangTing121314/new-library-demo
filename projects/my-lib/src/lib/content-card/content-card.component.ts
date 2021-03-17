import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { IExtractCardItem } from './content-card.type';
@Component({
  selector: 'lib-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.less'],
})
export class ContentCardComponent {
  @Input()
  info: IExtractCardItem = {
    id: 1,
    isStar: true,
    status: 1,
    icon: '',
    isHot: false,
    tag_type_id: 12,
    title: 'test',
    desc: '',
  };
  @Input() showStar = true;
  @Input() isReview?: boolean;
  @Input() reviewRuleTemplate?: TemplateRef<any>;
  @Output()
  upload = new EventEmitter<void>();
  @Output()
  showHistory = new EventEmitter<void>();
  @Output()
  star = new EventEmitter<boolean>();

  history() {
    if (this.info.status === 2) return;
    console.log('history');
    this.showHistory.emit();
  }

  onStar() {
    this.info.isStar = !this.info.isStar;
    this.star.emit(this.info.isStar);
  }

  onUpload() {
    console.log('onUpload');
    if (this.info.status === 2) return;
    if (this.info.hasOwnProperty('hasReviewPoint') && !this.info.hasReviewPoint)
      return;
    this.upload.emit();
  }
}
