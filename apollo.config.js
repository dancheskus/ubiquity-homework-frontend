module.exports = {
  client: {
    service: {
      name: 'api',
      localSchemaFile: '../backend/nexus_generated/schema.graphql',
      includes: ['./src/**/*.ts'],
    },
  },
};