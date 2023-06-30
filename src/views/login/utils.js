function localCache(){
    function setCache(key,value) {
       return window.localStorage.setItem(key, JSON.stringify(value))
    };
    function getCache(key) {
        const value = window.localStorage.getItem(key)
        if (value) {
          return JSON.parse(value)
        }
      }
      
    function deleteCache(key) {
        window.localStorage.removeItem(key)
      }
    
    function clearCache() {
        window.localStorage.clear()
      }
      
}
export default localCache()