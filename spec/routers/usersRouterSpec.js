const UsersRouter = require('../../.compiled/routers/usersRouter').UsersRouter;
describe("UsersRouter", ()=>{
     it("thror", ()=>{
        expect(()=> new UsersRouter(null)).toThrow(new Error("Config not defined"));
     });
});