/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the BasicAuthentication class.
 * @constructor
 * @member {string} [username] Gets or sets the username.
 *
 * @member {string} [password] Gets or sets the password, return value will
 * always be empty.
 *
 */
class BasicAuthentication extends models['HttpAuthentication'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BasicAuthentication
   *
   * @returns {object} metadata of BasicAuthentication
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BasicAuthentication',
      type: {
        name: 'Composite',
        className: 'BasicAuthentication',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'ClientCertificate', 'ActiveDirectoryOAuth', 'Basic' ]
            }
          },
          username: {
            required: false,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BasicAuthentication;