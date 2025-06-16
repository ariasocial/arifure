globalThis.node = cc.Node;
globalThis.asset = cc.Asset;
globalThis.prefab = cc.Prefab;
globalThis.nodePool = cc.NodePool;
globalThis.component = cc.Component;
globalThis.eventTarget = cc.EventTarget;
globalThis.blockInputEvents = cc.BlockInputEventsComponent;
globalThis.instantiate = cc.instantiate;
globalThis.isValid = cc.isValid;

function each(obj, iterator) {
    if (!obj) return;
    if (obj instanceof Array) {
        for (var i = 0, li = obj.length; i < li; i++) {
            if (iterator(obj[i], i) === false) return;
        }
    } else {
        for (var key in obj) {
            if (iterator(obj[key], key) === false) return;
        }
    }
}
globalThis.each = each;
function mixin(des, src, mixer) {
    des = des || {};
    mixer =
        mixer ||
        function (d, s) {
            if (typeof d === "undefined") {
                return s;
            }
        };

    if (mixer == true) {
        mixer = function (d, s) {
            return s;
        };
    }

    for (var i in src) {
        var v = mixer(des[i], src[i], i, des, src);
        if (typeof v !== "undefined") {
            des[i] = v;
        }
    }
    return des;
}
globalThis.mixin = mixin;

function merge(des, ...src) {
    for (let o of src) {
        Object.entries(o).forEach((val) => {
            let [k, v] = val;
            if (!des[k]) des[k] = v;
            else des[k] += v;
        });
    }
}
globalThis.merge = merge;

function bingo(...args) {
    G.ajax.send("console", args, function (data) {});
}
globalThis.bingo = bingo;

function forEachChild(root, eachCallback) {
    root.children.forEach((child) => {
        eachCallback(child);
        forEachChild(child, eachCallback);
    });
}
globalThis.forEachChild = forEachChild;

function vector2angle(vector) {
    let angle = cc.v2(vector.x, vector.y).signAngle(cc.v2(1, 0));
    let degree = (angle / Math.PI) * 180;
    return -degree;
}
globalThis.vector2angle = vector2angle;

function angle2vector(angle) {
    let radian = cc.misc.degreesToRadians(angle);
    return cc.v2(1, 0).rotate(radian);
}
globalThis.angle2vector = angle2vector;

function c2t_angle(cPos, tPos) {
    let dir = tPos.clone().subtract(cPos).normalize();
    return vector2angle(dir);
}
globalThis.c2t_angle = c2t_angle;

function testFight(nameArr, npcId, jcId) {
    var posObj = {};
    var heroData = G.data.yingxiong;

    for (var i = 0; i < nameArr.length; i++) {
        var name = nameArr[i];

        for (var j in heroData) {
            if (heroData[j].name == name) {
                posObj[i + 1] = j;
                break;
            }
        }
    }

    if (jcId) posObj.sqid = jcId;

    G.ajax.send("testfight", [posObj, npcId], function (data) {
        if (data.s == 1) {
            G.frame.fight.test(data.d.fightres);
        }
    });
}
globalThis.testFight = testFight;

function async(funArray, endCall, taskIndex, checkCall) {
    // console.log('async',taskIndex,checkCall);
    if (funArray.length <= 0){
        if(taskIndex && checkCall && checkCall()!=taskIndex)return;
        return endCall && endCall();
    }
    ~(function next() {
        if(taskIndex && checkCall && checkCall()!=taskIndex)return;
        
        if (funArray.length == 0) {
            return endCall && endCall();
        }
        let fn = funArray.shift();
        fn && fn(next);
    })();
}
globalThis.async = async;

function getNodeFullPath(node){
    let paths = [];
    while(node.parent != null){
        paths.unshift(node.name);
        node = node.parent;
    }
    return paths.join("/");
}
globalThis.getNodeFullPath = getNodeFullPath;
