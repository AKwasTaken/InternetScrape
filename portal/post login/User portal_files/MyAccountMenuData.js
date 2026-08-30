// this data which is required to create a menu
var arr = [{label:"Home",module:"Home",imagePosition:"9999",linktype:2,url:"webpages/myaccount/index.jsp"},
           {label:Language.Personal,module:"PERSONAL",imagePosition:"9999",childNodes:[
	              {label:Language.ChangePassword,url:"/myaccount/ChangePassword.html?mode=300&operation="+Modes.MYACCOUNT_CHANGE_PASSWORD},
                  {label:Language.PersonalDetails,url:"/myaccount/PersonalDetails.html?mode=300&operation="+Modes.MYACCOUNT_EDIT_PERSONALDETAIL}
           ]},
           {label:Language.DownloadClient,module:"CLIENT",imagePosition:"9999",url:"/myaccount/DownloadClient.html?mode=300&operation="+Modes.MYACCOUNT_DOWNLOAD_CLIENT},
           {label:Language.InternetUsage,module:"ACCOUNT STATUS",imagePosition:"9999",url:"/myaccount/AccountStatus.jsp"},
           {label:Language.Email1,module:"EMAIL",imagePosition:"9999",childNodes:[
                  {label:Language.Quarantine,module:"EMAILQUARANTINE",url:"/myaccount/QuarantineMails.jsp",validator:function(module){return validateMenuItem(module)}},
                  {label:Language.Exception,module:"EMAILMTA",url:"/myaccount/EmailUserConfiguration.html?mode=300&operation="+Modes.EMAIL_USER_CONFIGURATION,validator:function(module){return validateMenuItem(module)}}
           ]},
           //{label:Language.SMTPQuarantine,module:"QUARANTINE",imagePosition:"9999",url:"/myaccount/QuarantineMails.jsp",validator:function(module){return validateMenuItem(module)}},
           {label:Language.UserPortalPolicyOverrideMenu,module:"POLICYOVERRIDE",imagePosition:"9999",url:"/myaccount/PolicyOverrides.html?"+$.param({ "mode": Modes.READ_RECORD , "operation": Modes.WEB_FILTER_OVERRIDE_LIST, "objectID":-100 }),validator:function(module){return validateMenuItem(module)}},
           {label:Language.Hotspots,module:"HOTSPOT",imagePosition:"9999",url:"/wirelessProtection/UserPortalHotSpotEdit.html?mode=300&operation="+Modes.UPDATE_HOTSPOT_USER_PORTAL,validator:function(module){return validateMenuItem(module)}},
           {label: Language.OTPUserToken, module: "OTPUSER", imagePosition:"9999", url: "/myaccount/OTPUserTokens.jsp?mode=300&operation="+Modes.MYACCOUNT_OTPUSERTOKENS,validator:function(module){return validateMenuItem(module)}},
           {label:Language.Logout,module:"LOGOUT",imagePosition:"9999",linktype:2,url:"webpages/logout.jsp?webclient=myaccount'",beforeOperation:"calllogout"}
           ];
function validateMenuItem(module){
    if((module == "EMAILQUARANTINE" && Cyberoam.deviceProperty.quarantine == "off")){
		return false;
	}
	if((module == "HOTSPOT" && isHotspotAvail == "off")){
		return false;
	}

	if ((module == "OTPUSER" && isOTPMenu == "off")) {
		return false;
	}
	if((module == "EMAILMTA" && Cyberoam.deviceProperty.mta_mode == "off")){
		return false;
	}
	if((module == "EMAIL" && Cyberoam.deviceProperty.mta_mode == "off" && Cyberoam.deviceProperty.quarantine == "off")){
		return false;
	}
	if ((module == "POLICYOVERRIDE") && policyOverrideMenu == "off" ) {
		return false;
	}


        return true;
}
function calllogout(entity){
	Cyberoam.AJAXCall({url:"/Controller",method:"post",query:"mode="+Modes.SSL_VPN_LOGOUT+"&json={}"});
	return true;
}
