import api from './Config.js';

export default {
    register: async function (data) {
        return await api.post('students/ticket/register', data)
    },
    registerMessageTicket: async function (data) {
        return await api.post('students/ticket/registerMessageTicket', data)
    },
    getMessagesTicket: async function (token) {
        return await api.get(`students/ticket/messages-ticket/${token}`);
    },
    showStudentId: async function (id) {
        return await api.get(`students/ticket/show-student-id/${id}`);
    }
};