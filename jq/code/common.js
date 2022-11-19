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

    
    /////////////////////////// header 변경 변수 ///////////////////////////
    const top2 = $(".top"); // header 속박스
    let scTop; // 현재 위치값
    let lastSC = 0; // 전 위치값
    /////////////////////////// header 변경 변수 ///////////////////////////


    $(window).scroll(function(){
        scTop = $(this).scrollTop(); // 스크롤 위치값(this는 window)
        // scrollTop() 메서드 : 세로 스크롤 위치값을 return하는 메서드

        
        /////////////////////////// header 변경 ///////////////////////////
        // 스크롤 방향에 따라 클래스를 이용한 위치값 변경
        if(scTop > lastSC) top2.addClass("up");
        else top2.removeClass("up");

        // 위치값 업데이트
        lastSC = scTop;
        /////////////////////////// header 변경 ///////////////////////////

    });

});