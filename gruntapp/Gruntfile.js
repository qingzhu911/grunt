//1.合并css
module.exports = function(grunt) {
	//配置grunt方法
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		//下载cnpm install grunt-contrib-cssmin --save
		cssmin:{
			combine:{
				files:{
					//第一个参数:合并后的名字路径
					"app/css/style.css":["app/css/background.css","app/css/fontsize.css"]
				}
			}
		},
		uglify:{
			dist:{
				files:{
					"app/js/main.min.js":["app/js/main.js"]
				}
			}
		}
	});

	//加载配置
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	//先下载模块 cnpm install grunt-contrib-uglify --save
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default",["cssmin","uglify"]);

	// grunt.registerTask("default","",function() {
	// 	//在grunt里面不能使用console.log
	// 	grunt.log.write("在终端运行grunt命名,终端就会出现这句话!");
	// });
}
//2.压缩代码







