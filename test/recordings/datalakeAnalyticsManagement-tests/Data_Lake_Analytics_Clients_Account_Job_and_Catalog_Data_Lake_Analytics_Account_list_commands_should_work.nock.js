// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7793.azuredatalakeanalytics.net\",\"accountId\":\"220439bc-e128-415c-8e58-52dd4952b707\",\"creationTime\":\"2017-06-09T09:22:35.1258092Z\",\"lastModifiedTime\":\"2017-06-09T09:22:35.1258092Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793\",\"name\":\"xplattestadla7793\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8406.azuredatalakeanalytics.net\",\"accountId\":\"04e22247-c454-4d5e-b662-4493ff7418aa\",\"creationTime\":\"2017-06-09T09:23:14.8213983Z\",\"lastModifiedTime\":\"2017-06-09T09:23:14.8213983Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8406\",\"name\":\"xplattestadla8406\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0ec3b956-df29-46ab-a832-e390e0c8e9a0',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '876d84d9-2144-49c7-9d24-31d64acd9b2e',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092352Z:876d84d9-2144-49c7-9d24-31d64acd9b2e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:23:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7793.azuredatalakeanalytics.net\",\"accountId\":\"220439bc-e128-415c-8e58-52dd4952b707\",\"creationTime\":\"2017-06-09T09:22:35.1258092Z\",\"lastModifiedTime\":\"2017-06-09T09:22:35.1258092Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793\",\"name\":\"xplattestadla7793\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8406.azuredatalakeanalytics.net\",\"accountId\":\"04e22247-c454-4d5e-b662-4493ff7418aa\",\"creationTime\":\"2017-06-09T09:23:14.8213983Z\",\"lastModifiedTime\":\"2017-06-09T09:23:14.8213983Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8406\",\"name\":\"xplattestadla8406\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0ec3b956-df29-46ab-a832-e390e0c8e9a0',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '876d84d9-2144-49c7-9d24-31d64acd9b2e',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092352Z:876d84d9-2144-49c7-9d24-31d64acd9b2e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:23:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7793.azuredatalakeanalytics.net\",\"accountId\":\"220439bc-e128-415c-8e58-52dd4952b707\",\"creationTime\":\"2017-06-09T09:22:35.1258092Z\",\"lastModifiedTime\":\"2017-06-09T09:22:35.1258092Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793\",\"name\":\"xplattestadla7793\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8406.azuredatalakeanalytics.net\",\"accountId\":\"04e22247-c454-4d5e-b662-4493ff7418aa\",\"creationTime\":\"2017-06-09T09:23:14.8213983Z\",\"lastModifiedTime\":\"2017-06-09T09:23:14.8213983Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8406\",\"name\":\"xplattestadla8406\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e3b034b8-6cd6-4ea9-87fc-800f6d5076c2',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '51a0c6fc-2147-4741-b6f8-0adbb9d714fe',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092353Z:51a0c6fc-2147-4741-b6f8-0adbb9d714fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:23:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7793.azuredatalakeanalytics.net\",\"accountId\":\"220439bc-e128-415c-8e58-52dd4952b707\",\"creationTime\":\"2017-06-09T09:22:35.1258092Z\",\"lastModifiedTime\":\"2017-06-09T09:22:35.1258092Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7793\",\"name\":\"xplattestadla7793\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8406.azuredatalakeanalytics.net\",\"accountId\":\"04e22247-c454-4d5e-b662-4493ff7418aa\",\"creationTime\":\"2017-06-09T09:23:14.8213983Z\",\"lastModifiedTime\":\"2017-06-09T09:23:14.8213983Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8406\",\"name\":\"xplattestadla8406\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1124',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e3b034b8-6cd6-4ea9-87fc-800f6d5076c2',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '51a0c6fc-2147-4741-b6f8-0adbb9d714fe',
  'x-ms-routing-request-id': 'JAPANEAST:20170609T092353Z:51a0c6fc-2147-4741-b6f8-0adbb9d714fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 09 Jun 2017 09:23:53 GMT',
  connection: 'close' });
 return result; }]];