let username=document.querySelector("#date"); 
username.max=new Date().toISOString().split("T")[0];
let result=document.querySelector("#result");
let btn=document.querySelector("#btn");
btn.addEventListener("click",calculateAge);
function calculateAge(){
    let dob=new Date(username.value);
    let d1=dob.getDate();
    let m1=dob.getMonth()+1;
    let y1=dob.getFullYear();
    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth();
    let y2=today.getFullYear();
    let d3,m3,y3;
    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
    }else{
        y3--;
        m3=12+m2-m1;
    }
    if(d2>=d1){
        d3=d2-d1;
    }else{
        m3--;
        d3=getDayInMonths(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3=11;
        y3--;
    }
    result.innerHTML=`you are <span>${y3}</span> years,<span>${m3}</span> months and <span>${d3}</span> days old`;
}
function getDayInMonths(year,month){
    return new Date(year,month,0).getDate();
}
