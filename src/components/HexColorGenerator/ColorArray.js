
const map = new Map();
map.set(10, 'a')
    .set(11, 'b')
    .set(12, 'c')
    .set(13, 'd')
    .set(14, 'e')
    .set(15, 'f');

const randGen = () => {
    let r = Math.floor(Math.random() * 16);
    if (map.has(r)) return map.get(r);
    return r;
}

const colorGen = () => {
    let color = '#';
    for (let i = 1; i <= 6; i++){
        color += randGen();
    }
    return color;
}

const genHexColorArray = () => {
    const colorArray = [];
    for (let i = 0; i < 27; i++){
        colorArray.push(colorGen());
    }
    return colorArray;
}

export default genHexColorArray;



