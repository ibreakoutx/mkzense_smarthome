module.exports =  (router, expressApp, authRoutesMethods) => {

    function logReqHeaders(req,res,next) {
      console.log(req.headers);
      console.log(req.body);
      next();
    }

    function updateHeaderWithUri(req,res,next) {
        res.locals.status = 302;
        res.locals.location = "https://google.com";
        next();
    }

    function login(req,res) {
      console.log("****** In login ***   ") ;
/*
      expressApp.oauth.token(req,res)
      .then( (token) => {
        console.log("within token In login ***   ");
*/
        var token="f003bbf28a2b88b14b545c0902b95873fef2f101";
        var location = res.locals.location + "#acccess_token=" + token;
        res.status = 302;
        res.redirect(location);
        return;

    }

    //route for registering new users
    router.post('/registerUser', authRoutesMethods.registerUser)

    //route for allowing existing users to login
    router.post('/login', logReqHeaders,updateHeaderWithUri,login)

    router.get('/login', (req,res) => {
	     res.render("login.html");
    });
    return router
}
