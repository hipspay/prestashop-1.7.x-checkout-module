{*
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
*}

{extends file='page.tpl'}

{block name="page_content"}

<script src="https://cdn.hips.com/js/v1/hips.js"></script>

<div id="hips_payment" class="payment hide_payment_form">
    
    {capture name=path}{l s='Payment' mod='hipscheckout'}{/capture}

   
    <h1 class="page-heading">{l s='Order summation' mod='hipscheckout'}</h1>

    {assign var='current_step' value='payment'}



<div class="row">

{if $empty_cart}
    {l s='Your cart is empty' mod='hipscheckout'}
{else}
    {if $err && !empty($err)}
        {$err}
    {/if}
    <script type="text/javascript">

        var id_order_hips = '{$id_order_hips}';
        var ajax_hipsc_url = '{$this_path}{$hipsc_filename}.php';
        var hips_public_key = '{$hips_public}';

        Hips.public_key = hips_public_key;
     
 
        

        
    </script>
    <div></div>
    
    <div id="hipsCheckoutView"></div>
</div>
        {/if}
</div>

{/block}