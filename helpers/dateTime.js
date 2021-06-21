
const day = ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'];
const month = ['Januarie', 'Febuarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie','Augustus', 'September', 'Oktober', 'November', 'December'];


function getStringDate(aDate) { 
    const strDate =  new Date(aDate);
    return `${day[strDate.getDay()]} ${strDate.getDate()} ${month[strDate.getMonth()]} ${strDate.getFullYear()}`;
};

function getStringTime(aDate) { 
    const strDate =  new Date(aDate);
    return strDate.toLocaleTimeString();
};

function getStringDateTime(aDate) { 
    return `${getStringDate(aDate)} ${getStringTime(aDate)}`;
};

function getWeddingDay(aDate) {
    const strDate =  new Date(aDate);
    return `${day[strDate.getDay()]}`;
}


export {
    getStringTime,
    getStringDate,
    getStringDateTime,
    getWeddingDay
}
