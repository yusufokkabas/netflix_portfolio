import { GraphQLClient } from 'graphql-request';

const DATO_CMS_ENDPOINT = 'https://graphql.datocms.com/';
const DATO_CMS_API_TOKEN = '41c30f33cba9ff368371a8f58802fd';

const datoCMSClient = new GraphQLClient(DATO_CMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${DATO_CMS_API_TOKEN}`,
  },
});

export default datoCMSClient;
