/*
Calculate the property price
- m2 = 3.000
- if it has 1 bedroom, the m2 is 1x
- if it has 2 bedrooms, the m2 is 1.2x
- if it has 3 bedrooms, the m2 is 1.5x
*/

function calculateProperty(metters, bedrooms) {
    let m2 = 3000;
    switch(bedrooms) {
        case 1:
            m2 = m2
            break;
        case 2:
            m2 = m2 * 1.2
            break;
        case 3:
            m2 = m2 * 1.5
            break;
    }
    let price = metters * m2;
    return price;
}

let metters = 6
let bedrooms = 1
let price = calculateProperty(metters, bedrooms);

console.log(`The house costs $ ${price}`)