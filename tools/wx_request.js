// 请求地址公用部分
let host = "http://192.168.1.167"
// let host = "http://192.168.1.167"

// 上传文件地址公用部分
let uploadFileUlr = ""

// 公共请求参数
let configData = {}
function showToast(title, icon, duration) {
	uni.showToast({
		title: title,
		icon: icon,
		duration: duration
	})
}
// 获取header
function getHeader(method, isJson) {
	if (method == "POST") {
		if (isJson) {
			return {
				"authorization": uni.getStorageSync("token"),
				'Content-type': 'application/json',
			}
		} else {
			return {
				"authorization": uni.getStorageSync("token"),
				"Content-type": "application/x-www-form-urlencoded",
			}
		}

	}
	if (method == "GET") {
		return {
			'Content-type': 'application/json',
			"authorization": uni.getStorageSync("token"),
		}
	}
}
// 请求方法
function request(url, method, data, noLoading, isJson) {
	if (!noLoading) {
		uni.showLoading({
			title: "正在加载..."
		});
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: host + url,
			method: method,
			data: data,
			header: getHeader(method, isJson),
			success: function(res) {
				switch (res.data.code) {
					case "0":
						uni.hideLoading();
						resolve(res.data)
						break;
					case "1003":
						uni.hideLoading();
						uni.removeStorageSync("token")
						showToast(res.data.msg, 'none', 1000)
						
						// #ifdef  MP-WEIXIN
						uni.redirectTo({
							url: '/pages/wxGetUserInfo/wxGetUserInfo'
						})
						// #endif
						
						// #ifdef  H5
						uni.redirectTo({
							url: '/pages/Hlogin/Hlogin'
						})
						// #endif
						reject(res)
						break;
					default:
						uni.hideLoading();
						showToast(res.data.msg, 'none', 1000)
						reject(res)
						break;
				}
			},
			fail: function(res) {
				uni.hideLoading();
			},
			complete: function() {

			},

		})
	})
}
// 上传文件方法
function uploadFileAjax(url, filePath, data, fileName) {
	uni.showLoading({
		title: "正在加载..."
	});
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: uploadFileUlr + url,
			header: getHeader(),
			filePath: filePath,
			name: encodeURI(fileName),
			formData: data,
			success: (res) => {
				if (res.statusCode == 200) {
					uni.hideLoading();
					resolve(res.data)
				} else {
					uni.hideLoading();
					uni.showToast({
						title: res.data.msg || res.data.message,
						icon: 'none',
						duration: 1000
					})
					reject(res)
				}
			},
			fail: function(res) {
				uni.hideLoading();
			},
		});
	})
}

function get(obj) {
	let noLoading = obj.noLoading ? obj.noLoading : false
	return request(obj.url, 'GET', obj.data, noLoading)
}

function post(obj) {
	console.log(obj)
	let noLoading = obj.noLoading ? obj.noLoading : false
	let isJson = obj.isJson ? obj.isJson : false
	return request(obj.url, 'POST', obj.data, noLoading, isJson)
}

function uploadFile(obj) {
	console.log(obj)
	let noLoading = obj.noLoading ? obj.noLoading : false
	return uploadFileAjax(obj.url, obj.filePath, obj.data, obj.name, noLoading)
}
export default {
	request,
	get,
	post,
	host,
	uploadFile,
	showToast
}
