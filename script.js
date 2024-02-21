var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    for(i=0;i<res.length;i++){
        console.log(res[i].name.common)
    }
    for(i=0;i<res.length;i++){

        if (res[i].capital)
        {
        console.log(res[i].capital[0])
        console.log(res[i].area)
    }
    else{console.log("Invalid Capital")}
}
//Qus 2: Display all the countries flag
//Qus 3: Display all the country name,region,subregion,population
for(i=0;i<res.length;i++){

    console.log(res[i].flag+ " "+res[i].name.common+" "+res[i].population+" "+res[i].region+" "+res[i].subregion)
}
}