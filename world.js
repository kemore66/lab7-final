window.onload = function () {
  main();
};

function main()
{
    var lookup = document.getElementById("lookup");
    lookup.addEventListener("click",function(){makeRequest('world.php?country=')});
}

function makeRequest(url)
{
    var httpRequest = new XMLHttpRequest();
    var country = document.getElementById("country").value; 
    httpRequest.onreadystatechange = function()
    {
        if (httpRequest.readyState == XMLHttpRequest.DONE) 
        {
            if(httpRequest.status == 200)
            { 
                document.getElementById("result").innerHTML= httpRequest.responseText;
                alert(httpRequest.responseText);
            }
            else
            {
                alert("There is an error");
            }
        }
    };
    httpRequest.open('GET',url+country,true);
    httpRequest.send();
}
   
