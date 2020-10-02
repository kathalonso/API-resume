const resume = require('../resume')

const getAllResume = (request, response) => {
    return response.send(resume)
}

const getExpById = (request, response) => {
  const { id } = request.params

  const foundExp = resume.experience.filter((experience) => experience.id === parseInt(request.params.id) )

  return response.send(foundExp)
}

const createNewExp = (request, response) => {
  const { id, role, company, summary } = request.body

  if (!id || !role || !company || !summary) {
    return response.status(400).send('Oops! The following is required: id, role, company, summary')
  }
  const newExp = resume.experience.create({ id, role, company, summary })  
    return response.status(201).send(newExp)
}

// const deleteExp = async (request, response) => {
//   try {
//     const id = parseInt(request.params.id)
//     const experience = await models.experiences.findOne({
//       where: { id },
//       include: [
//         { model: models.experiences },
//         // { model: models.ZooKeepers },
//       ],
//     })

//     if (!experience) return response.status(404).send(`Unknown experience with ID: ${id}`)

//     if (experience.protected) return response.status(409).send('Cannot delete protected experiences')

//     // if (department.animals.length || department.zooKeepers.length) {
//     //   return response.status(409).send('Cannot delete departments that have animals or zoo keepers in them')
//     // }

//     await models.experiences.destroy({ where: { id } })

//     return response.send(`Successfully deleted the experience with ID: ${id}`)
//   } catch (error) {
//     return response.status(500).send('Unknown error while deleting experience')
//   }
// }



module.exports = { getAllResume, getExpById, createNewExp }