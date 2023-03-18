 const bitcoincontainer=document.querySelector('.bitcoinnews')
const sportscontainer=document.querySelector(".sportsnews")
const moviescontainer=document.querySelector(".moviesnews")
 const navigationbar=document.querySelector(".nav")

 function nav (btn){
  

 const button1=document.createElement('button')
 button1.innerHTML="SPORTS NEWS"
 button1.addEventListener('click',()=>{
  sportscontainer.classList.remove('hide')
  bitcoincontainer.classList.add('hide')
  moviescontainer.classList.add('hide')
   getsportsData()
 
 })
 const button2=document.createElement('button')
 button2.innerHTML="BITCOINS NEWS"
 button2.addEventListener('click',()=>{
  sportscontainer.classList.add('hide')
  bitcoincontainer.classList.remove('hide')
  moviescontainer.classList.add('hide')
   getApiData()
 })
 const button3=document.createElement('button')
 button3.innerHTML="MOVIES NEWS"
 button3.addEventListener('click',()=>{
  sportscontainer.classList.add('hide')
  bitcoincontainer.classList.add('hide')
  moviescontainer.classList.remove('hide')
   getmoviesData()
 })
 navigationbar.appendChild(button1)
 navigationbar.appendChild(button2)
 navigationbar.appendChild(button3)
}
nav()

function getApiData(){
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=964479de95ac4ea296a25afbf1cdb086')
        .then(response => response.json())
        .then((response) => {
            console.log(response)
          
          creatcard(response.articles)
         })
        
}

function creatcard(news){
 console.log(news)
news.forEach((val) => {
    const news=document.createElement('div')
  news.classList.add('card')

   const image=document.createElement('img')
   image.src=val.urlToImage

   const  author=document.createElement('h3')
   author.innerHTML=val.author
    
   const  description=document.createElement('description')
   description.innerHTML=val.description

   const  title=document.createElement('p')
   title.innerHTML=val.title

    const btn=document.createElement("button")
    btn.innerHTML="READ MORE"

     const a = document.createElement('a'); 
      a.href=val.url

   news.appendChild(image)
  news.appendChild(author)
  news.appendChild(description)
  news.appendChild(title)
  news.appendChild(a);
  a.appendChild(btn)
   
   
   bitcoincontainer.appendChild(news)
})

}

function getsportsData(){
  
  fetch('https://newsapi.org/v2/everything?q=sports&apiKey=964479de95ac4ea296a25afbf1cdb086')
      .then(response => response.json())
      .then((response) => {
          console.log(response)
        sportsData(response.articles)
       })
      
} 

function sportsData(sportdata){
  console.log(sportdata)
  sportdata.forEach((data)=>{
    const card=document.createElement('div')
    card.classList.add('card')

    const  image=document.createElement('img')
    image.src=data.urlToImage

   const  author=document.createElement('h3')
   author.innerHTML=data.author
    
   const  description=document.createElement('description')
   description.innerHTML=data.description

   const  title=document.createElement('p')
   title.innerHTML=data.title

    const btn=document.createElement("button")
    btn.innerHTML="READ MORE"

     const a = document.createElement('a')
     a.classList.add('span_a')
      a.href=data.url

  card.appendChild(image)
   card.appendChild(author)
   card.appendChild(description)
   card.appendChild(title)
   card.appendChild(a);
   a.appendChild(btn)
   
   sportscontainer.appendChild(card)
  })
}


function getmoviesData(){
  
  fetch('https://newsapi.org/v2/everything?q=movies&apiKey=964479de95ac4ea296a25afbf1cdb086')
      .then(response => response.json())
      .then((response) => {
          console.log(response)
        moviesData(response.articles)
       })
      
}

function moviesData(moviedata){
  console.log(moviedata)
  moviedata.forEach((data)=>{
    const card=document.createElement('div')
    card.classList.add('card')

    const  image=document.createElement('img')
    image.src=data.urlToImage

   const  author=document.createElement('h3')
   author.innerHTML=data.author
    
   const  description=document.createElement('description')
   description.innerHTML=data.description

   const  title=document.createElement('p')
   title.innerHTML=data.title

    const btn=document.createElement("button")
    btn.innerHTML="READ MORE"

     const a = document.createElement('a')
     a.classList.add('span_a')
      a.href=data.url

  card.appendChild(image)
   card.appendChild(author)
   card.appendChild(description)
   card.appendChild(title)
   card.appendChild(a);
   a.appendChild(btn)
   
   moviescontainer.appendChild(card)
  })
}

