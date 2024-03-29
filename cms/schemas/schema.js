// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import article from './documents/article';
import category from './documents/category';
import definition from './documents/definition';

// Singletons
import about from './singletons/about';
import contact from './singletons/contact';
import frontpage from './singletons/frontpage';
import settings from './singletons/settings';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* documents */
    article,
    category,
    definition,

    /* singletons */
    frontpage,
    about,
    contact,
    settings

  ]),
})
