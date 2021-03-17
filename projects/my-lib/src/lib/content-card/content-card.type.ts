export interface IExtractCardItem {
  id: number;
  isStar: boolean;
  status: number;
  icon: string;
  isHot: boolean;
  tag_type_id: number;
  title: string;
  desc: string;
  [key: string]: string | number | boolean;
}