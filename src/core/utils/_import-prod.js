/**
 * 导入生产环境js
 * @param type
 * @param name
 * @returns {Promise<unknown>}
 */

const modules = import.meta.glob('../../modules/**/index.js');
export default (type, name) => {
    console.log(modules)
    return  import(`/modules/${name}/index.js`)
}