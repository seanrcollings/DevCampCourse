import axios from 'axios';

import {ROOT_URL} from '../config'

export function signUp(fields, success) {
    console.log(fields);
    success()
    return function(dispatch){
        // axios.post(`${ROOT_URL}/signup`, fields)
        //     .then(response => {

        //     }).catch(err => {
        //         if(err){ console.log(err)}
        //     })
    }
}