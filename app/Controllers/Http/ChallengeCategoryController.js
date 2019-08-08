'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with challengecategories
 */
class ChallengeCategoryController {
  
  /**
   * Show a list of all challengecategories.
   * GET challengecategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const ChallengeCategory =  use('App/Models/ChallengeCategory')

    const classifications = await ChallengeCategory.all()

    
    return response.json(classifications)
  }

  /**
   * Render a form to be used for creating a new challengecategory.
   * GET challengecategories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new challengecategory.
   * POST challengecategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const ChallengeCategory =  use('App/Models/ChallengeCategory')
    const { title, color } = request.body;


    const challeng = await ChallengeCategory.create({
      title,
      color
    })

    return response.json(challeng)

  }

  /**
   * Display a single challengecategory.
   * GET challengecategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const ChallengeCategory =  use('App/Models/ChallengeCategory')
    const  { id }  = params

    const classifications = await ChallengeCategory.findOrFail(id)


    return response.json(classifications)
  }

  /**
   * Render a form to update an existing challengecategory.
   * GET challengecategories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update challengecategory details.
   * PUT or PATCH challengecategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const ChallengeCategory =  use('App/Models/ChallengeCategory')
    const Database = use('Database')
    const  { id }  = params
    const { title, color } = request.body;


    const classification = await ChallengeCategory.findOrFail(id)

    classification.merge({
      title,
      color
    })
    
    await classification.save()

    return response.json(classification)
  }

  /**
   * Delete a challengecategory with id.
   * DELETE challengecategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const ChallengeCategory = use('App/Models/ChallengeCategory')
    const { id } = params

    const challenge = await ChallengeCategory.findOrFail(id);
    await challenge.delete()

    return response.json(challenge)
  }
}

module.exports = ChallengeCategoryController
