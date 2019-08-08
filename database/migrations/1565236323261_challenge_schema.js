'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChallengeSchema extends Schema {
  up () {
    this.create('challenges', (table) => {
      table.increments()

      table.string('title').notNullable().unique().index()
      table.string('description').notNullable().unique().index()
      table.string('image').unique().index()
      table
      .integer('challenge_category_id')
      .unsigned()
      .references('id')
      .inTable('challenge_categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.timestamps()
    })
  }

  down () {
    this.drop('challenges')
  }
}

module.exports = ChallengeSchema
