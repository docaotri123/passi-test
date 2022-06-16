const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

module.exports = ({ name, schema, options = {}, query = {}, statics = {} }) => {
    const defaultProperties = {
        createdAt: Number,
        updatedAt: Number,
        expiredAt: {
            type: Number,
            default: 0,
        },
        deletedAt: {
            type: Number,
            default: 0,
        },
    };
    const defaultOptions = {
        read: 'secondaryPreferred',
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000,
        },
        timestamps: { currentTime: () => Date.now() },
    };
    const _schema =
        typeof schema === 'function'
            ? schema({ Schema: mongoose.Schema })
            : schema;
    const modelSchema = new mongoose.Schema(
        { ...defaultProperties, ..._schema },
        { ...defaultOptions, ...options }
    );

    Object.keys(query).forEach((fn) => {
        modelSchema.query[fn] = query[fn];
    });

    Object.keys(statics).forEach((fn) => {
        modelSchema.statics[fn] = statics[fn];
    });

    mongoose.set('useFindAndModify', false);
    modelSchema.plugin(mongoosePaginate);
    modelSchema.plugin(aggregatePaginate);

    // eslint-disable-next-line
    String.prototype.toObjectId = function () {
        return new mongoose.Types.ObjectId(this.toString());
    };

    return mongoose.models[name] || mongoose.model(name, modelSchema, name);
};
