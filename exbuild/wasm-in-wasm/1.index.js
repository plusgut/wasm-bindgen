(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/wasm_in_wasm.js":
/*!*****************************!*\
  !*** ./pkg/wasm_in_wasm.js ***!
  \*****************************/
/*! exports provided: run, __wbg_log_ca239f9eb5df8c83, __wbindgen_number_new, __wbindgen_string_new, __wbindgen_object_drop_ref, __wbindgen_is_function, __wbg_get_f54fa02552389dda, __wbg_call_ba924d1fc8d162f3, __wbg_new_abadb45e63451a4b, __wbg_newwithbyteoffsetandlength_3e607c21646a8aef, __wbg_new_8b286296bf1fb091, __wbg_exports_fcaa550ffe451663, __wbg_new_fbcc18b999f8622b, __wbg_instanceof_Memory_47f56082d4dce38f, __wbg_buffer_aa8ebea80955a01a, __wbg_grow_a91ba57f4a4b8330, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_ca239f9eb5df8c83\", function() { return __wbg_log_ca239f9eb5df8c83; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return __wbindgen_is_function; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_f54fa02552389dda\", function() { return __wbg_get_f54fa02552389dda; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_ba924d1fc8d162f3\", function() { return __wbg_call_ba924d1fc8d162f3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abadb45e63451a4b\", function() { return __wbg_new_abadb45e63451a4b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithbyteoffsetandlength_3e607c21646a8aef\", function() { return __wbg_newwithbyteoffsetandlength_3e607c21646a8aef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_8b286296bf1fb091\", function() { return __wbg_new_8b286296bf1fb091; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_exports_fcaa550ffe451663\", function() { return __wbg_exports_fcaa550ffe451663; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_fbcc18b999f8622b\", function() { return __wbg_new_fbcc18b999f8622b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Memory_47f56082d4dce38f\", function() { return __wbg_instanceof_Memory_47f56082d4dce38f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_aa8ebea80955a01a\", function() { return __wbg_buffer_aa8ebea80955a01a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_grow_a91ba57f4a4b8330\", function() { return __wbg_grow_a91ba57f4a4b8330; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony import */ var _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_in_wasm_bg.wasm */ \"./pkg/wasm_in_wasm_bg.wasm\");\n\n\nfunction logError(e) {\n    let error = (function () {\n        try {\n            return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n/**\n*/\nfunction run() {\n    try {\n        _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n    } catch (e) {\n        logError(e)\n    }\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction handleError(e) {\n    _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        let size = arg.length;\n        let ptr = _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            arg = arg.slice(offset);\n            ptr = _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + arg.length * 3);\n            const view = getUint8Memory().subarray(ptr + offset, ptr + size);\n            const ret = cachedTextEncoder.encodeInto(arg, view);\n            if (ret.read != arg.length) throw new Error('failed to pass whole string');\n            offset += ret.written;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        let size = arg.length;\n        let ptr = _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            const buf = cachedTextEncoder.encode(arg.slice(offset));\n            ptr = _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + buf.length);\n            getUint8Memory().set(buf, ptr + offset);\n            offset += buf.length;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n}\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nconst __wbg_log_ca239f9eb5df8c83 = function(arg0, arg1) {\n    try {\n        console.log(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_number_new = function(arg0) {\n    try {\n        const ret = arg0;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    try {\n        const ret = getStringFromWasm(arg0, arg1);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    try {\n        takeObject(arg0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_is_function = function(arg0) {\n    try {\n        const ret = typeof(getObject(arg0)) === 'function';\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_get_f54fa02552389dda = function(arg0, arg1) {\n    try {\n        try {\n            const ret = Reflect.get(getObject(arg0), getObject(arg1));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_call_ba924d1fc8d162f3 = function(arg0, arg1, arg2, arg3) {\n    try {\n        try {\n            const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_new_abadb45e63451a4b = function() {\n    try {\n        const ret = new Object();\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_newwithbyteoffsetandlength_3e607c21646a8aef = function(arg0, arg1, arg2) {\n    try {\n        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_new_8b286296bf1fb091 = function(arg0, arg1) {\n    try {\n        try {\n            const ret = new WebAssembly.Instance(getObject(arg0), getObject(arg1));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_exports_fcaa550ffe451663 = function(arg0) {\n    try {\n        const ret = getObject(arg0).exports;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_new_fbcc18b999f8622b = function(arg0) {\n    try {\n        try {\n            const ret = new WebAssembly.Module(getObject(arg0));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_instanceof_Memory_47f56082d4dce38f = function(arg0) {\n    try {\n        const ret = getObject(arg0) instanceof WebAssembly.Memory;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_buffer_aa8ebea80955a01a = function(arg0) {\n    try {\n        const ret = getObject(arg0).buffer;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_grow_a91ba57f4a4b8330 = function(arg0, arg1) {\n    try {\n        const ret = getObject(arg0).grow(arg1 >>> 0);\n        _assertNum(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    try {\n        const ret = debugString(getObject(arg1));\n        const ret0 = passStringToWasm(ret);\n        const ret1 = WASM_VECTOR_LEN;\n        getInt32Memory()[arg0 / 4 + 0] = ret0;\n        getInt32Memory()[arg0 / 4 + 1] = ret1;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    try {\n        throw new Error(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    try {\n        throw takeObject(arg0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_memory = function() {\n    try {\n        const ret = _wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"];\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\n_wasm_in_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/wasm_in_wasm.js?");

/***/ }),

/***/ "./pkg/wasm_in_wasm_bg.wasm":
/*!**********************************!*\
  !*** ./pkg/wasm_in_wasm_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_exn_store, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_in_wasm.js */ \"./pkg/wasm_in_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/wasm_in_wasm_bg.wasm?");

/***/ })

}]);