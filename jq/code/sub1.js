/* sub1 페이지 js - sub1.js */

$(()=>{
    let sctop; // 스크롤 위치 이동값

    /////////////////////////// 카드 파괴 변수 ///////////////////////////
    const card = $(".card_house"); // 카드집합체 변수
    const winH = $(window).height(); // 카드파괴 - 원하는 공간의 높이
    const evtfull = $(".txt1").offset().top - winH; // 시작 이벤트 넓이 - 실제 스크롤 높이
    // 카드 위치값
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
            "rotateY(45deg) rotateX(281deg) translateZ(139px) translateY(-675px) translateX(70px)",
            "rotateY(352deg) rotateX(58deg) translateZ(-72px) translateY(419px) translateX(-10px)",
            "rotateY(98deg) rotateX(250deg) translateZ(165px) translateY(-484px) translateX(126px)",
            "rotateY(185deg) rotateX(244deg) translateZ(193px) translateY(-718px) translateX(75px)",
            "rotateY(266deg) rotateX(444deg) translateZ(-280px) translateY(-104px) translateX(-602px)",
            "rotateY(237deg) rotateX(244deg) translateZ(213px) translateY(-1024px) translateX(-360px)",
            "rotateY(-75deg) rotateX(242deg) translateZ(140px) translateY(-539px) translateX(-33px)",
            "rotateY(-97deg) rotateX(438deg) translateZ(-380px) translateY(722px) translateX(-280px)",
            "rotateY(-130deg) rotateX(88deg) translateZ(-192px) translateY(607px) translateX(-25px)",
            "rotateY(-20deg) rotateX(119deg) translateZ(-96px) translateY(264px) translateX(-93px)",
            "rotateY(108deg) rotateX(126deg) translateZ(16px) translateY(359px) translateX(-274px)",
            "rotateY(195deg) rotateX(87deg) translateZ(-146px) translateY(719px) translateX(-162px)"
        ],
        [
            "rotateY(49deg) rotateX(256deg) translateZ(-105px) translateY(-793px) translateX(91px)",
            "rotateY(356deg) rotateX(44deg) translateZ(59px) translateY(489px) translateX(-74px)",
            "rotateY(106deg) rotateX(217deg) translateZ(-65px) translateY(-680px) translateX(174px)",
            "rotateY(187deg) rotateX(213deg) translateZ(-270px) translateY(-1120px) translateX(141px)",
            "rotateY(270deg) rotateX(486deg) translateZ(-272px) translateY(-467px) translateX(-629px)",
            "rotateY(240deg) rotateX(220deg) translateZ(-154px) translateY(-1111px) translateX(-375px)",
            "rotateY(-60deg) rotateX(215deg) translateZ(-64px) translateY(-567px) translateX(-7px)",
            "rotateY(-96deg) rotateX(459deg) translateZ(-907px) translateY(819px) translateX(-388px)",
            "rotateY(-117deg) rotateX(101deg) translateZ(-546px) translateY(731px) translateX(-115px)",
            "rotateY(-14deg) rotateX(129deg) translateZ(-208px) translateY(367px) translateX(-57px)",
            "rotateY(115deg) rotateX(141deg) translateZ(-239px) translateY(377px) translateX(-274px)",
            "rotateY(195deg) rotateX(104deg) translateZ(-486px) translateY(700px) translateX(-119px)"
        ],
        [
            "rotateY(60deg) rotateX(236deg) translateZ(-42px) translateY(-687px) translateX(87px)",
            "rotateY(334deg) rotateX(27deg) translateZ(160px) translateY(640px) translateX(32px)",
            "rotateY(89deg) rotateX(209deg) translateZ(-97px) translateY(-674px) translateX(222px)",
            "rotateY(182deg) rotateX(196deg) translateZ(-615px) translateY(-1161px) translateX(211px)",
            "rotateY(285deg) rotateX(510deg) translateZ(20px) translateY(-753px) translateX(-543px)",
            "rotateY(272deg) rotateX(198deg) translateZ(-241px) translateY(-1125px) translateX(-872px)",
            "rotateY(-56deg) rotateX(197deg) translateZ(-276px) translateY(-653px) translateX(-7px)",
            "rotateY(-97deg) rotateX(475deg) translateZ(-1259px) translateY(537px) translateX(-369px)",
            "rotateY(-104deg) rotateX(126deg) translateZ(-1120px) translateY(532px) translateX(-244px)",
            "rotateY(-27deg) rotateX(145deg) translateZ(-409px) translateY(306px) translateX(175px)",
            "rotateY(119deg) rotateX(158deg) translateZ(-418px) translateY(173px) translateX(-274px)",
            "rotateY(201deg) rotateX(98deg) translateZ(-514px) translateY(750px) translateX(-309px)"
        ],
        [
            "rotateY(75deg) rotateX(180deg) translateZ(-539px) translateY(-749px) translateX(214px)",
            "rotateY(323deg) rotateX(5deg) translateZ(520px) translateY(732px) translateX(85px)",
            "rotateY(46deg) rotateX(171deg) translateZ(-225px) translateY(-730px) translateX(522px)",
            "rotateY(191deg) rotateX(141deg) translateZ(-1497px) translateY(-316px) translateX(-141px)",
            "rotateY(308deg) rotateX(529deg) translateZ(459px) translateY(-1072px) translateX(-569px)",
            "rotateY(288deg) rotateX(188deg) translateZ(-42px) translateY(-1236px) translateX(-1260px)",
            "rotateY(-75deg) rotateX(162deg) translateZ(-686px) translateY(-496px) translateX(228px)",
            "rotateY(-124deg) rotateX(501deg) translateZ(-1728px) translateY(-160px) translateX(170px)",
            "rotateY(-80deg) rotateX(146deg) translateZ(-1317px) translateY(-113px) translateX(-569px)",
            "rotateY(6deg) rotateX(159deg) translateZ(-716px) translateY(103px) translateX(-148px)",
            "rotateY(99deg) rotateX(191deg) translateZ(-604px) translateY(-388px) translateX(104px)",
            "rotateY(213deg) rotateX(133deg) translateZ(-698px) translateY(93px) translateX(-588px)"
        ],
        [
            "rotateY(157deg) rotateX(190deg) translateZ(-433px) translateY(-972px) translateX(-453px)",
            "rotateY(278deg) rotateX(18deg) translateZ(146px) translateY(851px) translateX(579px)",
            "rotateY(19deg) rotateX(197deg) translateZ(769px) translateY(-866px) translateX(574px)",
            "rotateY(257deg) rotateX(137deg) translateZ(-1604px) translateY(-690px) translateX(-1269px)",
            "rotateY(364deg) rotateX(548deg) translateZ(1623px) translateY(-1112px) translateX(-234px)",
            "rotateY(321deg) rotateX(198deg) translateZ(1177px) translateY(-1279px) translateX(-1421px)",
            "rotateY(-115deg) rotateX(144deg) translateZ(-1124px) translateY(-559px) translateX(520px)",
            "rotateY(-152deg) rotateX(546deg) translateZ(-1295px) translateY(-1858px) translateX(1066px)",
            "rotateY(-68deg) rotateX(183deg) translateZ(-906px) translateY(-938px) translateX(-482px)",
            "rotateY(18deg) rotateX(193deg) translateZ(-939px) translateY(-448px) translateX(-347px)",
            "rotateY(99deg) rotateX(217deg) translateZ(-118px) translateY(-914px) translateX(603px)",
            "rotateY(226deg) rotateX(181deg) translateZ(-689px) translateY(-847px) translateX(-833px)"
        ],
        [
            "rotateY(197deg) rotateX(166deg) translateZ(-454px) translateY(-1081px) translateX(-1595px)",
            "rotateY(241deg) rotateX(4deg) translateZ(-294px) translateY(1052px) translateX(1872px)",
            "rotateY(33deg) rotateX(205deg) translateZ(2314px) translateY(-1191px) translateX(1335px)",
            "rotateY(272deg) rotateX(127deg) translateZ(-1643px) translateY(-1497px) translateX(-1913px)",
            "rotateY(381deg) rotateX(552deg) translateZ(2574px) translateY(-1544px) translateX(908px)",
            "rotateY(354deg) rotateX(206deg) translateZ(3469px) translateY(-1104px) translateX(-858px)",
            "rotateY(-142deg) rotateX(138deg) translateZ(-1560px) translateY(-563px) translateX(1639px)",
            "rotateY(-66deg) rotateX(549deg) translateZ(-1556px) translateY(-1804px) translateX(326px)",
            "rotateY(-57deg) rotateX(174deg) translateZ(-1895px) translateY(-1676px) translateX(-1375px)",
            "rotateY(36deg) rotateX(213deg) translateZ(-1889px) translateY(-1456px) translateX(-1267px) ",
            "rotateY(79deg) rotateX(226deg) translateZ(-204px) translateY(-1732px) translateX(1223px)",
            "rotateY(209deg) rotateX(198deg) translateZ(1647px) translateY(432px) translateX(-2150px)"
        ]
    ];
    const opa =[0,1,1,0,1,1,0,0,0,1,1,0]; // 투명도 규칙
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
        // 카드 이동 규칙
        let transNum = i=>{
            if(i == 1 || i ==2 ) i = i-1;
            else if(i == 3) i = i;
            else i = 2*i-3;

            return i;
        }

        // 카드 이동
        // 초기화
        if(sctop <=  0){
            let num = 0;
            for (let i of explosion[0]) {
                card.children(`div:eq(${num})`).stop().css({
                    transform:i
                });
                num++;
            }
        }
        // 규칙
        for(let i=1 ; i < explosion.length ; i++){
            if(sctop > evtfull*transNum(i)/15 && sctop <= evtfull*(2*i-1)/15+1){
                let num = 0;
                for (let j of explosion[i]) {
                    card.children(`div:eq(${num})`).stop().css({
                        transform:j
                    });
                    // 투명도
                    if(i == explosion.length-3){
                        card.find("div>div").css({opacity:"1"})
                    }
                    else if(i == explosion.length-2){
                        card.find("div>div").css({opacity:".5"})
                        // 자연스러운 투명도를 위한 규칙
                        for (let j = 0; j < opa.length; j++) {
                            card.children(`div:eq(${j})`).children(`div:eq(${opa[j]})`).css({opacity:"0",transition: ".9s"})
                        }
                    }
                    else if(i == explosion.length-1){
                        card.find("div>div").css({opacity:"0"})
                    }
                    num++;
                }
            }
        }

        

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