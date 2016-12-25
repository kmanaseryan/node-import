let _modules = new Map();

let _import = (...modules)=>{
    let required = {};
    for(let name of modules){
        required[name] = _modules.get(name);
    }
    required.from = (moduleName)=>{
        let _module = _modules.get(moduleName);
        for(let name in required){
            if(!required[name])
                required[name] = _module[name];
        }
        return required
    }
    return required;
    
}

let _export = (modules)=>{
    for(let name in modules){
        _modules.set(name, modules[name])
    }
}

module.exports = {
    import: _import,
    export: _export
}