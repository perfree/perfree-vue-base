import loadjs from 'loadjs';

/**
 * 导入生产环境js
 * @param type
 * @param name
 * @returns {Promise<unknown>}
 */
export default (type, name) =>
    new Promise((resolve, reject) => {
        loadjs(`/static/admin/${type}/${name}/${name}.js`, {
        });
    });