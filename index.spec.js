const getLanguageList = require('./index')

describe('get language list request test', () => {
    it('get language list request test', done => {
        Promise
            .race([
                getLanguageList('zh-CN', 'cn'),
                getLanguageList('zh-CN')
            ])
            .then(res => {
                console.log(res)
                done()
            })
            .catch(err => done(err))
    })
})