const globalVariable ='Carita feliz';

function localOne(){
    console.log('GLOBAL 1: ',globalVariable);
    //console.log('LOCAL 1: ', localVariable);

    function localTwo(){
        const carrot = 'zanahoria';
        console.log('LOCAL 2: ',carrot);
    }

    function localThree() {
      //console.log("LOCAL 3: ", carrot);
    }

    localTwo();
    localThree();
}
console.log(localOne());