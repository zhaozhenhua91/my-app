const getLabel = (data)=>{
	return new Promise((resolve, reject)=>{
		uniCloud.callFunction({
			name: 'getLabel',
			data
		}).then((res)=>{
			if (res.result.code == 200) {
				resolve(res.result);
			} else {
				reject(res.result);
			}
		}).catch((err)=>{
			reject(err)
		})
	})
}

const getList = (data)=>{
	return new Promise((resolve, reject)=>{
		uniCloud.callFunction({
			name: 'getList',
			data
		}).then((res)=>{
			if (res.result.code == 200) {
				resolve(res.result);
			} else {
				reject(res.result);
			}
		}).catch((err)=>{
			reject(err)
		})
	})
}

const getDetail = (data)=>{
	return new Promise((resolve, reject)=>{
		uniCloud.callFunction({
			name: 'getDetail',
			data
		}).then((res)=>{
			if (res.result.code == 200) {
				resolve(res.result);
			} else {
				reject(res.result);
			}
		}).catch((err)=>{
			reject(err)
		})
	})
}

const getUserInfo = (data)=>{
	return new Promise((resolve, reject)=>{
		uniCloud.callFunction({
			name: 'getUserInfo',
			data
		}).then((res)=>{
			if (res.result.code == 200) {
				resolve(res.result);
			} else {
				reject(res.result);
			}
		}).catch((err)=>{
			reject(err)
		})
	})
}

export default {
	getLabel,getList,getDetail,getUserInfo
}