$(function(){
  // 검색메뉴
  $(".gnb_right button").on("click", function()
  {
    $(".search_popup").fadeIn();
  });
  $(".search_close a").on("click", function()
  {
    $(".search_popup").fadeOut();
  });

  // 전체메뉴 슬라이드
  $(".menu").hide();
  $(".gnb_left button").on("click", function()
  {
    $(".menu").slideDown();
  });
    $(".btn-close").on("click", function()
  {
    $(".menu").slideUp();
  });
// 광고 팝업창
$(".ad_popup_close").on("click", function()
{
  $(".ad_popup").hide();
});
// 여행지 검색창
$(".sarch_select_button button").on("click",function()
{
  $(".sarch_select_button button").removeClass("active3")
  $(this).addClass("active3")
  if($(this).hasClass("one_way")){
    $('#arrive_city, #to_date').prop('disabled', true);
    $(".select_box_right i").hide();
    $(".return_left").next().hide();
  }else{
    $('#arrive_city, #to_date').prop('disabled', false);
    $(".select_box_right i").show();
    $(".return_left").next().show();
  }
});

var clickCheck = false;

$(".return_right").on("click",function()
{

  if(!clickCheck){
    $(".return_left").prop('disabled',true);
    $(".return img").hide();
    clickCheck = true;
  }else{
    $(".return_left").prop('disabled',false);
    $(".return img").show();
    clickCheck = false;
  }
});


// 여행지검색창 팝업
var inputId;
$(".select_box_left a, .select_box_right a").on("click",function()
{
  inputId=$(this).attr('href');
  $(".city_popup").show();
  return false;
});

$(".city_popup button, .city_list td a").on("click",function()
{
  $(".city_popup").hide();
});

$(".city_list td a").on("click", function()
{
  var city=$(this).text();
  console.log(inputId);
  if(inputId=='#start_city'){
    $("#start_city").val(city);
  }else{
    $("#arrive_city").val(city);
  }
});

// datepicker
$( "#from_date, #to_date" ).datepicker({
    showOn: "button",
    buttonImage: "img/day.png ",
    buttonImageOnly: true,
    buttonText: "Select date"
});
$.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });

// 퀵메뉴
  $(".pick button").on("click",function()
  {
    $(".quick_open").show();
  });
  $(".quick_open button").on("click",function()
  {
    $(".quick_open").hide ();
  });
  $(".quick_login").on("click",function()
  {
    $(".quick_login").text("최근 본 상품");
    $(".quick_open p").hide();
    $(".quick_open_img img").show();
  });
// 메뉴이미지 슬라이드
  var mainSlideImg=[
    'main1.jpg',
    'main2.jpg',
    'main3.jpg',
    'main4.jpg',
  ]


  $('.main_slide .swiper-slide').each(function(i, el){
    $(this).css('background-image','url(img/'+mainSlideImg[i]+')');
    // console.log(i);
  })

  var mainSlide = new Swiper('.main_slide .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // effect: 'fade',
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });

  var itemImg=[
    'banner1.jpg',
    'banner2.jpg',
    'banner3.jpg',
    'banner4.jpg',
  ]

  $('.item').each(function(i, el){
    $(this).css('background-image','url(img/'+itemImg[i]+')');
    // console.log(i);
  })

// 온라인 전용특가
  $(".img_banner .item").on({
    mouseenter:function(){
      $(".shadow", $(this)).show();
    },
    mouseleave:function(){
      $(".shadow", $(this)).hide();
    }
  });


// 나라별 추천여행지
var recommend=[
  {
    name:'<span>동남아</span><span>대만</span>',
    description:'가깝고,휴양,관광 모두 다<br>만족할 수 있는',
    imgBox:[
      {
        src:'img/tab1.jpg',
        title:'블루라군을 찾아',
        name:'라오스',
        description:'친구,가족,연인<br>그 누구와 가도 즐거운'
      },
      {
        src:'img/tab2.jpg',
        title:'황홀한 선셋',
        name:'라오스',
        description:'친구,가족,연인<br>그 누구와 가도 즐거운'
      },
      {
        src:'img/tab3.jpg',
        title:'되 찾은 화이트비치',
        name:'보라카이',
        description:'더욱 더 쾌적해지고<br>깔끔해진'
      }
    ]
  },
  {
    name:'<span>중국</span><span>홍콩</span>',
    description:'역사와 문화<br>도시의 화려함을 동시에',
    imgBox:[
      {
        src:'img/tab4.jpg',
        title:'밝게 빛나는 도시',
        name:'상해',
        description:'높게 솟은 도심,<br>중국이지만 중국같지 않은'
      },
      {
        src:'img/tab5.jpg',
        title:'한국인이<br>좋아하는 여행지',
        name:'장가계',
        description:'중국 명산 구경 하면<br>떠오르는'
      },
      {
        src:'img/tab6.jpg',
        title:'아름다운<br>풍경구가 있는',
        name:'황산',
        description:'산과 물,<br>조화를 이루는곳'
      }
    ]
  },
  {
    name:'<span>일본</span>',
    description:'가깝지만 다른<br>다양한 매력이 있는',
    imgBox:[
      {
        src:'img/tab7.jpg',
        title:'휴식이 있는 곳',
        name:'큐슈',
        description:'온천과 식도락을<br>한번에'
      },
      {
        src:'img/tab8.jpg',
        title:'겨울 여행하면<br>이곳',
        name:'북해도',
        description:'사계절 다양한 매력이<br>공존하는'
      },
      {
        src:'img/tab9.jpg',
        title:'한국인이<br>가장많이가는',
        name:'오사카',
        description:'즐거움이<br>가득한곳'
      }
    ]
  },
  {
    name:'<span>남태평양</span>',
    description:'엄마도 아빠도<br>아이도 만족하는곳',
    imgBox:[
      {
        src:'img/tab10.jpg',
        title:'내가 푹 빠진 그곳',
        name:'호주/뉴질랜드',
        description:'모든게 완벽<br>최고의 여행지'
      },
      {
        src:'img/tab11.jpg',
        title:'가족 여행하면 이곳',
        name:'괌',
        description:'괌에서 즐기는<br>온 가족 휴식'
      },
      {
        src:'img/tab12.jpg',
        title:'시작부터 다른',
        name:'사이판',
        description:'푸른바다가<br>온 사방에'
      }
    ]
  },
  {
    name:'<span>유럽</span><span>두바이</span>',
    description:'역사와 현대가<br>공존하는 유럽',
    imgBox:[
      {
        src:'img/tab13.jpg',
        title:'서유럽을 확실하게',
        name:'서유럽',
        description:'나의 첫번째<br>유럽여행'
      },
      {
        src:'img/tab14.jpg',
        title:'지금 이곳이 대세',
        name:'스페인/포르투갈',
        description:'열정과 낭만이<br>함께하는'
      },
      {
        src:'img/tab15.jpg',
        title:'발칸반도의 아름다움',
        name:'동유럽',
        description:'발걸음을<br>조금느리게'
      }
    ]
  },
  {
    name:'<span>미주</span><span>화와이</span>',
    description:'화려한 도시부터<br>끝없는 대자연까지',
    imgBox:[
      {
        src:'img/tab16.jpg',
        title:'모든순간이<br>아름다운 여행지',
        name:'하와이',
        description:'지상낙원<br>알로하'
      },
      {
        src:'img/tab17.jpg',
        title:'대자연을 온 몸으로',
        name:'미서부',
        description:'눈으로<br>직접 즐기는'
      },
      {
        src:'img/tab18.jpg',
        title:'나이아가라에서<br>뉴욕까지',
        name:'미동부',
        description:'미국과 캐나다를<br>한번에'
      }
    ]
  },
  {
    name:'<span>부산</span><span>출발</span>',
    description:'부산에서 떠나는<br>해외여행',
    imgBox:[
      {
        src:'img/tab19.jpg',
        title:'가족여행의 메카',
        name:'괌',
        description:'온가족이<br>만족하는곳'
      },
      {
        src:'img/tab20.jpg',
        title:'밤하늘을 수놓는',
        name:'홍콩/마카오',
        description:'야경과 쇼핑<br>그리고 미식의 도시'
      },
      {
        src:'img/tab21.jpg',
        title:'볼거리의 천국',
        name:'싱가포르',
        description:'작지만 즐길것이<br>너무많다'
      }
    ]
  },
  {
    name:'<span>지방</span><span>출발</span>',
    description:'인천까지 가지<br>않아도 된다',
    imgBox:[
      {
        src:'img/tab22.jpg',
        title:'청주출발',
        name:'다낭',
        description:'아름다운해변<br>그리고 휴식이 가능한'
      },
      {
        src:'img/tab23.jpg',
        title:'무안출발',
        name:'대만',
        description:'푸통푸통<br>즐거움 가득'
      },
      {
        src:'img/tab24.jpg',
        title:'대구출발',
        name:'방콕/파타야',
        description:'해외여행의<br>시작'
      }
    ]
  },
  {
    name:'<span>국내여행</span>',
    description:'우리나라부터<br>차근차근',
    imgBox:[
      {
        src:'img/tab25.jpg',
        title:'한국이야기',
        name:'순천/하동',
        description:'이야기가 있는<br>내륙 여행'
      },
      {
        src:'img/tab26.jpg',
        title:'떠나요 제주도',
        name:'제주도',
        description:'여유를<br>느끼러 간다'
      },
      {
        src:'img/tab27.jpg',
        title:'제주도를 완벽하게',
        name:'제주도',
        description:'마라도까지<br>같이'
      }
    ]
  },
  {
    name:'<span>테마여행</span>',
    description:'내가 원하는 목적에<br>맞게 떠나는 여행',
    imgBox:[
      {
        src:'img/tab28.jpg',
        title:'그대와 나<br>오직 둘이서',
        name:'코사무이',
        description:'왕가의<br>휴양지'
      },
      {
        src:'img/tab29.jpg',
        title:'골프와 여행을<br>동시에',
        name:'방콕/파타야',
        description:'태국에서 즐기는<br>골프여행'
      },
      {
        src:'img/tab30.jpg',
        title:'유럽을 좀 더<br>특별하게',
        name:'지중해 크루즈',
        description:'일생 단 한번의<br>크루즈 여행'
      }
    ]
  },
]

$('.img_box').each(function(i, el){
  $(this).css('background-image','url('+recommend[0].imgBox[i].src+')');
  // console.log(i);
})

$('.tab_nav a').click(function(e){
  e.preventDefault();
  $('.tab_nav a').parent('li').removeClass('active');
  $(this).parent('li').addClass('active');
  var tabIndex=$('.tab_nav a').index(this);
  // console.log(tabIndex);
  var sizeName=$(this).data('size');
  if(sizeName =='small'){
    $('.tab_title').addClass('small');
  }else{
    $('.tab_title').removeClass('small');
  }

  //내용바꾸기
  $('.tab_title h3').html(recommend[tabIndex].name);
  $('.tab_title p').html(recommend[tabIndex].description);
  $('.tab_contents ul').empty();
  for (var i in recommend[tabIndex].imgBox) {
    $('.tab_contents ul').append(
      '<li class="move mr90">'+
      '  <div class="wrap">'+
      '    <div class="img_box" style="background-image:url('+recommend[tabIndex].imgBox[i].src+')">'+
      '      <div class="over">'+
      '        <span>'+recommend[tabIndex].imgBox[i].title+'</span>'+
      '        <a href="#" class="btn_more">자세히보기</a>'+
      '      </div>'+
      '    </div>'+
      '    <div class="text_box">'+
      '      <p>'+recommend[tabIndex].imgBox[i].description+'</p>'+
      '      <b>'+recommend[tabIndex].imgBox[i].name+'</b>'+
      '    </div>'+
      '  </div>'+
      '</li>'
    );
  }
  $('.tab_contents ul li:last-child').removeClass('mr90');

})



// $('.tab_nav a').click(function(e){
//   e.preventDefault();
//   $('.tab_nav a').parent('li').removeClass('active');
//   $(this).parent('li').addClass('active');
//   var tabIndex=$('.tab_nav a').index(this);


// 이벤트 nav
$(".event_nav a").click(function(e)
{
  e.preventDefault();
  $(".event_nav a").removeClass('active2');
  $(this).addClass('active2');

  var eventIndex=$('.event_nav a').index(this)+1;
  // a=$(this).index()+1;
  //alert(eventIndex)
$(".event_img img").attr({"src":"img/event"+eventIndex+".jpg"});
});


  var homeImg=[
    'homeshopping1.jpg',
    'homeshopping2.jpg',
    'homeshopping3.jpg',
    'homeshopping4.jpg',
  ]

  $('.home_shopping .swiper-slide').each(function(i, el){
    $(this).css('background-image','url(img/'+homeImg[i]+')');
    // console.log(i);
  })

  var homeSlide = new Swiper('.home_shopping .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });





});
