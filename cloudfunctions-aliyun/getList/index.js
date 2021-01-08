'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('user');
	let res = await collection.doc('5ff6a747baf0ac00014f680e').remove();
	console.log(JSON.stringify(res));
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return event
};
