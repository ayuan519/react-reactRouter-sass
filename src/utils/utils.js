//去除空格
export const trim = (str) => {
    return typeof str === 'string' ?
        str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') :
        str;
}
const JsonToData = (data) => {
    const newJSON = { ...data }
    let newData = ''
    for (let name in newJSON) {
        if (newData) {
            newData += `&${name}=${newJSON[name]}`
        } else {
            newData += `${name}=${newJSON[name]}`
        }
    }
    return newData
};
/**
 * [jumpToPage 跳转函数]
 * @param  {[Object]} history          [router的history参数]
 * @param  {[String]} url              [跳转的路由]
 * @param  {Object} [params={}]      [需要带入的额外参数]
 * @param  {String} [type='default'] [跳转时是否需要关闭当前页面 default:不需要 replace:需要]
 */
export const jumpToPage = ({
    history,
    url,
    params = {},
    type = 'default'
}) => {
    let realUrl = ''
    if(JsonToData(params)){
        realUrl = `${url}?${JsonToData(params)}`
    }else{
        realUrl = `${url}`
    }
    if (type === 'default') {
        history.push(realUrl, params)
    } else {
        history.replace(realUrl, params)
    }
}
/**
 * 检测浏览器window.search是否有指定字段
 * @param {String} name 判断名字
 */
export const getQueryStringByName = (name) => {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return (r[2])
    };
    return null;
};
