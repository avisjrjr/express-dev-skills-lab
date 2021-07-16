import * as todoDb from '../data/skill-db.js'


export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete
}

function deleteSkill(req, res) {
  todoDb.findByIdAndDelete(req.params.id, function (error, skill) {
    res.redirect('/skills')
  })
}

function create(req, res) {
  todoDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function index(req, res) {
  todoDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills,
      error,
      time: req.time
    })
  })
}

function show(req, res) {
  todoDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill,
      error
    })
  })
}