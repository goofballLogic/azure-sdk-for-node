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

/**
 * Deployment on error behavior with additional details.
 *
 */
class OnErrorDeploymentExtended {
  /**
   * Create a OnErrorDeploymentExtended.
   * @member {string} [provisioningState] The state of the provisioning for the
   * on error deployment.
   * @member {string} [type] The deployment on error behavior type. Possible
   * values are LastSuccessful and SpecificDeployment. Possible values include:
   * 'LastSuccessful', 'SpecificDeployment'
   * @member {string} [deploymentName] The deployment to be used on error case.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OnErrorDeploymentExtended
   *
   * @returns {object} metadata of OnErrorDeploymentExtended
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OnErrorDeploymentExtended',
      type: {
        name: 'Composite',
        className: 'OnErrorDeploymentExtended',
        modelProperties: {
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'LastSuccessful', 'SpecificDeployment' ]
            }
          },
          deploymentName: {
            required: false,
            serializedName: 'deploymentName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OnErrorDeploymentExtended;