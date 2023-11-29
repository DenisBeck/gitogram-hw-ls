export const noActiveAction = (x = 0, y = 0, callback) => {
    const timerId = setInterval(function () {
        if (x === 0 && y === 0) {
            callback()
            clearInterval(timerId)
            return false
        }
        x = 0
        y = 0
    }, 1000)
}
