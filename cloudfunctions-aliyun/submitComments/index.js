'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {
	
	const {
		user_id,
		article_id,
		content
	} = event;
	
	let user = await db.collection('user').doc(user_id).get();
	user = user.data[0]
	
	let commentObj = {
		comment_id: genID(5),//评论id
		comment_content: content,//评论内容
		create_time: new Date().getTime(),
		author: {
			author_id: user_id,
			author_name: user.author_name,
			avator: user.avator,
			professional: user.professional
		},
		replys: []
	}
	
	await db.collection('article').doc(article_id).update({
		comments: dbCmd.unshift(commentObj)
	})
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '操作成功'
	}
};

function genID() {
	return Number(Math.random().toString().substr(3,length) + Date.now()).toString();
}
