// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
'use strict';


// Test these out 

if (process.env.NODE_ENV === 'production' && true) {
	module.exports = require('./dist/aws-amplify-auth.min.js');
} else {
	module.exports = require('./dist/aws-amplify-auth.js');
}
