'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChallengeCategorySchema extends Schema {
  up () {
    this.create('challenge_categories', (table) => {
      table.increments()
      table.string('title').notNullable().unique().index()
      table.string('color').notNullable().unique().index()
      table.timestamps()
    })
  }

  down () {
    this.drop('challenge_categories')
  }
}

module.exports = ChallengeCategorySchema
