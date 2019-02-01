
const path = require('path');
const fs = require('fs');
//获取指定路径下的一级目录名
const getPathDirectory = (pathStr='./', absPath=false, postfix='index.js', opt={prefix:'./'}) => {
    const items = fs.readdirSync(pathStr);
    const dirs = items.filter((item) => {
        let str = path.join(pathStr,item)
        return fs.statSync( str ).isDirectory();
    });
    const absDirs = dirs.map((item) => {
        return opt.prefix + path.join(pathStr,item,postfix);
    });
    return absPath ? absDirs : dirs;
};
//获取多入口entry配置对象
const getPathEntry = (pathStr='./',postfix='index.js') => {
    let modulesArr = getPathDirectory(pathStr);
    let modulesArrAbs = getPathDirectory(pathStr, true, postfix);
    let entryObj = {};
    modulesArr.map((item,index)=>{
        entryObj[item] = modulesArrAbs[index];
    });
    return entryObj;
};
const util = {
    getPathDirectory,       //获取指定路径下的一级目录名
    getPathEntry,           //获取多入口entry配置对象
};
module.exports = util;



