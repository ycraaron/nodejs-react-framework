// util wrapper/helper class
import superagent from 'superagent'

const APImanager = {

    get: (url, params, callback) => {
        superagent
        .get(url)
        .query(params)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) {
                // err: request failure
                callback(err, null)
                return
            }
            let confirmation = response.body.confirmation
            // from http stand point, failure response is a successfull request
            if (confirmation != 'success') {
                callback({message: response.body.message}, null)
                return
            }
            callback(null, response.body)
        })
    },

    post: () => {

    },

    put: () => {

    },

    delete: () => {

    }

}

export default APImanager