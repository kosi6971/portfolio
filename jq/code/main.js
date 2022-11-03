$(()=>{
    // credits창 뜨게 만들기 //
    $(".crbtn1").click(()=>{
        $(".credits").animate({
            width:"40%"
        }, 400);
    });

    // credits창 사라지게 만들기 //
    $(".crbtn2").click(()=>{
        $(".credits").animate({
            width:"0"
        }, 500);
    });

    // 스크롤 시작 애니메이션 //
    // 보이는 화면 길이
    const winH = $(window).height();
    // 스크롤 이동 가능 길이 = 전체 문서 길이 - 스크롤 길이(보이는 화면 길이)
    const fullpage = $(document).height()-winH;
    // 사람 이미지
    const falling = $(".falling");
    // 구멍 이미지
    const hole = $(".hole");
    // 사다리 이미지
    const ladder = $(".ladder");
    // 시작 이벤트 이미지
    const img = $(".event img");
    // 스크롤 위치 이동값
    let sctop;

    console.log("전체 길이 : ", fullpage);

    $(window).scroll(function(){
        // 스크롤 위치 이동값 업데이트
        sctop = $(this).scrollTop();
        console.log("스크롤 위치 : ", sctop);

        // 사람 이미지 위치값
        let flgPosition = (winH*sctop)/fullpage;
        // 스크롤 이동 가능 길이 : 보이는 화면 길이 = 스크롤 위치 이동값 : 이미지 이동값
        // 이미지 이동값 = 보이는 화면 길이 * 스크롤 위치 이동값 / 스크롤 이동 가능 길이
        // 사다리 이미지 위치값
        let ladPosition = (winH*sctop)/fullpage;

        console.log(flgPosition);

        // 사람 이동
        falling.css({top:flgPosition+280+"px"});

        // 사다리
        ladPosition = -ladPosition;
        ladder.css({top:ladPosition+"px"});

        if(flgPosition >= 190){
            hole.animate({top:"579px"}, 1000);
        }
        else if(flgPosition >= 500){
            console.log("!!!!!");
            img.stop().animate({display:"none"},500);
        }

    });
});