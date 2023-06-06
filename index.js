function findSenior(list) {
    let oldDEv = 0

    list.forEach(dev => {
        if (oldDEv < dev.age) {
            oldDEv = dev.age
        }
    })

    return list.filter(developer => developer.age === oldDEv)
}