const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllResume, getExpById, createNewExp } = require('../../controllers/resumeC')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - resume', () => {
  describe('getAllResume', () => {
      it('Retrieves entirety of resume from database and calls response.send() with it', async () => {
        const stubbedFindAll = sinon.stub(models.resume, 'findAll').returns(resumeList)
        const stubbedSend = sinon.stub()  
        const response = { send: stubbedSend }
        
        await getAllResume({}, response)

        expect(stubbedFindAll).to.have.callCount(1)
        expect(stubbedSend).to.have.been.calledWith(resumeList)
      })
  })

  describe('getExpById', () => {
    it('Retrieves individual experience from database and calls response.send() with it', async () => {
        const request = { params: { id } }
        const stubbedSend = sinon.stub()
        const response = { send: stubbedSend }
        const stubbedFindOnce = sinon.stub(models.resume, 'findOne').returns(singleExp)
        
        await getAllResume({}, response)

        expect (stubbedFindOne).to.have.been.calledWith( { where: { id } } )
        expect (stubbedSend).to.have.been.calledWith(singleExp)
    })
  })
  
  describe('createNewExp', () => {
    it('creates new experience and saves it, returning the saved record with a 201 status', async () => {
        const request = { body: singleExp }
        const stubbedSend = sinon.stub()
        const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
        const response = { status: stubbedStatus }
        const stubbedCreate = sinon.stub(models.resume, 'create').returns(singleExp)
  
        await createNewExp(request, response)
  
        expect(stubbedCreate).to.have.been.calledWith(singleExp)
        expect(stubbedStatus).to.have.been.calledWith(201)
        expect(stubbedSend).to.have.been.calledWith(singleExp)
      })  
  })
})
