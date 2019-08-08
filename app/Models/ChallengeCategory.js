'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChallengeCategory extends Model {

    challenges() {
        return this.hasMany('App/Models/Challenge')

     }
}

module.exports = ChallengeCategory
