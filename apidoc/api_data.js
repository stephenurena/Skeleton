define({ "api": [  {    "type": "delete",    "url": "/api/comments/:id",    "title": "Delete a Comment (restriction: authenticated)",    "name": "DeleteComment",    "group": "Comment",    "parameter": {      "fields": {        "Params": [          {            "group": "Params",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Comment unique ID.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 204 OK",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/comment/comment.controller.js",    "groupTitle": "Comment"  },  {    "type": "get",    "url": "/api/comments/agent/:agentId?page=:pageNumber",    "title": "Request Comment List of an Agent",    "name": "GetCommentListOfAgent",    "group": "Comment",    "parameter": {      "fields": {        "Query": [          {            "group": "Query",            "type": "Number",            "optional": false,            "field": "page",            "description": "<p>Page number(integer). Default value is 0</p>"          }        ],        "Params": [          {            "group": "Params",            "type": "String",            "optional": false,            "field": "agentId",            "description": "<p>Agent(User) unique ID.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[{\n  \"agentId\": \"59483862c27e982e0f84c210\",\n  \"author\": {\n     _id: \"59483862c27e982e0f84c210\",\n     name: \"John Doe\"\n  },\n  text: \"Hello. This is an example comment\",\n  createdAt:\n  updatedAt:\n},\n...\n...\n{\n  ...\n}]",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/comment/comment.controller.js",    "groupTitle": "Comment"  },  {    "type": "get",    "url": "/api/comments/:id",    "title": "Request a single comment",    "name": "GetSingleComment",    "group": "Comment",    "parameter": {      "fields": {        "Params": [          {            "group": "Params",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Comment Unique ID.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "comment",            "description": "<p>comment object</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"agentId\": \"59483862c27e982e0f84c210\",\n  \"author\": {\n     _id: \"59483862c27e982e0f84c210\",\n     name: \"John Doe\"\n  },\n  text: \"Hello. This is an example comment\",\n  createdAt:\n  updatedAt:\n},",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/comment/comment.controller.js",    "groupTitle": "Comment"  },  {    "type": "post",    "url": "/api/comments",    "title": "Create a Comment (restriction: authenticated)",    "name": "PostComment",    "group": "Comment",    "parameter": {      "fields": {        "Body": [          {            "group": "Body",            "type": "String",            "optional": false,            "field": "agentId",            "description": "<p>Agent(User) unique ID.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>comment text</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "rate",            "description": "<p>star rate (integer from 0 to 5)</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "comment",            "description": "<p>comment object</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"agentId\": \"59483862c27e982e0f84c210\",\n  \"author\": {\n     _id: \"59483862c27e982e0f84c210\",\n     name: \"John Doe\"\n  },\n  text: \"Hello. This is an example comment\",\n  rate: 3\n  createdAt:\n  updatedAt:\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/comment/comment.controller.js",    "groupTitle": "Comment"  },  {    "type": "put",    "url": "/api/comments",    "title": "Update a Comment (restriction: authenticated)",    "name": "UpdateComment",    "group": "Comment",    "parameter": {      "fields": {        "Params": [          {            "group": "Params",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Comment unique ID.</p>"          }        ],        "Body": [          {            "group": "Body",            "type": "String",            "optional": false,            "field": "agentId",            "description": "<p>(Optional) Agent(User) unique ID.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>(Optional) comment text</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "rate",            "description": "<p>(Optional) star rate (integer from 0 to 5)</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "comment",            "description": "<p>comment object</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"agentId\": \"59483862c27e982e0f84c210\",\n  \"author\": {\n     _id: \"59483862c27e982e0f84c210\",\n     name: \"John Doe\"\n  },\n  text: \"Hello. This is an example comment\",\n  rate: 3\n  createdAt:\n  updatedAt:\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/comment/comment.controller.js",    "groupTitle": "Comment"  },  {    "type": "put",    "url": "/api/users/:id/password",    "title": "Change User Password",    "name": "ChangePassword",    "group": "Users",    "parameter": {      "fields": {        "Params": [          {            "group": "Params",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p>"          }        ],        "Body": [          {            "group": "Body",            "type": "String",            "optional": false,            "field": "oldPassword",            "description": "<p>Users old password.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "newPassword",            "description": "<p>Users new password.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 204 OK",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/user/user.controller.js",    "groupTitle": "Users"  },  {    "type": "post",    "url": "/api/users",    "title": "Create User",    "name": "Create_User",    "group": "Users",    "parameter": {      "fields": {        "Body": [          {            "group": "Body",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>User name.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Users email.</p>"          },          {            "group": "Body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Users email.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>json web token.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/api/user/user.controller.js",    "groupTitle": "Users"  },  {    "type": "delete",    "url": "/api/users/:id",    "title": "Request User's own information (restriction: 'admin')",    "name": "DeleteUser",    "group": "Users",    "parameter": {      "fields": {        "Params": [          {            "group": "Params",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 204 OK",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/user/user.controller.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/api/users/",    "title": "Request All User List (restriction: 'admin')",    "name": "GetAllUser",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "user",            "description": "<p>array.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/api/user/user.controller.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/api/users/me",    "title": "Request User's own information (restriction: 'authorized')",    "name": "GetMyInfo",    "group": "Users",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"example@example.com\",\n  \"google\": Object,\n  \"name\": \"John Doe\",\n  \"profiver\": \"google\",\n  \"role\": \"user\",\n  \"_id\": \"59483862c27e982e0f84c210\"\n  \"location\": \"San Diego\",\n  \"isAgent\": false\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/user/user.controller.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/api/users/:id",    "title": "Request User's own information",    "name": "GetUserInfo",    "group": "Users",    "parameter": {      "fields": {        "Params": [          {            "group": "Params",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"John Doe\",\n  \"role\": \"user\",\n  \"location\": \"San Diego\",\n  \"isAgent\": false,\n  \"_id\": \"59483862c27e982e0f84c210\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/api/user/user.controller.js",    "groupTitle": "Users"  }] });
