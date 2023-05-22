const start = document.getElementById('start_c')
const dinosaurio = document.getElementById('img_c')
const obstaculo =document.getElementById('obstaculo')
let bottom = document.getElementById('event_key')
let pte=document.getElementById('pte')
let alert_fin=document.getElementById('alert_fin')
let reset=document.getElementById('reset')
let cd=0
let pd=0
let obstaculo_posicion_x= 1300
let cactus_set
let state_dinosaurio=true
let state_dinosaurio_pet=false
let amenaza=document.getElementById('amenaza')
start.addEventListener('drop',(t)=>{
    t.preventDefault() 
    console.log('drop')  
    start.style.backgroundImage=`url('dinosaurio\ alto.jpg')`
    start.style.backgroundSize='contain'
    img_c.style.display='none'
    movimiento_obstaculo()
    movimiento_pet()
    bottom.focus()
})
start.addEventListener('dragover',(t)=>{
    t.preventDefault()
    console.log('arrastrar encima')
})
start.addEventListener('mouseup',()=>{
    state_dinosaurio_pet=true
    console.log(state_dinosaurio)
        switch(state_dinosaurio){
            case true:
                start.style.top="120px"
        setTimeout(()=>{
        start.style.top="250px"
        state_dinosaurio_pet=false
        console.log(state_dinosaurio)
        },800
        ) 
        break
        default:
            console.log('not state dinosaurio')
        }
        bottom.focus()
})
let alert_quien_mato=true
let movimiento_obstaculo = ()=>{
    setTimeout(() => {
    let obstaculo_movimiento=setInterval(() => {
        obstaculo_posicion_x-=3
        obstaculo.style.left=obstaculo_posicion_x+'px'
        if(obstaculo_posicion_x<-100){
        obstaculo_posicion_x=1300
        cd+=1
        count()
        }
        if(obstaculo_posicion_x<286 && state_dinosaurio_pet==false && obstaculo_posicion_x>100){
            clearInterval(obstaculo_movimiento)
            if(alert_quien_mato==true){
            alert_fin.innerHTML='FIN te mato carga de disparo'
            count()
            alert_quien_mato=false
            }
        }  
    },10)
}, 2000);
}
let obstaculo_pet_X =1300
let movimiento_pet=()=>{
    let obstaculo_pet=setInterval(() => {
        obstaculo_pet_X-=3
        pte.style.left=obstaculo_pet_X+'px'
        if(obstaculo_pet_X<-100){
            obstaculo_pet_X=1300
            pd+=1
            count()
        }
        if(obstaculo_pet_X<286 && state_dinosaurio==true && obstaculo_pet_X>100){
            clearInterval(obstaculo_pet)
           if(alert_quien_mato==true){
            alert_fin.innerHTML='FIN te mato pterodactilo'
            count()
            alert_quien_mato=false        
            }
        }
    }, 10);
}
bottom.addEventListener('keyup',()=>{
     setTimeout(()=>{
         start.style.backgroundImage=`url('dinosaurio\ alto.jpg')`
         start.style.backgroundSize='contain'
         state_dinosaurio=true
         start.style.height='100px'
         start.style.top='250px'
     },800)
    start.style.backgroundImage=`url('dinosaurio.jpg')`
    start.style.backgroundSize='170px 60px'
    img_c.style.display='none'
    start.style.border='8px ridge purple'
    start.style.height= '60px'
    start.style.width= '170px'
    start.style.position= 'absolute'
    start.style.top='290px'
    start.style.left='100px'
    console.log('dblclick')
    state_dinosaurio=false
    console.dir(start)
})
let count =()=>{
    amenaza.innerHTML=`carga disparado ${cd} pterodactilos ${pd}`
} 




// reset.addEventListener('click',()=>{
//     movimiento_obstaculo()
//     movimiento_pet()
//     cd=0
//     pd=0
//     amenaza.innerHTML=`carga`
// })
