var shortid = require('shortid');

module.exports = function (Model, options) {
    Model.observe('before save', function event(ctx, next) { //Observe any insert/update event on Model
        if (ctx.isNewInstance) {
            if (!ctx.instance.id) {
                ctx.instance.id = shortid.generate();
            }
            if (!ctx.instance.created_on && !ctx.instance.updated_on) {
                ctx.instance.created_on = new Date();
                ctx.instance.updated_on = new Date();
            }
            // Model.defineProperty('created_on', {
            //     type: Date,
            //     default: '$now'
            // });
            // Model.defineProperty('updated_on', {
            //     type: Date,
            //     default: '$now'
            // });
        } else {
            ctx.data.updated_on = new Date();
        }
        next();
    });
};