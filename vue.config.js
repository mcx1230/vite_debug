module.exports = {
	publicPath: '/',
	pages: {
		index: {
			entry: "src/index.js", // 配置入口js文件
			template: "public/index.html", //主页面
			filename: "index.html", // 打包后的html文件的名称
			title: "", // 打包后的. html中<title>标签的文本内容
		},
		screen: {
			entry: "src/screen.js",
			template: "public/screen.html",
			filename: "screen.html", // 打包后的html文件的名称
			title: "",
		},
	},
	productionSourceMap: true,
	configureWebpack: {
		devServer: {
			historyApiFallback: {
				verbose: true,
				rewrites: [
					{ from: /^\/home\/.*$/, to: "/index.html" },
					{ from: /^\/about\/.*$/, to: "/screen.html" },
				]
			}
		},
		performance: { hints: false },
	}
}