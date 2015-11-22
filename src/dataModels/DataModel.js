'use strict';

var Base = require('extend-me').Base;

var A = 'A'.charCodeAt(0);

var DataModel = Base.extend('DataModel', {

    next: null,

    grid: null,

    setGrid: function(newGrid) {
        this.grid = newGrid;
    },

    getGrid: function() {
        return this.grid;
    },

    getBehavior: function() {
        return this.getGrid().getBehavior();
    },

    changed: function() {
        this.getBehavior().changed();
    },

    getPrivateState: function() {
        return this.getGrid().getPrivateState();
    },

    applyState: function() {

    },

    alphaFor: function(i) {
        // Name the column headers in A, .., AA, AB, AC, .., AZ format
        // quotient/remainder
        //var quo = Math.floor(col/27);
        var quo = Math.floor((i) / 26);
        var rem = (i) % 26;
        var code = '';
        if (quo > 0) {
            code += this.alpha(quo - 1);
        }
        code += this.alpha(rem);
        return code;
    },

    alpha: function(i) {
        return String.fromCharCode(A + i);
    }

});

module.exports = DataModel;
