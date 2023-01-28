import api from './Config.js';

export default {
    getAllByUserId: async function (id) {
        return await api.get(`students/audio/get-by-user_id/${id}`)
    },

    showStudentsAudioId: async function (id) {
        return await api.get(`students/audio/get-show-student-audio-id/${id}`);
    },
    countAudios: async function (id) {
        return await api.get(`students/audio/countAudios/${id}`);
    }
};