let text = '11:01:00PM'

const timeConversion = (s) => {

    let ampm = s.substring(8,10)
    if (ampm == 'AM') {
        if (s.substring(0,2) == '12') {
            return '00' + s.substring(2,8)
        }
        return s.substring(0,8)
    }
    if (s.substring(0,2) == '12') {
        return s.substring(0,8)
    }
    const num = Number(s.substring(0,2)) + 12
    return num.toString() + s.substring(2,8)
}
console.log(timeConversion(text))