function method(proto, target, name) {
    proto[name] = function() {
        return proto[target][name].apply(proto[target], arguments)
    }
}
var obj = {};
obj.request = {
    foo: (bar) => {
        console.log(bar),
        console.log(this);
        return bar;
    }
}

method(obj, 'request', 'foo')
obj.foo('123');
console.log(obj);