

const makesorted = (dic) => {
    let entries = Object.entries(dic);

    return entries.sort((a, b) => a[1] - b[1]);
}


module.exports = {
    makesorted
}