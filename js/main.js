
let categoriesList = document.querySelector('.categories-list');

let goods = document.querySelector('.goods');


let categories = document.querySelectorAll('.categories-list li');

let goodsList = document.querySelectorAll('.goods ul');


let itemsGoods = document.querySelectorAll('.goods li');

let itemsInfo = document.querySelectorAll('.info li');



        categoriesList.addEventListener('click', (e) => {
            for (let i = 0; i < categories.length; i++) {
                if (e.target === categories[i]) {
                    document.querySelector('.goods').classList.add('active');
                    goodsList[i].classList.add('active');

                    for (let j = 0; j < categories.length; j++)
                    if (categories[j] != categories[i]) {
                        goodsList[j].classList.remove('active');
                    };
                };
            };
        });


        goods.addEventListener('click', (e) => {
                for (let i = 0; i < itemsGoods.length; i++) {
                    if (e.target === itemsGoods[i]) {
                        document.querySelector('.info').classList.add('active');
                        itemsInfo[i].classList.add('active');

                        for (let j = 0; j < itemsGoods.length; j++)
                        if (itemsInfo[j] != itemsInfo[i]) {
                            itemsInfo[j].classList.remove('active');
                        };
                    };
                };
        });



        let buyBtn = document.querySelector('.btn-buy')
        buyBtn.addEventListener('click', () => {
                document.querySelector('.alert').classList.remove('d-none');

        let btnInAlert = document.querySelector('.btn-in-alert');
        btnInAlert.addEventListener('click', () => {
            document.querySelector('.alert').classList.add('d-none');
            document.querySelector('.goods').classList.remove('active');
            document.querySelector('.info').classList.remove('active');  
           });
        });


