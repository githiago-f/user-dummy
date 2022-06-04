import { User } from '../entity/user.js';
import { randomUUID } from 'node:crypto';
import { faker } from '@faker-js/faker';

const user = (state, roles) => {
  return new User(
    randomUUID(),
    faker.name.findName(),
    state,
    roles
  );
}

/**
 * @type {import('../entity/user').User[]}
 */
const myData = [
  user(true, [ 'CREATOR' ]),
  user(true, [ 'CREATOR' ]),
  user(true, [ 'PARTICIPANT' ]),
  user(true, [ 'PARTICIPANT' ]),
  user(false, [ ]),
  user(false, [ ])
];

export class UserRepository {
  save(entity) {
    myData.push(entity);
    return entity;
  }
  findById(id) {
    return myData.filter(i => i.uuid == id).pop();
  }
  find(comparable) {
    if(!comparable) return myData;
    return myData.filter(i => {
      const entries = Object.entries(comparable);
      for (const [key, value] of entries) {
        if(i[key] !== value) return false;
      }
      return true;
    });
  }
}