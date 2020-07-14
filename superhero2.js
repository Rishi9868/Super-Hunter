


    
    function fetchHero(){
        var xhrRequest=new XMLHttpRequest();
       
        xhrRequest.onload=function(){
            let responseJson=JSON.parse(xhrRequest.response);
            console.log(responseJson);
            var imgUrl=responseJson.results[0].image.url;
            var img=document.createElement('img');
            img.setAttribute('src',imgUrl);
            Hname=document.getElementById('name');
            Hname.innerText="My Self: "+responseJson.results[0].name;
            var div1=document.createElement('div');
            div1.appendChild(img);
            suggestionList.appendChild(div1);
            console.log(imgUrl);
            Hwork=document.getElementById('workOccupation');
            Hwork.innerText="Occupation: "+responseJson.results[0].work.occupation;
            Hgender=document.getElementById('gender');
            Hgender.innerText="Gender: "+responseJson.results[0].appearance.gender;
           
            
            
        }
        xhrRequest.open('get',"https://superheroapi.com/api.php/2645388492343736/search/"+localStorage.getItem('hero'),true);
        xhrRequest.send();
    }
     fetchHero();