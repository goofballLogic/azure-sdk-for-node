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
 * Base class for validate operation request.
 *
 * @extends models['Resource']
 */
class ValidateOperationRequestResource extends models['Resource'] {
  /**
   * Create a ValidateOperationRequestResource.
   * @member {object} [properties] ValidateOperationRequestResource properties
   * @member {string} [properties.objectType] Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ValidateOperationRequestResource
   *
   * @returns {object} metadata of ValidateOperationRequestResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ValidateOperationRequestResource',
      type: {
        name: 'Composite',
        className: 'ValidateOperationRequestResource',
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
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'objectType',
                clientName: 'objectType'
              },
              uberParent: 'ValidateOperationRequest',
              className: 'ValidateOperationRequest'
            }
          }
        }
      }
    };
  }
}

module.exports = ValidateOperationRequestResource;