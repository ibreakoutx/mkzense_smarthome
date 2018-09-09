module.exports =  (router, expressApp, restrictedAreaRoutesMethods) => {

    //route for entering into the restricted area.
    //Add route for smarthome,
    //oauth will ensure we can proceed only if correct bearer token is present
    function injectMQTTClient(req,res,next) {
      res.locals.mqttClient = expressApp.mqttClient;
      next();
    }

    router.post('/', expressApp.oauth.authorise() , injectMQTTClient, restrictedAreaRoutesMethods.accessRestrictedArea);

    return router
}
