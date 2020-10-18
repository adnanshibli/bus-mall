var names = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'];
    var firstimg = document.getElementById('firstimg');
    var secondimg = document.querySelector('#secondimg');
    var thirdimg = document.querySelector('#thirdimg');
    
    console.log(firstimg);
    console.log(secondimg);
    console.log(thirdimg);
    Images.all=[];
    function Images(imgName){
        this.imagename = imgName.split('.')[0];
        this.imagePath = `assets/${imgName}`;
        this.views = 0;
        this.clicks = 0;
  Images.all.push(this);
}
for (var i = 0; i < names.length; i++) {
    new Images(names[i]);
  
    
}
console.log(Images.all) ;

var firstone , secondone, thirdone;
function render(){
    
    firstone = Images.all[randomNumber(0,Images.all.length -1)];
    secondone = Images.all[randomNumber(0,Images.all.length -1)];
    thirdone = Images.all[randomNumber(0,Images.all.length -1)];
    console.log(firstone);
    console.log(secondone);
    console.log(thirdone);
// firstone.src=firstimg.imagePath;
// firstone.alt=firstimg.imagename;
// firstone.tittle=firstimg.imagename;

// secondone.src=secondimg.imagePath;
// secondone.alt=secondimg.imagename;
// secondone.tittle=secondimg.imagename;

// thirdone.src=thirdone.imagePath;
// thirdone.alt=thirdone.imagename;
// thirdone.tittle=thirdone.imagename;
firstimg.setAttribute('src', firstone.imagePath);
firstimg.setAttribute('alt', firstone.imagename);
firstimg.setAttribute('title', firstone.imagename);

secondimg.setAttribute('src', secondone.imagePath);
secondimg.setAttribute('alt', secondone.imagename);
secondimg.setAttribute('title', secondone.imagename);

thirdimg.setAttribute('src', thirdone.imagePath);
thirdimg.setAttribute('alt', thirdone.imagename);
thirdimg.setAttribute('title', thirdone.imagename);
}
render();
function randomNumber(min,max){
    return Math.floor(Math.random() * (max-min+1))+min;
}

var totalClicks = 0;

var imagesSection = document.querySelector('.images');
imagesSection.addEventListener('click', handleClickonIMG);

function handleClickonIMG(event) {
// event.preventDefault();
  console.log(event.target.id);

  if (totalClicks < 20) {
    if (event.target.id !== 'imagesSection') {
      totalClicks++;
      console.log(totalClicks);
      firstone.views++;
      secondone.views++;
      thirdone.views++;

      
      if (event.target.id === 'firstimg') {
        firstone.clicks++;
      }
      if (event.target.id === 'secondimg') {
        secondone.clicks++;
      }
      if (event.target.id === 'thirdimg') {
        thirdone.clicks++;
      }
render();
    }
    
  } else if (totalClicks === 20){
    renderSummary();
    console.log(totalClicks);
  }
}
function renderSummary() {
    imagesSection.removeEventListener('click',handleClickonIMG);
    console.log('you voted 20 times already!!');
    var ulE1 = document.getElementById('finalResults');
    for(var i=0; i<Images.all.length; i++) {
      var liE = document.createElement('li');
      ulE1.appendChild(liE);
      liE.textContent = `${Images.all[i].imagename} has ${Images.all[i].clicks} clicks and ${Images.all[i].views} views`;
    }
  }
  