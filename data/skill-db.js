export { 
	find,
  findById,
  create,
  findByIdAndDelete
}

const skills = [
  {text: 'JavaScript', done: false, _id: 125223},
  {text: 'Eat Hotpocket', done: false, _id: 127904},
  {text: 'Cry', done: true, _id: 139608},
]

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the Skill object
    const idx = skills.findIndex(Skill => Skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No Skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

function create(Skill, callback) {
  // Add the id (random)
  Skill._id = Date.now() % 1000000
  // Set new skills as false
  Skill.done = false
  console.log(Skill)
  skills.push(Skill)
  return callback(null, Skill)
}


const findById = (id, callback) =>{
  try {
    const Skill = skills.find(Skill => Skill._id === parseInt(id))
    if (!Skill) throw new Error ('No Skill was found')
    return callback(null, Skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}