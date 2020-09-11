import {
    REST_ABSENCES,
    ORDER_AVERAGES
} from '../constants/actions';

export const reset_absences = payload => {
    return {
        type : REST_ABSENCES, payload
    }
 };

 export const order_averages = payload => {
    return {
        type : ORDER_AVERAGES, payload
    }
 };

 //fonctions utiles

export const moyenneNotes = (tableau) => {
    let moy = 0;
    for( let j = 0; j < tableau.length; j++ ) {
        moy = moy + tableau[j];
    }
    moy = moy / tableau.length;
    return(Math.round(moy))
}



 