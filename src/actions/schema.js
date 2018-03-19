import { schema } from 'normalizr'

export const events = new schema.Entity('events')
export const eventsList = new schema.Array(events)

export const user = new schema.Entity('user', {}, { idAttribute: 'twitchId' })
export const usersList = new schema.Array(user)
