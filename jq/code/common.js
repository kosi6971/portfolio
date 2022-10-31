$(()=>{
    // 메뉴창 뜨게 만들기
    $(".mnbtn").click(()=>{
        $(".menu").animate({
            height:"100%"
        }, 500);
    });

    // 메뉴창 사라지게 만들기
    $(".cnbtn").click(()=>{
        $(".menu").animate({
            height:"0"
        }, 500);
    });
    
    // 체크 박스 체크 하나만 되게 만들기
    $(".chkbx").click(function(){
        let on = $(".chknn").is(":checked");

        // 버튼이 false에서 true가 될 때, if가 작동
        // true에서 false가 될 때는 작동이 되지 않으므로
        // 기본 기능인 on/off기능만이 남아 꺼진다 
        if(!$(this).prop("checked"))
        // 클릭된 자신은 true, 나머지는 false
        $(this).prop("checked",true).siblings().prop("checked",false);

        console.log(on);
    });

    // header 변경
    const top2 = $(".top"); // header 속박스
    const top1 = $("#top"); // header 겉박스
    let scTop; // 현재 위치값
    let lastSC = 0; // 전 위치값

    $(window).scroll(function(){
        // 스크롤 위치값(this는 window)
        scTop = $(this).scrollTop();
        // scrollTop() 메서드 : 세로 스크롤 위치값을 return하는 메서드

        console.log(scTop);

        // 겉 박스 css 변경
        if(scTop >= 400) top1.stop().animate({backgroundColor: "black"}, 200);
        else top1.stop().animate({backgroundColor: "rgb(83, 83, 83, 0.562)"},200);
        // stop 메서드 : animate가 반복되면 전에 있는 기록으로 인해 망가지는 것을 방지

        // 스크롤 방향에 따라 클래스를 이용한 위치값 변경
        if(scTop > lastSC) top2.addClass("up");
        else top2.removeClass("up");

        // 위치값 업데이트
        lastSC = scTop;
    });

});