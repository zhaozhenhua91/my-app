'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('article');
	const {name, page = 1, pageSize = 10} = event;
	let res = await collection.aggregate().match({
		classify: name,
		
	}).project({
		content: 0
	})
	.skip(pageSize*(page - 1))
	.limit(pageSize)
	.end();
	//console.log(res)
	//event为客户端上传的参
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '操作成功',
		data: res.data
	}
};
