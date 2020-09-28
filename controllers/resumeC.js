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

  resume.experience.push(newExp)
  
  return response.status(201).send(newExp)
}

const deleteExp = (request, response) => {
  const { id, role, company, summary } = request.body

  if (!id || !role || !company || !summary) {
    return response.status(400).send('The following is required: id, role, company, summary')
  }

  const newExp = { id, role, company, summary }

  resume.experience.push(newExp)
  
  return response.status(201).send(newExp)
}



module.exports = { getAllResume, getExpById, createNewExp, deleteExp }


const deleteDepartment = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    const department = await models.Departments.findOne({
      where: { id },
      include: [
        { model: models.Animals },
        { model: models.ZooKeepers },
      ],
    })

    if (!department) return response.status(404).send(`Unknown department with ID: ${id}`)

    if (department.protected) return response.status(409).send('Cannot delete protected departments')

    if (department.animals.length || department.zooKeepers.length) {
      return response.status(409).send('Cannot delete departments that have animals or zoo keepers in them')
    }

    await models.Departments.destroy({ where: { id } })

    return response.send(`Successfully deleted the department with ID: ${id}`)
  } catch (error) {
    return response.status(500).send('Unknown error while deleting department')
  }
}