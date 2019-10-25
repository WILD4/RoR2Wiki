$(document).ready(function(){
    header();
    hover();

})	

function hover(){

    $('.nav li').hover(
        function(){
            $(this).children("ul").css("display","block");
            $(this).children("a").addClass("hover");
        },
        function(){
            $(this).children("ul").css("display","none");
            $(this).children("a").removeClass("hover");
        }
    );

    $('.nav li>ul li').hover(
        function(){
            $(this).addClass("hover");
        },
        function(){
            $(this).removeClass("hover");
        }
    );

}

function header(){

    let nav = $("#nav_id");
    const lis =[
        ["../monster/monster_.html","敌人"],
        ["../challenges/challenges.html","挑战"],
    ]
    for(let i in lis){
        let li = $("<li></li>");
        let a = $("<a></a>").text(lis[i][1]);
        a.attr("href",lis[i][0]);
        nav.append(li);
        li.append(a);
    }
    


    let characters = $("#characters_ul"); //jq
    let enviorments = $("#enviorments_ul");
    let items = $("#items_ul");
    //人物
    const characters_link = [
        ["../characters/Commando.html","指挥官"],
        ["../characters/Mercenary.html","雇佣兵"],
    ];

    for(let i in characters_link){
        let li = document.createElement("li");
        let a = document.createElement("a");
        li.appendChild(a);
        a.style.href = characters_link[i][0];
        a.setAttribute("href",characters_link[i][0]);
        a.innerText = characters_link[i][1];
        characters.append(li);
    }
    //环境
    const enviorments_link = [
        ["#","大草原"],
        ["#","深渊"],
    ];
    for(let i in enviorments_link){
        let li = document.createElement("li");
        let a = document.createElement("a");
        li.appendChild(a);
        a.style.href = enviorments_link[i][0];
        a.setAttribute("href",enviorments_link[i][0]);
        a.innerText = enviorments_link[i][1];
        enviorments.append(li);
    }
    //战利品
    const items_link = [
        ["../items/item_.html","物品"],
        ["#","装备"],
        ["#","战利品"],
    ];
    for(let i in items_link){
        let li = document.createElement("li");
        let a = document.createElement("a");
        li.appendChild(a);
        a.style.href = items_link[i][0];
        a.setAttribute("href",items_link[i][0]);
        a.innerText = items_link[i][1];
        items.append(li);
    }
}

function footer(){
    
}