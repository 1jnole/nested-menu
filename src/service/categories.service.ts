import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Category } from '../models/categories/category';
import { CategoryDtoInterface } from '../models/categories/categories.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  /**
   * Get categories
   * @return categories Tree
   */
  public getCategories(): Observable<CategoryDtoInterface[]> {
    return this.http
      .get<CategoryDtoInterface[]>(`${environment.apiPath}/categories`)
      .pipe(
        map((categories) => {
          return Category.setCategoriesTreeFromCategoryDto(categories);
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.message);
        })
      );
  }
}
