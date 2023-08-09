const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box')

buttons.forEach((button) => {
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        const btnfilter = e.target.dataset.filter;
        // console.log(btnfilter)

        boxes.forEach((box) =>{
            if(btnfilter == 'all'){
                box.style.display = 'block';
            }else{
                const boxfilter = box.dataset.item;
                // console.log(boxfilter);
                if(btnfilter == boxfilter){
                    box.style.display = 'block';
                }else{
                    box.style.display = 'none';
                }
            }
        })
    })
})



function modal(){
    let img = boxes[0].childNodes[1];
for (let index = 0; index < img.length; index++) {
        img[index].addEventListener('click', () =>{
        let src = (img.src[index]);
        document.querySelector('.modal-img').src = src;
    })
       }
    }
modal()
const myModalAlternative = new bootstrap.Modal('#gallery-modal')
myModalAlternative.show();




