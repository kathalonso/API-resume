const resume = require('../resume')

const getAllResume = (request, response) => {
  return response.send(resume)
}

const getExpById = (request, response) => {
    const id = request.params.id

    const foundExp = resume.experience.filter((exp) => exp.id === parseInt(id))

    response.send(foundExp)
}

const createNewExp = (request, response) => {
    const { id, role, company, summary } = request.body

    if (!id || !role || !company || !summary) {
      return response.status(400).send('The following is required: id, role, company, summary')
    }

    const newExp = { id, role, company, summary }

    resume.push(newExp)
    
    return response.status(201).send(newExp)
}


module.exports = { getAllResume, getExpById, createNewExp }
