/**
 * 导入开发环境模块
 * @param type 类型: 1:system,2: plugin
 * @param name 模块名称
 * @returns {Promise<*>}
 */
export default (type, name) => {
    return import(`../../modules/${name}/index.js`)
};