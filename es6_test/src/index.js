class B {
    constructor() {
        let smile = '(＾0＾）';
        this.hello = `Hello ${smile}`;
    }
    sayHello() {

        //return () => {
            return this.hello += ' 哈哈';
        //}()
    }


    //async getNumber(x) {
    //    return new Promise((resolve, reject) => {
    //        setTimeout(() => {
    //            resolve(Number(x))
    //        }, 200);
    //    });
    //}
}
export default B
