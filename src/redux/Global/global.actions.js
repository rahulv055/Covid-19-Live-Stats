import axios from "axios";

export const getGlobalStats = () => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    return async (dispatch) => {
        await axios.get('https://disease.sh/v3/covid-19/all', config)
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