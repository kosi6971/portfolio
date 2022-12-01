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
            "rotateY(8deg) rotateX(340deg) translateZ(327px) translateY(-269px) translateX(183px)",
            "rotateY(311deg) rotateX(37deg) translateZ(265px) translateY(104px) translateX(82px)",
            "rotateY(115deg) rotateX(327deg) translateZ(227px) translateY(-377px) translateX(-437px)",
            "rotateY(135deg) rotateX(312deg) translateZ(166px) translateY(-229px) translateX(23px)",
            "rotateY(241deg) rotateX(345deg) translateZ(223px) translateY(-152px) translateX(-421px)",
            "rotateY(212deg) rotateX(307deg) translateZ(287px) translateY(-325px) translateX(-102px)",
            "rotateY(-101deg) rotateX(321deg) translateZ(268px) translateY(-222px) translateX(122px)",
            "rotateY(-105deg) rotateX(372deg) translateZ(279px) translateY(160px) translateX(-101px)",
            "rotateY(-120deg) rotateX(13deg) translateZ(468px) translateY(-116px) translateX(-94px)",
            "rotateY(-38deg) rotateX(38deg) translateZ(458px) translateY(-180px) translateX(9px)",
            "rotateY(71deg) rotateX(44deg) translateZ(510px) translateY(-130px) translateX(-94px)",
            "rotateY(153deg) rotateX(33deg) translateZ(403px) translateY(-246px) translateX(-46px)"
        ],
        [
            "rotateY(23deg) rotateX(336deg) translateZ(410px) translateY(-253px) translateX(137px)",
            "rotateY(304deg) rotateX(44deg) translateZ(238px) translateY(236px) translateX(43px)",
            "rotateY(107deg) rotateX(314deg) translateZ(248px) translateY(-506px) translateX(-433px)",
            "rotateY(140deg) rotateX(297deg) translateZ(218px) translateY(-280px) translateX(47px)",
            "rotateY(253deg) rotateX(325deg) translateZ(209px) translateY(-82px) translateX(-596px)",
            "rotateY(226deg) rotateX(297deg) translateZ(435px) translateY(-402px) translateX(-207px)",
            "rotateY(-114deg) rotateX(301deg) translateZ(329px) translateY(-314px) translateX(93px)",
            "rotateY(-102deg) rotateX(389deg) translateZ(230px) translateY(415px) translateX(-219px)",
            "rotateY(-130deg) rotateX(33deg) translateZ(478px) translateY(142px) translateX(-94px)",
            "rotateY(-24deg) rotateX(46deg) translateZ(550px) translateY(-79px) translateX(-36px)",
            "rotateY(47deg) rotateX(48deg) translateZ(585px) translateY(-40px) translateX(-61px)",
            "rotateY(169deg) rotateX(29deg) translateZ(500px) translateY(-188px) translateX(-95px)"
        ],
        [
            "rotateY(35deg) rotateX(329deg) translateZ(468px) translateY(-397px) translateX(111px)",
            "rotateY(320deg) rotateX(55deg) translateZ(221px) translateY(302px) translateX(67px)",
            "rotateY(116deg) rotateX(303deg) translateZ(197px) translateY(-568px) translateX(-431px)",
            "rotateY(162deg) rotateX(288deg) translateZ(281px) translateY(-315px) translateX(15px)",
            "rotateY(245deg) rotateX(374deg) translateZ(201px) translateY(153px) translateX(-596px)",
            "rotateY(219deg) rotateX(286deg) translateZ(337px) translateY(-427px) translateX(-162px)",
            "rotateY(-94deg) rotateX(290deg) translateZ(384px) translateY(-387px) translateX(53px)",
            "rotateY(-94deg) rotateX(399deg) translateZ(152px) translateY(505px) translateX(-219px)",
            "rotateY(-146deg) rotateX(49deg) translateZ(363px) translateY(252px) translateX(-56px)",
            "rotateY(-63deg) rotateX(68deg) translateZ(224px) translateY(291px) translateX(-129px)",
            "rotateY(63deg) rotateX(86deg) translateZ(351px) translateY(214px) translateX(-61px)",
            "rotateY(186deg) rotateX(53deg) translateZ(433px) translateY(244px) translateX(-137px)"
        ],
        [
            "rotateY(44deg) rotateX(295deg) translateZ(182px) translateY(-686px) translateX(23px)",
            "rotateY(341deg) rotateX(71deg) translateZ(-38px) translateY(347px) translateX(9px)",
            "rotateY(117deg) rotateX(274deg) translateZ(15px) translateY(-525px) translateX(-392px)",
            "rotateY(162deg) rotateX(263deg) translateZ(227px) translateY(-471px) translateX(15px)",
            "rotateY(263deg) rotateX(414deg) translateZ(-141px) translateY(95px) translateX(-671px)",
            "rotateY(223deg) rotateX(266deg) translateZ(316px) translateY(-662px) translateX(-227px)",
            "rotateY(-78deg) rotateX(265deg) translateZ(264px) translateY(-429px) translateX(14px)",
            "rotateY(-97deg) rotateX(421deg) translateZ(-71px) translateY(488px) translateX(-245px)",
            "rotateY(-144deg) rotateX(70deg) translateZ(131px) translateY(320px) translateX(-25px)",
            "rotateY(-54deg) rotateX(92deg) translateZ(53px) translateY(333px) translateX(-147px)",
            "rotateY(90deg) rotateX(119deg) translateZ(110px) translateY(314px) translateX(-194px)",
	        "rotateY(190deg) rotateX(71deg) translateZ(146px) translateY(563px) translateX(-55px)"
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
        else if(sctop > 0 && sctop <= evtfull/15+1){
            let num = 0;
            for (const i of explosion[1]) {
                card.children(`div:eq(${num})`).stop().css({
                    transition:"0.9s",
                    transform:i
                });
                num++;
            }
        }
        else if(sctop > evtfull/15 && sctop <= evtfull/15*3+1){
            let num = 0;
            for (const i of explosion[2]) {
                card.children(`div:eq(${num})`).stop().css({
                    transform:i
                });
                num++;
            }
        }
        else if(sctop > evtfull/15*3 && sctop <= evtfull/15*5+1){
            let num = 0;
            for (const i of explosion[3]) {
                card.children(`div:eq(${num})`).stop().css({
                    transform:i
                });
                num++;
            }
        }
        else if(sctop > evtfull/15*5 && sctop <= evtfull/15*7+1){
            let num = 0;
            for (const i of explosion[4]) {
                card.children(`div:eq(${num})`).stop().css({
                    transform:i
                });
                num++;
            }
        }
        else if(sctop > evtfull/15*7 && sctop <= evtfull/15*9+1){
            let num = 0;
            for (const i of explosion[5]) {
                card.children(`div:eq(${num})`).stop().css({
                    transform:i
                });
                num++;
            }
        }
        // else if(sctop > evtfull/15*9 && sctop <= evtfull/15*11+1){}
        // else if(sctop > evtfull/15*11 && sctop <= evtfull/15*13+1){}


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