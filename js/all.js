const country =[
    {
        country:'前鎮區',
        place:'高雄市前鎮區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8d/6f/f1/caption.jpg?w=400&h=400&s=1',
        Name:'前鎮自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'收費參觀',
    },
    {
        country:'鳳山區',
        place:'高雄市鳳山區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8d/6f/f1/caption.jpg?w=400&h=400&s=1',
        Name:'鳳山自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    {
        country:'三民區',
        place:'高雄市三民區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8d/6f/f1/caption.jpg?w=400&h=400&s=1',
        Name:'三民自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    {
        country:'鳥松區',
        place:'高雄市鳥松區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8d/6f/f1/caption.jpg?w=400&h=400&s=1',
        Name:'鳥松自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'收費參觀',
    },
    {
        country:'大寮區',
        place:'高雄市大寮區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8d/6f/f1/caption.jpg?w=400&h=400&s=1',
        Name:'大寮自強夜市',
        time:'每周四 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    {
        country:'小港區',
        place:'高雄市小港區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8d/6f/f1/caption.jpg?w=400&h=400&s=1',
        Name:'小港自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    {
        country:'苓雅區',
        place:'高雄市苓雅區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8d/6f/f1/caption.jpg?w=400&h=400&s=1',
        Name:'苓雅自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    {
        country:'苓雅區',
        place:'高雄市苓雅區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b7/10/70/photo0jpg.jpg?w=400&h=-1&s=1',
        Name:'苓雅自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    {
        country:'苓雅區',
        place:'高雄市苓雅區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/85/06/6e/ferry-service.jpg?w=400&h=400&s=1',
        Name:'苓雅自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    {
        country:'苓雅區',
        place:'高雄市苓雅區自強三路139號',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/7a/a9/5c/caption.jpg?w=400&h=400&s=1',
        Name:'苓雅自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    {
        country:'新興區',
        place:'高雄市苓雅區自強三路139號',
        img:'https://chiyum.github.io/reall_web_1/pic/title.jpg',
        Name:'苓雅自強夜市',
        time:'每周三 17:00~01:00',
        tel:'0800-092-000',
        cost:'免費參觀',
    },
    
];



let conH2 = document.querySelector('#conH2')
let cost = country[0].cost;
let listValue = document.querySelector('#placeId');
listValue.addEventListener('change',listfor,false);
function listfor(e){
    let list = document.querySelector('.list');
    let str = '';
    let len =country.length
    let value = e.target.value;
    let title = ''
    for(let i =0;i<len;i++){
        if(value == country[i].country){
            title ='<h2>'+country[i].country+'</h2>';
            str+='<li><img src="'+country[i].img+'" alt="景點照片" id="imgID"><div class="data"><span id="dataH1">'+country[i].Name+'</span><span id="dataH2">'+country[i].country+'</span><p><img src="./img/icons_clock.png" alt="時鐘">'+country[i].time+'</p><p><img src="./img/icons_pin.png" alt="地標">'+country[i].place+'</p> <p><img src="./img/icons_phone.png" alt="電話">'+country[i].tel+'</p><p class="right"><img src="./img/icons_tag.png" alt="圖標">'+country[i].cost+'</p></div></li>'
        }
    }
    //我透過點擊取得苓雅區這個值，FOR迴圈找到陣列內有等於苓雅區的值後
    //將苓雅區的值套入IF內代碼中
    list.innerHTML= str;
    conH2.innerHTML =title
}

let one = document.querySelector('.countryOne')
let Two = document.querySelector('.countryTwo')
let three = document.querySelector('.countryThree')
let four = document.querySelector('.countryfour')

one.addEventListener('click',hotList,false)
Two.addEventListener('click',hot2List,false)
three.addEventListener('click',hot3List,false)
four.addEventListener('click',hot4List,false)
function hotList(e){
    let list = document.querySelector('.list');
    let str =''
    let title=''
    e.preventDefault();
    if(e.target.nodeName !=='A'){return};
    let len =country.length;
    for(let i=0;i<len;i++){
        if('苓雅區'==country[i].country){
            //IF後IF內的值就只會抓取條件內的物件，藉此來輸出
            str+='<li><img src="'+country[i].img+'" alt="景點照片" id="imgID"><div class="data"><span id="dataH1">'+country[i].Name+'</span><span id="dataH2">'+country[i].country+'</span><p><img src="./img/icons_clock.png" alt="時鐘">'+country[i].time+'</p><p><img src="./img/icons_pin.png" alt="地標">'+country[i].place+'</p> <p><img src="./img/icons_phone.png" alt="電話">'+country[i].tel+'</p><p class="right"><img src="./img/icons_tag.png" alt="圖標">'+country[i].cost+'</p></div></li>'
            title =country[i].country
        }
    }
    list.innerHTML = str;
    conH2.innerHTML =title
    
}

function hot2List(e){
    let list = document.querySelector('.list');
    let str =''
    let title=''
    e.preventDefault();
    if(e.target.nodeName !=='A'){return};
    let len =country.length;
    for(let i=0;i<len;i++){
        if('三民區'==country[i].country){
            //IF後IF內的值就只會抓取條件內的物件，藉此來輸出
            str+='<li><img src="'+country[i].img+'" alt="景點照片" id="imgID"><div class="data"><span id="dataH1">'+country[i].Name+'</span><span id="dataH2">'+country[i].country+'</span><p><img src="./img/icons_clock.png" alt="時鐘">'+country[i].time+'</p><p><img src="./img/icons_pin.png" alt="地標">'+country[i].place+'</p> <p><img src="./img/icons_phone.png" alt="電話">'+country[i].tel+'</p><p class="right"><img src="./img/icons_tag.png" alt="圖標">'+country[i].cost+'</p></div></li>'
            title =country[i].country
        }
    }
    list.innerHTML = str;
    conH2.innerHTML =title
}

function hot3List(e){
    let list = document.querySelector('.list');
    let str =''
    let title=''
    e.preventDefault();
    if(e.target.nodeName !=='A'){return};
    let len =country.length;
    for(let i=0;i<len;i++){
        if('新興區'==country[i].country){
            //IF後IF內的值就只會抓取條件內的物件，藉此來輸出
            str+='<li><img src="'+country[i].img+'" alt="景點照片" id="imgID"><div class="data"><span id="dataH1">'+country[i].Name+'</span><span id="dataH2">'+country[i].country+'</span><p><img src="./img/icons_clock.png" alt="時鐘">'+country[i].time+'</p><p><img src="./img/icons_pin.png" alt="地標">'+country[i].place+'</p> <p><img src="./img/icons_phone.png" alt="電話">'+country[i].tel+'</p><p class="right"><img src="./img/icons_tag.png" alt="圖標">'+country[i].cost+'</p></div></li>'
            title =country[i].country
        }
    }
    list.innerHTML = str;
    conH2.innerHTML =title
}

function hot4List(e){
    let list = document.querySelector('.list');
    let str =''
    let title=''
    e.preventDefault();
    if(e.target.nodeName !=='A'){return};
    let len =country.length;
    for(let i=0;i<len;i++){
        if('小港區'==country[i].country){
            //IF後IF內的值就只會抓取條件內的物件，藉此來輸出
            str+='<li><img src="'+country[i].img+'" alt="景點照片" id="imgID"><div class="data"><span id="dataH1">'+country[i].Name+'</span><span id="dataH2">'+country[i].country+'</span><p><img src="./img/icons_clock.png" alt="時鐘">'+country[i].time+'</p><p><img src="./img/icons_pin.png" alt="地標">'+country[i].place+'</p> <p><img src="./img/icons_phone.png" alt="電話">'+country[i].tel+'</p><p class="right"><img src="./img/icons_tag.png" alt="圖標">'+country[i].cost+'</p></div></li>'
            title =country[i].country
        }
    }
    list.innerHTML = str;
    conH2.innerHTML =title
}

function updateList(e){
    let list = document.querySelector('.list');
    let str =''
    let title=''
    let len =country.length;
    for(let i=0;i<len;i++){
        if('苓雅區'==country[i].country){
            //IF後IF內的值就只會抓取條件內的物件，藉此來輸出
            str+='<li><img src="'+country[i].img+'" alt="景點照片" id="imgID"><div class="data"><span id="dataH1">'+country[i].Name+'</span><span id="dataH2">'+country[i].country+'</span><p><img src="./img/icons_clock.png" alt="時鐘">'+country[i].time+'</p><p><img src="./img/icons_pin.png" alt="地標">'+country[i].place+'</p> <p><img src="./img/icons_phone.png" alt="電話">'+country[i].tel+'</p><p class="right"><img src="./img/icons_tag.png" alt="圖標">'+country[i].cost+'</p></div></li>'
            title =country[i].country
        }
    }
    list.innerHTML = str;
    conH2.innerHTML =title
}

updateList()


let next = document.querySelector('.goto').onclink =function(e){
    e.preventDefault()
    window.history.forward()
}
let back = document.querySelector('.back').onclink = function(e){
    e.preventDefault()
    window.history.back()
}
