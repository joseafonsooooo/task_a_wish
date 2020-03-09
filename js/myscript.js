$( document ).ready(function() {

    /* Style when selecting Format */
    $( ".option" ).click(function() {
        $( this ).toggleClass( "optionActive" );
    });

    /* Clean Selection */ 
    $( "#cleanSelected" ).click(function(){ 
        $( ".option" ).removeClass( "optionActive" );
    });

    /* Counter of Required Formats */
    $(".counters").text( "0" );
    
    $( "html" ).click(function(){ 
        $("#count1").text( $('#page1 div div div.optionActive').length ); 
        $("#count2").text( $('#page2 div div div.optionActive').length );
        $("#count2").text( $('#page2 div div div.optionActive').length );
        $("#count3").text( $('#page3 div div div.optionActive').length );
        $("#count4").text( $('#page4 div div div.optionActive').length );
        $("#count5").text( $('#page5 div div div.optionActive').length );
        $("#count6").text( $('#page6 div div div.optionActive').length );
        $("#count7").text( $('#page7 div div div.optionActive').length );
        $("#count8").text( $('#page8 div div div.optionActive').length );
        $("#count9").text( $('#page9 div div div.optionActive').length );
        $("#count10").text( $('#page10 div div div.optionActive').length );
        $("#count11").text( $('#page11 div div div.optionActive').length );
        $("#count12").text( $('#page12 div div div.optionActive').length );
        $("#count13").text( $('#page13 div div div.optionActive').length );
        $("#count14").text( $('#page14 div div div.optionActive').length );
        $("#count15").text( $('#page15 div div div.optionActive').length );
        $("#count16").text( $('#page16 div div div.optionActive').length );
        $("#count17").text( $('#page17 div div div.optionActive').length );
        $("#count18").text( $('#page18 div div div.optionActive').length );
        $("#count19").text( $('#page19 div div div.optionActive').length );
        $("#count20").text( $('#page20 div div div.optionActive').length );
        $("#count21").text( $('#page21 div div div.optionActive').length );
    });

    /* Total Counter 
    $( "html" ).click(function(){ 
        $("#countTotal").text( $('.optionActive').length ); 
    });
    */


    /* Pages ON and OFF*/
    $( "#page1-button" ).click(function() { 
        $( ".pages" ).removeClass( "pagesShow" ); 
        $( "#page1" ).addClass( "pagesShow" );
        $( ".mylist > li").removeClass( "listActive" );
        $( "#page1-button" ).addClass( "listActive" );
    });

    $( "#page2-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page2" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page2-button" ).addClass( "listActive" );});

    $( "#page3-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page3" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page3-button" ).addClass( "listActive" );});

    $( "#page4-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page4" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page4-button" ).addClass( "listActive" );});

    $( "#page5-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page5" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page5-button" ).addClass( "listActive" );});

    $( "#page6-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page6" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page6-button" ).addClass( "listActive" );});

    $( "#page7-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page7" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page7-button" ).addClass( "listActive" );});

    $( "#page8-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page8" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page8-button" ).addClass( "listActive" );});

    $( "#page9-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page9" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page9-button" ).addClass( "listActive" );});

    $( "#page10-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page10" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page10-button" ).addClass( "listActive" );});

    $( "#page11-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page11" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page11-button" ).addClass( "listActive" );});

    $( "#page12-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page12" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page12-button" ).addClass( "listActive" );});

    $( "#page13-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page13" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page13-button" ).addClass( "listActive" );});

    $( "#page14-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page14" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page14-button" ).addClass( "listActive" );});

    $( "#page15-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page15" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page15-button" ).addClass( "listActive" );});

    $( "#page16-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page16" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page16-button" ).addClass( "listActive" );});

    $( "#page17-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page17" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page17-button" ).addClass( "listActive" );});

    $( "#page18-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page18" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page18-button" ).addClass( "listActive" );});

    $( "#page19-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page19" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page19-button" ).addClass( "listActive" );});

    $( "#page20-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page20" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page20-button" ).addClass( "listActive" );});

    $( "#page21-button" ).click(function() { $( ".pages" ).removeClass( "pagesShow" ); $( "#page21" ).addClass( "pagesShow" ); $( ".mylist > li").removeClass( "listActive" ); $( "#page21-button" ).addClass( "listActive" );});

    $('#create-tasks').click(function() {
        var arr = $('.option.optionActive');

        for(var i = 0; i < arr.length; i++){
            console.log(arr[i].getAttribute('data-module'))
        }
    })

  });