import data from '../variables/en.json'

export const jsonMacros = (_id:string) => {

    const jsonObj = JSON.parse ( JSON.stringify ( data ) );

    return  jsonObj[_id]

};
