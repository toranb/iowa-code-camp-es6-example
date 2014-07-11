import Foo from 'example/foo';

var Bar = (function() {
    var bar = function() {
    };
    bar.prototype.walk = function() {
        console.log("walk son!");
        var model = new Foo();
        model.talk();
    };
    return bar;
})();

export default Bar;
