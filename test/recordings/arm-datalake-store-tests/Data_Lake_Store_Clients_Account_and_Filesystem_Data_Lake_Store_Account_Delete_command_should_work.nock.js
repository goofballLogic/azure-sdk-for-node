// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a7e60c49-7f13-46ba-a732-6414b978e847',
  'client-request-id': 'e055aa44-b614-4929-9775-5d6b4530bc9e',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_232',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:59 GMT',
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
  'x-ms-request-id': 'a7e60c49-7f13-46ba-a732-6414b978e847',
  'client-request-id': 'e055aa44-b614-4929-9775-5d6b4530bc9e',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_232',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:59 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3600\",\"expires_on\":\"1460667419\",\"not_before\":\"1460663519\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTE5LCJuYmYiOjE0NjA2NjM1MTksImV4cCI6MTQ2MDY2NzQxOSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.rwisyq_9g1jyKHWbV82aZNOJmjz9fcWywYv68PPtPczIefckrTdPBPdXd1Jm4HRmSnebLHVyb8fCUTLw_oqjKSW7BoPU5MGYWfM76Nwd8ToOLqtfZSlYt3qau91-afdLZvT_vOLhjchTIO45da9OdccGkcSJK5OXPbtod3lC7ydXGfLESZIpRTpp55HRCI2wQmCsYdZO3pgJCPPkI19AUS_QmYY_z5mEFHgRj3ZIa0nNyumPKyoVcVVy_1vBkpC3jRwvSWh3Xh43lJa7NwbsU-TlIFkjerZRQmOzJ0chEoccnPApqT5Tw4lZHTPj5UxdLDPmT6ZB0GoQoco_ajhuMQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLXfLg1I8gDhB0wnx154eZkFWYgV83yJ7e46-SGPV05sYZFlVR6YL7KhSvWb6v3TraplroLsKfHRH4WILbHdojKxlqOHftDt9Ed9ut2chzyUofjIxYRo-tL1t-XhXdX5W0v4noeeH9Go7Vntemi2ysSvObTbRFXH1o0HWhkan07TQaZEb4S7IbWbkJDWnXbKEsVD7FAOqQSUeUkS0SJ35mTiZUMWFZBkoDJ7MKOYDs_s_n4XXOoAFtSdZgNgE3x-3QB4sXlgV17G_HcfUyTOaE7rsIq0PXv1NqAFKobZrVHZPUIG1mkHEoRk7oS3LGgfB28oOUpuqQcaOK20pbDomsAuZoA1xivoWP49t_hv1CwrExTjB9mRURsBs12biDaOlstol92VD6g0upPc0krxHv6bb3Q_QQFlDFbDsgTP1pW18g0yaYv7m1rzr1tSyEhSVOo1OHLSf17plR68ERIJKgqA-7KfKCqbAOYdSm9j4JGXTofDiQ7_jD2HldUQEvH6bjAE2abVdZXia35HN9AIRJZqsZD959M4wAcCTTOZ_zaG-MgxoRXTQJQCt84lprdnh8sAJVYlbYxwA-UpvwE6ZneD2CvdEeAbh4oA_UiHFjjVlOCgcOF5y1Bf5hGk-NDoF1zYt16nSdkQ6cxqs1A0-rtRuNXL9AC-8OFyLiabI0X4GD8nb9wpc0oafNOfV91kTfeU5QJ9ViDzAEXPRa01J4lYgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTE5LCJuYmYiOjE0NjA2NjM1MTksImV4cCI6MTQ2MDY2NzQxOSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '20a1717a-933f-4008-a096-f1851fc47a6c',
  'client-request-id': 'e055aa44-b614-4929-9775-5d6b4530bc9e',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_162',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:58 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3600\",\"expires_on\":\"1460667419\",\"not_before\":\"1460663519\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTE5LCJuYmYiOjE0NjA2NjM1MTksImV4cCI6MTQ2MDY2NzQxOSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.rwisyq_9g1jyKHWbV82aZNOJmjz9fcWywYv68PPtPczIefckrTdPBPdXd1Jm4HRmSnebLHVyb8fCUTLw_oqjKSW7BoPU5MGYWfM76Nwd8ToOLqtfZSlYt3qau91-afdLZvT_vOLhjchTIO45da9OdccGkcSJK5OXPbtod3lC7ydXGfLESZIpRTpp55HRCI2wQmCsYdZO3pgJCPPkI19AUS_QmYY_z5mEFHgRj3ZIa0nNyumPKyoVcVVy_1vBkpC3jRwvSWh3Xh43lJa7NwbsU-TlIFkjerZRQmOzJ0chEoccnPApqT5Tw4lZHTPj5UxdLDPmT6ZB0GoQoco_ajhuMQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLXfLg1I8gDhB0wnx154eZkFWYgV83yJ7e46-SGPV05sYZFlVR6YL7KhSvWb6v3TraplroLsKfHRH4WILbHdojKxlqOHftDt9Ed9ut2chzyUofjIxYRo-tL1t-XhXdX5W0v4noeeH9Go7Vntemi2ysSvObTbRFXH1o0HWhkan07TQaZEb4S7IbWbkJDWnXbKEsVD7FAOqQSUeUkS0SJ35mTiZUMWFZBkoDJ7MKOYDs_s_n4XXOoAFtSdZgNgE3x-3QB4sXlgV17G_HcfUyTOaE7rsIq0PXv1NqAFKobZrVHZPUIG1mkHEoRk7oS3LGgfB28oOUpuqQcaOK20pbDomsAuZoA1xivoWP49t_hv1CwrExTjB9mRURsBs12biDaOlstol92VD6g0upPc0krxHv6bb3Q_QQFlDFbDsgTP1pW18g0yaYv7m1rzr1tSyEhSVOo1OHLSf17plR68ERIJKgqA-7KfKCqbAOYdSm9j4JGXTofDiQ7_jD2HldUQEvH6bjAE2abVdZXia35HN9AIRJZqsZD959M4wAcCTTOZ_zaG-MgxoRXTQJQCt84lprdnh8sAJVYlbYxwA-UpvwE6ZneD2CvdEeAbh4oA_UiHFjjVlOCgcOF5y1Bf5hGk-NDoF1zYt16nSdkQ6cxqs1A0-rtRuNXL9AC-8OFyLiabI0X4GD8nb9wpc0oafNOfV91kTfeU5QJ9ViDzAEXPRa01J4lYgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTE5LCJuYmYiOjE0NjA2NjM1MTksImV4cCI6MTQ2MDY2NzQxOSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '20a1717a-933f-4008-a096-f1851fc47a6c',
  'client-request-id': 'e055aa44-b614-4929-9775-5d6b4530bc9e',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_162',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:58 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9621?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '6bef4d24-65b2-4355-89d5-4500926f91ef',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f1a5da5a-3719-43fd-b3b0-01e86dc94441',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160414T195701Z:f1a5da5a-3719-43fd-b3b0-01e86dc94441',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:57:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9621?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '6bef4d24-65b2-4355-89d5-4500926f91ef',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f1a5da5a-3719-43fd-b3b0-01e86dc94441',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160414T195701Z:f1a5da5a-3719-43fd-b3b0-01e86dc94441',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:57:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '5d6eeb6f-3adb-4b65-a49f-a59dfbfddf46',
  'client-request-id': 'e0651487-0b45-4cff-9bb8-8e078a9c3731',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_279',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:57:01 GMT',
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
  'x-ms-request-id': '5d6eeb6f-3adb-4b65-a49f-a59dfbfddf46',
  'client-request-id': 'e0651487-0b45-4cff-9bb8-8e078a9c3731',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_279',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:57:01 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460667421\",\"not_before\":\"1460663521\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTIxLCJuYmYiOjE0NjA2NjM1MjEsImV4cCI6MTQ2MDY2NzQyMSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.KSoEpTIOh6sK0mnF0oKNAaLtLhInU-IhZA2ONaKlaIQ7xPlBmFS0xVtYZWkM_w2opbUbyulZMt_nWpWl48uYwdlm3_-vkQED93Z-x0exmxVdNU40XFr9pvzU8i8vioqxT_bCrSblYJDUr76GqH22_VI-EGXry4uAxVY1j7BOeMJb88DnOveNNovmWposHQrHxMhhczgynItzkTLFZDz-XjomJlVxECfF4eboNnuuTx8d9iG3Z9t_5hpIois-6G_WQhn71XkZYexd2hHU0RN0MRTnHHFcVlFRazKlreqzZHa1I2D-SWrcv052RDCr0DxrPGU2PsZAG7VefkZaJJmkiQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLbZwm5pqjHCGESrF2O3eH_IM2EaWa90rWfPOP-fJF0xcmj4VDQTKdH1BK87knPvIM-FBtAULm-bEVzP3BAhvToC-3aQmMZhPbktQtvniatHrHUDwUv_XiujvBlrllqD7YIHw5FjDkMLK2o7_jUe04AJa5lo3l9xp7MWifo02zDh_AvIMU9pBg56BJN2lbToZ94x8yxB_UfNKaL_43Yj8cqD0sdAK6W0VZJelbt2vwjcluyxo6hnTAWaEtpjY9rcn7PNAvrhB7zcFf8npJlAErG-TQXFspLGd8NQohaM4k0vousC9qxghqe5UMJ33PEKrDE6zwpEK7xkF2v3mWaUbQbwf_izKRE4PyLrw_3QgogaP8zflW8MDA_CSyB_GFplbzWb4jzQKaQN4iXOE4_e3_uIRdr2VEGwcTQnLdP3NWNpf-fBfPYLzGWpvRe6QC6p957bwLqeaYVWlrSxTJrxqIIVUW-wmpXC588UnIgLGoR2YssNcal_BNIZ_7mXbCDiTemn6GkWnrdYDDjuub3EX3G_a4SvwgZs4KRakC_n681gwlDlDFJuhdQil0SNDzAJEalSlvNHOT6o3V_P5JPHrxs3fSocdsaU_IhT7OnKH2pCfTmSjkS6IBX5zl3jDD3CQVypbISRrMLDmQcsdh5iyn2FyVF174C3eyMowa_i1aG_r687sQSKfg9ncC9QTbBPSdxgKMqEJrkW0vfagod5-gaogAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTIxLCJuYmYiOjE0NjA2NjM1MjEsImV4cCI6MTQ2MDY2NzQyMSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '0666a14e-a0eb-4785-9a7c-5e4ecdf229eb',
  'client-request-id': 'e0651487-0b45-4cff-9bb8-8e078a9c3731',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_50',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:57:02 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460667421\",\"not_before\":\"1460663521\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTIxLCJuYmYiOjE0NjA2NjM1MjEsImV4cCI6MTQ2MDY2NzQyMSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.KSoEpTIOh6sK0mnF0oKNAaLtLhInU-IhZA2ONaKlaIQ7xPlBmFS0xVtYZWkM_w2opbUbyulZMt_nWpWl48uYwdlm3_-vkQED93Z-x0exmxVdNU40XFr9pvzU8i8vioqxT_bCrSblYJDUr76GqH22_VI-EGXry4uAxVY1j7BOeMJb88DnOveNNovmWposHQrHxMhhczgynItzkTLFZDz-XjomJlVxECfF4eboNnuuTx8d9iG3Z9t_5hpIois-6G_WQhn71XkZYexd2hHU0RN0MRTnHHFcVlFRazKlreqzZHa1I2D-SWrcv052RDCr0DxrPGU2PsZAG7VefkZaJJmkiQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLbZwm5pqjHCGESrF2O3eH_IM2EaWa90rWfPOP-fJF0xcmj4VDQTKdH1BK87knPvIM-FBtAULm-bEVzP3BAhvToC-3aQmMZhPbktQtvniatHrHUDwUv_XiujvBlrllqD7YIHw5FjDkMLK2o7_jUe04AJa5lo3l9xp7MWifo02zDh_AvIMU9pBg56BJN2lbToZ94x8yxB_UfNKaL_43Yj8cqD0sdAK6W0VZJelbt2vwjcluyxo6hnTAWaEtpjY9rcn7PNAvrhB7zcFf8npJlAErG-TQXFspLGd8NQohaM4k0vousC9qxghqe5UMJ33PEKrDE6zwpEK7xkF2v3mWaUbQbwf_izKRE4PyLrw_3QgogaP8zflW8MDA_CSyB_GFplbzWb4jzQKaQN4iXOE4_e3_uIRdr2VEGwcTQnLdP3NWNpf-fBfPYLzGWpvRe6QC6p957bwLqeaYVWlrSxTJrxqIIVUW-wmpXC588UnIgLGoR2YssNcal_BNIZ_7mXbCDiTemn6GkWnrdYDDjuub3EX3G_a4SvwgZs4KRakC_n681gwlDlDFJuhdQil0SNDzAJEalSlvNHOT6o3V_P5JPHrxs3fSocdsaU_IhT7OnKH2pCfTmSjkS6IBX5zl3jDD3CQVypbISRrMLDmQcsdh5iyn2FyVF174C3eyMowa_i1aG_r687sQSKfg9ncC9QTbBPSdxgKMqEJrkW0vfagod5-gaogAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTIxLCJuYmYiOjE0NjA2NjM1MjEsImV4cCI6MTQ2MDY2NzQyMSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '0666a14e-a0eb-4785-9a7c-5e4ecdf229eb',
  'client-request-id': 'e0651487-0b45-4cff-9bb8-8e078a9c3731',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_50',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:57:02 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9621?api-version=2015-10-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeStore/accounts/xplattestadls9621' under resource group 'xplattestadlsrg01' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '978d7104-6619-412a-ba3d-180f446dc441',
  'x-ms-correlation-request-id': '978d7104-6619-412a-ba3d-180f446dc441',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160414T195702Z:978d7104-6619-412a-ba3d-180f446dc441',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:57:02 GMT',
  connection: 'close',
  'content-length': '171' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9621?api-version=2015-10-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeStore/accounts/xplattestadls9621' under resource group 'xplattestadlsrg01' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '978d7104-6619-412a-ba3d-180f446dc441',
  'x-ms-correlation-request-id': '978d7104-6619-412a-ba3d-180f446dc441',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160414T195702Z:978d7104-6619-412a-ba3d-180f446dc441',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:57:02 GMT',
  connection: 'close',
  'content-length': '171' });
 return result; }]];