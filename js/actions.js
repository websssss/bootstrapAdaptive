window.onload = function(){
    let menuSwitch = false
    let menu = document.querySelector('#menu');
    menu.onclick = function(){
        if(menuSwitch){
            document.querySelector('header .list').style.display = 'none';
            menuSwitch = false;
        }else{
            document.querySelector('header .list').style.display = 'block';
            menuSwitch = true;
        }
        
    }
}