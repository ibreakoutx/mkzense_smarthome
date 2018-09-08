module.exports =  (router, expressApp, authRoutesMethods) => {

    function logReqHeaders(req,res,next) {
      console.log(req.headers);
      console.log(req.body);
      next();
    }

    function hardcodeTokenLogin(req,res) {
      var token = "ced6020681f57b9222ebaeda3037b1d945f30d18";
      res.status = 302;
      var location = req.body.redirect_uri
                    + "?code=" + token
                    + "&state=" + req.body.state ;

      console.log("Redirect location = " + location);
      res.redirect(location);
    }
    //route for registering new users
    router.post('/registerUser', authRoutesMethods.registerUser)

    //route for allowing existing users to login
    //router.post('/login', logReqHeaders, expressApp.oauth.grant(), authRoutesMethods.login)
    router.post('/login', logReqHeaders, hardcodeTokenLogin);

    router.get('/login', (req,res) => {
       var redirect_uri = req.query.redirect_uri;
       console.log("req.query.redirect_uri=" + redirect_uri);
       var state = req.query.state ;
       console.log("query req.query.sate =" + state);
	     res.render("login.html",{redirect_uri:redirect_uri,state:state});
    });
    return router
}
