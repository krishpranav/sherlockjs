async function test(url, name) {
	return new Promise((resolve, reject) => {
		require((url.protocol === 'https:') ? 'https' : 'http').get(url, res => {
			if (res.statusCode === 301 && res.headers.location) {
				test(new URL(res.headers.location, url), name).then(bool => {
					resolve(bool);
				}).catch(error => {
					reject(error);
				});
			} else {
				if (res.statusCode !== 200) {
					resolve(false);
				}

				res.setEncoding('utf8');

				let rawData = '';
				res.on('data', chunk => {
					rawData += chunk;
				});

				res.on('end', () => {
					rawData = rawData.replace(/(<([^>]+)>)/ig, '');
					if (rawData.includes(name) && !rawData.includes('Not Found') && !rawData.includes('Not found')) {
						resolve(true);
					} else {
						resolve(false);
					}
				});
			}
		}).on('error', e => {
			reject(e);
		});
	});
}