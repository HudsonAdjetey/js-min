$( '.cid-btns' ).click( function() {
  var count = parseInt( $( this ).data( 'count' ) );
  $( '#q' + count ).hide();
  $( '#q' + ( count + 1 ) ).fadeIn( 200 );
  if ( count == 3 ) {
    ____ShowPreloadingInfoNextLine();

    setTimeout( function() {
      $( '#q' + ( count + 1 ) ).hide();
      $( '#q' + ( count + 2 ) ).fadeIn( 200 );
    }, 4000 );
  }
} );

function ____StartTheQuiz(){
  $('#init_button_holder').fadeOut(500, function(){
    console.log('Finished!');

    ___showNextAnswer();
  });
  $('.intro-text').fadeOut(500);
}

function ___showNextAnswer(){
  window.__ca = $('.card-answer.d-none').first();
  __ca.removeClass('d-none');
  setTimeout(function(){
    __ca.addClass('zvisible');
  }, 50);

}

var _answers = [];
function ____asnwerTheQuestion(quiestionID, answer){
  _answers.push({
    quiestionID:quiestionID,
    answer:answer
  });
  $('.card-answer.zvisible').last().fadeOut(500, function(){
    if($('.card-answer.d-none').length==0){
      //alert('end');
      $('#quiz').fadeOut(500, function(){
        ____showThePreloader();

      });
    }
    else{
      ___showNextAnswer();
    }
  });
}



function ____showThePreloader(){
  $('#preloader').removeClass('d-none');
  setTimeout(function(){
    $('#preloader').addClass('zvisible');
  }, 10);

  setTimeout(function(){
    ____ShowPreloadingInfoNextLine();
  }, 2*1000);
}

function ____ShowPreloadingInfoNextLine(){
  if($('.preload-info.d-none').length==0){
    setTimeout(function(){
      _____ShowTheGifts();
    }, 500);
  }
  else{
    window.pInfo = $('.preload-info.d-none').first();
    pInfo.removeClass('d-none');
    setTimeout(function(){
      pInfo.addClass('zvisible');
    }, 10);
    setTimeout(function(){
      ____ShowPreloadingInfoNextLine();
    }, 1*1000);
  }
}

//____showThePreloader();//debugging

function _____ShowTheGifts(){
  $('#preloader').fadeOut(500, function(){});
  setTimeout(function(){
    //$('#the_gifts').css('display', 'block !important');
    $('#the_gifts').removeClass('d-none');
    setTimeout(function(){
      $('#the_gifts').addClass('zvisible');
    }, 10);
  }, 500);
  setTimeout(function(){
    $('button[data-bs-target="#modal_after_preload_stops"]').trigger('click');
  }, 1000);
}
//_____ShowTheGifts();//debugging


$('.gift-box').on('click', function(){
  if($('.gift-box.clicked.show_the_phone').length>=1){return;}
  $(this).addClass('clicked');
  var showThePhone = Math.random()>0.5;
  if($('.gift-box.clicked').length>1 && (showThePhone || $('.gift-box.clicked').length>3)){
    $(this).addClass('show_the_phone');
    setTimeout(function(){
      $('.the_gift_final').css('display', 'block');
      $('.the_gift_final').addClass('do_visible');
      setTimeout(function(){
        $('button[data-bs-target="#modal_after_click_final_gift"]').trigger('click');
      }, 1*2000);
    }, 1*3000);
  }
  else{
    $('button[data-bs-target="#modal_after_click_first_gift"]').trigger('click');
    setTimeout(function(){
      $('#modal_after_click_first_gift .circle-loader').addClass('load-complete');
      $('#modal_after_click_first_gift .checkmark').css('display', 'block');
      $('#modal_after_click_first_gift .checkmark').addClass('draw');
    }, 1*500);
  }
});