'use strict';

module.exports = function (Session) {

    Session.sessionStatus = function (deviceId, cb) {

        Session.findOne({where: {and: [{ 'deviceId': deviceId }, {status:'open'}]}}, function (error, sessionInstance) {
            if (error) {
                cb(error);
            } else {
                if (sessionInstance) {
                    //Get all responses for 
                    var filter = {
                        where:{ sessionId: sessionInstance.id},
                        include:'question'
                    };
                    Session.app.models.response.find(filter , function (error, responses) {
                        cb(error, {
                            sessionId: sessionInstance.id,
                            responses: responses
                        })
                    });
                } else {
                    //Create new sess//
                    Session.create({ 'deviceId': deviceId, status:'open' }, function (error, session) {
                        if (error) {
                            cb(error)
                        } else {
                            Session.app.models.issueType.find({}, function (error, issueTypes) {
                                cb(error, {
                                    sessionId: session.id,
                                    issueTypes: issueTypes
                                })
                            });
                        }
                    });
                }
            }
        });
    }

    Session.remoteMethod(
        'sessionStatus', {
            accepts: [{
                arg: 'deviceId',
                type: 'string'
            }],
            http: {
                path: '/sessionStatus/:deviceId',
                verb: 'get'
            },
            returns: {
                type: 'object',
                root: true
            }
        }
    );


};