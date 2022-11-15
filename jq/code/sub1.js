/* sub1 페이지 js - sub1.js */

$(()=>{
    // 시작이벤트 글자

    // 스크롤/////////

    const card = $(".card_house");


    // 카드집 파괴
    // 카드파괴 - 실제 스크롤 높이
    const cardfull = $(".mntxt1").offset().top;
    // 카드파괴 - 원하는 공간의 높이
    const cardH = $(window).height();
    // 스크롤 위치 이동값
    let sctop;
    
    console.log(cardfull);
    
    $(window).scroll(function(){
        sctop = $(this).scrollTop();

        console.log(cardH);
        console.log(sctop);
        console.log(cardfull);

        let cardposition = cardH*(sctop-cardH*1.935)/cardfull;
        // 스크롤 이동 가능 길이 : 보이는 화면 길이 = 스크롤 위치 이동값 : 이미지 이동값
        // 이미지 이동값 = 보이는 화면 길이 * 스크롤 위치 이동값 / 스크롤 이동 가능 길이

        // console.log(cardposition);
        if(sctop >= 0 && sctop <= cardH)
        card.css({top:-cardposition+"px"});

    });
});