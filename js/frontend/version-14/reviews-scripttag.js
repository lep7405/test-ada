try {
  var SMARTIFYAPPS = SMARTIFYAPPS || {};
  SMARTIFYAPPS.rv = SMARTIFYAPPS.rv || {};
  SMARTIFYAPPS.rv.performanceNow = SMARTIFYAPPS.rv.performanceNow || function() {
    if (typeof performance !== 'undefined' && performance && typeof performance.now === 'function') {
      return Math.round(performance.now()) + ' ms ';
    } else {
      return '';
    }
  };
  SMARTIFYAPPS.rv.installed = true;
  if (SMARTIFYAPPS.rv.loadingApp !== true && SMARTIFYAPPS.rv.installed === true) {
    SMARTIFYAPPS.rv.loadingApp = true;
    function getInfoShop(attributeName = 'data-shop') {
      let infoShopElem = document.getElementById('scm-reviews-shopSetting');
      if (!infoShopElem)
        return '';
      let infoShop = infoShopElem.getAttribute(attributeName);
      if(infoShop == '{'){
        infoShop =dataShopFromLiquidLAI['infoShop'];
      }
      return infoShop;
    };
    let infoShopParam= getInfoShop();
    let qaSettingParam = getInfoShop('data-qa-setting');
    let scmCustomDataThemeObject= (typeof scmCustomDataTheme == "undefined" ) ? {} : scmCustomDataTheme;
    var scmCustomDataExtJson= (typeof scmCustomDataExt == "undefined" ) ? {} : scmCustomDataExt;
    function laiCheckNodeListNotNull(variable){
      return (!variable || variable.length == 0) ? false : true;
    }
    var settingApp = (function(infoShopParam, scmCustomDataExtJson,scmCustomDataThemeObject) {
      if(infoShopParam === 'null' || infoShopParam === ''){
        infoShopParam= '{}';
      }
      let infoShopJson= JSON.parse(infoShopParam);
      if (
        qaSettingParam === 'null' ||
        qaSettingParam === '' ||
        qaSettingParam == null
      ) {
        qaSettingParam = '{}';
      }
      let qaSettingObj= JSON.parse(qaSettingParam);

      let checkSetting = function(strText) {
        if (typeof (strText) == "undefined" || strText == 'undefined') {
          return false;
        }
        return true;
      };
      let defaultSetting= {
        starColor: checkSetting(infoShopJson.starColor) ? infoShopJson.starColor : "#f8b6b9",
        useAutoRTL: checkSetting(infoShopJson.useAutoRTL) ? infoShopJson.useAutoRTL : false,
        host : checkSetting(infoShopJson.hostServer) ? infoShopJson.hostServer : 'https://phuoc-s3-lai.s3.us-east-1.amazonaws.com',
        cdn : checkSetting(infoShopJson.host) ? infoShopJson.host : 'https://phuoc-s3-lai.s3.us-east-1.amazonaws.com',
        show_2_widget : checkSetting(infoShopJson.show_2_widget) ? infoShopJson.show_2_widget : false,
        minJs :  checkSetting(infoShopJson.minJs) ? infoShopJson.minJs : false,
        hasCssCustom :  checkSetting(infoShopJson.hasCssCustom) ? infoShopJson.hasCssCustom : false,
        showHiddenStar :  checkSetting(infoShopJson.showHiddenStar) ? infoShopJson.showHiddenStar : "0",
        hostLoadMore : checkSetting(infoShopJson.hostLoadMore) &&  infoShopJson.hostLoadMore != '' ? infoShopJson.hostLoadMore : 'https://store.laireviews.com',
        version: 4,
        starStyle: checkSetting(infoShopJson.starStyle) ? infoShopJson.starStyle : 'star',
        body_bodyQuickLayout : checkSetting(infoShopJson.body_bodyQuickLayout) ? infoShopJson.body_bodyQuickLayout : "default-2",
        header_headerQuickLayout: checkSetting(infoShopJson.header_headerQuickLayout) ? infoShopJson.header_headerQuickLayout : "default-2",
        hidden_none_reviews: checkSetting(infoShopJson.hiddenNoneReviews) ? infoShopJson.hiddenNoneReviews : false,
        use_google_font: true,
        width: checkSetting(infoShopJson.width) ? infoShopJson.width : "1200px",
        reviewBg: checkSetting(infoShopJson.reviewBg) ? infoShopJson.reviewBg : "#ffffff",
        starRating_color: checkSetting(infoShopJson.starRating_color) ? infoShopJson.starRating_color : null,
        starRating_hideIfNoReviews : checkSetting(infoShopJson.starRating_hideIfNoReviews) ? infoShopJson.starRating_hideIfNoReviews : false,
        starRating_showText : checkSetting(infoShopJson.starRating_showText) ? infoShopJson.starRating_showText : false,
        patternNoRating: checkSetting(infoShopJson.starRating_EmptyReview) ? infoShopJson.starRating_EmptyReview : "",
        patternRating: checkSetting(infoShopJson.starRating_SingularReview) ? infoShopJson.starRating_SingularReview : "({{ n }} review)",
        patternRatings: checkSetting(infoShopJson.starRating_PluralReview) ? infoShopJson.starRating_PluralReview : "({{ n }} reviews)",
        popEnabled: checkSetting(infoShopJson.popEnabled) ? infoShopJson.popEnabled : false,
        enable_order_required : checkSetting(infoShopJson.orderRequireEnabled) ? infoShopJson.orderRequireEnabled : false,
        versionUpdate: checkSetting(infoShopJson.versionUpdate) ? infoShopJson.versionUpdate : 1,
        qaEnabled: checkSetting(qaSettingObj.qaEnabled)
          ? qaSettingObj.qaEnabled
          : false
      };
      let settingCustom = {
        hasBg : defaultSetting.reviewBg !== '#ffffff' ? true : false
      };
      let scmCustomDataAll= (typeof scmCustomData == "undefined" || scmCustomData == null) ? null : scmCustomData;
      let getSettingFromShop = function () {
        return Object.assign(defaultSetting, settingCustom, scmCustomDataThemeObject, scmCustomDataExtJson, scmCustomDataAll);
      };
      return getSettingFromShop();
    })(infoShopParam, scmCustomDataExtJson, scmCustomDataThemeObject);
    SMARTIFYAPPS.rv.loadScript = SMARTIFYAPPS.rv.loadScript || function(url, callback){
      let script = document.createElement("script");
      script.type = "text/javascript";
      if (script.readyState){  // IE
        script.onreadystatechange = function(){
          if (script.readyState == "loaded" || script.readyState == "complete"){
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {  // Others
        script.onreadystatechange = callback;
        script.onload = callback;
      }
      script.setAttribute("defer", "defer");
      script.src = url;
      let x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(script, x);
    };

    SMARTIFYAPPS.rv.loadStyle = SMARTIFYAPPS.rv.loadStyle || function(url){
      let head = document.getElementsByTagName("head")[0];
      let link = document.createElement("link");
      link.href = url;
      link.type = "text/css";
      link.rel = "stylesheet";
      link.setAttribute('onload', `this.media='all'; this.onload=null;`);
      link.setAttribute('media', `print`);
      head.appendChild(link);
    };
    SMARTIFYAPPS.rv.scmReviewsRate = SMARTIFYAPPS.rv.scmReviewsRate || (function() {
      function loadCss(filename) {
        let cssNode = document.createElement('link');
        cssNode.setAttribute('rel', 'stylesheet');
        cssNode.setAttribute('type', 'text/css');
        cssNode.setAttribute('href', filename);
        document.getElementsByTagName('head')[0].appendChild(cssNode);
      };
      function decodeStringToHtml(str) {
        let txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
      }
      SMARTIFYAPPS.rv.htmlRating= function(blockStar,rate){
        let textAverage= `${rate.average}`;
        if(rate.average == 5 ){
          textAverage= `5.0`;
        }

        if(typeof SMARTIFYAPPSCustomRating!== 'undefined'){
          return SMARTIFYAPPSCustomRating(blockStar,rate);
        }
        let ratingHtml= rate.total > 0 ? `${blockStar}(${rate.total})` : `${blockStar}`;
        if(settingApp.starRating_showText){
          let pattern= settingApp.patternRatings;
          switch(rate.total) {
            case 0:
              pattern= settingApp.patternNoRating;
              break;
            case 1:
              pattern= settingApp.patternRating;
              break;
            default:
              pattern= settingApp.patternRatings;
          }
          ratingHtml= pattern.replace(/{{ average_rating }}/g, textAverage);
          ratingHtml= pattern.replace(/{{average_rating}}/g, textAverage);
          ratingHtml = ratingHtml.replace(/{{n}}/g, rate.total);
          ratingHtml = ratingHtml.replace(/{{ n }}/g, rate.total);
          ratingHtml= decodeStringToHtml(ratingHtml);
          ratingHtml= blockStar + ratingHtml;
        }
        if(rate.total == 0){
          return `<div class="lai-content-star lai-none-rating" role="button" aria-label="No reviews yet"><div class="lai-wrap-block-star">${ratingHtml}</div></div>`;
        }
        return `<div class="lai-content-star" role="button" aria-label="${textAverage} out of 5 stars (${rate.total} ${rate.total === 1 ? 'review' : 'reviews'})"><div class="lai-wrap-block-star">${ratingHtml}</div></div>`;
      };
      let iconStar= {
        'star' : {
          'rating': `<svg aria-hidden="true" class="Path_1_" viewBox="0 11.796 15.128 14.431">
							<path id="Path_1_" d="M 15.10665130615234 17.27590179443359 C 15.05453205108643 17.11542510986328 14.91586685180664 16.99847793579102 14.74892520904541 16.97425079345703 L 10.05909633636475 16.29273986816406 L 7.961684226989746 12.04304504394531 C 7.88704776763916 11.89176177978516 7.732958793640137 11.79600048065186 7.564273357391357 11.79600048065186 C 7.395556449890137 11.79600048065186 7.241498470306396 11.89176177978516 7.16683292388916 12.04304504394531 L 5.069331645965576 16.29273986816406 L 0.3795907497406006 16.97425079345703 C 0.2126783281564713 16.99847793579102 0.07395394891500473 17.11542510986328 0.02183260396122932 17.2758674621582 C -0.03031831048429012 17.43634033203125 0.01317525468766689 17.61246871948242 0.133993998169899 17.73021697998047 L 3.527437686920166 21.03815460205078 L 2.726470708847046 25.70907592773438 C 2.697927951812744 25.87537002563477 2.766300439834595 26.04337692260742 2.902779340744019 26.14256286621094 C 2.979986429214478 26.19864654541016 3.07143497467041 26.22718811035156 3.163326740264893 26.22718811035156 C 3.233885526657104 26.22718811035156 3.304681062698364 26.21037673950195 3.369507789611816 26.17627716064453 L 7.564243793487549 23.97093200683594 L 11.75880241394043 26.17624664306641 C 11.90816497802734 26.25475311279297 12.08908271789551 26.24169540405273 12.22556018829346 26.14253616333008 C 12.36203765869141 26.04337692260742 12.43044185638428 25.87530899047852 12.40192794799805 25.70901489257813 L 11.60069465637207 21.03815841674805 L 14.99452018737793 17.73019027709961 C 15.11531257629395 17.61246871948242 15.15883350372314 17.43634033203125 15.10665130615234 17.27590179443359 Z">
							</path>*
					</svg>
					`,
          'none': `<svg aria-hidden="true" class="svg_none" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.9259 7.72832L8.446 7.65245L8.67845 7.18104L11.6065 1.24292C11.6066 1.24272 11.6067 1.24252 11.6068 1.24231C11.643 1.16964 11.6987 1.10846 11.7677 1.06566C11.8369 1.02274 11.9166 1 11.9981 1C12.0795 1 12.1593 1.02274 12.2284 1.06566C12.2975 1.10848 12.3532 1.16969 12.3893 1.24241C12.3894 1.24258 12.3895 1.24275 12.3896 1.24292L15.3188 7.18022L15.5512 7.65147L16.0712 7.72732L22.6244 8.6832C22.6245 8.68322 22.6246 8.68323 22.6247 8.68325C22.7051 8.69509 22.7805 8.72913 22.8425 8.78152C22.9046 8.83399 22.9508 8.90278 22.9759 8.98011C23.0009 9.05745 23.0039 9.14026 22.9844 9.21919C22.9649 9.29811 22.9237 9.37001 22.8655 9.42677L18.1237 14.0476L17.747 14.4147L17.836 14.9331L18.9565 21.4574C18.9566 21.4577 18.9566 21.458 18.9567 21.4582C18.97 21.538 18.9609 21.6199 18.9303 21.6949C18.8996 21.77 18.8486 21.8351 18.7829 21.8828C18.7173 21.9305 18.6396 21.959 18.5586 21.9649C18.478 21.9708 18.3973 21.9542 18.3255 21.9169C18.3253 21.9168 18.325 21.9167 18.3247 21.9165L12.4639 18.8356L11.9985 18.591L11.5331 18.8357L5.67117 21.9182C5.67105 21.9182 5.67094 21.9183 5.67082 21.9183C5.59909 21.9559 5.51831 21.9726 5.43757 21.9668C5.35669 21.9609 5.27907 21.9325 5.21346 21.8848C5.14786 21.8372 5.09689 21.7721 5.0663 21.697C5.03578 21.6221 5.02676 21.5401 5.04025 21.4604C5.04028 21.4602 5.04031 21.46 5.04034 21.4598L6.16113 14.9341L6.25016 14.4157L5.87347 14.0486L1.13164 9.42777C1.07342 9.37101 1.03224 9.29911 1.01273 9.22019C0.993229 9.14126 0.99618 9.05845 1.02125 8.98111C1.04633 8.90378 1.09252 8.83499 1.15463 8.78252C1.21665 8.73013 1.29207 8.69609 1.37238 8.68425C1.37249 8.68423 1.3726 8.68421 1.37271 8.6842L7.9259 7.72832Z"  stroke-width="2"/>
					</svg>
					`
        },
        'heart' : {
          'rating': `<svg aria-hidden="true" viewBox="0 0 24 20"  xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M7.56923 0C3.44903 0 0 3.08744 0 7.02394C0 10.7936 2.14173 13.714 4.48902 15.7827C6.84059 17.8551 9.50649 19.1726 10.8194 19.7512C11.5723 20.0829 12.4277 20.0829 13.1806 19.7512C14.4935 19.1727 17.1594 17.8552 19.511 15.7828C21.8583 13.7141 24 10.7937 24 7.0241C24 3.08764 20.551 0 16.4308 0C14.7204 0 13.192 0.721551 12 1.57464C10.808 0.721552 9.2796 0 7.56923 0Z" />
					</svg>
					`,
          'none': `<svg aria-hidden="true" class="svg_none" viewBox="0 0 24 20"  xmlns="http://www.w3.org/2000/svg">
							<path d="M11.418 2.38783L12 2.80437L12.582 2.38783C13.6751 1.60549 15.0021 1 16.4308 1C20.0813 1 23 3.71901 23 7.0241C23 10.3857 21.093 13.0556 18.8498 15.0325C16.6086 17.0077 14.0482 18.2761 12.7774 18.8361C12.2814 19.0546 11.7186 19.0546 11.2226 18.8361C9.95178 18.2761 7.39142 17.0076 5.15021 15.0324C2.90699 13.0555 1 10.3855 1 7.02394C1 3.71885 3.91873 1 7.56923 1C8.99794 1 10.3249 1.60549 11.418 2.38783Z" stroke-width="2"/>
					</svg>
					`
        },
        'like' : {
          'rating': `<svg aria-hidden="true" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
							<path d="M20.4 5.03144H15.6V2.37584C15.602 1.37551 14.9683 0.481559 14.0161 0.14141C13.0639 -0.198739 11.9981 0.0880958 11.352 0.858353L8.04001 4.79433C7.499 5.43257 7.20174 6.23807 7.20001 7.07056V24H20.4C22.3882 24 24 22.4077 24 20.4434V8.58804C24 6.62378 22.3882 5.03144 20.4 5.03144Z"/>
							<path d="M0 8.58803V22.8145C0 23.4692 0.537258 24 1.2 24H4.8V7.4025H1.2C0.537258 7.4025 0 7.93328 0 8.58803Z" />
					</svg>

					`,
          'none': `<svg aria-hidden="true" class="svg_none" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4 5.03144H15.6V2.37584C15.602 1.37551 14.9683 0.481559 14.0161 0.14141C13.0639 -0.198739 11.998 0.0880958 11.352 0.858353L8.04 4.79433C7.49898 5.43257 7.20173 6.23807 7.2 7.07056V7.40251H1.2C0.537258 7.40251 0 7.93329 0 8.58804V22.8145C0 23.4692 0.537258 24 1.2 24H20.4C22.3882 24 24 22.4077 24 20.4434V8.58804C24 6.62378 22.3882 5.03144 20.4 5.03144ZM2.39999 9.77357H7.19999V21.6289H2.39999V9.77357ZM20.4 21.6289C21.0627 21.6289 21.6 21.0982 21.6 20.4434V8.58804C21.6 7.93329 21.0627 7.40251 20.4 7.40251H14.4C13.7372 7.40251 13.2 6.87173 13.2 6.21697V2.37584L9.87598 6.31182C9.69708 6.52511 9.59943 6.79356 9.59998 7.07056V21.6289H20.4Z" />
					</svg>
					`
        },
        'smile' : {
          'rating': `<svg aria-hidden="true" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
							<path d="M12 0C5.38776 0 0 5.38776 0 12C0 18.6122 5.38776 24 12 24C18.6122 24 24 18.6122 24 12C24 5.38776 18.6122 0 12 0ZM8.32653 7.10204C8.93878 7.10204 9.55102 7.71429 9.55102 8.32653C9.55102 8.93878 8.93878 9.55102 8.32653 9.55102C7.71429 9.55102 7.10204 8.93878 7.10204 8.32653C7.10204 7.71429 7.71429 7.10204 8.32653 7.10204ZM16.2857 16.4082C14.9388 17.3878 13.8367 17.8776 12 17.8776C10.1633 17.8776 9.18367 17.5102 7.71429 16.4082C7.34694 16.1633 7.22449 15.551 7.59184 15.1837C7.95918 14.8163 8.44898 14.6939 8.81633 15.0612C9.91837 15.7959 10.6531 16.0408 11.8776 16.0408C13.102 16.0408 13.9592 15.7959 14.9388 15.0612C15.3061 14.8163 15.9184 14.8163 16.1633 15.1837C16.4082 15.551 16.6531 16.0408 16.2857 16.4082ZM15.6735 9.55102C15.0612 9.55102 14.449 8.93878 14.449 8.32653C14.449 7.71429 15.0612 7.10204 15.6735 7.10204C16.2857 7.10204 16.898 7.71429 16.898 8.32653C16.898 8.93878 16.2857 9.55102 15.6735 9.55102Z" />
					</svg>

					`,
          'none': `<svg aria-hidden="true" class="svg_none" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.84615C6.39219 1.84615 1.84615 6.39219 1.84615 12C1.84615 17.6078 6.39219 22.1538 12 22.1538C17.6078 22.1538 22.1538 17.6078 22.1538 12C22.1538 6.39219 17.6078 1.84615 12 1.84615ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"/>
					</svg>
					`
        }
      };
      if(typeof iconCustom != 'undefined'){
        iconStar= Object.assign(iconStar, iconCustom);
      }
      function addStyleOnHead() {
        let widthContainer = settingApp.width ? settingApp.width : '1200px';
        let color_star= settingApp.starRating_color ? settingApp.starRating_color : settingApp.starColor;
        let styleConfig = `
				#scm-reviews-importer-iframe, .scm-reviews-importer-iframe{
						border: none;
				}
					.scm-reviews-rate svg{
							width: 15.128px;
							height: 15.431px;
							stroke: none;
							fill: ${color_star} !important;
					}
					.scm-container{
							background: ${settingApp.reviewBg};
					}
					.scm-reviews-importer,.scm-reviews-importer-iframe{
					    -webkit-transition: all .5s ease-in;
              -o-transition: all .5s ease-in;
              transition: all .5s ease-in;
					}
					.scm-reviews-importer,#scm-reviews-importer,.lai-title{
							max-width: ${widthContainer}
					}
					.lai-title{
							margin: 0 auto;
							font-size: 2.5rem;
							text-align: center;
					}
					.lai-group-star{
							position: relative;
							display: -webkit-box;
							display: -ms-flexbox;
							display: flex;
							margin-right: 2px;
							height: 16px;
							font-size: 0;
							margin-bottom: 0 !important;
							margin-top: -2px;
					}
					.lai-star-rating {
							position: absolute;
							overflow: hidden;
					}
					.lai-content-star{
							display: inline-block;
							font-size: 0px;
					}
					.lai-wrap-block-star > div:nth-child(5){
								margin-right: 10px;
					}
					.lai-wrap-block-star{
							display: -webkit-box;
							display: -ms-flexbox;
							display: flex;
							-webkit-box-align: center;
							-ms-flex-align: center;
							align-items: center;
							font-size: 14px;
							line-height: 16px;
							flex-wrap: wrap;
					}
					.scm-reviews-rate svg.svg_none {
							fill: none !important;
							stroke: ${color_star} !important;
					}
					.scm-reviews-rate span{
								font-size: 14px;
								line-height: 16px;
					}
					.scm-reviews-rate{
							text-decoration: none;
							height: auto !important;
              overflow: visible !important;
					}
					.scm-container h2{
							padding: 30px 0 5px;
							margin: 0;
					}
					body[data-review-app-rtl="true"] .scm-reviews-rate{
              direction: rtl;
					}
					body[data-review-app-rtl="true"]  .lai-wrap-block-star > div:nth-child(5) {
              margin-right: 0;
              margin-left: 10px;
          }
					.lai-star-rating-none{
							display: -webkit-box;
					display: -ms-flexbox;
					display: inline-flex;
				}
				.gps .lai-content-star * {
							max-width: none !important;
					}
			`;
        switch (settingApp.showHiddenStar){
          case "2" :
            styleConfig= styleConfig + `
							a[href="#scm-reviews-importer"],.scm-reviews-rate.click_star{
									display: none;
							}
					`;
            break;
          case "3" :
            styleConfig= styleConfig + `
						a[href="#scm-reviews-importer"],.scm-reviews-rate.click_star{
									display: none;
							}
					`;
            break;
        }
        if(settingApp.starRating_hideIfNoReviews){
          styleConfig= styleConfig + `
							.lai-content-star.lai-none-rating{
									display: none;
							}
					`;
        }
        if(settingApp.hidden_none_reviews){
          styleConfig= styleConfig + `
							.scm-container.no-reviews{
									display: none;
							}
					`;
        }
        let linkElement = this.document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(styleConfig));
        document.querySelector('head').appendChild(linkElement);
      }

      function actionCreateReviews() {
        setTimeout(function(){
          let arrayListElement = document.querySelectorAll('.scm-reviews-rate');
          if(!laiCheckNodeListNotNull(arrayListElement)){
            return;
          }
          arrayListElement.forEach(element => {
            element.style.height= 0;
            element.style.overflow= 'hidden';
            let rate = {
              'average': 0,
              'total': 0
            };
            let idProduct= element.getAttribute('data-product-id');
            let checkTrueProduct= true;
            let rateVersion2 = element.getAttribute('data-rate-version2');
            if(!rateVersion2 || rateVersion2 == ''){
              if(element.childNodes[0] && element.childNodes[0].nodeName == 'SPAN')
                rateVersion2= element.outerText;
            }
            if (rateVersion2 && rateVersion2 != 'null') {
              rateVersion2 = JSON.parse(rateVersion2);
              rate = {
                'average': rateVersion2['average'],
                'total': rateVersion2['total']
              };
            }else{
              rateVersion2 = {"rate1":0,"rate2":0,"rate3":0,"rate4":0,"rate5":0,"total":0,"average":0};
              rate = {
                'average': 0,
                'total': 0
              };
            }
            if(idProduct ){
              if(!rateVersion2 || !rateVersion2.hasOwnProperty('product_shopify_id')){
                checkTrueProduct = true;
              }else {
                checkTrueProduct= (rateVersion2.product_shopify_id && idProduct != rateVersion2.product_shopify_id ) ? false : true;
              }
            }
            let blockStar="";
            if(!checkTrueProduct){
              rateVersion2 = {"rate1":0,"rate2":0,"rate3":0,"rate4":0,"rate5":0,"total":0,"average":0};
              rate = {
                'average': 0,
                'total': 0
              };
            }
            if (rate && rate.average > 0) {
              blockStar = scmReviewsRate(rate.average);
            }else{
              blockStar = scmReviewsRate(0);
            }
            blockStar = SMARTIFYAPPS.rv.htmlRating(blockStar,rateVersion2);
            element.innerHTML = blockStar;
            element.style.display= "";
          });
        },1);
      }


      function scmReviewsRate(value) {
        let blockStar = '';
        if(value != 0){
          let number = Math.floor(value);
          let decimal = value - number;
          decimal= decimal.toFixed(2)*100;
          if(number < 5){
            for (let i = 0; i <= number; i++) {
              let style="";
              if( i == number){
                style= "width: " + decimal + `%;`;
              }
              blockStar = blockStar + '<div class="lai-group-star">' + '<div class= "lai-star-rating" style= "' + style + '">' + iconStar[settingApp.starStyle].rating + '</div>' + '<div class= "lai-star-rating-none">'+ iconStar[settingApp.starStyle].none + '</div>' + '</div>';
            }
            for (let i = (number + 1); i < 5; i++) {
              blockStar = blockStar + '<div class="lai-group-star">' + iconStar[settingApp.starStyle].none + '</div>';
            }
          }
          else{
            for (let i = 0; i < 5; i++) {
              blockStar = blockStar + '<div class="lai-group-star">' + iconStar[settingApp.starStyle].rating + '</div>';
            }
          }

        }else{
          for (let i = 0; i < 5; i++) {
            blockStar = blockStar + '<div class="lai-group-star">' + iconStar[settingApp.starStyle].none + '</div>';
          }
        }
        return blockStar;
      };

      function parseJson(value) {
        if (value) {
          let valueDecode64 = atob(value);
          return JSON.parse(valueDecode64);
        } else {
          return value;
        }
      };

      function getUrlParameter(sParam) {
        var sPageURL = location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;
        for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
        }
      };
      function dispatchEventBeforeScrollToWidgetReviews(){
        const eventClickStar = document.createEvent('Event');
        eventClickStar.initEvent('beforeScrollToReviewWidget', true, true);
        document.dispatchEvent(eventClickStar);
      };
      function _scrollTo(el, yOffset = -100){
        let offsetWindow= typeof window.pageYOffset != "undefined" ? window.pageYOffset : window.scrollY;
        const y = el.getBoundingClientRect().top + offsetWindow + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
      }
      function scrollWidgetReview() {
        if(settingApp.show_2_widget){
          let widgets = document.querySelectorAll('.main-widget-product.sma-load-iframe');
          if(!laiCheckNodeListNotNull(widgets)){
            widgets= document.querySelectorAll('.sma-load-iframe');
          }
          if(laiCheckNodeListNotNull(widgets)){
            widgets.forEach(widget => {
              if(widget && widget.offsetParent){
                _scrollTo(widget);
              }
            })
          }
        }else{
          let widget = document.querySelector('.sma-load-iframe');
          if(widget){
            _scrollTo(widget);
          }
        }
      };
      function createOneStarRatingAjax(handle,item){
        fetch(`/products/${handle}`).then(function (response) {
          return response.text();
        }).then(function (html) {
          let htmlRating = new DOMParser().parseFromString(html,"text/html").querySelector(".scm-reviews-rate");
          item.appendChild(htmlRating);
          item.classList.add('scm-loaded-rating');
          actionCreateReviews();
        }).catch(function (err) {
          console.warn('Something went wrong.', err);
        });
      }
      function smaRatingStarCallBackAjax(){
        let ajaxProduct= document.querySelectorAll('.sma-rating-star:not(.scm-loaded-rating)');
        if(laiCheckNodeListNotNull(ajaxProduct)){
          ajaxProduct.forEach(function(item, index){
            let handle= item.getAttribute('data-handle');
            createOneStarRatingAjax(handle,item);
          });
        }
        actionCreateReviews();
      }
      function onWindowLoad() {
        let element= document.querySelector('body');
        function isElementRTL(element) {
          if (window.getComputedStyle) {
            return window.getComputedStyle(element).direction === "rtl";
          } else if (element.currentStyle) {
            return element.currentStyle.direction === "rtl";
          }
          return false;
        }
        if(isElementRTL(element)){
          element.setAttribute('data-review-app-rtl', 'true');
        }
        document.querySelector('body').setAttribute('data-review-app', 'true');
        actionCreateReviews();
        if (getUrlParameter('review') || getUrlParameter('reviews') || getUrlParameter('review_email') || getUrlParameter('scm_review_mail')) {
          SMARTIFYAPPS.rv.scmReviewsRate.dispatchEventBeforeScrollToWidgetReviews();
          setTimeout(function(){
            SMARTIFYAPPS.rv.scmReviewsRate.scrollWidgetReview();
          }, 10);

        }
      };
      function addActionClickStarForEl(item){
        if(!item.getAttribute('tabindex')) {
          item.setAttribute('tabindex', '0');
        }
        item.addEventListener('click', event => {
          SMARTIFYAPPS.rv.scmReviewsRate.dispatchEventBeforeScrollToWidgetReviews();
          setTimeout(function(){
            SMARTIFYAPPS.rv.scmReviewsRate.scrollWidgetReview();
          }, 10);
        });
        item.addEventListener('keydown', function(e) {
          if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            SMARTIFYAPPS.rv.scmReviewsRate.dispatchEventBeforeScrollToWidgetReviews();
            setTimeout(function(){
              SMARTIFYAPPS.rv.scmReviewsRate.scrollWidgetReview();
            }, 10);
          }
        });
      }
      function constructor() {
        addStyleOnHead();
      };

      function init() {
        constructor();
        actionCreateReviews();
      };
      function getCssIframeByFileName(fileName){
        let versionCss= 'css-version-14';
        return `${settingApp.cdn}/${versionCss}/assets/css/${fileName}.css?version=${settingApp.version}`;
      }

      function getLinkJsIframeByFileName(fileName){
        let minJs=settingApp.minJs ? '.min' : "";
        let versionJs= 'version-14';
        return `${settingApp.cdn}/js/frontend/${versionJs}/${fileName}${minJs}.js?version=${settingApp.version}`;
      }
      function DataShopFilter(dataShopFromLiquidLAI, scmLanguage){
        this.productMainInfo='';
        this.dataShopFromLiquidLAI= dataShopFromLiquidLAI;
        this.shopName= '';
        this.infoShop='';
        this.infoShopJson={};
        this.shopDomain='';
        this.templateCurrent='';
        this.langCode= 'en';
        this.languages= {};
        this.scmAccount={
          "email" : "",
          "name"  : "",
          "order" : ""
        };
        this.preview= false;
        this.planShop= {
          'grid' : true,
          'testimonial' : true,
          'gallery' : false,
          'cardCarousel' : true
        };
        this.widgetsConfig= {
        };
        this.orders={};
        this.scmCustomData= '{}';
        this.qaSetting= '';
        this.filterData(scmLanguage);
      }
      DataShopFilter.prototype.getBlockReviewsByKeyMetafield= function (keyMetafield){
        return typeof this.dataShopFromLiquidLAI.dataShop[keyMetafield] != 'undefined' ? JSON.parse(this.dataShopFromLiquidLAI.dataShop[keyMetafield]) : '';
      }
      DataShopFilter.prototype.defaultLanguages= function (scmLanguage){
        return {
          "sort_box": {
          },
          "box_write": {
          },
          "thank_you": {
          },
          "empty_page": {
          },
          "box_reviews": {
          },
          "reviews_list": {
          },
          "discount": {
          },
          "qa": {
          }
        }
      }
      DataShopFilter.prototype.filterData= function (scmLanguage){
        this.langCode= this.dataShopFromLiquidLAI.current_language.shop_locale.locale;
        if(typeof this.dataShopFromLiquidLAI['languages'] == 'object' && this.dataShopFromLiquidLAI['languages'] && typeof this.dataShopFromLiquidLAI['languages'][this.langCode] != 'undefined'){
          this.languages=  JSON.stringify(this.dataShopFromLiquidLAI['languages'][this.langCode].value.smartify_reviews_app_text);
        }else{
          if(scmLanguage){
            this.languages= scmLanguage;
          }else{
            this.languages= JSON.stringify(this.defaultLanguages());
          }
        }
        this.shopName= this.dataShopFromLiquidLAI.shopName;
        this.templateCurrent= this.dataShopFromLiquidLAI.templateCurrent;
        this.infoShop= this.dataShopFromLiquidLAI.infoShop;
        this.infoShopJson= JSON.parse(this.dataShopFromLiquidLAI.infoShop);
        if(typeof this.infoShopJson.shopPlan != 'undefined'){
          this.planShop= this.infoShopJson.shopPlan;
        }
        if(typeof this.infoShopJson.widgets != 'undefined'){
          this.widgetsConfig= this.infoShopJson.widgets;
        }
        this.shopDomain= this.dataShopFromLiquidLAI.shopDomain;
        Object.assign(this.scmAccount, this.dataShopFromLiquidLAI.scmAccount);
        this.scmCustomData= this.dataShopFromLiquidLAI.scmCustomData ? this.dataShopFromLiquidLAI.scmCustomData : this.scmCustomData;
        this.scmAccount=  this.dataShopFromLiquidLAI.dataShop.customer ? this.dataShopFromLiquidLAI.dataShop.customer : this.scmAccount;
        this.qaSetting= typeof this.dataShopFromLiquidLAI.dataShop.qaSetting != 'undefined' ? this.dataShopFromLiquidLAI.dataShop.qaSetting : this.qaSetting;
        this.orders = this.dataShopFromLiquidLAI.dataShop.orders ? this.dataShopFromLiquidLAI.dataShop.orders : this.orders;
        this.productMainInfo = this.dataShopFromLiquidLAI.productMainInfo ? this.dataShopFromLiquidLAI.productMainInfo : this.productMainInfo;
        if(typeof Shopify != 'undefined' && typeof Shopify.designMode != 'undefined' && Shopify.designMode){
          this.preview= true;
        }
      }
      function DataSectionFilter(dataSection, dataShop, iframeRoot){
        this.el= iframeRoot;
        this.dataSection= dataSection;
        this.dataShop= dataShop;
        this.typePage= 'productPage';
        this.blockReviewFirst= '';
        this.sectionConfig= {};
        this.scmCustomData= {};
        this.sourceMetafield='homePage';
        this.urlLoadMore= `${settingApp["hostLoadMore"]}/api/load-more`;
        this.canUseLayout= true;
        this.useDefaultSetting= false;
        this.wrongProductPageAdvanceWidget= false;
        this.showProductDataInAdvancedWidget= false;
        this.adVanceInfo= {
          'totalOrderHasProduct': null
        };
        this.configLayout= {
          "grid": {
            "layout": "default-3",
            "source": "homePage"
          },
          "cardCarousel": {
            "layout": "default-2",
            "source": "homePage",
            "delay": 6000,
            "auto_run": true
          },
          "testimonial": {
            "source": "homePage",
            "delay": 6000,
            "auto_run": true
          },
          "gallery": {
            "source": "homePage"
          },
          "choose_layout": {
            "source": "homePage"
          }
        };
        this.reviewCountInfo=  {
          "rate1": "",
          "rate2": "",
          "rate3": "",
          "rate4": "",
          "rate5": "",
          "total": "",
          "average": "",
          "product_shopify_id": "",
          "product_group_id": "",
          "group_mapping_id": ""
        };
        this.reviewItems = '';
        this.product= {
          'id' : ''
        };
        this.qaData = '';
        this.orderCurrentProduct= false;
        this.updateFromSectionData();

        if(this.typePage === 'productPage') {
          this.prepareDataForProductSectionData();
        } else if(this.typePage === 'homePage'){
          if(typeof this.sectionConfig.type_layout == 'undefined' || this.sectionConfig.type_layout === ''){
            this.prepareDataForHomeSectionDataVersion1();
          } else{
            this.prepareDataForHomeSectionData();
            if(this.sectionConfig.source == "productCurrent" && this.dataShop.templateCurrent == 'product'){
              this.prepareDataForProductSectionData();
              this.showProductDataInAdvancedWidget= true;
            }
            if(typeof dataProductCart != "undefined"){
              this.prepareDataForProductSectionData();
              this.showProductDataInAdvancedWidget= true;
            }
            if(this.sectionConfig.source == "productCurrent" && this.dataShop.templateCurrent != 'product'){
              this.wrongProductPageAdvanceWidget= true;
            }
          }
        } else {
          this.prepareDataForHappySectionData();
        }
      }
      DataSectionFilter.prototype.updateFromSectionData= function (){
        this.typePage= this.dataSection.typePage;
        this.sectionConfig= this.dataSection.sectionConfig ? JSON.parse(this.dataSection.sectionConfig )  : this.sectionConfig;
        this.scmCustomData= this.dataSection.scmCustomData ? JSON.parse(this.dataSection.scmCustomData) : this.scmCustomData;
      }
      DataSectionFilter.prototype.addStyleCustom= function (iframe){
        if(typeof this.sectionConfig.width_container != 'undefined' && this.sectionConfig.width_container) {
          this.el.parentNode.style.maxWidth  = this.sectionConfig.width_container;
          let titleLaiEl= this.el.parentNode.previousElementSibling;
          if(titleLaiEl && titleLaiEl.classList.contains("lai-title")){
            titleLaiEl.style.maxWidth= this.sectionConfig.width_container;
          }
        }
        if(typeof this.sectionConfig.background != 'undefined' && this.sectionConfig.background) {
          this.el.parentNode.parentNode.style.background = this.sectionConfig.background;
        }
      }
      DataSectionFilter.prototype.prepareDataForHomeSectionDataVersion1= function (){
        this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield('reviews_homePage');
        this.urlLoadMore=`${settingApp["hostLoadMore"]}/api/load-more-home-page`;
      }
      DataSectionFilter.prototype.prepareDataForHomeSectionData= function (){
        if(!this.sectionConfig.use_default_setting != 'undefined'){
          this.useDefaultSetting= this.sectionConfig.use_default_setting;
        }
        if(!this.useDefaultSetting){
          this.addStyleCustom();
        }
        // todo get data from server
        for (const [key, value] of Object.entries(this.dataShop.widgetsConfig)) {
          if(typeof this.configLayout[key] != 'undefined'){
            Object.assign(this.configLayout[key], value);
          }
        }
        if(typeof this.sectionConfig.type_layout != 'undefined'){
          if(this.sectionConfig.type_layout === "slug" && typeof this.sectionConfig.slug_layout !='undefined'  && this.sectionConfig.slug_layout){
            this.sectionConfig.type_layout = this.sectionConfig.slug_layout;
          }
          switch(this.sectionConfig.type_layout) {
            case "grid" :
              this.scmCustomData.slider= false;
              this.scmCustomData.body_layout= 'grid';
              this.scmCustomData.body_bodyQuickLayout= this.configLayout['grid'].layout;
              if(this.configLayout['grid'].itemPerLoadLayout){
                this.scmCustomData.itemPerLoadLayout= this.configLayout['grid'].itemPerLoadLayout;
              }
              if(typeof this.dataShop.planShop[this.sectionConfig.type_layout] != 'undefined'){
                this.canUseLayout= this.dataShop.planShop[this.sectionConfig.type_layout];
              }
              break;
            case "testimonial":
              if(typeof this.dataShop.planShop[this.sectionConfig.type_layout] != 'undefined'){
                this.canUseLayout= this.dataShop.planShop[this.sectionConfig.type_layout];
              }
              this.scmCustomData.slider= true;
              this.scmCustomData.slider_time_between= this.configLayout['testimonial'].delay;
              this.scmCustomData.slider_item_homepage_desktopItems= 2;
              this.scmCustomData.slider_item_homepage_smallDesktopItems= 2;
              this.scmCustomData.slider_item_homepage_tabletItems= 1;
              this.scmCustomData.slider_item_mobileItems= 1;
              this.scmCustomData.slider_auto_slider= this.configLayout['testimonial'].auto_run;
              this.scmCustomData.body_bodyQuickLayout= 'testimonial';
              break;
            case "cardCarousel":
              this.scmCustomData.body_layout= 'grid';
              if(typeof this.dataShop.planShop[this.sectionConfig.type_layout] != 'undefined'){
                this.canUseLayout= this.dataShop.planShop[this.sectionConfig.type_layout];
              }
              this.scmCustomData.slider= true;
              this.scmCustomData.slider_time_between= this.configLayout['cardCarousel'].delay;
              this.scmCustomData.slider_auto_slider= this.configLayout['cardCarousel'].auto_run;
              this.scmCustomData.body_bodyQuickLayout= this.configLayout['cardCarousel'].layout;
              this.scmCustomData.slider_item_homepage_desktopItems= 3;
              this.scmCustomData.slider_item_homepage_smallDesktopItems= 3;
              this.scmCustomData.slider_item_homepage_tabletItems= 2;
              this.scmCustomData.slider_item_mobileItems= 1;
              break;
            case "gallery":
              this.scmCustomData.slider= false;
              this.scmCustomData.body_layout= 'grid';
              this.scmCustomData.body_bodyQuickLayout= 'gallery';
              if(typeof this.dataShop.planShop[this.sectionConfig.type_layout] != 'undefined'){
                this.canUseLayout= this.dataShop.planShop[this.sectionConfig.type_layout];
              }
              break;
            case "choose_layout":
              this.scmCustomData.no_select_layout= true;
              this.canUseLayout= true;
              break;
            default:
          }
        }
        let keyMetafield='';
        if(typeof this.sectionConfig.source != 'undefined'){
          switch(this.sectionConfig.source) {
            case "homePage":
              this.sourceMetafield= 'homePage'
              keyMetafield= 'reviews_homePage';
              this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield(keyMetafield);
              break;
            case "highlightProductPage":
              this.sourceMetafield= 'highlightProductPage'
              keyMetafield= 'reviews_highlightProductPage';
              this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield(keyMetafield);
              break;
            case "happyPage":
              this.sourceMetafield= 'happyPage';
              keyMetafield= 'reviews_happyPage';
              this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield(keyMetafield);
              break;
            case "default_layout":
              if(this.sectionConfig.type_layout == 'choose_layout'){
                this.blockReviewFirst='';
              }else{
                this.sourceMetafield= this.configLayout[this.sectionConfig.type_layout].source;
                keyMetafield= 'reviews_' + this.configLayout[this.sectionConfig.type_layout].source;
                this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield(keyMetafield);
              }
              break;
            case "4":
              if(typeof this.sectionConfig.id_source_custom !='undefined' && this.sectionConfig.id_source_custom){
                this.sourceMetafield= this.sectionConfig.id_source_custom;
                keyMetafield= 'reviews_' + this.sectionConfig.id_source_custom;
                this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield(keyMetafield);
              }
              break;
            case "productCurrent":
              this.blockReviewFirst= '';
              break;
            default:
              this.sourceMetafield= this.configLayout[this.sectionConfig.type_layout].source;
              keyMetafield= 'reviews_' + this.configLayout[this.sectionConfig.type_layout].source;
              this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield(keyMetafield);
              break;
          }
        }else{
          this.sourceMetafield= this.configLayout[this.sectionConfig.type_layout].source;
          keyMetafield= 'reviews_' + this.configLayout[this.sectionConfig.type_layout].source;
          this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield(keyMetafield);
        }
        this.urlLoadMore=`${settingApp["hostLoadMore"]}/api/widgets/reviews`;
      }
      DataSectionFilter.prototype.prepareDataForHappySectionData= function (){
        this.blockReviewFirst= this.dataShop.getBlockReviewsByKeyMetafield('reviews_happyPage');
        this.urlLoadMore= `${settingApp["hostLoadMore"]}/api/load-more-happy-page`;
      }
      DataSectionFilter.prototype.prepareDataForProductSectionData= function (){
        let dataProduct= '';
        if( this.dataShop.templateCurrent == 'product'){
          if(typeof this.sectionConfig.use_other_product != 'undefined' &&  this.sectionConfig.use_other_product){
            dataProduct= this.dataSection.dataProduct;
          }else{
            dataProduct= this.dataShop.productMainInfo;
          }
        }else{
          dataProduct= this.dataSection.dataProduct;
        }
        if(typeof dataProductCart != "undefined"){
          dataProduct= dataProductCart;
        }
        let dataProductReviews= dataProduct.reviewsData;
        if(dataProductReviews){
          dataProductReviews= dataProductReviews.replace(/\[\]/g, "");
          dataProductReviews= dataProductReviews.replace('"[', '[');
          dataProductReviews= dataProductReviews.replace('}]"', '}]');
          dataProductReviews= JSON.parse(dataProductReviews);
          this.blockReviewFirst= dataProductReviews.reviewItems;
          Object.assign(this.reviewCountInfo, dataProductReviews.reviewCountInfo);
        }
        let productInfoId= (dataProduct.product && dataProduct.product.id) ? dataProduct.product.id : '';
        let count=0;
        if(productInfoId && settingApp.enable_order_required){
          for (const [key, value] of Object.entries(this.dataShop.orders)) {
            if(value.product && productInfoId == value.product.id){
              this.orderCurrentProduct= true;
              count= count + 1;
            }
          }
          this.adVanceInfo.totalOrderHasProduct= count;
        }
        Object.assign(this.product,dataProduct.product);
        let a= `.scm-reviews-importer-iframe[data-idiframe="${this.dataSection.id_iframe}"]`;
        let elementIframe= document.querySelector(a);
        if(elementIframe){
          elementIframe.parentNode.setAttribute('data-product-id',this.product.id);
        }
        this.qaData = typeof dataProduct.qaData != 'undefined' ?  this.dataSection.dataProduct.qaData : this.qaData;
        this.urlLoadMore= `${settingApp["hostLoadMore"]}/api/load-more`;
      }
      function checkRTLLangCurrent(dataShopFromLiquidLAI){
        if(typeof dataShopFromLiquidLAI.current_language != "undefined" && dataShopFromLiquidLAI.current_language){
          if(dataShopFromLiquidLAI.current_language.shop_locale.locale === "ar" || dataShopFromLiquidLAI.current_language.shop_locale.locale === "he" || dataShopFromLiquidLAI.current_language.shop_locale.locale === "he-IL"){
            return true;
          }
          return false;
        }
      }
      function createHtmlIframe(settingShop,dataSection ,dataShopFromLiquidLAI ,scmLanguage, iframeRoot){
        if(!dataSection){
          return false;
        }
        let linkGoogleFontDefault= settingApp.use_google_font ? `<link href="https://fonts.googleapis.com/css?family=Nunito+Sans&amp;display=swap" rel="stylesheet">` : '';
        let dataShopFromLiquidLAIFilter=new DataShopFilter(dataShopFromLiquidLAI, scmLanguage);
        console.log('dataShopFromLiquidLAIFilter',dataShopFromLiquidLAIFilter);
        console.log('scmLanguage',scmLanguage);
        let dataSectionFilter= new DataSectionFilter(dataSection, dataShopFromLiquidLAIFilter, iframeRoot);
        let linkCustom= settingShop.hasCssCustom ? `<link href="${settingApp.cdn}/storage/customCssJs/${dataShopFromLiquidLAI.shopName}/custom.css?version=${settingApp.versionUpdate}" rel="stylesheet">` : '';
        let bodyTagSma= 'body';
        let headTagSma= 'head';
        let pageType= "product";
        let classPage= "product-page";
        let dataAppType= "product";
        let scmLanguageObject= dataShopFromLiquidLAIFilter.languages;
        let statusRTL= checkRTLLangCurrent(dataShopFromLiquidLAI);
        let attributeRTL= statusRTL ? 'dir="rtl"' : '';
        let initWiglot='';
        if( typeof Weglot != 'undefined' && Weglot.options && Weglot.options.api_key){
          initWiglot= `
							<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
							<script>
							setTimeout(function(){
								Weglot.initialize({
												api_key: '${Weglot.options.api_key}',
												hide_switcher: true
										});
								},2000);
						</script>`;
        }
        if(dataSectionFilter.typePage == "homePage"){
          pageType= "homePage";
          classPage= "home-page";
          dataAppType="page";
        }
        // old layout
        if(dataSectionFilter.typePage == "happyPage"){
          pageType= "happyPage";
          classPage= "happy-page";
          dataAppType="page";
        }
        if(dataSectionFilter.showProductDataInAdvancedWidget){
          classPage= classPage + ' product-in-advanced-wd';
        }
        let qaCSSLink = '';
        let dataExample = '';
        if (dataShopFromLiquidLAIFilter.preview) {
          dataExample = `<script src="${getLinkJsIframeByFileName('dataExample')}"><\/script>`;
        } if (settingApp.qaEnabled) {
          qaCSSLink = `<link href="${getCssIframeByFileName('scm-qa')}" rel="stylesheet">`
        }
        return `
		<html lang="en" ${attributeRTL}>
		<`+ headTagSma +`>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Reviews Importer</title>
					<script>
				var infoShop= '${dataShopFromLiquidLAIFilter.infoShop}';
				var configSection= ${JSON.stringify(dataSectionFilter.sectionConfig)};
				var dataApp= {
					'host': '${settingShop.host}',
					'cdn': '${settingShop.cdn}',
					'productShopifyId': '${dataSectionFilter.product.id}',
					'shopDomain': '${dataShopFromLiquidLAIFilter.shopDomain}',
					'shopName': '${dataShopFromLiquidLAIFilter.shopName}',
					'type': '${dataAppType}',
					'typePage': '${dataSectionFilter.typePage}',
					'preview': ${dataShopFromLiquidLAIFilter.preview},
					'canUseLayout' : ${dataSectionFilter.canUseLayout},
					'rtl' : ${statusRTL},
					'wrongProductPageAdvanceWidget' : ${dataSectionFilter.wrongProductPageAdvanceWidget},
					'showProductDataInAdvancedWidget' : ${dataSectionFilter.showProductDataInAdvancedWidget},
					'advanceInfo' : ${JSON.stringify(dataSectionFilter.adVanceInfo)}
					}
				;
				var planShop= ${JSON.stringify(dataShopFromLiquidLAIFilter.planShop)};
				var reviewsInFo= {
							'rate1' : '${dataSectionFilter.reviewCountInfo.rate1}',
							'rate2' : '${dataSectionFilter.reviewCountInfo.rate2}',
							'rate3' : '${dataSectionFilter.reviewCountInfo.rate3}',
							'rate4' : '${dataSectionFilter.reviewCountInfo.rate4}',
							'rate5' : '${dataSectionFilter.reviewCountInfo.rate5}',
							'total' : '${dataSectionFilter.reviewCountInfo.total}',
							'average' : '${dataSectionFilter.reviewCountInfo.average }',
							'product_shopify_id' : '${dataSectionFilter.reviewCountInfo.product_shopify_id}'
				};
			var scmAccount= {
						"email" : "${dataShopFromLiquidLAIFilter.scmAccount.email}",
						"name"  : "${dataShopFromLiquidLAIFilter.scmAccount.name}",
						"order" : "${dataShopFromLiquidLAIFilter.scmAccount.order}",
						"order_current_product": "${dataSectionFilter.orderCurrentProduct}"
				};
				var scmCustomData= ${dataShopFromLiquidLAIFilter.scmCustomData};
				var scmCustomDataSection= ${JSON.stringify(dataSectionFilter.scmCustomData)};
				var scmCustomDataExtJson= ${JSON.stringify(scmCustomDataExtJson)};
				var language= ${scmLanguageObject};
				var tabReviews= "${dataShopFromLiquidLAIFilter.getBlockReviewsByKeyMetafield('reviews_highlightProductPage')}";
				var blockReviewFirst= "${dataSectionFilter.blockReviewFirst}";
				var qaData = '${dataSectionFilter.qaData}';
				var qaSetting = '${dataShopFromLiquidLAIFilter.qaSetting}';
			<\/script>
			<link href='${getCssIframeByFileName('scm-bootstrap')}' rel="stylesheet">
			<link href="${getCssIframeByFileName('scm-review-importer')}" rel="stylesheet">
			<link href="${getCssIframeByFileName('photo-flags')}" rel="stylesheet">
			<script  src="${getLinkJsIframeByFileName('jQuery')}">
			<\/script>
			${qaCSSLink}
       ${linkGoogleFontDefault}
			<style>
					body{
							opacity: 0;
					}
			</style>
		<\/`+ headTagSma +`>
		<`+ bodyTagSma +` style=""  data-productidshopify="${dataSectionFilter.product.id}" class="${classPage} template-${dataShopFromLiquidLAIFilter.templateCurrent}">
				<div id="scm-review-importer-value" data-productgroupid="${dataSectionFilter.reviewCountInfo.product_group_id}"
				data-groupMappingId="${dataSectionFilter.reviewCountInfo.group_mapping_id}"
				data-url="${dataSectionFilter.urlLoadMore}" data-type= "${pageType}"
				data-sourceKey="${dataSectionFilter.sourceMetafield}"
				data-shopname="${dataShopFromLiquidLAIFilter.shopName}"
				data-productidshopify="${dataSectionFilter.product.id}" data-pagecurrent="1" data-rate="null"
					data-reviewperpage="10"></div>
						<div class="header-container"></div>
								<div id="reviewImporter">
						<div class="scm-row" aria-live="polite" aria-relevant="additions" aria-atomic="false">
						</div>
						<div class="parent-loader">
								<div class="loader-load-more"></div>
						</div>
						<div class="scm-pagination-load-more">

						</div>
						<div class="last-element"></div>
				</div>
	<\/`+ bodyTagSma +`>
			${dataExample}
			<script defer src="${getLinkJsIframeByFileName('helper')}" defer="">
			<\/script>
		${linkCustom}
		${initWiglot}
		</html>`;
      }
      function createPopupHtml(data,settingShop,dataShopFromLiquidLAI,scmCustomData,scmLanguage) {
        let dataShopFromLiquidLAIFilter=new DataShopFilter(dataShopFromLiquidLAI, scmLanguage);
        let linkCustom= settingShop.hasCssCustom ? `<link href="${settingApp.cdn}/storage/customCssJs/${dataShopFromLiquidLAI.shopName}/custom.css?version=${settingApp.versionUpdate}" rel="stylesheet">` : '';
        let scmLanguageObject= dataShopFromLiquidLAIFilter.languages;
        let bodyTagSma= 'body';
        let headTagSma= 'head';
        let photosAray = JSON.parse(atob(data.photos));
        let videoArray = JSON.parse(atob(data.videos));
        let contentHtml = data.content;
        let photoHtml = "";
        let photoDotHtml = "";
        let statusRTL= checkRTLLangCurrent(dataShopFromLiquidLAI);
        let attributeRTL= statusRTL ? 'dir="rtl"' : '';
        let indexAll= 0;
        if(laiCheckNodeListNotNull(videoArray)){
          videoArray.forEach((video) => {
            indexAll = indexAll + 1;
            let thumb= video.thumbnail ? video.thumbnail : 'https://cdn.laireviews.com/images/video/thumbnail.png';
            photoHtml = photoHtml + `<div class="scm-slide video" data-url-video="${video.url}"><img alt="" src="${thumb}"></div>`;
            photoDotHtml = photoDotHtml + `<div class="column scm-slide-dot cursor video-dot" onclick="currentSlide(${indexAll})">
                <img alt="Custom text" src="${thumb}">
            </div>`;
          });
        }
        if(laiCheckNodeListNotNull(photosAray)) {
          photosAray.forEach((photo, index) => {
            indexAll = indexAll + 1;
            photoHtml = photoHtml + `<div class="scm-slide"><img alt="" src="${photo}"></div>`;
            photoDotHtml = photoDotHtml + `<div class="column scm-slide-dot cursor" onclick="currentSlide(${indexAll})">
                <img alt="Custom text" src="${photo}">
            </div>`;
          });
        }
        return `<!DOCTYPE html>
	<html ${attributeRTL}>
			<`+ headTagSma +`>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<title>Reviews Importer</title>
					<link href='${getCssIframeByFileName('scm-review-importer-new-popup')}' rel="stylesheet">
					<link href='${getCssIframeByFileName('photo-flags')}' rel="stylesheet">
								<script>
										var infoShop='${dataShopFromLiquidLAIFilter.infoShop}';
											var dataApp= {
													'host' : '${settingShop.host}',
													'cdn' : '${settingShop.cdn}',
													'shopDomain' : '${dataShopFromLiquidLAIFilter.shopDomain}',
													'shopName' : '${dataShopFromLiquidLAIFilter.shopName}',
										};
											var scmCustomData= ${dataShopFromLiquidLAIFilter.scmCustomData};
											var language= ${scmLanguageObject};
					<\/script>
						<script  src="${getLinkJsIframeByFileName('jQuery')}"><\/script>
					  <script  src="${getLinkJsIframeByFileName('image-zoom')}"><\/script>
			<\/`+ headTagSma +`>
	<`+ bodyTagSma +` style="display: none; opacity: 0;" class="">
			<div class="scm-review-importer-popup">
								<div class="scm-row">
							<div class="scm-col-6 left">
									<div class="img-popup">
	${photoHtml}
													<a class="prev" onclick="plusSlides(-1)">❮</a>
													<a class="next" onclick="plusSlides(1)">❯</a>
											</div>
									</div>
									<div class="scm-col-6 right">
											<div class="content-popup">
													${contentHtml}
													<div class="scm-slide-dot-container">
															${photoDotHtml}
													</div>
											</div>
									</div>
							</div>
					</div>
					<img id="img1" style="display: none;" src="" />
								<script src="${getLinkJsIframeByFileName('reviewPagePopupV2')}"><\/script>
					<script>
							var slideIndex = 1;
							showSlides(slideIndex);
							function plusSlides(n) {
									showSlides(slideIndex += n);
							}
							function currentSlide(n) {
									showSlides(slideIndex = n);
							}
							function showSlides(n) {
									var i;
									var slides = document.getElementsByClassName("scm-slide");
									var dots = document.getElementsByClassName("scm-slide-dot");
									if (n > slides.length) {slideIndex = 1}
									if (n < 1) {slideIndex = slides.length}
									for (i = 0; i < slides.length; i++) {
									slides[i].style.display = "none";
							}
									for (i = 0; i < dots.length; i++) {
									dots[i].className = dots[i].className.replace(" active", "");
							}
									slides[slideIndex-1].style.display = "block";
									dots[slideIndex-1].className += " active";
							}
					<\/script>
			<\/`+ bodyTagSma +`>
			${linkCustom}
	</html>`;
      }
      function writeReviews(data,settingShop,dataShopFromLiquidLAI,scmCustomData,scmLanguage){
        let dataShopFromLiquidLAIFilter=new DataShopFilter(dataShopFromLiquidLAI, scmLanguage);
        let linkCustom= settingShop.hasCssCustom ? `<link href="${settingApp.cdn}/storage/customCssJs/${dataShopFromLiquidLAIFilter.shopName}/custom.css?version=${settingApp.versionUpdate}" rel="stylesheet">` : '';
        let bodyTagSma= 'body';
        let headTagSma= 'head';
        let cssFileHeader= `scm-review-importer-header-${settingShop['header_headerQuickLayout']}`;
        let statusRTL= checkRTLLangCurrent(dataShopFromLiquidLAI);
        let attributeRTL= statusRTL ? 'dir="rtl"' : '';
        return `
				<!DOCTYPE html>
				<html ${attributeRTL}>
					<`+ headTagSma +`>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1">
						<title>Reviews Importer</title>
						<script>
								var infoShop= '${dataShopFromLiquidLAIFilter.infoShop}';
								var reviewsInFo= ""
									var dataApp= {
											'productShopifyId' : '${data.productShopifyId}',
											'host' : '${settingShop.host}',
											'cdn' : '${settingShop.cdn}',
											'shopDomain' : '${dataShopFromLiquidLAIFilter.shopDomain}',
											'shopName' : '${dataShopFromLiquidLAIFilter.shopName}',
											'typePage' : 'write-popup'
									};
								var scmCustomData= ${dataShopFromLiquidLAIFilter.scmCustomData};
								var language= `+ scmLanguage +` ;
								var scmAccount= {
										"email" : "${dataShopFromLiquidLAIFilter.scmAccount.email}",
										"name"  : "${dataShopFromLiquidLAIFilter.scmAccount.name}",
										"order" : "${dataShopFromLiquidLAIFilter.scmAccount.order}",
										"order_current_product": "${data.order_current_product}"
								};
							<\/script>
							<script src="${getLinkJsIframeByFileName('jQuery')}"><\/script>
							<link href='${getCssIframeByFileName('scm-bootstrap')}' rel="stylesheet">
							<link href='${getCssIframeByFileName('scm-review-importer')}' rel="stylesheet">
							<link href='${getCssIframeByFileName(cssFileHeader)}' rel="stylesheet">
							<link href='${getCssIframeByFileName('photo-flags')}' rel="stylesheet">
							<link href='${getCssIframeByFileName('scm-review-importer-popup')}' rel="stylesheet">
							<\/`+ headTagSma +`>
						<`+ bodyTagSma +` style="display: none;opacity: 0;" class=" popup-write-review body-${settingShop['body_bodyQuickLayout']} header-${settingShop['header_headerQuickLayout']}">
						`+ data.content + `
							<script defer src="${getLinkJsIframeByFileName('helper')}"><\/script>
							<script defer src="${getLinkJsIframeByFileName('reviewPagePopup')}"><\/script>
							<script defer src="${getLinkJsIframeByFileName('writeReview')}"><\/script>
						<\/`+ bodyTagSma +`>
						${linkCustom}
				</html>
				`;
      };
      function createHtmlContainerPopReviewsWriteReview(){
        const newDiv = document.createElement("div");
        newDiv.setAttribute('class',"lai-popup-container");
        document.body.appendChild(newDiv);
        let html= `
						<div id="scm-review-importer-popup" style="display: none;">
							<div class="scm-popup-before"></div>
									<div class="scm-popup-content">
											<iframe id="scm-review-importer-popup-iframe" height="700px" width="100%" title="Sma reviews popup"></iframe>
									</div>
							</div>
							<div id="scm-review-importer-popup-write-review" style="display: none;">
									<div class="scm-popup-before"></div>
									<div class="scm-popup-content">
											<iframe id="scm-review-importer-popup-write-review-iframe" height="700px" width="100%" title="Sma popup write reviews"></iframe>
									</div>
							</div>
					`;
        document.querySelector('.lai-popup-container').innerHTML += html;
      }
      return {
        init,
        actionCreateReviews,
        onWindowLoad,
        getUrlParameter,
        scrollWidgetReview: scrollWidgetReview,
        dispatchEventBeforeScrollToWidgetReviews,
        smaRatingStarCallBackAjax,
        addActionClickStarForEl,
        createHtmlIframe,
        createPopupHtml,
        writeReviews,
        createHtmlContainerPopReviewsWriteReview,
        getLinkJsIframeByFileName,
        getCssIframeByFileName
      };
    })();

    SMARTIFYAPPS.rv.startReviewsImporter = SMARTIFYAPPS.rv.startReviewsImporter || function() {
      console.log(SMARTIFYAPPS.rv.performanceNow() + 'LAI product reviews app starting...');
      function startReviewImporter() {
        let starElements= document.querySelectorAll('.scm-reviews-rate');
        if(laiCheckNodeListNotNull(starElements)){
          starElements.forEach(item => {
            let product_id= item.getAttribute('data-product-id');
            let widgetProductById= `.scm-reviews-importer[data-product-id="${product_id}"]`;
            let checkWidgetProduct= document.querySelectorAll(widgetProductById);
            if(laiCheckNodeListNotNull(checkWidgetProduct)){
              item.classList.add('click_star');
              SMARTIFYAPPS.rv.scmReviewsRate.addActionClickStarForEl(item);
            }
          });
        }
        let clickStarElements= document.querySelectorAll('a[href="#scm-reviews-importer"]');
        if(laiCheckNodeListNotNull(clickStarElements)){
          clickStarElements.forEach(item => {
            SMARTIFYAPPS.rv.scmReviewsRate.addActionClickStarForEl(item);
          });
        }
        let clickStarElementsToAddEvent= document.querySelectorAll('.link-star-scm-reviews');
        if(laiCheckNodeListNotNull(clickStarElementsToAddEvent)){
          clickStarElementsToAddEvent.forEach(item => {
            item.addEventListener('click', event => {
              SMARTIFYAPPS.rv.scmReviewsRate.dispatchEventBeforeScrollToWidgetReviews();
              setTimeout(function(){
                SMARTIFYAPPS.rv.scmReviewsRate.scrollWidgetReview();
              }, 10);
            })
          });
        }
        document.addEventListener("click", function(e){
          let elementClicked= e.target.className;
          if(elementClicked=="scm-popup-before"){
            closePopup();
          }
        });
        const remove = function (e) {
          e.stopPropagation();
          closePopup();
        };
        function closePopup() {
          let scmPopupContainer = document.getElementById("scm-review-importer-popup");
          let iframeDocument = document.querySelector('#scm-review-importer-popup-iframe').contentWindow.document;
          iframeDocument.open('text/html', 'replace');
          iframeDocument.write('');
          scmPopupContainer.classList.remove('show-popup');

          document.getElementById('scm-review-importer-popup').style.display= "none";
          let scmPopupContainerWrite = document.getElementById("scm-review-importer-popup-write-review");
          scmPopupContainerWrite.classList.remove('show-popup');
          document.getElementById('scm-review-importer-popup-write-review').style.display= "none";
          let iframeDocumentContent = document.querySelector('#scm-review-importer-popup-write-review .scm-popup-content');
          iframeDocumentContent.innerHTML= '';
          iframeDocumentContent.innerHTML += `<iframe id="scm-review-importer-popup-write-review-iframe" height="700px" width="100%" title="Sma popup write reviews"></iframe>`;
        };
        function createIframePopup(htmlPopup){
          let scmpopupContainer = document.getElementById("scm-review-importer-popup");
          scmpopupContainer.classList.add('show-popup');
          let iframeDocument = document.querySelector('#scm-review-importer-popup-iframe').contentWindow.document;
          document.getElementById('scm-review-importer-popup').style.display= "block";
          iframeDocument.open('text/html', 'replace');
          if((typeof htmlPopup == "undefined" || htmlPopup == null)){
          }else{
            iframeDocument.write(htmlPopup);
          }
          iframeDocument.close();
        };
        function createPopup(data) {
          let htmlPopup= SMARTIFYAPPS.rv.scmReviewsRate.createPopupHtml(data,settingApp,dataShopFromLiquidLAI,scmCustomData,scmLanguage);
          createIframePopup(htmlPopup);
        };
        function createIframePopupWriteReviews(htmlPopup){
          let scmpopupContainer = document.getElementById("scm-review-importer-popup-write-review");
          if(scmpopupContainer){
            scmpopupContainer.classList.add('show-popup');
            scmpopupContainer.classList.add('loaded');
            let iframeDocument = document.querySelector('#scm-review-importer-popup-write-review-iframe').contentWindow.document;
            scmpopupContainer.style.display= "block";
            iframeDocument.open('text/html', 'replace');
            iframeDocument.write(htmlPopup);
            iframeDocument.close();
          }
        };

        function createPopupWriteReview(data){
          let htmlPopup= SMARTIFYAPPS.rv.scmReviewsRate.writeReviews(data,settingApp,dataShopFromLiquidLAI,scmCustomData,scmLanguage);
          createIframePopupWriteReviews(htmlPopup);
        };

        function changeHeightIframe(height) {
          const elFrame = document.querySelector(".custom #scm-reviews-importer-iframe");
          const frame = elFrame ? elFrame : document.querySelector(".scm-reviews-importer-iframe");
          frame.height = height + "px";
          frame.parentNode.style.height = height + 'px';
        };
        function postMessageAfterTranslating(){
          const iframe = document.querySelector("iframe.sma-load-iframe");
          iframe.contentWindow.postMessage({type: "afterTranslating"}, "*");
        }
        window.addEventListener('message', function(event){
          if(event.data.type == "tc_thirdparty_retranslate"){
            postMessageAfterTranslating();
            setTimeout(function (){
              postMessageAfterTranslating();
            },2000)
          }
        })

        function receiveMessage(event) {
          if (event.data.type === 'createPopup') {
            createPopup(event.data);
          }
          else if (event.data.type === 'appendReviews') {
            window.postMessage({type: "tc_thirdparty_retranslate"}, "*");
          }
          else if (event.data.type === 'createPopupWriteReviews') {
            createPopupWriteReview(event.data);
          }
          else if (event.data.type === 'noReviews') {
            event.source.frameElement.parentNode.parentNode.classList.add("no-reviews");
          }
          else if (event.data === 'removePopup') {
            closePopup();
          } else if (event.data.type === 'changeHeight') {
            event.source.frameElement.style.overflow  = '';
            event.source.frameElement.parentNode.style.overflow  = '';
            event.source.frameElement.style.height  = event.data.height + 'px';
            event.source.frameElement.parentNode.style.height  = event.data.height + 'px';
            if(event.data.height  == 1){
              event.source.frameElement.parentNode.parentNode.style.height  = event.data.height + 'px';
              event.source.frameElement.parentNode.parentNode.style.display  = 'none';
            }
            // changeHeightIframe(event.data.height);
          }
        };
        SMARTIFYAPPS.rv.loadStyle(SMARTIFYAPPS.rv.scmReviewsRate.getCssIframeByFileName('reviews-importer'));
        window.addEventListener('message', receiveMessage, false);
        const root= document.querySelector('.scm-reviews-importer');
        if(root){
          let iframeRoots= document.querySelectorAll('.scm-reviews-importer-iframe:not(.sma-load-iframe)');
          if(!laiCheckNodeListNotNull(iframeRoots)){
            return;
          }
          if(settingApp.show_2_widget){
            iframeRoots.forEach(iframeRoot => {
              let idIframe= iframeRoot.getAttribute('data-idiframe');
              let dataCustomChange= iframeRoot.getAttribute('data-custom-section');
              if(dataCustomChange){
                scmCustomDataWigetAll[idIframe].sectionConfig= JSON.stringify(Object.assign(JSON.parse(dataCustomChange),JSON.parse(scmCustomDataWigetAll[idIframe].sectionConfig)));
              }
              if(idIframe && typeof scmCustomDataWigetAll[idIframe] !== 'undefined'){
                if(scmCustomDataWigetAll[idIframe].typePage == 'productPage' ){
                  if(typeof scmCustomDataWigetAll[idIframe].dataProduct == 'undefined' && typeof scmCustomDataWigetAll[idIframe].reviewsInFo != 'undefined' ){
                    return false;
                  }
                  if(scmCustomDataWigetAll[idIframe].productId == dataShopFromLiquidLAI.productMainId){
                    let iframeElCustom = document.querySelector('.custom #scm-reviews-importer-iframe');
                    if(iframeElCustom){
                      let iframeElCustoms= document.querySelectorAll('.custom #scm-reviews-importer-iframe:not(.sma-load-iframe)');
                      if(laiCheckNodeListNotNull(iframeElCustoms)){
                        iframeElCustoms.forEach(iframeRoot => {
                          iframeRoot.setAttribute('srcdoc',SMARTIFYAPPS.rv.scmReviewsRate.createHtmlIframe(settingApp ,scmCustomDataWigetAll[idIframe] ,dataShopFromLiquidLAI ,scmLanguage ,iframeRoot));
                          iframeRoot.classList.add('sma-load-iframe');
                          iframeRoot.classList.add('main-widget-product');
                        })
                      }
                    }else{
                      iframeRoot.setAttribute('srcdoc',SMARTIFYAPPS.rv.scmReviewsRate.createHtmlIframe(settingApp ,scmCustomDataWigetAll[idIframe] ,dataShopFromLiquidLAI ,scmLanguage ,iframeRoot));
                      iframeRoot.classList.add('sma-load-iframe');
                      iframeRoot.classList.add('main-widget-product');
                    }
                  }else{
                    iframeRoot.setAttribute('srcdoc',SMARTIFYAPPS.rv.scmReviewsRate.createHtmlIframe(settingApp ,scmCustomDataWigetAll[idIframe] ,dataShopFromLiquidLAI ,scmLanguage ,iframeRoot));
                    iframeRoot.classList.add('sma-load-iframe');
                  }
                }else{
                  iframeRoot.setAttribute('srcdoc',SMARTIFYAPPS.rv.scmReviewsRate.createHtmlIframe(settingApp ,scmCustomDataWigetAll[idIframe] ,dataShopFromLiquidLAI ,scmLanguage ,iframeRoot));
                  iframeRoot.classList.add('sma-load-iframe');
                }
              }
              if(iframeRoot){
                iframeRoot.parentNode.style.height = '0';
                iframeRoot.parentNode.style.overflow = 'hidden';
                iframeRoot.style.height = '0';
                iframeRoot.style.overflow = 'hidden';
              }
            });
          }else{
            let iframeRoot= iframeRoots[0];
            let idIframe= iframeRoot.getAttribute('data-idiframe');
            let dataCustomChange= iframeRoot.getAttribute('data-custom-section');
            if(idIframe && dataCustomChange){
              scmCustomDataWigetAll[idIframe].sectionConfig= JSON.stringify(Object.assign(JSON.parse(dataCustomChange),JSON.parse(scmCustomDataWigetAll[idIframe].sectionConfig)));
            }
            let iframeElCustom = document.querySelector('.custom #scm-reviews-importer-iframe');
            iframeRoot= iframeElCustom ? iframeElCustom : iframeRoot;
            iframeRoot.setAttribute('srcdoc',SMARTIFYAPPS.rv.scmReviewsRate.createHtmlIframe(settingApp , Array.isArray(Object.values(scmCustomDataWigetAll)) ? Object.values(scmCustomDataWigetAll)[0] : null ,dataShopFromLiquidLAI ,scmLanguage ,iframeRoot));
            iframeRoot.classList.add('sma-load-iframe');
            if(iframeRoot){
              iframeRoot.parentNode.style.height = '0';
              iframeRoot.parentNode.style.overflow = 'hidden';
              iframeRoot.style.height = '0';
              iframeRoot.style.overflow = 'hidden';
            }
          }
        }
        SMARTIFYAPPS.rv.scmReviewsRate.createHtmlContainerPopReviewsWriteReview();
        if(settingApp.popEnabled){
          const newDiv = document.createElement("div");
          newDiv.setAttribute('class',"popup-reviews");
          newDiv.setAttribute('id',"lai-reviewPop");
          newDiv.style.display= "none";
          newDiv.setAttribute('data-template',dataShopFromLiquidLAI.templatePage);
          newDiv.innerHTML= `
						<button id="scm-close" class="scm-close-popup" aria-label="Close a popup">
							</button>
							<div id="content-rv">
							</div>`;
          document.body.appendChild(newDiv);
          SMARTIFYAPPS.rv.loadScript(SMARTIFYAPPS.rv.scmReviewsRate.getLinkJsIframeByFileName('reviewsPopRv'));
          SMARTIFYAPPS.rv.loadStyle(SMARTIFYAPPS.rv.scmReviewsRate.getCssIframeByFileName('scm-review-importer-pop-rv'));
        }
      }
      SMARTIFYAPPS.rv.scmReviewsRate.init();
      startReviewImporter();
      SMARTIFYAPPS.rv.scmReviewsRate.onWindowLoad();
      if(settingApp.show_2_widget){
        let rootFrames=  document.querySelectorAll(".scm-container");
        if(laiCheckNodeListNotNull(rootFrames)){
          rootFrames.forEach(rootFrame => {
            let checkIframeLoaded= rootFrame.querySelector('.sma-load-iframe');
            if(checkIframeLoaded){
              rootFrame.style.display= "";
            }
          })
        }
      }else{
        let rootFrames=  document.querySelectorAll(".scm-container");
        if(laiCheckNodeListNotNull(rootFrames)){
          rootFrames.forEach(rootFrame => {
            let ifFrameChild= rootFrame.querySelector(".sma-load-iframe");
            if(ifFrameChild){
              rootFrame.style.display= "";
            }
          })
        }
      }
      let checkAndFixWrongWidth= function(){
        const elements = document.querySelectorAll('.scm-container');
        if(elements.length > 0) {
          elements.forEach(element => {
            if (element && element.parentElement) {
              const parentWidth = element.parentElement.offsetWidth;
              if (parentWidth == 300) {
                element.parentElement.style.width = '100%';
              }
            }
          });
        }
      }
      checkAndFixWrongWidth();
    };
    console.log(SMARTIFYAPPS.rv.performanceNow() + 'LAI product reviews script loaded');
    SMARTIFYAPPS.rv.init=  SMARTIFYAPPS.rv.init || (function(calback) {
      calback();
    });
    if(typeof SMARTIFYAPPSCustomInit!== 'undefined'){
      SMARTIFYAPPS.rv.init= SMARTIFYAPPSCustomInit.init;
    }
    if(typeof dataShopFromLiquidLAI !== 'undefined'){
      SMARTIFYAPPS.rv.init(SMARTIFYAPPS.rv.startReviewsImporter);
      (function() {
        const checkDone = setInterval(function(){
          if (document.readyState == "complete") {
            clearInterval(checkDone)
            setTimeout(function(){
              if(typeof SMARTIFYAPPS!== 'undefined' && SMARTIFYAPPS.rv.installed){
                SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();
              }
            },1000);
          }
        }, 1500);
        let pushState = history.pushState;
        let replaceState = history.replaceState;

        history.pushState = function() {
          pushState.apply(history, arguments);
          window.dispatchEvent(new Event('pushstate'));
          window.dispatchEvent(new Event('locationchange'));
        };

        history.replaceState = function() {
          replaceState.apply(history, arguments);
          window.dispatchEvent(new Event('replacestate'));
          window.dispatchEvent(new Event('locationchange'));
        };

        window.addEventListener('popstate', function() {
          window.dispatchEvent(new Event('locationchange'))
        });
      })();
    }
    window.addEventListener('locationchange', function(){
      setTimeout(function(){
        if(typeof SMARTIFYAPPS!== 'undefined' && SMARTIFYAPPS.rv.installed){
          SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();
        }
      },1000);
    })
  } else {
    console.log(SMARTIFYAPPS.rv.performanceNow() + 'skip');
  }
  document.addEventListener("shopify:section:load", function(event) {
    if(typeof SMARTIFYAPPS!== 'undefined' && SMARTIFYAPPS.rv.installed){
      setTimeout(function (){
        SMARTIFYAPPS.rv.startReviewsImporter();
      },1000)
    };
  });
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
