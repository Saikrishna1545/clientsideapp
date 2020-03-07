
function convertkms(){ 
   var a= document.getElementById("a").value 
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    
  
  addValues(a,b,c);

 

} 
function addValues(a,b,c){
    var add=0;
    var add=parseInt(a)+parseInt(b)+parseInt(c); 
 

  document.getElementById("d").value=add;
    return add;
}

 const jokeURI = 'https://dog.ceo/api/breeds/image/random'

// fetch information
const getJoke = async () => {
try {
const response = await fetch(jokeURI)
const obj = await response.json()
console.log(`FETCHED. Response JSON ${obj}`)
const joke = obj.message || 'No joke for you.'
return joke
} catch (error) { console.error(error) }
}
const updateWithJoke = async (event) => {
try {
document.querySelector('#dogarea').src = ''
const answer = await getJoke()
document.querySelector('#dogarea').src = answer
} catch (error) { console.error(error) }
}
// document.getElementById('getscore').onclick(getJoke);
document.addEventListener('click', event => {
if (event.target && event.target.id === 'getscore') { updateWithJoke(event) }
})
