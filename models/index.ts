import { Models } from '@rematch/core';
// import { Message } from '../types';
import { patient } from './patient';

export interface RootModel extends Models<RootModel> {
    patient: typeof patient;
    // messages: Message[] | []
}

export const models: RootModel = { patient };
