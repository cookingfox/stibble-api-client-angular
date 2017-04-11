import { Observable } from 'rxjs/Observable';
import { Entity } from './entity';

export interface Repository<T extends Entity> {

  /**
   * Find one entity by its unique resource ID.
   */
  find(id: string): Observable<T>;

  /**
   * Find all entities.
   */
  findAll(): Observable<T[]>;

}