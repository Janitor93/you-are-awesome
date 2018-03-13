// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};
const createProtoMagicObject = () => {
    let f = Function;
    f.__proto__ = Function.prototype;
    return f;
};

const incrementor = () => {
    incrementor.counter += 1;
    return incrementor;
};

incrementor.counter = 0;

incrementor.valueOf = function() {
    return incrementor.counter;
}

const asyncIncrementor = () => {
    return ++asyncIncrementor.counter;
};

asyncIncrementor.counter = 0;

const createIncrementer = function*() {
    yield 1;
    yield 2;
    yield 3;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(param);
        }, 1000);
    });

    return promise;
};
const getDeepPropertiesCount = (obj) => {
    let str = JSON.stringify(obj);
    return str.split('{').length - 2;
};
const createSerializedObject = () => {
    return new String('{}');
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;