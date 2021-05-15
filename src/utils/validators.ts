export const requiredField= (value:string):string|undefined => {
    if (value) {
        return value.trim() ? undefined : 'error';
    } else return 'error'
}
export const maxInputLength=(length:number)=> (value:string):string|undefined => {
    if (value.length > length) return  `max length is ${length} symbols`;
        return undefined;
}