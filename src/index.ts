
import { POLY_PHONE, FULL_DICT, CHAR_DICT } from './dict'

import { getEveryLetters, getPinyinOfWords } from './utils'

export interface convertToPinyinOptions {
	separator?: string
	capitalizeFirstLetter?: boolean
}


function convert2Pinyin (
	words: string, 
	options: convertToPinyinOptions = {
		separator: '',
		capitalizeFirstLetter: true
	}
): string {
	const { separator, capitalizeFirstLetter } = options

	return getPinyinOfWords(
		getEveryLetters(words), 
		separator,
		capitalizeFirstLetter
	)
}

function getFirstLetters(word: string, options?: object): string {

	return ''
}


const Chinese = {
	convert2Pinyin,
	getFirstLetters
}

export default Chinese

class Chinese2 {
    options: {
        checkPolyphone: boolean,
        charcase: string
    }
    polyphone: any
    full_dict: any
    char_dict: string

    constructor() {
        this.options = {
            checkPolyphone: false,
            charcase: 'default'
        }

        this.initialize()
    }

    initialize() {
        this.char_dict = CHAR_DICT
        this.full_dict = FULL_DICT
        this.polyphone = POLY_PHONE
    }

    getCamelChars(str: string) {
		if(typeof(str) != "string")
			throw new Error("函数getFisrt需要字符串类型参数!");
		var chars = new Array(); //保存中间结果的数组
		for(var i=0,len=str.length;i<len;i++){
			//获得unicode码
			var ch = str.charAt(i);
			//检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
			chars.push(this._getChar(ch));
		}
		//处理arrResult,返回所有可能的拼音首字母串数组
		return this._getResult(chars);
	}
	
	getFullChars(str: string) {
		var len = str.length;
	    var result = "";
	    var reg = new RegExp('[a-zA-Z0-9\- ]');
	    for (var i=0; i<len; i++) {
	        var ch = str.substr(i,1);
	        var unicode = ch.charCodeAt(0);
			//如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
			if(unicode > 40869 || unicode < 19968) {
	            result += ch;
	        } else {
		        var name = this._getFullChar(ch);
		        if (name!==false) {
	            	result += name;
		        }
	        }
	    }
	    return result;
	}
	
	_getFullChar(str: string) {
	    for (var key in this.full_dict){
	        if (this.full_dict[key].indexOf(str)!=-1) {
	            return this._capitalize(key); break;
	        }
	    }
	    return false;
	}
	// 首字母大写
	_capitalize(str: string){
	    if (str.length>0) {
	        var first = str.substr(0,1).toUpperCase();
	        var spare = str.substr(1,str.length);
	        return first + spare;
	    }
	}
	
	_getChar(ch: string){
		var unicode = ch.charCodeAt(0);
		//如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
		if(unicode > 40869 || unicode < 19968)
			return ch; //dealWithOthers(ch);
		//检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
		if (!this.options.checkPolyphone) 
			return this.char_dict.charAt(unicode-19968);
		return this.polyphone[unicode] ? this.polyphone[unicode] : this.char_dict.charAt(unicode-19968);
	}
	
	_getResult(chars: string[]): string[] | string {
		if (!this.options.checkPolyphone)
			return chars.join('');
		var result = [''];
		for(var i=0,len=chars.length;i<len;i++){
			var str = chars[i];
			var strlen = str.length;
			if(strlen == 1){
				for(var j=0; j < result.length; j++){
					result[j] += str;
				}
			}else{
				var swap1 = result.slice(0);
				result = [];
				for(var j=0; j < strlen; j++){
					//复制一个相同的arrRslt
					var swap2 = swap1.slice(0);
					//把当前字符str[k]添加到每个元素末尾
					for(var k=0; k < swap2.length; k++){
						swap2[k] += str.charAt(j);
					}
					//把复制并修改后的数组连接到arrRslt上
					result = result.concat(swap2);
				}
			}
		}
		return result;
	}
}
new Chinese2()

// export default Chinese