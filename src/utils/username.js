const ADJECTIVES = [
    'yummy',
    'animated',
    'comprehensive',
    'distinct',
    'pure',
    'natural',
    'cautious'
]

const OBJECTS = [
    'sheep',
    'camera',
    'dog',
    'stockings',
    'keychain',
    'statuette',
    'shawl'
]

function genRandomUsername () {
    const adj = ADJECTIVES[Math.floor(Math.random() * 7)]
    const obj = OBJECTS[Math.floor(Math.random() * 7)]
    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}
// console.log(getRandomUsername())