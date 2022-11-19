/* sub1 페이지 js - sub1.js */

$(()=>{
    let sctop; // 스크롤 위치 이동값

    /////////////////////////// 카드 파괴 변수 ///////////////////////////
    const card = $(".card_house"); // 카드집합체 변수
    const winH = $(window).height(); // 카드파괴 - 원하는 공간의 높이
    const evtfull = $(".mntxt1").offset().top-winH; // 시작 이벤트 넓이 - 실제 스크롤 높이
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