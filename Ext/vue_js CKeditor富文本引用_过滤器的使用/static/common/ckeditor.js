/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
! function(t) {
	const e = t.en = t.en || {};
	e.dictionary = Object.assign(e.dictionary || {}, {
		"%0 of %1": "%0 of %1",
		"Align center": "Align center",
		"Align left": "Align left",
		"Align right": "Align right",
		Aquamarine: "Aquamarine",
		Big: "Big",
		Black: "Black",
		"Block quote": "Block quote",
		Blue: "Blue",
		Bold: "Bold",
		"Bulleted List": "Bulleted List",
		Cancel: "Cancel",
		"Cannot upload file:": "Cannot upload file:",
		"Centered image": "Centered image",
		"Change image text alternative": "Change image text alternative",
		"Choose heading": "Choose heading",
		Column: "Column",
		"Could not insert image at the current position.": "Could not insert image at the current position.",
		"Could not obtain resized image URL.": "Could not obtain resized image URL.",
		"Decrease indent": "Decrease indent",
		Default: "Default",
		"Delete column": "Delete column",
		"Delete row": "Delete row",
		"Dim grey": "Dim grey",
		"Document colors": "Document colors",
		Downloadable: "Downloadable",
		"Dropdown toolbar": "Dropdown toolbar",
		"Edit link": "Edit link",
		"Editor toolbar": "Editor toolbar",
		"Enter image caption": "Enter image caption",
		"Font Background Color": "Font Background Color",
		"Font Color": "Font Color",
		"Font Family": "Font Family",
		"Font Size": "Font Size",
		"Full size image": "Full size image",
		Green: "Green",
		Grey: "Grey",
		"Header column": "Header column",
		"Header row": "Header row",
		Heading: "Heading",
		"Heading 1": "Heading 1",
		"Heading 2": "Heading 2",
		"Heading 3": "Heading 3",
		"Heading 4": "Heading 4",
		"Heading 5": "Heading 5",
		"Heading 6": "Heading 6",
		Huge: "Huge",
		"Image toolbar": "Image toolbar",
		"image widget": "image widget",
		"Increase indent": "Increase indent",
		"Insert column left": "Insert column left",
		"Insert column right": "Insert column right",
		"Insert image": "Insert image",
		"Insert image or file": "Insert image or file",
		"Insert media": "Insert media",
		"Insert paragraph after block": "Insert paragraph after block",
		"Insert paragraph before block": "Insert paragraph before block",
		"Insert row above": "Insert row above",
		"Insert row below": "Insert row below",
		"Insert table": "Insert table",
		"Inserting image failed": "Inserting image failed",
		Italic: "Italic",
		Justify: "Justify",
		"Left aligned image": "Left aligned image",
		"Light blue": "Light blue",
		"Light green": "Light green",
		"Light grey": "Light grey",
		Link: "Link",
		"Link URL": "Link URL",
		"Media URL": "Media URL",
		"media widget": "media widget",
		"Merge cell down": "Merge cell down",
		"Merge cell left": "Merge cell left",
		"Merge cell right": "Merge cell right",
		"Merge cell up": "Merge cell up",
		"Merge cells": "Merge cells",
		Next: "Next",
		"Numbered List": "Numbered List",
		"Open in a new tab": "Open in a new tab",
		"Open link in new tab": "Open link in new tab",
		Orange: "Orange",
		Paragraph: "Paragraph",
		"Paste the media URL in the input.": "Paste the media URL in the input.",
		Previous: "Previous",
		Purple: "Purple",
		Red: "Red",
		Redo: "Redo",
		"Remove color": "Remove color",
		"Rich Text Editor, %0": "Rich Text Editor, %0",
		"Right aligned image": "Right aligned image",
		Row: "Row",
		Save: "Save",
		"Select all": "Select all",
		"Select column": "Select column",
		"Select row": "Select row",
		"Selecting resized image failed": "Selecting resized image failed",
		"Show more items": "Show more items",
		"Side image": "Side image",
		Small: "Small",
		"Split cell horizontally": "Split cell horizontally",
		"Split cell vertically": "Split cell vertically",
		Strikethrough: "Strikethrough",
		"Table toolbar": "Table toolbar",
		"Text alignment": "Text alignment",
		"Text alignment toolbar": "Text alignment toolbar",
		"Text alternative": "Text alternative",
		"The URL must not be empty.": "The URL must not be empty.",
		"This link has no URL": "This link has no URL",
		"This media URL is not supported.": "This media URL is not supported.",
		Tiny: "Tiny",
		"Tip: Paste the URL into the content to embed faster.": "Tip: Paste the URL into the content to embed faster.",
		Turquoise: "Turquoise",
		Underline: "Underline",
		Undo: "Undo",
		Unlink: "Unlink",
		"Upload failed": "Upload failed",
		"Upload in progress": "Upload in progress",
		White: "White",
		"Widget toolbar": "Widget toolbar",
		Yellow: "Yellow"
	})
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {})),
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define
		.amd ? define([], e) : "object" == typeof exports ? exports.DecoupledEditor = e() : t.DecoupledEditor = e()
}(window, (function() {
	return function(t) {
		var e = {};

		function n(o) {
			if (e[o]) return e[o].exports;
			var i = e[o] = {
				i: o,
				l: !1,
				exports: {}
			};
			return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
		}
		return n.m = t, n.c = e, n.d = function(t, e, o) {
			n.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: o
			})
		}, n.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, n.t = function(t, e) {
			if (1 & e && (t = n(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var o = Object.create(null);
			if (n.r(o), Object.defineProperty(o, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for (var i in t) n.d(o, i, function(e) {
					return t[e]
				}.bind(null, i));
			return o
		}, n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, "a", e), e
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.p = "", n(n.s = 98)
	}([function(t, e, n) {
		"use strict";
		n.d(e, "b", (function() {
			return o
		})), n.d(e, "a", (function() {
			return i
		}));
		class o extends Error {
			constructor(t, e, n) {
				t = i(t), n && (t += " " + JSON.stringify(n)), super(t), this.name = "CKEditorError", this.context = e, this.data =
					n
			}
			is(t) {
				return "CKEditorError" === t
			}
			static rethrowUnexpectedError(t, e) {
				if (t.is && t.is("CKEditorError")) throw t;
				const n = new o(t.message, e);
				throw n.stack = t.stack, n
			}
		}

		function i(t) {
			const e = t.match(/^([^:]+):/);
			return e ? t +
				` Read more: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html#error-${e[1]}\n` :
				t
		}
	}, function(t, e, n) {
		"use strict";
		var o, i = function() {
				return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o
			},
			r = function() {
				var t = {};
				return function(e) {
					if (void 0 === t[e]) {
						var n = document.querySelector(e);
						if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
							n = n.contentDocument.head
						} catch (t) {
							n = null
						}
						t[e] = n
					}
					return t[e]
				}
			}(),
			s = [];

		function a(t) {
			for (var e = -1, n = 0; n < s.length; n++)
				if (s[n].identifier === t) {
					e = n;
					break
				} return e
		}

		function c(t, e) {
			for (var n = {}, o = [], i = 0; i < t.length; i++) {
				var r = t[i],
					c = e.base ? r[0] + e.base : r[0],
					l = n[c] || 0,
					d = "".concat(c, " ").concat(l);
				n[c] = l + 1;
				var u = a(d),
					h = {
						css: r[1],
						media: r[2],
						sourceMap: r[3]
					}; - 1 !== u ? (s[u].references++, s[u].updater(h)) : s.push({
					identifier: d,
					updater: p(h, e),
					references: 1
				}), o.push(d)
			}
			return o
		}

		function l(t) {
			var e = document.createElement("style"),
				o = t.attributes || {};
			if (void 0 === o.nonce) {
				var i = n.nc;
				i && (o.nonce = i)
			}
			if (Object.keys(o).forEach((function(t) {
					e.setAttribute(t, o[t])
				})), "function" == typeof t.insert) t.insert(e);
			else {
				var s = r(t.insert || "head");
				if (!s) throw new Error(
					"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
				s.appendChild(e)
			}
			return e
		}
		var d, u = (d = [], function(t, e) {
			return d[t] = e, d.filter(Boolean).join("\n")
		});

		function h(t, e, n, o) {
			var i = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
			if (t.styleSheet) t.styleSheet.cssText = u(e, i);
			else {
				var r = document.createTextNode(i),
					s = t.childNodes;
				s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
			}
		}

		function f(t, e, n) {
			var o = n.css,
				i = n.media,
				r = n.sourceMap;
			if (i ? t.setAttribute("media", i) : t.removeAttribute("media"), r && btoa && (o +=
					"\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(
						r)))), " */")), t.styleSheet) t.styleSheet.cssText = o;
			else {
				for (; t.firstChild;) t.removeChild(t.firstChild);
				t.appendChild(document.createTextNode(o))
			}
		}
		var g = null,
			m = 0;

		function p(t, e) {
			var n, o, i;
			if (e.singleton) {
				var r = m++;
				n = g || (g = l(e)), o = h.bind(null, n, r, !1), i = h.bind(null, n, r, !0)
			} else n = l(e), o = f.bind(null, n, e), i = function() {
				! function(t) {
					if (null === t.parentNode) return !1;
					t.parentNode.removeChild(t)
				}(n)
			};
			return o(t),
				function(e) {
					if (e) {
						if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
						o(t = e)
					} else i()
				}
		}
		t.exports = function(t, e) {
			(e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = i());
			var n = c(t = t || [], e);
			return function(t) {
				if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
					for (var o = 0; o < n.length; o++) {
						var i = a(n[o]);
						s[i].references--
					}
					for (var r = c(t, e), l = 0; l < n.length; l++) {
						var d = a(n[l]);
						0 === s[d].references && (s[d].updater(), s.splice(d, 1))
					}
					n = r
				}
			}
		}
	}, , function(t, e, n) {
		"use strict";
		var o = n(7),
			i = "object" == typeof self && self && self.Object === Object && self,
			r = o.a || i || Function("return this")();
		e.a = r
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			var o = n(3),
				i = n(12),
				r = "object" == typeof exports && exports && !exports.nodeType && exports,
				s = r && "object" == typeof t && t && !t.nodeType && t,
				a = s && s.exports === r ? o.a.Buffer : void 0,
				c = (a ? a.isBuffer : void 0) || i.a;
			e.a = c
		}).call(this, n(9)(t))
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			var o = n(7),
				i = "object" == typeof exports && exports && !exports.nodeType && exports,
				r = i && "object" == typeof t && t && !t.nodeType && t,
				s = r && r.exports === i && o.a.process,
				a = function() {
					try {
						var t = r && r.require && r.require("util").types;
						return t || s && s.binding && s.binding("util")
					} catch (t) {}
				}();
			e.a = a
		}).call(this, n(9)(t))
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			var e = n(0);
			const o = "object" == typeof window ? window : t;
			if (o.CKEDITOR_VERSION) throw new e.b("ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated.",
				null);
			o.CKEDITOR_VERSION = "20.0.0"
		}).call(this, n(10))
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			var n = "object" == typeof t && t && t.Object === Object && t;
			e.a = n
		}).call(this, n(10))
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			var o = n(3),
				i = "object" == typeof exports && exports && !exports.nodeType && exports,
				r = i && "object" == typeof t && t && !t.nodeType && t,
				s = r && r.exports === i ? o.a.Buffer : void 0,
				a = s ? s.allocUnsafe : void 0;
			e.a = function(t, e) {
				if (e) return t.slice();
				var n = t.length,
					o = a ? a(n) : new t.constructor(n);
				return t.copy(o), o
			}
		}).call(this, n(9)(t))
	}, function(t, e) {
		t.exports = function(t) {
			if (!t.webpackPolyfill) {
				var e = Object.create(t);
				e.children || (e.children = []), Object.defineProperty(e, "loaded", {
					enumerable: !0,
					get: function() {
						return e.l
					}
				}), Object.defineProperty(e, "id", {
					enumerable: !0,
					get: function() {
						return e.i
					}
				}), Object.defineProperty(e, "exports", {
					enumerable: !0
				}), e.webpackPolyfill = 1
			}
			return e
		}
	}, function(t, e) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (n = window)
		}
		t.exports = n
	}, function(t, e, n) {
		var o = n(1),
			i = n(73);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e, n) {
		"use strict";
		e.a = function() {
			return !1
		}
	}, function(t, e, n) {
		var o = n(1),
			i = n(14);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(16);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-color-link-fake-selection:rgba(31,177,255,0.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(18);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(20);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{top:100%;bottom:auto}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(22);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(24);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s;border-style:solid;left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}'
	}, function(t, e, n) {
		var o = n(1),
			i = n(26);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(-1*var(--ck-spacing-small));margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(28);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(30);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2*var(--ck-switch-button-toggle-spacing))}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(-1*var(--ck-switch-button-translation)))}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(32);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-toolbar-dropdown .ck.ck-toolbar .ck.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(34);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(36);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar>.ck-toolbar__items>*{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>*,.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-right:var(--ck-spacing-small)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(38);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{width:var(--ck-color-grid-tile-size);height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;border:0}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{display:none;color:var(--ck-color-color-grid-check-icon)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(40);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports = ".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(42);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck .ck-button.ck-color-table__remove-color{display:flex;align-items:center;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(44);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(46);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(48);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{right:25%;margin-right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{left:25%;margin-left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{right:25%;margin-right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}'
	}, function(t, e, n) {
		var o = n(1),
			i = n(50);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{height:100%;border-right:1px solid var(--ck-color-base-text);margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(52);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			'.ck .ck-widget .ck-widget__type-around__button{display:block;position:absolute;overflow:hidden;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{position:absolute;top:50%;left:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{top:calc(-0.5*var(--ck-widget-outline-thickness));left:min(10%,30px);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(-0.5*var(--ck-widget-outline-thickness));right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;position:absolute;top:1px;left:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;position:absolute;left:0;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(-1*var(--ck-widget-outline-thickness));right:calc(-1*var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:calc(-1*var(--ck-widget-outline-thickness) - 1px);display:block}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(-1*var(--ck-widget-outline-thickness) - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{width:var(--ck-widget-type-around-button-size);height:var(--ck-widget-type-around-button-size);background:var(--ck-color-widget-type-around-button);border-radius:100px;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);opacity:0;pointer-events:none}.ck .ck-widget .ck-widget__type-around__button svg{width:10px;height:8px;transform:translate(-50%,-50%);transition:transform .5s ease;margin-top:1px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{width:calc(var(--ck-widget-type-around-button-size) - 2px);height:calc(var(--ck-widget-type-around-button-size) - 2px);border-radius:100px;background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3))}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{pointer-events:none;height:1px;animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;outline:1px solid hsla(0,0%,100%,.5);background:var(--ck-color-base-text)}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer{opacity:0}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}'
	}, function(t, e, n) {
		var o = n(1),
			i = n(54);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-resizer-size:10px;--ck-resizer-border-width:1px;--ck-resizer-border-radius:2px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-tooltip-offset:10px;--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle .ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(56);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view>.ck.ck-label{width:100%;text-overflow:ellipsis;overflow:hidden}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(58);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition:box-shadow .2s ease-in-out,border .2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(60);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}[dir=ltr] .ck.ck-text-alternative-form>:not(:first-child),[dir=rtl] .ck.ck-text-alternative-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-field-view{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-text-alternative-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(62);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(64);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(66);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:50px}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(68);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(70);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			'.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'
	}, function(t, e, n) {
		var o = n(1),
			i = n(72);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			'.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'
	}, function(t, e) {
		t.exports =
			".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(75);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(77);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(79);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}[dir=ltr] .ck.ck-link-form>:not(:first-child),[dir=rtl] .ck.ck-link-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-field-view{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin-left:0}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(81);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(83);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			'.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'
	}, function(t, e, n) {
		var o = n(1),
			i = n(85);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}[dir=ltr] .ck.ck-media-form>:not(:first-child),[dir=rtl] .ck.ck-media-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-field-view{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-media-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-media-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-media-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(87);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports = ".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(89);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			":root{--ck-color-table-focused-cell-background:rgba(158,207,250,0.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(91);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-radius:0}.ck-rounded-corners [dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow,[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-left-color:var(--ck-color-split-button-hover-border)}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-right-color:var(--ck-color-split-button-hover-border)}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(93);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-color-base-border);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-color-focus-border);background:var(--ck-color-focus-outer-shadow)}"
	}, function(t, e, n) {
		var o = n(1),
			i = n(95);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			':root{--ck-table-selected-cell-background:rgba(158,207,250,0.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{position:relative;caret-color:transparent;outline:unset;box-shadow:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{content:"";pointer-events:none;background-color:var(--ck-table-selected-cell-background);position:absolute;top:0;left:0;right:0;bottom:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget_selected{outline:unset}'
	}, function(t, e, n) {
		var o = n(1),
			i = n(97);
		"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
			[t.i, i, ""]
		]);
		var r = {
			injectType: "singletonStyleTag",
			attributes: {
				"data-cke": !0
			},
			insert: "head",
			singleton: !0
		};
		o(i, r);
		t.exports = i.locals || {}
	}, function(t, e) {
		t.exports =
			".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.ck-content .table table th{font-weight:700;background:hsla(0,0%,0%,5%)}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}"
	}, function(t, e, n) {
		"use strict";
		n.r(e), n.d(e, "default", (function() {
			return rw
		}));
		var o = n(3),
			i = o.a.Symbol,
			r = Object.prototype,
			s = r.hasOwnProperty,
			a = r.toString,
			c = i ? i.toStringTag : void 0;
		var l = function(t) {
				var e = s.call(t, c),
					n = t[c];
				try {
					t[c] = void 0;
					var o = !0
				} catch (t) {}
				var i = a.call(t);
				return o && (e ? t[c] = n : delete t[c]), i
			},
			d = Object.prototype.toString;
		var u = function(t) {
				return d.call(t)
			},
			h = i ? i.toStringTag : void 0;
		var f = function(t) {
			return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : h && h in Object(t) ? l(t) : u(t)
		};
		var g = function(t, e) {
				return function(n) {
					return t(e(n))
				}
			},
			m = g(Object.getPrototypeOf, Object);
		var p = function(t) {
				return null != t && "object" == typeof t
			},
			b = Function.prototype,
			w = Object.prototype,
			k = b.toString,
			_ = w.hasOwnProperty,
			v = k.call(Object);
		var y = function(t) {
			if (!p(t) || "[object Object]" != f(t)) return !1;
			var e = m(t);
			if (null === e) return !0;
			var n = _.call(e, "constructor") && e.constructor;
			return "function" == typeof n && n instanceof n && k.call(n) == v
		};
		var x = function() {
			this.__data__ = [], this.size = 0
		};
		var A = function(t, e) {
			return t === e || t != t && e != e
		};
		var C = function(t, e) {
				for (var n = t.length; n--;)
					if (A(t[n][0], e)) return n;
				return -1
			},
			T = Array.prototype.splice;
		var S = function(t) {
			var e = this.__data__,
				n = C(e, t);
			return !(n < 0) && (n == e.length - 1 ? e.pop() : T.call(e, n, 1), --this.size, !0)
		};
		var P = function(t) {
			var e = this.__data__,
				n = C(e, t);
			return n < 0 ? void 0 : e[n][1]
		};
		var E = function(t) {
			return C(this.__data__, t) > -1
		};
		var M = function(t, e) {
			var n = this.__data__,
				o = C(n, t);
			return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
		};

		function I(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var o = t[e];
				this.set(o[0], o[1])
			}
		}
		I.prototype.clear = x, I.prototype.delete = S, I.prototype.get = P, I.prototype.has = E, I.prototype.set = M;
		var N = I;
		var O = function() {
			this.__data__ = new N, this.size = 0
		};
		var R = function(t) {
			var e = this.__data__,
				n = e.delete(t);
			return this.size = e.size, n
		};
		var D = function(t) {
			return this.__data__.get(t)
		};
		var L = function(t) {
			return this.__data__.has(t)
		};
		var j = function(t) {
			var e = typeof t;
			return null != t && ("object" == e || "function" == e)
		};
		var V, z = function(t) {
				if (!j(t)) return !1;
				var e = f(t);
				return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e ||
					"[object Proxy]" == e
			},
			B = o.a["__core-js_shared__"],
			F = (V = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + V : "";
		var U = function(t) {
				return !!F && F in t
			},
			H = Function.prototype.toString;
		var q = function(t) {
				if (null != t) {
					try {
						return H.call(t)
					} catch (t) {}
					try {
						return t + ""
					} catch (t) {}
				}
				return ""
			},
			W = /^\[object .+?Constructor\]$/,
			G = Function.prototype,
			Y = Object.prototype,
			$ = G.toString,
			K = Y.hasOwnProperty,
			Q = RegExp("^" + $.call(K).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(
				/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
		var J = function(t) {
			return !(!j(t) || U(t)) && (z(t) ? Q : W).test(q(t))
		};
		var Z = function(t, e) {
			return null == t ? void 0 : t[e]
		};
		var X = function(t, e) {
				var n = Z(t, e);
				return J(n) ? n : void 0
			},
			tt = X(o.a, "Map"),
			et = X(Object, "create");
		var nt = function() {
			this.__data__ = et ? et(null) : {}, this.size = 0
		};
		var ot = function(t) {
				var e = this.has(t) && delete this.__data__[t];
				return this.size -= e ? 1 : 0, e
			},
			it = Object.prototype.hasOwnProperty;
		var rt = function(t) {
				var e = this.__data__;
				if (et) {
					var n = e[t];
					return "__lodash_hash_undefined__" === n ? void 0 : n
				}
				return it.call(e, t) ? e[t] : void 0
			},
			st = Object.prototype.hasOwnProperty;
		var at = function(t) {
			var e = this.__data__;
			return et ? void 0 !== e[t] : st.call(e, t)
		};
		var ct = function(t, e) {
			var n = this.__data__;
			return this.size += this.has(t) ? 0 : 1, n[t] = et && void 0 === e ? "__lodash_hash_undefined__" : e, this
		};

		function lt(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var o = t[e];
				this.set(o[0], o[1])
			}
		}
		lt.prototype.clear = nt, lt.prototype.delete = ot, lt.prototype.get = rt, lt.prototype.has = at, lt.prototype.set =
			ct;
		var dt = lt;
		var ut = function() {
			this.size = 0, this.__data__ = {
				hash: new dt,
				map: new(tt || N),
				string: new dt
			}
		};
		var ht = function(t) {
			var e = typeof t;
			return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
		};
		var ft = function(t, e) {
			var n = t.__data__;
			return ht(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
		};
		var gt = function(t) {
			var e = ft(this, t).delete(t);
			return this.size -= e ? 1 : 0, e
		};
		var mt = function(t) {
			return ft(this, t).get(t)
		};
		var pt = function(t) {
			return ft(this, t).has(t)
		};
		var bt = function(t, e) {
			var n = ft(this, t),
				o = n.size;
			return n.set(t, e), this.size += n.size == o ? 0 : 1, this
		};

		function wt(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var o = t[e];
				this.set(o[0], o[1])
			}
		}
		wt.prototype.clear = ut, wt.prototype.delete = gt, wt.prototype.get = mt, wt.prototype.has = pt, wt.prototype.set =
			bt;
		var kt = wt;
		var _t = function(t, e) {
			var n = this.__data__;
			if (n instanceof N) {
				var o = n.__data__;
				if (!tt || o.length < 199) return o.push([t, e]), this.size = ++n.size, this;
				n = this.__data__ = new kt(o)
			}
			return n.set(t, e), this.size = n.size, this
		};

		function vt(t) {
			var e = this.__data__ = new N(t);
			this.size = e.size
		}
		vt.prototype.clear = O, vt.prototype.delete = R, vt.prototype.get = D, vt.prototype.has = L, vt.prototype.set =
			_t;
		var yt = vt;
		var xt = function(t, e) {
				for (var n = -1, o = null == t ? 0 : t.length; ++n < o && !1 !== e(t[n], n, t););
				return t
			},
			At = function() {
				try {
					var t = X(Object, "defineProperty");
					return t({}, "", {}), t
				} catch (t) {}
			}();
		var Ct = function(t, e, n) {
				"__proto__" == e && At ? At(t, e, {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0
				}) : t[e] = n
			},
			Tt = Object.prototype.hasOwnProperty;
		var St = function(t, e, n) {
			var o = t[e];
			Tt.call(t, e) && A(o, n) && (void 0 !== n || e in t) || Ct(t, e, n)
		};
		var Pt = function(t, e, n, o) {
			var i = !n;
			n || (n = {});
			for (var r = -1, s = e.length; ++r < s;) {
				var a = e[r],
					c = o ? o(n[a], t[a], a, n, t) : void 0;
				void 0 === c && (c = t[a]), i ? Ct(n, a, c) : St(n, a, c)
			}
			return n
		};
		var Et = function(t, e) {
			for (var n = -1, o = Array(t); ++n < t;) o[n] = e(n);
			return o
		};
		var Mt = function(t) {
				return p(t) && "[object Arguments]" == f(t)
			},
			It = Object.prototype,
			Nt = It.hasOwnProperty,
			Ot = It.propertyIsEnumerable,
			Rt = Mt(function() {
				return arguments
			}()) ? Mt : function(t) {
				return p(t) && Nt.call(t, "callee") && !Ot.call(t, "callee")
			},
			Dt = Array.isArray,
			Lt = n(4),
			jt = /^(?:0|[1-9]\d*)$/;
		var Vt = function(t, e) {
			var n = typeof t;
			return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && jt.test(t)) && t > -1 &&
				t % 1 == 0 && t < e
		};
		var zt = function(t) {
				return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
			},
			Bt = {};
		Bt["[object Float32Array]"] = Bt["[object Float64Array]"] = Bt["[object Int8Array]"] = Bt["[object Int16Array]"] =
			Bt["[object Int32Array]"] = Bt["[object Uint8Array]"] = Bt["[object Uint8ClampedArray]"] = Bt[
				"[object Uint16Array]"] = Bt["[object Uint32Array]"] = !0, Bt["[object Arguments]"] = Bt["[object Array]"] =
			Bt["[object ArrayBuffer]"] = Bt["[object Boolean]"] = Bt["[object DataView]"] = Bt["[object Date]"] = Bt[
				"[object Error]"] = Bt["[object Function]"] = Bt["[object Map]"] = Bt["[object Number]"] = Bt[
				"[object Object]"] = Bt["[object RegExp]"] = Bt["[object Set]"] = Bt["[object String]"] = Bt[
				"[object WeakMap]"] = !1;
		var Ft = function(t) {
			return p(t) && zt(t.length) && !!Bt[f(t)]
		};
		var Ut = function(t) {
				return function(e) {
					return t(e)
				}
			},
			Ht = n(5),
			qt = Ht.a && Ht.a.isTypedArray,
			Wt = qt ? Ut(qt) : Ft,
			Gt = Object.prototype.hasOwnProperty;
		var Yt = function(t, e) {
				var n = Dt(t),
					o = !n && Rt(t),
					i = !n && !o && Object(Lt.a)(t),
					r = !n && !o && !i && Wt(t),
					s = n || o || i || r,
					a = s ? Et(t.length, String) : [],
					c = a.length;
				for (var l in t) !e && !Gt.call(t, l) || s && ("length" == l || i && ("offset" == l || "parent" == l) || r &&
					("buffer" == l || "byteLength" == l || "byteOffset" == l) || Vt(l, c)) || a.push(l);
				return a
			},
			$t = Object.prototype;
		var Kt = function(t) {
				var e = t && t.constructor;
				return t === ("function" == typeof e && e.prototype || $t)
			},
			Qt = g(Object.keys, Object),
			Jt = Object.prototype.hasOwnProperty;
		var Zt = function(t) {
			if (!Kt(t)) return Qt(t);
			var e = [];
			for (var n in Object(t)) Jt.call(t, n) && "constructor" != n && e.push(n);
			return e
		};
		var Xt = function(t) {
			return null != t && zt(t.length) && !z(t)
		};
		var te = function(t) {
			return Xt(t) ? Yt(t) : Zt(t)
		};
		var ee = function(t, e) {
			return t && Pt(e, te(e), t)
		};
		var ne = function(t) {
				var e = [];
				if (null != t)
					for (var n in Object(t)) e.push(n);
				return e
			},
			oe = Object.prototype.hasOwnProperty;
		var ie = function(t) {
			if (!j(t)) return ne(t);
			var e = Kt(t),
				n = [];
			for (var o in t)("constructor" != o || !e && oe.call(t, o)) && n.push(o);
			return n
		};
		var re = function(t) {
			return Xt(t) ? Yt(t, !0) : ie(t)
		};
		var se = function(t, e) {
				return t && Pt(e, re(e), t)
			},
			ae = n(8);
		var ce = function(t, e) {
			var n = -1,
				o = t.length;
			for (e || (e = Array(o)); ++n < o;) e[n] = t[n];
			return e
		};
		var le = function(t, e) {
			for (var n = -1, o = null == t ? 0 : t.length, i = 0, r = []; ++n < o;) {
				var s = t[n];
				e(s, n, t) && (r[i++] = s)
			}
			return r
		};
		var de = function() {
				return []
			},
			ue = Object.prototype.propertyIsEnumerable,
			he = Object.getOwnPropertySymbols,
			fe = he ? function(t) {
				return null == t ? [] : (t = Object(t), le(he(t), (function(e) {
					return ue.call(t, e)
				})))
			} : de;
		var ge = function(t, e) {
			return Pt(t, fe(t), e)
		};
		var me = function(t, e) {
				for (var n = -1, o = e.length, i = t.length; ++n < o;) t[i + n] = e[n];
				return t
			},
			pe = Object.getOwnPropertySymbols ? function(t) {
				for (var e = []; t;) me(e, fe(t)), t = m(t);
				return e
			} : de;
		var be = function(t, e) {
			return Pt(t, pe(t), e)
		};
		var we = function(t, e, n) {
			var o = e(t);
			return Dt(t) ? o : me(o, n(t))
		};
		var ke = function(t) {
			return we(t, te, fe)
		};
		var _e = function(t) {
				return we(t, re, pe)
			},
			ve = X(o.a, "DataView"),
			ye = X(o.a, "Promise"),
			xe = X(o.a, "Set"),
			Ae = X(o.a, "WeakMap"),
			Ce = q(ve),
			Te = q(tt),
			Se = q(ye),
			Pe = q(xe),
			Ee = q(Ae),
			Me = f;
		(ve && "[object DataView]" != Me(new ve(new ArrayBuffer(1))) || tt && "[object Map]" != Me(new tt) || ye &&
			"[object Promise]" != Me(ye.resolve()) || xe && "[object Set]" != Me(new xe) || Ae && "[object WeakMap]" != Me(
				new Ae)) && (Me = function(t) {
			var e = f(t),
				n = "[object Object]" == e ? t.constructor : void 0,
				o = n ? q(n) : "";
			if (o) switch (o) {
				case Ce:
					return "[object DataView]";
				case Te:
					return "[object Map]";
				case Se:
					return "[object Promise]";
				case Pe:
					return "[object Set]";
				case Ee:
					return "[object WeakMap]"
			}
			return e
		});
		var Ie = Me,
			Ne = Object.prototype.hasOwnProperty;
		var Oe = function(t) {
				var e = t.length,
					n = new t.constructor(e);
				return e && "string" == typeof t[0] && Ne.call(t, "index") && (n.index = t.index, n.input = t.input), n
			},
			Re = o.a.Uint8Array;
		var De = function(t) {
			var e = new t.constructor(t.byteLength);
			return new Re(e).set(new Re(t)), e
		};
		var Le = function(t, e) {
				var n = e ? De(t.buffer) : t.buffer;
				return new t.constructor(n, t.byteOffset, t.byteLength)
			},
			je = /\w*$/;
		var Ve = function(t) {
				var e = new t.constructor(t.source, je.exec(t));
				return e.lastIndex = t.lastIndex, e
			},
			ze = i ? i.prototype : void 0,
			Be = ze ? ze.valueOf : void 0;
		var Fe = function(t) {
			return Be ? Object(Be.call(t)) : {}
		};
		var Ue = function(t, e) {
			var n = e ? De(t.buffer) : t.buffer;
			return new t.constructor(n, t.byteOffset, t.length)
		};
		var He = function(t, e, n) {
				var o = t.constructor;
				switch (e) {
					case "[object ArrayBuffer]":
						return De(t);
					case "[object Boolean]":
					case "[object Date]":
						return new o(+t);
					case "[object DataView]":
						return Le(t, n);
					case "[object Float32Array]":
					case "[object Float64Array]":
					case "[object Int8Array]":
					case "[object Int16Array]":
					case "[object Int32Array]":
					case "[object Uint8Array]":
					case "[object Uint8ClampedArray]":
					case "[object Uint16Array]":
					case "[object Uint32Array]":
						return Ue(t, n);
					case "[object Map]":
						return new o;
					case "[object Number]":
					case "[object String]":
						return new o(t);
					case "[object RegExp]":
						return Ve(t);
					case "[object Set]":
						return new o;
					case "[object Symbol]":
						return Fe(t)
				}
			},
			qe = Object.create,
			We = function() {
				function t() {}
				return function(e) {
					if (!j(e)) return {};
					if (qe) return qe(e);
					t.prototype = e;
					var n = new t;
					return t.prototype = void 0, n
				}
			}();
		var Ge = function(t) {
			return "function" != typeof t.constructor || Kt(t) ? {} : We(m(t))
		};
		var Ye = function(t) {
				return p(t) && "[object Map]" == Ie(t)
			},
			$e = Ht.a && Ht.a.isMap,
			Ke = $e ? Ut($e) : Ye;
		var Qe = function(t) {
				return p(t) && "[object Set]" == Ie(t)
			},
			Je = Ht.a && Ht.a.isSet,
			Ze = Je ? Ut(Je) : Qe,
			Xe = {};
		Xe["[object Arguments]"] = Xe["[object Array]"] = Xe["[object ArrayBuffer]"] = Xe["[object DataView]"] = Xe[
				"[object Boolean]"] = Xe["[object Date]"] = Xe["[object Float32Array]"] = Xe["[object Float64Array]"] = Xe[
				"[object Int8Array]"] = Xe["[object Int16Array]"] = Xe["[object Int32Array]"] = Xe["[object Map]"] = Xe[
				"[object Number]"] = Xe["[object Object]"] = Xe["[object RegExp]"] = Xe["[object Set]"] = Xe["[object String]"] =
			Xe["[object Symbol]"] = Xe["[object Uint8Array]"] = Xe["[object Uint8ClampedArray]"] = Xe[
				"[object Uint16Array]"] = Xe["[object Uint32Array]"] = !0, Xe["[object Error]"] = Xe["[object Function]"] = Xe[
				"[object WeakMap]"] = !1;
		var tn = function t(e, n, o, i, r, s) {
			var a, c = 1 & n,
				l = 2 & n,
				d = 4 & n;
			if (o && (a = r ? o(e, i, r, s) : o(e)), void 0 !== a) return a;
			if (!j(e)) return e;
			var u = Dt(e);
			if (u) {
				if (a = Oe(e), !c) return ce(e, a)
			} else {
				var h = Ie(e),
					f = "[object Function]" == h || "[object GeneratorFunction]" == h;
				if (Object(Lt.a)(e)) return Object(ae.a)(e, c);
				if ("[object Object]" == h || "[object Arguments]" == h || f && !r) {
					if (a = l || f ? {} : Ge(e), !c) return l ? be(e, se(a, e)) : ge(e, ee(a, e))
				} else {
					if (!Xe[h]) return r ? e : {};
					a = He(e, h, c)
				}
			}
			s || (s = new yt);
			var g = s.get(e);
			if (g) return g;
			s.set(e, a), Ze(e) ? e.forEach((function(i) {
				a.add(t(i, n, o, i, e, s))
			})) : Ke(e) && e.forEach((function(i, r) {
				a.set(r, t(i, n, o, r, e, s))
			}));
			var m = d ? l ? _e : ke : l ? keysIn : te,
				p = u ? void 0 : m(e);
			return xt(p || e, (function(i, r) {
				p && (i = e[r = i]), St(a, r, t(i, n, o, r, e, s))
			})), a
		};
		var en = function(t, e) {
			return tn(t, 5, e = "function" == typeof e ? e : void 0)
		};
		var nn = function(t) {
			return p(t) && 1 === t.nodeType && !y(t)
		};
		class on {
			constructor(t, e) {
				this._config = {}, e && this.define(rn(e)), t && this._setObjectToTarget(this._config, t)
			}
			set(t, e) {
				this._setToTarget(this._config, t, e)
			}
			define(t, e) {
				this._setToTarget(this._config, t, e, !0)
			}
			get(t) {
				return this._getFromSource(this._config, t)
			}* names() {
				for (const t of Object.keys(this._config)) yield t
			}
			_setToTarget(t, e, n, o = !1) {
				if (y(e)) return void this._setObjectToTarget(t, e, o);
				const i = e.split(".");
				e = i.pop();
				for (const e of i) y(t[e]) || (t[e] = {}), t = t[e];
				if (y(n)) return y(t[e]) || (t[e] = {}), t = t[e], void this._setObjectToTarget(t, n, o);
				o && void 0 !== t[e] || (t[e] = n)
			}
			_getFromSource(t, e) {
				const n = e.split(".");
				e = n.pop();
				for (const e of n) {
					if (!y(t[e])) {
						t = null;
						break
					}
					t = t[e]
				}
				return t ? rn(t[e]) : void 0
			}
			_setObjectToTarget(t, e, n) {
				Object.keys(e).forEach(o => {
					this._setToTarget(t, o, e[o], n)
				})
			}
		}

		function rn(t) {
			return en(t, sn)
		}

		function sn(t) {
			return nn(t) ? t : void 0
		}
		var an = function() {
			return function t() {
				t.called = !0
			}
		};
		class cn {
			constructor(t, e) {
				this.source = t, this.name = e, this.path = [], this.stop = an(), this.off = an()
			}
		}
		const ln = new Array(256).fill().map((t, e) => ("0" + e.toString(16)).slice(-2));

		function dn() {
			const t = 4294967296 * Math.random() >>> 0,
				e = 4294967296 * Math.random() >>> 0,
				n = 4294967296 * Math.random() >>> 0,
				o = 4294967296 * Math.random() >>> 0;
			return "e" + ln[t >> 0 & 255] + ln[t >> 8 & 255] + ln[t >> 16 & 255] + ln[t >> 24 & 255] + ln[e >> 0 & 255] +
				ln[e >> 8 & 255] + ln[e >> 16 & 255] + ln[e >> 24 & 255] + ln[n >> 0 & 255] + ln[n >> 8 & 255] + ln[n >> 16 &
					255] + ln[n >> 24 & 255] + ln[o >> 0 & 255] + ln[o >> 8 & 255] + ln[o >> 16 & 255] + ln[o >> 24 & 255]
		}
		var un = {
				get(t) {
					return "number" != typeof t ? this[t] || this.normal : t
				},
				highest: 1e5,
				high: 1e3,
				normal: 0,
				low: -1e3,
				lowest: -1e5
			},
			hn = (n(6), n(0));
		const fn = Symbol("listeningTo"),
			gn = Symbol("emitterId");
		var mn = {
			on(t, e, n = {}) {
				this.listenTo(this, t, e, n)
			},
			once(t, e, n) {
				let o = !1;
				this.listenTo(this, t, (function(t, ...n) {
					o || (o = !0, t.off(), e.call(this, t, ...n))
				}), n)
			},
			off(t, e) {
				this.stopListening(this, t, e)
			},
			listenTo(t, e, n, o = {}) {
				let i, r;
				this[fn] || (this[fn] = {});
				const s = this[fn];
				bn(t) || pn(t);
				const a = bn(t);
				(i = s[a]) || (i = s[a] = {
					emitter: t,
					callbacks: {}
				}), (r = i.callbacks[e]) || (r = i.callbacks[e] = []), r.push(n),
					function(t, e) {
						const n = wn(t);
						if (n[e]) return;
						let o = e,
							i = null;
						const r = [];
						for (;
							"" !== o && !n[o];) n[o] = {
							callbacks: [],
							childEvents: []
						}, r.push(n[o]), i && n[o].childEvents.push(i), i = o, o = o.substr(0, o.lastIndexOf(":"));
						if ("" !== o) {
							for (const t of r) t.callbacks = n[o].callbacks.slice();
							n[o].childEvents.push(i)
						}
					}(t, e);
				const c = kn(t, e),
					l = un.get(o.priority),
					d = {
						callback: n,
						priority: l
					};
				for (const t of c) {
					let e = !1;
					for (let n = 0; n < t.length; n++)
						if (t[n].priority < l) {
							t.splice(n, 0, d), e = !0;
							break
						} e || t.push(d)
				}
			},
			stopListening(t, e, n) {
				const o = this[fn];
				let i = t && bn(t);
				const r = o && i && o[i],
					s = r && e && r.callbacks[e];
				if (!(!o || t && !r || e && !s))
					if (n) vn(t, e, n);
					else if (s) {
					for (; n = s.pop();) vn(t, e, n);
					delete r.callbacks[e]
				} else if (r) {
					for (e in r.callbacks) this.stopListening(t, e);
					delete o[i]
				} else {
					for (i in o) this.stopListening(o[i].emitter);
					delete this[fn]
				}
			},
			fire(t, ...e) {
				try {
					const n = t instanceof cn ? t : new cn(this, t),
						o = n.name;
					let i = function t(e, n) {
						let o;
						if (!e._events || !(o = e._events[n]) || !o.callbacks.length) return n.indexOf(":") > -1 ? t(e, n.substr(0,
							n.lastIndexOf(":"))) : null;
						return o.callbacks
					}(this, o);
					if (n.path.push(this), i) {
						const t = [n, ...e];
						i = Array.from(i);
						for (let e = 0; e < i.length && (i[e].callback.apply(this, t), n.off.called && (delete n.off.called, vn(
								this, o, i[e].callback)), !n.stop.called); e++);
					}
					if (this._delegations) {
						const t = this._delegations.get(o),
							i = this._delegations.get("*");
						t && _n(t, n, e), i && _n(i, n, e)
					}
					return n.return
				} catch (t) {
					hn.b.rethrowUnexpectedError(t, this)
				}
			},
			delegate(...t) {
				return {
					to: (e, n) => {
						this._delegations || (this._delegations = new Map), t.forEach(t => {
							const o = this._delegations.get(t);
							o ? o.set(e, n) : this._delegations.set(t, new Map([
								[e, n]
							]))
						})
					}
				}
			},
			stopDelegating(t, e) {
				if (this._delegations)
					if (t)
						if (e) {
							const n = this._delegations.get(t);
							n && n.delete(e)
						} else this._delegations.delete(t);
				else this._delegations.clear()
			}
		};

		function pn(t, e) {
			t[gn] || (t[gn] = e || dn())
		}

		function bn(t) {
			return t[gn]
		}

		function wn(t) {
			return t._events || Object.defineProperty(t, "_events", {
				value: {}
			}), t._events
		}

		function kn(t, e) {
			const n = wn(t)[e];
			if (!n) return [];
			let o = [n.callbacks];
			for (let e = 0; e < n.childEvents.length; e++) {
				const i = kn(t, n.childEvents[e]);
				o = o.concat(i)
			}
			return o
		}

		function _n(t, e, n) {
			for (let [o, i] of t) {
				i ? "function" == typeof i && (i = i(e.name)) : i = e.name;
				const t = new cn(e.source, i);
				t.path = [...e.path], o.fire(t, ...n)
			}
		}

		function vn(t, e, n) {
			const o = kn(t, e);
			for (const t of o)
				for (let e = 0; e < t.length; e++) t[e].callback == n && (t.splice(e, 1), e--)
		}

		function yn(t) {
			return !(!t || !t[Symbol.iterator])
		}

		function xn(t, ...e) {
			e.forEach(e => {
				Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n => {
					if (n in t.prototype) return;
					const o = Object.getOwnPropertyDescriptor(e, n);
					o.enumerable = !1, Object.defineProperty(t.prototype, n, o)
				})
			})
		}
		class An {
			constructor(t = {}, e = {}) {
				const n = yn(t);
				if (n || (e = t), this._items = [], this._itemMap = new Map, this._idProperty = e.idProperty || "id", this._bindToExternalToInternalMap =
					new WeakMap, this._bindToInternalToExternalMap = new WeakMap, this._skippedIndexesFromExternal = [], n)
					for (const e of t) this._items.push(e), this._itemMap.set(this._getItemIdBeforeAdding(e), e)
			}
			get length() {
				return this._items.length
			}
			get first() {
				return this._items[0] || null
			}
			get last() {
				return this._items[this.length - 1] || null
			}
			add(t, e) {
				const n = this._getItemIdBeforeAdding(t);
				if (void 0 === e) e = this._items.length;
				else if (e > this._items.length || e < 0) throw new hn.b("collection-add-item-invalid-index", this);
				return this._items.splice(e, 0, t), this._itemMap.set(n, t), this.fire("add", t, e), this
			}
			get(t) {
				let e;
				if ("string" == typeof t) e = this._itemMap.get(t);
				else {
					if ("number" != typeof t) throw new hn.b("collection-get-invalid-arg: Index or id must be given.", this);
					e = this._items[t]
				}
				return e || null
			}
			has(t) {
				if ("string" == typeof t) return this._itemMap.has(t); {
					const e = t[this._idProperty];
					return this._itemMap.has(e)
				}
			}
			getIndex(t) {
				let e;
				return e = "string" == typeof t ? this._itemMap.get(t) : t, this._items.indexOf(e)
			}
			remove(t) {
				let e, n, o, i = !1;
				const r = this._idProperty;
				if ("string" == typeof t ? (n = t, o = this._itemMap.get(n), i = !o, o && (e = this._items.indexOf(o))) :
					"number" == typeof t ? (e = t, o = this._items[e], i = !o, o && (n = o[r])) : (o = t, n = o[r], e = this._items
						.indexOf(o), i = -1 == e || !this._itemMap.get(n)), i) throw new hn.b(
					"collection-remove-404: Item not found.", this);
				this._items.splice(e, 1), this._itemMap.delete(n);
				const s = this._bindToInternalToExternalMap.get(o);
				return this._bindToInternalToExternalMap.delete(o), this._bindToExternalToInternalMap.delete(s), this.fire(
					"remove", o, e), o
			}
			map(t, e) {
				return this._items.map(t, e)
			}
			find(t, e) {
				return this._items.find(t, e)
			}
			filter(t, e) {
				return this._items.filter(t, e)
			}
			clear() {
				for (this._bindToCollection && (this.stopListening(this._bindToCollection), this._bindToCollection = null); this
					.length;) this.remove(0)
			}
			bindTo(t) {
				if (this._bindToCollection) throw new hn.b(
					"collection-bind-to-rebind: The collection cannot be bound more than once.", this);
				return this._bindToCollection = t, {
					as: t => {
						this._setUpBindToBinding(e => new t(e))
					},
					using: t => {
						"function" == typeof t ? this._setUpBindToBinding(e => t(e)) : this._setUpBindToBinding(e => e[t])
					}
				}
			}
			_setUpBindToBinding(t) {
				const e = this._bindToCollection,
					n = (n, o, i) => {
						const r = e._bindToCollection == this,
							s = e._bindToInternalToExternalMap.get(o);
						if (r && s) this._bindToExternalToInternalMap.set(o, s), this._bindToInternalToExternalMap.set(s, o);
						else {
							const n = t(o);
							if (!n) return void this._skippedIndexesFromExternal.push(i);
							let r = i;
							for (const t of this._skippedIndexesFromExternal) i > t && r--;
							for (const t of e._skippedIndexesFromExternal) r >= t && r++;
							this._bindToExternalToInternalMap.set(o, n), this._bindToInternalToExternalMap.set(n, o), this.add(n, r);
							for (let t = 0; t < e._skippedIndexesFromExternal.length; t++) r <= e._skippedIndexesFromExternal[t] && e._skippedIndexesFromExternal[
								t]++
						}
					};
				for (const t of e) n(0, t, e.getIndex(t));
				this.listenTo(e, "add", n), this.listenTo(e, "remove", (t, e, n) => {
					const o = this._bindToExternalToInternalMap.get(e);
					o && this.remove(o), this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce((t, e) =>
						(n < e && t.push(e - 1), n > e && t.push(e), t), [])
				})
			}
			_getItemIdBeforeAdding(t) {
				const e = this._idProperty;
				let n;
				if (e in t) {
					if (n = t[e], "string" != typeof n) throw new hn.b("collection-add-invalid-id", this);
					if (this.get(n)) throw new hn.b("collection-add-item-already-exists", this)
				} else t[e] = n = dn();
				return n
			} [Symbol.iterator]() {
				return this._items[Symbol.iterator]()
			}
		}
		xn(An, mn);
		class Cn {
			constructor(t, e = [], n = []) {
				this._context = t, this._plugins = new Map, this._availablePlugins = new Map;
				for (const t of e) t.pluginName && this._availablePlugins.set(t.pluginName, t);
				this._contextPlugins = new Map;
				for (const [t, e] of n) this._contextPlugins.set(t, e), this._contextPlugins.set(e, t), t.pluginName && this._availablePlugins
					.set(t.pluginName, t)
			}*[Symbol.iterator]() {
				for (const t of this._plugins) "function" == typeof t[0] && (yield t)
			}
			get(t) {
				const e = this._plugins.get(t);
				if (!e) {
					const e = "plugincollection-plugin-not-loaded: The requested plugin is not loaded.";
					let n = t;
					throw "function" == typeof t && (n = t.pluginName || t.name), new hn.b(e, this._context, {
						plugin: n
					})
				}
				return e
			}
			has(t) {
				return this._plugins.has(t)
			}
			init(t, e = []) {
				const n = this,
					o = this._context,
					i = new Set,
					r = [],
					s = h(t),
					a = h(e),
					c = function(t) {
						const e = [];
						for (const n of t) u(n) || e.push(n);
						return e.length ? e : null
					}(t);
				if (c) {
					const t = "plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";
					return console.error(Object(hn.a)(t), {
						plugins: c
					}), Promise.reject(new hn.b(t, o, {
						plugins: c
					}))
				}
				return Promise.all(s.map(l)).then(() => d(r, "init")).then(() => d(r, "afterInit")).then(() => r);

				function l(t) {
					if (!a.includes(t) && !n._plugins.has(t) && !i.has(t)) return function(t) {
						return new Promise(s => {
							i.add(t), t.requires && t.requires.forEach(n => {
								const i = u(n);
								if (t.isContextPlugin && !i.isContextPlugin) throw new hn.b(
									"plugincollection-context-required: Context plugin can not require plugin which is not a context plugin",
									null, {
										plugin: i.name,
										requiredBy: t.name
									});
								if (e.includes(i)) throw new hn.b(
									"plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.",
									o, {
										plugin: i.name,
										requiredBy: t.name
									});
								l(i)
							});
							const a = n._contextPlugins.get(t) || new t(o);
							n._add(t, a), r.push(a), s()
						})
					}(t).catch(e => {
						throw console.error(Object(hn.a)("plugincollection-load: It was not possible to load the plugin."), {
							plugin: t
						}), e
					})
				}

				function d(t, e) {
					return t.reduce((t, o) => o[e] ? n._contextPlugins.has(o) ? t : t.then(o[e].bind(o)) : t, Promise.resolve())
				}

				function u(t) {
					return "function" == typeof t ? t : n._availablePlugins.get(t)
				}

				function h(t) {
					return t.map(t => u(t)).filter(t => !!t)
				}
			}
			destroy() {
				const t = [];
				for (const [, e] of this) "function" != typeof e.destroy || this._contextPlugins.has(e) || t.push(e.destroy());
				return Promise.all(t)
			}
			_add(t, e) {
				this._plugins.set(t, e);
				const n = t.pluginName;
				if (n) {
					if (this._plugins.has(n)) throw new hn.b(
						"plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.", null, {
							pluginName: n,
							plugin1: this._plugins.get(n).constructor,
							plugin2: t
						});
					this._plugins.set(n, e)
				}
			}
		}

		function Tn(t, e, n = 1) {
			if ("number" != typeof n) throw new hn.b(
				"translation-service-quantity-not-a-number: Expecting `quantity` to be a number.", null, {
					quantity: n
				});
			const o = Object.keys(window.CKEDITOR_TRANSLATIONS).length;
			1 === o && (t = Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);
			const i = e.id || e.string;
			if (0 === o || ! function(t, e) {
					return !!window.CKEDITOR_TRANSLATIONS[t] && !!window.CKEDITOR_TRANSLATIONS[t].dictionary[e]
				}(t, i)) return 1 !== n ? e.plural : e.string;
			const r = window.CKEDITOR_TRANSLATIONS[t].dictionary,
				s = window.CKEDITOR_TRANSLATIONS[t].getPluralForm || (t => 1 === t ? 0 : 1);
			if ("string" == typeof r[i]) return r[i];
			const a = Number(s(n));
			return r[i][a]
		}
		xn(Cn, mn), window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {});
		const Sn = ["ar", "fa", "he", "ku", "ug"];
		class Pn {
			constructor(t = {}) {
				this.uiLanguage = t.uiLanguage || "en", this.contentLanguage = t.contentLanguage || this.uiLanguage, this.uiLanguageDirection =
					En(this.uiLanguage), this.contentLanguageDirection = En(this.contentLanguage), this.t = (t, e) => this._t(t,
						e)
			}
			get language() {
				return console.warn(
					"locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."
				), this.uiLanguage
			}
			_t(t, e = []) {
				Array.isArray(e) || (e = [e]), "string" == typeof t && (t = {
					string: t
				});
				const n = !!t.plural ? e[0] : 1;
				return function(t, e) {
					return t.replace(/%(\d+)/g, (t, n) => n < e.length ? e[n] : t)
				}(Tn(this.uiLanguage, t, n), e)
			}
		}

		function En(t) {
			return Sn.includes(t) ? "rtl" : "ltr"
		}
		class Mn {
			constructor(t) {
				this.config = new on(t, this.constructor.defaultConfig);
				const e = this.constructor.builtinPlugins;
				this.config.define("plugins", e), this.plugins = new Cn(this, e);
				const n = this.config.get("language") || {};
				this.locale = new Pn({
					uiLanguage: "string" == typeof n ? n : n.ui,
					contentLanguage: this.config.get("language.content")
				}), this.t = this.locale.t, this.editors = new An, this._contextOwner = null
			}
			initPlugins() {
				const t = this.config.get("plugins") || [];
				for (const e of t) {
					if ("function" != typeof e) throw new hn.b(
						"context-initplugins-constructor-only: Only a constructor function is allowed as a context plugin.", null, {
							Plugin: e
						});
					if (!0 !== e.isContextPlugin) throw new hn.b(
						"context-initplugins-invalid-plugin: Only a plugin marked as a context plugin is allowed to be used with a context.",
						null, {
							Plugin: e
						})
				}
				return this.plugins.init(t)
			}
			destroy() {
				return Promise.all(Array.from(this.editors, t => t.destroy())).then(() => this.plugins.destroy())
			}
			_addEditor(t, e) {
				if (this._contextOwner) throw new hn.b(
					"context-addEditor-private-context: Cannot add multiple editors to the context which is created by the editor."
				);
				this.editors.add(t), e && (this._contextOwner = t)
			}
			_removeEditor(t) {
				return this.editors.has(t) && this.editors.remove(t), this._contextOwner === t ? this.destroy() : Promise.resolve()
			}
			_getEditorConfig() {
				const t = {};
				for (const e of this.config.names())["plugins", "removePlugins", "extraPlugins"].includes(e) || (t[e] = this.config
					.get(e));
				return t
			}
			static create(t) {
				return new Promise(e => {
					const n = new this(t);
					e(n.initPlugins().then(() => n))
				})
			}
		}

		function In(t, e) {
			const n = Math.min(t.length, e.length);
			for (let o = 0; o < n; o++)
				if (t[o] != e[o]) return o;
			return t.length == e.length ? "same" : t.length < e.length ? "prefix" : "extension"
		}
		var Nn = function(t) {
			return tn(t, 4)
		};
		class On {
			constructor(t) {
				this.document = t, this.parent = null
			}
			get index() {
				let t;
				if (!this.parent) return null;
				if (-1 == (t = this.parent.getChildIndex(this))) throw new hn.b(
					"view-node-not-found-in-parent: The node's parent does not contain this node.", this);
				return t
			}
			get nextSibling() {
				const t = this.index;
				return null !== t && this.parent.getChild(t + 1) || null
			}
			get previousSibling() {
				const t = this.index;
				return null !== t && this.parent.getChild(t - 1) || null
			}
			get root() {
				let t = this;
				for (; t.parent;) t = t.parent;
				return t
			}
			isAttached() {
				return this.root.is("rootElement")
			}
			getPath() {
				const t = [];
				let e = this;
				for (; e.parent;) t.unshift(e.index), e = e.parent;
				return t
			}
			getAncestors(t = {
				includeSelf: !1,
				parentFirst: !1
			}) {
				const e = [];
				let n = t.includeSelf ? this : this.parent;
				for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
				return e
			}
			getCommonAncestor(t, e = {}) {
				const n = this.getAncestors(e),
					o = t.getAncestors(e);
				let i = 0;
				for (; n[i] == o[i] && n[i];) i++;
				return 0 === i ? null : n[i - 1]
			}
			isBefore(t) {
				if (this == t) return !1;
				if (this.root !== t.root) return !1;
				const e = this.getPath(),
					n = t.getPath(),
					o = In(e, n);
				switch (o) {
					case "prefix":
						return !0;
					case "extension":
						return !1;
					default:
						return e[o] < n[o]
				}
			}
			isAfter(t) {
				return this != t && (this.root === t.root && !this.isBefore(t))
			}
			_remove() {
				this.parent._removeChildren(this.index)
			}
			_fireChange(t, e) {
				this.fire("change:" + t, e), this.parent && this.parent._fireChange(t, e)
			}
			toJSON() {
				const t = Nn(this);
				return delete t.parent, t
			}
			is(t) {
				return "node" === t || "view:node" === t
			}
		}
		xn(On, mn);
		class Rn extends On {
			constructor(t, e) {
				super(t), this._textData = e
			}
			is(t) {
				return "text" === t || "view:text" === t || "node" === t || "view:node" === t
			}
			get data() {
				return this._textData
			}
			get _data() {
				return this.data
			}
			set _data(t) {
				this._fireChange("text", this), this._textData = t
			}
			isSimilar(t) {
				return t instanceof Rn && (this === t || this.data === t.data)
			}
			_clone() {
				return new Rn(this.document, this.data)
			}
		}
		class Dn {
			constructor(t, e, n) {
				if (this.textNode = t, e < 0 || e > t.data.length) throw new hn.b(
					"view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.", this);
				if (n < 0 || e + n > t.data.length) throw new hn.b(
					"view-textproxy-wrong-length: Given length value is incorrect.", this);
				this.data = t.data.substring(e, e + n), this.offsetInText = e
			}
			get offsetSize() {
				return this.data.length
			}
			get isPartial() {
				return this.data.length !== this.textNode.data.length
			}
			get parent() {
				return this.textNode.parent
			}
			get root() {
				return this.textNode.root
			}
			get document() {
				return this.textNode.document
			}
			is(t) {
				return "textProxy" === t || "view:textProxy" === t
			}
			getAncestors(t = {
				includeSelf: !1,
				parentFirst: !1
			}) {
				const e = [];
				let n = t.includeSelf ? this.textNode : this.parent;
				for (; null !== n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
				return e
			}
		}

		function Ln(t) {
			return yn(t) ? new Map(t) : function(t) {
				const e = new Map;
				for (const n in t) e.set(n, t[n]);
				return e
			}(t)
		}
		class jn {
			constructor(...t) {
				this._patterns = [], this.add(...t)
			}
			add(...t) {
				for (let e of t)("string" == typeof e || e instanceof RegExp) && (e = {
						name: e
					}), e.classes && ("string" == typeof e.classes || e.classes instanceof RegExp) && (e.classes = [e.classes]),
					this._patterns.push(e)
			}
			match(...t) {
				for (const e of t)
					for (const t of this._patterns) {
						const n = Vn(e, t);
						if (n) return {
							element: e,
							pattern: t,
							match: n
						}
					}
				return null
			}
			matchAll(...t) {
				const e = [];
				for (const n of t)
					for (const t of this._patterns) {
						const o = Vn(n, t);
						o && e.push({
							element: n,
							pattern: t,
							match: o
						})
					}
				return e.length > 0 ? e : null
			}
			getElementName() {
				if (1 !== this._patterns.length) return null;
				const t = this._patterns[0],
					e = t.name;
				return "function" == typeof t || !e || e instanceof RegExp ? null : e
			}
		}

		function Vn(t, e) {
			if ("function" == typeof e) return e(t);
			const n = {};
			return e.name && (n.name = function(t, e) {
				if (t instanceof RegExp) return t.test(e);
				return t === e
			}(e.name, t.name), !n.name) || e.attributes && (n.attributes = function(t, e) {
				const n = [];
				for (const o in t) {
					const i = t[o];
					if (!e.hasAttribute(o)) return null; {
						const t = e.getAttribute(o);
						if (!0 === i) n.push(o);
						else if (i instanceof RegExp) {
							if (!i.test(t)) return null;
							n.push(o)
						} else {
							if (t !== i) return null;
							n.push(o)
						}
					}
				}
				return n
			}(e.attributes, t), !n.attributes) ? null : !(e.classes && (n.classes = function(t, e) {
				const n = [];
				for (const o of t)
					if (o instanceof RegExp) {
						const t = e.getClassNames();
						for (const e of t) o.test(e) && n.push(e);
						if (0 === n.length) return null
					} else {
						if (!e.hasClass(o)) return null;
						n.push(o)
					} return n
			}(e.classes, t), !n.classes)) && (!(e.styles && (n.styles = function(t, e) {
				const n = [];
				for (const o in t) {
					const i = t[o];
					if (!e.hasStyle(o)) return null; {
						const t = e.getStyle(o);
						if (i instanceof RegExp) {
							if (!i.test(t)) return null;
							n.push(o)
						} else {
							if (t !== i) return null;
							n.push(o)
						}
					}
				}
				return n
			}(e.styles, t), !n.styles)) && n)
		}
		var zn = function(t) {
				return "symbol" == typeof t || p(t) && "[object Symbol]" == f(t)
			},
			Bn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			Fn = /^\w*$/;
		var Un = function(t, e) {
			if (Dt(t)) return !1;
			var n = typeof t;
			return !("number" != n && "symbol" != n && "boolean" != n && null != t && !zn(t)) || (Fn.test(t) || !Bn.test(t) ||
				null != e && t in Object(e))
		};

		function Hn(t, e) {
			if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
			var n = function() {
				var o = arguments,
					i = e ? e.apply(this, o) : o[0],
					r = n.cache;
				if (r.has(i)) return r.get(i);
				var s = t.apply(this, o);
				return n.cache = r.set(i, s) || r, s
			};
			return n.cache = new(Hn.Cache || kt), n
		}
		Hn.Cache = kt;
		var qn = Hn;
		var Wn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			Gn = /\\(\\)?/g,
			Yn = function(t) {
				var e = qn(t, (function(t) {
						return 500 === n.size && n.clear(), t
					})),
					n = e.cache;
				return e
			}((function(t) {
				var e = [];
				return 46 === t.charCodeAt(0) && e.push(""), t.replace(Wn, (function(t, n, o, i) {
					e.push(o ? i.replace(Gn, "$1") : n || t)
				})), e
			}));
		var $n = function(t, e) {
				for (var n = -1, o = null == t ? 0 : t.length, i = Array(o); ++n < o;) i[n] = e(t[n], n, t);
				return i
			},
			Kn = i ? i.prototype : void 0,
			Qn = Kn ? Kn.toString : void 0;
		var Jn = function t(e) {
			if ("string" == typeof e) return e;
			if (Dt(e)) return $n(e, t) + "";
			if (zn(e)) return Qn ? Qn.call(e) : "";
			var n = e + "";
			return "0" == n && 1 / e == -1 / 0 ? "-0" : n
		};
		var Zn = function(t) {
			return null == t ? "" : Jn(t)
		};
		var Xn = function(t, e) {
			return Dt(t) ? t : Un(t, e) ? [t] : Yn(Zn(t))
		};
		var to = function(t) {
			var e = null == t ? 0 : t.length;
			return e ? t[e - 1] : void 0
		};
		var eo = function(t) {
			if ("string" == typeof t || zn(t)) return t;
			var e = t + "";
			return "0" == e && 1 / t == -1 / 0 ? "-0" : e
		};
		var no = function(t, e) {
			for (var n = 0, o = (e = Xn(e, t)).length; null != t && n < o;) t = t[eo(e[n++])];
			return n && n == o ? t : void 0
		};
		var oo = function(t, e, n) {
			var o = -1,
				i = t.length;
			e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
			for (var r = Array(i); ++o < i;) r[o] = t[o + e];
			return r
		};
		var io = function(t, e) {
			return e.length < 2 ? t : no(t, oo(e, 0, -1))
		};
		var ro = function(t, e) {
			return e = Xn(e, t), null == (t = io(t, e)) || delete t[eo(to(e))]
		};
		var so = function(t, e) {
			return null == t || ro(t, e)
		};
		var ao = function(t, e, n) {
			var o = null == t ? void 0 : no(t, e);
			return void 0 === o ? n : o
		};
		var co = function(t, e, n) {
			(void 0 !== n && !A(t[e], n) || void 0 === n && !(e in t)) && Ct(t, e, n)
		};
		var lo = function(t) {
			return function(e, n, o) {
				for (var i = -1, r = Object(e), s = o(e), a = s.length; a--;) {
					var c = s[t ? a : ++i];
					if (!1 === n(r[c], c, r)) break
				}
				return e
			}
		}();
		var uo = function(t) {
			return p(t) && Xt(t)
		};
		var ho = function(t, e) {
			if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
		};
		var fo = function(t) {
			return Pt(t, re(t))
		};
		var go = function(t, e, n, o, i, r, s) {
			var a = ho(t, n),
				c = ho(e, n),
				l = s.get(c);
			if (l) co(t, n, l);
			else {
				var d = r ? r(a, c, n + "", t, e, s) : void 0,
					u = void 0 === d;
				if (u) {
					var h = Dt(c),
						f = !h && Object(Lt.a)(c),
						g = !h && !f && Wt(c);
					d = c, h || f || g ? Dt(a) ? d = a : uo(a) ? d = ce(a) : f ? (u = !1, d = Object(ae.a)(c, !0)) : g ? (u = !1,
							d = Ue(c, !0)) : d = [] : y(c) || Rt(c) ? (d = a, Rt(a) ? d = fo(a) : j(a) && !z(a) || (d = Ge(c))) : u = !
						1
				}
				u && (s.set(c, d), i(d, c, o, r, s), s.delete(c)), co(t, n, d)
			}
		};
		var mo = function t(e, n, o, i, r) {
			e !== n && lo(n, (function(s, a) {
				if (r || (r = new yt), j(s)) go(e, n, a, o, t, i, r);
				else {
					var c = i ? i(ho(e, a), s, a + "", e, n, r) : void 0;
					void 0 === c && (c = s), co(e, a, c)
				}
			}), re)
		};
		var po = function(t) {
			return t
		};
		var bo = function(t, e, n) {
				switch (n.length) {
					case 0:
						return t.call(e);
					case 1:
						return t.call(e, n[0]);
					case 2:
						return t.call(e, n[0], n[1]);
					case 3:
						return t.call(e, n[0], n[1], n[2])
				}
				return t.apply(e, n)
			},
			wo = Math.max;
		var ko = function(t, e, n) {
			return e = wo(void 0 === e ? t.length - 1 : e, 0),
				function() {
					for (var o = arguments, i = -1, r = wo(o.length - e, 0), s = Array(r); ++i < r;) s[i] = o[e + i];
					i = -1;
					for (var a = Array(e + 1); ++i < e;) a[i] = o[i];
					return a[e] = n(s), bo(t, this, a)
				}
		};
		var _o = function(t) {
				return function() {
					return t
				}
			},
			vo = At ? function(t, e) {
				return At(t, "toString", {
					configurable: !0,
					enumerable: !1,
					value: _o(e),
					writable: !0
				})
			} : po,
			yo = Date.now;
		var xo = function(t) {
			var e = 0,
				n = 0;
			return function() {
				var o = yo(),
					i = 16 - (o - n);
				if (n = o, i > 0) {
					if (++e >= 800) return arguments[0]
				} else e = 0;
				return t.apply(void 0, arguments)
			}
		}(vo);
		var Ao = function(t, e) {
			return xo(ko(t, e, po), t + "")
		};
		var Co = function(t, e, n) {
			if (!j(n)) return !1;
			var o = typeof e;
			return !!("number" == o ? Xt(n) && Vt(e, n.length) : "string" == o && e in n) && A(n[e], t)
		};
		var To = function(t) {
				return Ao((function(e, n) {
					var o = -1,
						i = n.length,
						r = i > 1 ? n[i - 1] : void 0,
						s = i > 2 ? n[2] : void 0;
					for (r = t.length > 3 && "function" == typeof r ? (i--, r) : void 0, s && Co(n[0], n[1], s) && (r = i < 3 ?
							void 0 : r, i = 1), e = Object(e); ++o < i;) {
						var a = n[o];
						a && t(e, a, o, r)
					}
					return e
				}))
			},
			So = To((function(t, e, n) {
				mo(t, e, n)
			}));
		var Po = function(t, e, n, o) {
			if (!j(t)) return t;
			for (var i = -1, r = (e = Xn(e, t)).length, s = r - 1, a = t; null != a && ++i < r;) {
				var c = eo(e[i]),
					l = n;
				if (i != s) {
					var d = a[c];
					void 0 === (l = o ? o(d, c, a) : void 0) && (l = j(d) ? d : Vt(e[i + 1]) ? [] : {})
				}
				St(a, c, l), a = a[c]
			}
			return t
		};
		var Eo = function(t, e, n) {
			return null == t ? t : Po(t, e, n)
		};
		class Mo {
			constructor(t) {
				this._styles = {}, this._styleProcessor = t
			}
			get isEmpty() {
				const t = Object.entries(this._styles);
				return !Array.from(t).length
			}
			get size() {
				return this.isEmpty ? 0 : this.getStyleNames().length
			}
			setTo(t) {
				this.clear();
				const e = Array.from(function(t) {
					let e = null,
						n = 0,
						o = 0,
						i = null;
					const r = new Map;
					if ("" === t) return r;
					";" != t.charAt(t.length - 1) && (t += ";");
					for (let s = 0; s < t.length; s++) {
						const a = t.charAt(s);
						if (null === e) switch (a) {
							case ":":
								i || (i = t.substr(n, s - n), o = s + 1);
								break;
							case '"':
							case "'":
								e = a;
								break;
							case ";":
								{
									const e = t.substr(o, s - o);i && r.set(i.trim(), e.trim()),
									i = null,
									n = s + 1;
									break
								}
						} else a === e && (e = null)
					}
					return r
				}(t).entries());
				for (const [t, n] of e) this._styleProcessor.toNormalizedForm(t, n, this._styles)
			}
			has(t) {
				if (this.isEmpty) return !1;
				const e = this._styleProcessor.getReducedForm(t, this._styles).find(([e]) => e === t);
				return Array.isArray(e)
			}
			set(t, e) {
				if (j(t))
					for (const [e, n] of Object.entries(t)) this._styleProcessor.toNormalizedForm(e, n, this._styles);
				else this._styleProcessor.toNormalizedForm(t, e, this._styles)
			}
			remove(t) {
				const e = No(t);
				so(this._styles, e), delete this._styles[t], this._cleanEmptyObjectsOnPath(e)
			}
			getNormalized(t) {
				return this._styleProcessor.getNormalized(t, this._styles)
			}
			toString() {
				return this.isEmpty ? "" : this._getStylesEntries().map(t => t.join(":")).sort().join(";") + ";"
			}
			getAsString(t) {
				if (this.isEmpty) return;
				if (this._styles[t] && !j(this._styles[t])) return this._styles[t];
				const e = this._styleProcessor.getReducedForm(t, this._styles).find(([e]) => e === t);
				return Array.isArray(e) ? e[1] : void 0
			}
			getStyleNames() {
				if (this.isEmpty) return [];
				return this._getStylesEntries().map(([t]) => t)
			}
			clear() {
				this._styles = {}
			}
			_getStylesEntries() {
				const t = [],
					e = Object.keys(this._styles);
				for (const n of e) t.push(...this._styleProcessor.getReducedForm(n, this._styles));
				return t
			}
			_cleanEmptyObjectsOnPath(t) {
				const e = t.split(".");
				if (!(e.length > 1)) return;
				const n = e.splice(0, e.length - 1).join("."),
					o = ao(this._styles, n);
				if (!o) return;
				!Array.from(Object.keys(o)).length && this.remove(n)
			}
		}
		class Io {
			constructor() {
				this._normalizers = new Map, this._extractors = new Map, this._reducers = new Map, this._consumables = new Map
			}
			toNormalizedForm(t, e, n) {
				if (j(e)) Oo(n, No(t), e);
				else if (this._normalizers.has(t)) {
					const o = this._normalizers.get(t),
						{
							path: i,
							value: r
						} = o(e);
					Oo(n, i, r)
				} else Oo(n, t, e)
			}
			getNormalized(t, e) {
				if (!t) return So({}, e);
				if (void 0 !== e[t]) return e[t];
				if (this._extractors.has(t)) {
					const n = this._extractors.get(t);
					if ("string" == typeof n) return ao(e, n);
					const o = n(t, e);
					if (o) return o
				}
				return ao(e, No(t))
			}
			getReducedForm(t, e) {
				const n = this.getNormalized(t, e);
				if (void 0 === n) return [];
				if (this._reducers.has(t)) {
					return this._reducers.get(t)(n)
				}
				return [
					[t, n]
				]
			}
			getRelatedStyles(t) {
				return this._consumables.get(t) || []
			}
			setNormalizer(t, e) {
				this._normalizers.set(t, e)
			}
			setExtractor(t, e) {
				this._extractors.set(t, e)
			}
			setReducer(t, e) {
				this._reducers.set(t, e)
			}
			setStyleRelation(t, e) {
				this._mapStyleNames(t, e);
				for (const n of e) this._mapStyleNames(n, [t])
			}
			_mapStyleNames(t, e) {
				this._consumables.has(t) || this._consumables.set(t, []), this._consumables.get(t).push(...e)
			}
		}

		function No(t) {
			return t.replace("-", ".")
		}

		function Oo(t, e, n) {
			let o = n;
			j(n) && (o = So({}, ao(t, e), n)), Eo(t, e, o)
		}
		class Ro extends On {
			constructor(t, e, n, o) {
				if (super(t), this.name = e, this._attrs = function(t) {
						t = Ln(t);
						for (const [e, n] of t) null === n ? t.delete(e) : "string" != typeof n && t.set(e, String(n));
						return t
					}(n), this._children = [], o && this._insertChild(0, o), this._classes = new Set, this._attrs.has("class")) {
					const t = this._attrs.get("class");
					Do(this._classes, t), this._attrs.delete("class")
				}
				this._styles = new Mo(this.document.stylesProcessor), this._attrs.has("style") && (this._styles.setTo(this._attrs
					.get("style")), this._attrs.delete("style")), this._customProperties = new Map
			}
			get childCount() {
				return this._children.length
			}
			get isEmpty() {
				return 0 === this._children.length
			}
			is(t, e = null) {
				return e ? e === this.name && ("element" === t || "view:element" === t) : t === this.name || t === "view:" +
					this.name || "element" === t || "view:element" === t || "node" === t || "view:node" === t
			}
			getChild(t) {
				return this._children[t]
			}
			getChildIndex(t) {
				return this._children.indexOf(t)
			}
			getChildren() {
				return this._children[Symbol.iterator]()
			}* getAttributeKeys() {
				this._classes.size > 0 && (yield "class"), this._styles.isEmpty || (yield "style"), yield* this._attrs.keys()
			}* getAttributes() {
				yield* this._attrs.entries(), this._classes.size > 0 && (yield ["class", this.getAttribute("class")]), this._styles
					.isEmpty || (yield ["style", this.getAttribute("style")])
			}
			getAttribute(t) {
				if ("class" == t) return this._classes.size > 0 ? [...this._classes].join(" ") : void 0;
				if ("style" == t) {
					const t = this._styles.toString();
					return "" == t ? void 0 : t
				}
				return this._attrs.get(t)
			}
			hasAttribute(t) {
				return "class" == t ? this._classes.size > 0 : "style" == t ? !this._styles.isEmpty : this._attrs.has(t)
			}
			isSimilar(t) {
				if (!(t instanceof Ro)) return !1;
				if (this === t) return !0;
				if (this.name != t.name) return !1;
				if (this._attrs.size !== t._attrs.size || this._classes.size !== t._classes.size || this._styles.size !== t._styles
					.size) return !1;
				for (const [e, n] of this._attrs)
					if (!t._attrs.has(e) || t._attrs.get(e) !== n) return !1;
				for (const e of this._classes)
					if (!t._classes.has(e)) return !1;
				for (const e of this._styles.getStyleNames())
					if (!t._styles.has(e) || t._styles.getAsString(e) !== this._styles.getAsString(e)) return !1;
				return !0
			}
			hasClass(...t) {
				for (const e of t)
					if (!this._classes.has(e)) return !1;
				return !0
			}
			getClassNames() {
				return this._classes.keys()
			}
			getStyle(t) {
				return this._styles.getAsString(t)
			}
			getNormalizedStyle(t) {
				return this._styles.getNormalized(t)
			}
			getStyleNames() {
				return this._styles.getStyleNames()
			}
			hasStyle(...t) {
				for (const e of t)
					if (!this._styles.has(e)) return !1;
				return !0
			}
			findAncestor(...t) {
				const e = new jn(...t);
				let n = this.parent;
				for (; n;) {
					if (e.match(n)) return n;
					n = n.parent
				}
				return null
			}
			getCustomProperty(t) {
				return this._customProperties.get(t)
			}* getCustomProperties() {
				yield* this._customProperties.entries()
			}
			getIdentity() {
				const t = Array.from(this._classes).sort().join(","),
					e = this._styles.toString(),
					n = Array.from(this._attrs).map(t => `${t[0]}="${t[1]}"`).sort().join(" ");
				return this.name + ("" == t ? "" : ` class="${t}"`) + (e ? ` style="${e}"` : "") + ("" == n ? "" : " " + n)
			}
			_clone(t = !1) {
				const e = [];
				if (t)
					for (const n of this.getChildren()) e.push(n._clone(t));
				const n = new this.constructor(this.document, this.name, this._attrs, e);
				return n._classes = new Set(this._classes), n._styles.set(this._styles.getNormalized()), n._customProperties =
					new Map(this._customProperties), n.getFillerOffset = this.getFillerOffset, n
			}
			_appendChild(t) {
				return this._insertChild(this.childCount, t)
			}
			_insertChild(t, e) {
				this._fireChange("children", this);
				let n = 0;
				const o = function(t, e) {
					if ("string" == typeof e) return [new Rn(t, e)];
					yn(e) || (e = [e]);
					return Array.from(e).map(e => "string" == typeof e ? new Rn(t, e) : e instanceof Dn ? new Rn(t, e.data) : e)
				}(this.document, e);
				for (const e of o) null !== e.parent && e._remove(), e.parent = this, e.document = this.document, this._children
					.splice(t, 0, e), t++, n++;
				return n
			}
			_removeChildren(t, e = 1) {
				this._fireChange("children", this);
				for (let n = t; n < t + e; n++) this._children[n].parent = null;
				return this._children.splice(t, e)
			}
			_setAttribute(t, e) {
				e = String(e), this._fireChange("attributes", this), "class" == t ? Do(this._classes, e) : "style" == t ?
					this._styles.setTo(e) : this._attrs.set(t, e)
			}
			_removeAttribute(t) {
				return this._fireChange("attributes", this), "class" == t ? this._classes.size > 0 && (this._classes.clear(),
					!0) : "style" == t ? !this._styles.isEmpty && (this._styles.clear(), !0) : this._attrs.delete(t)
			}
			_addClass(t) {
				this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._classes.add(t))
			}
			_removeClass(t) {
				this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._classes.delete(t))
			}
			_setStyle(t, e) {
				this._fireChange("attributes", this), this._styles.set(t, e)
			}
			_removeStyle(t) {
				this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._styles.remove(t))
			}
			_setCustomProperty(t, e) {
				this._customProperties.set(t, e)
			}
			_removeCustomProperty(t) {
				return this._customProperties.delete(t)
			}
		}

		function Do(t, e) {
			const n = e.split(/\s+/);
			t.clear(), n.forEach(e => t.add(e))
		}
		class Lo extends Ro {
			constructor(t, e, n, o) {
				super(t, e, n, o), this.getFillerOffset = jo
			}
			is(t, e = null) {
				return e ? e === this.name && ("containerElement" === t || "view:containerElement" === t || "element" === t ||
						"view:element" === t) : "containerElement" === t || "view:containerElement" === t || t === this.name || t ===
					"view:" + this.name || "element" === t || "view:element" === t || "node" === t || "view:node" === t
			}
		}

		function jo() {
			const t = [...this.getChildren()],
				e = t[this.childCount - 1];
			if (e && e.is("element", "br")) return this.childCount;
			for (const e of t)
				if (!e.is("uiElement")) return null;
			return this.childCount
		}
		var Vo = To((function(t, e) {
			Pt(e, re(e), t)
		}));
		const zo = Symbol("observableProperties"),
			Bo = Symbol("boundObservables"),
			Fo = Symbol("boundProperties"),
			Uo = {
				set(t, e) {
					if (j(t)) return void Object.keys(t).forEach(e => {
						this.set(e, t[e])
					}, this);
					qo(this);
					const n = this[zo];
					if (t in this && !n.has(t)) throw new hn.b(
						"observable-set-cannot-override: Cannot override an existing property.", this);
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						get: () => n.get(t),
						set(e) {
							const o = n.get(t);
							let i = this.fire("set:" + t, t, e, o);
							void 0 === i && (i = e), o === i && n.has(t) || (n.set(t, i), this.fire("change:" + t, t, i, o))
						}
					}), this[t] = e
				},
				bind(...t) {
					if (!t.length || !Yo(t)) throw new hn.b("observable-bind-wrong-properties: All properties must be strings.",
						this);
					if (new Set(t).size !== t.length) throw new hn.b(
						"observable-bind-duplicate-properties: Properties must be unique.", this);
					qo(this);
					const e = this[Fo];
					t.forEach(t => {
						if (e.has(t)) throw new hn.b("observable-bind-rebind: Cannot bind the same property more than once.", this)
					});
					const n = new Map;
					return t.forEach(t => {
						const o = {
							property: t,
							to: []
						};
						e.set(t, o), n.set(t, o)
					}), {
						to: Wo,
						toMany: Go,
						_observable: this,
						_bindProperties: t,
						_to: [],
						_bindings: n
					}
				},
				unbind(...t) {
					if (!this[zo]) return;
					const e = this[Fo],
						n = this[Bo];
					if (t.length) {
						if (!Yo(t)) throw new hn.b("observable-unbind-wrong-properties: Properties must be strings.", this);
						t.forEach(t => {
							const o = e.get(t);
							if (!o) return;
							let i, r, s, a;
							o.to.forEach(t => {
								i = t[0], r = t[1], s = n.get(i), a = s[r], a.delete(o), a.size || delete s[r], Object.keys(s).length ||
									(n.delete(i), this.stopListening(i, "change"))
							}), e.delete(t)
						})
					} else n.forEach((t, e) => {
						this.stopListening(e, "change")
					}), n.clear(), e.clear()
				},
				decorate(t) {
					const e = this[t];
					if (!e) throw new hn.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.",
						this, {
							object: this,
							methodName: t
						});
					this.on(t, (t, n) => {
						t.return = e.apply(this, n)
					}), this[t] = function(...e) {
						return this.fire(t, e)
					}
				}
			};
		Vo(Uo, mn);
		var Ho = Uo;

		function qo(t) {
			t[zo] || (Object.defineProperty(t, zo, {
				value: new Map
			}), Object.defineProperty(t, Bo, {
				value: new Map
			}), Object.defineProperty(t, Fo, {
				value: new Map
			}))
		}

		function Wo(...t) {
			const e = function(...t) {
					if (!t.length) throw new hn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.", null);
					const e = {
						to: []
					};
					let n;
					"function" == typeof t[t.length - 1] && (e.callback = t.pop());
					return t.forEach(t => {
						if ("string" == typeof t) n.properties.push(t);
						else {
							if ("object" != typeof t) throw new hn.b(
								"observable-bind-to-parse-error: Invalid argument syntax in `to()`.", null);
							n = {
								observable: t,
								properties: []
							}, e.to.push(n)
						}
					}), e
				}(...t),
				n = Array.from(this._bindings.keys()),
				o = n.length;
			if (!e.callback && e.to.length > 1) throw new hn.b(
				"observable-bind-to-no-callback: Binding multiple observables only possible with callback.", this);
			if (o > 1 && e.callback) throw new hn.b(
				"observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.",
				this);
			var i;
			e.to.forEach(t => {
					if (t.properties.length && t.properties.length !== o) throw new hn.b(
						"observable-bind-to-properties-length: The number of properties must match.", this);
					t.properties.length || (t.properties = this._bindProperties)
				}), this._to = e.to, e.callback && (this._bindings.get(n[0]).callback = e.callback), i = this._observable,
				this._to.forEach(t => {
					const e = i[Bo];
					let n;
					e.get(t.observable) || i.listenTo(t.observable, "change", (o, r) => {
						n = e.get(t.observable)[r], n && n.forEach(t => {
							$o(i, t.property)
						})
					})
				}),
				function(t) {
					let e;
					t._bindings.forEach((n, o) => {
						t._to.forEach(i => {
							e = i.properties[n.callback ? 0 : t._bindProperties.indexOf(o)], n.to.push([i.observable, e]),
								function(t, e, n, o) {
									const i = t[Bo],
										r = i.get(n),
										s = r || {};
									s[o] || (s[o] = new Set);
									s[o].add(e), r || i.set(n, s)
								}(t._observable, n, i.observable, e)
						})
					})
				}(this), this._bindProperties.forEach(t => {
					$o(this._observable, t)
				})
		}

		function Go(t, e, n) {
			if (this._bindings.size > 1) throw new hn.b(
				"observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().", this);
			this.to(... function(t, e) {
				const n = t.map(t => [t, e]);
				return Array.prototype.concat.apply([], n)
			}(t, e), n)
		}

		function Yo(t) {
			return t.every(t => "string" == typeof t)
		}

		function $o(t, e) {
			const n = t[Fo].get(e);
			let o;
			n.callback ? o = n.callback.apply(t, n.to.map(t => t[0][t[1]])) : (o = n.to[0], o = o[0][o[1]]), Object.prototype
				.hasOwnProperty.call(t, e) ? t[e] = o : t.set(e, o)
		}
		class Ko extends Lo {
			constructor(t, e, n, o) {
				super(t, e, n, o), this.set("isReadOnly", !1), this.set("isFocused", !1), this.bind("isReadOnly").to(t), this
					.bind("isFocused").to(t, "isFocused", e => e && t.selection.editableElement == this), this.listenTo(t.selection,
						"change", () => {
							this.isFocused = t.isFocused && t.selection.editableElement == this
						})
			}
			is(t, e = null) {
				return e ? e === this.name && ("editableElement" === t || "view:editableElement" === t || "containerElement" ===
						t || "view:containerElement" === t || "element" === t || "view:element" === t) : "editableElement" === t ||
					"view:editableElement" === t || "containerElement" === t || "view:containerElement" === t || t === this.name ||
					t === "view:" + this.name || "element" === t || "view:element" === t || "node" === t || "view:node" === t
			}
			destroy() {
				this.stopListening()
			}
		}
		xn(Ko, Ho);
		const Qo = Symbol("rootName");
		class Jo extends Ko {
			constructor(t, e) {
				super(t, e), this.rootName = "main"
			}
			is(t, e = null) {
				return e ? e === this.name && ("rootElement" === t || "view:rootElement" === t || "editableElement" === t ||
						"view:editableElement" === t || "containerElement" === t || "view:containerElement" === t || "element" ===
						t || "view:element" === t) : "rootElement" === t || "view:rootElement" === t || "editableElement" === t ||
					"view:editableElement" === t || "containerElement" === t || "view:containerElement" === t || t === this.name ||
					t === "view:" + this.name || "element" === t || "view:element" === t || "node" === t || "view:node" === t
			}
			get rootName() {
				return this.getCustomProperty(Qo)
			}
			set rootName(t) {
				this._setCustomProperty(Qo, t)
			}
			set _name(t) {
				this.name = t
			}
		}
		class Zo {
			constructor(t = {}) {
				if (!t.boundaries && !t.startPosition) throw new hn.b(
					"view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.", null);
				if (t.direction && "forward" != t.direction && "backward" != t.direction) throw new hn.b(
					"view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", t.startPosition, {
						direction: t.direction
					});
				this.boundaries = t.boundaries || null, t.startPosition ? this.position = Xo._createAt(t.startPosition) :
					this.position = Xo._createAt(t.boundaries["backward" == t.direction ? "end" : "start"]), this.direction = t.direction ||
					"forward", this.singleCharacters = !!t.singleCharacters, this.shallow = !!t.shallow, this.ignoreElementEnd = !
					!t.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this
					._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null
			} [Symbol.iterator]() {
				return this
			}
			skip(t) {
				let e, n, o;
				do {
					o = this.position, ({
						done: e,
						value: n
					} = this.next())
				} while (!e && t(n));
				e || (this.position = o)
			}
			next() {
				return "forward" == this.direction ? this._next() : this._previous()
			}
			_next() {
				let t = this.position.clone();
				const e = this.position,
					n = t.parent;
				if (null === n.parent && t.offset === n.childCount) return {
					done: !0
				};
				if (n === this._boundaryEndParent && t.offset == this.boundaries.end.offset) return {
					done: !0
				};
				let o;
				if (n instanceof Rn) {
					if (t.isAtEnd) return this.position = Xo._createAfter(n), this._next();
					o = n.data[t.offset]
				} else o = n.getChild(t.offset);
				if (o instanceof Ro) return this.shallow ? t.offset++ : t = new Xo(o, 0), this.position = t, this._formatReturnValue(
					"elementStart", o, e, t, 1);
				if (o instanceof Rn) {
					if (this.singleCharacters) return t = new Xo(o, 0), this.position = t, this._next(); {
						let n, i = o.data.length;
						return o == this._boundaryEndParent ? (i = this.boundaries.end.offset, n = new Dn(o, 0, i), t = Xo._createAfter(
							n)) : (n = new Dn(o, 0, o.data.length), t.offset++), this.position = t, this._formatReturnValue("text", n,
							e, t, i)
					}
				}
				if ("string" == typeof o) {
					let o;
					if (this.singleCharacters) o = 1;
					else {
						o = (n === this._boundaryEndParent ? this.boundaries.end.offset : n.data.length) - t.offset
					}
					const i = new Dn(n, t.offset, o);
					return t.offset += o, this.position = t, this._formatReturnValue("text", i, e, t, o)
				}
				return t = Xo._createAfter(n), this.position = t, this.ignoreElementEnd ? this._next() : this._formatReturnValue(
					"elementEnd", n, e, t)
			}
			_previous() {
				let t = this.position.clone();
				const e = this.position,
					n = t.parent;
				if (null === n.parent && 0 === t.offset) return {
					done: !0
				};
				if (n == this._boundaryStartParent && t.offset == this.boundaries.start.offset) return {
					done: !0
				};
				let o;
				if (n instanceof Rn) {
					if (t.isAtStart) return this.position = Xo._createBefore(n), this._previous();
					o = n.data[t.offset - 1]
				} else o = n.getChild(t.offset - 1);
				if (o instanceof Ro) return this.shallow ? (t.offset--, this.position = t, this._formatReturnValue(
					"elementStart", o, e, t, 1)) : (t = new Xo(o, o.childCount), this.position = t, this.ignoreElementEnd ?
					this._previous() : this._formatReturnValue("elementEnd", o, e, t));
				if (o instanceof Rn) {
					if (this.singleCharacters) return t = new Xo(o, o.data.length), this.position = t, this._previous(); {
						let n, i = o.data.length;
						if (o == this._boundaryStartParent) {
							const e = this.boundaries.start.offset;
							n = new Dn(o, e, o.data.length - e), i = n.data.length, t = Xo._createBefore(n)
						} else n = new Dn(o, 0, o.data.length), t.offset--;
						return this.position = t, this._formatReturnValue("text", n, e, t, i)
					}
				}
				if ("string" == typeof o) {
					let o;
					if (this.singleCharacters) o = 1;
					else {
						const e = n === this._boundaryStartParent ? this.boundaries.start.offset : 0;
						o = t.offset - e
					}
					t.offset -= o;
					const i = new Dn(n, t.offset, o);
					return this.position = t, this._formatReturnValue("text", i, e, t, o)
				}
				return t = Xo._createBefore(n), this.position = t, this._formatReturnValue("elementStart", n, e, t, 1)
			}
			_formatReturnValue(t, e, n, o, i) {
				return e instanceof Dn && (e.offsetInText + e.data.length == e.textNode.data.length && ("forward" != this.direction ||
					this.boundaries && this.boundaries.end.isEqual(this.position) ? n = Xo._createAfter(e.textNode) : (o = Xo._createAfter(
						e.textNode), this.position = o)), 0 === e.offsetInText && ("backward" != this.direction || this.boundaries &&
					this.boundaries.start.isEqual(this.position) ? n = Xo._createBefore(e.textNode) : (o = Xo._createBefore(e.textNode),
						this.position = o))), {
					done: !1,
					value: {
						type: t,
						item: e,
						previousPosition: n,
						nextPosition: o,
						length: i
					}
				}
			}
		}
		class Xo {
			constructor(t, e) {
				this.parent = t, this.offset = e
			}
			get nodeAfter() {
				return this.parent.is("text") ? null : this.parent.getChild(this.offset) || null
			}
			get nodeBefore() {
				return this.parent.is("text") ? null : this.parent.getChild(this.offset - 1) || null
			}
			get isAtStart() {
				return 0 === this.offset
			}
			get isAtEnd() {
				const t = this.parent.is("text") ? this.parent.data.length : this.parent.childCount;
				return this.offset === t
			}
			get root() {
				return this.parent.root
			}
			get editableElement() {
				let t = this.parent;
				for (; !(t instanceof Ko);) {
					if (!t.parent) return null;
					t = t.parent
				}
				return t
			}
			getShiftedBy(t) {
				const e = Xo._createAt(this),
					n = e.offset + t;
				return e.offset = n < 0 ? 0 : n, e
			}
			getLastMatchingPosition(t, e = {}) {
				e.startPosition = this;
				const n = new Zo(e);
				return n.skip(t), n.position
			}
			getAncestors() {
				return this.parent.is("documentFragment") ? [this.parent] : this.parent.getAncestors({
					includeSelf: !0
				})
			}
			getCommonAncestor(t) {
				const e = this.getAncestors(),
					n = t.getAncestors();
				let o = 0;
				for (; e[o] == n[o] && e[o];) o++;
				return 0 === o ? null : e[o - 1]
			}
			is(t) {
				return "position" === t || "view:position" === t
			}
			isEqual(t) {
				return this.parent == t.parent && this.offset == t.offset
			}
			isBefore(t) {
				return "before" == this.compareWith(t)
			}
			isAfter(t) {
				return "after" == this.compareWith(t)
			}
			compareWith(t) {
				if (this.root !== t.root) return "different";
				if (this.isEqual(t)) return "same";
				const e = this.parent.is("node") ? this.parent.getPath() : [],
					n = t.parent.is("node") ? t.parent.getPath() : [];
				e.push(this.offset), n.push(t.offset);
				const o = In(e, n);
				switch (o) {
					case "prefix":
						return "before";
					case "extension":
						return "after";
					default:
						return e[o] < n[o] ? "before" : "after"
				}
			}
			getWalker(t = {}) {
				return t.startPosition = this, new Zo(t)
			}
			clone() {
				return new Xo(this.parent, this.offset)
			}
			static _createAt(t, e) {
				if (t instanceof Xo) return new this(t.parent, t.offset); {
					const n = t;
					if ("end" == e) e = n.is("text") ? n.data.length : n.childCount;
					else {
						if ("before" == e) return this._createBefore(n);
						if ("after" == e) return this._createAfter(n);
						if (0 !== e && !e) throw new hn.b(
							"view-createPositionAt-offset-required: View#createPositionAt() requires the offset when the first parameter is a view item.",
							n)
					}
					return new Xo(n, e)
				}
			}
			static _createAfter(t) {
				if (t.is("textProxy")) return new Xo(t.textNode, t.offsetInText + t.data.length);
				if (!t.parent) throw new hn.b("view-position-after-root: You can not make position after root.", t, {
					root: t
				});
				return new Xo(t.parent, t.index + 1)
			}
			static _createBefore(t) {
				if (t.is("textProxy")) return new Xo(t.textNode, t.offsetInText);
				if (!t.parent) throw new hn.b("view-position-before-root: You can not make position before root.", t, {
					root: t
				});
				return new Xo(t.parent, t.index)
			}
		}
		class ti {
			constructor(t, e = null) {
				this.start = t.clone(), this.end = e ? e.clone() : t.clone()
			}*[Symbol.iterator]() {
				yield* new Zo({
					boundaries: this,
					ignoreElementEnd: !0
				})
			}
			get isCollapsed() {
				return this.start.isEqual(this.end)
			}
			get isFlat() {
				return this.start.parent === this.end.parent
			}
			get root() {
				return this.start.root
			}
			getEnlarged() {
				let t = this.start.getLastMatchingPosition(ei, {
						direction: "backward"
					}),
					e = this.end.getLastMatchingPosition(ei);
				return t.parent.is("text") && t.isAtStart && (t = Xo._createBefore(t.parent)), e.parent.is("text") && e.isAtEnd &&
					(e = Xo._createAfter(e.parent)), new ti(t, e)
			}
			getTrimmed() {
				let t = this.start.getLastMatchingPosition(ei);
				if (t.isAfter(this.end) || t.isEqual(this.end)) return new ti(t, t);
				let e = this.end.getLastMatchingPosition(ei, {
					direction: "backward"
				});
				const n = t.nodeAfter,
					o = e.nodeBefore;
				return n && n.is("text") && (t = new Xo(n, 0)), o && o.is("text") && (e = new Xo(o, o.data.length)), new ti(t,
					e)
			}
			isEqual(t) {
				return this == t || this.start.isEqual(t.start) && this.end.isEqual(t.end)
			}
			containsPosition(t) {
				return t.isAfter(this.start) && t.isBefore(this.end)
			}
			containsRange(t, e = !1) {
				t.isCollapsed && (e = !1);
				const n = this.containsPosition(t.start) || e && this.start.isEqual(t.start),
					o = this.containsPosition(t.end) || e && this.end.isEqual(t.end);
				return n && o
			}
			getDifference(t) {
				const e = [];
				return this.isIntersecting(t) ? (this.containsPosition(t.start) && e.push(new ti(this.start, t.start)), this.containsPosition(
					t.end) && e.push(new ti(t.end, this.end))) : e.push(this.clone()), e
			}
			getIntersection(t) {
				if (this.isIntersecting(t)) {
					let e = this.start,
						n = this.end;
					return this.containsPosition(t.start) && (e = t.start), this.containsPosition(t.end) && (n = t.end), new ti(
						e, n)
				}
				return null
			}
			getWalker(t = {}) {
				return t.boundaries = this, new Zo(t)
			}
			getCommonAncestor() {
				return this.start.getCommonAncestor(this.end)
			}
			getContainedElement() {
				if (this.isCollapsed) return null;
				let t = this.start.nodeAfter,
					e = this.end.nodeBefore;
				return this.start.parent.is("text") && this.start.isAtEnd && this.start.parent.nextSibling && (t = this.start
						.parent.nextSibling), this.end.parent.is("text") && this.end.isAtStart && this.end.parent.previousSibling &&
					(e = this.end.parent.previousSibling), t && t.is("element") && t === e ? t : null
			}
			clone() {
				return new ti(this.start, this.end)
			}* getItems(t = {}) {
				t.boundaries = this, t.ignoreElementEnd = !0;
				const e = new Zo(t);
				for (const t of e) yield t.item
			}* getPositions(t = {}) {
				t.boundaries = this;
				const e = new Zo(t);
				yield e.position;
				for (const t of e) yield t.nextPosition
			}
			is(t) {
				return "range" === t || "view:range" === t
			}
			isIntersecting(t) {
				return this.start.isBefore(t.end) && this.end.isAfter(t.start)
			}
			static _createFromParentsAndOffsets(t, e, n, o) {
				return new this(new Xo(t, e), new Xo(n, o))
			}
			static _createFromPositionAndShift(t, e) {
				const n = t,
					o = t.getShiftedBy(e);
				return e > 0 ? new this(n, o) : new this(o, n)
			}
			static _createIn(t) {
				return this._createFromParentsAndOffsets(t, 0, t, t.childCount)
			}
			static _createOn(t) {
				const e = t.is("textProxy") ? t.offsetSize : 1;
				return this._createFromPositionAndShift(Xo._createBefore(t), e)
			}
		}

		function ei(t) {
			return !(!t.item.is("attributeElement") && !t.item.is("uiElement"))
		}

		function ni(t) {
			let e = 0;
			for (const n of t) e++;
			return e
		}
		class oi {
			constructor(t = null, e, n) {
				this._ranges = [], this._lastRangeBackward = !1, this._isFake = !1, this._fakeSelectionLabel = "", this.setTo(
					t, e, n)
			}
			get isFake() {
				return this._isFake
			}
			get fakeSelectionLabel() {
				return this._fakeSelectionLabel
			}
			get anchor() {
				if (!this._ranges.length) return null;
				const t = this._ranges[this._ranges.length - 1];
				return (this._lastRangeBackward ? t.end : t.start).clone()
			}
			get focus() {
				if (!this._ranges.length) return null;
				const t = this._ranges[this._ranges.length - 1];
				return (this._lastRangeBackward ? t.start : t.end).clone()
			}
			get isCollapsed() {
				return 1 === this.rangeCount && this._ranges[0].isCollapsed
			}
			get rangeCount() {
				return this._ranges.length
			}
			get isBackward() {
				return !this.isCollapsed && this._lastRangeBackward
			}
			get editableElement() {
				return this.anchor ? this.anchor.editableElement : null
			}* getRanges() {
				for (const t of this._ranges) yield t.clone()
			}
			getFirstRange() {
				let t = null;
				for (const e of this._ranges) t && !e.start.isBefore(t.start) || (t = e);
				return t ? t.clone() : null
			}
			getLastRange() {
				let t = null;
				for (const e of this._ranges) t && !e.end.isAfter(t.end) || (t = e);
				return t ? t.clone() : null
			}
			getFirstPosition() {
				const t = this.getFirstRange();
				return t ? t.start.clone() : null
			}
			getLastPosition() {
				const t = this.getLastRange();
				return t ? t.end.clone() : null
			}
			isEqual(t) {
				if (this.isFake != t.isFake) return !1;
				if (this.isFake && this.fakeSelectionLabel != t.fakeSelectionLabel) return !1;
				if (this.rangeCount != t.rangeCount) return !1;
				if (0 === this.rangeCount) return !0;
				if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) return !1;
				for (const e of this._ranges) {
					let n = !1;
					for (const o of t._ranges)
						if (e.isEqual(o)) {
							n = !0;
							break
						} if (!n) return !1
				}
				return !0
			}
			isSimilar(t) {
				if (this.isBackward != t.isBackward) return !1;
				const e = ni(this.getRanges());
				if (e != ni(t.getRanges())) return !1;
				if (0 == e) return !0;
				for (let e of this.getRanges()) {
					e = e.getTrimmed();
					let n = !1;
					for (let o of t.getRanges())
						if (o = o.getTrimmed(), e.start.isEqual(o.start) && e.end.isEqual(o.end)) {
							n = !0;
							break
						} if (!n) return !1
				}
				return !0
			}
			getSelectedElement() {
				return 1 !== this.rangeCount ? null : this.getFirstRange().getContainedElement()
			}
			setTo(t, e, n) {
				if (null === t) this._setRanges([]), this._setFakeOptions(e);
				else if (t instanceof oi || t instanceof ii) this._setRanges(t.getRanges(), t.isBackward), this._setFakeOptions({
					fake: t.isFake,
					label: t.fakeSelectionLabel
				});
				else if (t instanceof ti) this._setRanges([t], e && e.backward), this._setFakeOptions(e);
				else if (t instanceof Xo) this._setRanges([new ti(t)]), this._setFakeOptions(e);
				else if (t instanceof On) {
					const o = !!n && !!n.backward;
					let i;
					if (void 0 === e) throw new hn.b(
						"view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.",
						this);
					i = "in" == e ? ti._createIn(t) : "on" == e ? ti._createOn(t) : new ti(Xo._createAt(t, e)), this._setRanges(
						[i], o), this._setFakeOptions(n)
				} else {
					if (!yn(t)) throw new hn.b("view-selection-setTo-not-selectable: Cannot set selection to given place.", this);
					this._setRanges(t, e && e.backward), this._setFakeOptions(e)
				}
				this.fire("change")
			}
			setFocus(t, e) {
				if (null === this.anchor) throw new hn.b(
					"view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.", this
				);
				const n = Xo._createAt(t, e);
				if ("same" == n.compareWith(this.focus)) return;
				const o = this.anchor;
				this._ranges.pop(), "before" == n.compareWith(o) ? this._addRange(new ti(n, o), !0) : this._addRange(new ti(o,
					n)), this.fire("change")
			}
			is(t) {
				return "selection" === t || "view:selection" === t
			}
			_setRanges(t, e = !1) {
				t = Array.from(t), this._ranges = [];
				for (const e of t) this._addRange(e);
				this._lastRangeBackward = !!e
			}
			_setFakeOptions(t = {}) {
				this._isFake = !!t.fake, this._fakeSelectionLabel = t.fake && t.label || ""
			}
			_addRange(t, e = !1) {
				if (!(t instanceof ti)) throw new hn.b(
					"view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range",
					this);
				this._pushRange(t), this._lastRangeBackward = !!e
			}
			_pushRange(t) {
				for (const e of this._ranges)
					if (t.isIntersecting(e)) throw new hn.b(
						"view-selection-range-intersects: Trying to add a range that intersects with another range from selection.",
						this, {
							addedRange: t,
							intersectingRange: e
						});
				this._ranges.push(new ti(t.start, t.end))
			}
		}
		xn(oi, mn);
		class ii {
			constructor(t = null, e, n) {
				this._selection = new oi, this._selection.delegate("change").to(this), this._selection.setTo(t, e, n)
			}
			get isFake() {
				return this._selection.isFake
			}
			get fakeSelectionLabel() {
				return this._selection.fakeSelectionLabel
			}
			get anchor() {
				return this._selection.anchor
			}
			get focus() {
				return this._selection.focus
			}
			get isCollapsed() {
				return this._selection.isCollapsed
			}
			get rangeCount() {
				return this._selection.rangeCount
			}
			get isBackward() {
				return this._selection.isBackward
			}
			get editableElement() {
				return this._selection.editableElement
			}
			get _ranges() {
				return this._selection._ranges
			}* getRanges() {
				yield* this._selection.getRanges()
			}
			getFirstRange() {
				return this._selection.getFirstRange()
			}
			getLastRange() {
				return this._selection.getLastRange()
			}
			getFirstPosition() {
				return this._selection.getFirstPosition()
			}
			getLastPosition() {
				return this._selection.getLastPosition()
			}
			getSelectedElement() {
				return this._selection.getSelectedElement()
			}
			isEqual(t) {
				return this._selection.isEqual(t)
			}
			isSimilar(t) {
				return this._selection.isSimilar(t)
			}
			is(t) {
				return "selection" === t || "documentSelection" == t || "view:selection" == t || "view:documentSelection" ==
					t
			}
			_setTo(t, e, n) {
				this._selection.setTo(t, e, n)
			}
			_setFocus(t, e) {
				this._selection.setFocus(t, e)
			}
		}
		xn(ii, mn);
		class ri {
			constructor(t) {
				this.selection = new ii, this.roots = new An({
					idProperty: "rootName"
				}), this.stylesProcessor = t, this.set("isReadOnly", !1), this.set("isFocused", !1), this.set("isComposing",
					!1), this._postFixers = new Set
			}
			getRoot(t = "main") {
				return this.roots.get(t)
			}
			registerPostFixer(t) {
				this._postFixers.add(t)
			}
			destroy() {
				this.roots.map(t => t.destroy()), this.stopListening()
			}
			_callPostFixers(t) {
				let e = !1;
				do {
					for (const n of this._postFixers)
						if (e = n(t), e) break
				} while (e)
			}
		}
		xn(ri, Ho);
		class si extends Ro {
			constructor(t, e, n, o) {
				super(t, e, n, o), this.getFillerOffset = ai, this._priority = 10, this._id = null, this._clonesGroup = null
			}
			get priority() {
				return this._priority
			}
			get id() {
				return this._id
			}
			getElementsWithSameId() {
				if (null === this.id) throw new hn.b(
					"attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.",
					this);
				return new Set(this._clonesGroup)
			}
			is(t, e = null) {
				return e ? e === this.name && ("attributeElement" === t || "view:attributeElement" === t || "element" === t ||
						"view:element" === t) : "attributeElement" === t || "view:attributeElement" === t || t === this.name || t ===
					"view:" + this.name || "element" === t || "view:element" === t || "node" === t || "view:node" === t
			}
			isSimilar(t) {
				return null !== this.id || null !== t.id ? this.id === t.id : super.isSimilar(t) && this.priority == t.priority
			}
			_clone(t) {
				const e = super._clone(t);
				return e._priority = this._priority, e._id = this._id, e
			}
		}

		function ai() {
			if (ci(this)) return null;
			let t = this.parent;
			for (; t && t.is("attributeElement");) {
				if (ci(t) > 1) return null;
				t = t.parent
			}
			return !t || ci(t) > 1 ? null : this.childCount
		}

		function ci(t) {
			return Array.from(t.getChildren()).filter(t => !t.is("uiElement")).length
		}
		si.DEFAULT_PRIORITY = 10;
		class li extends Ro {
			constructor(t, e, n, o) {
				super(t, e, n, o), this.getFillerOffset = di
			}
			is(t, e = null) {
				return e ? e === this.name && ("emptyElement" === t || "view:emptyElement" === t || "element" === t ||
						"view:element" === t) : "emptyElement" === t || "view:emptyElement" === t || t === this.name || t ===
					"view:" + this.name || "element" === t || "view:element" === t || "node" === t || "view:node" === t
			}
			_insertChild(t, e) {
				if (e && (e instanceof On || Array.from(e).length > 0)) throw new hn.b(
					"view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.", [this, e])
			}
		}

		function di() {
			return null
		}
		const ui = navigator.userAgent.toLowerCase();
		var hi = {
			isMac: function(t) {
				return t.indexOf("macintosh") > -1
			}(ui),
			isGecko: function(t) {
				return !!t.match(/gecko\/\d+/)
			}(ui),
			isSafari: function(t) {
				return t.indexOf(" applewebkit/") > -1 && -1 === t.indexOf("chrome")
			}(ui),
			isAndroid: function(t) {
				return t.indexOf("android") > -1
			}(ui),
			features: {
				isRegExpUnicodePropertySupported: function() {
					let t = !1;
					try {
						t = 0 === "ć".search(new RegExp("[\\p{L}]", "u"))
					} catch (t) {}
					return t
				}()
			}
		};
		const fi = {
				"⌘": "ctrl",
				"⇧": "shift",
				"⌥": "alt"
			},
			gi = {
				ctrl: "⌘",
				shift: "⇧",
				alt: "⌥"
			},
			mi = function() {
				const t = {
					arrowleft: 37,
					arrowup: 38,
					arrowright: 39,
					arrowdown: 40,
					backspace: 8,
					delete: 46,
					enter: 13,
					space: 32,
					esc: 27,
					tab: 9,
					ctrl: 1114112,
					cmd: 1114112,
					shift: 2228224,
					alt: 4456448
				};
				for (let e = 65; e <= 90; e++) {
					const n = String.fromCharCode(e);
					t[n.toLowerCase()] = e
				}
				for (let e = 48; e <= 57; e++) t[e - 48] = e;
				for (let e = 112; e <= 123; e++) t["f" + (e - 111)] = e;
				return t
			}();

		function pi(t) {
			let e;
			if ("string" == typeof t) {
				if (e = mi[t.toLowerCase()], !e) throw new hn.b("keyboard-unknown-key: Unknown key name.", null, {
					key: t
				})
			} else e = t.keyCode + (t.altKey ? mi.alt : 0) + (t.ctrlKey ? mi.ctrl : 0) + (t.shiftKey ? mi.shift : 0);
			return e
		}

		function bi(t) {
			return "string" == typeof t && (t = yi(t)), t.map(t => "string" == typeof t ? pi(t) : t).reduce((t, e) => e + t,
				0)
		}

		function wi(t) {
			return hi.isMac ? yi(t).map(t => gi[t.toLowerCase()] || t).reduce((t, e) => t.slice(-1) in fi ? t + e : t + "+" +
				e) : t
		}

		function ki(t) {
			return t == mi.arrowright || t == mi.arrowleft || t == mi.arrowup || t == mi.arrowdown
		}

		function _i(t, e) {
			const n = "ltr" === e;
			switch (t) {
				case mi.arrowleft:
					return n ? "left" : "right";
				case mi.arrowright:
					return n ? "right" : "left";
				case mi.arrowup:
					return "up";
				case mi.arrowdown:
					return "down"
			}
		}

		function vi(t, e) {
			const n = _i(t, e);
			return "down" === n || "right" === n
		}

		function yi(t) {
			return t.split(/\s*\+\s*/)
		}
		class xi extends Ro {
			constructor(t, e, n, o) {
				super(t, e, n, o), this.getFillerOffset = Ci
			}
			is(t, e = null) {
				return e ? e === this.name && ("uiElement" === t || "view:uiElement" === t || "element" === t ||
						"view:element" === t) : "uiElement" === t || "view:uiElement" === t || t === this.name || t === "view:" +
					this.name || "element" === t || "view:element" === t || "node" === t || "view:node" === t
			}
			_insertChild(t, e) {
				if (e && (e instanceof On || Array.from(e).length > 0)) throw new hn.b(
					"view-uielement-cannot-add: Cannot add child nodes to UIElement instance.", this)
			}
			render(t) {
				return this.toDomElement(t)
			}
			toDomElement(t) {
				const e = t.createElement(this.name);
				for (const t of this.getAttributeKeys()) e.setAttribute(t, this.getAttribute(t));
				return e
			}
		}

		function Ai(t) {
			t.document.on("keydown", (e, n) => function(t, e, n) {
				if (e.keyCode == mi.arrowright) {
					const t = e.domTarget.ownerDocument.defaultView.getSelection(),
						o = 1 == t.rangeCount && t.getRangeAt(0).collapsed;
					if (o || e.shiftKey) {
						const e = t.focusNode,
							i = t.focusOffset,
							r = n.domPositionToView(e, i);
						if (null === r) return;
						let s = !1;
						const a = r.getLastMatchingPosition(t => (t.item.is("uiElement") && (s = !0), !(!t.item.is("uiElement") &&
							!t.item.is("attributeElement"))));
						if (s) {
							const e = n.viewPositionToDom(a);
							o ? t.collapse(e.parent, e.offset) : t.extend(e.parent, e.offset)
						}
					}
				}
			}(0, n, t.domConverter))
		}

		function Ci() {
			return null
		}
		class Ti {
			constructor(t, e) {
				this.document = t, this._children = [], e && this._insertChild(0, e)
			} [Symbol.iterator]() {
				return this._children[Symbol.iterator]()
			}
			get childCount() {
				return this._children.length
			}
			get isEmpty() {
				return 0 === this.childCount
			}
			get root() {
				return this
			}
			get parent() {
				return null
			}
			is(t) {
				return "documentFragment" === t || "view:documentFragment" === t
			}
			_appendChild(t) {
				return this._insertChild(this.childCount, t)
			}
			getChild(t) {
				return this._children[t]
			}
			getChildIndex(t) {
				return this._children.indexOf(t)
			}
			getChildren() {
				return this._children[Symbol.iterator]()
			}
			_insertChild(t, e) {
				this._fireChange("children", this);
				let n = 0;
				const o = function(t, e) {
					if ("string" == typeof e) return [new Rn(t, e)];
					yn(e) || (e = [e]);
					return Array.from(e).map(e => "string" == typeof e ? new Rn(t, e) : e instanceof Dn ? new Rn(t, e.data) : e)
				}(this.document, e);
				for (const e of o) null !== e.parent && e._remove(), e.parent = this, this._children.splice(t, 0, e), t++, n++;
				return n
			}
			_removeChildren(t, e = 1) {
				this._fireChange("children", this);
				for (let n = t; n < t + e; n++) this._children[n].parent = null;
				return this._children.splice(t, e)
			}
			_fireChange(t, e) {
				this.fire("change:" + t, e)
			}
		}
		xn(Ti, mn);
		class Si {
			constructor(t) {
				this.document = t, this._cloneGroups = new Map
			}
			setSelection(t, e, n) {
				this.document.selection._setTo(t, e, n)
			}
			setSelectionFocus(t, e) {
				this.document.selection._setFocus(t, e)
			}
			createText(t) {
				return new Rn(this.document, t)
			}
			createAttributeElement(t, e, n = {}) {
				const o = new si(this.document, t, e);
				return n.priority && (o._priority = n.priority), n.id && (o._id = n.id), o
			}
			createContainerElement(t, e) {
				return new Lo(this.document, t, e)
			}
			createEditableElement(t, e) {
				const n = new Ko(this.document, t, e);
				return n._document = this.document, n
			}
			createEmptyElement(t, e) {
				return new li(this.document, t, e)
			}
			createUIElement(t, e, n) {
				const o = new xi(this.document, t, e);
				return n && (o.render = n), o
			}
			setAttribute(t, e, n) {
				n._setAttribute(t, e)
			}
			removeAttribute(t, e) {
				e._removeAttribute(t)
			}
			addClass(t, e) {
				e._addClass(t)
			}
			removeClass(t, e) {
				e._removeClass(t)
			}
			setStyle(t, e, n) {
				y(t) && void 0 === n && (n = e), n._setStyle(t, e)
			}
			removeStyle(t, e) {
				e._removeStyle(t)
			}
			setCustomProperty(t, e, n) {
				n._setCustomProperty(t, e)
			}
			removeCustomProperty(t, e) {
				return e._removeCustomProperty(t)
			}
			breakAttributes(t) {
				return t instanceof Xo ? this._breakAttributes(t) : this._breakAttributesRange(t)
			}
			breakContainer(t) {
				const e = t.parent;
				if (!e.is("containerElement")) throw new hn.b(
					"view-writer-break-non-container-element: Trying to break an element which is not a container element.",
					this.document);
				if (!e.parent) throw new hn.b("view-writer-break-root: Trying to break root element.", this.document);
				if (t.isAtStart) return Xo._createBefore(e);
				if (!t.isAtEnd) {
					const n = e._clone(!1);
					this.insert(Xo._createAfter(e), n);
					const o = new ti(t, Xo._createAt(e, "end")),
						i = new Xo(n, 0);
					this.move(o, i)
				}
				return Xo._createAfter(e)
			}
			mergeAttributes(t) {
				const e = t.offset,
					n = t.parent;
				if (n.is("text")) return t;
				if (n.is("attributeElement") && 0 === n.childCount) {
					const t = n.parent,
						e = n.index;
					return n._remove(), this._removeFromClonedElementsGroup(n), this.mergeAttributes(new Xo(t, e))
				}
				const o = n.getChild(e - 1),
					i = n.getChild(e);
				if (!o || !i) return t;
				if (o.is("text") && i.is("text")) return Ni(o, i);
				if (o.is("attributeElement") && i.is("attributeElement") && o.isSimilar(i)) {
					const t = o.childCount;
					return o._appendChild(i.getChildren()), i._remove(), this._removeFromClonedElementsGroup(i), this.mergeAttributes(
						new Xo(o, t))
				}
				return t
			}
			mergeContainers(t) {
				const e = t.nodeBefore,
					n = t.nodeAfter;
				if (!(e && n && e.is("containerElement") && n.is("containerElement"))) throw new hn.b(
					"view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.",
					this.document);
				const o = e.getChild(e.childCount - 1),
					i = o instanceof Rn ? Xo._createAt(o, "end") : Xo._createAt(e, "end");
				return this.move(ti._createIn(n), Xo._createAt(e, "end")), this.remove(ti._createOn(n)), i
			}
			insert(t, e) {
				(function t(e, n) {
					for (const o of e) {
						if (!Oi.some(t => o instanceof t)) throw new hn.b("view-writer-insert-invalid-node", n);
						o.is("text") || t(o.getChildren(), n)
					}
				})(e = yn(e) ? [...e] : [e], this.document);
				const n = Pi(t);
				if (!n) throw new hn.b("view-writer-invalid-position-container", this.document);
				const o = this._breakAttributes(t, !0),
					i = n._insertChild(o.offset, e);
				for (const t of e) this._addToClonedElementsGroup(t);
				const r = o.getShiftedBy(i),
					s = this.mergeAttributes(o);
				if (0 === i) return new ti(s, s); {
					s.isEqual(o) || r.offset--;
					const t = this.mergeAttributes(r);
					return new ti(s, t)
				}
			}
			remove(t) {
				const e = t instanceof ti ? t : ti._createOn(t);
				if (Di(e, this.document), e.isCollapsed) return new Ti(this.document);
				const {
					start: n,
					end: o
				} = this._breakAttributesRange(e, !0), i = n.parent, r = o.offset - n.offset, s = i._removeChildren(n.offset,
					r);
				for (const t of s) this._removeFromClonedElementsGroup(t);
				const a = this.mergeAttributes(n);
				return e.start = a, e.end = a.clone(), new Ti(this.document, s)
			}
			clear(t, e) {
				Di(t, this.document);
				const n = t.getWalker({
					direction: "backward",
					ignoreElementEnd: !0
				});
				for (const o of n) {
					const n = o.item;
					let i;
					if (n.is("element") && e.isSimilar(n)) i = ti._createOn(n);
					else if (!o.nextPosition.isAfter(t.start) && n.is("textProxy")) {
						const t = n.getAncestors().find(t => t.is("element") && e.isSimilar(t));
						t && (i = ti._createIn(t))
					}
					i && (i.end.isAfter(t.end) && (i.end = t.end), i.start.isBefore(t.start) && (i.start = t.start), this.remove(
						i))
				}
			}
			move(t, e) {
				let n;
				if (e.isAfter(t.end)) {
					const o = (e = this._breakAttributes(e, !0)).parent,
						i = o.childCount;
					t = this._breakAttributesRange(t, !0), n = this.remove(t), e.offset += o.childCount - i
				} else n = this.remove(t);
				return this.insert(e, n)
			}
			wrap(t, e) {
				if (!(e instanceof si)) throw new hn.b("view-writer-wrap-invalid-attribute", this.document);
				if (Di(t, this.document), t.isCollapsed) {
					let o = t.start;
					o.parent.is("element") && (n = o.parent, !Array.from(n.getChildren()).some(t => !t.is("uiElement"))) && (o =
						o.getLastMatchingPosition(t => t.item.is("uiElement"))), o = this._wrapPosition(o, e);
					const i = this.document.selection;
					return i.isCollapsed && i.getFirstPosition().isEqual(t.start) && this.setSelection(o), new ti(o)
				}
				return this._wrapRange(t, e);
				var n
			}
			unwrap(t, e) {
				if (!(e instanceof si)) throw new hn.b("view-writer-unwrap-invalid-attribute", this.document);
				if (Di(t, this.document), t.isCollapsed) return t;
				const {
					start: n,
					end: o
				} = this._breakAttributesRange(t, !0), i = n.parent, r = this._unwrapChildren(i, n.offset, o.offset, e), s =
					this.mergeAttributes(r.start);
				s.isEqual(r.start) || r.end.offset--;
				const a = this.mergeAttributes(r.end);
				return new ti(s, a)
			}
			rename(t, e) {
				const n = new Lo(this.document, t, e.getAttributes());
				return this.insert(Xo._createAfter(e), n), this.move(ti._createIn(e), Xo._createAt(n, 0)), this.remove(ti._createOn(
					e)), n
			}
			clearClonedElementsGroup(t) {
				this._cloneGroups.delete(t)
			}
			createPositionAt(t, e) {
				return Xo._createAt(t, e)
			}
			createPositionAfter(t) {
				return Xo._createAfter(t)
			}
			createPositionBefore(t) {
				return Xo._createBefore(t)
			}
			createRange(t, e) {
				return new ti(t, e)
			}
			createRangeOn(t) {
				return ti._createOn(t)
			}
			createRangeIn(t) {
				return ti._createIn(t)
			}
			createSelection(t, e, n) {
				return new oi(t, e, n)
			}
			_wrapChildren(t, e, n, o) {
				let i = e;
				const r = [];
				for (; i < n;) {
					const e = t.getChild(i),
						n = e.is("text"),
						s = e.is("attributeElement"),
						a = e.is("emptyElement"),
						c = e.is("uiElement");
					if (s && this._wrapAttributeElement(o, e)) r.push(new Xo(t, i));
					else if (n || a || c || s && Ei(o, e)) {
						const n = o._clone();
						e._remove(), n._appendChild(e), t._insertChild(i, n), this._addToClonedElementsGroup(n), r.push(new Xo(t, i))
					} else s && this._wrapChildren(e, 0, e.childCount, o);
					i++
				}
				let s = 0;
				for (const t of r) {
					if (t.offset -= s, t.offset == e) continue;
					this.mergeAttributes(t).isEqual(t) || (s++, n--)
				}
				return ti._createFromParentsAndOffsets(t, e, t, n)
			}
			_unwrapChildren(t, e, n, o) {
				let i = e;
				const r = [];
				for (; i < n;) {
					const e = t.getChild(i);
					if (e.is("attributeElement"))
						if (e.isSimilar(o)) {
							const o = e.getChildren(),
								s = e.childCount;
							e._remove(), t._insertChild(i, o), this._removeFromClonedElementsGroup(e), r.push(new Xo(t, i), new Xo(t,
								i + s)), i += s, n += s - 1
						} else this._unwrapAttributeElement(o, e) ? (r.push(new Xo(t, i), new Xo(t, i + 1)), i++) : (this._unwrapChildren(
							e, 0, e.childCount, o), i++);
					else i++
				}
				let s = 0;
				for (const t of r) {
					if (t.offset -= s, t.offset == e || t.offset == n) continue;
					this.mergeAttributes(t).isEqual(t) || (s++, n--)
				}
				return ti._createFromParentsAndOffsets(t, e, t, n)
			}
			_wrapRange(t, e) {
				const {
					start: n,
					end: o
				} = this._breakAttributesRange(t, !0), i = n.parent, r = this._wrapChildren(i, n.offset, o.offset, e), s =
					this.mergeAttributes(r.start);
				s.isEqual(r.start) || r.end.offset--;
				const a = this.mergeAttributes(r.end);
				return new ti(s, a)
			}
			_wrapPosition(t, e) {
				if (e.isSimilar(t.parent)) return Mi(t.clone());
				t.parent.is("text") && (t = Ii(t));
				const n = this.createAttributeElement();
				n._priority = Number.POSITIVE_INFINITY, n.isSimilar = () => !1, t.parent._insertChild(t.offset, n);
				const o = new ti(t, t.getShiftedBy(1));
				this.wrap(o, e);
				const i = new Xo(n.parent, n.index);
				n._remove();
				const r = i.nodeBefore,
					s = i.nodeAfter;
				return r instanceof Rn && s instanceof Rn ? Ni(r, s) : Mi(i)
			}
			_wrapAttributeElement(t, e) {
				if (!Li(t, e)) return !1;
				if (t.name !== e.name || t.priority !== e.priority) return !1;
				for (const n of t.getAttributeKeys())
					if ("class" !== n && "style" !== n && e.hasAttribute(n) && e.getAttribute(n) !== t.getAttribute(n)) return !
						1;
				for (const n of t.getStyleNames())
					if (e.hasStyle(n) && e.getStyle(n) !== t.getStyle(n)) return !1;
				for (const n of t.getAttributeKeys()) "class" !== n && "style" !== n && (e.hasAttribute(n) || this.setAttribute(
					n, t.getAttribute(n), e));
				for (const n of t.getStyleNames()) e.hasStyle(n) || this.setStyle(n, t.getStyle(n), e);
				for (const n of t.getClassNames()) e.hasClass(n) || this.addClass(n, e);
				return !0
			}
			_unwrapAttributeElement(t, e) {
				if (!Li(t, e)) return !1;
				if (t.name !== e.name || t.priority !== e.priority) return !1;
				for (const n of t.getAttributeKeys())
					if ("class" !== n && "style" !== n && (!e.hasAttribute(n) || e.getAttribute(n) !== t.getAttribute(n))) return !
						1;
				if (!e.hasClass(...t.getClassNames())) return !1;
				for (const n of t.getStyleNames())
					if (!e.hasStyle(n) || e.getStyle(n) !== t.getStyle(n)) return !1;
				for (const n of t.getAttributeKeys()) "class" !== n && "style" !== n && this.removeAttribute(n, e);
				return this.removeClass(Array.from(t.getClassNames()), e), this.removeStyle(Array.from(t.getStyleNames()), e),
					!0
			}
			_breakAttributesRange(t, e = !1) {
				const n = t.start,
					o = t.end;
				if (Di(t, this.document), t.isCollapsed) {
					const n = this._breakAttributes(t.start, e);
					return new ti(n, n)
				}
				const i = this._breakAttributes(o, e),
					r = i.parent.childCount,
					s = this._breakAttributes(n, e);
				return i.offset += i.parent.childCount - r, new ti(s, i)
			}
			_breakAttributes(t, e = !1) {
				const n = t.offset,
					o = t.parent;
				if (t.parent.is("emptyElement")) throw new hn.b("view-writer-cannot-break-empty-element", this.document);
				if (t.parent.is("uiElement")) throw new hn.b("view-writer-cannot-break-ui-element", this.document);
				if (!e && o.is("text") && Ri(o.parent)) return t.clone();
				if (Ri(o)) return t.clone();
				if (o.is("text")) return this._breakAttributes(Ii(t), e);
				if (n == o.childCount) {
					const t = new Xo(o.parent, o.index + 1);
					return this._breakAttributes(t, e)
				}
				if (0 === n) {
					const t = new Xo(o.parent, o.index);
					return this._breakAttributes(t, e)
				} {
					const t = o.index + 1,
						i = o._clone();
					o.parent._insertChild(t, i), this._addToClonedElementsGroup(i);
					const r = o.childCount - n,
						s = o._removeChildren(n, r);
					i._appendChild(s);
					const a = new Xo(o.parent, t);
					return this._breakAttributes(a, e)
				}
			}
			_addToClonedElementsGroup(t) {
				if (!t.root.is("rootElement")) return;
				if (t.is("element"))
					for (const e of t.getChildren()) this._addToClonedElementsGroup(e);
				const e = t.id;
				if (!e) return;
				let n = this._cloneGroups.get(e);
				n || (n = new Set, this._cloneGroups.set(e, n)), n.add(t), t._clonesGroup = n
			}
			_removeFromClonedElementsGroup(t) {
				if (t.is("element"))
					for (const e of t.getChildren()) this._removeFromClonedElementsGroup(e);
				const e = t.id;
				if (!e) return;
				const n = this._cloneGroups.get(e);
				n && n.delete(t)
			}
		}

		function Pi(t) {
			let e = t.parent;
			for (; !Ri(e);) {
				if (!e) return;
				e = e.parent
			}
			return e
		}

		function Ei(t, e) {
			return t.priority < e.priority || !(t.priority > e.priority) && t.getIdentity() < e.getIdentity()
		}

		function Mi(t) {
			const e = t.nodeBefore;
			if (e && e.is("text")) return new Xo(e, e.data.length);
			const n = t.nodeAfter;
			return n && n.is("text") ? new Xo(n, 0) : t
		}

		function Ii(t) {
			if (t.offset == t.parent.data.length) return new Xo(t.parent.parent, t.parent.index + 1);
			if (0 === t.offset) return new Xo(t.parent.parent, t.parent.index);
			const e = t.parent.data.slice(t.offset);
			return t.parent._data = t.parent.data.slice(0, t.offset), t.parent.parent._insertChild(t.parent.index + 1, new Rn(
				t.root.document, e)), new Xo(t.parent.parent, t.parent.index + 1)
		}

		function Ni(t, e) {
			const n = t.data.length;
			return t._data += e.data, e._remove(), new Xo(t, n)
		}
		const Oi = [Rn, si, Lo, li, xi];

		function Ri(t) {
			return t && (t.is("containerElement") || t.is("documentFragment"))
		}

		function Di(t, e) {
			const n = Pi(t.start),
				o = Pi(t.end);
			if (!n || !o || n !== o) throw new hn.b("view-writer-invalid-range-container", e)
		}

		function Li(t, e) {
			return null === t.id && null === e.id
		}

		function ji(t) {
			return "[object Text]" == Object.prototype.toString.call(t)
		}
		const Vi = t => t.createTextNode(" "),
			zi = t => {
				const e = t.createElement("br");
				return e.dataset.ckeFiller = !0, e
			},
			Bi = (() => {
				let t = "";
				for (let e = 0; e < 7; e++) t += "​";
				return t
			})();

		function Fi(t) {
			return ji(t) && t.data.substr(0, 7) === Bi
		}

		function Ui(t) {
			return 7 == t.data.length && Fi(t)
		}

		function Hi(t) {
			return Fi(t) ? t.data.slice(7) : t.data
		}

		function qi(t, e) {
			if (e.keyCode == mi.arrowleft) {
				const t = e.domTarget.ownerDocument.defaultView.getSelection();
				if (1 == t.rangeCount && t.getRangeAt(0).collapsed) {
					const e = t.getRangeAt(0).startContainer,
						n = t.getRangeAt(0).startOffset;
					Fi(e) && n <= 7 && t.collapse(e, 0)
				}
			}
		}

		function Wi(t, e, n, o = !1) {
			n = n || function(t, e) {
				return t === e
			}, Array.isArray(t) || (t = Array.prototype.slice.call(t)), Array.isArray(e) || (e = Array.prototype.slice.call(
				e));
			const i = function(t, e, n) {
				const o = Gi(t, e, n);
				if (-1 === o) return {
					firstIndex: -1,
					lastIndexOld: -1,
					lastIndexNew: -1
				};
				const i = Yi(t, o),
					r = Yi(e, o),
					s = Gi(i, r, n),
					a = t.length - s,
					c = e.length - s;
				return {
					firstIndex: o,
					lastIndexOld: a,
					lastIndexNew: c
				}
			}(t, e, n);
			return o ? function(t, e) {
				const {
					firstIndex: n,
					lastIndexOld: o,
					lastIndexNew: i
				} = t;
				if (-1 === n) return Array(e).fill("equal");
				let r = [];
				n > 0 && (r = r.concat(Array(n).fill("equal")));
				i - n > 0 && (r = r.concat(Array(i - n).fill("insert")));
				o - n > 0 && (r = r.concat(Array(o - n).fill("delete")));
				i < e && (r = r.concat(Array(e - i).fill("equal")));
				return r
			}(i, e.length) : function(t, e) {
				const n = [],
					{
						firstIndex: o,
						lastIndexOld: i,
						lastIndexNew: r
					} = e;
				r - o > 0 && n.push({
					index: o,
					type: "insert",
					values: t.slice(o, r)
				});
				i - o > 0 && n.push({
					index: o + (r - o),
					type: "delete",
					howMany: i - o
				});
				return n
			}(e, i)
		}

		function Gi(t, e, n) {
			for (let o = 0; o < Math.max(t.length, e.length); o++)
				if (void 0 === t[o] || void 0 === e[o] || !n(t[o], e[o])) return o;
			return -1
		}

		function Yi(t, e) {
			return t.slice(e).reverse()
		}

		function $i(t, e, n) {
			n = n || function(t, e) {
				return t === e
			};
			const o = t.length,
				i = e.length;
			if (o > 200 || i > 200 || o + i > 300) return $i.fastDiff(t, e, n, !0);
			let r, s;
			if (i < o) {
				const n = t;
				t = e, e = n, r = "delete", s = "insert"
			} else r = "insert", s = "delete";
			const a = t.length,
				c = e.length,
				l = c - a,
				d = {},
				u = {};

			function h(o) {
				const i = (void 0 !== u[o - 1] ? u[o - 1] : -1) + 1,
					l = void 0 !== u[o + 1] ? u[o + 1] : -1,
					h = i > l ? -1 : 1;
				d[o + h] && (d[o] = d[o + h].slice(0)), d[o] || (d[o] = []), d[o].push(i > l ? r : s);
				let f = Math.max(i, l),
					g = f - o;
				for (; g < a && f < c && n(t[g], e[f]);) g++, f++, d[o].push("equal");
				return f
			}
			let f, g = 0;
			do {
				for (f = -g; f < l; f++) u[f] = h(f);
				for (f = l + g; f > l; f--) u[f] = h(f);
				u[l] = h(l), g++
			} while (u[l] !== c);
			return d[l].slice(1)
		}

		function Ki(t, e, n) {
			t.insertBefore(n, t.childNodes[e] || null)
		}

		function Qi(t) {
			const e = t.parentNode;
			e && e.removeChild(t)
		}

		function Ji(t) {
			if (t) {
				if (t.defaultView) return t instanceof t.defaultView.Document;
				if (t.ownerDocument && t.ownerDocument.defaultView) return t instanceof t.ownerDocument.defaultView.Node
			}
			return !1
		}
		$i.fastDiff = Wi;
		class Zi {
			constructor(t, e) {
				this.domDocuments = new Set, this.domConverter = t, this.markedAttributes = new Set, this.markedChildren =
					new Set, this.markedTexts = new Set, this.selection = e, this.isFocused = !1, this._inlineFiller = null,
					this._fakeSelectionContainer = null
			}
			markToSync(t, e) {
				if ("text" === t) this.domConverter.mapViewToDom(e.parent) && this.markedTexts.add(e);
				else {
					if (!this.domConverter.mapViewToDom(e)) return;
					if ("attributes" === t) this.markedAttributes.add(e);
					else {
						if ("children" !== t) throw new hn.b(
							"view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.", this);
						this.markedChildren.add(e)
					}
				}
			}
			render() {
				let t;
				for (const t of this.markedChildren) this._updateChildrenMappings(t);
				this._inlineFiller && !this._isSelectionInInlineFiller() && this._removeInlineFiller(), this._inlineFiller ?
					t = this._getInlineFillerPosition() : this._needsInlineFillerAtSelection() && (t = this.selection.getFirstPosition(),
						this.markedChildren.add(t.parent));
				for (const t of this.markedAttributes) this._updateAttrs(t);
				for (const e of this.markedChildren) this._updateChildren(e, {
					inlineFillerPosition: t
				});
				for (const e of this.markedTexts) !this.markedChildren.has(e.parent) && this.domConverter.mapViewToDom(e.parent) &&
					this._updateText(e, {
						inlineFillerPosition: t
					});
				if (t) {
					const e = this.domConverter.viewPositionToDom(t),
						n = e.parent.ownerDocument;
					Fi(e.parent) ? this._inlineFiller = e.parent : this._inlineFiller = Xi(n, e.parent, e.offset)
				} else this._inlineFiller = null;
				this._updateSelection(), this._updateFocus(), this.markedTexts.clear(), this.markedAttributes.clear(), this.markedChildren
					.clear()
			}
			_updateChildrenMappings(t) {
				const e = this.domConverter.mapViewToDom(t);
				if (!e) return;
				const n = this.domConverter.mapViewToDom(t).childNodes,
					o = Array.from(this.domConverter.viewChildrenToDom(t, e.ownerDocument, {
						withChildren: !1
					})),
					i = this._diffNodeLists(n, o),
					r = this._findReplaceActions(i, n, o);
				if (-1 !== r.indexOf("replace")) {
					const e = {
						equal: 0,
						insert: 0,
						delete: 0
					};
					for (const i of r)
						if ("replace" === i) {
							const i = e.equal + e.insert,
								r = e.equal + e.delete,
								s = t.getChild(i);
							s && !s.is("uiElement") && this._updateElementMappings(s, n[r]), Qi(o[i]), e.equal++
						} else e[i]++
				}
			}
			_updateElementMappings(t, e) {
				this.domConverter.unbindDomElement(e), this.domConverter.bindElements(e, t), this.markedChildren.add(t), this
					.markedAttributes.add(t)
			}
			_getInlineFillerPosition() {
				const t = this.selection.getFirstPosition();
				return t.parent.is("text") ? Xo._createBefore(this.selection.getFirstPosition().parent) : t
			}
			_isSelectionInInlineFiller() {
				if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
				const t = this.selection.getFirstPosition(),
					e = this.domConverter.viewPositionToDom(t);
				return !!(e && ji(e.parent) && Fi(e.parent))
			}
			_removeInlineFiller() {
				const t = this._inlineFiller;
				if (!Fi(t)) throw new hn.b("view-renderer-filler-was-lost: The inline filler node was lost.", this);
				Ui(t) ? t.parentNode.removeChild(t) : t.data = t.data.substr(7), this._inlineFiller = null
			}
			_needsInlineFillerAtSelection() {
				if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
				const t = this.selection.getFirstPosition(),
					e = t.parent,
					n = t.offset;
				if (!this.domConverter.mapViewToDom(e.root)) return !1;
				if (!e.is("element")) return !1;
				if (! function(t) {
						if ("false" == t.getAttribute("contenteditable")) return !1;
						const e = t.findAncestor(t => t.hasAttribute("contenteditable"));
						return !e || "true" == e.getAttribute("contenteditable")
					}(e)) return !1;
				if (n === e.getFillerOffset()) return !1;
				const o = t.nodeBefore,
					i = t.nodeAfter;
				return !(o instanceof Rn || i instanceof Rn)
			}
			_updateText(t, e) {
				const n = this.domConverter.findCorrespondingDomText(t),
					o = this.domConverter.viewToDom(t, n.ownerDocument),
					i = n.data;
				let r = o.data;
				const s = e.inlineFillerPosition;
				if (s && s.parent == t.parent && s.offset == t.index && (r = Bi + r), i != r) {
					const t = Wi(i, r);
					for (const e of t) "insert" === e.type ? n.insertData(e.index, e.values.join("")) : n.deleteData(e.index, e.howMany)
				}
			}
			_updateAttrs(t) {
				const e = this.domConverter.mapViewToDom(t);
				if (!e) return;
				const n = Array.from(e.attributes).map(t => t.name),
					o = t.getAttributeKeys();
				for (const n of o) e.setAttribute(n, t.getAttribute(n));
				for (const o of n) t.hasAttribute(o) || e.removeAttribute(o)
			}
			_updateChildren(t, e) {
				const n = this.domConverter.mapViewToDom(t);
				if (!n) return;
				const o = e.inlineFillerPosition,
					i = this.domConverter.mapViewToDom(t).childNodes,
					r = Array.from(this.domConverter.viewChildrenToDom(t, n.ownerDocument, {
						bind: !0,
						inlineFillerPosition: o
					}));
				o && o.parent === t && Xi(n.ownerDocument, r, o.offset);
				const s = this._diffNodeLists(i, r);
				let a = 0;
				const c = new Set;
				for (const t of s) "delete" === t ? (c.add(i[a]), Qi(i[a])) : "equal" === t && a++;
				a = 0;
				for (const t of s) "insert" === t ? (Ki(n, a, r[a]), a++) : "equal" === t && (this._markDescendantTextToSync(
					this.domConverter.domToView(r[a])), a++);
				for (const t of c) t.parentNode || this.domConverter.unbindDomElement(t)
			}
			_diffNodeLists(t, e) {
				return $i(t = function(t, e) {
					const n = Array.from(t);
					if (0 == n.length || !e) return n;
					n[n.length - 1] == e && n.pop();
					return n
				}(t, this._fakeSelectionContainer), e, er.bind(null, this.domConverter))
			}
			_findReplaceActions(t, e, n) {
				if (-1 === t.indexOf("insert") || -1 === t.indexOf("delete")) return t;
				let o = [],
					i = [],
					r = [];
				const s = {
					equal: 0,
					insert: 0,
					delete: 0
				};
				for (const a of t) "insert" === a ? r.push(n[s.equal + s.insert]) : "delete" === a ? i.push(e[s.equal + s.delete]) :
					(o = o.concat($i(i, r, tr).map(t => "equal" === t ? "replace" : t)), o.push("equal"), i = [], r = []), s[a]++;
				return o.concat($i(i, r, tr).map(t => "equal" === t ? "replace" : t))
			}
			_markDescendantTextToSync(t) {
				if (t)
					if (t.is("text")) this.markedTexts.add(t);
					else if (t.is("element"))
					for (const e of t.getChildren()) this._markDescendantTextToSync(e)
			}
			_updateSelection() {
				if (0 === this.selection.rangeCount) return this._removeDomSelection(), void this._removeFakeSelection();
				const t = this.domConverter.mapViewToDom(this.selection.editableElement);
				this.isFocused && t && (this.selection.isFake ? this._updateFakeSelection(t) : (this._removeFakeSelection(),
					this._updateDomSelection(t)))
			}
			_updateFakeSelection(t) {
				const e = t.ownerDocument;
				this._fakeSelectionContainer || (this._fakeSelectionContainer = function(t) {
					const e = t.createElement("div");
					return Object.assign(e.style, {
						position: "fixed",
						top: 0,
						left: "-9999px",
						width: "42px"
					}), e.textContent = " ", e
				}(e));
				const n = this._fakeSelectionContainer;
				if (this.domConverter.bindFakeSelection(n, this.selection), !this._fakeSelectionNeedsUpdate(t)) return;
				n.parentElement && n.parentElement == t || t.appendChild(n), n.textContent = this.selection.fakeSelectionLabel ||
					" ";
				const o = e.getSelection(),
					i = e.createRange();
				o.removeAllRanges(), i.selectNodeContents(n), o.addRange(i)
			}
			_updateDomSelection(t) {
				const e = t.ownerDocument.defaultView.getSelection();
				if (!this._domSelectionNeedsUpdate(e)) return;
				const n = this.domConverter.viewPositionToDom(this.selection.anchor),
					o = this.domConverter.viewPositionToDom(this.selection.focus);
				t.focus(), e.collapse(n.parent, n.offset), e.extend(o.parent, o.offset), hi.isGecko && function(t, e) {
					const n = t.parent;
					if (n.nodeType != Node.ELEMENT_NODE || t.offset != n.childNodes.length - 1) return;
					const o = n.childNodes[t.offset];
					o && "BR" == o.tagName && e.addRange(e.getRangeAt(0))
				}(o, e)
			}
			_domSelectionNeedsUpdate(t) {
				if (!this.domConverter.isDomSelectionCorrect(t)) return !0;
				const e = t && this.domConverter.domSelectionToView(t);
				return (!e || !this.selection.isEqual(e)) && !(!this.selection.isCollapsed && this.selection.isSimilar(e))
			}
			_fakeSelectionNeedsUpdate(t) {
				const e = this._fakeSelectionContainer,
					n = t.ownerDocument.getSelection();
				return !e || e.parentElement !== t || (n.anchorNode !== e && !e.contains(n.anchorNode) || e.textContent !==
					this.selection.fakeSelectionLabel)
			}
			_removeDomSelection() {
				for (const t of this.domDocuments) {
					if (t.getSelection().rangeCount) {
						const e = t.activeElement,
							n = this.domConverter.mapDomToView(e);
						e && n && t.getSelection().removeAllRanges()
					}
				}
			}
			_removeFakeSelection() {
				const t = this._fakeSelectionContainer;
				t && t.remove()
			}
			_updateFocus() {
				if (this.isFocused) {
					const t = this.selection.editableElement;
					t && this.domConverter.focus(t)
				}
			}
		}

		function Xi(t, e, n) {
			const o = e instanceof Array ? e : e.childNodes,
				i = o[n];
			if (ji(i)) return i.data = Bi + i.data, i; {
				const i = t.createTextNode(Bi);
				return Array.isArray(e) ? o.splice(n, 0, i) : Ki(e, n, i), i
			}
		}

		function tr(t, e) {
			return Ji(t) && Ji(e) && !ji(t) && !ji(e) && t.nodeType !== Node.COMMENT_NODE && e.nodeType !== Node.COMMENT_NODE &&
				t.tagName.toLowerCase() === e.tagName.toLowerCase()
		}

		function er(t, e, n) {
			return e === n || (ji(e) && ji(n) ? e.data === n.data : !(!t.isBlockFiller(e) || !t.isBlockFiller(n)))
		}
		xn(Zi, Ho);
		var nr = {
			window: window,
			document: document
		};

		function or(t) {
			let e = 0;
			for (; t.previousSibling;) t = t.previousSibling, e++;
			return e
		}

		function ir(t) {
			const e = [];
			for (; t && t.nodeType != Node.DOCUMENT_NODE;) e.unshift(t), t = t.parentNode;
			return e
		}
		const rr = zi(document);
		class sr {
			constructor(t, e = {}) {
				this.document = t, this.blockFillerMode = e.blockFillerMode || "br", this.preElements = ["pre"], this.blockElements = [
						"p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "dd", "dt", "figcaption"
					], this._blockFiller = "br" == this.blockFillerMode ? zi : Vi, this._domToViewMapping = new WeakMap, this._viewToDomMapping =
					new WeakMap, this._fakeSelectionMapping = new WeakMap
			}
			bindFakeSelection(t, e) {
				this._fakeSelectionMapping.set(t, new oi(e))
			}
			fakeSelectionToView(t) {
				return this._fakeSelectionMapping.get(t)
			}
			bindElements(t, e) {
				this._domToViewMapping.set(t, e), this._viewToDomMapping.set(e, t)
			}
			unbindDomElement(t) {
				const e = this._domToViewMapping.get(t);
				if (e) {
					this._domToViewMapping.delete(t), this._viewToDomMapping.delete(e);
					for (const e of t.childNodes) this.unbindDomElement(e)
				}
			}
			bindDocumentFragments(t, e) {
				this._domToViewMapping.set(t, e), this._viewToDomMapping.set(e, t)
			}
			viewToDom(t, e, n = {}) {
				if (t.is("text")) {
					const n = this._processDataFromViewText(t);
					return e.createTextNode(n)
				} {
					if (this.mapViewToDom(t)) return this.mapViewToDom(t);
					let o;
					if (t.is("documentFragment")) o = e.createDocumentFragment(), n.bind && this.bindDocumentFragments(o, t);
					else {
						if (t.is("uiElement")) return o = t.render(e), n.bind && this.bindElements(o, t), o;
						o = t.hasAttribute("xmlns") ? e.createElementNS(t.getAttribute("xmlns"), t.name) : e.createElement(t.name),
							n.bind && this.bindElements(o, t);
						for (const e of t.getAttributeKeys()) o.setAttribute(e, t.getAttribute(e))
					}
					if (n.withChildren || void 0 === n.withChildren)
						for (const i of this.viewChildrenToDom(t, e, n)) o.appendChild(i);
					return o
				}
			}* viewChildrenToDom(t, e, n = {}) {
				const o = t.getFillerOffset && t.getFillerOffset();
				let i = 0;
				for (const r of t.getChildren()) o === i && (yield this._blockFiller(e)), yield this.viewToDom(r, e, n), i++;
				o === i && (yield this._blockFiller(e))
			}
			viewRangeToDom(t) {
				const e = this.viewPositionToDom(t.start),
					n = this.viewPositionToDom(t.end),
					o = document.createRange();
				return o.setStart(e.parent, e.offset), o.setEnd(n.parent, n.offset), o
			}
			viewPositionToDom(t) {
				const e = t.parent;
				if (e.is("text")) {
					const n = this.findCorrespondingDomText(e);
					if (!n) return null;
					let o = t.offset;
					return Fi(n) && (o += 7), {
						parent: n,
						offset: o
					}
				} {
					let n, o, i;
					if (0 === t.offset) {
						if (n = this.mapViewToDom(e), !n) return null;
						i = n.childNodes[0]
					} else {
						const e = t.nodeBefore;
						if (o = e.is("text") ? this.findCorrespondingDomText(e) : this.mapViewToDom(t.nodeBefore), !o) return null;
						n = o.parentNode, i = o.nextSibling
					}
					if (ji(i) && Fi(i)) return {
						parent: i,
						offset: 7
					};
					return {
						parent: n,
						offset: o ? or(o) + 1 : 0
					}
				}
			}
			domToView(t, e = {}) {
				if (this.isBlockFiller(t, this.blockFillerMode)) return null;
				const n = this.getParentUIElement(t, this._domToViewMapping);
				if (n) return n;
				if (ji(t)) {
					if (Ui(t)) return null; {
						const e = this._processDataFromDomText(t);
						return "" === e ? null : new Rn(this.document, e)
					}
				}
				if (this.isComment(t)) return null; {
					if (this.mapDomToView(t)) return this.mapDomToView(t);
					let n;
					if (this.isDocumentFragment(t)) n = new Ti(this.document), e.bind && this.bindDocumentFragments(t, n);
					else {
						const o = e.keepOriginalCase ? t.tagName : t.tagName.toLowerCase();
						n = new Ro(this.document, o), e.bind && this.bindElements(t, n);
						const i = t.attributes;
						for (let t = i.length - 1; t >= 0; t--) n._setAttribute(i[t].name, i[t].value)
					}
					if (e.withChildren || void 0 === e.withChildren)
						for (const o of this.domChildrenToView(t, e)) n._appendChild(o);
					return n
				}
			}* domChildrenToView(t, e = {}) {
				for (let n = 0; n < t.childNodes.length; n++) {
					const o = t.childNodes[n],
						i = this.domToView(o, e);
					null !== i && (yield i)
				}
			}
			domSelectionToView(t) {
				if (1 === t.rangeCount) {
					let e = t.getRangeAt(0).startContainer;
					ji(e) && (e = e.parentNode);
					const n = this.fakeSelectionToView(e);
					if (n) return n
				}
				const e = this.isDomSelectionBackward(t),
					n = [];
				for (let e = 0; e < t.rangeCount; e++) {
					const o = t.getRangeAt(e),
						i = this.domRangeToView(o);
					i && n.push(i)
				}
				return new oi(n, {
					backward: e
				})
			}
			domRangeToView(t) {
				const e = this.domPositionToView(t.startContainer, t.startOffset),
					n = this.domPositionToView(t.endContainer, t.endOffset);
				return e && n ? new ti(e, n) : null
			}
			domPositionToView(t, e) {
				if (this.isBlockFiller(t, this.blockFillerMode)) return this.domPositionToView(t.parentNode, or(t));
				const n = this.mapDomToView(t);
				if (n && n.is("uiElement")) return Xo._createBefore(n);
				if (ji(t)) {
					if (Ui(t)) return this.domPositionToView(t.parentNode, or(t));
					const n = this.findCorrespondingViewText(t);
					let o = e;
					return n ? (Fi(t) && (o -= 7, o = o < 0 ? 0 : o), new Xo(n, o)) : null
				}
				if (0 === e) {
					const e = this.mapDomToView(t);
					if (e) return new Xo(e, 0)
				} else {
					const n = t.childNodes[e - 1],
						o = ji(n) ? this.findCorrespondingViewText(n) : this.mapDomToView(n);
					if (o && o.parent) return new Xo(o.parent, o.index + 1)
				}
				return null
			}
			mapDomToView(t) {
				return this.getParentUIElement(t) || this._domToViewMapping.get(t)
			}
			findCorrespondingViewText(t) {
				if (Ui(t)) return null;
				const e = this.getParentUIElement(t);
				if (e) return e;
				const n = t.previousSibling;
				if (n) {
					if (!this.isElement(n)) return null;
					const t = this.mapDomToView(n);
					if (t) {
						return t.nextSibling instanceof Rn ? t.nextSibling : null
					}
				} else {
					const e = this.mapDomToView(t.parentNode);
					if (e) {
						const t = e.getChild(0);
						return t instanceof Rn ? t : null
					}
				}
				return null
			}
			mapViewToDom(t) {
				return this._viewToDomMapping.get(t)
			}
			findCorrespondingDomText(t) {
				const e = t.previousSibling;
				return e && this.mapViewToDom(e) ? this.mapViewToDom(e).nextSibling : !e && t.parent && this.mapViewToDom(t.parent) ?
					this.mapViewToDom(t.parent).childNodes[0] : null
			}
			focus(t) {
				const e = this.mapViewToDom(t);
				if (e && e.ownerDocument.activeElement !== e) {
					const {
						scrollX: t,
						scrollY: n
					} = nr.window, o = [];
					cr(e, t => {
						const {
							scrollLeft: e,
							scrollTop: n
						} = t;
						o.push([e, n])
					}), e.focus(), cr(e, t => {
						const [e, n] = o.shift();
						t.scrollLeft = e, t.scrollTop = n
					}), nr.window.scrollTo(t, n)
				}
			}
			isElement(t) {
				return t && t.nodeType == Node.ELEMENT_NODE
			}
			isDocumentFragment(t) {
				return t && t.nodeType == Node.DOCUMENT_FRAGMENT_NODE
			}
			isComment(t) {
				return t && t.nodeType == Node.COMMENT_NODE
			}
			isBlockFiller(t) {
				return "br" == this.blockFillerMode ? t.isEqualNode(rr) : !("BR" !== t.tagName || !lr(t, this.blockElements) ||
					1 !== t.parentNode.childNodes.length) || function(t, e) {
					return ji(t) && " " == t.data && lr(t, e) && 1 === t.parentNode.childNodes.length
				}(t, this.blockElements)
			}
			isDomSelectionBackward(t) {
				if (t.isCollapsed) return !1;
				const e = document.createRange();
				e.setStart(t.anchorNode, t.anchorOffset), e.setEnd(t.focusNode, t.focusOffset);
				const n = e.collapsed;
				return e.detach(), n
			}
			getParentUIElement(t) {
				const e = ir(t);
				for (e.pop(); e.length;) {
					const t = e.pop(),
						n = this._domToViewMapping.get(t);
					if (n && n.is("uiElement")) return n
				}
				return null
			}
			isDomSelectionCorrect(t) {
				return this._isDomSelectionPositionCorrect(t.anchorNode, t.anchorOffset) && this._isDomSelectionPositionCorrect(
					t.focusNode, t.focusOffset)
			}
			_isDomSelectionPositionCorrect(t, e) {
				if (ji(t) && Fi(t) && e < 7) return !1;
				if (this.isElement(t) && Fi(t.childNodes[e])) return !1;
				const n = this.mapDomToView(t);
				return !n || !n.is("uiElement")
			}
			_processDataFromViewText(t) {
				let e = t.data;
				if (t.getAncestors().some(t => this.preElements.includes(t.name))) return e;
				if (" " == e.charAt(0)) {
					const n = this._getTouchingViewTextNode(t, !1);
					!(n && this._nodeEndsWithSpace(n)) && n || (e = " " + e.substr(1))
				}
				if (" " == e.charAt(e.length - 1)) {
					const n = this._getTouchingViewTextNode(t, !0);
					" " != e.charAt(e.length - 2) && n && " " != n.data.charAt(0) || (e = e.substr(0, e.length - 1) + " ")
				}
				return e.replace(/ {2}/g, "  ")
			}
			_nodeEndsWithSpace(t) {
				if (t.getAncestors().some(t => this.preElements.includes(t.name))) return !1;
				const e = this._processDataFromViewText(t);
				return " " == e.charAt(e.length - 1)
			}
			_processDataFromDomText(t) {
				let e = t.data;
				if (ar(t, this.preElements)) return Hi(t);
				e = e.replace(/[ \n\t\r]{1,}/g, " ");
				const n = this._getTouchingInlineDomNode(t, !1),
					o = this._getTouchingInlineDomNode(t, !0),
					i = this._checkShouldLeftTrimDomText(n),
					r = this._checkShouldRightTrimDomText(t, o);
				return i && (e = e.replace(/^ /, "")), r && (e = e.replace(/ $/, "")), e = Hi(new Text(e)), e = e.replace(
					/ \u00A0/g, "  "), (/( |\u00A0)\u00A0$/.test(e) || !o || o.data && " " == o.data.charAt(0)) && (e = e.replace(
					/\u00A0$/, " ")), i && (e = e.replace(/^\u00A0/, " ")), e
			}
			_checkShouldLeftTrimDomText(t) {
				return !t || (!!nn(t) || /[^\S\u00A0]/.test(t.data.charAt(t.data.length - 1)))
			}
			_checkShouldRightTrimDomText(t, e) {
				return !e && !Fi(t)
			}
			_getTouchingViewTextNode(t, e) {
				const n = new Zo({
					startPosition: e ? Xo._createAfter(t) : Xo._createBefore(t),
					direction: e ? "forward" : "backward"
				});
				for (const t of n) {
					if (t.item.is("containerElement")) return null;
					if (t.item.is("br")) return null;
					if (t.item.is("textProxy")) return t.item
				}
				return null
			}
			_getTouchingInlineDomNode(t, e) {
				if (!t.parentNode) return null;
				const n = e ? "nextNode" : "previousNode",
					o = t.ownerDocument,
					i = ir(t)[0],
					r = o.createTreeWalker(i, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
						acceptNode: t => ji(t) || "BR" == t.tagName ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
					});
				r.currentNode = t;
				const s = r[n]();
				if (null !== s) {
					const e = function(t, e) {
						const n = ir(t),
							o = ir(e);
						let i = 0;
						for (; n[i] == o[i] && n[i];) i++;
						return 0 === i ? null : n[i - 1]
					}(t, s);
					if (e && !ar(t, this.blockElements, e) && !ar(s, this.blockElements, e)) return s
				}
				return null
			}
		}

		function ar(t, e, n) {
			let o = ir(t);
			return n && (o = o.slice(o.indexOf(n) + 1)), o.some(t => t.tagName && e.includes(t.tagName.toLowerCase()))
		}

		function cr(t, e) {
			for (; t && t != nr.document;) e(t), t = t.parentNode
		}

		function lr(t, e) {
			const n = t.parentNode;
			return n && n.tagName && e.includes(n.tagName.toLowerCase())
		}

		function dr(t) {
			const e = Object.prototype.toString.apply(t);
			return "[object Window]" == e || "[object global]" == e
		}
		var ur = Vo({}, mn, {
			listenTo(t, ...e) {
				if (Ji(t) || dr(t)) {
					const n = this._getProxyEmitter(t) || new hr(t);
					n.attach(...e), t = n
				}
				mn.listenTo.call(this, t, ...e)
			},
			stopListening(t, e, n) {
				if (Ji(t) || dr(t)) {
					const e = this._getProxyEmitter(t);
					if (!e) return;
					t = e
				}
				mn.stopListening.call(this, t, e, n), t instanceof hr && t.detach(e)
			},
			_getProxyEmitter(t) {
				return e = this, n = fr(t), e[fn] && e[fn][n] ? e[fn][n].emitter : null;
				var e, n
			}
		});
		class hr {
			constructor(t) {
				pn(this, fr(t)), this._domNode = t
			}
		}

		function fr(t) {
			return t["data-ck-expando"] || (t["data-ck-expando"] = dn())
		}
		Vo(hr.prototype, mn, {
			attach(t, e, n = {}) {
				if (this._domListeners && this._domListeners[t]) return;
				const o = this._createDomListener(t, !!n.useCapture);
				this._domNode.addEventListener(t, o, !!n.useCapture), this._domListeners || (this._domListeners = {}), this._domListeners[
					t] = o
			},
			detach(t) {
				let e;
				!this._domListeners[t] || (e = this._events[t]) && e.callbacks.length || this._domListeners[t].removeListener()
			},
			_createDomListener(t, e) {
				const n = e => {
					this.fire(t, e)
				};
				return n.removeListener = () => {
					this._domNode.removeEventListener(t, n, e), delete this._domListeners[t]
				}, n
			}
		});
		class gr {
			constructor(t) {
				this.view = t, this.document = t.document, this.isEnabled = !1
			}
			enable() {
				this.isEnabled = !0
			}
			disable() {
				this.isEnabled = !1
			}
			destroy() {
				this.disable(), this.stopListening()
			}
		}
		xn(gr, ur);
		var mr = function(t) {
			return this.__data__.set(t, "__lodash_hash_undefined__"), this
		};
		var pr = function(t) {
			return this.__data__.has(t)
		};

		function br(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.__data__ = new kt; ++e < n;) this.add(t[e])
		}
		br.prototype.add = br.prototype.push = mr, br.prototype.has = pr;
		var wr = br;
		var kr = function(t, e) {
			for (var n = -1, o = null == t ? 0 : t.length; ++n < o;)
				if (e(t[n], n, t)) return !0;
			return !1
		};
		var _r = function(t, e) {
			return t.has(e)
		};
		var vr = function(t, e, n, o, i, r) {
			var s = 1 & n,
				a = t.length,
				c = e.length;
			if (a != c && !(s && c > a)) return !1;
			var l = r.get(t);
			if (l && r.get(e)) return l == e;
			var d = -1,
				u = !0,
				h = 2 & n ? new wr : void 0;
			for (r.set(t, e), r.set(e, t); ++d < a;) {
				var f = t[d],
					g = e[d];
				if (o) var m = s ? o(g, f, d, e, t, r) : o(f, g, d, t, e, r);
				if (void 0 !== m) {
					if (m) continue;
					u = !1;
					break
				}
				if (h) {
					if (!kr(e, (function(t, e) {
							if (!_r(h, e) && (f === t || i(f, t, n, o, r))) return h.push(e)
						}))) {
						u = !1;
						break
					}
				} else if (f !== g && !i(f, g, n, o, r)) {
					u = !1;
					break
				}
			}
			return r.delete(t), r.delete(e), u
		};
		var yr = function(t) {
			var e = -1,
				n = Array(t.size);
			return t.forEach((function(t, o) {
				n[++e] = [o, t]
			})), n
		};
		var xr = function(t) {
				var e = -1,
					n = Array(t.size);
				return t.forEach((function(t) {
					n[++e] = t
				})), n
			},
			Ar = i ? i.prototype : void 0,
			Cr = Ar ? Ar.valueOf : void 0;
		var Tr = function(t, e, n, o, i, r, s) {
				switch (n) {
					case "[object DataView]":
						if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
						t = t.buffer, e = e.buffer;
					case "[object ArrayBuffer]":
						return !(t.byteLength != e.byteLength || !r(new Re(t), new Re(e)));
					case "[object Boolean]":
					case "[object Date]":
					case "[object Number]":
						return A(+t, +e);
					case "[object Error]":
						return t.name == e.name && t.message == e.message;
					case "[object RegExp]":
					case "[object String]":
						return t == e + "";
					case "[object Map]":
						var a = yr;
					case "[object Set]":
						var c = 1 & o;
						if (a || (a = xr), t.size != e.size && !c) return !1;
						var l = s.get(t);
						if (l) return l == e;
						o |= 2, s.set(t, e);
						var d = vr(a(t), a(e), o, i, r, s);
						return s.delete(t), d;
					case "[object Symbol]":
						if (Cr) return Cr.call(t) == Cr.call(e)
				}
				return !1
			},
			Sr = Object.prototype.hasOwnProperty;
		var Pr = function(t, e, n, o, i, r) {
				var s = 1 & n,
					a = ke(t),
					c = a.length;
				if (c != ke(e).length && !s) return !1;
				for (var l = c; l--;) {
					var d = a[l];
					if (!(s ? d in e : Sr.call(e, d))) return !1
				}
				var u = r.get(t);
				if (u && r.get(e)) return u == e;
				var h = !0;
				r.set(t, e), r.set(e, t);
				for (var f = s; ++l < c;) {
					var g = t[d = a[l]],
						m = e[d];
					if (o) var p = s ? o(m, g, d, e, t, r) : o(g, m, d, t, e, r);
					if (!(void 0 === p ? g === m || i(g, m, n, o, r) : p)) {
						h = !1;
						break
					}
					f || (f = "constructor" == d)
				}
				if (h && !f) {
					var b = t.constructor,
						w = e.constructor;
					b == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof b && b instanceof b &&
						"function" == typeof w && w instanceof w || (h = !1)
				}
				return r.delete(t), r.delete(e), h
			},
			Er = Object.prototype.hasOwnProperty;
		var Mr = function(t, e, n, o, i, r) {
			var s = Dt(t),
				a = Dt(e),
				c = s ? "[object Array]" : Ie(t),
				l = a ? "[object Array]" : Ie(e),
				d = "[object Object]" == (c = "[object Arguments]" == c ? "[object Object]" : c),
				u = "[object Object]" == (l = "[object Arguments]" == l ? "[object Object]" : l),
				h = c == l;
			if (h && Object(Lt.a)(t)) {
				if (!Object(Lt.a)(e)) return !1;
				s = !0, d = !1
			}
			if (h && !d) return r || (r = new yt), s || Wt(t) ? vr(t, e, n, o, i, r) : Tr(t, e, c, n, o, i, r);
			if (!(1 & n)) {
				var f = d && Er.call(t, "__wrapped__"),
					g = u && Er.call(e, "__wrapped__");
				if (f || g) {
					var m = f ? t.value() : t,
						p = g ? e.value() : e;
					return r || (r = new yt), i(m, p, n, o, r)
				}
			}
			return !!h && (r || (r = new yt), Pr(t, e, n, o, i, r))
		};
		var Ir = function t(e, n, o, i, r) {
			return e === n || (null == e || null == n || !p(e) && !p(n) ? e != e && n != n : Mr(e, n, o, i, t, r))
		};
		var Nr = function(t, e, n) {
			var o = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0;
			return void 0 === o ? Ir(t, e, void 0, n) : !!o
		};
		class Or extends gr {
			constructor(t) {
				super(t), this._config = {
						childList: !0,
						characterData: !0,
						characterDataOldValue: !0,
						subtree: !0
					}, this.domConverter = t.domConverter, this.renderer = t._renderer, this._domElements = [], this._mutationObserver =
					new window.MutationObserver(this._onMutations.bind(this))
			}
			flush() {
				this._onMutations(this._mutationObserver.takeRecords())
			}
			observe(t) {
				this._domElements.push(t), this.isEnabled && this._mutationObserver.observe(t, this._config)
			}
			enable() {
				super.enable();
				for (const t of this._domElements) this._mutationObserver.observe(t, this._config)
			}
			disable() {
				super.disable(), this._mutationObserver.disconnect()
			}
			destroy() {
				super.destroy(), this._mutationObserver.disconnect()
			}
			_onMutations(t) {
				if (0 === t.length) return;
				const e = this.domConverter,
					n = new Map,
					o = new Set;
				for (const n of t)
					if ("childList" === n.type) {
						const t = e.mapDomToView(n.target);
						if (t && t.is("uiElement")) continue;
						t && !this._isBogusBrMutation(n) && o.add(t)
					} for (const i of t) {
					const t = e.mapDomToView(i.target);
					if ((!t || !t.is("uiElement")) && "characterData" === i.type) {
						const t = e.findCorrespondingViewText(i.target);
						t && !o.has(t.parent) ? n.set(t, {
							type: "text",
							oldText: t.data,
							newText: Hi(i.target),
							node: t
						}) : !t && Fi(i.target) && o.add(e.mapDomToView(i.target.parentNode))
					}
				}
				const i = [];
				for (const t of n.values()) this.renderer.markToSync("text", t.node), i.push(t);
				for (const t of o) {
					const n = e.mapViewToDom(t),
						o = Array.from(t.getChildren()),
						r = Array.from(e.domChildrenToView(n, {
							withChildren: !1
						}));
					Nr(o, r, a) || (this.renderer.markToSync("children", t), i.push({
						type: "children",
						oldChildren: o,
						newChildren: r,
						node: t
					}))
				}
				const r = t[0].target.ownerDocument.getSelection();
				let s = null;
				if (r && r.anchorNode) {
					const t = e.domPositionToView(r.anchorNode, r.anchorOffset),
						n = e.domPositionToView(r.focusNode, r.focusOffset);
					t && n && (s = new oi(t), s.setFocus(n))
				}

				function a(t, e) {
					if (!Array.isArray(t)) return t === e || !(!t.is("text") || !e.is("text")) && t.data === e.data
				}
				i.length && (this.document.fire("mutations", i, s), this.view.forceRender())
			}
			_isBogusBrMutation(t) {
				let e = null;
				return null === t.nextSibling && 0 === t.removedNodes.length && 1 == t.addedNodes.length && (e = this.domConverter
					.domToView(t.addedNodes[0], {
						withChildren: !1
					})), e && e.is("element", "br")
			}
		}
		class Rr {
			constructor(t, e, n) {
				this.view = t, this.document = t.document, this.domEvent = e, this.domTarget = e.target, Vo(this, n)
			}
			get target() {
				return this.view.domConverter.mapDomToView(this.domTarget)
			}
			preventDefault() {
				this.domEvent.preventDefault()
			}
			stopPropagation() {
				this.domEvent.stopPropagation()
			}
		}
		class Dr extends gr {
			constructor(t) {
				super(t), this.useCapture = !1
			}
			observe(t) {
				("string" == typeof this.domEventType ? [this.domEventType] : this.domEventType).forEach(e => {
					this.listenTo(t, e, (t, e) => {
						this.isEnabled && this.onDomEvent(e)
					}, {
						useCapture: this.useCapture
					})
				})
			}
			fire(t, e, n) {
				this.isEnabled && this.document.fire(t, new Rr(this.view, e, n))
			}
		}
		class Lr extends Dr {
			constructor(t) {
				super(t), this.domEventType = ["keydown", "keyup"]
			}
			onDomEvent(t) {
				this.fire(t.type, t, {
					keyCode: t.keyCode,
					altKey: t.altKey,
					ctrlKey: t.ctrlKey || t.metaKey,
					shiftKey: t.shiftKey,
					get keystroke() {
						return pi(this)
					}
				})
			}
		}
		var jr = function() {
				return o.a.Date.now()
			},
			Vr = /^\s+|\s+$/g,
			zr = /^[-+]0x[0-9a-f]+$/i,
			Br = /^0b[01]+$/i,
			Fr = /^0o[0-7]+$/i,
			Ur = parseInt;
		var Hr = function(t) {
				if ("number" == typeof t) return t;
				if (zn(t)) return NaN;
				if (j(t)) {
					var e = "function" == typeof t.valueOf ? t.valueOf() : t;
					t = j(e) ? e + "" : e
				}
				if ("string" != typeof t) return 0 === t ? t : +t;
				t = t.replace(Vr, "");
				var n = Br.test(t);
				return n || Fr.test(t) ? Ur(t.slice(2), n ? 2 : 8) : zr.test(t) ? NaN : +t
			},
			qr = Math.max,
			Wr = Math.min;
		var Gr = function(t, e, n) {
			var o, i, r, s, a, c, l = 0,
				d = !1,
				u = !1,
				h = !0;
			if ("function" != typeof t) throw new TypeError("Expected a function");

			function f(e) {
				var n = o,
					r = i;
				return o = i = void 0, l = e, s = t.apply(r, n)
			}

			function g(t) {
				return l = t, a = setTimeout(p, e), d ? f(t) : s
			}

			function m(t) {
				var n = t - c;
				return void 0 === c || n >= e || n < 0 || u && t - l >= r
			}

			function p() {
				var t = jr();
				if (m(t)) return b(t);
				a = setTimeout(p, function(t) {
					var n = e - (t - c);
					return u ? Wr(n, r - (t - l)) : n
				}(t))
			}

			function b(t) {
				return a = void 0, h && o ? f(t) : (o = i = void 0, s)
			}

			function w() {
				var t = jr(),
					n = m(t);
				if (o = arguments, i = this, c = t, n) {
					if (void 0 === a) return g(c);
					if (u) return clearTimeout(a), a = setTimeout(p, e), f(c)
				}
				return void 0 === a && (a = setTimeout(p, e)), s
			}
			return e = Hr(e) || 0, j(n) && (d = !!n.leading, r = (u = "maxWait" in n) ? qr(Hr(n.maxWait) || 0, e) : r, h =
				"trailing" in n ? !!n.trailing : h), w.cancel = function() {
				void 0 !== a && clearTimeout(a), l = 0, o = c = i = a = void 0
			}, w.flush = function() {
				return void 0 === a ? s : b(jr())
			}, w
		};
		class Yr extends gr {
			constructor(t) {
				super(t), this._fireSelectionChangeDoneDebounced = Gr(t => this.document.fire("selectionChangeDone", t), 200)
			}
			observe() {
				const t = this.document;
				t.on("keydown", (e, n) => {
					var o;
					t.selection.isFake && ((o = n.keyCode) == mi.arrowright || o == mi.arrowleft || o == mi.arrowup || o == mi
						.arrowdown) && this.isEnabled && (n.preventDefault(), this._handleSelectionMove(n.keyCode))
				}, {
					priority: "lowest"
				})
			}
			destroy() {
				super.destroy(), this._fireSelectionChangeDoneDebounced.cancel()
			}
			_handleSelectionMove(t) {
				const e = this.document.selection,
					n = new oi(e.getRanges(), {
						backward: e.isBackward,
						fake: !1
					});
				t != mi.arrowleft && t != mi.arrowup || n.setTo(n.getFirstPosition()), t != mi.arrowright && t != mi.arrowdown ||
					n.setTo(n.getLastPosition());
				const o = {
					oldSelection: e,
					newSelection: n,
					domSelection: null
				};
				this.document.fire("selectionChange", o), this._fireSelectionChangeDoneDebounced(o)
			}
		}
		class $r extends gr {
			constructor(t) {
				super(t), this.mutationObserver = t.getObserver(Or), this.selection = this.document.selection, this.domConverter =
					t.domConverter, this._documents = new WeakSet, this._fireSelectionChangeDoneDebounced = Gr(t => this.document
						.fire("selectionChangeDone", t), 200), this._clearInfiniteLoopInterval = setInterval(() => this._clearInfiniteLoop(),
						1e3), this._loopbackCounter = 0
			}
			observe(t) {
				const e = t.ownerDocument;
				this._documents.has(e) || (this.listenTo(e, "selectionchange", () => {
					this._handleSelectionChange(e)
				}), this._documents.add(e))
			}
			destroy() {
				super.destroy(), clearInterval(this._clearInfiniteLoopInterval), this._fireSelectionChangeDoneDebounced.cancel()
			}
			_handleSelectionChange(t) {
				if (!this.isEnabled) return;
				this.mutationObserver.flush();
				const e = t.defaultView.getSelection(),
					n = this.domConverter.domSelectionToView(e);
				if (0 != n.rangeCount) {
					if (this.view.hasDomSelection = !0, !(this.selection.isEqual(n) && this.domConverter.isDomSelectionCorrect(e) ||
							++this._loopbackCounter > 60))
						if (this.selection.isSimilar(n)) this.view.forceRender();
						else {
							const t = {
								oldSelection: this.selection,
								newSelection: n,
								domSelection: e
							};
							this.document.fire("selectionChange", t), this._fireSelectionChangeDoneDebounced(t)
						}
				} else this.view.hasDomSelection = !1
			}
			_clearInfiniteLoop() {
				this._loopbackCounter = 0
			}
		}
		class Kr extends Dr {
			constructor(t) {
				super(t), this.domEventType = ["focus", "blur"], this.useCapture = !0;
				const e = this.document;
				e.on("focus", () => {
					e.isFocused = !0, this._renderTimeoutId = setTimeout(() => t.forceRender(), 50)
				}), e.on("blur", (n, o) => {
					const i = e.selection.editableElement;
					null !== i && i !== o.target || (e.isFocused = !1, t.forceRender())
				})
			}
			onDomEvent(t) {
				this.fire(t.type, t)
			}
			destroy() {
				this._renderTimeoutId && clearTimeout(this._renderTimeoutId), super.destroy()
			}
		}
		class Qr extends Dr {
			constructor(t) {
				super(t), this.domEventType = ["compositionstart", "compositionupdate", "compositionend"];
				const e = this.document;
				e.on("compositionstart", () => {
					e.isComposing = !0
				}), e.on("compositionend", () => {
					e.isComposing = !1
				})
			}
			onDomEvent(t) {
				this.fire(t.type, t)
			}
		}
		class Jr extends Dr {
			constructor(t) {
				super(t), this.domEventType = ["beforeinput"]
			}
			onDomEvent(t) {
				this.fire(t.type, t)
			}
		}

		function Zr(t) {
			return "[object Range]" == Object.prototype.toString.apply(t)
		}

		function Xr(t) {
			const e = t.ownerDocument.defaultView.getComputedStyle(t);
			return {
				top: parseInt(e.borderTopWidth, 10),
				right: parseInt(e.borderRightWidth, 10),
				bottom: parseInt(e.borderBottomWidth, 10),
				left: parseInt(e.borderLeftWidth, 10)
			}
		}
		const ts = ["top", "right", "bottom", "left", "width", "height"];
		class es {
			constructor(t) {
				const e = Zr(t);
				if (Object.defineProperty(this, "_source", {
						value: t._source || t,
						writable: !0,
						enumerable: !1
					}), nn(t) || e) ns(this, e ? es.getDomRangeRects(t)[0] : t.getBoundingClientRect());
				else if (dr(t)) {
					const {
						innerWidth: e,
						innerHeight: n
					} = t;
					ns(this, {
						top: 0,
						right: e,
						bottom: n,
						left: 0,
						width: e,
						height: n
					})
				} else ns(this, t)
			}
			clone() {
				return new es(this)
			}
			moveTo(t, e) {
				return this.top = e, this.right = t + this.width, this.bottom = e + this.height, this.left = t, this
			}
			moveBy(t, e) {
				return this.top += e, this.right += t, this.left += t, this.bottom += e, this
			}
			getIntersection(t) {
				const e = {
					top: Math.max(this.top, t.top),
					right: Math.min(this.right, t.right),
					bottom: Math.min(this.bottom, t.bottom),
					left: Math.max(this.left, t.left)
				};
				return e.width = e.right - e.left, e.height = e.bottom - e.top, e.width < 0 || e.height < 0 ? null : new es(e)
			}
			getIntersectionArea(t) {
				const e = this.getIntersection(t);
				return e ? e.getArea() : 0
			}
			getArea() {
				return this.width * this.height
			}
			getVisible() {
				const t = this._source;
				let e = this.clone();
				if (!os(t)) {
					let n = t.parentNode || t.commonAncestorContainer;
					for (; n && !os(n);) {
						const t = new es(n),
							o = e.getIntersection(t);
						if (!o) return null;
						o.getArea() < e.getArea() && (e = o), n = n.parentNode
					}
				}
				return e
			}
			isEqual(t) {
				for (const e of ts)
					if (this[e] !== t[e]) return !1;
				return !0
			}
			contains(t) {
				const e = this.getIntersection(t);
				return !(!e || !e.isEqual(t))
			}
			excludeScrollbarsAndBorders() {
				const t = this._source;
				let e, n, o;
				if (dr(t)) e = t.innerWidth - t.document.documentElement.clientWidth, n = t.innerHeight - t.document.documentElement
					.clientHeight, o = t.getComputedStyle(t.document.documentElement).direction;
				else {
					const i = Xr(this._source);
					e = t.offsetWidth - t.clientWidth - i.left - i.right, n = t.offsetHeight - t.clientHeight - i.top - i.bottom,
						o = t.ownerDocument.defaultView.getComputedStyle(t).direction, this.left += i.left, this.top += i.top, this
						.right -= i.right, this.bottom -= i.bottom, this.width = this.right - this.left, this.height = this.bottom -
						this.top
				}
				return this.width -= e, "ltr" === o ? this.right -= e : this.left += e, this.height -= n, this.bottom -= n,
					this
			}
			static getDomRangeRects(t) {
				const e = [],
					n = Array.from(t.getClientRects());
				if (n.length)
					for (const t of n) e.push(new es(t));
				else {
					let n = t.startContainer;
					ji(n) && (n = n.parentNode);
					const o = new es(n.getBoundingClientRect());
					o.right = o.left, o.width = 0, e.push(o)
				}
				return e
			}
		}

		function ns(t, e) {
			for (const n of ts) t[n] = e[n]
		}

		function os(t) {
			return !!nn(t) && t === t.ownerDocument.body
		}

		function is({
			target: t,
			viewportOffset: e = 0
		}) {
			const n = us(t);
			let o = n,
				i = null;
			for (; o;) {
				let r;
				r = hs(o == n ? t : i), ss(r, () => fs(t, o));
				const s = fs(t, o);
				if (rs(o, s, e), o.parent != o) {
					if (i = o.frameElement, o = o.parent, !i) return
				} else o = null
			}
		}

		function rs(t, e, n) {
			const o = e.clone().moveBy(0, n),
				i = e.clone().moveBy(0, -n),
				r = new es(t).excludeScrollbarsAndBorders();
			if (![i, o].every(t => r.contains(t))) {
				let {
					scrollX: s,
					scrollY: a
				} = t;
				cs(i, r) ? a -= r.top - e.top + n : as(o, r) && (a += e.bottom - r.bottom + n), ls(e, r) ? s -= r.left - e.left +
					n : ds(e, r) && (s += e.right - r.right + n), t.scrollTo(s, a)
			}
		}

		function ss(t, e) {
			const n = us(t);
			let o, i;
			for (; t != n.document.body;) i = e(), o = new es(t).excludeScrollbarsAndBorders(), o.contains(i) || (cs(i, o) ?
				t.scrollTop -= o.top - i.top : as(i, o) && (t.scrollTop += i.bottom - o.bottom), ls(i, o) ? t.scrollLeft -= o
				.left - i.left : ds(i, o) && (t.scrollLeft += i.right - o.right)), t = t.parentNode
		}

		function as(t, e) {
			return t.bottom > e.bottom
		}

		function cs(t, e) {
			return t.top < e.top
		}

		function ls(t, e) {
			return t.left < e.left
		}

		function ds(t, e) {
			return t.right > e.right
		}

		function us(t) {
			return Zr(t) ? t.startContainer.ownerDocument.defaultView : t.ownerDocument.defaultView
		}

		function hs(t) {
			if (Zr(t)) {
				let e = t.commonAncestorContainer;
				return ji(e) && (e = e.parentNode), e
			}
			return t.parentNode
		}

		function fs(t, e) {
			const n = us(t),
				o = new es(t);
			if (n === e) return o; {
				let t = n;
				for (; t != e;) {
					const e = t.frameElement,
						n = new es(e).excludeScrollbarsAndBorders();
					o.moveBy(n.left, n.top), t = t.parent
				}
			}
			return o
		}
		Object.assign({}, {
			scrollViewportToShowTarget: is,
			scrollAncestorsToShowTarget: function(t) {
				ss(hs(t), () => new es(t))
			}
		});
		class gs {
			constructor(t) {
				this.document = new ri(t), this.domConverter = new sr(this.document), this.domRoots = new Map, this.set(
						"isRenderingInProgress", !1), this.set("hasDomSelection", !1), this._renderer = new Zi(this.domConverter,
						this.document.selection), this._renderer.bind("isFocused").to(this.document), this._initialDomRootAttributes =
					new WeakMap, this._observers = new Map, this._ongoingChange = !1, this._postFixersInProgress = !1, this._renderingDisabled = !
					1, this._hasChangedSinceTheLastRendering = !1, this._writer = new Si(this.document), this.addObserver(Or),
					this.addObserver($r), this.addObserver(Kr), this.addObserver(Lr), this.addObserver(Yr), this.addObserver(Qr),
					hi.isAndroid && this.addObserver(Jr), this.document.on("keydown", qi), Ai(this), this.on("render", () => {
						this._render(), this.document.fire("layoutChanged"), this._hasChangedSinceTheLastRendering = !1
					}), this.listenTo(this.document.selection, "change", () => {
						this._hasChangedSinceTheLastRendering = !0
					})
			}
			attachDomRoot(t, e = "main") {
				const n = this.document.getRoot(e);
				n._name = t.tagName.toLowerCase();
				const o = {};
				for (const {
						name: e,
						value: i
					} of Array.from(t.attributes)) o[e] = i, "class" === e ? this._writer.addClass(i.split(" "), n) : this._writer
					.setAttribute(e, i, n);
				this._initialDomRootAttributes.set(t, o);
				const i = () => {
					this._writer.setAttribute("contenteditable", !n.isReadOnly, n), n.isReadOnly ? this._writer.addClass(
						"ck-read-only", n) : this._writer.removeClass("ck-read-only", n)
				};
				i(), this.domRoots.set(e, t), this.domConverter.bindElements(t, n), this._renderer.markToSync("children", n),
					this._renderer.markToSync("attributes", n), this._renderer.domDocuments.add(t.ownerDocument), n.on(
						"change:children", (t, e) => this._renderer.markToSync("children", e)), n.on("change:attributes", (t, e) =>
						this._renderer.markToSync("attributes", e)), n.on("change:text", (t, e) => this._renderer.markToSync("text",
						e)), n.on("change:isReadOnly", () => this.change(i)), n.on("change", () => {
						this._hasChangedSinceTheLastRendering = !0
					});
				for (const n of this._observers.values()) n.observe(t, e)
			}
			detachDomRoot(t) {
				const e = this.domRoots.get(t);
				Array.from(e.attributes).forEach(({
					name: t
				}) => e.removeAttribute(t));
				const n = this._initialDomRootAttributes.get(e);
				for (const t in n) e.setAttribute(t, n[t]);
				this.domRoots.delete(t), this.domConverter.unbindDomElement(e)
			}
			getDomRoot(t = "main") {
				return this.domRoots.get(t)
			}
			addObserver(t) {
				let e = this._observers.get(t);
				if (e) return e;
				e = new t(this), this._observers.set(t, e);
				for (const [t, n] of this.domRoots) e.observe(n, t);
				return e.enable(), e
			}
			getObserver(t) {
				return this._observers.get(t)
			}
			disableObservers() {
				for (const t of this._observers.values()) t.disable()
			}
			enableObservers() {
				for (const t of this._observers.values()) t.enable()
			}
			scrollToTheSelection() {
				const t = this.document.selection.getFirstRange();
				t && is({
					target: this.domConverter.viewRangeToDom(t),
					viewportOffset: 20
				})
			}
			focus() {
				if (!this.document.isFocused) {
					const t = this.document.selection.editableElement;
					t && (this.domConverter.focus(t), this.forceRender())
				}
			}
			change(t) {
				if (this.isRenderingInProgress || this._postFixersInProgress) throw new hn.b(
					"cannot-change-view-tree: Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behavior and inconsistency between the DOM and the view.",
					this);
				try {
					if (this._ongoingChange) return t(this._writer);
					this._ongoingChange = !0;
					const e = t(this._writer);
					return this._ongoingChange = !1, !this._renderingDisabled && this._hasChangedSinceTheLastRendering && (this._postFixersInProgress = !
						0, this.document._callPostFixers(this._writer), this._postFixersInProgress = !1, this.fire("render")), e
				} catch (t) {
					hn.b.rethrowUnexpectedError(t, this)
				}
			}
			forceRender() {
				this._hasChangedSinceTheLastRendering = !0, this.change(() => {})
			}
			destroy() {
				for (const t of this._observers.values()) t.destroy();
				this.document.destroy(), this.stopListening()
			}
			createPositionAt(t, e) {
				return Xo._createAt(t, e)
			}
			createPositionAfter(t) {
				return Xo._createAfter(t)
			}
			createPositionBefore(t) {
				return Xo._createBefore(t)
			}
			createRange(t, e) {
				return new ti(t, e)
			}
			createRangeOn(t) {
				return ti._createOn(t)
			}
			createRangeIn(t) {
				return ti._createIn(t)
			}
			createSelection(t, e, n) {
				return new oi(t, e, n)
			}
			_disableRendering(t) {
				this._renderingDisabled = t, 0 == t && this.change(() => {})
			}
			_render() {
				this.isRenderingInProgress = !0, this.disableObservers(), this._renderer.render(), this.enableObservers(),
					this.isRenderingInProgress = !1
			}
		}
		xn(gs, Ho);
		class ms {
			constructor(t) {
				this.parent = null, this._attrs = Ln(t)
			}
			get index() {
				let t;
				if (!this.parent) return null;
				if (null === (t = this.parent.getChildIndex(this))) throw new hn.b(
					"model-node-not-found-in-parent: The node's parent does not contain this node.", this);
				return t
			}
			get startOffset() {
				let t;
				if (!this.parent) return null;
				if (null === (t = this.parent.getChildStartOffset(this))) throw new hn.b(
					"model-node-not-found-in-parent: The node's parent does not contain this node.", this);
				return t
			}
			get offsetSize() {
				return 1
			}
			get endOffset() {
				return this.parent ? this.startOffset + this.offsetSize : null
			}
			get nextSibling() {
				const t = this.index;
				return null !== t && this.parent.getChild(t + 1) || null
			}
			get previousSibling() {
				const t = this.index;
				return null !== t && this.parent.getChild(t - 1) || null
			}
			get root() {
				let t = this;
				for (; t.parent;) t = t.parent;
				return t
			}
			isAttached() {
				return this.root.is("rootElement")
			}
			getPath() {
				const t = [];
				let e = this;
				for (; e.parent;) t.unshift(e.startOffset), e = e.parent;
				return t
			}
			getAncestors(t = {
				includeSelf: !1,
				parentFirst: !1
			}) {
				const e = [];
				let n = t.includeSelf ? this : this.parent;
				for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
				return e
			}
			getCommonAncestor(t, e = {}) {
				const n = this.getAncestors(e),
					o = t.getAncestors(e);
				let i = 0;
				for (; n[i] == o[i] && n[i];) i++;
				return 0 === i ? null : n[i - 1]
			}
			isBefore(t) {
				if (this == t) return !1;
				if (this.root !== t.root) return !1;
				const e = this.getPath(),
					n = t.getPath(),
					o = In(e, n);
				switch (o) {
					case "prefix":
						return !0;
					case "extension":
						return !1;
					default:
						return e[o] < n[o]
				}
			}
			isAfter(t) {
				return this != t && (this.root === t.root && !this.isBefore(t))
			}
			hasAttribute(t) {
				return this._attrs.has(t)
			}
			getAttribute(t) {
				return this._attrs.get(t)
			}
			getAttributes() {
				return this._attrs.entries()
			}
			getAttributeKeys() {
				return this._attrs.keys()
			}
			toJSON() {
				const t = {};
				return this._attrs.size && (t.attributes = Array.from(this._attrs).reduce((t, e) => (t[e[0]] = e[1], t), {})),
					t
			}
			is(t) {
				return "node" === t || "model:node" === t
			}
			_clone() {
				return new ms(this._attrs)
			}
			_remove() {
				this.parent._removeChildren(this.index)
			}
			_setAttribute(t, e) {
				this._attrs.set(t, e)
			}
			_setAttributesTo(t) {
				this._attrs = Ln(t)
			}
			_removeAttribute(t) {
				return this._attrs.delete(t)
			}
			_clearAttributes() {
				this._attrs.clear()
			}
		}
		class ps extends ms {
			constructor(t, e) {
				super(e), this._data = t || ""
			}
			get offsetSize() {
				return this.data.length
			}
			get data() {
				return this._data
			}
			is(t) {
				return "text" === t || "model:text" === t || "node" === t || "model:node" === t
			}
			toJSON() {
				const t = super.toJSON();
				return t.data = this.data, t
			}
			_clone() {
				return new ps(this.data, this.getAttributes())
			}
			static fromJSON(t) {
				return new ps(t.data, t.attributes)
			}
		}
		class bs {
			constructor(t, e, n) {
				if (this.textNode = t, e < 0 || e > t.offsetSize) throw new hn.b(
					"model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.", this);
				if (n < 0 || e + n > t.offsetSize) throw new hn.b(
					"model-textproxy-wrong-length: Given length value is incorrect.", this);
				this.data = t.data.substring(e, e + n), this.offsetInText = e
			}
			get startOffset() {
				return null !== this.textNode.startOffset ? this.textNode.startOffset + this.offsetInText : null
			}
			get offsetSize() {
				return this.data.length
			}
			get endOffset() {
				return null !== this.startOffset ? this.startOffset + this.offsetSize : null
			}
			get isPartial() {
				return this.offsetSize !== this.textNode.offsetSize
			}
			get parent() {
				return this.textNode.parent
			}
			get root() {
				return this.textNode.root
			}
			is(t) {
				return "textProxy" === t || "model:textProxy" === t
			}
			getPath() {
				const t = this.textNode.getPath();
				return t.length > 0 && (t[t.length - 1] += this.offsetInText), t
			}
			getAncestors(t = {
				includeSelf: !1,
				parentFirst: !1
			}) {
				const e = [];
				let n = t.includeSelf ? this : this.parent;
				for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
				return e
			}
			hasAttribute(t) {
				return this.textNode.hasAttribute(t)
			}
			getAttribute(t) {
				return this.textNode.getAttribute(t)
			}
			getAttributes() {
				return this.textNode.getAttributes()
			}
			getAttributeKeys() {
				return this.textNode.getAttributeKeys()
			}
		}
		class ws {
			constructor(t) {
				this._nodes = [], t && this._insertNodes(0, t)
			} [Symbol.iterator]() {
				return this._nodes[Symbol.iterator]()
			}
			get length() {
				return this._nodes.length
			}
			get maxOffset() {
				return this._nodes.reduce((t, e) => t + e.offsetSize, 0)
			}
			getNode(t) {
				return this._nodes[t] || null
			}
			getNodeIndex(t) {
				const e = this._nodes.indexOf(t);
				return -1 == e ? null : e
			}
			getNodeStartOffset(t) {
				const e = this.getNodeIndex(t);
				return null === e ? null : this._nodes.slice(0, e).reduce((t, e) => t + e.offsetSize, 0)
			}
			indexToOffset(t) {
				if (t == this._nodes.length) return this.maxOffset;
				const e = this._nodes[t];
				if (!e) throw new hn.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.",
					this);
				return this.getNodeStartOffset(e)
			}
			offsetToIndex(t) {
				let e = 0;
				for (const n of this._nodes) {
					if (t >= e && t < e + n.offsetSize) return this.getNodeIndex(n);
					e += n.offsetSize
				}
				if (e != t) throw new hn.b(
					"model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.", this, {
						offset: t,
						nodeList: this
					});
				return this.length
			}
			_insertNodes(t, e) {
				for (const t of e)
					if (!(t instanceof ms)) throw new hn.b(
						"model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.", this);
				this._nodes.splice(t, 0, ...e)
			}
			_removeNodes(t, e = 1) {
				return this._nodes.splice(t, e)
			}
			toJSON() {
				return this._nodes.map(t => t.toJSON())
			}
		}
		class ks extends ms {
			constructor(t, e, n) {
				super(e), this.name = t, this._children = new ws, n && this._insertChild(0, n)
			}
			get childCount() {
				return this._children.length
			}
			get maxOffset() {
				return this._children.maxOffset
			}
			get isEmpty() {
				return 0 === this.childCount
			}
			is(t, e = null) {
				return e ? e === this.name && ("element" === t || "model:element" === t) : "element" === t || "model:element" ===
					t || t === this.name || t === "model:" + this.name || "node" === t || "model:node" === t
			}
			getChild(t) {
				return this._children.getNode(t)
			}
			getChildren() {
				return this._children[Symbol.iterator]()
			}
			getChildIndex(t) {
				return this._children.getNodeIndex(t)
			}
			getChildStartOffset(t) {
				return this._children.getNodeStartOffset(t)
			}
			offsetToIndex(t) {
				return this._children.offsetToIndex(t)
			}
			getNodeByPath(t) {
				let e = this;
				for (const n of t) e = e.getChild(e.offsetToIndex(n));
				return e
			}
			toJSON() {
				const t = super.toJSON();
				if (t.name = this.name, this._children.length > 0) {
					t.children = [];
					for (const e of this._children) t.children.push(e.toJSON())
				}
				return t
			}
			_clone(t = !1) {
				const e = t ? Array.from(this._children).map(t => t._clone(!0)) : null;
				return new ks(this.name, this.getAttributes(), e)
			}
			_appendChild(t) {
				this._insertChild(this.childCount, t)
			}
			_insertChild(t, e) {
				const n = function(t) {
					if ("string" == typeof t) return [new ps(t)];
					yn(t) || (t = [t]);
					return Array.from(t).map(t => "string" == typeof t ? new ps(t) : t instanceof bs ? new ps(t.data, t.getAttributes()) :
						t)
				}(e);
				for (const t of n) null !== t.parent && t._remove(), t.parent = this;
				this._children._insertNodes(t, n)
			}
			_removeChildren(t, e = 1) {
				const n = this._children._removeNodes(t, e);
				for (const t of n) t.parent = null;
				return n
			}
			static fromJSON(t) {
				let e = null;
				if (t.children) {
					e = [];
					for (const n of t.children) n.name ? e.push(ks.fromJSON(n)) : e.push(ps.fromJSON(n))
				}
				return new ks(t.name, t.attributes, e)
			}
		}
		class _s {
			constructor(t = {}) {
				if (!t.boundaries && !t.startPosition) throw new hn.b(
					"model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.", null);
				const e = t.direction || "forward";
				if ("forward" != e && "backward" != e) throw new hn.b(
					"model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", t, {
						direction: e
					});
				this.direction = e, this.boundaries = t.boundaries || null, t.startPosition ? this.position = t.startPosition
					.clone() : this.position = ys._createAt(this.boundaries["backward" == this.direction ? "end" : "start"]),
					this.position.stickiness = "toNone", this.singleCharacters = !!t.singleCharacters, this.shallow = !!t.shallow,
					this.ignoreElementEnd = !!t.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start
					.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null, this._visitedParent =
					this.position.parent
			} [Symbol.iterator]() {
				return this
			}
			skip(t) {
				let e, n, o, i;
				do {
					o = this.position, i = this._visitedParent, ({
						done: e,
						value: n
					} = this.next())
				} while (!e && t(n));
				e || (this.position = o, this._visitedParent = i)
			}
			next() {
				return "forward" == this.direction ? this._next() : this._previous()
			}
			_next() {
				const t = this.position,
					e = this.position.clone(),
					n = this._visitedParent;
				if (null === n.parent && e.offset === n.maxOffset) return {
					done: !0
				};
				if (n === this._boundaryEndParent && e.offset == this.boundaries.end.offset) return {
					done: !0
				};
				const o = e.parent,
					i = xs(e, o),
					r = i || As(e, o, i);
				if (r instanceof ks) return this.shallow ? e.offset++ : (e.path.push(0), this._visitedParent = r), this.position =
					e, vs("elementStart", r, t, e, 1);
				if (r instanceof ps) {
					let o;
					if (this.singleCharacters) o = 1;
					else {
						let t = r.endOffset;
						this._boundaryEndParent == n && this.boundaries.end.offset < t && (t = this.boundaries.end.offset), o = t -
							e.offset
					}
					const i = e.offset - r.startOffset,
						s = new bs(r, i, o);
					return e.offset += o, this.position = e, vs("text", s, t, e, o)
				}
				return e.path.pop(), e.offset++, this.position = e, this._visitedParent = n.parent, this.ignoreElementEnd ?
					this._next() : vs("elementEnd", n, t, e)
			}
			_previous() {
				const t = this.position,
					e = this.position.clone(),
					n = this._visitedParent;
				if (null === n.parent && 0 === e.offset) return {
					done: !0
				};
				if (n == this._boundaryStartParent && e.offset == this.boundaries.start.offset) return {
					done: !0
				};
				const o = e.parent,
					i = xs(e, o),
					r = i || Cs(e, o, i);
				if (r instanceof ks) return e.offset--, this.shallow ? (this.position = e, vs("elementStart", r, t, e, 1)) :
					(e.path.push(r.maxOffset), this.position = e, this._visitedParent = r, this.ignoreElementEnd ? this._previous() :
						vs("elementEnd", r, t, e));
				if (r instanceof ps) {
					let o;
					if (this.singleCharacters) o = 1;
					else {
						let t = r.startOffset;
						this._boundaryStartParent == n && this.boundaries.start.offset > t && (t = this.boundaries.start.offset), o =
							e.offset - t
					}
					const i = e.offset - r.startOffset,
						s = new bs(r, i - o, o);
					return e.offset -= o, this.position = e, vs("text", s, t, e, o)
				}
				return e.path.pop(), this.position = e, this._visitedParent = n.parent, vs("elementStart", n, t, e, 1)
			}
		}

		function vs(t, e, n, o, i) {
			return {
				done: !1,
				value: {
					type: t,
					item: e,
					previousPosition: n,
					nextPosition: o,
					length: i
				}
			}
		}
		class ys {
			constructor(t, e, n = "toNone") {
				if (!t.is("element") && !t.is("documentFragment")) throw new hn.b(
					"model-position-root-invalid: Position root invalid.", t);
				if (!(e instanceof Array) || 0 === e.length) throw new hn.b(
					"model-position-path-incorrect-format: Position path must be an array with at least one item.", t, {
						path: e
					});
				t.is("rootElement") ? e = e.slice() : (e = [...t.getPath(), ...e], t = t.root), this.root = t, this.path = e,
					this.stickiness = n
			}
			get offset() {
				return this.path[this.path.length - 1]
			}
			set offset(t) {
				this.path[this.path.length - 1] = t
			}
			get parent() {
				let t = this.root;
				for (let e = 0; e < this.path.length - 1; e++)
					if (t = t.getChild(t.offsetToIndex(this.path[e])), !t) throw new hn.b(
						"model-position-path-incorrect: The position's path is incorrect.", this, {
							position: this
						});
				if (t.is("text")) throw new hn.b("model-position-path-incorrect: The position's path is incorrect.", this, {
					position: this
				});
				return t
			}
			get index() {
				return this.parent.offsetToIndex(this.offset)
			}
			get textNode() {
				return xs(this, this.parent)
			}
			get nodeAfter() {
				const t = this.parent;
				return As(this, t, xs(this, t))
			}
			get nodeBefore() {
				const t = this.parent;
				return Cs(this, t, xs(this, t))
			}
			get isAtStart() {
				return 0 === this.offset
			}
			get isAtEnd() {
				return this.offset == this.parent.maxOffset
			}
			compareWith(t) {
				if (this.root != t.root) return "different";
				const e = In(this.path, t.path);
				switch (e) {
					case "same":
						return "same";
					case "prefix":
						return "before";
					case "extension":
						return "after";
					default:
						return this.path[e] < t.path[e] ? "before" : "after"
				}
			}
			getLastMatchingPosition(t, e = {}) {
				e.startPosition = this;
				const n = new _s(e);
				return n.skip(t), n.position
			}
			getParentPath() {
				return this.path.slice(0, -1)
			}
			getAncestors() {
				const t = this.parent;
				return t.is("documentFragment") ? [t] : t.getAncestors({
					includeSelf: !0
				})
			}
			getCommonPath(t) {
				if (this.root != t.root) return [];
				const e = In(this.path, t.path),
					n = "string" == typeof e ? Math.min(this.path.length, t.path.length) : e;
				return this.path.slice(0, n)
			}
			getCommonAncestor(t) {
				const e = this.getAncestors(),
					n = t.getAncestors();
				let o = 0;
				for (; e[o] == n[o] && e[o];) o++;
				return 0 === o ? null : e[o - 1]
			}
			getShiftedBy(t) {
				const e = this.clone(),
					n = e.offset + t;
				return e.offset = n < 0 ? 0 : n, e
			}
			isAfter(t) {
				return "after" == this.compareWith(t)
			}
			isBefore(t) {
				return "before" == this.compareWith(t)
			}
			isEqual(t) {
				return "same" == this.compareWith(t)
			}
			isTouching(t) {
				let e = null,
					n = null;
				switch (this.compareWith(t)) {
					case "same":
						return !0;
					case "before":
						e = ys._createAt(this), n = ys._createAt(t);
						break;
					case "after":
						e = ys._createAt(t), n = ys._createAt(this);
						break;
					default:
						return !1
				}
				let o = e.parent;
				for (; e.path.length + n.path.length;) {
					if (e.isEqual(n)) return !0;
					if (e.path.length > n.path.length) {
						if (e.offset !== o.maxOffset) return !1;
						e.path = e.path.slice(0, -1), o = o.parent, e.offset++
					} else {
						if (0 !== n.offset) return !1;
						n.path = n.path.slice(0, -1)
					}
				}
			}
			is(t) {
				return "position" === t || "model:position" === t
			}
			hasSameParentAs(t) {
				if (this.root !== t.root) return !1;
				return "same" == In(this.getParentPath(), t.getParentPath())
			}
			getTransformedByOperation(t) {
				let e;
				switch (t.type) {
					case "insert":
						e = this._getTransformedByInsertOperation(t);
						break;
					case "move":
					case "remove":
					case "reinsert":
						e = this._getTransformedByMoveOperation(t);
						break;
					case "split":
						e = this._getTransformedBySplitOperation(t);
						break;
					case "merge":
						e = this._getTransformedByMergeOperation(t);
						break;
					default:
						e = ys._createAt(this)
				}
				return e
			}
			_getTransformedByInsertOperation(t) {
				return this._getTransformedByInsertion(t.position, t.howMany)
			}
			_getTransformedByMoveOperation(t) {
				return this._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany)
			}
			_getTransformedBySplitOperation(t) {
				const e = t.movedRange;
				return e.containsPosition(this) || e.start.isEqual(this) && "toNext" == this.stickiness ? this._getCombined(t
					.splitPosition, t.moveTargetPosition) : t.graveyardPosition ? this._getTransformedByMove(t.graveyardPosition,
					t.insertionPosition, 1) : this._getTransformedByInsertion(t.insertionPosition, 1)
			}
			_getTransformedByMergeOperation(t) {
				const e = t.movedRange;
				let n;
				return e.containsPosition(this) || e.start.isEqual(this) ? (n = this._getCombined(t.sourcePosition, t.targetPosition),
						t.sourcePosition.isBefore(t.targetPosition) && (n = n._getTransformedByDeletion(t.deletionPosition, 1))) :
					n = this.isEqual(t.deletionPosition) ? ys._createAt(t.deletionPosition) : this._getTransformedByMove(t.deletionPosition,
						t.graveyardPosition, 1), n
			}
			_getTransformedByDeletion(t, e) {
				const n = ys._createAt(this);
				if (this.root != t.root) return n;
				if ("same" == In(t.getParentPath(), this.getParentPath())) {
					if (t.offset < this.offset) {
						if (t.offset + e > this.offset) return null;
						n.offset -= e
					}
				} else if ("prefix" == In(t.getParentPath(), this.getParentPath())) {
					const o = t.path.length - 1;
					if (t.offset <= this.path[o]) {
						if (t.offset + e > this.path[o]) return null;
						n.path[o] -= e
					}
				}
				return n
			}
			_getTransformedByInsertion(t, e) {
				const n = ys._createAt(this);
				if (this.root != t.root) return n;
				if ("same" == In(t.getParentPath(), this.getParentPath()))(t.offset < this.offset || t.offset == this.offset &&
					"toPrevious" != this.stickiness) && (n.offset += e);
				else if ("prefix" == In(t.getParentPath(), this.getParentPath())) {
					const o = t.path.length - 1;
					t.offset <= this.path[o] && (n.path[o] += e)
				}
				return n
			}
			_getTransformedByMove(t, e, n) {
				if (e = e._getTransformedByDeletion(t, n), t.isEqual(e)) return ys._createAt(this);
				const o = this._getTransformedByDeletion(t, n);
				return null === o || t.isEqual(this) && "toNext" == this.stickiness || t.getShiftedBy(n).isEqual(this) &&
					"toPrevious" == this.stickiness ? this._getCombined(t, e) : o._getTransformedByInsertion(e, n)
			}
			_getCombined(t, e) {
				const n = t.path.length - 1,
					o = ys._createAt(e);
				return o.stickiness = this.stickiness, o.offset = o.offset + this.path[n] - t.offset, o.path = [...o.path,
					...this.path.slice(n + 1)
				], o
			}
			toJSON() {
				return {
					root: this.root.toJSON(),
					path: Array.from(this.path),
					stickiness: this.stickiness
				}
			}
			clone() {
				return new this.constructor(this.root, this.path, this.stickiness)
			}
			static _createAt(t, e, n = "toNone") {
				if (t instanceof ys) return new ys(t.root, t.path, t.stickiness); {
					const o = t;
					if ("end" == e) e = o.maxOffset;
					else {
						if ("before" == e) return this._createBefore(o, n);
						if ("after" == e) return this._createAfter(o, n);
						if (0 !== e && !e) throw new hn.b(
							"model-createPositionAt-offset-required: Model#createPositionAt() requires the offset when the first parameter is a model item.",
							[this, t])
					}
					if (!o.is("element") && !o.is("documentFragment")) throw new hn.b(
						"model-position-parent-incorrect: Position parent have to be a element or document fragment.", [this, t]);
					const i = o.getPath();
					return i.push(e), new this(o.root, i, n)
				}
			}
			static _createAfter(t, e) {
				if (!t.parent) throw new hn.b("model-position-after-root: You cannot make a position after root.", [this, t], {
					root: t
				});
				return this._createAt(t.parent, t.endOffset, e)
			}
			static _createBefore(t, e) {
				if (!t.parent) throw new hn.b("model-position-before-root: You cannot make a position before root.", t, {
					root: t
				});
				return this._createAt(t.parent, t.startOffset, e)
			}
			static fromJSON(t, e) {
				if ("$graveyard" === t.root) {
					const n = new ys(e.graveyard, t.path);
					return n.stickiness = t.stickiness, n
				}
				if (!e.getRoot(t.root)) throw new hn.b(
					"model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.",
					e, {
						rootName: t.root
					});
				return new ys(e.getRoot(t.root), t.path, t.stickiness)
			}
		}

		function xs(t, e) {
			const n = e.getChild(e.offsetToIndex(t.offset));
			return n && n.is("text") && n.startOffset < t.offset ? n : null
		}

		function As(t, e, n) {
			return null !== n ? null : e.getChild(e.offsetToIndex(t.offset))
		}

		function Cs(t, e, n) {
			return null !== n ? null : e.getChild(e.offsetToIndex(t.offset) - 1)
		}
		class Ts {
			constructor(t, e = null) {
				this.start = ys._createAt(t), this.end = e ? ys._createAt(e) : ys._createAt(t), this.start.stickiness = this.isCollapsed ?
					"toNone" : "toNext", this.end.stickiness = this.isCollapsed ? "toNone" : "toPrevious"
			}*[Symbol.iterator]() {
				yield* new _s({
					boundaries: this,
					ignoreElementEnd: !0
				})
			}
			get isCollapsed() {
				return this.start.isEqual(this.end)
			}
			get isFlat() {
				return "same" == In(this.start.getParentPath(), this.end.getParentPath())
			}
			get root() {
				return this.start.root
			}
			containsPosition(t) {
				return t.isAfter(this.start) && t.isBefore(this.end)
			}
			containsRange(t, e = !1) {
				t.isCollapsed && (e = !1);
				const n = this.containsPosition(t.start) || e && this.start.isEqual(t.start),
					o = this.containsPosition(t.end) || e && this.end.isEqual(t.end);
				return n && o
			}
			containsItem(t) {
				const e = ys._createBefore(t);
				return this.containsPosition(e) || this.start.isEqual(e)
			}
			is(t) {
				return "range" === t || "model:range" === t
			}
			isEqual(t) {
				return this.start.isEqual(t.start) && this.end.isEqual(t.end)
			}
			isIntersecting(t) {
				return this.start.isBefore(t.end) && this.end.isAfter(t.start)
			}
			getDifference(t) {
				const e = [];
				return this.isIntersecting(t) ? (this.containsPosition(t.start) && e.push(new Ts(this.start, t.start)), this.containsPosition(
					t.end) && e.push(new Ts(t.end, this.end))) : e.push(new Ts(this.start, this.end)), e
			}
			getIntersection(t) {
				if (this.isIntersecting(t)) {
					let e = this.start,
						n = this.end;
					return this.containsPosition(t.start) && (e = t.start), this.containsPosition(t.end) && (n = t.end), new Ts(
						e, n)
				}
				return null
			}
			getMinimalFlatRanges() {
				const t = [],
					e = this.start.getCommonPath(this.end).length,
					n = ys._createAt(this.start);
				let o = n.parent;
				for (; n.path.length > e + 1;) {
					const e = o.maxOffset - n.offset;
					0 !== e && t.push(new Ts(n, n.getShiftedBy(e))), n.path = n.path.slice(0, -1), n.offset++, o = o.parent
				}
				for (; n.path.length <= this.end.path.length;) {
					const e = this.end.path[n.path.length - 1],
						o = e - n.offset;
					0 !== o && t.push(new Ts(n, n.getShiftedBy(o))), n.offset = e, n.path.push(0)
				}
				return t
			}
			getWalker(t = {}) {
				return t.boundaries = this, new _s(t)
			}* getItems(t = {}) {
				t.boundaries = this, t.ignoreElementEnd = !0;
				const e = new _s(t);
				for (const t of e) yield t.item
			}* getPositions(t = {}) {
				t.boundaries = this;
				const e = new _s(t);
				yield e.position;
				for (const t of e) yield t.nextPosition
			}
			getTransformedByOperation(t) {
				switch (t.type) {
					case "insert":
						return this._getTransformedByInsertOperation(t);
					case "move":
					case "remove":
					case "reinsert":
						return this._getTransformedByMoveOperation(t);
					case "split":
						return [this._getTransformedBySplitOperation(t)];
					case "merge":
						return [this._getTransformedByMergeOperation(t)]
				}
				return [new Ts(this.start, this.end)]
			}
			getTransformedByOperations(t) {
				const e = [new Ts(this.start, this.end)];
				for (const n of t)
					for (let t = 0; t < e.length; t++) {
						const o = e[t].getTransformedByOperation(n);
						e.splice(t, 1, ...o), t += o.length - 1
					}
				for (let t = 0; t < e.length; t++) {
					const n = e[t];
					for (let o = t + 1; o < e.length; o++) {
						const t = e[o];
						(n.containsRange(t) || t.containsRange(n) || n.isEqual(t)) && e.splice(o, 1)
					}
				}
				return e
			}
			getCommonAncestor() {
				return this.start.getCommonAncestor(this.end)
			}
			getContainedElement() {
				if (this.isCollapsed) return null;
				const t = this.start.nodeAfter,
					e = this.end.nodeBefore;
				return t && t.is("element") && t === e ? t : null
			}
			toJSON() {
				return {
					start: this.start.toJSON(),
					end: this.end.toJSON()
				}
			}
			clone() {
				return new this.constructor(this.start, this.end)
			}
			_getTransformedByInsertOperation(t, e = !1) {
				return this._getTransformedByInsertion(t.position, t.howMany, e)
			}
			_getTransformedByMoveOperation(t, e = !1) {
				const n = t.sourcePosition,
					o = t.howMany,
					i = t.targetPosition;
				return this._getTransformedByMove(n, i, o, e)
			}
			_getTransformedBySplitOperation(t) {
				const e = this.start._getTransformedBySplitOperation(t);
				let n = this.end._getTransformedBySplitOperation(t);
				return this.end.isEqual(t.insertionPosition) && (n = this.end.getShiftedBy(1)), e.root != n.root && (n = this
					.end.getShiftedBy(-1)), new Ts(e, n)
			}
			_getTransformedByMergeOperation(t) {
				if (this.start.isEqual(t.targetPosition) && this.end.isEqual(t.deletionPosition)) return new Ts(this.start);
				let e = this.start._getTransformedByMergeOperation(t),
					n = this.end._getTransformedByMergeOperation(t);
				return e.root != n.root && (n = this.end.getShiftedBy(-1)), e.isAfter(n) ? (t.sourcePosition.isBefore(t.targetPosition) ?
					(e = ys._createAt(n), e.offset = 0) : (t.deletionPosition.isEqual(e) || (n = t.deletionPosition), e = t.targetPosition),
					new Ts(e, n)) : new Ts(e, n)
			}
			_getTransformedByInsertion(t, e, n = !1) {
				if (n && this.containsPosition(t)) return [new Ts(this.start, t), new Ts(t.getShiftedBy(e), this.end._getTransformedByInsertion(
					t, e))]; {
					const n = new Ts(this.start, this.end);
					return n.start = n.start._getTransformedByInsertion(t, e), n.end = n.end._getTransformedByInsertion(t, e), [
						n
					]
				}
			}
			_getTransformedByMove(t, e, n, o = !1) {
				if (this.isCollapsed) {
					const o = this.start._getTransformedByMove(t, e, n);
					return [new Ts(o)]
				}
				const i = Ts._createFromPositionAndShift(t, n),
					r = e._getTransformedByDeletion(t, n);
				if (this.containsPosition(e) && !o && (i.containsPosition(this.start) || i.containsPosition(this.end))) {
					const o = this.start._getTransformedByMove(t, e, n),
						i = this.end._getTransformedByMove(t, e, n);
					return [new Ts(o, i)]
				}
				let s;
				const a = this.getDifference(i);
				let c = null;
				const l = this.getIntersection(i);
				if (1 == a.length ? c = new Ts(a[0].start._getTransformedByDeletion(t, n), a[0].end._getTransformedByDeletion(
						t, n)) : 2 == a.length && (c = new Ts(this.start, this.end._getTransformedByDeletion(t, n))), s = c ? c._getTransformedByInsertion(
						r, n, null !== l || o) : [], l) {
					const t = new Ts(l.start._getCombined(i.start, r), l.end._getCombined(i.start, r));
					2 == s.length ? s.splice(1, 0, t) : s.push(t)
				}
				return s
			}
			_getTransformedByDeletion(t, e) {
				let n = this.start._getTransformedByDeletion(t, e),
					o = this.end._getTransformedByDeletion(t, e);
				return null == n && null == o ? null : (null == n && (n = t), null == o && (o = t), new Ts(n, o))
			}
			static _createFromPositionAndShift(t, e) {
				const n = t,
					o = t.getShiftedBy(e);
				return e > 0 ? new this(n, o) : new this(o, n)
			}
			static _createIn(t) {
				return new this(ys._createAt(t, 0), ys._createAt(t, t.maxOffset))
			}
			static _createOn(t) {
				return this._createFromPositionAndShift(ys._createBefore(t), t.offsetSize)
			}
			static _createFromRanges(t) {
				if (0 === t.length) throw new hn.b(
					"range-create-from-ranges-empty-array: At least one range has to be passed.", null);
				if (1 == t.length) return t[0].clone();
				const e = t[0];
				t.sort((t, e) => t.start.isAfter(e.start) ? 1 : -1);
				const n = t.indexOf(e),
					o = new this(e.start, e.end);
				if (n > 0)
					for (let e = n - 1; t[e].end.isEqual(o.start); e++) o.start = ys._createAt(t[e].start);
				for (let e = n + 1; e < t.length && t[e].start.isEqual(o.end); e++) o.end = ys._createAt(t[e].end);
				return o
			}
			static fromJSON(t, e) {
				return new this(ys.fromJSON(t.start, e), ys.fromJSON(t.end, e))
			}
		}
		class Ss {
			constructor() {
				this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._viewToModelLengthCallbacks =
					new Map, this._markerNameToElements = new Map, this._elementToMarkerNames = new Map, this._unboundMarkerNames =
					new Set, this.on("modelToViewPosition", (t, e) => {
						if (e.viewPosition) return;
						const n = this._modelToViewMapping.get(e.modelPosition.parent);
						e.viewPosition = this._findPositionIn(n, e.modelPosition.offset)
					}, {
						priority: "low"
					}), this.on("viewToModelPosition", (t, e) => {
						if (e.modelPosition) return;
						const n = this.findMappedViewAncestor(e.viewPosition),
							o = this._viewToModelMapping.get(n),
							i = this._toModelOffset(e.viewPosition.parent, e.viewPosition.offset, n);
						e.modelPosition = ys._createAt(o, i)
					}, {
						priority: "low"
					})
			}
			bindElements(t, e) {
				this._modelToViewMapping.set(t, e), this._viewToModelMapping.set(e, t)
			}
			unbindViewElement(t) {
				const e = this.toModelElement(t);
				if (this._viewToModelMapping.delete(t), this._elementToMarkerNames.has(t))
					for (const e of this._elementToMarkerNames.get(t)) this._unboundMarkerNames.add(e);
				this._modelToViewMapping.get(e) == t && this._modelToViewMapping.delete(e)
			}
			unbindModelElement(t) {
				const e = this.toViewElement(t);
				this._modelToViewMapping.delete(t), this._viewToModelMapping.get(e) == t && this._viewToModelMapping.delete(e)
			}
			bindElementToMarker(t, e) {
				const n = this._markerNameToElements.get(e) || new Set;
				n.add(t);
				const o = this._elementToMarkerNames.get(t) || new Set;
				o.add(e), this._markerNameToElements.set(e, n), this._elementToMarkerNames.set(t, o)
			}
			unbindElementFromMarkerName(t, e) {
				const n = this._markerNameToElements.get(e);
				n && (n.delete(t), 0 == n.size && this._markerNameToElements.delete(e));
				const o = this._elementToMarkerNames.get(t);
				o && (o.delete(e), 0 == o.size && this._elementToMarkerNames.delete(t))
			}
			flushUnboundMarkerNames() {
				const t = Array.from(this._unboundMarkerNames);
				return this._unboundMarkerNames.clear(), t
			}
			clearBindings() {
				this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._markerNameToElements =
					new Map, this._elementToMarkerNames = new Map, this._unboundMarkerNames = new Set
			}
			toModelElement(t) {
				return this._viewToModelMapping.get(t)
			}
			toViewElement(t) {
				return this._modelToViewMapping.get(t)
			}
			toModelRange(t) {
				return new Ts(this.toModelPosition(t.start), this.toModelPosition(t.end))
			}
			toViewRange(t) {
				return new ti(this.toViewPosition(t.start), this.toViewPosition(t.end))
			}
			toModelPosition(t) {
				const e = {
					viewPosition: t,
					mapper: this
				};
				return this.fire("viewToModelPosition", e), e.modelPosition
			}
			toViewPosition(t, e = {
				isPhantom: !1
			}) {
				const n = {
					modelPosition: t,
					mapper: this,
					isPhantom: e.isPhantom
				};
				return this.fire("modelToViewPosition", n), n.viewPosition
			}
			markerNameToElements(t) {
				const e = this._markerNameToElements.get(t);
				if (!e) return null;
				const n = new Set;
				for (const t of e)
					if (t.is("attributeElement"))
						for (const e of t.getElementsWithSameId()) n.add(e);
					else n.add(t);
				return n
			}
			registerViewToModelLength(t, e) {
				this._viewToModelLengthCallbacks.set(t, e)
			}
			findMappedViewAncestor(t) {
				let e = t.parent;
				for (; !this._viewToModelMapping.has(e);) e = e.parent;
				return e
			}
			_toModelOffset(t, e, n) {
				if (n != t) {
					return this._toModelOffset(t.parent, t.index, n) + this._toModelOffset(t, e, t)
				}
				if (t.is("text")) return e;
				let o = 0;
				for (let n = 0; n < e; n++) o += this.getModelLength(t.getChild(n));
				return o
			}
			getModelLength(t) {
				if (this._viewToModelLengthCallbacks.get(t.name)) {
					return this._viewToModelLengthCallbacks.get(t.name)(t)
				}
				if (this._viewToModelMapping.has(t)) return 1;
				if (t.is("text")) return t.data.length;
				if (t.is("uiElement")) return 0; {
					let e = 0;
					for (const n of t.getChildren()) e += this.getModelLength(n);
					return e
				}
			}
			_findPositionIn(t, e) {
				let n, o = 0,
					i = 0,
					r = 0;
				if (t.is("text")) return new Xo(t, e);
				for (; i < e;) n = t.getChild(r), o = this.getModelLength(n), i += o, r++;
				return i == e ? this._moveViewPositionToTextNode(new Xo(t, r)) : this._findPositionIn(n, e - (i - o))
			}
			_moveViewPositionToTextNode(t) {
				const e = t.nodeBefore,
					n = t.nodeAfter;
				return e instanceof Rn ? new Xo(e, e.data.length) : n instanceof Rn ? new Xo(n, 0) : t
			}
		}
		xn(Ss, mn);
		class Ps {
			constructor() {
				this._consumable = new Map, this._textProxyRegistry = new Map
			}
			add(t, e) {
				e = Es(e), t instanceof bs && (t = this._getSymbolForTextProxy(t)), this._consumable.has(t) || this._consumable
					.set(t, new Map), this._consumable.get(t).set(e, !0)
			}
			consume(t, e) {
				return e = Es(e), t instanceof bs && (t = this._getSymbolForTextProxy(t)), !!this.test(t, e) && (this._consumable
					.get(t).set(e, !1), !0)
			}
			test(t, e) {
				e = Es(e), t instanceof bs && (t = this._getSymbolForTextProxy(t));
				const n = this._consumable.get(t);
				if (void 0 === n) return null;
				const o = n.get(e);
				return void 0 === o ? null : o
			}
			revert(t, e) {
				e = Es(e), t instanceof bs && (t = this._getSymbolForTextProxy(t));
				const n = this.test(t, e);
				return !1 === n ? (this._consumable.get(t).set(e, !0), !0) : !0 !== n && null
			}
			_getSymbolForTextProxy(t) {
				let e = null;
				const n = this._textProxyRegistry.get(t.startOffset);
				if (n) {
					const o = n.get(t.endOffset);
					o && (e = o.get(t.parent))
				}
				return e || (e = this._addSymbolForTextProxy(t.startOffset, t.endOffset, t.parent)), e
			}
			_addSymbolForTextProxy(t, e, n) {
				const o = Symbol("textProxySymbol");
				let i, r;
				return i = this._textProxyRegistry.get(t), i || (i = new Map, this._textProxyRegistry.set(t, i)), r = i.get(e),
					r || (r = new Map, i.set(e, r)), r.set(n, o), o
			}
		}

		function Es(t) {
			const e = t.split(":");
			return e.length > 1 ? e[0] + ":" + e[1] : e[0]
		}
		class Ms {
			constructor(t) {
				this.conversionApi = Vo({
					dispatcher: this
				}, t)
			}
			convertChanges(t, e, n) {
				for (const e of t.getMarkersToRemove()) this.convertMarkerRemove(e.name, e.range, n);
				for (const e of t.getChanges()) "insert" == e.type ? this.convertInsert(Ts._createFromPositionAndShift(e.position,
					e.length), n) : "remove" == e.type ? this.convertRemove(e.position, e.length, e.name, n) : this.convertAttribute(
					e.range, e.attributeKey, e.attributeOldValue, e.attributeNewValue, n);
				for (const t of this.conversionApi.mapper.flushUnboundMarkerNames()) {
					const o = e.get(t).getRange();
					this.convertMarkerRemove(t, o, n), this.convertMarkerAdd(t, o, n)
				}
				for (const e of t.getMarkersToAdd()) this.convertMarkerAdd(e.name, e.range, n)
			}
			convertInsert(t, e) {
				this.conversionApi.writer = e, this.conversionApi.consumable = this._createInsertConsumable(t);
				for (const e of t) {
					const t = e.item,
						n = {
							item: t,
							range: Ts._createFromPositionAndShift(e.previousPosition, e.length)
						};
					this._testAndFire("insert", n);
					for (const e of t.getAttributeKeys()) n.attributeKey = e, n.attributeOldValue = null, n.attributeNewValue =
						t.getAttribute(e), this._testAndFire("attribute:" + e, n)
				}
				this._clearConversionApi()
			}
			convertRemove(t, e, n, o) {
				this.conversionApi.writer = o, this.fire("remove:" + n, {
					position: t,
					length: e
				}, this.conversionApi), this._clearConversionApi()
			}
			convertAttribute(t, e, n, o, i) {
				this.conversionApi.writer = i, this.conversionApi.consumable = this._createConsumableForRange(t, "attribute:" +
					e);
				for (const i of t) {
					const t = {
						item: i.item,
						range: Ts._createFromPositionAndShift(i.previousPosition, i.length),
						attributeKey: e,
						attributeOldValue: n,
						attributeNewValue: o
					};
					this._testAndFire("attribute:" + e, t)
				}
				this._clearConversionApi()
			}
			convertSelection(t, e, n) {
				const o = Array.from(e.getMarkersAtPosition(t.getFirstPosition()));
				if (this.conversionApi.writer = n, this.conversionApi.consumable = this._createSelectionConsumable(t, o),
					this.fire("selection", {
						selection: t
					}, this.conversionApi), t.isCollapsed) {
					for (const e of o) {
						const n = e.getRange();
						if (!Is(t.getFirstPosition(), e, this.conversionApi.mapper)) continue;
						const o = {
							item: t,
							markerName: e.name,
							markerRange: n
						};
						this.conversionApi.consumable.test(t, "addMarker:" + e.name) && this.fire("addMarker:" + e.name, o, this.conversionApi)
					}
					for (const e of t.getAttributeKeys()) {
						const n = {
							item: t,
							range: t.getFirstRange(),
							attributeKey: e,
							attributeOldValue: null,
							attributeNewValue: t.getAttribute(e)
						};
						this.conversionApi.consumable.test(t, "attribute:" + n.attributeKey) && this.fire("attribute:" + n.attributeKey +
							":$text", n, this.conversionApi)
					}
					this._clearConversionApi()
				}
			}
			convertMarkerAdd(t, e, n) {
				if (!e.root.document || "$graveyard" == e.root.rootName) return;
				this.conversionApi.writer = n;
				const o = "addMarker:" + t,
					i = new Ps;
				if (i.add(e, o), this.conversionApi.consumable = i, this.fire(o, {
						markerName: t,
						markerRange: e
					}, this.conversionApi), i.test(e, o)) {
					this.conversionApi.consumable = this._createConsumableForRange(e, o);
					for (const n of e.getItems()) {
						if (!this.conversionApi.consumable.test(n, o)) continue;
						const i = {
							item: n,
							range: Ts._createOn(n),
							markerName: t,
							markerRange: e
						};
						this.fire(o, i, this.conversionApi)
					}
					this._clearConversionApi()
				}
			}
			convertMarkerRemove(t, e, n) {
				e.root.document && "$graveyard" != e.root.rootName && (this.conversionApi.writer = n, this.fire(
					"removeMarker:" + t, {
						markerName: t,
						markerRange: e
					}, this.conversionApi), this._clearConversionApi())
			}
			_createInsertConsumable(t) {
				const e = new Ps;
				for (const n of t) {
					const t = n.item;
					e.add(t, "insert");
					for (const n of t.getAttributeKeys()) e.add(t, "attribute:" + n)
				}
				return e
			}
			_createConsumableForRange(t, e) {
				const n = new Ps;
				for (const o of t.getItems()) n.add(o, e);
				return n
			}
			_createSelectionConsumable(t, e) {
				const n = new Ps;
				n.add(t, "selection");
				for (const o of e) n.add(t, "addMarker:" + o.name);
				for (const e of t.getAttributeKeys()) n.add(t, "attribute:" + e);
				return n
			}
			_testAndFire(t, e) {
				if (!this.conversionApi.consumable.test(e.item, t)) return;
				const n = e.item.name || "$text";
				this.fire(t + ":" + n, e, this.conversionApi)
			}
			_clearConversionApi() {
				delete this.conversionApi.writer, delete this.conversionApi.consumable
			}
		}

		function Is(t, e, n) {
			const o = e.getRange(),
				i = Array.from(t.getAncestors());
			i.shift(), i.reverse();
			return !i.some(t => {
				if (o.containsItem(t)) {
					return !!n.toViewElement(t).getCustomProperty("addHighlight")
				}
			})
		}
		xn(Ms, mn);
		class Ns {
			constructor(t, e, n) {
				this._lastRangeBackward = !1, this._ranges = [], this._attrs = new Map, t && this.setTo(t, e, n)
			}
			get anchor() {
				if (this._ranges.length > 0) {
					const t = this._ranges[this._ranges.length - 1];
					return this._lastRangeBackward ? t.end : t.start
				}
				return null
			}
			get focus() {
				if (this._ranges.length > 0) {
					const t = this._ranges[this._ranges.length - 1];
					return this._lastRangeBackward ? t.start : t.end
				}
				return null
			}
			get isCollapsed() {
				return 1 === this._ranges.length && this._ranges[0].isCollapsed
			}
			get rangeCount() {
				return this._ranges.length
			}
			get isBackward() {
				return !this.isCollapsed && this._lastRangeBackward
			}
			isEqual(t) {
				if (this.rangeCount != t.rangeCount) return !1;
				if (0 === this.rangeCount) return !0;
				if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) return !1;
				for (const e of this._ranges) {
					let n = !1;
					for (const o of t._ranges)
						if (e.isEqual(o)) {
							n = !0;
							break
						} if (!n) return !1
				}
				return !0
			}* getRanges() {
				for (const t of this._ranges) yield new Ts(t.start, t.end)
			}
			getFirstRange() {
				let t = null;
				for (const e of this._ranges) t && !e.start.isBefore(t.start) || (t = e);
				return t ? new Ts(t.start, t.end) : null
			}
			getLastRange() {
				let t = null;
				for (const e of this._ranges) t && !e.end.isAfter(t.end) || (t = e);
				return t ? new Ts(t.start, t.end) : null
			}
			getFirstPosition() {
				const t = this.getFirstRange();
				return t ? t.start.clone() : null
			}
			getLastPosition() {
				const t = this.getLastRange();
				return t ? t.end.clone() : null
			}
			setTo(t, e, n) {
				if (null === t) this._setRanges([]);
				else if (t instanceof Ns) this._setRanges(t.getRanges(), t.isBackward);
				else if (t && "function" == typeof t.getRanges) this._setRanges(t.getRanges(), t.isBackward);
				else if (t instanceof Ts) this._setRanges([t], !!e && !!e.backward);
				else if (t instanceof ys) this._setRanges([new Ts(t)]);
				else if (t instanceof ms) {
					const o = !!n && !!n.backward;
					let i;
					if ("in" == e) i = Ts._createIn(t);
					else if ("on" == e) i = Ts._createOn(t);
					else {
						if (void 0 === e) throw new hn.b(
							"model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.",
							[this, t]);
						i = new Ts(ys._createAt(t, e))
					}
					this._setRanges([i], o)
				} else {
					if (!yn(t)) throw new hn.b(
						"model-selection-setTo-not-selectable: Cannot set the selection to the given place.", [this, t]);
					this._setRanges(t, e && !!e.backward)
				}
			}
			_setRanges(t, e = !1) {
				const n = (t = Array.from(t)).some(e => {
					if (!(e instanceof Ts)) throw new hn.b(
						"model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.",
						[this, t]);
					return this._ranges.every(t => !t.isEqual(e))
				});
				if (t.length !== this._ranges.length || n) {
					this._removeAllRanges();
					for (const e of t) this._pushRange(e);
					this._lastRangeBackward = !!e, this.fire("change:range", {
						directChange: !0
					})
				}
			}
			setFocus(t, e) {
				if (null === this.anchor) throw new hn.b(
					"model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.", [
						this, t
					]);
				const n = ys._createAt(t, e);
				if ("same" == n.compareWith(this.focus)) return;
				const o = this.anchor;
				this._ranges.length && this._popRange(), "before" == n.compareWith(o) ? (this._pushRange(new Ts(n, o)), this._lastRangeBackward = !
					0) : (this._pushRange(new Ts(o, n)), this._lastRangeBackward = !1), this.fire("change:range", {
					directChange: !0
				})
			}
			getAttribute(t) {
				return this._attrs.get(t)
			}
			getAttributes() {
				return this._attrs.entries()
			}
			getAttributeKeys() {
				return this._attrs.keys()
			}
			hasAttribute(t) {
				return this._attrs.has(t)
			}
			removeAttribute(t) {
				this.hasAttribute(t) && (this._attrs.delete(t), this.fire("change:attribute", {
					attributeKeys: [t],
					directChange: !0
				}))
			}
			setAttribute(t, e) {
				this.getAttribute(t) !== e && (this._attrs.set(t, e), this.fire("change:attribute", {
					attributeKeys: [t],
					directChange: !0
				}))
			}
			getSelectedElement() {
				return 1 !== this.rangeCount ? null : this.getFirstRange().getContainedElement()
			}
			is(t) {
				return "selection" === t || "model:selection" === t
			}* getSelectedBlocks() {
				const t = new WeakSet;
				for (const e of this.getRanges()) {
					const n = Ds(e.start, t);
					n && Ls(n, e) && (yield n);
					for (const n of e.getWalker()) {
						const o = n.item;
						"elementEnd" == n.type && Rs(o, t, e) && (yield o)
					}
					const o = Ds(e.end, t);
					o && !e.end.isTouching(ys._createAt(o, 0)) && Ls(o, e) && (yield o)
				}
			}
			containsEntireContent(t = this.anchor.root) {
				const e = ys._createAt(t, 0),
					n = ys._createAt(t, "end");
				return e.isTouching(this.getFirstPosition()) && n.isTouching(this.getLastPosition())
			}
			_pushRange(t) {
				this._checkRange(t), this._ranges.push(new Ts(t.start, t.end))
			}
			_checkRange(t) {
				for (let e = 0; e < this._ranges.length; e++)
					if (t.isIntersecting(this._ranges[e])) throw new hn.b(
						"model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.",
						[this, t], {
							addedRange: t,
							intersectingRange: this._ranges[e]
						})
			}
			_removeAllRanges() {
				for (; this._ranges.length > 0;) this._popRange()
			}
			_popRange() {
				this._ranges.pop()
			}
		}

		function Os(t, e) {
			return !e.has(t) && (e.add(t), t.root.document.model.schema.isBlock(t) && t.parent)
		}

		function Rs(t, e, n) {
			return Os(t, e) && Ls(t, n)
		}

		function Ds(t, e) {
			const n = t.parent.root.document.model.schema,
				o = t.parent.getAncestors({
					parentFirst: !0,
					includeSelf: !0
				});
			let i = !1;
			const r = o.find(t => !i && (i = n.isLimit(t), !i && Os(t, e)));
			return o.forEach(t => e.add(t)), r
		}

		function Ls(t, e) {
			const n = function(t) {
				const e = t.root.document.model.schema;
				let n = t.parent;
				for (; n;) {
					if (e.isBlock(n)) return n;
					n = n.parent
				}
			}(t);
			if (!n) return !0;
			return !e.containsRange(Ts._createOn(n), !0)
		}
		xn(Ns, mn);
		class js extends Ts {
			constructor(t, e) {
				super(t, e), Vs.call(this)
			}
			detach() {
				this.stopListening()
			}
			is(t) {
				return "liveRange" === t || "model:liveRange" === t || "range" == t || "model:range" === t
			}
			toRange() {
				return new Ts(this.start, this.end)
			}
			static fromRange(t) {
				return new js(t.start, t.end)
			}
		}

		function Vs() {
			this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
				const n = e[0];
				n.isDocumentOperation && zs.call(this, n)
			}, {
				priority: "low"
			})
		}

		function zs(t) {
			const e = this.getTransformedByOperation(t),
				n = Ts._createFromRanges(e),
				o = !n.isEqual(this),
				i = function(t, e) {
					switch (e.type) {
						case "insert":
							return t.containsPosition(e.position);
						case "move":
						case "remove":
						case "reinsert":
						case "merge":
							return t.containsPosition(e.sourcePosition) || t.start.isEqual(e.sourcePosition) || t.containsPosition(e.targetPosition);
						case "split":
							return t.containsPosition(e.splitPosition) || t.containsPosition(e.insertionPosition)
					}
					return !1
				}(this, t);
			let r = null;
			if (o) {
				"$graveyard" == n.root.rootName && (r = "remove" == t.type ? t.sourcePosition : t.deletionPosition);
				const e = this.toRange();
				this.start = n.start, this.end = n.end, this.fire("change:range", e, {
					deletionPosition: r
				})
			} else i && this.fire("change:content", this.toRange(), {
				deletionPosition: r
			})
		}
		xn(js, mn);
		class Bs {
			constructor(t) {
				this._selection = new Fs(t), this._selection.delegate("change:range").to(this), this._selection.delegate(
					"change:attribute").to(this), this._selection.delegate("change:marker").to(this)
			}
			get isCollapsed() {
				return this._selection.isCollapsed
			}
			get anchor() {
				return this._selection.anchor
			}
			get focus() {
				return this._selection.focus
			}
			get rangeCount() {
				return this._selection.rangeCount
			}
			get hasOwnRange() {
				return this._selection.hasOwnRange
			}
			get isBackward() {
				return this._selection.isBackward
			}
			get isGravityOverridden() {
				return this._selection.isGravityOverridden
			}
			get markers() {
				return this._selection.markers
			}
			get _ranges() {
				return this._selection._ranges
			}
			getRanges() {
				return this._selection.getRanges()
			}
			getFirstPosition() {
				return this._selection.getFirstPosition()
			}
			getLastPosition() {
				return this._selection.getLastPosition()
			}
			getFirstRange() {
				return this._selection.getFirstRange()
			}
			getLastRange() {
				return this._selection.getLastRange()
			}
			getSelectedBlocks() {
				return this._selection.getSelectedBlocks()
			}
			getSelectedElement() {
				return this._selection.getSelectedElement()
			}
			containsEntireContent(t) {
				return this._selection.containsEntireContent(t)
			}
			destroy() {
				this._selection.destroy()
			}
			getAttributeKeys() {
				return this._selection.getAttributeKeys()
			}
			getAttributes() {
				return this._selection.getAttributes()
			}
			getAttribute(t) {
				return this._selection.getAttribute(t)
			}
			hasAttribute(t) {
				return this._selection.hasAttribute(t)
			}
			refresh() {
				this._selection._updateMarkers(), this._selection._updateAttributes(!1)
			}
			is(t) {
				return "selection" === t || "model:selection" == t || "documentSelection" == t || "model:documentSelection" ==
					t
			}
			_setFocus(t, e) {
				this._selection.setFocus(t, e)
			}
			_setTo(t, e, n) {
				this._selection.setTo(t, e, n)
			}
			_setAttribute(t, e) {
				this._selection.setAttribute(t, e)
			}
			_removeAttribute(t) {
				this._selection.removeAttribute(t)
			}
			_getStoredAttributes() {
				return this._selection._getStoredAttributes()
			}
			_overrideGravity() {
				return this._selection.overrideGravity()
			}
			_restoreGravity(t) {
				this._selection.restoreGravity(t)
			}
			static _getStoreAttributeKey(t) {
				return "selection:" + t
			}
			static _isStoreAttributeKey(t) {
				return t.startsWith("selection:")
			}
		}
		xn(Bs, mn);
		class Fs extends Ns {
			constructor(t) {
				super(), this.markers = new An({
						idProperty: "name"
					}), this._model = t.model, this._document = t, this._attributePriority = new Map, this._fixGraveyardRangesData = [],
					this._hasChangedRange = !1, this._overriddenGravityRegister = new Set, this.listenTo(this._model,
						"applyOperation", (t, e) => {
							const n = e[0];
							if (n.isDocumentOperation && "marker" != n.type && "rename" != n.type && "noop" != n.type) {
								for (; this._fixGraveyardRangesData.length;) {
									const {
										liveRange: t,
										sourcePosition: e
									} = this._fixGraveyardRangesData.shift();
									this._fixGraveyardSelection(t, e)
								}
								this._hasChangedRange && (this._hasChangedRange = !1, this.fire("change:range", {
									directChange: !1
								}))
							}
						}, {
							priority: "lowest"
						}), this.on("change:range", () => {
						for (const t of this.getRanges())
							if (!this._document._validateSelectionRange(t)) throw new hn.b(
								"document-selection-wrong-position: Range from document selection starts or ends at incorrect position.",
								this, {
									range: t
								})
					}), this.listenTo(this._model.markers, "update", () => this._updateMarkers()), this.listenTo(this._document,
						"change", (t, e) => {
							! function(t, e) {
								const n = t.document.differ;
								for (const o of n.getChanges()) {
									if ("insert" != o.type) continue;
									const n = o.position.parent;
									o.length === n.maxOffset && t.enqueueChange(e, t => {
										const e = Array.from(n.getAttributeKeys()).filter(t => t.startsWith("selection:"));
										for (const o of e) t.removeAttribute(o, n)
									})
								}
							}(this._model, e)
						})
			}
			get isCollapsed() {
				return 0 === this._ranges.length ? this._document._getDefaultRange().isCollapsed : super.isCollapsed
			}
			get anchor() {
				return super.anchor || this._document._getDefaultRange().start
			}
			get focus() {
				return super.focus || this._document._getDefaultRange().end
			}
			get rangeCount() {
				return this._ranges.length ? this._ranges.length : 1
			}
			get hasOwnRange() {
				return this._ranges.length > 0
			}
			get isGravityOverridden() {
				return !!this._overriddenGravityRegister.size
			}
			destroy() {
				for (let t = 0; t < this._ranges.length; t++) this._ranges[t].detach();
				this.stopListening()
			}* getRanges() {
				this._ranges.length ? yield* super.getRanges(): yield this._document._getDefaultRange()
			}
			getFirstRange() {
				return super.getFirstRange() || this._document._getDefaultRange()
			}
			getLastRange() {
				return super.getLastRange() || this._document._getDefaultRange()
			}
			setTo(t, e, n) {
				super.setTo(t, e, n), this._updateAttributes(!0), this._updateMarkers()
			}
			setFocus(t, e) {
				super.setFocus(t, e), this._updateAttributes(!0), this._updateMarkers()
			}
			setAttribute(t, e) {
				if (this._setAttribute(t, e)) {
					const e = [t];
					this.fire("change:attribute", {
						attributeKeys: e,
						directChange: !0
					})
				}
			}
			removeAttribute(t) {
				if (this._removeAttribute(t)) {
					const e = [t];
					this.fire("change:attribute", {
						attributeKeys: e,
						directChange: !0
					})
				}
			}
			overrideGravity() {
				const t = dn();
				return this._overriddenGravityRegister.add(t), 1 === this._overriddenGravityRegister.size && this._updateAttributes(
					!0), t
			}
			restoreGravity(t) {
				if (!this._overriddenGravityRegister.has(t)) throw new hn.b(
					"document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.",
					this, {
						uid: t
					});
				this._overriddenGravityRegister.delete(t), this.isGravityOverridden || this._updateAttributes(!0)
			}
			_popRange() {
				this._ranges.pop().detach()
			}
			_pushRange(t) {
				const e = this._prepareRange(t);
				e && this._ranges.push(e)
			}
			_prepareRange(t) {
				if (this._checkRange(t), t.root == this._document.graveyard) return;
				const e = js.fromRange(t);
				return e.on("change:range", (t, n, o) => {
					this._hasChangedRange = !0, e.root == this._document.graveyard && this._fixGraveyardRangesData.push({
						liveRange: e,
						sourcePosition: o.deletionPosition
					})
				}), e
			}
			_updateMarkers() {
				const t = [];
				let e = !1;
				for (const e of this._model.markers) {
					const n = e.getRange();
					for (const o of this.getRanges()) n.containsRange(o, !o.isCollapsed) && t.push(e)
				}
				const n = Array.from(this.markers);
				for (const n of t) this.markers.has(n) || (this.markers.add(n), e = !0);
				for (const n of Array.from(this.markers)) t.includes(n) || (this.markers.remove(n), e = !0);
				e && this.fire("change:marker", {
					oldMarkers: n,
					directChange: !1
				})
			}
			_updateAttributes(t) {
				const e = Ln(this._getSurroundingAttributes()),
					n = Ln(this.getAttributes());
				if (t) this._attributePriority = new Map, this._attrs = new Map;
				else
					for (const [t, e] of this._attributePriority) "low" == e && (this._attrs.delete(t), this._attributePriority.delete(
						t));
				this._setAttributesTo(e);
				const o = [];
				for (const [t, e] of this.getAttributes()) n.has(t) && n.get(t) === e || o.push(t);
				for (const [t] of n) this.hasAttribute(t) || o.push(t);
				o.length > 0 && this.fire("change:attribute", {
					attributeKeys: o,
					directChange: !1
				})
			}
			_setAttribute(t, e, n = !0) {
				const o = n ? "normal" : "low";
				if ("low" == o && "normal" == this._attributePriority.get(t)) return !1;
				return super.getAttribute(t) !== e && (this._attrs.set(t, e), this._attributePriority.set(t, o), !0)
			}
			_removeAttribute(t, e = !0) {
				const n = e ? "normal" : "low";
				return ("low" != n || "normal" != this._attributePriority.get(t)) && (this._attributePriority.set(t, n), !!
					super.hasAttribute(t) && (this._attrs.delete(t), !0))
			}
			_setAttributesTo(t) {
				const e = new Set;
				for (const [e, n] of this.getAttributes()) t.get(e) !== n && this._removeAttribute(e, !1);
				for (const [n, o] of t) {
					this._setAttribute(n, o, !1) && e.add(n)
				}
				return e
			}* _getStoredAttributes() {
				const t = this.getFirstPosition().parent;
				if (this.isCollapsed && t.isEmpty)
					for (const e of t.getAttributeKeys())
						if (e.startsWith("selection:")) {
							const n = e.substr("selection:".length);
							yield [n, t.getAttribute(e)]
						}
			}
			_getSurroundingAttributes() {
				const t = this.getFirstPosition(),
					e = this._model.schema;
				let n = null;
				if (this.isCollapsed) {
					const e = t.textNode ? t.textNode : t.nodeBefore,
						o = t.textNode ? t.textNode : t.nodeAfter;
					if (this.isGravityOverridden || (n = Us(e)), n || (n = Us(o)), !this.isGravityOverridden && !n) {
						let t = e;
						for (; t && !n;) t = t.previousSibling, n = Us(t)
					}
					if (!n) {
						let t = o;
						for (; t && !n;) t = t.nextSibling, n = Us(t)
					}
					n || (n = this._getStoredAttributes())
				} else {
					const t = this.getFirstRange();
					for (const o of t) {
						if (o.item.is("element") && e.isObject(o.item)) break;
						if ("text" == o.type) {
							n = o.item.getAttributes();
							break
						}
					}
				}
				return n
			}
			_fixGraveyardSelection(t, e) {
				const n = e.clone(),
					o = this._model.schema.getNearestSelectionRange(n),
					i = this._ranges.indexOf(t);
				if (this._ranges.splice(i, 1), t.detach(), o && (r = o, this._ranges.every(t => !r.isEqual(t)))) {
					const t = this._prepareRange(o);
					this._ranges.splice(i, 0, t)
				}
				var r
			}
		}

		function Us(t) {
			return t instanceof bs || t instanceof ps ? t.getAttributes() : null
		}
		class Hs {
			constructor(t) {
				this._dispatchers = t
			}
			add(t) {
				for (const e of this._dispatchers) t(e);
				return this
			}
		}
		var qs = function(t) {
			return tn(t, 5)
		};
		class Ws extends Hs {
			elementToElement(t) {
				return this.add(function(t) {
					return (t = qs(t)).view = Ys(t.view, "container"), e => {
						var n;
						e.on("insert:" + t.model, (n = t.view, (t, e, o) => {
							const i = n(e.item, o.writer);
							if (!i) return;
							if (!o.consumable.consume(e.item, "insert")) return;
							const r = o.mapper.toViewPosition(e.range.start);
							o.mapper.bindElements(e.item, i), o.writer.insert(r, i)
						}), {
							priority: t.converterPriority || "normal"
						})
					}
				}(t))
			}
			attributeToElement(t) {
				return this.add(function(t) {
					t = qs(t);
					let e = "attribute:" + (t.model.key ? t.model.key : t.model);
					t.model.name && (e += ":" + t.model.name);
					if (t.model.values)
						for (const e of t.model.values) t.view[e] = Ys(t.view[e], "attribute");
					else t.view = Ys(t.view, "attribute");
					const n = $s(t);
					return o => {
						o.on(e, function(t) {
							return (e, n, o) => {
								const i = t(n.attributeOldValue, o.writer),
									r = t(n.attributeNewValue, o.writer);
								if (!i && !r) return;
								if (!o.consumable.consume(n.item, e.name)) return;
								const s = o.writer,
									a = s.document.selection;
								if (n.item instanceof Ns || n.item instanceof Bs) s.wrap(a.getFirstRange(), r);
								else {
									let t = o.mapper.toViewRange(n.range);
									null !== n.attributeOldValue && i && (t = s.unwrap(t, i)), null !== n.attributeNewValue && r && s.wrap(
										t, r)
								}
							}
						}(n), {
							priority: t.converterPriority || "normal"
						})
					}
				}(t))
			}
			attributeToAttribute(t) {
				return this.add(function(t) {
					t = qs(t);
					let e = "attribute:" + (t.model.key ? t.model.key : t.model);
					t.model.name && (e += ":" + t.model.name);
					if (t.model.values)
						for (const e of t.model.values) t.view[e] = Ks(t.view[e]);
					else t.view = Ks(t.view);
					const n = $s(t);
					return o => {
						var i;
						o.on(e, (i = n, (t, e, n) => {
							const o = i(e.attributeOldValue, e),
								r = i(e.attributeNewValue, e);
							if (!o && !r) return;
							if (!n.consumable.consume(e.item, t.name)) return;
							const s = n.mapper.toViewElement(e.item),
								a = n.writer;
							if (!s) throw new hn.b(
								"conversion-attribute-to-attribute-on-text: Trying to convert text node's attribute with attribute-to-attribute converter.",
								[e, n]);
							if (null !== e.attributeOldValue && o)
								if ("class" == o.key) {
									const t = Array.isArray(o.value) ? o.value : [o.value];
									for (const e of t) a.removeClass(e, s)
								} else if ("style" == o.key) {
								const t = Object.keys(o.value);
								for (const e of t) a.removeStyle(e, s)
							} else a.removeAttribute(o.key, s);
							if (null !== e.attributeNewValue && r)
								if ("class" == r.key) {
									const t = Array.isArray(r.value) ? r.value : [r.value];
									for (const e of t) a.addClass(e, s)
								} else if ("style" == r.key) {
								const t = Object.keys(r.value);
								for (const e of t) a.setStyle(e, r.value[e], s)
							} else a.setAttribute(r.key, r.value, s)
						}), {
							priority: t.converterPriority || "normal"
						})
					}
				}(t))
			}
			markerToElement(t) {
				return this.add(function(t) {
					return (t = qs(t)).view = Ys(t.view, "ui"), e => {
						var n;
						e.on("addMarker:" + t.model, (n = t.view, (t, e, o) => {
							e.isOpening = !0;
							const i = n(e, o.writer);
							e.isOpening = !1;
							const r = n(e, o.writer);
							if (!i || !r) return;
							const s = e.markerRange;
							if (s.isCollapsed && !o.consumable.consume(s, t.name)) return;
							for (const e of s)
								if (!o.consumable.consume(e.item, t.name)) return;
							const a = o.mapper,
								c = o.writer;
							c.insert(a.toViewPosition(s.start), i), o.mapper.bindElementToMarker(i, e.markerName), s.isCollapsed ||
								(c.insert(a.toViewPosition(s.end), r), o.mapper.bindElementToMarker(r, e.markerName)), t.stop()
						}), {
							priority: t.converterPriority || "normal"
						}), e.on("removeMarker:" + t.model, (t.view, (t, e, n) => {
							const o = n.mapper.markerNameToElements(e.markerName);
							if (o) {
								for (const t of o) n.mapper.unbindElementFromMarkerName(t, e.markerName), n.writer.clear(n.writer.createRangeOn(
									t), t);
								n.writer.clearClonedElementsGroup(e.markerName), t.stop()
							}
						}), {
							priority: t.converterPriority || "normal"
						})
					}
				}(t))
			}
			markerToHighlight(t) {
				return this.add(function(t) {
					return e => {
						var n;
						e.on("addMarker:" + t.model, (n = t.view, (t, e, o) => {
							if (!e.item) return;
							if (!(e.item instanceof Ns || e.item instanceof Bs || e.item.is("textProxy"))) return;
							const i = Qs(n, e, o);
							if (!i) return;
							if (!o.consumable.consume(e.item, t.name)) return;
							const r = o.writer,
								s = Gs(r, i),
								a = r.document.selection;
							if (e.item instanceof Ns || e.item instanceof Bs) r.wrap(a.getFirstRange(), s, a);
							else {
								const t = o.mapper.toViewRange(e.range),
									n = r.wrap(t, s);
								for (const t of n.getItems())
									if (t.is("attributeElement") && t.isSimilar(s)) {
										o.mapper.bindElementToMarker(t, e.markerName);
										break
									}
							}
						}), {
							priority: t.converterPriority || "normal"
						}), e.on("addMarker:" + t.model, function(t) {
							return (e, n, o) => {
								if (!n.item) return;
								if (!(n.item instanceof ks)) return;
								const i = Qs(t, n, o);
								if (!i) return;
								if (!o.consumable.test(n.item, e.name)) return;
								const r = o.mapper.toViewElement(n.item);
								if (r && r.getCustomProperty("addHighlight")) {
									o.consumable.consume(n.item, e.name);
									for (const t of Ts._createIn(n.item)) o.consumable.consume(t.item, e.name);
									r.getCustomProperty("addHighlight")(r, i, o.writer), o.mapper.bindElementToMarker(r, n.markerName)
								}
							}
						}(t.view), {
							priority: t.converterPriority || "normal"
						}), e.on("removeMarker:" + t.model, function(t) {
							return (e, n, o) => {
								if (n.markerRange.isCollapsed) return;
								const i = Qs(t, n, o);
								if (!i) return;
								const r = Gs(o.writer, i),
									s = o.mapper.markerNameToElements(n.markerName);
								if (s) {
									for (const t of s) o.mapper.unbindElementFromMarkerName(t, n.markerName), t.is("attributeElement") ?
										o.writer.unwrap(o.writer.createRangeOn(t), r) : t.getCustomProperty("removeHighlight")(t, i.id, o
											.writer);
									o.writer.clearClonedElementsGroup(n.markerName), e.stop()
								}
							}
						}(t.view), {
							priority: t.converterPriority || "normal"
						})
					}
				}(t))
			}
		}

		function Gs(t, e) {
			const n = t.createAttributeElement("span", e.attributes);
			return e.classes && n._addClass(e.classes), e.priority && (n._priority = e.priority), n._id = e.id, n
		}

		function Ys(t, e) {
			return "function" == typeof t ? t : (n, o) => function(t, e, n) {
				"string" == typeof t && (t = {
					name: t
				});
				let o;
				const i = Object.assign({}, t.attributes);
				if ("container" == n) o = e.createContainerElement(t.name, i);
				else if ("attribute" == n) {
					const n = {
						priority: t.priority || si.DEFAULT_PRIORITY
					};
					o = e.createAttributeElement(t.name, i, n)
				} else o = e.createUIElement(t.name, i);
				if (t.styles) {
					const n = Object.keys(t.styles);
					for (const i of n) e.setStyle(i, t.styles[i], o)
				}
				if (t.classes) {
					const n = t.classes;
					if ("string" == typeof n) e.addClass(n, o);
					else
						for (const t of n) e.addClass(t, o)
				}
				return o
			}(t, o, e)
		}

		function $s(t) {
			return t.model.values ? (e, n) => {
				const o = t.view[e];
				return o ? o(e, n) : null
			} : t.view
		}

		function Ks(t) {
			return "string" == typeof t ? e => ({
				key: t,
				value: e
			}) : "object" == typeof t ? t.value ? () => t : e => ({
				key: t.key,
				value: e
			}) : t
		}

		function Qs(t, e, n) {
			const o = "function" == typeof t ? t(e, n) : t;
			return o ? (o.priority || (o.priority = 10), o.id || (o.id = e.markerName), o) : null
		}
		class Js extends Hs {
			elementToElement(t) {
				return this.add(Zs(t))
			}
			elementToAttribute(t) {
				return this.add(function(t) {
					ta(t = qs(t));
					const e = ea(t, !1),
						n = Xs(t.view),
						o = n ? "element:" + n : "element";
					return n => {
						n.on(o, e, {
							priority: t.converterPriority || "low"
						})
					}
				}(t))
			}
			attributeToAttribute(t) {
				return this.add(function(t) {
					t = qs(t);
					let e = null;
					("string" == typeof t.view || t.view.key) && (e = function(t) {
						"string" == typeof t.view && (t.view = {
							key: t.view
						});
						const e = t.view.key;
						let n;
						if ("class" == e || "style" == e) {
							n = {
								["class" == e ? "classes" : "styles"]: t.view.value
							}
						} else {
							const o = void 0 === t.view.value ? /[\s\S]*/ : t.view.value;
							n = {
								attributes: {
									[e]: o
								}
							}
						}
						t.view.name && (n.name = t.view.name);
						return t.view = n, e
					}(t));
					ta(t, e);
					const n = ea(t, !0);
					return e => {
						e.on("element", n, {
							priority: t.converterPriority || "low"
						})
					}
				}(t))
			}
			elementToMarker(t) {
				return this.add(function(t) {
					return function(t) {
						const e = t.model;
						t.model = (t, n) => {
							const o = "string" == typeof e ? e : e(t);
							return n.createElement("$marker", {
								"data-name": o
							})
						}
					}(t = qs(t)), Zs(t)
				}(t))
			}
		}

		function Zs(t) {
			const e = function(t) {
					const e = t.view ? new jn(t.view) : null;
					return (n, o, i) => {
						let r = {};
						if (e) {
							const t = e.match(o.viewItem);
							if (!t) return;
							r = t.match
						}
						r.name = !0;
						const s = (a = t.model, c = o.viewItem, l = i.writer, a instanceof Function ? a(c, l) : l.createElement(a));
						var a, c, l;
						if (!s) return;
						if (!i.consumable.test(o.viewItem, r)) return;
						const d = i.splitToAllowedParent(s, o.modelCursor);
						if (!d) return;
						i.writer.insert(s, d.position), i.convertChildren(o.viewItem, i.writer.createPositionAt(s, 0)), i.consumable
							.consume(o.viewItem, r);
						const u = i.getSplitParts(s);
						o.modelRange = new Ts(i.writer.createPositionBefore(s), i.writer.createPositionAfter(u[u.length - 1])), d.cursorParent ?
							o.modelCursor = i.writer.createPositionAt(d.cursorParent, 0) : o.modelCursor = o.modelRange.end
					}
				}(t = qs(t)),
				n = Xs(t.view),
				o = n ? "element:" + n : "element";
			return n => {
				n.on(o, e, {
					priority: t.converterPriority || "normal"
				})
			}
		}

		function Xs(t) {
			return "string" == typeof t ? t : "object" == typeof t && "string" == typeof t.name ? t.name : null
		}

		function ta(t, e = null) {
			const n = null === e || (t => t.getAttribute(e)),
				o = "object" != typeof t.model ? t.model : t.model.key,
				i = "object" != typeof t.model || void 0 === t.model.value ? n : t.model.value;
			t.model = {
				key: o,
				value: i
			}
		}

		function ea(t, e) {
			const n = new jn(t.view);
			return (o, i, r) => {
				const s = n.match(i.viewItem);
				if (!s) return;
				const a = t.model.key,
					c = "function" == typeof t.model.value ? t.model.value(i.viewItem) : t.model.value;
				if (null === c) return;
				if (! function(t, e) {
						const n = "function" == typeof t ? t(e) : t;
						if ("object" == typeof n && !Xs(n)) return !1;
						return !n.classes && !n.attributes && !n.styles
					}(t.view, i.viewItem) ? delete s.match.name : s.match.name = !0, !r.consumable.test(i.viewItem, s.match))
					return;
				i.modelRange || (i = Object.assign(i, r.convertChildren(i.viewItem, i.modelCursor)));
				(function(t, e, n, o) {
					let i = !1;
					for (const r of Array.from(t.getItems({
							shallow: n
						}))) o.schema.checkAttribute(r, e.key) && (o.writer.setAttribute(e.key, e.value, r), i = !0);
					return i
				})(i.modelRange, {
					key: a,
					value: c
				}, e, r) && r.consumable.consume(i.viewItem, s.match)
			}
		}
		class na {
			constructor(t, e) {
				this.model = t, this.view = new gs(e), this.mapper = new Ss, this.downcastDispatcher = new Ms({
					mapper: this.mapper
				});
				const n = this.model.document,
					o = n.selection,
					i = this.model.markers;
				this.listenTo(this.model, "_beforeChanges", () => {
					this.view._disableRendering(!0)
				}, {
					priority: "highest"
				}), this.listenTo(this.model, "_afterChanges", () => {
					this.view._disableRendering(!1)
				}, {
					priority: "lowest"
				}), this.listenTo(n, "change", () => {
					this.view.change(t => {
						this.downcastDispatcher.convertChanges(n.differ, i, t), this.downcastDispatcher.convertSelection(o, i,
							t)
					})
				}, {
					priority: "low"
				}), this.listenTo(this.view.document, "selectionChange", function(t, e) {
					return (n, o) => {
						const i = o.newSelection,
							r = new Ns,
							s = [];
						for (const t of i.getRanges()) s.push(e.toModelRange(t));
						r.setTo(s, {
							backward: i.isBackward
						}), r.isEqual(t.document.selection) || t.change(t => {
							t.setSelection(r)
						})
					}
				}(this.model, this.mapper)), this.downcastDispatcher.on("insert:$text", (t, e, n) => {
					if (!n.consumable.consume(e.item, "insert")) return;
					const o = n.writer,
						i = n.mapper.toViewPosition(e.range.start),
						r = o.createText(e.item.data);
					o.insert(i, r)
				}, {
					priority: "lowest"
				}), this.downcastDispatcher.on("remove", (t, e, n) => {
					const o = n.mapper.toViewPosition(e.position),
						i = e.position.getShiftedBy(e.length),
						r = n.mapper.toViewPosition(i, {
							isPhantom: !0
						}),
						s = n.writer.createRange(o, r),
						a = n.writer.remove(s.getTrimmed());
					for (const t of n.writer.createRangeIn(a).getItems()) n.mapper.unbindViewElement(t)
				}, {
					priority: "low"
				}), this.downcastDispatcher.on("selection", (t, e, n) => {
					const o = n.writer,
						i = o.document.selection;
					for (const t of i.getRanges()) t.isCollapsed && t.end.parent.isAttached() && n.writer.mergeAttributes(t.start);
					o.setSelection(null)
				}, {
					priority: "low"
				}), this.downcastDispatcher.on("selection", (t, e, n) => {
					const o = e.selection;
					if (o.isCollapsed) return;
					if (!n.consumable.consume(o, "selection")) return;
					const i = [];
					for (const t of o.getRanges()) {
						const e = n.mapper.toViewRange(t);
						i.push(e)
					}
					n.writer.setSelection(i, {
						backward: o.isBackward
					})
				}, {
					priority: "low"
				}), this.downcastDispatcher.on("selection", (t, e, n) => {
					const o = e.selection;
					if (!o.isCollapsed) return;
					if (!n.consumable.consume(o, "selection")) return;
					const i = n.writer,
						r = o.getFirstPosition(),
						s = n.mapper.toViewPosition(r),
						a = i.breakAttributes(s);
					i.setSelection(a)
				}, {
					priority: "low"
				}), this.view.document.roots.bindTo(this.model.document.roots).using(t => {
					if ("$graveyard" == t.rootName) return null;
					const e = new Jo(this.view.document, t.name);
					return e.rootName = t.rootName, this.mapper.bindElements(t, e), e
				})
			}
			destroy() {
				this.view.destroy(), this.stopListening()
			}
		}
		xn(na, Ho);
		class oa {
			constructor() {
				this._commands = new Map
			}
			add(t, e) {
				this._commands.set(t, e)
			}
			get(t) {
				return this._commands.get(t)
			}
			execute(t, ...e) {
				const n = this.get(t);
				if (!n) throw new hn.b("commandcollection-command-not-found: Command does not exist.", this, {
					commandName: t
				});
				n.execute(...e)
			}* names() {
				yield* this._commands.keys()
			}* commands() {
				yield* this._commands.values()
			} [Symbol.iterator]() {
				return this._commands[Symbol.iterator]()
			}
			destroy() {
				for (const t of this.commands()) t.destroy()
			}
		}
		class ia {
			constructor() {
				this._consumables = new Map
			}
			add(t, e) {
				let n;
				t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !0) : (this._consumables.has(t) ? n =
					this._consumables.get(t) : (n = new ra(t), this._consumables.set(t, n)), n.add(e))
			}
			test(t, e) {
				const n = this._consumables.get(t);
				return void 0 === n ? null : t.is("text") || t.is("documentFragment") ? n : n.test(e)
			}
			consume(t, e) {
				return !!this.test(t, e) && (t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !1) : this._consumables
					.get(t).consume(e), !0)
			}
			revert(t, e) {
				const n = this._consumables.get(t);
				void 0 !== n && (t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !0) : n.revert(e))
			}
			static consumablesFromElement(t) {
				const e = {
						element: t,
						name: !0,
						attributes: [],
						classes: [],
						styles: []
					},
					n = t.getAttributeKeys();
				for (const t of n) "style" != t && "class" != t && e.attributes.push(t);
				const o = t.getClassNames();
				for (const t of o) e.classes.push(t);
				const i = t.getStyleNames();
				for (const t of i) e.styles.push(t);
				return e
			}
			static createFrom(t, e) {
				if (e || (e = new ia(t)), t.is("text")) return e.add(t), e;
				t.is("element") && e.add(t, ia.consumablesFromElement(t)), t.is("documentFragment") && e.add(t);
				for (const n of t.getChildren()) e = ia.createFrom(n, e);
				return e
			}
		}
		class ra {
			constructor(t) {
				this.element = t, this._canConsumeName = null, this._consumables = {
					attributes: new Map,
					styles: new Map,
					classes: new Map
				}
			}
			add(t) {
				t.name && (this._canConsumeName = !0);
				for (const e in this._consumables) e in t && this._add(e, t[e])
			}
			test(t) {
				if (t.name && !this._canConsumeName) return this._canConsumeName;
				for (const e in this._consumables)
					if (e in t) {
						const n = this._test(e, t[e]);
						if (!0 !== n) return n
					} return !0
			}
			consume(t) {
				t.name && (this._canConsumeName = !1);
				for (const e in this._consumables) e in t && this._consume(e, t[e])
			}
			revert(t) {
				t.name && (this._canConsumeName = !0);
				for (const e in this._consumables) e in t && this._revert(e, t[e])
			}
			_add(t, e) {
				const n = Dt(e) ? e : [e],
					o = this._consumables[t];
				for (const e of n) {
					if ("attributes" === t && ("class" === e || "style" === e)) throw new hn.b(
						"viewconsumable-invalid-attribute: Classes and styles should be handled separately.", this);
					if (o.set(e, !0), "styles" === t)
						for (const t of this.element.document.stylesProcessor.getRelatedStyles(e)) o.set(t, !0)
				}
			}
			_test(t, e) {
				const n = Dt(e) ? e : [e],
					o = this._consumables[t];
				for (const e of n)
					if ("attributes" !== t || "class" !== e && "style" !== e) {
						const t = o.get(e);
						if (void 0 === t) return null;
						if (!t) return !1
					} else {
						const t = "class" == e ? "classes" : "styles",
							n = this._test(t, [...this._consumables[t].keys()]);
						if (!0 !== n) return n
					} return !0
			}
			_consume(t, e) {
				const n = Dt(e) ? e : [e],
					o = this._consumables[t];
				for (const e of n)
					if ("attributes" !== t || "class" !== e && "style" !== e) {
						if (o.set(e, !1), "styles" == t)
							for (const t of this.element.document.stylesProcessor.getRelatedStyles(e)) o.set(t, !1)
					} else {
						const t = "class" == e ? "classes" : "styles";
						this._consume(t, [...this._consumables[t].keys()])
					}
			}
			_revert(t, e) {
				const n = Dt(e) ? e : [e],
					o = this._consumables[t];
				for (const e of n)
					if ("attributes" !== t || "class" !== e && "style" !== e) {
						!1 === o.get(e) && o.set(e, !0)
					} else {
						const t = "class" == e ? "classes" : "styles";
						this._revert(t, [...this._consumables[t].keys()])
					}
			}
		}
		class sa {
			constructor() {
				this._sourceDefinitions = {}, this._attributeProperties = {}, this.decorate("checkChild"), this.decorate(
					"checkAttribute"), this.on("checkAttribute", (t, e) => {
					e[0] = new aa(e[0])
				}, {
					priority: "highest"
				}), this.on("checkChild", (t, e) => {
					e[0] = new aa(e[0]), e[1] = this.getDefinition(e[1])
				}, {
					priority: "highest"
				})
			}
			register(t, e) {
				if (this._sourceDefinitions[t]) throw new hn.b(
					"schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.", this, {
						itemName: t
					});
				this._sourceDefinitions[t] = [Object.assign({}, e)], this._clearCache()
			}
			extend(t, e) {
				if (!this._sourceDefinitions[t]) throw new hn.b(
					"schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.", this, {
						itemName: t
					});
				this._sourceDefinitions[t].push(Object.assign({}, e)), this._clearCache()
			}
			getDefinitions() {
				return this._compiledDefinitions || this._compile(), this._compiledDefinitions
			}
			getDefinition(t) {
				let e;
				return e = "string" == typeof t ? t : t.is && (t.is("text") || t.is("textProxy")) ? "$text" : t.name, this.getDefinitions()[
					e]
			}
			isRegistered(t) {
				return !!this.getDefinition(t)
			}
			isBlock(t) {
				const e = this.getDefinition(t);
				return !(!e || !e.isBlock)
			}
			isLimit(t) {
				const e = this.getDefinition(t);
				return !!e && !(!e.isLimit && !e.isObject)
			}
			isObject(t) {
				const e = this.getDefinition(t);
				return !(!e || !e.isObject)
			}
			isInline(t) {
				const e = this.getDefinition(t);
				return !(!e || !e.isInline)
			}
			checkChild(t, e) {
				return !!e && this._checkContextMatch(e, t)
			}
			checkAttribute(t, e) {
				const n = this.getDefinition(t.last);
				return !!n && n.allowAttributes.includes(e)
			}
			checkMerge(t, e = null) {
				if (t instanceof ys) {
					const e = t.nodeBefore,
						n = t.nodeAfter;
					if (!(e instanceof ks)) throw new hn.b(
						"schema-check-merge-no-element-before: The node before the merge position must be an element.", this);
					if (!(n instanceof ks)) throw new hn.b(
						"schema-check-merge-no-element-after: The node after the merge position must be an element.", this);
					return this.checkMerge(e, n)
				}
				for (const n of e.getChildren())
					if (!this.checkChild(t, n)) return !1;
				return !0
			}
			addChildCheck(t) {
				this.on("checkChild", (e, [n, o]) => {
					if (!o) return;
					const i = t(n, o);
					"boolean" == typeof i && (e.stop(), e.return = i)
				}, {
					priority: "high"
				})
			}
			addAttributeCheck(t) {
				this.on("checkAttribute", (e, [n, o]) => {
					const i = t(n, o);
					"boolean" == typeof i && (e.stop(), e.return = i)
				}, {
					priority: "high"
				})
			}
			setAttributeProperties(t, e) {
				this._attributeProperties[t] = Object.assign(this.getAttributeProperties(t), e)
			}
			getAttributeProperties(t) {
				return this._attributeProperties[t] || {}
			}
			getLimitElement(t) {
				let e;
				if (t instanceof ys) e = t.parent;
				else {
					e = (t instanceof Ts ? [t] : Array.from(t.getRanges())).reduce((t, e) => {
						const n = e.getCommonAncestor();
						return t ? t.getCommonAncestor(n, {
							includeSelf: !0
						}) : n
					}, null)
				}
				for (; !this.isLimit(e) && e.parent;) e = e.parent;
				return e
			}
			checkAttributeInSelection(t, e) {
				if (t.isCollapsed) {
					const n = [...t.getFirstPosition().getAncestors(), new ps("", t.getAttributes())];
					return this.checkAttribute(n, e)
				} {
					const n = t.getRanges();
					for (const t of n)
						for (const n of t)
							if (this.checkAttribute(n.item, e)) return !0
				}
				return !1
			}* getValidRanges(t, e) {
				t = function*(t) {
					for (const e of t) yield* e.getMinimalFlatRanges()
				}(t);
				for (const n of t) yield* this._getValidRangesForRange(n, e)
			}
			getNearestSelectionRange(t, e = "both") {
				if (this.checkChild(t, "$text")) return new Ts(t);
				let n, o;
				const i = t.getAncestors().reverse().find(t => this.isLimit(t)) || t.root;
				"both" != e && "backward" != e || (n = new _s({
					boundaries: Ts._createIn(i),
					startPosition: t,
					direction: "backward"
				})), "both" != e && "forward" != e || (o = new _s({
					boundaries: Ts._createIn(i),
					startPosition: t
				}));
				for (const t of function*(t, e) {
						let n = !1;
						for (; !n;) {
							if (n = !0, t) {
								const e = t.next();
								e.done || (n = !1, yield {
									walker: t,
									value: e.value
								})
							}
							if (e) {
								const t = e.next();
								t.done || (n = !1, yield {
									walker: e,
									value: t.value
								})
							}
						}
					}(n, o)) {
					const e = t.walker == n ? "elementEnd" : "elementStart",
						o = t.value;
					if (o.type == e && this.isObject(o.item)) return Ts._createOn(o.item);
					if (this.checkChild(o.nextPosition, "$text")) return new Ts(o.nextPosition)
				}
				return null
			}
			findAllowedParent(t, e) {
				let n = t.parent;
				for (; n;) {
					if (this.checkChild(n, e)) return n;
					if (this.isLimit(n)) return null;
					n = n.parent
				}
				return null
			}
			removeDisallowedAttributes(t, e) {
				for (const n of t)
					if (n.is("text")) wa(this, n, e);
					else {
						const t = Ts._createIn(n).getPositions();
						for (const n of t) {
							wa(this, n.nodeBefore || n.parent, e)
						}
					}
			}
			createContext(t) {
				return new aa(t)
			}
			_clearCache() {
				this._compiledDefinitions = null
			}
			_compile() {
				const t = {},
					e = this._sourceDefinitions,
					n = Object.keys(e);
				for (const o of n) t[o] = ca(e[o], o);
				for (const e of n) la(t, e);
				for (const e of n) da(t, e);
				for (const e of n) ua(t, e), ha(t, e);
				for (const e of n) fa(t, e), ga(t, e);
				this._compiledDefinitions = t
			}
			_checkContextMatch(t, e, n = e.length - 1) {
				const o = e.getItem(n);
				if (t.allowIn.includes(o.name)) {
					if (0 == n) return !0; {
						const t = this.getDefinition(o);
						return this._checkContextMatch(t, e, n - 1)
					}
				}
				return !1
			}* _getValidRangesForRange(t, e) {
				let n = t.start,
					o = t.start;
				for (const i of t.getItems({
						shallow: !0
					})) i.is("element") && (yield* this._getValidRangesForRange(Ts._createIn(i), e)), this.checkAttribute(i, e) ||
					(n.isEqual(o) || (yield new Ts(n, o)), n = ys._createAfter(i)), o = ys._createAfter(i);
				n.isEqual(o) || (yield new Ts(n, o))
			}
		}
		xn(sa, Ho);
		class aa {
			constructor(t) {
				if (t instanceof aa) return t;
				"string" == typeof t ? t = [t] : Array.isArray(t) || (t = t.getAncestors({
					includeSelf: !0
				})), t[0] && "string" != typeof t[0] && t[0].is("documentFragment") && t.shift(), this._items = t.map(ba)
			}
			get length() {
				return this._items.length
			}
			get last() {
				return this._items[this._items.length - 1]
			} [Symbol.iterator]() {
				return this._items[Symbol.iterator]()
			}
			push(t) {
				const e = new aa([t]);
				return e._items = [...this._items, ...e._items], e
			}
			getItem(t) {
				return this._items[t]
			}* getNames() {
				yield* this._items.map(t => t.name)
			}
			endsWith(t) {
				return Array.from(this.getNames()).join(" ").endsWith(t)
			}
			startsWith(t) {
				return Array.from(this.getNames()).join(" ").startsWith(t)
			}
		}

		function ca(t, e) {
			const n = {
				name: e,
				allowIn: [],
				allowContentOf: [],
				allowWhere: [],
				allowAttributes: [],
				allowAttributesOf: [],
				inheritTypesFrom: []
			};
			return function(t, e) {
					for (const n of t) {
						const t = Object.keys(n).filter(t => t.startsWith("is"));
						for (const o of t) e[o] = n[o]
					}
				}(t, n), ma(t, n, "allowIn"), ma(t, n, "allowContentOf"), ma(t, n, "allowWhere"), ma(t, n, "allowAttributes"),
				ma(t, n, "allowAttributesOf"), ma(t, n, "inheritTypesFrom"),
				function(t, e) {
					for (const n of t) {
						const t = n.inheritAllFrom;
						t && (e.allowContentOf.push(t), e.allowWhere.push(t), e.allowAttributesOf.push(t), e.inheritTypesFrom.push(t))
					}
				}(t, n), n
		}

		function la(t, e) {
			for (const n of t[e].allowContentOf)
				if (t[n]) {
					pa(t, n).forEach(t => {
						t.allowIn.push(e)
					})
				} delete t[e].allowContentOf
		}

		function da(t, e) {
			for (const n of t[e].allowWhere) {
				const o = t[n];
				if (o) {
					const n = o.allowIn;
					t[e].allowIn.push(...n)
				}
			}
			delete t[e].allowWhere
		}

		function ua(t, e) {
			for (const n of t[e].allowAttributesOf) {
				const o = t[n];
				if (o) {
					const n = o.allowAttributes;
					t[e].allowAttributes.push(...n)
				}
			}
			delete t[e].allowAttributesOf
		}

		function ha(t, e) {
			const n = t[e];
			for (const e of n.inheritTypesFrom) {
				const o = t[e];
				if (o) {
					const t = Object.keys(o).filter(t => t.startsWith("is"));
					for (const e of t) e in n || (n[e] = o[e])
				}
			}
			delete n.inheritTypesFrom
		}

		function fa(t, e) {
			const n = t[e],
				o = n.allowIn.filter(e => t[e]);
			n.allowIn = Array.from(new Set(o))
		}

		function ga(t, e) {
			const n = t[e];
			n.allowAttributes = Array.from(new Set(n.allowAttributes))
		}

		function ma(t, e, n) {
			for (const o of t) "string" == typeof o[n] ? e[n].push(o[n]) : Array.isArray(o[n]) && e[n].push(...o[n])
		}

		function pa(t, e) {
			const n = t[e];
			return (o = t, Object.keys(o).map(t => o[t])).filter(t => t.allowIn.includes(n.name));
			var o
		}

		function ba(t) {
			return "string" == typeof t ? {
				name: t,
				* getAttributeKeys() {},
				getAttribute() {}
			} : {
				name: t.is("element") ? t.name : "$text",
				* getAttributeKeys() {
					yield* t.getAttributeKeys()
				},
				getAttribute: e => t.getAttribute(e)
			}
		}

		function wa(t, e, n) {
			for (const o of e.getAttributeKeys()) t.checkAttribute(e, o) || n.removeAttribute(o, e)
		}
		class ka {
			constructor(t = {}) {
				this._splitParts = new Map, this._modelCursor = null, this.conversionApi = Object.assign({}, t), this.conversionApi
					.convertItem = this._convertItem.bind(this), this.conversionApi.convertChildren = this._convertChildren.bind(
						this), this.conversionApi.splitToAllowedParent = this._splitToAllowedParent.bind(this), this.conversionApi.getSplitParts =
					this._getSplitParts.bind(this)
			}
			convert(t, e, n = ["$root"]) {
				this.fire("viewCleanup", t), this._modelCursor = function(t, e) {
						let n;
						for (const o of new aa(t)) {
							const t = {};
							for (const e of o.getAttributeKeys()) t[e] = o.getAttribute(e);
							const i = e.createElement(o.name, t);
							n && e.append(i, n), n = ys._createAt(i, 0)
						}
						return n
					}(n, e), this.conversionApi.writer = e, this.conversionApi.consumable = ia.createFrom(t), this.conversionApi
					.store = {};
				const {
					modelRange: o
				} = this._convertItem(t, this._modelCursor), i = e.createDocumentFragment();
				if (o) {
					this._removeEmptyElements();
					for (const t of Array.from(this._modelCursor.parent.getChildren())) e.append(t, i);
					i.markers = function(t, e) {
						const n = new Set,
							o = new Map,
							i = Ts._createIn(t).getItems();
						for (const t of i) "$marker" == t.name && n.add(t);
						for (const t of n) {
							const n = t.getAttribute("data-name"),
								i = e.createPositionBefore(t);
							o.has(n) ? o.get(n).end = i.clone() : o.set(n, new Ts(i.clone())), e.remove(t)
						}
						return o
					}(i, e)
				}
				return this._modelCursor = null, this._splitParts.clear(), this.conversionApi.writer = null, this.conversionApi
					.store = null, i
			}
			_convertItem(t, e) {
				const n = Object.assign({
					viewItem: t,
					modelCursor: e,
					modelRange: null
				});
				if (t.is("element") ? this.fire("element:" + t.name, n, this.conversionApi) : t.is("text") ? this.fire("text",
						n, this.conversionApi) : this.fire("documentFragment", n, this.conversionApi), n.modelRange && !(n.modelRange instanceof Ts))
					throw new hn.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.", this);
				return {
					modelRange: n.modelRange,
					modelCursor: n.modelCursor
				}
			}
			_convertChildren(t, e) {
				const n = new Ts(e);
				let o = e;
				for (const e of Array.from(t.getChildren())) {
					const t = this._convertItem(e, o);
					t.modelRange instanceof Ts && (n.end = t.modelRange.end, o = t.modelCursor)
				}
				return {
					modelRange: n,
					modelCursor: o
				}
			}
			_splitToAllowedParent(t, e) {
				const n = this.conversionApi.schema.findAllowedParent(e, t);
				if (!n) return null;
				if (n === e.parent) return {
					position: e
				};
				if (this._modelCursor.parent.getAncestors().includes(n)) return null;
				const o = this.conversionApi.writer.split(e, n),
					i = [];
				for (const t of o.range.getWalker())
					if ("elementEnd" == t.type) i.push(t.item);
					else {
						const e = i.pop(),
							n = t.item;
						this._registerSplitPair(e, n)
					} return {
					position: o.position,
					cursorParent: o.range.end.parent
				}
			}
			_registerSplitPair(t, e) {
				this._splitParts.has(t) || this._splitParts.set(t, [t]);
				const n = this._splitParts.get(t);
				this._splitParts.set(e, n), n.push(e)
			}
			_getSplitParts(t) {
				let e;
				return e = this._splitParts.has(t) ? this._splitParts.get(t) : [t], e
			}
			_removeEmptyElements() {
				let t = !1;
				for (const e of this._splitParts.keys()) e.isEmpty && (this.conversionApi.writer.remove(e), this._splitParts.delete(
					e), t = !0);
				t && this._removeEmptyElements()
			}
		}
		xn(ka, mn);
		class _a {
			constructor(t, e) {
				this.model = t, this.stylesProcessor = e, this.processor, this.mapper = new Ss, this.downcastDispatcher = new Ms({
					mapper: this.mapper
				}), this.downcastDispatcher.on("insert:$text", (t, e, n) => {
					if (!n.consumable.consume(e.item, "insert")) return;
					const o = n.writer,
						i = n.mapper.toViewPosition(e.range.start),
						r = o.createText(e.item.data);
					o.insert(i, r)
				}, {
					priority: "lowest"
				}), this.upcastDispatcher = new ka({
					schema: t.schema
				}), this.viewDocument = new ri(e), this._viewWriter = new Si(this.viewDocument), this.upcastDispatcher.on(
					"text", (t, e, n) => {
						if (n.schema.checkChild(e.modelCursor, "$text") && n.consumable.consume(e.viewItem)) {
							const t = n.writer.createText(e.viewItem.data);
							n.writer.insert(t, e.modelCursor), e.modelRange = Ts._createFromPositionAndShift(e.modelCursor, t.offsetSize),
								e.modelCursor = e.modelRange.end
						}
					}, {
						priority: "lowest"
					}), this.upcastDispatcher.on("element", (t, e, n) => {
					if (!e.modelRange && n.consumable.consume(e.viewItem, {
							name: !0
						})) {
						const {
							modelRange: t,
							modelCursor: o
						} = n.convertChildren(e.viewItem, e.modelCursor);
						e.modelRange = t, e.modelCursor = o
					}
				}, {
					priority: "lowest"
				}), this.upcastDispatcher.on("documentFragment", (t, e, n) => {
					if (!e.modelRange && n.consumable.consume(e.viewItem, {
							name: !0
						})) {
						const {
							modelRange: t,
							modelCursor: o
						} = n.convertChildren(e.viewItem, e.modelCursor);
						e.modelRange = t, e.modelCursor = o
					}
				}, {
					priority: "lowest"
				}), this.decorate("init"), this.on("init", () => {
					this.fire("ready")
				}, {
					priority: "lowest"
				})
			}
			get(t) {
				const {
					rootName: e = "main",
					trim: n = "empty"
				} = t || {};
				if (!this._checkIfRootsExists([e])) throw new hn.b(
					"datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.", this);
				const o = this.model.document.getRoot(e);
				return "empty" !== n || this.model.hasContent(o, {
					ignoreWhitespaces: !0
				}) ? this.stringify(o) : ""
			}
			stringify(t) {
				const e = this.toView(t);
				return this.processor.toData(e)
			}
			toView(t) {
				const e = this.viewDocument,
					n = this._viewWriter;
				this.mapper.clearBindings();
				const o = Ts._createIn(t),
					i = new Ti(e);
				if (this.mapper.bindElements(t, i), this.downcastDispatcher.convertInsert(o, n), !t.is("documentFragment")) {
					const e = function(t) {
						const e = [],
							n = t.root.document;
						if (!n) return [];
						const o = Ts._createIn(t);
						for (const t of n.model.markers) {
							const n = o.getIntersection(t.getRange());
							n && e.push([t.name, n])
						}
						return e
					}(t);
					for (const [t, o] of e) this.downcastDispatcher.convertMarkerAdd(t, o, n)
				}
				return i
			}
			init(t) {
				if (this.model.document.version) throw new hn.b(
					"datacontroller-init-document-not-empty: Trying to set initial data to not empty document.", this);
				let e = {};
				if ("string" == typeof t ? e.main = t : e = t, !this._checkIfRootsExists(Object.keys(e))) throw new hn.b(
					"datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.", this);
				return this.model.enqueueChange("transparent", t => {
					for (const n of Object.keys(e)) {
						const o = this.model.document.getRoot(n);
						t.insert(this.parse(e[n], o), o, 0)
					}
				}), Promise.resolve()
			}
			set(t) {
				let e = {};
				if ("string" == typeof t ? e.main = t : e = t, !this._checkIfRootsExists(Object.keys(e))) throw new hn.b(
					"datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.", this);
				this.model.enqueueChange("transparent", t => {
					t.setSelection(null), t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());
					for (const n of Object.keys(e)) {
						const o = this.model.document.getRoot(n);
						t.remove(t.createRangeIn(o)), t.insert(this.parse(e[n], o), o, 0)
					}
				})
			}
			parse(t, e = "$root") {
				const n = this.processor.toView(t);
				return this.toModel(n, e)
			}
			toModel(t, e = "$root") {
				return this.model.change(n => this.upcastDispatcher.convert(t, n, e))
			}
			addStyleProcessorRules(t) {
				t(this.stylesProcessor)
			}
			destroy() {
				this.stopListening()
			}
			_checkIfRootsExists(t) {
				for (const e of t)
					if (!this.model.document.getRootNames().includes(e)) return !1;
				return !0
			}
		}
		xn(_a, Ho);
		class va {
			constructor(t, e) {
				this._helpers = new Map, this._downcast = Array.isArray(t) ? t : [t], this._createConversionHelpers({
					name: "downcast",
					dispatchers: this._downcast,
					isDowncast: !0
				}), this._upcast = Array.isArray(e) ? e : [e], this._createConversionHelpers({
					name: "upcast",
					dispatchers: this._upcast,
					isDowncast: !1
				})
			}
			addAlias(t, e) {
				const n = this._downcast.includes(e);
				if (!this._upcast.includes(e) && !n) throw new hn.b(
					"conversion-add-alias-dispatcher-not-registered: Trying to register and alias for a dispatcher that nas not been registered.",
					this);
				this._createConversionHelpers({
					name: t,
					dispatchers: [e],
					isDowncast: n
				})
			}
			for (t) {
				if (!this._helpers.has(t)) throw new hn.b(
					"conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.", this);
				return this._helpers.get(t)
			}
			elementToElement(t) {
				this.for("downcast").elementToElement(t);
				for (const {
						model: e,
						view: n
					} of ya(t)) this.for("upcast").elementToElement({
					model: e,
					view: n,
					converterPriority: t.converterPriority
				})
			}
			attributeToElement(t) {
				this.for("downcast").attributeToElement(t);
				for (const {
						model: e,
						view: n
					} of ya(t)) this.for("upcast").elementToAttribute({
					view: n,
					model: e,
					converterPriority: t.converterPriority
				})
			}
			attributeToAttribute(t) {
				this.for("downcast").attributeToAttribute(t);
				for (const {
						model: e,
						view: n
					} of ya(t)) this.for("upcast").attributeToAttribute({
					view: n,
					model: e
				})
			}
			_createConversionHelpers({
				name: t,
				dispatchers: e,
				isDowncast: n
			}) {
				if (this._helpers.has(t)) throw new hn.b(
					"conversion-group-exists: Trying to register a group name that has already been registered.", this);
				const o = n ? new Ws(e) : new Js(e);
				this._helpers.set(t, o)
			}
		}

		function* ya(t) {
			if (t.model.values)
				for (const e of t.model.values) {
					const n = {
							key: t.model.key,
							value: e
						},
						o = t.view[e],
						i = t.upcastAlso ? t.upcastAlso[e] : void 0;
					yield* xa(n, o, i)
				} else yield* xa(t.model, t.view, t.upcastAlso)
		}

		function* xa(t, e, n) {
			if (yield {
					model: t,
					view: e
				}, n) {
				n = Array.isArray(n) ? n : [n];
				for (const e of n) yield {
					model: t,
					view: e
				}
			}
		}
		class Aa {
			constructor(t = "default") {
				this.operations = [], this.type = t
			}
			get baseVersion() {
				for (const t of this.operations)
					if (null !== t.baseVersion) return t.baseVersion;
				return null
			}
			addOperation(t) {
				return t.batch = this, this.operations.push(t), t
			}
		}
		class Ca {
			constructor(t) {
				this.baseVersion = t, this.isDocumentOperation = null !== this.baseVersion, this.batch = null
			}
			_validate() {}
			toJSON() {
				const t = Object.assign({}, this);
				return t.__className = this.constructor.className, delete t.batch, delete t.isDocumentOperation, t
			}
			static get className() {
				return "Operation"
			}
			static fromJSON(t) {
				return new this(t.baseVersion)
			}
		}
		class Ta {
			constructor(t) {
				this.markers = new Map, this._children = new ws, t && this._insertChild(0, t)
			} [Symbol.iterator]() {
				return this.getChildren()
			}
			get childCount() {
				return this._children.length
			}
			get maxOffset() {
				return this._children.maxOffset
			}
			get isEmpty() {
				return 0 === this.childCount
			}
			get root() {
				return this
			}
			get parent() {
				return null
			}
			is(t) {
				return "documentFragment" === t || "model:documentFragment" === t
			}
			getChild(t) {
				return this._children.getNode(t)
			}
			getChildren() {
				return this._children[Symbol.iterator]()
			}
			getChildIndex(t) {
				return this._children.getNodeIndex(t)
			}
			getChildStartOffset(t) {
				return this._children.getNodeStartOffset(t)
			}
			getPath() {
				return []
			}
			getNodeByPath(t) {
				let e = this;
				for (const n of t) e = e.getChild(e.offsetToIndex(n));
				return e
			}
			offsetToIndex(t) {
				return this._children.offsetToIndex(t)
			}
			toJSON() {
				const t = [];
				for (const e of this._children) t.push(e.toJSON());
				return t
			}
			static fromJSON(t) {
				const e = [];
				for (const n of t) n.name ? e.push(ks.fromJSON(n)) : e.push(ps.fromJSON(n));
				return new Ta(e)
			}
			_appendChild(t) {
				this._insertChild(this.childCount, t)
			}
			_insertChild(t, e) {
				const n = function(t) {
					if ("string" == typeof t) return [new ps(t)];
					yn(t) || (t = [t]);
					return Array.from(t).map(t => "string" == typeof t ? new ps(t) : t instanceof bs ? new ps(t.data, t.getAttributes()) :
						t)
				}(e);
				for (const t of n) null !== t.parent && t._remove(), t.parent = this;
				this._children._insertNodes(t, n)
			}
			_removeChildren(t, e = 1) {
				const n = this._children._removeNodes(t, e);
				for (const t of n) t.parent = null;
				return n
			}
		}

		function Sa(t, e) {
			const n = (e = Ma(e)).reduce((t, e) => t + e.offsetSize, 0),
				o = t.parent;
			Na(t);
			const i = t.index;
			return o._insertChild(i, e), Ia(o, i + e.length), Ia(o, i), new Ts(t, t.getShiftedBy(n))
		}

		function Pa(t) {
			if (!t.isFlat) throw new hn.b(
				"operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.",
				this);
			const e = t.start.parent;
			Na(t.start), Na(t.end);
			const n = e._removeChildren(t.start.index, t.end.index - t.start.index);
			return Ia(e, t.start.index), n
		}

		function Ea(t, e) {
			if (!t.isFlat) throw new hn.b(
				"operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.",
				this);
			const n = Pa(t);
			return Sa(e = e._getTransformedByDeletion(t.start, t.end.offset - t.start.offset), n)
		}

		function Ma(t) {
			const e = [];
			t instanceof Array || (t = [t]);
			for (let n = 0; n < t.length; n++)
				if ("string" == typeof t[n]) e.push(new ps(t[n]));
				else if (t[n] instanceof bs) e.push(new ps(t[n].data, t[n].getAttributes()));
			else if (t[n] instanceof Ta || t[n] instanceof ws)
				for (const o of t[n]) e.push(o);
			else t[n] instanceof ms && e.push(t[n]);
			for (let t = 1; t < e.length; t++) {
				const n = e[t],
					o = e[t - 1];
				n instanceof ps && o instanceof ps && Oa(n, o) && (e.splice(t - 1, 2, new ps(o.data + n.data, o.getAttributes())),
					t--)
			}
			return e
		}

		function Ia(t, e) {
			const n = t.getChild(e - 1),
				o = t.getChild(e);
			if (n && o && n.is("text") && o.is("text") && Oa(n, o)) {
				const i = new ps(n.data + o.data, n.getAttributes());
				t._removeChildren(e - 1, 2), t._insertChild(e - 1, i)
			}
		}

		function Na(t) {
			const e = t.textNode,
				n = t.parent;
			if (e) {
				const o = t.offset - e.startOffset,
					i = e.index;
				n._removeChildren(i, 1);
				const r = new ps(e.data.substr(0, o), e.getAttributes()),
					s = new ps(e.data.substr(o), e.getAttributes());
				n._insertChild(i, [r, s])
			}
		}

		function Oa(t, e) {
			const n = t.getAttributes(),
				o = e.getAttributes();
			for (const t of n) {
				if (t[1] !== e.getAttribute(t[0])) return !1;
				o.next()
			}
			return o.next().done
		}
		var Ra = function(t, e) {
			return Ir(t, e)
		};
		class Da extends Ca {
			constructor(t, e, n, o, i) {
				super(i), this.range = t.clone(), this.key = e, this.oldValue = void 0 === n ? null : n, this.newValue = void 0 ===
					o ? null : o
			}
			get type() {
				return null === this.oldValue ? "addAttribute" : null === this.newValue ? "removeAttribute" :
					"changeAttribute"
			}
			clone() {
				return new Da(this.range, this.key, this.oldValue, this.newValue, this.baseVersion)
			}
			getReversed() {
				return new Da(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
			}
			toJSON() {
				const t = super.toJSON();
				return t.range = this.range.toJSON(), t
			}
			_validate() {
				if (!this.range.isFlat) throw new hn.b("attribute-operation-range-not-flat: The range to change is not flat.",
					this);
				for (const t of this.range.getItems({
						shallow: !0
					})) {
					if (null !== this.oldValue && !Ra(t.getAttribute(this.key), this.oldValue)) throw new hn.b(
						"attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",
						this, {
							item: t,
							key: this.key,
							value: this.oldValue
						});
					if (null === this.oldValue && null !== this.newValue && t.hasAttribute(this.key)) throw new hn.b(
						"attribute-operation-attribute-exists: The attribute with given key already exists.", this, {
							node: t,
							key: this.key
						})
				}
			}
			_execute() {
				Ra(this.oldValue, this.newValue) || function(t, e, n) {
					Na(t.start), Na(t.end);
					for (const o of t.getItems({
							shallow: !0
						})) {
						const t = o.is("textProxy") ? o.textNode : o;
						null !== n ? t._setAttribute(e, n) : t._removeAttribute(e), Ia(t.parent, t.index)
					}
					Ia(t.end.parent, t.end.index)
				}(this.range, this.key, this.newValue)
			}
			static get className() {
				return "AttributeOperation"
			}
			static fromJSON(t, e) {
				return new Da(Ts.fromJSON(t.range, e), t.key, t.oldValue, t.newValue, t.baseVersion)
			}
		}
		class La extends Ca {
			constructor(t, e) {
				super(null), this.sourcePosition = t.clone(), this.howMany = e
			}
			get type() {
				return "detach"
			}
			toJSON() {
				const t = super.toJSON();
				return t.sourcePosition = this.sourcePosition.toJSON(), t
			}
			_validate() {
				if (this.sourcePosition.root.document) throw new hn.b(
					"detach-operation-on-document-node: Cannot detach document node.", this)
			}
			_execute() {
				Pa(Ts._createFromPositionAndShift(this.sourcePosition, this.howMany))
			}
			static get className() {
				return "DetachOperation"
			}
		}
		class ja extends Ca {
			constructor(t, e, n, o) {
				super(o), this.sourcePosition = t.clone(), this.sourcePosition.stickiness = "toNext", this.howMany = e, this.targetPosition =
					n.clone(), this.targetPosition.stickiness = "toNone"
			}
			get type() {
				return "$graveyard" == this.targetPosition.root.rootName ? "remove" : "$graveyard" == this.sourcePosition.root
					.rootName ? "reinsert" : "move"
			}
			clone() {
				return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion)
			}
			getMovedRangeStart() {
				return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany)
			}
			getReversed() {
				const t = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
				return new this.constructor(this.getMovedRangeStart(), this.howMany, t, this.baseVersion + 1)
			}
			_validate() {
				const t = this.sourcePosition.parent,
					e = this.targetPosition.parent,
					n = this.sourcePosition.offset,
					o = this.targetPosition.offset;
				if (n + this.howMany > t.maxOffset) throw new hn.b(
					"move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.", this);
				if (t === e && n < o && o < n + this.howMany) throw new hn.b(
					"move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.", this);
				if (this.sourcePosition.root == this.targetPosition.root && "prefix" == In(this.sourcePosition.getParentPath(),
						this.targetPosition.getParentPath())) {
					const t = this.sourcePosition.path.length - 1;
					if (this.targetPosition.path[t] >= n && this.targetPosition.path[t] < n + this.howMany) throw new hn.b(
						"move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.",
						this)
				}
			}
			_execute() {
				Ea(Ts._createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition)
			}
			toJSON() {
				const t = super.toJSON();
				return t.sourcePosition = this.sourcePosition.toJSON(), t.targetPosition = this.targetPosition.toJSON(), t
			}
			static get className() {
				return "MoveOperation"
			}
			static fromJSON(t, e) {
				const n = ys.fromJSON(t.sourcePosition, e),
					o = ys.fromJSON(t.targetPosition, e);
				return new this(n, t.howMany, o, t.baseVersion)
			}
		}
		class Va extends Ca {
			constructor(t, e, n) {
				super(n), this.position = t.clone(), this.position.stickiness = "toNone", this.nodes = new ws(Ma(e)), this.shouldReceiveAttributes = !
					1
			}
			get type() {
				return "insert"
			}
			get howMany() {
				return this.nodes.maxOffset
			}
			clone() {
				const t = new ws([...this.nodes].map(t => t._clone(!0))),
					e = new Va(this.position, t, this.baseVersion);
				return e.shouldReceiveAttributes = this.shouldReceiveAttributes, e
			}
			getReversed() {
				const t = this.position.root.document.graveyard,
					e = new ys(t, [0]);
				return new ja(this.position, this.nodes.maxOffset, e, this.baseVersion + 1)
			}
			_validate() {
				const t = this.position.parent;
				if (!t || t.maxOffset < this.position.offset) throw new hn.b(
					"insert-operation-position-invalid: Insertion position is invalid.", this)
			}
			_execute() {
				const t = this.nodes;
				this.nodes = new ws([...t].map(t => t._clone(!0))), Sa(this.position, t)
			}
			toJSON() {
				const t = super.toJSON();
				return t.position = this.position.toJSON(), t.nodes = this.nodes.toJSON(), t
			}
			static get className() {
				return "InsertOperation"
			}
			static fromJSON(t, e) {
				const n = [];
				for (const e of t.nodes) e.name ? n.push(ks.fromJSON(e)) : n.push(ps.fromJSON(e));
				const o = new Va(ys.fromJSON(t.position, e), n, t.baseVersion);
				return o.shouldReceiveAttributes = t.shouldReceiveAttributes, o
			}
		}
		class za extends Ca {
			constructor(t, e, n, o, i, r) {
				super(r), this.name = t, this.oldRange = e ? e.clone() : null, this.newRange = n ? n.clone() : null, this.affectsData =
					i, this._markers = o
			}
			get type() {
				return "marker"
			}
			clone() {
				return new za(this.name, this.oldRange, this.newRange, this._markers, this.affectsData, this.baseVersion)
			}
			getReversed() {
				return new za(this.name, this.newRange, this.oldRange, this._markers, this.affectsData, this.baseVersion + 1)
			}
			_execute() {
				const t = this.newRange ? "_set" : "_remove";
				this._markers[t](this.name, this.newRange, !0, this.affectsData)
			}
			toJSON() {
				const t = super.toJSON();
				return this.oldRange && (t.oldRange = this.oldRange.toJSON()), this.newRange && (t.newRange = this.newRange.toJSON()),
					delete t._markers, t
			}
			static get className() {
				return "MarkerOperation"
			}
			static fromJSON(t, e) {
				return new za(t.name, t.oldRange ? Ts.fromJSON(t.oldRange, e) : null, t.newRange ? Ts.fromJSON(t.newRange, e) :
					null, e.model.markers, t.affectsData, t.baseVersion)
			}
		}
		class Ba extends Ca {
			constructor(t, e, n, o) {
				super(o), this.position = t, this.position.stickiness = "toNext", this.oldName = e, this.newName = n
			}
			get type() {
				return "rename"
			}
			clone() {
				return new Ba(this.position.clone(), this.oldName, this.newName, this.baseVersion)
			}
			getReversed() {
				return new Ba(this.position.clone(), this.newName, this.oldName, this.baseVersion + 1)
			}
			_validate() {
				const t = this.position.nodeAfter;
				if (!(t instanceof ks)) throw new hn.b(
					"rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.",
					this);
				if (t.name !== this.oldName) throw new hn.b(
					"rename-operation-wrong-name: Element to change has different name than operation's old name.", this)
			}
			_execute() {
				this.position.nodeAfter.name = this.newName
			}
			toJSON() {
				const t = super.toJSON();
				return t.position = this.position.toJSON(), t
			}
			static get className() {
				return "RenameOperation"
			}
			static fromJSON(t, e) {
				return new Ba(ys.fromJSON(t.position, e), t.oldName, t.newName, t.baseVersion)
			}
		}
		class Fa extends Ca {
			constructor(t, e, n, o, i) {
				super(i), this.root = t, this.key = e, this.oldValue = n, this.newValue = o
			}
			get type() {
				return null === this.oldValue ? "addRootAttribute" : null === this.newValue ? "removeRootAttribute" :
					"changeRootAttribute"
			}
			clone() {
				return new Fa(this.root, this.key, this.oldValue, this.newValue, this.baseVersion)
			}
			getReversed() {
				return new Fa(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
			}
			_validate() {
				if (this.root != this.root.root || this.root.is("documentFragment")) throw new hn.b(
					"rootattribute-operation-not-a-root: The element to change is not a root element.", this, {
						root: this.root,
						key: this.key
					});
				if (null !== this.oldValue && this.root.getAttribute(this.key) !== this.oldValue) throw new hn.b(
					"rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",
					this, {
						root: this.root,
						key: this.key
					});
				if (null === this.oldValue && null !== this.newValue && this.root.hasAttribute(this.key)) throw new hn.b(
					"rootattribute-operation-attribute-exists: The attribute with given key already exists.", this, {
						root: this.root,
						key: this.key
					})
			}
			_execute() {
				null !== this.newValue ? this.root._setAttribute(this.key, this.newValue) : this.root._removeAttribute(this.key)
			}
			toJSON() {
				const t = super.toJSON();
				return t.root = this.root.toJSON(), t
			}
			static get className() {
				return "RootAttributeOperation"
			}
			static fromJSON(t, e) {
				if (!e.getRoot(t.root)) throw new hn.b(
					"rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.",
					this, {
						rootName: t.root
					});
				return new Fa(e.getRoot(t.root), t.key, t.oldValue, t.newValue, t.baseVersion)
			}
		}
		class Ua extends Ca {
			constructor(t, e, n, o, i) {
				super(i), this.sourcePosition = t.clone(), this.sourcePosition.stickiness = "toPrevious", this.howMany = e,
					this.targetPosition = n.clone(), this.targetPosition.stickiness = "toNext", this.graveyardPosition = o.clone()
			}
			get type() {
				return "merge"
			}
			get deletionPosition() {
				return new ys(this.sourcePosition.root, this.sourcePosition.path.slice(0, -1))
			}
			get movedRange() {
				const t = this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);
				return new Ts(this.sourcePosition, t)
			}
			clone() {
				return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.graveyardPosition,
					this.baseVersion)
			}
			getReversed() {
				const t = this.targetPosition._getTransformedByMergeOperation(this),
					e = this.sourcePosition.path.slice(0, -1),
					n = new ys(this.sourcePosition.root, e)._getTransformedByMergeOperation(this),
					o = new Ha(t, this.howMany, this.graveyardPosition, this.baseVersion + 1);
				return o.insertionPosition = n, o
			}
			_validate() {
				const t = this.sourcePosition.parent,
					e = this.targetPosition.parent;
				if (!t.parent) throw new hn.b("merge-operation-source-position-invalid: Merge source position is invalid.",
					this);
				if (!e.parent) throw new hn.b("merge-operation-target-position-invalid: Merge target position is invalid.",
					this);
				if (this.howMany != t.maxOffset) throw new hn.b(
					"merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.", this)
			}
			_execute() {
				const t = this.sourcePosition.parent;
				Ea(Ts._createIn(t), this.targetPosition), Ea(Ts._createOn(t), this.graveyardPosition)
			}
			toJSON() {
				const t = super.toJSON();
				return t.sourcePosition = t.sourcePosition.toJSON(), t.targetPosition = t.targetPosition.toJSON(), t.graveyardPosition =
					t.graveyardPosition.toJSON(), t
			}
			static get className() {
				return "MergeOperation"
			}
			static fromJSON(t, e) {
				const n = ys.fromJSON(t.sourcePosition, e),
					o = ys.fromJSON(t.targetPosition, e),
					i = ys.fromJSON(t.graveyardPosition, e);
				return new this(n, t.howMany, o, i, t.baseVersion)
			}
		}
		class Ha extends Ca {
			constructor(t, e, n, o) {
				super(o), this.splitPosition = t.clone(), this.splitPosition.stickiness = "toNext", this.howMany = e, this.insertionPosition =
					Ha.getInsertionPosition(t), this.insertionPosition.stickiness = "toNone", this.graveyardPosition = n ? n.clone() :
					null, this.graveyardPosition && (this.graveyardPosition.stickiness = "toNext")
			}
			get type() {
				return "split"
			}
			get moveTargetPosition() {
				const t = this.insertionPosition.path.slice();
				return t.push(0), new ys(this.insertionPosition.root, t)
			}
			get movedRange() {
				const t = this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);
				return new Ts(this.splitPosition, t)
			}
			clone() {
				const t = new this.constructor(this.splitPosition, this.howMany, this.graveyardPosition, this.baseVersion);
				return t.insertionPosition = this.insertionPosition, t
			}
			getReversed() {
				const t = this.splitPosition.root.document.graveyard,
					e = new ys(t, [0]);
				return new Ua(this.moveTargetPosition, this.howMany, this.splitPosition, e, this.baseVersion + 1)
			}
			_validate() {
				const t = this.splitPosition.parent,
					e = this.splitPosition.offset;
				if (!t || t.maxOffset < e) throw new hn.b("split-operation-position-invalid: Split position is invalid.",
					this);
				if (!t.parent) throw new hn.b("split-operation-split-in-root: Cannot split root element.", this);
				if (this.howMany != t.maxOffset - this.splitPosition.offset) throw new hn.b(
					"split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.", this);
				if (this.graveyardPosition && !this.graveyardPosition.nodeAfter) throw new hn.b(
					"split-operation-graveyard-position-invalid: Graveyard position invalid.", this)
			}
			_execute() {
				const t = this.splitPosition.parent;
				if (this.graveyardPosition) Ea(Ts._createFromPositionAndShift(this.graveyardPosition, 1), this.insertionPosition);
				else {
					const e = t._clone();
					Sa(this.insertionPosition, e)
				}
				Ea(new Ts(ys._createAt(t, this.splitPosition.offset), ys._createAt(t, t.maxOffset)), this.moveTargetPosition)
			}
			toJSON() {
				const t = super.toJSON();
				return t.splitPosition = this.splitPosition.toJSON(), t.insertionPosition = this.insertionPosition.toJSON(),
					this.graveyardPosition && (t.graveyardPosition = this.graveyardPosition.toJSON()), t
			}
			static get className() {
				return "SplitOperation"
			}
			static getInsertionPosition(t) {
				const e = t.path.slice(0, -1);
				return e[e.length - 1]++, new ys(t.root, e)
			}
			static fromJSON(t, e) {
				const n = ys.fromJSON(t.splitPosition, e),
					o = ys.fromJSON(t.insertionPosition, e),
					i = t.graveyardPosition ? ys.fromJSON(t.graveyardPosition, e) : null,
					r = new this(n, t.howMany, i, t.baseVersion);
				return r.insertionPosition = o, r
			}
		}
		class qa extends ks {
			constructor(t, e, n = "main") {
				super(e), this._document = t, this.rootName = n
			}
			get document() {
				return this._document
			}
			is(t, e) {
				return e ? e === this.name && ("rootElement" === t || "model:rootElement" === t || "element" === t ||
						"model:element" === t) : "rootElement" === t || "model:rootElement" === t || "element" === t ||
					"model:element" === t || t === this.name || t === "model:" + this.name || "node" === t || "model:node" ===
					t
			}
			toJSON() {
				return this.rootName
			}
		}
		class Wa {
			constructor(t, e) {
				this.model = t, this.batch = e
			}
			createText(t, e) {
				return new ps(t, e)
			}
			createElement(t, e) {
				return new ks(t, e)
			}
			createDocumentFragment() {
				return new Ta
			}
			cloneElement(t, e = !0) {
				return t._clone(e)
			}
			insert(t, e, n = 0) {
				if (this._assertWriterUsedCorrectly(), t instanceof ps && "" == t.data) return;
				const o = ys._createAt(e, n);
				if (t.parent) {
					if (Qa(t.root, o.root)) return void this.move(Ts._createOn(t), o);
					if (t.root.document) throw new hn.b(
						"model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree. It is forbidden to move a node that was already in a document outside of it.",
						this);
					this.remove(t)
				}
				const i = o.root.document ? o.root.document.version : null,
					r = new Va(o, t, i);
				if (t instanceof ps && (r.shouldReceiveAttributes = !0), this.batch.addOperation(r), this.model.applyOperation(
						r), t instanceof Ta)
					for (const [e, n] of t.markers) {
						const t = ys._createAt(n.root, 0),
							i = {
								range: new Ts(n.start._getCombined(t, o), n.end._getCombined(t, o)),
								usingOperation: !0,
								affectsData: !0
							};
						this.model.markers.has(e) ? this.updateMarker(e, i) : this.addMarker(e, i)
					}
			}
			insertText(t, e, n, o) {
				e instanceof Ta || e instanceof ks || e instanceof ys ? this.insert(this.createText(t), e, n) : this.insert(
					this.createText(t, e), n, o)
			}
			insertElement(t, e, n, o) {
				e instanceof Ta || e instanceof ks || e instanceof ys ? this.insert(this.createElement(t), e, n) : this.insert(
					this.createElement(t, e), n, o)
			}
			append(t, e) {
				this.insert(t, e, "end")
			}
			appendText(t, e, n) {
				e instanceof Ta || e instanceof ks ? this.insert(this.createText(t), e, "end") : this.insert(this.createText(
					t, e), n, "end")
			}
			appendElement(t, e, n) {
				e instanceof Ta || e instanceof ks ? this.insert(this.createElement(t), e, "end") : this.insert(this.createElement(
					t, e), n, "end")
			}
			setAttribute(t, e, n) {
				if (this._assertWriterUsedCorrectly(), n instanceof Ts) {
					const o = n.getMinimalFlatRanges();
					for (const n of o) Ga(this, t, e, n)
				} else Ya(this, t, e, n)
			}
			setAttributes(t, e) {
				for (const [n, o] of Ln(t)) this.setAttribute(n, o, e)
			}
			removeAttribute(t, e) {
				if (this._assertWriterUsedCorrectly(), e instanceof Ts) {
					const n = e.getMinimalFlatRanges();
					for (const e of n) Ga(this, t, null, e)
				} else Ya(this, t, null, e)
			}
			clearAttributes(t) {
				this._assertWriterUsedCorrectly();
				const e = t => {
					for (const e of t.getAttributeKeys()) this.removeAttribute(e, t)
				};
				if (t instanceof Ts)
					for (const n of t.getItems()) e(n);
				else e(t)
			}
			move(t, e, n) {
				if (this._assertWriterUsedCorrectly(), !(t instanceof Ts)) throw new hn.b(
					"writer-move-invalid-range: Invalid range to move.", this);
				if (!t.isFlat) throw new hn.b("writer-move-range-not-flat: Range to move is not flat.", this);
				const o = ys._createAt(e, n);
				if (o.isEqual(t.start)) return;
				if (this._addOperationForAffectedMarkers("move", t), !Qa(t.root, o.root)) throw new hn.b(
					"writer-move-different-document: Range is going to be moved between different documents.", this);
				const i = t.root.document ? t.root.document.version : null,
					r = new ja(t.start, t.end.offset - t.start.offset, o, i);
				this.batch.addOperation(r), this.model.applyOperation(r)
			}
			remove(t) {
				this._assertWriterUsedCorrectly();
				const e = (t instanceof Ts ? t : Ts._createOn(t)).getMinimalFlatRanges().reverse();
				for (const t of e) this._addOperationForAffectedMarkers("move", t), Ka(t.start, t.end.offset - t.start.offset,
					this.batch, this.model)
			}
			merge(t) {
				this._assertWriterUsedCorrectly();
				const e = t.nodeBefore,
					n = t.nodeAfter;
				if (this._addOperationForAffectedMarkers("merge", t), !(e instanceof ks)) throw new hn.b(
					"writer-merge-no-element-before: Node before merge position must be an element.", this);
				if (!(n instanceof ks)) throw new hn.b(
					"writer-merge-no-element-after: Node after merge position must be an element.", this);
				t.root.document ? this._merge(t) : this._mergeDetached(t)
			}
			createPositionFromPath(t, e, n) {
				return this.model.createPositionFromPath(t, e, n)
			}
			createPositionAt(t, e) {
				return this.model.createPositionAt(t, e)
			}
			createPositionAfter(t) {
				return this.model.createPositionAfter(t)
			}
			createPositionBefore(t) {
				return this.model.createPositionBefore(t)
			}
			createRange(t, e) {
				return this.model.createRange(t, e)
			}
			createRangeIn(t) {
				return this.model.createRangeIn(t)
			}
			createRangeOn(t) {
				return this.model.createRangeOn(t)
			}
			createSelection(t, e, n) {
				return this.model.createSelection(t, e, n)
			}
			_mergeDetached(t) {
				const e = t.nodeBefore,
					n = t.nodeAfter;
				this.move(Ts._createIn(n), ys._createAt(e, "end")), this.remove(n)
			}
			_merge(t) {
				const e = ys._createAt(t.nodeBefore, "end"),
					n = ys._createAt(t.nodeAfter, 0),
					o = t.root.document.graveyard,
					i = new ys(o, [0]),
					r = t.root.document.version,
					s = new Ua(n, t.nodeAfter.maxOffset, e, i, r);
				this.batch.addOperation(s), this.model.applyOperation(s)
			}
			rename(t, e) {
				if (this._assertWriterUsedCorrectly(), !(t instanceof ks)) throw new hn.b(
					"writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.",
					this);
				const n = t.root.document ? t.root.document.version : null,
					o = new Ba(ys._createBefore(t), t.name, e, n);
				this.batch.addOperation(o), this.model.applyOperation(o)
			}
			split(t, e) {
				this._assertWriterUsedCorrectly();
				let n, o, i = t.parent;
				if (!i.parent) throw new hn.b("writer-split-element-no-parent: Element with no parent can not be split.",
					this);
				if (e || (e = i.parent), !t.parent.getAncestors({
						includeSelf: !0
					}).includes(e)) throw new hn.b(
					"writer-split-invalid-limit-element: Limit element is not a position ancestor.", this);
				do {
					const e = i.root.document ? i.root.document.version : null,
						r = i.maxOffset - t.offset,
						s = new Ha(t, r, null, e);
					this.batch.addOperation(s), this.model.applyOperation(s), n || o || (n = i, o = t.parent.nextSibling), i = (
						t = this.createPositionAfter(t.parent)).parent
				} while (i !== e);
				return {
					position: t,
					range: new Ts(ys._createAt(n, "end"), ys._createAt(o, 0))
				}
			}
			wrap(t, e) {
				if (this._assertWriterUsedCorrectly(), !t.isFlat) throw new hn.b(
					"writer-wrap-range-not-flat: Range to wrap is not flat.", this);
				const n = e instanceof ks ? e : new ks(e);
				if (n.childCount > 0) throw new hn.b("writer-wrap-element-not-empty: Element to wrap with is not empty.",
					this);
				if (null !== n.parent) throw new hn.b(
					"writer-wrap-element-attached: Element to wrap with is already attached to tree model.", this);
				this.insert(n, t.start);
				const o = new Ts(t.start.getShiftedBy(1), t.end.getShiftedBy(1));
				this.move(o, ys._createAt(n, 0))
			}
			unwrap(t) {
				if (this._assertWriterUsedCorrectly(), null === t.parent) throw new hn.b(
					"writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.", this);
				this.move(Ts._createIn(t), this.createPositionAfter(t)), this.remove(t)
			}
			addMarker(t, e) {
				if (this._assertWriterUsedCorrectly(), !e || "boolean" != typeof e.usingOperation) throw new hn.b(
					"writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.",
					this);
				const n = e.usingOperation,
					o = e.range,
					i = void 0 !== e.affectsData && e.affectsData;
				if (this.model.markers.has(t)) throw new hn.b(
					"writer-addMarker-marker-exists: Marker with provided name already exists.", this);
				if (!o) throw new hn.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.",
					this);
				return n ? ($a(this, t, null, o, i), this.model.markers.get(t)) : this.model.markers._set(t, o, n, i)
			}
			updateMarker(t, e) {
				this._assertWriterUsedCorrectly();
				const n = "string" == typeof t ? t : t.name,
					o = this.model.markers.get(n);
				if (!o) throw new hn.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.",
					this);
				if (!e) return void this.model.markers._refresh(o);
				const i = "boolean" == typeof e.usingOperation,
					r = "boolean" == typeof e.affectsData,
					s = r ? e.affectsData : o.affectsData;
				if (!i && !e.range && !r) throw new hn.b(
					"writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.",
					this);
				const a = o.getRange(),
					c = e.range ? e.range : a;
				i && e.usingOperation !== o.managedUsingOperations ? e.usingOperation ? $a(this, n, null, c, s) : ($a(this, n,
						a, null, s), this.model.markers._set(n, c, void 0, s)) : o.managedUsingOperations ? $a(this, n, a, c, s) :
					this.model.markers._set(n, c, void 0, s)
			}
			removeMarker(t) {
				this._assertWriterUsedCorrectly();
				const e = "string" == typeof t ? t : t.name;
				if (!this.model.markers.has(e)) throw new hn.b(
					"writer-removeMarker-no-marker: Trying to remove marker which does not exist.", this);
				const n = this.model.markers.get(e);
				if (!n.managedUsingOperations) return void this.model.markers._remove(e);
				$a(this, e, n.getRange(), null, n.affectsData)
			}
			setSelection(t, e, n) {
				this._assertWriterUsedCorrectly(), this.model.document.selection._setTo(t, e, n)
			}
			setSelectionFocus(t, e) {
				this._assertWriterUsedCorrectly(), this.model.document.selection._setFocus(t, e)
			}
			setSelectionAttribute(t, e) {
				if (this._assertWriterUsedCorrectly(), "string" == typeof t) this._setSelectionAttribute(t, e);
				else
					for (const [e, n] of Ln(t)) this._setSelectionAttribute(e, n)
			}
			removeSelectionAttribute(t) {
				if (this._assertWriterUsedCorrectly(), "string" == typeof t) this._removeSelectionAttribute(t);
				else
					for (const e of t) this._removeSelectionAttribute(e)
			}
			overrideSelectionGravity() {
				return this.model.document.selection._overrideGravity()
			}
			restoreSelectionGravity(t) {
				this.model.document.selection._restoreGravity(t)
			}
			_setSelectionAttribute(t, e) {
				const n = this.model.document.selection;
				if (n.isCollapsed && n.anchor.parent.isEmpty) {
					const o = Bs._getStoreAttributeKey(t);
					this.setAttribute(o, e, n.anchor.parent)
				}
				n._setAttribute(t, e)
			}
			_removeSelectionAttribute(t) {
				const e = this.model.document.selection;
				if (e.isCollapsed && e.anchor.parent.isEmpty) {
					const n = Bs._getStoreAttributeKey(t);
					this.removeAttribute(n, e.anchor.parent)
				}
				e._removeAttribute(t)
			}
			_assertWriterUsedCorrectly() {
				if (this.model._currentWriter !== this) throw new hn.b(
					"writer-incorrect-use: Trying to use a writer outside the change() block.", this)
			}
			_addOperationForAffectedMarkers(t, e) {
				for (const n of this.model.markers) {
					if (!n.managedUsingOperations) continue;
					const o = n.getRange();
					let i = !1;
					if ("move" === t) i = e.containsPosition(o.start) || e.start.isEqual(o.start) || e.containsPosition(o.end) ||
						e.end.isEqual(o.end);
					else {
						const t = e.nodeBefore,
							n = e.nodeAfter,
							r = o.start.parent == t && o.start.isAtEnd,
							s = o.end.parent == n && 0 == o.end.offset,
							a = o.end.nodeAfter == n,
							c = o.start.nodeAfter == n;
						i = r || s || a || c
					}
					i && this.updateMarker(n.name, {
						range: o
					})
				}
			}
		}

		function Ga(t, e, n, o) {
			const i = t.model,
				r = i.document;
			let s, a, c, l = o.start;
			for (const t of o.getWalker({
					shallow: !0
				})) c = t.item.getAttribute(e), s && a != c && (a != n && d(), l = s), s = t.nextPosition, a = c;

			function d() {
				const o = new Ts(l, s),
					c = o.root.document ? r.version : null,
					d = new Da(o, e, a, n, c);
				t.batch.addOperation(d), i.applyOperation(d)
			}
			s instanceof ys && s != l && a != n && d()
		}

		function Ya(t, e, n, o) {
			const i = t.model,
				r = i.document,
				s = o.getAttribute(e);
			let a, c;
			if (s != n) {
				if (o.root === o) {
					const t = o.document ? r.version : null;
					c = new Fa(o, e, s, n, t)
				} else {
					a = new Ts(ys._createBefore(o), t.createPositionAfter(o));
					const i = a.root.document ? r.version : null;
					c = new Da(a, e, s, n, i)
				}
				t.batch.addOperation(c), i.applyOperation(c)
			}
		}

		function $a(t, e, n, o, i) {
			const r = t.model,
				s = r.document,
				a = new za(e, n, o, r.markers, i, s.version);
			t.batch.addOperation(a), r.applyOperation(a)
		}

		function Ka(t, e, n, o) {
			let i;
			if (t.root.document) {
				const n = o.document,
					r = new ys(n.graveyard, [0]);
				i = new ja(t, e, r, n.version)
			} else i = new La(t, e);
			n.addOperation(i), o.applyOperation(i)
		}

		function Qa(t, e) {
			return t === e || t instanceof qa && e instanceof qa
		}
		class Ja {
			constructor(t) {
				this._markerCollection = t, this._changesInElement = new Map, this._elementSnapshots = new Map, this._changedMarkers =
					new Map, this._changeCount = 0, this._cachedChanges = null, this._cachedChangesWithGraveyard = null
			}
			get isEmpty() {
				return 0 == this._changesInElement.size && 0 == this._changedMarkers.size
			}
			refreshItem(t) {
				if (this._isInInsertedElement(t.parent)) return;
				this._markRemove(t.parent, t.startOffset, t.offsetSize), this._markInsert(t.parent, t.startOffset, t.offsetSize);
				const e = Ts._createOn(t);
				for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
					const e = t.getRange();
					this.bufferMarkerChange(t.name, e, e, t.affectsData)
				}
				this._cachedChanges = null
			}
			bufferOperation(t) {
				switch (t.type) {
					case "insert":
						if (this._isInInsertedElement(t.position.parent)) return;
						this._markInsert(t.position.parent, t.position.offset, t.nodes.maxOffset);
						break;
					case "addAttribute":
					case "removeAttribute":
					case "changeAttribute":
						for (const e of t.range.getItems({
								shallow: !0
							})) this._isInInsertedElement(e.parent) || this._markAttribute(e);
						break;
					case "remove":
					case "move":
					case "reinsert":
						{
							if (t.sourcePosition.isEqual(t.targetPosition) || t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))
								return;
							const e = this._isInInsertedElement(t.sourcePosition.parent),
								n = this._isInInsertedElement(t.targetPosition.parent);e || this._markRemove(t.sourcePosition.parent, t.sourcePosition
								.offset, t.howMany),
							n || this._markInsert(t.targetPosition.parent, t.getMovedRangeStart().offset, t.howMany);
							break
						}
					case "rename":
						{
							if (this._isInInsertedElement(t.position.parent)) return;this._markRemove(t.position.parent, t.position.offset,
								1),
							this._markInsert(t.position.parent, t.position.offset, 1);
							const e = Ts._createFromPositionAndShift(t.position, 1);
							for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
								const e = t.getRange();
								this.bufferMarkerChange(t.name, e, e, t.affectsData)
							}
							break
						}
					case "split":
						{
							const e = t.splitPosition.parent;this._isInInsertedElement(e) || this._markRemove(e, t.splitPosition.offset,
								t.howMany),
							this._isInInsertedElement(t.insertionPosition.parent) || this._markInsert(t.insertionPosition.parent, t.insertionPosition
								.offset, 1),
							t.graveyardPosition && this._markRemove(t.graveyardPosition.parent, t.graveyardPosition.offset, 1);
							break
						}
					case "merge":
						{
							const e = t.sourcePosition.parent;this._isInInsertedElement(e.parent) || this._markRemove(e.parent, e.startOffset,
								1);
							const n = t.graveyardPosition.parent;this._markInsert(n, t.graveyardPosition.offset, 1);
							const o = t.targetPosition.parent;this._isInInsertedElement(o) || this._markInsert(o, t.targetPosition.offset,
								e.maxOffset);
							break
						}
				}
				this._cachedChanges = null
			}
			bufferMarkerChange(t, e, n, o) {
				const i = this._changedMarkers.get(t);
				i ? (i.newRange = n, i.affectsData = o, null == i.oldRange && null == i.newRange && this._changedMarkers.delete(
					t)) : this._changedMarkers.set(t, {
					oldRange: e,
					newRange: n,
					affectsData: o
				})
			}
			getMarkersToRemove() {
				const t = [];
				for (const [e, n] of this._changedMarkers) null != n.oldRange && t.push({
					name: e,
					range: n.oldRange
				});
				return t
			}
			getMarkersToAdd() {
				const t = [];
				for (const [e, n] of this._changedMarkers) null != n.newRange && t.push({
					name: e,
					range: n.newRange
				});
				return t
			}
			getChangedMarkers() {
				return Array.from(this._changedMarkers).map(t => ({
					name: t[0],
					data: {
						oldRange: t[1].oldRange,
						newRange: t[1].newRange
					}
				}))
			}
			hasDataChanges() {
				for (const [, t] of this._changedMarkers)
					if (t.affectsData) return !0;
				return this._changesInElement.size > 0
			}
			getChanges(t = {
				includeChangesInGraveyard: !1
			}) {
				if (this._cachedChanges) return t.includeChangesInGraveyard ? this._cachedChangesWithGraveyard.slice() : this
					._cachedChanges.slice();
				const e = [];
				for (const t of this._changesInElement.keys()) {
					const n = this._changesInElement.get(t).sort((t, e) => t.offset === e.offset ? t.type != e.type ? "remove" ==
							t.type ? -1 : 1 : 0 : t.offset < e.offset ? -1 : 1),
						o = this._elementSnapshots.get(t),
						i = Za(t.getChildren()),
						r = Xa(o.length, n);
					let s = 0,
						a = 0;
					for (const n of r)
						if ("i" === n) e.push(this._getInsertDiff(t, s, i[s].name)), s++;
						else if ("r" === n) e.push(this._getRemoveDiff(t, s, o[a].name)), a++;
					else if ("a" === n) {
						const n = i[s].attributes,
							r = o[a].attributes;
						let c;
						if ("$text" == i[s].name) c = new Ts(ys._createAt(t, s), ys._createAt(t, s + 1));
						else {
							const e = t.offsetToIndex(s);
							c = new Ts(ys._createAt(t, s), ys._createAt(t.getChild(e), 0))
						}
						e.push(...this._getAttributesDiff(c, r, n)), s++, a++
					} else s++, a++
				}
				e.sort((t, e) => t.position.root != e.position.root ? t.position.root.rootName < e.position.root.rootName ? -
					1 : 1 : t.position.isEqual(e.position) ? t.changeCount - e.changeCount : t.position.isBefore(e.position) ?
					-1 : 1);
				for (let t = 1; t < e.length; t++) {
					const n = e[t - 1],
						o = e[t],
						i = "remove" == n.type && "remove" == o.type && "$text" == n.name && "$text" == o.name && n.position.isEqual(
							o.position),
						r = "insert" == n.type && "insert" == o.type && "$text" == n.name && "$text" == o.name && n.position.parent ==
						o.position.parent && n.position.offset + n.length == o.position.offset,
						s = "attribute" == n.type && "attribute" == o.type && n.position.parent == o.position.parent && n.range.isFlat &&
						o.range.isFlat && n.position.offset + n.length == o.position.offset && n.attributeKey == o.attributeKey &&
						n.attributeOldValue == o.attributeOldValue && n.attributeNewValue == o.attributeNewValue;
					(i || r || s) && (e[t - 1].length++, s && (e[t - 1].range.end = e[t - 1].range.end.getShiftedBy(1)), e.splice(
						t, 1), t--)
				}
				for (const t of e) delete t.changeCount, "attribute" == t.type && (delete t.position, delete t.length);
				return this._changeCount = 0, this._cachedChangesWithGraveyard = e.slice(), this._cachedChanges = e.slice().filter(
					tc), t.includeChangesInGraveyard ? this._cachedChangesWithGraveyard : this._cachedChanges
			}
			reset() {
				this._changesInElement.clear(), this._elementSnapshots.clear(), this._changedMarkers.clear(), this._cachedChanges =
					null
			}
			_markInsert(t, e, n) {
				const o = {
					type: "insert",
					offset: e,
					howMany: n,
					count: this._changeCount++
				};
				this._markChange(t, o)
			}
			_markRemove(t, e, n) {
				const o = {
					type: "remove",
					offset: e,
					howMany: n,
					count: this._changeCount++
				};
				this._markChange(t, o), this._removeAllNestedChanges(t, e, n)
			}
			_markAttribute(t) {
				const e = {
					type: "attribute",
					offset: t.startOffset,
					howMany: t.offsetSize,
					count: this._changeCount++
				};
				this._markChange(t.parent, e)
			}
			_markChange(t, e) {
				this._makeSnapshot(t);
				const n = this._getChangesForElement(t);
				this._handleChange(e, n), n.push(e);
				for (let t = 0; t < n.length; t++) n[t].howMany < 1 && (n.splice(t, 1), t--)
			}
			_getChangesForElement(t) {
				let e;
				return this._changesInElement.has(t) ? e = this._changesInElement.get(t) : (e = [], this._changesInElement.set(
					t, e)), e
			}
			_makeSnapshot(t) {
				this._elementSnapshots.has(t) || this._elementSnapshots.set(t, Za(t.getChildren()))
			}
			_handleChange(t, e) {
				t.nodesToHandle = t.howMany;
				for (const n of e) {
					const o = t.offset + t.howMany,
						i = n.offset + n.howMany;
					if ("insert" == t.type && ("insert" == n.type && (t.offset <= n.offset ? n.offset += t.howMany : t.offset <
							i && (n.howMany += t.nodesToHandle, t.nodesToHandle = 0)), "remove" == n.type && t.offset < n.offset && (
							n.offset += t.howMany), "attribute" == n.type))
						if (t.offset <= n.offset) n.offset += t.howMany;
						else if (t.offset < i) {
						const i = n.howMany;
						n.howMany = t.offset - n.offset, e.unshift({
							type: "attribute",
							offset: o,
							howMany: i - n.howMany,
							count: this._changeCount++
						})
					}
					if ("remove" == t.type) {
						if ("insert" == n.type)
							if (o <= n.offset) n.offset -= t.howMany;
							else if (o <= i)
							if (t.offset < n.offset) {
								const e = o - n.offset;
								n.offset = t.offset, n.howMany -= e, t.nodesToHandle -= e
							} else n.howMany -= t.nodesToHandle, t.nodesToHandle = 0;
						else if (t.offset <= n.offset) t.nodesToHandle -= n.howMany, n.howMany = 0;
						else if (t.offset < i) {
							const e = i - t.offset;
							n.howMany -= e, t.nodesToHandle -= e
						}
						if ("remove" == n.type && (o <= n.offset ? n.offset -= t.howMany : t.offset < n.offset && (t.nodesToHandle +=
								n.howMany, n.howMany = 0)), "attribute" == n.type)
							if (o <= n.offset) n.offset -= t.howMany;
							else if (t.offset < n.offset) {
							const e = o - n.offset;
							n.offset = t.offset, n.howMany -= e
						} else if (t.offset < i)
							if (o <= i) {
								const o = n.howMany;
								n.howMany = t.offset - n.offset;
								const i = o - n.howMany - t.nodesToHandle;
								e.unshift({
									type: "attribute",
									offset: t.offset,
									howMany: i,
									count: this._changeCount++
								})
							} else n.howMany -= i - t.offset
					}
					if ("attribute" == t.type) {
						if ("insert" == n.type)
							if (t.offset < n.offset && o > n.offset) {
								if (o > i) {
									const t = {
										type: "attribute",
										offset: i,
										howMany: o - i,
										count: this._changeCount++
									};
									this._handleChange(t, e), e.push(t)
								}
								t.nodesToHandle = n.offset - t.offset, t.howMany = t.nodesToHandle
							} else t.offset >= n.offset && t.offset < i && (o > i ? (t.nodesToHandle = o - i, t.offset = i) : t.nodesToHandle =
								0);
						if ("remove" == n.type && t.offset < n.offset && o > n.offset) {
							const i = {
								type: "attribute",
								offset: n.offset,
								howMany: o - n.offset,
								count: this._changeCount++
							};
							this._handleChange(i, e), e.push(i), t.nodesToHandle = n.offset - t.offset, t.howMany = t.nodesToHandle
						}
						"attribute" == n.type && (t.offset >= n.offset && o <= i ? (t.nodesToHandle = 0, t.howMany = 0, t.offset =
							0) : t.offset <= n.offset && o >= i && (n.howMany = 0))
					}
				}
				t.howMany = t.nodesToHandle, delete t.nodesToHandle
			}
			_getInsertDiff(t, e, n) {
				return {
					type: "insert",
					position: ys._createAt(t, e),
					name: n,
					length: 1,
					changeCount: this._changeCount++
				}
			}
			_getRemoveDiff(t, e, n) {
				return {
					type: "remove",
					position: ys._createAt(t, e),
					name: n,
					length: 1,
					changeCount: this._changeCount++
				}
			}
			_getAttributesDiff(t, e, n) {
				const o = [];
				n = new Map(n);
				for (const [i, r] of e) {
					const e = n.has(i) ? n.get(i) : null;
					e !== r && o.push({
						type: "attribute",
						position: t.start,
						range: t.clone(),
						length: 1,
						attributeKey: i,
						attributeOldValue: r,
						attributeNewValue: e,
						changeCount: this._changeCount++
					}), n.delete(i)
				}
				for (const [e, i] of n) o.push({
					type: "attribute",
					position: t.start,
					range: t.clone(),
					length: 1,
					attributeKey: e,
					attributeOldValue: null,
					attributeNewValue: i,
					changeCount: this._changeCount++
				});
				return o
			}
			_isInInsertedElement(t) {
				const e = t.parent;
				if (!e) return !1;
				const n = this._changesInElement.get(e),
					o = t.startOffset;
				if (n)
					for (const t of n)
						if ("insert" == t.type && o >= t.offset && o < t.offset + t.howMany) return !0;
				return this._isInInsertedElement(e)
			}
			_removeAllNestedChanges(t, e, n) {
				const o = new Ts(ys._createAt(t, e), ys._createAt(t, e + n));
				for (const t of o.getItems({
						shallow: !0
					})) t.is("element") && (this._elementSnapshots.delete(t), this._changesInElement.delete(t), this._removeAllNestedChanges(
					t, 0, t.maxOffset))
			}
		}

		function Za(t) {
			const e = [];
			for (const n of t)
				if (n.is("text"))
					for (let t = 0; t < n.data.length; t++) e.push({
						name: "$text",
						attributes: new Map(n.getAttributes())
					});
				else e.push({
					name: n.name,
					attributes: new Map(n.getAttributes())
				});
			return e
		}

		function Xa(t, e) {
			const n = [];
			let o = 0,
				i = 0;
			for (const t of e) {
				if (t.offset > o) {
					for (let e = 0; e < t.offset - o; e++) n.push("e");
					i += t.offset - o
				}
				if ("insert" == t.type) {
					for (let e = 0; e < t.howMany; e++) n.push("i");
					o = t.offset + t.howMany
				} else if ("remove" == t.type) {
					for (let e = 0; e < t.howMany; e++) n.push("r");
					o = t.offset, i += t.howMany
				} else n.push(..."a".repeat(t.howMany).split("")), o = t.offset + t.howMany, i += t.howMany
			}
			if (i < t)
				for (let e = 0; e < t - i - o; e++) n.push("e");
			return n
		}

		function tc(t) {
			const e = t.position && "$graveyard" == t.position.root.rootName,
				n = t.range && "$graveyard" == t.range.root.rootName;
			return !e && !n
		}
		class ec {
			constructor() {
				this._operations = [], this._undoPairs = new Map, this._undoneOperations = new Set
			}
			addOperation(t) {
				this._operations.includes(t) || this._operations.push(t)
			}
			getOperations(t = 0, e = Number.POSITIVE_INFINITY) {
				return t < 0 ? [] : this._operations.slice(t, e)
			}
			getOperation(t) {
				return this._operations[t]
			}
			setOperationAsUndone(t, e) {
				this._undoPairs.set(e, t), this._undoneOperations.add(t)
			}
			isUndoingOperation(t) {
				return this._undoPairs.has(t)
			}
			isUndoneOperation(t) {
				return this._undoneOperations.has(t)
			}
			getUndoneOperation(t) {
				return this._undoPairs.get(t)
			}
		}

		function nc(t, e) {
			return !!(n = t.charAt(e - 1)) && 1 == n.length && /[\ud800-\udbff]/.test(n) && function(t) {
				return !!t && 1 == t.length && /[\udc00-\udfff]/.test(t)
			}(t.charAt(e));
			var n
		}

		function oc(t, e) {
			return !!(n = t.charAt(e)) && 1 == n.length &&
				/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(n);
			var n
		}
		class ic {
			constructor(t) {
				this.model = t, this.version = 0, this.history = new ec(this), this.selection = new Bs(this), this.roots =
					new An({
						idProperty: "rootName"
					}), this.differ = new Ja(t.markers), this._postFixers = new Set, this._hasSelectionChangedFromTheLastChangeBlock = !
					1, this.createRoot("$root", "$graveyard"), this.listenTo(t, "applyOperation", (t, e) => {
						const n = e[0];
						if (n.isDocumentOperation && n.baseVersion !== this.version) throw new hn.b(
							"model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.",
							this, {
								operation: n
							})
					}, {
						priority: "highest"
					}), this.listenTo(t, "applyOperation", (t, e) => {
						const n = e[0];
						n.isDocumentOperation && this.differ.bufferOperation(n)
					}, {
						priority: "high"
					}), this.listenTo(t, "applyOperation", (t, e) => {
						const n = e[0];
						n.isDocumentOperation && (this.version++, this.history.addOperation(n))
					}, {
						priority: "low"
					}), this.listenTo(this.selection, "change", () => {
						this._hasSelectionChangedFromTheLastChangeBlock = !0
					}), this.listenTo(t.markers, "update", (t, e, n, o) => {
						this.differ.bufferMarkerChange(e.name, n, o, e.affectsData), null === n && e.on("change", (t, n) => {
							this.differ.bufferMarkerChange(e.name, n, e.getRange(), e.affectsData)
						})
					})
			}
			get graveyard() {
				return this.getRoot("$graveyard")
			}
			createRoot(t = "$root", e = "main") {
				if (this.roots.get(e)) throw new hn.b(
					"model-document-createRoot-name-exists: Root with specified name already exists.", this, {
						name: e
					});
				const n = new qa(this, t, e);
				return this.roots.add(n), n
			}
			destroy() {
				this.selection.destroy(), this.stopListening()
			}
			getRoot(t = "main") {
				return this.roots.get(t)
			}
			getRootNames() {
				return Array.from(this.roots, t => t.rootName).filter(t => "$graveyard" != t)
			}
			registerPostFixer(t) {
				this._postFixers.add(t)
			}
			toJSON() {
				const t = Nn(this);
				return t.selection = "[engine.model.DocumentSelection]", t.model = "[engine.model.Model]", t
			}
			_handleChangeBlock(t) {
				this._hasDocumentChangedFromTheLastChangeBlock() && (this._callPostFixers(t), this.selection.refresh(), this.differ
					.hasDataChanges() ? this.fire("change:data", t.batch) : this.fire("change", t.batch), this.selection.refresh(),
					this.differ.reset()), this._hasSelectionChangedFromTheLastChangeBlock = !1
			}
			_hasDocumentChangedFromTheLastChangeBlock() {
				return !this.differ.isEmpty || this._hasSelectionChangedFromTheLastChangeBlock
			}
			_getDefaultRoot() {
				for (const t of this.roots)
					if (t !== this.graveyard) return t;
				return this.graveyard
			}
			_getDefaultRange() {
				const t = this._getDefaultRoot(),
					e = this.model,
					n = e.schema,
					o = e.createPositionFromPath(t, [0]);
				return n.getNearestSelectionRange(o) || e.createRange(o)
			}
			_validateSelectionRange(t) {
				return rc(t.start) && rc(t.end)
			}
			_callPostFixers(t) {
				let e = !1;
				do {
					for (const n of this._postFixers)
						if (this.selection.refresh(), e = n(t), e) break
				} while (e)
			}
		}

		function rc(t) {
			const e = t.textNode;
			if (e) {
				const n = e.data,
					o = t.offset - e.startOffset;
				return !nc(n, o) && !oc(n, o)
			}
			return !0
		}
		xn(ic, mn);
		class sc {
			constructor() {
				this._markers = new Map
			} [Symbol.iterator]() {
				return this._markers.values()
			}
			has(t) {
				return this._markers.has(t)
			}
			get(t) {
				return this._markers.get(t) || null
			}
			_set(t, e, n = !1, o = !1) {
				const i = t instanceof ac ? t.name : t,
					r = this._markers.get(i);
				if (r) {
					const t = r.getRange();
					let s = !1;
					return t.isEqual(e) || (r._attachLiveRange(js.fromRange(e)), s = !0), n != r.managedUsingOperations && (r._managedUsingOperations =
						n, s = !0), "boolean" == typeof o && o != r.affectsData && (r._affectsData = o, s = !0), s && this.fire(
						"update:" + i, r, t, e), r
				}
				const s = js.fromRange(e),
					a = new ac(i, s, n, o);
				return this._markers.set(i, a), this.fire("update:" + i, a, null, e), a
			}
			_remove(t) {
				const e = t instanceof ac ? t.name : t,
					n = this._markers.get(e);
				return !!n && (this._markers.delete(e), this.fire("update:" + e, n, n.getRange(), null), this._destroyMarker(
					n), !0)
			}
			_refresh(t) {
				const e = t instanceof ac ? t.name : t,
					n = this._markers.get(e);
				if (!n) throw new hn.b(
					"markercollection-refresh-marker-not-exists: Marker with provided name does not exists.", this);
				const o = n.getRange();
				this.fire("update:" + e, n, o, o, n.managedUsingOperations, n.affectsData)
			}* getMarkersAtPosition(t) {
				for (const e of this) e.getRange().containsPosition(t) && (yield e)
			}* getMarkersIntersectingRange(t) {
				for (const e of this) null !== e.getRange().getIntersection(t) && (yield e)
			}
			destroy() {
				for (const t of this._markers.values()) this._destroyMarker(t);
				this._markers = null, this.stopListening()
			}* getMarkersGroup(t) {
				for (const e of this._markers.values()) e.name.startsWith(t + ":") && (yield e)
			}
			_destroyMarker(t) {
				t.stopListening(), t._detachLiveRange()
			}
		}
		xn(sc, mn);
		class ac {
			constructor(t, e, n, o) {
				this.name = t, this._liveRange = this._attachLiveRange(e), this._managedUsingOperations = n, this._affectsData =
					o
			}
			get managedUsingOperations() {
				if (!this._liveRange) throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
				return this._managedUsingOperations
			}
			get affectsData() {
				if (!this._liveRange) throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
				return this._affectsData
			}
			getStart() {
				if (!this._liveRange) throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
				return this._liveRange.start.clone()
			}
			getEnd() {
				if (!this._liveRange) throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
				return this._liveRange.end.clone()
			}
			getRange() {
				if (!this._liveRange) throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
				return this._liveRange.toRange()
			}
			is(t) {
				return "marker" === t || "model:marker" === t
			}
			_attachLiveRange(t) {
				return this._liveRange && this._detachLiveRange(), t.delegate("change:range").to(this), t.delegate(
					"change:content").to(this), this._liveRange = t, t
			}
			_detachLiveRange() {
				this._liveRange.stopDelegating("change:range", this), this._liveRange.stopDelegating("change:content", this),
					this._liveRange.detach(), this._liveRange = null
			}
		}
		xn(ac, mn);
		class cc extends Ca {
			get type() {
				return "noop"
			}
			clone() {
				return new cc(this.baseVersion)
			}
			getReversed() {
				return new cc(this.baseVersion + 1)
			}
			_execute() {}
			static get className() {
				return "NoOperation"
			}
		}
		const lc = {};
		lc[Da.className] = Da, lc[Va.className] = Va, lc[za.className] = za, lc[ja.className] = ja, lc[cc.className] =
			cc, lc[Ca.className] = Ca, lc[Ba.className] = Ba, lc[Fa.className] = Fa, lc[Ha.className] = Ha, lc[Ua.className] =
			Ua;
		class dc extends ys {
			constructor(t, e, n = "toNone") {
				if (super(t, e, n), !this.root.is("rootElement")) throw new hn.b(
					"model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.", t);
				uc.call(this)
			}
			detach() {
				this.stopListening()
			}
			is(t) {
				return "livePosition" === t || "model:livePosition" === t || "position" == t || "model:position" === t
			}
			toPosition() {
				return new ys(this.root, this.path.slice(), this.stickiness)
			}
			static fromPosition(t, e) {
				return new this(t.root, t.path.slice(), e || t.stickiness)
			}
		}

		function uc() {
			this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
				const n = e[0];
				n.isDocumentOperation && hc.call(this, n)
			}, {
				priority: "low"
			})
		}

		function hc(t) {
			const e = this.getTransformedByOperation(t);
			if (!this.isEqual(e)) {
				const t = this.toPosition();
				this.path = e.path, this.root = e.root, this.fire("change", t)
			}
		}
		xn(dc, mn);
		class fc {
			constructor(t, e, n) {
				this.model = t, this.writer = e, this.position = n, this.canMergeWith = new Set([this.position.parent]), this
					.schema = t.schema, this._filterAttributesOf = [], this._affectedStart = null, this._affectedEnd = null
			}
			handleNodes(t, e) {
				t = Array.from(t);
				for (let n = 0; n < t.length; n++) {
					const o = t[n];
					this._handleNode(o, {
						isFirst: 0 === n && e.isFirst,
						isLast: n === t.length - 1 && e.isLast
					})
				}
				this.schema.removeDisallowedAttributes(this._filterAttributesOf, this.writer), this._filterAttributesOf = []
			}
			getSelectionRange() {
				return this.nodeToSelect ? Ts._createOn(this.nodeToSelect) : this.model.schema.getNearestSelectionRange(this.position)
			}
			getAffectedRange() {
				return this._affectedStart ? new Ts(this._affectedStart, this._affectedEnd) : null
			}
			destroy() {
				this._affectedStart && this._affectedStart.detach(), this._affectedEnd && this._affectedEnd.detach()
			}
			_handleNode(t, e) {
				if (this.schema.isObject(t)) return void this._handleObject(t, e);
				this._checkAndSplitToAllowedPosition(t, e) ? (this._insert(t), this._mergeSiblingsOf(t, e)) : this._handleDisallowedNode(
					t, e)
			}
			_handleObject(t, e) {
				this._checkAndSplitToAllowedPosition(t) ? this._insert(t) : this._tryAutoparagraphing(t, e)
			}
			_handleDisallowedNode(t, e) {
				t.is("element") ? this.handleNodes(t.getChildren(), e) : this._tryAutoparagraphing(t, e)
			}
			_insert(t) {
				if (!this.schema.checkChild(this.position, t)) throw new hn.b(
					"insertcontent-wrong-position: Given node cannot be inserted on the given position.", this, {
						node: t,
						position: this.position
					});
				const e = dc.fromPosition(this.position, "toNext");
				this._setAffectedBoundaries(this.position), this.writer.insert(t, this.position), this.position = e.toPosition(),
					e.detach(), this.schema.isObject(t) && !this.schema.checkChild(this.position, "$text") ? this.nodeToSelect =
					t : this.nodeToSelect = null, this._filterAttributesOf.push(t)
			}
			_setAffectedBoundaries(t) {
				this._affectedStart || (this._affectedStart = dc.fromPosition(t, "toPrevious")), this._affectedEnd && !this._affectedEnd
					.isBefore(t) || (this._affectedEnd && this._affectedEnd.detach(), this._affectedEnd = dc.fromPosition(t,
						"toNext"))
			}
			_mergeSiblingsOf(t, e) {
				if (!(t instanceof ks)) return;
				const n = this._canMergeLeft(t, e),
					o = this._canMergeRight(t, e),
					i = dc._createBefore(t);
				i.stickiness = "toNext";
				const r = dc._createAfter(t);
				if (r.stickiness = "toNext", n) {
					const t = dc.fromPosition(this.position);
					t.stickiness = "toNext", this._affectedStart.isEqual(i) && (this._affectedStart.detach(), this._affectedStart =
							dc._createAt(i.nodeBefore, "end", "toPrevious")), this.writer.merge(i), i.isEqual(this._affectedEnd) && e.isLast &&
						(this._affectedEnd.detach(), this._affectedEnd = dc._createAt(i.nodeBefore, "end", "toNext")), this.position =
						t.toPosition(), t.detach()
				}
				if (o) {
					if (!this.position.isEqual(r)) throw new hn.b("insertcontent-invalid-insertion-position", this);
					this.position = ys._createAt(r.nodeBefore, "end");
					const t = dc.fromPosition(this.position, "toPrevious");
					this._affectedEnd.isEqual(r) && (this._affectedEnd.detach(), this._affectedEnd = dc._createAt(r.nodeBefore,
							"end", "toNext")), this.writer.merge(r), r.getShiftedBy(-1).isEqual(this._affectedStart) && e.isFirst && (
							this._affectedStart.detach(), this._affectedStart = dc._createAt(r.nodeBefore, 0, "toPrevious")), this.position =
						t.toPosition(), t.detach()
				}(n || o) && this._filterAttributesOf.push(this.position.parent), i.detach(), r.detach()
			}
			_canMergeLeft(t, e) {
				const n = t.previousSibling;
				return e.isFirst && n instanceof ks && this.canMergeWith.has(n) && this.model.schema.checkMerge(n, t)
			}
			_canMergeRight(t, e) {
				const n = t.nextSibling;
				return e.isLast && n instanceof ks && this.canMergeWith.has(n) && this.model.schema.checkMerge(t, n)
			}
			_tryAutoparagraphing(t, e) {
				const n = this.writer.createElement("paragraph");
				this._getAllowedIn(n, this.position.parent) && this.schema.checkChild(n, t) && (n._appendChild(t), this._handleNode(
					n, e))
			}
			_checkAndSplitToAllowedPosition(t) {
				const e = this._getAllowedIn(t, this.position.parent);
				if (!e) return !1;
				for (; e != this.position.parent;) {
					if (this.schema.isLimit(this.position.parent)) return !1;
					if (this.position.isAtStart) {
						const t = this.position.parent;
						this.position = this.writer.createPositionBefore(t), t.isEmpty && t.parent === e && this.writer.remove(t)
					} else if (this.position.isAtEnd) this.position = this.writer.createPositionAfter(this.position.parent);
					else {
						const t = this.writer.createPositionAfter(this.position.parent);
						this._setAffectedBoundaries(this.position), this.writer.split(this.position), this.position = t, this.canMergeWith
							.add(this.position.nodeAfter)
					}
				}
				return !0
			}
			_getAllowedIn(t, e) {
				return this.schema.checkChild(e, t) ? e : e.parent ? this._getAllowedIn(t, e.parent) : null
			}
		}

		function gc(t, e, n = {}) {
			if (e.isCollapsed) return;
			const o = e.getFirstRange();
			if ("$graveyard" == o.root.rootName) return;
			const i = t.schema;
			t.change(t => {
				if (!n.doNotResetEntireContent && function(t, e) {
						const n = t.getLimitElement(e);
						if (!e.containsEntireContent(n)) return !1;
						const o = e.getFirstRange();
						if (o.start.parent == o.end.parent) return !1;
						return t.checkChild(n, "paragraph")
					}(i, e)) return void
				function(t, e) {
					const n = t.model.schema.getLimitElement(e);
					t.remove(t.createRangeIn(n)), pc(t, t.createPositionAt(n, 0), e)
				}(t, e);
				const [r, s] = function(t) {
					const e = t.root.document.model,
						n = t.start;
					let o = t.end;
					if (e.hasContent(t, {
							ignoreMarkers: !0
						})) {
						const n = function(t) {
							const e = t.parent,
								n = e.root.document.model.schema,
								o = e.getAncestors({
									parentFirst: !0,
									includeSelf: !0
								});
							for (const t of o) {
								if (n.isLimit(t)) return null;
								if (n.isBlock(t)) return t
							}
						}(o);
						if (n && o.isTouching(e.createPositionAt(n, 0))) {
							const n = e.createSelection(t);
							e.modifySelection(n, {
								direction: "backward"
							}), o = n.getLastPosition()
						}
					}
					return [dc.fromPosition(n, "toPrevious"), dc.fromPosition(o, "toNext")]
				}(o);
				o.start.isTouching(o.end) || t.remove(o), n.leaveUnmerged || (! function(t, e, n) {
						const o = t.model;
						if (!mc(t.model.schema, e, n)) return;
						const [i, r] = function(t, e) {
							const n = t.getAncestors(),
								o = e.getAncestors();
							let i = 0;
							for (; n[i] && n[i] == o[i];) i++;
							return [n[i], o[i]]
						}(e, n);
						!o.hasContent(i, {
							ignoreMarkers: !0
						}) && o.hasContent(r, {
							ignoreMarkers: !0
						}) ? function t(e, n, o, i) {
							const r = n.parent,
								s = o.parent;
							if (r == i || s == i) return;
							n = e.createPositionAfter(r), (o = e.createPositionBefore(s)).isEqual(n) || e.insert(r, o);
							for (; n.parent.isEmpty;) {
								const t = n.parent;
								n = e.createPositionBefore(t), e.remove(t)
							}
							if (o = e.createPositionBefore(s), function(t, e) {
									const n = e.nodeBefore,
										o = e.nodeAfter;
									n.name != o.name && t.rename(n, o.name);
									t.clearAttributes(n), t.setAttributes(Object.fromEntries(o.getAttributes()), n), t.merge(e)
								}(e, o), !mc(e.model.schema, n, o)) return;
							t(e, n, o, i)
						}(t, e, n, i.parent) : function t(e, n, o, i) {
							const r = n.parent,
								s = o.parent;
							if (r == i || s == i) return;
							n = e.createPositionAfter(r), (o = e.createPositionBefore(s)).isEqual(n) || e.insert(s, n);
							e.merge(n);
							for (; o.parent.isEmpty;) {
								const t = o.parent;
								o = e.createPositionBefore(t), e.remove(t)
							}
							if (!mc(e.model.schema, n, o)) return;
							t(e, n, o, i)
						}(t, e, n, i.parent)
					}(t, r, s), i.removeDisallowedAttributes(r.parent.getChildren(), t)), bc(t, e, r), !n.doNotAutoparagraph &&
					function(t, e) {
						const n = t.checkChild(e, "$text"),
							o = t.checkChild(e, "paragraph");
						return !n && o
					}(i, r) && pc(t, r, e), r.detach(), s.detach()
			})
		}

		function mc(t, e, n) {
			const o = e.parent,
				i = n.parent;
			return o != i && (!t.isLimit(o) && !t.isLimit(i) && function(t, e, n) {
				const o = new Ts(t, e);
				for (const t of o.getWalker())
					if (n.isLimit(t.item)) return !1;
				return !0
			}(e, n, t))
		}

		function pc(t, e, n) {
			const o = t.createElement("paragraph");
			t.insert(o, e), bc(t, n, t.createPositionAt(o, 0))
		}

		function bc(t, e, n) {
			e instanceof Bs ? t.setSelection(n) : e.setTo(n)
		}

		function wc(t, e) {
			if ("text" == e.type) return "word" === t.unit ? function(t, e) {
				let n = t.position.textNode;
				if (n) {
					let o = t.position.offset - n.startOffset;
					for (; !_c(n.data, o, e) && !vc(n, o, e);) {
						t.next();
						const i = e ? t.position.nodeAfter : t.position.nodeBefore;
						if (i && i.is("text")) {
							const o = i.data.charAt(e ? 0 : i.data.length - 1);
							' ,.?!:;"-()'.includes(o) || (t.next(), n = t.position.textNode)
						}
						o = t.position.offset - n.startOffset
					}
				}
				return t.position
			}(t.walker, t.isForward) : function(t, e) {
				const n = t.position.textNode;
				if (n) {
					const o = n.data;
					let i = t.position.offset - n.startOffset;
					for (; nc(o, i) || "character" == e && oc(o, i);) t.next(), i = t.position.offset - n.startOffset
				}
				return t.position
			}(t.walker, t.unit, t.isForward);
			if (e.type == (t.isForward ? "elementStart" : "elementEnd")) {
				if (t.schema.isObject(e.item)) return ys._createAt(e.item, t.isForward ? "after" : "before");
				if (t.schema.checkChild(e.nextPosition, "$text")) return e.nextPosition
			} else {
				if (t.schema.isLimit(e.item)) return void t.walker.skip(() => !0);
				if (t.schema.checkChild(e.nextPosition, "$text")) return e.nextPosition
			}
		}

		function kc(t, e) {
			const n = t.root,
				o = ys._createAt(n, e ? "end" : 0);
			return e ? new Ts(t, o) : new Ts(o, t)
		}

		function _c(t, e, n) {
			const o = e + (n ? 0 : -1);
			return ' ,.?!:;"-()'.includes(t.charAt(o))
		}

		function vc(t, e, n) {
			return e === (n ? t.endOffset : 0)
		}

		function yc(t, e) {
			const n = [];
			Array.from(t.getItems({
				direction: "backward"
			})).map(t => e.createRangeOn(t)).filter(e => (e.start.isAfter(t.start) || e.start.isEqual(t.start)) && (e.end.isBefore(
				t.end) || e.end.isEqual(t.end))).forEach(t => {
				n.push(t.start.parent), e.remove(t)
			}), n.forEach(t => {
				let n = t;
				for (; n.parent && n.isEmpty;) {
					const t = e.createRangeOn(n);
					n = n.parent, e.remove(t)
				}
			})
		}

		function xc(t) {
			t.document.registerPostFixer(e => function(t, e) {
				const n = e.document.selection,
					o = e.schema,
					i = [];
				let r = !1;
				for (const t of n.getRanges()) {
					const e = Ac(t, o);
					e && !e.isEqual(t) ? (i.push(e), r = !0) : i.push(t)
				}
				r && t.setSelection(function(t) {
					const e = [];
					e.push(t.shift());
					for (const n of t) {
						const t = e.pop();
						if (n.isIntersecting(t)) {
							const o = t.start.isAfter(n.start) ? n.start : t.start,
								i = t.end.isAfter(n.end) ? t.end : n.end,
								r = new Ts(o, i);
							e.push(r)
						} else e.push(t), e.push(n)
					}
					return e
				}(i), {
					backward: n.isBackward
				})
			}(e, t))
		}

		function Ac(t, e) {
			return t.isCollapsed ? function(t, e) {
				const n = t.start,
					o = e.getNearestSelectionRange(n);
				if (!o) return null;
				if (!o.isCollapsed) return o;
				const i = o.start;
				if (n.isEqual(i)) return null;
				return new Ts(i)
			}(t, e) : function(t, e) {
				const n = t.start,
					o = t.end,
					i = e.checkChild(n, "$text"),
					r = e.checkChild(o, "$text"),
					s = e.getLimitElement(n),
					a = e.getLimitElement(o);
				if (s === a) {
					if (i && r) return null;
					if (function(t, e, n) {
							const o = t.nodeAfter && !n.isLimit(t.nodeAfter) || n.checkChild(t, "$text"),
								i = e.nodeBefore && !n.isLimit(e.nodeBefore) || n.checkChild(e, "$text");
							return o || i
						}(n, o, e)) {
						const t = n.nodeAfter && e.isObject(n.nodeAfter) ? null : e.getNearestSelectionRange(n, "forward"),
							i = o.nodeBefore && e.isObject(o.nodeBefore) ? null : e.getNearestSelectionRange(o, "backward"),
							r = t ? t.start : n,
							s = i ? i.start : o;
						return new Ts(r, s)
					}
				}
				const c = s && !s.is("rootElement"),
					l = a && !a.is("rootElement");
				if (c || l) {
					const t = n.nodeAfter && o.nodeBefore && n.nodeAfter.parent === o.nodeBefore.parent,
						i = c && (!t || !Tc(n.nodeAfter, e)),
						r = l && (!t || !Tc(o.nodeBefore, e));
					let d = n,
						u = o;
					return i && (d = ys._createBefore(Cc(s, e))), r && (u = ys._createAfter(Cc(a, e))), new Ts(d, u)
				}
				return null
			}(t, e)
		}

		function Cc(t, e) {
			let n = t,
				o = n;
			for (; e.isLimit(o) && o.parent;) n = o, o = o.parent;
			return n
		}

		function Tc(t, e) {
			return t && e.isObject(t)
		}
		class Sc {
			constructor() {
				this.markers = new sc, this.document = new ic(this), this.schema = new sa, this._pendingChanges = [], this._currentWriter =
					null, ["insertContent", "deleteContent", "modifySelection", "getSelectedContent", "applyOperation"].forEach(
						t => this.decorate(t)), this.on("applyOperation", (t, e) => {
						e[0]._validate()
					}, {
						priority: "highest"
					}), this.schema.register("$root", {
						isLimit: !0
					}), this.schema.register("$block", {
						allowIn: "$root",
						isBlock: !0
					}), this.schema.register("$text", {
						allowIn: "$block",
						isInline: !0
					}), this.schema.register("$clipboardHolder", {
						allowContentOf: "$root",
						isLimit: !0
					}), this.schema.extend("$text", {
						allowIn: "$clipboardHolder"
					}), this.schema.register("$marker"), this.schema.addChildCheck((t, e) => {
						if ("$marker" === e.name) return !0
					}), xc(this)
			}
			change(t) {
				try {
					return 0 === this._pendingChanges.length ? (this._pendingChanges.push({
						batch: new Aa,
						callback: t
					}), this._runPendingChanges()[0]) : t(this._currentWriter)
				} catch (t) {
					hn.b.rethrowUnexpectedError(t, this)
				}
			}
			enqueueChange(t, e) {
				try {
					"string" == typeof t ? t = new Aa(t) : "function" == typeof t && (e = t, t = new Aa), this._pendingChanges.push({
						batch: t,
						callback: e
					}), 1 == this._pendingChanges.length && this._runPendingChanges()
				} catch (t) {
					hn.b.rethrowUnexpectedError(t, this)
				}
			}
			applyOperation(t) {
				t._execute()
			}
			insertContent(t, e, n) {
				return function(t, e, n, o) {
					return t.change(i => {
						let r;
						r = n ? n instanceof Ns || n instanceof Bs ? n : i.createSelection(n, o) : t.document.selection, r.isCollapsed ||
							t.deleteContent(r, {
								doNotAutoparagraph: !0
							});
						const s = new fc(t, i, r.anchor);
						let a;
						a = e.is("documentFragment") ? e.getChildren() : [e], s.handleNodes(a, {
							isFirst: !0,
							isLast: !0
						});
						const c = s.getSelectionRange();
						c && (r instanceof Bs ? i.setSelection(c) : r.setTo(c));
						const l = s.getAffectedRange() || t.createRange(r.anchor);
						return s.destroy(), l
					})
				}(this, t, e, n)
			}
			deleteContent(t, e) {
				gc(this, t, e)
			}
			modifySelection(t, e) {
				! function(t, e, n = {}) {
					const o = t.schema,
						i = "backward" != n.direction,
						r = n.unit ? n.unit : "character",
						s = e.focus,
						a = new _s({
							boundaries: kc(s, i),
							singleCharacters: !0,
							direction: i ? "forward" : "backward"
						}),
						c = {
							walker: a,
							schema: o,
							isForward: i,
							unit: r
						};
					let l;
					for (; l = a.next();) {
						if (l.done) return;
						const n = wc(c, l.value);
						if (n) return void(e instanceof Bs ? t.change(t => {
							t.setSelectionFocus(n)
						}) : e.setFocus(n))
					}
				}(this, t, e)
			}
			getSelectedContent(t) {
				return function(t, e) {
					return t.change(t => {
						const n = t.createDocumentFragment(),
							o = e.getFirstRange();
						if (!o || o.isCollapsed) return n;
						const i = o.start.root,
							r = o.start.getCommonPath(o.end),
							s = i.getNodeByPath(r);
						let a;
						a = o.start.parent == o.end.parent ? o : t.createRange(t.createPositionAt(s, o.start.path[r.length]), t.createPositionAt(
							s, o.end.path[r.length] + 1));
						const c = a.end.offset - a.start.offset;
						for (const e of a.getItems({
								shallow: !0
							})) e.is("textProxy") ? t.appendText(e.data, e.getAttributes(), n) : t.append(t.cloneElement(e, !0), n);
						if (a != o) {
							const e = o._getTransformedByMove(a.start, t.createPositionAt(n, 0), c)[0],
								i = t.createRange(t.createPositionAt(n, 0), e.start);
							yc(t.createRange(e.end, t.createPositionAt(n, "end")), t), yc(i, t)
						}
						return n
					})
				}(this, t)
			}
			hasContent(t, e = {}) {
				const n = t instanceof ks ? Ts._createIn(t) : t;
				if (n.isCollapsed) return !1;
				const {
					ignoreWhitespaces: o = !1,
					ignoreMarkers: i = !1
				} = e;
				if (!i)
					for (const t of this.markers.getMarkersIntersectingRange(n))
						if (t.affectsData) return !0;
				for (const t of n.getItems())
					if (t.is("textProxy")) {
						if (!o) return !0;
						if (-1 !== t.data.search(/\S/)) return !0
					} else if (this.schema.isObject(t)) return !0;
				return !1
			}
			createPositionFromPath(t, e, n) {
				return new ys(t, e, n)
			}
			createPositionAt(t, e) {
				return ys._createAt(t, e)
			}
			createPositionAfter(t) {
				return ys._createAfter(t)
			}
			createPositionBefore(t) {
				return ys._createBefore(t)
			}
			createRange(t, e) {
				return new Ts(t, e)
			}
			createRangeIn(t) {
				return Ts._createIn(t)
			}
			createRangeOn(t) {
				return Ts._createOn(t)
			}
			createSelection(t, e, n) {
				return new Ns(t, e, n)
			}
			createBatch(t) {
				return new Aa(t)
			}
			createOperationFromJSON(t) {
				return class {
					static fromJSON(t, e) {
						return lc[t.__className].fromJSON(t, e)
					}
				}.fromJSON(t, this.document)
			}
			destroy() {
				this.document.destroy(), this.stopListening()
			}
			_runPendingChanges() {
				const t = [];
				for (this.fire("_beforeChanges"); this._pendingChanges.length;) {
					const e = this._pendingChanges[0].batch;
					this._currentWriter = new Wa(this, e);
					const n = this._pendingChanges[0].callback(this._currentWriter);
					t.push(n), this.document._handleChangeBlock(this._currentWriter), this._pendingChanges.shift(), this._currentWriter =
						null
				}
				return this.fire("_afterChanges"), t
			}
		}
		xn(Sc, Ho);
		class Pc {
			constructor() {
				this._listener = Object.create(ur)
			}
			listenTo(t) {
				this._listener.listenTo(t, "keydown", (t, e) => {
					this._listener.fire("_keydown:" + pi(e), e)
				})
			}
			set(t, e, n = {}) {
				const o = bi(t),
					i = n.priority;
				this._listener.listenTo(this._listener, "_keydown:" + o, (t, n) => {
					e(n, () => {
						n.preventDefault(), n.stopPropagation(), t.stop()
					}), t.return = !0
				}, {
					priority: i
				})
			}
			press(t) {
				return !!this._listener.fire("_keydown:" + pi(t), t)
			}
			destroy() {
				this._listener.stopListening()
			}
		}
		class Ec extends Pc {
			constructor(t) {
				super(), this.editor = t
			}
			set(t, e, n = {}) {
				if ("string" == typeof e) {
					const t = e;
					e = (e, n) => {
						this.editor.execute(t), n()
					}
				}
				super.set(t, e, n)
			}
		}
		class Mc {
			constructor(t = {}) {
				this._context = t.context || new Mn({
					language: t.language
				}), this._context._addEditor(this, !t.context);
				const e = Array.from(this.constructor.builtinPlugins || []);
				this.config = new on(t, this.constructor.defaultConfig), this.config.define("plugins", e), this.config.define(
						this._context._getEditorConfig()), this.plugins = new Cn(this, e, this._context.plugins), this.locale =
					this._context.locale, this.t = this.locale.t, this.commands = new oa, this.set("state", "initializing"),
					this.once("ready", () => this.state = "ready", {
						priority: "high"
					}), this.once("destroy", () => this.state = "destroyed", {
						priority: "high"
					}), this.set("isReadOnly", !1), this.model = new Sc;
				const n = new Io;
				this.data = new _a(this.model, n), this.editing = new na(this.model, n), this.editing.view.document.bind(
						"isReadOnly").to(this), this.conversion = new va([this.editing.downcastDispatcher, this.data.downcastDispatcher],
						this.data.upcastDispatcher), this.conversion.addAlias("dataDowncast", this.data.downcastDispatcher), this.conversion
					.addAlias("editingDowncast", this.editing.downcastDispatcher), this.keystrokes = new Ec(this), this.keystrokes
					.listenTo(this.editing.view.document)
			}
			initPlugins() {
				const t = this.config,
					e = t.get("plugins"),
					n = t.get("removePlugins") || [],
					o = t.get("extraPlugins") || [];
				return this.plugins.init(e.concat(o), n)
			}
			destroy() {
				let t = Promise.resolve();
				return "initializing" == this.state && (t = new Promise(t => this.once("ready", t))), t.then(() => {
					this.fire("destroy"), this.stopListening(), this.commands.destroy()
				}).then(() => this.plugins.destroy()).then(() => {
					this.model.destroy(), this.data.destroy(), this.editing.destroy(), this.keystrokes.destroy()
				}).then(() => this._context._removeEditor(this))
			}
			execute(...t) {
				try {
					this.commands.execute(...t)
				} catch (t) {
					hn.b.rethrowUnexpectedError(t, this)
				}
			}
		}
		xn(Mc, Ho);
		var Ic = {
			setData(t) {
				this.data.set(t)
			},
			getData(t) {
				return this.data.get(t)
			}
		};
		class Nc {
			getHtml(t) {
				const e = document.implementation.createHTMLDocument("").createElement("div");
				return e.appendChild(t), e.innerHTML
			}
		}
		class Oc {
			constructor(t) {
				this._domParser = new DOMParser, this._domConverter = new sr(t, {
					blockFillerMode: "nbsp"
				}), this._htmlWriter = new Nc
			}
			toData(t) {
				const e = this._domConverter.viewToDom(t, document);
				return this._htmlWriter.getHtml(e)
			}
			toView(t) {
				const e = this._toDom(t);
				return this._domConverter.domToView(e)
			}
			_toDom(t) {
				const e = this._domParser.parseFromString(t, "text/html"),
					n = e.createDocumentFragment(),
					o = e.body.childNodes;
				for (; o.length > 0;) n.appendChild(o[0]);
				return n
			}
		}
		class Rc {
			constructor(t) {
				this.editor = t, this._components = new Map
			}* names() {
				for (const t of this._components.values()) yield t.originalName
			}
			add(t, e) {
				if (this.has(t)) throw new hn.b(
					"componentfactory-item-exists: The item already exists in the component factory.", this, {
						name: t
					});
				this._components.set(Dc(t), {
					callback: e,
					originalName: t
				})
			}
			create(t) {
				if (!this.has(t)) throw new hn.b(
					"componentfactory-item-missing: The required component is not registered in the factory.", this, {
						name: t
					});
				return this._components.get(Dc(t)).callback(this.editor.locale)
			}
			has(t) {
				return this._components.has(Dc(t))
			}
		}

		function Dc(t) {
			return String(t).toLowerCase()
		}
		class Lc {
			constructor() {
				this.set("isFocused", !1), this.set("focusedElement", null), this._elements = new Set, this._nextEventLoopTimeout =
					null
			}
			add(t) {
				if (this._elements.has(t)) throw new hn.b("focusTracker-add-element-already-exist", this);
				this.listenTo(t, "focus", () => this._focus(t), {
					useCapture: !0
				}), this.listenTo(t, "blur", () => this._blur(), {
					useCapture: !0
				}), this._elements.add(t)
			}
			remove(t) {
				t === this.focusedElement && this._blur(t), this._elements.has(t) && (this.stopListening(t), this._elements.delete(
					t))
			}
			destroy() {
				this.stopListening()
			}
			_focus(t) {
				clearTimeout(this._nextEventLoopTimeout), this.focusedElement = t, this.isFocused = !0
			}
			_blur() {
				clearTimeout(this._nextEventLoopTimeout), this._nextEventLoopTimeout = setTimeout(() => {
					this.focusedElement = null, this.isFocused = !1
				}, 0)
			}
		}
		xn(Lc, ur), xn(Lc, Ho);
		class jc {
			constructor(t) {
				this.editor = t, this.componentFactory = new Rc(t), this.focusTracker = new Lc, this._editableElementsMap =
					new Map, this.listenTo(t.editing.view.document, "layoutChanged", () => this.update())
			}
			get element() {
				return null
			}
			update() {
				this.fire("update")
			}
			destroy() {
				this.stopListening(), this.focusTracker.destroy();
				for (const t of this._editableElementsMap.values()) t.ckeditorInstance = null;
				this._editableElementsMap = new Map
			}
			setEditableElement(t, e) {
				this._editableElementsMap.set(t, e), e.ckeditorInstance || (e.ckeditorInstance = this.editor)
			}
			getEditableElement(t = "main") {
				return this._editableElementsMap.get(t)
			}
			getEditableElementsNames() {
				return this._editableElementsMap.keys()
			}
			get _editableElements() {
				return console.warn(
					"editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.", {
						editorUI: this
					}), this._editableElementsMap
			}
		}
		xn(jc, mn);
		n(13);
		const Vc = new WeakMap;

		function zc(t) {
			const {
				view: e,
				element: n,
				text: o,
				isDirectHost: i = !0
			} = t, r = e.document;
			Vc.has(r) || (Vc.set(r, new Map), r.registerPostFixer(t => Fc(r, t))), Vc.get(r).set(n, {
				text: o,
				isDirectHost: i
			}), e.change(t => Fc(r, t))
		}

		function Bc(t, e) {
			return !!e.hasClass("ck-placeholder") && (t.removeClass("ck-placeholder", e), !0)
		}

		function Fc(t, e) {
			const n = Vc.get(t);
			let o = !1;
			for (const [t, i] of n) Uc(e, t, i) && (o = !0);
			return o
		}

		function Uc(t, e, n) {
			const {
				text: o,
				isDirectHost: i
			} = n, r = i ? e : function(t) {
				if (1 === t.childCount) {
					const e = t.getChild(0);
					if (e.is("element") && !e.is("uiElement")) return e
				}
				return null
			}(e);
			let s = !1;
			return !!r && (n.hostElement = r, r.getAttribute("data-placeholder") !== o && (t.setAttribute(
				"data-placeholder", o, r), s = !0), ! function(t) {
				if (!t.isAttached()) return !1;
				const e = !Array.from(t.getChildren()).some(t => !t.is("uiElement")),
					n = t.document;
				if (!n.isFocused && e) return !0;
				const o = n.selection.anchor;
				return !(!e || !o || o.parent === t)
			}(r) ? Bc(t, r) && (s = !0) : function(t, e) {
				return !e.hasClass("ck-placeholder") && (t.addClass("ck-placeholder", e), !0)
			}(t, r) && (s = !0), s)
		}
		class Hc extends jc {
			constructor(t, e) {
				var n;
				super(t), this.view = e, this._toolbarConfig = (n = t.config.get("toolbar"), Array.isArray(n) ? {
					items: n
				} : n ? Object.assign({
					items: []
				}, n) : {
					items: []
				})
			}
			init() {
				const t = this.editor,
					e = this.view,
					n = t.editing.view,
					o = e.editable,
					i = n.document.getRoot();
				e.editable.name = i.rootName, e.render();
				const r = o.element;
				this.setEditableElement(o.name, r), this.focusTracker.add(r), e.editable.bind("isFocused").to(this.focusTracker),
					n.attachDomRoot(r), this._initPlaceholder(), this._initToolbar(), this.fire("ready")
			}
			destroy() {
				const t = this.view;
				this.editor.editing.view.detachDomRoot(t.editable.name), t.destroy(), super.destroy()
			}
			_initToolbar() {
				const t = this.editor,
					e = this.view.toolbar;
				e.fillFromConfig(this._toolbarConfig.items, this.componentFactory),
					function({
						origin: t,
						originKeystrokeHandler: e,
						originFocusTracker: n,
						toolbar: o,
						beforeFocus: i,
						afterBlur: r
					}) {
						n.add(o.element), e.set("Alt+F10", (t, e) => {
							n.isFocused && !o.focusTracker.isFocused && (i && i(), o.focus(), e())
						}), o.keystrokes.set("Esc", (e, n) => {
							o.focusTracker.isFocused && (t.focus(), r && r(), n())
						})
					}({
						origin: t.editing.view,
						originFocusTracker: this.focusTracker,
						originKeystrokeHandler: t.keystrokes,
						toolbar: e
					})
			}
			_initPlaceholder() {
				const t = this.editor,
					e = t.editing.view,
					n = e.document.getRoot(),
					o = t.sourceElement,
					i = t.config.get("placeholder") || o && "textarea" === o.tagName.toLowerCase() && o.getAttribute(
						"placeholder");
				i && zc({
					view: e,
					element: n,
					text: i,
					isDirectHost: !1
				})
			}
		}
		class qc extends An {
			constructor(t = []) {
				super(t, {
					idProperty: "viewUid"
				}), this.on("add", (t, e, n) => {
					this._renderViewIntoCollectionParent(e, n)
				}), this.on("remove", (t, e) => {
					e.element && this._parentElement && e.element.remove()
				}), this._parentElement = null
			}
			destroy() {
				this.map(t => t.destroy())
			}
			setParent(t) {
				this._parentElement = t;
				for (const t of this) this._renderViewIntoCollectionParent(t)
			}
			delegate(...t) {
				if (!t.length || !t.every(t => "string" == typeof t)) throw new hn.b(
					"ui-viewcollection-delegate-wrong-events: All event names must be strings.", this);
				return {
					to: e => {
						for (const n of this)
							for (const o of t) n.delegate(o).to(e);
						this.on("add", (n, o) => {
							for (const n of t) o.delegate(n).to(e)
						}), this.on("remove", (n, o) => {
							for (const n of t) o.stopDelegating(n, e)
						})
					}
				}
			}
			_renderViewIntoCollectionParent(t, e) {
				t.isRendered || t.render(), t.element && this._parentElement && this._parentElement.insertBefore(t.element,
					this._parentElement.children[e])
			}
		}
		class Wc {
			constructor(t) {
				Object.assign(this, el(tl(t))), this._isRendered = !1, this._revertData = null
			}
			render() {
				const t = this._renderNode({
					intoFragment: !0
				});
				return this._isRendered = !0, t
			}
			apply(t) {
				return this._revertData = {
					children: [],
					bindings: [],
					attributes: {}
				}, this._renderNode({
					node: t,
					isApplying: !0,
					revertData: this._revertData
				}), t
			}
			revert(t) {
				if (!this._revertData) throw new hn.b(
					"ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.", [this,
						t
					]);
				this._revertTemplateFromNode(t, this._revertData)
			}* getViews() {
				yield* function* t(e) {
					if (e.children)
						for (const n of e.children) sl(n) ? yield n: al(n) && (yield* t(n))
				}(this)
			}
			static bind(t, e) {
				return {
					to: (n, o) => new Yc({
						eventNameOrFunction: n,
						attribute: n,
						observable: t,
						emitter: e,
						callback: o
					}),
					if: (n, o, i) => new $c({
						observable: t,
						emitter: e,
						attribute: n,
						valueIfTrue: o,
						callback: i
					})
				}
			}
			static extend(t, e) {
				if (t._isRendered) throw new hn.b(
					"template-extend-render: Attempting to extend a template which has already been rendered.", [this, t]);
				! function t(e, n) {
					n.attributes && (e.attributes || (e.attributes = {}), il(e.attributes, n.attributes));
					n.eventListeners && (e.eventListeners || (e.eventListeners = {}), il(e.eventListeners, n.eventListeners));
					n.text && e.text.push(...n.text);
					if (n.children && n.children.length) {
						if (e.children.length != n.children.length) throw new hn.b(
							"ui-template-extend-children-mismatch: The number of children in extended definition does not match.", e
						);
						let o = 0;
						for (const i of n.children) t(e.children[o++], i)
					}
				}(t, el(tl(e)))
			}
			_renderNode(t) {
				let e;
				if (e = t.node ? this.tag && this.text : this.tag ? this.text : !this.text, e) throw new hn.b(
					'ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.',
					this);
				return this.text ? this._renderText(t) : this._renderElement(t)
			}
			_renderElement(t) {
				let e = t.node;
				return e || (e = t.node = document.createElementNS(this.ns || "http://www.w3.org/1999/xhtml", this.tag)),
					this._renderAttributes(t), this._renderElementChildren(t), this._setUpListeners(t), e
			}
			_renderText(t) {
				let e = t.node;
				return e ? t.revertData.text = e.textContent : e = t.node = document.createTextNode(""), Kc(this.text) ? this
					._bindToObservable({
						schema: this.text,
						updater: Jc(e),
						data: t
					}) : e.textContent = this.text.join(""), e
			}
			_renderAttributes(t) {
				let e, n, o, i;
				if (!this.attributes) return;
				const r = t.node,
					s = t.revertData;
				for (e in this.attributes)
					if (o = r.getAttribute(e), n = this.attributes[e], s && (s.attributes[e] = o), i = j(n[0]) && n[0].ns ? n[0]
						.ns : null, Kc(n)) {
						const a = i ? n[0].value : n;
						s && ll(e) && a.unshift(o), this._bindToObservable({
							schema: a,
							updater: Zc(r, e, i),
							data: t
						})
					} else "style" == e && "string" != typeof n[0] ? this._renderStyleAttribute(n[0], t) : (s && o && ll(e) && n
						.unshift(o), n = n.map(t => t && t.value || t).reduce((t, e) => t.concat(e), []).reduce(ol, ""), rl(n) ||
						r.setAttributeNS(i, e, n))
			}
			_renderStyleAttribute(t, e) {
				const n = e.node;
				for (const o in t) {
					const i = t[o];
					Kc(i) ? this._bindToObservable({
						schema: [i],
						updater: Xc(n, o),
						data: e
					}) : n.style[o] = i
				}
			}
			_renderElementChildren(t) {
				const e = t.node,
					n = t.intoFragment ? document.createDocumentFragment() : e,
					o = t.isApplying;
				let i = 0;
				for (const r of this.children)
					if (cl(r)) {
						if (!o) {
							r.setParent(e);
							for (const t of r) n.appendChild(t.element)
						}
					} else if (sl(r)) o || (r.isRendered || r.render(), n.appendChild(r.element));
				else if (Ji(r)) n.appendChild(r);
				else if (o) {
					const e = {
						children: [],
						bindings: [],
						attributes: {}
					};
					t.revertData.children.push(e), r._renderNode({
						node: n.childNodes[i++],
						isApplying: !0,
						revertData: e
					})
				} else n.appendChild(r.render());
				t.intoFragment && e.appendChild(n)
			}
			_setUpListeners(t) {
				if (this.eventListeners)
					for (const e in this.eventListeners) {
						const n = this.eventListeners[e].map(n => {
							const [o, i] = e.split("@");
							return n.activateDomEventListener(o, i, t)
						});
						t.revertData && t.revertData.bindings.push(n)
					}
			}
			_bindToObservable({
				schema: t,
				updater: e,
				data: n
			}) {
				const o = n.revertData;
				Qc(t, e, n);
				const i = t.filter(t => !rl(t)).filter(t => t.observable).map(o => o.activateAttributeListener(t, e, n));
				o && o.bindings.push(i)
			}
			_revertTemplateFromNode(t, e) {
				for (const t of e.bindings)
					for (const e of t) e();
				if (e.text) t.textContent = e.text;
				else {
					for (const n in e.attributes) {
						const o = e.attributes[n];
						null === o ? t.removeAttribute(n) : t.setAttribute(n, o)
					}
					for (let n = 0; n < e.children.length; ++n) this._revertTemplateFromNode(t.childNodes[n], e.children[n])
				}
			}
		}
		xn(Wc, mn);
		class Gc {
			constructor(t) {
				Object.assign(this, t)
			}
			getValue(t) {
				const e = this.observable[this.attribute];
				return this.callback ? this.callback(e, t) : e
			}
			activateAttributeListener(t, e, n) {
				const o = () => Qc(t, e, n);
				return this.emitter.listenTo(this.observable, "change:" + this.attribute, o), () => {
					this.emitter.stopListening(this.observable, "change:" + this.attribute, o)
				}
			}
		}
		class Yc extends Gc {
			activateDomEventListener(t, e, n) {
				const o = (t, n) => {
					e && !n.target.matches(e) || ("function" == typeof this.eventNameOrFunction ? this.eventNameOrFunction(n) :
						this.observable.fire(this.eventNameOrFunction, n))
				};
				return this.emitter.listenTo(n.node, t, o), () => {
					this.emitter.stopListening(n.node, t, o)
				}
			}
		}
		class $c extends Gc {
			getValue(t) {
				return !rl(super.getValue(t)) && (this.valueIfTrue || !0)
			}
		}

		function Kc(t) {
			return !!t && (t.value && (t = t.value), Array.isArray(t) ? t.some(Kc) : t instanceof Gc)
		}

		function Qc(t, e, {
			node: n
		}) {
			let o = function(t, e) {
				return t.map(t => t instanceof Gc ? t.getValue(e) : t)
			}(t, n);
			o = 1 == t.length && t[0] instanceof $c ? o[0] : o.reduce(ol, ""), rl(o) ? e.remove() : e.set(o)
		}

		function Jc(t) {
			return {
				set(e) {
					t.textContent = e
				},
				remove() {
					t.textContent = ""
				}
			}
		}

		function Zc(t, e, n) {
			return {
				set(o) {
					t.setAttributeNS(n, e, o)
				},
				remove() {
					t.removeAttributeNS(n, e)
				}
			}
		}

		function Xc(t, e) {
			return {
				set(n) {
					t.style[e] = n
				},
				remove() {
					t.style[e] = null
				}
			}
		}

		function tl(t) {
			return en(t, t => {
				if (t && (t instanceof Gc || al(t) || sl(t) || cl(t))) return t
			})
		}

		function el(t) {
			if ("string" == typeof t ? t = function(t) {
					return {
						text: [t]
					}
				}(t) : t.text && function(t) {
					Array.isArray(t.text) || (t.text = [t.text])
				}(t), t.on && (t.eventListeners = function(t) {
					for (const e in t) nl(t, e);
					return t
				}(t.on), delete t.on), !t.text) {
				t.attributes && function(t) {
					for (const e in t) t[e].value && (t[e].value = [].concat(t[e].value)), nl(t, e)
				}(t.attributes);
				const e = [];
				if (t.children)
					if (cl(t.children)) e.push(t.children);
					else
						for (const n of t.children) al(n) || sl(n) || Ji(n) ? e.push(n) : e.push(new Wc(n));
				t.children = e
			}
			return t
		}

		function nl(t, e) {
			Array.isArray(t[e]) || (t[e] = [t[e]])
		}

		function ol(t, e) {
			return rl(e) ? t : rl(t) ? e : `${t} ${e}`
		}

		function il(t, e) {
			for (const n in e) t[n] ? t[n].push(...e[n]) : t[n] = e[n]
		}

		function rl(t) {
			return !t && 0 !== t
		}

		function sl(t) {
			return t instanceof dl
		}

		function al(t) {
			return t instanceof Wc
		}

		function cl(t) {
			return t instanceof qc
		}

		function ll(t) {
			return "class" == t || "style" == t
		}
		n(15);
		class dl {
			constructor(t) {
				this.element = null, this.isRendered = !1, this.locale = t, this.t = t && t.t, this._viewCollections = new An,
					this._unboundChildren = this.createCollection(), this._viewCollections.on("add", (e, n) => {
						n.locale = t
					}), this.decorate("render")
			}
			get bindTemplate() {
				return this._bindTemplate ? this._bindTemplate : this._bindTemplate = Wc.bind(this, this)
			}
			createCollection(t) {
				const e = new qc(t);
				return this._viewCollections.add(e), e
			}
			registerChild(t) {
				yn(t) || (t = [t]);
				for (const e of t) this._unboundChildren.add(e)
			}
			deregisterChild(t) {
				yn(t) || (t = [t]);
				for (const e of t) this._unboundChildren.remove(e)
			}
			setTemplate(t) {
				this.template = new Wc(t)
			}
			extendTemplate(t) {
				Wc.extend(this.template, t)
			}
			render() {
				if (this.isRendered) throw new hn.b("ui-view-render-already-rendered: This View has already been rendered.",
					this);
				this.template && (this.element = this.template.render(), this.registerChild(this.template.getViews())), this.isRendered = !
					0
			}
			destroy() {
				this.stopListening(), this._viewCollections.map(t => t.destroy()), this.template && this.template._revertData &&
					this.template.revert(this.element)
			}
		}
		xn(dl, ur), xn(dl, Ho);
		var ul = function(t) {
			return "string" == typeof t || !Dt(t) && p(t) && "[object String]" == f(t)
		};
		class hl extends qc {
			constructor(t, e = []) {
				super(e), this.locale = t
			}
			attachToDom() {
				this._bodyCollectionContainer = new Wc({
					tag: "div",
					attributes: {
						class: ["ck", "ck-reset_all", "ck-body", "ck-rounded-corners"],
						dir: this.locale.uiLanguageDirection
					},
					children: this
				}).render();
				let t = document.querySelector(".ck-body-wrapper");
				t || (t = function(t, e, n = {}, o = []) {
					const i = n && n.xmlns,
						r = i ? t.createElementNS(i, e) : t.createElement(e);
					for (const t in n) r.setAttribute(t, n[t]);
					!ul(o) && yn(o) || (o = [o]);
					for (let e of o) ul(e) && (e = t.createTextNode(e)), r.appendChild(e);
					return r
				}(document, "div", {
					class: "ck-body-wrapper"
				}), document.body.appendChild(t)), t.appendChild(this._bodyCollectionContainer)
			}
			detachFromDom() {
				super.destroy(), this._bodyCollectionContainer && this._bodyCollectionContainer.remove();
				const t = document.querySelector(".ck-body-wrapper");
				t && 0 == t.childElementCount && t.remove()
			}
		}
		n(17);
		class fl extends dl {
			constructor(t) {
				super(t), this.body = new hl(t)
			}
			render() {
				super.render(), this.body.attachToDom()
			}
			destroy() {
				return this.body.detachFromDom(), super.destroy()
			}
		}
		class gl extends dl {
			constructor(t, e, n) {
				super(t), this.setTemplate({
						tag: "div",
						attributes: {
							class: ["ck", "ck-content", "ck-editor__editable", "ck-rounded-corners"],
							lang: t.contentLanguage,
							dir: t.contentLanguageDirection
						}
					}), this.name = null, this.set("isFocused", !1), this._editableElement = n, this._hasExternalElement = !!
					this._editableElement, this._editingView = e
			}
			render() {
				super.render(), this._hasExternalElement ? this.template.apply(this.element = this._editableElement) : this._editableElement =
					this.element, this.on("change:isFocused", () => this._updateIsFocusedClasses()), this._updateIsFocusedClasses()
			}
			destroy() {
				this._hasExternalElement && this.template.revert(this._editableElement), super.destroy()
			}
			_updateIsFocusedClasses() {
				const t = this._editingView;

				function e(e) {
					t.change(n => {
						const o = t.document.getRoot(e.name);
						n.addClass(e.isFocused ? "ck-focused" : "ck-blurred", o), n.removeClass(e.isFocused ? "ck-blurred" :
							"ck-focused", o)
					})
				}
				t.isRenderingInProgress ? function n(o) {
					t.once("change:isRenderingInProgress", (t, i, r) => {
						r ? n(o) : e(o)
					})
				}(this) : e(this)
			}
		}
		class ml extends gl {
			constructor(t, e, n) {
				super(t, e, n), this.extendTemplate({
					attributes: {
						role: "textbox",
						class: "ck-editor__editable_inline"
					}
				})
			}
			render() {
				super.render();
				const t = this._editingView,
					e = this.t;
				t.change(n => {
					const o = t.document.getRoot(this.name);
					n.setAttribute("aria-label", e("Rich Text Editor, %0", [this.name]), o)
				})
			}
		}
		class pl {
			constructor(t) {
				if (Object.assign(this, t), t.actions && t.keystrokeHandler)
					for (const e in t.actions) {
						let n = t.actions[e];
						"string" == typeof n && (n = [n]);
						for (const o of n) t.keystrokeHandler.set(o, (t, n) => {
							this[e](), n()
						})
					}
			}
			get first() {
				return this.focusables.find(bl) || null
			}
			get last() {
				return this.focusables.filter(bl).slice(-1)[0] || null
			}
			get next() {
				return this._getFocusableItem(1)
			}
			get previous() {
				return this._getFocusableItem(-1)
			}
			get current() {
				let t = null;
				return null === this.focusTracker.focusedElement ? null : (this.focusables.find((e, n) => {
					const o = e.element === this.focusTracker.focusedElement;
					return o && (t = n), o
				}), t)
			}
			focusFirst() {
				this._focus(this.first)
			}
			focusLast() {
				this._focus(this.last)
			}
			focusNext() {
				this._focus(this.next)
			}
			focusPrevious() {
				this._focus(this.previous)
			}
			_focus(t) {
				t && t.focus()
			}
			_getFocusableItem(t) {
				const e = this.current,
					n = this.focusables.length;
				if (!n) return null;
				if (null === e) return this[1 === t ? "first" : "last"];
				let o = (e + n + t) % n;
				do {
					const e = this.focusables.get(o);
					if (bl(e)) return e;
					o = (o + n + t) % n
				} while (o !== e);
				return null
			}
		}

		function bl(t) {
			return !(!t.focus || "none" == nr.window.getComputedStyle(t.element).display)
		}
		class wl extends dl {
			constructor(t) {
				super(t), this.setTemplate({
					tag: "span",
					attributes: {
						class: ["ck", "ck-toolbar__separator"]
					}
				})
			}
		}
		class kl {
			constructor(t, e) {
				kl._observerInstance || kl._createObserver(), this._element = t, this._callback = e, kl._addElementCallback(t,
					e), kl._observerInstance.observe(t)
			}
			destroy() {
				kl._deleteElementCallback(this._element, this._callback)
			}
			static _addElementCallback(t, e) {
				kl._elementCallbacks || (kl._elementCallbacks = new Map);
				let n = kl._elementCallbacks.get(t);
				n || (n = new Set, kl._elementCallbacks.set(t, n)), n.add(e)
			}
			static _deleteElementCallback(t, e) {
				const n = kl._getElementCallbacks(t);
				n && (n.delete(e), n.size || (kl._elementCallbacks.delete(t), kl._observerInstance.unobserve(t))), kl._elementCallbacks &&
					!kl._elementCallbacks.size && (kl._observerInstance = null, kl._elementCallbacks = null)
			}
			static _getElementCallbacks(t) {
				return kl._elementCallbacks ? kl._elementCallbacks.get(t) : null
			}
			static _createObserver() {
				let t;
				t = "function" == typeof nr.window.ResizeObserver ? nr.window.ResizeObserver : _l, kl._observerInstance = new t(
					t => {
						for (const e of t) {
							if (!e.target.offsetParent) continue;
							const t = kl._getElementCallbacks(e.target);
							if (t)
								for (const n of t) n(e)
						}
					})
			}
		}
		kl._observerInstance = null, kl._elementCallbacks = null;
		class _l {
			constructor(t) {
				this._callback = t, this._elements = new Set, this._previousRects = new Map, this._periodicCheckTimeout =
					null
			}
			observe(t) {
				this._elements.add(t), this._checkElementRectsAndExecuteCallback(), 1 === this._elements.size && this._startPeriodicCheck()
			}
			unobserve(t) {
				this._elements.delete(t), this._previousRects.delete(t), this._elements.size || this._stopPeriodicCheck()
			}
			_startPeriodicCheck() {
				const t = () => {
					this._checkElementRectsAndExecuteCallback(), this._periodicCheckTimeout = setTimeout(t, 100)
				};
				this.listenTo(nr.window, "resize", () => {
					this._checkElementRectsAndExecuteCallback()
				}), this._periodicCheckTimeout = setTimeout(t, 100)
			}
			_stopPeriodicCheck() {
				clearTimeout(this._periodicCheckTimeout), this.stopListening(), this._previousRects.clear()
			}
			_checkElementRectsAndExecuteCallback() {
				const t = [];
				for (const e of this._elements) this._hasRectChanged(e) && t.push({
					target: e,
					contentRect: this._previousRects.get(e)
				});
				t.length && this._callback(t)
			}
			_hasRectChanged(t) {
				if (!t.ownerDocument.body.contains(t)) return !1;
				const e = new es(t),
					n = this._previousRects.get(t),
					o = !n || !n.isEqual(e);
				return this._previousRects.set(t, e), o
			}
		}
		xn(_l, ur);
		class vl extends dl {
			constructor(t) {
				super(t);
				const e = this.bindTemplate;
				this.set("isVisible", !1), this.set("position", "se"), this.children = this.createCollection(), this.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck", "ck-reset", "ck-dropdown__panel", e.to("position", t => "ck-dropdown__panel_" + t), e.if(
							"isVisible", "ck-dropdown__panel-visible")]
					},
					children: this.children,
					on: {
						selectstart: e.to(t => t.preventDefault())
					}
				})
			}
			focus() {
				this.children.length && this.children.first.focus()
			}
			focusLast() {
				if (this.children.length) {
					const t = this.children.last;
					"function" == typeof t.focusLast ? t.focusLast() : t.focus()
				}
			}
		}
		n(19);

		function yl({
			element: t,
			target: e,
			positions: n,
			limiter: o,
			fitInViewport: i
		}) {
			z(e) && (e = e()), z(o) && (o = o());
			const r = function(t) {
					return t && t.parentNode ? t.offsetParent === nr.document.body ? null : t.offsetParent : null
				}(t),
				s = new es(t),
				a = new es(e);
			let c, l;
			if (o || i) {
				const t = function(t, e) {
					const {
						elementRect: n,
						viewportRect: o
					} = e, i = n.getArea(), r = function(t, {
						targetRect: e,
						elementRect: n,
						limiterRect: o,
						viewportRect: i
					}) {
						const r = [],
							s = n.getArea();
						for (const a of t) {
							const t = xl(a, e, n);
							if (!t) continue;
							const [c, l] = t;
							let d = 0,
								u = 0;
							if (o)
								if (i) {
									const t = o.getIntersection(i);
									t && (d = t.getIntersectionArea(l))
								} else d = o.getIntersectionArea(l);
							i && (u = i.getIntersectionArea(l));
							const h = {
								positionName: c,
								positionRect: l,
								limiterIntersectArea: d,
								viewportIntersectArea: u
							};
							if (d === s) return [h];
							r.push(h)
						}
						return r
					}(t, e);
					if (o) {
						const t = Al(r.filter(({
							viewportIntersectArea: t
						}) => t === i), i);
						if (t) return t
					}
					return Al(r, i)
				}(n, {
					targetRect: a,
					elementRect: s,
					limiterRect: o && new es(o).getVisible(),
					viewportRect: i && new es(nr.window)
				});
				[l, c] = t || xl(n[0], a, s)
			} else [l, c] = xl(n[0], a, s);
			let d = Cl(c);
			return r && (d = function({
				left: t,
				top: e
			}, n) {
				const o = Cl(new es(n)),
					i = Xr(n);
				return t -= o.left, e -= o.top, t += n.scrollLeft, e += n.scrollTop, t -= i.left, e -= i.top, {
					left: t,
					top: e
				}
			}(d, r)), {
				left: d.left,
				top: d.top,
				name: l
			}
		}

		function xl(t, e, n) {
			const o = t(e, n);
			if (!o) return null;
			const {
				left: i,
				top: r,
				name: s
			} = o;
			return [s, n.clone().moveTo(i, r)]
		}

		function Al(t, e) {
			let n, o, i = 0;
			for (const {
					positionName: r,
					positionRect: s,
					limiterIntersectArea: a,
					viewportIntersectArea: c
				} of t) {
				if (a === e) return [r, s];
				const t = c ** 2 + a ** 2;
				t > i && (i = t, n = s, o = r)
			}
			return n ? [o, n] : null
		}

		function Cl({
			left: t,
			top: e
		}) {
			const {
				scrollX: n,
				scrollY: o
			} = nr.window;
			return {
				left: t + n,
				top: e + o
			}
		}
		class Tl extends dl {
			constructor(t, e, n) {
				super(t);
				const o = this.bindTemplate;
				this.buttonView = e, this.panelView = n, this.set("isOpen", !1), this.set("isEnabled", !0), this.set("class"),
					this.set("id"), this.set("panelPosition", "auto"), this.keystrokes = new Pc, this.setTemplate({
						tag: "div",
						attributes: {
							class: ["ck", "ck-dropdown", o.to("class"), o.if("isEnabled", "ck-disabled", t => !t)],
							id: o.to("id"),
							"aria-describedby": o.to("ariaDescribedById")
						},
						children: [e, n]
					}), e.extendTemplate({
						attributes: {
							class: ["ck-dropdown__button"]
						}
					})
			}
			render() {
				super.render(), this.listenTo(this.buttonView, "open", () => {
					this.isOpen = !this.isOpen
				}), this.panelView.bind("isVisible").to(this, "isOpen"), this.on("change:isOpen", () => {
					this.isOpen && ("auto" === this.panelPosition ? this.panelView.position = Tl._getOptimalPosition({
						element: this.panelView.element,
						target: this.buttonView.element,
						fitInViewport: !0,
						positions: this._panelPositions
					}).name : this.panelView.position = this.panelPosition)
				}), this.keystrokes.listenTo(this.element);
				const t = (t, e) => {
					this.isOpen && (this.buttonView.focus(), this.isOpen = !1, e())
				};
				this.keystrokes.set("arrowdown", (t, e) => {
					this.buttonView.isEnabled && !this.isOpen && (this.isOpen = !0, e())
				}), this.keystrokes.set("arrowright", (t, e) => {
					this.isOpen && e()
				}), this.keystrokes.set("arrowleft", t), this.keystrokes.set("esc", t)
			}
			focus() {
				this.buttonView.focus()
			}
			get _panelPositions() {
				const {
					southEast: t,
					southWest: e,
					northEast: n,
					northWest: o
				} = Tl.defaultPanelPositions;
				return "ltr" === this.locale.uiLanguageDirection ? [t, e, n, o] : [e, t, o, n]
			}
		}
		Tl.defaultPanelPositions = {
			southEast: t => ({
				top: t.bottom,
				left: t.left,
				name: "se"
			}),
			southWest: (t, e) => ({
				top: t.bottom,
				left: t.left - e.width + t.width,
				name: "sw"
			}),
			northEast: (t, e) => ({
				top: t.top - e.height,
				left: t.left,
				name: "ne"
			}),
			northWest: (t, e) => ({
				top: t.bottom - e.height,
				left: t.left - e.width + t.width,
				name: "nw"
			})
		}, Tl._getOptimalPosition = yl;
		n(21);
		class Sl extends dl {
			constructor() {
				super();
				const t = this.bindTemplate;
				this.set("content", ""), this.set("viewBox", "0 0 20 20"), this.set("fillColor", ""), this.setTemplate({
					tag: "svg",
					ns: "http://www.w3.org/2000/svg",
					attributes: {
						class: ["ck", "ck-icon"],
						viewBox: t.to("viewBox")
					}
				})
			}
			render() {
				super.render(), this._updateXMLContent(), this._colorFillPaths(), this.on("change:content", () => {
					this._updateXMLContent(), this._colorFillPaths()
				}), this.on("change:fillColor", () => {
					this._colorFillPaths()
				})
			}
			_updateXMLContent() {
				if (this.content) {
					const t = (new DOMParser).parseFromString(this.content.trim(), "image/svg+xml").querySelector("svg"),
						e = t.getAttribute("viewBox");
					for (e && (this.viewBox = e), this.element.innerHTML = ""; t.childNodes.length > 0;) this.element.appendChild(
						t.childNodes[0])
				}
			}
			_colorFillPaths() {
				this.fillColor && this.element.querySelectorAll(".ck-icon__fill").forEach(t => {
					t.style.fill = this.fillColor
				})
			}
		}
		n(23);
		class Pl extends dl {
			constructor(t) {
				super(t), this.set("text", ""), this.set("position", "s");
				const e = this.bindTemplate;
				this.setTemplate({
					tag: "span",
					attributes: {
						class: ["ck", "ck-tooltip", e.to("position", t => "ck-tooltip_" + t), e.if("text", "ck-hidden", t => !t.trim())]
					},
					children: [{
						tag: "span",
						attributes: {
							class: ["ck", "ck-tooltip__text"]
						},
						children: [{
							text: e.to("text")
						}]
					}]
				})
			}
		}
		n(25);
		class El extends dl {
			constructor(t) {
				super(t);
				const e = this.bindTemplate,
					n = dn();
				this.set("class"), this.set("labelStyle"), this.set("icon"), this.set("isEnabled", !0), this.set("isOn", !1),
					this.set("isVisible", !0), this.set("isToggleable", !1), this.set("keystroke"), this.set("label"), this.set(
						"tabindex", -1), this.set("tooltip"), this.set("tooltipPosition", "s"), this.set("type", "button"), this.set(
						"withText", !1), this.set("withKeystroke", !1), this.children = this.createCollection(), this.tooltipView =
					this._createTooltipView(), this.labelView = this._createLabelView(n), this.iconView = new Sl, this.iconView.extendTemplate({
						attributes: {
							class: "ck-button__icon"
						}
					}), this.keystrokeView = this._createKeystrokeView(), this.bind("_tooltipString").to(this, "tooltip", this,
						"label", this, "keystroke", this._getTooltipString.bind(this)), this.setTemplate({
						tag: "button",
						attributes: {
							class: ["ck", "ck-button", e.to("class"), e.if("isEnabled", "ck-disabled", t => !t), e.if("isVisible",
								"ck-hidden", t => !t), e.to("isOn", t => t ? "ck-on" : "ck-off"), e.if("withText",
								"ck-button_with-text"), e.if("withKeystroke", "ck-button_with-keystroke")],
							type: e.to("type", t => t || "button"),
							tabindex: e.to("tabindex"),
							"aria-labelledby": "ck-editor__aria-label_" + n,
							"aria-disabled": e.if("isEnabled", !0, t => !t),
							"aria-pressed": e.to("isOn", t => !!this.isToggleable && String(t))
						},
						children: this.children,
						on: {
							mousedown: e.to(t => {
								t.preventDefault()
							}),
							click: e.to(t => {
								this.isEnabled ? this.fire("execute") : t.preventDefault()
							})
						}
					})
			}
			render() {
				super.render(), this.icon && (this.iconView.bind("content").to(this, "icon"), this.children.add(this.iconView)),
					this.children.add(this.tooltipView), this.children.add(this.labelView), this.withKeystroke && this.children.add(
						this.keystrokeView)
			}
			focus() {
				this.element.focus()
			}
			_createTooltipView() {
				const t = new Pl;
				return t.bind("text").to(this, "_tooltipString"), t.bind("position").to(this, "tooltipPosition"), t
			}
			_createLabelView(t) {
				const e = new dl,
					n = this.bindTemplate;
				return e.setTemplate({
					tag: "span",
					attributes: {
						class: ["ck", "ck-button__label"],
						style: n.to("labelStyle"),
						id: "ck-editor__aria-label_" + t
					},
					children: [{
						text: this.bindTemplate.to("label")
					}]
				}), e
			}
			_createKeystrokeView() {
				const t = new dl;
				return t.setTemplate({
					tag: "span",
					attributes: {
						class: ["ck", "ck-button__keystroke"]
					},
					children: [{
						text: this.bindTemplate.to("keystroke", t => wi(t))
					}]
				}), t
			}
			_getTooltipString(t, e, n) {
				return t ? "string" == typeof t ? t : (n && (n = wi(n)), t instanceof Function ? t(e, n) :
					`${e}${n?` (${n})`:""}`) : ""
			}
		}
		var Ml =
			'<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';
		class Il extends El {
			constructor(t) {
				super(t), this.arrowView = this._createArrowView(), this.extendTemplate({
					attributes: {
						"aria-haspopup": !0
					}
				}), this.delegate("execute").to(this, "open")
			}
			render() {
				super.render(), this.children.add(this.arrowView)
			}
			_createArrowView() {
				const t = new Sl;
				return t.content = Ml, t.extendTemplate({
					attributes: {
						class: "ck-dropdown__arrow"
					}
				}), t
			}
		}
		n(27);
		class Nl extends dl {
			constructor() {
				super(), this.items = this.createCollection(), this.focusTracker = new Lc, this.keystrokes = new Pc, this._focusCycler =
					new pl({
						focusables: this.items,
						focusTracker: this.focusTracker,
						keystrokeHandler: this.keystrokes,
						actions: {
							focusPrevious: "arrowup",
							focusNext: "arrowdown"
						}
					}), this.setTemplate({
						tag: "ul",
						attributes: {
							class: ["ck", "ck-reset", "ck-list"]
						},
						children: this.items
					})
			}
			render() {
				super.render();
				for (const t of this.items) this.focusTracker.add(t.element);
				this.items.on("add", (t, e) => {
					this.focusTracker.add(e.element)
				}), this.items.on("remove", (t, e) => {
					this.focusTracker.remove(e.element)
				}), this.keystrokes.listenTo(this.element)
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			focusLast() {
				this._focusCycler.focusLast()
			}
		}
		class Ol extends dl {
			constructor(t) {
				super(t), this.children = this.createCollection(), this.setTemplate({
					tag: "li",
					attributes: {
						class: ["ck", "ck-list__item"]
					},
					children: this.children
				})
			}
			focus() {
				this.children.first.focus()
			}
		}
		class Rl extends dl {
			constructor(t) {
				super(t), this.setTemplate({
					tag: "li",
					attributes: {
						class: ["ck", "ck-list__separator"]
					}
				})
			}
		}
		n(29);
		class Dl extends El {
			constructor(t) {
				super(t), this.isToggleable = !0, this.toggleSwitchView = this._createToggleView(), this.extendTemplate({
					attributes: {
						class: "ck-switchbutton"
					}
				})
			}
			render() {
				super.render(), this.children.add(this.toggleSwitchView)
			}
			_createToggleView() {
				const t = new dl;
				return t.setTemplate({
					tag: "span",
					attributes: {
						class: ["ck", "ck-button__toggle"]
					},
					children: [{
						tag: "span",
						attributes: {
							class: ["ck", "ck-button__toggle__inner"]
						}
					}]
				}), t
			}
		}

		function Ll({
			emitter: t,
			activator: e,
			callback: n,
			contextElements: o
		}) {
			t.listenTo(document, "mousedown", (t, {
				target: i
			}) => {
				if (e()) {
					for (const t of o)
						if (t.contains(i)) return;
					n()
				}
			})
		}
		n(31), n(33);

		function jl(t, e = Il) {
			const n = new e(t),
				o = new vl(t),
				i = new Tl(t, n, o);
			return n.bind("isEnabled").to(i), n instanceof Il ? n.bind("isOn").to(i, "isOpen") : n.arrowView.bind("isOn").to(
					i, "isOpen"),
				function(t) {
					(function(t) {
						t.on("render", () => {
							Ll({
								emitter: t,
								activator: () => t.isOpen,
								callback: () => {
									t.isOpen = !1
								},
								contextElements: [t.element]
							})
						})
					})(t),
					function(t) {
						t.on("execute", e => {
							e.source instanceof Dl || (t.isOpen = !1)
						})
					}(t),
					function(t) {
						t.keystrokes.set("arrowdown", (e, n) => {
							t.isOpen && (t.panelView.focus(), n())
						}), t.keystrokes.set("arrowup", (e, n) => {
							t.isOpen && (t.panelView.focusLast(), n())
						})
					}(t)
				}(i), i
		}

		function Vl(t, e) {
			const n = t.locale,
				o = n.t,
				i = t.toolbarView = new Bl(n);
			i.set("ariaLabel", o("Dropdown toolbar")), t.extendTemplate({
				attributes: {
					class: ["ck-toolbar-dropdown"]
				}
			}), e.map(t => i.items.add(t)), t.panelView.children.add(i), i.items.delegate("execute").to(t)
		}

		function zl(t, e) {
			const n = t.locale,
				o = t.listView = new Nl(n);
			o.items.bindTo(e).using(({
				type: t,
				model: e
			}) => {
				if ("separator" === t) return new Rl(n);
				if ("button" === t || "switchbutton" === t) {
					const o = new Ol(n);
					let i;
					return i = "button" === t ? new El(n) : new Dl(n), i.bind(...Object.keys(e)).to(e), i.delegate("execute").to(
						o), o.children.add(i), o
				}
			}), t.panelView.children.add(o), o.items.delegate("execute").to(t)
		}
		n(35);
		class Bl extends dl {
			constructor(t, e) {
				super(t);
				const n = this.bindTemplate,
					o = this.t;
				var i;
				this.options = e || {}, this.set("ariaLabel", o("Editor toolbar")), this.set("maxWidth", "auto"), this.items =
					this.createCollection(), this.focusTracker = new Lc, this.keystrokes = new Pc, this.set("class"), this.set(
						"isCompact", !1), this.itemsView = new Fl(t), this.children = this.createCollection(), this.children.add(
						this.itemsView), this.focusables = this.createCollection(), this._focusCycler = new pl({
						focusables: this.focusables,
						focusTracker: this.focusTracker,
						keystrokeHandler: this.keystrokes,
						actions: {
							focusPrevious: ["arrowleft", "arrowup"],
							focusNext: ["arrowright", "arrowdown"]
						}
					}), this.setTemplate({
						tag: "div",
						attributes: {
							class: ["ck", "ck-toolbar", n.to("class"), n.if("isCompact", "ck-toolbar_compact")],
							role: "toolbar",
							"aria-label": n.to("ariaLabel"),
							style: {
								maxWidth: n.to("maxWidth")
							}
						},
						children: this.children,
						on: {
							mousedown: (i = this, i.bindTemplate.to(t => {
								t.target === i.element && t.preventDefault()
							}))
						}
					}), this._behavior = this.options.shouldGroupWhenFull ? new Hl(this) : new Ul(this)
			}
			render() {
				super.render();
				for (const t of this.items) this.focusTracker.add(t.element);
				this.items.on("add", (t, e) => {
					this.focusTracker.add(e.element)
				}), this.items.on("remove", (t, e) => {
					this.focusTracker.remove(e.element)
				}), this.keystrokes.listenTo(this.element), this._behavior.render(this)
			}
			destroy() {
				return this._behavior.destroy(), super.destroy()
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			focusLast() {
				this._focusCycler.focusLast()
			}
			fillFromConfig(t, e) {
				t.map(t => {
					"|" == t ? this.items.add(new wl) : e.has(t) ? this.items.add(e.create(t)) : console.warn(Object(hn.a)(
						"toolbarview-item-unavailable: The requested toolbar item is unavailable."), {
						name: t
					})
				})
			}
		}
		class Fl extends dl {
			constructor(t) {
				super(t), this.children = this.createCollection(), this.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck", "ck-toolbar__items"]
					},
					children: this.children
				})
			}
		}
		class Ul {
			constructor(t) {
				const e = t.bindTemplate;
				t.set("isVertical", !1), t.itemsView.children.bindTo(t.items).using(t => t), t.focusables.bindTo(t.items).using(
					t => t), t.extendTemplate({
					attributes: {
						class: [e.if("isVertical", "ck-toolbar_vertical")]
					}
				})
			}
			render() {}
			destroy() {}
		}
		class Hl {
			constructor(t) {
				this.viewChildren = t.children, this.viewFocusables = t.focusables, this.viewItemsView = t.itemsView, this.viewFocusTracker =
					t.focusTracker, this.viewLocale = t.locale, this.ungroupedItems = t.createCollection(), this.groupedItems =
					t.createCollection(), this.groupedItemsDropdown = this._createGroupedItemsDropdown(), this.resizeObserver =
					null, this.cachedPadding = null, this.shouldUpdateGroupingOnNextResize = !1, t.itemsView.children.bindTo(
						this.ungroupedItems).using(t => t), this.ungroupedItems.on("add", this._updateFocusCycleableItems.bind(this)),
					this.ungroupedItems.on("remove", this._updateFocusCycleableItems.bind(this)), t.children.on("add", this._updateFocusCycleableItems
						.bind(this)), t.children.on("remove", this._updateFocusCycleableItems.bind(this)), t.items.on("add", (t, e,
						n) => {
						n > this.ungroupedItems.length ? this.groupedItems.add(e, n - this.ungroupedItems.length) : this.ungroupedItems
							.add(e, n), this._updateGrouping()
					}), t.items.on("remove", (t, e, n) => {
						n > this.ungroupedItems.length ? this.groupedItems.remove(e) : this.ungroupedItems.remove(e), this._updateGrouping()
					}), t.extendTemplate({
						attributes: {
							class: ["ck-toolbar_grouping"]
						}
					})
			}
			render(t) {
				this.viewElement = t.element, this._enableGroupingOnResize(), this._enableGroupingOnMaxWidthChange(t)
			}
			destroy() {
				this.groupedItemsDropdown.destroy(), this.resizeObserver.destroy()
			}
			_updateGrouping() {
				if (!this.viewElement.ownerDocument.body.contains(this.viewElement)) return;
				if (!this.viewElement.offsetParent) return void(this.shouldUpdateGroupingOnNextResize = !0);
				let t;
				for (; this._areItemsOverflowing;) this._groupLastItem(), t = !0;
				if (!t && this.groupedItems.length) {
					for (; this.groupedItems.length && !this._areItemsOverflowing;) this._ungroupFirstItem();
					this._areItemsOverflowing && this._groupLastItem()
				}
			}
			get _areItemsOverflowing() {
				if (!this.ungroupedItems.length) return !1;
				const t = this.viewElement,
					e = this.viewLocale.uiLanguageDirection,
					n = new es(t.lastChild),
					o = new es(t);
				if (!this.cachedPadding) {
					const n = nr.window.getComputedStyle(t),
						o = "ltr" === e ? "paddingRight" : "paddingLeft";
					this.cachedPadding = Number.parseInt(n[o])
				}
				return "ltr" === e ? n.right > o.right - this.cachedPadding : n.left < o.left + this.cachedPadding
			}
			_enableGroupingOnResize() {
				let t;
				this.resizeObserver = new kl(this.viewElement, e => {
					t && t === e.contentRect.width && !this.shouldUpdateGroupingOnNextResize || (this.shouldUpdateGroupingOnNextResize = !
						1, this._updateGrouping(), t = e.contentRect.width)
				}), this._updateGrouping()
			}
			_enableGroupingOnMaxWidthChange(t) {
				t.on("change:maxWidth", () => {
					this._updateGrouping()
				})
			}
			_groupLastItem() {
				this.groupedItems.length || (this.viewChildren.add(new wl), this.viewChildren.add(this.groupedItemsDropdown),
					this.viewFocusTracker.add(this.groupedItemsDropdown.element)), this.groupedItems.add(this.ungroupedItems.remove(
					this.ungroupedItems.last), 0)
			}
			_ungroupFirstItem() {
				this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)), this.groupedItems.length || (this
					.viewChildren.remove(this.groupedItemsDropdown), this.viewChildren.remove(this.viewChildren.last), this.viewFocusTracker
					.remove(this.groupedItemsDropdown.element))
			}
			_createGroupedItemsDropdown() {
				const t = this.viewLocale,
					e = t.t,
					n = jl(t);
				return n.class = "ck-toolbar__grouped-dropdown", n.panelPosition = "ltr" === t.uiLanguageDirection ? "sw" :
					"se", Vl(n, []), n.buttonView.set({
						label: e("Show more items"),
						tooltip: !0,
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'
					}), n.toolbarView.items.bindTo(this.groupedItems).using(t => t), n
			}
			_updateFocusCycleableItems() {
				this.viewFocusables.clear(), this.ungroupedItems.map(t => {
					this.viewFocusables.add(t)
				}), this.groupedItems.length && this.viewFocusables.add(this.groupedItemsDropdown)
			}
		}
		class ql extends fl {
			constructor(t, e, n = {}) {
				super(t), this.toolbar = new Bl(t, {
					shouldGroupWhenFull: n.shouldToolbarGroupWhenFull
				}), this.editable = new ml(t, e, n.editableElement), this.toolbar.extendTemplate({
					attributes: {
						class: ["ck-reset_all", "ck-rounded-corners"],
						dir: t.uiLanguageDirection
					}
				})
			}
			render() {
				super.render(), this.registerChild([this.toolbar, this.editable])
			}
		}
		class Wl extends Mc {
			constructor(t, e) {
				super(e), nn(t) && (this.sourceElement = t, function(t) {
					const e = t.sourceElement;
					if (e) {
						if (e.ckeditorInstance) throw new hn.b(
							"editor-source-element-already-used: The DOM element cannot be used to create multiple editor instances.",
							t);
						e.ckeditorInstance = t, t.once("destroy", () => {
							delete e.ckeditorInstance
						})
					}
				}(this)), this.data.processor = new Oc(this.data.viewDocument), this.model.document.createRoot();
				const n = !this.config.get("toolbar.shouldNotGroupWhenFull"),
					o = new ql(this.locale, this.editing.view, {
						editableElement: this.sourceElement,
						shouldToolbarGroupWhenFull: n
					});
				this.ui = new Hc(this, o)
			}
			destroy() {
				const t = this.getData();
				return this.ui.destroy(), super.destroy().then(() => {
					this.sourceElement && function(t, e) {
						t instanceof HTMLTextAreaElement && (t.value = e), t.innerHTML = e
					}(this.sourceElement, t)
				})
			}
			static create(t, e = {}) {
				return new Promise(n => {
					const o = nn(t);
					if (o && "TEXTAREA" === t.tagName) throw new hn.b(
						"editor-wrong-element: This type of editor cannot be initialized inside <textarea> element.", null);
					const i = new this(t, e);
					n(i.initPlugins().then(() => {
						i.ui.init()
					}).then(() => {
						if (!o && e.initialData) throw new hn.b(
							"editor-create-initial-data: The config.initialData option cannot be used together with initial data passed in Editor.create().",
							null);
						const n = e.initialData || function(t) {
							return nn(t) ? (e = t, e instanceof HTMLTextAreaElement ? e.value : e.innerHTML) : t;
							var e
						}(t);
						return i.data.init(n)
					}).then(() => i.fire("ready")).then(() => i))
				})
			}
		}
		xn(Wl, Ic);
		class Gl {
			constructor(t) {
				this.editor = t, this.set("isEnabled", !0), this._disableStack = new Set
			}
			forceDisabled(t) {
				this._disableStack.add(t), 1 == this._disableStack.size && (this.on("set:isEnabled", Yl, {
					priority: "highest"
				}), this.isEnabled = !1)
			}
			clearForceDisabled(t) {
				this._disableStack.delete(t), 0 == this._disableStack.size && (this.off("set:isEnabled", Yl), this.isEnabled = !
					0)
			}
			destroy() {
				this.stopListening()
			}
			static get isContextPlugin() {
				return !1
			}
		}

		function Yl(t) {
			t.return = !1, t.stop()
		}
		xn(Gl, Ho);
		class $l {
			constructor(t) {
				this.files = function(t) {
					const e = t.files ? Array.from(t.files) : [],
						n = t.items ? Array.from(t.items) : [];
					if (e.length) return e;
					return n.filter(t => "file" === t.kind).map(t => t.getAsFile())
				}(t), this._native = t
			}
			get types() {
				return this._native.types
			}
			getData(t) {
				return this._native.getData(t)
			}
			setData(t, e) {
				this._native.setData(t, e)
			}
		}
		class Kl extends Dr {
			constructor(t) {
				super(t);
				const e = this.document;

				function n(t, n) {
					n.preventDefault();
					const o = n.dropRange ? [n.dropRange] : Array.from(e.selection.getRanges()),
						i = new cn(e, "clipboardInput");
					e.fire(i, {
						dataTransfer: n.dataTransfer,
						targetRanges: o
					}), i.stop.called && n.stopPropagation()
				}
				this.domEventType = ["paste", "copy", "cut", "drop", "dragover"], this.listenTo(e, "paste", n, {
					priority: "low"
				}), this.listenTo(e, "drop", n, {
					priority: "low"
				})
			}
			onDomEvent(t) {
				const e = {
					dataTransfer: new $l(t.clipboardData ? t.clipboardData : t.dataTransfer)
				};
				"drop" == t.type && (e.dropRange = function(t, e) {
					const n = e.target.ownerDocument,
						o = e.clientX,
						i = e.clientY;
					let r;
					n.caretRangeFromPoint && n.caretRangeFromPoint(o, i) ? r = n.caretRangeFromPoint(o, i) : e.rangeParent &&
						(r = n.createRange(), r.setStart(e.rangeParent, e.rangeOffset), r.collapse(!0));
					return r ? t.domConverter.domRangeToView(r) : t.document.selection.getFirstRange()
				}(this.view, t)), this.fire(t.type, t, e)
			}
		}
		const Ql = ["figcaption", "li"];
		class Jl extends Gl {
			static get pluginName() {
				return "Clipboard"
			}
			init() {
				const t = this.editor,
					e = t.model.document,
					n = t.editing.view,
					o = n.document;

				function i(n, i) {
					const r = i.dataTransfer;
					i.preventDefault();
					const s = t.data.toView(t.model.getSelectedContent(e.selection));
					o.fire("clipboardOutput", {
						dataTransfer: r,
						content: s,
						method: n.name
					})
				}
				this._htmlDataProcessor = new Oc(o), n.addObserver(Kl), this.listenTo(o, "clipboardInput", e => {
					t.isReadOnly && e.stop()
				}, {
					priority: "highest"
				}), this.listenTo(o, "clipboardInput", (t, e) => {
					const o = e.dataTransfer;
					let i = "";
					var r;
					o.getData("text/html") ? i = function(t) {
							return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (t, e) => 1 == e.length ?
								" " : e)
						}(o.getData("text/html")) : o.getData("text/plain") && ((r = (r = o.getData("text/plain")).replace(/</g,
							"&lt;").replace(/>/g, "&gt;").replace(/\n/g, "</p><p>").replace(/^\s/, "&nbsp;").replace(/\s$/,
							"&nbsp;").replace(/\s\s/g, " &nbsp;")).indexOf("</p><p>") > -1 && (r = `<p>${r}</p>`), i = r), i = this._htmlDataProcessor
						.toView(i);
					const s = new cn(this, "inputTransformation");
					this.fire(s, {
						content: i,
						dataTransfer: o
					}), s.stop.called && t.stop(), n.scrollToTheSelection()
				}, {
					priority: "low"
				}), this.listenTo(this, "inputTransformation", (t, e) => {
					if (!e.content.isEmpty) {
						const n = this.editor.data,
							o = this.editor.model,
							i = n.toModel(e.content, "$clipboardHolder");
						if (0 == i.childCount) return;
						o.insertContent(i), t.stop()
					}
				}, {
					priority: "low"
				}), this.listenTo(o, "copy", i, {
					priority: "low"
				}), this.listenTo(o, "cut", (e, n) => {
					t.isReadOnly ? n.preventDefault() : i(e, n)
				}, {
					priority: "low"
				}), this.listenTo(o, "clipboardOutput", (n, o) => {
					o.content.isEmpty || (o.dataTransfer.setData("text/html", this._htmlDataProcessor.toData(o.content)), o.dataTransfer
						.setData("text/plain", function t(e) {
							let n = "";
							if (e.is("text") || e.is("textProxy")) n = e.data;
							else if (e.is("img") && e.hasAttribute("alt")) n = e.getAttribute("alt");
							else {
								let o = null;
								for (const i of e.getChildren()) {
									const e = t(i);
									o && (o.is("containerElement") || i.is("containerElement")) && (Ql.includes(o.name) || Ql.includes(i
										.name) ? n += "\n" : n += "\n\n"), n += e, o = i
								}
							}
							return n
						}(o.content))), "cut" == o.method && t.model.deleteContent(e.selection)
				}, {
					priority: "low"
				})
			}
		}
		class Zl {
			constructor(t) {
				this.editor = t, this.set("value", void 0), this.set("isEnabled", !1), this._disableStack = new Set, this.decorate(
					"execute"), this.listenTo(this.editor.model.document, "change", () => {
					this.refresh()
				}), this.on("execute", t => {
					this.isEnabled || t.stop()
				}, {
					priority: "high"
				}), this.listenTo(t, "change:isReadOnly", (t, e, n) => {
					n ? this.forceDisabled("readOnlyMode") : this.clearForceDisabled("readOnlyMode")
				})
			}
			refresh() {
				this.isEnabled = !0
			}
			forceDisabled(t) {
				this._disableStack.add(t), 1 == this._disableStack.size && (this.on("set:isEnabled", Xl, {
					priority: "highest"
				}), this.isEnabled = !1)
			}
			clearForceDisabled(t) {
				this._disableStack.delete(t), 0 == this._disableStack.size && (this.off("set:isEnabled", Xl), this.refresh())
			}
			execute() {}
			destroy() {
				this.stopListening()
			}
		}

		function Xl(t) {
			t.return = !1, t.stop()
		}

		function* td(t, e) {
			for (const n of e) n && t.getAttributeProperties(n[0]).copyOnEnter && (yield n)
		}
		xn(Zl, Ho);
		class ed extends Zl {
			execute() {
				const t = this.editor.model,
					e = t.document;
				t.change(n => {
					! function(t, e, n, o) {
						const i = n.isCollapsed,
							r = n.getFirstRange(),
							s = r.start.parent,
							a = r.end.parent;
						if (o.isLimit(s) || o.isLimit(a)) return void(i || s != a || t.deleteContent(n));
						if (i) {
							const t = td(e.model.schema, n.getAttributes());
							nd(e, r.start), e.setSelectionAttribute(t)
						} else {
							const o = !(r.start.isAtStart && r.end.isAtEnd),
								i = s == a;
							t.deleteContent(n, {
								leaveUnmerged: o
							}), o && (i ? nd(e, n.focus) : e.setSelection(a, 0))
						}
					}(this.editor.model, n, e.selection, t.schema), this.fire("afterExecute", {
						writer: n
					})
				})
			}
		}

		function nd(t, e) {
			t.split(e), t.setSelection(e.parent.nextSibling, 0)
		}
		class od extends gr {
			constructor(t) {
				super(t);
				const e = this.document;
				e.on("keydown", (t, n) => {
					if (this.isEnabled && n.keyCode == mi.enter) {
						let o;
						e.once("enter", t => o = t, {
							priority: "highest"
						}), e.fire("enter", new Rr(e, n.domEvent, {
							isSoft: n.shiftKey
						})), o && o.stop.called && t.stop()
					}
				})
			}
			observe() {}
		}
		class id extends Gl {
			static get pluginName() {
				return "Enter"
			}
			init() {
				const t = this.editor,
					e = t.editing.view,
					n = e.document;
				e.addObserver(od), t.commands.add("enter", new ed(t)), this.listenTo(n, "enter", (n, o) => {
					o.preventDefault(), o.isSoft || (t.execute("enter"), e.scrollToTheSelection())
				}, {
					priority: "low"
				})
			}
		}
		class rd extends Zl {
			execute() {
				const t = this.editor.model,
					e = t.document;
				t.change(n => {
					! function(t, e, n) {
						const o = n.isCollapsed,
							i = n.getFirstRange(),
							r = i.start.parent,
							s = i.end.parent,
							a = r == s;
						if (o) {
							const o = td(t.schema, n.getAttributes());
							sd(t, e, i.end), e.removeSelectionAttribute(n.getAttributeKeys()), e.setSelectionAttribute(o)
						} else {
							const o = !(i.start.isAtStart && i.end.isAtEnd);
							t.deleteContent(n, {
								leaveUnmerged: o
							}), a ? sd(t, e, n.focus) : o && e.setSelection(s, 0)
						}
					}(t, n, e.selection), this.fire("afterExecute", {
						writer: n
					})
				})
			}
			refresh() {
				const t = this.editor.model,
					e = t.document;
				this.isEnabled = function(t, e) {
					if (e.rangeCount > 1) return !1;
					const n = e.anchor;
					if (!n || !t.checkChild(n, "softBreak")) return !1;
					const o = e.getFirstRange(),
						i = o.start.parent,
						r = o.end.parent;
					if ((ad(i, t) || ad(r, t)) && i !== r) return !1;
					return !0
				}(t.schema, e.selection)
			}
		}

		function sd(t, e, n) {
			const o = e.createElement("softBreak");
			t.insertContent(o, n), e.setSelection(o, "after")
		}

		function ad(t, e) {
			return !t.is("rootElement") && (e.isLimit(t) || ad(t.parent, e))
		}
		class cd extends Gl {
			static get pluginName() {
				return "ShiftEnter"
			}
			init() {
				const t = this.editor,
					e = t.model.schema,
					n = t.conversion,
					o = t.editing.view,
					i = o.document;
				e.register("softBreak", {
					allowWhere: "$text",
					isInline: !0
				}), n.for("upcast").elementToElement({
					model: "softBreak",
					view: "br"
				}), n.for("downcast").elementToElement({
					model: "softBreak",
					view: (t, e) => e.createEmptyElement("br")
				}), o.addObserver(od), t.commands.add("shiftEnter", new rd(t)), this.listenTo(i, "enter", (e, n) => {
					n.preventDefault(), n.isSoft && (t.execute("shiftEnter"), o.scrollToTheSelection())
				}, {
					priority: "low"
				})
			}
		}
		class ld extends Zl {
			execute() {
				const t = this.editor.model,
					e = t.document.selection;
				let n = t.schema.getLimitElement(e);
				if (e.containsEntireContent(n) || !dd(t.schema, n))
					do {
						if (n = n.parent, !n) return
					} while (!dd(t.schema, n));
				t.change(t => {
					t.setSelection(n, "in")
				})
			}
		}

		function dd(t, e) {
			return t.isLimit(e) && (t.checkChild(e, "$text") || t.checkChild(e, "paragraph"))
		}
		const ud = bi("Ctrl+A");
		class hd extends Gl {
			static get pluginName() {
				return "SelectAllEditing"
			}
			init() {
				const t = this.editor,
					e = t.editing.view.document;
				t.commands.add("selectAll", new ld(t)), this.listenTo(e, "keydown", (e, n) => {
					pi(n) === ud && (t.execute("selectAll"), n.preventDefault())
				})
			}
		}
		class fd extends Gl {
			static get pluginName() {
				return "SelectAllUI"
			}
			init() {
				const t = this.editor;
				t.ui.componentFactory.add("selectAll", e => {
					const n = t.commands.get("selectAll"),
						o = new El(e),
						i = e.t;
					return o.set({
						label: i("Select all"),
						icon: '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>',
						keystroke: "Ctrl+A",
						tooltip: !0
					}), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => {
						t.execute("selectAll"), t.editing.view.focus()
					}), o
				})
			}
		}
		class gd extends Gl {
			static get requires() {
				return [hd, fd]
			}
			static get pluginName() {
				return "SelectAll"
			}
		}
		class md {
			constructor(t, e = 20) {
				this.model = t, this.size = 0, this.limit = e, this.isLocked = !1, this._changeCallback = (t, e) => {
					"transparent" != e.type && e !== this._batch && this._reset(!0)
				}, this._selectionChangeCallback = () => {
					this._reset()
				}, this.model.document.on("change", this._changeCallback), this.model.document.selection.on("change:range",
					this._selectionChangeCallback), this.model.document.selection.on("change:attribute", this._selectionChangeCallback)
			}
			get batch() {
				return this._batch || (this._batch = this.model.createBatch()), this._batch
			}
			input(t) {
				this.size += t, this.size >= this.limit && this._reset(!0)
			}
			lock() {
				this.isLocked = !0
			}
			unlock() {
				this.isLocked = !1
			}
			destroy() {
				this.model.document.off("change", this._changeCallback), this.model.document.selection.off("change:range",
					this._selectionChangeCallback), this.model.document.selection.off("change:attribute", this._selectionChangeCallback)
			}
			_reset(t) {
				this.isLocked && !t || (this._batch = null, this.size = 0)
			}
		}
		class pd extends Zl {
			constructor(t, e) {
				super(t), this._buffer = new md(t.model, e), this._batches = new WeakSet
			}
			get buffer() {
				return this._buffer
			}
			destroy() {
				super.destroy(), this._buffer.destroy()
			}
			execute(t = {}) {
				const e = this.editor.model,
					n = e.document,
					o = t.text || "",
					i = o.length,
					r = t.range ? e.createSelection(t.range) : n.selection,
					s = t.resultRange;
				e.enqueueChange(this._buffer.batch, t => {
					this._buffer.lock(), e.deleteContent(r), o && e.insertContent(t.createText(o, n.selection.getAttributes()),
							r), s ? t.setSelection(s) : r.is("documentSelection") || t.setSelection(r), this._buffer.unlock(), this._buffer
						.input(i), this._batches.add(this._buffer.batch)
				})
			}
		}
		const bd = [pi("arrowUp"), pi("arrowRight"), pi("arrowDown"), pi("arrowLeft"), 9, 16, 17, 18, 19, 20, 27, 33, 34,
			35, 36, 45, 91, 93, 144, 145, 173, 174, 175, 176, 177, 178, 179, 255
		];
		for (let t = 112; t <= 135; t++) bd.push(t);

		function wd(t) {
			return !!t.ctrlKey || bd.includes(t.keyCode)
		}

		function kd(t) {
			if (t.newChildren.length - t.oldChildren.length != 1) return;
			const e = function(t, e) {
				const n = [];
				let o, i = 0;
				return t.forEach(t => {
					"equal" == t ? (r(), i++) : "insert" == t ? (s("insert") ? o.values.push(e[i]) : (r(), o = {
						type: "insert",
						index: i,
						values: [e[i]]
					}), i++) : s("delete") ? o.howMany++ : (r(), o = {
						type: "delete",
						index: i,
						howMany: 1
					})
				}), r(), n;

				function r() {
					o && (n.push(o), o = null)
				}

				function s(t) {
					return o && o.type == t
				}
			}($i(t.oldChildren, t.newChildren, _d), t.newChildren);
			if (e.length > 1) return;
			const n = e[0];
			return n.values[0] && n.values[0].is("text") ? n : void 0
		}

		function _d(t, e) {
			return t && t.is("text") && e && e.is("text") ? t.data === e.data : t === e
		}
		class vd {
			constructor(t) {
				this.editor = t, this.editing = this.editor.editing
			}
			handle(t, e) {
				if (function(t) {
						if (0 == t.length) return !1;
						for (const e of t)
							if ("children" === e.type && !kd(e)) return !0;
						return !1
					}(t)) this._handleContainerChildrenMutations(t, e);
				else
					for (const n of t) this._handleTextMutation(n, e), this._handleTextNodeInsertion(n)
			}
			_handleContainerChildrenMutations(t, e) {
				const n = function(t) {
					const e = t.map(t => t.node).reduce((t, e) => t.getCommonAncestor(e, {
						includeSelf: !0
					}));
					if (!e) return;
					return e.getAncestors({
						includeSelf: !0,
						parentFirst: !0
					}).find(t => t.is("containerElement") || t.is("rootElement"))
				}(t);
				if (!n) return;
				const o = this.editor.editing.view.domConverter.mapViewToDom(n),
					i = new sr(this.editor.editing.view.document),
					r = this.editor.data.toModel(i.domToView(o)).getChild(0),
					s = this.editor.editing.mapper.toModelElement(n);
				if (!s) return;
				const a = Array.from(r.getChildren()),
					c = Array.from(s.getChildren()),
					l = a[a.length - 1],
					d = c[c.length - 1];
				l && l.is("softBreak") && d && !d.is("softBreak") && a.pop();
				const u = this.editor.model.schema;
				if (!yd(a, u) || !yd(c, u)) return;
				const h = a.map(t => t.is("text") ? t.data : "@").join("").replace(/\u00A0/g, " "),
					f = c.map(t => t.is("text") ? t.data : "@").join("").replace(/\u00A0/g, " ");
				if (f === h) return;
				const g = $i(f, h),
					{
						firstChangeAt: m,
						insertions: p,
						deletions: b
					} = xd(g);
				let w = null;
				e && (w = this.editing.mapper.toModelRange(e.getFirstRange()));
				const k = h.substr(m, p),
					_ = this.editor.model.createRange(this.editor.model.createPositionAt(s, m), this.editor.model.createPositionAt(
						s, m + b));
				this.editor.execute("input", {
					text: k,
					range: _,
					resultRange: w
				})
			}
			_handleTextMutation(t, e) {
				if ("text" != t.type) return;
				const n = t.newText.replace(/\u00A0/g, " "),
					o = t.oldText.replace(/\u00A0/g, " ");
				if (o === n) return;
				const i = $i(o, n),
					{
						firstChangeAt: r,
						insertions: s,
						deletions: a
					} = xd(i);
				let c = null;
				e && (c = this.editing.mapper.toModelRange(e.getFirstRange()));
				const l = this.editing.view.createPositionAt(t.node, r),
					d = this.editing.mapper.toModelPosition(l),
					u = this.editor.model.createRange(d, d.getShiftedBy(a)),
					h = n.substr(r, s);
				this.editor.execute("input", {
					text: h,
					range: u,
					resultRange: c
				})
			}
			_handleTextNodeInsertion(t) {
				if ("children" != t.type) return;
				const e = kd(t),
					n = this.editing.view.createPositionAt(t.node, e.index),
					o = this.editing.mapper.toModelPosition(n),
					i = e.values[0].data;
				this.editor.execute("input", {
					text: i.replace(/\u00A0/g, " "),
					range: this.editor.model.createRange(o)
				})
			}
		}

		function yd(t, e) {
			return t.every(t => e.isInline(t))
		}

		function xd(t) {
			let e = null,
				n = null;
			for (let o = 0; o < t.length; o++) {
				"equal" != t[o] && (e = null === e ? o : e, n = o)
			}
			let o = 0,
				i = 0;
			for (let r = e; r <= n; r++) "insert" != t[r] && o++, "delete" != t[r] && i++;
			return {
				insertions: i,
				deletions: o,
				firstChangeAt: e
			}
		}
		class Ad extends Gl {
			static get pluginName() {
				return "Input"
			}
			init() {
				const t = this.editor,
					e = new pd(t, t.config.get("typing.undoStep") || 20);
				t.commands.add("input", e),
					function(t) {
						let e = null;
						const n = t.model,
							o = t.editing.view,
							i = t.commands.get("input");

						function r(t) {
							const r = n.document,
								a = o.document.isComposing,
								c = e && e.isEqual(r.selection);
							e = null, i.isEnabled && (wd(t) || r.selection.isCollapsed || a && 229 === t.keyCode || !a && 229 === t.keyCode &&
								c || s())
						}

						function s() {
							const t = i.buffer;
							t.lock(), n.enqueueChange(t.batch, () => {
								n.deleteContent(n.document.selection)
							}), t.unlock()
						}
						hi.isAndroid ? o.document.on("beforeinput", (t, e) => r(e), {
							priority: "lowest"
						}) : o.document.on("keydown", (t, e) => r(e), {
							priority: "lowest"
						}), o.document.on("compositionstart", (function() {
							const t = n.document,
								e = 1 !== t.selection.rangeCount || t.selection.getFirstRange().isFlat;
							if (t.selection.isCollapsed || e) return;
							s()
						}), {
							priority: "lowest"
						}), o.document.on("compositionend", () => {
							e = n.createSelection(n.document.selection)
						}, {
							priority: "lowest"
						})
					}(t),
					function(t) {
						t.editing.view.document.on("mutations", (e, n, o) => {
							new vd(t).handle(n, o)
						})
					}(t)
			}
			isInput(t) {
				return this.editor.commands.get("input")._batches.has(t)
			}
		}
		class Cd extends Zl {
			constructor(t, e) {
				super(t), this.direction = e, this._buffer = new md(t.model, t.config.get("typing.undoStep"))
			}
			get buffer() {
				return this._buffer
			}
			execute(t = {}) {
				const e = this.editor.model,
					n = e.document;
				e.enqueueChange(this._buffer.batch, o => {
					this._buffer.lock();
					const i = o.createSelection(t.selection || n.selection),
						r = i.isCollapsed;
					if (i.isCollapsed && e.modifySelection(i, {
							direction: this.direction,
							unit: t.unit
						}), this._shouldEntireContentBeReplacedWithParagraph(t.sequence || 1)) return void this._replaceEntireContentWithParagraph(
						o);
					if (i.isCollapsed) return;
					let s = 0;
					i.getFirstRange().getMinimalFlatRanges().forEach(t => {
						s += ni(t.getWalker({
							singleCharacters: !0,
							ignoreElementEnd: !0,
							shallow: !0
						}))
					}), e.deleteContent(i, {
						doNotResetEntireContent: r,
						direction: this.direction
					}), this._buffer.input(s), o.setSelection(i), this._buffer.unlock()
				})
			}
			_shouldEntireContentBeReplacedWithParagraph(t) {
				if (t > 1) return !1;
				const e = this.editor.model,
					n = e.document.selection,
					o = e.schema.getLimitElement(n);
				if (!(n.isCollapsed && n.containsEntireContent(o))) return !1;
				if (!e.schema.checkChild(o, "paragraph")) return !1;
				const i = o.getChild(0);
				return !i || "paragraph" !== i.name
			}
			_replaceEntireContentWithParagraph(t) {
				const e = this.editor.model,
					n = e.document.selection,
					o = e.schema.getLimitElement(n),
					i = t.createElement("paragraph");
				t.remove(t.createRangeIn(o)), t.insert(i, o), t.setSelection(i, 0)
			}
		}
		class Td extends gr {
			constructor(t) {
				super(t);
				const e = t.document;
				let n = 0;

				function o(t, n, o) {
					let i;
					e.once("delete", t => i = t, {
						priority: Number.POSITIVE_INFINITY
					}), e.fire("delete", new Rr(e, n, o)), i && i.stop.called && t.stop()
				}
				e.on("keyup", (t, e) => {
					e.keyCode != mi.delete && e.keyCode != mi.backspace || (n = 0)
				}), e.on("keydown", (t, e) => {
					const i = {};
					if (e.keyCode == mi.delete) i.direction = "forward", i.unit = "character";
					else {
						if (e.keyCode != mi.backspace) return;
						i.direction = "backward", i.unit = "codePoint"
					}
					const r = hi.isMac ? e.altKey : e.ctrlKey;
					i.unit = r ? "word" : i.unit, i.sequence = ++n, o(t, e.domEvent, i)
				}), hi.isAndroid && e.on("beforeinput", (e, n) => {
					if ("deleteContentBackward" != n.domEvent.inputType) return;
					const i = {
							unit: "codepoint",
							direction: "backward",
							sequence: 1
						},
						r = n.domTarget.ownerDocument.defaultView.getSelection();
					r.anchorNode == r.focusNode && r.anchorOffset + 1 != r.focusOffset && (i.selectionToRemove = t.domConverter
						.domSelectionToView(r)), o(e, n.domEvent, i)
				})
			}
			observe() {}
		}
		class Sd extends Gl {
			static get pluginName() {
				return "Delete"
			}
			init() {
				const t = this.editor,
					e = t.editing.view,
					n = e.document;
				if (e.addObserver(Td), t.commands.add("forwardDelete", new Cd(t, "forward")), t.commands.add("delete", new Cd(
						t, "backward")), this.listenTo(n, "delete", (n, o) => {
						const i = {
							unit: o.unit,
							sequence: o.sequence
						};
						if (o.selectionToRemove) {
							const e = t.model.createSelection(),
								n = [];
							for (const e of o.selectionToRemove.getRanges()) n.push(t.editing.mapper.toModelRange(e));
							e.setTo(n), i.selection = e
						}
						t.execute("forward" == o.direction ? "forwardDelete" : "delete", i), o.preventDefault(), e.scrollToTheSelection()
					}), hi.isAndroid) {
					let t = null;
					this.listenTo(n, "delete", (e, n) => {
						const o = n.domTarget.ownerDocument.defaultView.getSelection();
						t = {
							anchorNode: o.anchorNode,
							anchorOffset: o.anchorOffset,
							focusNode: o.focusNode,
							focusOffset: o.focusOffset
						}
					}, {
						priority: "lowest"
					}), this.listenTo(n, "keyup", (e, n) => {
						if (t) {
							const e = n.domTarget.ownerDocument.defaultView.getSelection();
							e.collapse(t.anchorNode, t.anchorOffset), e.extend(t.focusNode, t.focusOffset), t = null
						}
					})
				}
			}
		}
		class Pd extends Gl {
			static get requires() {
				return [Ad, Sd]
			}
			static get pluginName() {
				return "Typing"
			}
		}
		const Ed = new Map;

		function Md(t, e, n) {
			let o = Ed.get(t);
			o || (o = new Map, Ed.set(t, o)), o.set(e, n)
		}

		function Id(t) {
			return [t]
		}

		function Nd(t, e, n = {}) {
			const o = function(t, e) {
				const n = Ed.get(t);
				return n && n.has(e) ? n.get(e) : Id
			}(t.constructor, e.constructor);
			try {
				return o(t = t.clone(), e, n)
			} catch (t) {
				throw t
			}
		}

		function Od(t, e, n) {
			t = t.slice(), e = e.slice();
			const o = new Rd(n.document, n.useRelations, n.forceWeakRemove);
			o.setOriginalOperations(t), o.setOriginalOperations(e);
			const i = o.originalOperations;
			if (0 == t.length || 0 == e.length) return {
				operationsA: t,
				operationsB: e,
				originalOperations: i
			};
			const r = new WeakMap;
			for (const e of t) r.set(e, 0);
			const s = {
				nextBaseVersionA: t[t.length - 1].baseVersion + 1,
				nextBaseVersionB: e[e.length - 1].baseVersion + 1,
				originalOperationsACount: t.length,
				originalOperationsBCount: e.length
			};
			let a = 0;
			for (; a < t.length;) {
				const n = t[a],
					i = r.get(n);
				if (i == e.length) {
					a++;
					continue
				}
				const s = e[i],
					c = Nd(n, s, o.getContext(n, s, !0)),
					l = Nd(s, n, o.getContext(s, n, !1));
				o.updateRelation(n, s), o.setOriginalOperations(c, n), o.setOriginalOperations(l, s);
				for (const t of c) r.set(t, i + l.length);
				t.splice(a, 1, ...c), e.splice(i, 1, ...l)
			}
			if (n.padWithNoOps) {
				const n = t.length - s.originalOperationsACount,
					o = e.length - s.originalOperationsBCount;
				Ld(t, o - n), Ld(e, n - o)
			}
			return Dd(t, s.nextBaseVersionB), Dd(e, s.nextBaseVersionA), {
				operationsA: t,
				operationsB: e,
				originalOperations: i
			}
		}
		class Rd {
			constructor(t, e, n = !1) {
				this.originalOperations = new Map, this._history = t.history, this._useRelations = e, this._forceWeakRemove = !
					!n, this._relations = new Map
			}
			setOriginalOperations(t, e = null) {
				const n = e ? this.originalOperations.get(e) : null;
				for (const e of t) this.originalOperations.set(e, n || e)
			}
			updateRelation(t, e) {
				switch (t.constructor) {
					case ja:
						switch (e.constructor) {
							case Ua:
								t.targetPosition.isEqual(e.sourcePosition) || e.movedRange.containsPosition(t.targetPosition) ? this._setRelation(
									t, e, "insertAtSource") : t.targetPosition.isEqual(e.deletionPosition) ? this._setRelation(t, e,
									"insertBetween") : t.targetPosition.isAfter(e.sourcePosition) && this._setRelation(t, e,
									"moveTargetAfter");
								break;
							case ja:
								t.targetPosition.isEqual(e.sourcePosition) || t.targetPosition.isBefore(e.sourcePosition) ? this._setRelation(
									t, e, "insertBefore") : this._setRelation(t, e, "insertAfter")
						}
						break;
					case Ha:
						switch (e.constructor) {
							case Ua:
								t.splitPosition.isBefore(e.sourcePosition) && this._setRelation(t, e, "splitBefore");
								break;
							case ja:
								(t.splitPosition.isEqual(e.sourcePosition) || t.splitPosition.isBefore(e.sourcePosition)) && this._setRelation(
									t, e, "splitBefore")
						}
						break;
					case Ua:
						switch (e.constructor) {
							case Ua:
								t.targetPosition.isEqual(e.sourcePosition) || this._setRelation(t, e, "mergeTargetNotMoved"), t.sourcePosition
									.isEqual(e.targetPosition) && this._setRelation(t, e, "mergeSourceNotMoved"), t.sourcePosition.isEqual(e
										.sourcePosition) && this._setRelation(t, e, "mergeSameElement");
								break;
							case Ha:
								t.sourcePosition.isEqual(e.splitPosition) && this._setRelation(t, e, "splitAtSource")
						}
						break;
					case za:
						{
							const n = t.newRange;
							if (!n) return;
							switch (e.constructor) {
								case ja:
									{
										const o = Ts._createFromPositionAndShift(e.sourcePosition, e.howMany),
											i = o.containsPosition(n.start) || o.start.isEqual(n.start),
											r = o.containsPosition(n.end) || o.end.isEqual(n.end);!i && !r || o.containsRange(n) || this._setRelation(
											t, e, {
												side: i ? "left" : "right",
												path: i ? n.start.path.slice() : n.end.path.slice()
											});
										break
									}
								case Ua:
									{
										const o = n.start.isEqual(e.targetPosition),
											i = n.start.isEqual(e.deletionPosition),
											r = n.end.isEqual(e.deletionPosition),
											s = n.end.isEqual(e.sourcePosition);
										(o || i || r || s) && this._setRelation(t, e, {
											wasInLeftElement: o,
											wasStartBeforeMergedElement: i,
											wasEndBeforeMergedElement: r,
											wasInRightElement: s
										});
										break
									}
							}
							break
						}
				}
			}
			getContext(t, e, n) {
				return {
					aIsStrong: n,
					aWasUndone: this._wasUndone(t),
					bWasUndone: this._wasUndone(e),
					abRelation: this._useRelations ? this._getRelation(t, e) : null,
					baRelation: this._useRelations ? this._getRelation(e, t) : null,
					forceWeakRemove: this._forceWeakRemove
				}
			}
			_wasUndone(t) {
				const e = this.originalOperations.get(t);
				return e.wasUndone || this._history.isUndoneOperation(e)
			}
			_getRelation(t, e) {
				const n = this.originalOperations.get(e),
					o = this._history.getUndoneOperation(n);
				if (!o) return null;
				const i = this.originalOperations.get(t),
					r = this._relations.get(i);
				return r && r.get(o) || null
			}
			_setRelation(t, e, n) {
				const o = this.originalOperations.get(t),
					i = this.originalOperations.get(e);
				let r = this._relations.get(o);
				r || (r = new Map, this._relations.set(o, r)), r.set(i, n)
			}
		}

		function Dd(t, e) {
			for (const n of t) n.baseVersion = e++
		}

		function Ld(t, e) {
			for (let n = 0; n < e; n++) t.push(new cc(0))
		}

		function jd(t, e, n) {
			const o = t.nodes.getNode(0).getAttribute(e);
			if (o == n) return null;
			const i = new Ts(t.position, t.position.getShiftedBy(t.howMany));
			return new Da(i, e, o, n, 0)
		}

		function Vd(t, e) {
			return null === t.targetPosition._getTransformedByDeletion(e.sourcePosition, e.howMany)
		}

		function zd(t, e) {
			const n = [];
			for (let o = 0; o < t.length; o++) {
				const i = t[o],
					r = new ja(i.start, i.end.offset - i.start.offset, e, 0);
				n.push(r);
				for (let e = o + 1; e < t.length; e++) t[e] = t[e]._getTransformedByMove(r.sourcePosition, r.targetPosition, r
					.howMany)[0];
				e = e._getTransformedByMove(r.sourcePosition, r.targetPosition, r.howMany)
			}
			return n
		}
		Md(Da, Da, (t, e, n) => {
			if (t.key === e.key && t.range.start.hasSameParentAs(e.range.start)) {
				const o = t.range.getDifference(e.range).map(e => new Da(e, t.key, t.oldValue, t.newValue, 0)),
					i = t.range.getIntersection(e.range);
				return i && n.aIsStrong && o.push(new Da(i, e.key, e.newValue, t.newValue, 0)), 0 == o.length ? [new cc(0)] :
					o
			}
			return [t]
		}), Md(Da, Va, (t, e) => {
			if (t.range.start.hasSameParentAs(e.position) && t.range.containsPosition(e.position)) {
				const n = t.range._getTransformedByInsertion(e.position, e.howMany, !e.shouldReceiveAttributes).map(e => new Da(
					e, t.key, t.oldValue, t.newValue, t.baseVersion));
				if (e.shouldReceiveAttributes) {
					const o = jd(e, t.key, t.oldValue);
					o && n.unshift(o)
				}
				return n
			}
			return t.range = t.range._getTransformedByInsertion(e.position, e.howMany, !1)[0], [t]
		}), Md(Da, Ua, (t, e) => {
			const n = [];
			t.range.start.hasSameParentAs(e.deletionPosition) && (t.range.containsPosition(e.deletionPosition) || t.range
				.start.isEqual(e.deletionPosition)) && n.push(Ts._createFromPositionAndShift(e.graveyardPosition, 1));
			const o = t.range._getTransformedByMergeOperation(e);
			return o.isCollapsed || n.push(o), n.map(e => new Da(e, t.key, t.oldValue, t.newValue, t.baseVersion))
		}), Md(Da, ja, (t, e) => function(t, e) {
			const n = Ts._createFromPositionAndShift(e.sourcePosition, e.howMany);
			let o = null,
				i = [];
			n.containsRange(t, !0) ? o = t : t.start.hasSameParentAs(n.start) ? (i = t.getDifference(n), o = t.getIntersection(
				n)) : i = [t];
			const r = [];
			for (let t of i) {
				t = t._getTransformedByDeletion(e.sourcePosition, e.howMany);
				const n = e.getMovedRangeStart(),
					o = t.start.hasSameParentAs(n);
				t = t._getTransformedByInsertion(n, e.howMany, o), r.push(...t)
			}
			o && r.push(o._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany, !1)[0]);
			return r
		}(t.range, e).map(e => new Da(e, t.key, t.oldValue, t.newValue, t.baseVersion))), Md(Da, Ha, (t, e) => {
			if (t.range.end.isEqual(e.insertionPosition)) return e.graveyardPosition || t.range.end.offset++, [t];
			if (t.range.start.hasSameParentAs(e.splitPosition) && t.range.containsPosition(e.splitPosition)) {
				const n = t.clone();
				return n.range = new Ts(e.moveTargetPosition.clone(), t.range.end._getCombined(e.splitPosition, e.moveTargetPosition)),
					t.range.end = e.splitPosition.clone(), t.range.end.stickiness = "toPrevious", [t, n]
			}
			return t.range = t.range._getTransformedBySplitOperation(e), [t]
		}), Md(Va, Da, (t, e) => {
			const n = [t];
			if (t.shouldReceiveAttributes && t.position.hasSameParentAs(e.range.start) && e.range.containsPosition(t.position)) {
				const o = jd(t, e.key, e.newValue);
				o && n.push(o)
			}
			return n
		}), Md(Va, Va, (t, e, n) => (t.position.isEqual(e.position) && n.aIsStrong || (t.position = t.position._getTransformedByInsertOperation(
			e)), [t])), Md(Va, ja, (t, e) => (t.position = t.position._getTransformedByMoveOperation(e), [t])), Md(Va, Ha,
			(t, e) => (t.position = t.position._getTransformedBySplitOperation(e), [t])), Md(Va, Ua, (t, e) => (t.position =
			t.position._getTransformedByMergeOperation(e), [t])), Md(za, Va, (t, e) => (t.oldRange && (t.oldRange = t.oldRange
			._getTransformedByInsertOperation(e)[0]), t.newRange && (t.newRange = t.newRange._getTransformedByInsertOperation(
			e)[0]), [t])), Md(za, za, (t, e, n) => {
			if (t.name == e.name) {
				if (!n.aIsStrong) return [new cc(0)];
				t.oldRange = e.newRange ? e.newRange.clone() : null
			}
			return [t]
		}), Md(za, Ua, (t, e) => (t.oldRange && (t.oldRange = t.oldRange._getTransformedByMergeOperation(e)), t.newRange &&
			(t.newRange = t.newRange._getTransformedByMergeOperation(e)), [t])), Md(za, ja, (t, e, n) => {
			if (t.oldRange && (t.oldRange = Ts._createFromRanges(t.oldRange._getTransformedByMoveOperation(e))), t.newRange) {
				if (n.abRelation) {
					const o = Ts._createFromRanges(t.newRange._getTransformedByMoveOperation(e));
					if ("left" == n.abRelation.side && e.targetPosition.isEqual(t.newRange.start)) return t.newRange.start.path =
						n.abRelation.path, t.newRange.end = o.end, [t];
					if ("right" == n.abRelation.side && e.targetPosition.isEqual(t.newRange.end)) return t.newRange.start = o.start,
						t.newRange.end.path = n.abRelation.path, [t]
				}
				t.newRange = Ts._createFromRanges(t.newRange._getTransformedByMoveOperation(e))
			}
			return [t]
		}), Md(za, Ha, (t, e, n) => {
			if (t.oldRange && (t.oldRange = t.oldRange._getTransformedBySplitOperation(e)), t.newRange) {
				if (n.abRelation) {
					const o = t.newRange._getTransformedBySplitOperation(e);
					return t.newRange.start.isEqual(e.splitPosition) && n.abRelation.wasStartBeforeMergedElement ? t.newRange.start =
						ys._createAt(e.insertionPosition) : t.newRange.start.isEqual(e.splitPosition) && !n.abRelation.wasInLeftElement &&
						(t.newRange.start = ys._createAt(e.moveTargetPosition)), t.newRange.end.isEqual(e.splitPosition) && n.abRelation
						.wasInRightElement ? t.newRange.end = ys._createAt(e.moveTargetPosition) : t.newRange.end.isEqual(e.splitPosition) &&
						n.abRelation.wasEndBeforeMergedElement ? t.newRange.end = ys._createAt(e.insertionPosition) : t.newRange.end =
						o.end, [t]
				}
				t.newRange = t.newRange._getTransformedBySplitOperation(e)
			}
			return [t]
		}), Md(Ua, Va, (t, e) => (t.sourcePosition.hasSameParentAs(e.position) && (t.howMany += e.howMany), t.sourcePosition =
			t.sourcePosition._getTransformedByInsertOperation(e), t.targetPosition = t.targetPosition._getTransformedByInsertOperation(
				e), [t])), Md(Ua, Ua, (t, e, n) => {
			if (t.sourcePosition.isEqual(e.sourcePosition) && t.targetPosition.isEqual(e.targetPosition)) {
				if (n.bWasUndone) {
					const n = e.graveyardPosition.path.slice();
					return n.push(0), t.sourcePosition = new ys(e.graveyardPosition.root, n), t.howMany = 0, [t]
				}
				return [new cc(0)]
			}
			if (t.sourcePosition.isEqual(e.sourcePosition) && !t.targetPosition.isEqual(e.targetPosition) && !n.bWasUndone &&
				"splitAtSource" != n.abRelation) {
				const o = "$graveyard" == t.targetPosition.root.rootName,
					i = "$graveyard" == e.targetPosition.root.rootName,
					r = o && !i;
				if (i && !o || !r && n.aIsStrong) {
					const n = e.targetPosition._getTransformedByMergeOperation(e),
						o = t.targetPosition._getTransformedByMergeOperation(e);
					return [new ja(n, t.howMany, o, 0)]
				}
				return [new cc(0)]
			}
			return t.sourcePosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.sourcePosition = t.sourcePosition
				._getTransformedByMergeOperation(e), t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e),
				t.graveyardPosition.isEqual(e.graveyardPosition) && n.aIsStrong || (t.graveyardPosition = t.graveyardPosition
					._getTransformedByMergeOperation(e)), [t]
		}), Md(Ua, ja, (t, e, n) => {
			const o = Ts._createFromPositionAndShift(e.sourcePosition, e.howMany);
			return "remove" == e.type && !n.bWasUndone && !n.forceWeakRemove && t.deletionPosition.hasSameParentAs(e.sourcePosition) &&
				o.containsPosition(t.sourcePosition) ? [new cc(0)] : (t.sourcePosition.hasSameParentAs(e.targetPosition) &&
					(t.howMany += e.howMany), t.sourcePosition.hasSameParentAs(e.sourcePosition) && (t.howMany -= e.howMany), t
					.sourcePosition = t.sourcePosition._getTransformedByMoveOperation(e), t.targetPosition = t.targetPosition._getTransformedByMoveOperation(
						e), t.graveyardPosition.isEqual(e.targetPosition) || (t.graveyardPosition = t.graveyardPosition._getTransformedByMoveOperation(
						e)), [t])
		}), Md(Ua, Ha, (t, e, n) => {
			if (e.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,
					1), t.deletionPosition.isEqual(e.graveyardPosition) && (t.howMany = e.howMany)), t.targetPosition.isEqual(e
					.splitPosition)) {
				const o = 0 != e.howMany,
					i = e.graveyardPosition && t.deletionPosition.isEqual(e.graveyardPosition);
				if (o || i || "mergeTargetNotMoved" == n.abRelation) return t.sourcePosition = t.sourcePosition._getTransformedBySplitOperation(
					e), [t]
			}
			if (t.sourcePosition.isEqual(e.splitPosition)) {
				if ("mergeSourceNotMoved" == n.abRelation) return t.howMany = 0, t.targetPosition = t.targetPosition._getTransformedBySplitOperation(
					e), [t];
				if ("mergeSameElement" == n.abRelation || t.sourcePosition.offset > 0) return t.sourcePosition = e.moveTargetPosition
					.clone(), t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t]
			}
			return t.sourcePosition.hasSameParentAs(e.splitPosition) && (t.howMany = e.splitPosition.offset), t.sourcePosition =
				t.sourcePosition._getTransformedBySplitOperation(e), t.targetPosition = t.targetPosition._getTransformedBySplitOperation(
					e), [t]
		}), Md(ja, Va, (t, e) => {
			const n = Ts._createFromPositionAndShift(t.sourcePosition, t.howMany)._getTransformedByInsertOperation(e, !1)[
				0];
			return t.sourcePosition = n.start, t.howMany = n.end.offset - n.start.offset, t.targetPosition.isEqual(e.position) ||
				(t.targetPosition = t.targetPosition._getTransformedByInsertOperation(e)), [t]
		}), Md(ja, ja, (t, e, n) => {
			const o = Ts._createFromPositionAndShift(t.sourcePosition, t.howMany),
				i = Ts._createFromPositionAndShift(e.sourcePosition, e.howMany);
			let r, s = n.aIsStrong,
				a = !n.aIsStrong;
			if ("insertBefore" == n.abRelation || "insertAfter" == n.baRelation ? a = !0 : "insertAfter" != n.abRelation &&
				"insertBefore" != n.baRelation || (a = !1), r = t.targetPosition.isEqual(e.targetPosition) && a ? t.targetPosition
				._getTransformedByDeletion(e.sourcePosition, e.howMany) : t.targetPosition._getTransformedByMove(e.sourcePosition,
					e.targetPosition, e.howMany), Vd(t, e) && Vd(e, t)) return [e.getReversed()];
			if (o.containsPosition(e.targetPosition) && o.containsRange(i, !0)) return o.start = o.start._getTransformedByMove(
				e.sourcePosition, e.targetPosition, e.howMany), o.end = o.end._getTransformedByMove(e.sourcePosition, e.targetPosition,
				e.howMany), zd([o], r);
			if (i.containsPosition(t.targetPosition) && i.containsRange(o, !0)) return o.start = o.start._getCombined(e.sourcePosition,
				e.getMovedRangeStart()), o.end = o.end._getCombined(e.sourcePosition, e.getMovedRangeStart()), zd([o], r);
			const c = In(t.sourcePosition.getParentPath(), e.sourcePosition.getParentPath());
			if ("prefix" == c || "extension" == c) return o.start = o.start._getTransformedByMove(e.sourcePosition, e.targetPosition,
				e.howMany), o.end = o.end._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), zd([o], r);
			"remove" != t.type || "remove" == e.type || n.aWasUndone || n.forceWeakRemove ? "remove" == t.type ||
				"remove" != e.type || n.bWasUndone || n.forceWeakRemove || (s = !1) : s = !0;
			const l = [],
				d = o.getDifference(i);
			for (const t of d) {
				t.start = t.start._getTransformedByDeletion(e.sourcePosition, e.howMany), t.end = t.end._getTransformedByDeletion(
					e.sourcePosition, e.howMany);
				const n = "same" == In(t.start.getParentPath(), e.getMovedRangeStart().getParentPath()),
					o = t._getTransformedByInsertion(e.getMovedRangeStart(), e.howMany, n);
				l.push(...o)
			}
			const u = o.getIntersection(i);
			return null !== u && s && (u.start = u.start._getCombined(e.sourcePosition, e.getMovedRangeStart()), u.end =
					u.end._getCombined(e.sourcePosition, e.getMovedRangeStart()), 0 === l.length ? l.push(u) : 1 == l.length ?
					i.start.isBefore(o.start) || i.start.isEqual(o.start) ? l.unshift(u) : l.push(u) : l.splice(1, 0, u)), 0 ===
				l.length ? [new cc(t.baseVersion)] : zd(l, r)
		}), Md(ja, Ha, (t, e, n) => {
			let o = t.targetPosition.clone();
			t.targetPosition.isEqual(e.insertionPosition) && e.graveyardPosition && "moveTargetAfter" != n.abRelation ||
				(o = t.targetPosition._getTransformedBySplitOperation(e));
			const i = Ts._createFromPositionAndShift(t.sourcePosition, t.howMany);
			if (i.end.isEqual(e.insertionPosition)) return e.graveyardPosition || t.howMany++, t.targetPosition = o, [t];
			if (i.start.hasSameParentAs(e.splitPosition) && i.containsPosition(e.splitPosition)) {
				let t = new Ts(e.splitPosition, i.end);
				t = t._getTransformedBySplitOperation(e);
				return zd([new Ts(i.start, e.splitPosition), t], o)
			}
			t.targetPosition.isEqual(e.splitPosition) && "insertAtSource" == n.abRelation && (o = e.moveTargetPosition),
				t.targetPosition.isEqual(e.insertionPosition) && "insertBetween" == n.abRelation && (o = t.targetPosition);
			const r = [i._getTransformedBySplitOperation(e)];
			if (e.graveyardPosition) {
				const o = i.start.isEqual(e.graveyardPosition) || i.containsPosition(e.graveyardPosition);
				t.howMany > 1 && o && !n.aWasUndone && r.push(Ts._createFromPositionAndShift(e.insertionPosition, 1))
			}
			return zd(r, o)
		}), Md(ja, Ua, (t, e, n) => {
			const o = Ts._createFromPositionAndShift(t.sourcePosition, t.howMany);
			if (e.deletionPosition.hasSameParentAs(t.sourcePosition) && o.containsPosition(e.sourcePosition))
				if ("remove" != t.type || n.forceWeakRemove) {
					if (1 == t.howMany) return n.bWasUndone ? (t.sourcePosition = e.graveyardPosition.clone(), t.targetPosition =
						t.targetPosition._getTransformedByMergeOperation(e), [t]) : [new cc(0)]
				} else if (!n.aWasUndone) {
				const n = [];
				let o = e.graveyardPosition.clone(),
					i = e.targetPosition._getTransformedByMergeOperation(e);
				t.howMany > 1 && (n.push(new ja(t.sourcePosition, t.howMany - 1, t.targetPosition, 0)), o = o._getTransformedByMove(
					t.sourcePosition, t.targetPosition, t.howMany - 1), i = i._getTransformedByMove(t.sourcePosition, t.targetPosition,
					t.howMany - 1));
				const r = e.deletionPosition._getCombined(t.sourcePosition, t.targetPosition),
					s = new ja(o, 1, r, 0),
					a = s.getMovedRangeStart().path.slice();
				a.push(0);
				const c = new ys(s.targetPosition.root, a);
				i = i._getTransformedByMove(o, r, 1);
				const l = new ja(i, e.howMany, c, 0);
				return n.push(s), n.push(l), n
			}
			const i = Ts._createFromPositionAndShift(t.sourcePosition, t.howMany)._getTransformedByMergeOperation(e);
			return t.sourcePosition = i.start, t.howMany = i.end.offset - i.start.offset, t.targetPosition = t.targetPosition
				._getTransformedByMergeOperation(e), [t]
		}), Md(Ba, Va, (t, e) => (t.position = t.position._getTransformedByInsertOperation(e), [t])), Md(Ba, Ua, (t, e) =>
			t.position.isEqual(e.deletionPosition) ? (t.position = e.graveyardPosition.clone(), t.position.stickiness =
				"toNext", [t]) : (t.position = t.position._getTransformedByMergeOperation(e), [t])), Md(Ba, ja, (t, e) => (t.position =
			t.position._getTransformedByMoveOperation(e), [t])), Md(Ba, Ba, (t, e, n) => {
			if (t.position.isEqual(e.position)) {
				if (!n.aIsStrong) return [new cc(0)];
				t.oldName = e.newName
			}
			return [t]
		}), Md(Ba, Ha, (t, e) => {
			if ("same" == In(t.position.path, e.splitPosition.getParentPath()) && !e.graveyardPosition) {
				const e = new Ba(t.position.getShiftedBy(1), t.oldName, t.newName, 0);
				return [t, e]
			}
			return t.position = t.position._getTransformedBySplitOperation(e), [t]
		}), Md(Fa, Fa, (t, e, n) => {
			if (t.root === e.root && t.key === e.key) {
				if (!n.aIsStrong || t.newValue === e.newValue) return [new cc(0)];
				t.oldValue = e.newValue
			}
			return [t]
		}), Md(Ha, Va, (t, e) => (t.splitPosition.hasSameParentAs(e.position) && t.splitPosition.offset < e.position.offset &&
			(t.howMany += e.howMany), t.splitPosition = t.splitPosition._getTransformedByInsertOperation(e), t.insertionPosition =
			Ha.getInsertionPosition(t.splitPosition), [t])), Md(Ha, Ua, (t, e, n) => {
			if (!t.graveyardPosition && !n.bWasUndone && t.splitPosition.hasSameParentAs(e.sourcePosition)) {
				const n = e.graveyardPosition.path.slice();
				n.push(0);
				const o = new ys(e.graveyardPosition.root, n),
					i = Ha.getInsertionPosition(new ys(e.graveyardPosition.root, n)),
					r = new Ha(o, 0, null, 0);
				return r.insertionPosition = i, t.splitPosition = t.splitPosition._getTransformedByMergeOperation(e), t.insertionPosition =
					Ha.getInsertionPosition(t.splitPosition), t.graveyardPosition = r.insertionPosition.clone(), t.graveyardPosition
					.stickiness = "toNext", [r, t]
			}
			return t.splitPosition.hasSameParentAs(e.deletionPosition) && !t.splitPosition.isAfter(e.deletionPosition) &&
				t.howMany--, t.splitPosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.splitPosition =
				t.splitPosition._getTransformedByMergeOperation(e), t.insertionPosition = Ha.getInsertionPosition(t.splitPosition),
				t.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedByMergeOperation(e)), [t]
		}), Md(Ha, ja, (t, e, n) => {
			const o = Ts._createFromPositionAndShift(e.sourcePosition, e.howMany);
			if (t.graveyardPosition) {
				const i = o.start.isEqual(t.graveyardPosition) || o.containsPosition(t.graveyardPosition);
				if (!n.bWasUndone && i) {
					const n = t.splitPosition._getTransformedByMoveOperation(e),
						o = t.graveyardPosition._getTransformedByMoveOperation(e),
						i = o.path.slice();
					i.push(0);
					const r = new ys(o.root, i);
					return [new ja(n, t.howMany, r, 0)]
				}
				t.graveyardPosition = t.graveyardPosition._getTransformedByMoveOperation(e)
			}
			if (t.splitPosition.hasSameParentAs(e.sourcePosition) && o.containsPosition(t.splitPosition)) {
				const n = e.howMany - (t.splitPosition.offset - e.sourcePosition.offset);
				return t.howMany -= n, t.splitPosition.hasSameParentAs(e.targetPosition) && t.splitPosition.offset < e.targetPosition
					.offset && (t.howMany += e.howMany), t.splitPosition = e.sourcePosition.clone(), t.insertionPosition = Ha.getInsertionPosition(
						t.splitPosition), [t]
			}
			return !t.splitPosition.isEqual(e.targetPosition) || "insertAtSource" != n.baRelation && "splitBefore" != n.abRelation ?
				(e.sourcePosition.isEqual(e.targetPosition) || (t.splitPosition.hasSameParentAs(e.sourcePosition) && t.splitPosition
						.offset <= e.sourcePosition.offset && (t.howMany -= e.howMany), t.splitPosition.hasSameParentAs(e.targetPosition) &&
						t.splitPosition.offset < e.targetPosition.offset && (t.howMany += e.howMany)), t.splitPosition.stickiness =
					"toNone", t.splitPosition = t.splitPosition._getTransformedByMoveOperation(e), t.splitPosition.stickiness =
					"toNext", t.graveyardPosition ? t.insertionPosition = t.insertionPosition._getTransformedByMoveOperation(e) :
					t.insertionPosition = Ha.getInsertionPosition(t.splitPosition), [t]) : (t.howMany += e.howMany, t.splitPosition =
					t.splitPosition._getTransformedByDeletion(e.sourcePosition, e.howMany), t.insertionPosition = Ha.getInsertionPosition(
						t.splitPosition), [t])
		}), Md(Ha, Ha, (t, e, n) => {
			if (t.splitPosition.isEqual(e.splitPosition)) {
				if (!t.graveyardPosition && !e.graveyardPosition) return [new cc(0)];
				if (t.graveyardPosition && e.graveyardPosition && t.graveyardPosition.isEqual(e.graveyardPosition)) return [
					new cc(0)
				];
				if ("splitBefore" == n.abRelation) return t.howMany = 0, t.graveyardPosition = t.graveyardPosition._getTransformedBySplitOperation(
					e), [t]
			}
			if (t.graveyardPosition && e.graveyardPosition && t.graveyardPosition.isEqual(e.graveyardPosition)) {
				const o = "$graveyard" == t.splitPosition.root.rootName,
					i = "$graveyard" == e.splitPosition.root.rootName,
					r = o && !i;
				if (i && !o || !r && n.aIsStrong) {
					const n = [];
					return e.howMany && n.push(new ja(e.moveTargetPosition, e.howMany, e.splitPosition, 0)), t.howMany && n.push(
						new ja(t.splitPosition, t.howMany, t.moveTargetPosition, 0)), n
				}
				return [new cc(0)]
			}
			if (t.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedBySplitOperation(e)), t.splitPosition
				.isEqual(e.insertionPosition) && "splitBefore" == n.abRelation) return t.howMany++, [t];
			if (e.splitPosition.isEqual(t.insertionPosition) && "splitBefore" == n.baRelation) {
				const n = e.insertionPosition.path.slice();
				n.push(0);
				const o = new ys(e.insertionPosition.root, n);
				return [t, new ja(t.insertionPosition, 1, o, 0)]
			}
			return t.splitPosition.hasSameParentAs(e.splitPosition) && t.splitPosition.offset < e.splitPosition.offset &&
				(t.howMany -= e.howMany), t.splitPosition = t.splitPosition._getTransformedBySplitOperation(e), t.insertionPosition =
				Ha.getInsertionPosition(t.splitPosition), [t]
		});
		class Bd extends Zl {
			constructor(t) {
				super(t), this._stack = [], this._createdBatches = new WeakSet, this.refresh()
			}
			refresh() {
				this.isEnabled = this._stack.length > 0
			}
			addBatch(t) {
				const e = this.editor.model.document.selection,
					n = {
						ranges: e.hasOwnRange ? Array.from(e.getRanges()) : [],
						isBackward: e.isBackward
					};
				this._stack.push({
					batch: t,
					selection: n
				}), this.refresh()
			}
			clearStack() {
				this._stack = [], this.refresh()
			}
			_restoreSelection(t, e, n) {
				const o = this.editor.model,
					i = o.document,
					r = [];
				for (const e of t) {
					const t = Fd(e, n).find(t => t.start.root != i.graveyard);
					t && r.push(t)
				}
				r.length && o.change(t => {
					t.setSelection(r, {
						backward: e
					})
				})
			}
			_undo(t, e) {
				const n = this.editor.model,
					o = n.document;
				this._createdBatches.add(e);
				const i = t.operations.slice().filter(t => t.isDocumentOperation);
				i.reverse();
				for (const t of i) {
					const i = t.baseVersion + 1,
						r = Array.from(o.history.getOperations(i)),
						s = Od([t.getReversed()], r, {
							useRelations: !0,
							document: this.editor.model.document,
							padWithNoOps: !1,
							forceWeakRemove: !0
						}).operationsA;
					for (const i of s) e.addOperation(i), n.applyOperation(i), o.history.setOperationAsUndone(t, i)
				}
			}
		}

		function Fd(t, e) {
			const n = t.getTransformedByOperations(e);
			n.sort((t, e) => t.start.isBefore(e.start) ? -1 : 1);
			for (let t = 1; t < n.length; t++) {
				const e = n[t - 1],
					o = n[t];
				e.end.isTouching(o.start) && (e.end = o.end, n.splice(t, 1), t--)
			}
			return n
		}
		class Ud extends Bd {
			execute(t = null) {
				const e = t ? this._stack.findIndex(e => e.batch == t) : this._stack.length - 1,
					n = this._stack.splice(e, 1)[0],
					o = this.editor.model.createBatch("transparent");
				this.editor.model.enqueueChange(o, () => {
					this._undo(n.batch, o);
					const t = this.editor.model.document.history.getOperations(n.batch.baseVersion);
					this._restoreSelection(n.selection.ranges, n.selection.isBackward, t), this.fire("revert", n.batch, o)
				}), this.refresh()
			}
		}
		class Hd extends Bd {
			execute() {
				const t = this._stack.pop(),
					e = this.editor.model.createBatch("transparent");
				this.editor.model.enqueueChange(e, () => {
					const n = t.batch.operations[t.batch.operations.length - 1].baseVersion + 1,
						o = this.editor.model.document.history.getOperations(n);
					this._restoreSelection(t.selection.ranges, t.selection.isBackward, o), this._undo(t.batch, e)
				}), this.refresh()
			}
		}
		class qd extends Gl {
			static get pluginName() {
				return "UndoEditing"
			}
			constructor(t) {
				super(t), this._batchRegistry = new WeakSet
			}
			init() {
				const t = this.editor;
				this._undoCommand = new Ud(t), this._redoCommand = new Hd(t), t.commands.add("undo", this._undoCommand), t.commands
					.add("redo", this._redoCommand), this.listenTo(t.model, "applyOperation", (t, e) => {
						const n = e[0];
						if (!n.isDocumentOperation) return;
						const o = n.batch,
							i = this._redoCommand._createdBatches.has(o),
							r = this._undoCommand._createdBatches.has(o);
						this._batchRegistry.has(o) || "transparent" == o.type && !i && !r || (i ? this._undoCommand.addBatch(o) :
							r || (this._undoCommand.addBatch(o), this._redoCommand.clearStack()), this._batchRegistry.add(o))
					}, {
						priority: "highest"
					}), this.listenTo(this._undoCommand, "revert", (t, e, n) => {
						this._redoCommand.addBatch(n)
					}), t.keystrokes.set("CTRL+Z", "undo"), t.keystrokes.set("CTRL+Y", "redo"), t.keystrokes.set("CTRL+SHIFT+Z",
						"redo")
			}
		}
		var Wd =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',
			Gd =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';
		class Yd extends Gl {
			init() {
				const t = this.editor,
					e = t.locale,
					n = t.t,
					o = "ltr" == e.uiLanguageDirection ? Wd : Gd,
					i = "ltr" == e.uiLanguageDirection ? Gd : Wd;
				this._addButton("undo", n("Undo"), "CTRL+Z", o), this._addButton("redo", n("Redo"), "CTRL+Y", i)
			}
			_addButton(t, e, n, o) {
				const i = this.editor;
				i.ui.componentFactory.add(t, r => {
					const s = i.commands.get(t),
						a = new El(r);
					return a.set({
						label: e,
						icon: o,
						keystroke: n,
						tooltip: !0
					}), a.bind("isEnabled").to(s, "isEnabled"), this.listenTo(a, "execute", () => {
						i.execute(t), i.editing.view.focus()
					}), a
				})
			}
		}
		class $d extends Gl {
			static get requires() {
				return [qd, Yd]
			}
			static get pluginName() {
				return "Undo"
			}
		}

		function Kd(t) {
			const e = t.next();
			return e.done ? null : e.value
		}
		const Qd = ["left", "right", "center", "justify"];

		function Jd(t) {
			return Qd.includes(t)
		}

		function Zd(t, e) {
			return "rtl" == e.contentLanguageDirection ? "right" === t : "left" === t
		}
		class Xd extends Zl {
			refresh() {
				const t = this.editor.locale,
					e = Kd(this.editor.model.document.selection.getSelectedBlocks());
				this.isEnabled = !!e && this._canBeAligned(e), this.isEnabled && e.hasAttribute("alignment") ? this.value = e
					.getAttribute("alignment") : this.value = "rtl" === t.contentLanguageDirection ? "right" : "left"
			}
			execute(t = {}) {
				const e = this.editor,
					n = e.locale,
					o = e.model,
					i = o.document,
					r = t.value;
				o.change(t => {
					const e = Array.from(i.selection.getSelectedBlocks()).filter(t => this._canBeAligned(t)),
						o = e[0].getAttribute("alignment");
					Zd(r, n) || o === r || !r ? function(t, e) {
						for (const n of t) e.removeAttribute("alignment", n)
					}(e, t) : function(t, e, n) {
						for (const o of t) e.setAttribute("alignment", n, o)
					}(e, t, r)
				})
			}
			_canBeAligned(t) {
				return this.editor.model.schema.checkAttribute(t, "alignment")
			}
		}
		class tu extends Gl {
			static get pluginName() {
				return "AlignmentEditing"
			}
			constructor(t) {
				super(t), t.config.define("alignment", {
					options: [...Qd]
				})
			}
			init() {
				const t = this.editor,
					e = t.locale,
					n = t.model.schema,
					o = t.config.get("alignment.options").filter(Jd);
				n.extend("$block", {
					allowAttributes: "alignment"
				}), t.model.schema.setAttributeProperties("alignment", {
					isFormatting: !0
				});
				const i = function(t) {
					const e = {
						model: {
							key: "alignment",
							values: t.slice()
						},
						view: {}
					};
					for (const n of t) e.view[n] = {
						key: "style",
						value: {
							"text-align": n
						}
					};
					return e
				}(o.filter(t => !Zd(t, e)));
				t.conversion.attributeToAttribute(i), t.commands.add("alignment", new Xd(t))
			}
		}
		var eu =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',
			nu =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>';
		const ou = new Map([
			["left", eu],
			["right", nu],
			["center",
				'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>'
			],
			["justify",
				'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>'
			]
		]);
		class iu extends Gl {
			get localizedOptionTitles() {
				const t = this.editor.t;
				return {
					left: t("Align left"),
					right: t("Align right"),
					center: t("Align center"),
					justify: t("Justify")
				}
			}
			static get pluginName() {
				return "AlignmentUI"
			}
			init() {
				const t = this.editor,
					e = t.ui.componentFactory,
					n = t.t,
					o = t.config.get("alignment.options");
				o.filter(Jd).forEach(t => this._addButton(t)), e.add("alignment", t => {
					const i = jl(t),
						r = o.map(t => e.create("alignment:" + t));
					Vl(i, r), i.buttonView.set({
						label: n("Text alignment"),
						tooltip: !0
					}), i.toolbarView.isVertical = !0, i.toolbarView.ariaLabel = n("Text alignment toolbar"), i.extendTemplate({
						attributes: {
							class: "ck-alignment-dropdown"
						}
					});
					const s = "rtl" === t.contentLanguageDirection ? nu : eu;
					return i.buttonView.bind("icon").toMany(r, "isOn", (...t) => {
						const e = t.findIndex(t => t);
						return e < 0 ? s : r[e].icon
					}), i.bind("isEnabled").toMany(r, "isEnabled", (...t) => t.some(t => t)), i
				})
			}
			_addButton(t) {
				const e = this.editor;
				e.ui.componentFactory.add("alignment:" + t, n => {
					const o = e.commands.get("alignment"),
						i = new El(n);
					return i.set({
						label: this.localizedOptionTitles[t],
						icon: ou.get(t),
						tooltip: !0,
						isToggleable: !0
					}), i.bind("isEnabled").to(o), i.bind("isOn").to(o, "value", e => e === t), this.listenTo(i, "execute", () => {
						e.execute("alignment", {
							value: t
						}), e.editing.view.focus()
					}), i
				})
			}
		}
		class ru extends Zl {
			constructor(t, e) {
				super(t), this.attributeKey = e
			}
			refresh() {
				const t = this.editor.model,
					e = t.document;
				this.value = e.selection.getAttribute(this.attributeKey), this.isEnabled = t.schema.checkAttributeInSelection(
					e.selection, this.attributeKey)
			}
			execute(t = {}) {
				const e = this.editor.model,
					n = e.document.selection,
					o = t.value;
				e.change(t => {
					if (n.isCollapsed) o ? t.setSelectionAttribute(this.attributeKey, o) : t.removeSelectionAttribute(this.attributeKey);
					else {
						const i = e.schema.getValidRanges(n.getRanges(), this.attributeKey);
						for (const e of i) o ? t.setAttribute(this.attributeKey, o, e) : t.removeAttribute(this.attributeKey, e)
					}
				})
			}
		}
		class su extends El {
			constructor(t) {
				super(t);
				const e = this.bindTemplate;
				this.set("color"), this.set("hasBorder"), this.icon =
					'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M16.935 5.328a2 2 0 0 1 0 2.829l-7.778 7.778a2 2 0 0 1-2.829 0L3.5 13.107a1.999 1.999 0 1 1 2.828-2.829l.707.707a1 1 0 0 0 1.414 0l5.658-5.657a2 2 0 0 1 2.828 0z"/><path d="M14.814 6.035L8.448 12.4a1 1 0 0 1-1.414 0l-1.413-1.415A1 1 0 1 0 4.207 12.4l2.829 2.829a1 1 0 0 0 1.414 0l7.778-7.778a1 1 0 1 0-1.414-1.415z"/></svg>',
					this.extendTemplate({
						attributes: {
							style: {
								backgroundColor: e.to("color")
							},
							class: ["ck", "ck-color-grid__tile", e.if("hasBorder", "ck-color-table__color-tile_bordered")]
						}
					})
			}
			render() {
				super.render(), this.iconView.fillColor = "hsl(0, 0%, 100%)"
			}
		}
		n(37);
		class au extends dl {
			constructor(t, e) {
				super(t);
				const n = e && e.colorDefinitions || [],
					o = {};
				e && e.columns && (o.gridTemplateColumns = `repeat( ${e.columns}, 1fr)`), this.set("selectedColor"), this.items =
					this.createCollection(), this.focusTracker = new Lc, this.keystrokes = new Pc, this._focusCycler = new pl({
						focusables: this.items,
						focusTracker: this.focusTracker,
						keystrokeHandler: this.keystrokes,
						actions: {
							focusPrevious: "arrowleft",
							focusNext: "arrowright"
						}
					}), this.items.on("add", (t, e) => {
						e.isOn = e.color === this.selectedColor
					}), n.forEach(t => {
						const e = new su;
						e.set({
							color: t.color,
							label: t.label,
							tooltip: !0,
							hasBorder: t.options.hasBorder
						}), e.on("execute", () => {
							this.fire("execute", {
								value: t.color,
								hasBorder: t.options.hasBorder,
								label: t.label
							})
						}), this.items.add(e)
					}), this.setTemplate({
						tag: "div",
						children: this.items,
						attributes: {
							class: ["ck", "ck-color-grid"],
							style: o
						}
					}), this.on("change:selectedColor", (t, e, n) => {
						for (const t of this.items) t.isOn = t.color === n
					})
			}
			focus() {
				this.items.length && this.items.first.focus()
			}
			focusLast() {
				this.items.length && this.items.last.focus()
			}
			render() {
				super.render();
				for (const t of this.items) this.focusTracker.add(t.element);
				this.items.on("add", (t, e) => {
					this.focusTracker.add(e.element)
				}), this.items.on("remove", (t, e) => {
					this.focusTracker.remove(e.element)
				}), this.keystrokes.listenTo(this.element)
			}
		}
		n(39);
		class cu extends dl {
			constructor(t) {
				super(t), this.set("text"), this.set("for"), this.id = "ck-editor__label_" + dn();
				const e = this.bindTemplate;
				this.setTemplate({
					tag: "label",
					attributes: {
						class: ["ck", "ck-label"],
						id: this.id,
						for: e.to("for")
					},
					children: [{
						text: e.to("text")
					}]
				})
			}
		}
		class lu extends An {
			constructor(t) {
				super(t), this.set("isEmpty", !0)
			}
			add(t, e) {
				this.find(e => e.color === t.color) || (super.add(t, e), this.set("isEmpty", !1))
			}
			remove(t) {
				const e = super.remove(t);
				return 0 === this.length && this.set("isEmpty", !0), e
			}
			hasColor(t) {
				return !!this.find(e => e.color === t)
			}
		}
		xn(lu, Ho);
		n(41);
		class du extends dl {
			constructor(t, {
				colors: e,
				columns: n,
				removeButtonLabel: o,
				documentColorsLabel: i,
				documentColorsCount: r
			}) {
				super(t), this.items = this.createCollection(), this.colorDefinitions = e, this.focusTracker = new Lc, this.keystrokes =
					new Pc, this.set("selectedColor"), this.removeButtonLabel = o, this.columns = n, this.documentColors = new lu,
					this.documentColorsCount = r, this._focusCycler = new pl({
						focusables: this.items,
						focusTracker: this.focusTracker,
						keystrokeHandler: this.keystrokes,
						actions: {
							focusPrevious: "arrowup",
							focusNext: "arrowdown"
						}
					}), this._documentColorsLabel = i, this.setTemplate({
						tag: "div",
						attributes: {
							class: ["ck", "ck-color-table"]
						},
						children: this.items
					}), this.items.add(this._removeColorButton())
			}
			updateDocumentColors(t, e) {
				const n = t.document,
					o = this.documentColorsCount;
				this.documentColors.clear();
				for (const i of n.getRootNames()) {
					const r = n.getRoot(i),
						s = t.createRangeIn(r);
					for (const t of s.getItems())
						if (t.is("textProxy") && t.hasAttribute(e) && (this._addColorToDocumentColors(t.getAttribute(e)), this.documentColors
								.length >= o)) return
				}
			}
			updateSelectedColors() {
				const t = this.documentColorsGrid,
					e = this.staticColorsGrid,
					n = this.selectedColor;
				e.selectedColor = n, t && (t.selectedColor = n)
			}
			render() {
				super.render();
				for (const t of this.items) this.focusTracker.add(t.element);
				this.keystrokes.listenTo(this.element)
			}
			appendGrids() {
				if (!this.staticColorsGrid && (this.staticColorsGrid = this._createStaticColorsGrid(), this.items.add(this.staticColorsGrid),
						this.documentColorsCount)) {
					const t = Wc.bind(this.documentColors, this.documentColors),
						e = new cu(this.locale);
					e.text = this._documentColorsLabel, e.extendTemplate({
						attributes: {
							class: ["ck", "ck-color-grid__label", t.if("isEmpty", "ck-hidden")]
						}
					}), this.items.add(e), this.documentColorsGrid = this._createDocumentColorsGrid(), this.items.add(this.documentColorsGrid)
				}
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			focusLast() {
				this._focusCycler.focusLast()
			}
			_removeColorButton() {
				const t = new El;
				return t.set({
					withText: !0,
					icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.636 9.531l-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',
					tooltip: !0,
					label: this.removeButtonLabel
				}), t.class = "ck-color-table__remove-color", t.on("execute", () => {
					this.fire("execute", {
						value: null
					})
				}), t
			}
			_createStaticColorsGrid() {
				const t = new au(this.locale, {
					colorDefinitions: this.colorDefinitions,
					columns: this.columns
				});
				return t.delegate("execute").to(this), t
			}
			_createDocumentColorsGrid() {
				const t = Wc.bind(this.documentColors, this.documentColors),
					e = new au(this.locale, {
						columns: this.columns
					});
				return e.delegate("execute").to(this), e.extendTemplate({
					attributes: {
						class: t.if("isEmpty", "ck-hidden")
					}
				}), e.items.bindTo(this.documentColors).using(t => {
					const e = new su;
					return e.set({
						color: t.color,
						hasBorder: t.options && t.options.hasBorder
					}), t.label && e.set({
						label: t.label,
						tooltip: !0
					}), e.on("execute", () => {
						this.fire("execute", {
							value: t.color
						})
					}), e
				}), this.documentColors.on("change:isEmpty", (t, n, o) => {
					o && (e.selectedColor = null)
				}), e
			}
			_addColorToDocumentColors(t) {
				const e = this.colorDefinitions.find(e => e.color === t);
				e ? this.documentColors.add(Object.assign({}, e)) : this.documentColors.add({
					color: t,
					label: t,
					options: {
						hasBorder: !1
					}
				})
			}
		}

		function uu(t, e) {
			const n = {
				model: {
					key: t,
					values: []
				},
				view: {},
				upcastAlso: {}
			};
			for (const t of e) n.model.values.push(t.model), n.view[t.model] = t.view, t.upcastAlso && (n.upcastAlso[t.model] =
				t.upcastAlso);
			return n
		}

		function hu(t) {
			return e => e.getStyle(t).replace(/\s/g, "")
		}

		function fu(t) {
			return (e, n) => n.createAttributeElement("span", {
				style: `${t}:${e}`
			}, {
				priority: 7
			})
		}
		class gu extends ru {
			constructor(t) {
				super(t, "fontSize")
			}
		}

		function mu(t) {
			return t.map(t => function(t) {
				if (e = t, "object" == typeof e && e.title && e.model && e.view) return bu(t);
				var e;
				const n = function(t) {
					return pu[t] || pu[t.model]
				}(t);
				if (n) return bu(n);
				if ("default" === t) return {
					model: void 0,
					title: "Default"
				};
				if (function(t) {
						let e;
						if ("object" == typeof t) {
							if (!t.model) throw new hn.b("font-size-invalid-definition: Provided font size definition is invalid.",
								null, t);
							e = parseFloat(t.model)
						} else e = parseFloat(t);
						return isNaN(e)
					}(t)) return;
				return function(t) {
					"number" != typeof t && "string" != typeof t || (t = {
						title: String(t),
						model: parseFloat(t) + "px"
					});
					return t.view = {
						name: "span",
						styles: {
							"font-size": t.model
						}
					}, bu(t)
				}(t)
			}(t)).filter(t => !!t)
		}
		const pu = {
			get tiny() {
				return {
					title: "Tiny",
					model: "tiny",
					view: {
						name: "span",
						classes: "text-tiny",
						priority: 7
					}
				}
			},
			get small() {
				return {
					title: "Small",
					model: "small",
					view: {
						name: "span",
						classes: "text-small",
						priority: 7
					}
				}
			},
			get big() {
				return {
					title: "Big",
					model: "big",
					view: {
						name: "span",
						classes: "text-big",
						priority: 7
					}
				}
			},
			get huge() {
				return {
					title: "Huge",
					model: "huge",
					view: {
						name: "span",
						classes: "text-huge",
						priority: 7
					}
				}
			}
		};

		function bu(t) {
			return t.view.priority || (t.view.priority = 7), t
		}
		class wu extends Gl {
			static get pluginName() {
				return "FontSizeEditing"
			}
			constructor(t) {
				super(t), t.config.define("fontSize", {
					options: ["tiny", "small", "default", "big", "huge"],
					supportAllValues: !1
				})
			}
			init() {
				const t = this.editor;
				t.model.schema.extend("$text", {
					allowAttributes: "fontSize"
				}), t.model.schema.setAttributeProperties("fontSize", {
					isFormatting: !0,
					copyOnEnter: !0
				});
				const e = t.config.get("fontSize.supportAllValues"),
					n = uu("fontSize", mu(this.editor.config.get("fontSize.options")).filter(t => t.model));
				e ? this._prepareAnyValueConverters(n) : t.conversion.attributeToElement(n), t.commands.add("fontSize", new gu(
					t))
			}
			_prepareAnyValueConverters(t) {
				const e = this.editor,
					n = t.model.values.filter(t => !String(t).match(/[\d.]+[\w%]+/));
				if (n.length) throw new hn.b(
					"font-size-invalid-use-of-named-presets: If config.fontSize.supportAllValues is set to true, you need to use numerical values as font size options.",
					null, {
						presets: n
					});
				e.conversion.for("downcast").attributeToElement({
					model: "fontSize",
					view: (t, e) => {
						if (t) return e.createAttributeElement("span", {
							style: "font-size:" + t
						}, {
							priority: 7
						})
					}
				}), e.conversion.for("upcast").attributeToAttribute({
					model: {
						key: "fontSize",
						value: t => t.getStyle("font-size")
					},
					view: {
						name: "span"
					}
				})
			}
		}
		class ku {
			constructor(t, e) {
				e && Vo(this, e), t && this.set(t)
			}
		}
		xn(ku, Ho);
		n(43);
		class _u extends Gl {
			init() {
				const t = this.editor,
					e = t.t,
					n = this._getLocalizedOptions(),
					o = t.commands.get("fontSize");
				t.ui.componentFactory.add("fontSize", i => {
					const r = jl(i);
					return zl(r, function(t, e) {
						const n = new An;
						for (const o of t) {
							const t = {
								type: "button",
								model: new ku({
									commandName: "fontSize",
									commandParam: o.model,
									label: o.title,
									class: "ck-fontsize-option",
									withText: !0
								})
							};
							o.view && o.view.styles && t.model.set("labelStyle", "font-size:" + o.view.styles["font-size"]), o.view &&
								o.view.classes && t.model.set("class", `${t.model.class} ${o.view.classes}`), t.model.bind("isOn").to(
									e, "value", t => t === o.model), n.add(t)
						}
						return n
					}(n, o)), r.buttonView.set({
						label: e("Font Size"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5L7.038 4.785 4.261 11.5h5.555zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13zm7.55 2.279l.779-.779.707.707-2.265 2.265-2.193-2.265.707-.707.765.765V4.825c0-.042 0-.083.002-.123l-.77.77-.707-.707L17.207 2.5l2.265 2.265-.707.707-.782-.782c.002.043.003.089.003.135v10.454z"/></svg>',
						tooltip: !0
					}), r.extendTemplate({
						attributes: {
							class: ["ck-font-size-dropdown"]
						}
					}), r.bind("isEnabled").to(o), this.listenTo(r, "execute", e => {
						t.execute(e.source.commandName, {
							value: e.source.commandParam
						}), t.editing.view.focus()
					}), r
				})
			}
			_getLocalizedOptions() {
				const t = this.editor,
					e = t.t,
					n = {
						Default: e("Default"),
						Tiny: e("Tiny"),
						Small: e("Small"),
						Big: e("Big"),
						Huge: e("Huge")
					};
				return mu(t.config.get("fontSize").options).map(t => {
					const e = n[t.title];
					return e && e != t.title && (t = Object.assign({}, t, {
						title: e
					})), t
				})
			}
		}
		class vu extends ru {
			constructor(t) {
				super(t, "fontFamily")
			}
		}

		function yu(t) {
			return t.map(xu).filter(t => !!t)
		}

		function xu(t) {
			return "object" == typeof t ? t : "default" === t ? {
				title: "Default",
				model: void 0
			} : "string" == typeof t ? function(t) {
				const e = t.replace(/"|'/g, "").split(","),
					n = e[0],
					o = e.map(Au).join(", ");
				return {
					title: n,
					model: o,
					view: {
						name: "span",
						styles: {
							"font-family": o
						},
						priority: 7
					}
				}
			}(t) : void 0
		}

		function Au(t) {
			return (t = t.trim()).indexOf(" ") > 0 && (t = `'${t}'`), t
		}
		class Cu extends Gl {
			static get pluginName() {
				return "FontFamilyEditing"
			}
			constructor(t) {
				super(t), t.config.define("fontFamily", {
					options: ["default", "Arial, Helvetica, sans-serif", "Courier New, Courier, monospace", "Georgia, serif",
						"Lucida Sans Unicode, Lucida Grande, sans-serif", "Tahoma, Geneva, sans-serif",
						"Times New Roman, Times, serif", "Trebuchet MS, Helvetica, sans-serif", "Verdana, Geneva, sans-serif"
					],
					supportAllValues: !1
				})
			}
			init() {
				const t = this.editor;
				t.model.schema.extend("$text", {
					allowAttributes: "fontFamily"
				}), t.model.schema.setAttributeProperties("fontFamily", {
					isFormatting: !0,
					copyOnEnter: !0
				});
				const e = uu("fontFamily", yu(t.config.get("fontFamily.options")).filter(t => t.model));
				t.config.get("fontFamily.supportAllValues") ? this._prepareAnyValueConverters() : t.conversion.attributeToElement(
					e), t.commands.add("fontFamily", new vu(t))
			}
			_prepareAnyValueConverters() {
				const t = this.editor;
				t.conversion.for("downcast").attributeToElement({
					model: "fontFamily",
					view: (t, e) => e.createAttributeElement("span", {
						style: "font-family:" + t
					}, {
						priority: 7
					})
				}), t.conversion.for("upcast").attributeToAttribute({
					model: {
						key: "fontFamily",
						value: t => t.getStyle("font-family")
					},
					view: {
						name: "span",
						styles: {
							"font-family": /.*/
						}
					}
				})
			}
		}
		class Tu extends Gl {
			init() {
				const t = this.editor,
					e = t.t,
					n = this._getLocalizedOptions(),
					o = t.commands.get("fontFamily");
				t.ui.componentFactory.add("fontFamily", i => {
					const r = jl(i);
					return zl(r, function(t, e) {
						const n = new An;
						for (const o of t) {
							const t = {
								type: "button",
								model: new ku({
									commandName: "fontFamily",
									commandParam: o.model,
									label: o.title,
									withText: !0
								})
							};
							t.model.bind("isOn").to(e, "value", t => t === o.model || !(!t || !o.model) && t.split(",")[0].replace(
								/'/g, "").toLowerCase() === o.model.toLowerCase()), o.view && o.view.styles && t.model.set(
								"labelStyle", "font-family: " + o.view.styles["font-family"]), n.add(t)
						}
						return n
					}(n, o)), r.buttonView.set({
						label: e("Font Family"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.03 3h6.149a.75.75 0 1 1 0 1.5h-5.514L11.03 3zm1.27 3h4.879a.75.75 0 1 1 0 1.5h-4.244L12.3 6zm1.27 3h3.609a.75.75 0 1 1 0 1.5h-2.973L13.57 9zm-2.754 2.5L8.038 4.785 5.261 11.5h5.555zm.62 1.5H4.641l-1.666 4.028H1.312l5.789-14h1.875l5.789 14h-1.663L11.436 13z"/></svg>',
						tooltip: !0
					}), r.extendTemplate({
						attributes: {
							class: "ck-font-family-dropdown"
						}
					}), r.bind("isEnabled").to(o), this.listenTo(r, "execute", e => {
						t.execute(e.source.commandName, {
							value: e.source.commandParam
						}), t.editing.view.focus()
					}), r
				})
			}
			_getLocalizedOptions() {
				const t = this.editor,
					e = t.t;
				return yu(t.config.get("fontFamily").options).map(t => ("Default" === t.title && (t.title = e("Default")), t))
			}
		}
		class Su extends ru {
			constructor(t) {
				super(t, "fontColor")
			}
		}
		class Pu extends Gl {
			static get pluginName() {
				return "FontColorEditing"
			}
			constructor(t) {
				super(t), t.config.define("fontColor", {
					colors: [{
						color: "hsl(0, 0%, 0%)",
						label: "Black"
					}, {
						color: "hsl(0, 0%, 30%)",
						label: "Dim grey"
					}, {
						color: "hsl(0, 0%, 60%)",
						label: "Grey"
					}, {
						color: "hsl(0, 0%, 90%)",
						label: "Light grey"
					}, {
						color: "hsl(0, 0%, 100%)",
						label: "White",
						hasBorder: !0
					}, {
						color: "hsl(0, 75%, 60%)",
						label: "Red"
					}, {
						color: "hsl(30, 75%, 60%)",
						label: "Orange"
					}, {
						color: "hsl(60, 75%, 60%)",
						label: "Yellow"
					}, {
						color: "hsl(90, 75%, 60%)",
						label: "Light green"
					}, {
						color: "hsl(120, 75%, 60%)",
						label: "Green"
					}, {
						color: "hsl(150, 75%, 60%)",
						label: "Aquamarine"
					}, {
						color: "hsl(180, 75%, 60%)",
						label: "Turquoise"
					}, {
						color: "hsl(210, 75%, 60%)",
						label: "Light blue"
					}, {
						color: "hsl(240, 75%, 60%)",
						label: "Blue"
					}, {
						color: "hsl(270, 75%, 60%)",
						label: "Purple"
					}],
					columns: 5
				}), t.conversion.for("upcast").elementToAttribute({
					view: {
						name: "span",
						styles: {
							color: /[\s\S]+/
						}
					},
					model: {
						key: "fontColor",
						value: hu("color")
					}
				}), t.conversion.for("downcast").attributeToElement({
					model: "fontColor",
					view: fu("color")
				}), t.commands.add("fontColor", new Su(t)), t.model.schema.extend("$text", {
					allowAttributes: "fontColor"
				}), t.model.schema.setAttributeProperties("fontColor", {
					isFormatting: !0,
					copyOnEnter: !0
				})
			}
		}

		function Eu(t) {
			return "string" == typeof t ? {
				model: t,
				label: t,
				hasBorder: !1,
				view: {
					name: "span",
					styles: {
						color: t
					}
				}
			} : {
				model: t.color,
				label: t.label || t.color,
				hasBorder: void 0 !== t.hasBorder && t.hasBorder,
				view: {
					name: "span",
					styles: {
						color: "" + t.color
					}
				}
			}
		}
		class Mu extends Gl {
			constructor(t, {
				commandName: e,
				icon: n,
				componentName: o,
				dropdownLabel: i
			}) {
				super(t), this.commandName = e, this.componentName = o, this.icon = n, this.dropdownLabel = i, this.columns =
					t.config.get(this.componentName + ".columns"), this.colorTableView
			}
			init() {
				const t = this.editor,
					e = t.locale,
					n = e.t,
					o = t.commands.get(this.commandName);
				const i = function(t, e) {
						const n = t.t,
							o = {
								Black: n("Black"),
								"Dim grey": n("Dim grey"),
								Grey: n("Grey"),
								"Light grey": n("Light grey"),
								White: n("White"),
								Red: n("Red"),
								Orange: n("Orange"),
								Yellow: n("Yellow"),
								"Light green": n("Light green"),
								Green: n("Green"),
								Aquamarine: n("Aquamarine"),
								Turquoise: n("Turquoise"),
								"Light blue": n("Light blue"),
								Blue: n("Blue"),
								Purple: n("Purple")
							};
						return e.map(t => {
							const e = o[t.label];
							return e && e != t.label && (t.label = e), t
						})
					}(e, t.config.get(this.componentName).colors.map(Eu).filter(t => !!t)),
					r = t.config.get(this.componentName + ".documentColors");
				t.ui.componentFactory.add(this.componentName, e => {
					const s = jl(e);
					return this.colorTableView = function({
						dropdownView: t,
						colors: e,
						columns: n,
						removeButtonLabel: o,
						documentColorsLabel: i,
						documentColorsCount: r
					}) {
						const s = t.locale,
							a = new du(s, {
								colors: e,
								columns: n,
								removeButtonLabel: o,
								documentColorsLabel: i,
								documentColorsCount: r
							});
						return t.colorTableView = a, t.panelView.children.add(a), a.delegate("execute").to(t, "execute"), a
					}({
						dropdownView: s,
						colors: i.map(t => ({
							label: t.label,
							color: t.model,
							options: {
								hasBorder: t.hasBorder
							}
						})),
						columns: this.columns,
						removeButtonLabel: n("Remove color"),
						documentColorsLabel: 0 !== r ? n("Document colors") : void 0,
						documentColorsCount: void 0 === r ? this.columns : r
					}), this.colorTableView.bind("selectedColor").to(o, "value"), s.buttonView.set({
						label: this.dropdownLabel,
						icon: this.icon,
						tooltip: !0
					}), s.extendTemplate({
						attributes: {
							class: "ck-color-ui-dropdown"
						}
					}), s.bind("isEnabled").to(o), s.on("execute", (e, n) => {
						t.execute(this.commandName, n), t.editing.view.focus()
					}), s.on("change:isOpen", (e, n, o) => {
						s.colorTableView.appendGrids(), o && (0 !== r && this.colorTableView.updateDocumentColors(t.model, this
							.componentName), this.colorTableView.updateSelectedColors())
					}), s
				})
			}
		}
		class Iu extends Mu {
			constructor(t) {
				super(t, {
					commandName: "fontColor",
					componentName: "fontColor",
					icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.4 10.3L10 4.5l-2.4 5.8h4.8zm.5 1.2H7.1L5.7 15H4.2l5-12h1.6l5 12h-1.5L13 11.5zm3.1 7H4a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></svg>',
					dropdownLabel: (0, t.locale.t)("Font Color")
				})
			}
			static get pluginName() {
				return "FontColorUI"
			}
		}
		class Nu extends ru {
			constructor(t) {
				super(t, "fontBackgroundColor")
			}
		}
		class Ou extends Gl {
			static get pluginName() {
				return "FontBackgroundColorEditing"
			}
			constructor(t) {
				super(t), t.config.define("fontBackgroundColor", {
					colors: [{
						color: "hsl(0, 0%, 0%)",
						label: "Black"
					}, {
						color: "hsl(0, 0%, 30%)",
						label: "Dim grey"
					}, {
						color: "hsl(0, 0%, 60%)",
						label: "Grey"
					}, {
						color: "hsl(0, 0%, 90%)",
						label: "Light grey"
					}, {
						color: "hsl(0, 0%, 100%)",
						label: "White",
						hasBorder: !0
					}, {
						color: "hsl(0, 75%, 60%)",
						label: "Red"
					}, {
						color: "hsl(30, 75%, 60%)",
						label: "Orange"
					}, {
						color: "hsl(60, 75%, 60%)",
						label: "Yellow"
					}, {
						color: "hsl(90, 75%, 60%)",
						label: "Light green"
					}, {
						color: "hsl(120, 75%, 60%)",
						label: "Green"
					}, {
						color: "hsl(150, 75%, 60%)",
						label: "Aquamarine"
					}, {
						color: "hsl(180, 75%, 60%)",
						label: "Turquoise"
					}, {
						color: "hsl(210, 75%, 60%)",
						label: "Light blue"
					}, {
						color: "hsl(240, 75%, 60%)",
						label: "Blue"
					}, {
						color: "hsl(270, 75%, 60%)",
						label: "Purple"
					}],
					columns: 5
				}), t.conversion.for("upcast").elementToAttribute({
					view: {
						name: "span",
						styles: {
							"background-color": /[\s\S]+/
						}
					},
					model: {
						key: "fontBackgroundColor",
						value: hu("background-color")
					}
				}), t.conversion.for("downcast").attributeToElement({
					model: "fontBackgroundColor",
					view: fu("background-color")
				}), t.commands.add("fontBackgroundColor", new Nu(t)), t.model.schema.extend("$text", {
					allowAttributes: "fontBackgroundColor"
				}), t.model.schema.setAttributeProperties("fontBackgroundColor", {
					isFormatting: !0,
					copyOnEnter: !0
				})
			}
		}
		class Ru extends Mu {
			constructor(t) {
				super(t, {
					commandName: "fontBackgroundColor",
					componentName: "fontBackgroundColor",
					icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8.38 9.262H7.62L10 5.506l2.38 5.756zm.532 1.285L14.34 16h1.426L10.804 4H9.196L4.234 16H5.66l1.428-3.453h5.824z"/></svg>',
					dropdownLabel: (0, t.locale.t)("Font Background Color")
				})
			}
			static get pluginName() {
				return "FontBackgroundColorUI"
			}
		}
		class Du {
			constructor(t) {
				this.context = t
			}
			destroy() {
				this.stopListening()
			}
			static get isContextPlugin() {
				return !0
			}
		}
		xn(Du, Ho);
		class Lu extends Du {
			static get pluginName() {
				return "PendingActions"
			}
			init() {
				this.set("hasAny", !1), this._actions = new An({
					idProperty: "_id"
				}), this._actions.delegate("add", "remove").to(this)
			}
			add(t) {
				if ("string" != typeof t) throw new hn.b("pendingactions-add-invalid-message: The message must be a string.",
					this);
				const e = Object.create(Ho);
				return e.set("message", t), this._actions.add(e), this.hasAny = !0, e
			}
			remove(t) {
				this._actions.remove(t), this.hasAny = !!this._actions.length
			}
			get first() {
				return this._actions.get(0)
			} [Symbol.iterator]() {
				return this._actions[Symbol.iterator]()
			}
		}
		class ju {
			constructor() {
				const t = new window.FileReader;
				this._reader = t, this._data = void 0, this.set("loaded", 0), t.onprogress = t => {
					this.loaded = t.loaded
				}
			}
			get error() {
				return this._reader.error
			}
			get data() {
				return this._data
			}
			read(t) {
				const e = this._reader;
				return this.total = t.size, new Promise((n, o) => {
					e.onload = () => {
						const t = e.result;
						this._data = t, n(t)
					}, e.onerror = () => {
						o("error")
					}, e.onabort = () => {
						o("aborted")
					}, this._reader.readAsDataURL(t)
				})
			}
			abort() {
				this._reader.abort()
			}
		}
		xn(ju, Ho);
		class Vu extends Gl {
			static get pluginName() {
				return "FileRepository"
			}
			static get requires() {
				return [Lu]
			}
			init() {
				this.loaders = new An, this.loaders.on("add", () => this._updatePendingAction()), this.loaders.on("remove", () =>
					this._updatePendingAction()), this._loadersMap = new Map, this._pendingAction = null, this.set("uploaded",
					0), this.set("uploadTotal", null), this.bind("uploadedPercent").to(this, "uploaded", this, "uploadTotal", (
					t, e) => e ? t / e * 100 : 0)
			}
			getLoader(t) {
				return this._loadersMap.get(t) || null
			}
			createLoader(t) {
				if (!this.createUploadAdapter) return console.warn(Object(hn.a)(
					"filerepository-no-upload-adapter: Upload adapter is not defined.")), null;
				const e = new zu(Promise.resolve(t), this.createUploadAdapter);
				return this.loaders.add(e), this._loadersMap.set(t, e), t instanceof Promise && e.file.then(t => {
					this._loadersMap.set(t, e)
				}).catch(() => {}), e.on("change:uploaded", () => {
					let t = 0;
					for (const e of this.loaders) t += e.uploaded;
					this.uploaded = t
				}), e.on("change:uploadTotal", () => {
					let t = 0;
					for (const e of this.loaders) e.uploadTotal && (t += e.uploadTotal);
					this.uploadTotal = t
				}), e
			}
			destroyLoader(t) {
				const e = t instanceof zu ? t : this.getLoader(t);
				e._destroy(), this.loaders.remove(e), this._loadersMap.forEach((t, n) => {
					t === e && this._loadersMap.delete(n)
				})
			}
			_updatePendingAction() {
				const t = this.editor.plugins.get(Lu);
				if (this.loaders.length) {
					if (!this._pendingAction) {
						const e = this.editor.t,
							n = t => `${e("Upload in progress")} ${parseInt(t)}%.`;
						this._pendingAction = t.add(n(this.uploadedPercent)), this._pendingAction.bind("message").to(this,
							"uploadedPercent", n)
					}
				} else t.remove(this._pendingAction), this._pendingAction = null
			}
		}
		xn(Vu, Ho);
		class zu {
			constructor(t, e) {
				this.id = dn(), this._filePromiseWrapper = this._createFilePromiseWrapper(t), this._adapter = e(this), this._reader =
					new ju, this.set("status", "idle"), this.set("uploaded", 0), this.set("uploadTotal", null), this.bind(
						"uploadedPercent").to(this, "uploaded", this, "uploadTotal", (t, e) => e ? t / e * 100 : 0), this.set(
						"uploadResponse", null)
			}
			get file() {
				return this._filePromiseWrapper ? this._filePromiseWrapper.promise.then(t => this._filePromiseWrapper ? t :
					null) : Promise.resolve(null)
			}
			get data() {
				return this._reader.data
			}
			read() {
				if ("idle" != this.status) throw new hn.b(
					"filerepository-read-wrong-status: You cannot call read if the status is different than idle.", this);
				return this.status = "reading", this.file.then(t => this._reader.read(t)).then(t => {
					if ("reading" !== this.status) throw this.status;
					return this.status = "idle", t
				}).catch(t => {
					if ("aborted" === t) throw this.status = "aborted", "aborted";
					throw this.status = "error", this._reader.error ? this._reader.error : t
				})
			}
			upload() {
				if ("idle" != this.status) throw new hn.b(
					"filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.", this);
				return this.status = "uploading", this.file.then(() => this._adapter.upload()).then(t => (this.uploadResponse =
					t, this.status = "idle", t)).catch(t => {
					if ("aborted" === this.status) throw "aborted";
					throw this.status = "error", t
				})
			}
			abort() {
				const t = this.status;
				this.status = "aborted", this._filePromiseWrapper.isFulfilled ? "reading" == t ? this._reader.abort() :
					"uploading" == t && this._adapter.abort && this._adapter.abort() : (this._filePromiseWrapper.promise.catch(() => {}),
						this._filePromiseWrapper.rejecter("aborted")), this._destroy()
			}
			_destroy() {
				this._filePromiseWrapper = void 0, this._reader = void 0, this._adapter = void 0, this.uploadResponse = void 0
			}
			_createFilePromiseWrapper(t) {
				const e = {};
				return e.promise = new Promise((n, o) => {
					e.rejecter = o, e.isFulfilled = !1, t.then(t => {
						e.isFulfilled = !0, n(t)
					}).catch(t => {
						e.isFulfilled = !0, o(t)
					})
				}), e
			}
		}
		xn(zu, Ho);

		function Bu() {
			let t = function(t) {
				t = t.toLowerCase();
				const e = document.cookie.split(";");
				for (const n of e) {
					const e = n.split("=");
					if (decodeURIComponent(e[0].trim().toLowerCase()) === t) return decodeURIComponent(e[1])
				}
				return null
			}("ckCsrfToken");
			var e, n;
			return t && 40 == t.length || (t = function(t) {
					let e = "";
					const n = new Uint8Array(t);
					window.crypto.getRandomValues(n);
					for (let t = 0; t < n.length; t++) {
						const o = "abcdefghijklmnopqrstuvwxyz0123456789".charAt(n[t] % "abcdefghijklmnopqrstuvwxyz0123456789".length);
						e += Math.random() > .5 ? o.toUpperCase() : o
					}
					return e
				}(40), e = "ckCsrfToken", n = t, document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(n) +
				";path=/"), t
		}
		class Fu extends Gl {
			static get requires() {
				return [Vu]
			}
			static get pluginName() {
				return "CKFinderUploadAdapter"
			}
			init() {
				const t = this.editor.config.get("ckfinder.uploadUrl");
				t && (this.editor.plugins.get(Vu).createUploadAdapter = e => new Uu(e, t, this.editor.t))
			}
		}
		class Uu {
			constructor(t, e, n) {
				this.loader = t, this.url = e, this.t = n
			}
			upload() {
				return this.loader.file.then(t => new Promise((e, n) => {
					this._initRequest(), this._initListeners(e, n, t), this._sendRequest(t)
				}))
			}
			abort() {
				this.xhr && this.xhr.abort()
			}
			_initRequest() {
				const t = this.xhr = new XMLHttpRequest;
				t.open("POST", this.url, !0), t.responseType = "json"
			}
			_initListeners(t, e, n) {
				const o = this.xhr,
					i = this.loader,
					r = (0, this.t)("Cannot upload file:") + ` ${n.name}.`;
				o.addEventListener("error", () => e(r)), o.addEventListener("abort", () => e()), o.addEventListener("load", () => {
					const n = o.response;
					if (!n || !n.uploaded) return e(n && n.error && n.error.message ? n.error.message : r);
					t({
						default: n.url
					})
				}), o.upload && o.upload.addEventListener("progress", t => {
					t.lengthComputable && (i.uploadTotal = t.total, i.uploaded = t.loaded)
				})
			}
			_sendRequest(t) {
				const e = new FormData;
				e.append("upload", t), e.append("ckCsrfToken", Bu()), this.xhr.send(e)
			}
		}

		function Hu(t, e, n, o) {
			let i, r = null;
			"function" == typeof o ? i = o : (r = t.commands.get(o), i = () => {
				t.execute(o)
			}), t.model.document.on("change:data", (o, s) => {
				if (r && !r.isEnabled || !e.isEnabled) return;
				if ("transparent" == s.type) return;
				const a = Array.from(t.model.document.differ.getChanges()),
					c = a[0];
				if (1 != a.length || "insert" !== c.type || "$text" != c.name || 1 != c.length) return;
				const l = c.position.parent;
				if (!l.is("paragraph") || 1 !== l.childCount) return;
				const d = n.exec(l.getChild(0).data);
				d && t.model.enqueueChange(t => {
					const e = t.createPositionAt(l, 0),
						n = t.createPositionAt(l, d[0].length),
						o = new js(e, n);
					!1 !== i({
						match: d
					}) && t.remove(o), o.detach()
				})
			})
		}

		function qu(t, e, n, o) {
			let i, r;
			n instanceof RegExp ? i = n : r = n, r = r || (t => {
				let e;
				const n = [],
					o = [];
				for (; null !== (e = i.exec(t)) && !(e && e.length < 4);) {
					let {
						index: t,
						1: i,
						2: r,
						3: s
					} = e;
					const a = i + r + s;
					t += e[0].length - a.length;
					const c = [t, t + i.length],
						l = [t + i.length + r.length, t + i.length + r.length + s.length];
					n.push(c), n.push(l), o.push([t + i.length, t + i.length + r.length])
				}
				return {
					remove: n,
					format: o
				}
			}), t.model.document.on("change:data", (n, i) => {
				if ("transparent" == i.type || !e.isEnabled) return;
				const s = t.model,
					a = s.document.selection;
				if (!a.isCollapsed) return;
				const c = Array.from(s.document.differ.getChanges()),
					l = c[0];
				if (1 != c.length || "insert" !== l.type || "$text" != l.name || 1 != l.length) return;
				const d = a.focus,
					u = d.parent,
					{
						text: h,
						range: f
					} = function(t, e) {
						let n = t.start;
						return {
							text: Array.from(t.getItems()).reduce((t, o) => !o.is("text") && !o.is("textProxy") || o.getAttribute(
								"code") ? (n = e.createPositionAfter(o), "") : t + o.data, ""),
							range: e.createRange(n, t.end)
						}
					}(s.createRange(s.createPositionAt(u, 0), d), s),
					g = r(h),
					m = Wu(f.start, g.format, s),
					p = Wu(f.start, g.remove, s);
				m.length && p.length && s.enqueueChange(t => {
					if (!1 !== o(t, m))
						for (const e of p.reverse()) t.remove(e)
				})
			})
		}

		function Wu(t, e, n) {
			return e.filter(t => void 0 !== t[0] && void 0 !== t[1]).map(e => n.createRange(t.getShiftedBy(e[0]), t.getShiftedBy(
				e[1])))
		}

		function Gu(t, e) {
			return (n, o) => {
				if (!t.commands.get(e).isEnabled) return !1;
				const i = t.model.schema.getValidRanges(o, e);
				for (const t of i) n.setAttribute(e, !0, t);
				n.removeSelectionAttribute(e)
			}
		}
		class Yu extends Zl {
			constructor(t, e) {
				super(t), this.attributeKey = e
			}
			refresh() {
				const t = this.editor.model,
					e = t.document;
				this.value = this._getValueFromFirstAllowedNode(), this.isEnabled = t.schema.checkAttributeInSelection(e.selection,
					this.attributeKey)
			}
			execute(t = {}) {
				const e = this.editor.model,
					n = e.document.selection,
					o = void 0 === t.forceValue ? !this.value : t.forceValue;
				e.change(t => {
					if (n.isCollapsed) o ? t.setSelectionAttribute(this.attributeKey, !0) : t.removeSelectionAttribute(this.attributeKey);
					else {
						const i = e.schema.getValidRanges(n.getRanges(), this.attributeKey);
						for (const e of i) o ? t.setAttribute(this.attributeKey, o, e) : t.removeAttribute(this.attributeKey, e)
					}
				})
			}
			_getValueFromFirstAllowedNode() {
				const t = this.editor.model,
					e = t.schema,
					n = t.document.selection;
				if (n.isCollapsed) return n.hasAttribute(this.attributeKey);
				for (const t of n.getRanges())
					for (const n of t.getItems())
						if (e.checkAttribute(n, this.attributeKey)) return n.hasAttribute(this.attributeKey);
				return !1
			}
		}
		class $u extends Gl {
			static get pluginName() {
				return "BoldEditing"
			}
			init() {
				const t = this.editor;
				t.model.schema.extend("$text", {
					allowAttributes: "bold"
				}), t.model.schema.setAttributeProperties("bold", {
					isFormatting: !0,
					copyOnEnter: !0
				}), t.conversion.attributeToElement({
					model: "bold",
					view: "strong",
					upcastAlso: ["b", t => {
						const e = t.getStyle("font-weight");
						return e ? "bold" == e || Number(e) >= 600 ? {
							name: !0,
							styles: ["font-weight"]
						} : void 0 : null
					}]
				}), t.commands.add("bold", new Yu(t, "bold")), t.keystrokes.set("CTRL+B", "bold")
			}
		}
		class Ku extends Gl {
			init() {
				const t = this.editor,
					e = t.t;
				t.ui.componentFactory.add("bold", n => {
					const o = t.commands.get("bold"),
						i = new El(n);
					return i.set({
						label: e("Bold"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',
						keystroke: "CTRL+B",
						tooltip: !0,
						isToggleable: !0
					}), i.bind("isOn", "isEnabled").to(o, "value", "isEnabled"), this.listenTo(i, "execute", () => {
						t.execute("bold"), t.editing.view.focus()
					}), i
				})
			}
		}
		class Qu extends Gl {
			static get pluginName() {
				return "ItalicEditing"
			}
			init() {
				const t = this.editor;
				t.model.schema.extend("$text", {
					allowAttributes: "italic"
				}), t.model.schema.setAttributeProperties("italic", {
					isFormatting: !0,
					copyOnEnter: !0
				}), t.conversion.attributeToElement({
					model: "italic",
					view: "i",
					upcastAlso: ["em", {
						styles: {
							"font-style": "italic"
						}
					}]
				}), t.commands.add("italic", new Yu(t, "italic")), t.keystrokes.set("CTRL+I", "italic")
			}
		}
		class Ju extends Gl {
			init() {
				const t = this.editor,
					e = t.t;
				t.ui.componentFactory.add("italic", n => {
					const o = t.commands.get("italic"),
						i = new El(n);
					return i.set({
						label: e("Italic"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',
						keystroke: "CTRL+I",
						tooltip: !0,
						isToggleable: !0
					}), i.bind("isOn", "isEnabled").to(o, "value", "isEnabled"), this.listenTo(i, "execute", () => {
						t.execute("italic"), t.editing.view.focus()
					}), i
				})
			}
		}
		class Zu extends Gl {
			static get pluginName() {
				return "StrikethroughEditing"
			}
			init() {
				const t = this.editor;
				t.model.schema.extend("$text", {
					allowAttributes: "strikethrough"
				}), t.model.schema.setAttributeProperties("strikethrough", {
					isFormatting: !0,
					copyOnEnter: !0
				}), t.conversion.attributeToElement({
					model: "strikethrough",
					view: "s",
					upcastAlso: ["del", "strike", {
						styles: {
							"text-decoration": "line-through"
						}
					}]
				}), t.commands.add("strikethrough", new Yu(t, "strikethrough")), t.keystrokes.set("CTRL+SHIFT+X",
					"strikethrough")
			}
		}
		class Xu extends Gl {
			init() {
				const t = this.editor,
					e = t.t;
				t.ui.componentFactory.add("strikethrough", n => {
					const o = t.commands.get("strikethrough"),
						i = new El(n);
					return i.set({
						label: e("Strikethrough"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.4c-.8-.4-1.5-.9-2.2-1.5a.6.6 0 0 1-.2-.5l.3-.6h1c1 1.2 2.1 1.7 3.7 1.7 1 0 1.8-.3 2.3-.6.6-.4.6-1.2.6-1.3.2-1.2-.9-2.1-.9-2.1h2.1c.3.7.4 1.2.4 1.7v.8l-.6 1.2c-.6.8-1.1 1-1.6 1.2a6 6 0 0 1-2.4.6c-1 0-1.8-.3-2.5-.6zM6.8 9L6 8.3c-.4-.5-.5-.8-.5-1.6 0-.7.1-1.3.5-1.8.4-.6 1-1 1.6-1.3a6.3 6.3 0 0 1 4.7 0 4 4 0 0 1 1.7 1l.3.7c0 .1.2.4-.2.7-.4.2-.9.1-1 0a3 3 0 0 0-1.2-1c-.4-.2-1-.3-2-.4-.7 0-1.4.2-2 .6-.8.6-1 .8-1 1.5 0 .8.5 1 1.2 1.5.6.4 1.1.7 1.9 1H6.8z"/><path d="M3 10.5V9h14v1.5z"/></svg>',
						keystroke: "CTRL+SHIFT+X",
						tooltip: !0,
						isToggleable: !0
					}), i.bind("isOn", "isEnabled").to(o, "value", "isEnabled"), this.listenTo(i, "execute", () => {
						t.execute("strikethrough"), t.editing.view.focus()
					}), i
				})
			}
		}
		class th extends Gl {
			static get pluginName() {
				return "UnderlineEditing"
			}
			init() {
				const t = this.editor;
				t.model.schema.extend("$text", {
					allowAttributes: "underline"
				}), t.model.schema.setAttributeProperties("underline", {
					isFormatting: !0,
					copyOnEnter: !0
				}), t.conversion.attributeToElement({
					model: "underline",
					view: "u",
					upcastAlso: {
						styles: {
							"text-decoration": "underline"
						}
					}
				}), t.commands.add("underline", new Yu(t, "underline")), t.keystrokes.set("CTRL+U", "underline")
			}
		}
		class eh extends Gl {
			init() {
				const t = this.editor,
					e = t.t;
				t.ui.componentFactory.add("underline", n => {
					const o = t.commands.get("underline"),
						i = new El(n);
					return i.set({
						label: e("Underline"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"/></svg>',
						keystroke: "CTRL+U",
						tooltip: !0,
						isToggleable: !0
					}), i.bind("isOn", "isEnabled").to(o, "value", "isEnabled"), this.listenTo(i, "execute", () => {
						t.execute("underline"), t.editing.view.focus()
					}), i
				})
			}
		}
		class nh extends Zl {
			refresh() {
				this.value = this._getValue(), this.isEnabled = this._checkEnabled()
			}
			execute(t = {}) {
				const e = this.editor.model,
					n = e.schema,
					o = e.document.selection,
					i = Array.from(o.getSelectedBlocks()),
					r = void 0 === t.forceValue ? !this.value : t.forceValue;
				e.change(t => {
					if (r) {
						const e = i.filter(t => oh(t) || rh(n, t));
						this._applyQuote(t, e)
					} else this._removeQuote(t, i.filter(oh))
				})
			}
			_getValue() {
				const t = Kd(this.editor.model.document.selection.getSelectedBlocks());
				return !(!t || !oh(t))
			}
			_checkEnabled() {
				if (this.value) return !0;
				const t = this.editor.model.document.selection,
					e = this.editor.model.schema,
					n = Kd(t.getSelectedBlocks());
				return !!n && rh(e, n)
			}
			_removeQuote(t, e) {
				ih(t, e).reverse().forEach(e => {
					if (e.start.isAtStart && e.end.isAtEnd) return void t.unwrap(e.start.parent);
					if (e.start.isAtStart) {
						const n = t.createPositionBefore(e.start.parent);
						return void t.move(e, n)
					}
					e.end.isAtEnd || t.split(e.end);
					const n = t.createPositionAfter(e.end.parent);
					t.move(e, n)
				})
			}
			_applyQuote(t, e) {
				const n = [];
				ih(t, e).reverse().forEach(e => {
					let o = oh(e.start);
					o || (o = t.createElement("blockQuote"), t.wrap(e, o)), n.push(o)
				}), n.reverse().reduce((e, n) => e.nextSibling == n ? (t.merge(t.createPositionAfter(e)), e) : n)
			}
		}

		function oh(t) {
			return "blockQuote" == t.parent.name ? t.parent : null
		}

		function ih(t, e) {
			let n, o = 0;
			const i = [];
			for (; o < e.length;) {
				const r = e[o],
					s = e[o + 1];
				n || (n = t.createPositionBefore(r)), s && r.nextSibling == s || (i.push(t.createRange(n, t.createPositionAfter(
					r))), n = null), o++
			}
			return i
		}

		function rh(t, e) {
			const n = t.checkChild(e.parent, "blockQuote"),
				o = t.checkChild(["$root", "blockQuote"], e);
			return n && o
		}
		class sh extends Gl {
			static get pluginName() {
				return "BlockQuoteEditing"
			}
			init() {
				const t = this.editor,
					e = t.model.schema;
				t.commands.add("blockQuote", new nh(t)), e.register("blockQuote", {
					allowWhere: "$block",
					allowContentOf: "$root"
				}), e.addChildCheck((t, e) => {
					if (t.endsWith("blockQuote") && "blockQuote" == e.name) return !1
				}), t.conversion.elementToElement({
					model: "blockQuote",
					view: "blockquote"
				}), t.model.document.registerPostFixer(n => {
					const o = t.model.document.differ.getChanges();
					for (const t of o)
						if ("insert" == t.type) {
							const o = t.position.nodeAfter;
							if (!o) continue;
							if (o.is("blockQuote") && o.isEmpty) return n.remove(o), !0;
							if (o.is("blockQuote") && !e.checkChild(t.position, o)) return n.unwrap(o), !0;
							if (o.is("element")) {
								const t = n.createRangeIn(o);
								for (const o of t.getItems())
									if (o.is("blockQuote") && !e.checkChild(n.createPositionBefore(o), o)) return n.unwrap(o), !0
							}
						} else if ("remove" == t.type) {
						const e = t.position.parent;
						if (e.is("blockQuote") && e.isEmpty) return n.remove(e), !0
					}
					return !1
				})
			}
			afterInit() {
				const t = this.editor.commands.get("blockQuote");
				this.listenTo(this.editor.editing.view.document, "enter", (e, n) => {
					const o = this.editor.model.document,
						i = o.selection.getLastPosition().parent;
					o.selection.isCollapsed && i.isEmpty && t.value && (this.editor.execute("blockQuote"), this.editor.editing
						.view.scrollToTheSelection(), n.preventDefault(), e.stop())
				})
			}
		}
		n(45);
		class ah extends Gl {
			init() {
				const t = this.editor,
					e = t.t;
				t.ui.componentFactory.add("blockQuote", n => {
					const o = t.commands.get("blockQuote"),
						i = new El(n);
					return i.set({
						label: e("Block quote"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',
						tooltip: !0,
						isToggleable: !0
					}), i.bind("isOn", "isEnabled").to(o, "value", "isEnabled"), this.listenTo(i, "execute", () => {
						t.execute("blockQuote"), t.editing.view.focus()
					}), i
				})
			}
		}
		class ch extends Gl {
			static get pluginName() {
				return "CKFinderUI"
			}
			init() {
				const t = this.editor,
					e = t.ui.componentFactory,
					n = t.t;
				e.add("ckfinder", e => {
					const o = t.commands.get("ckfinder"),
						i = new El(e);
					return i.set({
						label: n("Insert image or file"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',
						tooltip: !0
					}), i.bind("isEnabled").to(o), i.on("execute", () => {
						t.execute("ckfinder"), t.editing.view.focus()
					}), i
				})
			}
		}
		class lh extends gr {
			observe(t) {
				this.listenTo(t, "load", (t, e) => {
					"IMG" == e.target.tagName && this._fireEvents(e)
				}, {
					useCapture: !0
				})
			}
			_fireEvents(t) {
				this.isEnabled && (this.document.fire("layoutChanged"), this.document.fire("imageLoaded", t))
			}
		}
		class dh {
			constructor() {
				this._stack = []
			}
			add(t, e) {
				const n = this._stack,
					o = n[0];
				this._insertDescriptor(t);
				const i = n[0];
				o === i || uh(o, i) || this.fire("change:top", {
					oldDescriptor: o,
					newDescriptor: i,
					writer: e
				})
			}
			remove(t, e) {
				const n = this._stack,
					o = n[0];
				this._removeDescriptor(t);
				const i = n[0];
				o === i || uh(o, i) || this.fire("change:top", {
					oldDescriptor: o,
					newDescriptor: i,
					writer: e
				})
			}
			_insertDescriptor(t) {
				const e = this._stack,
					n = e.findIndex(e => e.id === t.id);
				if (uh(t, e[n])) return;
				n > -1 && e.splice(n, 1);
				let o = 0;
				for (; e[o] && hh(e[o], t);) o++;
				e.splice(o, 0, t)
			}
			_removeDescriptor(t) {
				const e = this._stack,
					n = e.findIndex(e => e.id === t);
				n > -1 && e.splice(n, 1)
			}
		}

		function uh(t, e) {
			return t && e && t.priority == e.priority && fh(t.classes) == fh(e.classes)
		}

		function hh(t, e) {
			return t.priority > e.priority || !(t.priority < e.priority) && fh(t.classes) > fh(e.classes)
		}

		function fh(t) {
			return Array.isArray(t) ? t.sort().join(",") : t
		}

		function gh(t) {
			return e => e + t
		}
		xn(dh, mn);
		n(47);
		const mh = gh("px"),
			ph = nr.document.body;
		class bh extends dl {
			constructor(t) {
				super(t);
				const e = this.bindTemplate;
				this.set("top", 0), this.set("left", 0), this.set("position", "arrow_nw"), this.set("isVisible", !1), this.set(
					"withArrow", !0), this.set("class"), this.content = this.createCollection(), this.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck", "ck-balloon-panel", e.to("position", t => "ck-balloon-panel_" + t), e.if("isVisible",
							"ck-balloon-panel_visible"), e.if("withArrow", "ck-balloon-panel_with-arrow"), e.to("class")],
						style: {
							top: e.to("top", mh),
							left: e.to("left", mh)
						}
					},
					children: this.content
				})
			}
			show() {
				this.isVisible = !0
			}
			hide() {
				this.isVisible = !1
			}
			attachTo(t) {
				this.show();
				const e = bh.defaultPositions,
					n = Object.assign({}, {
						element: this.element,
						positions: [e.southArrowNorth, e.southArrowNorthMiddleWest, e.southArrowNorthMiddleEast, e.southArrowNorthWest,
							e.southArrowNorthEast, e.northArrowSouth, e.northArrowSouthMiddleWest, e.northArrowSouthMiddleEast, e.northArrowSouthWest,
							e.northArrowSouthEast
						],
						limiter: ph,
						fitInViewport: !0
					}, t),
					o = bh._getOptimalPosition(n),
					i = parseInt(o.left),
					r = parseInt(o.top),
					s = o.name;
				Object.assign(this, {
					top: r,
					left: i,
					position: s
				})
			}
			pin(t) {
				this.unpin(), this._pinWhenIsVisibleCallback = () => {
					this.isVisible ? this._startPinning(t) : this._stopPinning()
				}, this._startPinning(t), this.listenTo(this, "change:isVisible", this._pinWhenIsVisibleCallback)
			}
			unpin() {
				this._pinWhenIsVisibleCallback && (this._stopPinning(), this.stopListening(this, "change:isVisible", this._pinWhenIsVisibleCallback),
					this._pinWhenIsVisibleCallback = null, this.hide())
			}
			_startPinning(t) {
				this.attachTo(t);
				const e = wh(t.target),
					n = t.limiter ? wh(t.limiter) : ph;
				this.listenTo(nr.document, "scroll", (o, i) => {
					const r = i.target,
						s = e && r.contains(e),
						a = n && r.contains(n);
					!s && !a && e && n || this.attachTo(t)
				}, {
					useCapture: !0
				}), this.listenTo(nr.window, "resize", () => {
					this.attachTo(t)
				})
			}
			_stopPinning() {
				this.stopListening(nr.document, "scroll"), this.stopListening(nr.window, "resize")
			}
		}

		function wh(t) {
			return nn(t) ? t : Zr(t) ? t.commonAncestorContainer : "function" == typeof t ? wh(t()) : null
		}

		function kh(t, e) {
			return t.top - e.height - bh.arrowVerticalOffset
		}

		function _h(t) {
			return t.bottom + bh.arrowVerticalOffset
		}
		bh.arrowHorizontalOffset = 25, bh.arrowVerticalOffset = 10, bh._getOptimalPosition = yl, bh.defaultPositions = {
			northWestArrowSouthWest: (t, e) => ({
				top: kh(t, e),
				left: t.left - bh.arrowHorizontalOffset,
				name: "arrow_sw"
			}),
			northWestArrowSouthMiddleWest: (t, e) => ({
				top: kh(t, e),
				left: t.left - .25 * e.width - bh.arrowHorizontalOffset,
				name: "arrow_smw"
			}),
			northWestArrowSouth: (t, e) => ({
				top: kh(t, e),
				left: t.left - e.width / 2,
				name: "arrow_s"
			}),
			northWestArrowSouthMiddleEast: (t, e) => ({
				top: kh(t, e),
				left: t.left - .75 * e.width + bh.arrowHorizontalOffset,
				name: "arrow_sme"
			}),
			northWestArrowSouthEast: (t, e) => ({
				top: kh(t, e),
				left: t.left - e.width + bh.arrowHorizontalOffset,
				name: "arrow_se"
			}),
			northArrowSouthWest: (t, e) => ({
				top: kh(t, e),
				left: t.left + t.width / 2 - bh.arrowHorizontalOffset,
				name: "arrow_sw"
			}),
			northArrowSouthMiddleWest: (t, e) => ({
				top: kh(t, e),
				left: t.left + t.width / 2 - .25 * e.width - bh.arrowHorizontalOffset,
				name: "arrow_smw"
			}),
			northArrowSouth: (t, e) => ({
				top: kh(t, e),
				left: t.left + t.width / 2 - e.width / 2,
				name: "arrow_s"
			}),
			northArrowSouthMiddleEast: (t, e) => ({
				top: kh(t, e),
				left: t.left + t.width / 2 - .75 * e.width + bh.arrowHorizontalOffset,
				name: "arrow_sme"
			}),
			northArrowSouthEast: (t, e) => ({
				top: kh(t, e),
				left: t.left + t.width / 2 - e.width + bh.arrowHorizontalOffset,
				name: "arrow_se"
			}),
			northEastArrowSouthWest: (t, e) => ({
				top: kh(t, e),
				left: t.right - bh.arrowHorizontalOffset,
				name: "arrow_sw"
			}),
			northEastArrowSouthMiddleWest: (t, e) => ({
				top: kh(t, e),
				left: t.right - .25 * e.width - bh.arrowHorizontalOffset,
				name: "arrow_smw"
			}),
			northEastArrowSouth: (t, e) => ({
				top: kh(t, e),
				left: t.right - e.width / 2,
				name: "arrow_s"
			}),
			northEastArrowSouthMiddleEast: (t, e) => ({
				top: kh(t, e),
				left: t.right - .75 * e.width + bh.arrowHorizontalOffset,
				name: "arrow_sme"
			}),
			northEastArrowSouthEast: (t, e) => ({
				top: kh(t, e),
				left: t.right - e.width + bh.arrowHorizontalOffset,
				name: "arrow_se"
			}),
			southWestArrowNorthWest: (t, e) => ({
				top: _h(t),
				left: t.left - bh.arrowHorizontalOffset,
				name: "arrow_nw"
			}),
			southWestArrowNorthMiddleWest: (t, e) => ({
				top: _h(t),
				left: t.left - .25 * e.width - bh.arrowHorizontalOffset,
				name: "arrow_nmw"
			}),
			southWestArrowNorth: (t, e) => ({
				top: _h(t),
				left: t.left - e.width / 2,
				name: "arrow_n"
			}),
			southWestArrowNorthMiddleEast: (t, e) => ({
				top: _h(t),
				left: t.left - .75 * e.width + bh.arrowHorizontalOffset,
				name: "arrow_nme"
			}),
			southWestArrowNorthEast: (t, e) => ({
				top: _h(t),
				left: t.left - e.width + bh.arrowHorizontalOffset,
				name: "arrow_ne"
			}),
			southArrowNorthWest: (t, e) => ({
				top: _h(t),
				left: t.left + t.width / 2 - bh.arrowHorizontalOffset,
				name: "arrow_nw"
			}),
			southArrowNorthMiddleWest: (t, e) => ({
				top: _h(t),
				left: t.left + t.width / 2 - .25 * e.width - bh.arrowHorizontalOffset,
				name: "arrow_nmw"
			}),
			southArrowNorth: (t, e) => ({
				top: _h(t),
				left: t.left + t.width / 2 - e.width / 2,
				name: "arrow_n"
			}),
			southArrowNorthMiddleEast: (t, e) => ({
				top: _h(t),
				left: t.left + t.width / 2 - .75 * e.width + bh.arrowHorizontalOffset,
				name: "arrow_nme"
			}),
			southArrowNorthEast: (t, e) => ({
				top: _h(t),
				left: t.left + t.width / 2 - e.width + bh.arrowHorizontalOffset,
				name: "arrow_ne"
			}),
			southEastArrowNorthWest: (t, e) => ({
				top: _h(t),
				left: t.right - bh.arrowHorizontalOffset,
				name: "arrow_nw"
			}),
			southEastArrowNorthMiddleWest: (t, e) => ({
				top: _h(t),
				left: t.right - .25 * e.width - bh.arrowHorizontalOffset,
				name: "arrow_nmw"
			}),
			southEastArrowNorth: (t, e) => ({
				top: _h(t),
				left: t.right - e.width / 2,
				name: "arrow_n"
			}),
			southEastArrowNorthMiddleEast: (t, e) => ({
				top: _h(t),
				left: t.right - .75 * e.width + bh.arrowHorizontalOffset,
				name: "arrow_nme"
			}),
			southEastArrowNorthEast: (t, e) => ({
				top: _h(t),
				left: t.right - e.width + bh.arrowHorizontalOffset,
				name: "arrow_ne"
			})
		};

		function vh(t, e, n) {
			return t && xh(t) && !n.isInline(e)
		}

		function yh(t) {
			return t.getAttribute("widget-type-around")
		}

		function xh(t) {
			return !!t.is("element") && !!t.getCustomProperty("widget")
		}

		function Ah(t, e, n = {}) {
			return e.setAttribute("contenteditable", "false", t), e.addClass("ck-widget", t), e.setCustomProperty("widget",
				!0, t), t.getFillerOffset = Mh, n.label && function(t, e, n) {
				n.setCustomProperty("widgetLabel", e, t)
			}(t, n.label, e), n.hasSelectionHandle && function(t, e) {
				const n = e.createUIElement("div", {
					class: "ck ck-widget__selection-handle"
				}, (function(t) {
					const e = this.toDomElement(t),
						n = new Sl;
					return n.set("content",
						'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>'
					), n.render(), e.appendChild(n.element), e
				}));
				e.insert(e.createPositionAt(t, 0), n), e.addClass(["ck-widget_with-selection-handle"], t)
			}(t, e), Ch(t, e, (t, e, n) => n.addClass(o(e.classes), t), (t, e, n) => n.removeClass(o(e.classes), t)), t;

			function o(t) {
				return Array.isArray(t) ? t : [t]
			}
		}

		function Ch(t, e, n, o) {
			const i = new dh;
			i.on("change:top", (e, i) => {
				i.oldDescriptor && o(t, i.oldDescriptor, i.writer), i.newDescriptor && n(t, i.newDescriptor, i.writer)
			}), e.setCustomProperty("addHighlight", (t, e, n) => i.add(e, n), t), e.setCustomProperty("removeHighlight", (
				t, e, n) => i.remove(e, n), t)
		}

		function Th(t) {
			const e = t.getCustomProperty("widgetLabel");
			return e ? "function" == typeof e ? e() : e : ""
		}

		function Sh(t, e) {
			return e.addClass(["ck-editor__editable", "ck-editor__nested-editable"], t), e.setAttribute("contenteditable",
				t.isReadOnly ? "false" : "true", t), t.on("change:isReadOnly", (n, o, i) => {
				e.setAttribute("contenteditable", i ? "false" : "true", t)
			}), t.on("change:isFocused", (n, o, i) => {
				i ? e.addClass("ck-editor__nested-editable_focused", t) : e.removeClass("ck-editor__nested-editable_focused",
					t)
			}), t
		}

		function Ph(t, e) {
			const n = t.getSelectedElement();
			if (n) {
				const o = yh(t);
				if (o) return e.createPositionAt(n, o);
				if (e.schema.isBlock(n)) return e.createPositionAfter(n)
			}
			const o = t.getSelectedBlocks().next().value;
			if (o) {
				if (o.isEmpty) return e.createPositionAt(o, 0);
				const n = e.createPositionAfter(o);
				return t.focus.isTouching(n) ? n : e.createPositionBefore(o)
			}
			return t.focus
		}

		function Eh(t, e) {
			const n = new es(nr.window),
				o = n.getIntersection(t),
				i = e.height + bh.arrowVerticalOffset;
			if (t.top - i > n.top || t.bottom + i < n.bottom) return null;
			const r = o || t,
				s = r.left + r.width / 2 - e.width / 2;
			return {
				top: Math.max(t.top, 0) + bh.arrowVerticalOffset,
				left: s,
				name: "arrow_n"
			}
		}

		function Mh() {
			return null
		}

		function Ih(t) {
			const e = t.getSelectedElement();
			return e && function(t) {
				return !!t.getCustomProperty("image") && xh(t)
			}(e) ? e : null
		}

		function Nh(t) {
			return !!t && t.is("image")
		}

		function Oh(t, e, n = {}) {
			const o = t.createElement("image", n),
				i = Ph(e.document.selection, e);
			e.insertContent(o, i), o.parent && t.setSelection(o, "on")
		}

		function Rh(t) {
			const e = t.schema,
				n = t.document.selection;
			return function(t, e, n) {
				const o = function(t, e) {
					const n = Ph(t, e).parent;
					if (n.isEmpty && !n.is("$root")) return n.parent;
					return n
				}(t, n);
				return e.checkChild(o, "image")
			}(n, e, t) && ! function(t, e) {
				const n = t.getSelectedElement();
				return n && e.isObject(n)
			}(n, e) && function(t) {
				return [...t.focus.getAncestors()].every(t => !t.is("image"))
			}(n)
		}

		function Dh(t) {
			const e = [];
			for (const n of t.getChildren()) e.push(n), n.is("element") && e.push(...n.getChildren());
			return e.find(t => t.is("img"))
		}

		function Lh(t) {
			return n => {
				n.on(`attribute:${t}:image`, e)
			};

			function e(t, e, n) {
				if (!n.consumable.consume(e.item, t.name)) return;
				const o = n.writer,
					i = Dh(n.mapper.toViewElement(e.item));
				o.setAttribute(e.attributeKey, e.attributeNewValue || "", i)
			}
		}
		class jh extends Zl {
			refresh() {
				this.isEnabled = Rh(this.editor.model)
			}
			execute(t) {
				const e = this.editor.model;
				e.change(n => {
					const o = Array.isArray(t.source) ? t.source : [t.source];
					for (const t of o) Oh(n, e, {
						src: t
					})
				})
			}
		}
		class Vh extends Gl {
			static get pluginName() {
				return "ImageEditing"
			}
			init() {
				const t = this.editor,
					e = t.model.schema,
					n = t.t,
					o = t.conversion;
				t.editing.view.addObserver(lh), e.register("image", {
					isObject: !0,
					isBlock: !0,
					allowWhere: "$block",
					allowAttributes: ["alt", "src", "srcset"]
				}), o.for("dataDowncast").elementToElement({
					model: "image",
					view: (t, e) => zh(e)
				}), o.for("editingDowncast").elementToElement({
					model: "image",
					view: (t, e) => {
						return o = zh(e), i = e, r = n("image widget"), i.setCustomProperty("image", !0, o), Ah(o, i, {
							label: function() {
								const t = Dh(o).getAttribute("alt");
								return t ? `${t} ${r}` : r
							}
						});
						var o, i, r
					}
				}), o.for("downcast").add(Lh("src")).add(Lh("alt")).add(function() {
					return e => {
						e.on("attribute:srcset:image", t)
					};

					function t(t, e, n) {
						if (!n.consumable.consume(e.item, t.name)) return;
						const o = n.writer,
							i = Dh(n.mapper.toViewElement(e.item));
						if (null === e.attributeNewValue) {
							const t = e.attributeOldValue;
							t.data && (o.removeAttribute("srcset", i), o.removeAttribute("sizes", i), t.width && o.removeAttribute(
								"width", i))
						} else {
							const t = e.attributeNewValue;
							t.data && (o.setAttribute("srcset", t.data, i), o.setAttribute("sizes", "100vw", i), t.width && o.setAttribute(
								"width", t.width, i))
						}
					}
				}()), o.for("upcast").elementToElement({
					view: {
						name: "img",
						attributes: {
							src: !0
						}
					},
					model: (t, e) => e.createElement("image", {
						src: t.getAttribute("src")
					})
				}).attributeToAttribute({
					view: {
						name: "img",
						key: "alt"
					},
					model: "alt"
				}).attributeToAttribute({
					view: {
						name: "img",
						key: "srcset"
					},
					model: {
						key: "srcset",
						value: t => {
							const e = {
								data: t.getAttribute("srcset")
							};
							return t.hasAttribute("width") && (e.width = t.getAttribute("width")), e
						}
					}
				}).add(function() {
					return e => {
						e.on("element:figure", t)
					};

					function t(t, e, n) {
						if (!n.consumable.test(e.viewItem, {
								name: !0,
								classes: "image"
							})) return;
						const o = Dh(e.viewItem);
						if (!o || !o.hasAttribute("src") || !n.consumable.test(o, {
								name: !0
							})) return;
						const i = n.convertItem(o, e.modelCursor),
							r = Kd(i.modelRange.getItems());
						r && (n.convertChildren(e.viewItem, n.writer.createPositionAt(r, 0)), e.modelRange = i.modelRange, e.modelCursor =
							i.modelCursor)
					}
				}()), t.commands.add("imageInsert", new jh(t))
			}
		}

		function zh(t) {
			const e = t.createEmptyElement("img"),
				n = t.createContainerElement("figure", {
					class: "image"
				});
			return t.insert(t.createPositionAt(n, 0), e), n
		}
		class Bh extends Dr {
			constructor(t) {
				super(t), this.domEventType = "mousedown"
			}
			onDomEvent(t) {
				this.fire(t.type, t)
			}
		}
		class Fh {
			constructor(t, e, n) {
				this.model = t, this.attribute = n, this._modelSelection = t.document.selection, this._overrideUid = null,
					this._isNextGravityRestorationSkipped = !1, e.listenTo(this._modelSelection, "change:range", (t, e) => {
						this._isNextGravityRestorationSkipped ? this._isNextGravityRestorationSkipped = !1 : this._isGravityOverridden &&
							(!e.directChange && Uh(this._modelSelection.getFirstPosition(), n) || this._restoreGravity())
					})
			}
			handleForwardMovement(t, e) {
				const n = this.attribute;
				if (!(this._isGravityOverridden || t.isAtStart && this._hasSelectionAttribute)) return Wh(t, n) && this._hasSelectionAttribute ?
					(this._preventCaretMovement(e), this._removeSelectionAttribute(), !0) : Hh(t, n) || qh(t, n) && this._hasSelectionAttribute ?
					(this._preventCaretMovement(e), this._overrideGravity(), !0) : void 0
			}
			handleBackwardMovement(t, e) {
				const n = this.attribute;
				return this._isGravityOverridden ? Wh(t, n) && this._hasSelectionAttribute ? (this._preventCaretMovement(e),
						this._restoreGravity(), this._removeSelectionAttribute(), !0) : (this._preventCaretMovement(e), this._restoreGravity(),
						t.isAtStart && this._removeSelectionAttribute(), !0) : Wh(t, n) && !this._hasSelectionAttribute ? (this._preventCaretMovement(
						e), this._setSelectionAttributeFromTheNodeBefore(t), !0) : t.isAtEnd && qh(t, n) ? this._hasSelectionAttribute ?
					void(Gh(t, n) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity())) : (this._preventCaretMovement(
						e), this._setSelectionAttributeFromTheNodeBefore(t), !0) : t.isAtStart ? this._hasSelectionAttribute ? (
						this._removeSelectionAttribute(), this._preventCaretMovement(e), !0) : void 0 : void(Gh(t, n) && (this._skipNextAutomaticGravityRestoration(),
						this._overrideGravity()))
			}
			get _isGravityOverridden() {
				return !!this._overrideUid
			}
			get _hasSelectionAttribute() {
				return this._modelSelection.hasAttribute(this.attribute)
			}
			_overrideGravity() {
				this._overrideUid = this.model.change(t => t.overrideSelectionGravity())
			}
			_restoreGravity() {
				this.model.change(t => {
					t.restoreSelectionGravity(this._overrideUid), this._overrideUid = null
				})
			}
			_preventCaretMovement(t) {
				t.preventDefault()
			}
			_removeSelectionAttribute() {
				this.model.change(t => {
					t.removeSelectionAttribute(this.attribute)
				})
			}
			_setSelectionAttributeFromTheNodeBefore(t) {
				const e = this.attribute;
				this.model.change(n => {
					n.setSelectionAttribute(this.attribute, t.nodeBefore.getAttribute(e))
				})
			}
			_skipNextAutomaticGravityRestoration() {
				this._isNextGravityRestorationSkipped = !0
			}
		}

		function Uh(t, e) {
			return Hh(t, e) || qh(t, e)
		}

		function Hh(t, e) {
			const {
				nodeBefore: n,
				nodeAfter: o
			} = t, i = !!n && n.hasAttribute(e);
			return !!o && o.hasAttribute(e) && (!i || n.getAttribute(e) !== o.getAttribute(e))
		}

		function qh(t, e) {
			const {
				nodeBefore: n,
				nodeAfter: o
			} = t, i = !!n && n.hasAttribute(e), r = !!o && o.hasAttribute(e);
			return i && (!r || n.getAttribute(e) !== o.getAttribute(e))
		}

		function Wh(t, e) {
			const {
				nodeBefore: n,
				nodeAfter: o
			} = t, i = !!n && n.hasAttribute(e);
			if (!!o && o.hasAttribute(e) && i) return o.getAttribute(e) !== n.getAttribute(e)
		}

		function Gh(t, e) {
			return Uh(t.getShiftedBy(-1), e)
		}

		function Yh(t, e, n) {
			return n.createRange($h(t, e, !0, n), $h(t, e, !1, n))
		}

		function $h(t, e, n, o) {
			let i = t.textNode || (n ? t.nodeBefore : t.nodeAfter),
				r = null;
			for (; i && i.getAttribute("linkHref") == e;) r = i, i = n ? i.previousSibling : i.nextSibling;
			return r ? o.createPositionAt(r, n ? "before" : "after") : t
		}
		class Kh extends Zl {
			constructor(t) {
				super(t), this.manualDecorators = new An
			}
			restoreManualDecoratorStates() {
				for (const t of this.manualDecorators) t.value = this._getDecoratorStateFromModel(t.id)
			}
			refresh() {
				const t = this.editor.model,
					e = t.document,
					n = Kd(e.selection.getSelectedBlocks());
				n && n.is("image") && t.schema.checkAttribute("image", "linkHref") ? (this.value = n.getAttribute("linkHref"),
					this.isEnabled = t.schema.checkAttribute(n, "linkHref")) : (this.value = e.selection.getAttribute(
					"linkHref"), this.isEnabled = t.schema.checkAttributeInSelection(e.selection, "linkHref"));
				for (const t of this.manualDecorators) t.value = this._getDecoratorStateFromModel(t.id)
			}
			execute(t, e = {}) {
				const n = this.editor.model,
					o = n.document.selection,
					i = [],
					r = [];
				for (const t in e) e[t] ? i.push(t) : r.push(t);
				n.change(e => {
					if (o.isCollapsed) {
						const s = o.getFirstPosition();
						if (o.hasAttribute("linkHref")) {
							const a = Yh(s, o.getAttribute("linkHref"), n);
							e.setAttribute("linkHref", t, a), i.forEach(t => {
								e.setAttribute(t, !0, a)
							}), r.forEach(t => {
								e.removeAttribute(t, a)
							}), e.setSelection(e.createPositionAfter(a.end.nodeBefore))
						} else if ("" !== t) {
							const r = Ln(o.getAttributes());
							r.set("linkHref", t), i.forEach(t => {
								r.set(t, !0)
							});
							const a = e.createText(t, r);
							n.insertContent(a, s), e.setSelection(e.createPositionAfter(a))
						} ["linkHref", ...i, ...r].forEach(t => {
							e.removeSelectionAttribute(t)
						})
					} else {
						const s = n.schema.getValidRanges(o.getRanges(), "linkHref"),
							a = [];
						for (const t of o.getSelectedBlocks()) n.schema.checkAttribute(t, "linkHref") && a.push(e.createRangeOn(t));
						const c = a.slice();
						for (const t of s) this._isRangeToUpdate(t, a) && c.push(t);
						for (const n of c) e.setAttribute("linkHref", t, n), i.forEach(t => {
							e.setAttribute(t, !0, n)
						}), r.forEach(t => {
							e.removeAttribute(t, n)
						})
					}
				})
			}
			_getDecoratorStateFromModel(t) {
				return this.editor.model.document.selection.getAttribute(t)
			}
			_isRangeToUpdate(t, e) {
				for (const n of e)
					if (n.containsRange(t)) return !1;
				return !0
			}
		}
		class Qh extends Zl {
			refresh() {
				const t = this.editor.model,
					e = t.document,
					n = Kd(e.selection.getSelectedBlocks());
				n && n.is("image") && t.schema.checkAttribute("image", "linkHref") ? this.isEnabled = t.schema.checkAttribute(
					n, "linkHref") : this.isEnabled = t.schema.checkAttributeInSelection(e.selection, "linkHref")
			}
			execute() {
				const t = this.editor,
					e = this.editor.model,
					n = e.document.selection,
					o = t.commands.get("link");
				e.change(t => {
					const i = n.isCollapsed ? [Yh(n.getFirstPosition(), n.getAttribute("linkHref"), e)] : n.getRanges();
					for (const e of i)
						if (t.removeAttribute("linkHref", e), o)
							for (const n of o.manualDecorators) t.removeAttribute(n.id, e)
				})
			}
		}
		class Jh {
			constructor() {
				this._definitions = new Set
			}
			get length() {
				return this._definitions.size
			}
			add(t) {
				Array.isArray(t) ? t.forEach(t => this._definitions.add(t)) : this._definitions.add(t)
			}
			getDispatcher() {
				return t => {
					t.on("attribute:linkHref", (t, e, n) => {
						if (!n.consumable.test(e.item, "attribute:linkHref")) return;
						const o = n.writer,
							i = o.document.selection;
						for (const t of this._definitions) {
							const r = o.createAttributeElement("a", t.attributes, {
								priority: 5
							});
							o.setCustomProperty("link", !0, r), t.callback(e.attributeNewValue) ? e.item.is("selection") ? o.wrap(i
								.getFirstRange(), r) : o.wrap(n.mapper.toViewRange(e.range), r) : o.unwrap(n.mapper.toViewRange(e.range),
								r)
						}
					}, {
						priority: "high"
					})
				}
			}
		}
		class Zh {
			constructor({
				id: t,
				label: e,
				attributes: n,
				defaultValue: o
			}) {
				this.id = t, this.set("value"), this.defaultValue = o, this.label = e, this.attributes = n
			}
		}
		xn(Zh, Ho);
		var Xh = function(t, e, n) {
				var o = t.length;
				return n = void 0 === n ? o : n, !e && n >= o ? t : oo(t, e, n)
			},
			tf = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
		var ef = function(t) {
			return tf.test(t)
		};
		var nf = function(t) {
				return t.split("")
			},
			of = "[\\ud800-\\udfff]",
			rf = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
			sf = "\\ud83c[\\udffb-\\udfff]",
			af = "[^\\ud800-\\udfff]",
			cf = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			lf = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			df = "(?:" + rf + "|" + sf + ")" + "?",
			uf = "[\\ufe0e\\ufe0f]?" + df + ("(?:\\u200d(?:" + [af, cf, lf].join("|") + ")[\\ufe0e\\ufe0f]?" + df + ")*"),
			hf = "(?:" + [af + rf + "?", rf, cf, lf, of ].join("|") + ")",
			ff = RegExp(sf + "(?=" + sf + ")|" + hf + uf, "g");
		var gf = function(t) {
			return t.match(ff) || []
		};
		var mf = function(t) {
			return ef(t) ? gf(t) : nf(t)
		};
		var pf = function(t) {
			return function(e) {
				e = Zn(e);
				var n = ef(e) ? mf(e) : void 0,
					o = n ? n[0] : e.charAt(0),
					i = n ? Xh(n, 1).join("") : e.slice(1);
				return o[t]() + i
			}
		}("toUpperCase");
		const bf = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,
			wf = /^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;

		function kf(t, e) {
			const n = e.createAttributeElement("a", {
				href: t
			}, {
				priority: 5
			});
			return e.setCustomProperty("link", !0, n), n
		}

		function _f(t) {
			return function(t) {
				return t.replace(bf, "").match(wf)
			}(t = String(t)) ? t : "#"
		}
		n(49);
		const vf = /^(https?:)?\/\//;
		class yf extends Gl {
			static get pluginName() {
				return "LinkEditing"
			}
			constructor(t) {
				super(t), t.config.define("link", {
					addTargetToExternalLinks: !1
				})
			}
			init() {
				const t = this.editor,
					e = t.locale;
				t.model.schema.extend("$text", {
					allowAttributes: "linkHref"
				}), t.conversion.for("dataDowncast").attributeToElement({
					model: "linkHref",
					view: kf
				}), t.conversion.for("editingDowncast").attributeToElement({
					model: "linkHref",
					view: (t, e) => kf(_f(t), e)
				}), t.conversion.for("upcast").elementToAttribute({
					view: {
						name: "a",
						attributes: {
							href: !0
						}
					},
					model: {
						key: "linkHref",
						value: t => t.getAttribute("href")
					}
				}), t.commands.add("link", new Kh(t)), t.commands.add("unlink", new Qh(t));
				const n = function(t, e) {
					const n = {
						"Open in a new tab": t("Open in a new tab"),
						Downloadable: t("Downloadable")
					};
					return e.forEach(t => (t.label && n[t.label] && (t.label = n[t.label]), t)), e
				}(t.t, function(t) {
					const e = [];
					if (t)
						for (const [n, o] of Object.entries(t)) {
							const t = Object.assign({}, o, {
								id: "link" + pf(n)
							});
							e.push(t)
						}
					return e
				}(t.config.get("link.decorators")));
				this._enableAutomaticDecorators(n.filter(t => "automatic" === t.mode)), this._enableManualDecorators(n.filter(
						t => "manual" === t.mode)),
					function({
						view: t,
						model: e,
						emitter: n,
						attribute: o,
						locale: i
					}) {
						const r = new Fh(e, n, o),
							s = e.document.selection;
						n.listenTo(t.document, "keydown", (t, e) => {
							if (!s.isCollapsed) return;
							if (e.shiftKey || e.altKey || e.ctrlKey) return;
							const n = e.keyCode == mi.arrowright,
								o = e.keyCode == mi.arrowleft;
							if (!n && !o) return;
							const a = s.getFirstPosition(),
								c = i.contentLanguageDirection;
							let l;
							l = "ltr" === c && n || "rtl" === c && o ? r.handleForwardMovement(a, e) : r.handleBackwardMovement(a, e),
								l && t.stop()
						}, {
							priority: un.get("high") + 1
						})
					}({
						view: t.editing.view,
						model: t.model,
						emitter: this,
						attribute: "linkHref",
						locale: e
					}), this._setupLinkHighlight(), this._enableInsertContentSelectionAttributesFixer(), this._enableClickingAfterLink()
			}
			_enableAutomaticDecorators(t) {
				const e = this.editor,
					n = new Jh;
				e.config.get("link.addTargetToExternalLinks") && n.add({
					id: "linkIsExternal",
					mode: "automatic",
					callback: t => vf.test(t),
					attributes: {
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}), n.add(t), n.length && e.conversion.for("downcast").add(n.getDispatcher())
			}
			_enableManualDecorators(t) {
				if (!t.length) return;
				const e = this.editor,
					n = e.commands.get("link").manualDecorators;
				t.forEach(t => {
					e.model.schema.extend("$text", {
						allowAttributes: t.id
					}), n.add(new Zh(t)), e.conversion.for("downcast").attributeToElement({
						model: t.id,
						view: (e, o) => {
							if (e) {
								const e = n.get(t.id).attributes,
									i = o.createAttributeElement("a", e, {
										priority: 5
									});
								return o.setCustomProperty("link", !0, i), i
							}
						}
					}), e.conversion.for("upcast").elementToAttribute({
						view: {
							name: "a",
							attributes: n.get(t.id).attributes
						},
						model: {
							key: t.id
						}
					})
				})
			}
			_setupLinkHighlight() {
				const t = this.editor,
					e = t.editing.view,
					n = new Set;
				e.document.registerPostFixer(e => {
					const o = t.model.document.selection;
					let i = !1;
					if (o.hasAttribute("linkHref")) {
						const r = Yh(o.getFirstPosition(), o.getAttribute("linkHref"), t.model),
							s = t.editing.mapper.toViewRange(r);
						for (const t of s.getItems()) t.is("a") && !t.hasClass("ck-link_selected") && (e.addClass(
							"ck-link_selected", t), n.add(t), i = !0)
					}
					return i
				}), t.conversion.for("editingDowncast").add(t => {
					function o() {
						e.change(t => {
							for (const e of n.values()) t.removeClass("ck-link_selected", e), n.delete(e)
						})
					}
					t.on("insert", o, {
						priority: "highest"
					}), t.on("remove", o, {
						priority: "highest"
					}), t.on("attribute", o, {
						priority: "highest"
					}), t.on("selection", o, {
						priority: "highest"
					})
				})
			}
			_enableInsertContentSelectionAttributesFixer() {
				const t = this.editor.model,
					e = t.document.selection;
				t.on("insertContent", () => {
					const n = e.anchor.nodeBefore,
						o = e.anchor.nodeAfter;
					e.hasAttribute("linkHref") && n && n.hasAttribute("linkHref") && (o && o.hasAttribute("linkHref") || t.change(
						e => {
							[...t.document.selection.getAttributeKeys()].filter(t => t.startsWith("link")).forEach(t => e.removeSelectionAttribute(
								t))
						}))
				}, {
					priority: "low"
				})
			}
			_enableClickingAfterLink() {
				const t = this.editor;
				t.editing.view.addObserver(Bh);
				let e = !1;
				this.listenTo(t.editing.view.document, "mousedown", () => {
					e = !0
				}), this.listenTo(t.editing.view.document, "selectionChange", () => {
					if (!e) return;
					e = !1;
					const n = t.model.document.selection;
					if (!n.isCollapsed) return;
					if (!n.hasAttribute("linkHref")) return;
					const o = n.getFirstPosition(),
						i = Yh(o, n.getAttribute("linkHref"), t.model);
					(o.isTouching(i.start) || o.isTouching(i.end)) && t.model.change(e => {
						e.removeSelectionAttribute("linkHref");
						for (const n of t.commands.get("link").manualDecorators) e.removeSelectionAttribute(n.id)
					})
				})
			}
		}
		class xf extends Du {
			static get pluginName() {
				return "Notification"
			}
			init() {
				this.on("show:warning", (t, e) => {
					window.alert(e.message)
				}, {
					priority: "lowest"
				})
			}
			showSuccess(t, e = {}) {
				this._showNotification({
					message: t,
					type: "success",
					namespace: e.namespace,
					title: e.title
				})
			}
			showInfo(t, e = {}) {
				this._showNotification({
					message: t,
					type: "info",
					namespace: e.namespace,
					title: e.title
				})
			}
			showWarning(t, e = {}) {
				this._showNotification({
					message: t,
					type: "warning",
					namespace: e.namespace,
					title: e.title
				})
			}
			_showNotification(t) {
				const e = "show:" + t.type + (t.namespace ? ":" + t.namespace : "");
				this.fire(e, {
					message: t.message,
					type: t.type,
					title: t.title || ""
				})
			}
		}
		class Af extends Zl {
			constructor(t) {
				super(t), this.stopListening(this.editor.model.document, "change"), this.listenTo(this.editor.model.document,
					"change", () => this.refresh(), {
						priority: "low"
					})
			}
			refresh() {
				const t = this.editor.commands.get("imageInsert"),
					e = this.editor.commands.get("link");
				this.isEnabled = t.isEnabled || e.isEnabled
			}
			execute() {
				const t = this.editor,
					e = this.editor.config.get("ckfinder.openerMethod") || "modal";
				if ("popup" != e && "modal" != e) throw new hn.b(
					'ckfinder-unknown-openerMethod: The openerMethod config option must by "popup" or "modal".', t);
				const n = this.editor.config.get("ckfinder.options") || {};
				n.chooseFiles = !0;
				const o = n.onInit;
				n.language || (n.language = t.locale.uiLanguage), n.onInit = e => {
					o && o(e), e.on("files:choose", n => {
						const o = n.data.files.toArray(),
							i = o.filter(t => !t.isImage()),
							r = o.filter(t => t.isImage());
						for (const e of i) t.execute("link", e.getUrl());
						const s = [];
						for (const t of r) {
							const n = t.getUrl();
							s.push(n || e.request("file:getProxyUrl", {
								file: t
							}))
						}
						s.length && Cf(t, s)
					}), e.on("file:choose:resizedImage", e => {
						const n = e.data.resizedUrl;
						if (n) Cf(t, [n]);
						else {
							const e = t.plugins.get("Notification"),
								n = t.locale.t;
							e.showWarning(n("Could not obtain resized image URL."), {
								title: n("Selecting resized image failed"),
								namespace: "ckfinder"
							})
						}
					})
				}, window.CKFinder[e](n)
			}
		}

		function Cf(t, e) {
			if (t.commands.get("imageInsert").isEnabled) t.execute("imageInsert", {
				source: e
			});
			else {
				const e = t.plugins.get("Notification"),
					n = t.locale.t;
				e.showWarning(n("Could not insert image at the current position."), {
					title: n("Inserting image failed"),
					namespace: "ckfinder"
				})
			}
		}
		class Tf extends Gl {
			static get pluginName() {
				return "CKFinderEditing"
			}
			static get requires() {
				return [xf, Vh, yf]
			}
			init() {
				const t = this.editor;
				t.commands.add("ckfinder", new Af(t))
			}
		}
		const Sf = /^data:(\S*?);base64,/;
		class Pf {
			constructor(t, e, n) {
				if (!t) throw new hn.b("fileuploader-missing-file: File must be provided as the first argument", null);
				if (!e) throw new hn.b("fileuploader-missing-token: Token must be provided as the second argument.", null);
				if (!n) throw new hn.b(
					"fileuploader-missing-api-address: Api address must be provided as the third argument.", null);
				this.file = function(t) {
					if ("string" != typeof t) return !1;
					const e = t.match(Sf);
					return !(!e || !e.length)
				}(t) ? function(t, e = 512) {
					try {
						const n = t.match(Sf)[1],
							o = atob(t.replace(Sf, "")),
							i = [];
						for (let t = 0; t < o.length; t += e) {
							const n = o.slice(t, t + e),
								r = new Array(n.length);
							for (let t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
							i.push(new Uint8Array(r))
						}
						return new Blob(i, {
							type: n
						})
					} catch (t) {
						throw new hn.b("fileuploader-decoding-image-data-error: Problem with decoding Base64 image data.", null)
					}
				}(t) : t, this._token = e, this._apiAddress = n
			}
			onProgress(t) {
				return this.on("progress", (e, n) => t(n)), this
			}
			onError(t) {
				return this.once("error", (e, n) => t(n)), this
			}
			abort() {
				this.xhr.abort()
			}
			send() {
				return this._prepareRequest(), this._attachXHRListeners(), this._sendRequest()
			}
			_prepareRequest() {
				const t = new XMLHttpRequest;
				t.open("POST", this._apiAddress), t.setRequestHeader("Authorization", this._token.value), t.responseType =
					"json", this.xhr = t
			}
			_attachXHRListeners() {
				const t = this,
					e = this.xhr;

				function n(e) {
					return () => t.fire("error", e)
				}
				e.addEventListener("error", n("Network Error")), e.addEventListener("abort", n("Abort")), e.upload && e.upload
					.addEventListener("progress", t => {
						t.lengthComputable && this.fire("progress", {
							total: t.total,
							uploaded: t.loaded
						})
					}), e.addEventListener("load", () => {
						const t = e.status,
							n = e.response;
						if (t < 200 || t > 299) return this.fire("error", n.message || n.error)
					})
			}
			_sendRequest() {
				const t = new FormData,
					e = this.xhr;
				return t.append("file", this.file), new Promise((n, o) => {
					e.addEventListener("load", () => {
						const t = e.status,
							i = e.response;
						return t < 200 || t > 299 ? i.message ? o(new hn.b(
							"fileuploader-uploading-data-failed: Uploading file failed.", this, {
								message: i.message
							})) : o(i.error) : n(i)
					}), e.addEventListener("error", () => o(new Error("Network Error"))), e.addEventListener("abort", () => o(
						new Error("Abort"))), e.send(t)
				})
			}
		}
		xn(Pf, mn);
		const Ef = {
			refreshInterval: 36e5,
			autoRefresh: !0
		};
		class Mf {
			constructor(t, e = Ef) {
				if (!t) throw new hn.b(
					"token-missing-token-url: A `tokenUrl` must be provided as the first constructor argument.", this);
				this.set("value", e.initValue), this._refresh = "function" == typeof t ? t : () => {
					return e = t, new Promise((t, n) => {
						const o = new XMLHttpRequest;
						o.open("GET", e), o.addEventListener("load", () => {
							const e = o.status,
								i = o.response;
							return e < 200 || e > 299 ? n(new hn.b(
								"token-cannot-download-new-token: Cannot download new token from the provided url.", null)) : t(i)
						}), o.addEventListener("error", () => n(new Error("Network Error"))), o.addEventListener("abort", () =>
							n(new Error("Abort"))), o.send()
					});
					var e
				}, this._options = Object.assign({}, Ef, e)
			}
			init() {
				return new Promise((t, e) => {
					this._options.autoRefresh && this._startRefreshing(), this.value ? t(this) : this.refreshToken().then(t).catch(
						e)
				})
			}
			refreshToken() {
				return this._refresh().then(t => this.set("value", t)).then(() => this)
			}
			destroy() {
				this._stopRefreshing()
			}
			_startRefreshing() {
				this._refreshInterval = setInterval(() => this.refreshToken(), this._options.refreshInterval)
			}
			_stopRefreshing() {
				clearInterval(this._refreshInterval)
			}
			static create(t, e = Ef) {
				return new Mf(t, e).init()
			}
		}
		xn(Mf, Ho);
		var If = Mf;
		class Nf extends Du {
			static get pluginName() {
				return "CloudServices"
			}
			init() {
				const t = this.context.config.get("cloudServices") || {};
				for (const e in t) this[e] = t[e];
				if (this.tokenUrl) return this.token = new Nf.Token(this.tokenUrl), this.token.init();
				this.token = null
			}
			destroy() {
				super.destroy(), this.token && this.token.destroy()
			}
		}
		Nf.Token = If;
		class Of extends Gl {
			static get requires() {
				return [Vu, Nf]
			}
			init() {
				const t = this.editor,
					e = t.plugins.get(Nf),
					n = e.token,
					o = e.uploadUrl;
				n && (this._uploadGateway = new Of._UploadGateway(n, o), t.plugins.get(Vu).createUploadAdapter = t => new Rf(
					this._uploadGateway, t))
			}
		}
		class Rf {
			constructor(t, e) {
				this.uploadGateway = t, this.loader = e
			}
			upload() {
				return this.loader.file.then(t => (this.fileUploader = this.uploadGateway.upload(t), this.fileUploader.on(
					"progress", (t, e) => {
						this.loader.uploadTotal = e.total, this.loader.uploaded = e.uploaded
					}), this.fileUploader.send()))
			}
			abort() {
				this.fileUploader.abort()
			}
		}
		Of._UploadGateway = class {
			constructor(t, e) {
				if (!t) throw new hn.b("uploadgateway-missing-token: Token must be provided.", null);
				if (!e) throw new hn.b("uploadgateway-missing-api-address: Api address must be provided.", null);
				this._token = t, this._apiAddress = e
			}
			upload(t) {
				return new Pf(t, this._token, this._apiAddress)
			}
		};
		n(51);
		const Df = ["before", "after"],
			Lf = (new DOMParser).parseFromString(
				'<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><polyline points="8.05541992 0.263427734 8.05541992 4.23461914 1.28417969 4.23461914" transform="translate(1,0)"></polyline><line x1="0" y1="4.21581031" x2="2" y2="2.17810059" transform="translate(1, 0)"></line><line x1="0" y1="6.21581031" x2="2" y2="4.17810059" transform="translate(2, 5.196955) scale(1, -1) translate(-1, -5.196955)"></line></svg>\n',
				"image/svg+xml").firstChild;
		class jf extends Gl {
			static get pluginName() {
				return "WidgetTypeAround"
			}
			constructor(t) {
				super(t), this._currentFakeCaretModelElement = null
			}
			init() {
				this._enableTypeAroundUIInjection(), this._enableInsertingParagraphsOnButtonClick(), this._enableInsertingParagraphsOnEnterKeypress(),
					this._enableInsertingParagraphsOnTypingKeystroke(), this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),
					this._enableDeleteIntegration(), this._enableInsertContentIntegration()
			}
			destroy() {
				this._currentFakeCaretModelElement = null
			}
			_insertParagraph(t, e) {
				const n = this.editor,
					o = n.editing.view;
				n.execute("insertParagraph", {
					position: n.model.createPositionAt(t, e)
				}), o.focus(), o.scrollToTheSelection()
			}
			_insertParagraphAccordingToFakeCaretPosition() {
				const t = this.editor.model.document.selection,
					e = yh(t);
				if (!e) return !1;
				const n = t.getSelectedElement();
				return this._insertParagraph(n, e), !0
			}
			_enableTypeAroundUIInjection() {
				const t = this.editor,
					e = t.model.schema,
					n = t.locale.t,
					o = {
						before: n("Insert paragraph before block"),
						after: n("Insert paragraph after block")
					};
				t.editing.downcastDispatcher.on("insert", (t, n, i) => {
					const r = i.mapper.toViewElement(n.item);
					vh(r, n.item, e) && function(t, e, n) {
						const o = t.createUIElement("div", {
							class: "ck ck-reset_all ck-widget__type-around"
						}, (function(t) {
							const n = this.toDomElement(t);
							return function(t, e) {
									for (const n of Df) {
										const o = new Wc({
											tag: "div",
											attributes: {
												class: ["ck", "ck-widget__type-around__button", "ck-widget__type-around__button_" + n],
												title: e[n]
											},
											children: [t.ownerDocument.importNode(Lf, !0)]
										});
										t.appendChild(o.render())
									}
								}(n, e),
								function(t) {
									const e = new Wc({
										tag: "div",
										attributes: {
											class: ["ck", "ck-widget__type-around__fake-caret"]
										}
									});
									t.appendChild(e.render())
								}(n), n
						}));
						t.insert(t.createPositionAt(n, "end"), o)
					}(i.writer, o, r)
				}, {
					priority: "low"
				})
			}
			_enableTypeAroundFakeCaretActivationUsingKeyboardArrows() {
				const t = this.editor,
					e = t.model,
					n = e.document.selection,
					o = e.schema;

				function i(t) {
					return "ck-widget_type-around_show-fake-caret_" + t
				}
				t.editing.view.document.on("keydown", (t, e) => {
					ki(e.keyCode) && this._handleArrowKeyPress(t, e)
				}, {
					priority: un.get("high") + 10
				}), n.on("change:range", (e, n) => {
					n.directChange && t.model.change(t => {
						t.removeSelectionAttribute("widget-type-around")
					})
				}), e.document.on("change:data", () => {
					const e = n.getSelectedElement();
					if (e) {
						if (vh(t.editing.mapper.toViewElement(e), e, o)) return
					}
					t.model.change(t => {
						t.removeSelectionAttribute("widget-type-around")
					})
				}), t.editing.downcastDispatcher.on("selection", (t, e, n) => {
					const r = n.writer;
					if (this._currentFakeCaretModelElement) {
						const t = n.mapper.toViewElement(this._currentFakeCaretModelElement);
						t && (r.removeClass(Df.map(i), t), this._currentFakeCaretModelElement = null)
					}
					const s = e.selection.getSelectedElement();
					if (!s) return;
					const a = n.mapper.toViewElement(s);
					if (!vh(a, s, o)) return;
					const c = yh(e.selection);
					c && (r.addClass(i(c), a), this._currentFakeCaretModelElement = s)
				}), this.listenTo(t.ui.focusTracker, "change:isFocused", (e, n, o) => {
					o || t.model.change(t => {
						t.removeSelectionAttribute("widget-type-around")
					})
				})
			}
			_handleArrowKeyPress(t, e) {
				const n = this.editor,
					o = n.model,
					i = o.document.selection,
					r = o.schema,
					s = n.editing.view,
					a = vi(e.keyCode, n.locale.contentLanguageDirection),
					c = s.document.selection.getSelectedElement();
				let l;
				vh(c, n.editing.mapper.toModelElement(c), r) ? l = this._handleArrowKeyPressOnSelectedWidget(a) : i.isCollapsed &&
					(l = this._handleArrowKeyPressWhenSelectionNextToAWidget(a)), l && (e.preventDefault(), t.stop())
			}
			_handleArrowKeyPressOnSelectedWidget(t) {
				const e = this.editor.model,
					n = yh(e.document.selection);
				return e.change(e => {
					if (!n) return e.setSelectionAttribute("widget-type-around", t ? "after" : "before"), !0;
					if (!(n === (t ? "after" : "before"))) return e.removeSelectionAttribute("widget-type-around"), !0;
					return !1
				})
			}
			_handleArrowKeyPressWhenSelectionNextToAWidget(t) {
				const e = this.editor,
					n = e.model,
					o = n.schema,
					i = e.plugins.get("Widget"),
					r = i._getObjectElementNextToSelection(t);
				return !!vh(e.editing.mapper.toViewElement(r), r, o) && (n.change(e => {
					i._setSelectionOverElement(r), e.setSelectionAttribute("widget-type-around", t ? "before" : "after")
				}), !0)
			}
			_enableInsertingParagraphsOnButtonClick() {
				const t = this.editor,
					e = t.editing.view;
				e.document.on("mousedown", (n, o) => {
					const i = o.domTarget.closest(".ck-widget__type-around__button");
					if (!i) return;
					const r = function(t) {
							return t.classList.contains("ck-widget__type-around__button_before") ? "before" : "after"
						}(i),
						s = function(t, e) {
							const n = t.closest(".ck-widget");
							return e.mapDomToView(n)
						}(i, e.domConverter),
						a = t.editing.mapper.toModelElement(s);
					this._insertParagraph(a, r), o.preventDefault(), n.stop()
				})
			}
			_enableInsertingParagraphsOnEnterKeypress() {
				const t = this.editor,
					e = t.editing.view;
				this.listenTo(e.document, "enter", (n, o) => {
					const i = e.document.selection.getSelectedElement(),
						r = t.editing.mapper.toModelElement(i),
						s = t.model.schema;
					let a;
					this._insertParagraphAccordingToFakeCaretPosition() ? a = !0 : vh(i, r, s) && (this._insertParagraph(r, o.isSoft ?
						"before" : "after"), a = !0), a && (o.preventDefault(), n.stop())
				})
			}
			_enableInsertingParagraphsOnTypingKeystroke() {
				const t = this.editor.editing.view,
					e = [mi.enter, mi.delete, mi.backspace];
				t.document.on("keydown", (t, n) => {
					e.includes(n.keyCode) || wd(n) || this._insertParagraphAccordingToFakeCaretPosition()
				}, {
					priority: un.get("high") + 1
				})
			}
			_enableDeleteIntegration() {
				const t = this.editor,
					e = t.editing.view,
					n = t.model,
					o = n.schema;
				this.listenTo(e.document, "delete", (e, i) => {
					const r = yh(n.document.selection);
					if (!r) return;
					const s = i.direction,
						a = n.document.selection.getSelectedElement(),
						c = "forward" == s;
					if ("before" === r === c) t.execute("delete", {
						selection: n.createSelection(a, "on")
					});
					else {
						const e = o.getNearestSelectionRange(n.createPositionAt(a, r), s);
						if (e)
							if (e.isCollapsed) {
								const i = n.createSelection(e.start);
								if (n.modifySelection(i, {
										direction: s
									}), i.focus.isEqual(e.start)) {
									const t = function(t, e) {
										let n = e;
										for (const o of e.getAncestors({
												parentFirst: !0
											})) {
											if (o.childCount > 1 || t.isLimit(o)) break;
											n = o
										}
										return n
									}(o, e.start.parent);
									n.deleteContent(n.createSelection(t, "on"), {
										doNotAutoparagraph: !0
									})
								} else n.change(n => {
									n.setSelection(e), t.execute(c ? "forwardDelete" : "delete")
								})
							} else n.change(n => {
								n.setSelection(e), t.execute(c ? "forwardDelete" : "delete")
							})
					}
					i.preventDefault(), e.stop()
				}, {
					priority: un.get("high") + 1
				})
			}
			_enableInsertContentIntegration() {
				const t = this.editor,
					e = this.editor.model,
					n = e.document.selection;
				this.listenTo(t.model, "insertContent", (t, [o, i]) => {
					if (i && !i.is("documentSelection")) return;
					const r = yh(n);
					return r ? (t.stop(), e.change(t => {
						const i = n.getSelectedElement(),
							s = e.createPositionAt(i, r),
							a = t.createSelection(s),
							c = e.insertContent(o, a);
						return t.setSelection(a), c
					})) : void 0
				}, {
					priority: "high"
				})
			}
		}
		n(53);
		class Vf extends Gl {
			static get pluginName() {
				return "Widget"
			}
			static get requires() {
				return [jf]
			}
			init() {
				const t = this.editor.editing.view,
					e = t.document;
				this._previouslySelected = new Set, this.editor.editing.downcastDispatcher.on("selection", (t, e, n) => {
					this._clearPreviouslySelectedWidgets(n.writer);
					const o = n.writer,
						i = o.document.selection,
						r = i.getSelectedElement();
					let s = null;
					for (const t of i.getRanges())
						for (const e of t) {
							const t = e.item;
							xh(t) && !zf(t, s) && (o.addClass("ck-widget_selected", t), this._previouslySelected.add(t), s = t, t ==
								r && o.setSelection(i.getRanges(), {
									fake: !0,
									label: Th(r)
								}))
						}
				}, {
					priority: "low"
				}), t.addObserver(Bh), this.listenTo(e, "mousedown", (...t) => this._onMousedown(...t)), this.listenTo(e,
					"keydown", (...t) => {
						this._handleSelectionChangeOnArrowKeyPress(...t)
					}, {
						priority: "high"
					}), this.listenTo(e, "keydown", (...t) => {
					this._preventDefaultOnArrowKeyPress(...t)
				}, {
					priority: un.get("high") - 20
				}), this.listenTo(e, "delete", (t, e) => {
					this._handleDelete("forward" == e.direction) && (e.preventDefault(), t.stop())
				}, {
					priority: "high"
				})
			}
			_onMousedown(t, e) {
				const n = this.editor,
					o = n.editing.view,
					i = o.document;
				let r = e.target;
				if (function(t) {
						for (; t;) {
							if (t.is("editableElement") && !t.is("rootElement")) return !0;
							if (xh(t)) return !1;
							t = t.parent
						}
						return !1
					}(r)) {
					if (hi.isSafari && e.domEvent.detail >= 3) {
						const t = n.editing.mapper.toModelElement(r);
						this.editor.model.change(n => {
							e.preventDefault(), n.setSelection(t, "in")
						})
					}
					return
				}
				if (!xh(r) && (r = r.findAncestor(xh), !r)) return;
				e.preventDefault(), i.isFocused || o.focus();
				const s = n.editing.mapper.toModelElement(r);
				this._setSelectionOverElement(s)
			}
			_handleSelectionChangeOnArrowKeyPress(t, e) {
				const n = e.keyCode;
				if (!ki(n)) return;
				const o = this.editor.model,
					i = o.schema,
					r = o.document.selection,
					s = r.getSelectedElement(),
					a = vi(n, this.editor.locale.contentLanguageDirection);
				if (s && i.isObject(s)) {
					const n = a ? r.getLastPosition() : r.getFirstPosition(),
						s = i.getNearestSelectionRange(n, a ? "forward" : "backward");
					return void(s && (o.change(t => {
						t.setSelection(s)
					}), e.preventDefault(), t.stop()))
				}
				if (!r.isCollapsed) return;
				const c = this._getObjectElementNextToSelection(a);
				c && i.isObject(c) && (this._setSelectionOverElement(c), e.preventDefault(), t.stop())
			}
			_preventDefaultOnArrowKeyPress(t, e) {
				if (!ki(e.keyCode)) return;
				const n = this.editor.model,
					o = n.schema,
					i = n.document.selection.getSelectedElement();
				i && o.isObject(i) && (e.preventDefault(), t.stop())
			}
			_handleDelete(t) {
				if (this.editor.isReadOnly) return;
				const e = this.editor.model.document.selection;
				if (!e.isCollapsed) return;
				const n = this._getObjectElementNextToSelection(t);
				return n ? (this.editor.model.change(t => {
					let o = e.anchor.parent;
					for (; o.isEmpty;) {
						const e = o;
						o = e.parent, t.remove(e)
					}
					this._setSelectionOverElement(n)
				}), !0) : void 0
			}
			_setSelectionOverElement(t) {
				this.editor.model.change(e => {
					e.setSelection(e.createRangeOn(t))
				})
			}
			_getObjectElementNextToSelection(t) {
				const e = this.editor.model,
					n = e.schema,
					o = e.document.selection,
					i = e.createSelection(o);
				e.modifySelection(i, {
					direction: t ? "forward" : "backward"
				});
				const r = t ? i.focus.nodeBefore : i.focus.nodeAfter;
				return r && n.isObject(r) ? r : null
			}
			_clearPreviouslySelectedWidgets(t) {
				for (const e of this._previouslySelected) t.removeClass("ck-widget_selected", e);
				this._previouslySelected.clear()
			}
		}

		function zf(t, e) {
			return !!e && Array.from(t.getAncestors()).includes(e)
		}
		class Bf extends Zl {
			refresh() {
				const t = this.editor.model.document.selection.getSelectedElement();
				this.isEnabled = Nh(t), Nh(t) && t.hasAttribute("alt") ? this.value = t.getAttribute("alt") : this.value = !1
			}
			execute(t) {
				const e = this.editor.model,
					n = e.document.selection.getSelectedElement();
				e.change(e => {
					e.setAttribute("alt", t.newValue, n)
				})
			}
		}
		class Ff extends Gl {
			static get pluginName() {
				return "ImageTextAlternativeEditing"
			}
			init() {
				this.editor.commands.add("imageTextAlternative", new Bf(this.editor))
			}
		}
		n(55);
		class Uf extends dl {
			constructor(t, e) {
				super(t);
				const n = "ck-labeled-field-view-" + dn(),
					o = "ck-labeled-field-view-status-" + dn();
				this.fieldView = e(this, n, o), this.set("label"), this.set("isEnabled", !0), this.set("errorText", null),
					this.set("infoText", null), this.set("class"), this.labelView = this._createLabelView(n), this.statusView =
					this._createStatusView(o), this.bind("_statusText").to(this, "errorText", this, "infoText", (t, e) => t || e);
				const i = this.bindTemplate;
				this.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck", "ck-labeled-field-view", i.to("class"), i.if("isEnabled", "ck-disabled", t => !t)]
					},
					children: [this.labelView, this.fieldView, this.statusView]
				})
			}
			_createLabelView(t) {
				const e = new cu(this.locale);
				return e.for = t, e.bind("text").to(this, "label"), e
			}
			_createStatusView(t) {
				const e = new dl(this.locale),
					n = this.bindTemplate;
				return e.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck", "ck-labeled-field-view__status", n.if("errorText", "ck-labeled-field-view__status_error"),
							n.if("_statusText", "ck-hidden", t => !t)
						],
						id: t,
						role: n.if("errorText", "alert")
					},
					children: [{
						text: n.to("_statusText")
					}]
				}), e
			}
			focus() {
				this.fieldView.focus()
			}
		}
		n(57);
		class Hf extends dl {
			constructor(t) {
				super(t), this.set("value"), this.set("id"), this.set("placeholder"), this.set("isReadOnly", !1), this.set(
					"hasError", !1), this.set("ariaDescribedById");
				const e = this.bindTemplate;
				this.setTemplate({
					tag: "input",
					attributes: {
						type: "text",
						class: ["ck", "ck-input", "ck-input-text", e.if("hasError", "ck-error")],
						id: e.to("id"),
						placeholder: e.to("placeholder"),
						readonly: e.to("isReadOnly"),
						"aria-invalid": e.if("hasError", !0),
						"aria-describedby": e.to("ariaDescribedById")
					},
					on: {
						input: e.to("input")
					}
				})
			}
			render() {
				super.render();
				const t = t => {
					this.element.value = t || 0 === t ? t : ""
				};
				t(this.value), this.on("change:value", (e, n, o) => {
					t(o)
				})
			}
			select() {
				this.element.select()
			}
			focus() {
				this.element.focus()
			}
		}

		function qf(t, e, n) {
			const o = new Hf(t.locale);
			return o.set({
				id: e,
				ariaDescribedById: n
			}), o.bind("isReadOnly").to(t, "isEnabled", t => !t), o.bind("hasError").to(t, "errorText", t => !!t), o.on(
				"input", () => {
					t.errorText = null
				}), o
		}

		function Wf({
			view: t
		}) {
			t.listenTo(t.element, "submit", (e, n) => {
				n.preventDefault(), t.fire("submit")
			}, {
				useCapture: !0
			})
		}
		var Gf =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',
			Yf =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>';
		n(59);
		class $f extends dl {
			constructor(t) {
				super(t);
				const e = this.locale.t;
				this.focusTracker = new Lc, this.keystrokes = new Pc, this.labeledInput = this._createLabeledInputView(),
					this.saveButtonView = this._createButton(e("Save"), Gf, "ck-button-save"), this.saveButtonView.type =
					"submit", this.cancelButtonView = this._createButton(e("Cancel"), Yf, "ck-button-cancel", "cancel"), this._focusables =
					new qc, this._focusCycler = new pl({
						focusables: this._focusables,
						focusTracker: this.focusTracker,
						keystrokeHandler: this.keystrokes,
						actions: {
							focusPrevious: "shift + tab",
							focusNext: "tab"
						}
					}), this.setTemplate({
						tag: "form",
						attributes: {
							class: ["ck", "ck-text-alternative-form"],
							tabindex: "-1"
						},
						children: [this.labeledInput, this.saveButtonView, this.cancelButtonView]
					})
			}
			render() {
				super.render(), this.keystrokes.listenTo(this.element), Wf({
					view: this
				}), [this.labeledInput, this.saveButtonView, this.cancelButtonView].forEach(t => {
					this._focusables.add(t), this.focusTracker.add(t.element)
				})
			}
			_createButton(t, e, n, o) {
				const i = new El(this.locale);
				return i.set({
					label: t,
					icon: e,
					tooltip: !0
				}), i.extendTemplate({
					attributes: {
						class: n
					}
				}), o && i.delegate("execute").to(this, o), i
			}
			_createLabeledInputView() {
				const t = this.locale.t,
					e = new Uf(this.locale, qf);
				return e.label = t("Text alternative"), e.fieldView.placeholder = t("Text alternative"), e
			}
		}
		n(61), n(63);
		const Kf = gh("px");
		class Qf extends Gl {
			static get pluginName() {
				return "ContextualBalloon"
			}
			constructor(t) {
				super(t), this.positionLimiter = () => {
						const t = this.editor.editing.view,
							e = t.document.selection.editableElement;
						return e ? t.domConverter.mapViewToDom(e.root) : null
					}, this.set("visibleView", null), this.view = new bh(t.locale), t.ui.view.body.add(this.view), t.ui.focusTracker
					.add(this.view.element), this._viewToStack = new Map, this._idToStack = new Map, this.set("_numberOfStacks",
						0), this.set("_singleViewMode", !1), this._rotatorView = this._createRotatorView(), this._fakePanelsView =
					this._createFakePanelsView()
			}
			hasView(t) {
				return Array.from(this._viewToStack.keys()).includes(t)
			}
			add(t) {
				if (this.hasView(t.view)) throw new hn.b(
					"contextualballoon-add-view-exist: Cannot add configuration of the same view twice.", [this, t]);
				const e = t.stackId || "main";
				if (!this._idToStack.has(e)) return this._idToStack.set(e, new Map([
						[t.view, t]
					])), this._viewToStack.set(t.view, this._idToStack.get(e)), this._numberOfStacks = this._idToStack.size,
					void(this._visibleStack && !t.singleViewMode || this.showStack(e));
				const n = this._idToStack.get(e);
				t.singleViewMode && this.showStack(e), n.set(t.view, t), this._viewToStack.set(t.view, n), n === this._visibleStack &&
					this._showView(t)
			}
			remove(t) {
				if (!this.hasView(t)) throw new hn.b(
					"contextualballoon-remove-view-not-exist: Cannot remove the configuration of a non-existent view.", [this,
						t
					]);
				const e = this._viewToStack.get(t);
				this._singleViewMode && this.visibleView === t && (this._singleViewMode = !1), this.visibleView === t && (1 ===
						e.size ? this._idToStack.size > 1 ? this._showNextStack() : (this.view.hide(), this.visibleView = null,
							this._rotatorView.hideView()) : this._showView(Array.from(e.values())[e.size - 2])), 1 === e.size ? (this._idToStack
						.delete(this._getStackId(e)), this._numberOfStacks = this._idToStack.size) : e.delete(t), this._viewToStack
					.delete(t)
			}
			updatePosition(t) {
				t && (this._visibleStack.get(this.visibleView).position = t), this.view.pin(this._getBalloonPosition()), this
					._fakePanelsView.updatePosition()
			}
			showStack(t) {
				this.visibleStack = t;
				const e = this._idToStack.get(t);
				if (!e) throw new hn.b(
					"contextualballoon-showstack-stack-not-exist: Cannot show a stack that does not exist.", this);
				this._visibleStack !== e && this._showView(Array.from(e.values()).pop())
			}
			get _visibleStack() {
				return this._viewToStack.get(this.visibleView)
			}
			_getStackId(t) {
				return Array.from(this._idToStack.entries()).find(e => e[1] === t)[0]
			}
			_showNextStack() {
				const t = Array.from(this._idToStack.values());
				let e = t.indexOf(this._visibleStack) + 1;
				t[e] || (e = 0), this.showStack(this._getStackId(t[e]))
			}
			_showPrevStack() {
				const t = Array.from(this._idToStack.values());
				let e = t.indexOf(this._visibleStack) - 1;
				t[e] || (e = t.length - 1), this.showStack(this._getStackId(t[e]))
			}
			_createRotatorView() {
				const t = new Jf(this.editor.locale),
					e = this.editor.locale.t;
				return this.view.content.add(t), t.bind("isNavigationVisible").to(this, "_numberOfStacks", this,
					"_singleViewMode", (t, e) => !e && t > 1), t.on("change:isNavigationVisible", () => this.updatePosition(), {
					priority: "low"
				}), t.bind("counter").to(this, "visibleView", this, "_numberOfStacks", (t, n) => {
					if (n < 2) return "";
					const o = Array.from(this._idToStack.values()).indexOf(this._visibleStack) + 1;
					return e("%0 of %1", [o, n])
				}), t.buttonNextView.on("execute", () => {
					t.focusTracker.isFocused && this.editor.editing.view.focus(), this._showNextStack()
				}), t.buttonPrevView.on("execute", () => {
					t.focusTracker.isFocused && this.editor.editing.view.focus(), this._showPrevStack()
				}), t
			}
			_createFakePanelsView() {
				const t = new Zf(this.editor.locale, this.view);
				return t.bind("numberOfPanels").to(this, "_numberOfStacks", this, "_singleViewMode", (t, e) => !e && t >= 2 ?
					Math.min(t - 1, 2) : 0), t.listenTo(this.view, "change:top", () => t.updatePosition()), t.listenTo(this.view,
					"change:left", () => t.updatePosition()), this.editor.ui.view.body.add(t), t
			}
			_showView({
				view: t,
				balloonClassName: e = "",
				withArrow: n = !0,
				singleViewMode: o = !1
			}) {
				this.view.class = e, this.view.withArrow = n, this._rotatorView.showView(t), this.visibleView = t, this.view.pin(
					this._getBalloonPosition()), this._fakePanelsView.updatePosition(), o && (this._singleViewMode = !0)
			}
			_getBalloonPosition() {
				let t = Array.from(this._visibleStack.values()).pop().position;
				return t && !t.limiter && (t = Object.assign({}, t, {
					limiter: this.positionLimiter
				})), t
			}
		}
		class Jf extends dl {
			constructor(t) {
				super(t);
				const e = t.t,
					n = this.bindTemplate;
				this.set("isNavigationVisible", !0), this.focusTracker = new Lc, this.buttonPrevView = this._createButtonView(
					e("Previous"),
					'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'
				), this.buttonNextView = this._createButtonView(e("Next"),
					'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'
				), this.content = this.createCollection(), this.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck", "ck-balloon-rotator"],
						"z-index": "-1"
					},
					children: [{
						tag: "div",
						attributes: {
							class: ["ck-balloon-rotator__navigation", n.to("isNavigationVisible", t => t ? "" : "ck-hidden")]
						},
						children: [this.buttonPrevView, {
							tag: "span",
							attributes: {
								class: ["ck-balloon-rotator__counter"]
							},
							children: [{
								text: n.to("counter")
							}]
						}, this.buttonNextView]
					}, {
						tag: "div",
						attributes: {
							class: "ck-balloon-rotator__content"
						},
						children: this.content
					}]
				})
			}
			render() {
				super.render(), this.focusTracker.add(this.element)
			}
			showView(t) {
				this.hideView(), this.content.add(t)
			}
			hideView() {
				this.content.clear()
			}
			_createButtonView(t, e) {
				const n = new El(this.locale);
				return n.set({
					label: t,
					icon: e,
					tooltip: !0
				}), n
			}
		}
		class Zf extends dl {
			constructor(t, e) {
				super(t);
				const n = this.bindTemplate;
				this.set("top", 0), this.set("left", 0), this.set("height", 0), this.set("width", 0), this.set(
					"numberOfPanels", 0), this.content = this.createCollection(), this._balloonPanelView = e, this.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck-fake-panel", n.to("numberOfPanels", t => t ? "" : "ck-hidden")],
						style: {
							top: n.to("top", Kf),
							left: n.to("left", Kf),
							width: n.to("width", Kf),
							height: n.to("height", Kf)
						}
					},
					children: this.content
				}), this.on("change:numberOfPanels", (t, e, n, o) => {
					n > o ? this._addPanels(n - o) : this._removePanels(o - n), this.updatePosition()
				})
			}
			_addPanels(t) {
				for (; t--;) {
					const t = new dl;
					t.setTemplate({
						tag: "div"
					}), this.content.add(t), this.registerChild(t)
				}
			}
			_removePanels(t) {
				for (; t--;) {
					const t = this.content.last;
					this.content.remove(t), this.deregisterChild(t), t.destroy()
				}
			}
			updatePosition() {
				if (this.numberOfPanels) {
					const {
						top: t,
						left: e
					} = this._balloonPanelView, {
						width: n,
						height: o
					} = new es(this._balloonPanelView.element);
					Object.assign(this, {
						top: t,
						left: e,
						width: n,
						height: o
					})
				}
			}
		}

		function Xf(t) {
			const e = t.editing.view,
				n = bh.defaultPositions;
			return {
				target: e.domConverter.viewToDom(e.document.selection.getSelectedElement()),
				positions: [n.northArrowSouth, n.northArrowSouthWest, n.northArrowSouthEast, n.southArrowNorth, n.southArrowNorthWest,
					n.southArrowNorthEast
				]
			}
		}
		class tg extends Gl {
			static get requires() {
				return [Qf]
			}
			static get pluginName() {
				return "ImageTextAlternativeUI"
			}
			init() {
				this._createButton(), this._createForm()
			}
			destroy() {
				super.destroy(), this._form.destroy()
			}
			_createButton() {
				const t = this.editor,
					e = t.t;
				t.ui.componentFactory.add("imageTextAlternative", n => {
					const o = t.commands.get("imageTextAlternative"),
						i = new El(n);
					return i.set({
						label: e("Change image text alternative"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',
						tooltip: !0
					}), i.bind("isEnabled").to(o, "isEnabled"), this.listenTo(i, "execute", () => {
						this._showForm()
					}), i
				})
			}
			_createForm() {
				const t = this.editor,
					e = t.editing.view.document;
				this._balloon = this.editor.plugins.get("ContextualBalloon"), this._form = new $f(t.locale), this._form.render(),
					this.listenTo(this._form, "submit", () => {
						t.execute("imageTextAlternative", {
							newValue: this._form.labeledInput.fieldView.element.value
						}), this._hideForm(!0)
					}), this.listenTo(this._form, "cancel", () => {
						this._hideForm(!0)
					}), this._form.keystrokes.set("Esc", (t, e) => {
						this._hideForm(!0), e()
					}), this.listenTo(t.ui, "update", () => {
						Ih(e.selection) ? this._isVisible && function(t) {
							const e = t.plugins.get("ContextualBalloon");
							if (Ih(t.editing.view.document.selection)) {
								const n = Xf(t);
								e.updatePosition(n)
							}
						}(t) : this._hideForm(!0)
					}), Ll({
						emitter: this._form,
						activator: () => this._isVisible,
						contextElements: [this._balloon.view.element],
						callback: () => this._hideForm()
					})
			}
			_showForm() {
				if (this._isVisible) return;
				const t = this.editor,
					e = t.commands.get("imageTextAlternative"),
					n = this._form.labeledInput;
				this._isInBalloon || this._balloon.add({
					view: this._form,
					position: Xf(t)
				}), n.fieldView.value = n.fieldView.element.value = e.value || "", this._form.labeledInput.fieldView.select()
			}
			_hideForm(t) {
				this._isInBalloon && (this._form.focusTracker.isFocused && this._form.saveButtonView.focus(), this._balloon.remove(
					this._form), t && this.editor.editing.view.focus())
			}
			get _isVisible() {
				return this._balloon.visibleView === this._form
			}
			get _isInBalloon() {
				return this._balloon.hasView(this._form)
			}
		}
		class eg extends Gl {
			static get requires() {
				return [Ff, tg]
			}
			static get pluginName() {
				return "ImageTextAlternative"
			}
		}
		n(65);
		class ng extends Gl {
			static get requires() {
				return [Vh, Vf, eg]
			}
			static get pluginName() {
				return "Image"
			}
		}
		class og extends dl {
			constructor(t) {
				super(t), this.buttonView = new El(t), this._fileInputView = new ig(t), this._fileInputView.bind(
					"acceptedType").to(this), this._fileInputView.bind("allowMultipleFiles").to(this), this._fileInputView.delegate(
					"done").to(this), this.setTemplate({
					tag: "span",
					attributes: {
						class: "ck-file-dialog-button"
					},
					children: [this.buttonView, this._fileInputView]
				}), this.buttonView.on("execute", () => {
					this._fileInputView.open()
				})
			}
			focus() {
				this.buttonView.focus()
			}
		}
		class ig extends dl {
			constructor(t) {
				super(t), this.set("acceptedType"), this.set("allowMultipleFiles", !1);
				const e = this.bindTemplate;
				this.setTemplate({
					tag: "input",
					attributes: {
						class: ["ck-hidden"],
						type: "file",
						tabindex: "-1",
						accept: e.to("acceptedType"),
						multiple: e.to("allowMultipleFiles")
					},
					on: {
						change: e.to(() => {
							this.element && this.element.files && this.element.files.length && this.fire("done", this.element.files),
								this.element.value = ""
						})
					}
				})
			}
			open() {
				this.element.click()
			}
		}

		function rg(t) {
			const e = t.map(t => t.replace("+", "\\+"));
			return new RegExp(`^image\\/(${e.join("|")})$`)
		}
		class sg extends Gl {
			init() {
				const t = this.editor,
					e = t.t;
				t.ui.componentFactory.add("imageUpload", n => {
					const o = new og(n),
						i = t.commands.get("imageUpload"),
						r = t.config.get("image.upload.types"),
						s = rg(r);
					return o.set({
						acceptedType: r.map(t => "image/" + t).join(","),
						allowMultipleFiles: !0
					}), o.buttonView.set({
						label: e("Insert image"),
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',
						tooltip: !0
					}), o.buttonView.bind("isEnabled").to(i), o.on("done", (e, n) => {
						const o = Array.from(n).filter(t => s.test(t.type));
						o.length && t.execute("imageUpload", {
							file: o
						})
					}), o
				})
			}
		}
		n(67), n(69), n(71);
		class ag extends Gl {
			constructor(t) {
				super(t), this.placeholder = "data:image/svg+xml;utf8," + encodeURIComponent(
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>')
			}
			init() {
				this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image", (...t) => this.uploadStatusChange(
					...t))
			}
			uploadStatusChange(t, e, n) {
				const o = this.editor,
					i = e.item,
					r = i.getAttribute("uploadId");
				if (!n.consumable.consume(e.item, t.name)) return;
				const s = o.plugins.get(Vu),
					a = r ? e.attributeNewValue : null,
					c = this.placeholder,
					l = o.editing.mapper.toViewElement(i),
					d = n.writer;
				if ("reading" == a) return cg(l, d), void lg(c, l, d);
				if ("uploading" == a) {
					const t = s.loaders.get(r);
					return cg(l, d), void(t ? (dg(l, d), function(t, e, n, o) {
						const i = function(t) {
							const e = t.createUIElement("div", {
								class: "ck-progress-bar"
							});
							return t.setCustomProperty("progressBar", !0, e), e
						}(e);
						e.insert(e.createPositionAt(t, "end"), i), n.on("change:uploadedPercent", (t, e, n) => {
							o.change(t => {
								t.setStyle("width", n + "%", i)
							})
						})
					}(l, d, t, o.editing.view), function(t, e, n) {
						if (n.data) {
							const o = Dh(t);
							e.setAttribute("src", n.data, o)
						}
					}(l, d, t)) : lg(c, l, d))
				}
				"complete" == a && s.loaders.get(r) && function(t, e, n) {
						const o = e.createUIElement("div", {
							class: "ck-image-upload-complete-icon"
						});
						e.insert(e.createPositionAt(t, "end"), o), setTimeout(() => {
							n.change(t => t.remove(t.createRangeOn(o)))
						}, 3e3)
					}(l, d, o.editing.view),
					function(t, e) {
						hg(t, e, "progressBar")
					}(l, d), dg(l, d),
					function(t, e) {
						e.removeClass("ck-appear", t)
					}(l, d)
			}
		}

		function cg(t, e) {
			t.hasClass("ck-appear") || e.addClass("ck-appear", t)
		}

		function lg(t, e, n) {
			e.hasClass("ck-image-upload-placeholder") || n.addClass("ck-image-upload-placeholder", e);
			const o = Dh(e);
			o.getAttribute("src") !== t && n.setAttribute("src", t, o), ug(e, "placeholder") || n.insert(n.createPositionAfter(
				o), function(t) {
				const e = t.createUIElement("div", {
					class: "ck-upload-placeholder-loader"
				});
				return t.setCustomProperty("placeholder", !0, e), e
			}(n))
		}

		function dg(t, e) {
			t.hasClass("ck-image-upload-placeholder") && e.removeClass("ck-image-upload-placeholder", t), hg(t, e,
				"placeholder")
		}

		function ug(t, e) {
			for (const n of t.getChildren())
				if (n.getCustomProperty(e)) return n
		}

		function hg(t, e, n) {
			const o = ug(t, n);
			o && e.remove(e.createRangeOn(o))
		}
		class fg {
			constructor(t) {
				this.document = t
			}
			createDocumentFragment(t) {
				return new Ti(this.document, t)
			}
			createElement(t, e, n) {
				return new Ro(this.document, t, e, n)
			}
			createText(t) {
				return new Rn(this.document, t)
			}
			clone(t, e = !1) {
				return t._clone(e)
			}
			appendChild(t, e) {
				return e._appendChild(t)
			}
			insertChild(t, e, n) {
				return n._insertChild(t, e)
			}
			removeChildren(t, e, n) {
				return n._removeChildren(t, e)
			}
			remove(t) {
				const e = t.parent;
				return e ? this.removeChildren(e.getChildIndex(t), 1, e) : []
			}
			replace(t, e) {
				const n = t.parent;
				if (n) {
					const o = n.getChildIndex(t);
					return this.removeChildren(o, 1, n), this.insertChild(o, e, n), !0
				}
				return !1
			}
			unwrapElement(t) {
				const e = t.parent;
				if (e) {
					const n = e.getChildIndex(t);
					this.remove(t), this.insertChild(n, t.getChildren(), e)
				}
			}
			rename(t, e) {
				const n = new Ro(this.document, t, e.getAttributes(), e.getChildren());
				return this.replace(e, n) ? n : null
			}
			setAttribute(t, e, n) {
				n._setAttribute(t, e)
			}
			removeAttribute(t, e) {
				e._removeAttribute(t)
			}
			addClass(t, e) {
				e._addClass(t)
			}
			removeClass(t, e) {
				e._removeClass(t)
			}
			setStyle(t, e, n) {
				y(t) && void 0 === n && (n = e), n._setStyle(t, e)
			}
			removeStyle(t, e) {
				e._removeStyle(t)
			}
			setCustomProperty(t, e, n) {
				n._setCustomProperty(t, e)
			}
			removeCustomProperty(t, e) {
				return e._removeCustomProperty(t)
			}
			createPositionAt(t, e) {
				return Xo._createAt(t, e)
			}
			createPositionAfter(t) {
				return Xo._createAfter(t)
			}
			createPositionBefore(t) {
				return Xo._createBefore(t)
			}
			createRange(t, e) {
				return new ti(t, e)
			}
			createRangeOn(t) {
				return ti._createOn(t)
			}
			createRangeIn(t) {
				return ti._createIn(t)
			}
			createSelection(t, e, n) {
				return new oi(t, e, n)
			}
		}
		class gg extends Zl {
			refresh() {
				this.isEnabled = Rh(this.editor.model)
			}
			execute(t) {
				const e = this.editor,
					n = e.model,
					o = e.plugins.get(Vu);
				n.change(e => {
					const i = Array.isArray(t.file) ? t.file : [t.file];
					for (const t of i) mg(e, n, o, t)
				})
			}
		}

		function mg(t, e, n, o) {
			const i = n.createLoader(o);
			i && Oh(t, e, {
				uploadId: i.id
			})
		}
		class pg extends Gl {
			static get requires() {
				return [Vu, xf, Jl]
			}
			static get pluginName() {
				return "ImageUploadEditing"
			}
			constructor(t) {
				super(t), t.config.define("image", {
					upload: {
						types: ["jpeg", "png", "gif", "bmp", "webp", "tiff"]
					}
				})
			}
			init() {
				const t = this.editor,
					e = t.model.document,
					n = t.model.schema,
					o = t.conversion,
					i = t.plugins.get(Vu),
					r = rg(t.config.get("image.upload.types"));
				n.extend("image", {
					allowAttributes: ["uploadId", "uploadStatus"]
				}), t.commands.add("imageUpload", new gg(t)), o.for("upcast").attributeToAttribute({
					view: {
						name: "img",
						key: "uploadId"
					},
					model: "uploadId"
				}), this.listenTo(t.editing.view.document, "clipboardInput", (e, n) => {
					if (o = n.dataTransfer, Array.from(o.types).includes("text/html") && "" !== o.getData("text/html")) return;
					var o;
					const i = Array.from(n.dataTransfer.files).filter(t => !!t && r.test(t.type)),
						s = n.targetRanges.map(e => t.editing.mapper.toModelRange(e));
					t.model.change(n => {
						n.setSelection(s), i.length && (e.stop(), t.model.enqueueChange("default", () => {
							t.execute("imageUpload", {
								file: i
							})
						}))
					})
				}), this.listenTo(t.plugins.get(Jl), "inputTransformation", (e, n) => {
					const o = Array.from(t.editing.view.createRangeIn(n.content)).filter(t => {
						return !(!(e = t.item).is("element", "img") || !e.getAttribute("src")) && (e.getAttribute("src").match(
							/^data:image\/\w+;base64,/g) || e.getAttribute("src").match(/^blob:/g)) && !t.item.getAttribute(
							"uploadProcessed");
						var e
					}).map(t => {
						return {
							promise: (e = t.item, new Promise((t, n) => {
								const o = e.getAttribute("src");
								fetch(o).then(t => t.blob()).then(e => {
									const n = function(t, e) {
											return t.type ? t.type : e.match(/data:(image\/\w+);base64/) ? e.match(
												/data:(image\/\w+);base64/)[1].toLowerCase() : "image/jpeg"
										}(e, o),
										i = n.replace("image/", ""),
										r = new File([e], "image." + i, {
											type: n
										});
									t(r)
								}).catch(n)
							})),
							imageElement: t.item
						};
						var e
					});
					if (!o.length) return;
					const r = new fg(t.editing.view.document);
					for (const t of o) {
						r.setAttribute("uploadProcessed", !0, t.imageElement);
						const e = i.createLoader(t.promise);
						e && (r.setAttribute("src", "", t.imageElement), r.setAttribute("uploadId", e.id, t.imageElement))
					}
				}), t.editing.view.document.on("dragover", (t, e) => {
					e.preventDefault()
				}), e.on("change", () => {
					const n = e.differ.getChanges({
						includeChangesInGraveyard: !0
					});
					for (const e of n)
						if ("insert" == e.type && "$text" != e.name) {
							const n = e.position.nodeAfter,
								o = "$graveyard" == e.position.root.rootName;
							for (const e of bg(t, n)) {
								const t = e.getAttribute("uploadId");
								if (!t) continue;
								const n = i.loaders.get(t);
								n && (o ? n.abort() : "idle" == n.status && this._readAndUpload(n, e))
							}
						}
				})
			}
			_readAndUpload(t, e) {
				const n = this.editor,
					o = n.model,
					i = n.locale.t,
					r = n.plugins.get(Vu),
					s = n.plugins.get(xf);
				return o.enqueueChange("transparent", t => {
					t.setAttribute("uploadStatus", "reading", e)
				}), t.read().then(() => {
					const i = t.upload();
					if (hi.isSafari) {
						const t = Dh(n.editing.mapper.toViewElement(e));
						n.editing.view.once("render", () => {
							if (!t.parent) return;
							const e = n.editing.view.domConverter.mapViewToDom(t.parent);
							if (!e) return;
							const o = e.style.display;
							e.style.display = "none", e._ckHack = e.offsetHeight, e.style.display = o
						})
					}
					return o.enqueueChange("transparent", t => {
						t.setAttribute("uploadStatus", "uploading", e)
					}), i
				}).then(t => {
					o.enqueueChange("transparent", n => {
						n.setAttributes({
							uploadStatus: "complete",
							src: t.default
						}, e), this._parseAndSetSrcsetAttributeOnImage(t, e, n)
					}), a()
				}).catch(n => {
					if ("error" !== t.status && "aborted" !== t.status) throw n;
					"error" == t.status && n && s.showWarning(n, {
						title: i("Upload failed"),
						namespace: "upload"
					}), a(), o.enqueueChange("transparent", t => {
						t.remove(e)
					})
				});

				function a() {
					o.enqueueChange("transparent", t => {
						t.removeAttribute("uploadId", e), t.removeAttribute("uploadStatus", e)
					}), r.destroyLoader(t)
				}
			}
			_parseAndSetSrcsetAttributeOnImage(t, e, n) {
				let o = 0;
				const i = Object.keys(t).filter(t => {
					const e = parseInt(t, 10);
					if (!isNaN(e)) return o = Math.max(o, e), !0
				}).map(e => `${t[e]} ${e}w`).join(", ");
				"" != i && n.setAttribute("srcset", {
					data: i,
					width: o
				}, e)
			}
		}

		function bg(t, e) {
			return Array.from(t.model.createRangeOn(e)).filter(t => t.item.is("image")).map(t => t.item)
		}
		class wg extends Gl {
			static get pluginName() {
				return "ImageUpload"
			}
			static get requires() {
				return [pg, sg, ag]
			}
		}
		class kg extends Zl {
			refresh() {
				const t = this.editor.model,
					e = Kd(t.document.selection.getSelectedBlocks());
				this.value = !!e && e.is("paragraph"), this.isEnabled = !!e && _g(e, t.schema)
			}
			execute(t = {}) {
				const e = this.editor.model,
					n = e.document;
				e.change(o => {
					const i = (t.selection || n.selection).getSelectedBlocks();
					for (const t of i) !t.is("paragraph") && _g(t, e.schema) && o.rename(t, "paragraph")
				})
			}
		}

		function _g(t, e) {
			return e.checkChild(t.parent, "paragraph") && !e.isObject(t)
		}
		class vg extends Zl {
			execute(t) {
				const e = this.editor.model;
				let n = t.position;
				e.change(t => {
					const o = t.createElement("paragraph");
					if (!e.schema.checkChild(n.parent, o)) {
						const i = e.schema.findAllowedParent(n, o);
						if (!i) return;
						n = t.split(n, i).position
					}
					e.insertContent(o, n), t.setSelection(o, "in")
				})
			}
		}
		class yg extends Gl {
			static get pluginName() {
				return "Paragraph"
			}
			init() {
				const t = this.editor,
					e = t.model,
					n = t.data;
				t.commands.add("paragraph", new kg(t)), t.commands.add("insertParagraph", new vg(t)), e.schema.register(
					"paragraph", {
						inheritAllFrom: "$block"
					}), t.conversion.elementToElement({
					model: "paragraph",
					view: "p"
				}), t.conversion.for("upcast").elementToElement({
					model: (t, e) => yg.paragraphLikeElements.has(t.name) ? t.isEmpty ? null : e.createElement("paragraph") : null,
					converterPriority: "low"
				}), n.upcastDispatcher.on("element", (t, e, n) => {
					n.consumable.test(e.viewItem, {
						name: e.viewItem.name
					}) && Ag(e.viewItem, e.modelCursor, n.schema) && Object.assign(e, xg(e.viewItem, e.modelCursor, n))
				}, {
					priority: "low"
				}), n.upcastDispatcher.on("text", (t, e, n) => {
					e.modelRange || Ag(e.viewItem, e.modelCursor, n.schema) && Object.assign(e, xg(e.viewItem, e.modelCursor,
						n))
				}, {
					priority: "lowest"
				}), e.document.registerPostFixer(t => this._autoparagraphEmptyRoots(t)), t.data.on("ready", () => {
					e.enqueueChange("transparent", t => this._autoparagraphEmptyRoots(t))
				}, {
					priority: "lowest"
				})
			}
			_autoparagraphEmptyRoots(t) {
				const e = this.editor.model;
				for (const n of e.document.getRootNames()) {
					const o = e.document.getRoot(n);
					if (o.isEmpty && "$graveyard" != o.rootName && e.schema.checkChild(o, "paragraph")) return t.insertElement(
						"paragraph", o), !0
				}
			}
		}

		function xg(t, e, n) {
			const o = n.writer.createElement("paragraph");
			return n.writer.insert(o, e), n.convertItem(t, n.writer.createPositionAt(o, 0))
		}

		function Ag(t, e, n) {
			const o = n.createContext(e);
			return !!n.checkChild(o, "paragraph") && !!n.checkChild(o.push("paragraph"), t)
		}
		yg.paragraphLikeElements = new Set(["blockquote", "dd", "div", "dt", "h1", "h2", "h3", "h4", "h5", "h6", "li",
			"p", "td"
		]);
		class Cg extends Zl {
			constructor(t, e) {
				super(t), this.modelElements = e
			}
			refresh() {
				const t = Kd(this.editor.model.document.selection.getSelectedBlocks());
				this.value = !!t && this.modelElements.includes(t.name) && t.name, this.isEnabled = !!t && this.modelElements
					.some(e => Tg(t, e, this.editor.model.schema))
			}
			execute(t) {
				const e = this.editor.model,
					n = e.document,
					o = t.value;
				e.change(t => {
					const i = Array.from(n.selection.getSelectedBlocks()).filter(t => Tg(t, o, e.schema));
					for (const e of i) e.is(o) || t.rename(e, o)
				})
			}
		}

		function Tg(t, e, n) {
			return n.checkChild(t.parent, e) && !n.isObject(t)
		}
		class Sg extends Gl {
			static get pluginName() {
				return "HeadingEditing"
			}
			constructor(t) {
				super(t), t.config.define("heading", {
					options: [{
						model: "paragraph",
						title: "Paragraph",
						class: "ck-heading_paragraph"
					}, {
						model: "heading1",
						view: "h2",
						title: "Heading 1",
						class: "ck-heading_heading1"
					}, {
						model: "heading2",
						view: "h3",
						title: "Heading 2",
						class: "ck-heading_heading2"
					}, {
						model: "heading3",
						view: "h4",
						title: "Heading 3",
						class: "ck-heading_heading3"
					}]
				})
			}
			static get requires() {
				return [yg]
			}
			init() {
				const t = this.editor,
					e = t.config.get("heading.options"),
					n = [];
				for (const o of e) "paragraph" !== o.model && (t.model.schema.register(o.model, {
					inheritAllFrom: "$block"
				}), t.conversion.elementToElement(o), n.push(o.model));
				this._addDefaultH1Conversion(t), t.commands.add("heading", new Cg(t, n))
			}
			afterInit() {
				const t = this.editor,
					e = t.commands.get("enter"),
					n = t.config.get("heading.options");
				e && this.listenTo(e, "afterExecute", (e, o) => {
					const i = t.model.document.selection.getFirstPosition().parent;
					n.some(t => i.is(t.model)) && !i.is("paragraph") && 0 === i.childCount && o.writer.rename(i, "paragraph")
				})
			}
			_addDefaultH1Conversion(t) {
				t.conversion.for("upcast").elementToElement({
					model: "heading1",
					view: "h1",
					converterPriority: un.get("low") + 1
				})
			}
		}
		n(11);
		class Pg extends Gl {
			init() {
				const t = this.editor,
					e = t.t,
					n = function(t) {
						const e = t.t,
							n = {
								Paragraph: e("Paragraph"),
								"Heading 1": e("Heading 1"),
								"Heading 2": e("Heading 2"),
								"Heading 3": e("Heading 3"),
								"Heading 4": e("Heading 4"),
								"Heading 5": e("Heading 5"),
								"Heading 6": e("Heading 6")
							};
						return t.config.get("heading.options").map(t => {
							const e = n[t.title];
							return e && e != t.title && (t.title = e), t
						})
					}(t),
					o = e("Choose heading"),
					i = e("Heading");
				t.ui.componentFactory.add("heading", e => {
					const r = {},
						s = new An,
						a = t.commands.get("heading"),
						c = t.commands.get("paragraph"),
						l = [a];
					for (const t of n) {
						const e = {
							type: "button",
							model: new ku({
								label: t.title,
								class: t.class,
								withText: !0
							})
						};
						"paragraph" === t.model ? (e.model.bind("isOn").to(c, "value"), e.model.set("commandName", "paragraph"),
							l.push(c)) : (e.model.bind("isOn").to(a, "value", e => e === t.model), e.model.set({
							commandName: "heading",
							commandValue: t.model
						})), s.add(e), r[t.model] = t.title
					}
					const d = jl(e);
					return zl(d, s), d.buttonView.set({
						isOn: !1,
						withText: !0,
						tooltip: i
					}), d.extendTemplate({
						attributes: {
							class: ["ck-heading-dropdown"]
						}
					}), d.bind("isEnabled").toMany(l, "isEnabled", (...t) => t.some(t => t)), d.buttonView.bind("label").to(a,
						"value", c, "value", (t, e) => {
							const n = t || e && "paragraph";
							return r[n] ? r[n] : o
						}), this.listenTo(d, "execute", e => {
						t.execute(e.source.commandName, e.source.commandValue ? {
							value: e.source.commandValue
						} : void 0), t.editing.view.focus()
					}), d
				})
			}
		}

		function Eg(t) {
			for (const e of t.getChildren())
				if (e && e.is("caption")) return e;
			return null
		}

		function Mg(t) {
			const e = t.parent;
			return "figcaption" == t.name && e && "figure" == e.name && e.hasClass("image") ? {
				name: !0
			} : null
		}
		class Ig extends Gl {
			static get pluginName() {
				return "ImageCaptionEditing"
			}
			init() {
				const t = this.editor,
					e = t.editing.view,
					n = t.model.schema,
					o = t.data,
					i = t.editing,
					r = t.t;
				n.register("caption", {
					allowIn: "image",
					allowContentOf: "$block",
					isLimit: !0
				}), t.model.document.registerPostFixer(t => this._insertMissingModelCaptionElement(t)), t.conversion.for(
					"upcast").elementToElement({
					view: Mg,
					model: "caption"
				});
				o.downcastDispatcher.on("insert:caption", Ng(t => t.createContainerElement("figcaption"), !1));
				const s = function(t, e) {
					return n => {
						const o = n.createEditableElement("figcaption");
						return n.setCustomProperty("imageCaption", !0, o), zc({
							view: t,
							element: o,
							text: e
						}), Sh(o, n)
					}
				}(e, r("Enter image caption"));
				i.downcastDispatcher.on("insert:caption", Ng(s)), i.downcastDispatcher.on("insert", this._fixCaptionVisibility(
					t => t.item), {
					priority: "high"
				}), i.downcastDispatcher.on("remove", this._fixCaptionVisibility(t => t.position.parent), {
					priority: "high"
				}), e.document.registerPostFixer(t => this._updateCaptionVisibility(t))
			}
			_updateCaptionVisibility(t) {
				const e = this.editor.editing.mapper,
					n = this._lastSelectedCaption;
				let o;
				const i = this.editor.model.document.selection,
					r = i.getSelectedElement();
				if (r && r.is("image")) {
					const t = Eg(r);
					o = e.toViewElement(t)
				}
				const s = Og(i.getFirstPosition().parent);
				if (s && (o = e.toViewElement(s)), o) return n ? (n === o || (Rg(n, t), this._lastSelectedCaption = o), Dg(o,
					t)) : (this._lastSelectedCaption = o, Dg(o, t));
				if (n) {
					const e = Rg(n, t);
					return this._lastSelectedCaption = null, e
				}
				return !1
			}
			_fixCaptionVisibility(t) {
				return (e, n, o) => {
					const i = Og(t(n)),
						r = this.editor.editing.mapper,
						s = o.writer;
					if (i) {
						const t = r.toViewElement(i);
						t && (i.childCount ? s.removeClass("ck-hidden", t) : s.addClass("ck-hidden", t))
					}
				}
			}
			_insertMissingModelCaptionElement(t) {
				const e = this.editor.model,
					n = e.document.differ.getChanges(),
					o = [];
				for (const t of n)
					if ("insert" == t.type && "$text" != t.name) {
						const n = t.position.nodeAfter;
						if (n.is("image") && !Eg(n) && o.push(n), !n.is("image") && n.childCount)
							for (const t of e.createRangeIn(n).getItems()) t.is("image") && !Eg(t) && o.push(t)
					} for (const e of o) t.appendElement("caption", e);
				return !!o.length
			}
		}

		function Ng(t, e = !0) {
			return (n, o, i) => {
				const r = o.item;
				if ((r.childCount || e) && Nh(r.parent)) {
					if (!i.consumable.consume(o.item, "insert")) return;
					const e = i.mapper.toViewElement(o.range.start.parent),
						n = t(i.writer),
						s = i.writer;
					r.childCount || s.addClass("ck-hidden", n),
						function(t, e, n, o) {
							const i = o.writer.createPositionAt(n, "end");
							o.writer.insert(i, t), o.mapper.bindElements(e, t)
						}(n, o.item, e, i)
				}
			}
		}

		function Og(t) {
			const e = t.getAncestors({
				includeSelf: !0
			}).find(t => "caption" == t.name);
			return e && e.parent && "image" == e.parent.name ? e : null
		}

		function Rg(t, e) {
			return !t.childCount && !t.hasClass("ck-hidden") && (e.addClass("ck-hidden", t), !0)
		}

		function Dg(t, e) {
			return !!t.hasClass("ck-hidden") && (e.removeClass("ck-hidden", t), !0)
		}
		n(74);
		class Lg extends Zl {
			constructor(t, e) {
				super(t), this.defaultStyle = !1, this.styles = e.reduce((t, e) => (t[e.name] = e, e.isDefault && (this.defaultStyle =
					e.name), t), {})
			}
			refresh() {
				const t = this.editor.model.document.selection.getSelectedElement();
				if (this.isEnabled = Nh(t), t)
					if (t.hasAttribute("imageStyle")) {
						const e = t.getAttribute("imageStyle");
						this.value = !!this.styles[e] && e
					} else this.value = this.defaultStyle;
				else this.value = !1
			}
			execute(t) {
				const e = t.value,
					n = this.editor.model,
					o = n.document.selection.getSelectedElement();
				n.change(t => {
					this.styles[e].isDefault ? t.removeAttribute("imageStyle", o) : t.setAttribute("imageStyle", e, o)
				})
			}
		}

		function jg(t, e) {
			for (const n of e)
				if (n.name === t) return n
		}
		var Vg =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>',
			zg =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>',
			Bg =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>',
			Fg =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>';
		const Ug = {
				full: {
					name: "full",
					title: "Full size image",
					icon: Vg,
					isDefault: !0
				},
				side: {
					name: "side",
					title: "Side image",
					icon: Fg,
					className: "image-style-side"
				},
				alignLeft: {
					name: "alignLeft",
					title: "Left aligned image",
					icon: zg,
					className: "image-style-align-left"
				},
				alignCenter: {
					name: "alignCenter",
					title: "Centered image",
					icon: Bg,
					className: "image-style-align-center"
				},
				alignRight: {
					name: "alignRight",
					title: "Right aligned image",
					icon: Fg,
					className: "image-style-align-right"
				}
			},
			Hg = {
				full: Vg,
				left: zg,
				right: Fg,
				center: Bg
			};

		function qg(t = []) {
			return t.map(Wg)
		}

		function Wg(t) {
			if ("string" == typeof t) {
				const e = t;
				Ug[e] ? t = Object.assign({}, Ug[e]) : (console.warn(Object(hn.a)(
					"image-style-not-found: There is no such image style of given name."), {
					name: e
				}), t = {
					name: e
				})
			} else if (Ug[t.name]) {
				const e = Ug[t.name],
					n = Object.assign({}, t);
				for (const o in e) Object.prototype.hasOwnProperty.call(t, o) || (n[o] = e[o]);
				t = n
			}
			return "string" == typeof t.icon && Hg[t.icon] && (t.icon = Hg[t.icon]), t
		}
		class Gg extends Gl {
			static get pluginName() {
				return "ImageStyleEditing"
			}
			init() {
				const t = this.editor,
					e = t.model.schema,
					n = t.data,
					o = t.editing;
				t.config.define("image.styles", ["full", "side"]);
				const i = qg(t.config.get("image.styles"));
				e.extend("image", {
					allowAttributes: "imageStyle"
				});
				const r = function(t) {
					return (e, n, o) => {
						if (!o.consumable.consume(n.item, e.name)) return;
						const i = jg(n.attributeNewValue, t),
							r = jg(n.attributeOldValue, t),
							s = o.mapper.toViewElement(n.item),
							a = o.writer;
						r && a.removeClass(r.className, s), i && a.addClass(i.className, s)
					}
				}(i);
				o.downcastDispatcher.on("attribute:imageStyle:image", r), n.downcastDispatcher.on(
					"attribute:imageStyle:image", r), n.upcastDispatcher.on("element:figure", function(t) {
					const e = t.filter(t => !t.isDefault);
					return (t, n, o) => {
						if (!n.modelRange) return;
						const i = n.viewItem,
							r = Kd(n.modelRange.getItems());
						if (o.schema.checkAttribute(r, "imageStyle"))
							for (const t of e) o.consumable.consume(i, {
								classes: t.className
							}) && o.writer.setAttribute("imageStyle", t.name, r)
					}
				}(i), {
					priority: "low"
				}), t.commands.add("imageStyle", new Lg(t, i))
			}
		}
		n(76);
		class Yg extends Gl {
			static get pluginName() {
				return "ImageStyleUI"
			}
			get localizedDefaultStylesTitles() {
				const t = this.editor.t;
				return {
					"Full size image": t("Full size image"),
					"Side image": t("Side image"),
					"Left aligned image": t("Left aligned image"),
					"Centered image": t("Centered image"),
					"Right aligned image": t("Right aligned image")
				}
			}
			init() {
				const t = function(t, e) {
					for (const n of t) e[n.title] && (n.title = e[n.title]);
					return t
				}(qg(this.editor.config.get("image.styles")), this.localizedDefaultStylesTitles);
				for (const e of t) this._createButton(e)
			}
			_createButton(t) {
				const e = this.editor,
					n = "imageStyle:" + t.name;
				e.ui.componentFactory.add(n, n => {
					const o = e.commands.get("imageStyle"),
						i = new El(n);
					return i.set({
						label: t.title,
						icon: t.icon,
						tooltip: !0,
						isToggleable: !0
					}), i.bind("isEnabled").to(o, "isEnabled"), i.bind("isOn").to(o, "value", e => e === t.name), this.listenTo(
						i, "execute", () => {
							e.execute("imageStyle", {
								value: t.name
							}), e.editing.view.focus()
						}), i
				})
			}
		}
		class $g extends Gl {
			static get requires() {
				return [Qf]
			}
			static get pluginName() {
				return "WidgetToolbarRepository"
			}
			init() {
				const t = this.editor;
				if (t.plugins.has("BalloonToolbar")) {
					const e = t.plugins.get("BalloonToolbar");
					this.listenTo(e, "show", e => {
						(function(t) {
							const e = t.getSelectedElement();
							return !(!e || !xh(e))
						})(t.editing.view.document.selection) && e.stop()
					}, {
						priority: "high"
					})
				}
				this._toolbarDefinitions = new Map, this._balloon = this.editor.plugins.get("ContextualBalloon"), this.on(
					"change:isEnabled", () => {
						this._updateToolbarsVisibility()
					}), this.listenTo(t.ui, "update", () => {
					this._updateToolbarsVisibility()
				}), this.listenTo(t.ui.focusTracker, "change:isFocused", () => {
					this._updateToolbarsVisibility()
				}, {
					priority: "low"
				})
			}
			destroy() {
				super.destroy();
				for (const t of this._toolbarDefinitions.values()) t.view.destroy()
			}
			register(t, {
				ariaLabel: e,
				items: n,
				getRelatedElement: o,
				balloonClassName: i = "ck-toolbar-container"
			}) {
				if (!n.length) return void console.warn(Object(hn.a)(
					"widget-toolbar-no-items: Trying to register a toolbar without items."), {
					toolbarId: t
				});
				const r = this.editor,
					s = r.t,
					a = new Bl(r.locale);
				if (a.ariaLabel = e || s("Widget toolbar"), this._toolbarDefinitions.has(t)) throw new hn.b(
					"widget-toolbar-duplicated: Toolbar with the given id was already added.", this, {
						toolbarId: t
					});
				a.fillFromConfig(n, r.ui.componentFactory), this._toolbarDefinitions.set(t, {
					view: a,
					getRelatedElement: o,
					balloonClassName: i
				})
			}
			_updateToolbarsVisibility() {
				let t = 0,
					e = null,
					n = null;
				for (const o of this._toolbarDefinitions.values()) {
					const i = o.getRelatedElement(this.editor.editing.view.document.selection);
					if (this.isEnabled && i)
						if (this.editor.ui.focusTracker.isFocused) {
							const r = i.getAncestors().length;
							r > t && (t = r, e = i, n = o)
						} else this._isToolbarVisible(o) && this._hideToolbar(o);
					else this._isToolbarInBalloon(o) && this._hideToolbar(o)
				}
				n && this._showToolbar(n, e)
			}
			_hideToolbar(t) {
				this._balloon.remove(t.view), this.stopListening(this._balloon, "change:visibleView")
			}
			_showToolbar(t, e) {
				this._isToolbarVisible(t) ? Kg(this.editor, e) : this._isToolbarInBalloon(t) || (this._balloon.add({
					view: t.view,
					position: Qg(this.editor, e),
					balloonClassName: t.balloonClassName
				}), this.listenTo(this._balloon, "change:visibleView", () => {
					for (const t of this._toolbarDefinitions.values())
						if (this._isToolbarVisible(t)) {
							const e = t.getRelatedElement(this.editor.editing.view.document.selection);
							Kg(this.editor, e)
						}
				}))
			}
			_isToolbarVisible(t) {
				return this._balloon.visibleView === t.view
			}
			_isToolbarInBalloon(t) {
				return this._balloon.hasView(t.view)
			}
		}

		function Kg(t, e) {
			const n = t.plugins.get("ContextualBalloon"),
				o = Qg(t, e);
			n.updatePosition(o)
		}

		function Qg(t, e) {
			const n = t.editing.view,
				o = bh.defaultPositions;
			return {
				target: n.domConverter.mapViewToDom(e),
				positions: [o.northArrowSouth, o.northArrowSouthWest, o.northArrowSouthEast, o.southArrowNorth, o.southArrowNorthWest,
					o.southArrowNorthEast, Eh
				]
			}
		}
		class Jg extends Zl {
			constructor(t) {
				super(t), this._childCommands = []
			}
			refresh() {}
			execute(...t) {
				this._getFirstEnabledCommand().execute(t)
			}
			registerChildCommand(t) {
				this._childCommands.push(t), t.on("change:isEnabled", () => this._checkEnabled()), this._checkEnabled()
			}
			_checkEnabled() {
				this.isEnabled = !!this._getFirstEnabledCommand()
			}
			_getFirstEnabledCommand() {
				return this._childCommands.find(t => t.isEnabled)
			}
		}
		class Zg extends Gl {
			static get pluginName() {
				return "IndentEditing"
			}
			init() {
				const t = this.editor;
				t.commands.add("indent", new Jg(t)), t.commands.add("outdent", new Jg(t))
			}
		}
		var Xg =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95L5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',
			tm =
			'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';
		class em extends Gl {
			static get pluginName() {
				return "IndentUI"
			}
			init() {
				const t = this.editor,
					e = t.locale,
					n = t.t,
					o = "ltr" == e.uiLanguageDirection ? Xg : tm,
					i = "ltr" == e.uiLanguageDirection ? tm : Xg;
				this._defineButton("indent", n("Increase indent"), o), this._defineButton("outdent", n("Decrease indent"), i)
			}
			_defineButton(t, e, n) {
				const o = this.editor;
				o.ui.componentFactory.add(t, i => {
					const r = o.commands.get(t),
						s = new El(i);
					return s.set({
						label: e,
						icon: n,
						tooltip: !0
					}), s.bind("isOn", "isEnabled").to(r, "value", "isEnabled"), this.listenTo(s, "execute", () => {
						o.execute(t), o.editing.view.focus()
					}), s
				})
			}
		}
		class nm extends Zl {
			constructor(t, e) {
				super(t), this._indentBehavior = e
			}
			refresh() {
				const t = this.editor.model,
					e = Kd(t.document.selection.getSelectedBlocks());
				e && t.schema.checkAttribute(e, "blockIndent") ? this.isEnabled = this._indentBehavior.checkEnabled(e.getAttribute(
					"blockIndent")) : this.isEnabled = !1
			}
			execute() {
				const t = this.editor.model,
					e = function(t) {
						const e = t.document.selection,
							n = t.schema;
						return Array.from(e.getSelectedBlocks()).filter(t => n.checkAttribute(t, "blockIndent"))
					}(t);
				t.change(t => {
					for (const n of e) {
						const e = n.getAttribute("blockIndent"),
							o = this._indentBehavior.getNextIndent(e);
						o ? t.setAttribute("blockIndent", o, n) : t.removeAttribute("blockIndent", n)
					}
				})
			}
		}
		class om {
			constructor(t) {
				this.isForward = "forward" === t.direction, this.offset = t.offset, this.unit = t.unit
			}
			checkEnabled(t) {
				const e = parseFloat(t || 0);
				return this.isForward || e > 0
			}
			getNextIndent(t) {
				const e = parseFloat(t || 0);
				if (!(!t || t.endsWith(this.unit))) return this.isForward ? this.offset + this.unit : void 0;
				const n = e + (this.isForward ? this.offset : -this.offset);
				return n > 0 ? n + this.unit : void 0
			}
		}
		class im {
			constructor(t) {
				this.isForward = "forward" === t.direction, this.classes = t.classes
			}
			checkEnabled(t) {
				const e = this.classes.indexOf(t);
				return this.isForward ? e < this.classes.length - 1 : e >= 0
			}
			getNextIndent(t) {
				const e = this.classes.indexOf(t),
					n = this.isForward ? 1 : -1;
				return this.classes[e + n]
			}
		}
		new Set(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive",
			"yellow", "navy", "blue", "teal", "aqua", "orange", "aliceblue", "antiquewhite", "aquamarine", "azure",
			"beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse",
			"chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan",
			"darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen",
			"darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray",
			"darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue",
			"firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow",
			"grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush",
			"lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray",
			"lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
			"lightslategrey", "lightsteelblue", "lightyellow", "limegreen", "linen", "magenta", "mediumaquamarine",
			"mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen",
			"mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite",
			"oldlace", "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
			"papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rosybrown", "royalblue", "saddlebrown",
			"salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "slategrey",
			"snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet", "wheat", "whitesmoke",
			"yellowgreen", "rebeccapurple", "currentcolor", "transparent"
		]);

		function rm(t = "") {
			if ("" === t) return {
				top: void 0,
				right: void 0,
				bottom: void 0,
				left: void 0
			};
			const e = t.replace(/, /g, ",").split(" ").map(t => t.replace(/,/g, ", "));
			const n = e[0],
				o = e[2] || n,
				i = e[1] || n;
			return {
				top: n,
				bottom: o,
				right: i,
				left: e[3] || i
			}
		}

		function sm({
			top: t,
			right: e,
			bottom: n,
			left: o
		}) {
			const i = [];
			return o !== e ? i.push(t, e, n, o) : n !== t ? i.push(t, e, n) : e !== t ? i.push(t, e) : i.push(t), i.join(
				" ")
		}

		function am(t) {
			var e, n;
			t.setNormalizer("margin", (e = "margin", t => ({
				path: e,
				value: rm(t)
			}))), t.setNormalizer("margin-top", t => ({
				path: "margin.top",
				value: t
			})), t.setNormalizer("margin-right", t => ({
				path: "margin.right",
				value: t
			})), t.setNormalizer("margin-bottom", t => ({
				path: "margin.bottom",
				value: t
			})), t.setNormalizer("margin-left", t => ({
				path: "margin.left",
				value: t
			})), t.setReducer("margin", (n = "margin", t => {
				const {
					top: e,
					right: o,
					bottom: i,
					left: r
				} = t, s = [];
				return [e, o, r, i].every(t => !!t) ? s.push([n, sm(t)]) : (e && s.push([n + "-top", e]), o && s.push([n +
					"-right", o
				]), i && s.push([n + "-bottom", i]), r && s.push([n + "-left", r])), s
			})), t.setStyleRelation("margin", ["margin-top", "margin-right", "margin-bottom", "margin-left"])
		}
		class cm extends Dr {
			constructor(t) {
				super(t), this.domEventType = "click"
			}
			onDomEvent(t) {
				this.fire(t.type, t)
			}
		}
		n(78);
		class lm extends dl {
			constructor(t, e, n) {
				super(t);
				const o = t.t;
				this.focusTracker = new Lc, this.keystrokes = new Pc, this.urlInputView = this._createUrlInput(n), this.saveButtonView =
					this._createButton(o("Save"), Gf, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView =
					this._createButton(o("Cancel"), Yf, "ck-button-cancel", "cancel"), this._manualDecoratorSwitches = this._createManualDecoratorSwitches(
						e), this.children = this._createFormChildren(e.manualDecorators), this._focusables = new qc, this._focusCycler =
					new pl({
						focusables: this._focusables,
						focusTracker: this.focusTracker,
						keystrokeHandler: this.keystrokes,
						actions: {
							focusPrevious: "shift + tab",
							focusNext: "tab"
						}
					});
				const i = ["ck", "ck-link-form"];
				e.manualDecorators.length && i.push("ck-link-form_layout-vertical"), this.setTemplate({
					tag: "form",
					attributes: {
						class: i,
						tabindex: "-1"
					},
					children: this.children
				})
			}
			getDecoratorSwitchesState() {
				return Array.from(this._manualDecoratorSwitches).reduce((t, e) => (t[e.name] = e.isOn, t), {})
			}
			render() {
				super.render(), Wf({
					view: this
				});
				[this.urlInputView, ...this._manualDecoratorSwitches, this.saveButtonView, this.cancelButtonView].forEach(t => {
					this._focusables.add(t), this.focusTracker.add(t.element)
				}), this.keystrokes.listenTo(this.element)
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			_createUrlInput(t = "https://") {
				const e = this.locale.t,
					n = new Uf(this.locale, qf);
				return n.label = e("Link URL"), n.fieldView.placeholder = t + "example.com", n
			}
			_createButton(t, e, n, o) {
				const i = new El(this.locale);
				return i.set({
					label: t,
					icon: e,
					tooltip: !0
				}), i.extendTemplate({
					attributes: {
						class: n
					}
				}), o && i.delegate("execute").to(this, o), i
			}
			_createManualDecoratorSwitches(t) {
				const e = this.createCollection();
				for (const n of t.manualDecorators) {
					const o = new Dl(this.locale);
					o.set({
						name: n.id,
						label: n.label,
						withText: !0
					}), o.bind("isOn").toMany([n, t], "value", (t, e) => void 0 === e && void 0 === t ? n.defaultValue : t), o.on(
						"execute", () => {
							n.set("value", !o.isOn)
						}), e.add(o)
				}
				return e
			}
			_createFormChildren(t) {
				const e = this.createCollection();
				if (e.add(this.urlInputView), t.length) {
					const t = new dl;
					t.setTemplate({
						tag: "ul",
						children: this._manualDecoratorSwitches.map(t => ({
							tag: "li",
							children: [t],
							attributes: {
								class: ["ck", "ck-list__item"]
							}
						})),
						attributes: {
							class: ["ck", "ck-reset", "ck-list"]
						}
					}), e.add(t)
				}
				return e.add(this.saveButtonView), e.add(this.cancelButtonView), e
			}
		}
		n(80);
		class dm extends dl {
			constructor(t) {
				super(t);
				const e = t.t;
				this.focusTracker = new Lc, this.keystrokes = new Pc, this.previewButtonView = this._createPreviewButton(),
					this.unlinkButtonView = this._createButton(e("Unlink"),
						'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',
						"unlink"), this.editButtonView = this._createButton(e("Edit link"),
						'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z"/></svg>',
						"edit"), this.set("href"), this._focusables = new qc, this._focusCycler = new pl({
						focusables: this._focusables,
						focusTracker: this.focusTracker,
						keystrokeHandler: this.keystrokes,
						actions: {
							focusPrevious: "shift + tab",
							focusNext: "tab"
						}
					}), this.setTemplate({
						tag: "div",
						attributes: {
							class: ["ck", "ck-link-actions"],
							tabindex: "-1"
						},
						children: [this.previewButtonView, this.editButtonView, this.unlinkButtonView]
					})
			}
			render() {
				super.render();
				[this.previewButtonView, this.editButtonView, this.unlinkButtonView].forEach(t => {
					this._focusables.add(t), this.focusTracker.add(t.element)
				}), this.keystrokes.listenTo(this.element)
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			_createButton(t, e, n) {
				const o = new El(this.locale);
				return o.set({
					label: t,
					icon: e,
					tooltip: !0
				}), o.delegate("execute").to(this, n), o
			}
			_createPreviewButton() {
				const t = new El(this.locale),
					e = this.bindTemplate,
					n = this.t;
				return t.set({
					withText: !0,
					tooltip: n("Open link in new tab")
				}), t.extendTemplate({
					attributes: {
						class: ["ck", "ck-link-actions__preview"],
						href: e.to("href", t => t && _f(t)),
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}), t.bind("label").to(this, "href", t => t || n("This link has no URL")), t.bind("isEnabled").to(this,
					"href", t => !!t), t.template.tag = "a", t.template.eventListeners = {}, t
			}
		}
		const um = /^((\w+:(\/{2,})?)|(\W))/i,
			hm = /[\w-]+@[\w-]+\.+[\w-]+/i;
		class fm extends Gl {
			static get requires() {
				return [Qf]
			}
			static get pluginName() {
				return "LinkUI"
			}
			init() {
				const t = this.editor;
				t.editing.view.addObserver(cm), this.actionsView = this._createActionsView(), this.formView = this._createFormView(),
					this._balloon = t.plugins.get(Qf), this._createToolbarLinkButton(), this._enableUserBalloonInteractions(), t
					.conversion.for("downcast").markerToHighlight({
						model: "link-ui",
						view: {
							classes: ["ck-fake-link-selection"]
						}
					}), t.conversion.for("downcast").markerToElement({
						model: "link-ui",
						view: {
							name: "span",
							classes: ["ck-fake-link-selection", "ck-fake-link-selection_collapsed"]
						}
					})
			}
			destroy() {
				super.destroy(), this.formView.destroy()
			}
			_createActionsView() {
				const t = this.editor,
					e = new dm(t.locale),
					n = t.commands.get("link"),
					o = t.commands.get("unlink");
				return e.bind("href").to(n, "value"), e.editButtonView.bind("isEnabled").to(n), e.unlinkButtonView.bind(
					"isEnabled").to(o), this.listenTo(e, "edit", () => {
					this._addFormView()
				}), this.listenTo(e, "unlink", () => {
					t.execute("unlink"), this._hideUI()
				}), e.keystrokes.set("Esc", (t, e) => {
					this._hideUI(), e()
				}), e.keystrokes.set("Ctrl+K", (t, e) => {
					this._addFormView(), e()
				}), e
			}
			_createFormView() {
				const t = this.editor,
					e = t.commands.get("link"),
					n = t.config.get("link.defaultProtocol"),
					o = new lm(t.locale, e, n);
				return o.urlInputView.fieldView.bind("value").to(e, "value"), o.urlInputView.bind("isReadOnly").to(e,
					"isEnabled", t => !t), o.saveButtonView.bind("isEnabled").to(e), this.listenTo(o, "submit", () => {
					const {
						value: e
					} = o.urlInputView.fieldView.element, i = !!n && !um.test(e), r = hm.test(e), s = e && i ? (r ? "mailto:" :
						n) + e : e;
					t.execute("link", s, o.getDecoratorSwitchesState()), this._closeFormView()
				}), this.listenTo(o, "cancel", () => {
					this._closeFormView()
				}), o.keystrokes.set("Esc", (t, e) => {
					this._closeFormView(), e()
				}), o
			}
			_createToolbarLinkButton() {
				const t = this.editor,
					e = t.commands.get("link"),
					n = t.t;
				t.keystrokes.set("Ctrl+K", (t, e) => {
					e(), this._showUI(!0)
				}), t.ui.componentFactory.add("link", t => {
					const o = new El(t);
					return o.isEnabled = !0, o.label = n("Link"), o.icon =
						'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',
						o.keystroke = "Ctrl+K", o.tooltip = !0, o.isToggleable = !0, o.bind("isEnabled").to(e, "isEnabled"), o.bind(
							"isOn").to(e, "value", t => !!t), this.listenTo(o, "execute", () => this._showUI(!0)), o
				})
			}
			_enableUserBalloonInteractions() {
				const t = this.editor.editing.view.document;
				this.listenTo(t, "click", () => {
					this._getSelectedLinkElement() && this._showUI()
				}), this.editor.keystrokes.set("Tab", (t, e) => {
					this._areActionsVisible && !this.actionsView.focusTracker.isFocused && (this.actionsView.focus(), e())
				}, {
					priority: "high"
				}), this.editor.keystrokes.set("Esc", (t, e) => {
					this._isUIVisible && (this._hideUI(), e())
				}), Ll({
					emitter: this.formView,
					activator: () => this._isUIInPanel,
					contextElements: [this._balloon.view.element],
					callback: () => this._hideUI()
				})
			}
			_addActionsView() {
				this._areActionsInPanel || this._balloon.add({
					view: this.actionsView,
					position: this._getBalloonPositionData()
				})
			}
			_addFormView() {
				if (this._isFormInPanel) return;
				const t = this.editor.commands.get("link");
				this._balloon.add({
						view: this.formView,
						position: this._getBalloonPositionData()
					}), this._balloon.visibleView === this.formView && this.formView.urlInputView.fieldView.select(), this.formView
					.urlInputView.fieldView.element.value = t.value || ""
			}
			_closeFormView() {
				const t = this.editor.commands.get("link");
				t.restoreManualDecoratorStates(), void 0 !== t.value ? this._removeFormView() : this._hideUI()
			}
			_removeFormView() {
				this._isFormInPanel && (this.formView.saveButtonView.focus(), this._balloon.remove(this.formView), this.editor
					.editing.view.focus(), this._hideFakeVisualSelection())
			}
			_showUI(t = !1) {
				this._getSelectedLinkElement() ? (this._areActionsVisible ? this._addFormView() : this._addActionsView(), t &&
					this._balloon.showStack("main")) : (this._addActionsView(), t && this._balloon.showStack("main"), this._addFormView(),
					this._showFakeVisualSelection()), this._startUpdatingUI()
			}
			_hideUI() {
				if (!this._isUIInPanel) return;
				const t = this.editor;
				this.stopListening(t.ui, "update"), this.stopListening(this._balloon, "change:visibleView"), t.editing.view.focus(),
					this._removeFormView(), this._balloon.remove(this.actionsView), this._hideFakeVisualSelection()
			}
			_startUpdatingUI() {
				const t = this.editor,
					e = t.editing.view.document;
				let n = this._getSelectedLinkElement(),
					o = r();
				const i = () => {
					const t = this._getSelectedLinkElement(),
						e = r();
					n && !t || !n && e !== o ? this._hideUI() : this._isUIVisible && this._balloon.updatePosition(this._getBalloonPositionData()),
						n = t, o = e
				};

				function r() {
					return e.selection.focus.getAncestors().reverse().find(t => t.is("element"))
				}
				this.listenTo(t.ui, "update", i), this.listenTo(this._balloon, "change:visibleView", i)
			}
			get _isFormInPanel() {
				return this._balloon.hasView(this.formView)
			}
			get _areActionsInPanel() {
				return this._balloon.hasView(this.actionsView)
			}
			get _areActionsVisible() {
				return this._balloon.visibleView === this.actionsView
			}
			get _isUIInPanel() {
				return this._isFormInPanel || this._areActionsInPanel
			}
			get _isUIVisible() {
				return this._balloon.visibleView == this.formView || this._areActionsVisible
			}
			_getBalloonPositionData() {
				const t = this.editor.editing.view,
					e = t.document,
					n = this._getSelectedLinkElement();
				return {
					target: n ? t.domConverter.mapViewToDom(n) : t.domConverter.viewRangeToDom(e.selection.getFirstRange())
				}
			}
			_getSelectedLinkElement() {
				const t = this.editor.editing.view,
					e = t.document.selection;
				if (e.isCollapsed) return gm(e.getFirstPosition()); {
					const n = e.getFirstRange().getTrimmed(),
						o = gm(n.start),
						i = gm(n.end);
					return o && o == i && t.createRangeIn(o).getTrimmed().isEqual(n) ? o : null
				}
			}
			_showFakeVisualSelection() {
				const t = this.editor.model;
				t.change(e => {
					t.markers.has("link-ui") ? e.updateMarker("link-ui", {
						range: t.document.selection.getFirstRange()
					}) : e.addMarker("link-ui", {
						usingOperation: !1,
						affectsData: !1,
						range: t.document.selection.getFirstRange()
					})
				})
			}
			_hideFakeVisualSelection() {
				const t = this.editor.model;
				t.markers.has("link-ui") && t.change(t => {
					t.removeMarker("link-ui")
				})
			}
		}

		function gm(t) {
			return t.getAncestors().find(t => {
				return (e = t).is("attributeElement") && !!e.getCustomProperty("link");
				var e
			})
		}
		class mm extends Zl {
			constructor(t, e) {
				super(t), this.type = e
			}
			refresh() {
				this.value = this._getValue(), this.isEnabled = this._checkEnabled()
			}
			execute() {
				const t = this.editor.model,
					e = t.document,
					n = Array.from(e.selection.getSelectedBlocks()).filter(e => bm(e, t.schema)),
					o = !0 === this.value;
				t.change(t => {
					if (o) {
						let e = n[n.length - 1].nextSibling,
							o = Number.POSITIVE_INFINITY,
							i = [];
						for (; e && "listItem" == e.name && 0 !== e.getAttribute("listIndent");) {
							const t = e.getAttribute("listIndent");
							t < o && (o = t);
							const n = t - o;
							i.push({
								element: e,
								listIndent: n
							}), e = e.nextSibling
						}
						i = i.reverse();
						for (const e of i) t.setAttribute("listIndent", e.listIndent, e.element)
					}
					if (!o) {
						let t = Number.POSITIVE_INFINITY;
						for (const e of n) e.is("listItem") && e.getAttribute("listIndent") < t && (t = e.getAttribute(
							"listIndent"));
						t = 0 === t ? 1 : t, pm(n, !0, t), pm(n, !1, t)
					}
					for (const e of n.reverse()) o && "listItem" == e.name ? t.rename(e, "paragraph") : o || "listItem" == e.name ?
						o || "listItem" != e.name || e.getAttribute("listType") == this.type || t.setAttribute("listType", this.type,
							e) : (t.setAttributes({
							listType: this.type,
							listIndent: 0
						}, e), t.rename(e, "listItem"))
				})
			}
			_getValue() {
				const t = Kd(this.editor.model.document.selection.getSelectedBlocks());
				return !!t && t.is("listItem") && t.getAttribute("listType") == this.type
			}
			_checkEnabled() {
				if (this.value) return !0;
				const t = this.editor.model.document.selection,
					e = this.editor.model.schema,
					n = Kd(t.getSelectedBlocks());
				return !!n && bm(n, e)
			}
		}

		function pm(t, e, n) {
			const o = e ? t[0] : t[t.length - 1];
			if (o.is("listItem")) {
				let i = o[e ? "previousSibling" : "nextSibling"],
					r = o.getAttribute("listIndent");
				for (; i && i.is("listItem") && i.getAttribute("listIndent") >= n;) r > i.getAttribute("listIndent") && (r = i
					.getAttribute("listIndent")), i.getAttribute("listIndent") == r && t[e ? "unshift" : "push"](i), i = i[e ?
					"previousSibling" : "nextSibling"]
			}
		}

		function bm(t, e) {
			return e.checkChild(t.parent, "listItem") && !e.isObject(t)
		}
		class wm extends Zl {
			constructor(t, e) {
				super(t), this._indentBy = "forward" == e ? 1 : -1
			}
			refresh() {
				this.isEnabled = this._checkEnabled()
			}
			execute() {
				const t = this.editor.model,
					e = t.document;
				let n = Array.from(e.selection.getSelectedBlocks());
				t.change(t => {
					const e = n[n.length - 1];
					let o = e.nextSibling;
					for (; o && "listItem" == o.name && o.getAttribute("listIndent") > e.getAttribute("listIndent");) n.push(o),
						o = o.nextSibling;
					this._indentBy < 0 && (n = n.reverse());
					for (const e of n) {
						const n = e.getAttribute("listIndent") + this._indentBy;
						n < 0 ? t.rename(e, "paragraph") : t.setAttribute("listIndent", n, e)
					}
				})
			}
			_checkEnabled() {
				const t = Kd(this.editor.model.document.selection.getSelectedBlocks());
				if (!t || !t.is("listItem")) return !1;
				if (this._indentBy > 0) {
					const e = t.getAttribute("listIndent"),
						n = t.getAttribute("listType");
					let o = t.previousSibling;
					for (; o && o.is("listItem") && o.getAttribute("listIndent") >= e;) {
						if (o.getAttribute("listIndent") == e) return o.getAttribute("listType") == n;
						o = o.previousSibling
					}
					return !1
				}
				return !0
			}
		}

		function km(t, e) {
			const n = e.mapper,
				o = e.writer,
				i = "numbered" == t.getAttribute("listType") ? "ol" : "ul",
				r = function(t) {
					const e = t.createContainerElement("li");
					return e.getFillerOffset = Cm, e
				}(o),
				s = o.createContainerElement(i, null);
			return o.insert(o.createPositionAt(s, 0), r), n.bindElements(t, r), r
		}

		function _m(t, e, n, o) {
			const i = e.parent,
				r = n.mapper,
				s = n.writer;
			let a = r.toViewPosition(o.createPositionBefore(t));
			const c = xm(t.previousSibling, {
					sameIndent: !0,
					smallerIndent: !0,
					listIndent: t.getAttribute("listIndent")
				}),
				l = t.previousSibling;
			if (c && c.getAttribute("listIndent") == t.getAttribute("listIndent")) {
				const t = r.toViewElement(c);
				a = s.breakContainer(s.createPositionAfter(t))
			} else a = l && "listItem" == l.name ? r.toViewPosition(o.createPositionAt(l, "end")) : r.toViewPosition(o.createPositionBefore(
				t));
			if (a = ym(a), s.insert(a, i), l && "listItem" == l.name) {
				const t = r.toViewElement(l),
					n = s.createRange(s.createPositionAt(t, 0), a).getWalker({
						ignoreElementEnd: !0
					});
				for (const t of n)
					if (t.item.is("li")) {
						const o = s.breakContainer(s.createPositionBefore(t.item)),
							i = t.item.parent,
							r = s.createPositionAt(e, "end");
						vm(s, r.nodeBefore, r.nodeAfter), s.move(s.createRangeOn(i), r), n.position = o
					}
			} else {
				const n = i.nextSibling;
				if (n && (n.is("ul") || n.is("ol"))) {
					let o = null;
					for (const e of n.getChildren()) {
						const n = r.toModelElement(e);
						if (!(n && n.getAttribute("listIndent") > t.getAttribute("listIndent"))) break;
						o = e
					}
					o && (s.breakContainer(s.createPositionAfter(o)), s.move(s.createRangeOn(o.parent), s.createPositionAt(e,
						"end")))
				}
			}
			vm(s, i, i.nextSibling), vm(s, i.previousSibling, i)
		}

		function vm(t, e, n) {
			return !e || !n || "ul" != e.name && "ol" != e.name || e.name != n.name || e.getAttribute("class") !== n.getAttribute(
				"class") ? null : t.mergeContainers(t.createPositionAfter(e))
		}

		function ym(t) {
			return t.getLastMatchingPosition(t => t.item.is("uiElement"))
		}

		function xm(t, e) {
			const n = !!e.sameIndent,
				o = !!e.smallerIndent,
				i = e.listIndent;
			let r = t;
			for (; r && "listItem" == r.name;) {
				const t = r.getAttribute("listIndent");
				if (n && i == t || o && i > t) return r;
				r = r.previousSibling
			}
			return null
		}

		function Am(t, e, n, o) {
			t.ui.componentFactory.add(e, i => {
				const r = t.commands.get(e),
					s = new El(i);
				return s.set({
					label: n,
					icon: o,
					tooltip: !0,
					isToggleable: !0
				}), s.bind("isOn", "isEnabled").to(r, "value", "isEnabled"), s.on("execute", () => {
					t.execute(e), t.editing.view.focus()
				}), s
			})
		}

		function Cm() {
			const t = !this.isEmpty && ("ul" == this.getChild(0).name || "ol" == this.getChild(0).name);
			return this.isEmpty || t ? 0 : jo.call(this)
		}

		function Tm(t) {
			return (e, n, o) => {
				const i = o.consumable;
				if (!i.test(n.item, "insert") || !i.test(n.item, "attribute:listType") || !i.test(n.item,
						"attribute:listIndent")) return;
				i.consume(n.item, "insert"), i.consume(n.item, "attribute:listType"), i.consume(n.item,
					"attribute:listIndent");
				const r = n.item;
				_m(r, km(r, o), o, t)
			}
		}

		function Sm(t, e, n) {
			if (!n.consumable.consume(e.item, "attribute:listType")) return;
			const o = n.mapper.toViewElement(e.item),
				i = n.writer;
			i.breakContainer(i.createPositionBefore(o)), i.breakContainer(i.createPositionAfter(o));
			const r = o.parent,
				s = "numbered" == e.attributeNewValue ? "ol" : "ul";
			i.rename(s, r)
		}

		function Pm(t, e, n) {
			const o = n.mapper.toViewElement(e.item).parent,
				i = n.writer;
			vm(i, o, o.nextSibling), vm(i, o.previousSibling, o);
			for (const t of e.item.getChildren()) n.consumable.consume(t, "insert")
		}

		function Em(t, e, n) {
			if ("listItem" != e.item.name) {
				let t = n.mapper.toViewPosition(e.range.start);
				const o = n.writer,
					i = [];
				for (;
					("ul" == t.parent.name || "ol" == t.parent.name) && (t = o.breakContainer(t), "li" == t.parent.name);) {
					const e = t,
						n = o.createPositionAt(t.parent, "end");
					if (!e.isEqual(n)) {
						const t = o.remove(o.createRange(e, n));
						i.push(t)
					}
					t = o.createPositionAfter(t.parent)
				}
				if (i.length > 0) {
					for (let e = 0; e < i.length; e++) {
						const n = t.nodeBefore;
						if (t = o.insert(t, i[e]).end, e > 0) {
							const e = vm(o, n, n.nextSibling);
							e && e.parent == n && t.offset--
						}
					}
					vm(o, t.nodeBefore, t.nodeAfter)
				}
			}
		}

		function Mm(t, e, n) {
			const o = n.mapper.toViewPosition(e.position),
				i = o.nodeBefore,
				r = o.nodeAfter;
			vm(n.writer, i, r)
		}

		function Im(t, e, n) {
			if (n.consumable.consume(e.viewItem, {
					name: !0
				})) {
				const t = n.writer,
					o = t.createElement("listItem"),
					i = function(t) {
						let e = 0,
							n = t.parent;
						for (; n;) {
							if (n.is("li")) e++;
							else {
								const t = n.previousSibling;
								t && t.is("li") && e++
							}
							n = n.parent
						}
						return e
					}(e.viewItem);
				t.setAttribute("listIndent", i, o);
				const r = e.viewItem.parent && "ol" == e.viewItem.parent.name ? "numbered" : "bulleted";
				t.setAttribute("listType", r, o);
				const s = n.splitToAllowedParent(o, e.modelCursor);
				if (!s) return;
				t.insert(o, s.position);
				const a = function(t, e, n) {
					const {
						writer: o,
						schema: i
					} = n;
					let r = o.createPositionAfter(t);
					for (const s of e)
						if ("ul" == s.name || "ol" == s.name) r = n.convertItem(s, r).modelCursor;
						else {
							const e = n.convertItem(s, o.createPositionAt(t, "end")),
								a = e.modelRange.start.nodeAfter;
							a && a.is("element") && !i.checkChild(t, a.name) && (t = e.modelCursor.parent.is("listItem") ? e.modelCursor
								.parent : Lm(e.modelCursor), r = o.createPositionAfter(t))
						} return r
				}(o, e.viewItem.getChildren(), n);
				e.modelRange = t.createRange(e.modelCursor, a), s.cursorParent ? e.modelCursor = t.createPositionAt(s.cursorParent,
					0) : e.modelCursor = e.modelRange.end
			}
		}

		function Nm(t, e, n) {
			if (n.consumable.test(e.viewItem, {
					name: !0
				})) {
				const t = Array.from(e.viewItem.getChildren());
				for (const e of t) {
					!(e.is("li") || Vm(e)) && e._remove()
				}
			}
		}

		function Om(t, e, n) {
			if (n.consumable.test(e.viewItem, {
					name: !0
				})) {
				if (0 === e.viewItem.childCount) return;
				const t = [...e.viewItem.getChildren()];
				let n = !1,
					o = !0;
				for (const e of t) n && !Vm(e) && e._remove(), e.is("text") ? (o && (e._data = e.data.replace(/^\s+/, "")), e.nextSibling &&
					!Vm(e.nextSibling) || (e._data = e.data.replace(/\s+$/, ""))) : Vm(e) && (n = !0), o = !1
			}
		}

		function Rm(t) {
			return (e, n) => {
				if (n.isPhantom) return;
				const o = n.modelPosition.nodeBefore;
				if (o && o.is("listItem")) {
					const e = n.mapper.toViewElement(o),
						i = e.getAncestors().find(Vm),
						r = t.createPositionAt(e, 0).getWalker();
					for (const t of r) {
						if ("elementStart" == t.type && t.item.is("li")) {
							n.viewPosition = t.previousPosition;
							break
						}
						if ("elementEnd" == t.type && t.item == i) {
							n.viewPosition = t.nextPosition;
							break
						}
					}
				}
			}
		}

		function Dm(t, [e, n]) {
			let o, i = e.is("documentFragment") ? e.getChild(0) : e;
			if (o = n ? this.createSelection(n) : this.document.selection, i && i.is("listItem")) {
				const t = o.getFirstPosition();
				let e = null;
				if (t.parent.is("listItem") ? e = t.parent : t.nodeBefore && t.nodeBefore.is("listItem") && (e = t.nodeBefore),
					e) {
					const t = e.getAttribute("listIndent");
					if (t > 0)
						for (; i && i.is("listItem");) i._setAttribute("listIndent", i.getAttribute("listIndent") + t), i = i.nextSibling
				}
			}
		}

		function Lm(t) {
			const e = new _s({
				startPosition: t
			});
			let n;
			do {
				n = e.next()
			} while (!n.value.item.is("listItem"));
			return n.value.item
		}

		function jm(t, e, n, o, i, r) {
			const s = xm(e.nodeBefore, {
					sameIndent: !0,
					smallerIndent: !0,
					listIndent: t,
					foo: "b"
				}),
				a = i.mapper,
				c = i.writer,
				l = s ? s.getAttribute("listIndent") : null;
			let d;
			if (s)
				if (l == t) {
					const t = a.toViewElement(s).parent;
					d = c.createPositionAfter(t)
				} else {
					const t = r.createPositionAt(s, "end");
					d = a.toViewPosition(t)
				}
			else d = n;
			d = ym(d);
			for (const t of [...o.getChildren()]) Vm(t) && (d = c.move(c.createRangeOn(t), d).end, vm(c, t, t.nextSibling),
				vm(c, t.previousSibling, t))
		}

		function Vm(t) {
			return t.is("ol") || t.is("ul")
		}
		class zm extends Gl {
			static get pluginName() {
				return "ListEditing"
			}
			static get requires() {
				return [yg]
			}
			init() {
				const t = this.editor;
				t.model.schema.register("listItem", {
					inheritAllFrom: "$block",
					allowAttributes: ["listType", "listIndent"]
				});
				const e = t.data,
					n = t.editing;
				var o;
				t.model.document.registerPostFixer(e => function(t, e) {
						const n = t.document.differ.getChanges(),
							o = new Map;
						let i = !1;
						for (const o of n)
							if ("insert" == o.type && "listItem" == o.name) r(o.position);
							else if ("insert" == o.type && "listItem" != o.name) {
							if ("$text" != o.name) {
								const n = o.position.nodeAfter;
								n.hasAttribute("listIndent") && (e.removeAttribute("listIndent", n), i = !0), n.hasAttribute("listType") &&
									(e.removeAttribute("listType", n), i = !0);
								for (const e of Array.from(t.createRangeIn(n)).filter(t => t.item.is("listItem"))) r(e.previousPosition)
							}
							r(o.position.getShiftedBy(o.length))
						} else "remove" == o.type && "listItem" == o.name ? r(o.position) : ("attribute" == o.type && "listIndent" ==
							o.attributeKey || "attribute" == o.type && "listType" == o.attributeKey) && r(o.range.start);
						for (const t of o.values()) s(t), a(t);
						return i;

						function r(t) {
							const e = t.nodeBefore;
							if (e && e.is("listItem")) {
								let t = e;
								if (o.has(t)) return;
								for (let e = t.previousSibling; e && e.is("listItem"); e = t.previousSibling)
									if (t = e, o.has(t)) return;
								o.set(e, t)
							} else {
								const e = t.nodeAfter;
								e && e.is("listItem") && o.set(e, e)
							}
						}

						function s(t) {
							let n = 0,
								o = null;
							for (; t && t.is("listItem");) {
								const r = t.getAttribute("listIndent");
								if (r > n) {
									let s;
									null === o ? (o = r - n, s = n) : (o > r && (o = r), s = r - o), e.setAttribute("listIndent", s, t), i = !
										0
								} else o = null, n = t.getAttribute("listIndent") + 1;
								t = t.nextSibling
							}
						}

						function a(t) {
							let n = [],
								o = null;
							for (; t && t.is("listItem");) {
								const r = t.getAttribute("listIndent");
								if (o && o.getAttribute("listIndent") > r && (n = n.slice(0, r + 1)), 0 != r)
									if (n[r]) {
										const o = n[r];
										t.getAttribute("listType") != o && (e.setAttribute("listType", o, t), i = !0)
									} else n[r] = t.getAttribute("listType");
								o = t, t = t.nextSibling
							}
						}
					}(t.model, e)), n.mapper.registerViewToModelLength("li", Bm), e.mapper.registerViewToModelLength("li", Bm),
					n.mapper.on("modelToViewPosition", Rm(n.view)), n.mapper.on("viewToModelPosition", (o = t.model, (t, e) => {
						const n = e.viewPosition,
							i = n.parent,
							r = e.mapper;
						if ("ul" == i.name || "ol" == i.name) {
							if (n.isAtEnd) {
								const t = r.toModelElement(n.nodeBefore),
									i = r.getModelLength(n.nodeBefore);
								e.modelPosition = o.createPositionBefore(t).getShiftedBy(i)
							} else {
								const t = r.toModelElement(n.nodeAfter);
								e.modelPosition = o.createPositionBefore(t)
							}
							t.stop()
						} else if ("li" == i.name && n.nodeBefore && ("ul" == n.nodeBefore.name || "ol" == n.nodeBefore.name)) {
							const s = r.toModelElement(i);
							let a = 1,
								c = n.nodeBefore;
							for (; c && Vm(c);) a += r.getModelLength(c), c = c.previousSibling;
							e.modelPosition = o.createPositionBefore(s).getShiftedBy(a), t.stop()
						}
					})), e.mapper.on("modelToViewPosition", Rm(n.view)), t.conversion.for("editingDowncast").add(e => {
						e.on("insert", Em, {
							priority: "high"
						}), e.on("insert:listItem", Tm(t.model)), e.on("attribute:listType:listItem", Sm, {
							priority: "high"
						}), e.on("attribute:listType:listItem", Pm, {
							priority: "low"
						}), e.on("attribute:listIndent:listItem", function(t) {
							return (e, n, o) => {
								if (!o.consumable.consume(n.item, "attribute:listIndent")) return;
								const i = o.mapper.toViewElement(n.item),
									r = o.writer;
								r.breakContainer(r.createPositionBefore(i)), r.breakContainer(r.createPositionAfter(i));
								const s = i.parent,
									a = s.previousSibling,
									c = r.createRangeOn(s);
								r.remove(c), a && a.nextSibling && vm(r, a, a.nextSibling), jm(n.attributeOldValue + 1, n.range.start,
									c.start, i, o, t), _m(n.item, i, o, t);
								for (const t of n.item.getChildren()) o.consumable.consume(t, "insert")
							}
						}(t.model)), e.on("remove:listItem", function(t) {
							return (e, n, o) => {
								const i = o.mapper.toViewPosition(n.position).getLastMatchingPosition(t => !t.item.is("li")).nodeAfter,
									r = o.writer;
								r.breakContainer(r.createPositionBefore(i)), r.breakContainer(r.createPositionAfter(i));
								const s = i.parent,
									a = s.previousSibling,
									c = r.createRangeOn(s),
									l = r.remove(c);
								a && a.nextSibling && vm(r, a, a.nextSibling);
								jm(o.mapper.toModelElement(i).getAttribute("listIndent") + 1, n.position, c.start, i, o, t);
								for (const t of r.createRangeIn(l).getItems()) o.mapper.unbindViewElement(t);
								e.stop()
							}
						}(t.model)), e.on("remove", Mm, {
							priority: "low"
						})
					}), t.conversion.for("dataDowncast").add(e => {
						e.on("insert", Em, {
							priority: "high"
						}), e.on("insert:listItem", Tm(t.model))
					}), t.conversion.for("upcast").add(t => {
						t.on("element:ul", Nm, {
							priority: "high"
						}), t.on("element:ol", Nm, {
							priority: "high"
						}), t.on("element:li", Om, {
							priority: "high"
						}), t.on("element:li", Im)
					}), t.model.on("insertContent", Dm, {
						priority: "high"
					}), t.commands.add("numberedList", new mm(t, "numbered")), t.commands.add("bulletedList", new mm(t,
						"bulleted")), t.commands.add("indentList", new wm(t, "forward")), t.commands.add("outdentList", new wm(t,
						"backward"));
				const i = n.view.document;
				this.listenTo(i, "enter", (t, e) => {
					const n = this.editor.model.document,
						o = n.selection.getLastPosition().parent;
					n.selection.isCollapsed && "listItem" == o.name && o.isEmpty && (this.editor.execute("outdentList"), e.preventDefault(),
						t.stop())
				}), this.listenTo(i, "delete", (t, e) => {
					if ("backward" !== e.direction) return;
					const n = this.editor.model.document.selection;
					if (!n.isCollapsed) return;
					const o = n.getFirstPosition();
					if (!o.isAtStart) return;
					const i = o.parent;
					if ("listItem" !== i.name) return;
					i.previousSibling && "listItem" === i.previousSibling.name || (this.editor.execute("outdentList"), e.preventDefault(),
						t.stop())
				}, {
					priority: "high"
				});
				const r = t => (e, n) => {
					this.editor.commands.get(t).isEnabled && (this.editor.execute(t), n())
				};
				t.keystrokes.set("Tab", r("indentList")), t.keystrokes.set("Shift+Tab", r("outdentList"))
			}
			afterInit() {
				const t = this.editor.commands,
					e = t.get("indent"),
					n = t.get("outdent");
				e && e.registerChildCommand(t.get("indentList")), n && n.registerChildCommand(t.get("outdentList"))
			}
		}

		function Bm(t) {
			let e = 1;
			for (const n of t.getChildren())
				if ("ul" == n.name || "ol" == n.name)
					for (const t of n.getChildren()) e += Bm(t);
			return e
		}
		class Fm extends Gl {
			init() {
				const t = this.editor.t;
				Am(this.editor, "numberedList", t("Numbered List"),
					'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'
				), Am(this.editor, "bulletedList", t("Bulleted List"),
					'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>'
				)
			}
		}

		function Um(t, e) {
			return t => {
				t.on("attribute:url:media", n)
			};

			function n(n, o, i) {
				if (!i.consumable.consume(o.item, n.name)) return;
				const r = o.attributeNewValue,
					s = i.writer,
					a = i.mapper.toViewElement(o.item),
					c = [...a.getChildren()].find(t => t.getCustomProperty("media-content"));
				s.remove(c);
				const l = t.getMediaViewElement(s, r, e);
				s.insert(s.createPositionAt(a, 0), l)
			}
		}

		function Hm(t, e, n, o) {
			const i = t.createContainerElement("figure", {
				class: "media"
			});
			return i.getFillerOffset = Gm, t.insert(t.createPositionAt(i, 0), e.getMediaViewElement(t, n, o)), i
		}

		function qm(t) {
			const e = t.getSelectedElement();
			return e && e.is("media") ? e : null
		}

		function Wm(t, e, n) {
			t.change(o => {
				const i = o.createElement("media", {
					url: e
				});
				t.insertContent(i, n), o.setSelection(i, "on")
			})
		}

		function Gm() {
			return null
		}
		class Ym extends Zl {
			refresh() {
				const t = this.editor.model,
					e = t.document.selection,
					n = t.schema,
					o = e.getFirstPosition(),
					i = qm(e);
				let r = o.parent;
				r != r.root && (r = r.parent), this.value = i ? i.getAttribute("url") : null, this.isEnabled = n.checkChild(r,
					"media")
			}
			execute(t) {
				const e = this.editor.model,
					n = e.document.selection,
					o = qm(n);
				if (o) e.change(e => {
					e.setAttribute("url", t, o)
				});
				else {
					const o = Ph(n, e);
					Wm(e, t, o)
				}
			}
		}
		class $m {
			constructor(t, e) {
				const n = e.providers,
					o = e.extraProviders || [],
					i = new Set(e.removeProviders),
					r = n.concat(o).filter(t => {
						const e = t.name;
						return e ? !i.has(e) : (console.warn(Object(hn.a)(
							"media-embed-no-provider-name: The configured media provider has no name and cannot be used."), {
							provider: t
						}), !1)
					});
				this.locale = t, this.providerDefinitions = r
			}
			hasMedia(t) {
				return !!this._getMedia(t)
			}
			getMediaViewElement(t, e, n) {
				return this._getMedia(e).getViewElement(t, n)
			}
			_getMedia(t) {
				if (!t) return new Km(this.locale);
				t = t.trim();
				for (const e of this.providerDefinitions) {
					const n = e.html;
					let o = e.url;
					Array.isArray(o) || (o = [o]);
					for (const e of o) {
						const o = this._getUrlMatches(t, e);
						if (o) return new Km(this.locale, t, o, n)
					}
				}
				return null
			}
			_getUrlMatches(t, e) {
				let n = t.match(e);
				if (n) return n;
				let o = t.replace(/^https?:\/\//, "");
				return n = o.match(e), n || (o = o.replace(/^www\./, ""), n = o.match(e), n || null)
			}
		}
		class Km {
			constructor(t, e, n, o) {
				this.url = this._getValidUrl(e), this._t = t.t, this._match = n, this._previewRenderer = o
			}
			getViewElement(t, e) {
				const n = {};
				let o;
				if (e.renderForEditingView || e.renderMediaPreview && this.url && this._previewRenderer) {
					this.url && (n["data-oembed-url"] = this.url), e.renderForEditingView && (n.class = "ck-media__wrapper");
					const i = this._getPreviewHtml(e);
					o = t.createUIElement("div", n, (function(t) {
						const e = this.toDomElement(t);
						return e.innerHTML = i, e
					}))
				} else this.url && (n.url = this.url), o = t.createEmptyElement("oembed", n);
				return t.setCustomProperty("media-content", !0, o), o
			}
			_getPreviewHtml(t) {
				return this._previewRenderer ? this._previewRenderer(this._match) : this.url && t.renderForEditingView ? this
					._getPlaceholderHtml() : ""
			}
			_getPlaceholderHtml() {
				const t = new Pl,
					e = new Sl;
				t.text = this._t("Open media in new tab"), e.content =
					'<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>',
					e.viewBox = "0 0 64 42";
				return new Wc({
					tag: "div",
					attributes: {
						class: "ck ck-reset_all ck-media__placeholder"
					},
					children: [{
						tag: "div",
						attributes: {
							class: "ck-media__placeholder__icon"
						},
						children: [e]
					}, {
						tag: "a",
						attributes: {
							class: "ck-media__placeholder__url",
							target: "_blank",
							rel: "noopener noreferrer",
							href: this.url
						},
						children: [{
							tag: "span",
							attributes: {
								class: "ck-media__placeholder__url__text"
							},
							children: [this.url]
						}, t]
					}]
				}).render().outerHTML
			}
			_getValidUrl(t) {
				return t ? t.match(/^https?/) ? t : "https://" + t : null
			}
		}
		n(82);
		class Qm extends Gl {
			static get pluginName() {
				return "MediaEmbedEditing"
			}
			constructor(t) {
				super(t), t.config.define("mediaEmbed", {
					providers: [{
						name: "dailymotion",
						url: /^dailymotion\.com\/video\/(\w+)/,
						html: t =>
							`<div style="position: relative; padding-bottom: 100%; height: 0; "><iframe src="https://www.dailymotion.com/embed/video/${t[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>`
					}, {
						name: "spotify",
						url: [/^open\.spotify\.com\/(artist\/\w+)/, /^open\.spotify\.com\/(album\/\w+)/,
							/^open\.spotify\.com\/(track\/\w+)/
						],
						html: t =>
							`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;"><iframe src="https://open.spotify.com/embed/${t[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`
					}, {
						name: "youtube",
						url: [/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/, /^(?:m\.)?youtube\.com\/v\/([\w-]+)/,
							/^youtube\.com\/embed\/([\w-]+)/, /^youtu\.be\/([\w-]+)/
						],
						html: t =>
							`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/${t[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`
					}, {
						name: "vimeo",
						url: [/^vimeo\.com\/(\d+)/, /^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,
							/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/, /^vimeo\.com\/channels\/[^/]+\/(\d+)/,
							/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/, /^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,
							/^player\.vimeo\.com\/video\/(\d+)/
						],
						html: t =>
							`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://player.vimeo.com/video/${t[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`
					}, {
						name: "instagram",
						url: /^instagram\.com\/p\/(\w+)/
					}, {
						name: "twitter",
						url: /^twitter\.com/
					}, {
						name: "googleMaps",
						url: /^google\.com\/maps/
					}, {
						name: "flickr",
						url: /^flickr\.com/
					}, {
						name: "facebook",
						url: /^facebook\.com/
					}]
				}), this.registry = new $m(t.locale, t.config.get("mediaEmbed"))
			}
			init() {
				const t = this.editor,
					e = t.model.schema,
					n = t.t,
					o = t.conversion,
					i = t.config.get("mediaEmbed.previewsInData"),
					r = this.registry;
				t.commands.add("mediaEmbed", new Ym(t)), e.register("media", {
					isObject: !0,
					isBlock: !0,
					allowWhere: "$block",
					allowAttributes: ["url"]
				}), o.for("dataDowncast").elementToElement({
					model: "media",
					view: (t, e) => {
						const n = t.getAttribute("url");
						return Hm(e, r, n, {
							renderMediaPreview: n && i
						})
					}
				}), o.for("dataDowncast").add(Um(r, {
					renderMediaPreview: i
				})), o.for("editingDowncast").elementToElement({
					model: "media",
					view: (t, e) => {
						const o = t.getAttribute("url"),
							i = Hm(e, r, o, {
								renderForEditingView: !0
							});
						return s = i, a = e, c = n("media widget"), a.setCustomProperty("media", !0, s), Ah(s, a, {
							label: c
						});
						var s, a, c
					}
				}), o.for("editingDowncast").add(Um(r, {
					renderForEditingView: !0
				})), o.for("upcast").elementToElement({
					view: {
						name: "oembed",
						attributes: {
							url: !0
						}
					},
					model: (t, e) => {
						const n = t.getAttribute("url");
						if (r.hasMedia(n)) return e.createElement("media", {
							url: n
						})
					}
				}).elementToElement({
					view: {
						name: "div",
						attributes: {
							"data-oembed-url": !0
						}
					},
					model: (t, e) => {
						const n = t.getAttribute("data-oembed-url");
						if (r.hasMedia(n)) return e.createElement("media", {
							url: n
						})
					}
				})
			}
		}
		const Jm = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;
		class Zm extends Gl {
			static get requires() {
				return [Jl, $d]
			}
			static get pluginName() {
				return "AutoMediaEmbed"
			}
			constructor(t) {
				super(t), this._timeoutId = null, this._positionToInsert = null
			}
			init() {
				const t = this.editor,
					e = t.model.document;
				this.listenTo(t.plugins.get(Jl), "inputTransformation", () => {
					const t = e.selection.getFirstRange(),
						n = dc.fromPosition(t.start);
					n.stickiness = "toPrevious";
					const o = dc.fromPosition(t.end);
					o.stickiness = "toNext", e.once("change:data", () => {
						this._embedMediaBetweenPositions(n, o), n.detach(), o.detach()
					}, {
						priority: "high"
					})
				}), t.commands.get("undo").on("execute", () => {
					this._timeoutId && (nr.window.clearTimeout(this._timeoutId), this._positionToInsert.detach(), this._timeoutId =
						null, this._positionToInsert = null)
				}, {
					priority: "high"
				})
			}
			_embedMediaBetweenPositions(t, e) {
				const n = this.editor,
					o = n.plugins.get(Qm).registry,
					i = new js(t, e),
					r = i.getWalker({
						ignoreElementEnd: !0
					});
				let s = "";
				for (const t of r) t.item.is("textProxy") && (s += t.item.data);
				if (s = s.trim(), !s.match(Jm)) return void i.detach();
				if (!o.hasMedia(s)) return void i.detach();
				n.commands.get("mediaEmbed").isEnabled ? (this._positionToInsert = dc.fromPosition(t), this._timeoutId = nr.window
					.setTimeout(() => {
						n.model.change(t => {
							let e;
							this._timeoutId = null, t.remove(i), i.detach(), "$graveyard" !== this._positionToInsert.root.rootName &&
								(e = this._positionToInsert), Wm(n.model, s, e), this._positionToInsert.detach(), this._positionToInsert =
								null
						})
					}, 100)) : i.detach()
			}
		}
		n(84);
		class Xm extends dl {
			constructor(t, e) {
				super(e);
				const n = e.t;
				this.focusTracker = new Lc, this.keystrokes = new Pc, this.urlInputView = this._createUrlInput(), this.saveButtonView =
					this._createButton(n("Save"), Gf, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView =
					this._createButton(n("Cancel"), Yf, "ck-button-cancel", "cancel"), this._focusables = new qc, this._focusCycler =
					new pl({
						focusables: this._focusables,
						focusTracker: this.focusTracker,
						keystrokeHandler: this.keystrokes,
						actions: {
							focusPrevious: "shift + tab",
							focusNext: "tab"
						}
					}), this._validators = t, this.setTemplate({
						tag: "form",
						attributes: {
							class: ["ck", "ck-media-form"],
							tabindex: "-1"
						},
						children: [this.urlInputView, this.saveButtonView, this.cancelButtonView]
					})
			}
			render() {
				super.render(), Wf({
					view: this
				});
				[this.urlInputView, this.saveButtonView, this.cancelButtonView].forEach(t => {
					this._focusables.add(t), this.focusTracker.add(t.element)
				}), this.keystrokes.listenTo(this.element);
				const t = t => t.stopPropagation();
				this.keystrokes.set("arrowright", t), this.keystrokes.set("arrowleft", t), this.keystrokes.set("arrowup", t),
					this.keystrokes.set("arrowdown", t), this.listenTo(this.urlInputView.element, "selectstart", (t, e) => {
						e.stopPropagation()
					}, {
						priority: "high"
					})
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			get url() {
				return this.urlInputView.fieldView.element.value.trim()
			}
			set url(t) {
				this.urlInputView.fieldView.element.value = t.trim()
			}
			isValid() {
				this.resetFormStatus();
				for (const t of this._validators) {
					const e = t(this);
					if (e) return this.urlInputView.errorText = e, !1
				}
				return !0
			}
			resetFormStatus() {
				this.urlInputView.errorText = null, this.urlInputView.infoText = this._urlInputViewInfoDefault
			}
			_createUrlInput() {
				const t = this.locale.t,
					e = new Uf(this.locale, qf),
					n = e.fieldView;
				return this._urlInputViewInfoDefault = t("Paste the media URL in the input."), this._urlInputViewInfoTip = t(
						"Tip: Paste the URL into the content to embed faster."), e.label = t("Media URL"), e.infoText = this._urlInputViewInfoDefault,
					n.placeholder = "https://example.com", n.on("input", () => {
						e.infoText = n.element.value ? this._urlInputViewInfoTip : this._urlInputViewInfoDefault
					}), e
			}
			_createButton(t, e, n, o) {
				const i = new El(this.locale);
				return i.set({
					label: t,
					icon: e,
					tooltip: !0
				}), i.extendTemplate({
					attributes: {
						class: n
					}
				}), o && i.delegate("execute").to(this, o), i
			}
		}
		class tp extends Gl {
			static get requires() {
				return [Qm]
			}
			static get pluginName() {
				return "MediaEmbedUI"
			}
			init() {
				const t = this.editor,
					e = t.commands.get("mediaEmbed"),
					n = t.plugins.get(Qm).registry;
				t.ui.componentFactory.add("mediaEmbed", o => {
					const i = jl(o),
						r = new Xm(function(t, e) {
							return [e => {
								if (!e.url.length) return t("The URL must not be empty.")
							}, n => {
								if (!e.hasMedia(n.url)) return t("This media URL is not supported.")
							}]
						}(t.t, n), t.locale);
					return this._setUpDropdown(i, r, e, t), this._setUpForm(i, r, e), i
				})
			}
			_setUpDropdown(t, e, n) {
				const o = this.editor,
					i = o.t,
					r = t.buttonView;

				function s() {
					o.editing.view.focus(), t.isOpen = !1
				}
				t.bind("isEnabled").to(n), t.panelView.children.add(e), r.set({
					label: i("Insert media"),
					icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 01.593-.351l5.133 2.824a.4.4 0 010 .7l-5.133 2.824a.4.4 0 01-.593-.35V7.176v.001z"/></svg>\n',
					tooltip: !0
				}), r.on("open", () => {
					e.url = n.value || "", e.urlInputView.fieldView.select(), e.focus()
				}, {
					priority: "low"
				}), t.on("submit", () => {
					e.isValid() && (o.execute("mediaEmbed", e.url), s())
				}), t.on("change:isOpen", () => e.resetFormStatus()), t.on("cancel", () => s())
			}
			_setUpForm(t, e, n) {
				e.delegate("submit", "cancel").to(t), e.urlInputView.bind("value").to(n, "value"), e.urlInputView.bind(
					"isReadOnly").to(n, "isEnabled", t => !t), e.saveButtonView.bind("isEnabled").to(n)
			}
		}
		n(86);

		function ep(t, e) {
			if (!t.childCount) return;
			const n = new fg(t.document),
				o = function(t, e) {
					const n = e.createRangeIn(t),
						o = new jn({
							name: /^p|h\d+$/,
							styles: {
								"mso-list": /.*/
							}
						}),
						i = [];
					for (const t of n)
						if ("elementStart" === t.type && o.match(t.item)) {
							const e = op(t.item);
							i.push({
								element: t.item,
								id: e.id,
								order: e.order,
								indent: e.indent
							})
						} return i
				}(t, n);
			if (!o.length) return;
			let i = null,
				r = 1;
			o.forEach((t, s) => {
				const a = function(t, e) {
						if (!t) return !0;
						if (t.id !== e.id) return !0;
						const n = e.element.previousSibling;
						if (!n) return !0;
						return o = n, !(o.is("ol") || o.is("ul"));
						var o
					}(o[s - 1], t),
					c = a ? null : o[s - 1],
					l = (u = t, (d = c) ? u.indent - d.indent : u.indent - 1);
				var d, u;
				if (a && (i = null, r = 1), !i || 0 !== l) {
					const o = function(t, e) {
						const n = new RegExp(`@list l${t.id}:level${t.indent}\\s*({[^}]*)`, "gi"),
							o = /mso-level-number-format:([^;]*);/gi,
							i = n.exec(e);
						let r = "decimal";
						if (i && i[1]) {
							const t = o.exec(i[1]);
							t && t[1] && (r = t[1].trim())
						}
						return {
							type: "bullet" !== r && "image" !== r ? "ol" : "ul",
							style: r
						}
					}(t, e);
					if (i) {
						if (t.indent > r) {
							const t = i.getChild(i.childCount - 1),
								e = t.getChild(t.childCount - 1);
							i = np(o, e, n), r += 1
						} else if (t.indent < r) {
							const e = r - t.indent;
							i = function(t, e) {
								const n = t.getAncestors({
									parentFirst: !0
								});
								let o = null,
									i = 0;
								for (const t of n)
									if ("ul" !== t.name && "ol" !== t.name || i++, i === e) {
										o = t;
										break
									} return o
							}(i, e), r = parseInt(t.indent)
						}
					} else i = np(o, t.element, n);
					t.indent <= r && (i.is(o.type) || (i = n.rename(o.type, i)))
				}
				const h = function(t, e) {
					return function(t, e) {
						const n = new jn({
								name: "span",
								styles: {
									"mso-list": "Ignore"
								}
							}),
							o = e.createRangeIn(t);
						for (const t of o) "elementStart" === t.type && n.match(t.item) && e.remove(t.item)
					}(t, e), e.rename("li", t)
				}(t.element, n);
				n.appendChild(h, i)
			})
		}

		function np(t, e, n) {
			const o = e.parent,
				i = n.createElement(t.type),
				r = o.getChildIndex(e) + 1;
			return n.insertChild(r, i, o), i
		}

		function op(t) {
			const e = {},
				n = t.getStyle("mso-list");
			if (n) {
				const t = n.match(/(^|\s+)l(\d+)/i),
					o = n.match(/\s*lfo(\d+)/i),
					i = n.match(/\s*level(\d+)/i);
				t && o && i && (e.id = t[2], e.order = o[1], e.indent = i[1])
			}
			return e
		}
		const ip = /id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;
		class rp {
			constructor(t) {
				this.document = t
			}
			isActive(t) {
				return ip.test(t)
			}
			execute(t) {
				const e = new fg(this.document);
				! function(t, e) {
					for (const n of t.getChildren())
						if (n.is("b") && "normal" === n.getStyle("font-weight")) {
							const o = t.getChildIndex(n);
							e.remove(n), e.insertChild(o, n.getChildren(), t)
						}
				}(t.content, e),
				function(t, e) {
					for (const n of e.createRangeIn(t)) {
						const t = n.item;
						if (t.is("li")) {
							const n = t.getChild(0);
							n.is("p") && e.unwrapElement(n)
						}
					}
				}(t.content, e)
			}
		}

		function sp(t) {
			return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (t, e) => 1 === e.length ? " " :
				Array(e.length + 1).join("  ").substr(0, e.length))
		}

		function ap(t, e) {
			const n = new DOMParser,
				o = function(t) {
					return sp(sp(t)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[\s]*?)[\r\n]+(\s*<\/span>)/g, "$1$2").replace(
						/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g, "").replace(/ <\//g, " </").replace(/ <o:p><\/o:p>/g,
						" <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g, "").replace(/>(\s*[\r\n]\s*)</g, "><")
				}(function(t) {
					const e = t.match(/<\/body>(.*?)(<\/html>|$)/);
					e && e[1] && (t = t.slice(0, e.index) + t.slice(e.index).replace(e[1], ""));
					return t
				}(t = t.replace(/<!--\[if gte vml 1]>/g, ""))),
				i = n.parseFromString(o, "text/html");
			! function(t) {
				t.querySelectorAll("span[style*=spacerun]").forEach(t => {
					const e = t.innerText.length || 0;
					t.innerHTML = Array(e + 1).join("  ").substr(0, e)
				})
			}(i);
			const r = i.body.innerHTML,
				s = function(t, e) {
					const n = new ri(e),
						o = new sr(n, {
							blockFillerMode: "nbsp"
						}),
						i = t.createDocumentFragment(),
						r = t.body.childNodes;
					for (; r.length > 0;) i.appendChild(r[0]);
					return o.domToView(i)
				}(i, e),
				a = function(t) {
					const e = [],
						n = [],
						o = Array.from(t.getElementsByTagName("style"));
					for (const t of o) t.sheet && t.sheet.cssRules && t.sheet.cssRules.length && (e.push(t.sheet), n.push(t.innerHTML));
					return {
						styles: e,
						stylesString: n.join(" ")
					}
				}(i);
			return {
				body: s,
				bodyString: r,
				styles: a.styles,
				stylesString: a.stylesString
			}
		}

		function cp(t, e) {
			if (!t.childCount) return;
			const n = new fg;
			! function(t, e, n) {
				const o = n.createRangeIn(e),
					i = new jn({
						name: "img"
					}),
					r = [];
				for (const e of o)
					if (i.match(e.item)) {
						const n = e.item,
							o = n.getAttribute("v:shapes") ? n.getAttribute("v:shapes").split(" ") : [];
						o.length && o.every(e => t.indexOf(e) > -1) ? r.push(n) : n.getAttribute("src") || r.push(n)
					} for (const t of r) n.remove(t)
			}(function(t, e) {
				const n = e.createRangeIn(t),
					o = new jn({
						name: /v:(.+)/
					}),
					i = [];
				for (const t of n) {
					const e = t.item,
						n = e.previousSibling && e.previousSibling.name || null;
					o.match(e) && e.getAttribute("o:gfxdata") && "v:shapetype" !== n && i.push(t.item.getAttribute("id"))
				}
				return i
			}(t, n), t, n),
			function(t, e) {
				const n = e.createRangeIn(t),
					o = new jn({
						name: /v:(.+)/
					}),
					i = [];
				for (const t of n) o.match(t.item) && i.push(t.item);
				for (const t of i) e.remove(t)
			}(t, n);
			const o = function(t, e) {
				const n = e.createRangeIn(t),
					o = new jn({
						name: "img"
					}),
					i = [];
				for (const t of n) o.match(t.item) && t.item.getAttribute("src").startsWith("file://") && i.push(t.item);
				return i
			}(t, n);
			o.length && function(t, e, n) {
				if (t.length === e.length)
					for (let i = 0; i < t.length; i++) {
						const r =
							`data:${e[i].type};base64,${o=e[i].hex,btoa(o.match(/\w{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join(""))}`;
						n.setAttribute("src", r, t[i])
					}
				var o
			}(o, function(t) {
				if (!t) return [];
				const e = /{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,
					n = new RegExp("(?:(" + e.source + "))([\\da-fA-F\\s]+)\\}", "g"),
					o = t.match(n),
					i = [];
				if (o)
					for (const t of o) {
						let n = !1;
						t.includes("\\pngblip") ? n = "image/png" : t.includes("\\jpegblip") && (n = "image/jpeg"), n && i.push({
							hex: t.replace(e, "").replace(/[^\da-fA-F]/g, ""),
							type: n
						})
					}
				return i
			}(e), n)
		}
		const lp = /<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,
			dp = /xmlns:o="urn:schemas-microsoft-com/i;
		class up {
			constructor(t) {
				this.document = t
			}
			isActive(t) {
				return lp.test(t) || dp.test(t)
			}
			execute(t) {
				const {
					body: e,
					stylesString: n
				} = ap(t.dataTransfer.getData("text/html"), this.document.stylesProcessor);
				ep(e, n), cp(e, t.dataTransfer.getData("text/rtf")), t.content = e
			}
		}

		function hp(t, e) {
			let n = e.parent;
			for (; n;) {
				if (n.name === t) return n;
				n = n.parent
			}
		}

		function fp(t, e, n, o, i = 1) {
			e > i ? o.setAttribute(t, e, n) : o.removeAttribute(t, n)
		}

		function gp(t, e, n = {}) {
			const o = t.createElement("tableCell", n);
			t.insertElement("paragraph", o), t.insert(o, e)
		}

		function mp(t, e) {
			const n = e.parent.parent,
				o = parseInt(n.getAttribute("headingColumns") || 0),
				{
					column: i
				} = t.getCellLocation(e);
			return !!o && i < o
		}

		function pp() {
			return t => {
				t.on("element:table", (t, e, n) => {
					const o = e.viewItem;
					if (!n.consumable.test(o, {
							name: !0
						})) return;
					const {
						rows: i,
						headingRows: r,
						headingColumns: s
					} = function(t) {
						const e = {
								headingRows: 0,
								headingColumns: 0
							},
							n = [],
							o = [];
						let i;
						for (const r of Array.from(t.getChildren()))
							if ("tbody" === r.name || "thead" === r.name || "tfoot" === r.name) {
								"thead" !== r.name || i || (i = r);
								const t = Array.from(r.getChildren()).filter(t => t.is("element", "tr"));
								for (const r of t)
									if ("thead" === r.parent.name && r.parent === i) e.headingRows++, n.push(r);
									else {
										o.push(r);
										const t = wp(r);
										t > e.headingColumns && (e.headingColumns = t)
									}
							} return e.rows = [...n, ...o], e
					}(o), a = {};
					s && (a.headingColumns = s), r && (a.headingRows = r);
					const c = n.writer.createElement("table", a),
						l = n.splitToAllowedParent(c, e.modelCursor);
					if (l) {
						if (n.writer.insert(c, l.position), n.consumable.consume(o, {
								name: !0
							}), i.forEach(t => n.convertItem(t, n.writer.createPositionAt(c, "end"))), c.isEmpty) {
							const t = n.writer.createElement("tableRow");
							n.writer.insert(t, n.writer.createPositionAt(c, "end")), gp(n.writer, n.writer.createPositionAt(t, "end"))
						}
						e.modelRange = n.writer.createRange(n.writer.createPositionBefore(c), n.writer.createPositionAfter(c)), l
							.cursorParent ? e.modelCursor = n.writer.createPositionAt(l.cursorParent, 0) : e.modelCursor = e.modelRange
							.end
					}
				})
			}
		}

		function bp(t) {
			return e => {
				e.on("element:" + t, (t, e, n) => {
					const o = e.viewItem;
					if (!n.consumable.test(o, {
							name: !0
						})) return;
					const i = n.writer.createElement("tableCell"),
						r = n.splitToAllowedParent(i, e.modelCursor);
					if (!r) return;
					n.writer.insert(i, r.position), n.consumable.consume(o, {
						name: !0
					});
					const s = n.writer.createPositionAt(i, 0);
					n.convertChildren(o, s), i.childCount || n.writer.insertElement("paragraph", s), e.modelRange = n.writer.createRange(
						n.writer.createPositionBefore(i), n.writer.createPositionAfter(i)), e.modelCursor = e.modelRange.end
				})
			}
		}

		function wp(t) {
			let e = 0,
				n = 0;
			const o = Array.from(t.getChildren()).filter(t => "th" === t.name || "td" === t.name);
			for (; n < o.length && "th" === o[n].name;) {
				const t = o[n];
				e += parseInt(t.getAttribute("colspan") || 1), n++
			}
			return e
		}
		class kp {
			constructor(t, e = {}) {
				this._table = t, this._startRow = void 0 !== e.row ? e.row : e.startRow || 0, this._endRow = void 0 !== e.row ?
					e.row : e.endRow, this._startColumn = void 0 !== e.column ? e.column : e.startColumn || 0, this._endColumn =
					void 0 !== e.column ? e.column : e.endColumn, this._includeAllSlots = !!e.includeAllSlots, this._skipRows =
					new Set, this._row = 0, this._column = 0, this._cellIndex = 0, this._spannedCells = new Map, this._nextCellAtColumn = -
					1
			} [Symbol.iterator]() {
				return this
			}
			next() {
				const t = this._table.getChild(this._row);
				if (!t || this._isOverEndRow()) return {
					done: !0
				};
				if (this._isOverEndColumn()) return this._advanceToNextRow();
				let e = null;
				const n = this._getSpanned();
				if (n) this._includeAllSlots && !this._shouldSkipSlot() && (e = this._formatOutValue(n.cell, n.row, n.column));
				else {
					const n = t.getChild(this._cellIndex);
					if (!n) return this._advanceToNextRow();
					const o = parseInt(n.getAttribute("colspan") || 1),
						i = parseInt(n.getAttribute("rowspan") || 1);
					(o > 1 || i > 1) && this._recordSpans(n, i, o), this._shouldSkipSlot() || (e = this._formatOutValue(n)),
						this._nextCellAtColumn = this._column + o
				}
				return this._column++, this._column == this._nextCellAtColumn && this._cellIndex++, e || this.next()
			}
			skipRow(t) {
				this._skipRows.add(t)
			}
			_advanceToNextRow() {
				return this._row++, this._column = 0, this._cellIndex = 0, this._nextCellAtColumn = -1, this.next()
			}
			_isOverEndRow() {
				return void 0 !== this._endRow && this._row > this._endRow
			}
			_isOverEndColumn() {
				return void 0 !== this._endColumn && this._column > this._endColumn
			}
			_formatOutValue(t, e = this._row, n = this._column) {
				return {
					done: !1,
					value: new _p(this, t, e, n)
				}
			}
			_shouldSkipSlot() {
				const t = this._skipRows.has(this._row),
					e = this._row < this._startRow,
					n = this._column < this._startColumn,
					o = void 0 !== this._endColumn && this._column > this._endColumn;
				return t || e || n || o
			}
			_getSpanned() {
				const t = this._spannedCells.get(this._row);
				return t && t.get(this._column) || null
			}
			_recordSpans(t, e, n) {
				const o = {
					cell: t,
					row: this._row,
					column: this._column
				};
				for (let t = this._row; t < this._row + e; t++)
					for (let e = this._column; e < this._column + n; e++) t == this._row && e == this._column || this._markSpannedCell(
						t, e, o)
			}
			_markSpannedCell(t, e, n) {
				this._spannedCells.has(t) || this._spannedCells.set(t, new Map);
				this._spannedCells.get(t).set(e, n)
			}
		}
		class _p {
			constructor(t, e, n, o) {
				this.cell = e, this.row = t._row, this.column = t._column, this.cellAnchorRow = n, this.cellAnchorColumn = o,
					this._cellIndex = t._cellIndex, this._table = t._table
			}
			get isAnchor() {
				return this.row === this.cellAnchorRow && this.column === this.cellAnchorColumn
			}
			get cellWidth() {
				return parseInt(this.cell.getAttribute("colspan") || 1)
			}
			get cellHeight() {
				return parseInt(this.cell.getAttribute("rowspan") || 1)
			}
			getPositionBefore() {
				return this._table.root.document.model.createPositionAt(this._table.getChild(this.row), this._cellIndex)
			}
		}

		function vp(t = {}) {
			return e => e.on("insert:table", (e, n, o) => {
				const i = n.item;
				if (!o.consumable.consume(i, "insert")) return;
				o.consumable.consume(i, "attribute:headingRows:table"), o.consumable.consume(i,
					"attribute:headingColumns:table");
				const r = t && t.asWidget,
					s = o.writer.createContainerElement("figure", {
						class: "table"
					}),
					a = o.writer.createContainerElement("table");
				let c;
				var l, d;
				o.writer.insert(o.writer.createPositionAt(s, 0), a), r && (l = s, (d = o.writer).setCustomProperty("table",
					!0, l), c = Ah(l, d, {
					hasSelectionHandle: !0
				}));
				const u = new kp(i),
					h = {
						headingRows: i.getAttribute("headingRows") || 0,
						headingColumns: i.getAttribute("headingColumns") || 0
					},
					f = new Map;
				for (const e of u) {
					const {
						row: n,
						cell: r
					} = e, s = i.getChild(n), c = f.get(n) || Cp(a, s, n, h, o);
					f.set(n, c), o.consumable.consume(r, "insert");
					Ap(e, h, o.writer.createPositionAt(c, "end"), o, t)
				}
				for (const t of i.getChildren()) {
					const e = t.index;
					f.has(e) || f.set(e, Cp(a, t, e, h, o))
				}
				const g = o.mapper.toViewPosition(n.range.start);
				o.mapper.bindElements(i, r ? c : s), o.writer.insert(g, r ? c : s)
			})
		}

		function yp(t, e, n) {
			const o = n.writer,
				i = n.mapper.toViewElement(t);
			if (!i) return;
			const r = Sh(o.createEditableElement(e, i.getAttributes()), o);
			Ch(r, o, (t, e, n) => n.addClass(Np(e.classes), t), (t, e, n) => n.removeClass(Np(e.classes), t)), o.insert(o.createPositionAfter(
				i), r), o.move(o.createRangeIn(i), o.createPositionAt(r, 0)), o.remove(o.createRangeOn(i)), n.mapper.unbindViewElement(
				i), n.mapper.bindElements(t, r)
		}

		function xp(t, e, n) {
			const {
				cell: o
			} = t, i = Tp(t, e), r = n.mapper.toViewElement(o);
			r && r.name !== i && yp(o, i, n)
		}

		function Ap(t, e, n, o, i) {
			const r = i && i.asWidget,
				s = Tp(t, e),
				a = r ? Sh(o.writer.createEditableElement(s), o.writer) : o.writer.createContainerElement(s);
			r && Ch(a, o.writer, (t, e, n) => n.addClass(Np(e.classes), t), (t, e, n) => n.removeClass(Np(e.classes), t));
			const c = t.cell,
				l = c.getChild(0),
				d = 1 === c.childCount && "paragraph" === l.name;
			if (o.writer.insert(n, a), d && ![...l.getAttributeKeys()].length) {
				const t = c.getChild(0),
					e = o.writer.createPositionAt(a, "end");
				if (o.consumable.consume(t, "insert"), r) {
					const n = o.writer.createContainerElement("span", {
						style: "display:inline-block"
					});
					o.mapper.bindElements(t, n), o.writer.insert(e, n), o.mapper.bindElements(c, a)
				} else o.mapper.bindElements(c, a), o.mapper.bindElements(t, a)
			} else o.mapper.bindElements(c, a)
		}

		function Cp(t, e, n, o, i) {
			i.consumable.consume(e, "insert");
			const r = e.isEmpty ? i.writer.createEmptyElement("tr") : i.writer.createContainerElement("tr");
			i.mapper.bindElements(e, r);
			const s = o.headingRows,
				a = Sp(function(t, e) {
					return t < e.headingRows ? "thead" : "tbody"
				}(n, o), t, i),
				c = s > 0 && n >= s ? n - s : n,
				l = i.writer.createPositionAt(a, c);
			return i.writer.insert(l, r), r
		}

		function Tp(t, e) {
			const {
				row: n,
				column: o
			} = t, {
				headingColumns: i,
				headingRows: r
			} = e;
			if (r && r > n) return "th";
			return i && i > o ? "th" : "td"
		}

		function Sp(t, e, n) {
			const o = Pp(t, e);
			return o || function(t, e, n) {
				const o = n.writer.createContainerElement(t),
					i = n.writer.createPositionAt(e, "tbody" == t ? "end" : 0);
				return n.writer.insert(i, o), o
			}(t, e, n)
		}

		function Pp(t, e) {
			for (const n of e.getChildren())
				if (n.name == t) return n
		}

		function Ep(t, e, n) {
			const o = Pp(t, e);
			o && 0 === o.childCount && n.writer.remove(n.writer.createRangeOn(o))
		}

		function Mp(t, e, n, o) {
			for (const i of t) {
				const t = n.mapper.toViewElement(i);
				t && n.writer.move(n.writer.createRangeOn(t), n.writer.createPositionAt(e, o))
			}
		}

		function Ip(t) {
			for (const e of t.getChildren())
				if ("table" === e.name) return e
		}

		function Np(t) {
			return Array.isArray(t) ? t : [t]
		}
		class Op extends Zl {
			refresh() {
				const t = this.editor.model,
					e = t.document.selection,
					n = t.schema,
					o = function(t) {
						const e = t.parent;
						return e === e.root ? e : e.parent
					}(e.getFirstPosition());
				this.isEnabled = n.checkChild(o, "table")
			}
			execute(t = {}) {
				const e = this.editor.model,
					n = e.document.selection,
					o = this.editor.plugins.get("TableUtils"),
					i = parseInt(t.rows) || 2,
					r = parseInt(t.columns) || 2,
					s = Ph(n, e);
				e.change(t => {
					const n = o.createTable(t, i, r);
					e.insertContent(n, s), t.setSelection(t.createPositionAt(n.getNodeByPath([0, 0, 0]), 0))
				})
			}
		}

		function Rp(t) {
			const e = [];
			for (const o of (n = t.getRanges(), Array.from(n).sort(Fp))) {
				const t = o.getContainedElement();
				t && t.is("tableCell") && e.push(t)
			}
			var n;
			return e
		}

		function Dp(t) {
			const e = [];
			for (const n of t.getRanges()) {
				const t = hp("tableCell", n.start);
				t && e.push(t)
			}
			return e
		}

		function Lp(t) {
			const e = Rp(t);
			return e.length ? e : Dp(t)
		}

		function jp(t) {
			return Bp(t.map(t => t.parent.index))
		}

		function Vp(t) {
			const e = hp("table", t[0]);
			return Bp([...new kp(e)].filter(e => t.includes(e.cell)).map(t => t.column))
		}

		function zp(t, e) {
			if (t.length < 2 || ! function(t) {
					const e = hp("table", t[0]),
						n = jp(t),
						o = parseInt(e.getAttribute("headingRows") || 0);
					if (!Up(n, o)) return !1;
					const i = parseInt(e.getAttribute("headingColumns") || 0);
					return Up(Vp(t), i)
				}(t)) return !1;
			const n = new Set,
				o = new Set;
			let i = 0;
			for (const r of t) {
				const {
					row: t,
					column: s
				} = e.getCellLocation(r), a = parseInt(r.getAttribute("rowspan") || 1), c = parseInt(r.getAttribute("colspan") ||
					1);
				n.add(t), o.add(s), a > 1 && n.add(t + a - 1), c > 1 && o.add(s + c - 1), i += a * c
			}
			return function(t, e) {
				const n = Array.from(t.values()),
					o = Array.from(e.values()),
					i = Math.max(...n),
					r = Math.min(...n),
					s = Math.max(...o),
					a = Math.min(...o);
				return (i - r + 1) * (s - a + 1)
			}(n, o) == i
		}

		function Bp(t) {
			const e = t.sort((t, e) => t - e);
			return {
				first: e[0],
				last: e[e.length - 1]
			}
		}

		function Fp(t, e) {
			const n = t.start,
				o = e.start;
			return n.isBefore(o) ? -1 : 1
		}

		function Up({
			first: t,
			last: e
		}, n) {
			return t < n === e < n
		}
		class Hp extends Zl {
			constructor(t, e = {}) {
				super(t), this.order = e.order || "below"
			}
			refresh() {
				const t = hp("table", this.editor.model.document.selection.getFirstPosition());
				this.isEnabled = !!t
			}
			execute() {
				const t = this.editor,
					e = t.model.document.selection,
					n = t.plugins.get("TableUtils"),
					o = "above" === this.order,
					i = Lp(e),
					r = jp(i),
					s = o ? r.first : r.last,
					a = hp("table", i[0]);
				n.insertRows(a, {
					at: o ? s : s + 1,
					copyStructureFromAbove: !o
				})
			}
		}
		class qp extends Zl {
			constructor(t, e = {}) {
				super(t), this.order = e.order || "right"
			}
			refresh() {
				const t = hp("table", this.editor.model.document.selection.getFirstPosition());
				this.isEnabled = !!t
			}
			execute() {
				const t = this.editor,
					e = t.model.document.selection,
					n = t.plugins.get("TableUtils"),
					o = "left" === this.order,
					i = Lp(e),
					r = Vp(i),
					s = o ? r.first : r.last,
					a = hp("table", i[0]);
				n.insertColumns(a, {
					columns: 1,
					at: o ? s : s + 1
				})
			}
		}
		class Wp extends Zl {
			constructor(t, e = {}) {
				super(t), this.direction = e.direction || "horizontally"
			}
			refresh() {
				const t = Lp(this.editor.model.document.selection);
				this.isEnabled = 1 === t.length
			}
			execute() {
				const t = Lp(this.editor.model.document.selection)[0],
					e = "horizontally" === this.direction,
					n = this.editor.plugins.get("TableUtils");
				e ? n.splitCellHorizontally(t, 2) : n.splitCellVertically(t, 2)
			}
		}

		function Gp(t, e, n) {
			const {
				startRow: o,
				startColumn: i,
				endRow: r,
				endColumn: s
			} = e, a = n.createElement("table"), c = r - o + 1;
			for (let t = 0; t < c; t++) n.insertElement("tableRow", a, "end");
			const l = [...new kp(t, {
				startRow: o,
				endRow: r,
				startColumn: i,
				endColumn: s,
				includeAllSlots: !0
			})];
			for (const {
					row: t,
					column: e,
					cell: c,
					isAnchor: d,
					cellAnchorRow: u,
					cellAnchorColumn: h
				} of l) {
				const l = t - o,
					f = a.getChild(l);
				if (d) {
					const o = n.cloneElement(c);
					n.append(o, f), Jp(o, t, e, r, s, n)
				} else(u < o || h < i) && gp(n, n.createPositionAt(f, "end"))
			}
			return function(t, e, n, o, i) {
				const r = parseInt(e.getAttribute("headingRows") || 0);
				if (r > 0) {
					fp("headingRows", r - n, t, i, 0)
				}
				const s = parseInt(e.getAttribute("headingColumns") || 0);
				if (s > 0) {
					fp("headingColumns", s - o, t, i, 0)
				}
			}(a, t, o, i, n), a
		}

		function Yp(t, e, n = 0) {
			const o = [],
				i = new kp(t, {
					startRow: n,
					endRow: e - 1
				});
			for (const t of i) {
				const {
					row: n,
					cellHeight: i
				} = t, r = n + i - 1;
				n < e && e <= r && o.push(t)
			}
			return o
		}

		function $p(t, e, n) {
			const o = t.parent,
				i = o.parent,
				r = o.index,
				s = e - r,
				a = {},
				c = parseInt(t.getAttribute("rowspan")) - s;
			c > 1 && (a.rowspan = c);
			const l = parseInt(t.getAttribute("colspan") || 1);
			l > 1 && (a.colspan = l);
			const d = r + s,
				u = [...new kp(i, {
					startRow: r,
					endRow: d,
					includeAllSlots: !0
				})];
			let h;
			for (const e of u) {
				const {
					row: o,
					column: i,
					cell: r
				} = e;
				r === t && void 0 === h && (h = i), void 0 !== h && h === i && o === d && gp(n, e.getPositionBefore(), a)
			}
			fp("rowspan", s, t, n)
		}

		function Kp(t, e) {
			const n = [],
				o = new kp(t);
			for (const t of o) {
				const {
					column: o,
					cellWidth: i
				} = t, r = o + i - 1;
				o < e && e <= r && n.push(t)
			}
			return n
		}

		function Qp(t, e, n, o) {
			const i = n - e,
				r = {},
				s = parseInt(t.getAttribute("colspan")) - i;
			s > 1 && (r.colspan = s);
			const a = parseInt(t.getAttribute("rowspan") || 1);
			a > 1 && (r.rowspan = a), gp(o, o.createPositionAfter(t), r), fp("colspan", i, t, o)
		}

		function Jp(t, e, n, o, i, r) {
			const s = parseInt(t.getAttribute("colspan") || 1),
				a = parseInt(t.getAttribute("rowspan") || 1);
			if (n + s - 1 > i) {
				fp("colspan", i - n + 1, t, r, 1)
			}
			if (e + a - 1 > o) {
				fp("rowspan", o - e + 1, t, r, 1)
			}
		}

		function Zp(t, e) {
			const n = e.getColumns(t),
				o = new Array(n).fill(0);
			for (const {
					column: e
				} of new kp(t)) o[e]++;
			const i = o.reduce((t, e, n) => e ? t : [...t, n], []);
			return i.reverse().forEach(n => {
				e.removeColumns(t, {
					at: n
				})
			}), i.length > 0
		}

		function Xp(t, e, n) {
			const o = [];
			for (let e = 0; e < t.childCount; e++) {
				t.getChild(e).isEmpty && o.push(e)
			}
			return o.reverse().forEach(o => {
				e.removeRows(t, {
					at: o,
					batch: n
				})
			}), o.length > 0
		}

		function tb(t, e, n) {
			Zp(t, e) || Xp(t, e, n)
		}

		function eb(t, e) {
			const n = Array.from(new kp(t, {
				startColumn: e.firstColumn,
				endColumn: e.lastColumn,
				row: e.lastRow
			}));
			if (n.every(({
					cellHeight: t
				}) => 1 === t)) return e.lastRow;
			const o = n[0].cellHeight - 1;
			return e.lastRow + o
		}

		function nb(t, e) {
			const n = Array.from(new kp(t, {
				startRow: e.firstRow,
				endRow: e.lastRow,
				column: e.lastColumn
			}));
			if (n.every(({
					cellWidth: t
				}) => 1 === t)) return e.lastColumn;
			const o = n[0].cellWidth - 1;
			return e.lastColumn + o
		}
		class ob extends Zl {
			constructor(t, e) {
				super(t), this.direction = e.direction, this.isHorizontal = "right" == this.direction || "left" == this.direction
			}
			refresh() {
				const t = this._getMergeableCell();
				this.value = t, this.isEnabled = !!t
			}
			execute() {
				const t = this.editor.model,
					e = Dp(t.document.selection)[0],
					n = this.value,
					o = this.direction;
				t.change(t => {
					const i = "right" == o || "down" == o,
						r = i ? e : n,
						s = i ? n : e,
						a = s.parent;
					! function(t, e, n) {
						ib(t) || (ib(e) && n.remove(n.createRangeIn(e)), n.move(n.createRangeIn(t), n.createPositionAt(e, "end")));
						n.remove(t)
					}(s, r, t);
					const c = this.isHorizontal ? "colspan" : "rowspan",
						l = parseInt(e.getAttribute(c) || 1),
						d = parseInt(n.getAttribute(c) || 1);
					t.setAttribute(c, l + d, r), t.setSelection(t.createRangeIn(r));
					const u = this.editor.plugins.get("TableUtils");
					tb(hp("table", a), u, t.batch)
				})
			}
			_getMergeableCell() {
				const t = Dp(this.editor.model.document.selection)[0];
				if (!t) return;
				const e = this.editor.plugins.get("TableUtils"),
					n = this.isHorizontal ? function(t, e, n) {
						const o = t.parent.parent,
							i = "right" == e ? t.nextSibling : t.previousSibling,
							r = (o.getAttribute("headingColumns") || 0) > 0;
						if (!i) return;
						const s = "right" == e ? t : i,
							a = "right" == e ? i : t,
							{
								column: c
							} = n.getCellLocation(s),
							{
								column: l
							} = n.getCellLocation(a),
							d = parseInt(s.getAttribute("colspan") || 1),
							u = mp(n, s),
							h = mp(n, a);
						if (r && u != h) return;
						return c + d === l ? i : void 0
					}(t, this.direction, e) : function(t, e) {
						const n = t.parent,
							o = n.parent,
							i = o.getChildIndex(n);
						if ("down" == e && i === o.childCount - 1 || "up" == e && 0 === i) return;
						const r = parseInt(t.getAttribute("rowspan") || 1),
							s = o.getAttribute("headingRows") || 0,
							a = "down" == e && i + r === s,
							c = "up" == e && i === s;
						if (s && (a || c)) return;
						const l = parseInt(t.getAttribute("rowspan") || 1),
							d = "down" == e ? i + l : i,
							u = [...new kp(o, {
								endRow: d
							})],
							h = u.find(e => e.cell === t).column,
							f = u.find(({
								row: t,
								cellHeight: n,
								column: o
							}) => o === h && ("down" == e ? t === d : d === t + n));
						return f && f.cell
					}(t, this.direction);
				if (!n) return;
				const o = this.isHorizontal ? "rowspan" : "colspan",
					i = parseInt(t.getAttribute(o) || 1);
				return parseInt(n.getAttribute(o) || 1) === i ? n : void 0
			}
		}

		function ib(t) {
			return 1 == t.childCount && t.getChild(0).is("paragraph") && t.getChild(0).isEmpty
		}
		class rb extends Zl {
			refresh() {
				const t = Lp(this.editor.model.document.selection),
					e = t[0];
				if (e) {
					const n = hp("table", e),
						o = this.editor.plugins.get("TableUtils").getRows(n) - 1,
						i = jp(t),
						r = 0 === i.first && i.last === o;
					this.isEnabled = !r
				} else this.isEnabled = !1
			}
			execute() {
				const t = this.editor.model,
					e = Lp(t.document.selection),
					n = jp(e),
					o = e[0],
					i = hp("table", o),
					r = this.editor.plugins.get("TableUtils").getCellLocation(o).column,
					s = t.createBatch();
				t.enqueueChange(s, t => {
					t.setSelection(t.createSelection(i, "on"));
					const e = n.last - n.first + 1;
					this.editor.plugins.get("TableUtils").removeRows(i, {
						at: n.first,
						rows: e,
						batch: s
					})
				}), t.enqueueChange(s, t => {
					const e = function(t, e, n) {
						const o = t.getChild(e) || t.getChild(t.childCount - 1);
						let i = o.getChild(0),
							r = 0;
						for (const t of o.getChildren()) {
							if (r > n) return i;
							i = t, r += parseInt(t.getAttribute("colspan") || 1)
						}
						return i
					}(i, n.first, r);
					t.setSelection(t.createPositionAt(e, 0))
				})
			}
		}
		class sb extends Zl {
			refresh() {
				const t = Lp(this.editor.model.document.selection),
					e = t[0];
				if (e) {
					const n = hp("table", e),
						o = this.editor.plugins.get("TableUtils").getColumns(n),
						{
							first: i,
							last: r
						} = Vp(t);
					this.isEnabled = r - i < o - 1
				} else this.isEnabled = !1
			}
			execute() {
				const [t, e] = function(t) {
					const e = Lp(t),
						n = e[0],
						o = e.pop(),
						i = [n, o];
					return n.isBefore(o) ? i : i.reverse()
				}(this.editor.model.document.selection), n = t.parent.parent, o = [...new kp(n)], i = {
					first: o.find(e => e.cell === t).column,
					last: o.find(t => t.cell === e).column
				}, r = function(t, e, n, o) {
					return parseInt(n.getAttribute("colspan") || 1) > 1 ? n : e.previousSibling || n.nextSibling ? n.nextSibling ||
						e.previousSibling : o.first ? t.reverse().find(({
							column: t
						}) => t < o.first).cell : t.reverse().find(({
							column: t
						}) => t > o.last).cell
				}(o, t, e, i);
				this.editor.model.change(t => {
					const e = i.last - i.first + 1;
					this.editor.plugins.get("TableUtils").removeColumns(n, {
						at: i.first,
						columns: e
					}), t.setSelection(t.createPositionAt(r, 0))
				})
			}
		}
		class ab extends Zl {
			refresh() {
				const t = Lp(this.editor.model.document.selection),
					e = t.length > 0;
				this.isEnabled = e, this.value = e && t.every(t => this._isInHeading(t, t.parent.parent))
			}
			execute(t = {}) {
				if (t.forceValue === this.value) return;
				const e = this.editor.model,
					n = Lp(e.document.selection),
					o = hp("table", n[0]),
					{
						first: i,
						last: r
					} = jp(n),
					s = this.value ? i : r + 1,
					a = o.getAttribute("headingRows") || 0;
				e.change(t => {
					if (s) {
						const e = Yp(o, s, s > a ? a : 0);
						for (const {
								cell: n
							} of e) $p(n, s, t)
					}
					fp("headingRows", s, o, t, 0)
				})
			}
			_isInHeading(t, e) {
				const n = parseInt(e.getAttribute("headingRows") || 0);
				return !!n && t.parent.index < n
			}
		}
		class cb extends Zl {
			refresh() {
				const t = Lp(this.editor.model.document.selection),
					e = this.editor.plugins.get("TableUtils"),
					n = t.length > 0;
				this.isEnabled = n, this.value = n && t.every(t => mp(e, t))
			}
			execute(t = {}) {
				if (t.forceValue === this.value) return;
				const e = this.editor.model,
					n = Lp(e.document.selection),
					o = hp("table", n[0]),
					{
						first: i,
						last: r
					} = Vp(n),
					s = this.value ? i : r + 1;
				e.change(t => {
					if (s) {
						const e = Kp(o, s);
						for (const {
								cell: n,
								column: o
							} of e) Qp(n, o, s, t)
					}
					fp("headingColumns", s, o, t, 0)
				})
			}
		}
		class lb extends Gl {
			static get pluginName() {
				return "TableUtils"
			}
			getCellLocation(t) {
				const e = t.parent,
					n = e.parent,
					o = n.getChildIndex(e),
					i = new kp(n, {
						row: o
					});
				for (const {
						cell: e,
						row: n,
						column: o
					} of i)
					if (e === t) return {
						row: n,
						column: o
					}
			}
			createTable(t, e, n) {
				const o = t.createElement("table");
				return db(t, o, 0, e, n), o
			}
			insertRows(t, e = {}) {
				const n = this.editor.model,
					o = e.at || 0,
					i = e.rows || 1,
					r = void 0 !== e.copyStructureFromAbove,
					s = e.copyStructureFromAbove ? o - 1 : o,
					a = this.getRows(t),
					c = this.getColumns(t);
				n.change(e => {
					const n = t.getAttribute("headingRows") || 0;
					if (n > o && e.setAttribute("headingRows", n + i, t), !r && (0 === o || o === a)) return void db(e, t, o,
						i, c);
					const l = r ? Math.max(o, s) : o,
						d = new kp(t, {
							endRow: l
						}),
						u = new Array(c).fill(1);
					for (const {
							row: t,
							column: n,
							cellHeight: a,
							cellWidth: c,
							cell: l
						} of d) {
						const d = t + a - 1,
							h = t <= s && s <= d;
						t < o && o <= d ? (e.setAttribute("rowspan", a + i, l), u[n] = -c) : r && h && (u[n] = c)
					}
					for (let n = 0; n < i; n++) {
						const n = e.createElement("tableRow");
						e.insert(n, t, o);
						for (let t = 0; t < u.length; t++) {
							const o = u[t],
								i = e.createPositionAt(n, "end");
							o > 0 && gp(e, i, o > 1 ? {
								colspan: o
							} : null), t += Math.abs(o) - 1
						}
					}
				})
			}
			insertColumns(t, e = {}) {
				const n = this.editor.model,
					o = e.at || 0,
					i = e.columns || 1;
				n.change(e => {
					const n = t.getAttribute("headingColumns");
					o < n && e.setAttribute("headingColumns", n + i, t);
					const r = this.getColumns(t);
					if (0 === o || r === o) {
						for (const n of t.getChildren()) ub(i, e, e.createPositionAt(n, o ? "end" : 0));
						return
					}
					const s = new kp(t, {
						column: o,
						includeAllSlots: !0
					});
					for (const t of s) {
						const {
							row: n,
							cell: r,
							cellAnchorColumn: a,
							cellAnchorRow: c,
							cellWidth: l,
							cellHeight: d
						} = t;
						if (a < o) {
							e.setAttribute("colspan", l + i, r);
							const t = c + d - 1;
							for (let e = n; e <= t; e++) s.skipRow(e)
						} else ub(i, e, t.getPositionBefore())
					}
				})
			}
			removeRows(t, e) {
				const n = this.editor.model,
					o = e.rows || 1,
					i = e.at,
					r = i + o - 1,
					s = e.batch || "default";
				n.enqueueChange(s, e => {
					const {
						cellsToMove: o,
						cellsToTrim: a
					} = function(t, e, n) {
						const o = new Map,
							i = [];
						for (const {
								row: r,
								column: s,
								cellHeight: a,
								cell: c
							} of new kp(t, {
								endRow: n
							})) {
							const t = r + a - 1;
							if (r >= e && r <= n && t > n) {
								const t = a - (n - r + 1);
								o.set(s, {
									cell: c,
									rowspan: t
								})
							}
							if (r < e && t >= e) {
								let o;
								o = t >= n ? n - e + 1 : t - e + 1, i.push({
									cell: c,
									rowspan: a - o
								})
							}
						}
						return {
							cellsToMove: o,
							cellsToTrim: i
						}
					}(t, i, r);
					if (o.size) {
						! function(t, e, n, o) {
							const i = [...new kp(t, {
									includeAllSlots: !0,
									row: e
								})],
								r = t.getChild(e);
							let s;
							for (const {
									column: t,
									cell: e,
									isAnchor: a
								} of i)
								if (n.has(t)) {
									const {
										cell: e,
										rowspan: i
									} = n.get(t), a = s ? o.createPositionAfter(s) : o.createPositionAt(r, 0);
									o.move(o.createRangeOn(e), a), fp("rowspan", i, e, o), s = e
								} else a && (s = e)
						}(t, r + 1, o, e)
					}
					for (let n = r; n >= i; n--) e.remove(t.getChild(n));
					for (const {
							rowspan: t,
							cell: n
						} of a) fp("rowspan", t, n, e);
					Zp(t, this),
						function(t, e, n, o, i) {
							o.enqueueChange(i, o => {
								const i = t.getAttribute("headingRows") || 0;
								if (e < i) {
									fp("headingRows", n < i ? i - (n - e + 1) : e, t, o, 0)
								}
							})
						}(t, i, r, n, s)
				})
			}
			removeColumns(t, e) {
				const n = this.editor.model,
					o = e.at,
					i = e.columns || 1,
					r = e.at + i - 1;
				n.change(e => {
					! function(t, e, n) {
						const o = t.getAttribute("headingColumns") || 0;
						if (o && e.first < o) {
							const i = Math.min(o - 1, e.last) - e.first + 1;
							n.setAttribute("headingColumns", o - i, t)
						}
					}(t, {
						first: o,
						last: r
					}, e);
					for (let n = r; n >= o; n--)
						for (const {
								cell: o,
								column: i,
								cellWidth: r
							} of [...new kp(t)]) i <= n && r > 1 && i + r > n ? fp("colspan", r - 1, o, e) : i === n && e.remove(o);
					Xp(t, this, e.batch)
				})
			}
			splitCellVertically(t, e = 2) {
				const n = this.editor.model,
					o = t.parent.parent,
					i = parseInt(t.getAttribute("rowspan") || 1),
					r = parseInt(t.getAttribute("colspan") || 1);
				n.change(n => {
					if (r > 1) {
						const {
							newCellsSpan: o,
							updatedSpan: s
						} = hb(r, e);
						fp("colspan", s, t, n);
						const a = {};
						o > 1 && (a.colspan = o), i > 1 && (a.rowspan = i);
						ub(r > e ? e - 1 : r - 1, n, n.createPositionAfter(t), a)
					}
					if (r < e) {
						const s = e - r,
							a = [...new kp(o)],
							{
								column: c
							} = a.find(({
								cell: e
							}) => e === t),
							l = a.filter(({
								cell: e,
								cellWidth: n,
								column: o
							}) => e !== t && o === c || o < c && o + n > c);
						for (const {
								cell: t,
								cellWidth: e
							} of l) n.setAttribute("colspan", e + s, t);
						const d = {};
						i > 1 && (d.rowspan = i), ub(s, n, n.createPositionAfter(t), d);
						const u = o.getAttribute("headingColumns") || 0;
						u > c && fp("headingColumns", u + s, o, n)
					}
				})
			}
			splitCellHorizontally(t, e = 2) {
				const n = this.editor.model,
					o = t.parent,
					i = o.parent,
					r = i.getChildIndex(o),
					s = parseInt(t.getAttribute("rowspan") || 1),
					a = parseInt(t.getAttribute("colspan") || 1);
				n.change(n => {
					if (s > 1) {
						const o = [...new kp(i, {
								startRow: r,
								endRow: r + s - 1,
								includeAllSlots: !0
							})],
							{
								newCellsSpan: c,
								updatedSpan: l
							} = hb(s, e);
						fp("rowspan", l, t, n);
						const {
							column: d
						} = o.find(({
							cell: e
						}) => e === t), u = {};
						c > 1 && (u.rowspan = c), a > 1 && (u.colspan = a);
						for (const t of o) {
							const {
								column: e,
								row: o
							} = t, i = e === d, s = (o + r + l) % c == 0;
							o >= r + l && i && s && ub(1, n, t.getPositionBefore(), u)
						}
					}
					if (s < e) {
						const o = e - s,
							c = [...new kp(i, {
								startRow: 0,
								endRow: r
							})];
						for (const {
								cell: e,
								cellHeight: i,
								row: s
							} of c)
							if (e !== t && s + i > r) {
								const t = i + o;
								n.setAttribute("rowspan", t, e)
							} const l = {};
						a > 1 && (l.colspan = a), db(n, i, r + 1, o, 1, l);
						const d = i.getAttribute("headingRows") || 0;
						d > r && fp("headingRows", d + o, i, n)
					}
				})
			}
			getColumns(t) {
				return [...t.getChild(0).getChildren()].reduce((t, e) => t + parseInt(e.getAttribute("colspan") || 1), 0)
			}
			getRows(t) {
				return t.childCount
			}
		}

		function db(t, e, n, o, i, r = {}) {
			for (let s = 0; s < o; s++) {
				const o = t.createElement("tableRow");
				t.insert(o, e, n), ub(i, t, t.createPositionAt(o, "end"), r)
			}
		}

		function ub(t, e, n, o = {}) {
			for (let i = 0; i < t; i++) gp(e, n, o)
		}

		function hb(t, e) {
			if (t < e) return {
				newCellsSpan: 1,
				updatedSpan: 1
			};
			const n = Math.floor(t / e);
			return {
				newCellsSpan: n,
				updatedSpan: t - n * e + n
			}
		}
		class fb extends Zl {
			refresh() {
				const t = Rp(this.editor.model.document.selection);
				this.isEnabled = zp(t, this.editor.plugins.get(lb))
			}
			execute() {
				const t = this.editor.model,
					e = this.editor.plugins.get(lb);
				t.change(n => {
					const o = Rp(t.document.selection),
						i = o.shift();
					n.setSelection(i, 0);
					const {
						mergeWidth: r,
						mergeHeight: s
					} = function(t, e, n) {
						let o = 0,
							i = 0;
						for (const t of e) {
							const {
								row: e,
								column: r
							} = n.getCellLocation(t);
							o = pb(t, r, o, "colspan"), i = pb(t, e, i, "rowspan")
						}
						const {
							row: r,
							column: s
						} = n.getCellLocation(t);
						return {
							mergeWidth: o - s,
							mergeHeight: i - r
						}
					}(i, o, e);
					fp("colspan", r, i, n), fp("rowspan", s, i, n);
					for (const t of o) gb(t, i, n);
					tb(hp("table", i), e, n.batch), n.setSelection(i, "in")
				})
			}
		}

		function gb(t, e, n) {
			mb(t) || (mb(e) && n.remove(n.createRangeIn(e)), n.move(n.createRangeIn(t), n.createPositionAt(e, "end"))), n.remove(
				t)
		}

		function mb(t) {
			return 1 == t.childCount && t.getChild(0).is("paragraph") && t.getChild(0).isEmpty
		}

		function pb(t, e, n, o) {
			const i = parseInt(t.getAttribute(o) || 1);
			return Math.max(n, e + i)
		}
		class bb extends Zl {
			refresh() {
				const t = Lp(this.editor.model.document.selection);
				this.isEnabled = t.length > 0
			}
			execute() {
				const t = this.editor.model,
					e = Lp(t.document.selection),
					n = jp(e),
					o = hp("table", e[0]),
					i = [];
				for (let e = n.first; e <= n.last; e++)
					for (const n of o.getChild(e).getChildren()) i.push(t.createRangeOn(n));
				t.change(t => {
					t.setSelection(i)
				})
			}
		}
		class wb extends Zl {
			refresh() {
				const t = Lp(this.editor.model.document.selection);
				this.isEnabled = t.length > 0
			}
			execute() {
				const t = this.editor.model,
					e = Lp(t.document.selection),
					n = e[0],
					o = e.pop(),
					i = hp("table", n),
					r = this.editor.plugins.get("TableUtils"),
					s = r.getCellLocation(n),
					a = r.getCellLocation(o),
					c = Math.min(s.column, a.column),
					l = Math.max(s.column, a.column),
					d = [];
				for (const e of new kp(i, {
						startColumn: c,
						endColumn: l
					})) d.push(t.createRangeOn(e.cell));
				t.change(t => {
					t.setSelection(d)
				})
			}
		}

		function kb(t) {
			t.document.registerPostFixer(e => function(t, e) {
				const n = e.document.differ.getChanges();
				let o = !1;
				const i = new Set;
				for (const e of n) {
					let n;
					"table" == e.name && "insert" == e.type && (n = e.position.nodeAfter), "tableRow" != e.name && "tableCell" !=
						e.name || (n = hp("table", e.position)), yb(e) && (n = hp("table", e.range.start)), n && !i.has(n) && (o =
							_b(n, t) || o, o = vb(n, t) || o, i.add(n))
				}
				return o
			}(e, t))
		}

		function _b(t, e) {
			let n = !1;
			const o = function(t) {
				const e = parseInt(t.getAttribute("headingRows") || 0),
					n = t.childCount,
					o = [];
				for (const {
						row: i,
						cell: r,
						cellHeight: s
					} of new kp(t)) {
					if (s < 2) continue;
					const t = i < e ? e : n;
					if (i + s > t) {
						const e = t - i;
						o.push({
							cell: r,
							rowspan: e
						})
					}
				}
				return o
			}(t);
			if (o.length) {
				n = !0;
				for (const t of o) fp("rowspan", t.rowspan, t.cell, e, 1)
			}
			return n
		}

		function vb(t, e) {
			let n = !1;
			const o = function(t) {
					const e = new Array(t.childCount).fill(0);
					for (const {
							row: n
						} of new kp(t, {
							includeAllSlots: !0
						})) e[n]++;
					return e
				}(t),
				i = [];
			for (const [t, e] of o.entries()) e || i.push(t);
			if (i.length) {
				n = !0;
				for (const n of i.reverse()) e.remove(t.getChild(n)), o.splice(n, 1)
			}
			const r = o[0];
			if (!o.every(t => t === r)) {
				const i = o.reduce((t, e) => e > t ? e : t, 0);
				for (const [r, s] of o.entries()) {
					const o = i - s;
					if (o) {
						for (let n = 0; n < o; n++) gp(e, e.createPositionAt(t.getChild(r), "end"));
						n = !0
					}
				}
			}
			return n
		}

		function yb(t) {
			const e = "attribute" === t.type,
				n = t.attributeKey;
			return e && ("headingRows" === n || "colspan" === n || "rowspan" === n)
		}

		function xb(t) {
			t.document.registerPostFixer(e => function(t, e) {
				const n = e.document.differ.getChanges();
				let o = !1;
				for (const e of n) "insert" == e.type && "table" == e.name && (o = Ab(e.position.nodeAfter, t) || o),
					"insert" == e.type && "tableRow" == e.name && (o = Cb(e.position.nodeAfter, t) || o), "insert" == e.type &&
					"tableCell" == e.name && (o = Tb(e.position.nodeAfter, t) || o), Sb(e) && (o = Tb(e.position.parent, t) ||
						o);
				return o
			}(e, t))
		}

		function Ab(t, e) {
			let n = !1;
			for (const o of t.getChildren()) n = Cb(o, e) || n;
			return n
		}

		function Cb(t, e) {
			let n = !1;
			for (const o of t.getChildren()) n = Tb(o, e) || n;
			return n
		}

		function Tb(t, e) {
			if (0 == t.childCount) return e.insertElement("paragraph", t), !0;
			const n = Array.from(t.getChildren()).filter(t => t.is("text"));
			for (const t of n) e.wrap(e.createRangeOn(t), "paragraph");
			return !!n.length
		}

		function Sb(t) {
			return !(!t.position || !t.position.parent.is("tableCell")) && ("insert" == t.type && "$text" == t.name ||
				"remove" == t.type)
		}

		function Pb(t) {
			t.document.registerPostFixer(() => function(t) {
				const e = t.document.differ,
					n = new Set;
				let o = 0;
				for (const t of e.getChanges()) {
					const e = "insert" == t.type || "remove" == t.type ? t.position.parent : t.range.start.parent;
					e.is("tableCell") && ("insert" == t.type && o++, Eb(e, t.type, o) && n.add(e))
				}
				if (n.size) {
					for (const t of n.values()) e.refreshItem(t);
					return !0
				}
				return !1
			}(t))
		}

		function Eb(t, e, n) {
			if (!Array.from(t.getChildren()).some(t => t.is("paragraph"))) return !1;
			if ("attribute" == e) {
				const e = Array.from(t.getChild(0).getAttributeKeys()).length;
				return 1 === t.childCount && e < 2
			}
			return t.childCount <= ("insert" == e ? n + 1 : 1)
		}
		n(88);
		class Mb extends Gl {
			static get pluginName() {
				return "TableEditing"
			}
			init() {
				const t = this.editor,
					e = t.model,
					n = e.schema,
					o = t.conversion;
				n.register("table", {
						allowWhere: "$block",
						allowAttributes: ["headingRows", "headingColumns"],
						isLimit: !0,
						isObject: !0,
						isBlock: !0
					}), n.register("tableRow", {
						allowIn: "table",
						isLimit: !0
					}), n.register("tableCell", {
						allowIn: "tableRow",
						allowAttributes: ["colspan", "rowspan"],
						isObject: !0
					}), n.extend("$block", {
						allowIn: "tableCell"
					}), n.addChildCheck((t, e) => {
						if ("table" == e.name && Array.from(t.getNames()).includes("table")) return !1
					}), o.for("upcast").add(pp()), o.for("editingDowncast").add(vp({
						asWidget: !0
					})), o.for("dataDowncast").add(vp()), o.for("upcast").elementToElement({
						model: "tableRow",
						view: "tr"
					}), o.for("upcast").add(t => {
						t.on("element:tr", (t, e) => {
							e.viewItem.isEmpty && 0 == e.modelCursor.index && t.stop()
						}, {
							priority: "high"
						})
					}), o.for("editingDowncast").add(t => t.on("insert:tableRow", (t, e, n) => {
						const o = e.item;
						if (!n.consumable.consume(o, "insert")) return;
						const i = o.parent,
							r = Ip(n.mapper.toViewElement(i)),
							s = i.getChildIndex(o),
							a = new kp(i, {
								row: s
							}),
							c = {
								headingRows: i.getAttribute("headingRows") || 0,
								headingColumns: i.getAttribute("headingColumns") || 0
							},
							l = new Map;
						for (const t of a) {
							const e = l.get(s) || Cp(r, o, s, c, n);
							l.set(s, e), n.consumable.consume(t.cell, "insert"), Ap(t, c, n.writer.createPositionAt(e, "end"), n, {
								asWidget: !0
							})
						}
					})), o.for("editingDowncast").add(t => t.on("remove:tableRow", (t, e, n) => {
						t.stop();
						const o = n.writer,
							i = n.mapper,
							r = i.toViewPosition(e.position).getLastMatchingPosition(t => !t.item.is("tr")).nodeAfter,
							s = r.parent.parent,
							a = o.createRangeOn(r),
							c = o.remove(a);
						for (const t of o.createRangeIn(c).getItems()) i.unbindViewElement(t);
						Ep("thead", s, n), Ep("tbody", s, n)
					}, {
						priority: "higher"
					})), o.for("upcast").add(bp("td")), o.for("upcast").add(bp("th")), o.for("editingDowncast").add(t => t.on(
						"insert:tableCell", (t, e, n) => {
							const o = e.item;
							if (!n.consumable.consume(o, "insert")) return;
							const i = o.parent,
								r = i.parent,
								s = r.getChildIndex(i),
								a = new kp(r, {
									row: s
								}),
								c = {
									headingRows: r.getAttribute("headingRows") || 0,
									headingColumns: r.getAttribute("headingColumns") || 0
								};
							for (const t of a)
								if (t.cell === o) {
									const e = n.mapper.toViewElement(i);
									return void Ap(t, c, n.writer.createPositionAt(e, i.getChildIndex(o)), n, {
										asWidget: !0
									})
								}
						})), o.attributeToAttribute({
						model: "colspan",
						view: "colspan"
					}), o.attributeToAttribute({
						model: "rowspan",
						view: "rowspan"
					}), o.for("editingDowncast").add(t => t.on("attribute:headingColumns:table", (t, e, n) => {
						const o = e.item;
						if (!n.consumable.consume(e.item, t.name)) return;
						const i = {
								headingRows: o.getAttribute("headingRows") || 0,
								headingColumns: o.getAttribute("headingColumns") || 0
							},
							r = e.attributeOldValue,
							s = e.attributeNewValue,
							a = (r > s ? r : s) - 1;
						for (const t of new kp(o, {
								endColumn: a
							})) xp(t, i, n)
					})), o.for("editingDowncast").add(t => t.on("attribute:headingRows:table", (t, e, n) => {
						const o = e.item;
						if (!n.consumable.consume(e.item, t.name)) return;
						const i = Ip(n.mapper.toViewElement(o)),
							r = e.attributeOldValue,
							s = e.attributeNewValue;
						if (s > r) {
							const t = Array.from(o.getChildren()).filter(({
								index: t
							}) => a(t, r - 1, s));
							Mp(t, Sp("thead", i, n), n, "end");
							for (const e of t)
								for (const t of e.getChildren()) yp(t, "th", n)
						} else {
							Mp(Array.from(o.getChildren()).filter(({
								index: t
							}) => a(t, s - 1, r)).reverse(), Sp("tbody", i, n), n, 0);
							const t = new kp(o, {
									startRow: s ? s - 1 : s,
									endRow: r - 1
								}),
								e = {
									headingRows: o.getAttribute("headingRows") || 0,
									headingColumns: o.getAttribute("headingColumns") || 0
								};
							for (const o of t) xp(o, e, n)
						}

						function a(t, e, n) {
							return t > e && t < n
						}
						Ep("thead", i, n), Ep("tbody", i, n)
					})), t.commands.add("insertTable", new Op(t)), t.commands.add("insertTableRowAbove", new Hp(t, {
						order: "above"
					})), t.commands.add("insertTableRowBelow", new Hp(t, {
						order: "below"
					})), t.commands.add("insertTableColumnLeft", new qp(t, {
						order: "left"
					})), t.commands.add("insertTableColumnRight", new qp(t, {
						order: "right"
					})), t.commands.add("removeTableRow", new rb(t)), t.commands.add("removeTableColumn", new sb(t)), t.commands
					.add("splitTableCellVertically", new Wp(t, {
						direction: "vertically"
					})), t.commands.add("splitTableCellHorizontally", new Wp(t, {
						direction: "horizontally"
					})), t.commands.add("mergeTableCells", new fb(t)), t.commands.add("mergeTableCellRight", new ob(t, {
						direction: "right"
					})), t.commands.add("mergeTableCellLeft", new ob(t, {
						direction: "left"
					})), t.commands.add("mergeTableCellDown", new ob(t, {
						direction: "down"
					})), t.commands.add("mergeTableCellUp", new ob(t, {
						direction: "up"
					})), t.commands.add("setTableColumnHeader", new cb(t)), t.commands.add("setTableRowHeader", new ab(t)), t.commands
					.add("selectTableRow", new bb(t)), t.commands.add("selectTableColumn", new wb(t)), kb(e), Pb(e), xb(e)
			}
			static get requires() {
				return [lb]
			}
		}
		n(90);
		class Ib extends dl {
			constructor(t) {
				super(t);
				const e = this.bindTemplate;
				this.set("icon"), this.set("isEnabled", !0), this.set("isOn", !1), this.set("isToggleable", !1), this.set(
						"isVisible", !0), this.set("keystroke"), this.set("label"), this.set("tabindex", -1), this.set("tooltip"),
					this.set("tooltipPosition", "s"), this.set("type", "button"), this.set("withText", !1), this.children = this
					.createCollection(), this.actionView = this._createActionView(), this.arrowView = this._createArrowView(),
					this.keystrokes = new Pc, this.focusTracker = new Lc, this.setTemplate({
						tag: "div",
						attributes: {
							class: ["ck", "ck-splitbutton", e.if("isVisible", "ck-hidden", t => !t), this.arrowView.bindTemplate.if(
								"isOn", "ck-splitbutton_open")]
						},
						children: this.children
					})
			}
			render() {
				super.render(), this.children.add(this.actionView), this.children.add(this.arrowView), this.focusTracker.add(
						this.actionView.element), this.focusTracker.add(this.arrowView.element), this.keystrokes.listenTo(this.element),
					this.keystrokes.set("arrowright", (t, e) => {
						this.focusTracker.focusedElement === this.actionView.element && (this.arrowView.focus(), e())
					}), this.keystrokes.set("arrowleft", (t, e) => {
						this.focusTracker.focusedElement === this.arrowView.element && (this.actionView.focus(), e())
					})
			}
			focus() {
				this.actionView.focus()
			}
			_createActionView() {
				const t = new El;
				return t.bind("icon", "isEnabled", "isOn", "isToggleable", "keystroke", "label", "tabindex", "tooltip",
					"tooltipPosition", "type", "withText").to(this), t.extendTemplate({
					attributes: {
						class: "ck-splitbutton__action"
					}
				}), t.delegate("execute").to(this), t
			}
			_createArrowView() {
				const t = new El,
					e = t.bindTemplate;
				return t.icon = Ml, t.extendTemplate({
					attributes: {
						class: "ck-splitbutton__arrow",
						"aria-haspopup": !0,
						"aria-expanded": e.to("isOn", t => String(t))
					}
				}), t.bind("isEnabled").to(this), t.delegate("execute").to(this, "open"), t
			}
		}
		n(92);
		class Nb extends dl {
			constructor(t) {
				super(t);
				const e = this.bindTemplate;
				this.items = this._createGridCollection(), this.set("rows", 0), this.set("columns", 0), this.bind("label").to(
					this, "columns", this, "rows", (t, e) => `${e} × ${t}`), this.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck"]
					},
					children: [{
						tag: "div",
						attributes: {
							class: ["ck-insert-table-dropdown__grid"]
						},
						on: {
							"mouseover@.ck-insert-table-dropdown-grid-box": e.to("boxover")
						},
						children: this.items
					}, {
						tag: "div",
						attributes: {
							class: ["ck-insert-table-dropdown__label"]
						},
						children: [{
							text: e.to("label")
						}]
					}],
					on: {
						mousedown: e.to(t => {
							t.preventDefault()
						}),
						click: e.to(() => {
							this.fire("execute")
						})
					}
				}), this.on("boxover", (t, e) => {
					const {
						row: n,
						column: o
					} = e.target.dataset;
					this.set({
						rows: parseInt(n),
						columns: parseInt(o)
					})
				}), this.on("change:columns", () => {
					this._highlightGridBoxes()
				}), this.on("change:rows", () => {
					this._highlightGridBoxes()
				})
			}
			focus() {}
			focusLast() {}
			_highlightGridBoxes() {
				const t = this.rows,
					e = this.columns;
				this.items.map((n, o) => {
					const i = Math.floor(o / 10) < t && o % 10 < e;
					n.set("isOn", i)
				})
			}
			_createGridCollection() {
				const t = [];
				for (let e = 0; e < 100; e++) {
					const n = Math.floor(e / 10),
						o = e % 10;
					t.push(new Ob(this.locale, n + 1, o + 1))
				}
				return this.createCollection(t)
			}
		}
		class Ob extends dl {
			constructor(t, e, n) {
				super(t);
				const o = this.bindTemplate;
				this.set("isOn", !1), this.setTemplate({
					tag: "div",
					attributes: {
						class: ["ck-insert-table-dropdown-grid-box", o.if("isOn", "ck-on")],
						"data-row": e,
						"data-column": n
					}
				})
			}
		}
		class Rb extends Gl {
			init() {
				const t = this.editor,
					e = this.editor.t,
					n = "ltr" === t.locale.contentLanguageDirection;
				t.ui.componentFactory.add("insertTable", n => {
					const o = t.commands.get("insertTable"),
						i = jl(n);
					let r;
					return i.bind("isEnabled").to(o), i.buttonView.set({
						icon: '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',
						label: e("Insert table"),
						tooltip: !0
					}), i.on("change:isOpen", () => {
						r || (r = new Nb(n), i.panelView.children.add(r), r.delegate("execute").to(i), i.buttonView.on("open",
							() => {
								r.rows = 0, r.columns = 0
							}), i.on("execute", () => {
							t.execute("insertTable", {
								rows: r.rows,
								columns: r.columns
							}), t.editing.view.focus()
						}))
					}), i
				}), t.ui.componentFactory.add("tableColumn", t => {
					const o = [{
						type: "switchbutton",
						model: {
							commandName: "setTableColumnHeader",
							label: e("Header column"),
							bindIsOn: !0
						}
					}, {
						type: "separator"
					}, {
						type: "button",
						model: {
							commandName: n ? "insertTableColumnLeft" : "insertTableColumnRight",
							label: e("Insert column left")
						}
					}, {
						type: "button",
						model: {
							commandName: n ? "insertTableColumnRight" : "insertTableColumnLeft",
							label: e("Insert column right")
						}
					}, {
						type: "button",
						model: {
							commandName: "removeTableColumn",
							label: e("Delete column")
						}
					}, {
						type: "button",
						model: {
							commandName: "selectTableColumn",
							label: e("Select column")
						}
					}];
					return this._prepareDropdown(e("Column"),
						'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',
						o, t)
				}), t.ui.componentFactory.add("tableRow", t => {
					const n = [{
						type: "switchbutton",
						model: {
							commandName: "setTableRowHeader",
							label: e("Header row"),
							bindIsOn: !0
						}
					}, {
						type: "separator"
					}, {
						type: "button",
						model: {
							commandName: "insertTableRowAbove",
							label: e("Insert row above")
						}
					}, {
						type: "button",
						model: {
							commandName: "insertTableRowBelow",
							label: e("Insert row below")
						}
					}, {
						type: "button",
						model: {
							commandName: "removeTableRow",
							label: e("Delete row")
						}
					}, {
						type: "button",
						model: {
							commandName: "selectTableRow",
							label: e("Select row")
						}
					}];
					return this._prepareDropdown(e("Row"),
						'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',
						n, t)
				}), t.ui.componentFactory.add("mergeTableCells", t => {
					const o = [{
						type: "button",
						model: {
							commandName: "mergeTableCellUp",
							label: e("Merge cell up")
						}
					}, {
						type: "button",
						model: {
							commandName: n ? "mergeTableCellRight" : "mergeTableCellLeft",
							label: e("Merge cell right")
						}
					}, {
						type: "button",
						model: {
							commandName: "mergeTableCellDown",
							label: e("Merge cell down")
						}
					}, {
						type: "button",
						model: {
							commandName: n ? "mergeTableCellLeft" : "mergeTableCellRight",
							label: e("Merge cell left")
						}
					}, {
						type: "separator"
					}, {
						type: "button",
						model: {
							commandName: "splitTableCellVertically",
							label: e("Split cell vertically")
						}
					}, {
						type: "button",
						model: {
							commandName: "splitTableCellHorizontally",
							label: e("Split cell horizontally")
						}
					}];
					return this._prepareMergeSplitButtonDropdown(e("Merge cells"),
						'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',
						o, t)
				})
			}
			_prepareDropdown(t, e, n, o) {
				const i = this.editor,
					r = jl(o),
					s = this._fillDropdownWithListOptions(r, n);
				return r.buttonView.set({
					label: t,
					icon: e,
					tooltip: !0
				}), r.bind("isEnabled").toMany(s, "isEnabled", (...t) => t.some(t => t)), this.listenTo(r, "execute", t => {
					i.execute(t.source.commandName), i.editing.view.focus()
				}), r
			}
			_prepareMergeSplitButtonDropdown(t, e, n, o) {
				const i = this.editor,
					r = jl(o, Ib);
				return this._fillDropdownWithListOptions(r, n), r.buttonView.set({
					label: t,
					icon: e,
					tooltip: !0,
					isEnabled: !0
				}), this.listenTo(r.buttonView, "execute", () => {
					i.execute("mergeTableCells"), i.editing.view.focus()
				}), this.listenTo(r, "execute", t => {
					i.execute(t.source.commandName), i.editing.view.focus()
				}), r
			}
			_fillDropdownWithListOptions(t, e) {
				const n = this.editor,
					o = [],
					i = new An;
				for (const t of e) Db(t, n, o, i);
				return zl(t, i, n.ui.componentFactory), o
			}
		}

		function Db(t, e, n, o) {
			const i = t.model = new ku(t.model),
				{
					commandName: r,
					bindIsOn: s
				} = t.model;
			if ("button" === t.type || "switchbutton" === t.type) {
				const t = e.commands.get(r);
				n.push(t), i.set({
					commandName: r
				}), i.bind("isEnabled").to(t), s && i.bind("isOn").to(t, "value")
			}
			i.set({
				withText: !0
			}), o.add(t)
		}
		n(94);
		class Lb extends Gl {
			static get pluginName() {
				return "TableSelection"
			}
			static get requires() {
				return [lb]
			}
			init() {
				const t = this.editor.model;
				this.listenTo(t, "deleteContent", (t, e) => this._handleDeleteContent(t, e), {
					priority: "high"
				}), this._defineSelectionConverter(), this._enablePluginDisabling()
			}
			getSelectedTableCells() {
				const t = Rp(this.editor.model.document.selection);
				return 0 == t.length ? null : t
			}
			getSelectionAsFragment() {
				const t = this.getSelectedTableCells();
				return t ? this.editor.model.change(e => {
					const n = e.createDocumentFragment(),
						o = this.editor.plugins.get("TableUtils"),
						{
							first: i,
							last: r
						} = Vp(t),
						{
							first: s,
							last: a
						} = jp(t),
						c = hp("table", t[0]);
					let l = a,
						d = r;
					if (zp(t, o)) {
						const t = {
							firstColumn: i,
							lastColumn: r,
							firstRow: s,
							lastRow: a
						};
						l = eb(c, t), d = nb(c, t)
					}
					const u = Gp(c, {
						startRow: s,
						startColumn: i,
						endRow: l,
						endColumn: d
					}, e);
					return e.insert(u, n, 0), n
				}) : null
			}
			setCellSelection(t, e) {
				const n = this._getCellsToSelect(t, e);
				this.editor.model.change(t => {
					t.setSelection(n.cells.map(e => t.createRangeOn(e)), {
						backward: n.backward
					})
				})
			}
			getFocusCell() {
				const t = [...this.editor.model.document.selection.getRanges()].pop().getContainedElement();
				return t && t.is("tableCell") ? t : null
			}
			getAnchorCell() {
				const t = Kd(this.editor.model.document.selection.getRanges()).getContainedElement();
				return t && t.is("tableCell") ? t : null
			}
			_defineSelectionConverter() {
				const t = this.editor,
					e = new Set;
				t.conversion.for("editingDowncast").add(t => t.on("selection", (t, n, o) => {
					const i = o.writer;
					! function(t) {
						for (const n of e) t.removeClass("ck-editor__editable_selected", n);
						e.clear()
					}(i);
					const r = this.getSelectedTableCells();
					if (!r) return;
					for (const t of r) {
						const n = o.mapper.toViewElement(t);
						i.addClass("ck-editor__editable_selected", n), e.add(n)
					}
					const s = o.mapper.toViewElement(r[r.length - 1]);
					i.setSelection(s, 0)
				}, {
					priority: "lowest"
				}))
			}
			_enablePluginDisabling() {
				const t = this.editor;
				this.on("change:isEnabled", () => {
					if (!this.isEnabled) {
						const e = this.getSelectedTableCells();
						if (!e) return;
						t.model.change(n => {
							const o = n.createPositionAt(e[0], 0),
								i = t.model.schema.getNearestSelectionRange(o);
							n.setSelection(i)
						})
					}
				})
			}
			_handleDeleteContent(t, e) {
				const [n, o] = e, i = this.editor.model, r = !o || "backward" == o.direction, s = Rp(n);
				s.length && (t.stop(), i.change(t => {
					const e = s[r ? s.length - 1 : 0];
					i.change(t => {
						for (const e of s) i.deleteContent(t.createSelection(e, "in"))
					});
					const o = i.schema.getNearestSelectionRange(t.createPositionAt(e, 0));
					n.is("documentSelection") ? t.setSelection(o) : n.setTo(o)
				}))
			}
			_getCellsToSelect(t, e) {
				const n = this.editor.plugins.get("TableUtils"),
					o = n.getCellLocation(t),
					i = n.getCellLocation(e),
					r = Math.min(o.row, i.row),
					s = Math.max(o.row, i.row),
					a = Math.min(o.column, i.column),
					c = Math.max(o.column, i.column),
					l = new Array(s - r + 1).fill(null).map(() => []),
					d = {
						startRow: r,
						endRow: s,
						startColumn: a,
						endColumn: c
					};
				for (const {
						row: e,
						cell: n
					} of new kp(hp("table", t), d)) l[e - r].push(n);
				const u = i.row < o.row,
					h = i.column < o.column;
				return u && l.reverse(), h && l.forEach(t => t.reverse()), {
					cells: l.flat(),
					backward: u || h
				}
			}
		}
		class jb extends Gl {
			static get pluginName() {
				return "TableClipboard"
			}
			static get requires() {
				return [Lb, lb]
			}
			init() {
				const t = this.editor,
					e = t.editing.view.document;
				this.listenTo(e, "copy", (t, e) => this._onCopyCut(t, e)), this.listenTo(e, "cut", (t, e) => this._onCopyCut(
					t, e)), this.listenTo(t.model, "insertContent", (t, e) => this._onInsertContent(t, ...e), {
					priority: "high"
				})
			}
			_onCopyCut(t, e) {
				const n = this.editor.plugins.get(Lb);
				if (!n.getSelectedTableCells()) return;
				if ("cut" == t.name && this.editor.isReadOnly) return;
				e.preventDefault(), t.stop();
				const o = this.editor.data,
					i = this.editor.editing.view.document,
					r = o.toView(n.getSelectionAsFragment());
				i.fire("clipboardOutput", {
					dataTransfer: e.dataTransfer,
					content: r,
					method: t.name
				})
			}
			_onInsertContent(t, e, n) {
				if (n && !n.is("documentSelection")) return;
				const o = this.editor.model,
					i = this.editor.plugins.get(lb);
				let r = function(t, e) {
					if (!t.is("documentFragment") && !t.is("element")) return null;
					if (t.is("table")) return t;
					if (1 == t.childCount && t.getChild(0).is("table")) return t.getChild(0);
					const n = e.createRangeIn(t);
					for (const t of n.getItems())
						if (t.is("table")) {
							const o = e.createRange(n.start, e.createPositionBefore(t));
							if (e.hasContent(o, {
									ignoreWhitespaces: !0
								})) return null;
							const i = e.createRange(e.createPositionAfter(t), n.end);
							return e.hasContent(i, {
								ignoreWhitespaces: !0
							}) ? null : t
						} return null
				}(e, o);
				if (!r) return;
				const s = Lp(o.document.selection);
				s.length ? (t.stop(), o.change(t => {
					const e = {
							width: i.getColumns(r),
							height: i.getRows(r)
						},
						n = function(t, e, n, o) {
							const i = hp("table", t[0]),
								r = Vp(t),
								s = jp(t),
								a = {
									firstColumn: r.first,
									lastColumn: r.last,
									firstRow: s.first,
									lastRow: s.last
								},
								c = 1 === t.length;
							c && (a.lastRow += e.height - 1, a.lastColumn += e.width - 1, function(t, e, n, o, i) {
								const r = i.getColumns(t),
									s = i.getRows(t);
								n > r && i.insertColumns(t, {
									batch: o.batch,
									at: r,
									columns: n - r
								});
								e > s && i.insertRows(t, {
									batch: o.batch,
									at: s,
									rows: e - s
								})
							}(i, a.lastRow + 1, a.lastColumn + 1, n, o));
							c || !zp(t, o) ? function(t, e, n) {
								const {
									firstRow: o,
									lastRow: i,
									firstColumn: r,
									lastColumn: s
								} = e, a = {
									first: o,
									last: i
								}, c = {
									first: r,
									last: s
								};
								zb(t, r, a, n), zb(t, s + 1, a, n), Vb(t, o, c, n), Vb(t, i + 1, c, n, o)
							}(i, a, n) : (a.lastRow = eb(i, a), a.lastColumn = nb(i, a));
							return a
						}(s, e, t, i),
						o = n.lastRow - n.firstRow + 1,
						a = n.lastColumn - n.firstColumn + 1,
						c = {
							startRow: 0,
							startColumn: 0,
							endRow: Math.min(o, e.height) - 1,
							endColumn: Math.min(a, e.width) - 1
						};
					r = Gp(r, c, t);
					const l = hp("table", s[0]);
					! function(t, e, n, o, i) {
						const {
							width: r,
							height: s
						} = e, a = function(t, e, n) {
							const o = new Array(n).fill(null).map(() => new Array(e).fill(null));
							for (const {
									column: e,
									row: n,
									cell: i
								} of new kp(t)) o[n][e] = i;
							return o
						}(t, r, s), c = [...new kp(n, {
							startRow: o.firstRow,
							endRow: o.lastRow,
							startColumn: o.firstColumn,
							endColumn: o.lastColumn,
							includeAllSlots: !0
						})], l = [];
						let d;
						for (const t of c) {
							const {
								row: e,
								column: n,
								cell: c,
								isAnchor: u
							} = t;
							n === o.firstColumn && (d = t.getPositionBefore()), u && i.remove(c);
							const h = e - o.firstRow,
								f = n - o.firstColumn,
								g = a[h % s][f % r];
							if (!g) continue;
							const m = i.cloneElement(g);
							Jp(m, e, n, o.lastRow, o.lastColumn, i), i.insert(m, d), l.push(m), d = i.createPositionAfter(m)
						}
						i.setSelection(l.map(t => i.createRangeOn(t)))
					}(r, e, l, n, t)
				})) : tb(r, i)
			}
		}

		function Vb(t, e, n, o, i = 0) {
			if (e < 1) return;
			const r = Yp(t, e, i).filter(({
				column: t,
				cellWidth: e
			}) => Bb(t, e, n));
			for (const {
					cell: t
				} of r) $p(t, e, o)
		}

		function zb(t, e, n, o) {
			if (e < 1) return;
			const i = Kp(t, e).filter(({
				row: t,
				cellHeight: e
			}) => Bb(t, e, n));
			for (const {
					cell: t,
					column: n
				} of i) Qp(t, n, e, o)
		}

		function Bb(t, e, n) {
			const o = t + e - 1,
				{
					first: i,
					last: r
				} = n;
			return t >= i && t <= r || t < i && o >= i
		}
		class Fb extends Gl {
			static get pluginName() {
				return "TableKeyboard"
			}
			static get requires() {
				return [Lb]
			}
			init() {
				const t = this.editor.editing.view.document;
				this.editor.keystrokes.set("Tab", (...t) => this._handleTabOnSelectedTable(...t), {
					priority: "low"
				}), this.editor.keystrokes.set("Tab", this._getTabHandler(!0), {
					priority: "low"
				}), this.editor.keystrokes.set("Shift+Tab", this._getTabHandler(!1), {
					priority: "low"
				}), this.listenTo(t, "keydown", (...t) => this._onKeydown(...t), {
					priority: un.get("high") - 10
				})
			}
			_handleTabOnSelectedTable(t, e) {
				const n = this.editor,
					o = n.model.document.selection;
				if (!o.isCollapsed && 1 === o.rangeCount && o.getFirstRange().isFlat) {
					const t = o.getSelectedElement();
					if (!t || !t.is("table")) return;
					e(), n.model.change(e => {
						e.setSelection(e.createRangeIn(t.getChild(0).getChild(0)))
					})
				}
			}
			_getTabHandler(t) {
				const e = this.editor;
				return (n, o) => {
					const i = Dp(e.model.document.selection)[0];
					if (!i) return;
					o();
					const r = i.parent,
						s = r.parent,
						a = s.getChildIndex(r),
						c = r.getChildIndex(i),
						l = 0 === c;
					if (!t && l && 0 === a) return;
					const d = c === r.childCount - 1,
						u = a === s.childCount - 1;
					if (t && u && d && (e.execute("insertTableRowBelow"), a === s.childCount - 1)) return;
					let h;
					if (t && d) {
						const t = s.getChild(a + 1);
						h = t.getChild(0)
					} else if (!t && l) {
						const t = s.getChild(a - 1);
						h = t.getChild(t.childCount - 1)
					} else h = r.getChild(c + (t ? 1 : -1));
					e.model.change(t => {
						t.setSelection(t.createRangeIn(h))
					})
				}
			}
			_onKeydown(t, e) {
				const n = this.editor,
					o = e.keyCode;
				if (!ki(o)) return;
				const i = _i(o, n.locale.contentLanguageDirection);
				this._handleArrowKeys(i, e.shiftKey) && (e.preventDefault(), e.stopPropagation(), t.stop())
			}
			_handleArrowKeys(t, e) {
				const n = this.editor.model,
					o = n.document.selection,
					i = ["right", "down"].includes(t),
					r = Rp(o);
				if (r.length) {
					let n;
					return n = e ? this.editor.plugins.get("TableSelection").getFocusCell() : i ? r[r.length - 1] : r[0], this._navigateFromCellInDirection(
						n, t, e), !0
				}
				const s = hp("tableCell", o.focus);
				if (!s) return !1;
				const a = n.createRangeIn(s);
				if (this._isSelectionAtCellEdge(o, i)) return this._navigateFromCellInDirection(s, t, e), !0;
				const c = this._findTextRangeFromSelection(a, o, i);
				return c ? !["left", "right"].includes(t) && (this._isSingleLineRange(c, i) ? (n.change(t => {
					const r = i ? a.end : a.start;
					if (e) {
						const e = n.createSelection(o.anchor);
						e.setFocus(r), t.setSelection(e)
					} else t.setSelection(r)
				}), !0) : void 0) : (this._navigateFromCellInDirection(s, t, e), !0)
			}
			_isSelectionAtCellEdge(t, e) {
				const n = this.editor.model,
					o = this.editor.model.schema,
					i = e ? t.getLastPosition() : t.getFirstPosition();
				if (!o.getLimitElement(i).is("tableCell")) return !1;
				const r = n.createSelection(i);
				return n.modifySelection(r, {
					direction: e ? "forward" : "backward"
				}), i.isEqual(r.focus)
			}
			_findTextRangeFromSelection(t, e, n) {
				const o = this.editor.model;
				if (n) {
					const n = e.getLastPosition(),
						i = this._getNearestVisibleTextPosition(t, "backward");
					return i && n.isBefore(i) ? o.createRange(n, i) : null
				} {
					const n = e.getFirstPosition(),
						i = this._getNearestVisibleTextPosition(t, "forward");
					return i && n.isAfter(i) ? o.createRange(i, n) : null
				}
			}
			_getNearestVisibleTextPosition(t, e) {
				const n = this.editor.model.schema,
					o = this.editor.editing.mapper;
				for (const {
						nextPosition: i,
						item: r
					} of t.getWalker({
						direction: e
					}))
					if (n.checkChild(i, "$text")) {
						const t = o.toViewElement(r);
						if (t && !t.hasClass("ck-hidden")) return i
					}
			}
			_isSingleLineRange(t, e) {
				const n = this.editor.model,
					o = this.editor.editing,
					i = o.view.domConverter;
				if (e) {
					const e = n.createSelection(t.start);
					n.modifySelection(e), e.focus.isAtEnd || t.start.isEqual(e.focus) || (t = n.createRange(e.focus, t.end))
				}
				const r = o.mapper.toViewRange(t),
					s = i.viewRangeToDom(r),
					a = es.getDomRangeRects(s);
				let c;
				for (const t of a)
					if (void 0 !== c) {
						if (Math.round(t.top) >= c) return !1;
						c = Math.max(c, Math.round(t.bottom))
					} else c = Math.round(t.bottom);
				return !0
			}
			_navigateFromCellInDirection(t, e, n = !1) {
				const o = this.editor.model,
					i = hp("table", t),
					r = [...new kp(i, {
						includeAllSlots: !0
					})],
					{
						row: s,
						column: a
					} = r[r.length - 1],
					c = r.find(({
						cell: e
					}) => e == t);
				let {
					row: l,
					column: d
				} = c;
				switch (e) {
					case "left":
						d--;
						break;
					case "up":
						l--;
						break;
					case "right":
						d += c.cellWidth;
						break;
					case "down":
						l += c.cellHeight
				}
				if (l < 0 || l > s || d < 0 && l <= 0 || d > a && l >= s) return void o.change(t => {
					t.setSelection(t.createRangeOn(i))
				});
				d < 0 ? (d = n ? 0 : a, l--) : d > a && (d = n ? a : 0, l++);
				const u = r.find(t => t.row == l && t.column == d).cell,
					h = ["right", "down"].includes(e),
					f = this.editor.plugins.get("TableSelection");
				if (n && f.isEnabled) {
					const e = f.getAnchorCell() || t;
					f.setCellSelection(e, u)
				} else {
					const t = o.createPositionAt(u, h ? 0 : "end");
					o.change(e => {
						e.setSelection(t)
					})
				}
			}
		}
		class Ub extends Dr {
			constructor(t) {
				super(t), this.domEventType = ["mousemove", "mouseup", "mouseleave"]
			}
			onDomEvent(t) {
				this.fire(t.type, t)
			}
		}
		class Hb extends Gl {
			static get pluginName() {
				return "TableMouse"
			}
			static get requires() {
				return [Lb]
			}
			init() {
				this.editor.editing.view.addObserver(Ub), this._enableShiftClickSelection(), this._enableMouseDragSelection()
			}
			_enableShiftClickSelection() {
				const t = this.editor;
				let e = !1;
				const n = t.plugins.get(Lb);
				this.listenTo(t.editing.view.document, "mousedown", (o, i) => {
					if (!this.isEnabled || !n.isEnabled) return;
					if (!i.domEvent.shiftKey) return;
					const r = n.getAnchorCell() || Dp(t.model.document.selection)[0];
					if (!r) return;
					const s = this._getModelTableCellFromDomEvent(i);
					s && qb(r, s) && (e = !0, n.setCellSelection(r, s), i.preventDefault())
				}), this.listenTo(t.editing.view.document, "mouseup", () => {
					e = !1
				}), this.listenTo(t.editing.view.document, "selectionChange", t => {
					e && t.stop()
				}, {
					priority: "highest"
				})
			}
			_enableMouseDragSelection() {
				const t = this.editor;
				let e, n, o = !1,
					i = !1;
				const r = t.plugins.get(Lb);
				this.listenTo(t.editing.view.document, "mousedown", (t, n) => {
					this.isEnabled && r.isEnabled && (n.domEvent.shiftKey || n.domEvent.ctrlKey || n.domEvent.altKey || (e =
						this._getModelTableCellFromDomEvent(n)))
				}), this.listenTo(t.editing.view.document, "mousemove", (t, s) => {
					if (!s.domEvent.buttons) return;
					if (!e) return;
					const a = this._getModelTableCellFromDomEvent(s);
					a && qb(e, a) && (n = a, o || n == e || (o = !0)), o && (i = !0, r.setCellSelection(e, n), s.preventDefault())
				}), this.listenTo(t.editing.view.document, "mouseup", () => {
					o = !1, i = !1, e = null, n = null
				}), this.listenTo(t.editing.view.document, "selectionChange", t => {
					i && t.stop()
				}, {
					priority: "highest"
				})
			}
			_getModelTableCellFromDomEvent(t) {
				const e = t.target,
					n = this.editor.editing.view.createPositionAt(e, 0),
					o = this.editor.editing.mapper.toModelPosition(n).parent;
				return o.is("tableCell") ? o : hp("tableCell", o)
			}
		}

		function qb(t, e) {
			return t.parent.parent == e.parent.parent
		}
		n(96);

		function Wb(t) {
			const e = t.getSelectedElement();
			return e && Yb(e) ? e : null
		}

		function Gb(t) {
			const e = hp("table", t.getFirstPosition());
			return e && Yb(e.parent) ? e.parent : null
		}

		function Yb(t) {
			return !!t.getCustomProperty("table") && xh(t)
		}
		class $b {
			constructor(t, e) {
				this.model = t, this.testCallback = e, this.hasMatch = !1, this.set("isEnabled", !0), this.on(
					"change:isEnabled", () => {
						this.isEnabled ? this._startListening() : (this.stopListening(t.document.selection), this.stopListening(t.document))
					}), this._startListening()
			}
			_startListening() {
				const t = this.model.document;
				this.listenTo(t.selection, "change:range", (e, {
					directChange: n
				}) => {
					n && (t.selection.isCollapsed ? this._evaluateTextBeforeSelection("selection") : this.hasMatch && (this.fire(
						"unmatched"), this.hasMatch = !1))
				}), this.listenTo(t, "change:data", (t, e) => {
					"transparent" != e.type && this._evaluateTextBeforeSelection("data", {
						batch: e
					})
				})
			}
			_evaluateTextBeforeSelection(t, e = {}) {
				const n = this.model,
					o = n.document.selection,
					i = n.createRange(n.createPositionAt(o.focus.parent, 0), o.focus),
					{
						text: r,
						range: s
					} = function(t, e) {
						let n = t.start;
						return {
							text: Array.from(t.getItems()).reduce((t, o) => o.is("text") || o.is("textProxy") ? t + o.data : (n = e.createPositionAfter(
								o), ""), ""),
							range: e.createRange(n, t.end)
						}
					}(i, n),
					a = this.testCallback(r);
				if (!a && this.hasMatch && this.fire("unmatched"), this.hasMatch = !!a, a) {
					const n = Object.assign(e, {
						text: r,
						range: s
					});
					"object" == typeof a && Object.assign(n, a), this.fire("matched:" + t, n)
				}
			}
		}
		xn($b, Ho);
		var Kb = /[\\^$.*+?()[\]{}|]/g,
			Qb = RegExp(Kb.source);
		var Jb = function(t) {
			return (t = Zn(t)) && Qb.test(t) ? t.replace(Kb, "\\$&") : t
		};
		const Zb = {
				copyright: {
					from: "(c)",
					to: "©"
				},
				registeredTrademark: {
					from: "(r)",
					to: "®"
				},
				trademark: {
					from: "(tm)",
					to: "™"
				},
				oneHalf: {
					from: "1/2",
					to: "½"
				},
				oneThird: {
					from: "1/3",
					to: "⅓"
				},
				twoThirds: {
					from: "2/3",
					to: "⅔"
				},
				oneForth: {
					from: "1/4",
					to: "¼"
				},
				threeQuarters: {
					from: "3/4",
					to: "¾"
				},
				lessThanOrEqual: {
					from: "<=",
					to: "≤"
				},
				greaterThanOrEqual: {
					from: ">=",
					to: "≥"
				},
				notEqual: {
					from: "!=",
					to: "≠"
				},
				arrowLeft: {
					from: "<-",
					to: "←"
				},
				arrowRight: {
					from: "->",
					to: "→"
				},
				horizontalEllipsis: {
					from: "...",
					to: "…"
				},
				enDash: {
					from: /(^| )(--)( )$/,
					to: [null, "–", null]
				},
				emDash: {
					from: /(^| )(---)( )$/,
					to: [null, "—", null]
				},
				quotesPrimary: {
					from: iw('"'),
					to: [null, "“", null, "”"]
				},
				quotesSecondary: {
					from: iw("'"),
					to: [null, "‘", null, "’"]
				},
				quotesPrimaryEnGb: {
					from: iw("'"),
					to: [null, "‘", null, "’"]
				},
				quotesSecondaryEnGb: {
					from: iw('"'),
					to: [null, "“", null, "”"]
				},
				quotesPrimaryPl: {
					from: iw('"'),
					to: [null, "„", null, "”"]
				},
				quotesSecondaryPl: {
					from: iw("'"),
					to: [null, "‚", null, "’"]
				}
			},
			Xb = {
				symbols: ["copyright", "registeredTrademark", "trademark"],
				mathematical: ["oneHalf", "oneThird", "twoThirds", "oneForth", "threeQuarters", "lessThanOrEqual",
					"greaterThanOrEqual", "notEqual", "arrowLeft", "arrowRight"
				],
				typography: ["horizontalEllipsis", "enDash", "emDash"],
				quotes: ["quotesPrimary", "quotesSecondary"]
			},
			tw = ["symbols", "mathematical", "typography", "quotes"];

		function ew(t) {
			return "string" == typeof t ? new RegExp(`(${Jb(t)})$`) : t
		}

		function nw(t) {
			return "string" == typeof t ? () => [t] : t instanceof Array ? () => t : t
		}

		function ow(t) {
			return (t.textNode ? t.textNode : t.nodeAfter).getAttributes()
		}

		function iw(t) {
			return new RegExp(`(^|\\s)(${t})([^${t}]*)(${t})$`)
		}
		class rw extends Wl {}
		rw.builtinPlugins = [class extends Gl {
			static get requires() {
				return [Jl, id, gd, cd, Pd, $d]
			}
			static get pluginName() {
				return "Essentials"
			}
		}, class extends Gl {
			static get requires() {
				return [tu, iu]
			}
			static get pluginName() {
				return "Alignment"
			}
		}, class extends Gl {
			static get requires() {
				return [wu, _u]
			}
			static get pluginName() {
				return "FontSize"
			}
		}, class extends Gl {
			static get requires() {
				return [Cu, Tu]
			}
			static get pluginName() {
				return "FontFamily"
			}
		}, class extends Gl {
			static get requires() {
				return [Pu, Iu]
			}
			static get pluginName() {
				return "FontColor"
			}
		}, class extends Gl {
			static get requires() {
				return [Ou, Ru]
			}
			static get pluginName() {
				return "FontBackgroundColor"
			}
		}, Fu, class extends Gl {
			static get pluginName() {
				return "Autoformat"
			}
			afterInit() {
				this._addListAutoformats(), this._addBasicStylesAutoformats(), this._addHeadingAutoformats(), this._addBlockQuoteAutoformats(),
					this._addCodeBlockAutoformats()
			}
			_addListAutoformats() {
				const t = this.editor.commands;
				t.get("bulletedList") && Hu(this.editor, this, /^[*-]\s$/, "bulletedList"), t.get("numberedList") && Hu(
					this.editor, this, /^1[.|)]\s$/, "numberedList")
			}
			_addBasicStylesAutoformats() {
				const t = this.editor.commands;
				if (t.get("bold")) {
					const t = Gu(this.editor, "bold");
					qu(this.editor, this, /(\*\*)([^*]+)(\*\*)$/g, t), qu(this.editor, this, /(__)([^_]+)(__)$/g, t)
				}
				if (t.get("italic")) {
					const t = Gu(this.editor, "italic");
					qu(this.editor, this, /(?:^|[^*])(\*)([^*_]+)(\*)$/g, t), qu(this.editor, this,
						/(?:^|[^_])(_)([^_]+)(_)$/g, t)
				}
				if (t.get("code")) {
					const t = Gu(this.editor, "code");
					qu(this.editor, this, /(`)([^`]+)(`)$/g, t)
				}
				if (t.get("strikethrough")) {
					const t = Gu(this.editor, "strikethrough");
					qu(this.editor, this, /(~~)([^~]+)(~~)$/g, t)
				}
			}
			_addHeadingAutoformats() {
				const t = this.editor.commands.get("heading");
				t && t.modelElements.filter(t => t.match(/^heading[1-6]$/)).forEach(e => {
					const n = e[7],
						o = new RegExp(`^(#{${n}})\\s$`);
					Hu(this.editor, this, o, () => {
						if (!t.isEnabled) return !1;
						this.editor.execute("heading", {
							value: e
						})
					})
				})
			}
			_addBlockQuoteAutoformats() {
				this.editor.commands.get("blockQuote") && Hu(this.editor, this, /^>\s$/, "blockQuote")
			}
			_addCodeBlockAutoformats() {
				this.editor.commands.get("codeBlock") && Hu(this.editor, this, /^```$/, "codeBlock")
			}
		}, class extends Gl {
			static get requires() {
				return [$u, Ku]
			}
			static get pluginName() {
				return "Bold"
			}
		}, class extends Gl {
			static get requires() {
				return [Qu, Ju]
			}
			static get pluginName() {
				return "Italic"
			}
		}, class extends Gl {
			static get requires() {
				return [Zu, Xu]
			}
			static get pluginName() {
				return "Strikethrough"
			}
		}, class extends Gl {
			static get requires() {
				return [th, eh]
			}
			static get pluginName() {
				return "Underline"
			}
		}, class extends Gl {
			static get requires() {
				return [sh, ah]
			}
			static get pluginName() {
				return "BlockQuote"
			}
		}, class extends Gl {
			static get pluginName() {
				return "CKFinder"
			}
			static get requires() {
				return [Tf, ch, Fu]
			}
		}, class extends Gl {
			static get requires() {
				return [Of, ng, wg]
			}
			static get pluginName() {
				return "EasyImage"
			}
		}, class extends Gl {
			static get requires() {
				return [Sg, Pg]
			}
			static get pluginName() {
				return "Heading"
			}
		}, ng, class extends Gl {
			static get requires() {
				return [Ig]
			}
			static get pluginName() {
				return "ImageCaption"
			}
		}, class extends Gl {
			static get requires() {
				return [Gg, Yg]
			}
			static get pluginName() {
				return "ImageStyle"
			}
		}, class extends Gl {
			static get requires() {
				return [$g]
			}
			static get pluginName() {
				return "ImageToolbar"
			}
			afterInit() {
				const t = this.editor,
					e = t.t;
				t.plugins.get($g).register("image", {
					ariaLabel: e("Image toolbar"),
					items: t.config.get("image.toolbar") || [],
					getRelatedElement: Ih
				})
			}
		}, wg, class extends Gl {
			static get pluginName() {
				return "Indent"
			}
			static get requires() {
				return [Zg, em]
			}
		}, class extends Gl {
			constructor(t) {
				super(t), t.config.define("indentBlock", {
					offset: 40,
					unit: "px"
				})
			}
			static get pluginName() {
				return "IndentBlock"
			}
			init() {
				const t = this.editor,
					e = t.config.get("indentBlock"),
					n = !e.classes || !e.classes.length,
					o = Object.assign({
						direction: "forward"
					}, e),
					i = Object.assign({
						direction: "backward"
					}, e);
				n ? (t.data.addStyleProcessorRules(am), this._setupConversionUsingOffset(t.conversion), t.commands.add(
					"indentBlock", new nm(t, new om(o))), t.commands.add("outdentBlock", new nm(t, new om(i)))) : (this._setupConversionUsingClasses(
					e.classes), t.commands.add("indentBlock", new nm(t, new im(o))), t.commands.add("outdentBlock", new nm(t,
					new im(i))))
			}
			afterInit() {
				const t = this.editor,
					e = t.model.schema,
					n = t.commands.get("indent"),
					o = t.commands.get("outdent");
				["paragraph", "heading1", "heading2", "heading3", "heading4", "heading5", "heading6"].forEach(t => {
					e.isRegistered(t) && e.extend(t, {
						allowAttributes: "blockIndent"
					})
				}), n.registerChildCommand(t.commands.get("indentBlock")), o.registerChildCommand(t.commands.get(
					"outdentBlock"))
			}
			_setupConversionUsingOffset() {
				const t = this.editor.conversion,
					e = "rtl" === this.editor.locale.contentLanguageDirection ? "margin-right" : "margin-left";
				t.for("upcast").attributeToAttribute({
					view: {
						styles: {
							[e]: /[\s\S]+/
						}
					},
					model: {
						key: "blockIndent",
						value: t => t.getStyle(e)
					}
				}), t.for("downcast").attributeToAttribute({
					model: "blockIndent",
					view: t => ({
						key: "style",
						value: {
							[e]: t
						}
					})
				})
			}
			_setupConversionUsingClasses(t) {
				const e = {
					model: {
						key: "blockIndent",
						values: []
					},
					view: {}
				};
				for (const n of t) e.model.values.push(n), e.view[n] = {
					key: "class",
					value: [n]
				};
				this.editor.conversion.attributeToAttribute(e)
			}
		}, class extends Gl {
			static get requires() {
				return [yf, fm]
			}
			static get pluginName() {
				return "Link"
			}
		}, class extends Gl {
			static get requires() {
				return [zm, Fm]
			}
			static get pluginName() {
				return "List"
			}
		}, class extends Gl {
			static get requires() {
				return [Qm, tp, Zm, Vf]
			}
			static get pluginName() {
				return "MediaEmbed"
			}
		}, yg, class extends Gl {
			static get pluginName() {
				return "PasteFromOffice"
			}
			static get requires() {
				return [Jl]
			}
			init() {
				const t = this.editor,
					e = t.editing.view.document,
					n = [];
				n.push(new up(e)), n.push(new rp(e)), t.plugins.get("Clipboard").on("inputTransformation", (t, e) => {
					if (e.isTransformedWithPasteFromOffice) return;
					const o = e.dataTransfer.getData("text/html"),
						i = n.find(t => t.isActive(o));
					i && (i.execute(e), e.isTransformedWithPasteFromOffice = !0)
				}, {
					priority: "high"
				})
			}
		}, class extends Gl {
			static get requires() {
				return [Mb, Rb, Lb, Hb, Fb, jb, Vf]
			}
			static get pluginName() {
				return "Table"
			}
		}, class extends Gl {
			static get requires() {
				return [$g]
			}
			static get pluginName() {
				return "TableToolbar"
			}
			afterInit() {
				const t = this.editor,
					e = t.t,
					n = t.plugins.get($g),
					o = t.config.get("table.contentToolbar"),
					i = t.config.get("table.tableToolbar");
				o && n.register("tableContent", {
					ariaLabel: e("Table toolbar"),
					items: o,
					getRelatedElement: Gb
				}), i && n.register("table", {
					ariaLabel: e("Table toolbar"),
					items: i,
					getRelatedElement: Wb
				})
			}
		}, class extends Gl {
			static get pluginName() {
				return "TextTransformation"
			}
			constructor(t) {
				super(t), t.config.define("typing", {
					transformations: {
						include: tw
					}
				})
			}
			init() {
				const t = this.editor.model.document.selection;
				t.on("change:range", () => {
					this.isEnabled = !t.anchor.parent.is("codeBlock")
				}), this._enableTransformationWatchers()
			}
			_enableTransformationWatchers() {
				const t = this.editor,
					e = t.model,
					n = t.plugins.get("Input"),
					o = function(t) {
						const e = t.extra || [],
							n = t.remove || [],
							o = t => !n.includes(t);
						return function(t) {
							const e = new Set;
							for (const n of t)
								if (Xb[n])
									for (const t of Xb[n]) e.add(t);
								else e.add(n);
							return Array.from(e)
						}(t.include.concat(e).filter(o)).filter(o).map(t => Zb[t] || t).map(t => ({
							from: ew(t.from),
							to: nw(t.to)
						}))
					}(t.config.get("typing.transformations")),
					i = new $b(t.model, t => {
						for (const e of o) {
							if (e.from.test(t)) return {
								normalizedTransformation: e
							}
						}
					});
				i.on("matched:data", (t, o) => {
					if (!n.isInput(o.batch)) return;
					const {
						from: i,
						to: r
					} = o.normalizedTransformation, s = i.exec(o.text), a = r(s.slice(1)), c = o.range;
					let l = s.index;
					e.enqueueChange(t => {
						for (let n = 1; n < s.length; n++) {
							const o = s[n],
								i = a[n - 1];
							if (null == i) {
								l += o.length;
								continue
							}
							const r = c.start.getShiftedBy(l),
								d = e.createRange(r, r.getShiftedBy(o.length)),
								u = ow(r);
							e.insertContent(t.createText(i, u), d), l += i.length
						}
					})
				}), i.bind("isEnabled").to(this)
			}
		}], rw.defaultConfig = {
			toolbar: {
				items: ["heading", "|", "fontfamily", "fontsize", "fontColor", "fontBackgroundColor", "|", "bold", "italic",
					"underline", "strikethrough", "|", "alignment", "|", "numberedList", "bulletedList", "|", "indent",
					"outdent", "|", "link", "blockquote", "imageUpload", "insertTable", "mediaEmbed", "|", "undo", "redo"
				]
			},
			image: {
				styles: ["full", "alignLeft", "alignRight"],
				toolbar: ["imageStyle:alignLeft", "imageStyle:full", "imageStyle:alignRight", "|", "imageTextAlternative"]
			},
			table: {
				contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
			},
			language: "en"
		}
	}]).default
}));
//# sourceMappingURL=ckeditor.js.map
