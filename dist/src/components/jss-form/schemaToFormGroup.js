"use strict";
function schemaToFormGroup(schema) {
    var fGroupObj = {};
    function traverse(currentObj, currentPath) {
        if (typeof currentObj !== 'object')
            return;
        for (var attributeName in currentObj) {
            var nextPath = currentPath;
            if (attributeName != 'properties')
                nextPath = nextPath + '.' + attributeName;
            traverse(currentObj[attributeName], nextPath);
        }
    }
    traverse(schema, '');
    return fGroupObj;
}
exports.schemaToFormGroup = schemaToFormGroup;
