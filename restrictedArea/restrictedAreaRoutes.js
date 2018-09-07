module.exports =  (router, expressApp, restrictedAreaRoutesMethods) => {

    //route for entering into the restricted area.
    //Add route for smarthome,
    //oauth will ensure we can proceed only if correct bearer token is present
    router.post('/', expressApp.oauth.authorize() , restrictedAreaRoutesMethods.accessRestrictedArea);

    return router
}
