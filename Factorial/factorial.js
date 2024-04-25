function timeConversion(s) {
    const splitAt = index => [s.slice(0, index), s.slice(index)];
    const [time, modifier] = splitAt(8);
    let [hours, minutes, seconds] = time.split(':');

    if (modifier === 'PM' && hours !== '12') {
        let newhour = Number(hours) + 12;
        hours = newhour.toString()
    }

    if (modifier === 'AM' && hours === '12') {
        let newhour = Number(hours) - 12;
        hours = `0${newhour.toString()}`
    }

    console.log(`${hours}:${minutes}:${seconds}`)
}

timeConversion('12:00:00AM')