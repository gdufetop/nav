window.addEventListener('load',()=>{
    document.querySelector('#toggle').addEventListener('click',()=>{
        console.log('toggle');
        const aside=document.querySelector('aside');
        const taxonomy=document.querySelectorAll('.taxonomy');
        const text=aside.clientWidth > 48;
        const nav=document.querySelector('.nav');

        // const hide=aside.;
        if(window.matchMedia('(min-width: 768px)').matches){
            nav.classList.remove('hidden');
            if(text){
                aside.classList.add('collapse');
                taxonomy.forEach(t=>{
                    t.style.display='none';
                });
            }else{
                aside.classList.remove('collapse');
                aside.classList.add('expand');
                taxonomy.forEach(t=>{
                    t.style.display='inline-block';
                });
            }
        }else{
            aside.classList.remove('collapse');
            taxonomy.forEach(t=>{
                t.style.display='inline-block';
            });
            if(nav.classList.contains('hidden')){
                nav.classList.remove('hidden');
            }else{
                nav.classList.add('hidden');
            }
        }

    });

});
