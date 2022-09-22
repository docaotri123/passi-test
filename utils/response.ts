function Response(params) {
    const { status, data, error, meta } = params || {};

    this._status = status;
    this._data = data;
    this._error = error;
    this._meta = meta;

    this.status = (_status) => {
        this._status = _status;

        return this;
    };

    this.data = (_data) => {
        if (_data && _data.docs) {
            // pagination
            this._data = _data.docs;
            this._meta = {
                total: _data.totalDocs,
            };
        } else if (_data.meta) {
            this._data = _data.data;
            this._meta = _data.meta;
        } else {
            this._data = _data;
        }

        return this;
    };

    this.meta = (_meta) => {
        this._meta = _meta;

        return this;
    };

    this.toJSON = () => {
        const result = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            statusCode: 0,
            body: ''
        };
        const body = {
            data: [],
            error: null,
            meta: null
        };

        if (this._status) {
            result.statusCode = this._status;
        }

        if (this._data) {
            body.data = this._data;
        }

        if (this._error) {
            body.error = this._error;
        }

        if (this._meta) {
            body.meta = this._meta;
        }

        if (Object.keys(body).length) {
            result.body = JSON.stringify(body);
        }

        return result;
    };
}


export default Response;