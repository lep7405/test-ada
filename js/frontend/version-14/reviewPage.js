function factoryCardLayout(){
  if(helper.checkLayoutCustomFull()) {
    return new CardBodyLayoutCustom();
  }
  switch(settingApp.body_bodyQuickLayout){
    case 'image-text':
      return new CardBodyImageText();
    case 'gallery':
      return new CardBodyGallery();
      break;
    case 'product-2':
      return new CardBodyProduct2();
      break;
    case 'testimonial':
      return new CardBodyTestimonial();
      break;
    case 'default-3':
      if(settingApp.body_layout == "list"){
        return new CardBodyLayout3List();
      }
      return  new CardBodyLayout3();
      break;
    case 'default-4':
      if(settingApp.body_layout == "list"){
        return new CardBodyLayout4List();
      }
      return new CardBodyLayout4();
      break;
    case 'default-2':
      if(settingApp.body_layout == "list"){
        return new CardBodyLayout2List()
      }
      return new CardBodyAbtract();
      break;
    default:
      if(settingApp.body_layout == "list"){
        return new CardBodyLayout2List();
      }
      return  new CardBodyAbtract();
      break;
  }
}
function factoryHeaderLayout(reviewsProductInFo,checkTrueProduct){
  if(helper.checkLayoutCustomFull()){
    return  new HeaderLayoutCustom(reviewsProductInFo,checkTrueProduct);
  }
  switch(settingApp.header_headerQuickLayout){
    case 'default-3':
      return  new HeaderLayout3(reviewsProductInFo,checkTrueProduct);
      break;
    case 'default-4':
      return new HeaderLayout4(reviewsProductInFo,checkTrueProduct);
      break;
    case 'default-5':
      return new HeaderLayout5(reviewsProductInFo,checkTrueProduct);
      break;
    case 'default-6':
      return new HeaderLayout6(reviewsProductInFo,checkTrueProduct);
      break;
    default:
      return  new HeaderLayoutAbtract(reviewsProductInFo,checkTrueProduct);
      break;
  }
}
function factoryBodyLayout(checkTrueProduct,blockReviewFirst){
  return new bodyLayoutAbtract(checkTrueProduct,blockReviewFirst);
}

function factoryQuestionForm(headerType) {
  switch (headerType) {
    case 'default-4':
      return new QuestionFormType4();
    default:
      return new DefaultQuestionForm();
  }
}

var cartShopify ={
  cart : null,
  attributeObject : {},
  checkSetting : function(strText){
    if (typeof (strText) == "undefined" || strText == 'undefined') {
      return false;
    }
    return true;
  },
  getCart : function(){
    return new Promise(resolve => {
      fetch('/cart.js')
        .then(response => response.json())
        .then(data => {
          this.cart= data;
          resolve('resolved');
        });
    });
  },
  setCart: async function(source="product",productShopifyId,reviewsId) {
    if(settingApp.tracking){
      await this.getCart();
      let keyItem= `${source}_${productShopifyId}_${reviewsId}`;
      if(this.checkSetting(this.cart.attributes) && this.checkSetting(this.cart.attributes.LaiReviewsData)){
        this.attributeObject= JSON.parse(this.cart.attributes.LaiReviewsData);
      }
      this.attributeObject[keyItem]= 1;
      let attr= JSON.stringify(this.attributeObject)
      let addData = {
        attributes: {
          'LaiReviewsData': attr
        }
      };
      fetch('/cart/update.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(addData)
      }).then(function (data) {
        if (data.status == 200) {
          return
        }
        else {
          console.log('Request returned an error', data)
        }
      })
        .catch(function (error) {
          console.log('Request failed', error);
        });
    }
  }
};
function sortReviewsModule() {
  this.optionDefault= 'Sort reviews';
  this.currentOption= 'none';
  let icon= `
            <svg aria-hidden="true" class="up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="45.871px" height="45.871px" viewBox="0 0 45.871 45.871" style="enable-background:new 0 0 45.871 45.871;" xml:space="preserve">
              <path d="M44.68,29.383L26.728,11.52c-2.098-2.087-5.488-2.087-7.585,0L1.19,29.383c-1.16,1.155-1.509,2.707-0.884,4.222   c0.624,1.512,2.099,2.311,3.735,2.311h37.786c1.638,0,3.112-0.799,3.736-2.312C46.189,32.09,45.84,30.539,44.68,29.383z"/>
            </svg>
            <svg aria-hidden="true" class="down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="292.362px" height="292.362px" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
                <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </svg>
      `;
  if(settingApp.header_headerQuickLayout == "default-4"){
    icon= helper.iconScm.chev_down;
  }
  this.html= `<div class="container-sort"><div class="scm-sort">
        <div class="scm-sort-title" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-controls="scm-sort-listbox" aria-activedescendant="scm-sort-option-date" tabindex="0"><span class="title-text">${languageModule.getLanguageByKey('sort_box-reviews')}</span>
          <span class="icon-choose">
                ${icon}
          </span>
          </div>
          <ul id="scm-sort-listbox" class="scm-sort-list" role="listbox" aria-label="${languageModule.getLanguageByKey('sort_box-reviews')}">
            <li id="scm-sort-option-date" role="option" aria-selected="false" option="date">${languageModule.getLanguageByKey('sort_box-date')}</li>
            <li id="scm-sort-option-content" role="option" aria-selected="false" option="content">${languageModule.getLanguageByKey('sort_box-content')}</li>
            <li id="scm-sort-option-photo" role="option" aria-selected="false" option="photo">${languageModule.getLanguageByKey('sort_box-pictures')}</li>
            <li id="scm-sort-option-rating" role="option" aria-selected="false" option="rating">${languageModule.getLanguageByKey('sort_box-rating')}</li>
          </ul>
        </div></div>`;
  let close= function() {
    $(".scm-sort-list").removeClass('scm-show-list');
    $('.scm-sort-title').attr('aria-expanded', 'false');
  }
  this.init =function(){
    let parent= $("#sort-reviews-position");
    if(parent.length > 0){
      parent.prepend(this.html);
    }else{
      $('#reviewImporter').prepend(this.html);
    }
    $('.scm-sort-title').click(function() {
      var isExpanded = $('.scm-sort-list').hasClass('scm-show-list');
      $('.scm-sort-list').toggleClass('scm-show-list');
      $(this).attr('aria-expanded', !isExpanded ? 'true' : 'false');
    });
    $('.scm-sort-title').on('keydown', function(e) {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var willExpand = !$('.scm-sort-list').hasClass('scm-show-list');
        $(this).trigger('click');
        if(willExpand) {
          $(this).attr('aria-expanded', 'true');
          $('.scm-sort-list li').first().focus();
        } else {
          $(this).attr('aria-expanded', 'false');
        }
      } else if(e.key === 'ArrowDown') {
        e.preventDefault();
        if(!$('.scm-sort-list').hasClass('scm-show-list')) {
          $('.scm-sort-list').addClass('scm-show-list');
          $(this).attr('aria-expanded', 'true');
        }
        $('.scm-sort-list li').first().focus();
      } else if(e.key === 'Escape') {
        $('.scm-sort-list').removeClass('scm-show-list');
        $(this).attr('aria-expanded', 'false');
      }
    });
    $('.scm-sort-list li').attr('tabindex', '-1');
    $('.scm-sort-list').on('keydown', 'li', function(e) {
      var items = $('.scm-sort-list li');
      var index = items.index(this);
      if(e.key === 'ArrowDown') {
        e.preventDefault();
        var next = items.eq(index + 1 < items.length ? index + 1 : 0);
        next.focus();
        $('.scm-sort-title').attr('aria-activedescendant', next.attr('id'));
      } else if(e.key === 'ArrowUp') {
        e.preventDefault();
        if(index === 0) {
          $('.scm-sort-list').removeClass('scm-show-list');
          $('.scm-sort-title').attr('aria-expanded', 'false').focus();
        } else {
          var prev = items.eq(index - 1);
          prev.focus();
          $('.scm-sort-title').attr('aria-activedescendant', prev.attr('id'));
        }
      } else if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        $(this).trigger('click');
        $('.scm-sort-title').focus();
      } else if(e.key === 'Escape') {
        $('.scm-sort-list').removeClass('scm-show-list');
        $('.scm-sort-title').attr('aria-expanded', 'false').focus();
      }
    });
    $('.scm-sort-list li').click(function() {
      let itemSort= $('.scm-sort-list li');
      let textTittle= $(this).text();
      $('.title-text').text(textTittle);
      itemSort.removeClass('active').attr('aria-selected', 'false').each(function() {
        $(this).attr('aria-label', $(this).text());
      });
      $(this).addClass('active').attr('aria-selected', 'true').attr('aria-label', textTittle + ', selected');
      $('.scm-sort-title').attr('aria-activedescendant', $(this).attr('id')).attr('aria-expanded', 'false').focus();
      close();
      setTimeout(function() {
        helper.addLoader();
        $('.scm-pagination-load-more').removeClass('visible');
        helper.changeHeight();
        const divValue = $('#scm-review-importer-value');
        divValue.attr('data-pagecurrent', 1);
        const rate = divValue.attr('data-rate');
        let total=  $('#scm-review-importer-value').attr(`data-rate${rate}-total`);
        if(!rate || rate == 'null'){
          total=  $('#scm-review-importer-value').attr(`data-pr-total`);
        }
        helper.callChangePaginate(total);
        ajaxModule.callAjaxGetReview(true,rate);
      }, 800);
    });
    $('body').addClass("has-sort");
  };
  $(document).on('click',function(event) {
    if(!$(event.target).closest(".scm-sort").length) {
      close();
    }
  });
}
let card= factoryCardLayout();
const ajaxModule= (function($) {
  function createBlockReviews(reviews,firstLoad= false) {
    let blockHtml='';
    let i=0;
    let itemPerLoad= helper.getValueLoadPerPage();
    $.each(reviews,function (key,value) {
      if(firstLoad){
        if(i >=  itemPerLoad){
          return false;
        }
      }
      blockHtml= blockHtml + card.itemHtml(value);
      i++;
    });
    return blockHtml;
  };
  function reBuildWidgetWithNewReviews(blockFirstReviewsJson,loadMoreStatus,replace = true){
    let itemPerLoad = helper.getValueLoadPerPage();
    let newCount = replace ? 0 : Math.min(blockFirstReviewsJson.length, itemPerLoad);
    let blockReviews = createBlockReviews(blockFirstReviewsJson,true);
    // Track existing item count so handlers can focus the first newly appended review
    let existingCount = replace ? 0 : $('#reviewImporter .scm-row .item').length;
    $(document).trigger('afterAjaxGetReviews', {
      item: blockReviews,
      replace,
      newCount,
      existingCount
    });
    if (loadMoreStatus === 1) {
      $('.scm-pagination-load-more').addClass('visible');
    } else {
      $('.scm-pagination-load-more').removeClass('visible');
    }
    helper.removeLoader();
    helper.changeHeight();
  }
  function callAjaxGetReview(replace = false, rateValue = null) {
    const divValue = $('#scm-review-importer-value');
    const page = divValue.attr('data-pagecurrent');
    const productShopifyId = divValue.attr('data-productidshopify');
    const productGroupId = divValue.attr('data-productgroupid');
    const groupMappingId = divValue.attr('data-groupMappingId');
    const shopName = divValue.attr('data-shopname');
    let source = divValue.attr('data-sourcekey');
    const rate = rateValue;
    const reviewPerPage = helper.getValueLoadPerPage();
    let urlLoadMore= divValue.attr('data-url');
    if($('body').attr('data-tab') == '3'){
      urlLoadMore= `${settingApp.host}/api/widgets/reviews`;
      source= 'highlightProductPage';
    }

    const sort= $('.scm-sort-list li.active');
    let sortValue= '';
    if(sort){
      sortValue= sort.attr('option');
      if(!sortValue){
        sortValue= settingApp.sort;
      }
    }
    let data={
      productShopifyId,
      groupMappingId,
      shopName,
      page,
      reviewPerPage,
      sortValue,
      source
    }
    if(rate){
      data.rate= rate;
    }
    data.groups= typeof settingApp.groups[source] != 'undefined' ? settingApp.groups[source] : null;
    if(productGroupId){
      data.productGroupId= productGroupId;
    }
    data.shop= shopName;
    $.ajax({
      url: urlLoadMore,
      data,
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json',
      success(data) {
        let blockFirstReviewsJson= data.blockReviews ? helper.parseJsonFromMetaField(data.blockReviews) : "";
        if(replace){
          $('#reviewImporter .scm-row').html('');
        }
        reBuildWidgetWithNewReviews(blockFirstReviewsJson,data.loadMore, replace);
        if(settingApp.type == 'product'){
          let productShopifyId= settingApp.product_id;
          //cartShopify.setCart('loadMoreProduct',productShopifyId,'null');
        }
      },
      error() {
        helper.removeLoader();
      },
      complete() {
        helper.removeLoader();
      }
    });
  };

  function fetchQuestions() {
    let globalValues = $('#scm-qa-values');

    let currentPage = globalValues.attr('data-current-question-page');
    // let sort = globalValues.attr('data-sort-option');

    $.ajax({
      url: `${settingApp.host}/api/qa/load-more-question`,
      data: {
        // sort,
        shopName: settingApp.shop_name,
        productId: settingApp.product_id,
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        page: parseInt(currentPage) + 1,
        questionsPerLoad: settingApp.qaQuestionsPerLoad,
        answersPerLoad: settingApp.qaAnswersPerLoad
      },
      success(data) {
        let globalValues = $('#scm-qa-values');
        let loadMoreBtn = $('.scm-qa-load-more-question-button');

        loadMoreBtn.toggleClass('loading-submit-button');
        loadMoreBtn.prop('disabled', false);

        globalValues.attr(
          'data-current-question-page',
          parseInt(currentPage) + 1
        );

        let questionsContainer = $('.scm-qa-wrapper');

        if (data && data.data && data.data.length) {
          data.data.forEach((question) => {
            let questionCard = new QuestionCard(question);
            let questionCardItem = questionCard.render();
            questionsContainer.append(questionCardItem);
            questionsContainer.append(
              $('<div class="scm-qa-body-question-divider"></div>')
            );
          });
        }

        if (
          data.meta &&
          data.meta.current_page &&
          data.meta.last_page &&
          data.meta.last_page === data.meta.current_page
        ) {
          $('.scm-qa-load-more-question-container').removeClass('visible');
        }

        helper.changeHeight();
      }
    });
  }

  function fetchAnswers(questionId, currentAnswerPage) {
    $.ajax({
      url: `${settingApp.host}/api/qa/load-more-answer`,
      data: {
        shopName: settingApp.shop_name,
        questionId,
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        page: parseInt(currentAnswerPage) + 1,
        answersPerLoad: settingApp.qaAnswersPerLoad
      },
      success(data) {
        let questionItemWrapper = $(
          `.scm-qa-question-item[data-question-id="${questionId}"]`
        );
        let loadMoreBtn = questionItemWrapper.find(
          '.scm-qa-load-more-answer-btn'
        );

        loadMoreBtn.toggleClass('loading-submit-button');
        loadMoreBtn.prop('disabled', false);

        questionItemWrapper.attr(
          'data-current-answer-page',
          parseInt(currentAnswerPage) + 1
        );

        let answersContainer = questionItemWrapper.find(
          '.scm-qa-answers-container'
        );

        if (data && data.data && data.data.length) {
          data.data.forEach((answer) => {
            let newAnswer = new AnswerCard(answer);
            let newAnswerItem = newAnswer.render();
            answersContainer.append(newAnswerItem);
          });
        }

        if (
          data.meta &&
          data.meta.current_page &&
          data.meta.last_page &&
          data.meta.last_page === data.meta.current_page
        ) {
          questionItemWrapper
            .find('.scm-qa-load-more-answer-container')
            .removeClass('visible');
        }

        helper.changeHeight();
      }
    });
  }

  return {
    callAjaxGetReview: callAjaxGetReview,
    reBuildWidgetWithNewReviews,
    createBlockReviews,
    fetchQuestions,
    fetchAnswers
  }
})(jQuery);
function TabContainer(){
  this.tabButton= function (){
    return `
			<div class="container-tab">
				<div class="left-tab">
					<div class="button-tab" data-tab="1">
						${languageModule.getLanguageByKey('box_reviews-reviews_tab')}
					</div>
					<div class="button-tab" data-tab="3">
						${languageModule.getLanguageByKey('box_reviews-highlight_tab')}
					</div>
					<div class="button-tab" data-tab="4" style="display: none">
						${languageModule.getLanguageByKey('qaTitle')}
					</div>
				</div>
				<div class="right-tab">
					<div id="sort-reviews-position"></div>
				</div>
			</div>
		`;
  };
  this.init= function (){
    let tabButtonHtml= this.tabButton();
    $("#reviewImporter").prepend(tabButtonHtml);
    $('.button-tab').click();
    $('body').addClass('tab-active');
    $(document).on('click', '.button-tab', function() {
      $('.button-tab').removeClass('active');
      $(this).addClass('active');
    });

    if (settingApp.qaEnabled) {
      let totalQuestionsCount = helper.getTotalQuestionsCount(qaData);
      $('[data-tab="4"]').css('display', 'inline-block');
      if (totalQuestionsCount) {
        $('[data-tab="4"]').html(`${languageModule.getLanguageByKey('qaTitle')} (${totalQuestionsCount})`);
      }
    }

    if (settingApp.tabProduct) {
      $('[data-tab="3"]').css('display', 'inline-block');
    }
  };
}

function QABody(qaDataParam) {
  let qaDataObj = helper.getQADataObj(qaDataParam);
  this.questions = qaDataObj.qaItems;
  this.totalQuestionsCount = qaDataObj.qaTotalQuestions;
}

QABody.prototype.init = function () {
  let wrapper = $('<div class="scm-qa-wrapper"></div>');

  let loadMoreContainer = $(
    '<div class="scm-qa-load-more-question-container"></div>'
  );
  let loadMoreButton = $(
    `<button class="scm-qa-load-more-question-button"></button>`
  );
  loadMoreButton.html(`
		<div class="scm-qa-load-more-question-btn-text">
			Load more
		</div>
	`);
  loadMoreContainer.html(loadMoreButton);

  if (this.questions.length > 0) {
    this.questions.forEach((question) => {
      let questionCard = new QuestionCard(question);
      let questionCardElement = questionCard.render();
      wrapper.append(questionCardElement);
      wrapper.append(
        $('<div class="scm-qa-body-question-divider"></div>')
      );
    });
  }

  $('#scm-row-qa-container').append(wrapper);
  $('#scm-row-qa-container').append(loadMoreContainer);

  if (this.totalQuestionsCount > settingApp.qaQuestionsPerLoad) {
    loadMoreContainer.toggleClass('visible');
  }

  let questionForm = factoryQuestionForm(
    settingApp.header_headerQuickLayout
  );
  questionForm.render();

  if (
    settingApp.header_headerQuickLayout == 'default-4' &&
    $('body').hasClass('no-reviews')
  ) {
    $('.scm-qa-ask-question-btn').on('click', function () {
      if ($('.scm-write-review').hasClass('show-write-form')) {
        $('.right-component .write-review-button').trigger('click');
      }
      $('.scm-qa-question-form-wrapper').toggleClass(
        'scm-qa-active-question-form'
      );
      helper.changeHeight();
    });

    $('.right-component .write-review-button').on('click', function () {
      if (
        $('.scm-qa-question-form-wrapper').hasClass(
          'scm-qa-active-question-form'
        )
      ) {
        $('.right-component .scm-qa-ask-question-btn').trigger('click');
      }
    });
  } else {
    $('.scm-qa-ask-question-btn').on('click', function () {
      if ($('.scm-write-review').hasClass('show-write-form')) {
        $('.right-header .write-review-button').trigger('click');
      }
      $('.scm-qa-question-form-wrapper').toggleClass(
        'scm-qa-active-question-form'
      );
      helper.changeHeight();
    });

    $('.right-header .write-review-button').on('click', function () {
      if (
        $('.scm-qa-question-form-wrapper').hasClass(
          'scm-qa-active-question-form'
        )
      ) {
        $('.right-header .scm-qa-ask-question-btn').trigger('click');
      }
    });
  }

  $('.scm-qa-load-more-question-button').on('click', function () {
    let btn = $(this);
    btn.toggleClass('loading-submit-button');
    btn.prop('disabled', true);

    ajaxModule.fetchQuestions();
  });
  $(document).on('click', '.scm-qa-load-more-answer-btn', function () {
    $(this).toggleClass('loading-submit-button');
    $(this).prop('disabled', true);
    let questionItemWrapper = $(this).closest('.scm-qa-question-item');
    let questionId = questionItemWrapper.attr('data-question-id');
    let currentAnswerPage = questionItemWrapper.attr(
      'data-current-answer-page'
    );
    ajaxModule.fetchAnswers(questionId, currentAnswerPage);
  });
};

function LayoutClass(checkTrueProduct,blockReviewFirst,reviewsProductInFo){
  this.checkTrueProduct= checkTrueProduct;
  this.blockReviewFirst= blockReviewFirst;
  this.reviewsProductInFo= reviewsProductInFo;
};
LayoutClass.prototype.bannerCharge= function(){
  let htmlContent= '';
  htmlContent= settingApp.useExampleData ? htmlContent + `<p>The widget you see here is simply a simulation, displaying sample data.<a style="margin-left: 3px;" href="https://admin.shopify.com/store/${settingApp.shop_name}/apps/smart-aliexpress-reviews/review-groups" target='_blank'>Visit here to customize the review source.</a> </p>` : htmlContent + '';
  htmlContent= (!settingApp.canUseLayout) ? htmlContent + `<p>This widget is not available on your current plan. Upgrade to display this widget.<a style="margin-left: 3px;" href="https://admin.shopify.com/store/${settingApp.shop_name}/apps/smart-aliexpress-reviews/pricing-plans" target='_blank'>Upgrade plan.</a></p>` : htmlContent + '';
  if(settingApp.wrongProductPageAdvanceWidget){
    htmlContent= `<p>This source only work in product page template</p>`;
  }
  let html= `<div class="banner-layout">${htmlContent}</div>`;
  if(settingApp.preview && (settingApp.useExampleData || !settingApp.canUseLayout || settingApp.wrongProductPageAdvanceWidget) ){
    $('body').prepend(html);
  }
}
LayoutClass.prototype.bannerChooseLayout= function(){
  let htmlContent= '';
  htmlContent= settingApp.no_select_layout ? htmlContent + `
 <img src="${settingApp.cdn}/images/logoBanner.png" />
<p class='title-banner'>
Choose Widget type on the sidebar setting
</p>
<p>Choose the layout you want from the Widget type options on the sidebar, and preview it here.</p>` : htmlContent + '';
  let html= `<div class="banner-layout choose-type-layout">${htmlContent}</div>`;
  if(settingApp.preview && settingApp.no_select_layout){
    $('body').prepend(html);
  }
}
LayoutClass.prototype.headerAction= function(){

};

LayoutClass.prototype.addActionOnChangeSizeWindow= function(){
  $(window).resize(function() {
    helper.changeHeight();
  });
}
LayoutClass.prototype.bodyAction= function(){
  $('#reviewImporter').addClass(settingApp.body_layout ? settingApp.body_layout : "grid");
  $('body').addClass(settingApp.twoColumnsOnMobile ? 'two-colum-mobile' : "");
};
LayoutClass.prototype.generalAction= function(){
  helper.loadFontGoogle();
  if(helper.checkLayoutCustomFull()){
    $("body").addClass("body-default-custom");
    $("body").addClass("header-default-custom");
  }else{
    $('body').addClass(settingApp.headerClass);
    $('body').addClass(settingApp.bodyClass);
  }
};
LayoutClass.prototype.addRevalueCart= function(){
  if(helper.getUrlParameter('source')){
    let source= helper.getUrlParameter('source');
    let productShopifyId= helper.getUrlParameter('productId');
    let idReview= helper.getUrlParameter('idReview');
    //cartShopify.setCart(source,productShopifyId,idReview);
  }
};
LayoutClass.prototype.body='';
LayoutClass.prototype.header='';
LayoutClass.prototype.writeFormAction='';
LayoutClass.prototype.addLoaderForBody= function (){

}
LayoutClass.prototype.loadCss= function (){
  if(helper.checkLayoutCustomFull()){
    // helper.loadLinkCss(`https://reviews-importer.test/storage/customCssJs/test-review-1/customLayout.css?version=${settingApp.version}`);
    helper.loadLinkCss(`https://d1rc46soeuwz3b.cloudfront.net/${settingApp.shop_name}/custom-file/css-customization.css?version=${settingApp.versionUpdate}`);
  }else{
    helper.loadLinkCss(`${helper.getCssIframeByFileName(`scm-review-importer-body-${settingApp.body_bodyQuickLayout}`)}`);
    helper.loadLinkCss(`${helper.getCssIframeByFileName(`scm-review-importer-header-${settingApp.header_headerQuickLayout}`)}`);
  }
}
LayoutClass.prototype.init=  function(){
  this.loadCss();
  if(settingApp.no_select_layout){
    this.bannerChooseLayout();
    helper.changeHeight();
    return false;
  }
  this.bannerCharge();
  this.header= factoryHeaderLayout(this.reviewsProductInFo,this.checkTrueProduct);
  this.header.init();
  this.body=  factoryBodyLayout(this.checkTrueProduct,this.blockReviewFirst);
  this.body.init();
  if(settingApp.rtl){
    $('body').addClass('rtl');
  }
  if(settingApp.type == 'product') {
    if (settingApp.tabProduct || settingApp.qaEnabled) {
      let tabContainer= new TabContainer();
      let tabHtml= tabContainer.init();
      $("#reviewImporter").prepend(tabHtml);
    }
  }

  if (settingApp.type == 'product' && settingApp.qaEnabled) {
    let scmRowQA = $('<div id="scm-row-qa-container"></div>');
    let scmQAValues = $(
      '<div id="scm-qa-values" data-current-question-page="1"></div>'
    );
    scmRowQA.prepend(scmQAValues);
    $('#reviewImporter .container-tab').after(scmRowQA);

    if (typeof qaData !== 'undefined') {
      let qaContainer = new QABody(qaData);
      qaContainer.init();
    }
  }

  if(settingApp.checkSortReview && settingApp.type == 'product'){
    let sortItem= new sortReviewsModule();
    sortItem.init();
  }
  this.addActionOnChangeSizeWindow();
  this.headerAction();
  this.bodyAction();
  this.generalAction();
  this.addRevalueCart();
  this.writeFormAction= new WriteFormAction();
  this.writeFormAction.init();
  helper.addStyleOnHead();
  helper.popupReviews();
  this.addLoaderForBody();
  setTimeout(function () {
    helper.changeHeight();
  },3000);
  let tabCurrent= $('body').attr('data-tab');
  let elementTabActive= `.button-tab[data-tab="${tabCurrent}"]`;
  $(elementTabActive).addClass('active');
  if(typeof Weglot != 'undefined'){
    Weglot.on("languageChanged", function (){
      helper.changeHeight();
    });
  };
};
/* infoShop declare on the file content-iframe on the theme */
/* idProduct get from meta field idProduct declare on the file content-iframe on the theme */
/*  blockReviewFirst get from meta field blockReviewFirst declare on the file content-iframe on the theme */
/*  reviewsInFo get from meta field reviewsInFo declare on the file content-iframe on the theme */
function initWidget($){
  let reviewsProductInFo = reviewsInFo;
  /*  on version default is a string base64 */
  if(typeof reviewsProductInFo === 'string'){
    reviewsProductInFo= helper.parseJsonFromMetaField(reviewsProductInFo);
  }
  let checkTrueProduct= (function() {
    if(reviewsProductInFo.product_shopify_id){
      if(reviewsProductInFo.product_shopify_id !== settingApp.product_id){
        return false;
      }
    }
    return true;
  })();
  if(settingApp.preview && settingApp.typePage == 'homePage'){
    let checkNullReviews= false;
    if(blockReviewFirst == '' || !blockReviewFirst ){
      checkNullReviews= true;
    }else{
      let blockFirst= helper.parseJsonFromMetaField(blockReviewFirst);
      if(blockFirst.reviews.length == 0){
        checkNullReviews= true;
      }
    }
    if(checkNullReviews){
      blockReviewFirst= dataExample.reviews;
      settingApp.useExampleData= true;
    }
  }
  let layout= new LayoutClass(checkTrueProduct,blockReviewFirst,reviewsProductInFo);
  layout.init();

  // setTimeout(function () {
  //   laiPaginate.setAllData(filterParamTotalPaginate(200), 1);
  // }, 5000);
  function onChangeTabReviewsShop(){
    $("#scm-row-qa-container").removeClass('visible');
    $('body').attr('data-tab','3');
    $('#reviewImporter > .scm-row').removeClass('invisible');
    let blockFirstReviewsJson= tabReviews ? helper.parseJsonFromMetaField(tabReviews) : "";
    let replace= true;
    if(typeof blockFirstReviewsJson.total == 'undefined'){
      helper.callChangePaginate(100 );
    }else{
      helper.callChangePaginate(blockFirstReviewsJson.total);
    }
    ajaxModule.reBuildWidgetWithNewReviews(blockFirstReviewsJson.reviews,blockFirstReviewsJson.loadMore, replace);
    $("#scm-review-importer-value").attr('data-pagecurrent',1);
    $(".item-progress-bar").removeClass('active');
    $(".group-progress-bar").removeClass('active');
  }
  function onChangeTabProductReviews(){
    $("#scm-row-qa-container").removeClass('visible');
    $('body').attr('data-tab','1');
    $('#reviewImporter > .scm-row').removeClass('invisible');
    let blockFirstReviewsJson= blockReviewFirst && checkTrueProduct ? helper.parseJsonFromMetaField(blockReviewFirst) : "";
    let replace= true;
    ajaxModule.reBuildWidgetWithNewReviews(blockFirstReviewsJson.reviews,blockFirstReviewsJson.loadMore, replace);
    let total=  $('#scm-review-importer-value').attr(`data-pr-total`);
    helper.callChangePaginate(total);
    $("#scm-review-importer-value").attr('data-pagecurrent',1);
    $("#scm-review-importer-value").attr('data-rate',null);
    $(".item-progress-bar").removeClass('active');
    $(".group-progress-bar").removeClass('active');
    $("#all-rate").closest('.item-progress-bar').addClass('active');
  }
  function onChangeQATab() {
    if ($('body').attr('data-tab') != '4') {
      $('body').attr('data-tab', '4');
      $('#reviewImporter > .scm-row').addClass('invisible');
      $('#reviewImporter > .scm-pagination-load-more').removeClass(
        'visible'
      );
      $('.item-progress-bar').removeClass('active');
      $('.group-progress-bar').removeClass('active');

      $('#scm-row-qa-container').addClass('visible');
      helper.changeHeight();
    }
  }

  $(document).on('click', '.button-tab[data-tab=3]', function() {
    onChangeTabReviewsShop();
  });
  $(document).on('click', '.button-tab[data-tab=1]', function() {
    onChangeTabProductReviews();
  });
  $(document).on('click', '.button-tab[data-tab=4]', function () {
    onChangeQATab();
  });

  helper.changeHeight();
  setTimeout(function () {
    helper.changeHeight();
  },3000);
}
(function($) {
  $(document).ready(function() {
    if(settingApp.canUseLayout || settingApp.preview){
      try {
        initWidget($);
        setTimeout(function(){
          helper.changeHeight(1);
        },4000);
      } catch (err) {
        console.log('fe-log', err);
        if (settingApp.cdn === "https://cdn.laireviews.com") {
          const options = {
            method: 'POST',
            headers: {
              accept: 'text/plain',
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              shopName: settingApp.shop_name,
              errorMessage: err.message,
              errorName: err.name,
              errorStack: err.stack,
              url: window.top.location.href,
              ua: window.navigator.userAgent
            })
          };
          fetch('https://lai-admin.smartifyapps.com/api/feLog', options)
        }
      }
    }else{
      helper.changeHeight();
    }
    helper.callCheckErrorLoadImage();
  });
  window.addEventListener('message', function(event) {
    if(event.data.type == "afterTranslating"){
      helper.changeHeight();
      setTimeout(function () {
        helper.changeHeight();
      },3000);
    }
  });
  $(document).on('headerReviewsPhoto', function(e, opts) {
    function createPhotoForHeader6(reviews) {
      let card2= new CardBodyLayoutImageOnly();
      let blockHtml='';
      let i=0;
      $.each(reviews,function (key,value) {
        blockHtml= blockHtml + card2.itemHtml(value);
        i++;
      });
      return blockHtml;
    }
    let blockFirstReviewsJsonPhoto= opts.blockFirstReviewsJsonPhoto;
    let htmlPhotoReviews= createPhotoForHeader6(blockFirstReviewsJsonPhoto);
    if(htmlPhotoReviews != ''){
      $('body').addClass('has-photo-header');
    }
    $('.images-container-reviews').html(htmlPhotoReviews);
    helper.changeHeight();
  });
  $(document).on('click','.block-star-avenge,.info',function (){
    $('.popup-rating').toggleClass('show-active');
  });
  $(document).on('click',function(event) {
    if(!$(event.target).closest(".left-header").length) {
      $(".popup-rating").removeClass('show-active');
    }
  });
})(jQuery);
