var hero=new Array();

function getHero()
{
    var xhrRequest=new XMLHttpRequest();
    document.getElementById('List').innerHTML="";
    xhrRequest.onload=function(){
        let responseJson=JSON.parse(xhrRequest.response);
        //console.log(responseJson);
        
        var JsonString;
        for(var k=0;k<responseJson.results.length;k++)
        {
            function FavHero()
            {
                console.log("hello");
                hero.push(name);
                JsonString=JSON.stringify(hero);
                localStorage.setItem('likedItem',JsonString);
                console.log(JsonString);
                console.log(hero);
            }
            
            function detail()
            {
                localStorage.setItem('hero',name);
            }
            var imgUrl=responseJson.results[k].image.url;
            var img=document.createElement('img');
            img.setAttribute('src',imgUrl);
            var divimg=document.createElement('div');
            divimg.setAttribute("class","imga");
            var name=responseJson.results[k].name;
            var para=document.createElement('p');
            para.innerHTML=name;
            var buttonL=document.createElement('button');
            buttonL.innerHTML="Like";
            buttonL.addEventListener('click',FavHero);
            var divNB=document.createElement('div');
            divimg.appendChild(img);
            divNB.appendChild(para);
            divNB.appendChild(buttonL);
            var button2=document.createElement('button');
            button2.innerHTML="Detail";
            button2.addEventListener('click',detail);
            var form=document.createElement('form');
            form.appendChild(button2);
            form.setAttribute('action','superhero2.html')
            var finaldiv=document.createElement('div');
            finaldiv.setAttribute('class',"detail");
            finaldiv.appendChild(divimg);
            finaldiv.appendChild(divNB);
            finaldiv.appendChild(form);
            List.append(finaldiv);


        }
        

    }
    xhrRequest.open('get',"https://superheroapi.com/api.php/2397775803848130/search/"+inputHero.value,true);
    xhrRequest.send();
}
var inputHeroa=document.getElementById("inputHero");
inputHeroa.addEventListener('keyup',getHero);