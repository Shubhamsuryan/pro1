var ch=0;
function change(p1,p2) 
   {
    var a1=p1;
    var a2=p2;
    var homee = document.querySelector(a1);
    var homicon = document.querySelector(a2);
        let a=ch;
        if (a==0) {
            ch=1;
            a=ch;
            homee.style.backgroundColor= 'rgb(251, 48, 82)';
            homicon.style.color = 'white';
            homee.style.borderColor = 'rgb(251, 48, 82)';   
            if (a1=='.heart') {
                homicon.classList.remove("ri-heart-2-line");
                homicon.classList.add("ri-hearts-line");
            }
            if (a1=='.homee') {
                homicon.classList.remove("ri-home-line");
                homicon.classList.add("ri-home-heart-line");
            }
        }
        else{
            ch=0;
            a=ch;
            homee.style.backgroundColor= '#fcf5eb';
            homicon.style.color = 'rgb(172 142 98)';
            homee.style.borderColor = 'rgb(172 142 98)';   
            if (a1=='.heart') {
                homicon.classList.remove("ri-hearts-line");
                homicon.classList.add("ri-heart-2-line");
            }
            if (a1=='.homee') {
                homicon.classList.remove("ri-home-heart-line");
                homicon.classList.add("ri-home-line");
            }
        }
    }