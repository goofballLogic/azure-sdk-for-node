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
 * Describes a network.
 *
 */
class NetworkProperties {
  /**
   * Create a NetworkProperties.
   * @member {string} [description] User readable description of the network.
   * @member {string} addressPrefix the address prefix for this network.
   * @member {object} [ingressConfig] Configuration for public connectivity for
   * this network.
   * @member {string} [ingressConfig.qosLevel] The QoS tier for ingress.
   * Possible values include: 'Bronze'
   * @member {array} [ingressConfig.layer4] Configuration for layer4 public
   * connectivity for this network.
   * @member {string} [ingressConfig.publicIPAddress] The public IP address for
   * reaching this network.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkProperties
   *
   * @returns {object} metadata of NetworkProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkProperties',
      type: {
        name: 'Composite',
        className: 'NetworkProperties',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          addressPrefix: {
            required: true,
            serializedName: 'addressPrefix',
            type: {
              name: 'String'
            }
          },
          ingressConfig: {
            required: false,
            serializedName: 'ingressConfig',
            type: {
              name: 'Composite',
              className: 'IngressConfig'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkProperties;