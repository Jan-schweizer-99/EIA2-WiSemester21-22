var random_test;
(function (random_test) {
    var list = ["klaus", "peter", "Dieta", "HÄRBERT"];
    list = list.sort(function () { return Math.random() - 0.5; });
    console.log(list);
})(random_test || (random_test = {}));
//# sourceMappingURL=L02_EventInspector.js.map