$(document).ready(function() {    
    //좌측메뉴 
    $(".menu-full").click(function() {            
        $("#lnb-full").toggleClass("lnb-list-full");
        $(this).toggleClass("on");
    });

    $(".btn-display").click(function() {            
        $(this).toggleClass("btn-display-none");
        $(".cm-tab-cont").toggleClass("dis-none");
    });

    $(".btn-box > .tool-txt .tool-icon").click(function() {        
        var btnBox = $(this).parents(".btn-box");       
        var toolMore = $(btnBox).children(".tool-more");   
        $(".tool-more.on").removeClass("on"); 
        $(toolMore).addClass("on");
        
    });


    // 레이어팝업
    // jQuery 환경에서만 작동할 수 있게 처리
    if (typeof jQuery === "undefined") throw new Error("Modal requires jQuery.");

    // 레이어 팝업 열기 버튼 클릭 시 팝업 보이기
    $(".open-lp").on("click", function() {
        var op = $(this);
        var lp = $("#" + $(this).attr("aria-controls"));
        var lpObj = lp.children(".layer-pop-inner");
        var lpObjClose = lp.find(".layer-pop-close");
        var lpObjTabbable = lpObj.find("a, button, input:not([type='hidden']), select, iframe, textarea, [href], [tabindex]:not([tabindex='-1'])");
        var lpObjTabbableFirst = lpObjTabbable && lpObjTabbable.first();
        var lpObjTabbableLast = lpObjTabbable && lpObjTabbable.last();
        var lpOuterObjHidden = $("#skip_nav, #wrap, #header, #main, #footer"); // 레이어 바깥 영역의 요소
        var all = $("#header, #footer").add(lp);
        var tabDisable;
        var nowScrollPos = $(window).scrollTop();
        
        $("body").css("top", - nowScrollPos).addClass("scroll-off").on("scroll touchmove mousewheel", function(event){
            event.preventDefault(); // iOS 레이어 열린 상태에서 body 스크롤되는 문제 방지
        });

        function lpClose() { // 레이어 닫기 함수
            $("body").removeClass("scroll-off").css("top", "").off("scroll touchmove mousewheel");
            $(window).scrollTop(nowScrollPos); // 레이어 닫은 후 화면 최상단으로 이동 방지
            if (tabDisable === true) lpObj.attr("tabindex", "-1");
            all.removeClass("on");
            lpOuterObjHidden.removeAttr("aria-hidden");
            op.focus(); // 레이어 닫은 후 원래 있던 곳으로 초점 이동
            $(document).off("keydown.lp_keydown");
        }

        $(this).blur();
        all.addClass("on");        
        lpOuterObjHidden.attr("aria-hidden", "true"); // 레이어 바깥 영역을 스크린리더가 읽지 않게
        lpObjTabbable.length ? lpObjTabbableFirst.focus().on("keydown", function(event) { 
            // 레이어 열리자마자 초점 받을 수 있는 첫번째 요소로 초점 이동
            if (event.shiftKey && (event.keyCode || event.which) === 9) {
                // Shift + Tab키 : 초점 받을 수 있는 첫번째 요소에서 마지막 요소로 초점 이동
                event.preventDefault();
                lpObjTabbableLast.focus();
            }
        }) : lpObj.attr("tabindex", "0").focus().on("keydown", function(event){
            tabDisable = true;
            if ((event.keyCode || event.which) === 9) event.preventDefault();
            // Tab키 / Shift + Tab키 : 초점 받을 수 있는 요소가 없을 경우 레이어 밖으로 초점 이동 안되게
        });

        lpObjTabbableLast.on("keydown", function(event) {
            if (!event.shiftKey && (event.keyCode || event.which) === 9) {
                // Tab키 : 초점 받을 수 있는 마지막 요소에서 첫번째 요소으로 초점 이동
                event.preventDefault();
                lpObjTabbableFirst.focus();
            }
        });
    
        lpObjClose.on("click", lpClose); // 닫기 버튼 클릭 시 레이어 닫기

        $(".layer-pop-bg").on("click", function(event){
            if (event.target === event.currentTarget) {
                // 반투명 배경 클릭 시 레이어 닫기
                lpClose();
            }
        });
        
        $(document).on("keydown.lp_keydown", function(event) {
            // Esc키 : 레이어 닫기
            var keyType = event.keyCode || event.which;
        
            if (keyType === 27 && lp.hasClass("on")) {
            lpClose();
            }
        });
    });

    
    // 탭
    const lpTabList = document.querySelectorAll('.lp-tab-default .tab-h-list li'); //레이어팝업 탭
    const lpContents = document.querySelectorAll('.lp-tab-cont .tab-c-item'); //레이어팝업 탭
    
    const cmTabList = document.querySelectorAll('.cm-tab-default .tab-h-list li'); //홈,설정 탭
    const cmContents = document.querySelectorAll('.cm-tab-cont .tab-c-item'); //홈,설정 탭

    let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

    for(var i = 0; i < lpTabList.length; i++){
        if ( lpTabList[i].querySelector('.t-tit') != null ) {
            lpTabList[i].querySelector('.t-tit').addEventListener('click', function(e){
                e.preventDefault();
                for(var j = 0; j < lpTabList.length; j++){
                    // 나머지 버튼 클래스 제거
                    lpTabList[j].classList.remove('tab-h-on');

                    // 나머지 컨텐츠 display:none 처리
                    lpContents[j].style.display = 'none';   
                }

                // 버튼 관련 이벤트
                this.parentNode.classList.add('tab-h-on');

                // 버튼 클릭시 컨텐츠 전환
                activeCont = this.getAttribute('href');
                document.querySelector(activeCont).style.display = 'block';
            });
        }
    };

    for(var i = 0; i < cmTabList.length; i++){
        if ( cmTabList[i].querySelector('.t-tit') != null ) {
            cmTabList[i].querySelector('.t-tit').addEventListener('click', function(e){
                e.preventDefault();
                for(var j = 0; j < cmTabList.length; j++){
                    // 나머지 버튼 클래스 제거
                    cmTabList[j].classList.remove('tab-h-on');

                    // 나머지 컨텐츠 display:none 처리
                    cmContents[j].style.display = 'none';   
                }

                // 버튼 관련 이벤트
                this.parentNode.classList.add('tab-h-on');

                // 버튼 클릭시 컨텐츠 전환
                activeCont = this.getAttribute('href');
                document.querySelector(activeCont).style.display = 'block';
            });
        }
    };
    


});



