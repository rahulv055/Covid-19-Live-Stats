import axios from "axios";

export const getGlobalStats = () => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    return async (dispatch) => {
        await axios.get('https://corona.lmao.ninja/v2/all', config)
            .then(({ data }) => {
                dispatch(setGlobalData(data))
            })
    }
}

const setGlobalData = globalStats => {
    return {
        type: 'SET_GLOBAL_DATA',
        payload: globalStats
    }
}