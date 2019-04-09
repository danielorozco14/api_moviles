'use strict'

var mongoose=require('mongoose'),
Task=mongoose.model('Tasks');

exports.list_all_tasks=function(request,response){
    Task.find({},function(error,task){
        if(error){
            response.send(err);
        }
        response.json(task);
    });
};

exports.create_a_task = function(request, response) {
    var new_task = new Task(request.body);
    new_task.save(function(err, task) {
      if (err)
        response.send(err);
      response.json(task);
    });
  };

exports.read_a_task=function(request,response){
    Task.findById(req.params.taskId, function(err,task){
        if(err){
            response.send(err);
        }
        response.json(task);
    });
};

exports.update_a_task=function(request,response){
    Task.findOneAndUpdate({_id:request.params.taskId},request.body,{new:true},function(err,task){
        if(err){
            response.send(err);
        }
        response.json(task);
    });
};

exports.delete_a_task = function(req, res) {
    Task.remove({
      _id: req.params.taskId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Tarea Eliminada' });
    });
  };