import api from './Config.js';

export default {
    change: async function (data) {
        return await api.post('students/change-password/change', data)
    },
};