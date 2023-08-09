// class define
export default class testHttpRequest {
    constructor(url, port="80", method="GET"){
        //set properties
        this.url = url;
        // this.port = port;
        this.method = method;
        console.log(this.url)
        console.log(url)
        // TODO: exception: url
        // TODO: exception port
        // TODO: exception method
    }
    // method init
    // setter url
    setUrl(url) {
        this.url = url;

        // TODO: exception url check
    }
    // setter get/post
    setMethod(method) {
        this.method = method;
        //TODO: exception Check POST, GET
    }
    // setter port
    // setPort(port){
    //     this.port = port;
    //     //TODO: exception : check port is number
    // }

    // method for http request send
    async request() {
        // TODO: make variation for POST(need header setter, body setter)
        // send request
        const response = await fetch("http://www.jaje114.com/"/*this.url, {method : this.method}*/)
        //error handling

        // should handle HTTP resposes that are not 200
        // .then ( (response) => {
        //     if 
        // })
        .catch((error)=> {
            console.log("fetch error in request() method. log : "+error);
        });
        // fulfilled
        console.log(response);
        return response; 
    }
}
// TODO: exception.. of what?IDK
// TODO : think. what should I add
// promise가 완료된 후에 job queue에 수행,거절 핸들러가 추가되어도 여전히 실행 가능
// -> 무슨말이냐면 promise.then 안에 또 promise.then써넣는 방식으로 핸들러 안에 핸들러 넣을 수 있다는 뜻임


/*

*/
