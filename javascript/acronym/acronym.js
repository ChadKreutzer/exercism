module.exports = {
    
    parse (string) {
         return string.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase().match(/\b\w/g).join("");
    }
    
};