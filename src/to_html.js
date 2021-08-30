let container = document.querySelector('.galery');
export default (data) => {data.forEach(card => {
    let typeFile = card.src.split('.').pop();
    if(typeFile === "jpeg" || typeFile === "jpg"){
        container.insertAdjacentHTML('beforeend',`<li class="item"><h3 class="item-name">${card.name}</h3><img src=${card.src} alt=${card.name} class="item-img"></li>`);
    }else if(typeFile == "mp3"){
        container.insertAdjacentHTML('beforeend',`<li class="item"><h3 class="item-name">${card.name}</h3><audio controls class="item-mp3">     
        <source src=${card.src} type="audio/mpeg">
      </audio></li>`);
    }else if(typeFile == "webm"){
        container.insertAdjacentHTML('beforeend',`<li class="item"><h3 class="item-name">${card.name}</h3>
        <video class="item-vidoe"  controls="true" preload>
        <source src=${card.src} type="video/mp4">
    </video></li>`);
    }
})}