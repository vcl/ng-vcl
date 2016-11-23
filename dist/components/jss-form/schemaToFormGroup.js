"use strict";
var forms_1 = require('@angular/forms');
// TODO is this function used?
function schemaToFormGroup(schema) {
    var fGroupObj = {
        name: ['', forms_1.Validators.required],
        'mainSkill.name': ['', forms_1.Validators.required],
        mainSkill: {
            name: ['', forms_1.Validators.required]
        }
    };
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
    // TODO traverse(schema, '');
    return fGroupObj;
}
exports.schemaToFormGroup = schemaToFormGroup;
