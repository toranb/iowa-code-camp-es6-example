var Foo = (function() {
    var foo = function() {
    };
    foo.prototype.talk = function() {
        console.log("talking...");
    };
    return foo;
})();

export default Foo;
