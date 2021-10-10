//Global Values

var changers_val = 0;
var dis = document.getElementById("dis");
var ddis = document.getElementsByClassName("ddis")[0];

async function init() {
    window.location.href = "#home";
    basic.inisetup();
    basic.contact();
    menu.disapper();
    if (screen.width > 400) {
        var infos = document.getElementsByClassName("info");
        basic.setupinfos(infos);
    }
    await menu.appear("Home");
}
var data = [{
        "head": "Analog Clock",
        "img": "clock.png",
        "p": `HTML analog <a href='https://clockbycne.web.app/'>Clock</a>.`,
        "pp": "Beautiful analog clock.",
        "vlink": "https://instagram.fcok3-1.fna.fbcdn.net/v/t50.2886-16/104995672_2683878871845783_1411281415315535017_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fcok3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=LRQfO_ZWpOMAX9Hocuj&vs=17879808157633252_1023283486&_nc_vs=HBksFQAYJEdGZ2JRZ2FYeThZX19ZZ0pBS2swLWszNDRKVVRia1lMQUFBRhUAAsgBABUAGCRHRHZxUWdhNF80U2x2dkFBQU9nM29EYXBZVklKYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmyMyBueflwj8VAigCQzMsF0Ax3bItDlYEGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXuBwA%3D&_nc_rid=69432ddbd0&oe=5FCD6709&oh=5355366daa27c4e72b321d19c18eac8c",
        "imgs": {
            "length": 0
        }
    },
    {
        "head": "Bingo - Multiplayer",
        "img": "bingo.png",
        "p": `Web Multiplayer Bingo. Uses firebase database to sync values.
                Link to play tha game <a href='https://bingobycne.web.app/'>Bingo.</a>`,
        "pp": "Firebase backend",
        "vlink": "https://instagram.fcok3-1.fna.fbcdn.net/v/t50.2886-16/121820074_124611995816025_1361632516521714132_n.mp4?_nc_ht=instagram.fcok3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ccBSOYKHvOcAX-wNUrH&oe=5FCD8964&oh=c78099c45f4b697193328d0d0d57a293",
        "imgs": {
            "length": 0
        }
    },
    {
        "head": "TicTacToe - Multiplayer",
        "img": "tictactoe.png",
        "p": `Web Multiplayer TicTacToe. Uses firebase database to sync values. 
                Link to play tha game <a href='https://tictactoebycne.web.app/'>Tictactoe</a>.`,
        "pp": "Firebase backend.",
        "vlink": "",
        "imgs": {
            "length": 0,
            "img0": "me.jpg",
            "img1": "bingo.png",
            "img2": "clock.png"
        }
    }
]
var contactdata = [{
        //<div class="cele"><div class="cn __instagram">I</div></div>
        "div": "__mail",
        "font_aws": `<i class="fab fa-envelope fa"></i>`,
        "link": "mailto:gaganlal7171@gmail.com"
    },
    {
        //<div class="cele"><div class="cn __instagram">I</div></div>
        "div": "__instagram",
        "font_aws": `<i class="fab fa-instagram fa"></i>`,
        "link": "https://www.instagram.com/codingneverends/"
    },
    {
        //<div class="cele"><div class="cn __instagram">I</div></div>
        "div": "__github",
        "font_aws": `<i class="fab fa-github fa"></i>`,
        "link": "https://github.com/codingneverends"
    }
]
var basic = {
        inisetup() {
            var eles = document.getElementsByClassName("eles")[0];
            if (!eles) {
                return;
            }
            eles.innerHTML = "";
            for (let i = 0; i < data.length; i++)
                eles.innerHTML +=
                `<div class="ele ${i%2==0?"a":""}">
                    <div class="img">
                        <img src=${data[i].img} alt="image can't be displayed">
                    </div>
                    <div class="info" onclick='basic.show(${i})'>
                        <div class="infobox">
                            <div class="infohead">
                                ${data[i].head}
                            </div>
                            <p>
                                ${data[i].pp}
                            </p>
                        </div>
                    </div>
                </div>`;
        },
        async inject() {
            var ar = [];
            var art = [];
            var injectdata = [
                `Hi,`,
                `I am Gagan Lal.`,
                `Learn to build web things.`,
                `"Intrest is the most powerful weapon in the world.Which will help you to achive your goal."`
            ];
            for (var i = 0; i < 4; i++) {
                ar.push(document.getElementById("mv" + i));
                ar[ar.length - 1].innerHTML = "...";
                if (i == 3) continue;
                art.push(document.getElementById("mv" + i + "1"));
                art.push(document.getElementById("mv" + i + "2"));
                art.push(document.getElementById("mv" + i + "3"));
                for (var j = 1; j < 4; j++) {
                    art[art.length - j].innerHTML = "...";
                }
            }
            for (var i = 0; i < 4; i++) {
                ar[i].innerHTML = "";
                var temphtml = "";
                var ctime = 0;
                var curser = true;
                for (var j = 0; j < injectdata[i].length; j++) {
                    if (i != 3) {
                        art[3 * i].innerHTML = temphtml + injectdata[i][j];
                        art[3 * i + 1].innerHTML = temphtml + injectdata[i][j];
                        art[3 * i + 2].innerHTML = temphtml + injectdata[i][j];
                    }
                    ar[i].innerHTML = temphtml + injectdata[i][j];
                    temphtml = ar[i].innerHTML;
                    if (curser && j < injectdata[i].length - 1) {
                        ar[i].innerHTML = temphtml + "|";
                    }
                    if (i != 3 && j < injectdata[i].length - 1) {
                        art[3 * i].innerHTML = temphtml + "|";
                        art[3 * i + 1].innerHTML = temphtml + "|";
                        art[3 * i + 2].innerHTML = temphtml + "|";
                    }
                    await this.timer(80 - i * 10);
                    ctime = ctime + 80 - i * 10;
                    if (ctime > 100) {
                        ctime = 0;
                        curser = !curser;
                    }
                }
            }
        },
        dis_disapper() {
            dis.style.opacity = 0;
            dis.children[1].innerHTML = "";
            dis.children[0].style.animation = "";
            dis.children[1].style.animation = "";
        },
        setupinfos(infos) {
            for (var i = 0; i < infos.length; i++) {
                this.setupinfo(infos[i]);
            }
        },
        setupinfo(info) {
            info.style.marginTop = info.parentElement.offsetHeight / 2 + "px";
        },
        close() {
            var sbox = document.getElementsByClassName("sbox")[0];
            sbox.style.zIndex = -1;
        },
        show(i) {
            //console.log(i);
            var sbox = document.getElementsByClassName("sbox")[0];
            sbox.style.zIndex = 1;
            sbox.innerHTML =
                `<div class="ssbox" onclick='basic.close()'>
        </div>
        <div class="box">
            <div class="ele m">
                <div class="img">
                    <img src=${data[i].img} alt="image can't be displayed">
                </div>
                <div class="details">                   
                    <div class="infobox">
                        <div class="infohead">
                            ${data[i].head}
                        </div>
                        <p>
                            ${data[i].p}
                        </p>
                    </div>
                </div>
                ${data[i].vlink!=""?`
                <div class="vid">
                    <video src=${data[i].vlink} alt="currently no vedio" controls="true"></video>
                </div>`:""}
                ${data[i].imgs.length==0?"":`
                <div class="pic">
                    <div class="picabs" id="pic_changer">
                        <img src=${data[i].imgs.img0} class="img_changer" alt="no image">
                    </div>
                </div>
                `}
            </div>
        </div>`;
        if(data[i].imgs.length!=0)
            managepic.init(i);
    },
    timer(ms)
    {
        return new Promise(res=>setTimeout(res,ms));
    },
    contact()
    {
        var cbox=document.getElementById("contact");
        cbox.innerHTML="";
        for(var i=0;i<contactdata.length;i++)
        {
            cbox.innerHTML+=`
            <a href=${contactdata[i].link}><div class="cele"><div class="cn">${contactdata[i].font_aws}</div></div></a>
            `;
            var cns=document.getElementsByClassName("cn");
            cns[cns.length-1].classList.add(contactdata[i].div);
        }
        if(screen.width<700 && document.getElementById("line sp"))
        {
            document.getElementById("hl_con").style.zIndex=-20;
            document.getElementById("line sp").style.zIndex=-20;
        }
    }
}

var i_links=
[
    {
        "head":"Contact",
        "link":"#contact__"
    },
    {
        "head":"Mini Projects",
        "link":"#mini_projects"
    },
    {
        "head":"About Me",
        "link":"#about_me"
    },
    {
        "head":"Home",
        "link":"#home"
    }
];

var menu={
    disapper()
    {
        dis.style.zIndex=-10;
        dis.style.opacity=0;
        dis.children[1].innerHTML="";
        dis.children[0].style.animation="";
        dis.children[1].style.animation="";
    },
    async appear(str){
        dis.style.zIndex=10;
        dis.style.opacity=0.8;
        dis.children[1].innerHTML="...";
        dis.children[0].style.animation="anim_dis 3s linear infinite";
        dis.children[1].style.animation="fade_in 1.5s linear";
        ddis.innerHTML="";
        if(str=="Contact")
        {
            var _contact=document.getElementById("hl_con");
            var _sp_line=document.getElementById("line sp");
            _contact.style.animation="";
            _sp_line.style.animation="";
            await basic.timer(10);
            _sp_line.style.opacity=1;
            _sp_line.style.animation="lin_sp 2s linear infinite";
            await basic.timer(2000);
            _sp_line.style.opacity=0;
            _contact.style.opacity=1;
            _contact.style.animation="anim_con 2s linear infinite";
            await basic.timer(2000);
            _contact.style.opacity=0;
        }
        if(str=="Home")
        {
            menu.disapper();
            await basic.inject();
            await menu.appear("nil");
        }
    },
    show(){
        menu.disapper();
        ddis.innerHTML=`<div class="layer" onclick="menu.appear('nil')"></div>`;
        for(var i=0;i<i_links.length;i++)
        {
            ddis.innerHTML+=
                `<div class="dis t">
                    <span></span>
                    <a href=${i_links[i].link} onclick="menu.appear('${i_links[i].head}')" class="i_link t">${i_links[i].head}</a>
                </div>`;
            var mover=document.getElementsByClassName("dis t");
            mover[mover.length-1].style.transform="translateY(-"+i*100+"%)";
        };
    }
}

var managepic={
    init(i)
    {
        var pic_a=document.getElementById("pic_changer");
        var pic=pic_a.parentElement;
        var width=pic.offsetWidth;
        //console.log(width);
        pic.style.height=width+"px";
        pic_a.style.width=width+"px";
        pic_a.style.height=width+"px";
        if(data[i].imgs.length>1)
            managepic.add(i,pic_a);
    },
    add(i,element)
    {
        for(var j=1;j<data[i].imgs.length;j++)
        {
            var tempname="img"+j;
            element.innerHTML+=`<img src=${data[i].imgs[tempname]} class="img_changer" alt="no image">`;
        }
        element.innerHTML+=`
            <div class="pandn next">&gt;</div>
            <div class="pandn pre">&lt;</div>
        `;
        var pandn=document.getElementsByClassName("pandn");
        pandn[0].addEventListener("click",()=>{managepic.next(i,true);});
        pandn[1].addEventListener("click",()=>{managepic.next(i,false);});
        var changers=document.getElementsByClassName("img_changer");
        for(var j=1;j<changers.length;j++)
        {
            changers[j].style.transform="translateX(100%)";
        }
    },
    async next(i,b__l)
    {
        var changers=document.getElementsByClassName("img_changer");
        var curval=changers_val;
        if((b__l && curval==data[i].imgs.length-1) || (!b__l && curval==0))
            {
                await managepic.special_next(i,b__l,changers,curval);
                return;
            }
        if(b__l)
        {
            changers[curval].style.transform="translateX(-100%)";
            changers[curval+1].style.transform="translateX(0%)";
            curval++;
        }
        else
        {
            changers[curval].style.transform="translateX(100%)";
            changers[curval-1].style.transform="translateX(0%)";
            curval--;
        }
        changers_val=curval;
    },
    async special_next(i,b__l)
    {
        do
        {
            await managepic.next(i,!b__l);
            await basic.timer(500);
        }
        while(changers_val!=0 && changers_val!=data[i].imgs.length-1);
    }
}

if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: "CodingNeverEnds",
        artist: "Gagan Lal",
        album: "Portfolio",
        artwork: 
            [
                { 
                    src: 'cne_.png', sizes: '500x500', type: 'image/png' 
                }
            ]
    });
}