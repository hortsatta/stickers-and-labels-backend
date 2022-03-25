'use strict';

/**
 * lamination service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lamination.lamination');
