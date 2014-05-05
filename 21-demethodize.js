// Demethodize
var demethodize = Function.prototype.bind.bind(Function.prototype.call);

var slice = demethodize(Array.prototype.slice);

slice(['a', 'b', 'c', 'd'], 2);