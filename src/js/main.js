$('select').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


$(document).ready(function () {


    $('.checkbox').on('click', function () {
        var ckb = $(this).data('checkbox');

        if ($(this).is(':checked')) {
            $('.money-' + ckb).hide();
            $('.percent-' + ckb).show();
        } else {
            $('.percent-' + ckb).hide();
            $('.money-' + ckb).show();
        }
    });


    function usd() {
        var xhr = new XMLHttpRequest();
        var bit = document.getElementById('bit');
        var eth = document.getElementById('eth');
        var lit = document.getElementById('lit');

        var PercH = document.getElementById('ethPercH');
        var PercD = document.getElementById('ethPercD');
        var PercW = document.getElementById('ethPercW');
        var PercM = document.getElementById('ethPercM');

        var PercH1 = document.getElementById('litPercH');
        var PercD1 = document.getElementById('litPercD');
        var PercW1 = document.getElementById('litPercW');
        var PercM1 = document.getElementById('litPercM');

        var PercH2 = document.getElementById('bitPercH');
        var PercD2 = document.getElementById('bitPercD');
        var PercW2 = document.getElementById('bitPercW');
        var PercM2 = document.getElementById('bitPercM');

        var MoneyH = document.getElementById('ethMoneyH');
        var MoneyD = document.getElementById('ethMoneyD');
        var MoneyW = document.getElementById('ethMoneyW');
        var MoneyM = document.getElementById('ethMoneyM');

        var MoneyH1 = document.getElementById('litMoneyH');
        var MoneyD1 = document.getElementById('litMoneyD');
        var MoneyW1 = document.getElementById('litMoneyW');
        var MoneyM1 = document.getElementById('litMoneyM');

        var MoneyH2 = document.getElementById('bitMoneyH');
        var MoneyD2 = document.getElementById('bitMoneyD');
        var MoneyW2 = document.getElementById('bitMoneyW');
        var MoneyM2 = document.getElementById('bitMoneyM');

        var bitdata;

        xhr.open('GET', 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', false);
        xhr.send();

        bitdata = JSON.parse(xhr.responseText);

        bit.innerHTML = (bitdata.volume).toFixed(2);
        eth.innerHTML = (bitdata.volume).toFixed(2);
        lit.innerHTML = (bitdata.volume).toFixed(2);

        PercH.innerHTML = (bitdata.changes.percent.hour).toFixed(2);
        PercD.innerHTML = (bitdata.changes.percent.day).toFixed(2);
        PercW.innerHTML = (bitdata.changes.percent.week).toFixed(2);
        PercM.innerHTML = (bitdata.changes.percent.month).toFixed(2);

        PercH1.innerHTML = (bitdata.changes.percent.hour).toFixed(2);
        PercD1.innerHTML = (bitdata.changes.percent.day).toFixed(2);
        PercW1.innerHTML = (bitdata.changes.percent.week).toFixed(2);
        PercM1.innerHTML = (bitdata.changes.percent.month).toFixed(2);

        PercH2.innerHTML = (bitdata.changes.percent.hour).toFixed(2);
        PercD2.innerHTML = (bitdata.changes.percent.day).toFixed(2);
        PercW2.innerHTML = (bitdata.changes.percent.week).toFixed(2);
        PercM2.innerHTML = (bitdata.changes.percent.month).toFixed(2);

        MoneyH.innerHTML = (bitdata.changes.price.hour).toFixed(2);
        MoneyD.innerHTML = (bitdata.changes.price.day).toFixed(2);
        MoneyW.innerHTML = (bitdata.changes.price.week).toFixed(2);
        MoneyM.innerHTML = (bitdata.changes.price.month).toFixed(2);

        MoneyH1.innerHTML = (bitdata.changes.price.hour).toFixed(2);
        MoneyD1.innerHTML = (bitdata.changes.price.day).toFixed(2);
        MoneyW1.innerHTML = (bitdata.changes.price.week).toFixed(2);
        MoneyM1.innerHTML = (bitdata.changes.price.month).toFixed(2);

        MoneyH2.innerHTML = (bitdata.changes.price.hour).toFixed(2);
        MoneyD2.innerHTML = (bitdata.changes.price.day).toFixed(2);
        MoneyW2.innerHTML = (bitdata.changes.price.week).toFixed(2);
        MoneyM2.innerHTML = (bitdata.changes.price.month).toFixed(2);

    };

    usd();

    $('.coin-val').each(function() {
        if (parseFloat($(this).text()) < 0) {
            $(this).closest('.change-color').addClass('red');
        } else if (parseFloat($(this).text()) >= 0) {
            $(this).closest('.change-color').addClass('green');
        }
    });


    $('.select-options li').on('click', function () {
        usd();

        $('.coin-val').each(function() {
            if (parseFloat($(this).text()) < 0) {
                $(this).closest('.change-color').addClass('red');
            } else if (parseFloat($(this).text()) >= 0) {
                $(this).closest('.change-color').addClass('green');
            }
        });

    });



});