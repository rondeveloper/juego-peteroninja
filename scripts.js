const start = document.getElementById('start_c')
const dinosaurio = document.getElementById('img_c')
const obstaculo =document.getElementById('obstaculo')
const bgo=document.getElementById('background_opacity')
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
let obstaculo_pet = null
let obstaculo_movimiento = null 

start.addEventListener('drop',(t)=>{
    t.preventDefault() 
    console.log('drop')  
    start.style.backgroundImage=`url('rvky5wg.gif')`
    start.style.border=0
    // start.style.backgroundSize='contain'
    img_c.style.display='none'
    movimiento_obstaculo()
    movimiento_pet()
    bottom.focus()
})
start.addEventListener('dragover',(t)=>{
    t.preventDefault()
    console.log('arrastrar encima')
})
let state_unico=true
bgo.addEventListener('mouseup',()=>{
    if(state_unico==true){
        state_unico=false
    state_dinosaurio_pet=true
        switch(state_dinosaurio){
            case true:
                start.style.top="120px"
        setTimeout(()=>{
        start.style.top="250px"
        state_dinosaurio_pet=false
        if(alert_quien_mato==true){
        state_unico=true
    }
        },600
        ) 
        break
        default:
            console.log('not state dinosaurio')
        }
    }
        bottom.focus()
})
let timeoutdisparo
let alert_quien_mato=true
let clearyn=true
let nr=0
let nr2=0
let movimiento_obstaculo = ()=>{
    obstaculo_posicion_x=1300
    obstaculo.style.left=obstaculo_posicion_x+'px'
    timeoutdisparo= setTimeout(() => {
        obstaculo_movimiento=setInterval(() => {
        obstaculo_posicion_x-=(3+nr)
       
        obstaculo.style.left=obstaculo_posicion_x+'px'

        // if(clearyn==false){
        //     //   clearTimeout(timeoutdisparo)
        //     clearInterval(obstaculo_movimiento)
          
        //     clearyn=true
        // }

        if(obstaculo_posicion_x<-100){
        obstaculo_posicion_x=1300
        cd+=1 
        nr = (Math.random()*1.2)
        console.log(nr)
        count()
        }
        if(Math.abs(obstaculo_posicion_x-obstaculo_pet_X)<370){
            nr2=nr
            if(obstaculo_posicion_x<obstaculo_pet_X){
                nr2=Math.abs(nr2-0.2)
            }else{
                nr=Math.abs(nr-.2)
            }
        }
        if(obstaculo_posicion_x<190 && state_dinosaurio_pet==false && obstaculo_posicion_x>100){
            clearInterval(obstaculo_movimiento)
            clearInterval(obstaculo_pet)

            if(alert_quien_mato==true){
            alert_fin.innerHTML='FIN te mato carga de disparo'
            count()
            state_unico=false
            bgo.style.animation=''
            console.log(state_unico)
            alert_quien_mato=false
            }
        }  
    },10)
}, 2000);
}
let obstaculo_pet_X =1300
let movimiento_pet=()=>{
        obstaculo_pet=setInterval(() => {
        obstaculo_pet_X-=(3+nr2)
        pte.style.left=obstaculo_pet_X+'px'

        // if(clearyn==false){
        //     //   clearTimeout(timeoutdisparo)
        //    // clearInterval(obstaculo_pet)
        //     clearyn=true
        // }

        if(obstaculo_pet_X<-100){
            obstaculo_pet_X=1300
            pd+=1
            nr2 = (Math.random()*1.2) 
            console.log(nr2)
            count()
        }
        if(obstaculo_pet_X<190 && state_dinosaurio==true && obstaculo_pet_X>100){
            clearInterval(obstaculo_pet)
            clearInterval(obstaculo_movimiento)


            // clearTimeout(timeoutdisparo)
            // clearInterval(obstaculo_movimiento)
           if(alert_quien_mato==true){
            alert_fin.innerHTML='FIN te mato pterodactilo'
            count()
            bgo.style.animation=''
            state_unico=false
            console.log(state_unico)
            alert_quien_mato=false        
            }
        }
    }, 10);
}
bottom.addEventListener('keyup',()=>{
    if(state_unico==true){
     setTimeout(()=>{
         start.style.backgroundImage=`url(rvky5wg.gif)`
         start.style.backgroundSize='150px 180px'
         state_dinosaurio=true
         start.style.height='100px'
         start.style.top='250px'
         start.style.width='70px'
         start.style.position='absolute'
         state_dinosaurio=true
         start.style.backgroundRepeat='noRepeat'
         start.style.backgroundPosition='-34px -58px'
         start.style.padding='10px'
         start.style.left='100px'
         start.style.cursor='pointer'
         if(alert_quien_mato==true){
            state_unico=true
        }
     },600)
    start.style.backgroundImage=`url(rvky5wg.gif)`
    start.style.backgroundSize='160px 120px'
    img_c.style.display='none'
    start.style.height= '60px'
    start.style.width= '70px'
    start.style.position= 'absolute'
    start.style.top='290px'
    start.style.left='100px'
    start.style.backgroundPosition='-38px -38px'
    state_dinosaurio=false
    state_unico=false
    }
})
let count =()=>{
    amenaza.innerHTML=`carga disparado ${cd} pterodactilos ${pd}`
} 




 reset.addEventListener('click',()=>{
     if(alert_quien_mato==false){
   
     count()
     alert_fin.innerHTML=''
     obstaculo_pet_X=1300
     obstaculo_posicion_x=1300
     clearyn=false
     alert_quien_mato=true 
     movimiento_obstaculo()
     movimiento_pet()
     state_unico=true
     cd=0
     bgo.style.animation='thedaytonight 60s ease-in-out infinite'
     pd=0
     }
     bottom.focus()
     bgo.style.animationDelay='10ms'
     amenaza.innerHTML=`carga disparado ${cd} pterodactilos ${pd}`
 })
