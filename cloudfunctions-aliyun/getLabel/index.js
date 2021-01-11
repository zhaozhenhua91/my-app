'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	let data = await db.collection('label').get();
	//event为客户端上传的参数
	console.log('数据', data)
	
	//返回数据给客户端
	return {
		code: '200',
		msg: '操作成功',
		content: data
	}
};
