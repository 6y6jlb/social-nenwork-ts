export const dateFormat = (date: string): Array<string> => {
    const resultDate = date.slice ( 0, 10 ).replace ( '-', '.' );
    const resultTime = date.slice ( 11, 16 );
    return [resultDate, resultTime];
};
