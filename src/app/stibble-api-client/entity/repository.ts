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
  findAll(): Observable<Array<T>>;

  /**
   * Find all entities by their parent (if supported).
   */
  findByParent(parentId: string): Observable<Array<T>>;

}
