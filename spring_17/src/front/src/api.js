import axios from 'axios';

export const deleteBook = async (uid) => {
    try {
        const response = await axios.delete(`/members/${uid}`);
    } catch (error) {
        throw error;
    }
}