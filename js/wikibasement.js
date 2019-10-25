

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
        ["../monsters/monsters_.html","敌人"],
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

function bottomTable(list){
    let mainDiv = $(".items-list");
    let table = $("<table style='width:100%; margin-top:1em; border:1px solid #999; font-size:90%; text-align:center;'></table>");
    let tbody = $("<tbody></tbody>");
    let tr1 = $("<tr></tr>");
    let th1 = $('<th style="white-space: nowrap; background-color:#3366CC; padding:0.2em 0.5em;"> <i><a href="/wiki/Risk_of_Rain_2" title="Risk of Rain 2"><font color="gold">Risk of Rain 2</font></a></i></th>');
    let tr2 = $("<tr></tr>");
    let th2 = $('<td style="padding:0.2em 0.5em;"></td>');

    for(let i in list){
        let a = $("<a></a>");
        if(list[i][0] != "")
            a.attr("href",list[i][0]);
        a.text(list[i][1]);
        if(i != 0)
            th2.append(" · ");
        th2.append(a);
    }

    mainDiv.append(table);
    table.append(tbody);
    tbody.append(tr1).append(th1);
    tbody.append(tr2).append(th2);
}