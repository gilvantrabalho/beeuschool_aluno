import api from './Config.js';

export default {
    getAllByIdStudent: async function (id) {
        return await api.get(`voucher/read-by-student/${id}`);
    },
    register: async function (data) {
        return await api.post(`voucher/create`, data);
    },
    getByGrid: async function() {
        return await api.get('voucher/read-by-grid');
    }
};