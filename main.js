// bring the elemnt
let input = document.getElementsByTagName("input");
let error = document.querySelectorAll('form .error');

let button = document.querySelector("button");   
let result = document.querySelectorAll(".result span");

button.addEventListener("click",(e)=>{
    getAge(input[0].value,input[1].value,input[2].value)
})

function getAge(day,month,year){
    
    let array = [day,month,year];
    
    if((day !== "") && month !== "" && year !== ""){
        array.forEach(function(el,index){
            if(el !== ""){
                error[index].innerHTML = ``;
            }
        })
    if((parseInt(day) >= 1 && parseInt(day) <= 31) && (parseInt(month) >= 1 && parseInt(month) <= 12) && (parseInt(year) >= 1 && parseInt(year) <= 2023)){
        
        if(parseInt(day) === 31 && (parseInt(month) === 2 || parseInt(month) === 4 || parseInt(month) === 6 || parseInt(month) === 9 || parseInt(month) === 11)) {
            error[0].innerHTML = `<em>Must be a valid date</em>`;
            
        }else{
            let start = new Date(`${month}-${day}-${year}`);
            

            let end = new Date();
            console.log(end);
            result[0].innerHTML = `${end.getFullYear() - start.getFullYear()}`
            result[1].innerHTML = `${(end.getMonth() - start.getMonth()) > 0 ? end.getMonth() - start.getMonth() : 12 - (end.getMonth() + start.getMonth())}`
            result[2].innerHTML = `${(end.getDate() - start.getDate()) > 0 ? end.getDate() - start.getDate() : 30 - (start.getDate() - end.getDate())}`


        }

    }else{
        if(!(parseInt(day) >= 1 && parseInt(day) <= 31)){
            error[0].innerHTML = "Must Be a valid day";
        } 
        if(!(parseInt(month) >= 1 && parseInt(month) <= 12)){
            error[1].innerHTML = "Must Be a valid Month";
        }
        if(!(parseInt(year) >= 1 && parseInt(year) <= 2023)){
            error[2].innerHTML = "Must Be a valid Year";

        }
    }
    }else{
        array.forEach(function(el,index){
            if(el === ""){
                error[index].innerHTML = `<em>this field is required`;
            }
        })
    }
}


