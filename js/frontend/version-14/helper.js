let cookieHelper=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
var changeHeightFirst= false;
try {
  if (
    typeof qaSetting === 'undefined' ||
    qaSetting === 'undefined' ||
    qaSetting === 'null' ||
    qaSetting === ''
  ) {
    var qaSetting = '{}';
  }
  var scmCustomDataExtJsonIframe= (typeof scmCustomDataExtJson == "undefined" ) ? {} : scmCustomDataExtJson;
  var settingApp = (function (infoShop, dataApp, qaSetting, scmCustomDataExtJsonIframe) {
    if (infoShop === 'null' || infoShop === '') {
      infoShop = '{}';
    }
    let res = infoShop;
    let infoShopJson = JSON.parse(res);

    let qaSettingObj= JSON.parse(qaSetting);

    let checkSetting = function (strText) {
      if (typeof strText == 'undefined' || strText == 'undefined') {
        return false;
      }
      return true;
    };
    let defaultSetting= {
      preview : checkSetting(dataApp.preview) ? dataApp.preview : false,
      canUseLayout : checkSetting(dataApp.canUseLayout) ? dataApp.canUseLayout : true,
      wrongProductPageAdvanceWidget :  checkSetting(dataApp.wrongProductPageAdvanceWidget) ? dataApp.wrongProductPageAdvanceWidget : false,
      rtl : checkSetting(dataApp.rtl) ? dataApp.rtl : false,
      useExampleData : false,
      custom : checkSetting(infoShopJson.custom) ? infoShopJson.custom : false,
      no_select_layout : false,
      groups : checkSetting(infoShopJson.groups) ? infoShopJson.groups : {},
      customLayoutMain : checkSetting(dataApp.customLayoutMain) ? dataApp.customLayoutMain : true,
      showProductDataInAdvancedWidget : checkSetting(dataApp.showProductDataInAdvancedWidget) ? dataApp.showProductDataInAdvancedWidget : false,
      host : checkSetting(dataApp.host) ? dataApp.host : '',
      hostLoadMore : checkSetting(dataApp.hostLoadMore) &&  dataApp.hostLoadMore != '' ? dataApp.hostLoadMore : checkSetting(dataApp.host) ? dataApp.host : 'https://store.laireviews.com',
      cdn : checkSetting(dataApp.cdn) ? dataApp.cdn : '',
      tracking : checkSetting(infoShopJson.tracking) ? infoShopJson.tracking : true,
      product_id : checkSetting(dataApp.productShopifyId) ? dataApp.productShopifyId : '',
      shop_name : checkSetting(dataApp.shopName) ? dataApp.shopName : '',
      shopDomain : checkSetting(dataApp.shopDomain) ? dataApp.shopDomain : '',
      show_water_mark : checkSetting(dataApp.showWaterMark) ? dataApp.showWaterMark : false,
      itemPerLoad : checkSetting(infoShopJson.itemPerLoad) ? infoShopJson.itemPerLoad : 5,
      showVote : checkSetting(infoShopJson.showVote) ? infoShopJson.showVote : false,
      lastUpdated : checkSetting(infoShopJson.last_updated) ? infoShopJson.last_updated : 0,
      version: 4,
      versionUpdate: checkSetting(infoShopJson.versionUpdate) ? infoShopJson.versionUpdate : '1',
      versionLiquid: checkSetting(infoShopJson.versionLiquid) ? infoShopJson.versionLiquid : '12',
      type : checkSetting(dataApp.type) ? dataApp.type : 'product',
      typePage : checkSetting(dataApp.typePage) ? dataApp.typePage : 'productPage',
      minJs :  checkSetting(infoShopJson.minJs) ? infoShopJson.minJs : true,
      enable_login_required : checkSetting(infoShopJson.loginRequireEnabled) ? infoShopJson.loginRequireEnabled : false,
      enable_order_required : checkSetting(infoShopJson.orderRequireEnabled) ? infoShopJson.orderRequireEnabled : false,
      enable_order_product_required : checkSetting(infoShopJson.orderProductRequireEnabled) ? infoShopJson.orderProductRequireEnabled : false,
      paginationType : checkSetting(infoShopJson.paginationType) ? infoShopJson.paginationType : 'load-more',
      sort: checkSetting(infoShopJson.sort) ? infoShopJson.sort : "date",
      tabProduct: checkSetting(infoShopJson.highlightTabEnabled) ? infoShopJson.highlightTabEnabled : false,
      mainColor: checkSetting(infoShopJson.mainColor) ? infoShopJson.mainColor : "#5c69c7",
      voteColor: checkSetting(infoShopJson.voteColor) ? infoShopJson.voteColor : "#fa4f56",
      starColor: checkSetting(infoShopJson.starColor) ? infoShopJson.starColor : "#fa4f56",
      starStyle: checkSetting(infoShopJson.starStyle) ? infoShopJson.starStyle : 'star',
      textPrimary: checkSetting(infoShopJson.textPrimary) ? infoShopJson.textPrimary : "#000",
      textSecondary: checkSetting(infoShopJson.textSecondary) ? infoShopJson.textSecondary : "#a3a3a3",
      font: checkSetting(infoShopJson.font) ? infoShopJson.font : "Segoe UI",
      width: checkSetting(infoShopJson.width) ? infoShopJson.width : "1200px",
      reviewBg: checkSetting(infoShopJson.reviewBg) ? infoShopJson.reviewBg : "#ffffff",
      showSubmitImage: (typeof (infoShopJson.showSubmitImage) !== "undefined" ) ? infoShopJson.showSubmitImage : true,
      checkSortReview: (typeof (infoShopJson.checkSortReview) !== "undefined" ) ? infoShopJson.checkSortReview : false,
      header_headerQuickLayout: checkSetting(infoShopJson.header_headerQuickLayout) ? infoShopJson.header_headerQuickLayout : "default-2",
      header_showStatistic: checkSetting(infoShopJson.header_showStatistic) ? infoShopJson.header_showStatistic : true,
      header_avgRatingShape: checkSetting(infoShopJson.header_avgRatingShape) ? infoShopJson.header_avgRatingShape : "square" ,
      header_avgRatingColor: checkSetting(infoShopJson.header_avgRatingColor) ? infoShopJson.header_avgRatingColor : "#5c69c7",
      header_starArrange: checkSetting(infoShopJson.header_starArrange) ? infoShopJson.header_starArrange : "vertical",
      header_writeReviewBtnShape: checkSetting(infoShopJson.header_writeReviewBtnShape) ? infoShopJson.header_writeReviewBtnShape : "round",
      header_writeReviewBtnColor: checkSetting(infoShopJson.header_writeReviewBtnColor) ? infoShopJson.header_writeReviewBtnColor : "#5c69c7",
      header_writeReviewBtnTextColor: checkSetting(infoShopJson.header_writeReviewBtnTextColor) ? infoShopJson.header_writeReviewBtnTextColor : "#fff",
      header_submitBtnShape: checkSetting(infoShopJson.header_submitBtnShape) ? infoShopJson.header_submitBtnShape: "round",
      header_submitBtnColor: checkSetting(infoShopJson.header_submitBtnColor) ? infoShopJson.header_submitBtnColor : "#5c6ac4",
      header_submitBtnTextColor: checkSetting(infoShopJson.header_submitBtnTextColor) ? infoShopJson.header_submitBtnTextColor : "#ffffff",
      header_reviewForm: checkSetting(infoShopJson.header_reviewForm) ? infoShopJson.header_reviewForm : true,
      header_reviewFormat: checkSetting(infoShopJson.header_reviewFormat) ? infoShopJson.header_reviewFormat : "popup",
      body_isLimitContent : true,
      body_limitContentCharacters : checkSetting(infoShopJson.limitContentCharacters) ? infoShopJson.limitContentCharacters : 500,
      body_customerName : checkSetting(infoShopJson.body_customerName) ? infoShopJson.body_customerName : "full",
      body_customerAvatarShape : checkSetting(infoShopJson.body_customerAvatarShape) ? infoShopJson.body_customerAvatarShape : "square",
      body_customerAvatarDisplay : checkSetting(infoShopJson.body_customerAvatarDisplay) ? infoShopJson.body_customerAvatarDisplay : "image",
      body_verifyBadge : checkSetting(infoShopJson.body_verifyBadge) ? infoShopJson.body_verifyBadge : true,
      body_verifyBadgeColor: checkSetting(infoShopJson.body_verifyBadgeColor) ? infoShopJson.body_verifyBadgeColor : "#1bc141",
      body_showFlag : checkSetting(infoShopJson.body_showFlag) ? infoShopJson.body_showFlag : true,
      body_flag : checkSetting(infoShopJson.body_flag) ? infoShopJson.body_flag : "retangle",
      body_layout : checkSetting(infoShopJson.body_layout) ? infoShopJson.body_layout : "grid",
      body_bodyQuickLayout : checkSetting(infoShopJson.body_bodyQuickLayout) ? infoShopJson.body_bodyQuickLayout : "default-2",
      body_reviewPhoto : checkSetting(infoShopJson.body_reviewPhoto) ? infoShopJson.body_reviewPhoto : true,
      body_date : checkSetting(infoShopJson.body_date) ? infoShopJson.body_date : true,
      body_formatDate : checkSetting(infoShopJson.body_dateFormat) ? infoShopJson.body_dateFormat : 'dd-MM-yyyy',
      body_contentAlign : checkSetting(infoShopJson.body_contentAlign) ? infoShopJson.body_contentAlign : "left",
      body_bgReview: checkSetting(infoShopJson.body_bgReview) ? infoShopJson.body_bgReview : "#ffffff",
      twoColumnsOnMobile: checkSetting(infoShopJson.twoColumnsOnMobile) ? infoShopJson.twoColumnsOnMobile : false,
      use_google_font: true,
      slider: false,
      slider_item_homepage_desktopItems: 3,
      slider_item_homepage_smallDesktopItems: 3,
      slider_item_homepage_tabletItems :  2,
      slider_item_mobileItems : 1,
      slider_auto_slider: checkSetting(infoShopJson.homepage_autoSlider) ? infoShopJson.homepage_autoSlider : true,
      slider_dots: false,
      slider_to_scroll_desktopItems:1,
      slider_to_scroll_smallDesktopItems: 1,
      slider_to_scroll_tabletItems: 1,
      slider_to_scroll_mobileItems: 1,
      slider_time_between: checkSetting(infoShopJson.homepage_delaySlider) ? infoShopJson.homepage_delaySlider : 2000,
      lazyLoad: checkSetting(infoShopJson.lazyLoad) ? infoShopJson.lazyLoad : false,
      rejectLazyLoad: false,
      videoEnabled: checkSetting(infoShopJson.videoEnabled) ? infoShopJson.videoEnabled : true,
      videosPerReview: checkSetting(infoShopJson.videosPerReview) ? infoShopJson.videosPerReview : 1,
      discountEnabled: checkSetting(infoShopJson.discountEnabled) ? infoShopJson.discountEnabled : false,
      discountValue: checkSetting(infoShopJson.discountValue) ? infoShopJson.discountValue : '0%',
      qaEnabled: checkSetting(qaSettingObj.qaEnabled)
        ? qaSettingObj.qaEnabled
        : false,
      qaStoreOwnerName: checkSetting(qaSettingObj.qaStoreOwnerName)
        ? qaSettingObj.qaStoreOwnerName
        : 'Store owner',
      qaQuestionsPerLoad: checkSetting(qaSettingObj.qaQuestionsPerLoad)
        ? qaSettingObj.qaQuestionsPerLoad
        : 3,
      qaAnswersPerLoad: checkSetting(qaSettingObj.qaAnswersPerLoad)
        ? qaSettingObj.qaAnswersPerLoad
        : 3,
      qaIsOnlyShopCanAnswer: checkSetting(
        qaSettingObj.qaIsOnlyShopCanAnswer
      )
        ? qaSettingObj.qaIsOnlyShopCanAnswer
        : false,
      qaAnswerCardBgColor: checkSetting(qaSettingObj.qaAnswerCardBgColor)
        ? qaSettingObj.qaAnswerCardBgColor
        : '#f6f6f6',
      qaAnswerCardLeftBorderColor: checkSetting(
        qaSettingObj.qaAnswerCardLeftBorderColor
      )
        ? qaSettingObj.qaAnswerCardLeftBorderColor
        : '#e5e5e5',
      qaAnswerCardLeftBorderWidth: checkSetting(
        qaSettingObj.qaAnswerCardLeftBorderWidth
      )
        ? qaSettingObj.qaAnswerCardLeftBorderWidth
        : '5px',
      qaPastBuyerBadgeColor: checkSetting(
        qaSettingObj.qaPastBuyerBadgeColor
      )
        ? qaSettingObj.qaPastBuyerBadgeColor
        : '#333333',
      qaStoreOwnerBadgeColor: checkSetting(
        qaSettingObj.qaStoreOwnerBadgeColor
      )
        ? qaSettingObj.qaStoreOwnerBadgeColor
        : '#fc6262',
      customForms: checkSetting(infoShopJson.customForms)
        ? infoShopJson.customForms
        : []
    };
    if(defaultSetting.typePage == 'homePage'){
      defaultSetting.slider= checkSetting(infoShopJson.homepage_slider) ? infoShopJson.homepage_slider :false;
      defaultSetting.body_layout= checkSetting(infoShopJson.homepage_layout) ? infoShopJson.homepage_layout : defaultSetting.body_layout;
      defaultSetting.body_bodyQuickLayout= checkSetting(infoShopJson.homepage_type) ? infoShopJson.homepage_type : defaultSetting.body_bodyQuickLayout;
      if(defaultSetting.body_bodyQuickLayout == "testimonial"){
        defaultSetting.slider_item_homepage_desktopItems= 2;
        defaultSetting.slider_item_homepage_smallDesktopItems= 2;
        defaultSetting.slider_item_homepage_tabletItems= 1;
        defaultSetting.slider_item_mobileItems= 1;
      }
    }
    if (defaultSetting.qaEnabled) {
      defaultSetting.header_reviewFormat = 'toggle';
      if (
        defaultSetting.header_headerQuickLayout === 'default-2' &&
        defaultSetting.header_reviewForm
      ) {
        defaultSetting.header_reviewForm = false;
      }
    }
    let getSettingFromShop = function () {
      let scmCustomDataFromTheme= (typeof scmCustomData == "undefined" || scmCustomData == null) ? null : scmCustomData;
      if(scmCustomDataFromTheme && typeof scmCustomDataFromTheme === 'string'){
        scmCustomDataFromTheme= JSON.parse(scmCustomDataFromTheme);
      }
      let scmCustomDataFromSection= (typeof scmCustomDataSection == "undefined" || scmCustomDataSection == null) ? null : scmCustomDataSection;
      if(scmCustomDataFromSection && typeof scmCustomDataFromSection === 'string'){
        scmCustomDataFromSection= JSON.parse(scmCustomDataFromSection);
      }
      defaultSetting= Object.assign(defaultSetting, scmCustomDataFromTheme, scmCustomDataFromSection);
      let getHeaderLayoutSetting = function(){
        if(!defaultSetting.header_reviewForm){
          return defaultSetting.header_headerQuickLayout + '-' +  defaultSetting.header_reviewFormat;
        }
        return  defaultSetting.header_headerQuickLayout;
      };
      let getHeaderClassSetting = function(){
        return 'header-' + defaultSetting.header_headerQuickLayout;
      };
      let getBodyLayoutSetting = function(){
        return 'body-' + defaultSetting.body_bodyQuickLayout;
      };
      let getBodyClassSetting = function(){
        return 'body-' + defaultSetting.body_bodyQuickLayout;
      };

      let settingCustom = {
        headerLayout : getHeaderLayoutSetting(),
        headerClass : getHeaderClassSetting(),
        bodyLayOut : getBodyLayoutSetting(),
        bodyClass : getBodyClassSetting(),
      };
      if(defaultSetting.body_bodyQuickLayout == "image-text"){
        defaultSetting.slider_item_homepage_desktopItems= 5;
        defaultSetting.slider_item_homepage_smallDesktopItems= 5;
        defaultSetting.slider_item_homepage_tabletItems= 3;
        defaultSetting.slider_item_mobileItems= 2;
      }
      return Object.assign(defaultSetting, settingCustom, scmCustomDataExtJsonIframe);
    };
    return getSettingFromShop();
  })(infoShop, dataApp, qaSetting, scmCustomDataExtJsonIframe);

  var languageModule=  (function(language) {
    function checkFailTranslateLanguage(string) {
      if(typeof(string) == "undefined" || string=='undefined'){
        return true;
      }
      string= String(string);
      return  string.includes("ranslation missing");
    };
    function htmlDecode(input){
      var e = document.createElement('textarea');
      e.innerHTML = input;
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    const labelTranslations = {
      'en': { label_name: 'Your name', label_email: 'Your email', label_text_area: 'Your feedback', field_required: 'This field is required', email_invalid: 'Please enter a valid email address' },
      'de': { label_name: 'Dein Name', label_email: 'Deine E-Mail', label_text_area: 'Ihr Feedback', field_required: 'Dieses Feld ist erforderlich', email_invalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' },
      'fr': { label_name: 'Votre nom', label_email: 'Votre e-mail', label_text_area: 'Votre avis', field_required: 'Ce champ est obligatoire', email_invalid: 'Veuillez entrer une adresse e-mail valide' },
      'es': { label_name: 'Tu nombre', label_email: 'Tu correo', label_text_area: 'Tu opinión', field_required: 'Este campo es obligatorio', email_invalid: 'Por favor, introduce una dirección de correo válida' },
      'hi': { label_name: 'तुम्हारा नाम', label_email: 'तुम्हारा ईमेल', label_text_area: 'आपकी समीक्षा', field_required: 'यह फ़ील्ड आवश्यक है', email_invalid: 'कृपया एक वैध ईमेल पता दर्ज करें' },
      'pt': { label_name: 'Seu nome', label_email: 'Seu email', label_text_area: 'Seu feedback', field_required: 'Este campo é obrigatório', email_invalid: 'Por favor, insira um endereço de e-mail válido' },
      'pt-BR': { label_name: 'Seu nome', label_email: 'Seu email', label_text_area: 'Seu feedback', field_required: 'Este campo é obrigatório', email_invalid: 'Por favor, insira um endereço de e-mail válido' },
      'zh': { label_name: '你的名字', label_email: '你的邮件', label_text_area: '您的評論', field_required: '此字段为必填项', email_invalid: '请输入有效的电子邮件地址' },
      'zh-TW': { label_name: '你的名字', label_email: '你的邮件', label_text_area: '您的評論', field_required: '此欄位為必填', email_invalid: '請輸入有效的電子郵件地址' }
    };

    function getLabelByLang(key) {
      let locale;
      try {
        locale = window.parent.Shopify?.locale
          ?? window.parent.document.documentElement.lang
          ?? navigator.language
          ?? 'en';
      } catch (e) {
        locale = navigator.language ?? 'en';
      }

      const trans = labelTranslations[locale]
        || labelTranslations[locale.split('-')[0]]
        || labelTranslations['en'];

      return trans[key];
    }
    function getLanguage(language) {
      return {
        'box_reviews-title_info' : checkFailTranslateLanguage(language.box_reviews.title_info) ? 'Customer reviews' : language.box_reviews.title_info,
        'box_reviews-average_info' : checkFailTranslateLanguage(language.box_reviews.average_info) ? 'Out of 5' : language.box_reviews.average_info,
        'box_reviews-before_number' : checkFailTranslateLanguage(language.box_reviews.before_number) ? 'Based on' : language.box_reviews.before_number,
        'box_reviews-after_number' : checkFailTranslateLanguage(language.box_reviews.after_number) ? 'reviews' : language.box_reviews.after_number,
        'box_reviews-all_reviews' : checkFailTranslateLanguage(language.box_reviews.all_reviews) ? 'All reviews' : language.box_reviews.all_reviews,
        'box_reviews-highlight_tab' : checkFailTranslateLanguage(language.box_reviews.highlight_tab) ? 'Reviews for other products' : language.box_reviews.highlight_tab,
        'box_reviews-reviews_tab' : checkFailTranslateLanguage(language.box_reviews.reviews_tab) ? 'Reviews' : language.box_reviews.reviews_tab,
        'box_write-title_write' : checkFailTranslateLanguage(language.box_write.title_write) ? 'Write a review' : language.box_write.title_write,
        'box_write-write_button' : checkFailTranslateLanguage(language.box_write.write_button) ? 'Write a review' : language.box_write.write_button,
        'box_write-write_cancel' : checkFailTranslateLanguage(language.box_write.write_cancel) ? 'Cancel' : language.box_write.write_cancel,
        'box_write-before_star' : checkFailTranslateLanguage(language.box_write.before_star) ? 'Your rating' : language.box_write.before_star,
        'box_write-input_name' : checkFailTranslateLanguage(language.box_write.input_name) ? 'Your name' : language.box_write.input_name,
        'box_write-input_email' : checkFailTranslateLanguage(language.box_write.input_email) ? 'Your email' : language.box_write.input_email,
        'box_write-input_text_area' : checkFailTranslateLanguage(language.box_write.input_text_area) ? 'Enter your feedback here' : language.box_write.input_text_area,
        'box_write-label_name' : checkFailTranslateLanguage(language.box_write.label_name) ? getLabelByLang('label_name') : language.box_write.label_name,
        'box_write-label_email' : checkFailTranslateLanguage(language.box_write.label_email) ? getLabelByLang('label_email') : language.box_write.label_email,
        'box_write-label_text_area' : checkFailTranslateLanguage(language.box_write.label_text_area) ? getLabelByLang('label_text_area') : language.box_write.label_text_area,
        'box_write-field_required' : getLabelByLang('field_required'),
        'box_write-email_invalid' : getLabelByLang('email_invalid'),
        'box_write-input_photo' : checkFailTranslateLanguage(language.box_write.input_photo) ? 'Add photos' : language.box_write.input_photo,
        'box_write-button_write' : checkFailTranslateLanguage(language.box_write.button_write) ? 'Submit' : language.box_write.button_write,
        'box_write-message_error_character' : checkFailTranslateLanguage(language.box_write.message_error_character) ? `Please replace the '<,>' character with the equivalent character` : language.box_write.message_error_character,
        'box_write-message_error_file_upload' : checkFailTranslateLanguage(language.box_write.message_error_file_upload) ? 'Please upload a file smaller than 4MB.' : language.box_write.message_error_file_upload,
        'box_write-message_error_video_upload' : checkFailTranslateLanguage(language.box_write.message_error_video_upload) ? 'Your video exceeded 50MB or you reached the quantity limit for this review' : language.box_write.message_error_video_upload,
        'box_write-message_error_type_media_upload' : checkFailTranslateLanguage(language.box_write.message_error_type_media_upload) ? 'Not support this file.' : language.box_write.message_error_type_media_upload,
        'box_write-message_success' : checkFailTranslateLanguage(language.box_write.message_success) ? 'Thank you!' : language.box_write.message_success,
        'box_write-message_fail' : checkFailTranslateLanguage(language.box_write.message_fail) ? 'Fail!' : language.box_write.message_fail,
        'box_write-purchase_to_leave_reviews' : checkFailTranslateLanguage(language.box_write.purchase_to_leave_reviews) ? 'Please make a purchase by this email address to leave us reviews.' : language.box_write.purchase_to_leave_reviews,
        'box_write-log_in_to_leave_reviews' : checkFailTranslateLanguage(language.box_write.log_in_to_leave_reviews) ? 'Please login to an account to leave us reviews.' : language.box_write.log_in_to_leave_reviews,
        'box_write-purchase_to_a_specific_product' : checkFailTranslateLanguage(language.box_write.purchase_to_a_specific_product) ? 'Please make a purchase for this product by this email address to leave us reviews.' : language.box_write.purchase_to_a_specific_product,
        'reviews_list-reply' : checkFailTranslateLanguage(language.reviews_list.reply) ? ' Shop owner replied: ' : language.reviews_list.reply,
        'reviews_load_more' : checkFailTranslateLanguage(language.reviews_list.read_more) ? ' Read more' : language.reviews_list.read_more,
        'reviews_purchased' : checkFailTranslateLanguage(language.reviews_list.purchased) ? 'Purchased' : language.reviews_list.purchased,
        'reviews_helpful' : checkFailTranslateLanguage(language.reviews_list.helpful) ? ' Helpful?' : language.reviews_list.helpful,
        'reviews_list-view_product' : checkFailTranslateLanguage(language.reviews_list.view_product) ? ' See product' : language.reviews_list.view_product,
        'reviews_list-button_load_more' : checkFailTranslateLanguage(language.reviews_list.button_load_more) ? 'Load more' : language.reviews_list.button_load_more,
        'sort_box-reviews' : !language.sort_box || checkFailTranslateLanguage(language.sort_box.reviews) ? 'Sort reviews' : language.sort_box.reviews,
        'sort_box-content' : !language.sort_box || checkFailTranslateLanguage(language.sort_box.content) ? 'Sort by content' : language.sort_box.content,
        'sort_box-pictures' : !language.sort_box || checkFailTranslateLanguage(language.sort_box.pictures) ? 'Sort by photo' : language.sort_box.pictures,
        'sort_box-date' : !language.sort_box || checkFailTranslateLanguage(language.sort_box.date) ? 'Sort by date' : language.sort_box.date,
        'sort_box-rating' : !language.sort_box || checkFailTranslateLanguage(language.sort_box.rating) ? 'Sort by rate' : language.sort_box.rating,
        'empty_page-title' : !language.empty_page || checkFailTranslateLanguage(language.empty_page.title) ? 'Customer reviews' : language.empty_page.title,
        'empty_page-des' : !language.empty_page || checkFailTranslateLanguage(language.empty_page.des) ? 'This product has no review. Be the first one to review it' : language.empty_page.des,
        'thank_you-title' : !language.thank_you || checkFailTranslateLanguage(language.thank_you.title) ? 'Your review has been submitted!' : language.thank_you.title,
        'thank_you-des' : !language.thank_you || checkFailTranslateLanguage(language.thank_you.des) ? 'This message will automatically close in a few seconds.' : language.thank_you.des,
        'discount-title' : !language.discount || checkFailTranslateLanguage(language.discount.title) ? 'Use the following discount code for {{discount_value}} off your next purchase' : language.discount.title,
        'discount-des' : !language.discount || checkFailTranslateLanguage(language.discount.des) ? `We'll also send it by email` : language.discount.des,
        'discount-coupon_waiting_message' : !language.discount || checkFailTranslateLanguage(language.discount.coupon_waiting_message) ? `Thank you for reviewing our product. The discount code will be sent to your email once the review is approved.` : language.discount.coupon_waiting_message,
        'discount-action' : !language.discount || checkFailTranslateLanguage(language.discount.action) ? 'Continue' : language.discount.action,
        'discount-badge' : !language.discount || checkFailTranslateLanguage(language.discount.badge) ? 'Get {{discount_value}} off' : language.discount.badge,
        'discount-photo' : !language.discount || checkFailTranslateLanguage(language.discount.photo) ? 'Upload photo reviews to get {{discount_value}} off discount instantly!' : language.discount.photo,
        'qaAnswerField':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaAnswerField)
            ? 'Your answer'
            : language.qa.qaAnswerField,
        'qaQuestionField':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaQuestionField)
            ? 'Your question'
            : language.qa.qaQuestionField,
        'qaTitle':
          !language.qa || checkFailTranslateLanguage(language.qa.qaTitle)
            ? 'Questions'
            : language.qa.qaTitle,
        'qaFormTitle':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaFormTitle)
            ? 'Ask a question'
            : language.qa.qaFormTitle,
        'qaQuestionTitle':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaQuestionTitle)
            ? 'Questions:'
            : language.qa.qaQuestionTitle,
        'qaAnswerTitle':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaAnswerTitle)
            ? 'Answer:'
            : language.qa.qaAnswerTitle,
        'qaStoreOwnerBadge':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaStoreOwnerBadge)
            ? 'Store owner'
            : language.qa.qaStoreOwnerBadge,
        'qaPastBuyerBadge':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaPastBuyerBadge)
            ? 'Past customer'
            : language.qa.qaPastBuyerBadge,
        'qaSuccessMessage':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaSuccessMessage)
            ? 'Thank you!'
            : language.qa.qaSuccessMessage,
        'qaFailMessage':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaFailMessage)
            ? 'Submitted unsuccessfully!'
            : language.qa.qaFailMessage,
        'qaAskQuestionBtn':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaAskQuestionBtn)
            ? 'Ask a question'
            : language.qa.qaAskQuestionBtn,
        'qaSubmitQuestionBtn':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaSubmitQuestionBtn)
            ? 'Submit question'
            : language.qa.qaSubmitQuestionBtn,
        'qaSubmitAnswerBtn':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaSubmitAnswerBtn)
            ? 'Submit answer'
            : language.qa.qaSubmitAnswerBtn,
        'qaReplyBtn':
          !language.qa || checkFailTranslateLanguage(language.qa.qaReplyBtn)
            ? 'Reply'
            : language.qa.qaReplyBtn,
        'qaLoadMoreAnswerBtn':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaLoadMoreAnswerBtn)
            ? 'See more answers'
            : language.qa.qaLoadMoreAnswerBtn
      }
    }
    let languageJson = getLanguage(language);
    function getLanguageByKey(key){
      return htmlDecode(languageJson[key]);
    };
    return {
      languageJson,
      language,
      getLanguageByKey
    }
  })(language);
  !function(t){Array.prototype.chunk=function(t){return this.length?[this.slice(0,t)].concat(this.slice(t).chunk(t)):[]},t.fn.laiPaginate=function(e){let a={itemsPerPage:10,currentPage:1,allData:[],currentPageData:[],nextBtnText:">",prevBtnText:"<",callback:function(t){},dataContainer:"",pageRange:1,ellipsis:"...",...e,container:this,get dataChunk(){const{allData:t,itemsPerPage:e}=this;return t.chunk(e)},get maxPage(){return this.dataChunk.length},get currentPageData(){return void 0!==e.currentPageData?e.currentPageData:this.dataChunk[this.currentPage-1]},get rangeStart(){let t=this.currentPage-this.pageRange;return t<1?1:t},get rangeEnd(){let t=this.currentPage+this.pageRange;return t>this.maxPage?this.maxPage:t},initialize:function(){let e=this;e.renderPaginate(!0),t(document).on("click",".paginate_item:not(.paginate_ellipsis)",(function(){if(t(this).hasClass("next"))return e.next();if(t(this).hasClass("prev"))return e.prev();let a=t(this).data("page");return e.setCurrentpage(a)}))},renderPaginate:function(e=!1){const{currentPage:a,maxPage:n,nextBtnText:s,prevBtnText:r,container:g}=this;let l=["<ul>"];if(n<=1?t(g).addClass("no-page"):t(g).removeClass("no-page"),1!==a&&l.push(`<li class="paginate_item prev">${r}</li>`),this.rangeStart<=this.pageRange+1)for(let t=1;t<this.rangeStart;t++)l.push(`<li class="paginate_item ${this.currentPage===t?"active":""}" data-page="${t}">${t}</li>`);else l.push('<li class="paginate_item" data-page="1">1</li>'),l.push(`<li class="paginate_item paginate_ellipsis">${this.ellipsis}</li>`);for(let t=this.rangeStart;t<=this.rangeEnd;t++)l.push(`<li class="paginate_item ${this.currentPage===t?"active":""}" data-page="${t}">${t}</li>`);if(this.rangeEnd>=n-this.pageRange)for(i=this.rangeEnd+1;i<=n;i++)l.push(`<li class="paginate_item ${this.currentPage===i?"active":""}" data-page="${i}">${i}</li>`);else l.push(`<li class="paginate_item paginate_ellipsis">${this.ellipsis}</li>`),l.push(`<li class="paginate_item" data-page="${this.maxPage}">${this.maxPage}</li>`);a!==n&&l.push(`<li class="paginate_item next">${s}</li>`),l.push("</ul>"),t(g).html(l.join("")),e||this.callback(this)},setCurrentpage:function(t,e=!1){this.currentPage=t,this.renderPaginate(e)},next:function(){return this.setCurrentpage(this.currentPage+1)},prev:function(){return this.setCurrentpage(this.currentPage-1)},goTo:function(t,e=!1){return this.setCurrentpage(t,e)},setAllData:function(t,e=null){this.allData=t,e&&(this.itemsPerPage=e),this.goTo(1,!0)},callHook:function(t,...e){void 0!==this[t]&&this[t].apply(this,e)}};return a.initialize(),a}}(jQuery);
  var helper = (function($) {
    let checkSetting = function(strText) {
      if (typeof (strText) == "undefined" || strText == 'undefined') {
        return false;
      }
      return true;
    };
    let actionLazyLoad= ($elm,configMasonry='') => {
      $('.smaLazyLoad').each(function(index, value) {
        let $this= $(this);
        $this.attr('src',$this.attr('data-src'));
        $this.removeClass('smaLazyLoad');
      });
      if(settingApp.body_layout == 'grid'){
        $elm.imagesLoaded(function () {
          if(configMasonry){
            $elm.masonry(configMasonry);
          }
          helper.changeHeight();
        });
      }
      else{
        $elm.imagesLoaded(function () {
          helper.changeHeight();
        });
      }
    }
    let loadLazyLoadImage= function ($elm,configMasonry=''){
      setTimeout(function (){
        actionLazyLoad($elm,configMasonry);
      },100);
    };
    let checkAndCallLazyLoad= function($elm, configMasonry){
      if(!$("body").hasClass('lazyLoadDone')){
        setTimeout(function (){
          actionLazyLoad($elm,configMasonry);
        },100);
        setTimeout(function (){
          actionLazyLoad($elm,configMasonry);
        },1000);
        $("body").addClass('lazyLoadDone');
      }
    }
    let loadLazyLoadImageOnload= function ($elm,configMasonry=''){
      if(!$("body").hasClass('lazyLoadDone')){
        if(settingApp.lazyLoad){
          let positionFirstIframe= $(".scm-reviews-importer",parent.document).offset().top;
          if(positionFirstIframe < 500){
            setTimeout(function (){
              checkAndCallLazyLoad($elm, configMasonry);
            },100);
          }
        }else{
          if(settingApp.rejectLazyLoad){
            checkAndCallLazyLoad($elm, configMasonry);
          }else{
            setTimeout(function (){
              checkAndCallLazyLoad($elm, configMasonry);
            },100);
          }
        }
        if(settingApp.preview){
          setTimeout(function (){
            checkAndCallLazyLoad($elm, configMasonry);
          },100);
        }
        $(window.parent).scroll(function(){
          let heightDefault = 800;
          let $itemChoose= $(".scm-reviews-importer",parent.document).first();
          let topOffset= $itemChoose.offset().top;
          let scrollTopOffset=  $(this).scrollTop();
          if(topOffset < heightDefault) {
            checkAndCallLazyLoad($elm, configMasonry);
          }else{
            if((topOffset - 600) < scrollTopOffset) {
              checkAndCallLazyLoad($elm, configMasonry);
            }
          }
        });
      }
    };
    let iconScm= {
      'play_svg' : `<svg version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
	<g transform="translate(128 128) scale(0.72 0.72)" style="">
	<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
	<path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 62.251 46.633 L 37.789 60.756 c -1.258 0.726 -2.829 -0.181 -2.829 -1.633 V 30.877 c 0 -1.452 1.572 -2.36 2.829 -1.634 l 24.461 14.123 C 63.508 44.092 63.508 45.907 62.251 46.633 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	</g>
	</g>
	</svg>
			`,
      'video_svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2578 1.52812L15.2859 7.5H10.9659L16.9659 1.5H21C21.0616 1.5 21.121 1.50876 21.1798 1.51742C21.2059 1.52127 21.2318 1.52509 21.2578 1.52812ZM9.46406 1.5H13.7859L7.78594 7.5H3.46406L9.46406 1.5ZM18.4641 7.5L23.3297 2.63391C23.7422 3.14766 24 3.79078 24 4.5V7.5H18.4641ZM3 1.5H6.28594L0.284156 7.5H0V4.5C0 2.84297 1.34297 1.5 3 1.5ZM3 22.5C1.34297 22.5 0 21.157 0 19.5V9H24V19.5C24 21.157 22.657 22.5 21 22.5H3ZM9.45 11.8205V15.15V18.4795C9.45 18.8654 9.8686 19.1058 10.2019 18.9114L13.05 17.25L15.9096 15.5819C16.2404 15.389 16.2404 14.9111 15.9096 14.7181L13.05 13.05L10.2019 11.3886C9.8686 11.1942 9.45 11.4346 9.45 11.8205Z" fill="#121212"/>
			</svg>`,
      'chev_down': `<svg xmlns="http://www.w3.org/2000/svg" width="10.828" height="6.414" viewBox="0 0 10.828 6.414">
				<path id="chevron-down" d="M6,9l4,4,4-4" transform="translate(-4.586 -7.586)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
			</svg>`,
      'tag_svg': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
				<path id="tags-solid" d="M15.561,7.061,8.939.439A1.5,1.5,0,0,0,7.879,0H1.5A1.5,1.5,0,0,0,0,1.5V7.879A1.5,1.5,0,0,0,.439,8.939l6.621,6.621a1.5,1.5,0,0,0,2.121,0l6.379-6.379A1.5,1.5,0,0,0,15.561,7.061ZM3.5,5A1.5,1.5,0,1,1,5,3.5,1.5,1.5,0,0,1,3.5,5ZM19.561,9.182l-6.379,6.379a1.5,1.5,0,0,1-2.121,0l-.011-.011,5.439-5.439a2.813,2.813,0,0,0,0-3.978L10.356,0h1.523a1.5,1.5,0,0,1,1.061.439l6.621,6.621a1.5,1.5,0,0,1,0,2.121Z"/>
			</svg>`,
      'exit_svg' : `<svg aria-hidden="true" viewBox="0 0 22.88 22.88" style="enable-background:new 0 0 22.88 22.88;">
						<path d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539 l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539 c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0 c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"></path>
					</svg>`,
      'download_svg' : `<svg viewBox="0 0 512 512">
						<path d="M472,312.642v139c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20v-139H0v139c0,33.084,26.916,60,60,60h392 c33.084,0,60-26.916,60-60v-139H472z"></path>
						<polygon points="256,0.358 131.716,124.642 160,152.926 236,76.926 236,388.642 276,388.642 276,76.926 352,152.926  380.284,124.642 "></polygon>
					</svg>`,
      'photo_svg_plus': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
					<path id="image-plus" d="M27.6,13.68v8.16l-2.4-2.4c-1.76-1.6-6.24,0-6.24,0l-1.12,1.12-4-4a4.656,4.656,0,0,0-6.24,0l-2.4,2.4V10A1.512,1.512,0,0,1,6.8,8.4H22.32a3.736,3.736,0,0,1,0-3.2H6.8A4.714,4.714,0,0,0,2,10V29.2A4.714,4.714,0,0,0,6.8,34H26a4.714,4.714,0,0,0,4.8-4.8V13.68a5.685,5.685,0,0,1-1.6.32A5.685,5.685,0,0,1,27.6,13.68ZM32.4,5.2H30.8V3.6a1.6,1.6,0,1,0-3.2,0V5.2H26a1.512,1.512,0,0,0-1.6,1.6A1.512,1.512,0,0,0,26,8.4h1.6V10a1.6,1.6,0,1,0,3.2,0V8.4h1.6A1.512,1.512,0,0,0,34,6.8,1.512,1.512,0,0,0,32.4,5.2Z" transform="translate(-2 -2)" fill="#949494"/>
				</svg>`,
      'photo_svg' : `<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	width="550.801px" height="550.8px" viewBox="0 0 550.801 550.8"
	xml:space="preserve">
	<path d="M515.828,61.201H34.972C15.659,61.201,0,76.859,0,96.172v358.458C0,473.942,15.659,489.6,34.972,489.6h480.856 c19.314,0,34.973-15.658,34.973-34.971V96.172C550.801,76.859,535.143,61.201,515.828,61.201z M515.828,96.172V350.51l-68.92-62.66 c-10.359-9.416-26.289-9.04-36.186,0.866l-69.752,69.741L203.438,194.179c-10.396-12.415-29.438-12.537-39.99-0.271L34.972,343.219 V96.172H515.828z M367.201,187.972c0-26.561,21.523-48.086,48.084-48.086c26.562,0,48.086,21.525,48.086,48.086 c0,26.561-21.523,48.085-48.086,48.085C388.725,236.058,367.201,214.533,367.201,187.972z"/>
	</svg>
	`,
      'bag_icon' : `
				<svg class="shopping-bag_dc" viewBox="0 0 15 17.331">
				<path id="shopping-bag_dc" d="M 14.99671649932861 16.76165390014648 L 13.67949867248535 4.217944145202637 C 13.65186309814453 3.955346345901489 13.43052005767822 3.755954265594482 13.16646480560303 3.755954265594482 L 10.69069957733154 3.755954265594482 L 10.69069957733154 3.191487550735474 C 10.69069957733154 1.431978821754456 9.25910758972168 0.0003890990628860891 7.499600410461426 0.0003890990628860891 C 5.739959716796875 0.0003890990628860891 4.308370590209961 1.431982040405273 4.308370590209961 3.191487550735474 L 4.308370590209961 3.755953788757324 L 1.832604289054871 3.755953788757324 C 1.568552374839783 3.755953788757324 1.347210645675659 3.955348014831543 1.319572567939758 4.217943668365479 L 0.002353242132812738 16.76165390014648 C -0.01285255327820778 16.90696716308594 0.03435152769088745 17.05201721191406 0.1320651918649673 17.16070747375488 C 0.2299113273620605 17.26926422119141 0.3692754209041595 17.33127593994141 0.5153826475143433 17.33127593994141 L 14.48354434967041 17.33127593994141 C 14.62978553771973 17.33127593994141 14.76914978027344 17.26926422119141 14.86686229705811 17.16070747375488 C 14.96483993530273 17.05201721191406 15.01191139221191 16.90696716308594 14.99670696258545 16.76165390014648 Z M 5.339988231658936 3.191494464874268 C 5.339988231658936 2.00081467628479 6.308795928955078 1.032007217407227 7.499607563018799 1.032007217407227 C 8.690286636352539 1.032007217407227 9.65909481048584 2.000814437866211 9.65909481048584 3.191494464874268 L 9.65909481048584 3.755959749221802 L 5.339978218078613 3.755959749221802 L 5.339988231658936 3.191494464874268 Z M 1.088198184967041 16.2996768951416 L 2.297123193740845 4.787561893463135 L 4.308387756347656 4.787561893463135 L 4.308387756347656 5.924293041229248 C 4.308387756347656 6.209104061126709 4.539383411407471 6.440100193023682 4.82419490814209 6.440100193023682 C 5.109006404876709 6.440100193023682 5.340002059936523 6.209105014801025 5.340002059936523 5.924293041229248 L 5.340002059936523 4.787561893463135 L 9.659119606018066 4.787561893463135 L 9.659119606018066 5.924293041229248 C 9.659119606018066 6.209104061126709 9.890114784240723 6.440100193023682 10.17492580413818 6.440100193023682 C 10.45973682403564 6.440100193023682 10.69073390960693 6.209105014801025 10.69073390960693 5.924293041229248 L 10.69073390960693 4.787561893463135 L 12.70199871063232 4.787561893463135 L 13.91092395782471 16.2996768951416 L 1.088198184967041 16.2996768951416 Z M 1.088198184967041 16.2996768951416">
				</path>
				</svg>
			`,
      'discount': `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M1.47715 5.81C0.931707 5.81 0.50149 5.36889 0.517394 4.8479C0.546722 3.88719 0.62418 3.2991 0.801844 2.8218C1.13251 1.93344 1.58976 1.40982 2.28614 1.01949C2.89479 0.678332 3.83345 0.5 5.70395 0.5H8.29605C10.1666 0.5 11.1052 0.678332 11.7139 1.01949C12.4102 1.40982 12.8675 1.93344 13.1982 2.8218C13.3758 3.2991 13.4533 3.88719 13.4826 4.8479C13.4985 5.36888 13.0683 5.81 12.5228 5.81C11.7737 5.81 11.3308 6.51458 11.3308 7.15921C11.3308 7.80384 11.7737 8.50843 12.5228 8.50843C13.0698 8.50843 13.4945 8.95027 13.4709 9.46127C13.4347 10.2447 13.3553 10.7561 13.1982 11.1782C12.8675 12.0666 12.4102 12.5902 11.7139 12.9805C11.1052 13.3217 10.1666 13.5 8.29605 13.5H5.70395C3.83345 13.5 2.89479 13.3217 2.28614 12.9805C1.58976 12.5902 1.13251 12.0666 0.801844 11.1782C0.644744 10.7561 0.565269 10.2447 0.529106 9.46126C0.50552 8.95027 0.930194 8.50843 1.47715 8.50843C2.22628 8.50843 2.66918 7.80384 2.66918 7.15921C2.66918 6.51458 2.22628 5.81 1.47715 5.81Z" stroke="#212135"/>
	<path d="M8.75 5.25L5.25 8.75M5.25 5.25V5.83333M8.75 8.16667V8.75" stroke="#212135" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	`,
      'testimonial_svg' : `<svg  viewBox="0 0 42 32">
				<path d="M3.72868 29.2415C1.30256 26.6819 0 23.8111 0 19.1574C0 10.9685 5.78734 3.62887 14.2034 0L16.3068 3.2241C8.45135 7.44491 6.9156 12.9221 6.30318 16.3755C7.56806 15.7251 9.22394 15.4981 10.8468 15.6479C15.0961 16.0386 18.4455 19.5037 18.4455 23.8111C18.4455 25.9829 17.5769 28.0658 16.0309 29.6015C14.4848 31.1372 12.3879 32 10.2014 32C7.67405 32 5.25736 30.8535 3.72868 29.2415ZM27.2832 29.2415C24.857 26.6819 23.5545 23.8111 23.5545 19.1574C23.5545 10.9685 29.3418 3.62887 37.7578 0L39.8613 3.2241C32.0058 7.44491 30.4701 12.9221 29.8577 16.3755C31.1225 15.7251 32.7784 15.4981 34.4013 15.6479C38.6506 16.0386 42 19.5037 42 23.8111C42 25.9829 41.1314 28.0658 39.5854 29.6015C38.0393 31.1372 35.9424 32 33.7559 32C31.2285 32 28.8118 30.8535 27.2832 29.2415Z" fill="#0560D6"/>
				</svg>
				`
    };
    let iconStar= {
      'star' : {
        'rating': `<svg class="Path_1_" viewBox="0 11.796 15.128 14.431">
											<path id="Path_1_" d="M 15.10665130615234 17.27590179443359 C 15.05453205108643 17.11542510986328 14.91586685180664 16.99847793579102 14.74892520904541 16.97425079345703 L 10.05909633636475 16.29273986816406 L 7.961684226989746 12.04304504394531 C 7.88704776763916 11.89176177978516 7.732958793640137 11.79600048065186 7.564273357391357 11.79600048065186 C 7.395556449890137 11.79600048065186 7.241498470306396 11.89176177978516 7.16683292388916 12.04304504394531 L 5.069331645965576 16.29273986816406 L 0.3795907497406006 16.97425079345703 C 0.2126783281564713 16.99847793579102 0.07395394891500473 17.11542510986328 0.02183260396122932 17.2758674621582 C -0.03031831048429012 17.43634033203125 0.01317525468766689 17.61246871948242 0.133993998169899 17.73021697998047 L 3.527437686920166 21.03815460205078 L 2.726470708847046 25.70907592773438 C 2.697927951812744 25.87537002563477 2.766300439834595 26.04337692260742 2.902779340744019 26.14256286621094 C 2.979986429214478 26.19864654541016 3.07143497467041 26.22718811035156 3.163326740264893 26.22718811035156 C 3.233885526657104 26.22718811035156 3.304681062698364 26.21037673950195 3.369507789611816 26.17627716064453 L 7.564243793487549 23.97093200683594 L 11.75880241394043 26.17624664306641 C 11.90816497802734 26.25475311279297 12.08908271789551 26.24169540405273 12.22556018829346 26.14253616333008 C 12.36203765869141 26.04337692260742 12.43044185638428 25.87530899047852 12.40192794799805 25.70901489257813 L 11.60069465637207 21.03815841674805 L 14.99452018737793 17.73019027709961 C 15.11531257629395 17.61246871948242 15.15883350372314 17.43634033203125 15.10665130615234 17.27590179443359 Z">
											</path>
										</svg>
							`,
        'none': `<svg class="Path_1_ svg_none" viewBox="0 11.796 15.128 14.431">
											<path id="Path_1_" d="M 15.10665130615234 17.27590179443359 C 15.05453205108643 17.11542510986328 14.91586685180664 16.99847793579102 14.74892520904541 16.97425079345703 L 10.05909633636475 16.29273986816406 L 7.961684226989746 12.04304504394531 C 7.88704776763916 11.89176177978516 7.732958793640137 11.79600048065186 7.564273357391357 11.79600048065186 C 7.395556449890137 11.79600048065186 7.241498470306396 11.89176177978516 7.16683292388916 12.04304504394531 L 5.069331645965576 16.29273986816406 L 0.3795907497406006 16.97425079345703 C 0.2126783281564713 16.99847793579102 0.07395394891500473 17.11542510986328 0.02183260396122932 17.2758674621582 C -0.03031831048429012 17.43634033203125 0.01317525468766689 17.61246871948242 0.133993998169899 17.73021697998047 L 3.527437686920166 21.03815460205078 L 2.726470708847046 25.70907592773438 C 2.697927951812744 25.87537002563477 2.766300439834595 26.04337692260742 2.902779340744019 26.14256286621094 C 2.979986429214478 26.19864654541016 3.07143497467041 26.22718811035156 3.163326740264893 26.22718811035156 C 3.233885526657104 26.22718811035156 3.304681062698364 26.21037673950195 3.369507789611816 26.17627716064453 L 7.564243793487549 23.97093200683594 L 11.75880241394043 26.17624664306641 C 11.90816497802734 26.25475311279297 12.08908271789551 26.24169540405273 12.22556018829346 26.14253616333008 C 12.36203765869141 26.04337692260742 12.43044185638428 25.87530899047852 12.40192794799805 25.70901489257813 L 11.60069465637207 21.03815841674805 L 14.99452018737793 17.73019027709961 C 15.11531257629395 17.61246871948242 15.15883350372314 17.43634033203125 15.10665130615234 17.27590179443359 Z">
											</path>
									</svg> `,
        'none_special' : `<svg class="svg_none" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.9259 7.72832L8.446 7.65245L8.67845 7.18104L11.6065 1.24292C11.6066 1.24272 11.6067 1.24252 11.6068 1.24231C11.643 1.16964 11.6987 1.10846 11.7677 1.06566C11.8369 1.02274 11.9166 1 11.9981 1C12.0795 1 12.1593 1.02274 12.2284 1.06566C12.2975 1.10848 12.3532 1.16969 12.3893 1.24241C12.3894 1.24258 12.3895 1.24275 12.3896 1.24292L15.3188 7.18022L15.5512 7.65147L16.0712 7.72732L22.6244 8.6832C22.6245 8.68322 22.6246 8.68323 22.6247 8.68325C22.7051 8.69509 22.7805 8.72913 22.8425 8.78152C22.9046 8.83399 22.9508 8.90278 22.9759 8.98011C23.0009 9.05745 23.0039 9.14026 22.9844 9.21919C22.9649 9.29811 22.9237 9.37001 22.8655 9.42677L18.1237 14.0476L17.747 14.4147L17.836 14.9331L18.9565 21.4574C18.9566 21.4577 18.9566 21.458 18.9567 21.4582C18.97 21.538 18.9609 21.6199 18.9303 21.6949C18.8996 21.77 18.8486 21.8351 18.7829 21.8828C18.7173 21.9305 18.6396 21.959 18.5586 21.9649C18.478 21.9708 18.3973 21.9542 18.3255 21.9169C18.3253 21.9168 18.325 21.9167 18.3247 21.9165L12.4639 18.8356L11.9985 18.591L11.5331 18.8357L5.67117 21.9182C5.67105 21.9182 5.67094 21.9183 5.67082 21.9183C5.59909 21.9559 5.51831 21.9726 5.43757 21.9668C5.35669 21.9609 5.27907 21.9325 5.21346 21.8848C5.14786 21.8372 5.09689 21.7721 5.0663 21.697C5.03578 21.6221 5.02676 21.5401 5.04025 21.4604C5.04028 21.4602 5.04031 21.46 5.04034 21.4598L6.16113 14.9341L6.25016 14.4157L5.87347 14.0486L1.13164 9.42777C1.07342 9.37101 1.03224 9.29911 1.01273 9.22019C0.993229 9.14126 0.99618 9.05845 1.02125 8.98111C1.04633 8.90378 1.09252 8.83499 1.15463 8.78252C1.21665 8.73013 1.29207 8.69609 1.37238 8.68425C1.37249 8.68423 1.3726 8.68421 1.37271 8.6842L7.9259 7.72832Z" stroke-width="2"></path>
					</svg> `,
      },
      'heart' : {
        'rating': `<svg  viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
							`,
        'none': `<svg class="svg_none" viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>`
      },
      'like' : {
        'rating': `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/> </g> </g> <g> <g> <path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
							`,
        'none': `<svg class="svg_none" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/> </g> </g> <g> <g> <path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`
      },
      'smile' : {
        'rating': `<svg  enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm93.737 260.188c-9.319-5.931-21.681-3.184-27.61 6.136-.247.387-25.137 38.737-67.127 38.737s-66.88-38.35-67.127-38.737c-5.93-9.319-18.291-12.066-27.61-6.136s-12.066 18.292-6.136 27.61c1.488 2.338 37.172 57.263 100.873 57.263s99.385-54.924 100.873-57.263c5.93-9.319 3.183-21.68-6.136-27.61zm-181.737-135.188c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"/></svg>
							`,
        'none': `<svg class="svg_none" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm93.737 260.188c-9.319-5.931-21.681-3.184-27.61 6.136-.247.387-25.137 38.737-67.127 38.737s-66.88-38.35-67.127-38.737c-5.93-9.319-18.291-12.066-27.61-6.136s-12.066 18.292-6.136 27.61c1.488 2.338 37.172 57.263 100.873 57.263s99.385-54.924 100.873-57.263c5.93-9.319 3.183-21.68-6.136-27.61zm-181.737-135.188c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"/></svg>`
      }
    };
    function htmlLoader($elm){
      let html=  `
					<div class="loader">

					</div>
			`;
      $elm.html(html);
    };
    function popupReviews() {
      /* show popup */
      if(getUrlParameter('review')){
        let html=`
					<div class="content-popup">
						<button class="button-remove"><i class="fa fa-times" aria-hidden="true"></i></button>
						<div class="content">
								<div class="left">
										<img src="https://cdn.laireviews.com/img/love.png" />
								</div>
								<div class="right">
										<h2>
												Has the review section appeared on your store?
										</h2>
										<base target="_parent"></base>
								</div>
						</div>
						<div class="group-button">
								<button id="ok-reviews">YES</button>
								<button id="fail-reviews">NO</button>
						</div>
					</div>
					<p id="content-ok" style="display: none;">Cool! We'd greatly appreciate if you can rate us <a href="https://apps.shopify.com/smart-aliexpress-reviews#reviews" target=_blank rel="nofollow">here</a>!
					</p>
					<p id="content-fail" style="display: none;">Got problem? Please contact our support team at <b>support@smartifyapps.com</b></p>`;
        $(".popup-review").append(html);
        $(".popup-review").css('display','block');
        $("#ok-reviews").on('click',function() {
          $("#content-ok").fadeIn("slow",function() {
            $("#fail-reviews").fadeOut("slow");
            helper.changeHeight();
          })
        });
        $("#fail-reviews").on('click',function() {
          $("#content-fail").fadeIn("slow",function() {
            $("#ok-reviews").fadeOut("slow");
            helper.changeHeight();
          })
        });
        $(".popup-review .button-remove").on('click',function() {
          $(".popup-review").fadeOut( "slow", function() {
            helper.changeHeight();
          });
        });
      }
    };
    function getUrlParameter(sParam) {
      let sPageURL = parent.window.location.search.substring(1);
      let sURLVariables= sPageURL.split('&');
      let sParameterName;
      let i;
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(reFixParamUrlFromMail(sParameterName[1]));
        }
      }
    };
    function createFontGoogle() {
      let font = getFontConfig();
      WebFont.load({
        google: {
          families: [font+'&display=swap'],

        },
        active: () => {
          sessionStorage.fontsLoaded = true
        }
      });
    };

    function loadScript(url, callback) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      if (script.readyState) {  // IE
        script.onreadystatechange = function() {
          if (script.readyState == 'loaded' || script.readyState == 'complete') {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {  // Others
        script.onreadystatechange = callback;
        script.onload = callback;
      }
      script.onerror= callback;
      script.src = url;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(script, x);
    };
    function loadLinkCss(url) {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';
      head.appendChild(link);
    }
    function loadFontGoogle() {
      if(settingApp.use_google_font){
        loadScript('https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js', createFontGoogle);
      }
    };

    function getFontConfig() {
      return settingApp.font ? settingApp.font : 'Hind Siliguri';
    };

    function addStyleOnHead() {
      let styleStar = '';
      let font = getFontConfig();
      switch (settingApp.starStyle) {
        case 'heart':
          styleStar = 'f004';
          break;
        case 'like':
          styleStar = 'f164';
          break;
        case 'smile':
          styleStar = 'f118';
          break;
        default:
          styleStar = 'f005';
      };
      let styleConfig = `<style>
							body {
								--main-color: ${settingApp.mainColor};
								--star-color: ${settingApp.starColor};
								--vote-color: ${settingApp.voteColor};
								--text-textPrimary: ${settingApp.textPrimary};
								--text-textSecondary: ${settingApp.textSecondary};
								--avgRatingColor: ${settingApp.header_avgRatingColor};
								--writeReviewBtnColor: ${settingApp.header_writeReviewBtnColor};
								--writeReviewBtnColorOpacity: ${hexToRGB(settingApp.header_writeReviewBtnColor)};
								--writeReviewBtnTextColor: ${settingApp.header_writeReviewBtnTextColor};
								--submitBtnColor: ${settingApp.header_submitBtnColor};
								--submitBtnColorOpacity: ${hexToRGB(settingApp.header_submitBtnColor, 0.2)};
								--submitBtnTextColor: ${settingApp.header_submitBtnTextColor};
								--verifyBadgeColor: ${settingApp.body_verifyBadgeColor};
								--bgReview: ${settingApp.body_bgReview};
								--qaAnswerCardBgColor: ${settingApp.qaAnswerCardBgColor};
								--qaAnswerCardLeftBorderColor: ${settingApp.qaAnswerCardLeftBorderColor};
								--qaAnswerCardLeftBorderWidth: ${settingApp.qaAnswerCardLeftBorderWidth};
								--qaPastBuyerBadgeColor: ${settingApp.qaPastBuyerBadgeColor};
								--qaStoreOwnerBadgeColor: ${settingApp.qaStoreOwnerBadgeColor};
							}
							.popup-write-review .scm-write-review,.scm-review-importer-popup{
									background: ${settingApp.reviewBg};
							}
							body,input,textarea,button{
									font-family: "${font}";
							}
							.fa-star:before {
									content: "\\${styleStar}";
							}
							/*.write-review-button .write-review-chevron {*/
							/*		transition: transform 0.2s ease;*/
							/*		fill: var(--writeReviewBtnTextColor) !important;*/
							/*}*/
							/*.write-review-button[aria-expanded="true"] .write-review-chevron {*/
							/*		transform: rotate(180deg);*/
							/*}*/
							/*.write-review-button {*/
              /*    display: inline-flex;*/
              /*    align-items: center;*/
              /*    gap: 3px;*/
							/*}*/

							.scm-field-error {
									display: none;
									color: #e53e3e;
									font-size: 12px;
									margin-top: 4px;
							}
							.scm-input-error {
									border-color: #e53e3e !important;
							}
							label[for="scm-upload"] {
									cursor: pointer;
									outline: none;
							}
							label[for="scm-upload"]:hover {
									border-style: solid !important;
									border-color: #9ba3af !important;
							}
							.author-email {
							    text-align: start;
							}
							 #scm-form-review .scm-row:has(#scm-input-review) {
                  text-align: start;
              }
              .remove svg {
                  width: 15px !important;
                  height: 15px !important;
              }
					<\/style>`;
      $('head').append(styleConfig);
    };
    function b64DecodeUnicode(str) {
      return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    }
    function parseJsonFromMetaField(value) {
      if(value === '') {
        return '';
      }
      let valueDecode64= "";
      try {
        valueDecode64 = b64DecodeUnicode(value);
      }
      catch(error) {
        valueDecode64 = atob(value);
      }
      return JSON.parse(valueDecode64);
    };
    function hexToRGB(h,opacity= 0.1) {
      let r = 0, g = 0, b = 0;
      if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];
      } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }
      return "rgba("+ +r + "," + +g + "," + +b + ","+ opacity +")";
    }
    function getMonth(month) {
      let numberMonth = Number(month);
      let monthName = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
      ];
      return monthName[numberMonth];
    };

    function formatDate(value, format = '') {
      let date = new Date(value);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      let strTime = '';
      let character= '/';
      switch (format) {
        case 'dd-MM-yyyy':
          strTime = day + character + month + character + year;
          break;
        case 'MM-dd-yyyy':
          strTime = month + character + day + character + year;
          break;
        case 'yyyy-MM-dd':
          strTime = year + character + month + character + day;
          break;
        case 'MMM-dd-yyyy':
          strTime = getMonth(date.getMonth()) + character + day + character + year;
          break;
        case 'yyyy-MMM-dd':
          strTime = year + character + getMonth(date.getMonth()) + character + day;
          break;
        default:
          strTime = year + character + month + character + day;
      }
      return strTime;
    };

    function changeHeight(heightParam= null) {
      if(!changeHeightFirst && !heightParam){
        return false;
      }else{
        changeHeightFirst= true;
      }
      const height = $('body').height();
      const dataEventHeight = {
        type: 'changeHeight',
        height: height
      };
      parent.window.postMessage(dataEventHeight, '*');
    };
    function postMessageNoReviews(){
      const dataEventNoReviews = {
        type: 'noReviews'
      };
      parent.window.postMessage(dataEventNoReviews, '*');
    }
    function postMessageAfterAppendReviews(){
      const dataAppendReviews = {
        type: 'appendReviews'
      };
      parent.window.postMessage(dataAppendReviews, '*');
    }
    function addLoader() {
      $('.loader-load-more').addClass('loader');
      $('body').addClass('loader-working');
    };

    function removeLoader() {
      $('.loader-load-more').removeClass('loader');
      $('body').removeClass('loader-working');
    };
    function createButtonClosePopup() {
      return `<button class="scm-close-popup">${iconScm.exit_svg}
			</button>`;
    };
    function reFixParamUrlFromMail(value) {
      return value ? value.replace(/\+/g, ' ') : value;
    };

    function escapeString(value) {
      return value ? value.replace(/(<([^>]+)>)/ig, '') : value;
    };
    let truncateText= function(string, length= 40 ){
      if(string.length === 0)
        return '';
      if(string.length > length){
        string= string.substring(0,length);
        string= string + '...' + `<span class="read-more-button" role="button" tabindex="0" aria-label="${languageModule.getLanguageByKey('reviews_load_more')}">${languageModule.getLanguageByKey('reviews_load_more')}</span>`;
      }
      return string;
    };
    function checkEscapeString(value) {
      const patt = /(<([^>]+)>)/ig;
      return value ? patt.test(value) : value;
    };
    function apiRequest(url,data){
      fetch(
        url, {
          method: 'GET',
          mode: 'no-cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(data)
        }
      );
    };
    function getValueLoadPerPage (){
      if(settingApp.itemPerLoadLayout &&  settingApp.type != 'product'){
        return settingApp.itemPerLoadLayout;
      }
      return settingApp.type == 'product' ?  settingApp.itemPerLoad : 10;
    }
    function callChangePaginate(total, itemsPerPage = null){
      $(document).trigger('changePaginate', {
        total: parseFloat(total),
        itemsPerPage: itemsPerPage
      });
    }
    function checkLayoutCustomFull(){
      return settingApp.custom && !settingApp.customLayoutMain;
    }
    function checkLayoutCustom(){
      return settingApp.custom ;
    }
    function getCssIframeByFileName(fileName){
      let versionCss= 'css-version-14';
      return `${settingApp.cdn}/${versionCss}/assets/css/${fileName}.css?version=${settingApp.version}`;
    }

    function getLinkJsIframeByFileName(fileName){
      let minJs=settingApp.minJs ? '.min' : "";
      let versionJs= 'version-14';
      return `${settingApp.cdn}/js/frontend/${versionJs}/${fileName}${minJs}.js?version=${settingApp.version}`;
    }

    function getTotalQuestionsCount(qaData) {
      if (qaData === 'undefined' || qaData === 'null' || qaData === '') {
        return 0;
      }
      try {
        let qaDataObj = JSON.parse(qaData);
        if (qaDataObj.qaTotalQuestions) {
          return parseInt(qaDataObj.qaTotalQuestions);
        }
        return 0;
      } catch (e) {
        return 0;
      }
    }
    function callCheckErrorLoadImage(){
      $(".wrap-image img")
        .on( "error", function() {
          let $this= $(this);
          $this.addClass('error-img');
          $this.closest('.wrap-image').addClass('wrap-error-img');
          $('.wrap-error-img').remove();
        })
    }
    function getQADataObj(qaData) {
      if (qaData === 'undefined' || qaData === 'null' || qaData === '') {
        return {
          qaItems: [],
          qaTotalQuestions: 0
        };
      }
      try {
        let qaDataObj = JSON.parse(qaData);
        let qaItems = [];
        let qaTotalQuestions = 0;
        if (qaDataObj.qaTotalQuestions) {
          qaTotalQuestions = parseInt(qaDataObj.qaTotalQuestions);
        }
        if (qaDataObj.qaItems) {
          qaItems = parseJsonFromMetaField(qaDataObj.qaItems);
        }
        return {
          qaItems,
          qaTotalQuestions
        };
      } catch (e) {
        return {
          qaItems: [],
          qaTotalQuestions: 0
        };
      }
    }

    function getCustomFormData(customForms) {
      if (!(Array.isArray(customForms) && customForms.length > 0)) {
        return null;
      }
      const customForm = customForms[0];
      if (
        !customForm ||
        !customForm.enabled ||
        !customForm.questions ||
        !customForm.questions.length
      ) {
        return null;
      }
      return customForm;
    }

    function getCFAnswersDataForReview(
      customForm,
      cfAnswersDataFromReview
    ) {
      try {
        if (
          !customForm ||
          !Array.isArray(cfAnswersDataFromReview)
        ) {
          return [];
        }

        const answersWithProperties = cfAnswersDataFromReview
          .map((cf_answer) => {
            const question = customForm.questions.find(
              (q) => q.questionId === cf_answer.cf_question_id
            );
            if (question) {
              let optionNames;
              if (
                cf_answer.options &&
                cf_answer.options.length &&
                question.options &&
                question.options.length
              ) {
                optionNames = cf_answer.options
                  .map((option) => {
                    const matchingOption = question.options.find(
                      (qOption) => qOption.optionId === option.id
                    );
                    if (matchingOption && matchingOption.name) {
                      return matchingOption.name;
                    }
                  })
                  .filter(Boolean);
              }

              return {
                hideAnswerFromWidget: question.hideAnswerFromWidget,
                title: question.title,
                questionType: question.questionType,
                displayType: question.displayType,
                content: cf_answer.content,
                optionNames: optionNames || []
              };
            }
          })
          .filter(Boolean);

        return answersWithProperties;
      } catch (e) {
        console.log('Error when get cf answers data for review:', e)
        return [];
      }
    }

    return {
      checkSetting,
      apiRequest,
      changeHeight,
      postMessageNoReviews,
      postMessageAfterAppendReviews,
      addLoader,
      removeLoader,
      formatDate,
      hexToRGB,
      parseJsonFromMetaField,
      addStyleOnHead,
      escapeString,
      htmlLoader,
      truncateText,
      checkEscapeString,
      loadScript,
      loadLinkCss,
      loadFontGoogle,
      getUrlParameter,
      popupReviews,
      iconStar,
      iconScm,
      createButtonClosePopup,
      loadLazyLoadImage,
      loadLazyLoadImageOnload,
      getValueLoadPerPage,
      callChangePaginate,
      checkLayoutCustomFull,
      checkLayoutCustom,
      getLinkJsIframeByFileName,
      getCssIframeByFileName,
      getQADataObj,
      callCheckErrorLoadImage,
      getTotalQuestionsCount,
      getCFAnswersDataForReview,
      getCustomFormData
    };
  })(jQuery);
} catch (err) {
  console.log('fe-log', err);
  const options = {
    method: 'POST',
    headers: {
      accept: 'text/plain',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      shopName: window.top.location.href,
      errorMessage: err.message,
      errorName: err.name,
      errorStack: err.stack,
      url: window.top.location.href,
      ua: window.navigator.userAgent
    })
  };
  fetch('https://lai-admin.smartifyapps.com/api/feLog', options)
}

function WriteFormAction(){

};
WriteFormAction.prototype.addDiscountCodeSessionCart= function(){
  $(document).on('click', '.action-add-discount', function() {
    let code= $("#coupon-discount").text();
    let urlPathNow = window.location.pathname ;
    let urlUpDiscount= `https://${settingApp.shop_name}.myshopify.com/discount/${code}?redirect=${urlPathNow}`;
    window.parent.location.href = urlUpDiscount;
  });
};
WriteFormAction.prototype.actionSuccessFormHasDiscountCode= function(code){
  $(".scm-write-review").css('display',"none");
  $(".container-discount-result").css('display',"block");
  if(code == 'coupon_waiting'){
    $(".container-discount-result").addClass('delay-code-coupon');
  }else{
    $("#coupon-discount").text(code);
  }
  $('body').addClass('show-discount-code');
  helper.changeHeight();
};
WriteFormAction.prototype.init= function (){
  if(settingApp.discountEnabled){
    $('body').addClass('discountEnabled');
  }
  if(settingApp.enable_login_required && settingApp.type == "product"){
    if(typeof scmAccount.email != "undefined" && scmAccount.email == ''){
      $('.scm-write-review').addClass('hidden-by-login-required');
    }else{
      if(settingApp.enable_order_required){
        if(typeof scmAccount.order != "undefined" && scmAccount.order == 0){
          $('.scm-write-review').addClass('hidden-by-order-required');
        }else{
          if(settingApp.enable_order_product_required){
            if(typeof scmAccount != "undefined" && scmAccount.order_current_product != 'true'){
              $('.scm-write-review').addClass('hidden-by-order-product-required');
            }
          }
        }
      }
    }
  }
  this.addDiscountCodeSessionCart();
  let _this= this;
  let fileToUpLoad = [];
  let fileVideoUpLoad = [];
  function createIconStarInput() {
    let type= settingApp.starStyle;
    $('.block-item-star').html(helper.iconStar[type].rating);
  };
  function openPopupEmail() {
    $(document).on('click', '.toggle-write', function() {
      $('.scm-write-review').removeClass('success');
      $('.scm-write-review').toggleClass('show-write-form');
      var expanded = $('.scm-write-review').hasClass('show-write-form');
      $('.write-review-button.toggle-write').attr('aria-expanded', expanded ? 'true' : 'false');
      if (expanded) {
        setTimeout(function() {
          $('form#scm-form-review input[name="author"]').focus();
        }, 500);
      } else {
        $('.write-review-button.toggle-write').focus();
      }
      helper.changeHeight();
    });
    $(document).on('click', '.write-review-button.popup-write', function() {
      let content = $('.content-popup-reviews').html();
      let productShopifyId= $("#scm-review-importer-value").attr("data-productidshopify");
      let checkCurrenBuyProduct= (typeof scmAccount != "undefined" && scmAccount.order_current_product != 'true') ? false : true;
      const dataEvent = {
        type: 'createPopupWriteReviews',
        content,
        order_current_product : checkCurrenBuyProduct,
        productShopifyId
      };
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage(dataEvent, '*');
    });
  };
  openPopupEmail();
  createIconStarInput();
  function openFormWriteReviewWhenOpenFromMail(){
    if(helper.getUrlParameter('scm_review_mail')){
      $('body').addClass('email_write_form');
      if(settingApp.header_headerQuickLayout =="default-4"){
        if($('body').hasClass('has-review')){
          $('.right-header .write-review-button').trigger('click');
        }else{
          $('.right-component .write-review-button').trigger('click');
        }
      }else{
        $('.write-review-button').trigger('click');
      }
      if(helper.getUrlParameter('scm_rating')){
        setTimeout(function(){
          $('.block-item-star.nth-'+helper.getUrlParameter('scm_rating')).trigger('click');
        },200);
      }
      if(helper.getUrlParameter('scm_mail')){
        $('input[name="email"]').val(helper.getUrlParameter('scm_mail'));
      }
      if(helper.getUrlParameter('scm_name')){
        $('input[name="author"]').val(helper.getUrlParameter('scm_name'));
      }
      let content= helper.getUrlParameter('scm_content');
      if(content){
        $('textarea[name="review"]').val(content);
      }
      if(helper.getUrlParameter('email_attribute')){
        $('input[name="email_attribute"]').val(helper.getUrlParameter('email_attribute'));
      }
    }
  };
  function fillAccountWhenCustomerLogin() {
    if(typeof scmAccount != "undefined" && scmAccount.email != ''){
      $('body').addClass('log-in')
      $('input[name="email"]').val(scmAccount.email);
      $('input[name="author"]').val(scmAccount.name);
      if(typeof scmAccount.order != "undefined" && scmAccount.order > 0){
        $('body').addClass('ordered');
      }
    }
  };
  fillAccountWhenCustomerLogin();
  openFormWriteReviewWhenOpenFromMail();
  function removeHoverClass() {
    $('.block-item-star').removeClass('hover-star');
  };
  function removeSeclectedClass() {
    $('.block-item-star').removeClass('selected-star');
  };
  function actionWithCheckArrayImage(){
    if(settingApp.header_headerQuickLayout =="default-4"){
      if(fileToUpLoad.length > 0 || fileVideoUpLoad.length > 0){
        $(".scm-upload").addClass("has-photo");
      }else{
        $(".scm-upload").removeClass("has-photo");
      }
    }
  };
  function actionUpLoadVideo(file){
    if(!settingApp.videoEnabled || fileVideoUpLoad.length >= settingApp.videosPerReview ){
      showMessagError(languageModule.getLanguageByKey('box_write-message_error_video_upload'));
      return false;
    }
    if(Number(file.size) > 52428800){
      showMessagError(languageModule.getLanguageByKey('box_write-message_error_video_upload'));
      return false;
    }

    const idImage = Math.floor(Math.random() * 201);
    fileVideoUpLoad.push({ id: idImage, file: file });
    const imageTag = `<li><img src="${settingApp.cdn}/images/video/thumbnail.png">
        <span class="remove" role="button" tabindex="0" aria-label="Remove" data-id="${idImage}">${helper.iconScm.exit_svg}</span></li>`;
    $('.group-load-img').append(imageTag);
    actionWithCheckArrayImage();
    helper.changeHeight();
  }
  function actionUploadFileImage(file){
    if(Number(file.size) > 10000000){
      showMessagError(languageModule.getLanguageByKey('box_write-message_error_file_upload'));
      return false;
    }
    let base64String = '';
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // Closure to capture the file information.
    reader.onload = function() {
      const idImage = Math.floor(Math.random() * 201);
      base64String = reader.result.split(',');
      const base64StringCode = base64String[1];
      const imageTag = `<li><img src="${reader.result}"><span class="remove" role="button" tabindex="0" aria-label="Remove" data-id="${idImage}">${helper.iconScm.exit_svg}</span></li>`;
      $('.group-load-img').append(imageTag);
      fileToUpLoad.push({ id: idImage, file: base64StringCode });
      actionWithCheckArrayImage();
      helper.changeHeight();
    };
  }
  function showFile(input) {
    hiddenMessagError();
    const file = input.files[0];
    const typeFile= file.type;
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if((typeFile == "video/mp4") || (typeFile == "video/webm") || (typeFile == "video/avi") || (typeFile == "video/quicktime") || (typeFile == "video/x-ms-wmv")){
      actionUpLoadVideo(file);
    }else{
      if (!validImageTypes.includes(typeFile)) {
        showMessagError(languageModule.getLanguageByKey('box_write-message_error_type_media_upload'));
        return false;
      }
      actionUploadFileImage(file);
    }
  };
  function changeStarGroup(number){
    removeSeclectedClass();
    const valueSelected = number;
    for (let i = 1; i <= valueSelected; i += 1) {
      $(`.block-item-star.nth-${i}`).addClass('selected-star');
    }
    $('#rate-value').val(valueSelected);
  };
  function failForm(statusCustom= false){
    $('.result-reviews').addClass('show-fail');
    $(".fail-escape").css('display',"none");
    hiddenMessagError();
    if(statusCustom){
      setTimeout(function () {
        $('.result-reviews').removeClass('show-fail');
      },40000)
    }else{
      setTimeout(function () {
        $('.result-reviews').removeClass('show-fail');
      },4000)
    }
  };

  function clearCustomFormAfterSubmit(customForm) {
    const questions = customForm.questions;
    questions.forEach((question) => {
      if (question.questionType === 'text') {
        $(
          `form#scm-form-review input[type="text"][name="${question.questionId}"]`
        ).val('');
      } else if (question.questionType === 'single') {
        if (question.displayType === 'radio') {
          $(
            `form#scm-form-review input[type="radio"][name="${question.questionId}"]:checked`
          ).prop('checked', false);
        } else if (question.displayType === 'select') {
          $(
            `form#scm-form-review select[name="${question.questionId}"]`
          ).prop('selectedIndex', 0);
        }
      } else if (question.questionType === 'multi') {
        if (question.displayType === 'checkbox') {
          $(
            `form#scm-form-review input[type="checkbox"][name="${question.questionId}"]:checked`
          ).map(function () {
            $(this).prop('checked', false);
          });
        }
      }
    });
  }

  // return true if cf has no text field questions, or all text field answers are valid; false if at least one answer not valid
  function validateCustomFormTextField(questions) {
    const textFieldQuestions = questions.filter((question) => question.questionType === 'text');
    if (textFieldQuestions.length === 0) {
      return true;
    }
    const atLeastOneTextFieldAnswerNotValid =  textFieldQuestions.some((question) => {
      const textEl = $(
        `form#scm-form-review input[type="text"][name="${question.questionId}"]`
      );
      const textVal = textEl.val();
      return !checkValidateTagHtml(textVal, textEl);
    });
    return !atLeastOneTextFieldAnswerNotValid;
  }

  function getCustomFormValuesToSubmit(questions) {
    let cfData = {};
    questions.forEach((question) => {
      if (question.questionType === 'text') {
        const textVal = $(
          `form#scm-form-review input[type="text"][name="${question.questionId}"]`
        ).val();
        if (textVal) {
          cfData[question.questionId] = textVal;
        }
      } else if (question.questionType === 'single') {
        if (question.displayType === 'radio') {
          const selectedValue = $(
            `form#scm-form-review input[type="radio"][name="${question.questionId}"]:checked`
          ).val();
          if (selectedValue) {
            cfData[question.questionId] = selectedValue;
          }
        } else if (question.displayType === 'select') {
          const selectedValue = $(
            `form#scm-form-review select[name="${question.questionId}"]`
          ).val();
          if (selectedValue) {
            cfData[question.questionId] = selectedValue;
          }
        }
      } else if (question.questionType === 'multi') {
        if (question.displayType === 'checkbox') {
          const selectedValues = [];
          $(
            `form#scm-form-review input[type="checkbox"][name="${question.questionId}"]:checked`
          ).map(function () {
            selectedValues.push($(this).val());
          });

          if (selectedValues.length) {
            cfData[question.questionId] = selectedValues;
          }
        }
      }
    });

    return cfData;
  }

  function succesForm(haveDiscount){
    $('input[name="author"], input[type="email"], textarea').val(null);
    $('.group-load-img').empty();
    $("#rate-value").val(5);
    changeStarGroup(5);
    $('input[name="scm_img[]"]').remove();
    $(".fail-escape").css('display',"none");
    hiddenMessagError();
    $('.result-reviews').addClass('show-success');
    if(settingApp.header_headerQuickLayout =="default-4"){
      if(!haveDiscount){
        $('.scm-write-review').addClass('success');
        $('.scm-close-popup').click(function() {
          $('.scm-write-review').removeClass('success');
        });
        $('.result-reviews').removeClass('show-success');
        helper.changeHeight();
        $('.toggle-write').bind('click', function() {
          setTimeout(function() {
            helper.changeHeight();
          },0)
        });
        setTimeout(function () {
          $('.toggle-write').bind('click', function() {
            helper.changeHeight();
          });
          $('.scm-close-popup').trigger('click');
          //   $('.toggle-write').trigger('click');
          $('.scm-write-review').removeClass('success');
          helper.changeHeight();
        },5000)
      }else{
        $('.scm-write-review').removeClass('success');
        $('.result-reviews').removeClass('show-success');
      }
      $('.scm-upload').removeClass('has-photo')
    }
    else{
      setTimeout(function () {
        $('.result-reviews').removeClass('show-success');
        helper.changeHeight();
      },4000)
    }

    const customForm = helper.getCustomFormData(settingApp.customForms);
    if (customForm) {
      clearCustomFormAfterSubmit(customForm);
    }
  };
  $('.write-rating-star').hover(
    function() {
      $(this).addClass('on-hover');
    },
    function() {
      $(this).removeClass('on-hover');
    }
  );
  $(document).on('click', '.block-item-star', function() {
    const valueSelected = $(this).data('value');
    changeStarGroup(valueSelected);
  });
  $('.block-item-star').hover(
    function() {
      const valueHover = $(this).data('value');
      removeHoverClass();
      for (let i = 1; i <= valueHover; i += 1) {
        $(`.block-item-star.nth-${i}`).addClass('hover-star');
      }
    },
    function() {}
  );
  $(document).on('click', '.group-load-img .remove', function() {
    const idRemove = $(this).data('id');
    fileToUpLoad = fileToUpLoad.filter(function(elem) {
      return elem.id !== idRemove;
    });
    fileVideoUpLoad = fileVideoUpLoad.filter(function(elem) {
      return elem.id !== idRemove;
    });
    $(this)
      .closest('li')
      .remove();
    actionWithCheckArrayImage();
    helper.changeHeight();
  });
  $(document).on('keydown', '.group-load-img .remove', function(e) {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).trigger('click');
    }
  });
  $('#scm-upload').change(function() {
    showFile(this);
  });
  function showMessagError(message){
    $(".fail-size").text(message);
    $(".fail-size").css("display","block");
  };
  function hiddenMessagError(message){
    $(".fail-size").css("display","none");
  };
  // false is fail, true is success
  function checkValidateTagHtml(value,element){
    if(helper.checkEscapeString(value)){
      element.focus();
      $(".fail-escape").css('display',"block");
      $('.scm-btn-submit-row').removeClass('loading');
      return false;
    }
    return true;
  };
  $(document).on('keydown', 'form#scm-form-review label[for="scm-upload"]', function(e) {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).trigger('click');
    }
  });
  function scmShowFieldError(fieldName, message) {
    $('form#scm-form-review .scm-field-error[data-for="' + fieldName + '"]').text(message).show();
    $('form#scm-form-review [name="' + fieldName + '"]').addClass('scm-input-error');
  }
  function scmClearFieldError(fieldName) {
    $('form#scm-form-review .scm-field-error[data-for="' + fieldName + '"]').text('').hide();
    $('form#scm-form-review [name="' + fieldName + '"]').removeClass('scm-input-error');
  }
  function scmClearFieldErrors() {
    $('form#scm-form-review .scm-field-error').text('').hide();
    $('form#scm-form-review input, form#scm-form-review textarea').removeClass('scm-input-error');
  }
  $(document).on('blur', 'form#scm-form-review input[name="author"]', function() {
    if(!$(this).val().trim()) {
      scmShowFieldError('author', languageModule.getLanguageByKey('box_write-field_required'));
    } else {
      scmClearFieldError('author');
    }
  });
  $(document).on('input', 'form#scm-form-review input[name="author"]', function() {
    if($(this).val().trim()) { scmClearFieldError('author'); }
  });
  function scmIsValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }
  $(document).on('blur', 'form#scm-form-review input[name="email"]', function() {
    var val = $(this).val().trim();
    if(!val || !scmIsValidEmail(val)) {
      scmShowFieldError('email', languageModule.getLanguageByKey('box_write-email_invalid'));
    } else {
      scmClearFieldError('email');
    }
  });
  $(document).on('input', 'form#scm-form-review input[name="email"]', function() {
    if(scmIsValidEmail($(this).val().trim())) { scmClearFieldError('email'); }
  });
  $(document).on('blur', 'form#scm-form-review textarea[name="review"]', function() {
    if(!$(this).val().trim()) {
      scmShowFieldError('review', languageModule.getLanguageByKey('box_write-field_required'));
    } else {
      scmClearFieldError('review');
    }
  });
  $(document).on('input', 'form#scm-form-review textarea[name="review"]', function() {
    if($(this).val().trim()) { scmClearFieldError('review'); }
  });
  $('#scm-form-review').submit(async function(e) {
    e.preventDefault();
    scmClearFieldErrors();

    const that = $(this);
    let hasError = false;
    let elementAuthor= $('form#scm-form-review input[name="author"]');
    const author = elementAuthor.val().trim();
    if(!author) {
      scmShowFieldError('author', languageModule.getLanguageByKey('box_write-field_required'));
      hasError = true;
    } else if(!checkValidateTagHtml(author, elementAuthor)){
      hasError = true;
    }
    let elementReview= $('form#scm-form-review textarea[name="review"]');
    const review = elementReview.val().trim();
    if(!review) {
      scmShowFieldError('review', languageModule.getLanguageByKey('box_write-field_required'));
      hasError = true;
    } else if(!checkValidateTagHtml(review, elementReview)){
      hasError = true;
    }
    const email= $('form#scm-form-review input[name="email"]').val().trim();
    if(!email || !scmIsValidEmail(email)) {
      scmShowFieldError('email', languageModule.getLanguageByKey('box_write-email_invalid'));
      hasError = true;
    }
    if(hasError) {
      var errors = $('form#scm-form-review .scm-field-error:visible').map(function(){
        var fieldName = $(this).attr('data-for');
        var label = $('form#scm-form-review label[for="scm-input-' + fieldName + '"]').text().trim();
        return (label ? label + ': ' : '') + $(this).text();
      }).get();
      $('#scm-live-region').text('Form has errors: ' + errors.join('. '));
      $('form#scm-form-review .scm-input-error').first().focus();
      return;
    }

    $('.scm-btn-submit-row').addClass('loading');
    const urlSubmit= that.attr('action');
    const shopName =$('form#scm-form-review input[name="shop"]').val();
    const productShopify = $('form#scm-form-review input[name="product_shopify"]').val();
    const email_attribute= $('form#scm-form-review input[name="email_attribute"]').val();
    let ipLocation  = getIp();
    let imgArr = await Promise.all(uploadImage(productShopify, shopName));
    let provider= helper.getUrlParameter('provider') ? helper.getUrlParameter('provider') : '';
    await ipLocation.then((rs) => ipLocation = rs);
    var formData = new FormData();

    const customForm = helper.getCustomFormData(settingApp.customForms);
    let cfData = {};
    let advanceInfo= {
      'totalOrderHasProduct' : null
    };
    if(typeof dataApp.advanceInfo != 'undefined'){
      advanceInfo= dataApp.advanceInfo;
    }
    if (customForm) {
      const questions = customForm.questions;
      const isTextFieldValid = validateCustomFormTextField(questions);
      if (!isTextFieldValid) {
        return;
      }
      cfData = getCustomFormValuesToSubmit(questions);
    }

    let reviewData = {
      rating    : $('.block-item-star.selected-star:last').data('value'),
      country   : ipLocation.country_code,
      shop: shopName,
      product_shopify: productShopify,
      author    : author,
      email     : email,
      review    : review,
      scm_provider : provider,
      email_attribute    : email_attribute,
      photos    : JSON.stringify(imgArr),
      videos     : fileVideoUpLoad,
      advanceInfo: JSON.stringify(advanceInfo),
      cfData: JSON.stringify(cfData)
    };
    Object.keys(reviewData).forEach((key) => {
      if (key === 'videos') {
        reviewData.videos.forEach(function(itemVideo) {
          formData.append('videos[]', itemVideo.file);
        })
      } else {
        formData.append(key, reviewData[key]);
      }
    })
    console.log(formData.get('videos'))
    $.ajax({
      url: urlSubmit,
      type: 'POST',
      data: formData,
      contentType : false,
      processData: false,
    })
      .done((result) => {
        $('.scm-btn-submit-row').removeClass('loading');
        fileToUpLoad = [];
        fileVideoUpLoad = [];
        let haveDiscount= false;
        if(typeof (result.data) != "undefined" && result.data != 'undefined' && result.data.coupon != 'null' && result.data.coupon !== null){
          _this.actionSuccessFormHasDiscountCode(result.data.coupon);
          haveDiscount= true;
        }
        succesForm(haveDiscount);
      })
      .fail((result) => {
        let statusCustom= false;
        if(typeof result.responseJSON != 'undefined' && typeof result.responseJSON.message != 'undefined' && result.responseJSON.message == "Limit write review" ){
          let textErrorCustom = $('.custom-text-error').text();
          if(textErrorCustom){
            $('.fail').text(textErrorCustom);
          }else{
            $('.fail').text('Reviews cannot exceed products ordered.');
          }
          statusCustom= true;
        }
        $('.scm-btn-submit-row').removeClass('loading');
        failForm(statusCustom);
      });
  });

  let getIp = () => {
    return new Promise(function(resolve) {
      $.getJSON('https://geoip.secomtech.com/?json', function(
        location
      ) {
        resolve(location);
      });
    });
  };
  let uploadImage = (productShopify, shopName) => {
    return fileToUpLoad.map((item) => {
      return new Promise(function(resolve) {
        const url= $(".scm-write-review").attr('data-url');
        $.ajax({
          url: url,
          type: 'POST',
          data: {
            product_shopify: productShopify,
            shop_name: shopName,
            shop: shopName,
            image: item.file,
            id_image: item.id
          },
          success(data) {
            resolve(data.url);
          }
        });
      })
    });
  };
};
function fireLayout(){
  helper.loadScript(`${helper.getLinkJsIframeByFileName('classjs')}`,function (){
    if(helper.checkLayoutCustom()){
      // helper.loadScript(`${settingApp.cdn}/storage/customCssJs/${settingApp.shop_name}/customLayout.js?version=${settingApp.versionUpdate}`,function (){
      helper.loadScript(`https://d1rc46soeuwz3b.cloudfront.net/${settingApp.shop_name}/custom-file/js-customization.js?version=${settingApp.versionUpdate}`,function (){
        helper.loadScript(`${helper.getLinkJsIframeByFileName('reviewPage')}`);
      });
    }else{
      helper.loadScript(`${helper.getLinkJsIframeByFileName('reviewPage')}`);
    }
  });
}
if(settingApp.typePage != "write-popup" ){
  fireLayout();
}
rt by rate' : language.sort_box.rating,
        'empty_page-title' : !language.empty_page || checkFailTranslateLanguage(language.empty_page.title) ? 'Customer reviews' : language.empty_page.title,
        'empty_page-des' : !language.empty_page || checkFailTranslateLanguage(language.empty_page.des) ? 'This product has no review. Be the first one to review it' : language.empty_page.des,
        'thank_you-title' : !language.thank_you || checkFailTranslateLanguage(language.thank_you.title) ? 'Your review has been submitted!' : language.thank_you.title,
        'thank_you-des' : !language.thank_you || checkFailTranslateLanguage(language.thank_you.des) ? 'This message will automatically close in a few seconds.' : language.thank_you.des,
        'discount-title' : !language.discount || checkFailTranslateLanguage(language.discount.title) ? 'Use the following discount code for {{discount_value}} off your next purchase' : language.discount.title,
        'discount-des' : !language.discount || checkFailTranslateLanguage(language.discount.des) ? `We'll also send it by email` : language.discount.des,
        'discount-coupon_waiting_message' : !language.discount || checkFailTranslateLanguage(language.discount.coupon_waiting_message) ? `Thank you for reviewing our product. The discount code will be sent to your email once the review is approved.` : language.discount.coupon_waiting_message,
        'discount-action' : !language.discount || checkFailTranslateLanguage(language.discount.action) ? 'Continue' : language.discount.action,
        'discount-badge' : !language.discount || checkFailTranslateLanguage(language.discount.badge) ? 'Get {{discount_value}} off' : language.discount.badge,
        'discount-photo' : !language.discount || checkFailTranslateLanguage(language.discount.photo) ? 'Upload photo reviews to get {{discount_value}} off discount instantly!' : language.discount.photo,
        'qaAnswerField':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaAnswerField)
            ? 'Your answer'
            : language.qa.qaAnswerField,
        'qaQuestionField':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaQuestionField)
            ? 'Your question'
            : language.qa.qaQuestionField,
        'qaTitle':
          !language.qa || checkFailTranslateLanguage(language.qa.qaTitle)
            ? 'Questions'
            : language.qa.qaTitle,
        'qaFormTitle':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaFormTitle)
            ? 'Ask a question'
            : language.qa.qaFormTitle,
        'qaQuestionTitle':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaQuestionTitle)
            ? 'Questions:'
            : language.qa.qaQuestionTitle,
        'qaAnswerTitle':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaAnswerTitle)
            ? 'Answer:'
            : language.qa.qaAnswerTitle,
        'qaStoreOwnerBadge':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaStoreOwnerBadge)
            ? 'Store owner'
            : language.qa.qaStoreOwnerBadge,
        'qaPastBuyerBadge':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaPastBuyerBadge)
            ? 'Past customer'
            : language.qa.qaPastBuyerBadge,
        'qaSuccessMessage':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaSuccessMessage)
            ? 'Thank you!'
            : language.qa.qaSuccessMessage,
        'qaFailMessage':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaFailMessage)
            ? 'Submitted unsuccessfully!'
            : language.qa.qaFailMessage,
        'qaAskQuestionBtn':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaAskQuestionBtn)
            ? 'Ask a question'
            : language.qa.qaAskQuestionBtn,
        'qaSubmitQuestionBtn':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaSubmitQuestionBtn)
            ? 'Submit question'
            : language.qa.qaSubmitQuestionBtn,
        'qaSubmitAnswerBtn':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaSubmitAnswerBtn)
            ? 'Submit answer'
            : language.qa.qaSubmitAnswerBtn,
        'qaReplyBtn':
          !language.qa || checkFailTranslateLanguage(language.qa.qaReplyBtn)
            ? 'Reply'
            : language.qa.qaReplyBtn,
        'qaLoadMoreAnswerBtn':
          !language.qa ||
          checkFailTranslateLanguage(language.qa.qaLoadMoreAnswerBtn)
            ? 'See more answers'
            : language.qa.qaLoadMoreAnswerBtn
      }
    }
    let languageJson = getLanguage(language);
    function getLanguageByKey(key){
      return htmlDecode(languageJson[key]);
    };
    return {
      languageJson,
      language,
      getLanguageByKey
    }
  })(language);
  !function(t){Array.prototype.chunk=function(t){return this.length?[this.slice(0,t)].concat(this.slice(t).chunk(t)):[]},t.fn.laiPaginate=function(e){let a={itemsPerPage:10,currentPage:1,allData:[],currentPageData:[],nextBtnText:">",prevBtnText:"<",callback:function(t){},dataContainer:"",pageRange:1,ellipsis:"...",...e,container:this,get dataChunk(){const{allData:t,itemsPerPage:e}=this;return t.chunk(e)},get maxPage(){return this.dataChunk.length},get currentPageData(){return void 0!==e.currentPageData?e.currentPageData:this.dataChunk[this.currentPage-1]},get rangeStart(){let t=this.currentPage-this.pageRange;return t<1?1:t},get rangeEnd(){let t=this.currentPage+this.pageRange;return t>this.maxPage?this.maxPage:t},initialize:function(){let e=this;e.renderPaginate(!0),t(document).on("click",".paginate_item:not(.paginate_ellipsis)",(function(){if(t(this).hasClass("next"))return e.next();if(t(this).hasClass("prev"))return e.prev();let a=t(this).data("page");return e.setCurrentpage(a)}))},renderPaginate:function(e=!1){const{currentPage:a,maxPage:n,nextBtnText:s,prevBtnText:r,container:g}=this;let l=["<ul>"];if(n<=1?t(g).addClass("no-page"):t(g).removeClass("no-page"),1!==a&&l.push(`<li class="paginate_item prev">${r}</li>`),this.rangeStart<=this.pageRange+1)for(let t=1;t<this.rangeStart;t++)l.push(`<li class="paginate_item ${this.currentPage===t?"active":""}" data-page="${t}">${t}</li>`);else l.push('<li class="paginate_item" data-page="1">1</li>'),l.push(`<li class="paginate_item paginate_ellipsis">${this.ellipsis}</li>`);for(let t=this.rangeStart;t<=this.rangeEnd;t++)l.push(`<li class="paginate_item ${this.currentPage===t?"active":""}" data-page="${t}">${t}</li>`);if(this.rangeEnd>=n-this.pageRange)for(i=this.rangeEnd+1;i<=n;i++)l.push(`<li class="paginate_item ${this.currentPage===i?"active":""}" data-page="${i}">${i}</li>`);else l.push(`<li class="paginate_item paginate_ellipsis">${this.ellipsis}</li>`),l.push(`<li class="paginate_item" data-page="${this.maxPage}">${this.maxPage}</li>`);a!==n&&l.push(`<li class="paginate_item next">${s}</li>`),l.push("</ul>"),t(g).html(l.join("")),e||this.callback(this)},setCurrentpage:function(t,e=!1){this.currentPage=t,this.renderPaginate(e)},next:function(){return this.setCurrentpage(this.currentPage+1)},prev:function(){return this.setCurrentpage(this.currentPage-1)},goTo:function(t,e=!1){return this.setCurrentpage(t,e)},setAllData:function(t,e=null){this.allData=t,e&&(this.itemsPerPage=e),this.goTo(1,!0)},callHook:function(t,...e){void 0!==this[t]&&this[t].apply(this,e)}};return a.initialize(),a}}(jQuery);
  var helper = (function($) {
    let checkSetting = function(strText) {
      if (typeof (strText) == "undefined" || strText == 'undefined') {
        return false;
      }
      return true;
    };
    let actionLazyLoad= ($elm,configMasonry='') => {
      $('.smaLazyLoad').each(function(index, value) {
        let $this= $(this);
        $this.attr('src',$this.attr('data-src'));
        $this.removeClass('smaLazyLoad');
      });
      if(settingApp.body_layout == 'grid'){
        $elm.imagesLoaded(function () {
          if(configMasonry){
            $elm.masonry(configMasonry);
          }
          helper.changeHeight();
        });
      }
      else{
        $elm.imagesLoaded(function () {
          helper.changeHeight();
        });
      }
    }
    let loadLazyLoadImage= function ($elm,configMasonry=''){
      setTimeout(function (){
        actionLazyLoad($elm,configMasonry);
      },100);
    };
    let checkAndCallLazyLoad= function($elm, configMasonry){
      if(!$("body").hasClass('lazyLoadDone')){
        setTimeout(function (){
          actionLazyLoad($elm,configMasonry);
        },100);
        setTimeout(function (){
          actionLazyLoad($elm,configMasonry);
        },1000);
        $("body").addClass('lazyLoadDone');
      }
    }
    let loadLazyLoadImageOnload= function ($elm,configMasonry=''){
      if(!$("body").hasClass('lazyLoadDone')){
        if(settingApp.lazyLoad){
          let positionFirstIframe= $(".scm-reviews-importer",parent.document).offset().top;
          if(positionFirstIframe < 500){
            setTimeout(function (){
              checkAndCallLazyLoad($elm, configMasonry);
            },100);
          }
        }else{
          if(settingApp.rejectLazyLoad){
            checkAndCallLazyLoad($elm, configMasonry);
          }else{
            setTimeout(function (){
              checkAndCallLazyLoad($elm, configMasonry);
            },100);
          }
        }
        if(settingApp.preview){
          setTimeout(function (){
            checkAndCallLazyLoad($elm, configMasonry);
          },100);
        }
        $(window.parent).scroll(function(){
          let heightDefault = 800;
          let $itemChoose= $(".scm-reviews-importer",parent.document).first();
          let topOffset= $itemChoose.offset().top;
          let scrollTopOffset=  $(this).scrollTop();
          if(topOffset < heightDefault) {
            checkAndCallLazyLoad($elm, configMasonry);
          }else{
            if((topOffset - 600) < scrollTopOffset) {
              checkAndCallLazyLoad($elm, configMasonry);
            }
          }
        });
      }
    };
    let iconScm= {
      'play_svg' : `<svg version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
	<g transform="translate(128 128) scale(0.72 0.72)" style="">
	<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
	<path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 62.251 46.633 L 37.789 60.756 c -1.258 0.726 -2.829 -0.181 -2.829 -1.633 V 30.877 c 0 -1.452 1.572 -2.36 2.829 -1.634 l 24.461 14.123 C 63.508 44.092 63.508 45.907 62.251 46.633 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	</g>
	</g>
	</svg>
			`,
      'video_svg': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2578 1.52812L15.2859 7.5H10.9659L16.9659 1.5H21C21.0616 1.5 21.121 1.50876 21.1798 1.51742C21.2059 1.52127 21.2318 1.52509 21.2578 1.52812ZM9.46406 1.5H13.7859L7.78594 7.5H3.46406L9.46406 1.5ZM18.4641 7.5L23.3297 2.63391C23.7422 3.14766 24 3.79078 24 4.5V7.5H18.4641ZM3 1.5H6.28594L0.284156 7.5H0V4.5C0 2.84297 1.34297 1.5 3 1.5ZM3 22.5C1.34297 22.5 0 21.157 0 19.5V9H24V19.5C24 21.157 22.657 22.5 21 22.5H3ZM9.45 11.8205V15.15V18.4795C9.45 18.8654 9.8686 19.1058 10.2019 18.9114L13.05 17.25L15.9096 15.5819C16.2404 15.389 16.2404 14.9111 15.9096 14.7181L13.05 13.05L10.2019 11.3886C9.8686 11.1942 9.45 11.4346 9.45 11.8205Z" fill="#121212"/>
			</svg>`,
      'chev_down': `<svg xmlns="http://www.w3.org/2000/svg" width="10.828" height="6.414" viewBox="0 0 10.828 6.414">
				<path id="chevron-down" d="M6,9l4,4,4-4" transform="translate(-4.586 -7.586)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
			</svg>`,
      'tag_svg': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
				<path id="tags-solid" d="M15.561,7.061,8.939.439A1.5,1.5,0,0,0,7.879,0H1.5A1.5,1.5,0,0,0,0,1.5V7.879A1.5,1.5,0,0,0,.439,8.939l6.621,6.621a1.5,1.5,0,0,0,2.121,0l6.379-6.379A1.5,1.5,0,0,0,15.561,7.061ZM3.5,5A1.5,1.5,0,1,1,5,3.5,1.5,1.5,0,0,1,3.5,5ZM19.561,9.182l-6.379,6.379a1.5,1.5,0,0,1-2.121,0l-.011-.011,5.439-5.439a2.813,2.813,0,0,0,0-3.978L10.356,0h1.523a1.5,1.5,0,0,1,1.061.439l6.621,6.621a1.5,1.5,0,0,1,0,2.121Z"/>
			</svg>`,
      'exit_svg' : `<svg aria-hidden="true" viewBox="0 0 22.88 22.88" style="enable-background:new 0 0 22.88 22.88;">
						<path d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539 l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539 c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0 c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"></path>
					</svg>`,
      'download_svg' : `<svg viewBox="0 0 512 512">
						<path d="M472,312.642v139c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20v-139H0v139c0,33.084,26.916,60,60,60h392 c33.084,0,60-26.916,60-60v-139H472z"></path>
						<polygon points="256,0.358 131.716,124.642 160,152.926 236,76.926 236,388.642 276,388.642 276,76.926 352,152.926  380.284,124.642 "></polygon>
					</svg>`,
      'photo_svg_plus': `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
					<path id="image-plus" d="M27.6,13.68v8.16l-2.4-2.4c-1.76-1.6-6.24,0-6.24,0l-1.12,1.12-4-4a4.656,4.656,0,0,0-6.24,0l-2.4,2.4V10A1.512,1.512,0,0,1,6.8,8.4H22.32a3.736,3.736,0,0,1,0-3.2H6.8A4.714,4.714,0,0,0,2,10V29.2A4.714,4.714,0,0,0,6.8,34H26a4.714,4.714,0,0,0,4.8-4.8V13.68a5.685,5.685,0,0,1-1.6.32A5.685,5.685,0,0,1,27.6,13.68ZM32.4,5.2H30.8V3.6a1.6,1.6,0,1,0-3.2,0V5.2H26a1.512,1.512,0,0,0-1.6,1.6A1.512,1.512,0,0,0,26,8.4h1.6V10a1.6,1.6,0,1,0,3.2,0V8.4h1.6A1.512,1.512,0,0,0,34,6.8,1.512,1.512,0,0,0,32.4,5.2Z" transform="translate(-2 -2)" fill="#949494"/>
				</svg>`,
      'photo_svg' : `<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	width="550.801px" height="550.8px" viewBox="0 0 550.801 550.8"
	xml:space="preserve">
	<path d="M515.828,61.201H34.972C15.659,61.201,0,76.859,0,96.172v358.458C0,473.942,15.659,489.6,34.972,489.6h480.856 c19.314,0,34.973-15.658,34.973-34.971V96.172C550.801,76.859,535.143,61.201,515.828,61.201z M515.828,96.172V350.51l-68.92-62.66 c-10.359-9.416-26.289-9.04-36.186,0.866l-69.752,69.741L203.438,194.179c-10.396-12.415-29.438-12.537-39.99-0.271L34.972,343.219 V96.172H515.828z M367.201,187.972c0-26.561,21.523-48.086,48.084-48.086c26.562,0,48.086,21.525,48.086,48.086 c0,26.561-21.523,48.085-48.086,48.085C388.725,236.058,367.201,214.533,367.201,187.972z"/>
	</svg>
	`,
      'bag_icon' : `
				<svg class="shopping-bag_dc" viewBox="0 0 15 17.331">
				<path id="shopping-bag_dc" d="M 14.99671649932861 16.76165390014648 L 13.67949867248535 4.217944145202637 C 13.65186309814453 3.955346345901489 13.43052005767822 3.755954265594482 13.16646480560303 3.755954265594482 L 10.69069957733154 3.755954265594482 L 10.69069957733154 3.191487550735474 C 10.69069957733154 1.431978821754456 9.25910758972168 0.0003890990628860891 7.499600410461426 0.0003890990628860891 C 5.739959716796875 0.0003890990628860891 4.308370590209961 1.431982040405273 4.308370590209961 3.191487550735474 L 4.308370590209961 3.755953788757324 L 1.832604289054871 3.755953788757324 C 1.568552374839783 3.755953788757324 1.347210645675659 3.955348014831543 1.319572567939758 4.217943668365479 L 0.002353242132812738 16.76165390014648 C -0.01285255327820778 16.90696716308594 0.03435152769088745 17.05201721191406 0.1320651918649673 17.16070747375488 C 0.2299113273620605 17.26926422119141 0.3692754209041595 17.33127593994141 0.5153826475143433 17.33127593994141 L 14.48354434967041 17.33127593994141 C 14.62978553771973 17.33127593994141 14.76914978027344 17.26926422119141 14.86686229705811 17.16070747375488 C 14.96483993530273 17.05201721191406 15.01191139221191 16.90696716308594 14.99670696258545 16.76165390014648 Z M 5.339988231658936 3.191494464874268 C 5.339988231658936 2.00081467628479 6.308795928955078 1.032007217407227 7.499607563018799 1.032007217407227 C 8.690286636352539 1.032007217407227 9.65909481048584 2.000814437866211 9.65909481048584 3.191494464874268 L 9.65909481048584 3.755959749221802 L 5.339978218078613 3.755959749221802 L 5.339988231658936 3.191494464874268 Z M 1.088198184967041 16.2996768951416 L 2.297123193740845 4.787561893463135 L 4.308387756347656 4.787561893463135 L 4.308387756347656 5.924293041229248 C 4.308387756347656 6.209104061126709 4.539383411407471 6.440100193023682 4.82419490814209 6.440100193023682 C 5.109006404876709 6.440100193023682 5.340002059936523 6.209105014801025 5.340002059936523 5.924293041229248 L 5.340002059936523 4.787561893463135 L 9.659119606018066 4.787561893463135 L 9.659119606018066 5.924293041229248 C 9.659119606018066 6.209104061126709 9.890114784240723 6.440100193023682 10.17492580413818 6.440100193023682 C 10.45973682403564 6.440100193023682 10.69073390960693 6.209105014801025 10.69073390960693 5.924293041229248 L 10.69073390960693 4.787561893463135 L 12.70199871063232 4.787561893463135 L 13.91092395782471 16.2996768951416 L 1.088198184967041 16.2996768951416 Z M 1.088198184967041 16.2996768951416">
				</path>
				</svg>
			`,
      'discount': `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M1.47715 5.81C0.931707 5.81 0.50149 5.36889 0.517394 4.8479C0.546722 3.88719 0.62418 3.2991 0.801844 2.8218C1.13251 1.93344 1.58976 1.40982 2.28614 1.01949C2.89479 0.678332 3.83345 0.5 5.70395 0.5H8.29605C10.1666 0.5 11.1052 0.678332 11.7139 1.01949C12.4102 1.40982 12.8675 1.93344 13.1982 2.8218C13.3758 3.2991 13.4533 3.88719 13.4826 4.8479C13.4985 5.36888 13.0683 5.81 12.5228 5.81C11.7737 5.81 11.3308 6.51458 11.3308 7.15921C11.3308 7.80384 11.7737 8.50843 12.5228 8.50843C13.0698 8.50843 13.4945 8.95027 13.4709 9.46127C13.4347 10.2447 13.3553 10.7561 13.1982 11.1782C12.8675 12.0666 12.4102 12.5902 11.7139 12.9805C11.1052 13.3217 10.1666 13.5 8.29605 13.5H5.70395C3.83345 13.5 2.89479 13.3217 2.28614 12.9805C1.58976 12.5902 1.13251 12.0666 0.801844 11.1782C0.644744 10.7561 0.565269 10.2447 0.529106 9.46126C0.50552 8.95027 0.930194 8.50843 1.47715 8.50843C2.22628 8.50843 2.66918 7.80384 2.66918 7.15921C2.66918 6.51458 2.22628 5.81 1.47715 5.81Z" stroke="#212135"/>
	<path d="M8.75 5.25L5.25 8.75M5.25 5.25V5.83333M8.75 8.16667V8.75" stroke="#212135" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	`,
      'testimonial_svg' : `<svg  viewBox="0 0 42 32">
				<path d="M3.72868 29.2415C1.30256 26.6819 0 23.8111 0 19.1574C0 10.9685 5.78734 3.62887 14.2034 0L16.3068 3.2241C8.45135 7.44491 6.9156 12.9221 6.30318 16.3755C7.56806 15.7251 9.22394 15.4981 10.8468 15.6479C15.0961 16.0386 18.4455 19.5037 18.4455 23.8111C18.4455 25.9829 17.5769 28.0658 16.0309 29.6015C14.4848 31.1372 12.3879 32 10.2014 32C7.67405 32 5.25736 30.8535 3.72868 29.2415ZM27.2832 29.2415C24.857 26.6819 23.5545 23.8111 23.5545 19.1574C23.5545 10.9685 29.3418 3.62887 37.7578 0L39.8613 3.2241C32.0058 7.44491 30.4701 12.9221 29.8577 16.3755C31.1225 15.7251 32.7784 15.4981 34.4013 15.6479C38.6506 16.0386 42 19.5037 42 23.8111C42 25.9829 41.1314 28.0658 39.5854 29.6015C38.0393 31.1372 35.9424 32 33.7559 32C31.2285 32 28.8118 30.8535 27.2832 29.2415Z" fill="#0560D6"/>
				</svg>
				`
    };
    let iconStar= {
      'star' : {
        'rating': `<svg class="Path_1_" viewBox="0 11.796 15.128 14.431">
											<path id="Path_1_" d="M 15.10665130615234 17.27590179443359 C 15.05453205108643 17.11542510986328 14.91586685180664 16.99847793579102 14.74892520904541 16.97425079345703 L 10.05909633636475 16.29273986816406 L 7.961684226989746 12.04304504394531 C 7.88704776763916 11.89176177978516 7.732958793640137 11.79600048065186 7.564273357391357 11.79600048065186 C 7.395556449890137 11.79600048065186 7.241498470306396 11.89176177978516 7.16683292388916 12.04304504394531 L 5.069331645965576 16.29273986816406 L 0.3795907497406006 16.97425079345703 C 0.2126783281564713 16.99847793579102 0.07395394891500473 17.11542510986328 0.02183260396122932 17.2758674621582 C -0.03031831048429012 17.43634033203125 0.01317525468766689 17.61246871948242 0.133993998169899 17.73021697998047 L 3.527437686920166 21.03815460205078 L 2.726470708847046 25.70907592773438 C 2.697927951812744 25.87537002563477 2.766300439834595 26.04337692260742 2.902779340744019 26.14256286621094 C 2.979986429214478 26.19864654541016 3.07143497467041 26.22718811035156 3.163326740264893 26.22718811035156 C 3.233885526657104 26.22718811035156 3.304681062698364 26.21037673950195 3.369507789611816 26.17627716064453 L 7.564243793487549 23.97093200683594 L 11.75880241394043 26.17624664306641 C 11.90816497802734 26.25475311279297 12.08908271789551 26.24169540405273 12.22556018829346 26.14253616333008 C 12.36203765869141 26.04337692260742 12.43044185638428 25.87530899047852 12.40192794799805 25.70901489257813 L 11.60069465637207 21.03815841674805 L 14.99452018737793 17.73019027709961 C 15.11531257629395 17.61246871948242 15.15883350372314 17.43634033203125 15.10665130615234 17.27590179443359 Z">
											</path>
										</svg>
							`,
        'none': `<svg class="Path_1_ svg_none" viewBox="0 11.796 15.128 14.431">
											<path id="Path_1_" d="M 15.10665130615234 17.27590179443359 C 15.05453205108643 17.11542510986328 14.91586685180664 16.99847793579102 14.74892520904541 16.97425079345703 L 10.05909633636475 16.29273986816406 L 7.961684226989746 12.04304504394531 C 7.88704776763916 11.89176177978516 7.732958793640137 11.79600048065186 7.564273357391357 11.79600048065186 C 7.395556449890137 11.79600048065186 7.241498470306396 11.89176177978516 7.16683292388916 12.04304504394531 L 5.069331645965576 16.29273986816406 L 0.3795907497406006 16.97425079345703 C 0.2126783281564713 16.99847793579102 0.07395394891500473 17.11542510986328 0.02183260396122932 17.2758674621582 C -0.03031831048429012 17.43634033203125 0.01317525468766689 17.61246871948242 0.133993998169899 17.73021697998047 L 3.527437686920166 21.03815460205078 L 2.726470708847046 25.70907592773438 C 2.697927951812744 25.87537002563477 2.766300439834595 26.04337692260742 2.902779340744019 26.14256286621094 C 2.979986429214478 26.19864654541016 3.07143497467041 26.22718811035156 3.163326740264893 26.22718811035156 C 3.233885526657104 26.22718811035156 3.304681062698364 26.21037673950195 3.369507789611816 26.17627716064453 L 7.564243793487549 23.97093200683594 L 11.75880241394043 26.17624664306641 C 11.90816497802734 26.25475311279297 12.08908271789551 26.24169540405273 12.22556018829346 26.14253616333008 C 12.36203765869141 26.04337692260742 12.43044185638428 25.87530899047852 12.40192794799805 25.70901489257813 L 11.60069465637207 21.03815841674805 L 14.99452018737793 17.73019027709961 C 15.11531257629395 17.61246871948242 15.15883350372314 17.43634033203125 15.10665130615234 17.27590179443359 Z">
											</path>
									</svg> `,
        'none_special' : `<svg class="svg_none" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.9259 7.72832L8.446 7.65245L8.67845 7.18104L11.6065 1.24292C11.6066 1.24272 11.6067 1.24252 11.6068 1.24231C11.643 1.16964 11.6987 1.10846 11.7677 1.06566C11.8369 1.02274 11.9166 1 11.9981 1C12.0795 1 12.1593 1.02274 12.2284 1.06566C12.2975 1.10848 12.3532 1.16969 12.3893 1.24241C12.3894 1.24258 12.3895 1.24275 12.3896 1.24292L15.3188 7.18022L15.5512 7.65147L16.0712 7.72732L22.6244 8.6832C22.6245 8.68322 22.6246 8.68323 22.6247 8.68325C22.7051 8.69509 22.7805 8.72913 22.8425 8.78152C22.9046 8.83399 22.9508 8.90278 22.9759 8.98011C23.0009 9.05745 23.0039 9.14026 22.9844 9.21919C22.9649 9.29811 22.9237 9.37001 22.8655 9.42677L18.1237 14.0476L17.747 14.4147L17.836 14.9331L18.9565 21.4574C18.9566 21.4577 18.9566 21.458 18.9567 21.4582C18.97 21.538 18.9609 21.6199 18.9303 21.6949C18.8996 21.77 18.8486 21.8351 18.7829 21.8828C18.7173 21.9305 18.6396 21.959 18.5586 21.9649C18.478 21.9708 18.3973 21.9542 18.3255 21.9169C18.3253 21.9168 18.325 21.9167 18.3247 21.9165L12.4639 18.8356L11.9985 18.591L11.5331 18.8357L5.67117 21.9182C5.67105 21.9182 5.67094 21.9183 5.67082 21.9183C5.59909 21.9559 5.51831 21.9726 5.43757 21.9668C5.35669 21.9609 5.27907 21.9325 5.21346 21.8848C5.14786 21.8372 5.09689 21.7721 5.0663 21.697C5.03578 21.6221 5.02676 21.5401 5.04025 21.4604C5.04028 21.4602 5.04031 21.46 5.04034 21.4598L6.16113 14.9341L6.25016 14.4157L5.87347 14.0486L1.13164 9.42777C1.07342 9.37101 1.03224 9.29911 1.01273 9.22019C0.993229 9.14126 0.99618 9.05845 1.02125 8.98111C1.04633 8.90378 1.09252 8.83499 1.15463 8.78252C1.21665 8.73013 1.29207 8.69609 1.37238 8.68425C1.37249 8.68423 1.3726 8.68421 1.37271 8.6842L7.9259 7.72832Z" stroke-width="2"></path>
					</svg> `,
      },
      'heart' : {
        'rating': `<svg  viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
							`,
        'none': `<svg class="svg_none" viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>`
      },
      'like' : {
        'rating': `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/> </g> </g> <g> <g> <path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
							`,
        'none': `<svg class="svg_none" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z"/> </g> </g> <g> <g> <path d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`
      },
      'smile' : {
        'rating': `<svg  enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm93.737 260.188c-9.319-5.931-21.681-3.184-27.61 6.136-.247.387-25.137 38.737-67.127 38.737s-66.88-38.35-67.127-38.737c-5.93-9.319-18.291-12.066-27.61-6.136s-12.066 18.292-6.136 27.61c1.488 2.338 37.172 57.263 100.873 57.263s99.385-54.924 100.873-57.263c5.93-9.319 3.183-21.68-6.136-27.61zm-181.737-135.188c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"/></svg>
							`,
        'none': `<svg class="svg_none" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm93.737 260.188c-9.319-5.931-21.681-3.184-27.61 6.136-.247.387-25.137 38.737-67.127 38.737s-66.88-38.35-67.127-38.737c-5.93-9.319-18.291-12.066-27.61-6.136s-12.066 18.292-6.136 27.61c1.488 2.338 37.172 57.263 100.873 57.263s99.385-54.924 100.873-57.263c5.93-9.319 3.183-21.68-6.136-27.61zm-181.737-135.188c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"/></svg>`
      }
    };
    function htmlLoader($elm){
      let html=  `
					<div class="loader">

					</div>
			`;
      $elm.html(html);
    };
    function popupReviews() {
      /* show popup */
      if(getUrlParameter('review')){
        let html=`
					<div class="content-popup">
						<button class="button-remove"><i class="fa fa-times" aria-hidden="true"></i></button>
						<div class="content">
								<div class="left">
										<img src="https://cdn.laireviews.com/img/love.png" />
								</div>
								<div class="right">
										<h2>
												Has the review section appeared on your store?
										</h2>
										<base target="_parent"></base>
								</div>
						</div>
						<div class="group-button">
								<button id="ok-reviews">YES</button>
								<button id="fail-reviews">NO</button>
						</div>
					</div>
					<p id="content-ok" style="display: none;">Cool! We'd greatly appreciate if you can rate us <a href="https://apps.shopify.com/smart-aliexpress-reviews#reviews" target=_blank rel="nofollow">here</a>!
					</p>
					<p id="content-fail" style="display: none;">Got problem? Please contact our support team at <b>support@smartifyapps.com</b></p>`;
        $(".popup-review").append(html);
        $(".popup-review").css('display','block');
        $("#ok-reviews").on('click',function() {
          $("#content-ok").fadeIn("slow",function() {
            $("#fail-reviews").fadeOut("slow");
            helper.changeHeight();
          })
        });
        $("#fail-reviews").on('click',function() {
          $("#content-fail").fadeIn("slow",function() {
            $("#ok-reviews").fadeOut("slow");
            helper.changeHeight();
          })
        });
        $(".popup-review .button-remove").on('click',function() {
          $(".popup-review").fadeOut( "slow", function() {
            helper.changeHeight();
          });
        });
      }
    };
    function getUrlParameter(sParam) {
      let sPageURL = parent.window.location.search.substring(1);
      let sURLVariables= sPageURL.split('&');
      let sParameterName;
      let i;
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(reFixParamUrlFromMail(sParameterName[1]));
        }
      }
    };
    function createFontGoogle() {
      let font = getFontConfig();
      WebFont.load({
        google: {
          families: [font+'&display=swap'],

        },
        active: () => {
          sessionStorage.fontsLoaded = true
        }
      });
    };

    function loadScript(url, callback) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      if (script.readyState) {  // IE
        script.onreadystatechange = function() {
          if (script.readyState == 'loaded' || script.readyState == 'complete') {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {  // Others
        script.onreadystatechange = callback;
        script.onload = callback;
      }
      script.onerror= callback;
      script.src = url;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(script, x);
    };
    function loadLinkCss(url) {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';
      head.appendChild(link);
    }
    function loadFontGoogle() {
      if(settingApp.use_google_font){
        loadScript('https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js', createFontGoogle);
      }
    };

    function getFontConfig() {
      return settingApp.font ? settingApp.font : 'Hind Siliguri';
    };

    function addStyleOnHead() {
      let styleStar = '';
      let font = getFontConfig();
      switch (settingApp.starStyle) {
        case 'heart':
          styleStar = 'f004';
          break;
        case 'like':
          styleStar = 'f164';
          break;
        case 'smile':
          styleStar = 'f118';
          break;
        default:
          styleStar = 'f005';
      };
      let styleConfig = `<style>
							body {
								--main-color: ${settingApp.mainColor};
								--star-color: ${settingApp.starColor};
								--vote-color: ${settingApp.voteColor};
								--text-textPrimary: ${settingApp.textPrimary};
								--text-textSecondary: ${settingApp.textSecondary};
								--avgRatingColor: ${settingApp.header_avgRatingColor};
								--writeReviewBtnColor: ${settingApp.header_writeReviewBtnColor};
								--writeReviewBtnColorOpacity: ${hexToRGB(settingApp.header_writeReviewBtnColor)};
								--writeReviewBtnTextColor: ${settingApp.header_writeReviewBtnTextColor};
								--submitBtnColor: ${settingApp.header_submitBtnColor};
								--submitBtnColorOpacity: ${hexToRGB(settingApp.header_submitBtnColor, 0.2)};
								--submitBtnTextColor: ${settingApp.header_submitBtnTextColor};
								--verifyBadgeColor: ${settingApp.body_verifyBadgeColor};
								--bgReview: ${settingApp.body_bgReview};
								--qaAnswerCardBgColor: ${settingApp.qaAnswerCardBgColor};
								--qaAnswerCardLeftBorderColor: ${settingApp.qaAnswerCardLeftBorderColor};
								--qaAnswerCardLeftBorderWidth: ${settingApp.qaAnswerCardLeftBorderWidth};
								--qaPastBuyerBadgeColor: ${settingApp.qaPastBuyerBadgeColor};
								--qaStoreOwnerBadgeColor: ${settingApp.qaStoreOwnerBadgeColor};
							}
							.popup-write-review .scm-write-review,.scm-review-importer-popup{
									background: ${settingApp.reviewBg};
							}
							body,input,textarea,button{
									font-family: "${font}";
							}
							.fa-star:before {
									content: "\\${styleStar}";
							}
							/*.write-review-button .write-review-chevron {*/
							/*		transition: transform 0.2s ease;*/
							/*		fill: var(--writeReviewBtnTextColor) !important;*/
							/*}*/
							/*.write-review-button[aria-expanded="true"] .write-review-chevron {*/
							/*		transform: rotate(180deg);*/
							/*}*/
							/*.write-review-button {*/
              /*    display: inline-flex;*/
              /*    align-items: center;*/
              /*    gap: 3px;*/
							/*}*/

							.scm-field-error {
									display: none;
									color: #e53e3e;
									font-size: 12px;
									margin-top: 4px;
							}
							.scm-input-error {
									border-color: #e53e3e !important;
							}
							label[for="scm-upload"] {
									cursor: pointer;
									outline: none;
							}
							label[for="scm-upload"]:hover {
									border-style: solid !important;
									border-color: #9ba3af !important;
							}
							.author-email {
							    text-align: start;
							}
							 #scm-form-review .scm-row:has(#scm-input-review) {
                  text-align: start;
              }
              .remove svg {
                  width: 15px !important;
                  height: 15px !important;
              }
					<\/style>`;
      $('head').append(styleConfig);
    };
    function b64DecodeUnicode(str) {
      return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    }
    function parseJsonFromMetaField(value) {
      if(value === '') {
        return '';
      }
      let valueDecode64= "";
      try {
        valueDecode64 = b64DecodeUnicode(value);
      }
      catch(error) {
        valueDecode64 = atob(value);
      }
      return JSON.parse(valueDecode64);
    };
    function hexToRGB(h,opacity= 0.1) {
      let r = 0, g = 0, b = 0;
      if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];
      } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }
      return "rgba("+ +r + "," + +g + "," + +b + ","+ opacity +")";
    }
    function getMonth(month) {
      let numberMonth = Number(month);
      let monthName = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
      ];
      return monthName[numberMonth];
    };

    function formatDate(value, format = '') {
      let date = new Date(value);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      let strTime = '';
      let character= '/';
      switch (format) {
        case 'dd-MM-yyyy':
          strTime = day + character + month + character + year;
          break;
        case 'MM-dd-yyyy':
          strTime = month + character + day + character + year;
          break;
        case 'yyyy-MM-dd':
          strTime = year + character + month + character + day;
          break;
        case 'MMM-dd-yyyy':
          strTime = getMonth(date.getMonth()) + character + day + character + year;
          break;
        case 'yyyy-MMM-dd':
          strTime = year + character + getMonth(date.getMonth()) + character + day;
          break;
        default:
          strTime = year + character + month + character + day;
      }
      return strTime;
    };

    function changeHeight(heightParam= null) {
      if(!changeHeightFirst && !heightParam){
        return false;
      }else{
        changeHeightFirst= true;
      }
      const height = $('body').height();
      const dataEventHeight = {
        type: 'changeHeight',
        height: height
      };
      parent.window.postMessage(dataEventHeight, '*');
    };
    function postMessageNoReviews(){
      const dataEventNoReviews = {
        type: 'noReviews'
      };
      parent.window.postMessage(dataEventNoReviews, '*');
    }
    function postMessageAfterAppendReviews(){
      const dataAppendReviews = {
        type: 'appendReviews'
      };
      parent.window.postMessage(dataAppendReviews, '*');
    }
    function addLoader() {
      $('.loader-load-more').addClass('loader');
      $('body').addClass('loader-working');
    };

    function removeLoader() {
      $('.loader-load-more').removeClass('loader');
      $('body').removeClass('loader-working');
    };
    function createButtonClosePopup() {
      return `<button class="scm-close-popup">${iconScm.exit_svg}
			</button>`;
    };
    function reFixParamUrlFromMail(value) {
      return value ? value.replace(/\+/g, ' ') : value;
    };

    function escapeString(value) {
      return value ? value.replace(/(<([^>]+)>)/ig, '') : value;
    };
    let truncateText= function(string, length= 40 ){
      if(string.length === 0)
        return '';
      if(string.length > length){
        string= string.substring(0,length);
        string= string + '...' + `<span class="read-more-button" role="button" tabindex="0" aria-label="${languageModule.getLanguageByKey('reviews_load_more')}">${languageModule.getLanguageByKey('reviews_load_more')}</span>`;
      }
      return string;
    };
    function checkEscapeString(value) {
      const patt = /(<([^>]+)>)/ig;
      return value ? patt.test(value) : value;
    };
    function apiRequest(url,data){
      fetch(
        url, {
          method: 'GET',
          mode: 'no-cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(data)
        }
      );
    };
    function getValueLoadPerPage (){
      if(settingApp.itemPerLoadLayout &&  settingApp.type != 'product'){
        return settingApp.itemPerLoadLayout;
      }
      return settingApp.type == 'product' ?  settingApp.itemPerLoad : 10;
    }
    function callChangePaginate(total, itemsPerPage = null){
      $(document).trigger('changePaginate', {
        total: parseFloat(total),
        itemsPerPage: itemsPerPage
      });
    }
    function checkLayoutCustomFull(){
      return settingApp.custom && !settingApp.customLayoutMain;
    }
    function checkLayoutCustom(){
      return settingApp.custom ;
    }
    function getCssIframeByFileName(fileName){
      let versionCss= 'css-version-14';
      return `${settingApp.cdn}/${versionCss}/assets/css/${fileName}.css?version=${settingApp.version}`;
    }

    function getLinkJsIframeByFileName(fileName){
      let minJs=settingApp.minJs ? '.min' : "";
      let versionJs= 'version-14';
      return `${settingApp.cdn}/js/frontend/${versionJs}/${fileName}${minJs}.js?version=${settingApp.version}`;
    }

    function getTotalQuestionsCount(qaData) {
      if (qaData === 'undefined' || qaData === 'null' || qaData === '') {
        return 0;
      }
      try {
        let qaDataObj = JSON.parse(qaData);
        if (qaDataObj.qaTotalQuestions) {
          return parseInt(qaDataObj.qaTotalQuestions);
        }
        return 0;
      } catch (e) {
        return 0;
      }
    }
    function callCheckErrorLoadImage(){
      $(".wrap-image img")
        .on( "error", function() {
          let $this= $(this);
          $this.addClass('error-img');
          $this.closest('.wrap-image').addClass('wrap-error-img');
          $('.wrap-error-img').remove();
        })
    }
    function getQADataObj(qaData) {
      if (qaData === 'undefined' || qaData === 'null' || qaData === '') {
        return {
          qaItems: [],
          qaTotalQuestions: 0
        };
      }
      try {
        let qaDataObj = JSON.parse(qaData);
        let qaItems = [];
        let qaTotalQuestions = 0;
        if (qaDataObj.qaTotalQuestions) {
          qaTotalQuestions = parseInt(qaDataObj.qaTotalQuestions);
        }
        if (qaDataObj.qaItems) {
          qaItems = parseJsonFromMetaField(qaDataObj.qaItems);
        }
        return {
          qaItems,
          qaTotalQuestions
        };
      } catch (e) {
        return {
          qaItems: [],
          qaTotalQuestions: 0
        };
      }
    }

    function getCustomFormData(customForms) {
      if (!(Array.isArray(customForms) && customForms.length > 0)) {
        return null;
      }
      const customForm = customForms[0];
      if (
        !customForm ||
        !customForm.enabled ||
        !customForm.questions ||
        !customForm.questions.length
      ) {
        return null;
      }
      return customForm;
    }

    function getCFAnswersDataForReview(
      customForm,
      cfAnswersDataFromReview
    ) {
      try {
        if (
          !customForm ||
          !Array.isArray(cfAnswersDataFromReview)
        ) {
          return [];
        }

        const answersWithProperties = cfAnswersDataFromReview
          .map((cf_answer) => {
            const question = customForm.questions.find(
              (q) => q.questionId === cf_answer.cf_question_id
            );
            if (question) {
              let optionNames;
              if (
                cf_answer.options &&
                cf_answer.options.length &&
                question.options &&
                question.options.length
              ) {
                optionNames = cf_answer.options
                  .map((option) => {
                    const matchingOption = question.options.find(
                      (qOption) => qOption.optionId === option.id
                    );
                    if (matchingOption && matchingOption.name) {
                      return matchingOption.name;
                    }
                  })
                  .filter(Boolean);
              }

              return {
                hideAnswerFromWidget: question.hideAnswerFromWidget,
                title: question.title,
                questionType: question.questionType,
                displayType: question.displayType,
                content: cf_answer.content,
                optionNames: optionNames || []
              };
            }
          })
          .filter(Boolean);

        return answersWithProperties;
      } catch (e) {
        console.log('Error when get cf answers data for review:', e)
        return [];
      }
    }

    return {
      checkSetting,
      apiRequest,
      changeHeight,
      postMessageNoReviews,
      postMessageAfterAppendReviews,
      addLoader,
      removeLoader,
      formatDate,
      hexToRGB,
      parseJsonFromMetaField,
      addStyleOnHead,
      escapeString,
      htmlLoader,
      truncateText,
      checkEscapeString,
      loadScript,
      loadLinkCss,
      loadFontGoogle,
      getUrlParameter,
      popupReviews,
      iconStar,
      iconScm,
      createButtonClosePopup,
      loadLazyLoadImage,
      loadLazyLoadImageOnload,
      getValueLoadPerPage,
      callChangePaginate,
      checkLayoutCustomFull,
      checkLayoutCustom,
      getLinkJsIframeByFileName,
      getCssIframeByFileName,
      getQADataObj,
      callCheckErrorLoadImage,
      getTotalQuestionsCount,
      getCFAnswersDataForReview,
      getCustomFormData
    };
  })(jQuery);
} catch (err) {
  console.log('fe-log', err);
  const options = {
    method: 'POST',
    headers: {
      accept: 'text/plain',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      shopName: window.top.location.href,
      errorMessage: err.message,
      errorName: err.name,
      errorStack: err.stack,
      url: window.top.location.href,
      ua: window.navigator.userAgent
    })
  };
  fetch('https://lai-admin.smartifyapps.com/api/feLog', options)
}

function WriteFormAction(){

};
WriteFormAction.prototype.addDiscountCodeSessionCart= function(){
  $(document).on('click', '.action-add-discount', function() {
    let code= $("#coupon-discount").text();
    let urlPathNow = window.location.pathname ;
    let urlUpDiscount= `https://${settingApp.shop_name}.myshopify.com/discount/${code}?redirect=${urlPathNow}`;
    window.parent.location.href = urlUpDiscount;
  });
};
WriteFormAction.prototype.actionSuccessFormHasDiscountCode= function(code){
  $(".scm-write-review").css('display',"none");
  $(".container-discount-result").css('display',"block");
  if(code == 'coupon_waiting'){
    $(".container-discount-result").addClass('delay-code-coupon');
  }else{
    $("#coupon-discount").text(code);
  }
  $('body').addClass('show-discount-code');
  helper.changeHeight();
};
WriteFormAction.prototype.init= function (){
  if(settingApp.discountEnabled){
    $('body').addClass('discountEnabled');
  }
  if(settingApp.enable_login_required && settingApp.type == "product"){
    if(typeof scmAccount.email != "undefined" && scmAccount.email == ''){
      $('.scm-write-review').addClass('hidden-by-login-required');
    }else{
      if(settingApp.enable_order_required){
        if(typeof scmAccount.order != "undefined" && scmAccount.order == 0){
          $('.scm-write-review').addClass('hidden-by-order-required');
        }else{
          if(settingApp.enable_order_product_required){
            if(typeof scmAccount != "undefined" && scmAccount.order_current_product != 'true'){
              $('.scm-write-review').addClass('hidden-by-order-product-required');
            }
          }
        }
      }
    }
  }
  this.addDiscountCodeSessionCart();
  let _this= this;
  let fileToUpLoad = [];
  let fileVideoUpLoad = [];
  function createIconStarInput() {
    let type= settingApp.starStyle;
    $('.block-item-star').html(helper.iconStar[type].rating);
  };
  function openPopupEmail() {
    $(document).on('click', '.toggle-write', function() {
      $('.scm-write-review').removeClass('success');
      $('.scm-write-review').toggleClass('show-write-form');
      var expanded = $('.scm-write-review').hasClass('show-write-form');
      $(this).attr('aria-expanded', expanded ? 'true' : 'false');
      // $('.scm-write-review').toggle( "slow", function() {
      //   helper.changeHeight();
      // });
      helper.changeHeight();
    });
    $(document).on('click', '.write-review-button.popup-write', function() {
      let content = $('.content-popup-reviews').html();
      let productShopifyId= $("#scm-review-importer-value").attr("data-productidshopify");
      let checkCurrenBuyProduct= (typeof scmAccount != "undefined" && scmAccount.order_current_product != 'true') ? false : true;
      const dataEvent = {
        type: 'createPopupWriteReviews',
        content,
        order_current_product : checkCurrenBuyProduct,
        productShopifyId
      };
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage(dataEvent, '*');
    });
  };
  openPopupEmail();
  createIconStarInput();
  function openFormWriteReviewWhenOpenFromMail(){
    if(helper.getUrlParameter('scm_review_mail')){
      $('body').addClass('email_write_form');
      if(settingApp.header_headerQuickLayout =="default-4"){
        if($('body').hasClass('has-review')){
          $('.right-header .write-review-button').trigger('click');
        }else{
          $('.right-component .write-review-button').trigger('click');
        }
      }else{
        $('.write-review-button').trigger('click');
      }
      if(helper.getUrlParameter('scm_rating')){
        setTimeout(function(){
          $('.block-item-star.nth-'+helper.getUrlParameter('scm_rating')).trigger('click');
        },200);
      }
      if(helper.getUrlParameter('scm_mail')){
        $('input[name="email"]').val(helper.getUrlParameter('scm_mail'));
      }
      if(helper.getUrlParameter('scm_name')){
        $('input[name="author"]').val(helper.getUrlParameter('scm_name'));
      }
      let content= helper.getUrlParameter('scm_content');
      if(content){
        $('textarea[name="review"]').val(content);
      }
      if(helper.getUrlParameter('email_attribute')){
        $('input[name="email_attribute"]').val(helper.getUrlParameter('email_attribute'));
      }
    }
  };
  function fillAccountWhenCustomerLogin() {
    if(typeof scmAccount != "undefined" && scmAccount.email != ''){
      $('body').addClass('log-in')
      $('input[name="email"]').val(scmAccount.email);
      $('input[name="author"]').val(scmAccount.name);
      if(typeof scmAccount.order != "undefined" && scmAccount.order > 0){
        $('body').addClass('ordered');
      }
    }
  };
  fillAccountWhenCustomerLogin();
  openFormWriteReviewWhenOpenFromMail();
  function removeHoverClass() {
    $('.block-item-star').removeClass('hover-star');
  };
  function removeSeclectedClass() {
    $('.block-item-star').removeClass('selected-star');
  };
  function actionWithCheckArrayImage(){
    if(settingApp.header_headerQuickLayout =="default-4"){
      if(fileToUpLoad.length > 0 || fileVideoUpLoad.length > 0){
        $(".scm-upload").addClass("has-photo");
      }else{
        $(".scm-upload").removeClass("has-photo");
      }
    }
  };
  function actionUpLoadVideo(file){
    if(!settingApp.videoEnabled || fileVideoUpLoad.length >= settingApp.videosPerReview ){
      showMessagError(languageModule.getLanguageByKey('box_write-message_error_video_upload'));
      return false;
    }
    if(Number(file.size) > 52428800){
      showMessagError(languageModule.getLanguageByKey('box_write-message_error_video_upload'));
      return false;
    }

    const idImage = Math.floor(Math.random() * 201);
    fileVideoUpLoad.push({ id: idImage, file: file });
    const imageTag = `<li><img src="${settingApp.cdn}/images/video/thumbnail.png">
        <span class="remove" role="button" tabindex="0" aria-label="Remove" data-id="${idImage}">${helper.iconScm.exit_svg}</span></li>`;
    $('.group-load-img').append(imageTag);
    actionWithCheckArrayImage();
    helper.changeHeight();
  }
  function actionUploadFileImage(file){
    if(Number(file.size) > 10000000){
      showMessagError(languageModule.getLanguageByKey('box_write-message_error_file_upload'));
      return false;
    }
    let base64String = '';
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // Closure to capture the file information.
    reader.onload = function() {
      const idImage = Math.floor(Math.random() * 201);
      base64String = reader.result.split(',');
      const base64StringCode = base64String[1];
      const imageTag = `<li><img src="${reader.result}"><span class="remove" role="button" tabindex="0" aria-label="Remove" data-id="${idImage}">${helper.iconScm.exit_svg}</span></li>`;
      $('.group-load-img').append(imageTag);
      fileToUpLoad.push({ id: idImage, file: base64StringCode });
      actionWithCheckArrayImage();
      helper.changeHeight();
    };
  }
  function showFile(input) {
    hiddenMessagError();
    const file = input.files[0];
    const typeFile= file.type;
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if((typeFile == "video/mp4") || (typeFile == "video/webm") || (typeFile == "video/avi") || (typeFile == "video/quicktime") || (typeFile == "video/x-ms-wmv")){
      actionUpLoadVideo(file);
    }else{
      if (!validImageTypes.includes(typeFile)) {
        showMessagError(languageModule.getLanguageByKey('box_write-message_error_type_media_upload'));
        return false;
      }
      actionUploadFileImage(file);
    }
  };
  function changeStarGroup(number){
    removeSeclectedClass();
    const valueSelected = number;
    for (let i = 1; i <= valueSelected; i += 1) {
      $(`.block-item-star.nth-${i}`).addClass('selected-star');
    }
    $('#rate-value').val(valueSelected);
  };
  function failForm(statusCustom= false){
    $('.result-reviews').addClass('show-fail');
    $(".fail-escape").css('display',"none");
    hiddenMessagError();
    if(statusCustom){
      setTimeout(function () {
        $('.result-reviews').removeClass('show-fail');
      },40000)
    }else{
      setTimeout(function () {
        $('.result-reviews').removeClass('show-fail');
      },4000)
    }
  };

  function clearCustomFormAfterSubmit(customForm) {
    const questions = customForm.questions;
    questions.forEach((question) => {
      if (question.questionType === 'text') {
        $(
          `form#scm-form-review input[type="text"][name="${question.questionId}"]`
        ).val('');
      } else if (question.questionType === 'single') {
        if (question.displayType === 'radio') {
          $(
            `form#scm-form-review input[type="radio"][name="${question.questionId}"]:checked`
          ).prop('checked', false);
        } else if (question.displayType === 'select') {
          $(
            `form#scm-form-review select[name="${question.questionId}"]`
          ).prop('selectedIndex', 0);
        }
      } else if (question.questionType === 'multi') {
        if (question.displayType === 'checkbox') {
          $(
            `form#scm-form-review input[type="checkbox"][name="${question.questionId}"]:checked`
          ).map(function () {
            $(this).prop('checked', false);
          });
        }
      }
    });
  }

  // return true if cf has no text field questions, or all text field answers are valid; false if at least one answer not valid
  function validateCustomFormTextField(questions) {
    const textFieldQuestions = questions.filter((question) => question.questionType === 'text');
    if (textFieldQuestions.length === 0) {
      return true;
    }
    const atLeastOneTextFieldAnswerNotValid =  textFieldQuestions.some((question) => {
      const textEl = $(
        `form#scm-form-review input[type="text"][name="${question.questionId}"]`
      );
      const textVal = textEl.val();
      return !checkValidateTagHtml(textVal, textEl);
    });
    return !atLeastOneTextFieldAnswerNotValid;
  }

  function getCustomFormValuesToSubmit(questions) {
    let cfData = {};
    questions.forEach((question) => {
      if (question.questionType === 'text') {
        const textVal = $(
          `form#scm-form-review input[type="text"][name="${question.questionId}"]`
        ).val();
        if (textVal) {
          cfData[question.questionId] = textVal;
        }
      } else if (question.questionType === 'single') {
        if (question.displayType === 'radio') {
          const selectedValue = $(
            `form#scm-form-review input[type="radio"][name="${question.questionId}"]:checked`
          ).val();
          if (selectedValue) {
            cfData[question.questionId] = selectedValue;
          }
        } else if (question.displayType === 'select') {
          const selectedValue = $(
            `form#scm-form-review select[name="${question.questionId}"]`
          ).val();
          if (selectedValue) {
            cfData[question.questionId] = selectedValue;
          }
        }
      } else if (question.questionType === 'multi') {
        if (question.displayType === 'checkbox') {
          const selectedValues = [];
          $(
            `form#scm-form-review input[type="checkbox"][name="${question.questionId}"]:checked`
          ).map(function () {
            selectedValues.push($(this).val());
          });

          if (selectedValues.length) {
            cfData[question.questionId] = selectedValues;
          }
        }
      }
    });

    return cfData;
  }

  function succesForm(haveDiscount){
    $('input[name="author"], input[type="email"], textarea').val(null);
    $('.group-load-img').empty();
    $("#rate-value").val(5);
    changeStarGroup(5);
    $('input[name="scm_img[]"]').remove();
    $(".fail-escape").css('display',"none");
    hiddenMessagError();
    $('.result-reviews').addClass('show-success');
    if(settingApp.header_headerQuickLayout =="default-4"){
      if(!haveDiscount){
        $('.scm-write-review').addClass('success');
        $('.scm-close-popup').click(function() {
          $('.scm-write-review').removeClass('success');
        });
        $('.result-reviews').removeClass('show-success');
        helper.changeHeight();
        $('.toggle-write').bind('click', function() {
          setTimeout(function() {
            helper.changeHeight();
          },0)
        });
        setTimeout(function () {
          $('.toggle-write').bind('click', function() {
            helper.changeHeight();
          });
          $('.scm-close-popup').trigger('click');
          //   $('.toggle-write').trigger('click');
          $('.scm-write-review').removeClass('success');
          helper.changeHeight();
        },5000)
      }else{
        $('.scm-write-review').removeClass('success');
        $('.result-reviews').removeClass('show-success');
      }
      $('.scm-upload').removeClass('has-photo')
    }
    else{
      setTimeout(function () {
        $('.result-reviews').removeClass('show-success');
        helper.changeHeight();
      },4000)
    }

    const customForm = helper.getCustomFormData(settingApp.customForms);
    if (customForm) {
      clearCustomFormAfterSubmit(customForm);
    }
  };
  $('.write-rating-star').hover(
    function() {
      $(this).addClass('on-hover');
    },
    function() {
      $(this).removeClass('on-hover');
    }
  );
  $(document).on('click', '.block-item-star', function() {
    const valueSelected = $(this).data('value');
    changeStarGroup(valueSelected);
  });
  $('.block-item-star').hover(
    function() {
      const valueHover = $(this).data('value');
      removeHoverClass();
      for (let i = 1; i <= valueHover; i += 1) {
        $(`.block-item-star.nth-${i}`).addClass('hover-star');
      }
    },
    function() {}
  );
  $(document).on('click', '.group-load-img .remove', function() {
    const idRemove = $(this).data('id');
    fileToUpLoad = fileToUpLoad.filter(function(elem) {
      return elem.id !== idRemove;
    });
    fileVideoUpLoad = fileVideoUpLoad.filter(function(elem) {
      return elem.id !== idRemove;
    });
    $(this)
      .closest('li')
      .remove();
    actionWithCheckArrayImage();
    helper.changeHeight();
  });
  $(document).on('keydown', '.group-load-img .remove', function(e) {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).trigger('click');
    }
  });
  $('#scm-upload').change(function() {
    showFile(this);
  });
  function showMessagError(message){
    $(".fail-size").text(message);
    $(".fail-size").css("display","block");
  };
  function hiddenMessagError(message){
    $(".fail-size").css("display","none");
  };
  // false is fail, true is success
  function checkValidateTagHtml(value,element){
    if(helper.checkEscapeString(value)){
      element.focus();
      $(".fail-escape").css('display',"block");
      $('.scm-btn-submit-row').removeClass('loading');
      return false;
    }
    return true;
  };
  $(document).on('keydown', 'form#scm-form-review label[for="scm-upload"]', function(e) {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).trigger('click');
    }
  });
  function scmShowFieldError(fieldName, message) {
    $('form#scm-form-review .scm-field-error[data-for="' + fieldName + '"]').text(message).show();
    $('form#scm-form-review [name="' + fieldName + '"]').addClass('scm-input-error');
  }
  function scmClearFieldError(fieldName) {
    $('form#scm-form-review .scm-field-error[data-for="' + fieldName + '"]').text('').hide();
    $('form#scm-form-review [name="' + fieldName + '"]').removeClass('scm-input-error');
  }
  function scmClearFieldErrors() {
    $('form#scm-form-review .scm-field-error').text('').hide();
    $('form#scm-form-review input, form#scm-form-review textarea').removeClass('scm-input-error');
  }
  $(document).on('blur', 'form#scm-form-review input[name="author"]', function() {
    if(!$(this).val().trim()) {
      scmShowFieldError('author', languageModule.getLanguageByKey('box_write-field_required'));
    } else {
      scmClearFieldError('author');
    }
  });
  $(document).on('input', 'form#scm-form-review input[name="author"]', function() {
    if($(this).val().trim()) { scmClearFieldError('author'); }
  });
  function scmIsValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }
  $(document).on('blur', 'form#scm-form-review input[name="email"]', function() {
    var val = $(this).val().trim();
    if(!val || !scmIsValidEmail(val)) {
      scmShowFieldError('email', languageModule.getLanguageByKey('box_write-email_invalid'));
    } else {
      scmClearFieldError('email');
    }
  });
  $(document).on('input', 'form#scm-form-review input[name="email"]', function() {
    if(scmIsValidEmail($(this).val().trim())) { scmClearFieldError('email'); }
  });
  $(document).on('blur', 'form#scm-form-review textarea[name="review"]', function() {
    if(!$(this).val().trim()) {
      scmShowFieldError('review', languageModule.getLanguageByKey('box_write-field_required'));
    } else {
      scmClearFieldError('review');
    }
  });
  $(document).on('input', 'form#scm-form-review textarea[name="review"]', function() {
    if($(this).val().trim()) { scmClearFieldError('review'); }
  });
  $('#scm-form-review').submit(async function(e) {
    e.preventDefault();
    scmClearFieldErrors();

    const that = $(this);
    let hasError = false;
    let elementAuthor= $('form#scm-form-review input[name="author"]');
    const author = elementAuthor.val().trim();
    if(!author) {
      scmShowFieldError('author', languageModule.getLanguageByKey('box_write-field_required'));
      hasError = true;
    } else if(!checkValidateTagHtml(author, elementAuthor)){
      hasError = true;
    }
    let elementReview= $('form#scm-form-review textarea[name="review"]');
    const review = elementReview.val().trim();
    if(!review) {
      scmShowFieldError('review', languageModule.getLanguageByKey('box_write-field_required'));
      hasError = true;
    } else if(!checkValidateTagHtml(review, elementReview)){
      hasError = true;
    }
    const email= $('form#scm-form-review input[name="email"]').val().trim();
    if(!email || !scmIsValidEmail(email)) {
      scmShowFieldError('email', languageModule.getLanguageByKey('box_write-email_invalid'));
      hasError = true;
    }
    if(hasError) {
      var errors = $('form#scm-form-review .scm-field-error:visible').map(function(){ return $(this).text(); }).get();
      $('#scm-live-region').text('Form has errors: ' + errors.join('. '));
      $('form#scm-form-review .scm-input-error').first().focus();
      return;
    }

    $('.scm-btn-submit-row').addClass('loading');
    const urlSubmit= that.attr('action');
    const shopName =$('form#scm-form-review input[name="shop"]').val();
    const productShopify = $('form#scm-form-review input[name="product_shopify"]').val();
    const email_attribute= $('form#scm-form-review input[name="email_attribute"]').val();
    let ipLocation  = getIp();
    let imgArr = await Promise.all(uploadImage(productShopify, shopName));
    let provider= helper.getUrlParameter('provider') ? helper.getUrlParameter('provider') : '';
    await ipLocation.then((rs) => ipLocation = rs);
    var formData = new FormData();

    const customForm = helper.getCustomFormData(settingApp.customForms);
    let cfData = {};
    let advanceInfo= {
      'totalOrderHasProduct' : null
    };
    if(typeof dataApp.advanceInfo != 'undefined'){
      advanceInfo= dataApp.advanceInfo;
    }
    if (customForm) {
      const questions = customForm.questions;
      const isTextFieldValid = validateCustomFormTextField(questions);
      if (!isTextFieldValid) {
        return;
      }
      cfData = getCustomFormValuesToSubmit(questions);
    }

    let reviewData = {
      rating    : $('.block-item-star.selected-star:last').data('value'),
      country   : ipLocation.country_code,
      shop: shopName,
      product_shopify: productShopify,
      author    : author,
      email     : email,
      review    : review,
      scm_provider : provider,
      email_attribute    : email_attribute,
      photos    : JSON.stringify(imgArr),
      videos     : fileVideoUpLoad,
      advanceInfo: JSON.stringify(advanceInfo),
      cfData: JSON.stringify(cfData)
    };
    Object.keys(reviewData).forEach((key) => {
      if (key === 'videos') {
        reviewData.videos.forEach(function(itemVideo) {
          formData.append('videos[]', itemVideo.file);
        })
      } else {
        formData.append(key, reviewData[key]);
      }
    })
    console.log(formData.get('videos'))
    $.ajax({
      url: urlSubmit,
      type: 'POST',
      data: formData,
      contentType : false,
      processData: false,
    })
      .done((result) => {
        $('.scm-btn-submit-row').removeClass('loading');
        fileToUpLoad = [];
        fileVideoUpLoad = [];
        let haveDiscount= false;
        if(typeof (result.data) != "undefined" && result.data != 'undefined' && result.data.coupon != 'null' && result.data.coupon !== null){
          _this.actionSuccessFormHasDiscountCode(result.data.coupon);
          haveDiscount= true;
        }
        succesForm(haveDiscount);
      })
      .fail((result) => {
        let statusCustom= false;
        if(typeof result.responseJSON != 'undefined' && typeof result.responseJSON.message != 'undefined' && result.responseJSON.message == "Limit write review" ){
          let textErrorCustom = $('.custom-text-error').text();
          if(textErrorCustom){
            $('.fail').text(textErrorCustom);
          }else{
            $('.fail').text('Reviews cannot exceed products ordered.');
          }
          statusCustom= true;
        }
        $('.scm-btn-submit-row').removeClass('loading');
        failForm(statusCustom);
      });
  });

  let getIp = () => {
    return new Promise(function(resolve) {
      $.getJSON('https://geoip.secomtech.com/?json', function(
        location
      ) {
        resolve(location);
      });
    });
  };
  let uploadImage = (productShopify, shopName) => {
    return fileToUpLoad.map((item) => {
      return new Promise(function(resolve) {
        const url= $(".scm-write-review").attr('data-url');
        $.ajax({
          url: url,
          type: 'POST',
          data: {
            product_shopify: productShopify,
            shop_name: shopName,
            shop: shopName,
            image: item.file,
            id_image: item.id
          },
          success(data) {
            resolve(data.url);
          }
        });
      })
    });
  };
};
function fireLayout(){
  helper.loadScript(`${helper.getLinkJsIframeByFileName('classjs')}`,function (){
    if(helper.checkLayoutCustom()){
      // helper.loadScript(`${settingApp.cdn}/storage/customCssJs/${settingApp.shop_name}/customLayout.js?version=${settingApp.versionUpdate}`,function (){
      helper.loadScript(`https://d1rc46soeuwz3b.cloudfront.net/${settingApp.shop_name}/custom-file/js-customization.js?version=${settingApp.versionUpdate}`,function (){
        helper.loadScript(`${helper.getLinkJsIframeByFileName('reviewPage')}`);
      });
    }else{
      helper.loadScript(`${helper.getLinkJsIframeByFileName('reviewPage')}`);
    }
  });
}
if(settingApp.typePage != "write-popup" ){
  fireLayout();
}
