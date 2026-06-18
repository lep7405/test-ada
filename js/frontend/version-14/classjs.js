function inherit(c, p) {
  c.prototype= Object.assign({},p.prototype, c.prototype);
}
function HeaderLayoutAbtract(reviewsProductInFo,checkTrueProduct){
  this.reviewsProductInFo= reviewsProductInFo;
  this.checkTrueProduct= checkTrueProduct;
};
HeaderLayoutAbtract.prototype.init= function(){
  this.setHtml();
  this.createStarProgressBar();
  this.addActionFilterProgress();
  this.addReviewsInFo();
  this.ratingStarAvengerBlock();
  helper.htmlLoader($('.scm-btn-submit-row .loader'));
};
HeaderLayoutAbtract.prototype.createStarProgressBar= function(){
  let type= settingApp.starStyle;
  $(".group-progress-bar .item-progress-bar").each(function() {
    let el= $(this).find('.text-number');
    let number= parseInt($(this).attr('data-rate'));
    let html= ``;
    let i;
    for(i=5 ; i > 0;i--){
      if(i>number){
        html= html + helper.iconStar[type].none;
      }else{
        html= html + helper.iconStar[type].rating;
      }
    }
    el.html(html);
  });
};
HeaderLayoutAbtract.prototype.groupProgressBar= function (){
  return `
   <div class="group-progress-bar">
            <div id="rate-5" class="item-progress-bar" data-rate="5">
                <div class="text-number">
                </div>
                <div class="progress-bar">
                    <div style="max-width: 0%"></div>
                </div>
                <div class="total-number">0</div>
            </div>
            <div id="rate-4" class="item-progress-bar" data-rate="4">
                <div class="text-number">
                </div>
                <div class="progress-bar">
                    <div style="max-width: 0%"></div>
                </div>
                <div class="total-number">0</div>
            </div>
            <div id="rate-3" class="item-progress-bar" data-rate="3">
                <div class="text-number">
                </div>
                <div class="progress-bar">
                    <div style="max-width: 0%"></div>
                </div>
                <div class="total-number">0</div>
            </div>
            <div id="rate-2" class="item-progress-bar" data-rate="2">
                <div class="text-number">
                </div>
                <div class="progress-bar">
                    <div style="max-width: 0%"></div>
                </div>
                <div class="total-number">0</div>
            </div>
            <div id="rate-1" class="item-progress-bar" data-rate="1">
                <div class="text-number">
                </div>
                <div class="progress-bar">
                    <div style="max-width: 0%"></div>
                </div>
                <div class="total-number">0</div>
            </div>
        </div>
  `;
}
HeaderLayoutAbtract.prototype.headerAverage= function (){
  return `
    <div class="info ${settingApp.header_avgRatingShape}">
            <div class="number">
                <span id="average">5</span>
                <p>`+ languageModule.getLanguageByKey('box_reviews-average_info') + `</p>
            </div>
            <div class="text-number">
              `+ languageModule.getLanguageByKey('box_reviews-before_number') + `
                <span id="total-review">0</span>
                <span>`+ languageModule.getLanguageByKey('box_reviews-after_number') +`</span>
            </div>
        </div>
  `;
}
HeaderLayoutAbtract.prototype.scmRatingBlock= function(){
  return ` <div class="scm-rating">
        <p class="title">`+ languageModule.getLanguageByKey('box_reviews-title_info') + `</p>
        `+ this.headerAverage() + `
        `+ this.groupProgressBar() + `
      </div>
      `;
}
HeaderLayoutAbtract.prototype.createWriteReviewsButton= function(type= ''){
  if(settingApp.type !=="product"){
    return ``;
  }
  let componentBadgeDiscount= this.componentBadge();
  let classStyle= settingApp.header_writeReviewBtnShape;
  let html= ``;
  switch (type) {
    case "popup":
      html= `<button class="write-review-button popup-write ${classStyle}"><span>${languageModule.getLanguageByKey('box_write-title_write')}</span></button>`;
      break;
    default :
      html= `<button class="write-review-button toggle-write ${classStyle}"><span>${languageModule.getLanguageByKey('box_write-title_write')}</span></button>`;
      break;
  }

  if (settingApp.qaEnabled) {
    let askQuestionBtn = `
			<button class="scm-qa-ask-question-btn">
				${languageModule.getLanguageByKey('qaAskQuestionBtn')}
			</button>`;
    html = `${askQuestionBtn}${html}`
  }
  if(settingApp.discountEnabled){
    html = `${componentBadgeDiscount}${html}`;
  }
  return html;
};
HeaderLayoutAbtract.prototype.htmlHeader= function(type){
  let htmlResult= '';
  if(settingApp.header_reviewForm){
    return `
              <div class="scm-row">
                <div class="scm-col-6 left-header">
                    ` + this.scmRatingBlock() + `
                </div>
                <div class="scm-col-6 right-header">
                    `+ this.formWriteReview() + `
                </div>
              </div>
          `;
  };
  switch (type) {
    case 'popup':
      htmlResult= `
            <div class="scm-row">
              <div class="scm-col-6 left-header">
                  ` + this.scmRatingBlock() + `
              </div>
              <div class="scm-col-6 right-header ct-bt-write">
                  `+ this.brandMark() +`
                  `+ this.createWriteReviewsButton('popup') + `
              </div>
              <div class="scm-col-12 header-center content-popup-reviews">
                  `+ this.formWriteReview() + `
              </div>
            </div>
            `;
      break;
    default:
      htmlResult= `
            <div class="scm-row">
              <div class="scm-col-6 left-header">
                  ` + this.scmRatingBlock() + `
              </div>
              <div class="scm-col-6 right-header ct-bt-write">
                  `+ this.brandMark() +`
                  `+ this.createWriteReviewsButton("toggle") + `
              </div>
              <div class="scm-col-12 header-center content-toggle-reviews">
                  `+ this.formWriteReview() + `
              </div>
            </div>`
  }
  return htmlResult;
};
HeaderLayoutAbtract.prototype.brandMark= function() {
  if(settingApp.show_water_mark){
    return `
        <div class="brand-mark">
          <div class="brand-container">
              <span>Powered by</span><img src='${settingApp.cdn}/images/logoBrand.png'/>
          </div>
        </div>
    `;
  }else{
    return ``;
  }
};
HeaderLayoutAbtract.prototype.getHtml= function(type) {
  return this.htmlHeader(settingApp.header_reviewFormat);
};
HeaderLayoutAbtract.prototype.setHtml= function(){
  if(settingApp.type != 'page'){
    $('.header-container').html(this.getHtml(settingApp.headerLayout));
  }
};
HeaderLayoutAbtract.prototype.addStyleProgressBar= function(reviewsProductInFo,arrayRate){
  let divValue= $("#scm-review-importer-value");
  for( let i=1; i<=5; i++){
    let root= $("#rate-" + i);
    let withNumber= arrayRate[i] / reviewsProductInFo.total * 100;
    if(withNumber == 0){
      root.addClass("noRating");
    }
    root.find('.progress-bar div').css("max-width", withNumber+"%");
    root.find(".total-number").text('('+ arrayRate[i] +')');
    root.find(".total-number").attr('data-total', arrayRate[i]);
    divValue.attr(`data-rate${i}-total`,arrayRate[i]);
  }
};
HeaderLayoutAbtract.prototype.getAcceptMediaUpLoad= function(){
  if(settingApp.videoEnabled){
    return 'image/jpg,image/jpeg,image/png,video/quicktime,video/avi,video/mp4,video/x-ms-wmv,video/webm';
  }
  return 'image/jpg,image/jpeg,image/png';
}

HeaderLayoutAbtract.prototype.createCustomFormHtml = function () {
  const customForm = helper.getCustomFormData(settingApp.customForms);
  if (!customForm) return '';

  let customFormHtml = '';
  const questions = customForm.questions;
  questions.forEach((question) => {
    if (
      question.questionType !== 'text' &&
      (!question.options || !question.options.length)
    ) {
      return;
    }
    if (question.questionType === 'text') {
      customFormHtml += `<div class="scm-row">
					<div class="scm-cf-question-wrapper">
						<label class="scm-cf-question-label">${question.question} ${
        question.requireAnswer
          ? '<span class="scm-cf-required-indicator">*</span>'
          : ''
      }</label>
						<input name="${question.questionId}" type="text" placeholder="${
        question.title
      }" ${question.requireAnswer ? 'required' : ''}></input>
					</div>
				</div>`;
    } else if (question.questionType === 'single') {
      if (question.displayType === 'radio') {
        let optionsHtml = '';
        question.options.forEach((option, index) => {
          const isRequired =
            index === 0 && question.requireAnswer ? 'required' : '';
          optionsHtml += `<div class="scm-cf-radio-choice-wrapper">
						<input class="scm-cf-radio-btn" type="radio" id="${option.optionId}" value="${option.optionId}" name="${question.questionId}" ${isRequired}></input>
						<label class="scm-cf-radio-label" for="${option.optionId}">${option.name}</label>
					</div>`;
        });

        customFormHtml += `<div class="scm-row">
						<div class="scm-cf-question-wrapper">
							<label class="scm-cf-question-label">${
          question.question
        } ${
          question.requireAnswer
            ? '<span class="scm-cf-required-indicator">*</span>'
            : ''
        }</label>
							<div class="scm-cf-radio-choices-container">
								${optionsHtml}
							</div>
						</div>
					</div>`;
      } else if (question.displayType === 'select') {
        const isRequired = question.requireAnswer ? 'required' : '';

        let optionsHtml = '';
        question.options.forEach((option) => {
          optionsHtml += `
						<option value="${option.optionId}">${option.name}</option>
					`;
        });

        customFormHtml += `<div class="scm-row">
						<div class="scm-cf-question-wrapper">
							<label class="scm-cf-question-label">${
          question.question
        } ${
          question.requireAnswer
            ? '<span class="scm-cf-required-indicator">*</span>'
            : ''
        }</label>
							<select ${isRequired} name="${
          question.questionId
        }" class="scm-cf-select">
								<option value=""></option>
								${optionsHtml}
							</select>
						</div>
					</div>`;
      }
    } else if (question.questionType === 'multi') {
      if (question.displayType === 'checkbox') {
        let optionsHtml = '';
        const isRequired = question.requireAnswer ? 'required' : '';
        question.options.forEach((option) => {
          optionsHtml += `<div class="scm-cf-checkbox-choice-wrapper">
						<input class="scm-cf-checkbox-btn" type="checkbox" name="${question.questionId}" id="${option.optionId}" value="${option.optionId}" ${isRequired}></input>
						<label class="scm-cf-checkbox-label" for="${option.optionId}">${option.name}</label>
					</div>`;
        });

        // handle require for checkbox (remove required of other inputs when an input is checked)
        if (isRequired) {
          $(document).ready(function () {
            var requiredCheckboxes = $(
              `form#scm-form-review input[type="checkbox"][name="${question.questionId}"][required]`
            );
            requiredCheckboxes.change(function () {
              if (requiredCheckboxes.is(':checked')) {
                requiredCheckboxes.removeAttr('required');
              } else {
                requiredCheckboxes.attr('required', 'required');
              }
            });
          });
        }

        customFormHtml += `<div class="scm-row">
						<div class="scm-cf-question-wrapper">
							<label class="scm-cf-question-label">${
          question.question
        } ${
          question.requireAnswer
            ? '<span class="scm-cf-required-indicator">*</span>'
            : ''
        }</label>
							<div class="scm-cf-checkbox-choices-container">
								${optionsHtml}
							</div>
						</div>
					</div>`;
      }
    }
  });
  return customFormHtml;
};



HeaderLayoutAbtract.prototype.formWriteReview= function(){
  const customFormHtml = this.createCustomFormHtml();
  return `
        <div class="scm-write-review" data-url="${settingApp.host}/api/reviews/submit-shopify/image">
               <form id="scm-form-review" action="${settingApp.host}/api/reviews/submit-shopify" method="POST"
                     enctype="multipart/form-data" novalidate>
                   <h2>` +  languageModule.getLanguageByKey('box_write-title_write') +`</h2>
                   <div class="input-rating">
                       <p>` +  languageModule.getLanguageByKey('box_write-before_star') +`</p>
                       <div class="write-rating-star write-rating-star-group">
                           <div class="block-item-star nth-1 selected-star" data-value="1">
                               <i class="fas fa-star"></i>
                           </div>
                           <div class="block-item-star nth-2 selected-star" data-value="2">
                               <i class="fas fa-star"></i>
                           </div>
                           <div class="block-item-star nth-3 selected-star" data-value="3">
                               <i class="fas fa-star"></i>
                           </div>
                           <div class="block-item-star nth-4 selected-star" data-value="4">
                               <i class="fas fa-star"></i>
                           </div>
                           <div class="block-item-star nth-5 selected-star" data-value="5">
                               <i class="fas fa-star"></i>
                           </div>
                       </div>
                   </div>
                   <input id="rate-value" name="rating" type="hidden" value="5">
                   <input id="location" name="country" type="hidden" value="null">
                   <input name="product_shopify" type="hidden" value="${settingApp.product_id}">
                   <input id="email_attribute" name="email_attribute" type="hidden" value="">
                   <input name="shop" type="hidden" value="${settingApp.shop_name}">
                   <div class="scm-row author-email">
                       <div class="scm-col-6 author">
                           <label for="scm-input-author" class="scm-label">`+ languageModule.getLanguageByKey('box_write-label_name') +`</label>
                           <input id="scm-input-author" name="author" type="text" placeholder=" `+  languageModule.getLanguageByKey('box_write-input_name') +`" required="">
                           <span class="scm-field-error" data-for="author"></span>
                       </div>
                       <div class="scm-col-6 email">
                           <label for="scm-input-email" class="scm-label">` + languageModule.getLanguageByKey('box_write-label_email') +`</label>
                           <input id="scm-input-email" name="email" type="email" placeholder="` +  languageModule.getLanguageByKey('box_write-input_email') +`" required="">
                           <span class="scm-field-error" data-for="email"></span>
                       </div>
                   </div>
                   <div class="scm-row">
                       <div class="scm-col-12">
                           <label for="scm-input-review" class="scm-label">`+ languageModule.getLanguageByKey('box_write-label_text_area') +`</label>
                           <textarea id="scm-input-review" rows="4" name="review" placeholder="`+  languageModule.getLanguageByKey('box_write-input_text_area') +`" required=""></textarea>
                           <span class="scm-field-error" data-for="review"></span>
                       </div>
                   </div>
									 ${customFormHtml}
                   <div class="scm-row discount-row">
                       <div class="scm-col-12">
                            ${this.createTextDiscount()}
                       </div>
                   </div>
                   <div class="scm-row">
                       <div class="scm-col-12">
                           <label for="scm-upload" role="button" tabindex="0">
                             <svg aria-hidden="true" viewBox="0 0 512 512">
                               <path d="M472,312.642v139c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20v-139H0v139c0,33.084,26.916,60,60,60h392 c33.084,0,60-26.916,60-60v-139H472z"/>
                               <polygon points="256,0.358 131.716,124.642 160,152.926 236,76.926 236,388.642 276,388.642 276,76.926 352,152.926  380.284,124.642 "/>
                             </svg>` +  languageModule.getLanguageByKey('box_write-input_photo') +`
                             </label>
                           <input id="scm-upload" name="images" type="file" accept="${this.getAcceptMediaUpLoad()}"
                                  style="display: none;">
                           <ul class="group-load-img">
                           </ul>
                       </div>
                   </div>
                   <div class="scm-row">
                       <div class="scm-col-12 fail-style fail-escape" style="display: none;">
                           <p>` +  languageModule.getLanguageByKey('box_write-message_error_character') +`</p>
                       </div>
                       <div class="scm-col-12 fail-style fail-size" style="display: none;">
                           <p>`+  languageModule.getLanguageByKey('box_write-message_error_file_upload') +`</p>
                       </div>
                   </div>
                   <div class="scm-row">
                       <div class="scm-col-12 center-row scm-btn-submit-row">
                           <button type="submit" class="scm-btn-submit ${settingApp.header_submitBtnShape}"><i class="fa fa-spinner fa-spin"></i>` +  languageModule.getLanguageByKey('box_write-button_write') +`
                           </button>
                           <div class="loader"></div>
                       </div>
                   </div>
                   <div class="result-reviews">
                       <p class="success">` +  languageModule.getLanguageByKey('box_write-message_success') +`</p>
                       <p class="fail">` +  languageModule.getLanguageByKey('box_write-message_fail') +`</p>
                   </div>
               </form>
            ${this.componentMustLoginToWriteReview()}
           ${this.componentMustEnterOtherEmail()}
            ${this.componentMustOrderProduct()}
           </div>
           ${this.componentResultDiscount()}
       </div>
      `;
};
HeaderLayoutAbtract.prototype.addReviewsInFo= function(){
  let arrayRate= [];
  arrayRate[1]=  this.reviewsProductInFo.rate1 ? this.reviewsProductInFo.rate1 : 0;
  arrayRate[2]=  this.reviewsProductInFo.rate2 ? this.reviewsProductInFo.rate2 : 0;
  arrayRate[3]=  this.reviewsProductInFo.rate3 ? this.reviewsProductInFo.rate3 : 0;
  arrayRate[4]=  this.reviewsProductInFo.rate4 ? this.reviewsProductInFo.rate4 : 0;
  arrayRate[5]=  this.reviewsProductInFo.rate5 ? this.reviewsProductInFo.rate5 : 0;
  if(!this.checkTrueProduct){
    arrayRate[1]= 0;
    arrayRate[2]= 0;
    arrayRate[3]= 0;
    arrayRate[4]= 0;
    arrayRate[5]= 0;
    this.reviewsProductInFo.average= 0;
    this.reviewsProductInFo.total= 0;
  }
  $("#average").text(this.reviewsProductInFo.average ? this.reviewsProductInFo.average : 0);
  this.reviewsProductInFo.total= this.reviewsProductInFo.total ? this.reviewsProductInFo.total : 0;
  $("#total-review").text(this.reviewsProductInFo.total);
  $("#all-rate .total-number").text(`(${this.reviewsProductInFo.total})`);
  $("#all-rate .total-number").attr('data-total',this.reviewsProductInFo.total);
  $("#scm-review-importer-value").attr('data-pr-total',this.reviewsProductInFo.total);
  this.addStyleProgressBar(this.reviewsProductInFo,arrayRate);
  if(this.reviewsProductInFo.total == 0){
    $('body').addClass('no-reviews-product');
  }
};
HeaderLayoutAbtract.prototype.ratingStarAvengerBlock= function(){
};
HeaderLayoutAbtract.prototype.createRatingAvengeBlockIcon= function(value){
  let number = Math.floor(value + 0.5);
  let blockStar = '';
  for (let i = 0; i < number; i++) {
    blockStar = blockStar + helper.iconStar[settingApp.starStyle].rating;
  }
  for (let i = number; i < 5; i++) {
    blockStar = blockStar + helper.iconStar[settingApp.starStyle].none;
  }
  return blockStar;
};
HeaderLayoutAbtract.prototype.addActionFilterProgress= function(){
  $(document).on('click', '.item-progress-bar', function() {
    $('.scm-pagination-load-more').removeClass('visible');
    helper.addLoader();
    helper.changeHeight();
    const divValue = $('#scm-review-importer-value');
    if ($(this).hasClass('active')) {
      divValue.attr('data-pagecurrent', '1');
      divValue.attr('data-rate', 'null');
      $(this).removeClass('active');
      $('.group-progress-bar').removeClass('active');
      ajaxModule.callAjaxGetReview(true);
      let total=  $('#scm-review-importer-value').attr('data-pr-total');
      helper.callChangePaginate(total);
    } else {
      $('.item-progress-bar').removeClass('active');
      $(this).addClass('active');
      $('.group-progress-bar').addClass('active');
      const dataRate = $(this).attr('data-rate');
      divValue.attr('data-pagecurrent', '1');
      divValue.attr('data-rate', dataRate);
      let total=  $('#scm-review-importer-value').attr(`data-rate${dataRate}-total`);
      if(!dataRate || dataRate == 'null'){
        total=  $('#scm-review-importer-value').attr(`data-pr-total`);
      }
      helper.callChangePaginate(total);
      ajaxModule.callAjaxGetReview(true,dataRate);
    }
  });
};
HeaderLayoutAbtract.prototype.replaceDiscountValue= function(title){
  return title.replace(`{{discount_value}}`, `<span class="value-discount">${settingApp.discountValue}</span>`);
};
HeaderLayoutAbtract.prototype.createTextDiscount= function(){
  if(!settingApp.discountEnabled){
    return ``;
  }
  let title= languageModule.getLanguageByKey('discount-photo');
  title= this.replaceDiscountValue(title);
  return `<div class="discount-text-form">${helper.iconScm.discount}<div class="text-right">${title}</div></div>`;
};
HeaderLayoutAbtract.prototype.componentResultDiscount= function (){
  if(!settingApp.discountEnabled){
    return ``;
  }
  let title= languageModule.getLanguageByKey('discount-title');
  title= this.replaceDiscountValue(title);
  return `<div class="container-discount-result">
    <div class="result-has-code">
        <p class="title-discount">${title}</p>
        <p id="coupon-discount" class="coupon-discount">ZN3GJ6</p>
        <p class="alert-discount">${languageModule.getLanguageByKey('discount-des')}</p>
    </div>
    <p class="delay-coupon">${languageModule.getLanguageByKey('discount-coupon_waiting_message')}</p>
    <button  class="button-discount action-add-discount">${languageModule.getLanguageByKey('discount-action')}</button>
</div>`;
};
HeaderLayoutAbtract.prototype.componentBadge= function (){
  if(!settingApp.discountEnabled){
    return ``;
  }
  let title= languageModule.getLanguageByKey('discount-badge');
  title= this.replaceDiscountValue(title);
  return `
        <div class="container-discount-write-button">
          <div class="container-discount-button">
              <p class="title-discount">${helper.iconScm.discount}${title}</p>
          </div>
        </div>
`;
};
HeaderLayoutAbtract.prototype.createTextNumberAverage= function (){
  let average= this.reviewsProductInFo.average ? parseFloat(this.reviewsProductInFo.average).toFixed(1) : 0;
  let numberAverage= average != 5 ? average : `5.0`;
  $("#average").text(numberAverage);
};
HeaderLayoutAbtract.prototype.componentThankYou= function (){
  return `
        <div class="thank-you-component">
            <h2>${languageModule.getLanguageByKey('thank_you-title')}</h2>
            <div class="thank-you-rating">
                ${helper.iconStar[settingApp.starStyle].rating}
                ${helper.iconStar[settingApp.starStyle].rating}
                ${helper.iconStar[settingApp.starStyle].rating}
                ${helper.iconStar[settingApp.starStyle].rating}
                ${helper.iconStar[settingApp.starStyle].rating}
            </div>
            <p>${languageModule.getLanguageByKey('thank_you-des')}</p>
      </div>
    `;
};
HeaderLayoutAbtract.prototype.componentMustLoginToWriteReview= function (){
  return settingApp.enable_login_required ? `<div class="must-login-to-write">
            <p>${languageModule.getLanguageByKey('box_write-log_in_to_leave_reviews')}</p>
        </div>` : '';
}
HeaderLayoutAbtract.prototype.componentMustEnterOtherEmail= function (){
  return settingApp.enable_order_required  ? `<div class="must-has-order">
            <p>${languageModule.getLanguageByKey('box_write-purchase_to_leave_reviews')}</p>
        </div>` : '';
}
HeaderLayoutAbtract.prototype.componentMustOrderProduct= function (){
  return settingApp.enable_order_product_required  ? `<div class="must-order-current-product">
            <p>${languageModule.getLanguageByKey('box_write-purchase_to_a_specific_product')}</p>
        </div>` : '';
}
HeaderLayoutAbtract.prototype.componentEmptyPage= function(){
  return `
          <div class="empty-component">
            <div class="left-component">
                  <h2> ${languageModule.getLanguageByKey('empty_page-title')}</h2>
                  <p> ${languageModule.getLanguageByKey('empty_page-des')}</p>
            </div>
            <div class="right-component">
                ${this.createWriteReviewsButton(settingApp.header_reviewFormat)}
            </div>
          </div>
    `;
};
HeaderLayoutAbtract.prototype.createRatingAvengeBlockIcon= function(value){
  let blockStar = '';
  if(value != 0){
    let number = Math.floor(value); //4
    let decimal = value - number;
    decimal= decimal.toFixed(2)*100; // 60
    if(number < 5){
      for (let i = 0; i <= number; i++) {
        let style="";
        if( i == number){
          style= "width: " + decimal + `%;`;
        }
        blockStar = blockStar + '<div class="lai-group-star">' + '<div class= "lai-star-rating" style= "' + style + '">' + helper.iconStar[settingApp.starStyle].rating + '</div>' + '<div class= "lai-star-rating-none">'+ helper.iconStar[settingApp.starStyle].none + '</div>' + '</div>';
      }
      for (let i = (number + 1); i < 5; i++) {
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none + '</div>';
      }
    }
    else{
      for (let i = 0; i < 5; i++) {
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].rating + '</div>';
      }
    }

  }else{
    for (let i = 0; i < 5; i++) {
      blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none + '</div>';
    }
  }
  return blockStar;
};

function HeaderLayout6(reviewsProductInFo,checkTrueProduct){
  HeaderLayoutAbtract.call(this, reviewsProductInFo,checkTrueProduct);
};
HeaderLayout6.prototype.ratingStarAvengerBlock= function(){
  this.createTextNumberAverage();
  let blockStarAvenge= this.createRatingAvengeBlockIcon(this.reviewsProductInFo.average ? parseFloat(this.reviewsProductInFo.average)  : 0);
  $('.block-star-avenge').html(blockStarAvenge);
};
HeaderLayout6.prototype.createStarProgressBar= function(){
  let type= settingApp.starStyle;
  $(".group-progress-bar .item-progress-bar").each(function() {
    let el= $(this).find('.text-number');
    let number= parseInt($(this).attr('data-rate'));
    let html= ``;
    html= `<span>` + number + `</span>` + helper.iconStar[type].rating;
    el.html(html);
  });
};
HeaderLayout6.prototype.scmRatingBlock= function(){
  return ` <div class="scm-rating">
        <p class="title">`+ languageModule.getLanguageByKey('box_reviews-title_info') + `</p>
        <div class="scmRatingCol scmRating1">
            `+ this.headerAverage() + `
        </div>
        <div class="scmRatingCol scmRating2">
            `+ this.groupProgressBar() + `
        </div>
        <div class="scmRatingCol scmRating3">
            <div class="images-container-reviews"></div>
        </div>

      </div>
      `;
}
HeaderLayout6.prototype.headerAverage= function (){
  return `
    <div class="info ${settingApp.header_avgRatingShape}">
            <div class="number">
                <span id="average">5</span>
            </div>
             <div class="block-star-avenge">
            </div>
            <div class="text-number">
                <span id="total-review">0</span>
                <span>`+ languageModule.getLanguageByKey('box_reviews-after_number') +`</span>
            </div>

        </div>
  `;
}
HeaderLayout6.prototype.htmlHeader= function(type){
  let htmlResult= '';
  if(settingApp.header_reviewForm){
    return `
              <div class="scm-row">
                <div class="scm-col-8 left-header">
                    ` + this.scmRatingBlock() + `
                </div>
                <div class="scm-col-2 right-header">
                <div class="images-container-reviews"></div>
                <div class="button-container">
                    `+ this.formWriteReview() + `
                </div>
                </div>
              </div>
          `;
  };
  switch (type) {
    case 'popup':
      htmlResult= `
            <div class="scm-row">
              <div class="scm-col-8 left-header">
                  ` + this.scmRatingBlock() + `
              </div>
              <div class="scm-col-2 right-header ct-bt-write">
                <div class="buttons-container">
                  `+ this.createWriteReviewsButton("popup") +`
                </div>
              </div>
              <div class="scm-col-12 header-center content-popup-reviews">
                  `+ this.formWriteReview() + `
              </div>
            </div>
            `;
      break;
    default:
      htmlResult= `
            <div class="scm-row">
              <div class="scm-col-8 left-header">
                  ` + this.scmRatingBlock() + `
              </div>
              <div class="scm-col-2 right-header ct-bt-write">
                <div class="buttons-container">
                  `+ this.createWriteReviewsButton("toggle") + `
                </div>
              </div>
              <div class="scm-col-12 header-center content-toggle-reviews">
                  `+ this.formWriteReview() + `
              </div>
            </div>`
  }
  return htmlResult;
};
inherit(HeaderLayout6,HeaderLayoutAbtract);
function HeaderLayout5(reviewsProductInFo,checkTrueProduct){
  HeaderLayoutAbtract.call(this, reviewsProductInFo,checkTrueProduct);
};

HeaderLayout5.prototype.htmlHeader= function(type){
  let icon= helper.iconScm.chev_down;
  let htmlResult= '';
  switch (type) {
    case 'popup':
      htmlResult=  `
            <div class="scm-row header">
              <div class="left-header scm-col-6">
                  <div class="block-star-avenge">
                    </div>
                    <div class="info">
                        <span id="average">5</span>
                        <span id="total-review">0</span>
                        <span>`+  languageModule.getLanguageByKey('box_reviews-after_number') + `</span>
                      </div>
                </div>
              <div class="right-header right-row  scm-col-6">
                  `+ this.brandMark() +`
                  `+ this.createWriteReviewsButton('popup') + `
               </div>
              </div>
               <div class="header-center">
                  <div class="content-popup-reviews">
                    `+ this.formWriteReview() + `
                </div>
            </div>`;
      break;
    default:
      htmlResult= `
              <div class="scm-row header">
                <div class="left-header scm-col-6">
                    <div class="block-star-avenge">
                      </div>
                      <div class="info">
                            <span class="icon-header">${icon}</span>
                          <span id="average">5</span>
                          (
                          <span id="total-review">0</span>
                          <span>`+  languageModule.getLanguageByKey('box_reviews-after_number') + `</span>
                          )
                        </div>
                        <div class="popup-rating">
                            ${this.scmRatingBlock()}
                        </div>
                  </div>
                <div class="right-header right-row  scm-col-6">
                    `+ this.createWriteReviewsButton('toggle') + `
                    <div id="sort-reviews-position">
                 </div>
                </div>
                 <div class="header-center">
                   <div class="content-toggle-reviews">
                      `+ this.formWriteReview() + `
                  </div>
              </div>`;
  }
  return htmlResult;
};
function HeaderLayout5(reviewsProductInFo,checkTrueProduct){
  HeaderLayoutAbtract.call(this, reviewsProductInFo,checkTrueProduct);
};


HeaderLayout5.prototype.createRatingAvengeBlockIcon= function(value){
  let blockStar = '';
  if(value != 0){
    let number = Math.floor(value); //4
    let decimal = value - number;
    decimal= decimal.toFixed(2)*100; // 60
    if(number < 5){
      for (let i = 0; i <= number; i++) {
        let style="";
        if( i == number){
          style= "width: " + decimal + `%;`;
        }
        blockStar = blockStar + '<div class="lai-group-star">' + '<div class= "lai-star-rating" style= "' + style + '">' + helper.iconStar[settingApp.starStyle].rating + '</div>' + '<div class= "lai-star-rating-none">'+ helper.iconStar[settingApp.starStyle].none + '</div>' + '</div>';
      }
      for (let i = (number + 1); i < 5; i++) {
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none + '</div>';
      }
    }
    else{
      for (let i = 0; i < 5; i++) {
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].rating + '</div>';
      }
    }

  }else{
    for (let i = 0; i < 5; i++) {
      blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none + '</div>';
    }
  }
  return blockStar;
};

HeaderLayout5.prototype.ratingStarAvengerBlock= function(){
  this.createTextNumberAverage();
  let blockStarAvenge= this.createRatingAvengeBlockIcon(this.reviewsProductInFo.average ? parseFloat(this.reviewsProductInFo.average)  : 0);
  $('.block-star-avenge').html(blockStarAvenge);
};
HeaderLayout5.prototype.htmlHeader= function(type){
  let htmlResult= '';
  switch (type) {
    case 'popup':
      htmlResult=  `
             <div class="scm-row header">
                <div class="left-header scm-col-12">
                  <p class="title-lai">
                    `+  languageModule.getLanguageByKey('box_reviews-title_info') + `
                  </p>
                  <div class="info">
                    <span id="average">5</span>
                     <div class="block-star-avenge">
                      </div>
                  </div>
                         <div class="text-number">
                            `+ languageModule.getLanguageByKey('box_reviews-before_number') + `
                              <span id="total-review">0</span>
                              <span>`+ languageModule.getLanguageByKey('box_reviews-after_number') +`</span>
                          </div>
                          <div class="container-button">
                          `+ this.createWriteReviewsButton('popup') + `
                            </div>

                    </div>
                </div>
               <div class="header-center">
                  <div class="content-popup-reviews">
                    `+ this.formWriteReview() + `
                </div>
            </div>`;
      break;
    default:
      htmlResult= `
              <div class="scm-row header">
                <div class="left-header scm-col-12">
                  <p class="title-lai">
                    `+  languageModule.getLanguageByKey('box_reviews-title_info') + `
                  </p>
                  <div class="info">
                    <span id="average">5</span>
                     <div class="block-star-avenge">
                      </div>
                  </div>
                         <div class="text-number">
                            `+ languageModule.getLanguageByKey('box_reviews-before_number') + `
                              <span id="total-review">0</span>
                              <span>`+ languageModule.getLanguageByKey('box_reviews-after_number') +`</span>
                          </div>
                          <div class="container-button">
                          `+ this.createWriteReviewsButton('toggle') + `
                            </div>

                    </div>
                </div>
                 <div class="header-center">
                   <div class="content-toggle-reviews">
                      `+ this.formWriteReview() + `
                  </div>
              </div>`;
  }
  return htmlResult;
};
inherit(HeaderLayout5,HeaderLayoutAbtract);
function HeaderLayout4(reviewsProductInFo,checkTrueProduct){
  HeaderLayoutAbtract.call(this, reviewsProductInFo,checkTrueProduct);
};

HeaderLayout4.prototype.formWriteReview= function(){
  const customFormHtml = this.createCustomFormHtml();
  return `
        <div class="scm-write-review" data-url="${settingApp.host}/api/reviews/submit-shopify/image">
               <form id="scm-form-review" action="${settingApp.host}/api/reviews/submit-shopify" method="POST"
                     enctype="multipart/form-data" novalidate>
                   <div class="input-rating">
                       <p>` +  languageModule.getLanguageByKey('box_write-before_star') +`</p>
                       <div class="container-input-rating">
                         <div class="write-rating-star write-rating-star-group">
                             <div class="block-item-star nth-1 selected-star" data-value="1">
                                 <i class="fas fa-star"></i>
                             </div>
                             <div class="block-item-star nth-2 selected-star" data-value="2">
                                 <i class="fas fa-star"></i>
                             </div>
                             <div class="block-item-star nth-3 selected-star" data-value="3">
                                 <i class="fas fa-star"></i>
                             </div>
                             <div class="block-item-star nth-4 selected-star" data-value="4">
                                 <i class="fas fa-star"></i>
                             </div>
                             <div class="block-item-star nth-5 selected-star" data-value="5">
                                 <i class="fas fa-star"></i>
                             </div>
                         </div>
                     </div>
                   </div>
                   <input id="rate-value" name="rating" type="hidden" value="5">
                   <input id="location" name="country" type="hidden" value="null">
                   <input name="product_shopify" type="hidden" value="${settingApp.product_id}">
                   <input id="email_attribute" name="email_attribute" type="hidden" value="">
                   <input name="shop" type="hidden" value="${settingApp.shop_name}">
                   <div class="container-content-form">
                     <div class="left-form">
                         <div class="scm-upload">
                             <label for="scm-upload">
                                 <div class="container-text-upload">
                                     `+ helper.iconScm.photo_svg_plus + languageModule.getLanguageByKey('box_write-input_photo') +`
                                 </div>
                               </label>
                             <input id="scm-upload" name="images" type="file" accept="${this.getAcceptMediaUpLoad()}"
                                    style="display: none;">
                             <ul class="group-load-img">
                             </ul>
                         </div>
                     </div>
                     <div class="right-form">
                         <div class="scm-block-input">
                             <label for="scm-input-author" class="scm-label">`+ languageModule.getLanguageByKey('box_write-label_name') +`</label>
                             <input id="scm-input-author" name="author" type="text" placeholder="`+  languageModule.getLanguageByKey('box_write-input_name') +`" required="">
                             <span class="scm-field-error" data-for="author"></span>
                         </div>
                         <div class="scm-block-input">
                             <label for="scm-input-email" class="scm-label">` + languageModule.getLanguageByKey('box_write-label_email') +`</label>
                             <input id="scm-input-email" name="email" type="email" placeholder="` +  languageModule.getLanguageByKey('box_write-input_email') +`" required="">
                             <span class="scm-field-error" data-for="email"></span>
                         </div>
                         <div class="scm-block-input">
                             <label for="scm-input-review" class="scm-label">`+ languageModule.getLanguageByKey('box_write-label_text_area') +`</label>
                             <textarea id="scm-input-review" rows="10" name="review" placeholder="`+  languageModule.getLanguageByKey('box_write-input_text_area') +`" required=""></textarea>
                             <span class="scm-field-error" data-for="review"></span>
                         </div>
												 ${customFormHtml}
                     </div>
                  </div>
                   <div class="scm-row">
                           <div class="scm-col-12 fail-style fail-escape" style="display: none;">
                               <p>` +  languageModule.getLanguageByKey('box_write-message_error_character') +`</p>
                           </div>
                           <div class="scm-col-12 fail-style fail-size" style="display: none;">
                               <p>`+  languageModule.getLanguageByKey('box_write-message_error_file_upload') +`</p>
                           </div>
                   </div>
                   <div class="scm-row discount-row">
                        ${this.createTextDiscount()}
                    </div>
                  <div class="scm-row">
                           <div class="scm-col-12 center-row scm-btn-submit-row">
                                <button type="button" class="scm-cancel-form ${settingApp.header_submitBtnShape} toggle-write">` +  languageModule.getLanguageByKey('box_write-write_cancel') +`
                               </button>
                               <button type="submit" class="scm-btn-submit ${settingApp.header_submitBtnShape}"><i class="fa fa-spinner fa-spin"></i>` +  languageModule.getLanguageByKey('box_write-button_write') +`
                               </button>
                               <div class="loader"></div>
                           </div>
                       </div>
                   <div class="result-reviews">
                       <p class="success">` +  languageModule.getLanguageByKey('box_write-message_success') +`</p>
                       <p class="fail">` +  languageModule.getLanguageByKey('box_write-message_fail') +`</p>
                   </div>
               </form>
               ${this.componentThankYou()}
               ${this.componentMustLoginToWriteReview()}
                ${this.componentMustEnterOtherEmail()}
                ${this.componentMustOrderProduct()}
           </div>
           ${this.componentResultDiscount()}

       </div>
      `;
};

HeaderLayout4.prototype.createRatingAvengeBlockIcon= function(value){
  let blockStar = '';
  if(value != 0){
    let number = Math.floor(value); //4
    let decimal = value - number;
    decimal= decimal.toFixed(2)*100; // 60
    if(number < 5){
      for (let i = 0; i <= number; i++) {
        let style="";
        if( i == number){
          style= "width: " + decimal + `%;`;
        }
        if(typeof helper.iconStar[settingApp.starStyle].none_special != 'undefined'){
          blockStar = blockStar + '<div class="lai-group-star">' + '<div class= "lai-star-rating" style= "' + style + '">' + helper.iconStar[settingApp.starStyle].rating + '</div>' + '<div class= "lai-star-rating-none">'+ helper.iconStar[settingApp.starStyle].none_special + '</div>' + '</div>';
        }else{
          blockStar = blockStar + '<div class="lai-group-star">' + '<div class= "lai-star-rating" style= "' + style + '">' + helper.iconStar[settingApp.starStyle].rating + '</div>' + '<div class= "lai-star-rating-none">'+ helper.iconStar[settingApp.starStyle].none + '</div>' + '</div>';
        }
      }
      for (let i = (number + 1); i < 5; i++) {
        if(typeof helper.iconStar[settingApp.starStyle].none_special != 'undefined'){
          blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none_special + '</div>';
        }else{
          blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none + '</div>';
        }
      }
    }
    else{
      for (let i = 0; i < 5; i++) {
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].rating + '</div>';
      }
    }

  }else{
    for (let i = 0; i < 5; i++) {
      if(typeof helper.iconStar[settingApp.starStyle].none_special != 'undefined'){
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none_special + '</div>';
      }else{
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none + '</div>';
      }
    }
  }
  return blockStar;
};

HeaderLayout4.prototype.ratingStarAvengerBlock= function(){
  this.createTextNumberAverage();
  let blockStarAvenge= this.createRatingAvengeBlockIcon(this.reviewsProductInFo.average ? parseFloat(this.reviewsProductInFo.average) : 0);
  $('.block-star-avenge').html(blockStarAvenge);
};
HeaderLayout4.prototype.scmRatingBlock= function(){
  return `
        <div class="group-progress-bar">
              <div class="item-progress-bar active" data-rate="">
                  <div id="all-rate" class="text-number-group">
                      ${languageModule.getLanguageByKey('box_reviews-all_reviews')} <span class="total-number">0</span>
                </div>
            </div>
            <div class="item-progress-bar" data-rate="5">
                  <div id="rate-5" class="text-number-group">
                      <span>5</span> ${helper.iconStar[settingApp.starStyle].rating} <span class="total-number">0</span>
                </div>
            </div>
            <div class="item-progress-bar" data-rate="4">
                  <div id="rate-4" class="text-number-group">
                      <span>4</span>${helper.iconStar[settingApp.starStyle].rating}  <span class="total-number">0</span>
                </div>
            </div>
            <div  class="item-progress-bar" data-rate="3">
                  <div id="rate-3" class="text-number-group">
                      <span>3</span> ${helper.iconStar[settingApp.starStyle].rating}  <span class="total-number">0</span>
                </div>
            </div>
            <div class="item-progress-bar" data-rate="2">
                  <div id="rate-2" class="text-number-group">
                      <span>2</span> ${helper.iconStar[settingApp.starStyle].rating}  <span class="total-number">0</span>
                </div>
            </div>
            <div class="item-progress-bar" data-rate="1">
                  <div id="rate-1" class="text-number-group">
                      <span>1</span> ${helper.iconStar[settingApp.starStyle].rating}  <span class="total-number">0</span>
                </div>
            </div>
        </div>
        <div id="sort-reviews-position"></div>
      `;
};
HeaderLayout4.prototype.htmlHeader= function(type){
  let htmlResult= '';
  switch (type) {
    case 'popup':
      htmlResult=  `
            ${this.componentEmptyPage()}
            <div class="scm-row header">
              <div class="left-header scm-col-6">
                <div class="group-rating-avenge">
                  <div class="block-star-avenge">
                  </div>
                  <div class="info">
                    <span id="average">5</span>
                    <span class="total-reviews-group">(<span id="total-review">0</span>`+  languageModule.getLanguageByKey('box_reviews-after_number') + `)</span>
                  </div>
                </div>
              </div>
              <div class="right-header right-row  scm-col-6">
                  `+ this.brandMark() +`
                  `+ this.createWriteReviewsButton('popup') + `
               </div>
              </div>
               <div class="header-center">
                 <div class="content-popup-reviews">
                    `+ this.formWriteReview() + `
                </div>
            </div>
            <div class="rating-option-group">
            ` + this.scmRatingBlock() + `
            </div>
          `;
      break;
    default:
      htmlResult= `
            ${this.componentEmptyPage()}
            <div class="scm-row header">
              <div class="left-header scm-col-6">
                <div class="group-rating-avenge">
                  <div class="block-star-avenge">
                  </div>
                  <div class="info">
                    <span id="average">5</span>
                    <span class="total-reviews-group">(<span id="total-review">0</span>`+  languageModule.getLanguageByKey('box_reviews-after_number') + `)</span>
                  </div>
                </div>
              </div>
              <div class="right-header right-row  scm-col-6">
                  `+ this.brandMark() +`
                  `+ this.createWriteReviewsButton('toggle') + `
               </div>
              </div>
               <div class="header-center">
                 <div class="content-toggle-reviews">
                    `+ this.formWriteReview() + `
                </div>
            </div>
            <div class="rating-option-group">
            ` + this.scmRatingBlock() + `
            </div>
          `;
  }
  return htmlResult;
};
inherit(HeaderLayout4,HeaderLayoutAbtract);

function HeaderLayout3(reviewsProductInFo,checkTrueProduct){
  HeaderLayoutAbtract.call(this, reviewsProductInFo,checkTrueProduct);
};

HeaderLayout3.prototype.createRatingAvengeBlockIcon= function(value){
  let blockStar = '';
  if(value != 0){
    let number = Math.floor(value); //4
    let decimal = value - number;
    decimal= decimal.toFixed(2)*100; // 60
    if(number < 5){
      for (let i = 0; i <= number; i++) {
        let style="";
        if( i == number){
          style= "width: " + decimal + `%;`;
        }
        blockStar = blockStar + '<div class="lai-group-star">' + '<div class= "lai-star-rating" style= "' + style + '">' + helper.iconStar[settingApp.starStyle].rating + '</div>' + '<div class= "lai-star-rating-none">'+ helper.iconStar[settingApp.starStyle].none + '</div>' + '</div>';
      }
      for (let i = (number + 1); i < 5; i++) {
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none + '</div>';
      }
    }
    else{
      for (let i = 0; i < 5; i++) {
        blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].rating + '</div>';
      }
    }

  }else{
    for (let i = 0; i < 5; i++) {
      blockStar = blockStar + '<div class="lai-group-star">' + helper.iconStar[settingApp.starStyle].none + '</div>';
    }
  }
  return blockStar;
};

HeaderLayout3.prototype.ratingStarAvengerBlock= function(){
  this.createTextNumberAverage();
  let blockStarAvenge= this.createRatingAvengeBlockIcon(this.reviewsProductInFo.average ? parseFloat(this.reviewsProductInFo.average)  : 0);
  $('.block-star-avenge').html(blockStarAvenge);
};
HeaderLayout3.prototype.htmlHeader= function(type){
  let icon= helper.iconScm.chev_down;
  let htmlResult= '';
  switch (type) {
    case 'popup':
      htmlResult=  `
            <div class="scm-row header">
              <div class="left-header scm-col-6">
                  <div class="block-star-avenge">
                    </div>
                    <div class="info">
                        <span class="icon-header">${icon}</span>
                        <span id="average">5</span>
                        <span id="total-review">0</span>
                        <span>`+  languageModule.getLanguageByKey('box_reviews-after_number') + `</span>
                      </div>
                      <div class="popup-rating">
                          <div class="scm-rating">
                              ${this.groupProgressBar()}
                          </div>
                        </div>
                </div>
              <div class="right-header right-row  scm-col-6">
                  `+ this.brandMark() +`
                  `+ this.createWriteReviewsButton('popup') + `
               </div>
              </div>
               <div class="header-center">
                  <div class="content-popup-reviews">
                    `+ this.formWriteReview() + `
                </div>
            </div>`;
      break;
    default:
      htmlResult= `
              <div class="scm-row header">
                <div class="left-header scm-col-6">
                    <div class="block-star-avenge">
                      </div>
                      <div class="info">
                          <span class="icon-header">${icon}</span>
                          <span id="average">5</span>
                          <span id="total-review">0</span>
                          <span>`+  languageModule.getLanguageByKey('box_reviews-after_number') + `</span>
                        </div>
                         <div class="popup-rating">
                            <div class="scm-rating">
                                ${this.groupProgressBar()}
                            </div>
                        </div>
                  </div>
                <div class="right-header right-row  scm-col-6">
                    `+ this.brandMark() +`
                    `+ this.createWriteReviewsButton('toggle') + `
                 </div>
                </div>
                 <div class="header-center">
                   <div class="content-toggle-reviews">
                      `+ this.formWriteReview() + `
                  </div>
              </div>`;
  }
  return htmlResult;
};
inherit(HeaderLayout3,HeaderLayoutAbtract);
function moduleCookie(nameCookie){
  this.configuration ={
    expires: 365,
    path: '/',
    domain: window.location.hostname
  };
  this.name= nameCookie;
};
moduleCookie.prototype.write= function(value) {
  cookieHelper(this.name, value, this.configuration);
};
moduleCookie.prototype.read= function() {
  return cookieHelper(this.name);
};
moduleCookie.prototype.destroy= function() {
  cookieHelper(this.name, null, this.configuration);
};
function helpFullCookie(){
  this.arrayValue= '';
  this.cookieEl= new moduleCookie('sma_help_full');
  this.getOldValue();
  this.addActionClick();
};
helpFullCookie.prototype.getOldValue= function(){
  if(this.arrayValue == ''){
    this.arrayValue= JSON.parse(this.cookieEl.read());
  }
  if(!this.arrayValue){
    this.arrayValue = {};
  }
  return this.arrayValue
};
helpFullCookie.prototype.setNewValue= function (reviewsId,status,like,disLike){
  let timeClick = Date.now();
  this.arrayValue[reviewsId]={
    'status' : status,
    'like' : like,
    'disLike' : disLike,
    'time' : timeClick
  };
  this.cookieEl.write(JSON.stringify(this.arrayValue));
};
helpFullCookie.prototype.requestServer= function (status,reviewsId){
  const shopName =settingApp.shop_name;
  let urlSubmit= `${settingApp.host}/api/reviews/vote`;
  let data={
    "status" : status,
    "id" : reviewsId,
    "shop" : shopName
  };
  $.ajax({
    url: urlSubmit,
    type: 'POST',
    data: data
  })
    .done((result) => {
    })
    .fail(() => {
    });

};
helpFullCookie.prototype.addActionClick= function (){
  let _this= this;
  $(document).on('click', '.like', function() {
    let reviewsParent= $(this).closest('.item');
    let reviewsParentHelpFul= $(this).closest('.help-full');
    let reviewsId= reviewsParent.attr('data-reviewid');
    let oldStatus= reviewsParentHelpFul.attr('data-status');
    let newStatus= 1;
    if(oldStatus == '1'){
      newStatus= 0;
    }
    let newTotalLikeTag= reviewsParent.find('.like-number span');
    let newTotalLike= parseInt(newTotalLikeTag.text());
    if(newStatus == '1'){
      newTotalLike= newTotalLike + 1;
    }else{
      newTotalLike= newTotalLike - 1;
    };
    newTotalLikeTag.text(newTotalLike);
    let newTotalDisLikeTag= reviewsParent.find('.dis-like span');
    let newTotalDisLike= parseInt(newTotalDisLikeTag.text());
    if(oldStatus == '-1'){
      newTotalDisLike= parseInt(newTotalDisLikeTag.text()) - 1;
      newTotalDisLikeTag.text(newTotalDisLike);
    }
    reviewsParentHelpFul.attr('data-status',newStatus);
    _this.setNewValue(reviewsId,newStatus,newTotalLike,newTotalDisLike);
    _this.requestServer(newStatus,reviewsId);
  });
  $(document).on('click', '.dis-like', function() {
    let reviewsParent= $(this).closest('.item');
    let reviewsParentHelpFul= $(this).closest('.help-full');
    let reviewsId= reviewsParent.attr('data-reviewid');
    let oldStatus= reviewsParentHelpFul.attr('data-status');
    let newStatus= -1;
    if(oldStatus == '-1'){
      newStatus= 0;
    }
    let newTotalLikeTag= reviewsParent.find('.like-number span');
    let newTotalLike= parseInt(newTotalLikeTag.text());
    if(oldStatus == '1'){
      newTotalLike= newTotalLike - 1;
      newTotalLikeTag.text(newTotalLike);
    }
    let newTotalDisLikeTag= reviewsParent.find('.dis-like span');
    let newTotalDisLike= parseInt(newTotalDisLikeTag.text());
    if(newStatus == '-1'){
      newTotalDisLike= newTotalDisLike + 1 ;
    }else{
      newTotalDisLike= newTotalDisLike - 1;
    }
    newTotalDisLikeTag.text(newTotalDisLike);
    reviewsParentHelpFul.attr('data-status',newStatus);
    _this.setNewValue(reviewsId,newStatus,newTotalLike,newTotalDisLike);
    _this.requestServer(newStatus,reviewsId);
  });
};
let helpFullCookieEl= new helpFullCookie();
function bodyLayoutAbtract(checkTrueProduct,blockReviewFirst){
  this.checkTrueProduct= checkTrueProduct;
  this.blockReviewFirst= blockReviewFirst;
};
bodyLayoutAbtract.prototype.init= function(){
  this.actionLoadMoreButton();
  this.clickToShowPopupReview();
  this.createBlockFirstReviews();
  this.seeProductAction();
  this.layoutModule.init(settingApp.body_layout);
};
bodyLayoutAbtract.prototype.layoutModule= (function() {
  function customClassItemReview(item){
    let classItem="";
    if(item.imagesBlockHtml !=='' && item.imagesBlockHtml !='<div class="thumb-img"></div>'){
      classItem= 'has-photo';
      $('body').attr('photo-slider','true');
    }
    return classItem;
  };
  let slider= function(){
    helper.loadLinkCss('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css');
    helper.loadLinkCss('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css');
    $('body').addClass('scm-slider');
    $('.content-read-more').removeAttr("style");

    helper.loadScript(helper.getLinkJsIframeByFileName('slick'),function() {
      let $elSlickContainer= $('#reviewImporter > .scm-row');
      let configSlick= {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: settingApp.slider_item_homepage_desktopItems,
        arrows: true,
        dots: settingApp.slider_dots,
        slidesToScroll: settingApp.slider_to_scroll_desktopItems,
        prevArrow:`<svg class="slick-arrow-left" xmlns="http://www.w3.org/2000/svg" width="28.828" height="53.657" viewBox="0 0 28.828 53.657">
                              <path id="chevron-down" d="M0,0,24,24,48,0" transform="translate(26 2.828) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                            </svg>`,
        nextArrow:`<svg class="slick-arrow-right" xmlns="http://www.w3.org/2000/svg" width="28.828" height="53.657" viewBox="0 0 28.828 53.657">
                              <path id="chevron-down" d="M0,0,24,24,48,0" transform="translate(26 2.828) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                            </svg>`,
        autoplay: settingApp.slider_auto_slider,
        autoplaySpeed: settingApp.slider_time_between,
        rtl: settingApp.rtl,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: settingApp.slider_item_homepage_smallDesktopItems,
              slidesToScroll: settingApp.slider_to_scroll_smallDesktopItems,
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: settingApp.slider_item_homepage_tabletItems,
              slidesToScroll: settingApp.slider_to_scroll_tabletItems,
            }
          },
          {
            breakpoint: 500,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: settingApp.slider_item_mobileItems,
              slidesToScroll: settingApp.slider_to_scroll_mobileItems,
            }
          }
        ]
      };
      setTimeout(function(){
        $elSlickContainer.slick(configSlick);
        helper.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.1.8/imagesloaded.pkgd.min.js',function() {
          helper.loadLazyLoadImageOnload($('body'));
        });
        helper.changeHeight(1);
      },0);

      $(document).on('afterAjaxGetReviews', function(e, opts) {
        if (opts.replace) {
          $elSlickContainer.slick('unslick');
          $elSlickContainer.html(opts.item);
          $elSlickContainer.slick(configSlick);
        } else {
          $elSlickContainer.slick('slickAdd', opts.item);
          //$elSlickContainer.append(opts.item);
        }

        helper.loadLazyLoadImage($('body'));
        helper.callCheckErrorLoadImage();
        helper.postMessageAfterAppendReviews();
      });
    });
  };
  let grid = {
    el:  $('#reviewImporter .scm-row'),
    masonry : function(){
      let grid = this.el;
      let configMasonry ={
        itemSelector: '.item',
        gutter: 0
      };
      if(settingApp.rtl){
        configMasonry.originLeft= false;
      }
      let linkMasonry= 'https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js';
      if(settingApp.shopDomain=="vrimlo.com"){
        linkMasonry= 'https://cdn.laireviews.com/js/frontend/version-14/masonry.js?version=${settingApp.versionUpdate}';
      }
      helper.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.1.8/imagesloaded.pkgd.min.js',function() {
        helper.loadScript(linkMasonry,function() {
          grid.masonry(configMasonry);
          helper.changeHeight();
          grid.imagesLoaded(function () {
            grid.masonry(configMasonry);
            helper.changeHeight();
            setTimeout(function (){
              grid.masonry(configMasonry);
              helper.changeHeight();
            },4000);
          });
          function onLayout() {
            if(!settingApp.slider)
                helper.changeHeight(1);
          }
          grid.on( 'layoutComplete', onLayout );
          $(window).resize(function() {
            grid.imagesLoaded(function () {
              grid.masonry(configMasonry);
              helper.changeHeight();
            });
          });
          document.addEventListener("reloadGridLayout", function (e) {
            grid.imagesLoaded(function () {
              grid.masonry(configMasonry);
              helper.changeHeight();
            });
          });
          if(typeof Weglot != 'undefined'){
            Weglot.on("languageChanged", function (){
              grid.imagesLoaded(function () {
                grid.masonry(configMasonry);
                helper.changeHeight();
              });
            });
          }
          helper.loadLazyLoadImageOnload(grid,configMasonry);
          $(document).on('afterAjaxGetReviews', function(e, opts) {
            var $items = $(opts.item);
            if(opts.replace){
              $('#reviewImporter .scm-row').html(opts.item);
              grid.masonry('destroy');
              grid.masonry(configMasonry);
              helper.changeHeight();
              grid.imagesLoaded(function () {
                grid.masonry(configMasonry);
                helper.changeHeight();
              });
            }else{
              grid.append($items).imagesLoaded(function(){
                grid.masonry( 'appended', $items, true );
                helper.changeHeight();
              });
            }
            helper.loadLazyLoadImage(grid,configMasonry);
            helper.changeHeight();
            helper.callCheckErrorLoadImage();
            helper.postMessageAfterAppendReviews();
            window.addEventListener('message', function(event) {
              if(event.data.type == "afterTranslating"){
                grid.masonry(configMasonry);
              }
            });
            setTimeout(function (){
              grid.masonry(configMasonry);
            },2000);
            setTimeout(function (){
              grid.masonry(configMasonry);
            },4000);
          });
          helper.changeHeight();
        })
      })
    },
    changeHeight : function() {
      this.el.css('height','40px');
    },
    init : function() {
      let _this= this;
      if(!settingApp.slider){
        if($('#reviewImporter .scm-row').find('.item')){
          _this.masonry();
        }else{
          setTimeout(function (){
            _this.masonry();
          },1000)
        }
      }
    }
  };
  let list= {
    loadedImageAction : () =>{
      helper.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.1.8/imagesloaded.pkgd.min.js',function() {
        $('body').imagesLoaded( function() {
          helper.changeHeight();
        });
        helper.loadLazyLoadImageOnload($('body'));
      });
    },
    afterLoadMore : () => {
      $(document).on('afterAjaxGetReviews', function(e, opts) {
        if (opts.replace) {
          $('#reviewImporter .scm-row').html(opts.item);
        } else {
          $('#reviewImporter .scm-row').append(opts.item);
        }
        helper.loadLazyLoadImage($('body'));
        helper.callCheckErrorLoadImage();
        helper.postMessageAfterAppendReviews();
      });
    },
    init : function() {
      this.loadedImageAction();
      this.afterLoadMore();
    }
  };
  let init = function(layout) {
    if(layout==="grid"){
      this.grid.init();
    }else{
      this.list.init();
      setTimeout(function(){
        helper.changeHeight(1);
      },0)
    }
    if(settingApp.slider){
      slider();
    }
    helper.htmlLoader($('.loader-load-more'));
  };
  return {
    grid,
    list,
    init
  }
})();
bodyLayoutAbtract.prototype.createLoadMoreComponent= function (type=''){
  let html= ``;
  switch (type) {
    case 'popup':
      html= ` <button id="scm-btn-load-more" class="scm-btn-load-more ${settingApp.header_submitBtnShape}" aria-label="Load more reviews">`+  languageModule.getLanguageByKey('reviews_list-button_load_more') + `</button>`;
      break;
    default :
      html= ` <button id="scm-btn-load-more" class="scm-btn-load-more ${settingApp.header_submitBtnShape}" aria-label="Load more reviews">`+  languageModule.getLanguageByKey('reviews_list-button_load_more') + `</button>`;
      break;
  }
  $('.scm-pagination-load-more').html(html);
  if(!$('#scm-live-region').length) {
    $('body').append('<div id="scm-live-region" aria-live="polite" aria-atomic="true" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;"></div>');
  }
};
bodyLayoutAbtract.prototype.actionLoadMoreButton= function(){
  this.createLoadMoreComponent();
  $(document).on('click', '#scm-btn-load-more', function() {
    helper.addLoader();
    $('.scm-pagination-load-more').removeClass('visible');
    const divValue = $('#scm-review-importer-value');
    let page = divValue.attr('data-pagecurrent');
    const rate = divValue.attr('data-rate');
    // eslint-disable-next-line radix
    page = parseInt(page) + 1;
    divValue.attr('data-pagecurrent', page);
    ajaxModule.callAjaxGetReview(false,rate);
  });
};
bodyLayoutAbtract.prototype.clickToShowPopupReview= function(){
  function callbackReadMore($elButton,content = null,isActionShowPopup= false){
    if(content){
      $elButton.closest('.item').find('.content-full').html(content);
    }
    if(!isActionShowPopup){
      $elButton.closest('.item').addClass('show-full');
      const eventReloadGridLayout = document.createEvent('Event');
      eventReloadGridLayout.initEvent('reloadGridLayout', true, true);
      document.dispatchEvent(eventReloadGridLayout);
    }
    helper.changeHeight();
  }
  function updateTheFullContentReview($elButton,callbackShowPopup = null){
    let $elImageClickShowPopup= arguments[2];
    let $imageContainer= null;
    let isActionShowPopup= false;
    if($elImageClickShowPopup){
      $imageContainer= $elImageClickShowPopup.closest('.wrap-image');
      isActionShowPopup= true;
    }

    if(typeof callbackShowPopup === 'function'){
      let loaderPopup= `<div class="load-popup"></div>`;
      $imageContainer.append(loaderPopup);
      let $loader= $('.load-popup');
      helper.htmlLoader($loader);
    }

    let reviewId=  $elButton.closest('.item').attr('data-reviewid');
    let data={
      "shop" : settingApp.shop_name,
      "reviewId" : reviewId
    };
    $.ajax({
      url: `${settingApp.host}/api/get-review`,
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json',
      data,
      beforeSend(){
        $('body').addClass('loading');
      },
      success(data) {
        let content= data.review;
        callbackReadMore($elButton,content,isActionShowPopup);
      },
      error() {

      },
      complete() {
        if(typeof callbackShowPopup === 'function'){
          callbackShowPopup($elImageClickShowPopup);
          $imageContainer.find('.load-popup').remove();
        }
        $elButton.closest('.item').removeClass('no-full-content');
        $('body').removeClass('loading');
        helper.changeHeight();
      }
    });
  }
  $(document).on('click', '.read-more-button', function() {
    let $elButton= $(this);
    if($elButton.closest('.item').hasClass('no-full-content')){
      updateTheFullContentReview($elButton);
    }else{
      callbackReadMore($elButton);
    }
  });
  $(document).on('keydown', '.read-more-button', function(e) {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).trigger('click');
    }
  });
  function showPopup($_buttonClick){
    const item = $_buttonClick.closest('.item');
    const reviewID = item.attr('data-reviewid');
    let content = item.html();
    let photos = item.attr('data-photos');
    let videos = item.attr('data-videos') ? item.attr('data-videos') : '[]';
    let photoCheckJson=  JSON.parse(photos);
    if(!Array.isArray(photoCheckJson)){
      photos= photoCheckJson;
    }
    content = content.toString();
    photos = btoa(photos);
    videos = btoa(videos);
    const dataEvent = {
      type: 'createPopup',
      reviewID,
      content,
      photos,
      videos
    };
    parent.window.postMessage(dataEvent, '*');
  }
  let elsClickToShowPopup= `.thumb-img img,.thumb-img .number-img, .play-icon, .thumb-img img,.gallery`;
  $(document).on('click', elsClickToShowPopup, function() {
    let $thisButton= $(this);
    let $elButtonReadMore= $(this).closest('.item').find('.read-more-button');
    if($(this).closest('.item').hasClass('no-full-content') && $elButtonReadMore.length > 0){
      updateTheFullContentReview($elButtonReadMore,showPopup, $thisButton);
    }else{
      showPopup($thisButton);
    }

  });
};
bodyLayoutAbtract.prototype.paginateInit= function (total, errorTotal = false){
  $('body').addClass('paginate-used');
  function filterParamTotalPaginate(total){
    return Array(total)
      .fill()
      .map((_, i) => ({ index: i }))
  }
  function checkErrorTotalPaginate(errorTotal= false){
    if(errorTotal){
      $('body').addClass('error-total-paginate');
    }else{
      $('body').removeClass('error-total-paginate');
    }
  }
  checkErrorTotalPaginate(errorTotal);
  $('.scm-pagination-load-more').after('<div class="paginate_container"></div>');
  let perPageDefault= helper.getValueLoadPerPage();
  var laiPaginate = $(".paginate_container").laiPaginate({
    allData: filterParamTotalPaginate(total),
    itemsPerPage : perPageDefault,
    callback(paginate) {
      helper.addLoader();
      $('.scm-pagination-load-more').removeClass('visible');
      helper.changeHeight();
      $("#scm-review-importer-value").attr('data-pagecurrent', paginate.currentPage);
      const rate = $('#scm-review-importer-value').attr('data-rate');
      ajaxModule.callAjaxGetReview(true,rate);
    },
  });
  $(document).on('changePaginate', function(e, opts) {
    let total= typeof opts.total != 'undefined' ? opts.total : 100;
    if(typeof opts.itemsPerPage && opts.itemsPerPage){
      laiPaginate.setAllData(filterParamTotalPaginate(total),opts.itemsPerPage);
    }else{
      laiPaginate.setAllData(filterParamTotalPaginate(total));
    }
  });
}

bodyLayoutAbtract.prototype.createBlockFirstReviews =function(){
  let blockFirstReviewsJson= (this.blockReviewFirst && this.checkTrueProduct) ? helper.parseJsonFromMetaField(this.blockReviewFirst) : "";
  $('body').attr('data-tab','1');
  if(settingApp.type == 'product' && settingApp.tabProduct){
    if(
      blockFirstReviewsJson == '' ||
      typeof blockFirstReviewsJson.reviews == 'undefined' ||
      blockFirstReviewsJson.reviews == '' ||
      blockFirstReviewsJson.reviews.length == 0
    ){
      /** @var tabReviews global **/
      blockFirstReviewsJson= tabReviews ? helper.parseJsonFromMetaField(tabReviews) : "";
      $('body').attr('data-tab','3');
    }
  }
  if(blockFirstReviewsJson &&  typeof blockFirstReviewsJson.reviews != 'undefined' && blockFirstReviewsJson.reviews != ''){
    if(blockFirstReviewsJson.reviews.length > 0){
      $('body').addClass('has-review');
    }else{
      $('body').addClass('no-reviews');
      helper.changeHeight();
      helper.postMessageNoReviews();
    }
    let blockReviews= ajaxModule.createBlockReviews(blockFirstReviewsJson.reviews,true);
    $('#reviewImporter .scm-row').html(blockReviews);
    if (blockFirstReviewsJson.loadMore === 1) {
      $('.scm-pagination-load-more').addClass('visible');
    } else {
      $('.scm-pagination-load-more').removeClass('visible');
    }
    if(settingApp.paginationType == 'paginate'){
      if(typeof blockFirstReviewsJson.total == 'undefined'){
        this.paginateInit(100, true);
      }else{
        this.paginateInit(blockFirstReviewsJson.total);
      }
    }

    const blockFirstReviewsJsonPhoto = blockFirstReviewsJson.reviews.filter(item => {
      return item.photosArray.length > 0 ;
    });
    $(document).trigger('headerReviewsPhoto', {
      blockFirstReviewsJsonPhoto: blockFirstReviewsJsonPhoto
    });
  }else{
    $('body').addClass('no-reviews');
    helper.postMessageNoReviews();
    helper.changeHeight();
  }
};
bodyLayoutAbtract.prototype.seeProductAction= function(){
  if(settingApp.type !== 'product'){
    $(document).on('click','.number-img',function(event) {
      let typePage= $('#scm-review-importer-value').attr('data-type');
      if(typePage == 'facebookPage'){
        $(this).closest('.item').find('.link-product a').trigger( "click" );
      }
    });
    $(document).on('click','.link-product a',function(event) {
      event.preventDefault();
      let $this= $(this);
      let $closetItem= $this.closest('.item');
      let $elIncludeData= $('#scm-review-importer-value');
      let shopDomain=$elIncludeData.attr('data-shopname');
      let productShopifyId=  $closetItem.attr('data-productshopifyid');
      let idReview= $closetItem.attr('data-reviewid');
      let source= $elIncludeData.attr('data-type');
      let linkToClick= $this.attr('href')+`&source=${source}&productId=${productShopifyId}&idReview=${idReview}`;
      helper.apiRequest(`https://stats.smartifyapps.com/lai?shop=${shopDomain}&productId=${productShopifyId}&reviewId=${idReview}&action=click&source=${source}`);
      window.open(linkToClick);
      // cartShopify.setCart(source,productShopifyId,idReview);
    });
  }
};

function CardBodyAbtract(){

};
CardBodyAbtract.prototype.createHtmlLinkProduct= function(link,value){
  return `<div class="link-product"><a href="${link}" >${helper.iconScm.bag_icon}${languageModule.getLanguageByKey("reviews_list-view_product")} <base target="_parent"></base></a></div>`;
};
CardBodyAbtract.prototype.linkProduct= function(value){
  let link= value.urlProduct ? value.urlProduct + '?no-link=1' : '#';
  if( typeof value.product_handle != 'undefined' && value.product_handle && settingApp.shopDomain)
    link=`https://${settingApp.shopDomain}/products/${value.product_handle}?no-link=1`;
  return this.createHtmlLinkProduct(link,value);
};
CardBodyAbtract.prototype.customClassItemReview= function(imagesBlockHtml,value){
  let classItem="";
  if(imagesBlockHtml !=='' && imagesBlockHtml !='<div class="thumb-img"></div>'){
    classItem= 'has-photo';
    $('body').attr('photo-slider','true');
  }
  if(this.getStatusTruncate()){
    classItem=  classItem + " has-truncate";
  }
  if(!settingApp.body_verifyBadge){
    classItem=  classItem + " no-verify";
  }
  if(value.no_full_content){
    classItem=  classItem + " no-full-content";
  }
  return classItem;
};
CardBodyAbtract.prototype.helpFullHtml= function (review){
  let status= 0;
  let reviewId= review.id;
  let like= helper.checkSetting(review.likes) ? review.likes : 0;
  let disLike= helper.checkSetting(review.dislikes) ? review.dislikes : 0;
  if(helper.checkSetting(helpFullCookieEl.arrayValue[reviewId])){
    if(helpFullCookieEl.arrayValue[reviewId].time > settingApp.lastUpdated){
      like= helpFullCookieEl.arrayValue[reviewId].like;
      disLike= helpFullCookieEl.arrayValue[reviewId].disLike;
    }
    status= helpFullCookieEl.arrayValue[reviewId].status;
  }
  return `
        <div class="help-full" data-status="${status}">
          <span class="title-helFul">` +  languageModule.getLanguageByKey('reviews_helpful') +`</span>
          <div class="like group-hel">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3212 6.19393H12.4095V3.4142C12.4095 2.08057 12.0257 1.11248 11.2659 0.538056C10.0718 -0.369777 8.44746 0.140377 8.37768 0.164479C8.10243 0.252852 7.91247 0.521988 7.91247 0.82326V4.17742C7.91247 6.6599 5.09406 7.52355 4.97388 7.55568C4.96613 7.5597 4.95838 7.5597 4.9545 7.56372L4.63273 7.66816C4.26831 7.31065 3.77984 7.09373 3.24485 7.09373H2.02367C0.907162 7.08972 0 8.02969 0 9.18657V16.401C0 17.5579 0.907162 18.4979 2.02367 18.4979H3.24485C3.76046 18.4979 4.23342 18.297 4.59008 17.9636C5.10182 18.5943 5.86941 19 6.72618 19H14.6503C16.4879 19 17.709 17.9556 17.9223 16.2082L18.907 9.80116L18.9612 9.45571C18.9845 9.29503 19 9.13033 19 8.96564C18.9961 7.43919 17.7943 6.19393 16.3212 6.19393ZM3.93879 16.405C3.93879 16.8027 3.62865 17.1241 3.24485 17.1241H2.02367C1.63987 17.1241 1.32973 16.8027 1.32973 16.405V9.18657C1.32973 8.78889 1.63987 8.46753 2.02367 8.46753H3.24485C3.62865 8.46753 3.93879 8.78889 3.93879 9.18657V16.405ZM17.647 9.24281L16.608 16.0074C16.608 16.0154 16.6042 16.0234 16.6042 16.0315C16.5576 16.4251 16.4181 17.6262 14.6503 17.6262H6.72618C5.92369 17.6262 5.26852 16.9473 5.26852 16.1158V9.18657C5.26852 9.09418 5.26076 9.00179 5.24913 8.9094L5.34605 8.87726C5.62906 8.79291 9.2422 7.64406 9.2422 4.1734V1.38965C9.62599 1.34948 10.13 1.3776 10.4828 1.65075C10.8782 1.95604 11.0798 2.54654 11.0798 3.4142V6.88485C11.0798 7.26646 11.3783 7.57577 11.7466 7.57577H16.3212C17.0655 7.57577 17.6664 8.20241 17.6664 8.96965C17.6664 9.05803 17.6586 9.15042 17.647 9.24281Z" fill="#737373"/>
              </svg>
              <div class="like-number">(<span>${like}</span>)</div>
          </div>
           <div class="dis-like group-hel">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.67884 12.8061H6.59049V15.5858C6.59049 16.9194 6.97429 17.8875 7.73414 18.4619C8.92818 19.3698 10.5525 18.8596 10.6223 18.8355C10.8976 18.7471 11.0875 18.478 11.0875 18.1767V14.8226C11.0875 12.3401 13.9059 11.4765 14.0261 11.4443C14.0339 11.4403 14.0416 11.4403 14.0455 11.4363L14.3673 11.3318C14.7317 11.6894 15.2202 11.9063 15.7552 11.9063H16.9763C18.0928 11.9103 19 10.9703 19 9.81343V2.59897C19 1.44209 18.0928 0.502119 16.9763 0.502119H15.7552C15.2395 0.502119 14.7666 0.702967 14.4099 1.03638C13.8982 0.405712 13.1306 0 12.2738 0H4.34972C2.51214 0 1.29096 1.04441 1.07774 2.79179L0.0930424 9.19884L0.0387669 9.54429C0.0155067 9.70497 0 9.86967 0 10.0344C0.00387573 11.5608 1.20567 12.8061 2.67884 12.8061ZM15.0612 2.59496C15.0612 2.19728 15.3714 1.87592 15.7552 1.87592H16.9763C17.3601 1.87592 17.6703 2.19728 17.6703 2.59496V9.81343C17.6703 10.2111 17.3601 10.5325 16.9763 10.5325H15.7552C15.3714 10.5325 15.0612 10.2111 15.0612 9.81343V2.59496ZM1.35299 9.75719L2.39196 2.99263C2.39196 2.9846 2.39584 2.97657 2.39584 2.96853C2.44236 2.57487 2.58192 1.3738 4.34972 1.3738H12.2738C13.0763 1.3738 13.7315 2.05267 13.7315 2.88418V9.81343C13.7315 9.90582 13.7392 9.99821 13.7509 10.0906L13.6539 10.1227C13.3709 10.2071 9.7578 11.3559 9.7578 14.8266V17.6103C9.37401 17.6505 8.87003 17.6224 8.51724 17.3492C8.12181 17.044 7.92022 16.4535 7.92022 15.5858V12.1151C7.92022 11.7335 7.62171 11.4242 7.25342 11.4242H2.67884C1.9345 11.4242 1.3336 10.7976 1.3336 10.0303C1.3336 9.94197 1.34136 9.84958 1.35299 9.75719Z" fill="#737373"/>
              </svg>
              <div class="dis-like-number">(<span>${disLike}</span>)</div>
          </div>
         </div>
      `;
};
CardBodyAbtract.prototype.createImageNumber= function (number){
  return `<span class="number-img">${number}${helper.iconScm.photo_svg}</span>`;
};
CardBodyAbtract.prototype.createMediaNumber= function (itemReview){
  let number= 0;
  if ( itemReview.videos && itemReview.videos.length > 0 && itemReview.videos !== '[]') {
    number= number + itemReview.videos.length;
  }
  if( itemReview.photosArray && itemReview.photosArray.length > 0 ){
    number= number + itemReview.photosArray.length;
  }
  if(number < 4){
    return ``;
  }
  return `<span class="number-img number-media">+${number - 3}</span>`;
};
CardBodyAbtract.prototype.createVideoNumber= function (number){
  if(number == 0){
    return '';
  }
  return `<span class="number-video number-img">${number}${helper.iconScm.video_svg}</span>`;
};
CardBodyAbtract.prototype.creatImageBlocks= function(opt,videos= null) {
  let urlImages= opt.photosArray;
  let alt= opt.author ? opt.author : 'sma reviews';
  let blockImages = '';
  if ( videos !== [] && videos.length > 0 && videos !== '[]') {
    videos.forEach(function(value) {
      let url= value.thumbnail ? value.thumbnail : `${settingApp.cdn}/images/video/thumbnail.png`;
      let classVideo= value.thumbnail ? 'video' : 'video no-thumb-video';
      blockImages += `<div class="wrap-image ${classVideo}"><span class="play-icon">${helper.iconScm.play_svg}</span><img class="img-rv smaLazyLoad" height="273" width="260" src="${settingApp.cdn}/img/lazyload.gif" loading="lazy" alt="${alt}" data-src="${url}"></div>`;
    });
  }
  if ( urlImages  && urlImages.length > 0 && urlImages !== '[]') {
    if(!Array.isArray(urlImages)){
      urlImages=JSON.parse(urlImages);
    }
    urlImages.forEach(function(value) {
      let url= value;
      blockImages +=`<div class="wrap-image"><img height="273" width="260" src="${settingApp.cdn}/img/lazyload.gif" alt="${alt}"   class="img-rv smaLazyLoad" data-src="${url}" loading="lazy"></div>` ;
    });
  }
  return blockImages;
};
CardBodyAbtract.prototype.imagesBlockHtml=function(opt){
  let imagesBlockHtml='';
  if(settingApp.body_reviewPhoto){
    let reviewSource= opt.source ? opt.source : '';
    if(!settingApp.showSubmitImage && reviewSource == 'submit'){
      imagesBlockHtml='';
    }else{
      let videos= this.getVideoArrayByCheckConditions(opt);
      let imagesBlock= this.creatImageBlocks(opt, videos);
      let iconNumberPhoto= opt.photosArray && opt.photosArray.length > 0 ? this.createImageNumber(opt.photosArray.length) : '';
      let iconNumberVideo= this.createVideoNumber(videos.length) ;
      let iconNumberMedia= this.createMediaNumber(opt);
      if(settingApp.body_bodyQuickLayout == 'default-4'){
        imagesBlockHtml= `<div class="thumb-img">${imagesBlock}${iconNumberMedia}</div>`;
      }else{
        imagesBlockHtml= `<div class="thumb-img">${imagesBlock}${iconNumberPhoto}${iconNumberVideo}</div>`;
      }
    }
  }
  return imagesBlockHtml;
};
CardBodyAbtract.prototype.languageHtml= function(value){
  let languageHtml='';
  if(settingApp.body_showFlag && value.country){
    languageHtml= ` <div class="flag-wrapper ${settingApp.body_flag}"><div class="img-thumbnail flag flag-icon-background flag-icon-${value.country} flag-icon-squared" title="${value.country}" id="${value.country}"></div></div>`;
  }
  return languageHtml;
};
CardBodyAbtract.prototype.getVerifyBadgeElement = function(){
  if(!settingApp.body_verifyBadge){
    return ``;
  }
  let height= 6.5;
  if(settingApp.body_bodyQuickLayout == 'default-3'){
    height= 7;
  }
  return `
          <div class="icon-check">
          <svg class="Ellipse_3">
            <ellipse id="Ellipse_3" rx="${height}" ry="${height}" cx="${height}" cy="${height}">
            </ellipse>
          </svg>
          <svg class="checked_fs" viewBox="0 64.443 11.156 8.367">
            <path id="checked_fs" d="M 0 68.98246765136719 L 3.820306301116943 72.81006622314453 L 11.156005859375 65.48160552978516 L 10.10284614562988 64.44300842285156 L 3.820306062698364 70.71826171875 L 1.038575053215027 67.93656158447266 L 0 68.98246765136719 Z">
            </path>
          </svg>
        </div>
      `;
};
CardBodyAbtract.prototype.createNameComponent= function(name){
  name = helper.escapeString(name);
  if(settingApp.body_customerName == "hide"){
    let firstLetter= name.substring(0, 1);
    let secondWord= '';
    for(i = 1; i < name.length ; i++ ){
      secondWord = secondWord + '*';
    }
    let nameCustom= firstLetter + secondWord;
    return `<span class="name notranslate">${nameCustom}</span>`;
  }else if(settingApp.body_customerName == "split"){
    let nameCustom = name.split(/\s/).reduce((response,word)=> response+='.'+word.slice(0,1),'');
    nameCustom= nameCustom.substring(1);
    return `<span class="name ${settingApp.body_customerName}">${nameCustom}</span>`;
  }else if(settingApp.body_customerName == "last"){
    let nameCustom = name.split(/\s/);
    let firstWord= nameCustom[0];
    nameCustom = nameCustom.reduce((response,word)=> response+=' '+word.slice(0,1),'');
    nameCustom= nameCustom.substring(2);
    nameCustom= firstWord + nameCustom;
    return `<span class="name ${settingApp.body_customerName} notranslate">${nameCustom}</span>`;
  }else{
    return  `<span class="name notranslate">${name}</span>`;
  }
};
CardBodyAbtract.prototype.createDataPhotoJson=function(opt){
  return  JSON.stringify(opt.photosArray ? opt.photosArray : []) || '[]';
}
CardBodyAbtract.prototype.createVideostoJson=function(opt){
  return  JSON.stringify(opt.videos ? opt.videos : []) || '[]';
}
CardBodyAbtract.prototype.createItemHtml=function(opt){
  return ` <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
        ${opt.imagesBlockHtml}
         <div class="group-content">
             <div class="container-stars">
                 <div class="group-star">
                      ${opt.starBlocks}
                 </div>
             </div>
             <div class="info-author">
                  <div class="container-avatar">
                    ${opt.verifyBadgeHtml}
                    ${opt.avatar}
                  </div>
                  <div class="container-name">
                    <span class="name">
                        ${opt.htmlName}
                    </span>
                  </div>
                  ${opt.langueHtlm}
             </div>
						 ${opt.cfAnswers}
             ${opt.reviewContent}
              ${opt.replies}
              <div class="container-date-hel">
                  ${opt.dateHtml}
                    ${opt.helFulHtml}
                </div>
             ${opt.linkProduct}
         </div>
    </div>`;
};
CardBodyAbtract.prototype.getLanguage= function(value){
  let languageHtml="";
  if(settingApp.body_showFlag && value.country){
    languageHtml= ` <div class="flag-wrapper ${settingApp.body_flag}"><div class="img-thumbnail flag flag-icon-background flag-icon-${value.country} flag-icon-squared" title="${value.country}" id="${value.country}"></div></div>`;
  }
  return languageHtml;
};
CardBodyAbtract.prototype.createReplies= function(replies) {
  if(replies.length == 0){
    return '';
  }
  let contentHtml= '<div class="reply-group">';
  $.each(replies,function (key,element) {
    let emailFrom= element.from ? element.from : '';
    contentHtml=contentHtml +  `
            <div class="item-reply">
              <span class="title-owner">${emailFrom} ${languageModule.getLanguageByKey('reviews_list-reply')} </span>
              <p>${element.content}</p>
            </div>
          `;
  });
  contentHtml=contentHtml + '</div>';
  return contentHtml;
};
CardBodyAbtract.prototype.avatarHtml= function(name='Math'){
  if(settingApp.body_customerAvatarDisplay =='text'){
    let fistName= name.substring(0, 1);
    return `<span class="avatar-text notranslate ${settingApp.body_customerAvatarShape}">${fistName}</span>`;
  }
  let random= Math.ceil(Math.random() * (10 - 1) + 1);
  return `<span class="avatar notranslate ${settingApp.body_customerAvatarShape}"><img src="${settingApp.cdn}/images/avatar-image/avatar-${random}.png"></span>`;
};
CardBodyAbtract.prototype.getConfigTruncate= function(){
  if(settingApp.body_limitContentCharacters == 30){
    settingApp.body_limitContentCharacters= 900;
  }
  if(settingApp.slider && settingApp.type == 'page'){
    settingApp.body_limitContentCharacters= 70;
  }
  return settingApp.body_limitContentCharacters;
};
CardBodyAbtract.prototype.getStatusTruncate= function(){
  return settingApp.body_isLimitContent;
};
CardBodyAbtract.prototype.createReviewContent= function(content){
  let contentEsc= content ? content : '';
  let lengthTruncate= this.getConfigTruncate();
  return `<div class="content-full content ${settingApp.body_contentAlign}">${contentEsc}
          </div>
        <div class="content-read-more content ${settingApp.body_contentAlign}">${helper.truncateText(contentEsc, lengthTruncate)}</div>
        `;
};
CardBodyAbtract.prototype.createStarBlocks= function (number){
  let blockStar= '';
  let type = settingApp.starStyle;
  for (let i = 0; i < number; i++) {
    blockStar = blockStar +  helper.iconStar[type].rating;
  }
  for (let i = number; i < 5; i++) {
    blockStar = blockStar + helper.iconStar[type].none;
  }

  return blockStar;
};
CardBodyAbtract.prototype.getVideoArrayByCheckConditions= function(reviewItem){
  let arrayVideo= reviewItem.videos;
  if(arrayVideo && arrayVideo.length > 0 && settingApp.videoEnabled){
    if(settingApp.videosPerReview == 1){
      return [arrayVideo[0]];
    }
    return arrayVideo;
  }
  return '';
}

CardBodyAbtract.prototype.createCFAnswersBlock = function (
  cfAnswersData
) {
  let answerItemsHtml = '';
  cfAnswersData.forEach((answer) => {
    if (answer.hideAnswerFromWidget) {
      return;
    }
    if (answer.questionType === 'text') {
      answerItemsHtml += `<div class="scm-cf-answer-wrapper"><span class="scm-cf-answer-title">${answer.title}:</span> <span class="scm-cf-answer-content">${answer.content}</span></div>`;
    } else if (['multi', 'single'].includes(answer.questionType)) {
      if (answer.optionNames && answer.optionNames.length) {
        answerItemsHtml += `<div class="scm-cf-answer-wrapper"><span class="scm-cf-answer-title">${
          answer.title
        }:</span> <span class="scm-cf-answer-content">${answer.optionNames.join(', ')}</span></div>`;
      }
    }
  });

  if (answerItemsHtml) {
    return `
			<div class="scm-cf-answers-container">
				${answerItemsHtml}
			</div>
		`;
  }
  return '';
};

CardBodyAbtract.prototype.itemHtml= function(value){
  let videos= this.getVideoArrayByCheckConditions(value);
  let linkProductHtml= (settingApp.type !== "product" || $('body').attr('data-tab') == '3') ? this.linkProduct(value) : "";
  let dateHtml="";
  if(settingApp.body_date){
    let date= helper.formatDate(value.date,settingApp.body_formatDate);
    dateHtml= `<span class="date"><time> ${date}</time></span>`;
  }
  let starBlocks= this.createStarBlocks(value.rating);
  let imagesBlockHtml="";
  if(settingApp.body_reviewPhoto){
    let reviewSource= value.source ? value.source : '';
    if(!settingApp.showSubmitImage && reviewSource == 'submit'){
      imagesBlockHtml='';
    }else{
      imagesBlockHtml= this.imagesBlockHtml(value);
    }
  }
  let classItem= this.customClassItemReview(imagesBlockHtml,value);
  let languageHtml= this.getLanguage(value);

  let replies= value.reply ? this.createReplies(value.reply) : '';
  let avatar= this.avatarHtml(value.author);
  let reviewContent= this.createReviewContent(value.review);
  let productShopifyId= value.product_shopify_id ? value.product_shopify_id : '';
  let htmlName= this.createNameComponent(value.author);
  let verifyBadgeHtml= this.getVerifyBadgeElement();
  let helFulHtml= ( settingApp.showVote && settingApp.type == "product" ) ?  this.helpFullHtml(value) : '';

  const customForm = helper.getCustomFormData(settingApp.customForms);
  const cfAnswersData = helper.getCFAnswersDataForReview(customForm, value.cf_answers);
  const cfAnswers = this.createCFAnswersBlock(cfAnswersData);

  let opt = {
    id : value.id,
    classItem,
    photosArray : value.photosArray,
    imagesBlockHtml : imagesBlockHtml,
    starBlocks : starBlocks,
    htmlName : htmlName,
    verifyBadgeHtml,
    langueHtlm : languageHtml,
    review : value.review,
    dateHtml : dateHtml,
    replies: replies,
    avatar: avatar,
    reviewContent : reviewContent,
    linkProduct : linkProductHtml,
    productShopifyId,
    helFulHtml,
    videos : videos,
    cfAnswers
  };
  return this.createItemHtml(opt);
};
function CardBodyImageText(){
  CardBodyAbtract.call(this);
}
CardBodyImageText.prototype.createItemHtml=function(opt){
  return ` <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
                  ${opt.imagesBlockHtml}
                  <div class="group-content2">
                      <div class="container-stars">
                          <div class="group-star">
                                ${opt.starBlocks}
                          </div>
                      </div>
                      <div class="container-avatar">
                        ${opt.htmlName}
                        ${opt.verifyBadgeHtml}
                      </div>
                  </div>
                  <div class="group-content">
                  <div class="top-content">
                      ${opt.langueHtlm}
                  </div>

                        ${opt.dateHtml}
                      ${opt.cfAnswers}
                      ${opt.reviewContent}
                        ${opt.replies}
                        ${opt.helFulHtml}
                      ${opt.linkProduct}
                  </div>
              </div>`;
};
inherit(CardBodyImageText,CardBodyAbtract);
function CardBodyLayoutImageOnly(){
  CardBodyAbtract.call(this);
}
CardBodyLayoutImageOnly.prototype.createItemHtml=function(opt){
  return `
            <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
                 <div class="image-thumb">
                      ${opt.imagesBlockHtml}
                 </div>
                 <div class="info-reviews">
                    ${opt.verifyBadgeHtml}
                    ${opt.avatar}
                    ${opt.htmlName}
                    ${opt.langueHtlm}
                    ${opt.starBlocks}
                    ${opt.dateHtml}
                    ${opt.cfAnswers}
                    ${opt.reviewContent}
                    ${opt.helFulHtml}
                    ${opt.replies}
                    ${opt.linkProduct}
                 </div>
            </div>`;
};
inherit(CardBodyLayoutImageOnly,CardBodyAbtract);
function CardBodyLayout2List(){
  CardBodyAbtract.call(this);
}
CardBodyLayout2List.prototype.createItemHtml=function(opt){
  return `<div class="scm-col-12">
            <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
              <div class="left-list">
                  <div class="container-avatar">
                    <div class="left-avatar">
                         ${opt.verifyBadgeHtml}
                        ${opt.avatar}
                    </div>
                    <div class="right-avatar">
                      ${opt.htmlName}
                      ${opt.langueHtlm}
                    </div>
                  </div>

              </div>
              <div class="right-list">
                  <div class="group-star">
                       ${opt.starBlocks}
                  </div>
                  ${opt.dateHtml}
                  ${opt.cfAnswers}
                  ${opt.reviewContent}
                  ${opt.helFulHtml}
                  ${opt.imagesBlockHtml}
                  ${opt.replies}
                   ${opt.linkProduct}
              </div>
              </div>
        </div>`;
};
inherit(CardBodyLayout2List,CardBodyAbtract);
function CardBodyLayout3List(){
  CardBodyAbtract.call(this);
}
CardBodyLayout3List.prototype.createItemHtml=function(opt){
  return `<div class="scm-col-6">
            <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
              <div class="left-list">
              <div class="inner-left">
                 <div class="container-avatar">
                    ${opt.htmlName}
                    ${opt.verifyBadgeHtml}
                    ${opt.langueHtlm}
                 </div>
                  ${opt.dateHtml}
                  <div class="group-star">
                       ${opt.starBlocks}
                  </div>
                   ${opt.cfAnswers}
                   ${opt.reviewContent}
                   ${opt.helFulHtml}
                    ${opt.replies}
                    ${opt.linkProduct}
                </div>

              </div>
              <div class="right-list">
                  ${opt.imagesBlockHtml}
              </div>
              </div>
        </div>`;
};
inherit(CardBodyLayout3List,CardBodyAbtract);
function CardBodyLayout3(){
  CardBodyAbtract.call(this);
}
CardBodyLayout3.prototype.createItemHtml=function(opt){
  return ` <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
                  ${opt.imagesBlockHtml}
                  <div class="group-content">
                  <div class="top-content">
                  <div class="container-avatar">
                        ${opt.htmlName}
                        ${opt.verifyBadgeHtml}
                      </div>
                      ${opt.langueHtlm}
                  </div>

                        ${opt.dateHtml}
                      <div class="container-stars">
                          <div class="group-star">
                                ${opt.starBlocks}
                          </div>
                      </div>
                      ${opt.cfAnswers}
                      ${opt.reviewContent}
                        ${opt.replies}
                        ${opt.helFulHtml}
                      ${opt.linkProduct}
                  </div>
              </div>`;
};
inherit(CardBodyLayout3,CardBodyAbtract);
function CardBodyLayout4List(){
  CardBodyAbtract.call(this);
}
CardBodyLayout4List.prototype.createItemHtml=function(opt) {
  return `<div class="scm-col-12">
            <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
              <div class="group-content-reviews">
                <div class="left-list">
                   <div class="container-avatar">
                    ${opt.htmlName}
                     ${opt.verifyBadgeHtml}
                   </div>
                   ${opt.langueHtlm}
                </div>
                <div class="center-list">
                    <div class="group-star">
                       ${opt.starBlocks}
                    </div>
                    ${opt.dateHtml}
                    ${opt.cfAnswers}
                    ${opt.reviewContent}
                    ${opt.helFulHtml}
                </div>
                <div class="right-list">
                    ${opt.imagesBlockHtml}
                    <div class="show-image-block"></div>
                </div>
              </div>

              <div class="replies-content">
              <div class="left-space"></div>
                <div class="right-content">${opt.replies}${opt.linkProduct}</div>
              </div>
            </div>
            </div>
        `;
};
CardBodyLayout4List.prototype.createImageNumber= function (number){
  if(number < 4){
    return '';
  }
  return `<span class="number-img">+${number - 3}</span>`;
};
inherit(CardBodyLayout4List,CardBodyAbtract);
function CardBodyLayout4(){
  CardBodyAbtract.call(this);
}
CardBodyLayout4.prototype.createImageNumber= function (number){
  if(number < 4){
    return '';
  }
  return `<span class="number-img">+${number - 3}</span>`;
};
CardBodyLayout4.prototype.createHtmlLinkProduct= function(link,value){
  return `<div class="link-product"><a href="${link}" >${helper.iconScm.tag_svg}${languageModule.getLanguageByKey("reviews_list-view_product")} <base target="_parent"></base></a></div>`;
};
CardBodyLayout4.prototype.createItemHtml=function(opt){
  return ` <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
                    <div class="container-item">
                    <div class="top-content">
                        <div class="container-avatar">
                          ${opt.htmlName}
                          ${opt.verifyBadgeHtml}
                        </div>
                        ${opt.langueHtlm}
                    </div>
                      ${opt.dateHtml}
                        <div class="container-stars">
                           <div class="group-star">
                                ${opt.starBlocks}
                           </div>
                       </div>
                        ${opt.cfAnswers}
                        ${opt.reviewContent}
                        ${opt.imagesBlockHtml}
                        ${opt.replies}
                        ${opt.helFulHtml}
                    </div>
                     ${opt.linkProduct}
                </div>`;
};
inherit(CardBodyLayout4,CardBodyAbtract);
CardBodyTestimonial.prototype.createHtmlLinkProduct= function(link,value){
  if(value.product_title){
    return `<div class="link-product"><span>${languageModule.getLanguageByKey('reviews_purchased')} </span><a href="${link}" >${value.product_title}<base target="_parent"></base></a></div>`;
  }else{
    return `<div class="link-product"><a href="${link}" >${languageModule.getLanguageByKey("reviews_list-view_product")} <base target="_parent"></base></a></div>`;
  }
};
CardBodyTestimonial.prototype.indexItem= 0;
CardBodyTestimonial.prototype.createItemHtml=function(opt){
  let imgBottom= ``;
  if(this.indexItem == 1){
    imgBottom= `<img src=${settingApp.cdn}/img/thumb_up.png />`;
    this.indexItem= 0;
  }else{
    imgBottom= `<img src=${settingApp.cdn}/img/heart_face.png />`;
    this.indexItem= 1;
  }
  return ` <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
                <div class="content-style">
                    <div class="icon-tes-left">
                        ${helper.iconScm.testimonial_svg}
                    </div>
                    ${opt.reviewContent}
                    ${opt.htmlName}
                    ${opt.linkProduct}
                    <div class="container-stars">
                          <div class="group-star">
                                ${opt.starBlocks}
                          </div>
                    </div>
                    <div class="icon-tes-bottom">${imgBottom}</div>
                </div>
            </div>`;
};
inherit(CardBodyTestimonial,CardBodyAbtract);

function CardBodyTestimonial() {
  CardBodyAbtract.call(this);
}
function CardBodyGallery() {
  CardBodyAbtract.call(this);
}
CardBodyGallery.prototype.createHtmlLinkProduct= function(link,value){
  if(value.product_title){
    return `<div class="link-product"><span>${languageModule.getLanguageByKey('reviews_purchased')} </span><a href="${link}" >${value.product_title}<base target="_parent"></base></a></div>`;
  }else{
    return `<div class="link-product"><a href="${link}" >${languageModule.getLanguageByKey("reviews_list-view_product")} <base target="_parent"></base></a></div>`;
  }
};
CardBodyGallery.prototype.createItemHtml=function(opt){
  return ` <div class="item gallery ${opt.classItem}" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
        ${opt.imagesBlockHtml}
         <div class="group-content">
             <div class="container-stars">
                 <div class="group-star">
                      ${opt.starBlocks}
                 </div>
             </div>
             <div class="info-author">
                  <div class="container-avatar">
                    ${opt.verifyBadgeHtml}
                    ${opt.avatar}
                  </div>
                  <div class="container-name">
                    <span class="name">
                        ${opt.htmlName}
                    </span>
                  </div>
                  ${opt.langueHtlm}
             </div>
             ${opt.reviewContent}
              ${opt.replies}
              <div class="container-date-hel">
                  ${opt.dateHtml}
                    ${opt.helFulHtml}
                </div>
                <div class="link-product-show-popup">
                    ${opt.linkProduct}
                </div>
         </div>
    </div>`;
};
inherit(CardBodyGallery,CardBodyAbtract);
function CardBodyProduct2() {
  CardBodyAbtract.call(this);
}
CardBodyProduct2.prototype.createItemHtml=function(opt){
  let imgBottom= ``;
  if(this.indexItem == 1){
    imgBottom= `<img src=${settingApp.cdn}/img/thumb_up.png />`;
    this.indexItem= 0;
  }else{
    imgBottom= `<img src=${settingApp.cdn}/img/heart_face.png />`;
    this.indexItem= 1;
  }
  return ` <div class="item ${opt.classItem}" role="article" data-reviewid="${opt.id}" data-videos='${this.createVideostoJson(opt)}' data-photos='${this.createDataPhotoJson(opt)}' data-productShopifyId="${opt.productShopifyId}">
                <div class="content-style">
                    <div class="icon-tes-left">
                        ${helper.iconScm.testimonial_svg}
                    </div>
                    ${opt.reviewContent}
                    ${opt.htmlName}
                    ${opt.linkProduct}
                    <div class="container-stars">
                          <div class="group-star">
                                ${opt.starBlocks}
                          </div>
                    </div>
                    <div class="icon-tes-bottom">${imgBottom}</div>
                </div>
            </div>`;
};
inherit(CardBodyProduct2,CardBodyAbtract);

function QuestionCard(question) {
  this.question = question;
  this.answersCount = helper.checkSetting(
    question.approved_answers_count
  )
    ? question.approved_answers_count
    : 0;
}

QuestionCard.prototype.createActionsWrapper = function () {
  // let status = 0;
  // let questionId = this.question.id;
  // let likes = helper.checkSetting(this.question.likes)
  //   ? this.question.likes
  //   : 0;
  // let dislikes = helper.checkSetting(this.question.dislikes)
  //   ? this.question.dislikes
  //   : 0;

  // if (helper.checkSetting(questionVoteCookieEl.arrayValue[questionId])) {
  //   likes = questionVoteCookieEl.arrayValue[questionId].likes;
  //   dislikes = questionVoteCookieEl.arrayValue[questionId].dislikes;
  //   status = questionVoteCookieEl.arrayValue[questionId].status;
  // }
  let wrapper = $(
    '<div class="scm-qa-question-actions-wrapper"></div>'
  );

  // wrapper.attr('data-vote-status', status);

  // let likeButton = $(`
  // 	<button class="scm-qa-question-like-btn"></button>
  // `);
  // let likeNumber = $(`
  // 	<div class="scm-qa-question-like-number"></div>
  // `);

  // if (likes != 0) {
  //   likeNumber.text(likes);
  // }

  // let likeIcon = $(`
  // 	<div class="scm-qa-question-like-icon"></div>
  // `);
  // likeIcon.append(helper.iconScm['like']);
  // likeButton.append(likeNumber, likeIcon);

  // let dislikeButton = $(`
  // 	<button class="scm-qa-question-dislike-btn"></button>
  // `);
  // let dislikeNumber = $(`
  // 	<div class="scm-qa-question-dilike-number"></div>
  // `);

  // if (dislikes != 0) {
  //   dislikeNumber.text(dislikes);
  // }
  // let dislikeIcon = $(`
  // 	<div class="scm-qa-question-dislike-icon"></div>
  // `);
  // dislikeIcon.append(helper.iconScm['dislike']);
  // dislikeButton.append(dislikeNumber, dislikeIcon);

  if (settingApp.qaIsOnlyShopCanAnswer) {
    // wrapper.append(likeButton, dislikeButton);
  } else {
    let replyButton = $(`
			<button class="scm-qa-question-reply-btn">
				${languageModule.getLanguageByKey('qaReplyBtn')}
			</button>
		`);
    let self = this;
    replyButton.click(function () {
      $(`[question-id="${self.question.id}"]`).toggleClass(
        'scm-qa-active-answer-form'
      );
      helper.changeHeight();
    });
    // wrapper.append(replyButton, likeButton, dislikeButton);
    wrapper.append(replyButton);
  }

  return wrapper;
};

QuestionCard.prototype.renderAnswersSection = function (answerItems) {
  let answersContainer = $(
    '<div class="scm-qa-answers-container"></div>'
  );

  if (answerItems && answerItems.length) {
    answerItems.forEach((answer) => {
      let answerCard = new AnswerCard(answer);
      let answerCardElement = answerCard.render();
      answersContainer.append(answerCardElement);
    });
  }

  return answersContainer;
};

QuestionCard.prototype.render = function () {
  let questionCardElement = $(
    '<div class="scm-qa-question-item"></div>'
  );
  questionCardElement.attr('data-question-id', this.question.id);
  questionCardElement.attr('data-current-answer-page', 1);
  let actionsContainer = $(
    '<div class="scm-qa-question-actions-container"></div>'
  );
  actionsContainer.html(this.createActionsWrapper());

  let formattedDate = helper.formatDate(this.question.date);

  questionCardElement.html(`
		<div class="scm-qa-question-author-wrapper">
			<div class="scm-qa-question-author-text">
				${helper.escapeString(this.question.author)}
			</div>
		</div>
		<div class="scm-qa-question-date">${formattedDate}</div>
		<div class="scm-qa-question-content">
			<div class="scm-qa-question-title">
				${languageModule.getLanguageByKey('qaQuestionTitle')}
			</div>
			<div class="scm-qa-question-content-text">
				${helper.escapeString(this.question.content)}
			</div>
		</div>
	`);

  let loadMoreAnswerContainer = $(`
		<div class="scm-qa-load-more-answer-container"></div>
	`);
  let loadMoreAnswerBtn = $(`
		<div class="scm-qa-load-more-answer-btn">
			<div class="scm-qa-load-more-answer-btn-text">
				${languageModule.getLanguageByKey('qaLoadMoreAnswerBtn')}
			</div>
		</div>
	`);

  loadMoreAnswerContainer.append(loadMoreAnswerBtn);

  questionCardElement.append(actionsContainer);
  if (this.answersCount > 0) {
    let answersContainer = this.renderAnswersSection(
      this.question.answers
    );
    questionCardElement.append(answersContainer);
  }
  questionCardElement.append(loadMoreAnswerContainer);

  if (this.answersCount > settingApp.qaAnswersPerLoad) {
    loadMoreAnswerContainer.toggleClass('visible');
  }

  if (!settingApp.qaIsOnlyShopCanAnswer) {
    let answerForm = new DefaultAnswerForm(this.question.id);
    let answerFormContainer = answerForm.render();
    questionCardElement.append(answerFormContainer);
  }

  return questionCardElement;
};


function AnswerCard(answer) {
  this.answer = answer;
}

AnswerCard.prototype.render = function () {
  let wrapper = $('<div class="scm-qa-answer-item"></div>');
  wrapper.attr('data-answer-id', this.answer.id);

  // let actionsContainer = $(
  //   '<div class="scm-qa-answer-actions-container"></div>'
  // );
  // actionsContainer.html(this.createActionsWrapper());

  let formattedDate = helper.formatDate(this.answer.date);
  let storeOwnerName = settingApp.qaStoreOwnerName;

  wrapper.html(`
		<div class="scm-qa-answer-author-wrapper">
			<div class="scm-qa-answer-author-text notranslate">
				${this.answer.is_admin
    ? storeOwnerName
    : helper.escapeString(this.answer.author)}
			</div>
			${
    this.answer.is_verified
      ? `
							<div class="scm-qa-answer-author-badge scm-qa-answer-past-customer-badge">
								${languageModule.getLanguageByKey('qaPastBuyerBadge')}
							</div>
						`
      : ''
  }
			${
    this.answer.is_admin
      ? `
							<div class="scm-qa-answer-author-badge scm-qa-answer-store-owner-badge">
								${languageModule.getLanguageByKey('qaStoreOwnerBadge')}
							</div>
						`
      : ''
  }
		</div>
		<div class="scm-qa-answer-date">${formattedDate}</div>
		<div class="scm-qa-answer-content">
			<div class="scm-qa-answer-title">
				${languageModule.getLanguageByKey('qaAnswerTitle')}
			</div>
			<div class="scm-qa-answer-content-text">
				${helper.escapeString(this.answer.content)}
			</div>
		</div>
	`);

  // wrapper.append(actionsContainer);
  return wrapper;
};

// AnswerCard.prototype.createActionsWrapper = function () {
//   let status = 0;
//   let answerId = this.answer.id;
//   let likes = helper.checkSetting(this.answer.likes) ? this.answer.likes : 0;
//   let dislikes = helper.checkSetting(this.answer.dislikes)
//     ? this.answer.dislikes
//     : 0;
//   // if (checkSetting(answerVoteCookieEl.arrayValue[answerId])) {
//   //   likes = answerVoteCookieEl.arrayValue[answerId].likes;
//   //   dislikes = answerVoteCookieEl.arrayValue[answerId].dislikes;
//   //   status = answerVoteCookieEl.arrayValue[answerId].status;
//   // }

//   let wrapper = $(
//     '<div class="scm-qa-answer-actions-wrapper"></div>'
//   );

//   wrapper.attr('data-vote-status', status);

//   let replyButton = $(
//     '<button class="scm-qa-answer-reply-btn">Reply</button>'
//   );

//   let likeButton = $(`
// 		<button class="scm-qa-answer-like-btn"></button>
// 	`);
//   let likeNumber = $(`
// 		<div class="scm-qa-answer-like-number"></div>
// 	`);
//   if (likes != 0) {
//     likeNumber.text(likes);
//   }

//   let likeIcon = $(`
// 		<div class="scm-qa-answer-like-icon"></div>
// 	`);
//   likeIcon.append(helper.iconScm['like']);
//   likeButton.append(likeNumber, likeIcon);

//   let dislikeButton = $(`
// 		<button class="scm-qa-answer-dislike-btn"></button>
// 	`);
//   let dislikeNumber = $(`
// 		<div class="scm-qa-answer-dislike-number"></div>
// 	`);
//   if (dislikes != 0) {
//     dislikeNumber.text(dislikes);
//   }

//   let dislikeIcon = $(`
// 		<div class="scm-qa-answer-dislike-icon"></div>
// 	`);
//   dislikeIcon.append(helper.iconScm['dislike']);
//   dislikeButton.append(dislikeNumber, dislikeIcon);

//   wrapper.append(likeButton, dislikeButton);

//   return wrapper;
// };

function AnswerFormAbstract(questionId) {
  this.questionId = questionId;
}

AnswerFormAbstract.prototype.getHtml = function () {
  return `
		<div
			class="scm-qa-answer-form-wrapper"
			question-id="${this.questionId}"
		>
			<form id="scm-qa-answer-form" action="" method="POST">
				<div class="scm-qa-answer-form-input-wrapper">
					<div class="scm-qa-answer-form-name-email-input">
						<input
							id="scm-qa-answer-form-author-input"
							type="text"
							name="author"
							placeholder="${languageModule.getLanguageByKey('box_write-input_name')}"
							required
						/>
						<input
							id="scm-qa-answer-form-email-input"
							type="email"
							placeholder="${languageModule.getLanguageByKey('box_write-input_email')}"
							required
						/>
					</div>
					<div class="scm-qa-answer-form-content-input-wrapper">
						<textarea
							rows="4"
							id="scm-qa-answer-form-content-input"
							type="text"
							name="content"
							placeholder="${languageModule.getLanguageByKey('qaAnswerField')}"
							required
						></textarea>
					</div>
				</div>
				<div class="scm-qa-answer-form-submit-btn-container">
					<button class="scm-qa-answer-form-submit-btn" type="submit">
						<div class="scm-qa-answer-form-submit-btn-text">
							${languageModule.getLanguageByKey('qaSubmitAnswerBtn')}
						</div>
					</button>
				</div>
				<div class="scm-qa-answer-form-message">
					<div class="success">
						${languageModule.getLanguageByKey('qaSuccessMessage')}
					</div>
					<div class="fail">
						${languageModule.getLanguageByKey('qaFailMessage')}
					</div>
					<div class="xss-message">
						${languageModule.getLanguageByKey(
    'box_write-message_error_character'
  )}
					</div>
				</div>
			</form>
		</div>
	`;
}

AnswerFormAbstract.prototype.render = function () {
  let formContainer = $('<div class="scm-qa-answer-form-container"></div>');
  formContainer.html(this.getHtml());

  let self = this;
  formContainer.find('#scm-qa-answer-form').on('submit', function (e) {
    e.preventDefault();
    let form = $(this);

    let authorInputValue = form
      .find('input#scm-qa-answer-form-author-input')
      .val();
    let emailInputValue = form
      .find('input#scm-qa-answer-form-email-input')
      .val();
    let contentInputValue = form
      .find('textarea#scm-qa-answer-form-content-input')
      .val();

    if (
      helper.checkEscapeString(authorInputValue) ||
      helper.checkEscapeString(emailInputValue) ||
      helper.checkEscapeString(contentInputValue)
    ) {
      form
        .find('.scm-qa-answer-form-message')
        .addClass('show-xss-message');
      setTimeout(() => {
        form
          .find('.scm-qa-answer-form-message')
          .removeClass('show-xss-message');
      }, 3000);
      return;
    }

    let submitBtn = form.find('.scm-qa-answer-form-submit-btn');
    submitBtn.addClass('loading-submit-button');

    $.ajax({
      url: `${settingApp.host}/api/qa/submit-answer`,
      method: 'POST',
      data: {
        author: authorInputValue,
        email: emailInputValue,
        content: contentInputValue,
        currentProductId: settingApp.product_id,
        questionId: self.questionId,
        shopName: settingApp.shop_name
      },
      success: function () {
        submitBtn.removeClass('loading-submit-button');
        form.find('input#scm-qa-answer-form-author-input').val('');
        form.find('input#scm-qa-answer-form-email-input').val('');
        form.find('textarea#scm-qa-answer-form-content-input').val('');
        form.find('.scm-qa-answer-form-message').addClass(
          'show-success-message'
        );
        setTimeout(() => {
          form.find('.scm-qa-answer-form-message').removeClass(
            'show-success-message'
          );
        }, 3000);
      },
      error: function (error) {
        submitBtn.removeClass('loading-submit-button');
        form.find('.scm-qa-answer-form-message').addClass('show-fail-message');
        setTimeout(() => {
          form.find('.scm-qa-answer-form-message').removeClass(
            'show-fail-message'
          );
        }, 3000);
        console.error('Error submitting the form:', error);
      }
    });
  });

  return formContainer;
};

function DefaultAnswerForm(questionId) {
  AnswerFormAbstract.call(this, questionId);
}
DefaultAnswerForm.prototype = Object.create(
  AnswerFormAbstract.prototype
);
DefaultAnswerForm.prototype.constructor = DefaultAnswerForm;

function QuestionFormAbstract() {}

QuestionFormAbstract.prototype.getHtml = function () {
  return `
		<div class="scm-qa-question-form-wrapper">
			<form id="scm-qa-question-form" action="" method="POST">
				<h2 class="scm-qa-question-form-title">
					${languageModule.getLanguageByKey('qaFormTitle')}
				</h2>
				<div class="scm-qa-question-form-input-wrapper">
					<div class="scm-qa-question-form-input-name-email">
						<input
							id="scm-qa-question-form-author-input"
							type="text"
							name="author"
							placeholder="${languageModule.getLanguageByKey('box_write-input_name')}"
							required
						/>
						<input
							id="scm-qa-question-form-email-input"
							type="email"
							placeholder="${languageModule.getLanguageByKey('box_write-input_email')}"
							required
						/>
					</div>
					<div class="scm-qa-question-form-content-input-wrapper">
						<textarea
							rows="4"
							id="scm-qa-question-form-content-input"
							type="text"
							name="content"
							placeholder="${languageModule.getLanguageByKey('qaQuestionField')}"
							required
						></textarea>
					</div>
				</div>
				<div class="scm-qa-question-form-submit-btn-container">
					<button class="scm-qa-question-form-submit-btn" type="submit">
						<div class="scm-qa-question-form-submit-btn-text">
							${languageModule.getLanguageByKey('qaSubmitQuestionBtn')}
						</div>
					</button>
				</div>
				<div class="scm-qa-question-form-message">
					<div class="success">
						${languageModule.getLanguageByKey('qaSuccessMessage')}
					</div>
					<div class="fail">
						${languageModule.getLanguageByKey('qaFailMessage')}
					</div>
					<div class="xss-message">
						${languageModule.getLanguageByKey(
    'box_write-message_error_character'
  )}
					</div>
				</div>
			</form>
		</div>
	`;
};
QuestionFormAbstract.prototype.render = function () {
  let formContainer = $(
    `<div id="scm-qa-question-form-container" class="scm-col-12"></div>`
  );
  formContainer.html(this.getHtml());

  $('.header-container').append(formContainer);

  $('#scm-qa-question-form').on('submit', function (e) {
    e.preventDefault();
    let author = $('#scm-qa-question-form-author-input').val();
    let email = $('#scm-qa-question-form-email-input').val();
    let content = $('#scm-qa-question-form-content-input').val();

    if (
      helper.checkEscapeString(author) ||
      helper.checkEscapeString(email) ||
      helper.checkEscapeString(content)
    ) {
      $('.scm-qa-question-form-message').addClass('show-xss-message');
      setTimeout(() => {
        $('.scm-qa-question-form-message').removeClass(
          'show-xss-message'
        );
      }, 3000);
      return;
    }

    let submitBtn = $('.scm-qa-question-form-submit-btn');
    submitBtn.addClass('loading-submit-button');

    $.ajax({
      url: `${settingApp.host}/api/qa/submit-question`,
      method: 'POST',
      data: {
        author: author,
        email: email,
        content: content,
        currentProductId: settingApp.product_id,
        shopName: settingApp.shop_name
      },
      success: function () {
        submitBtn.removeClass('loading-submit-button');
        $('#scm-qa-question-form-author-input').val('');
        $('#scm-qa-question-form-email-input').val('');
        $('#scm-qa-question-form-content-input').val('');
        $('.scm-qa-question-form-message').addClass(
          'show-success-message'
        );
        setTimeout(() => {
          $('.scm-qa-question-form-message').removeClass(
            'show-success-message'
          );
        }, 3000);
        console.log('Form submitted successfully!');
      },
      error: function (error) {
        submitBtn.removeClass('loading-submit-button');
        $('.scm-qa-question-form-message').addClass('show-fail-message');
        setTimeout(() => {
          $('.scm-qa-question-form-message').removeClass(
            'show-fail-message'
          );
        }, 3000);
        console.error('Error submitting the form:', error);
      }
    });
  });
};

function DefaultQuestionForm() {
  QuestionFormAbstract.call(this);
}
DefaultQuestionForm.prototype = Object.create(
  QuestionFormAbstract.prototype
);
DefaultQuestionForm.prototype.constructor = DefaultQuestionForm;

function QuestionFormType4() {
  QuestionFormAbstract.call(this);
}
QuestionFormType4.prototype = Object.create(
  QuestionFormAbstract.prototype
);
QuestionFormType4.prototype.constructor = DefaultQuestionForm;

QuestionFormType4.prototype.getHtml = function () {
  return `
		<div class="scm-qa-question-form-wrapper">
			<form id="scm-qa-question-form" action="" method="POST">
				<div class="scm-qa-question-form-input-wrapper">
					<div class="scm-qa-question-form-name-input-wrapper">
						<input
							id="scm-qa-question-form-author-input"
							type="text"
							name="author"
							placeholder="${languageModule.getLanguageByKey('box_write-input_name')}"
							required
						/>
					</div>
					<div class="scm-qa-question-form-email-input-wrapper">
						<input
							id="scm-qa-question-form-email-input"
							type="email"
							placeholder="${languageModule.getLanguageByKey('box_write-input_email')}"
							required
						/>
					</div>
					<div class="scm-qa-question-form-content-input-wrapper">
						<textarea
							rows="4"
							id="scm-qa-question-form-content-input"
							type="text"
							name="content"
							placeholder="${languageModule.getLanguageByKey('qaQuestionField')}"
							required
						></textarea>
					</div>
				</div>
				<div class="scm-qa-question-form-submit-btn-container">
					<button class="scm-qa-question-form-submit-btn" type="submit">
						<div class="scm-qa-question-form-submit-btn-text">
							${languageModule.getLanguageByKey('qaSubmitQuestionBtn')}
						</div>
					</button>
				</div>
				<div class="scm-qa-question-form-message">
					<div class="success">
						${languageModule.getLanguageByKey('qaSuccessMessage')}
					</div>
					<div class="fail">
						${languageModule.getLanguageByKey('qaFailMessage')}
					</div>
					<div class="xss-message">
						${languageModule.getLanguageByKey(
    'box_write-message_error_character'
  )}
					</div>
				</div>
			</form>
		</div>
	`;
};

QuestionFormType4.prototype.render = function () {
  let formContainer = $(
    `<div id="scm-qa-question-form-container" class="scm-col-12"></div>`
  );
  formContainer.html(this.getHtml());

  $('.content-toggle-reviews').prepend(formContainer);

  $('#scm-qa-question-form').on('submit', function (e) {
    e.preventDefault();
    let author = $('#scm-qa-question-form-author-input').val();
    let email = $('#scm-qa-question-form-email-input').val();
    let content = $('#scm-qa-question-form-content-input').val();

    if (
      helper.checkEscapeString(author) ||
      helper.checkEscapeString(email) ||
      helper.checkEscapeString(content)
    ) {
      $('.scm-qa-question-form-message').addClass('show-xss-message');
      setTimeout(() => {
        $('.scm-qa-question-form-message').removeClass(
          'show-xss-message'
        );
      }, 3000);
      return;
    }

    let submitBtn = $('.scm-qa-question-form-submit-btn');
    submitBtn.addClass('loading-submit-button');

    $.ajax({
      url: `${settingApp.host}/api/qa/submit-question`,
      method: 'POST',
      data: {
        author: author,
        email: email,
        content: content,
        currentProductId: settingApp.product_id,
        shopName: settingApp.shop_name
      },
      success: function () {
        submitBtn.removeClass('loading-submit-button');
        $('#scm-qa-question-form-author-input').val('');
        $('#scm-qa-question-form-email-input').val('');
        $('#scm-qa-question-form-content-input').val('');
        $('.scm-qa-question-form-message').addClass(
          'show-success-message'
        );
        setTimeout(() => {
          $('.scm-qa-question-form-message').removeClass(
            'show-success-message'
          );
        }, 3000);
        console.log('Form submitted successfully!');
      },
      error: function (error) {
        submitBtn.removeClass('loading-submit-button');
        $('.scm-qa-question-form-message').addClass('show-fail-message');
        setTimeout(() => {
          $('.scm-qa-question-form-message').removeClass(
            'show-fail-message'
          );
        }, 3000);
        console.error('Error submitting the form:', error);
      }
    });
  });
};
