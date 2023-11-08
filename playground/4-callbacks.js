setTimeout(() => {
    console.log('Timeout')
}, 2000)

const names = ['Zach', 'John', 'Sam']
const shortNames = names.filter((name) => {
    return name.length <=4
})

const shortNamesResult = shortNames
console.log(shortNamesResult)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
        latitude: 0,
        longitude: 0
    }
    callback(data)
    }, 2000)
    
}

geocode('Phili', (data) => {
console.log(data)
})

const add = (x, y, callback) => {
    setTimeout(() => {
        const sum = x + y
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})