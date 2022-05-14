export type AmplifyDependentResourcesAttributes = {
    "api": {
        "ShareNote": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "auth": {
        "ShareNote": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "shareNoteUserGroupRole": "string",
            "shareNoteAdminGroupRole": "string"
        }
    },
    "storage": {
        "s3sharenotestorage5cbde9d6": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "AdminQueriesb0e8523a": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "ShareNotePostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    }
}