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
 * Min and max value of a status code range.
 *
 */
class MonitorConfigExpectedStatusCodeRangesItem {
  /**
   * Create a MonitorConfigExpectedStatusCodeRangesItem.
   * @member {number} [min] Min status code.
   * @member {number} [max] Max status code.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MonitorConfigExpectedStatusCodeRangesItem
   *
   * @returns {object} metadata of MonitorConfigExpectedStatusCodeRangesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MonitorConfig_expectedStatusCodeRangesItem',
      type: {
        name: 'Composite',
        className: 'MonitorConfigExpectedStatusCodeRangesItem',
        modelProperties: {
          min: {
            required: false,
            serializedName: 'min',
            type: {
              name: 'Number'
            }
          },
          max: {
            required: false,
            serializedName: 'max',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = MonitorConfigExpectedStatusCodeRangesItem;