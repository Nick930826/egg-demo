'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const { title, content } = await ctx.service.user.user();
    ctx.body = {
      title,
      content,
    };
  }

  async getid() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = id;
  }

  async add() {
    const { ctx } = this;
    const { title, content } = ctx.request.body;
    console.log('title', title);
    console.log('content', content);
    ctx.body = {
      title,
      content,
    };
  }
}

module.exports = UserController;
