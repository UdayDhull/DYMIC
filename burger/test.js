const body = document.getElementsByTagName('body')[0]

function setcolor(name){
    body.style.backgroundColor = name ; 
}


function auto(){

    let h = new Date().getHours();
    let m = new Date().getSeconds();

    if( 6<h<18 )
    {    
        body.style.backgroundColor = colors60[m];
    }
    else
    {
        body.style.backgroundColor = "green";
    }
    }
    const colors60 = [
        "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#33FFF3",
        "#A833FF", "#FF8F33", "#33FFA8", "#8FFF33", "#FF3333",
        "#33A8FF", "#A8FF33", "#FF33F6", "#33FF6E", "#6E33FF",
        "#FFC300", "#DAF7A6", "#FF6F61", "#6B5B95", "#88B04B",
        "#F7CAC9", "#92A8D1", "#955251", "#B565A7", "#009B77",
        "#DD4124", "#45B8AC", "#EFC050", "#5B5EA6", "#9B2335",
        "#DFCFBE", "#55B4B0", "#E15D44", "#7FCDCD", "#BC243C",
        "#C3447A", "#98B4D4", "#F5D547", "#4ECDC4", "#C7F464",
        "#FF6B6B", "#556270", "#C44D58", "#2A363B", "#E84A5F",
        "#99B898", "#FECEAB", "#FF847C", "#E84A5F", "#2A363B",
        "#22A7F0", "#F64747", "#9B59B6", "#2ECC71", "#E67E22",
        "#1ABC9C", "#3498DB", "#E74C3C", "#F1C40F", "#7F8C8D"
      ];