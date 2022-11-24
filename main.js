function mainkan() {
    document.getElementById('isi').style.display="block";


  var audio = document.getElementById("audio");
  audio.play(); 
  
    var x = document.getElementById("gas");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
  const toggleModal = () => document.body.classList.toggle("open");

  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.getElementById("date").innerHTML = "( " + d + "-" + m + "-" + y + " )";
  

  {
    var b = document.getElementById("tolak");
    b.addEventListener("click",change);
    function change()
    {
        var i = Math.floor(Math.random()*50)+1;
        var j = Math.floor(Math.random()*50)+1;
        b.style.left = i+"px";
        b.style.top = j+"px";
    }
  }