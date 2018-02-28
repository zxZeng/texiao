/**
 * Created by zx on 2017/11/28.
 */
$.fn.extend({"myPic":function(obj){
    obj = obj||{};
    obj.effect = obj.effect || "a";
    //console.log(this);
    //console.log(obj.effect);
    switch (obj.effect){
        case "a": this.addClass("effect-lily");break;
        case "b": this.addClass("effect-sadie");break;
        case "c": this.addClass("effect-honey");break;
        case "d": this.addClass("effect-layla");break;
        case "e": this.addClass("effect-zoe");break;
        case "f": this.addClass("effect-oscar");break;
        case "g": this.addClass("effect-marley");break;
        case "h": this.addClass("effect-ruby");break;
        case "i": this.addClass("effect-roxy");break;
        case "j": this.addClass("effect-bubba");break;
        case "k": this.addClass("effect-romeo");break;
        case "l": this.addClass("effect-dexter");break;
        case "m": this.addClass("effect-sarah");break;
        case "n": this.addClass("effect-chico");break;
        case "o": this.addClass("effect-milo");break;
    }
}});