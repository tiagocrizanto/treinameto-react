import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName, //vem do places.js addPlace - placeName é uma propriedade
                    //image: placeImage -- ao importar o objeto local ele é automaticamente serializado
                    image: { //carregando imagem da web
                        uri: "https://img2.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_55_660x440.jpg"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                })
            };

        default:
            return state;
    }
}

export default reducer;