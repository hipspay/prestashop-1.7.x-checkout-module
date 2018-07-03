<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$useSSL = true;

require_once(dirname(__FILE__) . '/../../config/config.inc.php');
require_once(dirname(__FILE__) . '/../../init.php');
require_once('PrestoChangeoClasses/init.php');
require_once('controllers/front/validation.php');

//$hips = new HipsCheckout();
$secure_key = Tools::getValue('secure_key');


$id_cart = Tools::getValue('id_cart');
$_POST['module'] = 'hipscheckout';

$controller = new hipscheckoutvalidationModuleFrontController('hipscheckout');

$controller->validateOrderWebhook($id_cart);
//
//if ($secure_key != $hips->hips_secure_key) {
//    $html = '
//        <div class="columns">
//            <div class="left_column">               
//            </div>
//            <div class="right_column">
//				' . $hips->l('Your transaction was not processed - Authentication Error') . '
//			</div>
//		</div>
//		';
//    echo $html;
//    return false;
//} else {
//    
//}
//
