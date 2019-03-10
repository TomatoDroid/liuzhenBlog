export const queryName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({code:200, info:{appName:'asyncFromLogin'}})
        }, 1000);
    })
}