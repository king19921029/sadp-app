import devConfig from '../config.js'
export default {
	get: function(option) {
		var url = devConfig.base_url + option.url
		var data = option.data || {}
		var method = option.method || 'GET'
		var success = option.success || function() {}
		var fail = option.fail || function() {}
		var complete = option.complete || function() {}
		uni.request({
			url: url,
			data: data,
			method: 'GET',
			success: success,
			fail: fail,
			complete: complete
		})
	},
	post: function(option) {
		var url = devConfig.base_url + option.url
		var data = option.data || {}
		var method = option.method || 'GET'
		var success = option.success || function() {}
		var fail = option.fail || function() {}
		var complete = option.complete || function() {}
		uni.request({
			url: url,
			data: data,
			method: 'POST',
			success: success,
			fail: fail,
			complete: complete
		})
	}
}
