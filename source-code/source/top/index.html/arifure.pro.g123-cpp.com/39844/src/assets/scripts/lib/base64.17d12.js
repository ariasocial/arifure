(function(root) {
    var exports = undefined
      , module = undefined
      , require = undefined;
    var define = undefined;
    (function() {
        (function() {
            function Base64() {
                // private property
                this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            }
            Base64.prototype.encode = function(input) {
                //ToDo
                var output = "";
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                var i = 0;
                input = this._utf8_encode(input);
                while (i < input.length) {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);
                    enc1 = chr1 >> 2;
                    enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                    enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }
                    output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
                }
                return output;
            }
            ;
            // public method for decoding
            Base64.prototype.decode = function(input) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (i < input.length) {
                    enc1 = this._keyStr.indexOf(input.charAt(i++));
                    enc2 = this._keyStr.indexOf(input.charAt(i++));
                    enc3 = this._keyStr.indexOf(input.charAt(i++));
                    enc4 = this._keyStr.indexOf(input.charAt(i++));
                    chr1 = enc1 << 2 | enc2 >> 4;
                    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                    chr3 = (enc3 & 3) << 6 | enc4;
                    output = output + String.fromCharCode(chr1);
                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }
                }
                output = this._utf8_decode(output);
                return output;
            }
            ;
            // private method for UTF-8 encoding
            Base64.prototype._utf8_encode = function(string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";
                for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    } else if (c > 127 && c < 2048) {
                        utftext += String.fromCharCode(c >> 6 | 192);
                        utftext += String.fromCharCode(c & 63 | 128);
                    } else {
                        utftext += String.fromCharCode(c >> 12 | 224);
                        utftext += String.fromCharCode(c >> 6 & 63 | 128);
                        utftext += String.fromCharCode(c & 63 | 128);
                    }
                }
                return utftext;
            }
            ;
            // private method for UTF-8 decoding
            Base64.prototype._utf8_decode = function(utftext) {
                var string = "";
                var i = 0;
                var c, c1, c2, c3;
                c = c1 = c2 = 0;
                while (i < utftext.length) {
                    c = utftext.charCodeAt(i);
                    if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                    } else if (c > 191 && c < 224) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
                        i += 2;
                    } else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        i += 3;
                    }
                }
                return string;
            }
            ;
            //var _trans = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var _trans = "J6BUi3aEzDMs4tPVRNb5qmA9pWdG2nSr7CLQZycvYHXgklwTuoeI1x0j8FKfhO+/=";
            //base64并混淆
            Base64.prototype.encodeWithTrans = function(input) {
                var _str = this.encode(input);
                var res = [], _n, _index;
                for (var i = 0; i < _str.length; i++) {
                    _n = _str.substr(i, 1);
                    _index = this._keyStr.indexOf(_n);
                    res.push(_trans.substr(_index, 1));
                }
                return res.join('');
            }
            ;
            Base64.prototype.decodeWithTrans = function(input) {
                var res = [], _n, _index;
                for (var i = 0; i < input.length; i++) {
                    _n = input.substr(i, 1);
                    _index = _trans.indexOf(_n);
                    res.push(this._keyStr.substr(_index, 1));
                }
                return this.decode(res.join(''));
            }
            ;
            window['Base64'] = Base64;
        }
        )();
    }
    ).call(root);
}
)(// The environment-specific global.
function() {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    if (typeof this !== 'undefined')
        return this;
    return {};
}
.call(this));
