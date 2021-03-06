import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface Gateway {

  /**
   * Create an entity with the provided data.
   */
  create(data: { [key: string]: any }): Observable<Response>;

  /**
   * Delete an entity with the provided id.
   */
  delete(id: string): Observable<Response>;

  /**
   * Find one entity by its unique resource ID.
   */
  find(id: string, params?: { [key: string]: any }): Observable<Response>;

  /**
   * Find all entities.
   */
  findAll(params?: { [key: string]: any }): Observable<Response>;

  /**
   * Update an entity with the provided id and data.
   */
  update(id: string, data: { [key: string]: any }): Observable<Response>;

}
