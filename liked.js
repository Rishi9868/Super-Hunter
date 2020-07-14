var jsonString=localStorage.getItem('likedItem');
var jsonArray=JSON.parse(jsonString);
console.log(jsonArray);
var i;
divfinal=document.createElement('div');
for (i=0;i<jsonArray.length;i++)
{
    div1=document.createElement('div');
    div1.innerHTML=jsonArray[i];
    divfinal.append(div1);
}
suggestionList.append(divfinal);
