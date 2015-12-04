var postcss = require('postcss');

module.exports = postcss.plugin('assemble-notification-helper', function (options) {
    return function (css) {

        css.walkRules(function (rule) {
            var notificationRule = rule.selector;

            if (notificationRule.indexOf('.notification--') > -1) {

                rule.walkDecls(function (decl, i) {
                    var property = decl.prop,
                        value = decl.value,
                        origRule = decl.parent,
                        ruleSelectors = origRule.selectors,
                        ruleSelectors2 = origRule.selectors,
                        newRule,
                        newRule2;

                    // Background
                    if (property == 'bg-color') {
                        // add background-color styles
                        decl.cloneBefore({ prop: 'background',  value: value });

                        // Remove the original declaration
                        decl.remove();
                    }

                    // Text Color
                    if (property == 'text-color') {
                        // add color text styles
                        decl.cloneBefore({ prop: 'color',  value: value });

                        ruleSelectors = ruleSelectors.map(function(ruleSelector){
                            return notificationRule + ' .notification-text';
                        }).join(',\n');

                        newRule = origRule.cloneAfter({
                            selector: ruleSelectors
                        }).removeAll();

                        newRule.append('color:' + value + ';');

                        // add .iconic styles
                        ruleSelectors2 = ruleSelectors2.map(function(ruleSelector2){
                            return notificationRule + ' .iconic *';
                        }).join(',\n');

                        newRule2 = origRule.cloneAfter({
                            selector: ruleSelectors2
                        }).removeAll();

                        newRule2.append('fill:' + value + ';');

                        // Remove the original declaration
                        decl.remove();
                    }

                    // Title Bar Background
                    if (property == 'title-bar-bg-color') {
                        ruleSelectors = ruleSelectors.map(function(ruleSelector){
                            return notificationRule + ' .notification__title-bar';
                        }).join(',\n');

                        newRule = origRule.cloneAfter({
                            selector: ruleSelectors
                        }).removeAll();

                        newRule.append('background:' + value + ';');

                        // Remove the original declaration
                        decl.remove();
                    }

                    // Title Bar Color
                    if (property == 'title-bar-text-color') {
                        ruleSelectors = ruleSelectors.map(function(ruleSelector){
                            return notificationRule + ' .notification__title-bar,' + notificationRule + ' .notification__title-bar h3';
                        }).join(',\n');

                        newRule = origRule.cloneAfter({
                            selector: ruleSelectors
                        }).removeAll();

                        newRule.append('color:' + value + ';');

                        // Remove the original declaration
                        decl.remove();
                    }
                });
            }
        });
    };
});