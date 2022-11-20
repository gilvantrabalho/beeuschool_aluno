import api from './Config.js';

export default {
    getAll: async function () {
        return await api.get('one-hundred-texts/get-all')
    },
};