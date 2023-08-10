import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IImageResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  IMAGES_SERVICE_URL =
    'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries';

  constructor(private readonly httpClient: HttpClient) {}

  public getImages = (entriesPerPage?: number): Observable<IImageResponse> => {
    return this.httpClient.get<IImageResponse>(this.IMAGES_SERVICE_URL, {
      params: { per_page: entriesPerPage ?? 11 },
    });
  };
}
