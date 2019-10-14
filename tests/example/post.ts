// export default {
//     headers:
//     {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'cache-control': 'no-cache',
//         'Postman-Token': '57cc4dc3-0a93-41d4-9d17-76a2b8cff5b9',
//         'User-Agent': 'PostmanRuntime/7.6.0',
//         Accept: '*/*',
//         Host: 'localhost:3000',
//         'accept-encoding': 'gzip, deflate',
//         'content-length': '85',
//         Connection: 'keep-alive'
//     },
//     multiValueHeaders:
//     {
//         'Content-Type': ['application/x-www-form-urlencoded'],
//         'cache-control': ['no-cache'],
//         'Postman-Token': ['57cc4dc3-0a93-41d4-9d17-76a2b8cff5b9'],
//         'User-Agent': ['PostmanRuntime/7.6.0'],
//         Accept: ['*/*'],
//         Host: ['localhost:3000'],
//         'accept-encoding': ['gzip, deflate'],
//         'content-length': ['85'],
//         Connection: ['keep-alive']
//     },
//     path: '/api/exampleFunction',
//     pathParameters: null,
//     requestContext:
//     {
//         accountId: 'offlineContext_accountId',
//         resourceId: 'offlineContext_resourceId',
//         apiId: 'offlineContext_apiId',
//         stage: 'dev',
//         requestId: 'offlineContext_requestId_6798544246801319',
//         identity:
//         {
//             cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
//             accountId: 'offlineContext_accountId',
//             cognitoIdentityId: 'offlineContext_cognitoIdentityId',
//             caller: 'offlineContext_caller',
//             apiKey: 'offlineContext_apiKey',
//             sourceIp: '127.0.0.1',
//             cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
//             cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
//             userArn: 'offlineContext_userArn',
//             userAgent: 'PostmanRuntime/7.6.0',
//             user: 'offlineContext_user'
//         },
//         authorizer:
//         {
//             principalId: 'offlineContext_authorizer_principalId',
//             claims: undefined
//         },
//         protocol: 'HTTP/1.1',
//         resourcePath: '/api/exampleFunction',
//         httpMethod: 'POST'
//     },
//     resource: '/api/exampleFunction',
//     httpMethod: 'POST',
//     queryStringParameters: null,
//     multiValueQueryStringParameters: null,
//     stageVariables: null,
//     body:
//         'email=erik.rehn98%40gmail.com&password=Vsvstend123&companyId=5d48125428e78625e3550afe',
//     isOffline: true
// }

export default {
    headers:
    {
        'cache-control': 'no-cache',
        'Postman-Token': '831d3f8d-21e7-4b31-bce5-b192fc888a73',
        Authorization: 'Bearer aasdfasf',
        'User-Agent': 'PostmanRuntime/7.6.0',
        Accept: '*/*',
        Host: 'localhost:3000',
        'accept-encoding': 'gzip, deflate',
        'content-type':
            'multipart/form-data; boundary=--------------------------759266277513184935814163',
        'content-length': '160',
        Connection: 'keep-alive'
    },
    multiValueHeaders:
    {
        'cache-control': ['no-cache'],
        'Postman-Token': ['831d3f8d-21e7-4b31-bce5-b192fc888a73'],
        Authorization: ['Bearer aasdfasf'],
        'User-Agent': ['PostmanRuntime/7.6.0'],
        Accept: ['*/*'],
        Host: ['localhost:3000'],
        'accept-encoding': ['gzip, deflate'],
        'content-type':
            ['multipart/form-data; boundary=--------------------------759266277513184935814163'],
        'content-length': ['160'],
        Connection: ['keep-alive']
    },
    path: '/api/exampleFunction',
    pathParameters: null,
    requestContext:
    {
        accountId: 'offlineContext_accountId',
        resourceId: 'offlineContext_resourceId',
        apiId: 'offlineContext_apiId',
        stage: 'dev',
        requestId: 'offlineContext_requestId_817620357704069',
        identity:
        {
            cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
            accountId: 'offlineContext_accountId',
            cognitoIdentityId: 'offlineContext_cognitoIdentityId',
            caller: 'offlineContext_caller',
            apiKey: 'offlineContext_apiKey',
            sourceIp: '127.0.0.1',
            cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
            cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
            userArn: 'offlineContext_userArn',
            userAgent: 'PostmanRuntime/7.6.0',
            user: 'offlineContext_user'
        },
        authorizer:
        {
            principalId: 'offlineContext_authorizer_principalId',
            claims: undefined
        },
        protocol: 'HTTP/1.1',
        resourcePath: '/api/exampleFunction',
        httpMethod: 'POST'
    },
    resource: '/api/exampleFunction',
    httpMethod: 'POST',
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    body:
        '----------------------------759266277513184935814163\r\nContent-Disposition: form-data; name="12"\r\n\r\n123\r\n----------------------------759266277513184935814163--\r\n',
    isOffline: true
}