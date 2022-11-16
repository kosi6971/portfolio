/* sub1 페이지 js - sub1.js */

$(()=>{
    // 글자 변수
    const evttxt = $(".inttxt");
    // 카드집합체 변수
    const card = $(".card_house");
    
    // 카드파괴 - 원하는 공간의 높이
    const winH = $(window).height();
    // 시작 이벤트 넓이 - 실제 스크롤 높이
    const evtfull = $(".mntxt1").offset().top-winH;
    
    // 스크롤 위치 이동값
    let sctop;

    // 전 스크롤 위치 이동값
    let scdown = 0;

    // 투명도 변수
    let opc = 100;
    
    console.log(evtfull);
    
    $(window).scroll(function(){
        sctop = $(this).scrollTop();

        // console.log(winH);
        // console.log(sctop);
        // console.log(evtfull);


        let cardposition = winH*(sctop-winH*1.185)/evtfull;
        
        // 시작 이벤트 카드 임팩트 - 중심점 이동
        if(sctop >= 0 && sctop <= evtfull){
            card.css({top:-cardposition+"px"});
        }
    
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
    });
});