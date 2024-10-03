const name=["Артем", "Максим", "Александр", "Егор", "Андрей", "Сергей", "Ян", "Михаил", "Константин", "Алекей"]
const secondname=["Иванов", "Смирнов", "Соболев", "Петров", "Дубровский", "Онегин", "Ларин", "Болконский", "Каренин", "Ленский", "Облонская", "Ростов", "Левин", "Чарский", "Друбецков", "Чацкий"]
const city=["Волгоград", "Екатеринбург", "Казань", "Москва", "Нижний Новгород", "Новосибирск", "Омск", "Ростов-на-Дону", "Самара", "Санкт-Петербург", "Уфа", "Челябинск"]
export let obj=[]
function rand(){
  return(
    {
      img: "https://randomfox.ca/images/"+Math.ceil(Math.random()*121)+".jpg",
      id:(Math.random()*Math.pow(10,16)),
      name: name[Math.ceil(Math.random()*9)],
      secondname: secondname[Math.ceil(Math.random()*15)],
      phoneNumber: "8-9"+ Math.ceil(Math.random()*100)+"-"+Math.ceil(Math.random()*1000) +"-"+Math.ceil(Math.random()*100)+"-"+Math.ceil(Math.random()*100),
      city: city[Math.ceil(Math.random()*10)],
      online: (Math.ceil(Math.random()*10)>5),
      message:[],
      friend: false,  
    }
  )
}

for (let i = 0 ; i<50 ; i++){
obj.push((rand()))
}




  
