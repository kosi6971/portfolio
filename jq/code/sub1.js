/* sub1 페이지 js - sub1.js */

$(()=>{
    let sctop; // 스크롤 위치 이동값

    /////////////////////////// 카드 파괴 변수 ///////////////////////////
    const card = $(".card_house"); // 카드집합체 변수
    const winH = $(window).height(); // 카드파괴 - 원하는 공간의 높이
    const evtfull = $(".txt1").offset().top - winH; // 시작 이벤트 넓이 - 실제 스크롤 높이
    const explosion = [
        [
            "translateZ(246px) translateX(124px)",
            "translateZ(246px) translateX(-124px)",
            "rotateY(90deg) translateZ(246px) translateX(-124px)",
            "rotateY(90deg) translateZ(246px) translateX(124px)",
            "rotateY(180deg) translateZ(246px) translateX(-124px)",
            "rotateY(180deg) translateZ(246px) translateX(124px)",
            "rotateY(-90deg) translateZ(246px) translateX(124px)",
            "rotateY(-90deg) translateZ(246px) translateX(-124px)",
            "rotateY(-90deg) rotateX(40deg) translateZ(316px) translateY(-180px) translateX(-125px)",
            "rotateY(-90deg) rotateX(40deg) translateZ(316px) translateY(-180px) translateX(125px)",
            "rotateY(90deg) rotateX(40deg) translateZ(316px) translateY(-180px) translateX(-125px)",
            "rotateY(90deg) rotateX(40deg) translateZ(316px) translateY(-180px) translateX(125px)"
        ],
        [
            "rotateY(12deg) rotateX(354deg) translateZ(312px) translateY(-100px) translateX(131px)",
            "rotateY(328deg) rotateX(7deg) translateZ(231px) translateY(7px) translateX(37px)",
            "rotateY(93deg) rotateX(327deg) translateZ(189px) translateY(-228px) translateX(-148px)",
            "rotateY(100deg) rotateX(337deg) translateZ(220px) translateY(-89px) translateX(92px)",
            "rotateY(192deg) rotateX(345deg) translateZ(250px) translateY(-57px) translateX(-123px)",
            "rotateY(177deg) rotateX(333deg) translateZ(289px) translateY(-90px) translateX(127px)",
            "rotateY(-86deg) rotateX(337deg) translateZ(263px) translateY(-101px) translateX(17px)",
            "rotateY(-108deg) rotateX(350deg) translateZ(333px) translateY(-35px) translateX(-117px)",
            "rotateY(-120deg) rotateX(35deg) translateZ(310px) translateY(-160px) translateX(-55px)",
            "rotateY(-70deg) rotateX(25deg) translateZ(285px) translateY(-206px) translateX(2px)",
            "rotateY(105deg) rotateX(40deg) translateZ(360px) translateY(-163px) translateX(-125px)",
            "rotateY(137deg) rotateX(33deg) translateZ(375px) translateY(-183px) translateX(-60px)"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "rotateY(-131deg) rotateX(32deg) translateZ(395px) translateY(-257px) translateX(-4px)",
            "rotateY(-38deg) rotateX(38deg) translateZ(458px) translateY(-180px) translateX(9px)",
            "rotateY(71deg) rotateX(44deg) translateZ(510px) translateY(-130px) translateX(-94px)",
            "rotateY(153deg) rotateX(33deg) translateZ(403px) translateY(-246px) translateX(-46px)"
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ],
        [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ]
    ];
    /////////////////////////// 카드 파괴 변수 ///////////////////////////


    /////////////////////////// 굴자 이벤트 변수 ///////////////////////////
    const evttxt = $(".inttxt"); // 글자 변수
    let scdown = 0; // 전 스크롤 위치 이동값
    let opc = 100; // 투명도 변수
    /////////////////////////// 굴자 이벤트 변수 ///////////////////////////


    /////////////////////////// header 변경 변수 ///////////////////////////
    const top1 = $("#top"); // header 겉박스
    const mnbtn = $(".mnbtn div");
    /////////////////////////// header 변경 변수 ///////////////////////////

    
    $(window).scroll(function(){

        sctop = $(this).scrollTop();

        // console.log(sctop);
        
        /////////////////////////// header 변경 ///////////////////////////
        // 조정 예정 - 아직 페이지 완성 전이라 위치값을 구하기 힘들다
        // 겉 박스 css 변경
        if(sctop<= 1300){
            top1.stop().animate({
                borderBottom:"0",
                backgroundColor: "rgba(83, 83, 83, 0)",
                color:"white"
            }, 200);
            mnbtn.stop().animate({backgroundColor:"white"}, 200);
        }
        else if(sctop>= 6800){
            top1.stop().animate({
                backgroundColor: "black",
                color:"white"
            }, 200);
            mnbtn.stop().animate({backgroundColor:"white"}, 200);
        }
        else{
            top1.stop().css({borderBottom:"1px solid black"}).animate({
                color:"black",
                backgroundColor: "rgba(105, 105, 105, 0.5)"
            },200);
            mnbtn.stop().animate({backgroundColor:"black"}, 200);
        }
        // stop 메서드 : animate가 반복되면 전에 있는 기록으로 인해 망가지는 것을 방지
        /////////////////////////// header 변경 ///////////////////////////


        /////////////////////////// 카드 파괴 ///////////////////////////
        let cardposition = winH*(sctop-winH*1.185)/evtfull;
        
        // 시작 이벤트 카드 임팩트 - 중심점 이동
        if(sctop >= 0 && sctop <= evtfull){
            card.css({top:-cardposition+"px"});
        }

        // 시작 이벤트 카드 임팩트 - 폭발
        if(sctop <=  0){
            let num = 0;
            for (const i of explosion[0]) {
                card.children(`div:eq(${num})`).stop().css({
                    transform:i
                });
                num++;
            }
        }
        else if(sctop > 0 && sctop <= evtfull/15+2){
            let num = 0;
            for (const i of explosion[1]) {
                card.children(`div:eq(${num})`).stop().css({
                    transition:"1.31s",
                    transform:i
                });
                num++;
            }
        }
        else if(sctop > evtfull/15*2 && sctop <= evtfull/15*3+2){
            let num = 0;
            for (const i of explosion[2]) {
                card.children(`div:eq(${num})`).stop().css({
                    transform:i
                });
                num++;
            }
        }
        // else if(sctop > evtfull/15*2 && sctop <= evtfull/15*3+2){}
        // else if(sctop > evtfull/15*3 && sctop <= evtfull/15*4+2){}
        // else if(sctop > evtfull/15*4 && sctop <= evtfull/15*5+2){}
        // else if(sctop > evtfull/15*5 && sctop <= evtfull/15*6+2){}
        // else if(sctop > evtfull/15*6 && sctop <= evtfull/15*7+2){}
        // else if(sctop > evtfull/15*7 && sctop <= evtfull/15*8+2){}
        // else if(sctop > evtfull/15*8 && sctop <= evtfull/15*9+2){}
        // else if(sctop > evtfull/15*9 && sctop <= evtfull/15*10+2){}
        // else if(sctop > evtfull/15*10 && sctop <= evtfull/15*11+2){}
        // else if(sctop > evtfull/15*11 && sctop <= evtfull/15*12+2){}
        // else if(sctop > evtfull/15*12 && sctop <= evtfull/15*13+2){}
        // else if(sctop > evtfull/15*13 && sctop <= evtfull/15*14+2){}


        /////////////////////////// 카드 파괴 ///////////////////////////

        /////////////////////////// 굴자 이벤트 ///////////////////////////
        let txtposition = winH*(sctop-winH*1.2956)/evtfull;

        // 시작 이벤트 글자 임팩트 - 중심점 이동
        if(sctop >= evtfull/2 && sctop <= evtfull){
            evttxt.css({top:-txtposition+"px"});

            // 투명도 조절
            if(scdown > sctop && opc < 100){ // 스크롤이 올라갈 경우
                opc++;
            }
            else if(scdown < sctop && opc > 0){ // 스크롤이 내려갈 경우
                opc--;
            }
        }
        // 투명도 조절 - 초기화
        else if(sctop <= evtfull/2){
            opc = 100;
        }
        else{
            opc = 0;
        }
        
        evttxt.css({opacity:opc+"%"});

        scdown = sctop;
        /////////////////////////// 굴자 이벤트 ///////////////////////////
    });
});