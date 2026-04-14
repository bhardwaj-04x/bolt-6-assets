
        console.log('social default', 'https://teradek.com/cdn/shopifycloud/storefront/assets/no-image-100-2a702f30_small.gif')


/* ===== next script block ===== */


        console.log('default 2', 'https://teradek.com/cdn/shop/files/Preview-Bolt6-Series.png?v=1774290981229158583')


/* ===== next script block ===== */


        console.log('it was blank', 'https://teradek.com/cdn/shop/files/Preview-Bolt6-Series.png?v=1774290981229158583')


/* ===== next script block ===== */


        function updateFavicon() {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            console.log("Detected Theme:", isDarkMode ? "Dark Mode" : "Light Mode");

            const newFavicon = isDarkMode
                ? "https://cdn.shopify.com/s/files/1/0095/4332/files/favicon-light.svg?v=1703144654"
                : "https://cdn.shopify.com/s/files/1/0095/4332/files/favicon-dark.svg?v=1703144654";

            console.log("Setting favicon to:", newFavicon);

            // Remove old favicon
            const oldFavicon = document.getElementById('favicon');
            if (oldFavicon) {
                oldFavicon.parentNode.removeChild(oldFavicon);
            }

            // Create new favicon link
            const newFaviconLink = document.createElement("link");
            newFaviconLink.id = "favicon";
            newFaviconLink.rel = "icon";
            newFaviconLink.type = "image/x-icon";
            newFaviconLink.href = newFavicon;

            // Append to head
            document.head.appendChild(newFaviconLink);
        }

        // Run on page load
        updateFavicon();

        // Listen for theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            console.log("Theme changed! New theme:", e.matches ? "Dark Mode" : "Light Mode");
            updateFavicon();
        });


/* ===== next script block ===== */

window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');

/* ===== next script block ===== */

{"shopId":954332,"countryCode":"US","currencyCode":"USD","merchantCapabilities":["supports3DS"],"merchantId":"gid:\/\/shopify\/Shop\/954332","merchantName":"Teradek","requiredBillingContactFields":["postalAddress","email","phone"],"requiredShippingContactFields":["postalAddress","email","phone"],"shippingType":"shipping","supportedNetworks":["visa","masterCard","amex","discover","elo","jcb"],"total":{"type":"pending","label":"Teradek","amount":"1.00"},"shopifyPaymentsEnabled":true,"supportsSubscriptions":true}

/* ===== next script block ===== */

{"accessToken":"52ae6a916f233d13b404a887f40f8472","betas":["rich-media-storefront-analytics"],"domain":"teradek.com","predictiveSearch":true,"shopId":954332,"locale":"en"}

/* ===== next script block ===== */

var Shopify = Shopify || {};
        Shopify.shop = "teradek-store.myshopify.com";
        Shopify.locale = "en";
        Shopify.currency = { "active": "USD", "rate": "1.0" };
        Shopify.country = "US";
        Shopify.theme = { "name": "cs-websites\/teradek-production", "id": 151822631090, "schema_name": "Dawn", "schema_version": "12.0.0", "theme_store_id": null, "role": "main" };
        Shopify.theme.handle = "null";
        Shopify.theme.style = { "id": null, "handle": null };
        Shopify.cdnHost = "teradek.com/cdn";
        Shopify.routes = Shopify.routes || {};
        Shopify.routes.root = "/";
        Shopify.previewMode = true;
        Shopify.shopJsCdnBaseUrl = "https://cdn.shopify.com/shopifycloud/shop-js";

/* ===== next script block ===== */

!function (o) { (o.Shopify = o.Shopify || {}).modules = !0 }(window);

/* ===== next script block ===== */

!function (o) { function n() { var o = []; function n() { o.push(Array.prototype.slice.apply(arguments)) } return n.q = o, n } var t = o.Shopify = o.Shopify || {}; t.loadFeatures = n(), t.autoloadFeatures = n() }(window);

/* ===== next script block ===== */


        window.ShopifyPay = window.ShopifyPay || {};
        window.ShopifyPay.apiHost = "shop.app\/pay";
        window.ShopifyPay.redirectState = "pending";


/* ===== next script block ===== */

{"pageType":"page"}

/* ===== next script block ===== */


        await import("//teradek.com/cdn/shopifycloud/shop-js/modules/v2/loader.init-shop-cart-sync.en.esm.js");

        window.Shopify.SignInWithShop?.initShopCartSync?.({ "fedCMEnabled": true, "windoidEnabled": true });



/* ===== next script block ===== */


        window.Shopify = window.Shopify || {};
        if (!window.Shopify.featureAssets) window.Shopify.featureAssets = {};
        window.Shopify.featureAssets['shop-js'] = { "shop-toast-manager": ["modules/v2/loader.shop-toast-manager.en.esm.js"], "init-shop-email-lookup-coordinator": ["modules/v2/loader.init-shop-email-lookup-coordinator.en.esm.js"], "init-fed-cm": ["modules/v2/loader.init-fed-cm.en.esm.js"], "init-windoid": ["modules/v2/loader.init-windoid.en.esm.js"], "shop-button": ["modules/v2/loader.shop-button.en.esm.js"], "avatar": ["modules/v2/loader.avatar.en.esm.js"], "init-shop-cart-sync": ["modules/v2/loader.init-shop-cart-sync.en.esm.js"], "shop-cash-offers": ["modules/v2/loader.shop-cash-offers.en.esm.js"], "init-customer-accounts-sign-up": ["modules/v2/loader.init-customer-accounts-sign-up.en.esm.js"], "init-customer-accounts": ["modules/v2/loader.init-customer-accounts.en.esm.js"], "lead-capture": ["modules/v2/loader.lead-capture.en.esm.js"], "shop-login": ["modules/v2/loader.shop-login.en.esm.js"], "shop-cart-sync": ["modules/v2/loader.shop-cart-sync.en.esm.js"], "init-shop-for-new-customer-accounts": ["modules/v2/loader.init-shop-for-new-customer-accounts.en.esm.js"], "checkout-modal": ["modules/v2/loader.checkout-modal.en.esm.js"], "shop-login-button": ["modules/v2/loader.shop-login-button.en.esm.js"], "pay-button": ["modules/v2/loader.pay-button.en.esm.js"], "shop-follow-button": ["modules/v2/loader.shop-follow-button.en.esm.js"], "payment-terms": ["modules/v2/loader.payment-terms.en.esm.js"] };


/* ===== next script block ===== */

(function () {
            var isLoaded = false;
            function asyncLoad() {
                if (isLoaded) return;
                isLoaded = true;
                var urls = ["https:\/\/chimpstatic.com\/mcjs-connected\/js\/users\/2bef56de7432364c71b7907c8\/5cf75d2909f89563cb9d9db1c.js?shop=teradek-store.myshopify.com", "https:\/\/cdn.recovermycart.com\/scripts\/keepcart\/CartJS.min.js?shop=teradek-store.myshopify.com\u0026shop=teradek-store.myshopify.com", "https:\/\/clientcdn.pushengage.com\/shopify\/1ffd8169-ecd3-4a06-ba56-14e8b8f70b60.js?shop=teradek-store.myshopify.com"];
                for (var i = 0; i < urls.length; i++) {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = urls[i];
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                }
            };
            if (window.attachEvent) {
                window.attachEvent('onload', asyncLoad);
            } else {
                window.addEventListener('load', asyncLoad, false);
            }
        })();

/* ===== next script block ===== */

var __st = { "a": 954332, "offset": -25200, "reqid": "f9d93fab-c9fb-47f8-9aaa-231580dee58b-1775712093", "pageurl": "teradek.com\/pages\/bolt-6", "s": "pages-90691076274", "u": "7e51da410cc7", "p": "page", "rtyp": "page", "rid": 90691076274 };

/* ===== next script block ===== */

window.ShopifyPaypalV4VisibilityTracking = true;

/* ===== next script block ===== */

!function () { 'use strict'; const t = 'contact', e = 'account', n = 'new_comment', o = [[t, t], ['blogs', n], ['comments', n], [t, 'customer']], c = [[e, 'customer_login'], [e, 'guest_login'], [e, 'recover_customer_password'], [e, 'create_customer']], r = t => t.map((([t, e]) => `form[action*='/${t}']:not([data-nocaptcha='true']) input[name='form_type'][value='${e}']`)).join(','), a = t => () => t ? [...document.querySelectorAll(t)].map((t => t.form)) : []; function s() { const t = [...o], e = r(t); return a(e) } const i = 'password', u = 'form_key', d = ['recaptcha-v3-token', 'g-recaptcha-response', 'h-captcha-response', i], f = () => { try { return window.sessionStorage } catch { return } }, m = '__shopify_v', _ = t => t.elements[u]; function p(t, e, n = !1) { try { const o = window.sessionStorage, c = JSON.parse(o.getItem(e)), { data: r } = function (t) { const { data: e, action: n } = t; return t[m] || n ? { data: e, action: n } : { data: t, action: n } }(c); for (const [e, n] of Object.entries(r)) t.elements[e] && (t.elements[e].value = n); n && o.removeItem(e) } catch (o) { console.error('form repopulation failed', { error: o }) } } const l = 'form_type', E = 'cptcha'; function T(t) { t.dataset[E] = !0 } const w = window, h = w.document, L = 'Shopify', v = 'ce_forms', y = 'captcha'; let A = !1; ((t, e) => { const n = (g = 'f06e6c50-85a8-45c8-87d0-21a2b65856fe', I = 'https://cdn.shopify.com/shopifycloud/storefront-forms-hcaptcha/ce_storefront_forms_captcha_hcaptcha.v1.5.2.iife.js', D = { infoText: 'Protected by hCaptcha', privacyText: 'Privacy', termsText: 'Terms' }, (t, e, n) => { const o = w[L][v], c = o.bindForm; if (c) return c(t, g, e, D).then(n); var r; o.q.push([[t, g, e, D], n]), r = I, A || (h.body.append(Object.assign(h.createElement('script'), { id: 'captcha-provider', async: !0, src: r })), A = !0) }); var g, I, D; w[L] = w[L] || {}, w[L][v] = w[L][v] || {}, w[L][v].q = [], w[L][y] = w[L][y] || {}, w[L][y].protect = function (t, e) { n(t, void 0, e), T(t) }, Object.freeze(w[L][y]), function (t, e, n, w, h, L) { const [v, y, A, g] = function (t, e, n) { const i = e ? o : [], u = t ? c : [], d = [...i, ...u], f = r(d), m = r(i), _ = r(d.filter((([t, e]) => n.includes(e)))); return [a(f), a(m), a(_), s()] }(w, h, L), I = t => { const e = t.target; return e instanceof HTMLFormElement ? e : e && e.form }, D = t => v().includes(t); t.addEventListener('submit', (t => { const e = I(t); if (!e) return; const n = D(e) && !e.dataset.hcaptchaBound && !e.dataset.recaptchaBound, o = _(e), c = g().includes(e) && (!o || !o.value); (n || c) && t.preventDefault(), c && !n && (function (t) { try { if (!f()) return; !function (t) { const e = f(); if (!e) return; const n = _(t); if (!n) return; const o = n.value; o && e.removeItem(o) }(t); const e = Array.from(Array(32), (() => Math.random().toString(36)[2])).join(''); !function (t, e) { _(t) || t.append(Object.assign(document.createElement('input'), { type: 'hidden', name: u })), t.elements[u].value = e }(t, e), function (t, e) { const n = f(); if (!n) return; const o = [...t.querySelectorAll(`input[type='${i}']`)].map((({ name: t }) => t)), c = [...d, ...o], r = {}; for (const [a, s] of new FormData(t).entries()) c.includes(a) || (r[a] = s); n.setItem(e, JSON.stringify({ [m]: 1, action: t.action, data: r })) }(t, e) } catch (e) { console.error('failed to persist form', e) } }(e), e.submit()) })); const S = (t, e) => { t && !t.dataset[E] && (n(t, e.some((e => e === t))), T(t)) }; for (const o of ['focusin', 'change']) t.addEventListener(o, (t => { const e = I(t); D(e) && S(e, y()) })); const B = e.get('form_key'), M = e.get(l), P = B && M; t.addEventListener('DOMContentLoaded', (() => { const t = y(); if (P) for (const e of t) e.elements[l].value === M && p(e, B);[...new Set([...A(), ...v().filter((t => 'true' === t.dataset.shopifyCaptcha))])].forEach((e => S(e, t))) })) }(h, new URLSearchParams(w.location.search), n, t, e, ['guest_login']) })(!0, !0) }();

/* ===== next script block ===== */

var Shopify = Shopify || {}; Shopify.PaymentButton = Shopify.PaymentButton || { isStorefrontPortableWallets: !0, init: function () { window.Shopify.PaymentButton.init = function () { }; var t = document.createElement("script"); t.src = "https://teradek.com/cdn/shopifycloud/portable-wallets/latest/portable-wallets.en.js", t.type = "module", document.head.appendChild(t) } };


/* ===== next script block ===== */


        function portableWalletsHideBuyerConsent(e) { var t = document.getElementById("shopify-buyer-consent"), n = document.getElementById("shopify-subscription-policy-button"); t && n && (t.classList.add("hidden"), t.setAttribute("aria-hidden", "true"), n.removeEventListener("click", e)) } function portableWalletsShowBuyerConsent(e) { var t = document.getElementById("shopify-buyer-consent"), n = document.getElementById("shopify-subscription-policy-button"); t && n && (t.classList.remove("hidden"), t.removeAttribute("aria-hidden"), n.addEventListener("click", e)) } window.Shopify?.PaymentButton && (window.Shopify.PaymentButton.hideBuyerConsent = portableWalletsHideBuyerConsent, window.Shopify.PaymentButton.showBuyerConsent = portableWalletsShowBuyerConsent);


/* ===== next script block ===== */

document.addEventListener("DOMContentLoaded", (function () { function t() { return document.querySelector("shopify-accelerated-checkout-cart, shopify-accelerated-checkout") } if (t()) Shopify.PaymentButton.init(); else { new MutationObserver((function (e, n) { t() && (Shopify.PaymentButton.init(), n.disconnect()) })).observe(document.body, { childList: !0, subtree: !0 }) } }));


/* ===== next script block ===== */

{"activeMarketCountries":[{"code":"AF","name":"Afghanistan"},{"code":"AX","name":"Åland Islands"},{"code":"AL","name":"Albania"},{"code":"DZ","name":"Algeria"},{"code":"AD","name":"Andorra"},{"code":"AO","name":"Angola"},{"code":"AI","name":"Anguilla"},{"code":"AG","name":"Antigua \u0026 Barbuda"},{"code":"AR","name":"Argentina"},{"code":"AM","name":"Armenia"},{"code":"AW","name":"Aruba"},{"code":"AU","name":"Australia"},{"code":"AT","name":"Austria"},{"code":"AZ","name":"Azerbaijan"},{"code":"BS","name":"Bahamas"},{"code":"BH","name":"Bahrain"},{"code":"BD","name":"Bangladesh"},{"code":"BB","name":"Barbados"},{"code":"BY","name":"Belarus"},{"code":"BE","name":"Belgium"},{"code":"BZ","name":"Belize"},{"code":"BJ","name":"Benin"},{"code":"BM","name":"Bermuda"},{"code":"BT","name":"Bhutan"},{"code":"BO","name":"Bolivia"},{"code":"BA","name":"Bosnia \u0026 Herzegovina"},{"code":"BW","name":"Botswana"},{"code":"BV","name":"Bouvet Island"},{"code":"BR","name":"Brazil"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"VG","name":"British Virgin Islands"},{"code":"BN","name":"Brunei"},{"code":"BG","name":"Bulgaria"},{"code":"BF","name":"Burkina Faso"},{"code":"BI","name":"Burundi"},{"code":"KH","name":"Cambodia"},{"code":"CM","name":"Cameroon"},{"code":"CA","name":"Canada"},{"code":"CV","name":"Cape Verde"},{"code":"BQ","name":"Caribbean Netherlands"},{"code":"KY","name":"Cayman Islands"},{"code":"TD","name":"Chad"},{"code":"CL","name":"Chile"},{"code":"CN","name":"China"},{"code":"CX","name":"Christmas Island"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CO","name":"Colombia"},{"code":"CG","name":"Congo - Brazzaville"},{"code":"CD","name":"Congo - Kinshasa"},{"code":"CK","name":"Cook Islands"},{"code":"CR","name":"Costa Rica"},{"code":"CI","name":"Côte d’Ivoire"},{"code":"HR","name":"Croatia"},{"code":"CW","name":"Curaçao"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DK","name":"Denmark"},{"code":"DJ","name":"Djibouti"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"EC","name":"Ecuador"},{"code":"EG","name":"Egypt"},{"code":"SV","name":"El Salvador"},{"code":"ER","name":"Eritrea"},{"code":"EE","name":"Estonia"},{"code":"SZ","name":"Eswatini"},{"code":"ET","name":"Ethiopia"},{"code":"FO","name":"Faroe Islands"},{"code":"FJ","name":"Fiji"},{"code":"FI","name":"Finland"},{"code":"FR","name":"France"},{"code":"GF","name":"French Guiana"},{"code":"PF","name":"French Polynesia"},{"code":"TF","name":"French Southern Territories"},{"code":"GA","name":"Gabon"},{"code":"GM","name":"Gambia"},{"code":"GE","name":"Georgia"},{"code":"DE","name":"Germany"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GR","name":"Greece"},{"code":"GL","name":"Greenland"},{"code":"GD","name":"Grenada"},{"code":"GP","name":"Guadeloupe"},{"code":"GT","name":"Guatemala"},{"code":"GG","name":"Guernsey"},{"code":"GN","name":"Guinea"},{"code":"GY","name":"Guyana"},{"code":"HT","name":"Haiti"},{"code":"HM","name":"Heard \u0026 McDonald Islands"},{"code":"HN","name":"Honduras"},{"code":"HK","name":"Hong Kong SAR"},{"code":"HU","name":"Hungary"},{"code":"IS","name":"Iceland"},{"code":"IN","name":"India"},{"code":"ID","name":"Indonesia"},{"code":"IQ","name":"Iraq"},{"code":"IE","name":"Ireland"},{"code":"IM","name":"Isle of Man"},{"code":"IL","name":"Israel"},{"code":"IT","name":"Italy"},{"code":"JM","name":"Jamaica"},{"code":"JP","name":"Japan"},{"code":"JE","name":"Jersey"},{"code":"JO","name":"Jordan"},{"code":"KZ","name":"Kazakhstan"},{"code":"KE","name":"Kenya"},{"code":"XK","name":"Kosovo"},{"code":"KW","name":"Kuwait"},{"code":"KG","name":"Kyrgyzstan"},{"code":"LA","name":"Laos"},{"code":"LV","name":"Latvia"},{"code":"LB","name":"Lebanon"},{"code":"LS","name":"Lesotho"},{"code":"LR","name":"Liberia"},{"code":"LI","name":"Liechtenstein"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"MO","name":"Macao SAR"},{"code":"MG","name":"Madagascar"},{"code":"MW","name":"Malawi"},{"code":"MY","name":"Malaysia"},{"code":"MV","name":"Maldives"},{"code":"ML","name":"Mali"},{"code":"MT","name":"Malta"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MU","name":"Mauritius"},{"code":"MX","name":"Mexico"},{"code":"MD","name":"Moldova"},{"code":"MC","name":"Monaco"},{"code":"MN","name":"Mongolia"},{"code":"ME","name":"Montenegro"},{"code":"MS","name":"Montserrat"},{"code":"MA","name":"Morocco"},{"code":"MZ","name":"Mozambique"},{"code":"NA","name":"Namibia"},{"code":"NP","name":"Nepal"},{"code":"NL","name":"Netherlands"},{"code":"AN","name":"Netherlands Antilles"},{"code":"NC","name":"New Caledonia"},{"code":"NZ","name":"New Zealand"},{"code":"NI","name":"Nicaragua"},{"code":"NE","name":"Niger"},{"code":"NG","name":"Nigeria"},{"code":"NF","name":"Norfolk Island"},{"code":"MK","name":"North Macedonia"},{"code":"NO","name":"Norway"},{"code":"OM","name":"Oman"},{"code":"PK","name":"Pakistan"},{"code":"PS","name":"Palestinian Territories"},{"code":"PA","name":"Panama"},{"code":"PG","name":"Papua New Guinea"},{"code":"PY","name":"Paraguay"},{"code":"PE","name":"Peru"},{"code":"PH","name":"Philippines"},{"code":"PN","name":"Pitcairn Islands"},{"code":"PL","name":"Poland"},{"code":"PT","name":"Portugal"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RW","name":"Rwanda"},{"code":"SM","name":"San Marino"},{"code":"ST","name":"São Tomé \u0026 Príncipe"},{"code":"SA","name":"Saudi Arabia"},{"code":"SN","name":"Senegal"},{"code":"RS","name":"Serbia"},{"code":"SC","name":"Seychelles"},{"code":"SG","name":"Singapore"},{"code":"SX","name":"Sint Maarten"},{"code":"SK","name":"Slovakia"},{"code":"SI","name":"Slovenia"},{"code":"ZA","name":"South Africa"},{"code":"GS","name":"South Georgia \u0026 South Sandwich Islands"},{"code":"KR","name":"South Korea"},{"code":"SS","name":"South Sudan"},{"code":"ES","name":"Spain"},{"code":"LK","name":"Sri Lanka"},{"code":"BL","name":"St. Barthélemy"},{"code":"KN","name":"St. Kitts \u0026 Nevis"},{"code":"LC","name":"St. Lucia"},{"code":"MF","name":"St. Martin"},{"code":"VC","name":"St. Vincent \u0026 Grenadines"},{"code":"SR","name":"Suriname"},{"code":"SJ","name":"Svalbard \u0026 Jan Mayen"},{"code":"SE","name":"Sweden"},{"code":"CH","name":"Switzerland"},{"code":"TW","name":"Taiwan"},{"code":"TZ","name":"Tanzania"},{"code":"TH","name":"Thailand"},{"code":"TL","name":"Timor-Leste"},{"code":"TG","name":"Togo"},{"code":"TO","name":"Tonga"},{"code":"TT","name":"Trinidad \u0026 Tobago"},{"code":"TN","name":"Tunisia"},{"code":"TR","name":"Türkiye"},{"code":"TC","name":"Turks \u0026 Caicos Islands"},{"code":"UM","name":"U.S. Outlying Islands"},{"code":"UG","name":"Uganda"},{"code":"UA","name":"Ukraine"},{"code":"AE","name":"United Arab Emirates"},{"code":"GB","name":"United Kingdom"},{"code":"US","name":"United States"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VU","name":"Vanuatu"},{"code":"VA","name":"Vatican City"},{"code":"VE","name":"Venezuela"},{"code":"VN","name":"Vietnam"},{"code":"WF","name":"Wallis \u0026 Futuna"},{"code":"EH","name":"Western Sahara"},{"code":"YE","name":"Yemen"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}],"allCountries":[{"code":"AF","name":"Afghanistan"},{"code":"AX","name":"Åland Islands"},{"code":"AL","name":"Albania"},{"code":"DZ","name":"Algeria"},{"code":"AD","name":"Andorra"},{"code":"AO","name":"Angola"},{"code":"AI","name":"Anguilla"},{"code":"AG","name":"Antigua \u0026 Barbuda"},{"code":"AR","name":"Argentina"},{"code":"AM","name":"Armenia"},{"code":"AW","name":"Aruba"},{"code":"AC","name":"Ascension Island"},{"code":"AU","name":"Australia"},{"code":"AT","name":"Austria"},{"code":"AZ","name":"Azerbaijan"},{"code":"BS","name":"Bahamas"},{"code":"BH","name":"Bahrain"},{"code":"BD","name":"Bangladesh"},{"code":"BB","name":"Barbados"},{"code":"BY","name":"Belarus"},{"code":"BE","name":"Belgium"},{"code":"BZ","name":"Belize"},{"code":"BJ","name":"Benin"},{"code":"BM","name":"Bermuda"},{"code":"BT","name":"Bhutan"},{"code":"BO","name":"Bolivia"},{"code":"BA","name":"Bosnia \u0026 Herzegovina"},{"code":"BW","name":"Botswana"},{"code":"BR","name":"Brazil"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"VG","name":"British Virgin Islands"},{"code":"BN","name":"Brunei"},{"code":"BG","name":"Bulgaria"},{"code":"BF","name":"Burkina Faso"},{"code":"BI","name":"Burundi"},{"code":"KH","name":"Cambodia"},{"code":"CM","name":"Cameroon"},{"code":"CA","name":"Canada"},{"code":"CV","name":"Cape Verde"},{"code":"BQ","name":"Caribbean Netherlands"},{"code":"KY","name":"Cayman Islands"},{"code":"CF","name":"Central African Republic"},{"code":"TD","name":"Chad"},{"code":"CL","name":"Chile"},{"code":"CN","name":"China"},{"code":"CX","name":"Christmas Island"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CO","name":"Colombia"},{"code":"KM","name":"Comoros"},{"code":"CG","name":"Congo - Brazzaville"},{"code":"CD","name":"Congo - Kinshasa"},{"code":"CK","name":"Cook Islands"},{"code":"CR","name":"Costa Rica"},{"code":"CI","name":"Côte d’Ivoire"},{"code":"HR","name":"Croatia"},{"code":"CW","name":"Curaçao"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DK","name":"Denmark"},{"code":"DJ","name":"Djibouti"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"EC","name":"Ecuador"},{"code":"EG","name":"Egypt"},{"code":"SV","name":"El Salvador"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"ER","name":"Eritrea"},{"code":"EE","name":"Estonia"},{"code":"SZ","name":"Eswatini"},{"code":"ET","name":"Ethiopia"},{"code":"FK","name":"Falkland Islands"},{"code":"FO","name":"Faroe Islands"},{"code":"FJ","name":"Fiji"},{"code":"FI","name":"Finland"},{"code":"FR","name":"France"},{"code":"GF","name":"French Guiana"},{"code":"PF","name":"French Polynesia"},{"code":"TF","name":"French Southern Territories"},{"code":"GA","name":"Gabon"},{"code":"GM","name":"Gambia"},{"code":"GE","name":"Georgia"},{"code":"DE","name":"Germany"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GR","name":"Greece"},{"code":"GL","name":"Greenland"},{"code":"GD","name":"Grenada"},{"code":"GP","name":"Guadeloupe"},{"code":"GT","name":"Guatemala"},{"code":"GG","name":"Guernsey"},{"code":"GN","name":"Guinea"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HT","name":"Haiti"},{"code":"HN","name":"Honduras"},{"code":"HK","name":"Hong Kong SAR"},{"code":"HU","name":"Hungary"},{"code":"IS","name":"Iceland"},{"code":"IN","name":"India"},{"code":"ID","name":"Indonesia"},{"code":"IQ","name":"Iraq"},{"code":"IE","name":"Ireland"},{"code":"IM","name":"Isle of Man"},{"code":"IL","name":"Israel"},{"code":"IT","name":"Italy"},{"code":"JM","name":"Jamaica"},{"code":"JP","name":"Japan"},{"code":"JE","name":"Jersey"},{"code":"JO","name":"Jordan"},{"code":"KZ","name":"Kazakhstan"},{"code":"KE","name":"Kenya"},{"code":"KI","name":"Kiribati"},{"code":"XK","name":"Kosovo"},{"code":"KW","name":"Kuwait"},{"code":"KG","name":"Kyrgyzstan"},{"code":"LA","name":"Laos"},{"code":"LV","name":"Latvia"},{"code":"LB","name":"Lebanon"},{"code":"LS","name":"Lesotho"},{"code":"LR","name":"Liberia"},{"code":"LY","name":"Libya"},{"code":"LI","name":"Liechtenstein"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"MO","name":"Macao SAR"},{"code":"MG","name":"Madagascar"},{"code":"MW","name":"Malawi"},{"code":"MY","name":"Malaysia"},{"code":"MV","name":"Maldives"},{"code":"ML","name":"Mali"},{"code":"MT","name":"Malta"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MU","name":"Mauritius"},{"code":"YT","name":"Mayotte"},{"code":"MX","name":"Mexico"},{"code":"MD","name":"Moldova"},{"code":"MC","name":"Monaco"},{"code":"MN","name":"Mongolia"},{"code":"ME","name":"Montenegro"},{"code":"MS","name":"Montserrat"},{"code":"MA","name":"Morocco"},{"code":"MZ","name":"Mozambique"},{"code":"MM","name":"Myanmar (Burma)"},{"code":"NA","name":"Namibia"},{"code":"NR","name":"Nauru"},{"code":"NP","name":"Nepal"},{"code":"NL","name":"Netherlands"},{"code":"NC","name":"New Caledonia"},{"code":"NZ","name":"New Zealand"},{"code":"NI","name":"Nicaragua"},{"code":"NE","name":"Niger"},{"code":"NG","name":"Nigeria"},{"code":"NU","name":"Niue"},{"code":"NF","name":"Norfolk Island"},{"code":"MK","name":"North Macedonia"},{"code":"NO","name":"Norway"},{"code":"OM","name":"Oman"},{"code":"PK","name":"Pakistan"},{"code":"PS","name":"Palestinian Territories"},{"code":"PA","name":"Panama"},{"code":"PG","name":"Papua New Guinea"},{"code":"PY","name":"Paraguay"},{"code":"PE","name":"Peru"},{"code":"PH","name":"Philippines"},{"code":"PN","name":"Pitcairn Islands"},{"code":"PL","name":"Poland"},{"code":"PT","name":"Portugal"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RU","name":"Russia"},{"code":"RW","name":"Rwanda"},{"code":"WS","name":"Samoa"},{"code":"SM","name":"San Marino"},{"code":"ST","name":"São Tomé \u0026 Príncipe"},{"code":"SA","name":"Saudi Arabia"},{"code":"SN","name":"Senegal"},{"code":"RS","name":"Serbia"},{"code":"SC","name":"Seychelles"},{"code":"SL","name":"Sierra Leone"},{"code":"SG","name":"Singapore"},{"code":"SX","name":"Sint Maarten"},{"code":"SK","name":"Slovakia"},{"code":"SI","name":"Slovenia"},{"code":"SB","name":"Solomon Islands"},{"code":"SO","name":"Somalia"},{"code":"ZA","name":"South Africa"},{"code":"GS","name":"South Georgia \u0026 South Sandwich Islands"},{"code":"KR","name":"South Korea"},{"code":"SS","name":"South Sudan"},{"code":"ES","name":"Spain"},{"code":"LK","name":"Sri Lanka"},{"code":"BL","name":"St. Barthélemy"},{"code":"SH","name":"St. Helena"},{"code":"KN","name":"St. Kitts \u0026 Nevis"},{"code":"LC","name":"St. Lucia"},{"code":"MF","name":"St. Martin"},{"code":"PM","name":"St. Pierre \u0026 Miquelon"},{"code":"VC","name":"St. Vincent \u0026 Grenadines"},{"code":"SD","name":"Sudan"},{"code":"SR","name":"Suriname"},{"code":"SJ","name":"Svalbard \u0026 Jan Mayen"},{"code":"SE","name":"Sweden"},{"code":"CH","name":"Switzerland"},{"code":"TW","name":"Taiwan"},{"code":"TJ","name":"Tajikistan"},{"code":"TZ","name":"Tanzania"},{"code":"TH","name":"Thailand"},{"code":"TL","name":"Timor-Leste"},{"code":"TG","name":"Togo"},{"code":"TK","name":"Tokelau"},{"code":"TO","name":"Tonga"},{"code":"TT","name":"Trinidad \u0026 Tobago"},{"code":"TA","name":"Tristan da Cunha"},{"code":"TN","name":"Tunisia"},{"code":"TR","name":"Türkiye"},{"code":"TM","name":"Turkmenistan"},{"code":"TC","name":"Turks \u0026 Caicos Islands"},{"code":"TV","name":"Tuvalu"},{"code":"UM","name":"U.S. Outlying Islands"},{"code":"UG","name":"Uganda"},{"code":"UA","name":"Ukraine"},{"code":"AE","name":"United Arab Emirates"},{"code":"GB","name":"United Kingdom"},{"code":"US","name":"United States"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VU","name":"Vanuatu"},{"code":"VA","name":"Vatican City"},{"code":"VE","name":"Venezuela"},{"code":"VN","name":"Vietnam"},{"code":"WF","name":"Wallis \u0026 Futuna"},{"code":"EH","name":"Western Sahara"},{"code":"YE","name":"Yemen"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}],"fallbackCountryCode":"US","locales":[{"locale":"en","name":"English","published":true,"url":"\/"},{"locale":"es","name":"Spanish","published":false,"url":"\/es"}],"currentLocaleRootUrl":"\/","previewAttributes":{"showCompanyLocations":true,"showLanguages":false,"showMarkets":true,"userLocale":"en","translateAndAdaptAppHandle":"translate-and-adapt"},"shop":{"id":954332,"isPasswordEnabled":false,"b2bRestricted":false,"primaryLocale":"en","domain":"teradek-store.myshopify.com"},"theme":{"id":151822631090,"isDraft":false,"name":"cs-websites\/teradek-production","sharingAccessToken":"05cjjgb189cd9kes"},"pageSpecificData":{"resource":{"type":"PAGE","id":90691076274,"url":"https:\/\/teradek-store.myshopify.com\/admin\/pages\/90691076274","title":"Bolt 6 Series | Zero-Delay Wireless Video - Teradek","published":true}},"localizationData":{"currentLocale":"en","currentMarket":{"primary":false,"supportsShopPrimaryLocale":true,"marketId":7930034,"marketHandle":"us"}},"customerTags":{},"betas":{"10c98b12":true,"cc7bff1c":false}}

/* ===== next script block ===== */

window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');

/* ===== next script block ===== */


        document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
        if (Shopify.designMode) {
            document.documentElement.classList.add('shopify-design-mode');
        }


/* ===== next script block ===== */


        piAId = '924653';
        piCId = '';
        piHostname = 'go.teradek.com';
        (function () {
            function async_load() {
                var s = document.createElement('script'); s.type = 'text/javascript';
                s.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + piHostname + '/pd.js';
                var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
            }
            if (window.attachEvent) { window.attachEvent('onload', async_load); }
            else { window.addEventListener('load', async_load, false); }
        })();


/* ===== next script block ===== */

"use strict"; (() => {
                function mergeDeepMutate(target, ...sources) { if (!target) return target; if (sources.length === 0) return target; const isObject = obj => !!obj && typeof obj === "object"; const isPlainObject = obj => { if (!isObject(obj)) return false; const proto = Object.getPrototypeOf(obj); return proto === Object.prototype || proto === null }; for (const source of sources) { if (!source) continue; for (const key in source) { const sourceValue = source[key]; if (!(key in target)) { target[key] = sourceValue; continue } const targetValue = target[key]; if (Array.isArray(targetValue) && Array.isArray(sourceValue)) { target[key] = targetValue.concat(...sourceValue) } else if (isPlainObject(targetValue) && isPlainObject(sourceValue)) { target[key] = mergeDeepMutate(targetValue, sourceValue) } else { target[key] = sourceValue } } } return target } var Application = class { constructor(config, dataObjects) { this.modules = []; this.cachedModulesByConstructor = new Map; this.status = "created"; this.cachedEventListeners = {}; this.registryBlockListeners = []; this.readyListeners = []; this.mode = "production"; this.logLevel = 1; this.blocks = {}; const boostWidgetIntegration = window.boostWidgetIntegration; this.config = config || { logLevel: boostWidgetIntegration?.config?.logLevel, env: "production" }; this.logLevel = this.config.logLevel ?? (this.mode === "production" ? 2 : this.logLevel); if (this.config.logLevel == null) { this.config.logLevel = this.logLevel } this.dataObjects = dataObjects || {}; this.logger = { debug: (...args) => { if (this.logLevel <= 0) { console.debug("Boost > [DEBUG] ", ...args) } }, info: (...args) => { if (this.logLevel <= 1) { console.info("Boost > [INFO] ", ...args) } }, warn: (...args) => { if (this.logLevel <= 2) { console.warn("Boost > [WARN] ", ...args) } }, error: (...args) => { if (this.logLevel <= 3) { console.error("Boost > [ERROR] ", ...args) } } } } bootstrap() { if (this.status === "bootstrapped") { this.logger.warn("Application already bootstrapped"); return } if (this.status === "started") { this.logger.warn("Application already started"); return } this.loadModuleEventListeners(); this.dispatchLifecycleEvent({ name: "onBeforeAppBootstrap", payload: null }); if (this.config?.customization?.app?.onBootstrap) { this.config.customization.app.onBootstrap(this) } this.extendAppConfigFromModules(); this.extendAppConfigFromGlobalVariables(); this.initializeDataObjects(); this.assignGlobalVariables(); this.status = "bootstrapped"; this.dispatchLifecycleEvent({ name: "onAppBootstrap", payload: null }) } async initModules() { await Promise.all(this.modules.map(async module => { if (!module.shouldInit()) { this.logger.info("Module not initialized", module.constructor.name, "shouldInit returned false"); return } module.onBeforeModuleInit?.(); this.dispatchLifecycleEvent({ name: "onBeforeModuleInit", payload: { module } }); this.logger.info(`Initializing ${module.constructor.name} module`); try { await module.init(); this.dispatchLifecycleEvent({ name: "onModuleInit", payload: { module } }) } catch (error) { this.logger.error(`Error initializing module ${module.constructor.name}:`, error); this.dispatchLifecycleEvent({ name: "onModuleError", payload: { module, error: error instanceof Error ? error : new Error(String(error)) } }) } })) } getModule(constructor) { const module = this.cachedModulesByConstructor.get(constructor); if (module && !module.shouldInit()) { return void 0 } return module } getModuleByName(name) { const module = this.modules.find(mod => { const ModuleClass = mod.constructor; return ModuleClass.moduleName === name }); if (module && !module.shouldInit()) { return void 0 } return module } registerBlock(block) { if (!block.id) { this.logger.error("Block id is required"); return } const blockId = block.id; if (this.blocks[blockId]) { this.logger.error(`Block with id ${blockId} already exists`); return } this.blocks[blockId] = block; if (window.boostWidgetIntegration.blocks) { window.boostWidgetIntegration.blocks[blockId] = block } this.dispatchLifecycleEvent({ name: "onRegisterBlock", payload: { block } }); this.registryBlockListeners.forEach(listener => { try { listener(block) } catch (error) { this.logger.error("Error in registry block listener:", error) } }) } addRegistryBlockListener(listener) { this.registryBlockListeners.push(listener); Object.values(this.blocks).forEach(block => { try { listener(block) } catch (error) { this.logger.error("Error in registry block listener for existing block:", error) } }) } removeRegistryBlockListener(listener) { const index = this.registryBlockListeners.indexOf(listener); if (index > -1) { this.registryBlockListeners.splice(index, 1) } } onReady(handler) { if (this.status === "started") { try { handler() } catch (error) { this.logger.error("Error in ready handler:", error) } } else { this.readyListeners.push(handler) } } assignGlobalVariables() { if (!window.boostWidgetIntegration) { window.boostWidgetIntegration = {} } Object.assign(window.boostWidgetIntegration, { TAEApp: this, config: this.config, dataObjects: this.dataObjects, blocks: this.blocks }) } async start() { this.logger.info("Application starting"); this.bootstrap(); this.dispatchLifecycleEvent({ name: "onBeforeAppStart", payload: null }); await this.initModules(); this.status = "started"; this.dispatchLifecycleEvent({ name: "onAppStart", payload: null }); this.readyListeners.forEach(listener => { try { listener() } catch (error) { this.logger.error("Error in ready listener:", error) } }); if (this.config?.customization?.app?.onStart) { this.config.customization.app.onStart(this) } } destroy() { if (this.status !== "started") { this.logger.warn("Application not started yet"); return } this.modules.forEach(module => { this.dispatchLifecycleEvent({ name: "onModuleDestroy", payload: { module } }); module.destroy() }); this.modules = []; this.resetBlocks(); this.status = "destroyed"; this.dispatchLifecycleEvent({ name: "onAppDestroy", payload: null }) } setLogLevel(level) { this.logLevel = level; this.updateConfig({ logLevel: level }) } loadModule(ModuleConstructor) { if (!ModuleConstructor) { return this } const app = this; const moduleInstance = new ModuleConstructor(app); if (app.cachedModulesByConstructor.has(ModuleConstructor)) { this.logger.warn(`Module ${ModuleConstructor.name} already loaded`); return app } this.modules.push(moduleInstance); this.cachedModulesByConstructor.set(ModuleConstructor, moduleInstance); this.logger.info(`Module ${ModuleConstructor.name} already loaded`); return app } updateConfig(newConfig) { if (typeof newConfig === "function") { this.config = newConfig(this.config) } else { mergeDeepMutate(this.config, newConfig) } return this.config } dispatchLifecycleEvent(event) { switch (event.name) { case "onBeforeAppBootstrap": this.triggerEvent("onBeforeAppBootstrap", event); break; case "onAppBootstrap": this.logger.info("Application bootstrapped"); this.triggerEvent("onAppBootstrap", event); break; case "onBeforeModuleInit": this.triggerEvent("onBeforeModuleInit", event); break; case "onModuleInit": this.logger.info(`Module ${event.payload.module.constructor.name} initialized`); this.triggerEvent("onModuleInit", event); break; case "onModuleDestroy": this.logger.info(`Module ${event.payload.module.constructor.name} destroyed`); this.triggerEvent("onModuleDestroy", event); break; case "onBeforeAppStart": this.triggerEvent("onBeforeAppStart", event); break; case "onAppStart": this.logger.info("Application started"); this.triggerEvent("onAppStart", event); break; case "onAppDestroy": this.logger.info("Application destroyed"); this.triggerEvent("onAppDestroy", event); break; case "onAppError": this.logger.error("Application error", event.payload.error); this.triggerEvent("onAppError", event); break; case "onModuleError": this.logger.error("Module error", event.payload.module.constructor.name, event.payload.error); this.triggerEvent("onModuleError", event); break; case "onRegisterBlock": this.logger.info(`Block registered with id: ${event.payload.block.id}`); this.triggerEvent("onRegisterBlock", event); break; default: this.logger.warn("Unknown lifecycle event", event); break } } triggerEvent(eventName, event) { const eventListeners = this.cachedEventListeners[eventName]; if (eventListeners) { eventListeners.forEach(listener => { try { if (eventName === "onRegisterBlock" && event.payload && "block" in event.payload) { listener(event.payload.block) } else { listener(event) } } catch (error) { this.logger.error(`Error in event listener for ${eventName}:`, error, "Event data:", event) } }) } } extendAppConfigFromModules() { this.modules.forEach(module => { const extendAppConfig = module.extendAppConfig; if (extendAppConfig) { mergeDeepMutate(this.config, extendAppConfig) } }) } extendAppConfigFromGlobalVariables() { const initializedGlobalConfig = window.boostWidgetIntegration?.config; if (initializedGlobalConfig) { mergeDeepMutate(this.config, initializedGlobalConfig) } } initializeDataObjects() { this.modules.forEach(module => { const dataObject = module.dataObject; if (dataObject) { mergeDeepMutate(this.dataObjects, dataObject) } }) } resetBlocks() { this.logger.info("Resetting all blocks"); this.blocks = {} } loadModuleEventListeners() { this.cachedEventListeners = {}; const eventNames = ["onBeforeAppBootstrap", "onAppBootstrap", "onModuleInit", "onModuleDestroy", "onBeforeAppStart", "onAppStart", "onAppDestroy", "onAppError", "onModuleError", "onRegisterBlock"]; this.modules.forEach(module => { eventNames.forEach(eventName => { const eventListener = (...args) => { if (this.status === "bootstrapped" || this.status === "started") { if (!module.shouldInit()) return } return module[eventName]?.(...args) }; if (typeof eventListener === "function") { if (!this.cachedEventListeners[eventName]) { this.cachedEventListeners[eventName] = [] } if (eventName === "onRegisterBlock") { this.cachedEventListeners[eventName]?.push((block => { eventListener.call(module, block) })) } else { this.cachedEventListeners[eventName]?.push(eventListener.bind(module)) } } }) }) } }; var Module = class { constructor(app) { this.app = app } shouldInit() { return true } destroy() { } init() { } get extendAppConfig() { return {} } get dataObject() { return {} } }; var BoostTAEAppModule = class extends Module { constructor() { super(...arguments); this.boostTAEApp = null } get TAEApp() { const boostTAE = getBoostTAE(); if (!boostTAE) { throw new Error("Boost TAE is not initialized") } this.boostTAEApp = boostTAE; return this.boostTAEApp } get TAEAppConfig() { return this.TAEApp.config } get TAEAppDataObjects() { return this.TAEApp.dataObjects } }; var AdditionalElement = class extends BoostTAEAppModule {
                    get extendAppConfig() {
                        return {
                            additionalElementSettings: Object.assign(
                                {

                                    default_sort_order: { "search": "relevance", "all": "manual" },

                                }, { "customSortingList": "manual|price-ascending|price-descending|created-ascending|created-descending|relevance", "enableCollectionSearch": false })
                        };
                    }
                }; AdditionalElement.moduleName = "AdditionalElement"; function getShortenToFullParamMap() { const shortenUrlParamList = getBoostTAE().config?.filterSettings?.shortenUrlParamList; const map = {}; if (!Array.isArray(shortenUrlParamList)) { return map } shortenUrlParamList.forEach(item => { if (typeof item !== "string") return; const idx = item.lastIndexOf(":"); if (idx === -1) return; const full = item.slice(0, idx).trim(); const short = item.slice(idx + 1).trim(); if (full.length > 0 && short.length > 0) { map[short] = full } }); return map } function generateUUID() { return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[x]/g, function () { const r = Math.random() * 16 | 0; return r.toString(16) }); } function getQueryParamByKey(key) { const urlParams = new URLSearchParams(window.location.search); return urlParams.get(key) } function convertValueRequestStockStatus(v) { if (typeof v === "string") { if (v === "out-of-stock") return false; return true } if (Array.isArray(v)) { return v.map(_v => { if (_v === "out-of-stock") { return false } return true }) } return false } function isMobileWidth() { return window.innerWidth < 576 } function isTabletPortraitMaxWidth() { return window.innerWidth <= 991 } function detectDeviceByWidth() { let result = ""; if (isMobileWidth()) { result += "mobile|" } else { result = result.replace("mobile|", "") } if (isTabletPortraitMaxWidth()) { result += "tablet_portrait_max" } else { result = result.replace("tablet_portrait_max", "") } return result } function getSortBy() { const { generalSettings: { collection_id = 0, page = "collection", default_sort_by: defaultSortBy } = {}, additionalElementSettings: { default_sort_order: defaultSortOrder = {}, customSortingList } = {} } = getBoostTAE().config; const defaultSortingList = ["relevance", "best-selling", "manual", "title-ascending", "title-descending", "price-ascending", "price-descending", "created-ascending", "created-descending"]; const sortQueryKey = getQueryParamByKey("sort"); const sortingList = customSortingList ? customSortingList.split("|") : defaultSortingList; if (sortQueryKey && sortingList.includes(sortQueryKey)) return sortQueryKey; const searchPage = page === "search"; const collectionPage = page === "collection"; if (searchPage) sortingList.splice(sortingList.indexOf("manual"), 1); const { all, search } = defaultSortOrder; if (collectionPage) { if (collection_id in defaultSortOrder) { return defaultSortOrder[collection_id] } else if (all) { return all } else if (defaultSortBy) { return defaultSortBy } } else if (searchPage) { return search || "relevance" } return "" } var addParamsLocale = (params = {}) => { params.return_all_currency_fields = false; return { ...params, currency_rate: window.Shopify?.currency?.rate, currency: window.Shopify?.currency?.active, country: window.Shopify?.country } }; var getLocalStorage = key => { try { const value = localStorage.getItem(key); if (value) return JSON.parse(value); return null } catch { return null } }; var setLocalStorage = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)) } catch (error) { getBoostTAE().logger.error("Error setLocalStorage", error) } }; var removeLocalStorage = key => { try { localStorage.removeItem(key) } catch (error) { getBoostTAE().logger.error("Error removeLocalStorage", error) } }; function roundToNearest50(num) { const remainder = num % 50; if (remainder > 25) { return num + (50 - remainder) } else { return num - remainder } } function lazyLoadImages(dom) { if (!dom) return; const lazyImages = dom.querySelectorAll(".boost-sd__product-image-img[loading='lazy']"); lazyImages.forEach(function (img) { inViewPortHandler(img.parentElement, element => { const imgElement = element.querySelector(".boost-sd__product-image-img[loading='lazy']"); if (imgElement) { imgElement.removeAttribute("loading") } }) }) } function inViewPortHandler(elements, callback) { const observer = new IntersectionObserver(function intersectionObserverCallback(entries, observer2) { entries.forEach(function (entry) { if (entry.isIntersecting) { callback(entry.target); observer2.unobserve(entry.target) } }) }); if (Array.isArray(elements)) { elements.forEach(element => observer.observe(element)) } else { observer.observe(elements) } } var isBadUrl = url => { try { if (!url) { const searchString2 = getWindowLocation().search; if (!searchString2 || searchString2.length <= 1) { return false } return checkSearchStringForXSS(searchString2) } if (typeof url === "string") { const questionMarkIndex = url.indexOf("?"); const searchString2 = questionMarkIndex >= 0 ? url.substring(questionMarkIndex) : ""; if (!searchString2 || searchString2.length <= 1) { return false } return checkSearchStringForXSS(searchString2) } const searchString = url.search; if (!searchString || searchString.length <= 1) { return false } return checkSearchStringForXSS(searchString) } catch { return true } }; var checkSearchStringForXSS = searchString => { const urlParams = decodeURIComponent(searchString).split("&"); for (let i = 0; i < urlParams.length; i++) { if (isBadSearchTerm(urlParams[i])) { return true } } return false }; var getWindowLocation = () => { const href = window.location.href; const escapedHref = href.replace(/%3C/g, "&lt;").replace(/%3E/g, "&gt;"); const rebuildHrefArr = []; for (let i = 0; i < escapedHref.length; i++) { rebuildHrefArr.push(escapedHref.charAt(i)) } const rebuildHref = rebuildHrefArr.join("").split("&lt;").join("%3C").split("&gt;").join("%3E"); let rebuildSearch = ""; const hrefWithoutHash = rebuildHref.replace(/#.*$/, ""); if (hrefWithoutHash.split("?").length > 1) { rebuildSearch = hrefWithoutHash.split("?")[1]; if (rebuildSearch.length > 0) { rebuildSearch = "?" + rebuildSearch } } return { pathname: window.location.pathname, href: rebuildHref, search: rebuildSearch } }; var isBadSearchTerm = term => { if (typeof term == "string") { term = term.toLowerCase(); const domEvents = ["img src", "script", "alert", "onabort", "popstate", "afterprint", "beforeprint", "beforeunload", "blur", "canplay", "canplaythrough", "change", "click", "contextmenu", "copy", "cut", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "ended", "error", "focus", "focusin", "focusout", "fullscreenchange", "fullscreenerror", "hashchange", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "mouseout", "mouseup", "offline", "online", "pagehide", "pageshow", "paste", "pause", "play", "playing", "progress", "ratechange", "resize", "reset", "scroll", "search", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "toggle", "touchcancel", "touchend", "touchmove", "touchstart", "unload", "volumechange", "waiting", "wheel"]; const potentialEventRegex = new RegExp(domEvents.join("=|on")); const countOpenTag = (term.match(/</g) || []).length; const countCloseTag = (term.match(/>/g) || []).length; const isAlert = (term.match(/alert\(/g) || []).length; const isConsoleLog = (term.match(/console\.log\(/g) || []).length; const isExecCommand = (term.match(/execCommand/g) || []).length; const isCookie = (term.match(/document\.cookie/g) || []).length; const isJavascript = (term.match(/j.*a.*v.*a.*s.*c.*r.*i.*p.*t/g) || []).length; const isPotentialEvent = potentialEventRegex.test(term); if (countOpenTag > 0 && countCloseTag > 0 || countOpenTag > 1 || countCloseTag > 1 || isAlert || isConsoleLog || isExecCommand || isCookie || isJavascript || isPotentialEvent) { return true } } return false }; var isCollectionPage = () => { return getBoostTAE().config.generalSettings?.page === "collection" }; var isSearchPage = () => { return getBoostTAE().config.generalSettings?.page === "search" }; var isCartPage = () => { return getBoostTAE().config.generalSettings?.page === "cart" }; var isProductPage = () => { return getBoostTAE().config.generalSettings?.page === "product" }; var isHomePage = () => { return getBoostTAE().config.generalSettings?.page === "index" }; var isVendorPage = () => { return window.location.pathname.indexOf("/collections/vendors") > -1 }; var getCurrentPage = () => { let currentPage = ""; switch (true) { case isCollectionPage(): currentPage = "collection_page"; break; case isSearchPage(): currentPage = "search_page"; break; case isProductPage(): currentPage = "product_page"; break; case isCartPage(): currentPage = "cart_page"; break; case isHomePage(): currentPage = "home_page"; break; default: break }return currentPage }; var checkExistFilterOptionParam = () => { const queryParams = new URLSearchParams(window.location.search); const shortenToFullMap = getShortenToFullParamMap(); const hasShortenMap = Object.keys(shortenToFullMap).length > 0; for (const [key] of queryParams.entries()) { if (key.indexOf("pf_") > -1) { return true } if (hasShortenMap && shortenToFullMap[key]) { return true } } return false }; function getCustomerId() { return window?.__st?.cid || window?.meta?.page?.customerId || window?.ShopifyAnalytics?.meta?.page?.customerId || window?.ShopifyAnalytics?.lib?.user?.()?.traits()?.uniqToken } function isShopifyTypePage() { return window.location.pathname.indexOf("/collections/types") > -1 } var Analytics = class _Analytics extends BoostTAEAppModule { saveRequestId(type, request_id, bundles = []) { const requestIds = getLocalStorage(_Analytics.STORAGE_KEY_PRE_REQUEST_IDS) || {}; requestIds[type] = request_id; if (Array.isArray(bundles)) { bundles?.forEach(bundle => { let placement = ""; switch (type) { case "search": placement = _Analytics.KEY_PLACEMENT_BY_TYPE.search_page; break; case "suggest": placement = _Analytics.KEY_PLACEMENT_BY_TYPE.search_page; break; case "product_page_bundle": placement = _Analytics.KEY_PLACEMENT_BY_TYPE.product_page; break; default: break }requestIds[`${bundle.widgetId || ""}_${placement}`] = request_id }) } setLocalStorage(_Analytics.STORAGE_KEY_PRE_REQUEST_IDS, requestIds) } savePreAction(type) { setLocalStorage(_Analytics.STORAGE_KEY_PRE_ACTION, type) } }; Analytics.moduleName = "Analytics"; Analytics.STORAGE_KEY_PRE_REQUEST_IDS = "boostSdPreRequestIds"; Analytics.STORAGE_KEY_PRE_ACTION = "boostSdPreAction"; Analytics.KEY_PLACEMENT_BY_TYPE = { product_page: "product_page", search_page: "search_page", instant_search: "instant_search" }; var AppSettings = class extends BoostTAEAppModule {
                    get extendAppConfig() {
                        return {
                            cdn: "https://cdn.boostcommerce.io", bundleUrl: "https://services.mybcapps.com/bc-sf-filter/bundles", productUrl: "https://services.mybcapps.com/bc-sf-filter/products", subscriptionUrl: "https://services.mybcapps.com/bc-sf-filter/subscribe-b2s", taeSettings: window.boostWidgetIntegration?.taeSettings || { instantSearch: { enabled: false } }, generalSettings: Object.assign(
                                {
                                    preview_mode: false, preview_path: "", page: "page", custom_js_asset_url: "", custom_css_asset_url: "", collection_id: 0, collection_handle: "", collection_product_count: 0, ...
                                        {


                                        }, collection_tags: null, current_tags: null, default_sort_by: "", swatch_extension: "png", no_image_url: "https://cdn.shopify.com/extensions/019d6590-6685-737c-976c-3e7722507a93/boost-fe-209/assets/boost-pfs-no-image.jpg", search_term: "", template: "page.bolt-6-series-v7", currencies: ["USD"], current_currency: "USD", published_locales: {
                                            ...
                                            { "en": true }
                                        }, current_locale: "en"
                                },
                                { "enableTrackingOrderRevenue": true, "addCollectionToProductUrl": true }
                            ), translation: {}, ...
                            {



                                translation: { "search": { "resultEmpty": "We couldn't find results for {{ terms }}.{{ breakline }}But don't give up – check the spelling or try less specific search terms.", "searchPanelProduct": "Products", "searchPanelCollection": "Collections", "searchPanelPage": "Pages & Blogs", "searchTipsTitle": "Search tips", "searchTipsContent": "Please double-check your spelling.{{ breakline }}Use more generic search terms.{{ breakline }}Enter fewer keywords.{{ breakline }}Try searching by product type, brand, model number or product feature.", "noSearchResultSearchTermLabel": "Popular Searches", "noSearchResultProductsLabel": "Trending Products", "searchBoxOnclickRecentSearchLabel": "Recent searches", "searchBoxOnclickSearchTermLabel": "Popular searches", "searchBoxOnclickProductsLabel": "Trending products" }, "suggestion": { "instantSearchSuggestionsLabel": "Popular suggestions", "instantSearchCollectionsLabel": "Shop", "instantSearchProductsLabel": "Buy", "instantSearchPagesLabel": "Learn", "searchBoxOnclickRecentSearchLabel": "Recent searches", "searchBoxOnclickSearchTermLabel": "Popular searches", "searchBoxOnclickProductsLabel": "Trending products", "noSearchResultSearchTermLabel": "Popular Searches", "noSearchResultProductsLabel": "Trending Products" }, "error": {}, "recommendation": { "homepage-732535": "Just dropped", "homepage-475526": "Best Sellers", "collectionpage-642153": "Just dropped", "collectionpage-744733": "Most Popular Products", "productpage-401031": "Recently viewed", "cartpage-533802": "Still interested in this?", "cartpage-126363": "Similar Products", "productpage-752048": "Recommended Accessories", "productpage-776246": "Frequently bought together", "productpage-380711": "Frequently bought together", "productpage-556608": "Frequently bought together", "productpage-163118": "Recommended Accessories" }, "productItem": { "qvBtnLabel": null, "atcAvailableLabel": "Add to cart", "soldoutLabel": "Sold out", "productItemSale": "Sale", "productItemSoldOut": "Sold out", "viewProductBtnLabel": null, "atcSelectOptionsLabel": "Choose options", "amount": "From {{minPrice}}", "savingAmount": "Save {{saleAmount}}", "swatchButtonText1": null, "swatchButtonText2": null, "swatchButtonText3": null, "inventoryInStock": null, "inventoryLowStock": null, "inventorySoldOut": null, "atcAddingToCartBtnLabel": "Adding...", "atcAddedToCartBtnLabel": "Added!" }, "quickView": { "buyItNowBtnLabel": "Buy it now" }, "cart": { "atcMiniCartViewCartLabel": "View cart", "atcMiniCartCheckoutLabel": "Checkout" }, "recentlyViewed": {}, "mostPopular": {}, "perpage": {}, "productCount": { "textDescriptionCollectionHeader": null, "textDescriptionCollectionHeaderPlural": null, "textDescriptionToolbar": null, "textDescriptionToolbarPlural": null, "textDescriptionPagination": "Showing {{from}} - {{to}} of {{total}} products", "textDescriptionPaginationPlural": "Showing {{from}} - {{to}} of {{total}} products" }, "pagination": { "loadMoreText": "Load more", "prevText": "Previous", "nextText": "Next" }, "sortingList": { "manual": "Featured", "price-ascending": "Price, Low to High", "price-descending": "Price, High to Low", "created-ascending": "Date, Old to New", "created-descending": "Date, New to Old", "relevance": "Relevance" }, "collectionHeader": {}, "breadcrumb": {}, "sliderProduct": {}, "inCollectionSearch": "Search for products in this collection", "filterOptions": { "filterOption|ryHNDv4VB|pf_opt_kit_type": "Type", "filterOption|ryHNDv4VB|pf_p_price": "Price", "filterOption|ryHNDv4VB|pf_opt_range": "Range", "filterOption|ryHNDv4VB|pf_opt_model": "Model", "filterOption|ryHNDv4VB|pf_opt_battery_type": "Battery Type", "filterOption|ryHNDv4VB|pf_opt_accessories": "Accessories", "filterOption|ryHNDv4VB|pf_opt_product": "Product", "filterOption|HJEPW_NEr|pf_t_set_type": "Set Type", "filterOption|HJEPW_NEr|pf_opt_mount": "Mount", "filterOption|HJEPW_NEr|pf_opt_number_of_receivers": "Number of receivers", "filterOption|HJEPW_NEr|pf_t_accessories": "Accessories", "filterOption|HJEPW_NEr|pf_t_range": "Range", "filterOption|HJIVHFV4r|pf_t_model": "Model", "filterOption|HJIVHFV4r|pf_t_range": "Range", "filterOption|HJIVHFV4r|pf_opt_mount": "Mount", "filterOption|HJIVHFV4r|pf_t_set_type": "Set Type", "filterOption|HJIVHFV4r|pf_t_signal_input": "Signal Input", "filterOption|HJIVHFV4r|pf_t_output_signal": "Output Signal", "filterOption|HJIVHFV4r|pf_opt_number_of_receivers": "Number of receivers", "filterOption|HJIVHFV4r|pf_t_accessories": "Accessories", "filterOption|HJIVHFV4r|pf_t_smallhd_wireless_compatability": "SmallHD Wireless Compatability", "filterOption|ByIfgF-k06S|pf_pt_product_type": "Product Type", "filterOption|ByIfgF-k06S|pf_t_product": "Product", "filterOption|ByIfgF-k06S|pf_p_price": "Price", "filterOption|SJQkaXRJO|pf_t_inventory_type": "Inventory Type", "filterOption|SJQkaXRJO|pf_t_product": "Product", "filterOption|SJQkaXRJO|pf_t_bolt_series": "Bolt Series", "filterOption|p5IrNn83n|pf_t_type": "Type", "filterOption|p5IrNn83n|pf_t_range": "Range", "filterOption|p5IrNn83n|pf_t_antenna_type": "Antenna Type", "filterOption|p5IrNn83n|pf_t_model": "Model", "filterOption|p5IrNn83n|pf_t_video_cable": "Video Cable", "filterOption|p5IrNn83n|pf_t_power": "Power", "filterOption|p5IrNn83n|pf_t_mounting": "Mounting", "filterOption|p5IrNn83n|pf_t_antennas": "Antennas", "filterOption|p5IrNn83n|pf_t_camera_control": "Camera Control", "filterOption|p5IrNn83n|pf_t_other": "Other", "filterOption|ITCbEw_WA|pf_t_cube_series": "Cube Series", "filterOption|ITCbEw_WA|pf_t_type": "Type", "filterOption|ITCbEw_WA|pf_t_codec": "Codec", "filterOption|ITCbEw_WA|pf_t_input_output": "Input / Output", "filterOption|ITCbEw_WA|pf_t_network": "Network", "filterOption|ITCbEw_WA|pf_t_accessories": "Accessories", "filterOption|ITCbEw_WA|pf_t_range": "Range", "filterOption|WiY4O48Kw|pf_t_kits": "Kits", "filterOption|WiY4O48Kw|pf_t_controller": "Controller", "filterOption|WiY4O48Kw|pf_t_receiver": "Receiver", "filterOption|WiY4O48Kw|pf_t_lens_motor": "Lens Motor", "filterOption|WiY4O48Kw|pf_t_accessories": "Accessories", "filterOption|RRqs_NfXm|pf_t_type": "Type", "filterOption|ihFdcuAoH|pf_t_model": "Model", "filterOption|ihFdcuAoH|pf_t_type": "Type", "filterOption|ihFdcuAoH|pf_opt_resolution": "Resolution", "filterOption|ihFdcuAoH|pf_t_accessories": "Accessories", "filterOption|x--4u13IQ|pf_t_product_type": "Product Type", "filterOption|g_18rQGoP|pf_t_product_type": "Product Type", "filterOption|LXA4QlhDi|pf_t_kits": "Kits", "filterOption|LXA4QlhDi|pf_t_standalone_units": "Standalone Units", "filterOption|LXA4QlhDi|pf_t_accessories_compatible_with": "Accessories Compatible with", "filterOption|LXA4QlhDi|pf_t_camera_control": "Camera Control", "filterOption|LXA4QlhDi|pf_t_cables": "Cables", "filterOption|LXA4QlhDi|pf_t_hardware": "Hardware", "filterOption|LXA4QlhDi|pf_t_other": "Other", "filterOption|j8bGGPMgr|pf_t_shop_by_product": "Shop by Product", "filterOption|j8bGGPMgr|pf_t_shop_by_bolt_model": "Shop By Bolt Model", "filterOption|j8bGGPMgr|pf_t_shop_by_legacy_product": "Shop by Legacy Product", "filterOption|j8bGGPMgr|pf_t_video_cable": "Video Cable", "filterOption|j8bGGPMgr|pf_t_power_cable": "Power Cable", "filterOption|j8bGGPMgr|pf_t_hardware": "Hardware", "filterOption|j8bGGPMgr|pf_t_power": "Power", "filterOption|j8bGGPMgr|pf_t_other": "Other", "filterOption|j8bGGPMgr|pf_t_bolt_specialty": "Bolt Specialty", "filterOption|j8bGGPMgr|pf_t_rt_accessories": "RT Accessories", "filterOption|bQu386_FK|pf_t_bolt": "Bolt", "filterOption|bQu386_FK|pf_t_serv": "Serv", "filterOption|bQu386_FK|pf_t_rt": "RT", "filterOption|hcKSLyuc_|pf_t_shop_by_product": "Shop by Product", "filterOption|hcKSLyuc_|pf_t_video_cable": "Video Cable", "filterOption|hcKSLyuc_|pf_t_power_cable": "Power Cable", "filterOption|hcKSLyuc_|pf_t_power": "Power", "filterOption|hcKSLyuc_|pf_t_other": "Other", "filterOption|hcKSLyuc_|pf_t_legacy": "Legacy", "filterOption|OXiWFm9wW|pf_t_type": "Type", "filterOption|OXiWFm9wW|pf_t_power": "Power", "filterOption|OXiWFm9wW|pf_t_hardware": "Hardware", "filterOption|OXiWFm9wW|pf_t_video_cable": "Video Cable", "filterOption|OXiWFm9wW|pf_t_other": "Other", "filterOption|DZA48wntua|pf_t_type": "Type", "filterOption|DZA48wntua|pf_t_range": "Range", "filterOption|DZA48wntua|pf_t_model": "Model", "filterOption|DZA48wntua|pf_t_accessories_video_cable": "Accessories: Video Cable", "filterOption|DZA48wntua|pf_t_accessories_power": "Accessories: Power", "filterOption|DZA48wntua|pf_t_accessories_mounting": "Accessories: Mounting", "filterOption|DZA48wntua|pf_t_accessories_antennas": "Accessories: Antennas", "filterOption|DZA48wntua|pf_t_accessories_other": "Accessories: Other", "filterOption|orLAsK3taY|pf_opt_extension": "Extension", "filterOption|WG4JhAM9Pd|pf_m_::global::productLabel": "Type" }, "predictiveBundle": {} },

                            }
                        };
                    }
                }; AppSettings.moduleName = "AppSettings"; var AssetFilesLoader = class extends BoostTAEAppModule { constructor() { super(...arguments); this.cacheVersionString = Date.now().toString() } onAppStart() { this.loadAssetFiles(); this.assetLoadingPromise("themeCSS").then(() => { this.TAEApp.updateConfig({ themeCssLoaded: true }) }); this.assetLoadingPromise("settingsCSS").then(() => { this.TAEApp.updateConfig({ settingsCSSLoaded: true }) }) } loadAssetFiles() { this.loadThemeCSS(); this.loadSettingsCSS(); this.loadMainScript(); this.loadRTLCSS(); this.loadCustomizedCSSAndScript() } loadCustomizedCSSAndScript() { const { assetFilesLoader, templateMetadata } = this.TAEAppConfig; const themeCSSLinkElement = assetFilesLoader.themeCSS.element; const settingCSSLinkElement = assetFilesLoader.settingsCSS.element; const loadResources = () => { if (this.TAEAppConfig.assetFilesLoader.themeCSS.status !== "loaded" || this.TAEAppConfig.assetFilesLoader.settingsCSS.status !== "loaded") return; if (templateMetadata?.customizeCssUrl) { this.loadCSSFile("customizedCSS") } if (templateMetadata?.customizeJsUrl) { this.loadScript("customizedScript") } }; themeCSSLinkElement?.addEventListener("load", loadResources); settingCSSLinkElement?.addEventListener("load", loadResources) } loadSettingsCSS() { const result = this.loadCSSFile("settingsCSS"); return result } loadThemeCSS() { const result = this.loadCSSFile("themeCSS"); return result } loadRTLCSS() { const rtlDetected = document.documentElement.getAttribute("dir") === "rtl"; if (rtlDetected) { const result = this.loadCSSFile("rtlCSS"); return result } } loadMainScript() { const result = this.loadScript("mainScript"); return result } preloadModuleScript(module) { const TAEAppConfig = this.TAEAppConfig; const inStagingEnv = TAEAppConfig.env === "staging"; const themeLibVersion = inStagingEnv ? "staging" : TAEAppConfig.templateMetadata?.themeLibVersion; if (!inStagingEnv) return; if (!["filter", "recommendation", "instant-search"].includes(module)) return; const scriptUrl = `${TAEAppConfig.cdn}/${"widget-integration"}/${themeLibVersion}/${module}.module.js`; const link = document.createElement("link"); link.rel = "preload"; link.as = "script"; link.href = scriptUrl; document.head?.appendChild(link) } loadResourceByName(name, options) { if (this.TAEAppConfig.assetFilesLoader[name].element) return; const assetsState = this.TAEAppConfig.assetFilesLoader[name]; const resourceType = options?.resourceType || assetsState.type; const inStagingEnv = this.TAEAppConfig.env === "staging"; let url = options?.url || assetsState.url; if (!url) { switch (name) { case "themeCSS": url = this.TAEAppConfig.templateMetadata?.themeCssUrl || this.TAEAppConfig.fallback?.themeCssUrl; if (inStagingEnv) { url += `?v=${this.cacheVersionString}` } break; case "settingsCSS": url = this.TAEAppConfig.templateMetadata?.settingsCssUrl || this.TAEAppConfig.fallback?.settingsCssUrl; break; case "rtlCSS": { const { themeCSS } = this.TAEAppConfig.assetFilesLoader; if (themeCSS.url) { const themeCssUrl = new URL(themeCSS.url); const themeCssPathWithoutFilename = themeCssUrl.pathname.split("/").slice(0, -1).join("/"); const rtlCssPath = themeCssPathWithoutFilename + "/rtl.css"; url = new URL(rtlCssPath, themeCssUrl.origin).href; if (inStagingEnv) { url += `?v=${this.cacheVersionString}` } } break } case "mainScript": url = `${this.TAEAppConfig.cdn}/${"widget-integration"}/${inStagingEnv ? "staging" : this.TAEAppConfig.templateMetadata?.themeLibVersion}/${"bc-widget-integration.js"}`; if (inStagingEnv) { url += `?v=${this.cacheVersionString}` } break; case "customizedCSS": url = this.TAEAppConfig.templateMetadata?.customizeCssUrl; break; case "customizedScript": url = this.TAEAppConfig.templateMetadata?.customizeJsUrl; break } } if (!url) return; if (resourceType === "stylesheet") { const link = document.createElement("link"); link.rel = "stylesheet"; link.type = "text/css"; link.media = "all"; link.href = url; document.head.appendChild(link); this.TAEApp.updateConfig({ assetFilesLoader: { [name]: { element: link, status: "loading", url } } }); link.onload = () => { this.TAEApp.updateConfig({ assetFilesLoader: { [name]: { element: link, status: "loaded", url } } }) }; link.onerror = () => { this.TAEApp.updateConfig({ assetFilesLoader: { [name]: { element: link, status: "error", url } } }) } } else if (resourceType === "script") { const script = document.createElement("script"); script.src = url; const strategy = options?.strategy; if (strategy === "async") { script.async = true } else if (strategy === "defer") { script.defer = true } if (assetsState.module) { script.type = "module" } if (strategy === "async" || strategy === "defer") { const link = document.createElement("link"); link.rel = "preload"; link.as = "script"; link.href = url; document.head?.appendChild(link) } document.head.appendChild(script); this.TAEApp.updateConfig({ assetFilesLoader: { [name]: { element: script, status: "loading", url } } }); script.onload = () => { this.TAEApp.updateConfig({ assetFilesLoader: { [name]: { element: script, status: "loaded", url } } }) }; script.onerror = () => { this.TAEApp.updateConfig({ assetFilesLoader: { [name]: { element: script, status: "error", url } } }) }; script.onprogress = () => { this.TAEApp.updateConfig({ assetFilesLoader: { [name]: { element: script, status: "loading", url } } }) } } } loadCSSFile(name, url) { return this.loadResourceByName(name, { url, resourceType: "stylesheet" }) } loadScript(name, url, strategy) { return this.loadResourceByName(name, { strategy, url, resourceType: "script" }) } assetLoadingPromise(name, timeout = 5e3) { return new Promise((resolve, reject) => { let timeoutNumber = null; const { assetFilesLoader } = this.TAEAppConfig; const asset = assetFilesLoader[name]; if (asset.status === "loaded") { return resolve(true) } if (!asset.element) { this.loadResourceByName(name) } const assetElement = this.TAEAppConfig.assetFilesLoader[name]?.element; if (!assetElement) { this.TAEApp.logger.warn(`Asset ${name} not foumd`); return resolve(false) } assetElement?.addEventListener("load", () => { if (timeoutNumber) clearTimeout(timeoutNumber); resolve(true) }); assetElement?.addEventListener("error", () => { if (timeoutNumber) clearTimeout(timeoutNumber); reject(new Error(`Failed to load asset ${name}`)) }); timeoutNumber = setTimeout(() => { reject(new Error(`Timeout loading asset ${name}`)) }, timeout) }) } get extendAppConfig() { return { themeCssLoaded: false, settingsCSSLoaded: false, assetFilesLoader: { themeCSS: { type: "stylesheet", element: null, status: "not-initialized", url: null }, settingsCSS: { type: "stylesheet", element: null, status: "not-initialized", url: null }, rtlCSS: { type: "stylesheet", element: null, status: "not-initialized", url: null }, customizedCSS: { type: "stylesheet", element: null, status: "not-initialized", url: null }, mainScript: { type: "script", element: null, status: "not-initialized", url: null }, customizedScript: { type: "script", element: null, status: "not-initialized", url: null } } } } }; AssetFilesLoader.moduleName = "AssetFilesLoader"; var B2B = class extends BoostTAEAppModule {
                    setQueryParams(urlParams) { const { b2b } = this.TAEAppConfig; if (!b2b.enabled) return; urlParams.set("company_location_id", `${b2b.current_company_id}_${b2b.current_location_id}`); const shopifyCurrencySettings = window.Shopify?.currency; if (shopifyCurrencySettings) { urlParams.set("currency", shopifyCurrencySettings.active); urlParams.set("currency_rate", shopifyCurrencySettings.rate.toString()) } } get extendAppConfig() {
                        return {
                            b2b: Object.assign({ enabled: false },
                                {

                                }
                            )
                        };
                    }
                }; B2B.moduleName = "B2B"; var Fallback = class _Fallback extends BoostTAEAppModule { get extendAppConfig() { return { fallback: { containerElement: ".boost-sd__filter-product-list", themeCssUrl: "https://cdn.boostcommerce.io/widget-integration/theme/default/1.0.1/main.css", settingsCssUrl: "https://boost-cdn-staging.bc-solutions.net/widget-integration/theme/default/staging/default-settings.css" } } } dispatchEvent() { const enableEvent = new CustomEvent(_Fallback.EVENT_NAME); window.dispatchEvent(enableEvent) } async loadFallbackSectionFromShopify(payload) { return fetch(payload.url || `${window.location.origin}/?section_id=${payload.sectionName}`).catch(error => { this.TAEApp.logger.error("Error loading fallback section from Shopify:", error); throw error }).then(res => res.text()) } get containerElement() { const { containerElement } = this.TAEAppConfig.fallback; if (containerElement instanceof HTMLElement) { return containerElement } return document.querySelector(containerElement) } async loadFilterProductFallback() { const { fallback, cdn = "https://boost-cdn-prod.bc-solutions.net", templateMetadata } = this.TAEAppConfig; const customizedFallbackSettings = fallback?.customizedTemplate || templateMetadata.customizedFallback; if (customizedFallbackSettings) { const { source, templateName, templateURL } = customizedFallbackSettings; switch (source) { case "Shopify": { if (!templateName && !templateURL) { this.TAEApp.logger.warn("Both templateName and templateURL are undefined"); return } const html = await this.loadFallbackSectionFromShopify({ sectionName: templateName, url: templateURL }); const container = this.containerElement; if (!container) { this.TAEApp.logger.warn("Container element not found for fallback template"); return } container.innerHTML = html; this.dispatchEvent(); return } default: this.TAEApp.logger.warn(`Unsupported source for customized template: ${source}`); return } } const script = document.createElement("script"); script.src = `${cdn}/fallback-theme/1.0.12/boost-sd-fallback-theme.js`; script.defer = true; script.onload = () => { this.dispatchEvent() }; document.body.appendChild(script) } }; Fallback.moduleName = "Fallback"; Fallback.EVENT_NAME = "boost-sd-enable-product-filter-fallback"; var SimplifiedIntegration = class extends BoostTAEAppModule {
                    constructor() { super(...arguments); this.ensurePlaceholder = () => { const { simplifiedIntegration: { enabled, selectedSelector } } = this.TAEAppConfig; if (enabled && !!selectedSelector) { const container = document.querySelector(selectedSelector); this.TAEApp.logger.info(`Placeholder container found: `, container); if (container && container instanceof HTMLElement) { this.renderPlaceholder(container); this.collectionFilterModule?.initBlock() } else { this.TAEApp.logger.error(`Placeholder container not found: ${selectedSelector}. Please update the selector in Boost's app embed`) } } else if (!this.oldldSICollectionFilterContainerDetected()) { this.backwardCompatibilityModule?.legacyUpdateAppStatus("ready") } } } get collectionFilterModule() { return this.TAEApp.getModule(CollectionFilter) } get backwardCompatibilityModule() { return this.TAEApp.getModule(BackwardCompatibilityV1) } get extendAppConfig() {


                        ; return {
                            simplifiedIntegration: {
                                enabled: false, collectionPage: false, instantSearch: false, productListSelector: { collectionPage: [], searchPage: [] }, selectedSelector: "", selectorFromMetafield: "", selectorFromAppEmbed:

                                    ""

                                    || "", allSyncedCollections:

                                    ""

                                    || { syncedCollections: [] }, placeholderAdded: false, placeholder: `<!-- TEMPLATE PLACEHOLDER --><div class='boost-sd-container'><div class="boost-sd__collection-header">  <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span></div><!-- TEMPLATE IN-COLLECTION SEARCH PLACEHOLDER--><div class='boost-sd-layout boost-sd-layout--has-filter-horizontal'>  <div class='boost-sd-left boost-filter-tree-column'>   <!-- TEMPLATE FILTER TREE PLACEHOLDER -->   <div id="boost-sd__filter-tree-wrapper" class="boost-sd__filter-tree-wrapper">    <div class="boost-sd__filter-tree-horizontal">     <div class="boost-sd__filter-tree-horizontal-placeholder">      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>     </div>    </div>   </div>  </div>  <div class='boost-sd-right boost-product-listing-column'>   <!-- TEMPLATE TOOLBAR PLACEHOLDER-->   <div class="boost-sd__toolbar-container">    <div class="boost-sd__toolbar-inner">     <div class="boost-sd__toolbar-content">      <div class="boost-sd__toolbar boost-sd__toolbar--3_1">       <span class="boost-sd__toolbar-item boost-sd__placeholder-item" style="height: 28px; border-radius: 0;"></span>       <span class="boost-sd__toolbar-item boost-sd__placeholder-item" style="height: 28px; border-radius: 0; margin-bottom: 0"></span>       <span class="boost-sd__toolbar-item boost-sd__placeholder-item" style="height: 28px; border-radius: 0; margin-bottom: 0"></span>      </div>     </div>    </div>   </div>   <!-- TEMPLATE PRODUCT LIST PLACEHOLDER-->   <div class="boost-sd__product-list-placeholder boost-sd__product-list-placeholder--4-col">    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>   </div>   <div class="boost-sd__pagination boost-sd__pagination--center">    <span class="boost-sd__placeholder-item" style="height: 40px; border-radius: 0;"></span>   </div>  </div></div></div>` ,isOnboarding :JSON.parse(

                                        ""

                                        || "false"), neededToHideElements: []
                            }
                        };
                    } init() { const app = this.TAEApp; const simplifiedIntegration = this.TAEAppConfig.simplifiedIntegration; const { templateMetadata: { integratedTheme = {} } } = this.TAEAppConfig; const themeId = window.Shopify?.theme?.id; if (!themeId) { app.logger.warn("Theme ID is missing"); return } let themeIntegration = integratedTheme[themeId]; if (!themeIntegration || Object.keys(themeIntegration).length === 0) { app.logger.warn("Theme is not integrated with SimplifiedIntegration flow"); return } const { collectionPage = false, searchPage = false, instantSearch = false, productListSelector = {} } = themeIntegration; const { page: currentPage, collection_id: collectionId = 0 } = this.TAEAppConfig.generalSettings; const isCollectionPage2 = currentPage === "collection"; const isSearchPage2 = currentPage === "search"; if (simplifiedIntegration.isOnboarding) { const isCollectionSynced = this.checkSyncedCollection(collectionId); if (!isCollectionSynced) { return } } if (isCollectionPage2 && collectionPage || isSearchPage2 && searchPage) { const { collectionPage: collectionPageSelectors = [], searchPage: searchPageSelectors = [] } = productListSelector; const selectors = isCollectionPage2 ? collectionPageSelectors : searchPageSelectors; if (selectors.length === 0) { this.app.logger.warn("empty selectors"); return } const elements = selectors.slice(0, -1); const mainElement = selectors[selectors.length - 1]; const selector = simplifiedIntegration.selectorFromAppEmbed || mainElement; simplifiedIntegration.neededToHideElements = elements; simplifiedIntegration.selectorFromMetafield = mainElement; simplifiedIntegration.selectedSelector = selector; if (selector) { const intervalId = setInterval(() => { const container = document.querySelector(selector); if (container) { this.renderPlaceholder(container); clearInterval(intervalId) } }, 50) } this.TAEApp.updateConfig({ simplifiedIntegration: { ...simplifiedIntegration, ...themeIntegration, enabled: true } }) } if (instantSearch) { this.setupISW() } } onAppStart() { document.addEventListener("DOMContentLoaded", () => { this.ensurePlaceholder() }) } oldldSICollectionFilterContainerDetected() { const productFilterBlock = document.querySelector(".boost-sd__filter-product-list"); return !!productFilterBlock } checkSyncedCollection(collectionId) { const { simplifiedIntegration } = this.TAEAppConfig; const { allSyncedCollections: { syncedCollections } } = simplifiedIntegration; const currentCollectionSynced = syncedCollections?.includes(collectionId); const collectionAllSynced = collectionId === 0 && syncedCollections?.length > 0; if (!currentCollectionSynced && !collectionAllSynced) { this.TAEApp.logger.warn("collection not synced -> fallback original theme"); return false } return true } renderPlaceholder(originalContainer) { const { simplifiedIntegration } = this.TAEAppConfig; const placeholder = simplifiedIntegration?.placeholder || ""; const placeholderAdded = simplifiedIntegration?.placeholderAdded || false; const neededToHideElements = simplifiedIntegration?.neededToHideElements || []; const selectedSelector = simplifiedIntegration?.selectedSelector || ""; if (placeholderAdded) { this.TAEApp.logger.warn("placeholder already added"); return } originalContainer.style.display = "none"; this.hideNeededElements(); const newProductFilterDiv = document.createElement("div"); newProductFilterDiv.innerHTML = placeholder || ""; newProductFilterDiv.className = "boost-sd__filter-product-list boost-sd__placeholder-product-filter-tree"; originalContainer.insertAdjacentElement("afterend", newProductFilterDiv); if (simplifiedIntegration) { simplifiedIntegration.placeholderAdded = true; if (neededToHideElements && selectedSelector) { neededToHideElements.push(selectedSelector) } } } hideNeededElements() { const { simplifiedIntegration: { neededToHideElements } } = this.TAEAppConfig; if (neededToHideElements && neededToHideElements.length > 0) { this.hideElements(neededToHideElements) } } removePlaceholder() { const { simplifiedIntegration: { placeholderAdded } } = this.TAEAppConfig; if (placeholderAdded) { const placeholder = document.querySelector(".boost-sd__placeholder-product-filter-tree"); if (placeholder instanceof HTMLElement) { placeholder.remove() } } } hideElements(elements) { if (!Array.isArray(elements)) return; elements.forEach(element => { const el = document.querySelector(element); if (el instanceof HTMLElement) { el.style.display = "none" } }) } setupISW() { this.TAEApp.updateConfig({ taeSettings: { instantSearch: { enabled: true } } }) }
                }; SimplifiedIntegration.moduleName = "SimplifiedIntegration"; var CollectionFilter = class _CollectionFilter extends BoostTAEAppModule {
                    constructor() { super(...arguments); this.initBlock = async () => { const filterDom = document.querySelector(".boost-sd__filter-product-list:not(.boost-sd__filter-product-list--ready)"); if (!filterDom) { this.app.logger.error("Filter DOM not found"); this.backwardCompatibilityV1Module?.legacyUpdateAppStatus("ready"); return } this.assetFileLoaderModule?.preloadModuleScript("filter"); const appConfig = this.TAEAppConfig; const { customization } = appConfig; if (typeof customization?.filter?.beforeRender === "function") { customization.filter.beforeRender() } const filterDomId = `${this.widgetId}-${generateUUID()}`; filterDom?.classList?.add("boost-sd__filter-product-list--ready"); filterDom.id = filterDomId; const urlParams = this.prepareFilterAPIQueryParams(); const response = await this.filterAPI(urlParams); const block = { id: filterDomId, document: filterDom, widgetId: this.widgetId, defaultSort: urlParams.get("sort") || "", defaultParams: this.filterAPIDefaultParams, filterTree: { options: [] }, dynamicBundles: [] }; const backwardCompatibilityV1 = this.backwardCompatibilityV1Module; backwardCompatibilityV1?.legacyAssignDefaultBlockAttributes(block, filterDom, "filter"); const { html, bundles } = response; if (bundles) { block.dynamicBundles = bundles } if (response.filter) { response.filter.options = this.updateValuesOptions(response.filter.options); block.filterTree = response.filter } try { await Promise.all([this.assetFileLoaderModule?.assetLoadingPromise("themeCSS"), this.assetFileLoaderModule?.assetLoadingPromise("settingsCSS")]) } catch { } if (html) { filterDom.innerHTML = html } block.cache = { [urlParams.toString()]: { ...response, timestamp: new Date().getTime() } }; this.TAEApp.registerBlock(block); this.saveFilterAPIResponseAnalyticData(response?.meta?.rid, response.bundles); this.syncAppConfigWithFilterAPIResponse(response); this.block = block; this.savePageLimitSettings(); this.backwardCompatibilityV1Module?.legacyUpdateAppStatus("ready") } } get backwardCompatibilityV1Module() { return this.TAEApp.getModule(BackwardCompatibilityV1) } get b2bModule() { return this.TAEApp.getModule(B2B) } get fallbackModule() { return this.TAEApp.getModule(Fallback) } get simplifiedIntegrationModule() { return this.TAEApp.getModule(SimplifiedIntegration) } get analyticModule() { return this.TAEApp.getModule(Analytics) } get assetFileLoaderModule() { return this.TAEApp.getModule(AssetFilesLoader) } get extendAppConfig() {
                        return {
                            filterUrl: "https://services.mybcapps.com/bc-sf-filter/filter", filterSettings: Object.assign({
                                swatch_extension: "png", ...
                                    {

                                    }
                            }, { "showFilterOptionCount": true, "showRefineBy": true, "showOutOfStockOption": true, "showSingleOption": false, "keepToggleState": true, "changeMobileButtonLabel": false, "sortingAvailableFirst": false, "showLoading": false, "activeScrollToTop": false, "showVariantImageBasedOnSelectedFilter": "", "productAndVariantAvailable": false, "availableAfterFiltering": false, "isShortenUrlParam": false, "style": { "filterTitleTextColor": "", "filterTitleFontSize": "", "filterTitleFontWeight": "", "filterTitleFontTransform": "", "filterTitleFontFamily": "", "filterOptionTextColor": "", "filterOptionFontSize": "", "filterOptionFontFamily": "", "filterMobileButtonTextColor": "", "filterMobileButtonFontSize": "", "filterMobileButtonFontWeight": "", "filterMobileButtonFontTransform": "", "filterMobileButtonFontFamily": "", "filterMobileButtonBackgroundColor": "" }, "filterLayout": "horizontal", "filterTreeMobileStyle": "style2", "filterTreeVerticalStyle": "style-expand", "filterTreeHorizontalStyle": "style1", "stickyFilterOnDesktop": false, "stickyFilterOnMobile": false })
                        };
                    } get apiEndpoint() { const { filterUrl, searchUrl } = this.app.config; const urlParams = new URLSearchParams(window.location.search); const searchQuery = urlParams.get("q"); return isSearchPage() || searchQuery ? searchUrl : filterUrl } get widgetId() { const { templateMetadata, generalSettings } = this.TAEAppConfig; const currentPage = generalSettings?.page || "collection"; const widgetName = currentPage === "collection" ? "collectionFilters" : "searchPage"; const widgetId = templateMetadata[widgetName] || "default"; return widgetId } get filterAPIDefaultParams() { const { shop, templateSettings, templateMetadata, generalSettings, templateId, simplifiedIntegration } = this.TAEAppConfig; const historyParams = this.getHistoryParams(); const productPerPage = typeof templateSettings?.themeSettings?.productList?.productsPerPage === "number" ? templateSettings.themeSettings.productList.productsPerPage : 16; const savedLimit = getLocalStorage(_CollectionFilter.LIMIT); const savedLimitSetting = getLocalStorage(_CollectionFilter.LIMIT_SETTING); const adminSettingChanged = savedLimitSetting && savedLimitSetting !== `${productPerPage}`; const limit = adminSettingChanged ? productPerPage : savedLimit && !isNaN(Number(savedLimit)) ? Number(savedLimit) : productPerPage; const widgetId = this.widgetId; const isMobileViewport = isMobileWidth(); const viewportWidth = window.innerWidth; const showFilterTreeByDefault = templateSettings?.filterSettings?.filterLayout === "vertical" && templateSettings?.filterSettings?.filterTreeVerticalStyle === "style-default" ? true : false; const productPerRow = isMobileViewport ? templateSettings?.themeSettings?.productList?.productsPerRowOnMobile || 2 : templateSettings?.themeSettings?.productList?.productsPerRowOnDesktop || 3; const productImageMaxWidth = isMobileViewport ? viewportWidth / productPerRow : viewportWidth / (productPerRow + (showFilterTreeByDefault ? 1 : 0)); const deviceTypeByViewportWidth = detectDeviceByWidth(); const showListViewDefault = templateSettings?.themeSettings?.additionalElements?.toolbar?.elements?.viewAs?.showListViewDefault; const defaultViewAs = showListViewDefault === true ? "list" : `grid--${isMobileWidth() ? templateSettings?.themeSettings?.productList?.productsPerRowOnMobile || 2 : templateSettings?.themeSettings?.productList?.productsPerRowOnDesktop || 3}`; return { _: "pf", t: Date.now().toString(), sid: generateUUID(), shop: shop.domain, page: Number(historyParams?.page || 1), limit, sort: historyParams?.sort || getSortBy(), locale: generalSettings.current_locale, event_type: "init", pg: getCurrentPage(), build_filter_tree: true, collection_scope: generalSettings.collection_id || "0", money_format: shop.money_format, money_format_with_currency: shop.money_format_with_currency, widgetId, viewAs: defaultViewAs, device: deviceTypeByViewportWidth, first_load: true, productImageWidth: roundToNearest50(productImageMaxWidth), productPerRow, widget_updated_at: templateMetadata?.updatedAt, templateId, current_locale: (window?.Shopify?.routes?.root || "/")?.replace(/\/$/, ""), simplifiedIntegration: simplifiedIntegration.enabled || false, customer_id: getCustomerId(), insert_banners: templateMetadata?.featureOptions?.enableBannerInterleaving || false, ...addParamsLocale() }; } savePageLimitSettings() { const { templateSettings } = this.TAEAppConfig; const productPerPage = typeof templateSettings?.themeSettings?.productList?.productsPerPage === "number" ? templateSettings.themeSettings.productList.productsPerPage : 16; const savedLimit = getLocalStorage(_CollectionFilter.LIMIT); const savedLimitSetting = getLocalStorage(_CollectionFilter.LIMIT_SETTING); const adminSettingChanged = savedLimitSetting && savedLimitSetting !== `${productPerPage}`; const currentLimit = adminSettingChanged ? productPerPage : savedLimit && !isNaN(Number(savedLimit)) ? Number(savedLimit) : productPerPage; if (typeof window !== "undefined" && window.localStorage) { try { localStorage.setItem(_CollectionFilter.LIMIT_SETTING, `${productPerPage}`); localStorage.setItem(_CollectionFilter.LIMIT, `${currentLimit}`) } catch (e) { this.app.logger.error("Failed to save limit settings to localStorage", e) } } } syncAppConfigWithFilterAPIResponse(res) { const { shop } = this.TAEAppConfig; if (res.meta?.money_format) { shop.money_format = res.meta.money_format } if (res.meta?.money_format_with_currency) { shop.money_format_with_currency = res.meta.money_format_with_currency } if (res.meta?.currency) { shop.currency = res.meta.currency } this.app.updateConfig({ shop }); this.backwardCompatibilityV1Module?.legacyUpdateAppStatus("ready") } prepareFilterAPIQueryParams() { const { generalSettings, filterSettings, customization } = this.TAEAppConfig; const paramsHistory = this.getHistoryParams(); const defaultParams = this.filterAPIDefaultParams; const urlParams = new URLSearchParams; Object.entries(defaultParams).forEach(([key, value]) => { urlParams.set(key, value !== void 0 ? value.toString() : "") }); urlParams.set("search_no_result", Object.keys(paramsHistory?.paramMap || {}).length === 0 ? "true" : "false"); if (paramsHistory?.paramMap) { Object.keys(paramsHistory.paramMap).forEach(key => { paramsHistory.paramMap[key].forEach(v => urlParams.append(`${key}[]`, key.startsWith(`${defaultParams._}_st_`) ? convertValueRequestStockStatus(v).toString() : v)) }) } const searchParams = new URLSearchParams(window.location.search); const searchQuery = searchParams.get("q"); if (searchQuery) { if (isVendorPage()) urlParams.set("vendor", searchQuery); else if (isShopifyTypePage()) urlParams.set("product_type", searchQuery); else urlParams.set("q", searchQuery); if (isCollectionPage()) { urlParams.set("incollection_search", "true"); urlParams.set("event_type", "incollection_search") } this.setSearchQueryParamsWithSuggetion(urlParams) } if (generalSettings.collection_tags?.length) { generalSettings.collection_tags.forEach(tag => { urlParams.append("tag[]", tag) }) } if (filterSettings.sortingAvailableFirst) { urlParams.set("sort_first", "available") } const availableAfterFiltering = filterSettings?.availableAfterFiltering; const productAndVariantAvailable = filterSettings?.productAndVariantAvailable; const hasFilterParams = Array.from(urlParams.keys()).some(key => key.startsWith("pf_")); const showAvailable = !availableAfterFiltering && productAndVariantAvailable ? "true" : availableAfterFiltering ? hasFilterParams ? "true" : "false" : "false"; urlParams.set("product_available", showAvailable); urlParams.set("variant_available", showAvailable); if (filterSettings.showOutOfStockOption) { urlParams.set("zero_options", "true") } this.b2bModule?.setQueryParams(urlParams); if (customization?.filter?.customizedAPIParams) { const { customizedAPIParams } = customization.filter; Object.entries(customizedAPIParams).forEach(([key, value]) => { urlParams.set(key, value) }) } return urlParams } setSearchQueryParamsWithSuggetion(params) { const SUGGESTION_DATA = "boostSDSuggestionData"; const CLICK_SUGGESTION_TERM = "boostSDClickSuggestionTerm"; const term = getLocalStorage(CLICK_SUGGESTION_TERM); if (!term) return; const suggestionData = getLocalStorage(SUGGESTION_DATA); if (!suggestionData) return; params.set("query", suggestionData.query); params.set("parent_request_id", suggestionData.id); params.set("suggestion", term); params.set("item_rank", (suggestionData.suggestions.findIndex(item => item === term) + 1).toString()); removeLocalStorage(CLICK_SUGGESTION_TERM); removeLocalStorage(SUGGESTION_DATA) } saveFilterAPIResponseAnalyticData(reqId, bundles) { const type = isSearchPage() ? "search" : "filter"; const analytic = this.analyticModule; if (reqId) { analytic?.saveRequestId(type, reqId); if (bundles) { analytic?.saveRequestId(type, reqId, bundles) } } analytic?.savePreAction(type) } formatPercentSaleLabel(to, from = 0) { let label = ""; if (!from) { label = `under ${to}%` } else if (!to) { label = `above ${from}%` } else { label = `${from}% - ${to}%` } return label } updateValuesOptions(options) { if (!Array.isArray(options)) return options; return options.map(option => { if (option.filterType === "percent_sale") { option.values = option.values?.map(item => { item.key = item.key.replace("*-", ":").replace("-*", ":").replace("-", ":"); item.label = this.formatPercentSaleLabel(item.to, item.from); return item }) } return option }) } async filterAPI(params) { const appConfig = this.TAEAppConfig; const queryString = params.toString(); const response = await fetch(`${this.apiEndpoint}?${queryString}`, { method: "GET" }); const HTTP_STATUS_NEED_FALLBACK = [404, 413, 403, 500]; if (HTTP_STATUS_NEED_FALLBACK.includes(response.status)) { if (appConfig.simplifiedIntegration?.enabled) { const simplifiedIntegration = this.simplifiedIntegrationModule; simplifiedIntegration?.hideNeededElements(); simplifiedIntegration?.removePlaceholder() } else { this.fallbackModule?.loadFilterProductFallback() } } return response.json() } getHistoryParams() { const url = new URL(window.location.href); const isXSS = isBadUrl(url); if (isXSS) { this.app.logger.error("[Security] Potential XSS detected in URL parameters. Ignoring query params.", window.location.href); return } const rawSearch = url.search; const FILTER_HISTORY_PREFIX = "pf_"; const DEFAULT_SEPARATOR = ","; const REGEX_ESCAPE_PATTERN = /[.*+?^${}()|[\]\\]/g; const { searchParams } = url; const sort = searchParams.get("sort"); const page = searchParams.get("page"); const paramMap = {}; const shortenToFullMap = getShortenToFullParamMap(); const separator = this.TAEAppConfig.customization?.filter?.customizedAPIParams?.multipleValueSeparator || DEFAULT_SEPARATOR; const escapedSeparator = separator.replace(REGEX_ESCAPE_PATTERN, "\\$&"); const encodedSeparator = encodeURIComponent(separator); const escapedEncodedSeparator = encodedSeparator.replace(REGEX_ESCAPE_PATTERN, "\\$&"); const splitRegex = new RegExp(`${escapedSeparator}|${escapedEncodedSeparator}`); for (const key of searchParams.keys()) { let actualKey = key; let values; if (shortenToFullMap[key]) { actualKey = shortenToFullMap[key]; const escapedKey = key.replace(REGEX_ESCAPE_PATTERN, "\\$&"); const matchResult = rawSearch.match(new RegExp(`[?&]${escapedKey}=([^&]+)`)); const rawVal = matchResult ? matchResult[1] : ""; const parts = rawVal.split(splitRegex); values = parts.map(p => decodeURIComponent(p.replace(/\+/g, " "))) } else { values = searchParams.getAll(key) } if (actualKey.startsWith(FILTER_HISTORY_PREFIX) && !paramMap[actualKey]) { if (actualKey === "pf_tag") { paramMap.tag = values } else { paramMap[actualKey] = values } } } return { paramMap, sort, page } }
                }; CollectionFilter.moduleName = "CollectionFilter"; CollectionFilter.LIMIT = "boostSDLimit"; CollectionFilter.LIMIT_SETTING = "boostSDLimitSetting"; var BackwardCompatibilityV1 = class extends BoostTAEAppModule { shouldInit() { const { templateMetadata: { themeLibVersion } = {} } = this.TAEAppConfig; if (!themeLibVersion) return true; const feLibMajorVersion = themeLibVersion.split(".")[0]; return Number(feLibMajorVersion) <= 1 } get collectionFilterModule() { return this.TAEApp.getModule(CollectionFilter) } init() { window.boostSDTaeUtils = { lazyLoadImages, inViewPortHandler, initCollectionFilter: () => { setTimeout(() => { this.collectionFilterModule?.initBlock() }) } } } onAppStart() { const app = this.TAEApp; const { env } = this.TAEAppConfig; const mergedCustomizedFilterParams = { ...(this.TAEAppConfig.customization?.filter?.customizedAPIParams || {}), ...(window.boostSdCustomParams || {}) }; this.TAEApp.updateConfig(config => { config.customization = { ...config.customization, filter: { ...config.customization?.filter, customizedAPIParams: mergedCustomizedFilterParams } }; return config }); window.boostSdCustomParams = mergedCustomizedFilterParams; Object.assign(window.boostWidgetIntegration, { generalSettings: { ...this.TAEAppConfig.generalSettings, templateId: this.TAEAppConfig.templateId }, simplifiedIntegration: this.TAEAppConfig.simplifiedIntegration, taeSettings: this.TAEAppConfig.taeSettings, env, app: { [env]: { customization: {}, ...this.TAEAppConfig, ...window.boostWidgetIntegration.app?.[env] } }, customization: { ...this.TAEAppConfig.customization, filter: { ...this.TAEAppConfig.customization?.filter, customizedAPIParams: mergedCustomizedFilterParams } }, regisCustomization: function (fc, scope) { if (typeof fc === "function" && fc.name && !scope) { const functionName = fc.name; window.boostWidgetIntegration.app[env].customization[functionName] = fc } else if (typeof fc === "function" && fc.name && scope) { window.boostWidgetIntegration.app[env].customization[scope] = window.boostWidgetIntegration.app[env].customization[scope] || {}; const functionName = fc.name; window.boostWidgetIntegration.app[env].customization[scope][functionName] = fc } else { app.logger.error("Invalid function or function does not have a name.") } } }); Object.assign(window, { boostSDData: this.TAEAppDataObjects }) } onBeforeAppStart() { Object.assign(window, { boostWidgetIntegration: { ...window.boostWidgetIntegration, status: "initializing" } }) } legacyUpdateAppStatus(status) { Object.assign(window.boostWidgetIntegration, { status }) } legacyIsUsingRecommendationAppV3() { return window.boostSDAppConfig?.themeInfo?.taeFeatures?.recommendation === "installed" } legacyInitRecommendationWidgets(widgets) { window.boostWidgetIntegration.app[this.TAEAppConfig.env].recommendationWidgets = widgets } legacyAssignDefaultBlockAttributes(block, blockDOM, blockType) { const { templateSettings } = this.app.config; Object.assign(block, { widgetInfo: templateSettings, templateSettings, app: window.boostWidgetIntegration.app?.[this.app.config.env], document: blockDOM, id: blockDOM.id || block.id, blockType: blockType || "filter" }); if (!("widgetId" in block)) { Object.assign(block, { widgetId: blockDOM.id || block.id }) } } }; BackwardCompatibilityV1.moduleName = "BackwardCompatibilityV1"; var BackInStock = class extends BoostTAEAppModule {
                    constructor() { super(...arguments); this.initBlock = () => { const bisDom = document.createElement("div"); bisDom.id = "bc-bis"; bisDom.className = "boost-sd__bis"; bisDom.style.display = "none"; document.body.appendChild(bisDom); this.block = { id: "bc-bis", document: bisDom }; this.backwardCompatibilityV1Module?.legacyAssignDefaultBlockAttributes(this.block, bisDom, "backInStock"); this.TAEApp.registerBlock(this.block) } } get extendAppConfig() {
                        return {
                            klaviyoBISUrl: "https://a.klaviyo.com/client/back-in-stock-subscriptions", backInStock: Object.assign(
                                { enabled: false, productSettings: {}, displaySettings: {}, isTurbo: false },

                            )
                        };
                    } get backwardCompatibilityV1Module() { return this.TAEApp.getModule(BackwardCompatibilityV1) } onModuleInit() { document.addEventListener("DOMContentLoaded", this.initBlock) } onModuleDestroy() { document.removeEventListener("DOMContentLoaded", this.initBlock) }
                }; BackInStock.moduleName = "BackInStock"; var Cart = class extends BoostTAEAppModule { constructor() { super(...arguments); this.initBlock = () => { this.block = { id: "cart", document: document.body }; this.backwardCompatibilityModule?.legacyAssignDefaultBlockAttributes(this.block, this.block.document, "cart"); this.TAEApp.registerBlock(this.block) } } get extendAppConfig() { return { customization: { cart: {} } } } get backwardCompatibilityModule() { return this.TAEApp.getModule(BackwardCompatibilityV1) } onModuleInit() { document.addEventListener("DOMContentLoaded", this.initBlock) } onMouduleDestroy() { document.removeEventListener("DOMContentLoaded", this.initBlock) } }; Cart.moduleName = "Cart"; var PreOrder = class extends BoostTAEAppModule { constructor() { super(...arguments); this.initBlock = () => { const preOrderDom = document.querySelector(".boost-sd__preOrder-container"); const { customization, template } = this.TAEAppConfig; if (typeof customization?.preOrder?.beforeRender === "function") { customization.preOrder.beforeRender() } if (!preOrderDom) { return } if (typeof template?.preOrderPlaceholder === "string") { preOrderDom.innerHTML = template.preOrderPlaceholder } this.block = { id: preOrderDom.id || "bc-pre-order", document: preOrderDom }; this.backwardCompatibilityV1Module?.legacyAssignDefaultBlockAttributes(this.block, preOrderDom, "preOrder"); this.TAEApp.registerBlock(this.block) } } get extendAppConfig() { return { customization: { preOrder: {} } } } get backwardCompatibilityV1Module() { return this.TAEApp.getModule(BackwardCompatibilityV1) } onModuleInit() { document.addEventListener("DOMContentLoaded", this.initBlock) } onModuleDestroy() { document.removeEventListener("DOMContentLoaded", this.initBlock) } }; PreOrder.moduleName = "PreOrder"; var PredictiveBundle = class extends BoostTAEAppModule { constructor() { super(...arguments); this.initBlock = () => { const predictiveBundleDom = document.querySelector(".boost-sd-widget-predictive-bundle"); if (!predictiveBundleDom) { return } this.block = { id: predictiveBundleDom.id || "bc-predictive-bundle", document: predictiveBundleDom }; this.backwardCompatibilityV1Module?.legacyAssignDefaultBlockAttributes(this.block, predictiveBundleDom, "predictiveBundle"); this.TAEApp.registerBlock(this.block) } } get extendAppConfig() { return { predictiveBundle: { multiBundleSupport: false } } } get backwardCompatibilityV1Module() { return this.TAEApp.getModule(BackwardCompatibilityV1) } onModuleInit() { document.addEventListener("DOMContentLoaded", this.initBlock) } onModuleDestroy() { document.removeEventListener("DOMContentLoaded", this.initBlock) } }; PredictiveBundle.moduleName = "PredictiveBundle"; var Recommendation = class extends BoostTAEAppModule {
                    constructor() {
                        super(...arguments); this.blocks = {}; this.initBlocks = () => {
                            if (this.backwardCompatibilityV1Module?.legacyIsUsingRecommendationAppV3()) { this.backwardCompatibilityV1Module?.legacyInitRecommendationWidgets({}); return } const { recommendationWidgets } = this.TAEAppConfig; this.backwardCompatibilityV1Module?.legacyInitRecommendationWidgets(recommendationWidgets);



                            ; const recommendationWidgetDOMs = document.querySelectorAll('[id^="boost-sd-widget-"]'); for (const widgetDOM of recommendationWidgetDOMs) { widgetDOM.innerHTML = `<!-- TEMPLATE RECOMMENDATION PLACEHOLDER--><div class="boost-sd__rc-pl"><div class="boost-sd__rc-title-pl">  <span class="boost-sd__rc-pl-item" style="width: 150px; height: 30px;"></span></div><div class="boost-sd__rc-product-list-pl">  <span class="boost-sd__rc-pl-item"></span>  <span class="boost-sd__rc-pl-item"></span>  <span class="boost-sd__rc-pl-item"></span>  <span class="boost-sd__rc-pl-item"></span></div><div class="boost-sd__rc-info-pl">  <span class="boost-sd__rc-pl-item"></span>  <span class="boost-sd__rc-pl-item"></span>  <span class="boost-sd__rc-pl-item"></span></div></div>`; this.initBlock(widgetDOM) }
                        }
                    } get extendAppConfig() {
                        const recommendationWidgets = {};



                        recommendationWidgets['home-page'] = { "homepage-732535": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "newest-arrivals", "limit": 12 }, "widgetName": "Just dropped", "widgetStatus": "inactive", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "defaultSettings", "layoutDisplay": "carousel", "templateType": "customization", "themePreview": "", "numberOfRecommendProduct": 12, "numberOfProductPerRow": 4, "titleAlignment": "left", "titleTextColor": "#3D4246", "titleFont": "Poppins", "titleTextTransform": "capitalize", "titleFontSize": 14, "titleFontStyle": "100" } }, "homepage-475526": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "bestsellers", "limit": 12 }, "widgetName": "Best Sellers", "widgetStatus": "inactive", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "defaultSettings", "layoutDisplay": "carousel", "templateType": "customization", "themePreview": "", "numberOfRecommendProduct": 12, "numberOfProductPerRow": 4, "titleAlignment": "left", "titleTextColor": "#3D4246", "titleFont": "Poppins", "titleTextTransform": "capitalize", "titleFontSize": 14, "titleFontStyle": "100" } } }



                        recommendationWidgets['cart-page'] = { "cartpage-533802": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "recently-viewed", "limit": 12, "layoutDisplay": "carousel", "rules": [] }, "widgetName": "Still interested in this?", "widgetStatus": "draft", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "defaultSettings", "layoutDisplay": "carousel", "templateType": "default", "themePreview": "", "numberOfRecommendProduct": 12, "numberOfProductPerRow": 4, "titleAlignment": "left", "titleTextColor": "#3D4246", "titleFont": "Poppins", "titleTextTransform": "capitalize", "titleFontSize": 14, "titleFontStyle": "100", "buttonBackgroundColor": "", "buttonTextColor": "" } }, "cartpage-126363": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "related-items", "limit": 12, "layoutDisplay": "carousel", "rules": [], "modelType": "Alternative", "secondaryAlgorithm": "bestsellers" }, "widgetName": "Similar Products", "widgetStatus": "draft", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "defaultSettings", "layoutDisplay": "carousel", "templateType": "default", "themePreview": "", "numberOfRecommendProduct": 12, "numberOfProductPerRow": 4, "titleAlignment": "left", "titleTextColor": "#3D4246", "titleFont": "Poppins", "titleTextTransform": "capitalize", "titleFontSize": 14, "titleFontStyle": "100", "buttonBackgroundColor": "", "buttonTextColor": "" } } }





                        recommendationWidgets['product-page'] = { "productpage-401031": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "recently-viewed", "limit": 12, "layoutDisplay": "carousel", "rules": [] }, "widgetName": "Recently viewed", "widgetStatus": "draft", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "defaultSettings", "layoutDisplay": "carousel", "templateType": "default", "themePreview": "", "numberOfRecommendProduct": 12, "numberOfProductPerRow": 4, "titleAlignment": "left", "titleTextColor": "#3D4246", "titleFont": "Poppins", "titleTextTransform": "capitalize", "titleFontSize": 14, "titleFontStyle": "100", "buttonBackgroundColor": "", "buttonTextColor": "" } }, "productpage-752048": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "related-items", "limit": 8, "layoutDisplay": "carousel", "rules": [], "modelType": "Complementary", "secondaryAlgorithm": "most-viewed" }, "widgetName": "Recommended Accessories", "widgetStatus": "draft", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "productpage-752048", "layoutDisplay": "carousel", "numberOfProductPerRow": 4, "numberOfRecommendProduct": 8, "templateType": "customization", "themePreview": "", "titleAlignment": "left", "titleFont": "Poppins", "titleFontSize": 14, "titleFontStyle": "100", "titleTextColor": "#3D4246", "titleTextTransform": "capitalize" } }, "productpage-776246": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "frequently-bought-together", "limit": 12, "layoutDisplay": "carousel", "rules": [], "modelType": "FBT", "secondaryAlgorithm": "Alternative" }, "widgetName": "Frequently bought together", "widgetStatus": "draft", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "productpage-776246", "layoutDisplay": "carousel", "numberOfProductPerRow": 4, "numberOfRecommendProduct": 12, "templateType": "customization", "themePreview": "", "titleAlignment": "left", "titleFont": "Poppins", "titleFontSize": 14, "titleFontStyle": "100", "titleTextColor": "#3D4246", "titleTextTransform": "capitalize" } }, "productpage-380711": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "frequently-bought-together", "limit": 12, "layoutDisplay": "carousel", "rules": [], "modelType": "FBT", "secondaryAlgorithm": "Alternative" }, "widgetName": "Frequently bought together", "widgetStatus": "draft", "widgetDesignSettings": { "widgetId": "productpage-380711", "tenantId": "teradek-store.myshopify.com", "layoutDisplay": "carousel", "numberOfProductPerRow": 4, "numberOfRecommendProduct": 12, "templateType": "customization", "themePreview": "", "titleAlignment": "left", "titleFont": "Poppins", "titleFontSize": 14, "titleFontStyle": "100", "titleTextColor": "#3D4246", "titleTextTransform": "capitalize" } }, "productpage-556608": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "frequently-bought-together", "limit": 1, "layoutDisplay": "bundle", "rules": [], "modelType": "FBT", "secondaryAlgorithm": "Alternative" }, "widgetName": "Frequently bought together", "widgetStatus": "draft", "widgetDesignSettings": { "widgetId": "productpage-556608", "tenantId": "teradek-store.myshopify.com", "layoutDisplay": "bundle", "numberOfRecommendProduct": 1, "templateType": "customization", "themePreview": "", "titleAlignment": "left", "titleFont": "Poppins", "titleFontSize": 14, "titleFontStyle": "100", "titleTextColor": "#3D4246", "titleTextTransform": "capitalize", "bundleStyle": "style1" } }, "productpage-163118": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "frequently-bought-together", "limit": 4, "layoutDisplay": "carousel", "rules": [], "modelType": "FBT", "secondaryAlgorithm": "most-viewed" }, "widgetName": "Recommended Accessories", "widgetStatus": "draft", "widgetDesignSettings": { "widgetId": "productpage-163118", "tenantId": "teradek-store.myshopify.com", "layoutDisplay": "carousel", "numberOfProductPerRow": 4, "numberOfRecommendProduct": 4, "templateType": "customization", "themePreview": "", "titleAlignment": "center", "titleFont": "Poppins", "titleFontSize": 50, "titleFontStyle": "100", "titleTextColor": "#000000", "titleTextTransform": "capitalize" } } }



                        recommendationWidgets['collection-page'] = { "collectionpage-642153": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "newest-arrivals", "limit": 12 }, "widgetName": "Just dropped", "widgetStatus": "inactive", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "defaultSettings", "layoutDisplay": "carousel", "templateType": "customization", "themePreview": "", "numberOfRecommendProduct": 12, "numberOfProductPerRow": 4, "titleAlignment": "left", "titleTextColor": "#3D4246", "titleFont": "Poppins", "titleTextTransform": "capitalize", "titleFontSize": 14, "titleFontStyle": "100" } }, "collectionpage-744733": { "params": { "shop": "teradek-store.myshopify.com", "recommendationType": "trending-products", "limit": 12, "calculatedBasedOn": "purchase-events", "rangeOfTime": "7-day" }, "widgetName": "Most Popular Products", "widgetStatus": "inactive", "widgetDesignSettings": { "tenantId": "teradek-store.myshopify.com", "widgetId": "defaultSettings", "layoutDisplay": "carousel", "templateType": "customization", "themePreview": "", "numberOfRecommendProduct": 12, "numberOfProductPerRow": 4, "titleAlignment": "left", "titleTextColor": "#3D4246", "titleFont": "Poppins", "titleTextTransform": "capitalize", "titleFontSize": 14, "titleFontStyle": "100" } } }



                        recommendationWidgets['defaultSettings'] = { "tenantId": "teradek-store.myshopify.com", "widgetId": "defaultSettings", "titleAlignment": "left", "titleTextColor": "#3D4246", "titleFont": "Poppins", "titleTextTransform": "capitalize", "titleFontSize": 14, "titleFontStyle": "100", "buttonBackgroundColor": "", "buttonTextColor": "" }






                            ; return { recommendUrl: "https://services.mybcapps.com/discovery/recommend", recommendationWidgets }
                    } get backwardCompatibilityV1Module() { return this.TAEApp.getModule(BackwardCompatibilityV1) } get assetFileLoaderModule() { return this.TAEApp.getModule(AssetFilesLoader) } onModuleInit() { document.addEventListener("DOMContentLoaded", this.initBlocks) } onModuleDestroy() { document.removeEventListener("DOMContentLoaded", this.initBlocks) } initBlock(dom) { const block = { id: dom.id, document: dom }; this.assetFileLoaderModule?.preloadModuleScript("recommendation"); this.backwardCompatibilityV1Module?.legacyAssignDefaultBlockAttributes(block, dom, "recommendation"); block.widgetId = dom.id?.replace("boost-sd-widget-", ""); this.TAEApp.registerBlock(block); this.blocks[block.id] = block }
                }; Recommendation.moduleName = "Recommendation"; var Search = class extends BoostTAEAppModule { constructor() { super(...arguments); this.block = { id: "bc-instant-search", document: document.createElement("div") }; this.initBlock = () => { if (!this.enabled) return; this.assetFileLoaderModule?.preloadModuleScript("instant-search"); const { document: document2, id } = this.block; document2.id = id; window.document.body.appendChild(document2); this.backwardCompatibilityV1Module?.legacyAssignDefaultBlockAttributes(this.block, document2, "instantSearch"); this.TAEApp.registerBlock(this.block) } } get backwardCompatibilityV1Module() { return this.TAEApp.getModule(BackwardCompatibilityV1) } get assetFileLoaderModule() { return this.TAEApp.getModule(AssetFilesLoader) } get extendAppConfig() { return { searchUrl: "https://services.mybcapps.com/bc-sf-filter/search" } } get enabled() { const { taeSettings, templateId, simplifiedIntegration } = this.TAEAppConfig; const isInstantSearchEnabled = taeSettings?.instantSearch?.enabled && templateId && (!simplifiedIntegration.enabled || simplifiedIntegration.instantSearch); return isInstantSearchEnabled } onModuleInit() { document.addEventListener("DOMContentLoaded", this.initBlock) } onMouduleDestroy() { document.removeEventListener("DOMContentLoaded", this.initBlock) } }; Search.moduleName = "Search"; var SEOEnhancement = class extends BoostTAEAppModule { shouldInit() { return this.TAEAppConfig.generalSettings.enableRobot } init() { const robot = document.querySelector('meta[content="noindex,nofollow,nosnippet"]'); if (!robot && (checkExistFilterOptionParam() || getQueryParamByKey("q") && !isSearchPage())) { const meta = document.createElement("meta"); meta.name = "robots"; meta.content = "noindex,nofollow,nosnippet"; document.head.append(meta) } } get extendAppConfig() { return { generalSettings: { enableRobot: true } } } }; SEOEnhancement.moduleName = "SEOEnhancement"; var ShopifyMetafield = class extends BoostTAEAppModule {
                    get extendAppConfig() {
                        return {
                            shop: { name: "Teradek", url: "https://teradek.com", domain: "teradek-store.myshopify.com", currency: "USD", money_format: "\u0026#36;{{amount}}", money_format_with_currency: "\u0026#36;{{amount}} USD" }, integration: {}, ...
                                {

                                }
                        };
                    }
                }; ShopifyMetafield.moduleName = "ShopifyMetafield"; var ShopifyDataObject = class extends BoostTAEAppModule {
                    get dataObject() {
                        return {
                            user:
                            {

                            }
                            , product: {
                                ...(

                                    ""

                                    || {})
                            }
                        };
                    }
                }; ShopifyDataObject.moduleName = "ShopifyDataObject"; var TemplateManagement = class extends BoostTAEAppModule {
                    get extendAppConfig() {
                        let templateId = ""; templateId = templateId =

                            "bpFpquFg4c"
                            || ""; let templateMetadata = {}; templateMetadata =


                                { "collectionFilters": "bpFpquFg4c/themes/default/main__0__liquid", "productList": "bpFpquFg4c/product-list/main__0__liquid", "productItem": "bpFpquFg4c/product-item/main__0__liquid", "collectionHeader": "bpFpquFg4c/collection-header/main__0__liquid", "searchPage": "bpFpquFg4c/themes/default/search__0__liquid", "mostPopularProducts": "bpFpquFg4c/no-search-result-page/most-popular-products__0__liquid", "recommendation": "bpFpquFg4c/recommendation/main__0__liquid", "recommendationDynamicBundle": "bpFpquFg4c/recommendation/dynamic-bundle__0__liquid", "recommendationEmbeddedBundle": "bpFpquFg4c/recommendation/embedded-bundle__0__liquid", "instantSearchWidget": "bpFpquFg4c/instant-search-widget/main__0__liquid", "quickView": "bpFpquFg4c/quickview/main__0__liquid", "cart": "bpFpquFg4c/cart/main__0__liquid", "placeholderFilterTree": "bpFpquFg4c/place-holder/place-holder__0__liquid", "placeholderRecommendation": "bpFpquFg4c/recommendation-placeholder/main__0__liquid", "preOrder": "bpFpquFg4c/pre-order/main__0__liquid", "preOrderPlaceholder": "bpFpquFg4c/pre-order-placeholder/main__0__liquid", "templateVersion": "2.22.0", "setupVersion": "v3", "applyUniqueVersion": true, "themeNameLib": "default", "themeLibVersion": "1.43.0", "themeCssVersion": "2.22.0", "themeCssUrl": "https://cdn.boostcommerce.io/widget-integration/theme/default/2.22.0/main.css", "settingsCssUrl": "https://cdn.shopify.com/s/files/1/0095/4332/files/boost-app-do-not-delete-this-file-teradek-store__X-6V3WRkt9-settings.css?v=1772660394", "updatedAt": 1772660394, "featureOptions": {}, "customizeCssUrl": "https://cdn.boostcommerce.io/widget-integration/theme/customization/teradek-store.myshopify.com/bpFpquFg4c/customization-1746463430604.css", "customizeJsUrl": "https://cdn.boostcommerce.io/widget-integration/theme/customization/teradek-store.myshopify.com/X-6V3WRkt9/customization-1734730208740.js" }

                                || {}; let templateSettings = {}; templateSettings =


                                    { "appPreferenceSettings": { "watermark": false }, "preOrderSettings": { "buttonText": "Pre-order", "deliveryText": "This is a pre-order. Items will ship based on the estimated delivery date.", "showDeliveryText": false }, "generalSettings": { "addCollectionToProductUrl": true, "breakpointmobile": "575px", "breakpointtabletportraitmin": "576px", "breakpointtabletportraitmax": "991px", "breakpointtabletlandscapetmin": "992px", "breakpointtabletlandscapemax": "1199px", "breakpointdesktop": "1200px", "enableTrackingOrderRevenue": true }, "searchSettings": { "searchPanelBlocks": { "searchTermSuggestions": { "label": "Popular Searches", "searchTermList": ["bolt 6", "antenna", "ace", "serv", "ranger"], "backup": ["antenna", "bolt 6", "m", "teradek rt", "bolt", "bolt 500", "10-2260", "ace", "hdmi", "bolt 4k"], "type": "manually", "active": true }, "mostPopularProducts": { "label": "Trending Products", "productList": ["bolt-6-lt-set", "bolt-6-xt-set", "ace-750", "ctrl-5"], "backup": ["bolt-6-lt-set", "bolt-6-lt-rx", "bolt-6-color-bands", "bolt-6-xt-rx", "antenna-array-v4-for-bolt-4k", "universal-battery-plate", "ace-750", "6ghz-v-antenna", "bolt-6-monitor-module-rx", "bolt-6-xt-set"], "type": "manually", "active": true }, "products": { "label": "Products", "pageSize": 25, "active": true, "displayImage": true }, "collections": { "label": "Collections", "pageSize": "12", "active": true, "displayImage": false, "displayDescription": false, "excludedValues": [{ "value": "249085057", "label": "Live:Air", "handle": "live-air-family-old", "sort_order": "alpha-asc" }] }, "pages": { "label": "Pages & Blogs", "pageSize": 25, "active": false, "displayImage": true, "displayExcerpt": false }, "searchEmptyResultMessages": { "active": true, "label": "We couldn't find results for {{ terms }}.{{ breakline }}But don't give up – check the spelling or try less specific search terms." }, "searchTips": { "label": "Search tips", "active": false, "searchTips": "Please double-check your spelling.{{ breakline }}Use more generic search terms.{{ breakline }}Enter fewer keywords.{{ breakline }}Try searching by product type, brand, model number or product feature." } }, "suggestionNoResult": { "search_terms": { "label": "Popular Searches", "status": true, "data": ["bolt 6", "antenna", "ace", "serv", "ranger"], "type": "manually", "backup": ["antenna", "bolt 6", "m", "teradek rt", "bolt", "bolt 500", "10-2260", "ace", "hdmi", "bolt 4k"] }, "products": { "label": "Trending Products", "status": true, "data": ["bolt-6-lt-set", "bolt-6-xt-set", "ace-750", "ctrl-5"], "type": "manually", "backup": ["bolt-6-lt-set", "bolt-6-lt-rx", "bolt-6-color-bands", "bolt-6-xt-rx", "antenna-array-v4-for-bolt-4k", "universal-battery-plate", "ace-750", "6ghz-v-antenna", "bolt-6-monitor-module-rx", "bolt-6-xt-set"] } }, "enableInstantSearch": true, "productAvailable": true, "showSuggestionProductImage": true, "showSuggestionProductPrice": false, "showSuggestionProductSalePrice": false, "showSuggestionProductSku": true, "showSuggestionProductVendor": false, "suggestionBlocks": [{ "type": "products", "label": "Buy", "status": "active", "number": 4 }, { "type": "pages", "label": "Learn", "status": "active", "number": 3 }, { "type": "suggestions", "label": "Popular suggestions", "status": "disabled", "number": 2 }, { "type": "collections", "label": "Shop", "status": "active", "number": 3, "excludedValues": [{ "value": "249085057", "label": "Live:Air", "handle": "live-air-family-old", "sort_order": "alpha-asc" }] }], "searchBoxOnclick": { "recentSearch": { "label": "Recent searches", "status": false, "number": "3" }, "searchTermSuggestion": { "label": "Popular searches", "status": false, "data": ["antenna", "bolt 6", "autoscript epic-ip19xl", "serv", "bolt", "litepanels 900-3651", "sachtler 7080", "autoscript mt-evolve", "sachtler 08365", "oconnor c1040-30l-m"], "backup": [], "type": "based_on_data" }, "productSuggestion": { "label": "Trending products", "status": false, "data": ["8502669443250", "7959935254706", "7433446555826", "7975913357490", "8542959468722", "7975925711026", "8412918644914", "8413091233970", "8412885745842", "8555378016434"], "backup": [], "type": "based_on_data" } }, "suggestionStyle": "style2", "suggestionStyle1ProductItemType": "list", "suggestionStyle1ProductPosition": "none", "suggestionStyle1ProductPerRow": "1", "suggestionStyle2ProductItemType": "list", "suggestionStyle2ProductPosition": "right", "suggestionStyle2ProductPerRow": "2", "suggestionStyle3ProductItemType": "grid", "suggestionStyle3ProductPosition": "right", "suggestionStyle3ProductPerRow": "3" }, "filterSettings": { "showFilterOptionCount": true, "showRefineBy": true, "showOutOfStockOption": true, "showSingleOption": false, "keepToggleState": true, "changeMobileButtonLabel": false, "sortingAvailableFirst": false, "showLoading": false, "activeScrollToTop": false, "showVariantImageBasedOnSelectedFilter": "", "productAndVariantAvailable": false, "availableAfterFiltering": false, "isShortenUrlParam": false, "filterTreeMobileStyle": "style2", "filterTreeVerticalStyle": "style-expand", "filterTreeHorizontalStyle": "style1", "stickyFilterOnDesktop": false, "stickyFilterOnMobile": false, "style": { "filterTitleTextColor": "#222222", "filterTitleFontSize": "inherit", "filterTitleFontWeight": "inherit", "filterTitleFontTransform": "none", "filterTitleFontFamily": "inherit", "filterOptionTextColor": "#222222", "filterOptionFontSize": "inherit", "filterOptionFontFamily": "inherit" }, "filterLayout": "horizontal" }, "additionalElementSettings": { "customSortingList": "manual|price-ascending|price-descending|created-ascending|created-descending|relevance", "enableCollectionSearch": false }, "themeSettings": { "productItems": { "general": { "borderLayout": "noBorder", "subLayout": "subLayout_2_2", "backgroundColor": "#FFFFFF", "backgroundColorOnHover": "#FFFFFF", "borderColor": "#C7C7C7", "borderColorOnHover": "#C7C7C7" }, "productImg": { "elements": { "productSaleLabel": { "shape": "capsule", "displayType": "text", "displayOptions": "always", "color": "#000000", "backgroundColor": "#FA2100", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "fontWeight": "inherit", "isEnable": true }, "productSoldOutLabel": { "hideOtherLabelsWhenSoldOut": true, "shape": "capsule", "displayType": "text", "displayOptions": "always", "color": "#000000", "backgroundColor": "#939598", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "fontWeight": "inherit", "isEnable": true }, "productCustomLabelByTag": { "shape": "capsule", "color": "#000000", "backgroundColor": "#00A47C", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "fontWeight": "inherit", "isEnable": true }, "selectOptionBtn": { "buttonType": "selectOptionBtn", "action": "quickAddToCart", "isEnable": false }, "qvBtn": { "buttonType": "qvBtn", "isEnable": false } }, "grid": { "top": { "direction": "horizontal", "elements": { "left": ["saleLabel", "soldOutLabel", "customLabelByTag"] } }, "bottom": { "direction": "horizontal", "elements": { "left": ["selectOptionBtn", "qvBtn"] } } }, "aspectRatioType": "square", "cropPosition": "center", "hoverEffect": "none" }, "styleSettings": { "selectOptionBtn": { "showOnHovering": true, "showOn": "desktopOnly", "displayType": "textWithIcon", "shape": "rectangle", "imgSrc": "https://boost-cdn-prod.bc-solutions.net/icon/add-to-cart-white.svg", "iconPosition": "left", "backgroundColor": "#000000", "backgroundColorOnHover": "#000000", "borderColor": "#000000", "borderColorOnHover": "#000000", "textColor": "#FFFFFF", "textColorOnHover": "#FFFFFF", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "buttonStyling": "solid", "fontWeight": "inherit", "width": "100%" }, "qvBtn": { "showOn": "desktopOnly", "showOnHovering": true, "displayType": "icon", "shape": "square", "imgSrc": "https://boost-cdn-prod.bc-solutions.net/icon/quick-view.svg", "width": "40px", "backgroundColor": "#FFFFFF", "backgroundColorOnHover": "#FFFFFF", "borderColor": "#000000", "borderColorOnHover": "#000000", "textColor": "#000000", "textColorOnHover": "#000000", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "buttonStyling": "outline", "iconPosition": "left", "fontWeight": "inherit" } }, "productInfo": { "textAlign": "left", "elements": { "swatches.1": { "showOptionValueOnHovering": true, "shape": "circle", "changeProductImageOn": "hover", "isEnable": false }, "title": { "color": "#000000", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "capitalize", "isEnable": true, "fontWeight": "inherit" }, "vendor": { "color": "#3F3F3F", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "uppercase", "isEnable": false, "fontWeight": "inherit" }, "price": { "showCentAsSuperscript": false, "showCurrencyCodes": false, "compareAtPricePosition": "left", "showSavingDisplay": false, "priceColor": "#000000", "priceFontSizeScale": 100, "priceFontFamily": "inherit", "priceFontStyle": "inherit", "priceFontSize": "inherit", "priceFontSizeTabletPortrait": "inherit", "priceFontSizeTabletLandscape": "inherit", "priceFontSizeMobile": "inherit", "salePriceColor": "#FA2100", "salePriceFontSizeScale": 100, "salePriceFontFamily": "inherit", "salePriceFontStyle": "inherit", "salePriceFontSize": "inherit", "salePriceFontSizeTabletPortrait": "inherit", "salePriceFontSizeTabletLandscape": "inherit", "salePriceFontSizeMobile": "inherit", "compareAtPriceColor": "#000000", "compareAtPriceFontSizeScale": 100, "compareAtPriceFontFamily": "inherit", "compareAtPriceFontStyle": "inherit", "compareAtPriceFontSize": "inherit", "compareAtPriceFontSizeTabletPortrait": "inherit", "compareAtPriceFontSizeTabletLandscape": "inherit", "compareAtPriceFontSizeMobile": "inherit", "savingDisplayColor": "#FA2100", "savingDisplayFontSizeScale": 100, "savingDisplayFontFamily": "inherit", "savingDisplayFontStyle": "inherit", "savingDisplayFontSize": "inherit", "savingDisplayFontSizeTabletPortrait": "inherit", "savingDisplayFontSizeTabletLandscape": "inherit", "savingDisplayFontSizeMobile": "inherit", "isEnable": true, "priceFontWeight": "inherit", "salePriceFontWeight": "inherit", "compareAtPriceFontWeight": "inherit", "savingDisplayFontWeight": "inherit" }, "inventoryStatus": { "lowInventoryThreshold": 0, "fontSizeScale": 100, "textTransform": "none", "inStockColor": "#00A47C", "lowStockColor": "#F29100", "soldOutColor": "#595959", "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "isEnable": false, "fontWeight": "inherit" }, "rating": false, "swatches.2": { "showOptionValueOnHovering": true, "shape": "circle", "changeProductImageOn": "hover", "isEnable": false }, "swatches.3": { "showOptionValueOnHovering": true, "shape": "circle", "changeProductImageOn": "hover", "isEnable": false } } } }, "additionalElements": { "pagination": { "paginationType": "default", "alignment": "center", "productCount": { "showProductCount": false, "position": "top", "color": "#222222" }, "number": { "shape": "circle", "color": "#000000", "colorOnSelected": "#000000", "backgroundColor": "#FFFFFF", "backgroundColorOnSelected": "#FFFFFF", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "fontWeight": "inherit" }, "button": { "shape": "circle", "buttonType": "icon-only", "color": "#000000", "backgroundColor": "#FFFFFF", "backgroundColorOnHover": "#FFFFFF", "textTransform": "none", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "fontWeight": "inherit" } }, "toolbar": { "layout": "1_1", "filterText": { "color": "#222222", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "refineByText": { "color": "#222222", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "elements": { "viewAs": { "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "color": "#000000", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "listType": "grid/list", "isEnable": false, "fontWeight": "inherit" }, "productCount": { "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "color": "#000000", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "isEnable": false, "fontWeight": "inherit" }, "showLimitList": { "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "color": "#000000", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "isEnable": false, "fontWeight": "inherit" }, "sorting": { "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "color": "#000000", "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "isEnable": true, "fontWeight": "inherit" } } }, "collectionHeader": { "isEnable": true, "layout": 2, "contentPosition": "top-center", "elements": { "breadCrumb": { "showCollectionTitle": false, "showCollectionList": false, "showPagination": false, "placement": "on-top", "alignment": "middle-left", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "color": "#222222", "isEnable": false, "fontWeight": "inherit" }, "collectionImage": { "size": "medium", "parallaxEffect": false, "directionParallax": "vertical", "isEnable": true }, "collectionTitle": { "textAlign": "center", "textTransform": "none", "fontSizeScale": 100, "fontSize": 40, "fontSizeTabletPortrait": 40, "fontSizeTabletLandscape": 40, "fontSizeMobile": 30, "fontFamily": "inherit", "fontStyle": "inherit", "collectionTitleColor": "#000000", "isEnable": true, "fontWeight": "inherit" }, "productCount": { "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "textTransform": "none", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "color": "#000000", "isEnable": true, "fontWeight": "inherit" }, "collectionDescription": { "fontSize": null, "fontSizeTabletPortrait": null, "fontSizeTabletLandscape": null, "fontSizeMobile": null, "isEnable": true } } } }, "quickView": { "showProductImage": true, "thumbnailPosition": "bottomCenter", "isEnableProductVendor": true, "showCurrencyCodes": false, "buttonOverall": { "shape": "round", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "fontWeight": "inherit" }, "buyItNowBtn": { "enable": false, "color": "#FFFFFF", "hoverColor": "#FFFFFF", "backgroundColor": "#000000", "hoverBackgroundColor": "#000000", "textTransform": "none", "borderColor": "#222222", "hoverBorderColor": "#222222" }, "addToCartBtn": { "color": "#000000", "hoverColor": "#000000", "backgroundColor": "#FFFFFF", "hoverBackgroundColor": "#FFFFFF", "borderColor": "#000000", "hoverBorderColor": "#000000", "textTransform": "none" } }, "cart": { "enableCart": false, "cartStyle": "side", "showCurrencyCodes": false, "enableWidgetRecommendation": false, "widgetRecommendationId": "", "autoOpenAjaxCartOnAddToCart": true, "generalLayout": { "shape": "round", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "fontWeight": "inherit" }, "checkoutBtn": { "textTransform": "none", "color": "#FFFFFF", "hoverColor": "#FFFFFF", "backgroundColor": "#000000", "hoverBackgroundColor": "#000000", "borderColor": "#222222", "hoverBorderColor": "#222222" }, "viewCartBtn": { "textTransform": "none", "color": "#000000", "hoverColor": "#000000", "backgroundColor": "#FFFFFF", "hoverBackgroundColor": "#FFFFFF", "borderColor": "#000000", "hoverBorderColor": "#222222" } }, "productList": { "productsPerPage": 40, "productsPerRowOnDesktop": 4, "productsPerRowOnMobile": 2 }, "searchPage": { "headerBackground": "#F6F6F8", "elements": { "searchHeaderText": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontFamily": "inherit", "fontStyle": "inherit", "fontWeight": "inherit" }, "placeholderSearch": { "color": "#595959", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "scopedSuggestionLabel": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "scopedSuggestionItem": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "backgroundColor": "#E8E9EB", "fontWeight": "inherit" }, "titleTab": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "productCount": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "collectionAndPageTabTitle": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "collectionAndPageTabDescription": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "tipForYou": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "line": { "color": "#C7C7C7" } } }, "filterTree": { "elements": { "refineBy": { "color": "#222222" }, "filterTitle": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "filterOption": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "productCount": { "color": "#595959", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "line": { "color": "#C7C7C7" }, "checkbox": { "color": "#22222299" }, "searchBox": { "color": "#C7C7C7" } } }, "isw": { "backgroundSuggestion": "#F8F8F8", "backgroundProducts": "#FFFFFF", "hoverBackgroundSuggestion": "#E8E9EB", "hoverBackgroundProducts": "#F8F8F8", "elements": { "titleMultiElement": { "color": "#595959", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "results": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "didYouMean": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "didYouMeanResults": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "backgroundColor": "#F6F6F7", "fontWeight": "inherit" }, "productTitle": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "productVendor": { "color": "#595959", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "productPrice": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "productSalePrice": { "color": "#DD3300", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "productCompareAtPrice": { "color": "#595959", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "productSKU": { "color": "#595959", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "fontWeight": "inherit" }, "viewAllBtn": { "color": "#222222", "textTransform": "none", "fontSizeScale": 100, "fontFamily": "inherit", "fontStyle": "inherit", "fontSize": "inherit", "fontSizeTabletPortrait": "inherit", "fontSizeTabletLandscape": "inherit", "fontSizeMobile": "inherit", "backgroundColor": "#FFFFFF", "hoverBackgroundColor": "#E8E9EB", "fontWeight": "inherit" } } } }, "currentAppIntegration": {}, "themeName": "default", "srcThemeNameLib": "default" }

                                    || {}; const template = {};





                        ; template["quickView"] = `<!-- TEMPLATE QUICK VIEW -->{% if product.original_images != nil %}{% assign image_array = product.original_images %}{% else %}{% assign image_array = product.images_info %}{% endif %}{% if image_array.size == 0 %}{% assign image_array = "no_image" | split: ' ' %}{% endif %}{% assign show_prev_next_btns = image_array.size > 4 %}{% assign money_format = request.money_format | strip_html -%}{% capture productData %}{"id": "{{ product.id }}","handle": "{{ product.handle }}","variantId": "{{ product.variant_id }}","splitProduct": "{{ product.split_product }}","variants": {{ product.variants | json | escape }},"tags": {{ product.tags | json | escape }},"images": {{ image_array | json | escape }},"category": "{{ product.product_type | escape }}","tags" : {{ product.tags | json | escape }}}{% endcapture %}{% if product.variants.size == 1 and product.variants[0].title == 'Default Title' %}{% assign is_default_option = true %}{% else %}{% assign is_default_option = false %}{% endif %}<div class="boost-sd__modal" id="boost-sd__modal-quickview" aria-modal="true" role="dialog" aria-label="Quick view detail for product {{ product.title | escape }}" data-product-id='{{ productData.id }}' data-product='{{ productData | json_encode }}'><div class="boost-sd__modal-backdrop"></div><div class="boost-sd__modal-container">  <div tabindex="-1" class="boost-sd__modal-wrapper">   <div class="boost-sd__quick-view" product-id="{{ product.id }}">    <div class="boost-sd__quick-view-product-image">     <div class="boost-sd__slider boost-sd__slider--flex-column">      <div class="boost-sd__thumbs-container boost-sd__thumbs-container--horizontal">       {% if show_prev_next_btns %}       <div class="boost-sd__thumbs-container-prev-button boost-sd__thumbs-container-prev-button--horizontal"><button type="button" aria-label="Previous" class="boost-sd__button boost-sd__button--circle boost-sd__button--full-width" style="padding: 0px;" disabled=""><span class="boost-sd__icon" style="margin: 0px;">          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 7" height="7" width="10" class="boost-sd__thumbs-container-button-icon">           <path stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" d="M0.764024 5.51189L5.00002 1.28789L9.23602 5.51189"></path>          </svg>         </span></button></div>       {% endif %}       <div class="boost-sd__thumbs-container-thumbs boost-sd__thumbs-container-thumbs--horizontal">        {% if request.previewMode == true %}        {% for image in image_array limit: 4 %}        <div class="boost-sd__thumbs-container-thumbs-item">         <div class="boost-sd__slide">          <div class="boost-sd__product-image-wrapper boost-sd__product-image-wrapper--aspect-ratio-3-4">           <div class="boost-sd__product-image">            <img id="product-image-{{ product.id }}" class="boost-sd__product-image-img boost-sd__product-image-img--main" {% if image.src %} src="{{ image.src }}" {% else %} src="https://cdn.shopify.com/extensions/201f4d7b-8d39-43a4-82de-e6f412341695/0.0.0/assets/boost-pfs-no-image.jpg?v=1677838268" {% endif %} fetchpriority="auto" sizes="200px" decoding="async" loading="eager" alt="{{ product.title | escape }}" width="auto" height="auto" />           </div>          </div>         </div>        </div>        {% endfor %}        {% else %}        {% for image in image_array %}        <div class="boost-sd__thumbs-container-thumbs-item">         <div class="boost-sd__slide">          <div class="boost-sd__product-image-wrapper boost-sd__product-image-wrapper--aspect-ratio-3-4">           <div class="boost-sd__product-image" tabindex="0">            <img id="product-image-{{ product.id }}" class="boost-sd__product-image-img boost-sd__product-image-img--main" {% if image.src %} src="{{ image.src }}" {% else %} src="https://cdn.shopify.com/extensions/201f4d7b-8d39-43a4-82de-e6f412341695/0.0.0/assets/boost-pfs-no-image.jpg?v=1677838268" {% endif %} fetchpriority="auto" sizes="200px" decoding="async" loading="eager" alt="Load image {{ forloop.index }} in slider for product {{ product.title | escape }}" width="auto" height="auto" />           </div>          </div>         </div>        </div>        {% endfor %}        {% endif %}       </div>       {% if show_prev_next_btns %}       <div class="boost-sd__thumbs-container-next-button boost-sd__thumbs-container-next-button--horizontal"><button type="button" aria-label="Next" class="boost-sd__button boost-sd__button--circle boost-sd__button--full-width" style="padding: 0px;"><span class="boost-sd__icon" style="margin: 0px;">          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 7" height="7" width="10" class="boost-sd__thumbs-container-button-icon">           <path stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" d="M0.764024 5.51189L5.00002 1.28789L9.23602 5.51189"></path>          </svg>         </span></button></div>       {% endif %}      </div>      <div class="slick-slider">       {% if request.previewMode == true %}       {% for image in image_array limit: 1 %}       <div class="boost-sd__slide">        <div class="boost-sd__product-image-wrapper boost-sd__product-image-wrapper--aspect-ratio-3-4">         <div class="boost-sd__product-image-row boost-sd__product-image-row--top">          <div class="boost-sd__product-image-column boost-sd__product-image-column--in-top boost-sd__product-image-column--left">           {% assign metafields = product.metafields %}           {% assign metafield_productLabel = '' %}           {% if metafields.size > 0 %}           {% for metafield in metafields %}           {% if metafield.namespace == "global" and metafield.key == "productLabel" %}           {% assign metafield_productLabel = metafield.value %}           {% break %}           {% endif %}           {% endfor %}           {% endif %}           {%comment%}Pre-Order, Coming Soon, Refurbished, B-Stock{%endcomment%}           {% if metafield_productLabel != '' %}           {%if product.available == true%}           {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}           {% if compareAtPriceMin > product.price_min and metafield_productLabel == "Sale" or metafield_productLabel == "Best Seller" or metafield_productLabel == "New"-%}           {% assign metafield_productLabel = 'Sale' %}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale">            <span class="boost-sd__product-label-text">             <span>{{ metafield_productLabel }}</span>            </span>           </div>           {% else %}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--{{ metafield_productLabel | downcase | replace: ' ', '-'}}">            <span class="boost-sd__product-label-text">             <span>{{ metafield_productLabel }}</span>            </span>           </div>           {% endif %}           {%endif%}           {%else %}           {% assign hideOtherLabelsWhenSoldOut = true -%}           {% if hideOtherLabelsWhenSoldOut != true -%}           {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}           {% if compareAtPriceMin > product.price_min -%}           {% assign percent = compareAtPriceMin | minus: product.price_min | times: 100 | divided_by: compareAtPriceMin| round -%}           {% assign salePercent = percent | append: '%' -%}           {% assign saleAmount = compareAtPriceMin | minus: product.price_min -%}           {% assign productItemSaleTranslated = "productItem.productItemSale" | translate: translations, "Sale" | replace: '{{salePercent}}', salePercent | replace: '{{saleAmount}}', saleAmount -%}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale">            <span class="boost-sd__product-label-text">             <span>{{ productItemSaleTranslated }}</span>            </span>           </div>           {% endif -%}           {% if product.available == false -%}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--soldout">            <span class="boost-sd__product-label-text">{{ "productItem.productItemSoldOut" | translate: translations, "Sold out" }}</span>           </div>           {% endif -%}           {% assign filtered_tags = "" -%}           {% for tag in product.tags -%}           {% if tag contains 'pfs:label' -%}           {% assign tag_without_label = tag | remove: 'pfs:label-' -%}           {% assign filtered_tags = filtered_tags | append: tag_without_label | append: ',' -%}           {% endif -%}           {% endfor -%}           {% assign filtered_tags = filtered_tags | split: ',' -%}           {% for tag in filtered_tags -%}           <div class="boost-sd__product-label boost-sd__product-label--capsule boost-sd__product-label--customLabelByTag">            <span class="boost-sd__product-label-text"><span>{{ tag }}</span></span>           </div>           {% endfor -%}           {% else -%}           {% if product.available == false -%}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--soldout">            <span class="boost-sd__product-label-text">{{ "productItem.productItemSoldOut" | translate: translations, "Sold out" }}</span>           </div>           {% else -%}           {% unless metafield_productLabel != ''%}           {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}           {% if compareAtPriceMin > product.price_min -%}           {% assign percent = compareAtPriceMin | minus: product.price_min | times: 100 | divided_by: compareAtPriceMin| round -%}           {% assign salePercent = percent | append: '%' -%}           {% assign saleAmount = compareAtPriceMin | minus: product.price_min -%}           {% assign translatedText = "productItem.productItemSale" | translate: translations, "Sale" | replace: '{{salePercent}}', salePercent | replace: '{{saleAmount}}', saleAmount %}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale">            <span class="boost-sd__product-label-text">             <span>{{ translatedText }}</span>            </span>           </div>           {% endif -%}           {%endunless%}           {% assign filtered_tags = "" -%}           {% for tag in product.tags -%}           {% if tag contains 'pfs:label' -%}           {% assign tag_without_label = tag | remove: 'pfs:label-' -%}           {% assign filtered_tags = filtered_tags | append: tag_without_label | append: ',' -%}           {% endif -%}           {% endfor -%}           {% assign filtered_tags = filtered_tags | split: ',' -%}           {% for tag in filtered_tags -%}           <div class="boost-sd__product-label boost-sd__product-label--capsule boost-sd__product-label--customLabelByTag">            <span class="boost-sd__product-label-text"><span>{{ tag }}</span></span>           </div>           {% endfor -%}           {% endif -%}           {% endif -%}           {%endif %}          </div>         </div>         <div class="boost-sd__product-image">          <img id="product-image-{{ product.id }}" class="boost-sd__product-image-img boost-sd__product-image-img--main" {% if image.src %} src="{{ image.src }}" {% else %} src="https://cdn.shopify.com/extensions/201f4d7b-8d39-43a4-82de-e6f412341695/0.0.0/assets/boost-pfs-no-image.jpg?v=1677838268" {% endif %} fetchpriority="auto" sizes="200px" decoding="async" loading="eager" alt="{{ product.title | escape }}" width="auto" height="auto" />         </div>        </div>       </div>       {% endfor %}       {% else %}       {% for image in image_array %}       <div class="boost-sd__slide">        <div class="boost-sd__product-image-wrapper boost-sd__product-image-wrapper--aspect-ratio-3-4">         <div class="boost-sd__product-image-row boost-sd__product-image-row--top">          <div class="boost-sd__product-image-column boost-sd__product-image-column--in-top boost-sd__product-image-column--left">           {% assign metafields = product.metafields %}           {% assign metafield_productLabel = '' %}           {% if metafields.size > 0 %}           {% for metafield in metafields %}           {% if metafield.namespace == "global" and metafield.key == "productLabel" %}           {% assign metafield_productLabel = metafield.value %}           {% break %}           {% endif %}           {% endfor %}           {% endif %}           {%comment%}Pre-Order, Coming Soon, Refurbished, B-Stock{%endcomment%}           {% if metafield_productLabel != '' %}           {%if product.available == true%}           {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}           {% if compareAtPriceMin > product.price_min and metafield_productLabel == "Sale" or metafield_productLabel == "Best Seller" or metafield_productLabel == "New"-%}           {% assign metafield_productLabel = 'Sale' %}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale">            <span class="boost-sd__product-label-text">             <span>{{ metafield_productLabel }}</span>            </span>           </div>           {% else %}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--{{ metafield_productLabel | downcase | replace: ' ', '-'}}">            <span class="boost-sd__product-label-text">             <span>{{ metafield_productLabel }}</span>            </span>           </div>           {% endif %}           {%endif%}           {%else %}           {% assign hideOtherLabelsWhenSoldOut = true -%}           {% if hideOtherLabelsWhenSoldOut != true -%}           {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}           {% if compareAtPriceMin > product.price_min -%}           {% assign percent = compareAtPriceMin | minus: product.price_min | times: 100 | divided_by: compareAtPriceMin| round -%}           {% assign salePercent = percent | append: '%' -%}           {% assign saleAmount = compareAtPriceMin | minus: product.price_min -%}           {% assign productItemSaleTranslated = "productItem.productItemSale" | translate: translations, "Sale" | replace: '{{salePercent}}', salePercent | replace: '{{saleAmount}}', saleAmount -%}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale">            <span class="boost-sd__product-label-text">             <span>{{ productItemSaleTranslated }}</span>            </span>           </div>           {% endif -%}           {% if product.available == false -%}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--soldout">            <span class="boost-sd__product-label-text">{{ "productItem.productItemSoldOut" | translate: translations, "Sold out" }}</span>           </div>           {% endif -%}           {% assign filtered_tags = "" -%}           {% for tag in product.tags -%}           {% if tag contains 'pfs:label' -%}           {% assign tag_without_label = tag | remove: 'pfs:label-' -%}           {% assign filtered_tags = filtered_tags | append: tag_without_label | append: ',' -%}           {% endif -%}           {% endfor -%}           {% assign filtered_tags = filtered_tags | split: ',' -%}           {% for tag in filtered_tags -%}           <div class="boost-sd__product-label boost-sd__product-label--capsule boost-sd__product-label--customLabelByTag">            <span class="boost-sd__product-label-text"><span>{{ tag }}</span></span>           </div>           {% endfor -%}           {% else -%}           {% if product.available == false -%}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--soldout">            <span class="boost-sd__product-label-text">{{ "productItem.productItemSoldOut" | translate: translations, "Sold out" }}</span>           </div>           {% else -%}           {% unless metafield_productLabel != ''%}           {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}           {% if compareAtPriceMin > product.price_min -%}           {% assign percent = compareAtPriceMin | minus: product.price_min | times: 100 | divided_by: compareAtPriceMin| round -%}           {% assign salePercent = percent | append: '%' -%}           {% assign saleAmount = compareAtPriceMin | minus: product.price_min -%}           {% assign translatedText = "productItem.productItemSale" | translate: translations, "Sale" | replace: '{{salePercent}}', salePercent | replace: '{{saleAmount}}', saleAmount %}           <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale">            <span class="boost-sd__product-label-text">             <span>{{ translatedText }}</span>            </span>           </div>           {% endif -%}           {%endunless%}           {% assign filtered_tags = "" -%}           {% for tag in product.tags -%}           {% if tag contains 'pfs:label' -%}           {% assign tag_without_label = tag | remove: 'pfs:label-' -%}           {% assign filtered_tags = filtered_tags | append: tag_without_label | append: ',' -%}           {% endif -%}           {% endfor -%}           {% assign filtered_tags = filtered_tags | split: ',' -%}           {% for tag in filtered_tags -%}           <div class="boost-sd__product-label boost-sd__product-label--capsule boost-sd__product-label--customLabelByTag">            <span class="boost-sd__product-label-text"><span>{{ tag }}</span></span>           </div>           {% endfor -%}           {% endif -%}           {% endif -%}           {%endif %}          </div>         </div>         <div class="boost-sd__product-image">          <img id="product-image-{{ product.id }}" class="boost-sd__product-image-img boost-sd__product-image-img--main" {% if image.src %} src="{{ image.src }}" {% else %} src="https://cdn.shopify.com/extensions/201f4d7b-8d39-43a4-82de-e6f412341695/0.0.0/assets/boost-pfs-no-image.jpg?v=1677838268" {% endif %} fetchpriority="auto" sizes="200px" decoding="async" loading="eager" alt="{{ product.title | escape }}" width="auto" height="auto" />         </div>        </div>       </div>       {% endfor %}       {% endif %}      </div>     </div>    </div>    <div class="boost-sd__quick-view-product-info">     <h2 class="boost-sd__quick-view-title">{{ product.title | escape }}</h2>     <p class="boost-sd__quick-view-vendor">{{ product.vendor }}</p>     <div class="boost-sd__quick-view-price">      <span class="boost-sd__format-currency"><span class="">{{ product.price_min | format_currency: money_format }}</span></span>     </div>     {% if is_default_option == false %}     {% for swatch in product.options_with_values %}     <div class="boost-sd__product-swatch">      <div class="boost-sd__product-swatch-title">{{ swatch.label | escape }}</div>      <div class="boost-sd__product-swatch-options">       {% for value in swatch.values %}       <div class="boost-sd__product-swatch-option">        <div class="boost-sd__radio">         <div class="boost-sd__tooltip">          {% if swatch.original_name == 'color' %}          <div class="boost-sd__tooltip-content">{{ value.title | strip_html | escape }}</div>          {% endif %}          <input id="product-swatch-qv-{{ product.id }}-{{ value.title | strip_html | escape }}" class="boost-sd__radio-input boost-sd__radio-input--hidden" type="radio" value="{{ value.title | strip_html | escape }}" checked="" />          {% if swatch.original_name == 'color' %}          {% assign backgroundSwatch = "background-color:" | append: value.title | strip_html | escape %}          {% assign domain = request.shop %}          {% assign imageName = value.title | strip_html | downcase | strip | escape %}          {% if imageName contains " " %}          {% assign imageName = imageName | replace: ' ', "-" %}          {% endif %}          {% assign url = "//" | append: domain | append: "/cdn/shop/files/" | append: imageName | append: ".png" %}          {% assign backgroundSwatch = backgroundSwatch | append: "; background-image: url('" | append: url | append: "');"%}          <label role="radio" tabindex="0" aria-label="{{ swatch.original_name }}:{{ value.title }}" for="product-swatch-qv-{{ product.id }}-{{ value.title | strip_html | escape }}" class="boost-sd__radio-label boost-sd__radio-label--hide-text boost-sd__radio-label--large" style="{{ backgroundSwatch }}">           {{ value.title | strip_html | escape }}          </label>          {% else %}          <label role="radio" tabindex="0" aria-label="{{ swatch.original_name }}:{{ value.title }}" for="product-swatch-qv-{{ product.id }}-{{ value.title | strip_html | escape }}" class="boost-sd__radio-label boost-sd__radio-label--in-quick-view">           {{ value.title | strip_html | escape }}          </label>          {% endif %}         </div>        </div>       </div>       {% endfor %}      </div>     </div>     {% endfor %}     {% endif %}     <div class="boost-sd__quick-view-quantity">      <p class="boost-sd__quick-view-quantity-title">{{ "quickView.qvQuantity" | translate: translations, 'Quantity' }}</p>      <div class="boost-sd__input-number boost-sd__input-number--md">       <div class="boost-sd__input-number-btn-wrapper">        <button type="button" aria-label="Decrease quantity" class="boost-sd__button boost-sd__button--full-width boost-sd__input-number-btn"><span>-</span></button>       </div>       <input type="number" aria-label="Item quantity" class="boost-sd__input-number-input" value="1" />       <div class="boost-sd__input-number-btn-wrapper">        <button type="button" aria-label="Increase quantity" class="boost-sd__button boost-sd__button--full-width boost-sd__input-number-btn"><span>+</span></button>       </div>      </div>      <div class="boost-sd__quick-view-quantity-error" style="color: red; font-size: 90%; display: none">{{ "quickView.qvQuantityError" | translate: translations, 'Please input quantity' }}</div>     </div>     {% comment %} TODO check preorder {% endcomment %}     <div class="boost-sd__quick-view-preorder">      <!-- TEMPLATE PRE_ORDER WITH PAYMENT -->      {% comment %} TODO check preorder {% endcomment %}      {% if product.variants %}      {% assign variants = product.variants %}      {% else %}      {% assign variants = variants %}      {% endif %}      {% for variant in variants %}      {% if variant.preorder %}      {% assign paymentType = variant.preorder.payment.type %}      {% assign discountType = variant.preorder.payment.discountType %}      {% assign discountValue = variant.preorder.payment.discountValue %}      {% assign originalPrice = variant.price %}      {% assign paymentLabel = '' %}      {% if paymentType == 'full' %}      {% assign paymentLabel = 'Full payment' %}      {% endif %}      {% if paymentType == 'partial' %}      {% assign paymentLabel = 'Partial payment' %}      {% endif %}      {% if paymentType == 'none' %}      {% assign paymentLabel = 'No payment' %}      {% endif %}      {% assign money_format = request.money_format | strip_html -%}      {% assign money_rate = request.currency_rate | strip_html -%}      {% if discountType == 'percentage' %}      {% assign percentNum = originalPrice | times: discountValue | divided_by: 100 %}      {% assign discountedPrice = originalPrice | times: 1.0 | minus: percentNum %}      {% elsif discountType == 'amount' %}      {% assign discountValue = discountValue | times: money_rate %}      {% assign discountedPrice = originalPrice | times: 1.0 | minus: discountValue %}      {% else %}      {% assign discountedPrice = originalPrice %}      {% endif %}      {% assign removePriceDecimal = false -%}      {% assign showCentAsSuperscript = false -%}      {% assign decimalDelimiter = '' -%}      {% assign withoutTrailingZeros = true -%}      {% assign originalPriceFormat = originalPrice | format_currency: money_format, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros -%}      {% assign discountedPriceFormat = discountedPrice | format_currency: money_format, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros -%}      {% assign discountValueFormat = discountValue | format_currency: money_format, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros %}      <div class="boost-sd__preorder" tabindex="0" data-variant-id="{{ variant.id }}" role="region" aria-labelledby="preorder-title" aria-describedby="preorder-description">       <div class="boost-sd__preorder-option">        <h2 id="preorder-title" class="boost-sd__preorder-title">{{ paymentLabel }}</h2>        <div id="preorder-description" class="boost-sd__preorder-discount" aria-live="polite">         {% if discountType == 'percentage' %}         <span class="boost-sd__preorder-save">Save {{ discountValue }}%</span>         {% elsif discountType == 'amount' %}         <span class="boost-sd__preorder-save">Save {{ discountValueFormat }}</span>         {% endif %}         <div class="boost-sd__preorder-price">          {% if discountType != 'none' %}          <span class="boost-sd__preorder-original-price" aria-label="Original Price: {{ originalPriceFormat }}">{{ originalPriceFormat }}</span>          {% endif %}          <span class="boost-sd__preorder-discounted-price" aria-label="Discounted Price: {{ discountedPriceFormat }}">{{ discountedPriceFormat }}</span>         </div>        </div>       </div>      </div>      {% endif %}      {% endfor %}      {% assign button_label = 'Pre-Order' %}      {% assign preOrderButtonText = variants[0].preorder.settings.buttonText %}      {% assign preOrderDeliveryText = variants[0].preorder.settings.deliveryText %}      {% if preOrderButtonText and preOrderButtonText != '' %}      {% assign button_label = preOrderButtonText %}      {% endif %}      <button type="button" aria-label='{{ button_label }}' class="boost-sd__button boost-sd__button--border boost-sd__button--round boost-sd__button--large boost-sd__button--preorder">       <span class="boost-sd__button-text" aria-hidden="true">        {{ button_label }}       </span>      </button>      <p tabindex="0" class="boost-sd__preorder-note">       <strong class="boost-sd__preorder-note-title">Please note: </strong><span class="boost-sd__preorder-note-text">{{ preOrderDeliveryText }}</span>      </p>     </div>     <div class="boost-sd__quick-view-btn">      <button type="button" class="boost-sd__button boost-sd__button--border boost-sd__button--round boost-sd__button--large boost-sd__btn-add-to-cart">       <span class="boost-sd__button-text">        {{ "productItem.atcAvailableLabel" | translate: translations, 'Add to cart' }}       </span>      </button>     </div>     <a class="boost-sd__quick-view-details-link" href="/products/{{ product.handle }}">{{ "quickView.qvViewFullDetails" | translate: translations, 'View full details' }}</a>    </div>   </div>   <button type="button" aria-label='{{ "close" | translate: translations, "Close" }}' class="boost-sd__button boost-sd__button--transparent boost-sd__button--float boost-sd__modal-close-btn">    <svg class="boost-sd__modal-close-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">     <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3536 5.35355C19.5488 5.15829 19.5488 4.84171 19.3536 4.64645C19.1583 4.45118 18.8417 4.45118 18.6464 4.64645L12 11.2929L5.35355 4.64645C5.15829 4.45118 4.84171 4.45118 4.64645 4.64645C4.45118 4.84171 4.45118 5.15829 4.64645 5.35355L11.2929 12L4.64645 18.6464C4.45118 18.8417 4.45118 19.1583 4.64645 19.3536C4.84171 19.5488 5.15829 19.5488 5.35355 19.3536L12 12.7071L18.6464 19.3536C18.8417 19.5488 19.1583 19.5488 19.3536 19.3536C19.5488 19.1583 19.5488 18.8417 19.3536 18.6464L12.7071 12L19.3536 5.35355Z" fill="#222222"></path>    </svg>   </button>  </div></div></div>`;





                        ; template["cart"] = `<!-- TEMPLATE CART -->{% comment %} This Template contains a few variables built from the client js side {% endcomment %}`;





                        ; template["refineBy"] = `<!-- TEMPLATE REFINE BY --><div class='boost-sd__refine-by-vertical-refine-by'><div class='boost-sd__refine-by-vertical-refine-by-title'>  <div class='boost-sd__refine-by-vertical-refine-by-heading'>{{ "refine" | translate: translations, "Refine By" }}</div>  <button type='button' aria-label='{{ "clearAll" | translate: translations, "Clear All" }}' id='boost-sd__button--clear-all-filters' class='boost-sd__button boost-sd__button--clear' data-metadata='{ "action": { "clearAllFilter": "" } }'>   <span class='boost-sd__button-text' data-metadata='{ "action": { "clearAllFilter": "" } }'>{{ "clearAll" | translate: translations, "Clear All" }}</span>  </button></div><div class='boost-sd__refine-by-vertical-refine-by-list'>  {% for refineByOption in refineBy.options %}  <button metadata='{"action": { "clearFilter": {{ refineByOption.metaData | json | escape }} } }' class='boost-sd__refine-by-vertical-refine-by-item' aria-label='{{ "clearAll" | translate: translations, "Clear All" }}' id='{{refineByOption.data.value | downcase | replace: " ", "-" | append: "-clear-filter" | simpleMd5 }}'>   <div metadata='{"action": { "clearFilter": {{ refineByOption.metaData | json | escape }} } }' class='boost-sd__refine-by-vertical-refine-by-type'>    <span metadata='{"action": { "clearFilter": {{ refineByOption.metaData | json | escape }} } }' class='boost-sd__refine-by-vertical-refine-by-option'>     {{ refineByOption.data.label | escape }}:    </span>    <span metadata='{"action": { "clearFilter": {{ refineByOption.metaData | json | escape }} } }' class='boost-sd__refine-by-vertical-refine-by-value'>     {% if refineByOption.type == 'range' %}     {% if refineByOption.data.key == 'pf_p_price' or refineByOption.data.key == 'pf_vp_variants_price' %}     {{         refineByOption.data.value.lower         | currency_format: refineByOption.data.moneyFormatValue        }}     -     {{         refineByOption.data.value.upper         | currency_format: refineByOption.data.moneyFormatValue        }}     {% else %}     {{ refineByOption.data.value.lower | escape }} - {{ refineByOption.data.value.upper | escape }}     {% endif %}     {% else %}     {{ refineByOption.data.valueDisplay | escape }}     {% endif %}    </span>   </div>   <svg metadata='{"action": { "clearFilter": {{ refineByOption.metaData | json | escape }} } }' class='boost-sd__refine-by-vertical-refine-by-clear' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' role='img' aria-label='{{ "clearAll" | translate: translations, "Clear All" }}' fill='#222'>    <path metadata='{"action": { "clearFilter": {{ refineByOption.metaData | json | escape }} } }' fill-rule="evenodd" clip-rule="evenodd" d="M7.41401 6.00001L11.707 1.70701C12.098 1.31601 12.098 0.684006 11.707 0.293006C11.316 -0.0979941 10.684 -0.0979941 10.293 0.293006L6.00001 4.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L4.58601 6.00001L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.41401L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00001Z" fill="#3D4246">    </path>   </svg>  </button>  {% endfor %} </div></div>`;





                        ; template["filterOptionBoxItem"] = `{% comment %} This Template contains a few variables built from the client js side {% endcomment %}{% if request.previewMode == true %}<li class="boost-sd__filter-option-item boost-sd__filter-option-box-item"><button role='checkbox' aria-label='{{ value.key | escape_once | strip_html }}' aria-checked='false' class='boost-sd__filter-option-item-button boost-sd__filter-option-item-button--as-button'>  <span class='boost-sd__filter-option-item-label'>   {% if option.displayAllValuesInUppercaseForm %}   {{ value.key | escape | upcase }}   {% else %}   {{ value.key | escape }}   {% endif %}  </span></button></li>{% else %}<li class='{{ className }}'><button id='{{ actionId }}' data-action='{{ dataAction }}' role='checkbox' aria-label='Find product with {{ label | escape }} is {{ value.label | escape_once | strip_html }}' aria-checked='false' class='boost-sd__filter-option-item-button boost-sd__filter-option-item-button--as-button'>  <span data-action='{{ dataAction }}' class='boost-sd__filter-option-item-label'>   {% if displayAllValuesInUppercaseForm %}   {{ value.label | escape | upcase }}   {% else %}   {{ value.label | escape }}   {% endif %}  </span></button></li>{% endif %}`;





                        ; template["filterOptionListItem"] = `{% comment %} This Template contains a few variables built from the client js side {% endcomment %}{% if request.previewMode == true %}<li class="boost-sd__filter-option-item boost-sd__filter-option-list-option-item"><button role="checkbox" aria-checked="false" aria-label="{{ value.key | escape_once }}" class="boost-sd__filter-option-item-button boost-sd__filter-option-item-button--as-button boost-sd__filter-option-item-button--with-checkbox">  {% if option.filterType == "variants_price" or option.filterType == "price" %}  {% if value.from == 0 %}  {{ "under" | translate: translations, "Under" }}  {{ value.to | format_currency: option.moneyFormatValue }}  {% elsif value.to == nil %}  {{ "above" | translate: translations, "Above" }}  {{ value.from | format_currency: option.moneyFormatValue }}  {% elsif value.from != 0 and value.to != nil %}  {{ value.from | format_currency: option.moneyFormatValue }} - {{ value.to | format_currency: option.moneyFormatValue }}  {% endif %}  {% elsif option.filterType == "percent_sale" %}  {% if value.from == nil %}  {{ "under" | translate: translations, "Under" }}  {{ value.to }}  {% elsif value.to == nil %}  {{ "above" | translate: translations, "Above" }}  {{ value.from }}  {% elsif value.from != 0 and value.to != nil %}  {{ value.from }}% - {{ value.to }}%  {% endif %}  {% else %}  <span class="boost-sd__filter-option-item-label">   {% if option.displayAllValuesInUppercaseForm %}   {% if option.filterType == "stock" or option.filterType == "collection" %}   {{ value.label | upcase | escape }}   {% else %}   {{ value.key | upcase | escape }}   {% endif %}   {% else %}   {% if option.filterType == "stock" or option.filterType == "collection" %}   {{ value.label | escape }}   {% else %}   {{ value.key | escape }}   {% endif %}   {% endif %}  </span>  {% endif %}  {% if filterSettings.showFilterOptionCount %}  <span aria-label="Number of products: ({{ value.doc_count }})" class="boost-sd__filter-option-item-amount">({{ value.doc_count }})</span>  {% endif %} </button></li>{% else %}<li class='boost-sd__filter-option-item boost-sd__filter-option-list-option-item'><button id='{{ actionId }}' data-action='{{ dataAction }}' role='checkbox' aria-checked='false' aria-label='Find product with {{ label | escape }} is {{ value.label | escape_once | strip_html }}' class='{{ className }}'>  <span data-action='{{ dataAction }}' class='boost-sd__filter-option-item-label'>   {% if displayAllValuesInUppercaseForm %}   {{ value.label | upcase | escape }}   {% else %}   {{ value.label | escape }}   {% endif %}  </span>  {% if showDocCount %}  <span data-action='{{ dataAction }}' aria-label='Number of products: ({{ value.doc_count }})' class='boost-sd__filter-option-item-amount'>   ({{ value.doc_count }})</span>  {% endif %} </button></li>{% endif %}`;





                        ; template["filterOptionSwatchItem"] = `{% comment %} This Template contains a few variables built from the client js side {% endcomment %}{% assign swatchListStyle = option.swatchStyle == 'circle-list' or option.swatchStyle == 'square-list' %}{% if request.previewMode == true %}{% assign swatchTyleClass = "" %}{% if swatchListStyle %}{% assign swatchTyleClass = "list" %}{% else %}{% assign swatchTyleClass = "grid" %}{% endif %}<li class='boost-sd__filter-option-item boost-sd__filter-option-swatch-item'><button title='{{ value.key | strip_html | escape }}' role='checkbox' aria-checked='false' class='boost-sd__filter-option-item-button boost-sd__filter-option-item-button--as-button'>  <span class='boost-sd__filter-option-swatch-item-img boost-sd__filter-option-swatch-item-img--{{swatchTyleClass}} boost-sd__filter-option-swatch-item-img--circle' style='background-color: {{ value.key | escape }};'></span>  {% if swatchListStyle %}  <span class='boost-sd__filter-option-item-label'>   {% if option.displayAllValuesInUppercaseForm %}   {{ value.key | escape | upcase }}   {% else %}   {{ value.key | escape }}   {% endif %}  </span>  <span aria-label='Number of products: ({{ value.doc_count }})' class='boost-sd__filter-option-item-amount'>({{ value.doc_count }})</span>  {% endif %} </button></li>{% else %}<li data-action='{{ dataAction }}' class='boost-sd__filter-option-item boost-sd__filter-option-swatch-item'><button id='{{ actionId }}' data-action='{{ dataAction }}' title='Find product with {{ label | escape }} is {{ value.label | escape | strip_html }}' role='checkbox' aria-checked='false' class='boost-sd__filter-option-item-button boost-sd__filter-option-item-button--as-button'>  {% if swatchValue.backgroundColor == nil %}  {% assign swatch_background_color = "none" %}  {% else %}  {% assign swatch_background_color = swatchValue.backgroundColor | strip_html %}  {% endif %}  {% if swatchValue.backgroundImage == nil %}  {% assign swatch_background_image = "none" %}  {% else %}  {% assign swatch_background_image = swatchValue.backgroundImage | strip_html %}  {% endif %}  <span data-action='{{ dataAction }}' class='{{ className }}' style='background-color: {{ swatch_background_color }}; background-image: {{ swatch_background_image }}'></span>  {% if swatchType == 'list' %}  <span data-action='{{ dataAction }}' class='boost-sd__filter-option-item-label'>   {% if option.displayAllValuesInUppercaseForm %}   {{ value.label | escape | upcase }}   {% else %}   {{ value.label | escape }}   {% endif %}  </span>  {% if showDocCount %}  <span data-action='{{ dataAction }}' aria-label='Number of products: ({{ value.doc_count }})' class='boost-sd__filter-option-item-amount'>({{ value.doc_count }})</span>  {% endif %}  {% endif %} </button></li>{% endif %}`;





                        ; template["filterOptionMultiLevelCollectionItem"] = `{% comment %} This Template contains a few variables built from the client js side {% endcomment %}{% if request.previewMode == true %}<li class='boost-sd__filter-option-item boost-sd__filter-option-item-multilevel-collections {% if option.keepValuesStatic and value.doc_count == 0 %} boost-sd__filter-option-item-multilevel-collections--disabled {% endif %}'><div class='boost-sd__filter-option-item-multilevel-collections-firstlevel'>  <a title='Link to {{ value.displayName }}' href='/collections/{{ value.handle }}' class='boost-sd__filter-option-item-button boost-sd__filter-option-item-button--as-link'>   <span class='boost-sd__filter-option-item-label'>    {% if option.displayAllValuesInUppercaseForm %}    {{ value.displayName | upcase }}    {% else %}    {{ value.displayName }}    {% endif %}   </span>  </a>  {% if showDocCount %}  <span role='text' aria-label='Number of products: ({{ value.doc_count }})' class='boost-sd__filter-option-item-amount'>({{ value.doc_count }})</span>  {% endif %}  {% if value.existedTags %}  <button type='button' aria-label='Expand/Collapse {{ value.displayName }}' class='boost-sd__button boost-sd__button--transparent'>   <svg class='boost-sd__arrow-icon boost-sd__arrow-icon--right' xmlns='http://www.w3.org/2000/svg' width='7' height='12' role='img' aria-label='Expand/Collapse {{ value.displayName }}' viewBox='0 0 7 12' fill='#222'>    <path class="boost-sd__arrow-icon-path" d="M6.58942 0.610713C6.26398 0.285274 5.73635 0.285274 5.41091 0.610713L0.611415 5.41021C0.455135 5.56649 0.366829 5.77895 0.366829 5.99996C0.366829 6.22098 0.454629 6.43294 0.610909 6.58922L5.41091 11.3892C5.73635 11.7147 6.26398 11.7147 6.58942 11.3892C6.91486 11.0638 6.91486 10.5362 6.58942 10.2107L2.37867 5.99996L6.58942 1.78922C6.91486 1.46379 6.91486 0.936153 6.58942 0.610713Z"></path>   </svg>  </button>  {% endif %} </div></li>{% else %}{% assign current_locale = '' %}{% if locale != "" %}{% assign current_locale = '/' | append: locale %}{% endif %}<li class='boost-sd__filter-option-item boost-sd__filter-option-item-multilevel-collections {% if option.keepValuesStatic and value.doc_count == 0 %} boost-sd__filter-option-item-multilevel-collections--disabled {% endif %}'><div class='boost-sd__filter-option-item-multilevel-collections-firstlevel'>  <a id='{{ actionId }}' metaData='{{ metaData | json | escape }}' title='Link to {{ value.displayName }}' data-action='select-filter-item' href='{{current_locale}}/collections/{{ value.handle }}' class='{{ className }}'>   <span style='{{styleOptionItem}}' data-metadata='{{ metaData | json | escape }}' class='boost-sd__filter-option-item-label'>    {% if option.displayAllValuesInUppercaseForm %}    {{ value.displayName | upcase }}    {% else %}    {{ value.displayName }}    {% endif %}   </span>  </a>  {% if showDocCount %}  <span role='text' aria-label='Number of products: ({{ value.doc_count }})' class='boost-sd__filter-option-item-amount'>({{ value.doc_count }})</span>  {% endif %}  {% if value.existedTags %}  <button id='{{ value.actionIdArrow }}' data-metadata='{{ value.metaDataArrow | json | escape }}' type='button' aria-label='Expand/Collapse {{ value.displayName }}' class='boost-sd__button boost-sd__button--transparent' style='padding-right: 0px;'>   <svg id='{{ value.targetIdArrow }}' data-metadata='{{ value.metaDataArrow | json | escape }}' class='boost-sd__arrow-icon boost-sd__arrow-icon--right' xmlns='http://www.w3.org/2000/svg' width='7' height='12' role='img' aria-label='Expand/Collapse {{ value.displayName }}' viewBox='0 0 7 12' fill='#222'>    <path data-metadata='{{ value.metaDataArrow | json | escape }}' class="boost-sd__arrow-icon-path" d="M6.58942 0.610713C6.26398 0.285274 5.73635 0.285274 5.41091 0.610713L0.611415 5.41021C0.455135 5.56649 0.366829 5.77895 0.366829 5.99996C0.366829 6.22098 0.454629 6.43294 0.610909 6.58922L5.41091 11.3892C5.73635 11.7147 6.26398 11.7147 6.58942 11.3892C6.91486 11.0638 6.91486 10.5362 6.58942 10.2107L2.37867 5.99996L6.58942 1.78922C6.91486 1.46379 6.91486 0.936153 6.58942 0.610713Z"></path>   </svg>  </button>  {% endif %} </div> {% if value.existedTags > 0 %} <ul id='{{ value.targetIdList }}' class='boost-sd__filter-option-item-multilevel-collections-listitem boost boost-sd__g-hide'>  {% for tag in value.tags %}  <li class='boost-sd__filter-option-item-multilevel-collections-secondlevel'>   <div class='boost-sd__filter-option-item boost-sd__filter-option-item-multilevel-collections-secondlevel-title'>    <a id='{{ tag.actionId }}' data-metadata='{{ tag.metaData | json | escape }}' title='Link to {{ tag.displayName }}' data-action='select-filter-item' href='{{current_locale}}/collections/frontpage/{{ tag.tag }}' class='{{ tag.className }}'>     <span data-metadata='{{ tag.metaData | json | escape }}' class='boost-sd__filter-option-item-label'>      {% if option.displayAllValuesInUppercaseForm %}      {{ tag.displayName | upcase }}      {% else %}      {{ tag.displayName }}      {% endif %}     </span>    </a>    {% if tag.existedSubTags %}    <button id='{{ tag.actionIdArrow }}' data-metadata='{{ tag.metaDataArrow | json | escape }}' type='button' aria-label='Expand/Collapse {{ tag.displayName }}' class='boost-sd__button boost-sd__button--transparent' style='padding-right: 0px;'>     <svg id='{{ tag.targetIdArrow }}' data-metadata='{{ tag.metaDataArrow | json | escape }}' class='boost-sd__arrow-icon boost-sd__arrow-icon--right' xmlns='http://www.w3.org/2000/svg' width='7' height='12' role='img' aria-label='Expand/Collapse {{ tag.displayName }}' viewBox='0 0 7 12' fill='#222'>      <path data-metadata='{{ tag.metaDataArrow | json | escape }}' class="boost-sd__arrow-icon-path" d="M6.58942 0.610713C6.26398 0.285274 5.73635 0.285274 5.41091 0.610713L0.611415 5.41021C0.455135 5.56649 0.366829 5.77895 0.366829 5.99996C0.366829 6.22098 0.454629 6.43294 0.610909 6.58922L5.41091 11.3892C5.73635 11.7147 6.26398 11.7147 6.58942 11.3892C6.91486 11.0638 6.91486 10.5362 6.58942 10.2107L2.37867 5.99996L6.58942 1.78922C6.91486 1.46379 6.91486 0.936153 6.58942 0.610713Z"></path>     </svg>    </button>    {% endif %}   </div>   {% if tag.existedSubTags %}   <ul id='{{ tag.targetIdList }}' class='boost-sd__filter-option-item-multilevel-collections-thirdlevel boost-sd__g-hide'>    {% for subTag in tag.subTags %}    <li class='boost-sd__filter-option-item boost-sd__filter-option-item-multilevel-collections-thirdlevel-title'>     <a id='{{ subTag.actionId }}' data-metadata='{{ subTag.metaData | json | escape }}' title='Link to {{ subTag.displayName }}' data-action='select-filter-item' href='{{current_locale}}/collections/frontpage/{{ subTag.tag }}' class='{{ subTag.className }}'>      <span data-metadata='{{ subTag.metaData | json | escape }}' class='boost-sd__filter-option-item-label'>       {% if option.displayAllValuesInUppercaseForm %}       {{ subTag.displayName | upcase }}       {% else %}       {{ subTag.displayName }}       {% endif %}      </span>     </a>    </li>    {% endfor %}   </ul>   {% endif %}  </li>  {% endfor %} </ul> {% endif %}</li>{% endif %}`;





                        ; template["filterOptionMultiLevelTagItem"] = `{% comment %} This Template contains a few variables built from the client js side {% endcomment %}{% if request.previewMode == true %}<li class='boost-sd__filter-option-item boost-sd__filter-option-list-option-item'><button role='checkbox' aria-checked='false' aria-label='{{ value.displayName }}' class='boost-sd__filter-option-item-button boost-sd__filter-option-item-button--as-button boost-sd__filter-option-item-button--with-checkbox'>  <span class='boost-sd__filter-option-item-label'>   {% if option.displayAllValuesInUppercaseForm %}   {{ value.displayName | upcase }}   {% else %}   {{ value.displayName }}   {% endif %}  </span></button> {% assign existedTags = value.subTags | size %} {% if existedTags > 0 %} <button type='button' aria-label='Expand/Collapse {{ value.displayName }}' class='boost-sd__button boost-sd__button--transparent boost-sd__filter-option-list-option-item-collapse-btn'>  <svg class='boost-sd__arrow-icon boost-sd__arrow-icon--right' xmlns='http://www.w3.org/2000/svg' width='7' height='12' role='img' aria-label='Expand/Collapse {{ value.displayName }}' viewBox='0 0 7 12' fill='#222'>   <path class="boost-sd__arrow-icon-path" d="M6.58942 0.610713C6.26398 0.285274 5.73635 0.285274 5.41091 0.610713L0.611415 5.41021C0.455135 5.56649 0.366829 5.77895 0.366829 5.99996C0.366829 6.22098 0.454629 6.43294 0.610909 6.58922L5.41091 11.3892C5.73635 11.7147 6.26398 11.7147 6.58942 11.3892C6.91486 11.0638 6.91486 10.5362 6.58942 10.2107L2.37867 5.99996L6.58942 1.78922C6.91486 1.46379 6.91486 0.936153 6.58942 0.610713Z">   </path>  </svg></button> {% endif %}</li>{% else %}<li class='boost-sd__filter-option-item boost-sd__filter-option-list-option-item'><button id='{{ actionId }}' data-metadata='{{ metaData | json | escape }}' role='checkbox' aria-checked='false' aria-label='Find product with {{ label | escape }} is {{ value.displayName | escape | strip_html }}' class='{{ className }}'>  <span style='{{styleOptionItem}}' data-metadata='{{ metaData | json | escape }}' class='boost-sd__filter-option-item-label'>   {% if option.displayAllValuesInUppercaseForm %}   {{ value.displayName | upcase }}   {% else %}   {{ value.displayName }}   {% endif %}  </span></button> {% assign existedTags = value.subTags | size %} {% if existedTags > 0 %} <button id='{{ value.actionIdArrow }}' data-metadata='{{ value.metaDataArrow | json | escape }}' type='button' aria-label='Expand/Collapse {{ value.displayName }}' class='boost-sd__button boost-sd__button--transparent boost-sd__filter-option-list-option-item-collapse-btn'>  <svg id='{{ value.targetIdArrow }}' data-metadata='{{ value.metaDataArrow | json | escape }}' class='boost-sd__arrow-icon boost-sd__arrow-icon--right' xmlns='http://www.w3.org/2000/svg' width='7' height='12' role='img' aria-label='Expand/Collapse {{ value.displayName }}' viewBox='0 0 7 12' fill='{{colorOptionItem}}'>   <path data-metadata='{{ value.metaDataArrow | json | escape }}' class="boost-sd__arrow-icon-path" d="M6.58942 0.610713C6.26398 0.285274 5.73635 0.285274 5.41091 0.610713L0.611415 5.41021C0.455135 5.56649 0.366829 5.77895 0.366829 5.99996C0.366829 6.22098 0.454629 6.43294 0.610909 6.58922L5.41091 11.3892C5.73635 11.7147 6.26398 11.7147 6.58942 11.3892C6.91486 11.0638 6.91486 10.5362 6.58942 10.2107L2.37867 5.99996L6.58942 1.78922C6.91486 1.46379 6.91486 0.936153 6.58942 0.610713Z"></path>  </svg></button> {% comment %} style="display: none" {% endcomment %} <ul id='{{ value.targetIdList }}' class='boost-sd__filter-option-list-option-item-sublist boost-sd__g-hide'>  {% for tag in value.subTags %}  <li class='boost-sd__filter-option-item boost-sd__filter-option-list-option-item'>   <button id='{{ tag.actionId }}' data-metadata='{{ tag.metaData | json | escape }}' role='checkbox' aria-checked='false' aria-label='Find product with {{ label | escape }} is {{ tag.displayName | escape | strip_html }}' class='{{ tag.className }}'>    <span style='{{styleOptionItem}}' data-metadata='{{ tag.metaData | json | escape }}' class='boost-sd__filter-option-item-label'>     {% if option.displayAllValuesInUppercaseForm %}     {{ tag.displayName | upcase }}     {% else %}     {{ tag.displayName }}     {% endif %}    </span>   </button>   {% assign existedSubTags = tag.subTags | size %}   {% if existedSubTags > 0 %}   <button id='{{ tag.actionIdArrow }}' data-metadata='{{ tag.metaDataArrow | json | escape }}' type='button' aria-label='Expand/Collapse {{ tag.displayName }}' class='boost-sd__button boost-sd__button--transparent boost-sd__filter-option-list-option-item-collapse-btn'>    <svg id='{{ tag.targetIdArrow }}' data-metadata='{{ tag.metaDataArrow | json | escape }}' class='boost-sd__arrow-icon boost-sd__arrow-icon--right' xmlns='http://www.w3.org/2000/svg' width='7' height='12' role='img' aria-label='Expand/Collapse {{ tag.displayName }}' viewBox='0 0 7 12' fill='{{colorOptionItem}}'>     <path data-metadata='{{ tag.metaDataArrow | json | escape }}' class="boost-sd__arrow-icon-path" d="M6.58942 0.610713C6.26398 0.285274 5.73635 0.285274 5.41091 0.610713L0.611415 5.41021C0.455135 5.56649 0.366829 5.77895 0.366829 5.99996C0.366829 6.22098 0.454629 6.43294 0.610909 6.58922L5.41091 11.3892C5.73635 11.7147 6.26398 11.7147 6.58942 11.3892C6.91486 11.0638 6.91486 10.5362 6.58942 10.2107L2.37867 5.99996L6.58942 1.78922C6.91486 1.46379 6.91486 0.936153 6.58942 0.610713Z"></path>    </svg>   </button>   {% comment %} style="display: none" {% endcomment %}   <ul id='{{ tag.targetIdList }}' class='boost-sd__filter-option-list-option-item-sublist boost-sd__g-hide'>    {% for subTag in tag.subTags %}    <li class='boost-sd__filter-option-item boost-sd__filter-option-list-option-item'>     <button id='{{ subTag.actionId }}' data-metadata='{{ subTag.metaData | json | escape }}' role='checkbox' aria-checked='false' aria-label='Find product with {{ label | escape }} is {{ subTag.displayName | escape | strip_html }}' class='{{ subTag.className }}'>      <span style='{{styleOptionItem}}' data-metadata='{{ subTag.metaData | json | escape }}' class='boost-sd__filter-option-item-label'>       {% if option.displayAllValuesInUppercaseForm %}       {{ subTag.displayName | upcase }}       {% else %}       {{ subTag.displayName }}       {% endif %}      </span>     </button>    </li>    {% endfor %}   </ul>   {% endif %}  </li>  {% endfor %} </ul> {% endif %}</li>{% endif %}`;





                        ; template["filterOptionRatingItem"] = `{% comment %} This Template contains a few variables built from the client js side {% endcomment %}{% if request.previewMode == true %}<li class='boost-sd__filter-option-item boost-sd__filter-option-rating-item'><button role='checkbox' aria-checked='false' aria-label='{{ value.key }} Stars. Number of products: {{value.doc_count}}' class='boost-sd__filter-option-item-button boost-sd__filter-option-item-button--as-button boost-sd__filter-option-item-button--with-checkbox'>  <span role='presentation' class='boost-sd__filter-option-rating-item-presentation'>   {% for i in (0..4) %}   {% if i < value.from %}   <i class='boost-sd__filter-option-rating-item-icon-star boost-sd__filter-option-rating-item-icon-star--active' style='color: {{ starColor }} ;'></i>   {% else %}   <i class='boost-sd__filter-option-rating-item-icon-star' style='color: {{ starColor }} ;'></i>   {% endif %}   {% endfor %}   {% if showExactRating == false %}   <span>& Up</span>   {% endif %}  </span>  <span aria-label='Number of products: ({{ value.doc_count }})' class='boost-sd__filter-option-item-amount'>({{ value.doc_count }})</span></button></li>{% else %}<li data-value='{{ value.key }}' data-action='{{ dataAction }}' class='boost-sd__filter-option-item boost-sd__filter-option-rating-item'><button id='{{ actionId }}' data-action='{{ dataAction }}' role='checkbox' aria-checked='false' aria-label='{{ value.key }} Stars. Number of products: {{value.doc_count}}' class='{{ className }}'>  <span data-action='{{ dataAction }}' role='presentation' class='boost-sd__filter-option-rating-item-presentation'>   {% for i in (0..4) %}   {% if i < value.from %}   <i data-action='{{ dataAction }}' class='boost-sd__filter-option-rating-item-icon-star boost-sd__filter-option-rating-item-icon-star--active' style='color: {{ starColor }} ;'></i>   {% else %}   <i data-action='{{ dataAction }}' class='boost-sd__filter-option-rating-item-icon-star' style='color: {{ starColor }} ;'></i>   {% endif %}   {% endfor %}   {% if showExactRating == false %}   <span data-action='{{ dataAction }}'>& Up</span>   {% endif %}  </span>  <span data-action='{{ dataAction }}' aria-label='Number of products: ({{ value.doc_count }})' class='boost-sd__filter-option-item-amount'>({{ value.doc_count }})</span></button></li>{% endif %}`;





                        ; template["productPrice"] = `<!-- This Template contains a few variables built from the client js side -->{% assign removePriceDecimal = false -%}{% assign decimalDelimiter = '' -%}{% assign withoutTrailingZeros = false -%}{% assign showCentAsSuperscript = false -%}{% assign money_format = request.money_format -%}{% assign money_format = request.money_format_with_currency -%}{% assign showSavingDisplay = false -%}{% assign minPrice = product.price_min | times: 1.0 -%}{% assign maxPrice = 0 -%}{% if product.price_max -%}{% assign maxPrice = product.price_max | times: 1.0 -%}{% endif -%}<!-- convert variable compareAtPriceMin to number -->{% assign compareAtPriceMin = 0 -%}{% if product.compare_at_price_min -%}{% assign compareAtPriceMin = product.compare_at_price_min | times: 1.0 -%}{% endif -%}{% assign isSale = false -%}{% assign salePercent = 0 -%}{% assign saleAmount = 0 -%}{% if compareAtPriceMin > minPrice -%}{% assign isSale = true -%}{% endif -%}{% assign compareAtPriceWithFormat = '' -%}{% unless compareAtPriceMin == null or compareAtPriceMin == 0 or isSale == false -%}{% comment %} calculate salePercent base on compareAtPriceMin and minPrice {% endcomment %}{% assign compare = compareAtPriceMin | minus: minPrice | times: 100 -%}{% assign salePercent = compare | divided_by: compareAtPriceMin | ceil | append: '%' -%}<!-- compareAtPriceWithFormat is compare price with PriceMin and format currency -->{% assign compareAtPriceWithFormat = compareAtPriceMin | format_currency: moneyFormat, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros -%}{% assign saleAmount = compareAtPriceMin | minus: minPrice -%}{% endunless -%}<!-- Format price min -->{% assign priceMinWithFormat = minPrice | format_currency: moneyFormat, showCentAsSuperscript, removePriceDecimal , decimalDelimiter, withoutTrailingZeros -%}<!-- Format price max -->{% assign priceMaxWithFormat = '' -%}{% if product.price_max and maxPrice > minPrice -%}{% assign priceMaxWithFormat = maxPrice | format_currency: moneyFormat, showCentAsSuperscript, removePriceDecimal , decimalDelimiter, withoutTrailingZeros -%}{% endif -%}<!-- priceMax used for multi variant price display where it can have min-max price with format and translation -->{% assign hasMultiVariantPrice = false -%}{% if translations.productItem.amount contains "minPrice" -%}{% assign hasMultiVariantPrice = true -%}{% endif -%}{% assign isSamePrice = true -%}{% if minPrice != maxPrice or product.compare_at_price_min != product.compare_at_price_max -%}{% assign isSamePrice = false -%}{% endif -%}{% assign priceValueWithFormat = priceMinWithFormat -%}{% if isSamePrice == false and maxPrice > minPrice and hasMultiVariantPrice -%}{% assign priceValueWithFormat = "productItem.amount" | translate: translations, "" | replace: '{{minPrice}}', priceMinWithFormat | replace: '{{maxPrice}}', priceMaxWithFormat -%}{% endif -%}{% assign savingPriceWithFormat = '' -%}{% unless showSavingDisplay == false or saleAmount == 0 -%}{% assign saleAmountWithFormat = saleAmount | format_currency: moneyFormat, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros -%}{% assign savingPriceWithFormat = "productItem.savingAmount" | translate: translations, "Save {{saleAmount}}" | replace: '{{saleAmount}}', saleAmountWithFormat | replace: '{{salePercent}}', salePercent -%}{% endunless -%}<!-- Price compare display top or bottom -->{% comment %} Price compare display left or right {% endcomment %}<div class="boost-sd__product-price-wrapper"><span class="boost-sd__product-price-content  boost-sd__product-price-content--text-align-left">  {%- if compareAtPriceWithFormat != blank -%}  <span class="fs-6 boost-sd__format-currency boost-sd__format-currency--price-compare boost-sd__product-price--compare">   {{ compareAtPriceWithFormat }}  </span>  {%- endif -%} </span> {% if priceValueWithFormat != blank -%} <span class="fw-bold fs-6 {% if isSale == true %}boost-sd__product-price--sale{% else %}boost-sd__product-price--default{% endif %}">  <span class="boost-sd__format-currency">{{ priceValueWithFormat }}</span></span> {% endif %} {% if savingPriceWithFormat != blank -%} <span class="fs-6 boost-sd__product-price--saving"><span class="boost-sd__format-currency">{{ savingPriceWithFormat }}</span></span> {% endif -%}</div>`;





                        ; template["recommendation"] = `<!-- TEMPLATE RECOMMENDATION -->{% assign widgetNameTranslationLabel = 'recommendation.' | append: widgetId %}<div id='{{ widgetId }}' class='boost-sd__recommendation bg-white' data-product-price='true'><div class='boost-sd__recommendation-title boost-sd__recommendation-title--{{ widgetDesignSettings.titleAlignment }}'>  <span class='boost-sd__recommendation-title-text'>   {{ widgetNameTranslationLabel | translate: translations, widgetName }}  </span></div> {% if widgetDesignSettings.layoutDisplay == 'carousel' %}  <!-- TEMPLATE RECOMMENDATION TYPE CAROUSEL --><div class="boost-sd__slider"><div class="boost-sd__slider-container">  {% for product in products %}   <div class="boost-sd__slide">    {% capture domain %}{{ widgetDesignSettings.tenantId }}{% endcapture %}    <!-- TEMPLATE GRID PRODUCT ITEM -->{% if product.original_images != nil %} {% assign imageArray = product.original_images %}{% else %} {% assign imageArray = product.images_info %}{% endif %}{% assign productId = product.id %}{% if product.variant_id %} {% assign productId = product.variant_id %}{% endif %}{% assign filterOptionIdImageBaseOn = 'pf_opt_color' %} {% assign optionName = filterOptionIdImageBaseOn | replace: 'pf_opt_','' %}{% assign valueRequest = request[filterOptionIdImageBaseOn] %}{% assign selectedVariantImageByFilterOption = nil %}{% for item in product.variants %} {% assign optionNameValue = optionName | append: ":" | append: valueRequest %} {% if item.merged_options contains optionNameValue %}  {% if item.image %}   {% assign selectedVariantImageByFilterOption = item.image %}  {% endif %}  {% break %} {% endif %}{% endfor %}{% capture productVariants %} [ {% for variant in product.variants %}  {   "title": "{{ variant.title }}",   "id": "{{ variant.id }}",   "available": {{ variant.available }},    "productDelay":    {% for metafield in product.metafields %}   {% if metafield.namespace == "global" and metafield.key == "availability" and metafield.id == variant.id %}   {{ metafield | json }}   {% break %}   {% endif %}   {% endfor %},  }{% unless forloop.last %},{% endunless %} {% endfor %} ]{% endcapture %} {% capture productData %} {  "handle": "{{ product.handle }}",  "variantId": "{{ product.variant_id }}",  "splitProduct": "{{ product.split_product }}",    "variants": {{ productVariants | json | escape }},    "priceMin": "{{ product.price_min }}",  "priceMax": "{{ product.price_max }}",  "compareAtPriceMin": "{{ product.compare_at_price_min }}",  "compareAtPriceMax": "{{ product.compare_at_price_max }}",  "images": {{ imageArray | json | escape }},  "options_with_values": {{ product.options_with_values | json | escape }},  "selectedVariantImageByFilterOption": "{{ selectedVariantImageByFilterOption | escape }}" }{% endcapture %}{% if borderLayout == 'noPadding' %} {% assign border_layout_item = 'no-padding' %}{% elsif borderLayout == 'hasPadding' %} {% assign border_layout_item = 'border-has-padding' %}{% elsif borderLayout == 'noPaddingImage' %} {% assign border_layout_item = 'border-no-padding-image' %}{% else %} {% assign border_layout_item = 'no-border' %}{% endif %}<div class='boost-sd__product-item boost-sd__product-item--{{ border_layout_item }} boost-sd__product-item-grid-view-layout' id='{{ product.id }}' data-product-id='{{ productId }}' data-product='{{ productData | json_encode }}'><!-- TEMPLATE GRID PRODUCT ITEM - PRODUCT IMAGE -->{% assign metafields = product.metafields %}{% assign file_url = '' %}{% for metafield in metafields %} {% if metafield.namespace == "custom" and metafield.key == "alt_collection_image_url" %}  {% assign file_url = metafield.value %} {% endif %}{% endfor %}{%- capture aspectRatio %}square{% endcapture -%}<div class="boost-sd__product-item-grid-view-layout-image"><a class="boost-sd__product-link boost-sd__product-link-image"  {%- if request.previewMode != true %} href="/products/{{ product.handle }}"{% endif -%} >  <div style="position: relative">                                         {% assign aspect_ratio = '' -%}   {% if aspectRatio == 'natural' -%}    {% assign imageWidth = product.images_info[0].width -%}    {% assign imageHeight = product.images_info[0].height -%}    {% assign aspect_ratio = aspect_ratio | append: 'aspect-ratio:' | append: imageWidth | append: '/' | append: imageHeight -%}   {% endif -%}   <div class="boost-sd__product-image-wrapper mb-4 mb-md-4 boost-sd__product-image-wrapper--crop-center boost-sd__product-image-wrapper--square"    style="{{ aspect_ratio }}">    <div class="boost-sd__product-image">     {% assign firstImageSrc = '' -%}     {% if selectedVariantImageByFilterOption != nil -%}      {% assign firstImageSrc = selectedVariantImageByFilterOption -%}     {% else -%}      {% assign firstImageSrc = product.images_info[0].src -%}     {% endif -%}     {% assign widthParam = "&width=" -%}     {%comment%} {% assign widths = "200,300,400,500,700,800" | split: "," -%}{%endcomment%}      {% assign widths = "400" | split: "," -%}     {% if request.device contains 'mobile' -%}      {% assign maxWidth = 400 -%}     {% else -%}      {% assign maxWidth = 800 -%}     {% endif -%}     {% if request.productImageWidth != blank -%}      {% assign imageWidth = request.productImageWidth | plus: 0 -%}      {% if imageWidth > maxWidth -%}       {% assign maxWidth = imageWidth -%}      {% endif -%}     {% endif -%}     {% if product.images_info[0] -%}      {% capture srcset -%}      {% for width in widths -%}       {% assign widthNo = width | plus: 0%}       {% if widthNo < maxWidth -%}        {{ firstImageSrc }}{{ widthParam }}{{ width }} {{ width }}w,        {% else -%}         {{ firstImageSrc }}{{ widthParam }}{{ maxWidth }} {{ maxWidth }}w        {% break -%}       {% endif -%}      {% endfor -%}     {% endcapture -%}     {% assign productPerRow = 4 -%}     {% if request.productPerRow != blank -%}      {% assign productPerRow = request.productPerRow | plus: 0 -%}     {% endif -%}      <img id="product-image-{{ product.id }}"       class="boost-sd__product-image-img boost-sd__product-image-img--main"        {% if index and index < productPerRow -%}        loading="eager"       {% else -%}               loading="eager"       {% endif -%}       decoding="async"       alt="{{ product.title | escape }}" {% if file_url != blank %} src="{{file_url}}" {%else%} src="{{ firstImageSrc }}&amp;width=200" srcset="{{ srcset }}" {%endif%}>           {% else -%}      <img id="product-image-{{ product.id }}"      class="boost-sd__product-image-img boost-sd__product-image-img--main"      alt="{{ product.title | escape }}" {% if file_url != blank %} src="{{file_url}}" {%else%} src="https://cdn.shopify.com/extensions/201f4d7b-8d39-43a4-82de-e6f412341695/0.0.0/assets/boost-pfs-no-image.jpg?v=1677838268" {%endif%}>     {% endif -%}    </div>                <div class="boost-sd__product-image-row boost-sd__product-image-row--top ">     <div class="boost-sd__product-image-column boost-sd__product-image-column--in-top boost-sd__product-image-column--left">      {% assign metafields = product.metafields %}{% assign metafield_productLabel = '' %}{% if metafields.size > 0 %} {% for metafield in metafields %}   {% if metafield.namespace == "global" and metafield.key == "productLabel" %}   {% assign metafield_productLabel = metafield.value %}   {% break %}   {% endif %} {% endfor %}{% endif %}{%comment%}Pre-Order, Coming Soon, Refurbished, B-Stock{%endcomment%}{% if metafield_productLabel != '' %}{%if product.available == true%}   {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}   {% if compareAtPriceMin > product.price_min and metafield_productLabel == "Sale" or metafield_productLabel == "Best Seller" or metafield_productLabel == "New"-%}   {% assign metafield_productLabel = 'Sale' %}   <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale"><span class="boost-sd__product-label-text">  <span>{{ metafield_productLabel }}</span></span></div>  {% else %}   <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--{{ metafield_productLabel | downcase | replace: ' ', '-'}}"><span class="boost-sd__product-label-text">  <span>{{ metafield_productLabel }}</span></span></div>{% endif %} {%endif%}{%else %}{% assign hideOtherLabelsWhenSoldOut = true -%}{% if hideOtherLabelsWhenSoldOut != true -%}   {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}  {% if compareAtPriceMin > product.price_min -%}   {% assign percent = compareAtPriceMin | minus: product.price_min | times: 100 | divided_by: compareAtPriceMin| round -%}   {% assign salePercent = percent | append: '%' -%}   {% assign saleAmount = compareAtPriceMin | minus: product.price_min -%}   {% assign productItemSaleTranslated = "productItem.productItemSale" | translate: translations, "Sale" | replace: '{{salePercent}}', salePercent | replace: '{{saleAmount}}', saleAmount -%}   <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale">    <span class="boost-sd__product-label-text">     <span>{{ productItemSaleTranslated }}</span>    </span>   </div>  {% endif -%}    {% if product.available == false -%}   <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--soldout">    <span class="boost-sd__product-label-text">{{ "productItem.productItemSoldOut" | translate: translations, "Sold out" }}</span>   </div>  {% endif -%}    {% assign filtered_tags = "" -%}  {% for tag in product.tags -%}  {% if tag contains 'pfs:label' -%}   {% assign tag_without_label = tag | remove: 'pfs:label-' -%}   {% assign filtered_tags = filtered_tags | append: tag_without_label | append: ',' -%}  {% endif -%}  {% endfor -%}  {% assign filtered_tags = filtered_tags | split: ',' -%}  {% for tag in filtered_tags -%}   <div class="boost-sd__product-label boost-sd__product-label--capsule boost-sd__product-label--customLabelByTag">    <span class="boost-sd__product-label-text"><span>{{ tag }}</span></span>   </div>  {% endfor -%} {% else -%} {% if product.available == false -%}     <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--soldout">    <span class="boost-sd__product-label-text">{{ "productItem.productItemSoldOut" | translate: translations, "Sold out" }}</span>   </div>   {% else -%} {% unless metafield_productLabel != ''%}     {% assign compareAtPriceMin = product.compare_at_price_min | default: 0 -%}   {% if compareAtPriceMin > product.price_min -%}    {% assign percent = compareAtPriceMin | minus: product.price_min | times: 100 | divided_by: compareAtPriceMin| round -%}    {% assign salePercent = percent | append: '%' -%}    {% assign saleAmount = compareAtPriceMin | minus: product.price_min -%}    {% assign translatedText = "productItem.productItemSale" | translate: translations, "Sale" | replace: '{{salePercent}}', salePercent | replace: '{{saleAmount}}', saleAmount %}    <div class="boost-sd__product-label boost-sd__product-label--text boost-sd__product-label--capsule boost-sd__product-label--sale">     <span class="boost-sd__product-label-text">      <span>{{ translatedText }}</span>     </span>    </div>   {% endif -%}    {%endunless%}     {% assign filtered_tags = "" -%}   {% for tag in product.tags -%}   {% if tag contains 'pfs:label' -%}    {% assign tag_without_label = tag | remove: 'pfs:label-' -%}    {% assign filtered_tags = filtered_tags | append: tag_without_label | append: ',' -%}   {% endif -%}   {% endfor -%}   {% assign filtered_tags = filtered_tags | split: ',' -%}   {% for tag in filtered_tags -%}    <div class="boost-sd__product-label boost-sd__product-label--capsule boost-sd__product-label--customLabelByTag">     <span class="boost-sd__product-label-text"><span>{{ tag }}</span></span>    </div>   {% endfor -%}   {% endif -%}{% endif -%}{%endif %}     </div>         </div>                 <div class="boost-sd__product-image-row boost-sd__product-image-row--bottom">                                          <div class="boost-sd__product-image-column boost-sd__product-image-column--in-bottom boost-sd__product-image-column--right">                  </div>                 </div>       </div>   {% comment %} POPUP {% endcomment %}          <div class="boost-sd__popup-select-option" style="display: none">     <div class="boost-sd__popup-select-option-container">      {% for swatch in product.options_with_values -%}       <div class="boost-sd__product-swatch">        <div class="boost-sd__product-swatch-title">{{ swatch.label | escape }}</div>        <div class="boost-sd__product-swatch-options">        {% for value in swatch.values -%}         <div class="boost-sd__product-swatch-option">          <div class="boost-sd__radio">           <div class="boost-sd__tooltip">            {% if swatch.original_name == 'color' -%}             <div class="boost-sd__tooltip-content" style="display: none;">{{ value.title | strip_html | escape }}</div>            {% endif -%}            <input id="product-swatch-qv-{{ product.id }}-{{ value.title | strip_html | escape }}" class="boost-sd__radio-input boost-sd__radio-input--hidden" type="radio" value="{{ value.title | strip_html | escape }}" checked="" />            {% if swatch.original_name == 'color' -%}             {% assign backgroundSwatch = "background-color:" | append: value.title | strip_html | escape -%}             {% assign imageName = value.title | strip_html | downcase | strip | escape -%}             {% if imageName contains " " -%}              {% assign imageName = imageName | replace: ' ', "-" -%}             {% endif -%}             {% assign url = "//" | append: domain | append: "/cdn/shop/files/" | append: imageName | append: ".png" -%}             {% assign backgroundSwatch = backgroundSwatch | append: "; background-image: url('" | append: url | append: "');"%}             <label              tabindex="{{ forloop.index }}"              for="product-swatch-qv-{{ product.id }}-{{ value.title | strip_html | escape }}"              class="boost-sd__radio-label boost-sd__radio-label--hide-text {% if forloop.first %}boost-sd__radio-label--selected{% endif %} boost-sd__radio-label--large"              style="{{ backgroundSwatch }}"             >              {{ value.title | strip_html | escape }}             </label>            {% else -%}             <label tabindex="{{ forloop.index }}" for="product-swatch-qv-{{ product.id }}-{{ value.title | strip_html | escape }}" class="boost-sd__radio-label {% if forloop.first %}boost-sd__radio-label--selected{% endif %} boost-sd__radio-label--in-quick-view">{{ value.title | strip_html | escape }}</label>            {% endif -%}           </div>          </div>         </div>        {% endfor -%}        </div>       </div>      {% endfor -%}      <button type="button" aria-label="close-popup" class="boost-sd__button boost-sd__button--transparent boost-sd__button--float boost-sd__popup-select-option-close-btn">       <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9024 3.56904C13.0325 3.43886 13.0325 3.22781 12.9024 3.09763C12.7722 2.96746 12.5611 2.96746 12.431 3.09763L8 7.5286L3.56904 3.09763C3.43886 2.96746 3.22781 2.96746 3.09763 3.09763C2.96746 3.22781 2.96746 3.43886 3.09763 3.56904L7.5286 8L3.09763 12.431C2.96746 12.5611 2.96746 12.7722 3.09763 12.9024C3.22781 13.0325 3.43886 13.0325 3.56904 12.9024L8 8.47141L12.431 12.9024C12.5611 13.0325 12.7722 13.0325 12.9024 12.9024C13.0325 12.7722 13.0325 12.5611 12.9024 12.431L8.47141 8L12.9024 3.56904Z" fill="#222222"></path>       </svg>      </button>     </div>     <button type="button" aria-label="Add to cart" class="boost-sd__button boost-sd__button--primary boost-sd__button--add-to-cart boost-sd__button--full-width boost-sd__button--large boost-sd__btn-add-to-cart"><span class="boost-sd__button-text">{{ "productItem.atcAvailableLabel" | translate: translations, 'Add to cart' }}</span></button>    </div>      {% comment %} POPUP {% endcomment %}  </div></a></div><!-- TEMPLATE GRID PRODUCT ITEM - PRODUCT INFO --><a  aria-labelledby="product-title-{{ product.id }} product-price-{{ product.id }}"  class="boost-sd__product-link" {% if request.previewMode != true %} href="/products/{{ product.handle }}"{% endif %}><div class="boost-sd__product-info boost-sd__product-info--left">      <div class="boost-sd__suggestion-queries-item-sku">{{ product.skus.first | escape }}</div>  <div class="boost-sd__product-title " id="product-title-{{ product.id }}">   {{ product.title | escape }}  </div>       <div class="boost-sd__product-price" id="product-price-{{ product.id }}">    <!-- This Template contains a few variables built from the client js side -->{% assign removePriceDecimal = false -%}{% assign decimalDelimiter = '' -%}{% assign withoutTrailingZeros = false -%}{% assign showCentAsSuperscript = false -%}{% assign money_format = request.money_format -%}{% assign money_format = request.money_format_with_currency -%}{% assign showSavingDisplay = false -%}{% assign minPrice = product.price_min | times: 1.0 -%}{% assign maxPrice = 0 -%}{% if product.price_max -%} {% assign maxPrice = product.price_max | times: 1.0 -%}{% endif -%}<!-- convert variable compareAtPriceMin to number -->{% assign compareAtPriceMin = 0 -%}{% if product.compare_at_price_min -%} {% assign compareAtPriceMin = product.compare_at_price_min | times: 1.0 -%}{% endif -%}{% assign isSale = false -%}{% assign salePercent = 0 -%}{% assign saleAmount = 0 -%}{% if compareAtPriceMin > minPrice -%} {% assign isSale = true -%}{% endif -%}{% assign compareAtPriceWithFormat = '' -%}{% unless compareAtPriceMin == null or compareAtPriceMin == 0 or isSale == false -%} {% comment %} calculate salePercent base on compareAtPriceMin and minPrice {% endcomment %} {% assign compare = compareAtPriceMin | minus: minPrice | times: 100 -%} {% assign salePercent = compare | divided_by: compareAtPriceMin | ceil | append: '%' -%} <!-- compareAtPriceWithFormat is compare price with PriceMin and format currency --> {% assign compareAtPriceWithFormat = compareAtPriceMin | format_currency: moneyFormat, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros -%} {% assign saleAmount = compareAtPriceMin | minus: minPrice -%}{% endunless -%}<!-- Format price min -->{% assign priceMinWithFormat = minPrice | format_currency: moneyFormat, showCentAsSuperscript, removePriceDecimal , decimalDelimiter, withoutTrailingZeros -%}<!-- Format price max -->{% assign priceMaxWithFormat = '' -%}{% if product.price_max and maxPrice > minPrice -%} {% assign priceMaxWithFormat = maxPrice | format_currency: moneyFormat, showCentAsSuperscript, removePriceDecimal , decimalDelimiter, withoutTrailingZeros -%}{% endif -%}<!-- priceMax used for multi variant price display where it can have min-max price with format and translation -->{% assign hasMultiVariantPrice = false -%}{% if translations.productItem.amount contains "minPrice" -%} {% assign hasMultiVariantPrice = true -%}{% endif -%}{% assign isSamePrice = true -%}{% if minPrice != maxPrice or product.compare_at_price_min != product.compare_at_price_max -%} {% assign isSamePrice = false -%}{% endif -%}{% assign priceValueWithFormat = priceMinWithFormat -%}{% if isSamePrice == false and maxPrice > minPrice and hasMultiVariantPrice -%} {% assign priceValueWithFormat = "productItem.amount" | translate: translations, "" | replace: '{{minPrice}}', priceMinWithFormat | replace: '{{maxPrice}}', priceMaxWithFormat -%}{% endif -%} {% assign savingPriceWithFormat = '' -%}{% unless showSavingDisplay == false or saleAmount == 0 -%} {% assign saleAmountWithFormat = saleAmount | format_currency: moneyFormat, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros -%} {% assign savingPriceWithFormat = "productItem.savingAmount" | translate: translations, "Save {{saleAmount}}" | replace: '{{saleAmount}}', saleAmountWithFormat | replace: '{{salePercent}}', salePercent -%}{% endunless -%}<!-- Price compare display top or bottom -->{% comment %} Price compare display left or right {% endcomment %} <div class="boost-sd__product-price-wrapper">  <span class="boost-sd__product-price-content boost-sd__product-price-content--row-reverse boost-sd__product-price-content--text-align-left">    {%- if compareAtPriceWithFormat != blank -%}    <span     class="fs-6 boost-sd__format-currency boost-sd__format-currency--price-compare boost-sd__product-price--compare">      {{ compareAtPriceWithFormat }}    </span>   {%- endif -%}  </span>    {% if priceValueWithFormat != blank -%}   <span class="fw-bold fs-6 {% if isSale == true %}boost-sd__product-price--sale{% else %}boost-sd__product-price--default{% endif %}">    <span class="boost-sd__format-currency">{{ priceValueWithFormat }}</span>   </span> {% endif %}  {% if savingPriceWithFormat != blank -%}   <span class="fs-6 boost-sd__product-price--saving"><span class="boost-sd__format-currency">{{ savingPriceWithFormat }}</span></span>  {% endif -%} </div>   </div>      <!-- PRODUCT INVENTORY -->   <!-- TEMPLATE PRODUCT SWATCH -->{% assign swatches = '' %}   </div></a> {% assign global_availability = '' %} {% for metafield in product.metafields %}   {% if metafield.namespace == "global" and metafield.key == "availability" %}    {% assign global_availability = metafield.value %}   {% break %}   {% endif %} {% endfor %} {% assign test_availability_text = global_availability | downcase %} {% if test_availability_text contains 'same day' %}  <div class="d-flex align-items-center pt-2 shipping-icon-wrapper">   <svg    aria-hidden="true"    focusable="false"    class="icon icon-shipping-collection"    width="31"    height="32"    viewBox="0 0 31 32"    fill="none"    xmlns="http://www.w3.org/2000/svg">    <path d="M8 7.25C7.29688 7.25 6.75 7.83594 6.75 8.5V9.75H12.375C12.6875 9.75 13 10.0625 13 10.375C13 10.7266 12.6875 11 12.375 11H3.625C3.27344 11 3 10.7266 3 10.375C3 10.0625 3.27344 9.75 3.625 9.75H5.5V8.5C5.5 7.13281 6.59375 6 8 6H16.75C18.1172 6 19.25 7.13281 19.25 8.5V9.75H21.7891C22.3359 9.75 22.8438 10.0234 23.1953 10.4141L26.2812 14.0078C26.5547 14.3594 26.75 14.7891 26.75 15.2188V21H27.375C27.6875 21 28 21.3125 28 21.625C28 21.9766 27.6875 22.25 27.375 22.25H25.5C25.5 24.3203 23.8203 26 21.75 26C19.6797 26 18 24.3203 18 22.25H13C13 24.3203 11.3203 26 9.25 26C7.17969 26 5.5 24.3203 5.5 22.25V21V17.25H6.75V19.4766C7.41406 18.8906 8.27344 18.5 9.25 18.5C10.8516 18.5 12.2578 19.5547 12.7656 21H18V8.5C18 7.83594 17.4141 7.25 16.75 7.25H8ZM25.2656 14.75L22.2578 11.2344C22.1406 11.0781 21.9844 11 21.7891 11H19.25V14.75H25.2656ZM19.25 16V19.4766C19.9141 18.8906 20.7734 18.5 21.75 18.5C23.3516 18.5 24.7578 19.5547 25.2656 21H25.5V16H19.25ZM6.75 22.25C6.75 23.1484 7.21875 23.9688 8 24.4375C8.74219 24.8672 9.71875 24.8672 10.5 24.4375C11.2422 23.9688 11.75 23.1484 11.75 22.25C11.75 21.3906 11.2422 20.5703 10.5 20.1016C9.71875 19.6719 8.74219 19.6719 8 20.1016C7.21875 20.5703 6.75 21.3906 6.75 22.25ZM21.75 19.75C20.8516 19.75 20.0312 20.2578 19.5625 21C19.1328 21.7812 19.1328 22.7578 19.5625 23.5C20.0312 24.2812 20.8516 24.75 21.75 24.75C22.6094 24.75 23.4297 24.2812 23.8984 23.5C24.3281 22.7578 24.3281 21.7812 23.8984 21C23.4297 20.2578 22.6094 19.75 21.75 19.75ZM4.875 12.25H13.625C13.9375 12.25 14.25 12.5625 14.25 12.875C14.25 13.2266 13.9375 13.5 13.625 13.5H4.875C4.52344 13.5 4.25 13.2266 4.25 12.875C4.25 12.5625 4.52344 12.25 4.875 12.25ZM3.625 14.75H12.375C12.6875 14.75 13 15.0625 13 15.375C13 15.7266 12.6875 16 12.375 16H3.625C3.27344 16 3 15.7266 3 15.375C3 15.0625 3.27344 14.75 3.625 14.75Z" fill="#0089FA" />   </svg>   <span class="text-blue-3 fs-6 d-block" style="padding-left:2px;">Ships Today</span>  </div> {% endif %}</div>   </div>  {% endfor %}  {% assign numberOfProductPerRow = widgetDesignSettings.numberOfProductPerRow %}  {% assign numberOfRecommendProduct = widgetDesignSettings.numberOfRecommendProduct %}  {% if numberOfRecommendProduct < numberOfProductPerRow %}   {% assign sliderPages = 1 %}   {% assign disable = "disabled" %}  {% else %}   {% assign sliderPages = numberOfRecommendProduct | divided_by: numberOfProductPerRow | ceil %}   {% assign disable = "" %}  {% endif %} </div><div class="boost-sd__prev-button boost-sd__prev-button--inside">  <button type="button" aria-label="Previous" class="boost-sd__button boost-sd__button--circle boost-sd__slider-button" {{ disable }}>   <span class="boost-sd__icon">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 7" height="7" width="10" class="boost-sd__prev-button-icon">     <path stroke-linejoin="round" stroke-linecap="round" stroke="#212121" d="M0.764024 5.51189L5.00002 1.28789L9.23602 5.51189"></path>    </svg>   </span>  </button></div><div class="boost-sd__next-button boost-sd__next-button--inside">  <button type="button" aria-label="Next" class="boost-sd__button boost-sd__button--circle boost-sd__slider-button" {{ disable }}>   <span class="boost-sd__icon" style="margin: 0px;">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 7" height="7" width="10" class="boost-sd__next-button-icon">     <path stroke-linejoin="round" stroke-linecap="round" stroke="#212121" d="M0.764024 5.51189L5.00002 1.28789L9.23602 5.51189"></path>    </svg>   </span>  </button></div></div> {% else %}  <!-- TEMPLATE RECOMMENDATION TYPE BUNDLE -->{% assign bundleStyle = widgetDesignSettings.bundleStyle %}<div class="boost-sd__recommendation-bundle boost-sd__recommendation-bundle--{{ bundleStyle }}"><div class="boost-sd__recommendation-bundle-left">  <div class="boost-sd__recommendation-bundle-images boost-sd__recommendation-bundle-images--{{ bundleStyle }}">   {% for product in products %}    <div class="boost-sd__recommendation-bundle-image-item">     {% if product.checked %}      <a        aria-label="View product details for {{ product.title | escape }}"        class="boost-sd__product-link boost-sd__product-link-image"        href="/products/{{ product.handle }}">     {% endif %}      <div class="boost-sd__product-image-wrapper boost-sd__product-image-wrapper--full-box">       <div class="boost-sd__product-image {% unless product.checked %} boost-sd__product-image--blur {% endunless %}">        {% if product.images_info[0] %}         <img id="product-image-{{ product.id }}"          class="boost-sd__product-image-img boost-sd__product-image-img--main"          src="{{ product.images_info[0].src }}"          alt="{{ product.title | escape }}"           width="auto" height="auto" />        {% else %}         <img id="product-image-{{ product.id }}"          class="boost-sd__product-image-img boost-sd__product-image-img--main"          src="https://cdn.shopify.com/extensions/201f4d7b-8d39-43a4-82de-e6f412341695/0.0.0/assets/boost-pfs-no-image.jpg?v=1677838268"          alt="{{ product.title | escape }}"          width="auto" height="auto" />        {% endif %}       </div>      </div>     {% if product.checked %}      </a>     {% endif %}     {% if bundleStyle == 'style2' %}      <div       class="boost-sd__recommendation-bundle-item-info boost-sd__recommendation-bundle-item-info--{{ bundleStyle }}">       <div class="boost-sd__recommendation-bundle-item-info-content {% unless product.checked %} boost-sd__recommendation-bundle-item-info-content--blur {% endunless %}">        <div class="boost-sd__recommendation-bundle-item-title">         {% if forloop.index0 == 0 %}          <span role="text" tabindex="0">           <b>This item:</b> {{ product.title | escape }}          </span>         {% elsif product.checked %}          <a class="boost-sd__product-link" href="/products/{{ product.handle }}">           {{ product.title | escape }}          </a>         {% else %}          <span role="text" tabindex="0">{{ product.title | escape }}</span>         {% endif %}        </div>        {%- if product.selectedOption.title != 'Default Title' -%}         <div class="boost-sd__recommendation-bundle-dropdown-wrapper boost-sd__recommendation-bundle-dropdown-wrapper--{{ bundleStyle }}">          <div            {% if product.checked %} tabindex="0" {% endif %}           role="combobox"           aria-label="Select an option"           aria-expanded="false"           aria-haspopup="true"            data-id="boost-sd__dropdown-{{ widgetId }}"           id="boost-sd__dropdown-{{ widgetId }}"            class="boost-sd__dropdown {% unless product.checked %} boost-sd__dropdown--disabled {% endunless %}">           <div class="boost-sd__dropdown-selected-option">            <span              aria-label="Current option: {{ product.selectedOption.title | escape }}"             class="boost-sd__dropdown-option-text">{{ product.selectedOption.title | escape }}</span>            <svg width="8" height="12" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">             <path              d="M7.09832 3.98009e-07L0.901685 -1.43717e-07C0.15069 -2.09371e-07 -0.269991 0.75351 0.193991 1.2676L3.29231 4.70055C3.65265 5.09982 4.34735 5.09982 4.70769 4.70055L7.80601 1.2676C8.26999 0.753511 7.84931 4.63664e-07 7.09832 3.98009e-07Z"              fill="#5C5F62"></path>            </svg>           </div>           <ul role="listbox"             data-id="boost-sd__dropdown-list-{{ widgetId }}"             id="boost-sd__dropdown-list-{{ widgetId }}"             class="boost-sd__dropdown-option-list">            {% for variant in product.variants %}            <li role="option"             aria-selected="{{ variant.title == product.selectedOption.title }}"              data-id="boost-sd__dropdown-option-{{ widgetId }}"             id="boost-sd__dropdown-option-{{ widgetId }}"              class="boost-sd__dropdown-option {% if variant.title == product.selectedOption.title %}boost-sd__dropdown-option--selected{% endif %}">             {{ variant.title | escape }}            </li>            {% endfor %}           </ul>          </div>         </div>        {% endif %}        <div class="boost-sd__recommendation-bundle-checkbox">         <button type="button"          aria-checked="{% if product.checked %} true {% else %} false {% endif %}"          aria-label="{% if product.checked %} Click to remove from bundle {% else %} Click to add to bundle {% endif %}"          class="boost-sd__recommendation-bundle-checkbox-box {% if product.checked %} boost-sd__recommendation-bundle-checkbox-box--checked {% endif %}"          data-id="boost-sd__checkbox-{{ widgetId }}"          id="boost-sd__checkbox-{{ widgetId }}-{{ product.id }}"         ></button>        </div>        <span role="text" tabindex="0" aria-label="Price: {{ product.selectedOption.price }}" class="boost-sd__format-currency">         <span>{{ product.selectedOption.price }}</span>        </span>       </div>      </div>     {% endif %}    </div>    {% unless forloop.last %}     <div      class="boost-sd__recommendation-bundle-plus-icon-wrapper boost-sd__recommendation-bundle-plus-icon-wrapper--{{ bundleStyle }}">      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">       <path fill-rule="evenodd" clip-rule="evenodd"        d="M15 7H9V1C9 0.448 8.553 0 8 0C7.447 0 7 0.448 7 1V7H1C0.447 7 0 7.448 0 8C0 8.552 0.447 9 1 9H7V15C7 15.552 7.447 16 8 16C8.553 16 9 15.552 9 15V9H15C15.553 9 16 8.552 16 8C16 7.448 15.553 7 15 7Z"        fill="#5C5F62"></path>      </svg>     </div>    {% endunless %}   {% endfor %}  </div>  {% if bundleStyle == 'style1' %}   {% for product in products %}    <div     class="boost-sd__recommendation-bundle-item-info boost-sd__recommendation-bundle-item-info--{{ bundleStyle }}">     <div class="boost-sd__recommendation-bundle-item-info-content {% unless product.checked %} boost-sd__recommendation-bundle-item-info-content--blur {% endunless %}">      <div class="boost-sd__recommendation-bundle-item-title">       <div class="boost-sd__recommendation-bundle-checkbox">        <button type="button"         aria-checked="{% if product.checked %} true {% else %} false {% endif %}"         aria-label="{% if product.checked %} Click to remove from bundle {% else %} Click to add to bundle {% endif %}"         class="boost-sd__recommendation-bundle-checkbox-box {% if product.checked %} boost-sd__recommendation-bundle-checkbox-box--checked {% endif %}"         data-id="boost-sd__checkbox-{{ widgetId }}"         id="boost-sd__checkbox-{{ widgetId }}-{{ product.id }}"        ></button>       </div>       {% if forloop.index0 == 0 %}        <span role="text" tabindex="0">         <b>This item:</b> {{ product.title | escape }}        </span>       {% elsif product.checked %}        <a class="boost-sd__product-link" href="/products/{{ product.handle }}">         {{ product.title | escape }}        </a>       {% else %}        <span role="text" tabindex="0">{{ product.title | escape }}</span>       {% endif %}      </div>      {%- if product.selectedOption.title != 'Default Title' -%}       <div class="boost-sd__recommendation-bundle-dropdown-wrapper boost-sd__recommendation-bundle-dropdown-wrapper--{{ bundleStyle }}">        <div          {% if product.checked %} tabindex="0" {% endif %}         role="combobox"         aria-label="Select an option"         aria-expanded="false"         aria-haspopup="true"          data-id="boost-sd__dropdown-{{ widgetId }}"         id="boost-sd__dropdown-{{ widgetId }}"          class="boost-sd__dropdown {% unless product.checked %} boost-sd__dropdown--disabled {% endunless %}">         <div class="boost-sd__dropdown-selected-option">          <span            aria-label="Current option: {{ product.selectedOption.title | escape }}"           class="boost-sd__dropdown-option-text">{{ product.selectedOption.title | escape }}</span>          <svg width="8" height="12" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">           <path            d="M7.09832 3.98009e-07L0.901685 -1.43717e-07C0.15069 -2.09371e-07 -0.269991 0.75351 0.193991 1.2676L3.29231 4.70055C3.65265 5.09982 4.34735 5.09982 4.70769 4.70055L7.80601 1.2676C8.26999 0.753511 7.84931 4.63664e-07 7.09832 3.98009e-07Z"            fill="#5C5F62"></path>          </svg>         </div>         <ul role="listbox"           data-id="boost-sd__dropdown-list-{{ widgetId }}"           id="boost-sd__dropdown-list-{{ widgetId }}"           class="boost-sd__dropdown-option-list">          {% for variant in product.variants %}          <li role="option"           aria-selected="{{ variant.title == product.selectedOption.title }}"            data-id="boost-sd__dropdown-option-{{ widgetId }}"           id="boost-sd__dropdown-option-{{ widgetId }}"            class="boost-sd__dropdown-option {% if variant.title == product.selectedOption.title %}boost-sd__dropdown-option--selected{% endif %}">           {{ variant.title | escape }}          </li>          {% endfor %}         </ul>        </div>       </div>      {% endif %}      <span role="text" tabindex="0" aria-label="Price: {{ product.selectedOption.price }}" class="boost-sd__format-currency">       <span>{{ product.selectedOption.price }}</span>      </span>          </div>    </div>   {% endfor %}  {% endif %} </div><div class="boost-sd__recommendation-bundle-right">  {% if hasSelectedProduct == true %}  <div role="text" tabindex="0" class="boost-sd__recommendation-bundle-total-price">   Total price:   <b class="boost-sd__recommendation-bundle-price-text">    <span class="boost-sd__format-currency">{{ totalPrice }}</span>   </b>  </div>  {% endif %}  <button type="button" {% if hasSelectedProduct==false %}disabled{% endif %}   class="boost-sd__button boost-sd__button--primary boost-sd__button--large boost-sd__button--round boost-sd__button--full-width boost-sd__btn-add-to-cart">   <span>Add to Cart</span>  </button></div></div> {% endif %}</div>`;





                        ; template["searchTabCollectionsContent"] = `<div role="tabpanel" class="boost-sd__search-result-panel-content"> {% for collection in collections %} <a href="/collections/{{ collection.handle }}" class="boost-sd__search-result-panel-content-item" tabindex="0">  {% capture collectionsDisplayImage %}  false  {% endcapture %}  {% if collectionsDisplayImage and collection.image != null %}  <div class="boost-sd__search-result-panel-content-item-image">   <img src="{{ collection.image.src }}">  </div>  {% endif %}  <div class="boost-sd__search-result-panel-content-item-text">   <p class="boost-sd__search-result-panel-content-item-title">{{ collection.title | escape }}</p>   {% capture collectionsDisplayDescription %}   false   {% endcapture %}   {% if collectionsDisplayDescription and collection.body_html != "" %}   <p class="boost-sd__search-result-panel-content-item-description">{{ collection.body_html | strip_html | escape }}</p>   {% endif %}  </div></a> {% endfor %} {% capture pageSize %} 12 {% endcapture %} {% assign pageSize = pageSize | plus: 0 %} {% if pageSize < totalCollection %} {% assign totalPage = totalCollection | divided_by: pageSize | ceil %} {% assign pagination = currentPage | pagination_list: totalPage | split: "," %} {% assign to_product = currentPage | times: pageSize %} <div class="boost-sd__pagination boost-sd__pagination--center">  {% if currentPage != 1 %}  <button type="button" aria-label="previous page" class="boost-sd__pagination-button boost-sd__pagination-button--circle boost-sd__pagination-button--previous" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit; text-transform: none; border-color: transparent; border-width: 1px; border-style: solid;">   <span class="boost-sd__pagination-button-icon boost-sd__pagination-button-icon--left">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 12" height="12" width="7">     <path d="M6.80474 0.528514C6.54439 0.268165 6.12228 0.268165 5.86193 0.528514L0.861929 5.52851C0.601579 5.78886 0.601579 6.21097 0.861929 6.47132L5.86193 11.4713C6.12228 11.7317 6.54439 11.7317 6.80474 11.4713C7.06509 11.211 7.06509 10.7889 6.80474 10.5285L2.27614 5.99992L6.80474 1.47132C7.06509 1.21097 7.06509 0.788864 6.80474 0.528514Z" clip-rule="evenodd" fill-rule="evenodd"></path>    </svg>   </span>  </button>  {% endif %}  {% for page_string in pagination %}  {% assign page = page_string | plus: 0 %}  {% if page == 0 %}  <button class="boost-sd__pagination-number boost-sd__pagination-number--disabled boost-sd__pagination-number--circle">...</button>  {% elsif page == request.page %}  <button class="boost-sd__pagination-number boost-sd__pagination-number--circle boost-sd__pagination-number--active" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit;" data-page="{{ page }}">{{ page }}</button>  {% else %}  <button class="boost-sd__pagination-number boost-sd__pagination-number--circle" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit;" data-page="{{ page }}">{{ page }}</button>  {% endif %}  {% endfor %}  {% if currentPage != totalPage %}  <button type="button" aria-label="next page" class="boost-sd__pagination-button boost-sd__pagination-button--circle boost-sd__pagination-button--next" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit; text-transform: none; border-color: transparent; border-width: 1px; border-style: solid;">   <span class="boost-sd__pagination-button-icon boost-sd__pagination-button-icon--right">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 12" height="12" width="7">     <path d="M0.195262 0.528514C0.455612 0.268165 0.877722 0.268165 1.13807 0.528514L6.13807 5.52851C6.39842 5.78886 6.39842 6.21097 6.13807 6.47132L1.13807 11.4713C0.877722 11.7317 0.455612 11.7317 0.195262 11.4713C-0.0650874 11.211 -0.0650874 10.7889 0.195262 10.5285L4.72386 5.99992L0.195262 1.47132C-0.0650874 1.21097 -0.0650874 0.788864 0.195262 0.528514Z" clip-rule="evenodd" fill-rule="evenodd"></path>    </svg>   </span>  </button>  {% endif %} </div> {% endif %}</div>`;





                        ; template["searchTabPagesContent"] = `<div role="tabpanel" class="boost-sd__search-result-panel-content"> {% for page in pages %} <a href="{{ page.url }}" class="boost-sd__search-result-panel-content-item" tabindex="0">  {% capture pagesDisplayImage %}  true  {% endcapture %}  {% if pagesDisplayImage and page.image != null %}  <div class="boost-sd__search-result-panel-content-item-image">   <img src="{{ page.image.src }}">  </div>  {% endif %}  <div class="boost-sd__search-result-panel-content-item-text">   <p class="boost-sd__search-result-panel-content-item-title">{{ page.title | escape }}</p>   {% capture pagesDisplayDescription %}   {% endcapture %}   {% if pagesDisplayDescription and page.body_html != "" %}   <div class="boost-sd__search-result-panel-content-item-description">{{ page.body_html | escape}}</div>   {% endif %}  </div></a> {% endfor %} {% capture pageSize %} 25 {% endcapture %} {% assign pageSize = pageSize | plus: 0 %} {% if pageSize < totalPageTab %} {% assign totalPage = totalPageTab | divided_by: pageSize | ceil %} {% assign pagination = currentPage | pagination_list: totalPage | split: "," %} {% assign to_product = currentPage | times: pageSize %} <div class="boost-sd__pagination boost-sd__pagination--center">  {% if currentPage != 1 %}  <button type="button" aria-label="previous page" class="boost-sd__pagination-button boost-sd__pagination-button--circle boost-sd__pagination-button--previous" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit; text-transform: none; border-color: transparent; border-width: 1px; border-style: solid;">   <span class="boost-sd__pagination-button-icon boost-sd__pagination-button-icon--left">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 12" height="12" width="7">     <path d="M6.80474 0.528514C6.54439 0.268165 6.12228 0.268165 5.86193 0.528514L0.861929 5.52851C0.601579 5.78886 0.601579 6.21097 0.861929 6.47132L5.86193 11.4713C6.12228 11.7317 6.54439 11.7317 6.80474 11.4713C7.06509 11.211 7.06509 10.7889 6.80474 10.5285L2.27614 5.99992L6.80474 1.47132C7.06509 1.21097 7.06509 0.788864 6.80474 0.528514Z" clip-rule="evenodd" fill-rule="evenodd"></path>    </svg>   </span>  </button>  {% endif %}  {% for page_string in pagination %}  {% assign page = page_string | plus: 0 %}  {% if page == 0 %}  <button class="boost-sd__pagination-number boost-sd__pagination-number--disabled boost-sd__pagination-number--circle">...</button>  {% elsif page == request.page %}  <button class="boost-sd__pagination-number boost-sd__pagination-number--circle boost-sd__pagination-number--active" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit;" data-page="{{ page }}">{{ page }}</button>  {% else %}  <button class="boost-sd__pagination-number boost-sd__pagination-number--circle" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit;" data-page="{{ page }}">{{ page }}</button>  {% endif %}  {% endfor %}  {% if currentPage != totalPage %}  <button type="button" aria-label="next page" class="boost-sd__pagination-button boost-sd__pagination-button--circle boost-sd__pagination-button--next" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit; text-transform: none; border-color: transparent; border-width: 1px; border-style: solid;">   <span class="boost-sd__pagination-button-icon boost-sd__pagination-button-icon--right">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 12" height="12" width="7">     <path d="M0.195262 0.528514C0.455612 0.268165 0.877722 0.268165 1.13807 0.528514L6.13807 5.52851C6.39842 5.78886 6.39842 6.21097 6.13807 6.47132L1.13807 11.4713C0.877722 11.7317 0.455612 11.7317 0.195262 11.4713C-0.0650874 11.211 -0.0650874 10.7889 0.195262 10.5285L4.72386 5.99992L0.195262 1.47132C-0.0650874 1.21097 -0.0650874 0.788864 0.195262 0.528514Z" clip-rule="evenodd" fill-rule="evenodd"></path>    </svg>   </span>  </button>  {% endif %} </div> {% endif %}</div>`;





                        ; template["searchTabCollectionsContentPagination"] = `{% assign pagination = currentPage | pagination_list: totalPage | split: "," %}{% assign to_product = currentPage | times: pageSize %}<div class="boost-sd__pagination boost-sd__pagination--center"> {% if currentPage != 1 %} <button type="button" aria-label="previous page" class="boost-sd__pagination-button boost-sd__pagination-button--circle boost-sd__pagination-button--previous" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit; text-transform: none; border-color: transparent; border-width: 1px; border-style: solid;">  <span class="boost-sd__pagination-button-icon boost-sd__pagination-button-icon--left">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 12" height="12" width="7">    <path d="M6.80474 0.528514C6.54439 0.268165 6.12228 0.268165 5.86193 0.528514L0.861929 5.52851C0.601579 5.78886 0.601579 6.21097 0.861929 6.47132L5.86193 11.4713C6.12228 11.7317 6.54439 11.7317 6.80474 11.4713C7.06509 11.211 7.06509 10.7889 6.80474 10.5285L2.27614 5.99992L6.80474 1.47132C7.06509 1.21097 7.06509 0.788864 6.80474 0.528514Z" clip-rule="evenodd" fill-rule="evenodd"></path>   </svg>  </span></button> {% endif %} {% for page_string in pagination %} {% assign page = page_string | plus: 0 %} {% if page == 0 %} <button class="boost-sd__pagination-number boost-sd__pagination-number--disabled boost-sd__pagination-number--circle">...</button> {% elsif page == request.page %} <button class="boost-sd__pagination-number boost-sd__pagination-number--circle boost-sd__pagination-number--active" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit;" data-page="{{ page }}">{{ page }}</button> {% else %} <button class="boost-sd__pagination-number boost-sd__pagination-number--circle" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit;" data-page="{{ page }}">{{ page }}</button> {% endif %} {% endfor %} {% if currentPage != totalPage %} <button type="button" aria-label="next page" class="boost-sd__pagination-button boost-sd__pagination-button--circle boost-sd__pagination-button--next" style="color: rgb(122, 122, 122); background-color: rgba(0, 0, 0, 0); font-size: inherit; text-transform: none; border-color: transparent; border-width: 1px; border-style: solid;">  <span class="boost-sd__pagination-button-icon boost-sd__pagination-button-icon--right">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 12" height="12" width="7">    <path d="M0.195262 0.528514C0.455612 0.268165 0.877722 0.268165 1.13807 0.528514L6.13807 5.52851C6.39842 5.78886 6.39842 6.21097 6.13807 6.47132L1.13807 11.4713C0.877722 11.7317 0.455612 11.7317 0.195262 11.4713C-0.0650874 11.211 -0.0650874 10.7889 0.195262 10.5285L4.72386 5.99992L0.195262 1.47132C-0.0650874 1.21097 -0.0650874 0.788864 0.195262 0.528514Z" clip-rule="evenodd" fill-rule="evenodd"></path>   </svg>  </span></button> {% endif %}</div>`;





                        ; template["placeholderFilterTree"] = `<!-- TEMPLATE PLACEHOLDER --><div class='boost-sd-container'><div class="boost-sd__collection-header">  <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span></div><!-- TEMPLATE IN-COLLECTION SEARCH PLACEHOLDER--><div class='boost-sd-layout boost-sd-layout--has-filter-horizontal'>  <div class='boost-sd-left boost-filter-tree-column'>   <!-- TEMPLATE FILTER TREE PLACEHOLDER -->   <div id="boost-sd__filter-tree-wrapper" class="boost-sd__filter-tree-wrapper">    <div class="boost-sd__filter-tree-horizontal">     <div class="boost-sd__filter-tree-horizontal-placeholder">      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>      <div class="boost-sd__filter-tree-horizontal-placeholder-item">       <span class="boost-sd__placeholder-item" style="width:80px; border-radius: 0;"></span>      </div>     </div>    </div>   </div>  </div>  <div class='boost-sd-right boost-product-listing-column'>   <!-- TEMPLATE TOOLBAR PLACEHOLDER-->   <div class="boost-sd__toolbar-container">    <div class="boost-sd__toolbar-inner">     <div class="boost-sd__toolbar-content">      <div class="boost-sd__toolbar boost-sd__toolbar--3_1">       <span class="boost-sd__toolbar-item boost-sd__placeholder-item" style="height: 28px; border-radius: 0;"></span>       <span class="boost-sd__toolbar-item boost-sd__placeholder-item" style="height: 28px; border-radius: 0; margin-bottom: 0"></span>       <span class="boost-sd__toolbar-item boost-sd__placeholder-item" style="height: 28px; border-radius: 0; margin-bottom: 0"></span>      </div>     </div>    </div>   </div>   <!-- TEMPLATE PRODUCT LIST PLACEHOLDER-->   <div class="boost-sd__product-list-placeholder boost-sd__product-list-placeholder--4-col">    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>    <div class="boost-sd__product-list-placeholder-item">     <span class="boost-sd__placeholder-item" style="width: 100%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 80%; border-radius: 0;"></span>     <span class="boost-sd__placeholder-item" style="width: 40%; border-radius: 0;"></span>    </div>   </div>   <div class="boost-sd__pagination boost-sd__pagination--center">    <span class="boost-sd__placeholder-item" style="height: 40px; border-radius: 0;"></span>   </div>  </div></div></div>`;





                        ; template["preOrder"] = `<!-- TEMPLATE PRE-ORDER APP BLOCK --><div class="boost-sd__product-form"><!-- Quantity Input --><div class="boost-sd__product-form-quantity">  <p id="quantity-title" class="boost-sd__product-form-quantity-title">   {{ "quickView.qvQuantity" | translate: translations, 'Quantity' }}  </p>  <div class="boost-sd__input-number boost-sd__input-number--md" role="group" aria-labelledby="quantity-title">   <div class="boost-sd__input-number-btn-wrapper">    <button type="button" aria-label="Decrease quantity" aria-controls="item-quantity" class="boost-sd__button boost-sd__button--full-width boost-sd__input-number-btn">     <span aria-hidden="true">-</span>    </button>   </div>   <input id="item-quantity" type="number" aria-labelledby="quantity-title" aria-describedby="quantity-error" class="boost-sd__input-number-input" value="1" min="1" />   <div class="boost-sd__input-number-btn-wrapper">    <button type="button" aria-label="Increase quantity" aria-controls="item-quantity" class="boost-sd__button boost-sd__button--full-width boost-sd__input-number-btn">     <span aria-hidden="true">+</span>    </button>   </div>  </div>  <div id="quantity-error" class="boost-sd__product-form-quantity-error" aria-live="assertive">   {{ "quickView.qvQuantityError" | translate: translations, 'Please input quantity' }}  </div></div><div class="boost-sd__preorder-options">  <!-- TEMPLATE PRE_ORDER WITH PAYMENT -->  {% comment %} TODO check preorder {% endcomment %}  {% if product.variants %}  {% assign variants = product.variants %}  {% else %}  {% assign variants = variants %}  {% endif %}  {% for variant in variants %}  {% if variant.preorder %}  {% assign paymentType = variant.preorder.payment.type %}  {% assign discountType = variant.preorder.payment.discountType %}  {% assign discountValue = variant.preorder.payment.discountValue %}  {% assign originalPrice = variant.price %}  {% assign paymentLabel = '' %}  {% if paymentType == 'full' %}  {% assign paymentLabel = 'Full payment' %}  {% endif %}  {% if paymentType == 'partial' %}  {% assign paymentLabel = 'Partial payment' %}  {% endif %}  {% if paymentType == 'none' %}  {% assign paymentLabel = 'No payment' %}  {% endif %}  {% assign money_format = request.money_format | strip_html -%}  {% assign money_rate = request.currency_rate | strip_html -%}  {% if discountType == 'percentage' %}  {% assign percentNum = originalPrice | times: discountValue | divided_by: 100 %}  {% assign discountedPrice = originalPrice | times: 1.0 | minus: percentNum %}  {% elsif discountType == 'amount' %}  {% assign discountValue = discountValue | times: money_rate %}  {% assign discountedPrice = originalPrice | times: 1.0 | minus: discountValue %}  {% else %}  {% assign discountedPrice = originalPrice %}  {% endif %}  {% assign removePriceDecimal = false -%}  {% assign showCentAsSuperscript = false -%}  {% assign decimalDelimiter = '' -%}  {% assign withoutTrailingZeros = true -%}  {% assign originalPriceFormat = originalPrice | format_currency: money_format, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros -%}  {% assign discountedPriceFormat = discountedPrice | format_currency: money_format, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros -%}  {% assign discountValueFormat = discountValue | format_currency: money_format, showCentAsSuperscript, removePriceDecimal, decimalDelimiter, withoutTrailingZeros %}  <div class="boost-sd__preorder" tabindex="0" data-variant-id="{{ variant.id }}" role="region" aria-labelledby="preorder-title" aria-describedby="preorder-description">   <div class="boost-sd__preorder-option">    <h2 id="preorder-title" class="boost-sd__preorder-title">{{ paymentLabel }}</h2>    <div id="preorder-description" class="boost-sd__preorder-discount" aria-live="polite">     {% if discountType == 'percentage' %}     <span class="boost-sd__preorder-save">Save {{ discountValue }}%</span>     {% elsif discountType == 'amount' %}     <span class="boost-sd__preorder-save">Save {{ discountValueFormat }}</span>     {% endif %}     <div class="boost-sd__preorder-price">      {% if discountType != 'none' %}      <span class="boost-sd__preorder-original-price" aria-label="Original Price: {{ originalPriceFormat }}">{{ originalPriceFormat }}</span>      {% endif %}      <span class="boost-sd__preorder-discounted-price" aria-label="Discounted Price: {{ discountedPriceFormat }}">{{ discountedPriceFormat }}</span>     </div>    </div>   </div>  </div>  {% endif %}  {% endfor %}  {% assign button_label = 'Pre-Order' %}  {% assign preOrderButtonText = variants[0].preorder.settings.buttonText %}  {% assign preOrderDeliveryText = variants[0].preorder.settings.deliveryText %}  {% if preOrderButtonText and preOrderButtonText != '' %}  {% assign button_label = preOrderButtonText %}  {% endif %}  <button type="button" aria-label='{{ button_label }}' class="boost-sd__button boost-sd__button--border boost-sd__button--round boost-sd__button--large boost-sd__button--preorder">   <span class="boost-sd__button-text" aria-hidden="true">    {{ button_label }}   </span>  </button>  <p tabindex="0" class="boost-sd__preorder-note">   <strong class="boost-sd__preorder-note-title">Please note: </strong><span class="boost-sd__preorder-note-text">{{ preOrderDeliveryText }}</span>  </p></div><!-- TEMPLATE ADD TO CART --><div class="boost-sd__purchase-options">  <button type="button" class="boost-sd__button boost-sd__button--border boost-sd__button--round boost-sd__button--large boost-sd__button--purchase">   <span class="boost-sd__button-text">    {{ "productItem.atcAvailableLabel" | translate: translations, 'Add to cart' }}   </span>  </button></div></div>`;





                        ; template["preOrderPlaceholder"] = `<!-- Placeholder for PreOrder --><div class="boost-sd__preorder-placeholder"><div class="boost-sd__preorder-placeholder-quantity-label">  <div class="boost-sd__placeholder-item" style="width: 65px; height: 20px;"></div></div><div class="boost-sd__preorder-placeholder-product-quantity">  <div class="boost-sd__placeholder-item" style="width: 160px; height: 38px;"></div></div><div class="boost-sd__preorder-placeholder-add-to-cart">  <div class="boost-sd__placeholder-item" style="width: 100%; height: 50px;"></div></div><div class="boost-sd__preorder-placeholder-buy-it-now">  <div class="boost-sd__placeholder-item" style="width: 100%; height: 50px;"></div></div></div>`;





                        ; return { templateUrl: "https://services.mybcapps.com/bc-sf-filter/ssr-template", templateId, templateMetadata, template, templateSettings }
                    }
                }; TemplateManagement.moduleName = "TemplateManagement"; var VolumeBundle = class extends BoostTAEAppModule { constructor() { super(...arguments); this.initBlock = () => { const volumeBundleDom = document.querySelector(".boost-sd__widget-volume-bundle"); if (!volumeBundleDom) { return } this.block = { id: volumeBundleDom.id || "bc-volume-bundle", document: volumeBundleDom }; this.backwardCompatibilityV1Module?.legacyAssignDefaultBlockAttributes(this.block, volumeBundleDom, "volumeBundle"); this.TAEApp.registerBlock(this.block) } } get backwardCompatibilityV1Module() { return this.TAEApp.getModule(BackwardCompatibilityV1) } onModuleInit() { document.addEventListener("DOMContentLoaded", this.initBlock) } onModuleDestroy() { document.removeEventListener("DOMContentLoaded", this.initBlock) } }; VolumeBundle.moduleName = "VolumeBundle"; var application = new Application().loadModule(AppSettings).loadModule(ShopifyDataObject).loadModule(ShopifyMetafield).loadModule(TemplateManagement).loadModule(CollectionFilter).loadModule(AdditionalElement).loadModule(Search).loadModule(Recommendation).loadModule(Cart).loadModule(Analytics).loadModule(B2B).loadModule(BackInStock).loadModule(VolumeBundle).loadModule(PredictiveBundle).loadModule(PreOrder).loadModule(SimplifiedIntegration).loadModule(SEOEnhancement).loadModule(Fallback).loadModule(AssetFilesLoader).loadModule(BackwardCompatibilityV1); application.start(); function getBoostTAE() { return application }
            })();

/* ===== next script block ===== */

(function a() { !window.boostWidgetIntegration && (window.boostWidgetIntegration = {}); const b = window.boostWidgetIntegration; !b.taeSettings && (b.taeSettings = {}); const c = b.taeSettings; c.instantSearch = { enabled: !0 } })()

/* ===== next script block ===== */

(function () { if ("sendBeacon" in navigator && "performance" in window) { try { var session_token_from_headers = performance.getEntriesByType('navigation')[0].serverTiming.find(x => x.name == '_s').description; } catch { var session_token_from_headers = undefined; } var session_cookie_matches = document.cookie.match(/_shopify_s=([^;]*)/); var session_token_from_cookie = session_cookie_matches && session_cookie_matches.length === 2 ? session_cookie_matches[1] : ""; var session_token = session_token_from_headers || session_token_from_cookie || ""; function handle_abandonment_event(e) { var entries = performance.getEntries().filter(function (entry) { return /monorail-edge.shopifysvc.com/.test(entry.name); }); if (!window.abandonment_tracked && entries.length === 0) { window.abandonment_tracked = true; var currentMs = Date.now(); var navigation_start = performance.timing.navigationStart; var payload = { shop_id: 954332, url: window.location.href, navigation_start, duration: currentMs - navigation_start, session_token, page_type: "page" }; window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({ schema_id: "online_store_buyer_site_abandonment/1.1", payload: payload, metadata: { event_created_at_ms: currentMs, event_sent_at_ms: currentMs } })); } } window.addEventListener('pagehide', handle_abandonment_event); } }());

/* ===== next script block ===== */


        window.__TREKKIE_SHIM_QUEUE = window.__TREKKIE_SHIM_QUEUE || [];


/* ===== next script block ===== */

(function e(e, d, r, n, o) { if (void 0 === o && (o = {}), !Boolean(null === (a = null === (i = window.Shopify) || void 0 === i ? void 0 : i.analytics) || void 0 === a ? void 0 : a.replayQueue)) { var i, a; window.Shopify = window.Shopify || {}; var t = window.Shopify; t.analytics = t.analytics || {}; var s = t.analytics; s.replayQueue = [], s.publish = function (e, d, r) { return s.replayQueue.push([e, d, r]), !0 }; try { self.performance.mark("wpm:start") } catch (e) { } var l = function () { var e = { modern: /Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(9{2}|\d{3,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(15\.\d+|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]\d+|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+/, legacy: /Edge?\/(1[6-9]|[2-9]\d|\d{3,})\.\d+(\.\d+|)|Firefox\/(5[4-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(5[1-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))|(Maci|X1{2}).+ Version\/(10\.\d+|(1[1-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(3[89]|[4-9]\d|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(10[._]\d+|(1[1-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(5\.\d+|([6-9]|\d{2,})\.\d+)|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(3\.\d+|([4-9]|\d{2,})\.\d+)(\.\d+|)/ }, d = e.modern, r = e.legacy, n = navigator.userAgent; return n.match(d) ? "modern" : n.match(r) ? "legacy" : "unknown" }(), u = "modern" === l ? "modern" : "legacy", c = (null != n ? n : { modern: "", legacy: "" })[u], f = function (e) { return [e.baseUrl, "/wpm", "/b", e.hashVersion, "modern" === e.buildTarget ? "m" : "l", ".js"].join("") }({ baseUrl: d, hashVersion: r, buildTarget: u }), m = function (e) { var d = e.version, r = e.bundleTarget, n = e.surface, o = e.pageUrl, i = e.monorailEndpoint; return { emit: function (e) { var a = e.status, t = e.errorMsg, s = (new Date).getTime(), l = JSON.stringify({ metadata: { event_sent_at_ms: s }, events: [{ schema_id: "web_pixels_manager_load/3.1", payload: { version: d, bundle_target: r, page_url: o, status: a, surface: n, error_msg: t }, metadata: { event_created_at_ms: s } }] }); if (!i) return console && console.warn && console.warn("[Web Pixels Manager] No Monorail endpoint provided, skipping logging."), !1; try { return self.navigator.sendBeacon.bind(self.navigator)(i, l) } catch (e) { } var u = new XMLHttpRequest; try { return u.open("POST", i, !0), u.setRequestHeader("Content-Type", "text/plain"), u.send(l), !0 } catch (e) { return console && console.warn && console.warn("[Web Pixels Manager] Got an unhandled error while logging to Monorail."), !1 } } } }({ version: r, bundleTarget: l, surface: e.surface, pageUrl: self.location.href, monorailEndpoint: e.monorailEndpoint }); try { o.browserTarget = l, function (e) { var d = e.src, r = e.async, n = void 0 === r || r, o = e.onload, i = e.onerror, a = e.sri, t = e.scriptDataAttributes, s = void 0 === t ? {} : t, l = document.createElement("script"), u = document.querySelector("head"), c = document.querySelector("body"); if (l.async = n, l.src = d, a && (l.integrity = a, l.crossOrigin = "anonymous"), s) for (var f in s) if (Object.prototype.hasOwnProperty.call(s, f)) try { l.dataset[f] = s[f] } catch (e) { } if (o && l.addEventListener("load", o), i && l.addEventListener("error", i), u) u.appendChild(l); else { if (!c) throw new Error("Did not find a head or body element to append the script"); c.appendChild(l) } }({ src: f, async: !0, onload: function () { if (!function () { var e, d; return Boolean(null === (d = null === (e = window.Shopify) || void 0 === e ? void 0 : e.analytics) || void 0 === d ? void 0 : d.initialized) }()) { var d = window.webPixelsManager.init(e) || void 0; if (d) { var r = window.Shopify.analytics; r.replayQueue.forEach((function (e) { var r = e[0], n = e[1], o = e[2]; d.publishCustomEvent(r, n, o) })), r.replayQueue = [], r.publish = d.publishCustomEvent, r.visitor = d.visitor, r.initialized = !0 } } }, onerror: function () { return m.emit({ status: "failed", errorMsg: "".concat(f, " has failed to load") }) }, sri: function (e) { var d = /^sha384-[A-Za-z0-9+/=]+$/; return "string" == typeof e && d.test(e) }(c) ? c : "", scriptDataAttributes: o }), m.emit({ status: "loading" }) } catch (e) { m.emit({ status: "failed", errorMsg: (null == e ? void 0 : e.message) || "Unknown error" }) } } })({ shopId: 954332, storefrontBaseUrl: "https://teradek.com", extensionsBaseUrl: "https://extensions.shopifycdn.com/cdn/shopifycloud/web-pixels-manager", monorailEndpoint: "https://monorail-edge.shopifysvc.com/unstable/produce_batch", surface: "storefront-renderer", enabledBetaFlags: ["2dca8a86", "d5bdd5d0", "5476ea20", "ed8389fc"], webPixelsConfigList: [{ "id": "1033273522", "configuration": "{\"siteKey\":\"1ffd8169-ecd3-4a06-ba56-14e8b8f70b60\"}", "eventPayloadVersion": "v1", "runtimeContext": "STRICT", "scriptVersion": "857202d601d3261a53b21dcb3c79e6fd", "type": "APP", "apiClientId": 1891012, "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"], "dataSharingAdjustments": { "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"], "dataSharingControls": ["share_all_events"] }, "dataSharingState": "optimized", "enabledFlags": ["3b5414a6"] }, { "id": "978780338", "configuration": "{\"publicKey\":\"pub_f98f16a309823c0e8099\",\"apiUrl\":\"https:\\\/\\\/tracking.refersion.com\"}", "eventPayloadVersion": "v1", "runtimeContext": "STRICT", "scriptVersion": "0fb80394591dba97de0fece487c9c5e4", "type": "APP", "apiClientId": 147004, "privacyPurposes": ["ANALYTICS", "SALE_OF_DATA"], "dataSharingAdjustments": { "protectedCustomerApprovalScopes": ["read_customer_email", "read_customer_name", "read_customer_personal_data"], "dataSharingControls": ["share_all_events"] }, "dataSharingState": "optimized", "enabledFlags": ["3b5414a6"] }, { "id": "571834546", "configuration": "{\"config\":\"{\\\"google_tag_ids\\\":[\\\"G-6TPQ5V2WT1\\\",\\\"GT-PHWF2F9\\\"],\\\"target_country\\\":\\\"US\\\",\\\"gtag_events\\\":[{\\\"type\\\":\\\"search\\\",\\\"action_label\\\":\\\"G-6TPQ5V2WT1\\\"},{\\\"type\\\":\\\"begin_checkout\\\",\\\"action_label\\\":\\\"G-6TPQ5V2WT1\\\"},{\\\"type\\\":\\\"view_item\\\",\\\"action_label\\\":[\\\"G-6TPQ5V2WT1\\\",\\\"MC-H71DZW8D5D\\\"]},{\\\"type\\\":\\\"purchase\\\",\\\"action_label\\\":[\\\"G-6TPQ5V2WT1\\\",\\\"MC-H71DZW8D5D\\\"]},{\\\"type\\\":\\\"page_view\\\",\\\"action_label\\\":[\\\"G-6TPQ5V2WT1\\\",\\\"MC-H71DZW8D5D\\\"]},{\\\"type\\\":\\\"add_payment_info\\\",\\\"action_label\\\":\\\"G-6TPQ5V2WT1\\\"},{\\\"type\\\":\\\"add_to_cart\\\",\\\"action_label\\\":\\\"G-6TPQ5V2WT1\\\"}],\\\"enable_monitoring_mode\\\":false}\"}", "eventPayloadVersion": "v1", "runtimeContext": "OPEN", "scriptVersion": "ac521efa9cd6866459cd0b40264a3f38", "type": "APP", "apiClientId": 1780363, "privacyPurposes": [], "dataSharingAdjustments": { "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"], "dataSharingControls": ["share_all_events"] }, "dataSharingState": "optimized", "enabledFlags": ["9a3ed68a", "3b5414a6"] }, { "id": "150143154", "configuration": "{\"pixel_id\":\"1771375246485308\",\"pixel_type\":\"facebook_pixel\",\"metaapp_system_user_token\":\"-\"}", "eventPayloadVersion": "v1", "runtimeContext": "OPEN", "scriptVersion": "ca16bc87fe92b6042fbaa3acc2fbdaa6", "type": "APP", "apiClientId": 2329312, "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"], "dataSharingAdjustments": { "protectedCustomerApprovalScopes": ["read_customer_address", "read_customer_email", "read_customer_name", "read_customer_personal_data", "read_customer_phone"], "dataSharingControls": ["share_all_events"] }, "dataSharingState": "optimized", "enabledFlags": ["9a3ed68a", "3b5414a6"] }, { "id": "43352242", "eventPayloadVersion": "1", "runtimeContext": "LAX", "scriptVersion": "1", "type": "CUSTOM", "privacyPurposes": ["ANALYTICS", "MARKETING", "SALE_OF_DATA"], "name": "Checkout" }, { "id": "shopify-app-pixel", "configuration": "{}", "eventPayloadVersion": "v1", "runtimeContext": "STRICT", "scriptVersion": "0450", "apiClientId": "shopify-pixel", "type": "APP", "privacyPurposes": ["ANALYTICS", "MARKETING"] }, { "id": "shopify-custom-pixel", "eventPayloadVersion": "v1", "runtimeContext": "LAX", "scriptVersion": "0450", "apiClientId": "shopify-pixel", "type": "CUSTOM", "privacyPurposes": ["ANALYTICS", "MARKETING"] }], isMerchantRequest: true, initData: { "shop": { "name": "Teradek", "paymentSettings": { "currencyCode": "USD" }, "myshopifyDomain": "teradek-store.myshopify.com", "countryCode": "US", "storefrontUrl": "https:\/\/teradek.com" }, "customer": null, "cart": null, "checkout": null, "productVariants": [], "purchasingCompany": null }, }, "https://teradek.com/cdn", "0e8c7c7aw41bd75a1p837d7fd4m8b145375", { "modern": "", "legacy": "" }, { "trekkieShim": true, "shopId": "954332", "storefrontBaseUrl": "https:\/\/teradek.com", "extensionBaseUrl": "https:\/\/extensions.shopifycdn.com\/cdn\/shopifycloud\/web-pixels-manager", "surface": "storefront-renderer", "enabledBetaFlags": "[\"2dca8a86\", \"d5bdd5d0\", \"5476ea20\", \"ed8389fc\"]", "isMerchantRequest": "true", "hashVersion": "0e8c7c7aw41bd75a1p837d7fd4m8b145375", "publish": "custom", "events": "[[\"page_viewed\",{}]]" });

/* ===== next script block ===== */


        window.ShopifyAnalytics = window.ShopifyAnalytics || {};
        window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
        window.ShopifyAnalytics.meta.currency = 'USD';
        var meta = { "page": { "pageType": "page", "resourceType": "page", "resourceId": 90691076274, "requestId": "f9d93fab-c9fb-47f8-9aaa-231580dee58b-1775712093" } };
        for (var attr in meta) {
            window.ShopifyAnalytics.meta[attr] = meta[attr];
        }


/* ===== next script block ===== */


        (function () {
            var customDocumentWrite = function (content) {
                var jquery = null;

                if (window.jQuery) {
                    jquery = window.jQuery;
                } else if (window.Checkout && window.Checkout.$) {
                    jquery = window.Checkout.$;
                }

                if (jquery) {
                    jquery('body').append(content);
                }
            };

            var hasLoggedConversion = function (token) {
                if (token) {
                    return document.cookie.indexOf('loggedConversion=' + token) !== -1;
                }
                return false;
            }

            var setCookieIfConversion = function (token) {
                if (token) {
                    var twoMonthsFromNow = new Date(Date.now());
                    twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

                    document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
                }
            }

            var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
            window.ShopifyAnalytics.lib.trekkie = window.trekkie;
            if (trekkie.integrations) {
                return;
            }
            trekkie.methods = [
                'identify',
                'page',
                'ready',
                'track',
                'trackForm',
                'trackLink'
            ];
            trekkie.factory = function (method) {
                return function () {
                    var args = Array.prototype.slice.call(arguments);
                    args.unshift(method);
                    trekkie.push(args);
                    if (window.__TREKKIE_SHIM_QUEUE && (method == 'track' || method == 'page')) {
                        try {
                            window.__TREKKIE_SHIM_QUEUE.push({
                                from: 'trekkie-stub',
                                method: method,
                                args: args.slice(1)
                            });
                        } catch (e) {
                            // no-op
                        }
                    }
                    return trekkie;
                };
            };
            for (var i = 0; i < trekkie.methods.length; i++) {
                var key = trekkie.methods[i];
                trekkie[key] = trekkie.factory(key);
            }
            trekkie.load = function (config) {
                trekkie.config = config || {};
                trekkie.config.initialDocumentCookie = document.cookie;
                var first = document.getElementsByTagName('script')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.onerror = function (e) {
                    var scriptFallback = document.createElement('script');
                    scriptFallback.type = 'text/javascript';
                    scriptFallback.onerror = function (error) {
                        var Monorail = {
                            produce: function produce(monorailDomain, schemaId, payload) {
                                var currentMs = new Date().getTime();
                                var event = {
                                    schema_id: schemaId,
                                    payload: payload,
                                    metadata: {
                                        event_created_at_ms: currentMs,
                                        event_sent_at_ms: currentMs
                                    }
                                };
                                return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
                            },
                            sendRequest: function sendRequest(endpointUrl, payload) {
                                // Try the sendBeacon API
                                if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
                                    var blobData = new window.Blob([payload], {
                                        type: 'text/plain'
                                    });

                                    if (window.navigator.sendBeacon(endpointUrl, blobData)) {
                                        return true;
                                    } // sendBeacon was not successful

                                } // XHR beacon

                                var xhr = new XMLHttpRequest();

                                try {
                                    xhr.open('POST', endpointUrl);
                                    xhr.setRequestHeader('Content-Type', 'text/plain');
                                    xhr.send(payload);
                                } catch (e) {
                                    console.log(e);
                                }

                                return false;
                            },
                            isIos12: function isIos12() {
                                return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
                            }
                        };
                        Monorail.produce('monorail-edge.shopifysvc.com',
                            'trekkie_storefront_load_errors/1.1',
                            {
                                shop_id: 954332,
                                theme_id: 151822631090,
                                app_name: "storefront",
                                context_url: window.location.href,
                                source_url: "//teradek.com/cdn/s/trekkie.storefront.bbaaac304bec97f24b147db39a78dee845470dc6.min.js"
                            });

                    };
                    scriptFallback.async = true;
                    scriptFallback.src = '//teradek.com/cdn/s/trekkie.storefront.bbaaac304bec97f24b147db39a78dee845470dc6.min.js';
                    first.parentNode.insertBefore(scriptFallback, first);
                };
                script.async = true;
                script.src = '//teradek.com/cdn/s/trekkie.storefront.bbaaac304bec97f24b147db39a78dee845470dc6.min.js';
                first.parentNode.insertBefore(script, first);

            };
            trekkie.load(
                { "Trekkie": { "appName": "storefront", "development": false, "defaultAttributes": { "shopId": 954332, "isMerchantRequest": true, "themeId": 151822631090, "themeCityHash": "16349299963457726604", "contentLanguage": "en", "currency": "USD", "eventMetadataId": "50a2be3e-a316-4784-8f5a-2fa560415c00" }, "isServerSideCookieWritingEnabled": true, "monorailRegion": "shop_domain", "enabledBetaFlags": ["b5387b81", "d5bdd5d0"] }, "Session Attribution": {}, "S2S": { "facebookCapiEnabled": true, "source": "trekkie-storefront-renderer", "apiClientId": 580111 } }
            );

            var loaded = false;
            trekkie.ready(function () {
                if (loaded) return;
                loaded = true;

                window.ShopifyAnalytics.lib = window.trekkie;

                var originalDocumentWrite = document.write;
                document.write = customDocumentWrite;
                try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch (error) { };
                document.write = originalDocumentWrite;

                window.ShopifyAnalytics.lib.page(null, { "pageType": "page", "resourceType": "page", "resourceId": 90691076274, "requestId": "f9d93fab-c9fb-47f8-9aaa-231580dee58b-1775712093", "shopifyEmitted": true });

                var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
                var token = match ? match[1] : undefined;
                if (!hasLoggedConversion(token)) {
                    setCookieIfConversion(token);

                }
            });

            var eventsListenerScript = document.createElement('script');
            eventsListenerScript.async = true;
            eventsListenerScript.src = "//teradek.com/cdn/shopifycloud/storefront/assets/shop_events_listener-3da45d37.js";
            document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
        })();

/* ===== next script block ===== */


        if (!window.ga || (window.ga && typeof window.ga !== 'function')) {
            window.ga = function ga() {
                (window.ga.q = window.ga.q || []).push(arguments);
                if (window.Shopify && window.Shopify.analytics && typeof window.Shopify.analytics.publish === 'function') {
                    window.Shopify.analytics.publish("ga_stub_called", {}, { sendTo: "google_osp_migration" });
                }
                console.error("Shopify's Google Analytics stub called with:", Array.from(arguments), "\nSee https://help.shopify.com/manual/promoting-marketing/pixels/pixel-migration#google for more information.");
            };
            if (window.Shopify && window.Shopify.analytics && typeof window.Shopify.analytics.publish === 'function') {
                window.Shopify.analytics.publish("ga_stub_initialized", {}, { sendTo: "google_osp_migration" });
            }
        }


/* ===== next script block ===== */


  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Teradek",

      "logo": "https:\/\/teradek.com\/cdn\/shop\/files\/Teradek-Lockup.svg?v=1721899103\u0026width=500",

    "sameAs": [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "url": "https:\/\/teradek.com\/pages\/bolt-6"
  }


/* ===== next script block ===== */




                var modalWrapper = document.getElementById('modalWrapper');

                var tarDiv = document.getElementById('modalPlaceholder');
                var htmlElement = document.querySelector("html");




                document.addEventListener('addStyleToHTML', addTheHTMLStyles);

                function addTheHTMLStyles() {
                    //console.log('AddStyleToHTML called.....');
                    htmlElement.style.overflowY = 'hidden';
                }
                document.addEventListener('removeModalFromDiv', removeModal);

                function removeModal(e) {
                    // console.log(e.target, 'the target after closing');
                    e.target.classList.remove('show.bs.modal');
                    // When modal closes
                    modalWrapper.setAttribute('style', 'pointer-events:none; z-index: -1');
                    htmlElement.style.overflowY = '';


                }
                function appendModal(modal_id, allow_scroll, remSize = '43rem') {

                    console.log(modal_id, ' is the element');

                    if (tarDiv) {
                        if (s) {
                            s.remove();
                        }
                        var s = document.createElement('span');
                        // alert('this element is supposed to be on top-most layer: ', modal_id);
                        s.innerHTML = '';
                        tarDiv.appendChild(s);
                        // console.log('this is the target modal string', modal_id);
                        var elementToMove = document.getElementById(modal_id);
                        console.log("Element To Move is: ", elementToMove);
                        if (s) {
                            s.appendChild(elementToMove);
                            elementToMove.classList.add('show.bs.modal');
                        }
                        modalWrapper.setAttribute('style', 'pointer-events:auto; z-index: 9999999999;');
                        elementToMove.setAttribute('aria-hidden', 'false');

                        htmlElement.style.overflowY = 'hidden';

                        // if (allow_scroll != undefined) {
                        //   elementToMove.style.overflowY = 'scroll'
                        //   var iframeToResize = document.querySelector(`#${modal_id} iframe`);
                        //   iframeToResize.setAttribute('style', `min-height:${remSize}`)
                        // }


                        elementToMove.addEventListener('hidden.bs.modal', function (event) {
                            // When modal closes
                            console.log('hide modal, clicked from appendModal funciton.');
                            modalWrapper.setAttribute('style', 'pointer-events:none; z-index: -1;');
                            htmlElement.setAttribute('style', 'overflow-y: scroll');
                            elementToMove.setAttribute('aria-hidden', 'true');
                        })
                    }



                    // console.log('the element of the iframe to resize: ', iframeToResize);
                    // console.log('the id of it: ', iframeToResize.id);


                    //iframeToResize.iframeResizer.resize();




                }


/* ===== next script block ===== */


                (function () {

                    function lockScroll() {
                        document.documentElement.style.overflow = 'hidden';
                        document.body.style.overflow = 'hidden';
                    }

                    function unlockScroll() {
                        document.documentElement.style.overflow = '';
                        document.body.style.overflow = '';
                    }

                    document.addEventListener('shown.bs.modal', function () {
                        lockScroll();
                    });

                    document.addEventListener('hidden.bs.modal', function () {

                        const openModals = document.querySelectorAll('.modal.show');

                        if (openModals.length === 0) {
                            unlockScroll();
                        }

                    });

                })();


/* ===== next script block ===== */

    // Store scroll position in history state when leaving the page
    window.addEventListener('beforeunload', function() {
        history.replaceState({ scrollPos: scrollY }, null, "");
    });

    // On page load, if there's a scroll position in history state, restore it
    window.addEventListener('load', function() {
        if (history.state !== null && typeof history.state.scrollPos !== 'undefined') {
            window.scrollTo(0, history.state.scrollPos);
        }
    });

    // Prevent automatic scroll restoration by the browser
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }


/* ===== next script block ===== */

    // Store scroll position in sessionStorage when leaving the page
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('scrollPos', window.scrollY);
    });

    // On page load, if there's a scroll position in sessionStorage, restore it
    window.addEventListener('load', function() {
        const scrollPos = sessionStorage.getItem('scrollPos');
        if (scrollPos !== null) {
            window.scrollTo(0, parseInt(scrollPos));
        }
    }); -->
            <script>
                // Check if the page was accessed through history navigation
                const accessedThroughHistory = performance.getEntriesByType("navigation")[0].type === "back_forward";

                // Store scroll position in sessionStorage when leaving the page only if accessed through history navigation
                window.addEventListener('beforeunload', function (event) {
                    if (accessedThroughHistory) {
                        sessionStorage.setItem('scrollPos', window.scrollY);
                    }
                });

                // On page load, if there's a scroll position in sessionStorage and the page was accessed through history navigation, restore it
                window.addEventListener('load', function () {
                    const scrollPos = sessionStorage.getItem('scrollPos');
                    if (scrollPos !== null && accessedThroughHistory) {
                        window.scrollTo(0, parseInt(scrollPos));
                    }
                });



/* ===== next script block ===== */


  $(document).ready( function () {

    $('head').append('<meta name="theme-color" content="#ff1199" />');
    console.log('color is #ff1199');
  });


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {

                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });
                                    jQuery(document).ready(function ($) {

                                        if (window.location.href.indexOf('#') != -1) {
                                            $('#').modal('show');
                                        }

                                    });




/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        $('#vid-vidPlayBtn .vid-btn-inner').on("mouseenter", handlerIn).on("mouseleave", handlerOut);

                                        function handlerIn(e) {
                                            gsap.to('#vid-vidPlayBtn .vid-btn-inner', {
                                                duration: 0.3,
                                                scale: 1.1,
                                                autoAlpha: 1
                                            });
                                        }

                                        function handlerOut(e) {
                                            gsap.to('#vid-vidPlayBtn .vid-btn-inner', {
                                                duration: 0.3,
                                                scale: 1,
                                                autoAlpha: 0.65
                                            });
                                        }
                                    })


/* ===== next script block ===== */


                                    var tl = gsap.timeline({});

                                    gsap.set('#vid-vidPlayBtn .vid-replay', {
                                        autoAlpha: 0
                                    });

                                    tl.pause();

                                    tl.to("#vid-vidPlayBtn .poster-img", {
                                        duration: 1,
                                        autoAlpha: 0
                                    })
                                        .to("#vid-vidPlayBtn .vid-play", {
                                            duration: 0,
                                            autoAlpha: 0
                                        }, "-=1")
                                        .fromTo('#vid-vidPlayBtn .vid-pause', {
                                            duration: 0,
                                            opacity: 0,
                                            visibility: 'hidden',
                                            display: 'none'
                                        }, {
                                            display: 'block',
                                            opacity: 1,
                                            visibility: 'visible'
                                        }, "-=1")

                                        .to(['#vid-vidPlayBtn .vid-btn-circle-bg', '#vid-vidPlayBtn .vid-btn-inner', '#vid-vidPlayBtn .vid-pause'], {
                                            duration: 0.5,
                                            autoAlpha: 0,
                                            scale: 0,
                                            onComplete: hideBtn
                                        }, "-=.25")

                                    function hideBtn() {
                                        gsap.set("#vid-vidPlayBtn .vid-btn-inner", {
                                            display: "none"
                                        })
                                    }

                                    function reset() {
                                        gsap.set("#vid-vidPlayBtn .vid-btn-inner", {
                                            display: "flex"
                                        })
                                        gsap.to('#vid-vidPlayBtn .poster-img', {
                                            duration: 0.25,
                                            autoAlpha: 1
                                        })
                                        gsap.to(['#vid-vidPlayBtn .vid-btn-inner', '#vid-vidPlayBtn .vid-btn-circle-bg', '#vid-vidPlayBtn .vid-replay'], {
                                            duration: 0.25,
                                            autoAlpha: 1,
                                            scale: 1
                                        })
                                    }
                                    jQuery(document).ready(function ($) {
                                        $('#vid-vidPlayBtn .play-video').click(function () {
                                            // tl.play();
                                            tl.restart();
                                            $('#vid-vidPlayBtn #player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                                        });

                                        $('.replay-video').click(function () {
                                            $('#vid- #player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                                        });
                                    });


/* ===== next script block ===== */


                                    // create youtube player
                                    var player;

                                    function onYouTubePlayerAPIReady() {
                                        player = new YT.Player('player', {
                                            videoId: 'ntq1LLTMXcw',
                                            events: {
                                                onReady: onPlayerReady,
                                                onStateChange: onPlayerStateChange
                                            }
                                        });
                                    }



                                    // autoplay video
                                    function onPlayerReady(event) {
                                        // event.target.playVideo();
                                    }

                                    // when video ends
                                    function onPlayerStateChange(event) {
                                        if (event.data === 0) {
                                            event.target.seekTo(0);
                                            event.target.stopVideo();
                                            reset();
                                        }
                                    }


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */

console.log("PRODUCT: ",);

/* ===== next script block ===== */


                                    function cardClick(event, url) {
                                        console.log(event);
                                        console.log(url);
                                        window.location = url;
                                    }
                                    document.querySelectorAll('.card-inner-link').forEach(link => {
                                        link.addEventListener('click', function (e) {
                                            e.stopPropagation();   // stops the outer div click
                                        });
                                    });


/* ===== next script block ===== */



                                                            function cloneAndMove(elId) {
                                                                //appendModal(elId);
                                                                //   var pid = '';
                                                                // console.log("PRODUCT ID IS: ", pid);


                                                                // var elementWithAttr = document.querySelector(`#QuickAdd-${pid}-complementary`);
                                                                // var targetElement = document.querySelector('html');
                                                                // targetElement.setAttribute('style', 'overflow-y: hidden !important');
                                                                // targetElement.style.setProperty('overflow-y', 'hidden', 'important');

                                                            }

                                                            function showMediaGallery(event) {
                                                                console.log('can we find this?');
                                                                console.log(event, 'the event to prevent');
                                                                event.preventDefault();
                                                                setTimeout(function () {
                                                                    const galleryImageLoad = document.querySelector(`[id^="Slider-Gallery"]`);
                                                                    if (galleryImageLoad) {
                                                                        galleryImageLoad.classList.remove("d-none");
                                                                    }

                                                                }, 1500);

                                                                setTimeout(function () {
                                                                    console.log('5 seconds for overflow');
                                                                }, 5000);
                                                            }

                                                            document.addEventListener('hidden.bs.modal', function () {
                                                                console.log('quick add close');
                                                            }
                                                            )

                                                            function closeQAModal() {
                                                                console.log('quick add close, from closeQAModal function');
                                                            }



/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */


                document.addEventListener('DOMContentLoaded', function () {
                    const hash = window.location.hash;

                    if (hash == '#10KRX' || hash == "#range") {
                        const videoIdentifier = hash.substring(1); // Remove '#'
                        let anchor = document.getElementById("videoIdentifier");
                        if (anchor) {
                            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
                            // ... proceed to launch video based on videoIdentifier

                        }
                        const hashBtn = document.getElementById('hashVidBtnLaunch');
                        setTimeout(function () {
                            hashBtn.click();
                        }, 1000);

                    }
                });


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */


                                    jQuery(document).ready(function ($) {
                                        var destination = $('');
                                        $("").on("click touchstart", function () {
                                            //console.log("", "trying to go here" );
                                            $('html,body').animate({
                                                scrollTop: destination.offset().top - 100
                                            }, 'slow');
                                        });
                                    });


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */


                        document.addEventListener('DOMContentLoaded', function () {
                            // Your JavaScript code here will execute once the DOM is ready.
                            // This is the ideal place to manipulate DOM elements or attach event listeners.
                            //console.log('DOM fully loaded and parsed!');
                            Array.from(document.getElementsByClassName('carousel')).forEach((x) => new bootstrap.Carousel(x));
                        });


/* ===== next script block ===== */


                    Array.from(document.getElementsByClassName('carousel')).forEach((x) => new bootstrap.Carousel(x));


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */


                $('.quote-section-owl-carousel').owlCarousel({
                    center: true,
                    items: 1,
                    loop: true,

                    margin: 0,
                    nav: false,
                    responsive: {
                        768: {
                            items: 2
                        }
                    }
                })

                let quoteOwl = $(".quote-section-owl-carousel")
                let tempDiv = document.createElement('div')
                tempDiv.classList.add('cs_quote__navigation')
                document.querySelector('.quote-section-owl-carousel').appendChild(tempDiv)

                $(".quote-section-owl-carousel .owl-dots").prependTo(".cs_quote__navigation")
                $("#quote-prev").prependTo(".cs_quote__navigation")
                $("#quote-next").appendTo(".cs_quote__navigation")

                $('#quote-next').click(function () {
                    quoteOwl.trigger('next.owl.carousel');
                });
                $('#quote-prev').click(function () {
                    quoteOwl.trigger('prev.owl.carousel');
                });



/* ===== next script block ===== */


                            jQuery(document).ready(function ($) {
                                var destination = $('');
                                $("").on("click touchstart", function () {
                                    //console.log("", "trying to go here" );
                                    $('html,body').animate({
                                        scrollTop: destination.offset().top - 100
                                    }, 'slow');
                                });
                            });


/* ===== next script block ===== */


                                                jQuery(document).ready(function ($) {
                                                    var destination = $('');
                                                    $("").on("click touchstart", function () {
                                                        //console.log("", "trying to go here" );
                                                        $('html,body').animate({
                                                            scrollTop: destination.offset().top - 100
                                                        }, 'slow');
                                                    });
                                                });


/* ===== next script block ===== */


                                                jQuery(document).ready(function ($) {
                                                    var destination = $('');
                                                    $("").on("click touchstart", function () {
                                                        //console.log("", "trying to go here" );
                                                        $('html,body').animate({
                                                            scrollTop: destination.offset().top - 100
                                                        }, 'slow');
                                                    });
                                                });


/* ===== next script block ===== */


                                                jQuery(document).ready(function ($) {
                                                    var destination = $('');
                                                    $("").on("click touchstart", function () {
                                                        //console.log("", "trying to go here" );
                                                        $('html,body').animate({
                                                            scrollTop: destination.offset().top - 100
                                                        }, 'slow');
                                                    });
                                                });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */


                                            jQuery(document).ready(function ($) {
                                                var destination = $('');
                                                $("").on("click touchstart", function () {
                                                    //console.log("", "trying to go here" );
                                                    $('html,body').animate({
                                                        scrollTop: destination.offset().top - 100
                                                    }, 'slow');
                                                });
                                            });


/* ===== next script block ===== */




                        jQuery(document).ready(function ($) {
                            $('.modal').each(function () {
                                var src = $(this).find('iframe').attr('src');

                                $(this).on('hidden.bs.modal', function () {
                                    $(this).find('iframe').attr('src', '');
                                    $(this).find('iframe').attr('src', src);
                                });
                            });
                        });


/* ===== next script block ===== */

console.log("PRODUCT: ", 449000);

/* ===== next script block ===== */


document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#compare_chart');
  if (!section) return;

  const wrapper = section.querySelector('.comparison-chart-wrapper');
  if (!wrapper) return;

  // const stickyElement = wrapper.querySelector('.sticky-product-info');
  // if (!stickyElement) return;

  const navbar = document.querySelector('.tdk-navbar-stack-fixed');

  let lastScroll = window.scrollY;
  let navbarVisible = true;
  let navbarHeight = navbar ? navbar.offsetHeight : 0;

  // Detect navbar visibility on scroll (based on scroll direction)
  function detectNavbarVisibility() {
    const currentScroll = window.scrollY;
    if (currentScroll < lastScroll) {
      navbarVisible = true;
    } else {
      navbarVisible = false;
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }

  function disableSticky() {
    stickyElement.classList.remove('is-sticky');
    stickyElement.style.cssText = `
      position: static !important;
      top: auto !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      z-index: auto !important;
      background: transparent !important;
      transition: none !important;
    `;
  }

  function enableSticky() {
    const topOffset = navbarVisible ? navbarHeight : 0;
    stickyElement.classList.add('is-sticky');
    stickyElement.style.cssText = `
      position: sticky;
      top: ${topOffset}px;
      z-index: 20;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      transition: position 0.2s ease, top 0.2s ease;
    `;
    document.documentElement.style.overflow = 'visible';
    document.body.style.overflow = 'visible';
  }

  function handleScroll() {
    detectNavbarVisibility();

    const wrapperRect = wrapper.getBoundingClientRect();
    const viewportHeight = window.innerHeight - 100;
    const wrapperHeight = wrapper.offsetHeight;

    if (wrapperHeight <= viewportHeight) {
      disableSticky();
      return;
    }

    if (wrapperRect.bottom <= viewportHeight) {
      disableSticky();
    } else {
      enableSticky();
    }
  }

  handleScroll();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', () => {
    navbarHeight = navbar ? navbar.offsetHeight : 0;
    handleScroll();
  });
});


/* ===== next script block ===== */


                                jQuery(document).ready(function ($) {
                                    var destination = $('');
                                    $("").on("click touchstart", function () {
                                        //console.log("", "trying to go here" );
                                        $('html,body').animate({
                                            scrollTop: destination.offset().top - 100
                                        }, 'slow');
                                    });
                                });


/* ===== next script block ===== */


                                jQuery(document).ready(function ($) {
                                    var destination = $('');
                                    $("").on("click touchstart", function () {
                                        //console.log("", "trying to go here" );
                                        $('html,body').animate({
                                            scrollTop: destination.offset().top - 100
                                        }, 'slow');
                                    });
                                });


/* ===== next script block ===== */


                                jQuery(document).ready(function ($) {
                                    var destination = $('');
                                    $("").on("click touchstart", function () {
                                        //console.log("", "trying to go here" );
                                        $('html,body').animate({
                                            scrollTop: destination.offset().top - 100
                                        }, 'slow');
                                    });
                                });


/* ===== next script block ===== */




                    jQuery(document).ready(function ($) {
                        $('.modal').each(function () {
                            var src = $(this).find('iframe').attr('src');

                            $(this).on('hidden.bs.modal', function () {
                                $(this).find('iframe').attr('src', '');
                                $(this).find('iframe').attr('src', src);
                            });
                        });
                    });


/* ===== next script block ===== */


                                        jQuery(document).ready(function ($) {
                                            var destination = $('');
                                            $("").on("click touchstart", function () {
                                                //console.log("", "trying to go here" );
                                                $('html,body').animate({
                                                    scrollTop: destination.offset().top - 100
                                                }, 'slow');
                                            });
                                        });


/* ===== next script block ===== */


                                        jQuery(document).ready(function ($) {
                                            var destination = $('');
                                            $("").on("click touchstart", function () {
                                                //console.log("", "trying to go here" );
                                                $('html,body').animate({
                                                    scrollTop: destination.offset().top - 100
                                                }, 'slow');
                                            });
                                        });


/* ===== next script block ===== */


                                        jQuery(document).ready(function ($) {
                                            var destination = $('');
                                            $("").on("click touchstart", function () {
                                                //console.log("", "trying to go here" );
                                                $('html,body').animate({
                                                    scrollTop: destination.offset().top - 100
                                                }, 'slow');
                                            });
                                        });


/* ===== next script block ===== */




                    jQuery(document).ready(function ($) {
                        $('.modal').each(function () {
                            var src = $(this).find('iframe').attr('src');

                            $(this).on('hidden.bs.modal', function () {
                                $(this).find('iframe').attr('src', '');
                                $(this).find('iframe').attr('src', src);
                            });
                        });
                    });


/* ===== next script block ===== */


                jQuery(function ($) {
                    var modalID = "teradekBolt6Overview";
                    var videoID = "";
                    var modalSelector = `#${modalID}`;
                    var iframeSelector = `#${videoID}`;

                    // Store the original iframe HTML
                    var originalIframe = $(iframeSelector)[0].outerHTML;

                    // Restore video when modal opens
                    $(modalSelector).on("shown.bs.modal", function () {
                        console.log("Modal shown. Restoring video.");
                        if (!$(iframeSelector).length) {
                            $(this).find(".modal-body").html(originalIframe);
                        }
                    });

                    // Fully remove and stop video when modal closes
                    $(modalSelector).on("hide.bs.modal", function () {
                        console.log("Modal hidden. Removing video.");
                        $(iframeSelector).remove(); // Remove iframe completely
                    });

                    // Fix accessibility issue by removing aria-hidden on close
                    $(modalSelector).on("hidden.bs.modal", function () {
                        $(this).removeAttr("aria-hidden"); // Ensure accessibility
                    });
                });


                document.addEventListener('shown.bs.modal', function () {
                    document.documentElement.style.overflow = 'hidden';
                });

                document.addEventListener('hidden.bs.modal', function () {
                    document.documentElement.style.overflow = '';
                });


/* ===== next script block ===== */


                iframeResize({ license: "1jy4dww5qzv-s54r73oxcn-v59f4kfgfz", log: false }, '#iframeId')


/* ===== next script block ===== */


                const OverlayQueryParams = new URLSearchParams(window.location.search);
                const OverlayQueryParams1 = new URLSearchParams(window.location.search);
                const VinspectParamValue = OverlayQueryParams.get('vinspect');
                const VinspectParamValue1 = OverlayQueryParams1.get('vinspect1');
                var overlayDiv = document.getElementById("myDIV");
                var overlayBtn = document.getElementById("oveleaybtn");
                var img1 = document.getElementById("img1");
                var img2 = document.getElementById("img2");
                var img1mob = document.getElementById("img1mob");
                var img2mob = document.getElementById("img2mob");

                //    if(VinspectParamValue === "true"){
                //      overlayDiv.classList.remove("d-none");
                //      overlayBtn.classList.remove("d-none");
                //    }
                // if(VinspectParamValue1 === "true"){
                //      overlayDiv.classList.remove("d-none");
                //      overlayBtn.classList.remove("d-none");
                //    }

                if (VinspectParamValue === "true" || VinspectParamValue1 === "true") {
                    overlayDiv.classList.remove("d-none");
                    overlayBtn.classList.remove("d-none");
                }

                if (VinspectParamValue1 === "true") {
                    if (img1) {
                        img1.style.display = "none";  // Hide img1
                        img1.classList.add("d-none");
                        img1.classList.remove("d-md-block"); // Remove the d-md-block class
                    }
                    if (img2) {
                        img2.style.display = "block"; // Show img2
                        img2.classList.remove("d-none");
                    }
                }

                if (VinspectParamValue === "true") {
                    if (img2) {
                        img2.style.display = "none";  // Hide img1
                        img2.classList.add("d-none");
                        img2.classList.remove("d-md-block"); // Remove the d-md-block class
                    }
                    if (img1) {
                        img1.style.display = "block"; // Show img2
                        img1.classList.remove("d-none");
                    }

                }


                if (VinspectParamValue1 === "true" && window.innerWidth < 768) {
                    if (img1mob) {
                        img1mob.style.display = "none";
                        img1mob.classList.add("d-none");
                        img1mob.classList.remove("d-block");
                    }
                    if (img2mob) {
                        img2mob.style.display = "block";
                        img2mob.classList.remove("d-none");
                    }
                    if (img2) {
                        img2.style.display = "none";  // Hide img1
                        img2.classList.add("d-none");
                        img2.classList.remove("d-block"); // Remove the d-md-block class
                    }
                }

                if (VinspectParamValue === "true" && window.innerWidth < 768) {
                    if (img2mob) {
                        img2mob.style.display = "none";
                        img2mob.classList.add("d-none");
                        img2mob.classList.remove("d-block");
                    }
                    if (img1mob) {
                        img1mob.style.display = "block";
                        img1mob.classList.remove("d-none");
                    }
                    if (img1) {
                        img1.style.display = "none";  // Hide img1
                        img1.classList.add("d-none");
                        img1.classList.remove("d-block"); // Remove the d-md-block class
                    }
                }


                function Switchoverlay() {
                    var element = document.getElementById("myDIV");
                    element.classList.toggle("d-none");
                }


/* ===== next script block ===== */


            jQuery(document).ready(function ($) {

                jQuery(".vitec-menu h3").click(function () {


                    if ($(window).width() <= 768) {
                        if ($(this).hasClass('active')) {
                            $(".vitec-menu h3").removeClass('active');
                            $(".vitec-menu > li > ul").slideUp();
                        }

                        else {
                            $(".vitec-menu h3").removeClass('active');
                            $(".vitec-menu > li > ul").slideUp();
                            $(this).parent().find('ul').slideDown();
                            $(this).addClass('active');
                        }
                    }
                });

                $('.vitec-sites').click(function () { menuactivity() });
                $('.close-vitec-menu').click(function () { menuactivity() });


                jQuery(window).resize(function ($) {
                    if (jQuery(window).width() <= 768) {
                        $('ul.vitec-menu > li > ul').removeAttr('style');
                    }
                });

                function menuactivity() {
                    $('.vitec-list').slideToggle();
                    $('.vitec-sites').toggleClass('active');
                    $('.vitec-list').toggleClass('open');
                }

            });


/* ===== next script block ===== */


            window.interdeal = {
                "sitekey": "09b7ce2a871d868e54b26f2b0f18aef2",
                "Position": "Left",
                "Menulang": "EN",
                "domains": {
                    "js": "https://cdn.equalweb.com/",
                    "acc": "https://access.equalweb.com/"
                },
                "btnStyle": {
                    "vPosition": ["80%", null],
                    "scale": ["0.6", "0.6"],
                    "icon": {
                        "type": 11,
                        "shape": "circle",
                        "outline": false
                    }
                }
            };
            window.addEventListener("readystatechange", function () {
                var coreCall = document.createElement("script");
                coreCall.src = "https://cdn.equalweb.com/core/4.3.7/accessibility.js";
                coreCall.defer = true;
                coreCall.integrity =
                    "sha512-hGa5HZtFkT1M7+tUDtU/cbw6AG0ORz3oblztCoTZ/z2qPyr7dgwH3zoT8qpgj21MgcRsMFLD6NNKePGvVks3Ig==";
                coreCall.crossOrigin = "anonymous";
                coreCall.setAttribute("data-cfasync", "true");

                document.body.appendChild(coreCall);
            });


/* ===== next script block ===== */


            function scrollToTop() {
                let currentOffset = window.pageYOffset;
                const arr = [];

                for (let i = 100; i >= 0; i--) {
                    arr.push(new Promise(res => {
                        setTimeout(() => {
                            res(currentOffset * (i / 100));
                        },
                            2 * (100 - i))
                    })
                    );
                }

                arr.reduce((acc, curr, index, arr) => {
                    return acc.then((res) => {
                        if (typeof res === 'number')
                            window.scrollTo(0, res)
                        return curr
                    })
                }, Promise.resolve(currentOffset)).then(() => {
                    window.scrollTo(0, 0)
                })
            }


/* ===== next script block ===== */


        window.shopUrl = 'https://teradek.com';
        window.routes = {
            cart_add_url: '/cart/add',
            cart_change_url: '/cart/change',
            cart_update_url: '/cart/update',
            cart_url: '/cart',
            predictive_search_url: '/search/suggest',
        };

        window.cartStrings = {
            error: `There was an error while updating your cart. Please try again.`,
            quantityError: `You can only add [quantity] of this item to your cart.`,
        };

        window.variantStrings = {
            addToCart: `Add to Cart`,
            soldOut: `Sold Out`,
            unavailable: `Unavailable`,
            unavailable_with_option: `[value] - Unavailable`,
        };

        window.quickOrderListStrings = {
            itemsAdded: `[quantity] items added`,
            itemAdded: `[quantity] item added`,
            itemsRemoved: `[quantity] items removed`,
            itemRemoved: `[quantity] item removed`,
            viewCart: `View cart`,
            each: `[money]/ea`,
        };

        window.accessibilityStrings = {
            imageAvailable: `Image [index] is now available in gallery view`,
            shareSuccess: `Link copied to clipboard`,
            pauseSlideshow: `Pause slideshow`,
            playSlideshow: `Play slideshow`,
            recipientFormExpanded: `Gift card recipient form expanded`,
            recipientFormCollapsed: `Gift card recipient form collapsed`,
        };


/* ===== next script block ===== */


        window.interdeal = { "sitekey": "09b7ce2a871d868e54b26f2b0f18aef2", "Position": "Left", "Menulang": "EN", "domains": { "js": "https://cdn.equalweb.com/", "acc": "https://access.equalweb.com/" }, "btnStyle": { "vPosition": ["80%", null], "scale": ["0.6", "0.6"], "icon": { "type": 11, "shape": "circle", "outline": false } } }; (function (doc, head, body) { var coreCall = doc.createElement('script'); coreCall.src = 'https://cdn.equalweb.com/core/4.3.7/accessibility.js'; coreCall.defer = true; coreCall.integrity = 'sha512-hGa5HZtFkT1M7+tUDtU/cbw6AG0ORz3oblztCoTZ/z2qPyr7dgwH3zoT8qpgj21MgcRsMFLD6NNKePGvVks3Ig=='; coreCall.crossOrigin = 'anonymous'; coreCall.setAttribute('data-cfasync', true); body ? body.appendChild(coreCall) : head.appendChild(coreCall); })(document, document.head, document.body);


/* ===== next script block ===== */


        window._mfq = window._mfq || [];
        (function () {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.defer = true;
            mf.src = "//cdn.mouseflow.com/projects/99545af4-272e-485d-98e8-14a7bd5de8b5.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
        })();


/* ===== next script block ===== */


        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })


/* ===== next script block ===== */


        document.addEventListener('DOMContentLoaded', function () {
            console.log("Start");
            setTimeout(function () {
                //console.log("Timer finished! This message appeared after 3 seconds.");


                const privacyCol1 = document.querySelector(".shopify-pc__banner__body");
                const privacyCol2 = document.querySelector(".shopify-pc__banner__btns");
                const btnAccept1 = document.querySelector("#shopify-pc__banner__btn-accept"); // Select by ID
                const btnAccept2 = document.querySelector("#shopify-pc__prefs__header-accept"); // Select by ID
                const btnDecline1 = document.querySelector("#shopify-pc__banner__btn-decline"); //
                const btnDecline2 = document.querySelector("#shopify-pc__prefs__header-decline"); // Select by ID
                const btnSave = document.querySelector("#shopify-pc__prefs__header-save"); // Select by ID
                if (btnAccept1) { // Add a null check

                    btnAccept1.classList.add("btn", "btn-black");
                }
                if (btnAccept2) {
                    btnAccept2.classList.add("btn", "btn-black");
                }
                if (btnDecline1) {
                    btnDecline1.classList.add("btn", "btn-outline-black");
                }
                if (btnDecline2) {
                    btnDecline2.classList.add("btn", "btn-outline-black");
                }
                if (privacyCol1) {
                    privacyCol1.classList.add("col-sm-8");
                }
                if (privacyCol2) {
                    privacyCol2.classList.add("col-sm-4");
                }

                const cookiesMsg = document.getElementById('shopify-pc__banner__body-title');
                // const prefsBtn = document.getElementById('shopify-pc__banner__btn-manage-prefs');
                if (cookiesMsg) {
                    cookiesMsg.innerHTML = 'Cookie Policy';
                }
                // prefsBtn.innerHTML = '<span>Customize</span>';

                console.log("This message appears after 3 seconds.");
                console.log("End");
            }, 800); // 3000 milliseconds = 3 seconds

        });
