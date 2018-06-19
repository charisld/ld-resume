// 项目列表
// 卡片翻转效果
var front=document.getElementsByClassName('side-front');
var back=document.getElementsByClassName('side-back');
for(let i=0;i<front.length;i++){
   front[i].onmouseleave=function(){
        front[i].style.transform='rotateY(180deg)';
        back[i].style.transform='rotateY(0deg)';
   }
   back[i].onmouseleave=function(){
        front[i].style.transform='rotateY(0deg)';
        back[i].style.transform='rotateY(180deg)';
   }
}


//返回顶部按钮与左侧边栏导航
var btn=document.getElementById('back-to-top');
var list=document.getElementsByClassName('item');
window.onscroll=function(){scrollchange()};

function scrollchange(){
    var s=document.getElementById('skills').offsetTop-100;
    var p=document.getElementById('projects').offsetTop-100;
    var c=document.getElementById('contact').offsetTop-100;
    var h=document.body.scrollTop||document.documentElement.scrollTop;
    if(s<h&&h<p){
        list[0].style.background="#fff";
        list[1].style.background="#666";
        list[2].style.background="#fff";
        list[3].style.background="#fff";
        btn.style.display="block";  
    }
    else if(p<h&&h<c){ 
        list[0].style.background="#fff";
        list[1].style.background="#fff";
        list[2].style.background="#666";
        list[3].style.background="#fff";
        btn.style.display="block";
        
    }else if(h>c){
        list[0].style.background="#fff";
        list[1].style.background="#fff";
        list[2].style.background="#fff";
        list[3].style.background="#666";
        btn.style.display="block";
        
    }else{
        list[0].style.background="#666";
        list[1].style.background="#fff";
        list[2].style.background="#fff";
        list[3].style.background="#fff";
        btn.style.display="none";
       
    }
}

btn.onclick=function backtop(e){
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({"behavior": "smooth", "top":0});
    }
};

// 添加信息
function addinfo(key,datavalue){
    document.getElementsByClassName(key)[0].innerHTML=datavalue;
}
addinfo('name',data.info.name);
addinfo('job',data.info.job);
addinfo('edu',data.info.edu);
addinfo('gra',data.info.gra);
addinfo('mail',data.info.mail);
addinfo('tel',data.info.tel);
addinfo('git',data.info.github);

addinfo('skill1',data.skills.skill1);
addinfo('skill2',data.skills.skill2);
addinfo('skill3',data.skills.skill3);
addinfo('skill4',data.skills.skill4);
addinfo('skill5',data.skills.skill5);
addinfo('skill6',data.skills.skill6);

// addinfo("proname",data.projects[0].proname);
// addinfo("des",data.projects[0].des);


function addarray(targets,values){
    var targetList=document.getElementsByClassName(targets);
    for(let i=0;i<targetList.length;i++){
        targetList[i].innerHTML=values[i];
    }
}
addarray('proname',data.projects.proname);
addarray('des',data.projects.des);
addarray('pro1-item',data.projects.pro1item);
addarray('pro2-item',data.projects.pro2item);
addarray('pro3-item',data.projects.pro3item);
addarray('pro1-intro',data.projects.pro1intro);
addarray('pro2-intro',data.projects.pro2intro);
addarray('pro3-intro',data.projects.pro3intro);

var linkList=document.getElementsByClassName("linkhref");
for(let i=0;i<linkList.length;i++){
    linkList[i].href=data.projects.address[i];
}

var boxList=document.getElementsByClassName('box');
for(let i=0;i<boxList.length;i++){
    boxList[i].onclick=function(){
        // console.log(boxList[i].offsetLeft);
        
        var tip=document.getElementsByClassName('tip')[0];
        document.getElementById('contact-way').innerHTML=data.contact[i];
        var tipw=tip.offsetWidth;
        var left=boxList[i].offsetLeft+75-tipw/2;
        tip.style.left=left+'px';
        tip.style.opacity='1';
    }
}





