$(()=>{
    // credits창 뜨게 만들기
    $(".crbtn1").click(()=>{
        $(".credits").animate({
            width:"40%"
        }, 500);
    });

    // credits창 사라지게 만들기
    $(".crbtn2").click(()=>{
        $(".credits").animate({
            width:"0"
        }, 500);
    });
});