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
});