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
 * A definition of an Azure proxy resource.
 *
 * @extends models['BaseResource']
 */
class ProxyResource extends models['BaseResource'] {
  /**
   * Create a ProxyResource.
   * @member {string} [id] The ID of the resource.
   * @member {string} [name] The name of the resource.
   * @member {string} [type] The type of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProxyResource
   *
   * @returns {object} metadata of ProxyResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProxyResource',
      type: {
        name: 'Composite',
        className: 'ProxyResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProxyResource;