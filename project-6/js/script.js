class school {
    constructor(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }

   
    studentinfo(){
        document.getElementById("studentname").innerHTML =("StudentName :- "+ this.name +"</br>Email :- "+ this.email +"</br>Contact :- "+ this.contact);

        console.log("StudentName:", this.name +"\nEmail:"+ this.email +"\nContact:"+ this.contact);
       
        
    }
    facultyinfo(){
        document.getElementById("facultyname").innerHTML =("facultytName :- "+ this.name +"</br>Email :- "+ this.email +"</br>Contact :- "+ this.contact);

        console.log("FacultyName:", this.name +"\nEmail:"+ this.email +"\nContact:"+ this.contact);
    }
    peon(){
        document.getElementById("peonname").innerHTML =("PeonName :- "+ this.name +"</br>Email :- "+ this.email +"</br>Contact :- "+ this.contact);

        console.log("PeonName:", this.name +"\nEmail:"+ this.email +"\nContact:"+ this.contact);
    }
}
let s1 = new school("Dipali", "dipali0203@gmail", 1234567890);
s1 .studentinfo();

let s2  = new school("KeyurSir", "keyur@gmail", 8943598567);
s2 .facultyinfo();

let s3 = new school("viral", "viral@gmail", 3485775968);
s3 .peon();





