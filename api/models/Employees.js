/**
 * Employees.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	firstName: {
  		type: 'string',
  		minLength: 2,
  		maxLength: 15,
  		regex: /^[a-zA-Z]+$/
  	},

  	lastName: {
  		type: 'string',
  		minLength: 2,
  		maxLength: 15,
  		regex: /^[a-zA-Z]+$/
  	},

  	email: {
  		type: 'string',
  		unique: true,
  		required: false,
  		email: true
  	},

  	homePhone: {
  		type: 'string',
  	},

  	cellPhone: {
  		type: 'string',
  	},

  	userName: {
  		type: 'string',
  		minLength: 3,
  		regex: /^[a-zA-Z0-9]+$/
  	},

  	password: {
  		type: 'string',
  		required: true,
  		regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  	},

  	active: {
  		type: 'integer',
  		enum: [1,0]
  	}
  }
};

