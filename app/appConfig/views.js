/**
@description 设置页面配置信息 所有页面集中在此配置
*/
define([
],function(
) {
  "use strict";
	var viewCollectionData = [
	/**
	isVirtualView: 没有对应的实在js和模版文件,可以访问，因此不改变js和html的路径
	需要将父级别的路径配置在前面
  id为空的条目将作为默认路由,且使用其routeName属性作为目的路由
	*/
  /*
  h5 start
  */
  {id:'h5/view/mobile_index',parent:'h5/view/index',viewName:'mobile_index',useModule:true,viewTitle:'主页',isDefault:true,indexLevel:true},
  /*
  h5 end
  */
	];
  //default route view 设置首页路由 移动端 和 pc端可能不同主页
  if(dojoConfig.isH5){
    viewCollectionData.unshift({id:'',parent:'',viewName:'index',routeName:'h5/view/mobile_index'});
  }else{
    viewCollectionData.unshift({id:'',parent:'',viewName:'index',routeName:'pc/view/index'});
  }
	return viewCollectionData;
});
