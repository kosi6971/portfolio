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
    // 스크롤 위치 이동값
    let sctop;
    // 구멍 이벤트 좌표
    // 이미지와 credits버튼이 만나는 좌표
    let hlstart = $(".crbtn1").offset().top;
    hlstart -= winH*1.52;
    // 더 빠른 시작을 위해 시작 좌표를 올려준 것이다.
    // 시작 위치만 달라지고 길이는 똑같기 때문에 위치상의 문제는 없다
    // credits버튼 좌표 + 시작 텍스트 margin-top값 = 위치 끝
    let hlend = $(".crbtn1").offset().top+2700;
    hlend -= winH*1.52;
    // 더 빠른 시작을 위해 시작 좌표를 올려준 것이다.
    // 시작 위치만 달라지고 길이는 똑같기 때문에 위치상의 문제는 없다

    console.log("전체 길이 : ", fullpage);

    

    $(window).scroll(function(){
        // 스크롤 위치 이동값 업데이트
        sctop = $(this).scrollTop();
        // console.log("스크롤 위치 : ", sctop);

        // 사람 이미지 위치값
        let flgPosition = (winH*sctop)/fullpage;
        // 스크롤 이동 가능 길이 : 보이는 화면 길이 = 스크롤 위치 이동값 : 이미지 이동값
        // 이미지 이동값 = 보이는 화면 길이 * 스크롤 위치 이동값 / 스크롤 이동 가능 길이
        // 사다리 이미지 위치값
        let ladPosition;

        // 구멍 이미지 위치값
        let hlPosition = (650*(sctop-hlstart)/2700);
        // 움직일 때 실제 화면 넓이 : 움직여지는 화면 넓이 = 스크롤이 움직여지는 길이 : 이미지가 움직이는 길이
        // 이미지가 움직이는 길이 = (움직여지는 화면 넓이*스크롤이 움직여지는 길이)/움직일 때 실제 화면 넓이

        // 사람 이동
        falling.css({top:flgPosition+280+"px"});

        // 사다리 이동
        ladPosition = -flgPosition; 
        ladder.css({top:ladPosition+"px"});

        // 구멍 이동
        if(sctop >= hlstart && sctop <= hlend){
            hole.css({bottom:hlPosition+"px"});
        }
        else{
            // img width down

        }

    });
});