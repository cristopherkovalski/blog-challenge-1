var Derender = /** @class */ (function () {
    function Derender(elementId) {
        this.elementDivGrid = document.getElementById(elementId);
        this.elementDivGrid.remove();
    }
    return Derender;
}());
export { Derender };
