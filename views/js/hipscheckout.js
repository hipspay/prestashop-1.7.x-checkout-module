/*
 * 2008 - 2017 Presto-Changeo
 *
 * MODULE Hips Checkout Payment
 *
 * @version   1.0.0
 * @author    Presto-Changeo <info@presto-changeo.com>
 * @link      http://www.presto-changeo.com
 * @copyright Copyright (c) permanent, Presto-Changeo
 * @license   Addons PrestaShop license limitation
 *
 * NOTICE OF LICENSE
 *
 * Don't use this module on several shops. The license provided by PrestaShop Addons 
 * for all its modules is valid only once for a single shop.
 */



function updateOrder() {

    Hips.checkout.suspend();

    $.ajax({
        url: ajax_hipsc_url,
        type: "post",
        dataType: "html",
        data: 'updateHips=1',
        success: function (strData) {

            Hips.checkout.resume();
            

        }
    });

}

$(document).ready(function () {
    $('.cart_quantity_input, #id_address_delivery').change(function () {
        updateOrder();
    });

    $('.cart_quantity_delete, .cart_quantity_up, .cart_quantity_down, .ajax_cart_block_remove_link, .delivery_option_radio').click(function () {
        updateOrder();
    });

});


$(document).ready(function () {

    var whatPage = $('body').attr('id');
    if (whatPage == 'module-hipscheckout-validation') {
    if (!$("#hipsCheckoutView").length) {
        alert('Hips Payment needs <div id="hipsCheckoutView"> to work properly!');
    }
    if ($('#hipsPayment').length <= 0)
        $("<div id='hipsPayment'><\/div>").insertBefore($("#hipsCheckoutView"));

    hipsPayment = $('#hipsPayment').html();
    if (typeof id_order_hips != 'undefined') {
        if (hipsPayment == '') {
            console.log('CCCC');
            var newScript = document.createElement("script");
            var inlineScript = document.createTextNode("Hips.checkout({token: id_order_hips});");
            newScript.appendChild(inlineScript);
            document.getElementById("hipsPayment").appendChild(newScript);
        }
    }
    }
});

$(document).ready(function () {
    $('select#hips_id_country').change(function () {
        updateStateHips();
        updateNeedIDNumberHisps();
    });
    
    if (typeof hips_countries != 'undefined') {
        updateStateHips();
        updateNeedIDNumberHips();
    }
});

function updateStateHips()
{
    $('select#hips_id_state option:not(:first-child)').remove();
    var states = hips_countries[$('select#hips_id_country').val()];

    if (typeof (states) != 'undefined')
    {
        $(states).each(function (key, item) {
            $('select#hips_id_state').append('<option value="' + item.id + '"' + (hips_idSelectedCountry == item.id ? ' selected="selected"' : '') + '">' + item.name + '</option>');
        });

        $('#hips_id_state:hidden').slideDown('slow');
    } else
        $('#hips_id_state').slideUp('fast');
}

function updateNeedIDNumberHips()
{
    var idCountry = parseInt($('select#hips_id_country').val());

    if ($.inArray(idCountry, hips_countriesNeedIDNumber) >= 0)
        $('fieldset.dni').slideDown('slow');
    else
        $('fieldset.dni').slideUp('fast');
}
