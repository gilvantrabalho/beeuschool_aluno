import api from './Config.js';

export default {
    showStudentPlan: async function (id) {
        return await api.get(`students/dashboard/showStudentPlan/${id}`);
    }
};