'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Challenge extends Model {

    challenge_categories() {
        return this.belongsTo('App/Models/ChallengeCategory')
    }
}

module.exports = Challenge
