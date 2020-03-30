'use strict'

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');
const AuthorizationService = use('App/Services/AuthorizationService');

class TaskController {
  async index({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);

    AuthorizationService(project, user);

    return await project.tasks().fetch();
  }

  async create({ auth, request, params }) {
    const user = await auth.getUser();
    const { description } = request.body;
    const { id } = params;
    const project = await Project.find(id);

    AuthorizationService(project, user);
    const task = new Task();

    task.fill({
      description
    });

    await project.tasks().save(task);

    return task;
  }
  
  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);
    const project = await task.project().fetch();

    AuthorizationService(project, user);

    await task.delete();

    return task;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);
    const project = await task.project().fetch();
    
    AuthorizationService(project, user);

    task.merge(request.only([
      'description',
      'completed'
    ]));

    await task.save();

    return task;
  }
}

module.exports = TaskController
