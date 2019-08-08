'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


/**
 * Resourceful controller for interacting with challenges
 */
class ChallengeController {
  /**
   * Show a list of all challenges.
   * GET challenges
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    
  }

  /**
   * Render a form to be used for creating a new challenge.
   * GET challenges/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new challenge.
   * POST challenges
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const Challenge = use('App/Models/Challenge')
    const { title, description, challenge_category_id } = request.body

    const challenge = await Challenge.create({
      title,
      description,
      challenge_category_id
    })
    
    return  response.json(challenge)
  }

  /**
   * Display a single challenge.
   * GET challenges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const Challenge = use('App/Models/Challenge')

    const challenge = await Challenge.findOrFail(params.id)

    return response.json(challenge)
  }

  /**
   * Render a form to update an existing challenge.
   * GET challenges/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update challenge details.
   * PUT or PATCH challenges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const Challenge = use('App/Models/Challenge')
    const { title, description, challenge_category_id } = request.body

    const challenge = await Challenge.findOrFail(params.id)
    challenge.merge({
      title,
      description,
      challenge_category_id
    })
    
    await challenge.save();
    return  response.json(challenge)

  }

  /**
   * Delete a challenge with id.
   * DELETE challenges/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const Challenge = use('App/Models/Challenge')

    const challenge = await Challenge.findOrFail(params.id)
    await challenge.delete();

    return response.json(challenge)
  }
}

module.exports = ChallengeController
