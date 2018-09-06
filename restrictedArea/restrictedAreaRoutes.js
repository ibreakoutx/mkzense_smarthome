module.exports =  (router, expressApp, restrictedAreaRoutesMethods) => {

    //route for entering into the restricted area.
    //Add route for smarthome,
    //oauth will ensure we can proceed only if correct bearer token is present
    router.post('/', expressApp.oauth.authorise() , restrictedAreaRoutesMethods.accessRestrictedArea);

    return router
}
