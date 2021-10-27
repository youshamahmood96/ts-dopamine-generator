export const dateConverter = (date:Date) => {
    const newDateArray = (new Date(date)).toDateString().split(' ')
    return{
        day:newDateArray[0],
        month:newDateArray[1],
        date:newDateArray[2],
        year:newDateArray[3]
    }
}
