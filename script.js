function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    //en_US
    console.log("outputdate", outputdate.value);
    console.log("inputdate", inputdate.value);

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formattedDate;

}