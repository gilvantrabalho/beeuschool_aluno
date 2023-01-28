import api from './Config.js';

export default {
    list: async function (id) {
        return await api.get(`students/link/list/${id}`);
    },
    register: async function (data) {
        return await api.post('students/link/create', data)
    },
    delete: async function (id) {
        return await api.delete(`students/link/delete/${id}`);
    },
    classLinks: async function () {
        return await api.get('students/link/testeAction');
    },
    lastLinksAccessed: async function (data) {
        return await api.post('students/link/lastLinksAccessed', data)
    },
    readLastLinksAccessed: async function (id) {
        return await api.get(`students/link/readLastLinksAccessed/${id}`)
    }
};