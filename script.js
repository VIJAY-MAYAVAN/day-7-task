//1.Get all the countries from Asia continent /region using Filter function

const request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all')
request.load=function (){
    const obj=JSON.parse(this.response)
    const asia=obj.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    request.send()
    console.log(asia)}

//2.Get all the countries with population of less than 2 lacs using Filter function
const request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all')
request.load=function (){
    const obj=JSON.parse(this.response);
    const population =obj.filter((element)=>{
        return element.population<200000
    })
    request.send()
    console.log(population)}

//3.Print the following details name, capital, flag using forEach function.

const request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all')
request.load=function (){
    const obj=JSON.parse(this.response)
    obj.forEach((element)=>{
        console.log(element.name,element.capital,element.flag)
    })}
    request.send()

//4.Print the total population of countries using reduce function 

const request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all')
request.load=function (){
    const obj=JSON.parse(this.response)
    const population=obj.reduce((acc,element)=>{
        return acc+element.population
    },0)
    console.log(population)}

//5.Print the country which use US Dollars as currency.

var request = new XMLHttpRequest()
request.open('Get', 'https://restcountries.eu/rest/v2/all')
request.load = function () {
        const obj = JSON.parse(this.response)
        const currency=[];
        for(i=0;i<obj.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",+data[i].name,"=>",+data[i].currencies[0].code)
            }
        }
    }





