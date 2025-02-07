import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage'
import { post } from './post'
import { author } from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage , post, author],
}
