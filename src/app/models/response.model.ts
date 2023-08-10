import { IImageData } from './images.model';

export interface IImageResponse {
  entries: IImageData[];
}

export interface IImageResponseMeta {
  total_entries: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}
