import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';


const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;

//Before using Redux
export const selectAllCampsites2 = () => {
    return CAMPSITES;
};

export const selectFeaturedCampsite2 = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};
export const selectCampsiteById2 = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};


//using redux
export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};





// export const selectRandomCampsite = () =>{
//     return CAMPSITES[Math.floor(Math.random()*CAMPSITES.length)];
// };




