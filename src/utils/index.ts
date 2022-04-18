/**
 * 用于解析js文件
 * @param fileList  类型 { fileName: fileObj }
 * @param callback 通过自定义函数处理解析步骤
 */
export function batchParseJsFile(fileList: Record<string, {[p: string]: any}>, callback:Function|undefined=undefined) {
    if (callback) {
        return callback(fileList)
    }
    return Object.keys(fileList).reduce((target:Record<string, {[p: string]: any}>, modulePath) => {
        const moduleName = modulePath.replace(/^.*\/([^/]*)\.\w+$/, '$1')
        const value = fileList[modulePath]
        target[moduleName] = value.default
        return target
    }, {})

}
