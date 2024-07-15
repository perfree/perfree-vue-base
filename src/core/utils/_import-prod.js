import loadjs from 'loadjs';

/**
 * 导入生产环境js
 * @param type
 * @param name
 * @returns {Promise<unknown>}
 */
export default (type, name) =>
    import(`/${name}/${name}.js`)