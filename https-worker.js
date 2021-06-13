async function test(url, name) {
    return new Promise((resolve, project) => {
        require((url.protocol === 'https:') ? 'https' : 'http').get(url, res => {
            
        })
    })
}