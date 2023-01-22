import api from './Config.js';

export default {
    getById: async function(id) {
        return await api.get(`master/teacher/get-by-id/${id}`);
    },
    list: async function() {
        return await api.get('master/teacher/list');
    },
    register: async function (data) {
        return await api.post('master/teacher/register', data)
    },
    edit: async function (id, data) {
        return await api.put(`master/teacher/edit/${id}`, data)
    },
    delete: async function(id) {
        return await api.delete(`master/teacher/delete/${id}`);
    }
};