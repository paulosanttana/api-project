import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'
import { DateTime } from 'luxon'

export default class UsersController {
  public async index({ }: HttpContextContract) {
    return 'Iam return index'
  }

  public async create({ }: HttpContextContract) { }

  public async store({ request }: HttpContextContract) {
    Database.insertQuery()

    const { name, email } = request.all()
    const row = Database.table('users')
      .returning('id')
      .insert({
        name: name,
        email: email,
        created_at: DateTime.local().toSQLDate(),
      })
    return row
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ request }: HttpContextContract) {
    const { id } = request.all()
    const product = User.find(id)
    product.name = request.input('name')

    user.save()

    console.log(id)
    return id

  }

  public async destroy({ }: HttpContextContract) { }
}
