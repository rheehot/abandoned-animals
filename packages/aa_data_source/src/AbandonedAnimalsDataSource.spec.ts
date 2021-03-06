import {AbandonedAnimalsDataSource} from './AbandonedAnimalsDataSource'

describe.skip('real', () => {
  describe('data.go.kr', () => {
    describe('AbandonedAnimalsDataSource', () => {
      const ds = new AbandonedAnimalsDataSource(process.env.AA_OPENAPI_KEY!)

      it('getAbandonedAnimals()', function () {
        return ds.getAbandonedAnimals({
          startDate: '20200115',
          endDate: '20200116',
          page: 1,
          limit: 9999,
        })
          .then(response => {
            console.log(response)
          })
          .catch(console.error)
      })
    })
  })
})
