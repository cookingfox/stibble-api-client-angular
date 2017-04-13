import { ProjectInfoBlock } from './project-info-block';
import { User } from './user';
import { ProjectLocation } from './project-location';
import { App } from './app';
import { OwnedEntity } from '../entity/owned-entity';
import { EntityClass, EntityField } from '../entity/entity-decorators';
import { EntityFieldFlags as Flag } from '../entity/entity-metadata';
import { convertEntityId } from '../util/functions';

export type MapType = 'GOOGLE_OUTDOOR' | 'IMAGE';

@EntityClass({ endpoint: 'projects' })
export class Project implements OwnedEntity {

  @EntityField({ convert: convertEntityId, flags: [Flag.IMMUTABLE] })
  id: string;

  @EntityField({ convert: Date.parse, flags: [Flag.IMMUTABLE] })
  createdAt: Date;

  @EntityField({ convert: Date.parse, flags: [Flag.IMMUTABLE] })
  updatedAt: Date;

  @EntityField({ entity: User, flags: [Flag.IMMUTABLE] })
  owner: string;

  @EntityField({ entity: App, flags: [Flag.IMMUTABLE, Flag.REQUIRED] })
  parent: string;

  @EntityField({ entity: ProjectLocation, flags: [Flag.IMMUTABLE] })
  locations: Array<string>;

  @EntityField({ entity: ProjectInfoBlock, flags: [Flag.IMMUTABLE] })
  info: Array<string>;

  @EntityField({ flags: [Flag.REQUIRED] })
  title: string;

  @EntityField({ flags: [Flag.REQUIRED] })
  mapType: MapType;

  @EntityField()
  subTitle: string;

  @EntityField()
  imageSrc: string;

  @EntityField()
  introductionText: string;

}
