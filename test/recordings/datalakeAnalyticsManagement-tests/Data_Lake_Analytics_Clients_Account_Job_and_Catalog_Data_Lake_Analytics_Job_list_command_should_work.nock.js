// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'fc3f9872-b7fc-4d3d-a5a5-19f4f9dbe543',
  'client-request-id': 'a30ab700-8e6b-4051-af3b-482858ae3c1a',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_125',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 18 Apr 2016 17:09:40 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'fc3f9872-b7fc-4d3d-a5a5-19f4f9dbe543',
  'client-request-id': 'a30ab700-8e6b-4051-af3b-482858ae3c1a',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_125',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 18 Apr 2016 17:09:40 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3600\",\"expires_on\":\"1461002981\",\"not_before\":\"1460999081\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwOTk5MDgxLCJuYmYiOjE0NjA5OTkwODEsImV4cCI6MTQ2MTAwMjk4MSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.Aa1HBRNbHUMiS3E5wT2WPnl8HxgUm3nM3F5w5MLgnGx91tusVA8eespMyMehQmDpcoKbetwxKlysgObzuOA300pQSDu_Grq1HmmF-NdL_KZXunORG3axwuledWI_Pn6QMjVb6vk6FNzsmJKtfNuMRu--5BvSfqs0JnDUwV1ECydg3THGgyF2DBeH43FRqgLa7GcWZrZ2lsgcmw6NIxY83JvkjAT0_D8RNYuOvPaWlgFSDICQvaOHGxgU5WBvmGt1OlAttbPr84asL91UiYQngKHHOFzwv_qT4cA-lyfj0hLq3S_SrxGW-z6QcYxscUoBsW7cdydmhBLPr8YyAhNaXQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLZEozRCnPkE03Fv3OQP6vr0h5DdBOIOY7bZWTovwyBzbExU7y5zRhzkvPVuEnxsGrLHXq_6tvA_AzlEWrzquz0bPCfqUxG5WXeZyyLiWY8FktGR1BRXd-K9e4fEdcabOHWIjbVgwrQ7DjrQx3lIwa75hIXzYPyHXRn2PS1K7tpBh6G4P13ccakEa6--3bPrDF4bMVZ9jgo4aqVwwUUdFBaBO2L0OVzog8-Q1VNTJSPS9hwB40KdYqnIGzy5CHkJpko5jGs7F6x431JhNHXQm2uh08WVstFm1bCWLItSVf23EeXNI4fWPRtxVyiSXpJ_p-v94pYm1NPMWFzAPC4L51abrWaTzdZTBWQ_RADDj_SAbI4Gye5g3WjQZfgq_MYaVzJmmAzwAalTTU2BF_efp8CWqcsZDiw78YAkBnB9d1NGWc-lNFTXOMeWMzzGFYMk4qUo0-cYXT8auk2f_RBKmG5A5jhgblOa0TrcZ6xeD71nx5EaVMbuqdCLqF02d7AWQALOPHhS2VZAOVeo9UIiX7e-wW6PLq_rfODJSV3tinQVx6GfEsT6BOAWWbZvVenSimjFYLOFR9xUNd_QgNHPsHHUJsvLJX_jUfPFrxDV8tjn4AJ6W_uVbsDJd7G0bB-pfFRDVW9r9VmejXwG2UESNpjtmt3bRgPmaalGwN4abElM7jfHGtLvWN0XonNN1uNI4ssjr4bIq2xjlaKzbl0aKKnAgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwOTk5MDgxLCJuYmYiOjE0NjA5OTkwODEsImV4cCI6MTQ2MTAwMjk4MSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '30c93ad6-5cd9-47ea-b04d-0d76b675251b',
  'client-request-id': 'a30ab700-8e6b-4051-af3b-482858ae3c1a',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_393',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 18 Apr 2016 17:09:40 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3600\",\"expires_on\":\"1461002981\",\"not_before\":\"1460999081\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwOTk5MDgxLCJuYmYiOjE0NjA5OTkwODEsImV4cCI6MTQ2MTAwMjk4MSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.Aa1HBRNbHUMiS3E5wT2WPnl8HxgUm3nM3F5w5MLgnGx91tusVA8eespMyMehQmDpcoKbetwxKlysgObzuOA300pQSDu_Grq1HmmF-NdL_KZXunORG3axwuledWI_Pn6QMjVb6vk6FNzsmJKtfNuMRu--5BvSfqs0JnDUwV1ECydg3THGgyF2DBeH43FRqgLa7GcWZrZ2lsgcmw6NIxY83JvkjAT0_D8RNYuOvPaWlgFSDICQvaOHGxgU5WBvmGt1OlAttbPr84asL91UiYQngKHHOFzwv_qT4cA-lyfj0hLq3S_SrxGW-z6QcYxscUoBsW7cdydmhBLPr8YyAhNaXQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLZEozRCnPkE03Fv3OQP6vr0h5DdBOIOY7bZWTovwyBzbExU7y5zRhzkvPVuEnxsGrLHXq_6tvA_AzlEWrzquz0bPCfqUxG5WXeZyyLiWY8FktGR1BRXd-K9e4fEdcabOHWIjbVgwrQ7DjrQx3lIwa75hIXzYPyHXRn2PS1K7tpBh6G4P13ccakEa6--3bPrDF4bMVZ9jgo4aqVwwUUdFBaBO2L0OVzog8-Q1VNTJSPS9hwB40KdYqnIGzy5CHkJpko5jGs7F6x431JhNHXQm2uh08WVstFm1bCWLItSVf23EeXNI4fWPRtxVyiSXpJ_p-v94pYm1NPMWFzAPC4L51abrWaTzdZTBWQ_RADDj_SAbI4Gye5g3WjQZfgq_MYaVzJmmAzwAalTTU2BF_efp8CWqcsZDiw78YAkBnB9d1NGWc-lNFTXOMeWMzzGFYMk4qUo0-cYXT8auk2f_RBKmG5A5jhgblOa0TrcZ6xeD71nx5EaVMbuqdCLqF02d7AWQALOPHhS2VZAOVeo9UIiX7e-wW6PLq_rfODJSV3tinQVx6GfEsT6BOAWWbZvVenSimjFYLOFR9xUNd_QgNHPsHHUJsvLJX_jUfPFrxDV8tjn4AJ6W_uVbsDJd7G0bB-pfFRDVW9r9VmejXwG2UESNpjtmt3bRgPmaalGwN4abElM7jfHGtLvWN0XonNN1uNI4ssjr4bIq2xjlaKzbl0aKKnAgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwOTk5MDgxLCJuYmYiOjE0NjA5OTkwODEsImV4cCI6MTQ2MTAwMjk4MSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '30c93ad6-5cd9-47ea-b04d-0d76b675251b',
  'client-request-id': 'a30ab700-8e6b-4051-af3b-482858ae3c1a',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_393',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 18 Apr 2016 17:09:40 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla2920.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-03-20-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"b938d6e0-88a3-4b06-9b97-486b57ca4e93\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"2016-04-18T17:08:14.6984604+00:00\",\"startTime\":\"2016-04-18T17:09:01.386752+00:00\",\"endTime\":\"2016-04-18T17:09:21.4964694+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"2ea8cde2-fad5-42dc-8be5-58acd27f88cc\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"2016-04-18T17:09:34.2310587+00:00\",\"endTime\":\"2016-04-18T17:09:37.8092465+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"}]}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e5408cf9-96cf-4ea0-8d63-a6328d5ef87f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 18 Apr 2016 17:09:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla2920.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2016-03-20-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"b938d6e0-88a3-4b06-9b97-486b57ca4e93\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"2016-04-18T17:08:14.6984604+00:00\",\"startTime\":\"2016-04-18T17:09:01.386752+00:00\",\"endTime\":\"2016-04-18T17:09:21.4964694+00:00\",\"state\":\"Ended\",\"result\":\"Succeeded\"},{\"jobId\":\"2ea8cde2-fad5-42dc-8be5-58acd27f88cc\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"2016-04-18T17:09:34.2310587+00:00\",\"endTime\":\"2016-04-18T17:09:37.8092465+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\"}]}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e5408cf9-96cf-4ea0-8d63-a6328d5ef87f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 18 Apr 2016 17:09:41 GMT',
  connection: 'close' });
 return result; }]];