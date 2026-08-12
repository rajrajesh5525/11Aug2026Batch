

class Rajesh {

    Rajesh(){
        console.log("This is the Rajesh Method")
    }
}

class QA extends Rajesh {

    course(){

        console.log("This is the course method")
    }
}

let job = new QA();

job.Rajesh();
job.course();


