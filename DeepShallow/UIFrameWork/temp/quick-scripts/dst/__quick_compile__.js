
(function () {
var scripts = [{"deps":{"./assets/Script/AutoScripts/UICapture_Auto":48,"./assets/Script/AutoScripts/UIDungeon_Auto":58,"./assets/Script/AutoScripts/UIECSView_Auto":61,"./assets/Script/AutoScripts/UIFunction_Auto":89,"./assets/Script/AutoScripts/UIGame_Auto":72,"./assets/Script/AutoScripts/UIHome_Auto":93,"./assets/Script/AutoScripts/UILevel_Auto":57,"./assets/Script/AutoScripts/UILight_Auto":63,"./assets/Script/AutoScripts/UILoading_Auto":56,"./assets/Script/AutoScripts/UILogin_Auto":60,"./assets/Script/AutoScripts/UIMap_Auto":59,"./assets/Script/AutoScripts/UIMobx_Auto":74,"./assets/Script/AutoScripts/UINavigator_Auto":92,"./assets/Script/AutoScripts/UIPop_Auto":62,"./assets/Script/AutoScripts/UISetting_Auto":64,"./assets/Script/AutoScripts/UISkills_Auto":65,"./assets/Script/AutoScripts/UISplitTexture_Auto":67,"./assets/Script/AutoScripts/UITips_Auto":66,"./assets/Script/AutoScripts/UIAbout_Auto":68,"./assets/Script/Common/Assemblers/BatchAssembler":70,"./assets/Script/Common/Assemblers/MeshAssembler":46,"./assets/Script/Common/Assemblers/TextureAssembler":78,"./assets/Script/Common/Assemblers/BaseAssembler":69,"./assets/Script/Common/BroadCasts/BroadcastCenter":49,"./assets/Script/Common/Components/ButtonPlus":50,"./assets/Script/Common/Components/CacheUtils":75,"./assets/Script/Common/Components/CameraCapture":79,"./assets/Script/Common/Components/DrawBorad":71,"./assets/Script/Common/Components/GridScrollList":76,"./assets/Script/Common/Components/MaskPlus":77,"./assets/Script/Common/Components/MeshTexture":73,"./assets/Script/Common/Components/PropController":81,"./assets/Script/Common/Components/PropSelector":95,"./assets/Script/Common/Components/QuadTree":80,"./assets/Script/Common/Components/ScrollViewHelper":83,"./assets/Script/Common/Components/Shake":91,"./assets/Script/Common/Components/SpinePlus":90,"./assets/Script/Common/Components/TexturePlus":82,"./assets/Script/Common/Components/TouchPlus":84,"./assets/Script/Common/Components/BatchComponent":85,"./assets/Script/Common/GameConfig":86,"./assets/Script/Common/Light/LightStruct":51,"./assets/Script/Common/Light/LightUtils":102,"./assets/Script/Common/Light/Obstacle":87,"./assets/Script/Common/Light/Light":88,"./assets/Script/Common/Mobx/mobx":52,"./assets/Script/Common/StateMachine/StateMachine":54,"./assets/Script/Common/Utils/BroadCast":116,"./assets/Script/Common/Utils/CommonUtils":53,"./assets/Script/Common/Utils/DebugWindowUtils":94,"./assets/Script/Common/Utils/DrawingBoard":100,"./assets/Script/Common/Utils/Dungeon":108,"./assets/Script/Common/Utils/EnumUtils":96,"./assets/Script/Common/Utils/GlobalHelper":98,"./assets/Script/Common/Utils/LRUCache":97,"./assets/Script/Common/Utils/MatchUtils":104,"./assets/Script/Common/Utils/Measure":99,"./assets/Script/Common/Utils/PolygonUtil":103,"./assets/Script/Common/Utils/Pool":101,"./assets/Script/Common/Utils/PriorityQueue":105,"./assets/Script/Common/Utils/PriorityStack":114,"./assets/Script/Common/Utils/PropBind":113,"./assets/Script/Common/Utils/Queue":107,"./assets/Script/Common/Utils/TaskMgr":106,"./assets/Script/Common/Utils/BigNumUtils":110,"./assets/Script/Logic/Game":109,"./assets/Script/Logic/Manager/ConfigMgr":47,"./assets/Script/Logic/Manager/PlayerMgr":111,"./assets/Script/Logic/Manager/BaseMgr":117,"./assets/Script/Main":2,"./assets/Script/Scene/Scene":55,"./assets/Script/UIFrame/CocosHelper":112,"./assets/Script/UIFrame/EventCenter":115,"./assets/Script/UIFrame/EventType":11,"./assets/Script/UIFrame/FixedMgr":10,"./assets/Script/UIFrame/FormMgr":3,"./assets/Script/UIFrame/ModalMgr":35,"./assets/Script/UIFrame/ResMgr":6,"./assets/Script/UIFrame/SceneMgr":7,"./assets/Script/UIFrame/SoundMgr":9,"./assets/Script/UIFrame/Struct":14,"./assets/Script/UIFrame/TipsMgr":8,"./assets/Script/UIFrame/ToastMgr":21,"./assets/Script/UIFrame/UIForm":44,"./assets/Script/UIFrame/UIBase":12,"./assets/Script/UIFrame/UIManager":13,"./assets/Script/UIFrame/UIModalScript":20,"./assets/Script/UIFrame/UIToast":15,"./assets/Script/UIFrame/WindowMgr":16,"./assets/Script/UIFrame/AdapterMgr":19,"./assets/Script/UIFrame/config/SysDefine":31,"./assets/Script/UIFrame/config/SysConfig":1,"./assets/Script/UIScript/UICapture":4,"./assets/Script/UIScript/UIDungeon":18,"./assets/Script/UIScript/UIECSView":17,"./assets/Script/UIScript/UIFunction":22,"./assets/Script/UIScript/UIHome":24,"./assets/Script/UIScript/UILight":23,"./assets/Script/UIScript/UILoading":25,"./assets/Script/UIScript/UIMeshTexture":28,"./assets/Script/UIScript/UIMobx":29,"./assets/Script/UIScript/UINavigator":30,"./assets/Script/UIScript/UIPop":27,"./assets/Script/UIScript/UIScrollPlus":32,"./assets/Script/UIScript/UIScrollTexture":45,"./assets/Script/UIScript/UISetting":36,"./assets/Script/UIScript/UISkills":33,"./assets/Script/UIScript/UISound":34,"./assets/Script/UIScript/UITips":39,"./assets/Script/UIScript/UISplitTexture":37,"./assets/Script/UIScript/UIWave":41,"./assets/Script/UIScript/UIAbout":40,"./assets/Script/config/GuideConfig":5,"./assets/Script/test/Item":38,"./assets/Script/UIScript/UIMap":26,"./assets/Script/UIScript/UIGame":43,"./assets/Script/UIConfig":42},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Script/UIFrame/config/SysConfig.js"},{"deps":{"./UIConfig":42,"./UIFrame/FormMgr":3},"path":"preview-scripts/assets/Script/Main.js"},{"deps":{"./config/SysDefine":31,"./FixedMgr":10,"./SceneMgr":7,"./TipsMgr":8,"./WindowMgr":16},"path":"preview-scripts/assets/Script/UIFrame/FormMgr.js"},{"deps":{"../Common/Components/CameraCapture":79,"../Common/Components/DrawBorad":71,"../Common/Components/TouchPlus":84,"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UICapture.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/GuideConfig.js"},{"deps":{"./CocosHelper":112},"path":"preview-scripts/assets/Script/UIFrame/ResMgr.js"},{"deps":{"./config/SysDefine":31,"./TipsMgr":8,"./UIManager":13},"path":"preview-scripts/assets/Script/UIFrame/SceneMgr.js"},{"deps":{"./UIManager":13},"path":"preview-scripts/assets/Script/UIFrame/TipsMgr.js"},{"deps":{"./CocosHelper":112,"./config/SysDefine":31},"path":"preview-scripts/assets/Script/UIFrame/SoundMgr.js"},{"deps":{"./UIManager":13},"path":"preview-scripts/assets/Script/UIFrame/FixedMgr.js"},{"deps":{},"path":"preview-scripts/assets/Script/UIFrame/EventType.js"},{"deps":{"./UIManager":13,"./AdapterMgr":19,"./ResMgr":6,"./FormMgr":3},"path":"preview-scripts/assets/Script/UIFrame/UIBase.js"},{"deps":{"./UIBase":12,"./config/SysDefine":31,"./ResMgr":6,"./ModalMgr":35,"./AdapterMgr":19,"../Scene/Scene":55,"./Struct":14,"./EventCenter":115,"./EventType":11,"../Common/Utils/LRUCache":97},"path":"preview-scripts/assets/Script/UIFrame/UIManager.js"},{"deps":{"./config/SysDefine":31},"path":"preview-scripts/assets/Script/UIFrame/Struct.js"},{"deps":{"../Common/Utils/Pool":101,"./CocosHelper":112,"./UIBase":12},"path":"preview-scripts/assets/Script/UIFrame/UIToast.js"},{"deps":{"../Common/Utils/PriorityQueue":105,"../Common/Utils/PriorityStack":114,"./Struct":14,"./UIManager":13},"path":"preview-scripts/assets/Script/UIFrame/WindowMgr.js"},{"deps":{"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIECSView.js"},{"deps":{"../Common/Utils/Dungeon":108,"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIDungeon.js"},{"deps":{},"path":"preview-scripts/assets/Script/UIFrame/AdapterMgr.js"},{"deps":{"./UIManager":13,"./config/SysDefine":31,"./CocosHelper":112,"./WindowMgr":16},"path":"preview-scripts/assets/Script/UIFrame/UIModalScript.js"},{"deps":{"./UIManager":13},"path":"preview-scripts/assets/Script/UIFrame/ToastMgr.js"},{"deps":{"../UIFrame/AdapterMgr":19,"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44,"./../UIConfig":42},"path":"preview-scripts/assets/Script/UIScript/UIFunction.js"},{"deps":{"../Common/Components/TexturePlus":82,"../Common/Light/Light":88,"../Common/Light/LightUtils":102,"../Common/Light/Obstacle":87,"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UILight.js"},{"deps":{"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44,"../UIFrame/UIManager":13,"./../UIConfig":42},"path":"preview-scripts/assets/Script/UIScript/UIHome.js"},{"deps":{"../UIFrame/AdapterMgr":19,"../UIFrame/CocosHelper":112,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UILoading.js"},{"deps":{"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44,"./../UIConfig":42},"path":"preview-scripts/assets/Script/UIScript/UIMap.js"},{"deps":{"../UIFrame/config/SysDefine":31,"../UIFrame/Struct":14,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIPop.js"},{"deps":{"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIMeshTexture.js"},{"deps":{"../Common/Mobx/mobx":52,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIMobx.js"},{"deps":{"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44,"./../UIConfig":42},"path":"preview-scripts/assets/Script/UIScript/UINavigator.js"},{"deps":{"../../UIConfig":42},"path":"preview-scripts/assets/Script/UIFrame/config/SysDefine.js"},{"deps":{"../Common/Components/ScrollViewHelper":83,"../UIFrame/config/SysDefine":31,"../UIFrame/Struct":14,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIScrollPlus.js"},{"deps":{"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UISkills.js"},{"deps":{"../UIFrame/AdapterMgr":19,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UISound.js"},{"deps":{"./config/SysDefine":31,"./UIModalScript":20},"path":"preview-scripts/assets/Script/UIFrame/ModalMgr.js"},{"deps":{"../UIFrame/AdapterMgr":19,"../UIFrame/CocosHelper":112,"../UIFrame/config/SysDefine":31,"../UIFrame/FormMgr":3,"../UIFrame/Struct":14,"../UIFrame/UIForm":44,"./../UIConfig":42},"path":"preview-scripts/assets/Script/UIScript/UISetting.js"},{"deps":{"../Common/Components/TexturePlus":82,"../Common/Utils/PolygonUtil":103,"../UIFrame/UIForm":44,"../UIFrame/FormMgr":3},"path":"preview-scripts/assets/Script/UIScript/UISplitTexture.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/Item.js"},{"deps":{"../UIFrame/config/SysDefine":31,"../UIFrame/Struct":14,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UITips.js"},{"deps":{"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIAbout.js"},{"deps":{},"path":"preview-scripts/assets/Script/UIScript/UIWave.js"},{"deps":{},"path":"preview-scripts/assets/Script/UIConfig.js"},{"deps":{"../config/GuideConfig":5,"../UIConfig":42,"../UIFrame/FormMgr":3,"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIGame.js"},{"deps":{"./CocosHelper":112,"./config/SysDefine":31,"./FormMgr":3,"./Struct":14,"./UIBase":12},"path":"preview-scripts/assets/Script/UIFrame/UIForm.js"},{"deps":{"../UIFrame/UIForm":44},"path":"preview-scripts/assets/Script/UIScript/UIScrollTexture.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Assemblers/MeshAssembler.js"},{"deps":{"./BaseMgr":117},"path":"preview-scripts/assets/Script/Logic/Manager/ConfigMgr.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UICapture_Auto.js"},{"deps":{"../Utils/BroadCast":116},"path":"preview-scripts/assets/Script/Common/BroadCasts/BroadcastCenter.js"},{"deps":{"../../UIFrame/SoundMgr":9},"path":"preview-scripts/assets/Script/Common/Components/ButtonPlus.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Light/LightStruct.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Mobx/mobx.js"},{"deps":{"../../UIFrame/CocosHelper":112,"./MatchUtils":104},"path":"preview-scripts/assets/Script/Common/Utils/CommonUtils.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/StateMachine/StateMachine.js"},{"deps":{"../Logic/Game":109,"../UIFrame/AdapterMgr":19,"../UIFrame/EventCenter":115,"../UIFrame/EventType":11},"path":"preview-scripts/assets/Script/Scene/Scene.js"},{"deps":{},"path":"preview-scripts/assets/Script/AutoScripts/UILoading_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UILevel_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIDungeon_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIMap_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UILogin_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIECSView_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIPop_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UILight_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UISetting_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UISkills_Auto.js"},{"deps":{},"path":"preview-scripts/assets/Script/AutoScripts/UITips_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UISplitTexture_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIAbout_Auto.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Assemblers/BaseAssembler.js"},{"deps":{"./BaseAssembler":69},"path":"preview-scripts/assets/Script/Common/Assemblers/BatchAssembler.js"},{"deps":{"../Utils/DrawingBoard":100},"path":"preview-scripts/assets/Script/Common/Components/DrawBorad.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIGame_Auto.js"},{"deps":{"../Assemblers/MeshAssembler":46},"path":"preview-scripts/assets/Script/Common/Components/MeshTexture.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIMobx_Auto.js"},{"deps":{"../../UIFrame/ResMgr":6},"path":"preview-scripts/assets/Script/Common/Components/CacheUtils.js"},{"deps":{"../../Common/Components/ScrollViewHelper":83},"path":"preview-scripts/assets/Script/Common/Components/GridScrollList.js"},{"deps":{"../Utils/CommonUtils":53},"path":"preview-scripts/assets/Script/Common/Components/MaskPlus.js"},{"deps":{"../Utils/CommonUtils":53},"path":"preview-scripts/assets/Script/Common/Assemblers/TextureAssembler.js"},{"deps":{"../../UIFrame/CocosHelper":112},"path":"preview-scripts/assets/Script/Common/Components/CameraCapture.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Components/QuadTree.js"},{"deps":{"./PropSelector":95},"path":"preview-scripts/assets/Script/Common/Components/PropController.js"},{"deps":{"../Assemblers/TextureAssembler":78,"../Utils/CommonUtils":53},"path":"preview-scripts/assets/Script/Common/Components/TexturePlus.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Components/ScrollViewHelper.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Components/TouchPlus.js"},{"deps":{"../Assemblers/BatchAssembler":70},"path":"preview-scripts/assets/Script/Common/Components/BatchComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/GameConfig.js"},{"deps":{"../Components/QuadTree":80},"path":"preview-scripts/assets/Script/Common/Light/Obstacle.js"},{"deps":{"../Components/QuadTree":80},"path":"preview-scripts/assets/Script/Common/Light/Light.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIFunction_Auto.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Components/SpinePlus.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Components/Shake.js"},{"deps":{},"path":"preview-scripts/assets/Script/AutoScripts/UINavigator_Auto.js"},{"deps":{"./../Common/Components/ButtonPlus":50},"path":"preview-scripts/assets/Script/AutoScripts/UIHome_Auto.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/DebugWindowUtils.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Components/PropSelector.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/EnumUtils.js"},{"deps":{"./Pool":101},"path":"preview-scripts/assets/Script/Common/Utils/LRUCache.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/GlobalHelper.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/Measure.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/DrawingBoard.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/Pool.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Light/LightUtils.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/PolygonUtil.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/MatchUtils.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/PriorityQueue.js"},{"deps":{"./PriorityQueue":105},"path":"preview-scripts/assets/Script/Common/Utils/TaskMgr.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/Queue.js"},{"deps":{"./MatchUtils":104},"path":"preview-scripts/assets/Script/Common/Utils/Dungeon.js"},{"deps":{"./Manager/ConfigMgr":47,"./Manager/PlayerMgr":111},"path":"preview-scripts/assets/Script/Logic/Game.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/BigNumUtils.js"},{"deps":{"./BaseMgr":117},"path":"preview-scripts/assets/Script/Logic/Manager/PlayerMgr.js"},{"deps":{},"path":"preview-scripts/assets/Script/UIFrame/CocosHelper.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/PropBind.js"},{"deps":{"./PriorityQueue":105},"path":"preview-scripts/assets/Script/Common/Utils/PriorityStack.js"},{"deps":{"../Common/Utils/Pool":101},"path":"preview-scripts/assets/Script/UIFrame/EventCenter.js"},{"deps":{},"path":"preview-scripts/assets/Script/Common/Utils/BroadCast.js"},{"deps":{},"path":"preview-scripts/assets/Script/Logic/Manager/BaseMgr.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    