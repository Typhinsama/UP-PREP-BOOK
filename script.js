let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")




let students = [
  {
    profileImage: "https://cdn.glitch.com/4b1b571b-acee-48f1-bd76-be99e89b7d5a%2FSnapchat-306498303.jpg?v=1585180773768",
    name: "NAME:The CODER Mahel Napo",
    quote: "QUOTE:You think you caught up to time but time has you in it's grasp",
    superlative: "Most Awkward"
  },
  {
     profileImage: "https://cdn.glitch.com/4b1b571b-acee-48f1-bd76-be99e89b7d5a%2Freceived_661323717962603.jpeg?v=1585180765623",
    name: "NAME:Anthony Bello",
    quote: "QUOTE:I'm naked in Animal Crossing",
    superlative: "Most Blunt"
  },
  {
    profileImage: "https://cdn.glitch.com/4b1b571b-acee-48f1-bd76-be99e89b7d5a%2Freceived_808992189510696.jpeg?v=1585180767855",
    name: "NAME:Ronel Franco",
    quote: "QUOTE:I am the god of the new world. Peasants!",
    superlative: "Super Smart"
  },
  {
     profileImage: "https://cdn.glitch.com/4b1b571b-acee-48f1-bd76-be99e89b7d5a%2Freceived_206880870537314.png?v=1585181395214",
    name: "NAME:Amadou Jallow",
    quote: "QUOTE:There is no point of complaining about shit that is already happening.",
    superlative: "Most respectful"
  },
  {
     profileImage: "https://cdn.glitch.com/4b1b571b-acee-48f1-bd76-be99e89b7d5a%2Freceived_642370066604178.jpeg?v=1585180762455",
    name: "NAME:Thierno Diallo",
    quote: "QUOTE:A tiny step is still a step",
    superlative: "Most dedicated"
  },
  {
     profileImage: "https://cdn.glitch.com/4b1b571b-acee-48f1-bd76-be99e89b7d5a%2FScreenshot_20200325-175413.jpg?v=1585180772105",
    name: "NAME:Lesroy Roberts",
    quote: "QUOTE:A potato flew around the room before you came",
    superlative: "Lazy Smart"
  },
  {
     profileImage: "https://cdn.glitch.com/4b1b571b-acee-48f1-bd76-be99e89b7d5a%2Freceived_1044607755910074.jpeg?v=1585180769592",
    name: "NAME:Jeordy Abreu",
    quote: "QUOTE:I'm just boolin",
    superlative: "Trivia nerd"
  },
  {
     profileImage: "https://cdn.glitch.com/4b1b571b-acee-48f1-bd76-be99e89b7d5a%2FSnapchat-597316100.jpg?v=1585180775422",
    name: "NAME:Brandon Rivera",
    quote: "QUOTE:Top?",
    superlative: "Most chill"
  }

]

let count =0
document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
   document.querySelector("#quote").innerHTML = students[count].quote
   document.querySelector("#superlative").innerHTML = students[count].superlative

let repeatStudents = students.length -1
nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log (count)
  if(count > repeatStudents){
     count =0
  }
  
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
   document.querySelector("#quote").innerHTML = students[count].quote
   document.querySelector("#superlative").innerHTML = students[count].superlative
  
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
    if(count < 0 ){
     count =repeatStudents
  }
  
    document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
   document.querySelector("#quote").innerHTML = students[count].quote
   document.querySelector("#superlative").innerHTML = students[count].superlative
})

let randomButton =document.querySelector("#random")

randomButton.addEventListener("click", ()=>{
  let randomStudentPick = students[Math.floor(Math.random()* students.length)]

  document.querySelector("#pic").src = randomStudentPick.profileImage
  document.querySelector("#name").innerHTML = randomStudentPick.name
  document.querySelector("#quote").innerHTML = randomStudentPick.quote
  document.querySelector("#superlative").innerHTML = randomStudentPick.superlative
  
  })


