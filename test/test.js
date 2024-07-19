const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const { app } = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('HTTP Server', () => {
    let server;
    before((done) => {
        server = http.createServer(app);
        server.listen(3001, done);
    });

    after((done) => {
        done()
    });

    it('should return Hello, World!', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello, World!\n');
                done();
            });
    });
});
