// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01', '*')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'd50d9016-6bc6-40b0-827d-7367a9165b3d',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01', '*')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'd50d9016-6bc6-40b0-827d-7367a9165b3d',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01', '*')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'da0b2f82-d086-41f6-b026-991ff150b0d5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01', '*')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'da0b2f82-d086-41f6-b026-991ff150b0d5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/catalog/usql/databases/master/secrets/adlacatalogitem3714dup?api-version=2016-11-01', '*')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'c861bb23-e218-4a46-b8ed-108e91ccfcd2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/catalog/usql/databases/master/secrets/adlacatalogitem3714dup?api-version=2016-11-01', '*')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'c861bb23-e218-4a46-b8ed-108e91ccfcd2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/catalog/usql/databases/master/secrets/adlacatalogitem3714dup?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceAlreadyExists\",\"message\":\"The resource 'adl://xplattestadls1506.azuredatalakestore.net/catalog/database/f37f75f7-7a66-491d-ba0d-57fb89acac0f/credential/adlacatalogitem3714dup' already exists. Trace: 4a26520a-7bbe-41c0-b973-8ae6f1bdd98e Time: 2017-06-09T02:26:15.2148075-07:00\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4a26520a-7bbe-41c0-b973-8ae6f1bdd98e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/catalog/usql/databases/master/secrets/adlacatalogitem3714dup?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceAlreadyExists\",\"message\":\"The resource 'adl://xplattestadls1506.azuredatalakestore.net/catalog/database/f37f75f7-7a66-491d-ba0d-57fb89acac0f/credential/adlacatalogitem3714dup' already exists. Trace: 4a26520a-7bbe-41c0-b973-8ae6f1bdd98e Time: 2017-06-09T02:26:15.2148075-07:00\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4a26520a-7bbe-41c0-b973-8ae6f1bdd98e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .get('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01')
  .reply(200, "{\"creationTime\":\"2017-06-09T09:26:09.2979954Z\"}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fe0e8e31-7d3f-4fd2-98ee-42e1dfaee3d7',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .get('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01')
  .reply(200, "{\"creationTime\":\"2017-06-09T09:26:09.2979954Z\"}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fe0e8e31-7d3f-4fd2-98ee-42e1dfaee3d7',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .delete('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '23050acf-82c5-4d9b-8c95-44ba1a4c4707',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .delete('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '23050acf-82c5-4d9b-8c95-44ba1a4c4707',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The resource 'adl://xplattestadls1506.azuredatalakestore.net/catalog/database/f37f75f7-7a66-491d-ba0d-57fb89acac0f/credential/adlacatalogitem3714' does not exist. Trace: eb06b366-602e-4150-8a1a-72ab6be93cc5 Time: 2017-06-09T02:26:19.4336532-07:00\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb06b366-602e-4150-8a1a-72ab6be93cc5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/catalog/usql/databases/master/secrets/adlacatalogitem3714?api-version=2016-11-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The resource 'adl://xplattestadls1506.azuredatalakestore.net/catalog/database/f37f75f7-7a66-491d-ba0d-57fb89acac0f/credential/adlacatalogitem3714' does not exist. Trace: eb06b366-602e-4150-8a1a-72ab6be93cc5 Time: 2017-06-09T02:26:19.4336532-07:00\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb06b366-602e-4150-8a1a-72ab6be93cc5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .delete('/catalog/usql/databases/master/secrets?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'b769a658-b656-4d55-ba1e-581eaf7942f5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .delete('/catalog/usql/databases/master/secrets?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': 'b769a658-b656-4d55-ba1e-581eaf7942f5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/catalog/usql/databases/master/secrets/adlacatalogitem3714dup?api-version=2016-11-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The resource 'adl://xplattestadls1506.azuredatalakestore.net/catalog/database/f37f75f7-7a66-491d-ba0d-57fb89acac0f/credential/adlacatalogitem3714dup' does not exist. Trace: 40242982-2523-460c-91d4-39795732c80e Time: 2017-06-09T02:26:22.7100205-07:00\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '40242982-2523-460c-91d4-39795732c80e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla7793.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/catalog/usql/databases/master/secrets/adlacatalogitem3714dup?api-version=2016-11-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The resource 'adl://xplattestadls1506.azuredatalakestore.net/catalog/database/f37f75f7-7a66-491d-ba0d-57fb89acac0f/credential/adlacatalogitem3714dup' does not exist. Trace: 40242982-2523-460c-91d4-39795732c80e Time: 2017-06-09T02:26:22.7100205-07:00\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '40242982-2523-460c-91d4-39795732c80e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:26:22 GMT',
  connection: 'close' });
 return result; }]];