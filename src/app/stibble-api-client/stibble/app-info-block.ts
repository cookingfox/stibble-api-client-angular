import { EntityClass, EntityField } from '../entity/entity-decorators';
import { EntityFieldFlags as Flag } from '../entity/entity-metadata';
import { idToIri, normalizeId } from '../util/functions';
import { ContentBlock } from './../entity/content-block';

@EntityClass({ endpoint: 'app-info-blocks' })
export class AppInfoBlock implements ContentBlock {

  // -----------------------------------------------------------------------------------------------
  // PROPERTIES INHERITED FROM INTERFACES
  // -----------------------------------------------------------------------------------------------

  @EntityField({ deserialize: normalizeId, flags: [Flag.GENERATED] })
  id: string;

  @EntityField({ deserialize: Date.parse, flags: [Flag.GENERATED] })
  createdAt: Date;

  @EntityField({ deserialize: Date.parse, flags: [Flag.GENERATED] })
  updatedAt: Date;

  @EntityField({ entity: 'User', flags: [Flag.GENERATED] })
  owner: string;

  @EntityField({ flags: [Flag.REQUIRED] })
  blockIndex: number;

  @EntityField({ flags: [Flag.REQUIRED] })
  type: string;

  @EntityField()
  value: any;

  // -----------------------------------------------------------------------------------------------
  // PROPERTIES
  // -----------------------------------------------------------------------------------------------

  @EntityField({
    serialize: idToIri,
    entity: 'App',
    flags: [Flag.REQUIRED, Flag.NO_UPDATE]
  })
  parent: string;

}
