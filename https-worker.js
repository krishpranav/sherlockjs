async function test(url, name) {
    return new Promise((resolve, project) => {
        require((url.protocol === 'https:') ? 'https' : 'http').get(url, res => {
            if (res.statusCode == 301 && res.headers.location) {
                test(new URL(res.headers.location, url), name).then(bool => {
                    resolve(bool);
                }).catch(error => {
                    reject(error);
                });
            } else {
                if (res.statusCode !== 200) {
                    resolve(false);
                }
            }
        })
    })
}