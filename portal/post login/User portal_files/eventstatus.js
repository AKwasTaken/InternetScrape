Cyberoam.eventstatus = {
		"Hostname":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.HostnameSettingsSuccess"},
					"500":{"message":"Message.HostnameSettingsFail"}
				}
			}
		},
		"relaysettings":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.RelaySettingsSuccess","url":"/emails/HostBasedRelay.html?mode=300&operation="+Modes.RELAY_SETTINGS},
					"545":{"message":"Message.MTAModeDisableCheck"},
					"500":{"message":"Message.RelaySettingsFail"}
				}
			}
		},
		"spxtemplates":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.SPXUpdateSuccess","url":"/antispam/SPXEncryptionProxy.jsp?mode=300&operation="+ Modes.SPXConfig},
					"500":{"message":"Message.SPXUpdateFail"},
					"502":{"message":"Message.SPXAddSameName"},
					"545":{"message":"Message.MTAModeEnableCheck"},
					"546":{"message":"Message.SPXInvalidName"},
					"541":{"message":"Message.SpamDLPwithSPX"}
				},
				"ADD":{
					"200":{"message":"Message.SPXAddSuccess","url":"/antispam/SPXEncryptionProxy.jsp?mode=300&operation="+ Modes.SPXConfig},
					"500":{"message":"Message.SPXAddFailed"},
					"545":{"message":"Message.MTAModeEnableCheck"},
					"546":{"message":"Message.SPXInvalidName"},
					"502":{"message":"Message.SPXAddSameName"}
				},
				"DELETE":{
					"200":{"message":"Message.SPXDeleteSuccess"},
					"500":{"message":"Message.SPXDeleteFailed"},
					"504":{"message":"Message.SPXinSpamOrConfig"}
				}
			}
		},
		"mtaspxtemplates":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.SPXUpdateSuccess","url":"/antispam/SPXEncryption.jsp?mode=300&operation="+ Modes.SPXConfigMTA},
					"500":{"message":"Message.SPXUpdateFail"},
					"502":{"message":"Message.SPXAddSameName"},
					"545":{"message":"Message.MTAModeDisableCheck"},
					"546":{"message":"Message.SPXInvalidName"},
					"543":{"message":"Message.ProfileDPPwithSPX"}
				},
				"ADD":{
					"200":{"message":"Message.SPXAddSuccess","url":"/antispam/SPXEncryption.jsp?mode=300&operation="+ Modes.SPXConfigMTA},
					"500":{"message":"Message.SPXAddFailed"},
					"545":{"message":"Message.MTAModeDisableCheck"},
					"546":{"message":"Message.SPXInvalidName"},
					"502":{"message":"Message.SPXAddSameName"}
				},
				"DELETE":{
					"200":{"message":"Message.SPXDeleteSuccess"},
					"500":{"message":"Message.SPXDeleteFailed"},
					"504":{"message":"Message.SPXinSpamOrConfig"}
				}
			}
		},
		"smtpprofile":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.SMTPProfileUpdateSuccess","url":"/emails/EmailRulesManage.jsp"},
					"500":{"message":"Message.SMTPProfileUpdateFail"},
					"545":{"message":"Message.MTAModeDisableCheck"},
					"542":{"message":"Message.DomainDuplicateCheck"},
					"541":{"message":"Message.SMTPProfileduplicatedomain"},
					"543":{"message":"Message.SMTPProfileSenderGenSPXEdit"},
					"544":{"message":"Message.SandstormEnableStatusMessage"},
					"546":{"message":"Message.EmailAddressGroupInPolicyUpdate"}
				},
				"ADD":{
					"200":{"message":"Message.SMTPProfileAddSuccess","url":"/emails/EmailRulesManage.jsp"},
					"500":{"message":"Message.SMTPProfileAddFailed"},
					"545":{"message":"Message.MTAModeDisableCheck"},
					"542":{"message":"Message.DomainDuplicateCheck"},
					"541":{"message":"Message.SMTPProfileduplicatedomain"},
					"502":{"message":"Message.SMTPProfileduplicateName"},
					"543":{"message":"Message.SMTPProfileSenderGenSPXAdd"},
					"544":{"message":"Message.SandstormEnableStatusMessage"},
					"546":{"message":"Message.EmailAddressGroupInPolicyAdd"}
				},
				"DELETE":{
					"200":{"message":"Message.SMTPProfileDeleteSuccess"},
					"500":{"message":"Message.SMTPProfileDeleteFailed"}
				}
			}
		},
		"popimaprule":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.POPIMAPUpdateSuccess","url":"/emails/EmailRulesManage.jsp"},
					"500":{"message":"Message.POPIMAPUpdateFail"},
					"502":{"message":"Message.POPIMAPAddSameName"}
				},
				"ADD":{
					"200":{"message":"Message.POPIMAPAddSuccess","url":"/emails/EmailRulesManage.jsp"},
					"500":{"message":"Message.POPIMAPAddFailed"},
					"502":{"message":"Message.POPIMAPAddSameName"}
				},
				"DELETE":{
					"200":{"message":"Message.POPIMAPDeleteSuccess"},
					"500":{"message":"Message.POPIMAPDeleteFailed"}
				}
			}
		},
		"dataprotectionpolicy":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.DLPUpdateSuccess","url":"/includes/ManagePage.jsp?datagridid=518&mode=301&operation="+Modes.DLPPolicy},
					"500":{"message":"Message.DLPUpdateFail"},
					"545":{"message":"Message.MTAModeEnableCheck"},
					"502":{"message":"Message.DLPAddSameName"}
				},
				"ADD":{
					"200":{"message":"Message.DLPAddSuccess","url":"/includes/ManagePage.jsp?datagridid=518&mode=301&operation="+Modes.DLPPolicy},
					"500":{"message":"Message.DLPAddFailed"},
					"545":{"message":"Message.MTAModeEnableCheck"},
					"502":{"message":"Message.DLPAddSameName"}
				},
				"DELETE":{
					"200":{"message":"Message.DLPDeleteSuccess"},
					"500":{"message":"Message.DLPDeleteFailed"},
					"545":{"message":"Message.MTAModeEnableCheck"}
				}
			}
		},
		"mtadataprotectionpolicy":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.DLPUpdateSuccess","url":"/includes/ManagePage.jsp?datagridid=1504&mode=301&operation="+Modes.ADD_DLPPolicyMTA},
					"500":{"message":"Message.DLPUpdateFail"},
					"545":{"message":"Message.MTAModeDisableCheck"},
					"502":{"message":"Message.DLPAddSameName"}
				},
				"ADD":{
					"200":{"message":"Message.DLPAddSuccess","url":"/includes/ManagePage.jsp?datagridid=1504&mode=301&operation="+Modes.ADD_DLPPolicyMTA},
					"500":{"message":"Message.DLPAddFailed"},
					"545":{"message":"Message.MTAModeDisableCheck"},
					"502":{"message":"Message.DLPAddSameName"}
				},
				"DELETE":{
					"200":{"message":"Message.DLPDeleteSuccess"},
					"500":{"message":"Message.DLPDeleteFailed"},
					"545":{"message":"Message.MTAModeDisableCheck"}
				}
			}
		},
		"sslvpnclientconnection":{
			"statusMappings":{
				"ADD":{
					"200":{"message":"Message.ClientConnectionAddSuccess","url":"/sslvpn/SitetoSiteSSLConnectionManage.jsp?mode=301&operation="+Modes.SSL_VPN_SITETOSITE},
					"500":{"message":"Message.ClientConnectionAddFail"},
					"502":{"message":"Message.ClientConnectionRecordExist"},
					"503":{"message":"Message.ClientConnectionNonFipsAddFail"}
				},
				"UPDATE":{
					"200":{"message":"Message.ClientConnectionUpdateSuccess","url":"/sslvpn/SitetoSiteSSLConnectionManage.jsp?mode=301&operation="+Modes.SSL_VPN_SITETOSITE},
					"500":{"message":"Message.ClientConnectionUpdateFail"},
					"503":{"message":"Message.ClientConnectionNonFipsUpdateFail"}
				},
				"DELETE":{
					"200":{"message":"Message.ClientConnectionDeleteSuccess","url":"/sslvpn/SitetoSiteSSLConnectionManage.jsp?mode=301&operation="+Modes.SSL_VPN_SITETOSITE},
					"500":{"message":"Message.ClientConnectionDeleteFail"}
				}
			}
		},
		"sslvpnbookmark":{
			"uniqueName":"bookmarkname",
			"statusMappings":{
				"ADD":{
					"200":{"message":"Message.BookMarkInserted","url":"/sslvpn/ClientlessRemoteAccess.html"},
					"500":{"message":"Message.BookMarkNotInserted"},
					"502":{"message":"Message.BookMarkRecordExists"}
				},
				"UPDATE":{
					"200":{"message":"Message.BookMarkUpdated","url":"/sslvpn/ClientlessRemoteAccess.html"},
					"500":{"message":"Message.BookMarkNotUpdated"},
					"502":{"message":"Message.BookMarkRecordExists"}
				},
				"DELETE":{
					"200":{"message":"Message.BookMarkDeleteSuccess","url":"/sslvpn/ClientlessRemoteAccess.html"},
					"500":{"message":"Message.BookMarkDeleteFailed"},
					"502":{"message":"Message.BookMarkRecordExists"}
				}
			}
		},
	"selfsignedcertificateauthority": {
		"uniqueName": "",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.CAManageCreatedSuccessFully"
				},
				"500": {
					"message": "Message.CAEditCreateFailed"
				},
				"505": {
					"message": "Message.CAManageRewriteConfFailed"
				}
			}
		}
	},
	"qospolicydetails": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.QOSscheduleDeleteSuccess"
				},
				"500": {
					"message": "Message.QOSscheduleDeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.QOSscheduleAddSuccess"
				},
				"500": {
					"message": "Message.QOSscheduleAddFailed"
				},
				"502": {
					"message": "Message.QOSscheduleRecordAlreadyExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.QOSscheduleEditSuccess"
				},
				"500": {
					"message": "Message.QOSscheduleEditFailed"
				},
				"502": {
					"message": "Message.QOSscheduleRecordAlreadyExists"
				}
			}
		}
	},
	"dossettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.DoSApplySuccess"
				},
				"500": {
					"message": "Message.DoSApplyFail"
				}
			}
		}
	},
	"ipsecconnection": {
		"uniqueName": "connectionname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IPSecDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=502&mode=301&operation=225"
				},
				"201": {
					"message": "Message.IPSecConnInUse"
				},
				"500": {
					"message": "Message.IPSecDeleteFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IPSecInserted",
					"url": "/includes/ManagePage.jsp?datagridid=502&mode=301&operation=225"
				},
				"541": {
					"message": "Message.IPSecPSKNotSame1"
				},
				"542": {
					"message": "Message.IPSecPSKNotSame2"
				},
				"543": {
					"message": "Message.IPSecConnectionSaveFail"
				},
				"500": {
					"message": "Message.IPSecConnFailoverGrpFail"
				},
				"544": {
					"message": "Message.FailoverGroupSaveFail"
				},
				"545": {
					"message": "Message.IPSecLocalGatewayNotInWANZone"
				},
				"546": {
					"message": "Message.IPSecWeakPassword"
				},
				"547": {
					"message": "Message.IPSecClashLocalActual"
				},
				"548": {
					"message": "Message.IPSecClashLocalActual"
				},
				"549": {
					"message": "Message.IPSecAnyToTSNotSupported"
				},
				"561": {
					"message": "Message.IPSecIdsAreNull"
				},
				"562": {
					"message": "Message.IPSecIdsNotUnique"
				},
				"502": {
					"message": "Message.FailoverGroupExist"
				},
				"503": {
					"message": "Message.IPSecLocalRemoteSubnetSame"
				},
				"504": {
					"message": "Message.IPSecConnAlreadyExist"
				},
				"507": {
					"message": "Message.IPSecLocalidColision"
				},
				"501": {
					"message": "Message.IPSecCertsEqual"
				},
				"508": {
					"message": "Message.IPSecInvalidCert"
				},
				"509": {
					"message": "Message.IPSecInvalidUser"
				},
				"514": {
					"message": "Message.IPSecRWIKEv2"
				},
				"515": {
					"message": "Message.IPSecIKEv2xauth"
				},
				"516": {
					"message": "Message.IPSecInitiateStar"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IPSecUpdated",
					"url": "/includes/ManagePage.jsp?datagridid=502&mode=301&operation=225"
				},
				"201": {
					"message": "Message.IPSecUpdated",
					"url": "/includes/ManagePage.jsp?datagridid=502&mode=301&operation=225"
				},
				"500": {
					"message": "Message.IPSecNotUpdated"
				},
				"502": {
					"message": "Message.IPSecRecordExist"
				},
				"503": {
					"message": "Message.IPSecNetworkConflict"
				},
				"505": {
					"message": "Message.IPSecRewriteFailed"
				},
				"507": {
					"message": "Message.IPSecLocalidColision"
				},
				"545": {
					"message": "Message.IPSecLocalGatewayNotInWANZone"
				},
				"547": {
					"message": "Message.IPSecClashLocalActual"
				},
				"546": {
					"message": "Message.IPSecWeakPassword"
				},
				"501": {
					"message": "Message.IPSecCertsEqual"
				},
				"508": {
					"message": "Message.IPSecInvalidCert"
				},
				"509": {
					"message": "Message.IPSecInvalidUser"
				},
				"514": {
					"message": "Message.IPSecRWIKEv2"
				},
				"515": {
					"message": "Message.IPSecIKEv2xauth"
				},
				"516": {
					"message": "Message.IPSecInitiateStar"
				},
				"517": {
					"message": "Message.L2TPWithIKEv2NotSupported"
				},

				"548": {
					"message": "Message.IPSecClashLocalActual"
				},
				"549": {
					"message": "Message.IPSecAnyToTSNotSupported"
				},
				"561": {
					"message": "Message.IPSecIdsAreNull"
				},
				"562": {
					"message": "Message.IPSecIdsNotUnique"
				} 
			}
		}
	},
	"imcontacts": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IMContactDeleteSucc"
				},
				"500": {
					"message": "Message.IMContactDeleteFailGen"
				},
				"502": {
					"message": "Message.IMContactDeleteFailSpec"
				},
				"504": {
					"message": "Message.IMContactDeleteFailSpec"
				},
				"505": {
					"message": "Message.IMContactIMRuleExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IMContactSucc"
				},
				"500": {
					"message": "Message.IMContactError"
				},
				"502": {
					"message": "Message.IMContactDuplicateRecord"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IMContactUpdateSucc"
				},
				"500": {
					"message": "Message.IMContactUpdateError"
				},
				"502": {
					"message": "Message.IMContactDuplicateRecord"
				}
			}
		}
	},
		"hotspot":{
			"statusMappings":{
				"ADD":{
					"200":{"message":"Message.HotSpotAddSuccess","url":"/includes/ManagePage.jsp?datagridid=950&mode=301&operation=" + Modes.DELETE_HOTSPOT},
					"500":{"message":"Message.HotSpotAddFail"},
					"502":{"message":"Message.HotSpotRecodExist"},
					"541":{"message":"Message.InterfaceAlreadyBindWithHotspot"},
					"542":{"message":"Message.HotspotHTMLFileAllowedCharacters"},
					"543":{"message":"Message.HotspotPDFFileAllowedCharacters"},
					"544":{"message":"Message.HotspotLinkedFirrewallOrNATFailed","url":"/includes/ManagePage.jsp?datagridid=950&mode=301&operation=" + Modes.DELETE_HOTSPOT}
				},
				"UPDATE":{
					"200":{"message":"Message.HotSpotUpdateSuccess","url":"/includes/ManagePage.jsp?datagridid=950&mode=301&operation=" + Modes.DELETE_HOTSPOT},
					"500":{"message":"Message.HotSpotUpdateFail"},
					"541":{"message":"Message.InterfaceAlreadyBindWithHotspot"},
					"542":{"message":"Message.HotspotHTMLFileAllowedCharacters"},
					"543":{"message":"Message.HotspotPDFFileAllowedCharacters"}
				},
				"DELETE":{
					"200":{"message":"Message.HotSpotDeleteSuccess"},
					"500":{"message":"Message.HotSpotDeleteFail"}
				}
			}
		},
		"hotspotsvoucherdefinition":{
			"statusMappings":{
				"ADD":{
					"200":{"message":"Message.VoucherDefinitionAddSuccess"},
					"500":{"message":"Message.VoucherDefinitionAddFail"},
					"502":{"message":"Message.VoucherDefinitionRecodExist"}
				},
				"UPDATE":{
					"200":{"message":"Message.VoucherDefinitionUpdateSuccess"},
					"500":{"message":"Message.VoucherDefinitionUpdateFail"}
				},
				"DELETE":{
					"200":{"message":"Message.VoucherDefinitionDeleteSuccess"},
					"500":{"message":"Message.VoucherDefinitionDeleteFail"}
				}
			}
		},
		"hotspotsvoucheroptions":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.GeneralVoucherOptionsUpdateSuccess"},
					"500":{"message":"Message.GeneralVoucherOptionsUpdateFail"}
				}
			}
		},
		"hotspotslogincertificate":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.LoginPageCertificateUpdateSuccess"},
					"500":{"message":"Message.LoginPageCertificateUpdateFail"}
				}
			}
		},
		"hotspotswalledgarden":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.WalledGardenUpdateSuccess"},
					"500":{"message":"Message.WalledGardenUpdateFail"}
				}
			}
		},
		"spxconfiguration":{
			"statusMappings":{
				"UPDATE":{
					"200":{"message":"Message.SPXConfigUpdatedSuccess","url":"/antispam/SPXEncryptionProxy.jsp?mode=300&operation="+ Modes.SPXConfig},
					"500":{"message":"Message.SPXConfigUpdateFail"},
					"545":{"message":"Message.MTAModeEnableCheck"},
					"541":{"message":"Message.spxconfigSMTPPortConflict"}
				}
		}
	},
	"mtaspxconfiguration":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.SPXConfigUpdatedSuccess","url":"/antispam/SPXEncryption.jsp?mode=300&operation="+ Modes.SPXConfigMTA},
				"500":{"message":"Message.SPXConfigUpdateFail"},
				"545":{"message":"Message.MTAModeDisableCheck"},
				"541":{"message":"Message.spxconfigSMTPPortConflict"}
			}
		}
	},
	"datatransferpolicy": {
		"uniqueName": "dtpolicyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.DTPDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=9&mode=301&operation=305"
				},
				"500": {
					"message": "Message.DTPDeleteFailed"
				},
				"504": {
					"message": "Message.DTPRecordInUse"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DTPAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=9&mode=301"
				},
				"500": {
					"message": "Message.DTPAddFailed"
				},
				"502": {
					"message": "Message.DTPRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.DTPUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=9&mode=301"
				},
				"500": {
					"message": "Message.DTPUpdateFailed"
				},
				"502": {
					"message": "Message.DTPRecordExists"
				}
			}
		}
	},
	"clientlessuseredit": {
		"uniqueName": "username",
		"statusMappings": {
			"DELETE": {
				"210": {
					"message": "Message.UserIMRuleExists"
				},
				"200": {
					"message": "Message.ClientlessUserDeleteSuccess"
				},
				"500": {
					"message": "Message.ClientlessUserDeleteFailed"
				},
				"206": {
					"message": "Message.ClientlessUserForeignKeyExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ClientlessUserUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=200&mode=301"
				},
				"500": {
					"message": "Message.ClientlessUserUpdateFailed"
				},
				"503": {
					"message": "Message.ClientlessUserRecordExistsWithSameIP"
				}
			}
		}
	},
	"ipscustomsignature": {
		"uniqueName": "idpCustSignName",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.CustomSigDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=55&mode=301"
				},
				"500": {
					"message": "Message.CustomSigDeleteFailed"
				},
				"503": {
					"message": "Message.CustomSignatureInUse"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				},
				"542":
				{ "message": "Message.CustomSigNPSubscRquir" }
			},
			"ADD": {
				"200": {
					"message": "Message.CustomSigAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=55&mode=301&operation=274"
				},
				"541": {
					"message": "Message.CustomSigInvalidSignatureRule"
				},
				"500": {
					"message": "Message.CustomSigAddFailed"
				},
				"502": {
					"message": "Message.CustomSigRecordExists"
				},
				"505": {
					"message": "Message.IPSpolicyEngineRestartFail"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				},
				"542":
				{ "message": "Message.CustomSigNPSubscRquir" }
			},
			"UPDATE": {
				"200": {
					"message": "Message.CustomSigUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=55&mode=301&operation=274"
				},
				"541": {
					"message": "Message.CustomSigCustomSignatureCheck1"
				},
				"500": {
					"message": "Message.CustomSigUpdateFailed"
				},
				"502": {
					"message": "Message.CustomSigRecordExists"
				},
				"505": {
					"message": "Message.IPSpolicyEngineRestartFail"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				},
				"542":
				{ "message": "Message.CustomSigNPSubscRquir" }
			}
		}
	},
	"snmpcommunity": {
		"uniqueName": "txtCommName",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.SNMPCommDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=25&mode=301"
				},
				"500": {
					"message": "Message.SNMPCommDeleteFailed",
					"url": "/webpages/system/SNMPCommunityManage.jsp"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.SNMPCommAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=25&mode=301&operation=266"
				},
				"500": {
					"message": "Message.SNMPCommAddFailed"
				},
				"502": {
					"message": "Message.SNMPCommRecordExists"
				},
				"216": {
					"message": "Message.SNMPCommSNMPdisableAdd"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.SNMPCommUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=25&mode=301&operation=266"
				},
				"500": {
					"message": "Message.SNMPCommUpdateFailed"
				},
				"502": {
					"message": "Message.SNMPCommRecordExists"
				},
				"216": {
					"message": "Message.SNMPCommSNMPdisableEdit"
				}
			}
		}
	},
	"arpneighbourconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.ARPUpdateConfigSuccess"
				},
				"500": {
					"message": "Message.ARPUpdateConfigFailed"
				}
			}
		}
	},
	"usergroupmove": {
		"uniqueName": "",
		"statusMappings": {
			"REORDER": {
				"200": {
					"message": "Message.UGMemberAddSuccess"
				},
				"500": {
					"message": "Message.UserGroupAddFailure"
				}
			}
		}
	},
	"dashboardmanage": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.dashboardReorderSuccessfull"
				},
				"500": {
					"message": "Message.dashboardReorderFail"
				}
			}
		}
	},
	"emailarchiver": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.EmailArchiverDeleteSuccess"
				},
				"500": {
					"message": "Message.EmailArchiverDeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.EmailArchiverAddSuccess"
				},
				"500": {
					"message": "Message.EmailArchiverAddFailure"
				},
				"502": {
					"message": "Message.EmailArchiverRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.EmailArchiverEditSuccess"
				},
				"500": {
					"message": "Message.EmailArchiverEditFailure"
				}
			}
		}
	},
	"profile": {
		"uniqueName": "txtRoleName",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ACLDeleted",
					"url": "/includes/ManagePage.jsp?datagridid=170&mode=301"
				},
				"500": {
					"message": "Message.ACLNotDeleted"
				},
				"504": {
					"message": "Message.ACLChildExist"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ACLInserted",
					"url": "/includes/ManagePage.jsp?datagridid=170&mode=301&operation=249"
				},
				"500": {
					"message": "Message.ACLNotInserted"
				},
				"502": {
					"message": "Message.ACLRoleNameExisted"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ACLUpdated",
					"url": "/includes/ManagePage.jsp?datagridid=170&mode=301&operation=249"
				},
				"500": {
					"message": "Message.ACLNotUpdated"
				}
			}
		}
	},
	"upload_trustedmac": {
		"uniqueName": "",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.TrustedMACUploadSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=154&mode=301&operation=234"
				},
				"201": {
					"message": "Message.TrustedMACRecordExists",
					"url": "/includes/ManagePage.jsp?datagridid=154&mode=301&operation=234"
				},
				"203": {
					"message": "Message.TrustedMACInvalidRecords",
					"url": "/includes/ManagePage.jsp?datagridid=154&mode=301&operation=234"
				},
				"500": {
					"message": "Message.TrustedMACFailed"
				},
				"502": {
					"message": "Message.InvalidFormat1"
				},
				"503": {
					"message": "Message.TrustedMACInvalidData"
				}
			}
		}
	},
	"pptpconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.PPTPDeleteSuccess"
				},
				"500": {
					"message": "Message.PPTPDeleteFailed"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.PPTPUpdated"
				},
				"541": {
					"message": "Message.PPTPConflictWithL2TP"
				},
				"542": {
					"message": "Message.PPTPNotUpdatedInvalidIPRange"
				},
				"500": {
					"message": "Message.PPTPNotUpdated"
				}
			}
		}
	},
	"wirelessmeshnetworks": {
		"uniqueName": "ap_interfacename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.WPMeshDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=516&mode=301&operation=817"
				},
				"500": {
					"message": "Message.WPMeshDeleteFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.WPMeshSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=516&mode=301&operation=817"
				},
				"542": {
					"message": "Message.WPMeshAP"
				},
				"500": {
					"message": "Message.WPMeshCreatedFail"
				},
				"502": {
					"message": "Message.WPMeshExists"
				},
				"547": {
					"message": "Message.WPMeshAPX"
				},
				"548": {
					"message": "Message.WPMeshAPX320"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.WPMeshUpdateSuccessfully",
					"url": "/includes/ManagePage.jsp?datagridid=516&mode=301&operation=817"
				},
				"542": {
					"message": "Message.WPMeshAPForUpdate"
				},
				"500": {
					"message": "Message.WPMeshUpdateFail"
				},
				"547": {
					"message": "Message.WPMeshAPX"
				},
				"548": {
					"message": "Message.WPMeshAPX320"
				}

			}
		}
	},
	"icappolicy": {
		"uniqueName": "policyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ICAPPolicyDeleteSuccess"
				},
				"500": {
					"message": "Message.ICAPPolicyDeleteFail"
				},
				"504": {
					"message": "Message.ICAPPolicyDeleteBinded"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ICAPPolicyAddSuccess"
				},
				"500": {
					"message": "Message.ICAPPolicyAddFail"
				},
				"522": {
					"message": "Message.ICAPPolicyAddLimitChk"
				},
				"502": {
					"message": "Message.ICAPPolicyConfExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ICAPPolicyUpdateSuccess"
				},
				"211": {
					"message": "Message.ICAPPolicyConf"
				},
				"500": {
					"message": "Message.ICAPPolicyUpdateFail"
				}
			}
		}
	},
	"qospolicy": {
		"uniqueName": "policyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.QOSDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=30&mode=301"
				},
				"500": {
					"message": "Message.QOSDeleteFailed",
					"url": "/includes/ManagePage.jsp?datagridid=30&mode=301"
				},
				"504": {
					"message": "Message.QOSForeignKeyExists",
					"url": "/includes/ManagePage.jsp?datagridid=30&mode=301"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.QOSAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=30&mode=301&operation=121"
				},
				"500": {
					"message": "Message.QOSAddFail"
				},
				"502": {
					"message": "Message.QOSRecordExist"
				}
			},
			"UPDATE": {

			}
		}
	},
	"accesstimepolicy": {
		"uniqueName": "accesspolicyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ATPDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=6&mode=301&operation=10"
				},
				"500": {
					"message": "Message.ATPDeleteFailed"
				},
				"504": {
					"message": "Message.ATPRecordInUse"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ATPAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=6&mode=301"
				},
				"500": {
					"message": "Message.ATPAddFailure"
				},
				"502": {
					"message": "Message.ATPRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ATPEditSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=6&mode=301"
				},
				"500": {
					"message": "Message.ATPEditFailure"
				},
				"502": {
					"message": "Message.ATPRecordExists"
				}
			}
		}
	},
	"countryhost": {
		"uniqueName": "hostname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.CountryHostDelSucc",
					"url": "/includes/ManagePage.jsp?datagridid=303&mode=301&operation=743"
				},
				"500": {
					"message": "Message.CountryHostDeleteFailed"
				},
				"504": {
					"message": "Message.CountryHostFWRuleExist"
				},
				"509": {
					"message": "Message.CountryHostHostgrpExist"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.AddCountryHostSuccMsg"
				},
				"500": {
					"message": "Message.AddCountryHostFailMsg"
				},
				"502": {
					"message": "Message.CountryHostExists"
				},
				"503": {
					"message": "Message.CountryConflict"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.UpdateCountryHostSuccMsg"
				},
				"202": {
					"message": "Message.UpdateCountryHostWithRename"
				},
				"500": {
					"message": "Message.UpdateCountryHostFailMsg"
				},
				"501": {
                    "message": "Message.CountryConflict"
				},
				"502": {
					"message": "Message.CountryHostUpdateExists"
				},
				"503": {
					"message": "Message.CountryConflict"
				}
			}
		}
	},
	"logsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.SyslogConfUpdateSuccess"
				},
				"500": {
					"message": "Message.SyslogConfUpdateFailed"
				}
			}
		}
	},
	"l2tpconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.L2TPUserDeleteSuccess"
				},
				"500": {
					"message": "Message.L2TPUserDeleteFailed"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.L2TPConfigUpdated"
				},
				"541": {
					"message": "Message.L2TPConflictWithPPTP"
				},
				"500": {
					"message": "Message.L2TPConfigNotUpdated"
				},
				"507": {
					"message": "Message.IPSecLocalidColision"
				}
			}
		}
	},
	"clientlessuseraddrange": {
		"uniqueName": "username",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.ClientlessUserAddMultipleClientLessUsers",
					"url": "/includes/ManagePage.jsp?datagridid=200&mode=301&operation=282"
				},
				"500": {
					"message": "Message.RangeClientlessUserAddFailed"
				},
				"502": {
					"message": "Message.ClientlessUserRecordExists1"
				},
				"503": {
					"message": "Message.ClientlessUserRecordExistsWithSameIP1"
				}
			}
		}
	},
	"usersresetaccounting": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.UserResetSucc"
				},
				"500": {
					"message": "Message.UserResetFail"
				},
				"504": {
					"message": "Message.UserResetFailLiveUser"
				}
			}
		}
	},
	"trustedmac": {
		"uniqueName": "mac",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.TrustedMACDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=154&mode=301"
				},
				"500": {
					"message": "Message.TrustedMACDeleteFailed"
				},
				"511": {
					"message": "Message.TrustedMACRunconfigFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.TrustedMACAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=154&mode=301&operation=234"
				},
				"541": {
					"message": "Message.TrustedMACIP_Already_Binded"
				},
				"500": {
					"message": "Message.TrustedMACAddFail"
				},
				"511": {
					"message": "Message.TrustedMACRunconfigFailed"
				},
				"502": {
					"message": "Message.TrustedMACRecordAlreadyExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.TrustedMACUpdateSuccess"
				},
				"541": {
					"message": "Message.TrustedMACIP_Already_Binded"
				},
				"500": {
					"message": "Message.TrustedMACUpdateFail"
				},
				"511": {
					"message": "Message.TrustedMACRunconfigFailed"
				},
				"502": {
					"message": "Message.TrustedMACRecordAlreadyExists"
				}
			}
		}
	},
	"antispamconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.ASConfigUpdateSuccess",
					"url": "/antispam/ASConfiguration.html?&mode=300&operation=45"
				},
				"500": {
					"message": "Message.ASConfigUpdateFail"
				},
				"505": {
					"message": "Message.ASConfigSubOperationFail"
				}
			}
		}
	},
	"machost": {
		"uniqueName": "hostname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.MACHostDeleteSuccess"
				},
				"500": {
					"message": "Message.MACHostDeleteFailed"
				},
				"504": {
					"message": "Message.MACFirewallRuleExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.MACAddSuccess"
				},
				"500": {
					"message": "Message.MACAddFail"
				},
				"523": {
					"message": "Message.CsvMACHostAddLimit"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				},
				"503": {
					"message": "Message.IPHostRecordExistsWithSameDetail"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.MACUpdateSuccess"
				},
				"202": {
					"message": "Message.MACUpdateWithRename"
				},
				"500": {
					"message": "Message.MACUpdateFail"
				},
				"523": {
					"message": "Message.CsvMACHostUpdateLimit"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				},
				"503": {
					"message": "Message.IPHostRecordExistsWithSameDetail"
				}
			}
		}
	},
	"imconversationrule": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IMRule1DeleteSuccess"
				},
				"500": {
					"message": "Message.IMRule1DeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IMRule1AddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=204&mode=301&operation=93"
				},
				"500": {
					"message": "Message.IMRule1AddFailed"
				},
				"502": {
					"message": "Message.IMRuleRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IMRule1UpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=204&mode=301&operation=93"
				},
				"500": {
					"message": "Message.IMRule1UpdateFailed"
				},
				"502": {
					"message": "Message.IMRuleRecordExists"
				}
			}
		}
	},
	"unicastroute": {
		"uniqueName": "destinationip",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.UnicastDeleteSuccess",
					"url": "/network/UnicastRouteManage.jsp"
				},
				"500": {
					"message": "Message.UnicastDeleteFailed"
				},
				"203": {
					"message": "Message.UnicastRunConfigFailed"
				},
				"526": {
					"message": "Message.UnicastRecordNotExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.UnicastAddSuccess",
					"url": "/network/UnicastRouteManage.jsp"
				},
				"541": {
					"message": "Message.GWNotInterfaceRange"
				},
				"510": {
					"message": "Message.GWNotPrefixRange"
				},
				"500": {
					"message": "Message.UnicastAddFailed"
				},
				"203": {
					"message": "Message.UnicastRunConfigFailed"
				},
				"502": {
					"message": "Message.UnicastRecordExists"
				},
				"527": {
					"message": "Message.GatewaySameAsInterface"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.UnicastUpdateSuccess",
					"url": "/network/UnicastRouteManage.jsp"
				},
				"541": {
					"message": "Message.GWNotInterfaceRange"
				},
				"510": {
					"message": "Message.GWNotPrefixRange"
				},
				"500": {
					"message": "Message.UnicastUpdateFailed"
				},
				"203": {
					"message": "Message.UnicastRunConfigFailed"
				},
				"502": {
					"message": "Message.UnicastUpdateRecordExists"
				},
				"526": {
					"message": "Message.UnicastRecordNotExists"
				},
				"527": {
					"message": "Message.GatewaySameAsInterface"
				}
			}
		}
	},
	"firewallrule": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.FWDelSuccess",
					"url": "/firewall/FirewallRuleManage.jsp"
				},
				"500": {
					"message": "Message.FWRuleDeleteFail"
				}
			},
			"REORDER": {
				"200": {
					"message": "Message.RowUpdate"
				},
				"500": {
					"message": "Message.RowUpdateFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.FWRuleAddSuccess",
					"url": "/firewall/FirewallRuleManage.jsp"
				},
				"500": {
					"message": "Message.FWRuleAddFail"
				},
				"502": {
					"message": "Message.FWRuleRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.FWRuleEditSuccess",
					"url": "/firewall/FirewallRuleManage.jsp"
				},
				"500": {
					"message": "Message.FWRuleEditFail"
				},
				"541": {
					"message": "Message.FWRuleFailMaxUser"
				},
				"502": {
					"message": "Message.FWRuleUpdateRecordExist"
				},
				"202": {
					"message": "Message.FirewallRuleUpdateWithRename",
					"url": "/firewall/FirewallRuleManage.jsp"
				}

			}
		}
	},
	"cisco": {
		"uniqueName": "connectionname",
		"statusMappings": {
			"UPDATE": {
				"541": {
					"message": "Message.IPSecPSKNOTSAME",
					"url": "/vpn/CISCOVPNClientConfiguration.html?mode=300&operation=344"
				},
				"200": {
					"message": "Language.CISCOSuccessActivate",
					"url": "/vpn/CISCOVPNClientConfiguration.html?mode=300&operation=344"
				},
				"201": {
					"message": "Language.CISCOClientUpdated",
					"url": "/vpn/CISCOVPNClientConfiguration.html?mode=300&operation=344"
				},
				"500": {
					"message": "Language.CISCOClientNotUpdated",
					"url": "/vpn/CISCOVPNClientConfiguration.html?mode=300&operation=344"
				},
				"511": {
					"message": "Language.CISCOFailedActivate",
					"url": "/vpn/CISCOVPNClientConfiguration.html?mode=300&operation=344"
				},
				"512": {
					"message": "Message.IPSecRewriteFailed",
					"url": "/vpn/CISCOVPNClientConfiguration.html?mode=300&operation=344"
				},
				"502": {
					"message": "Message.IPSecRecordExist",
					"url": "/vpn/CISCOVPNClientConfiguration.html?mode=300&operation=344"
				},
				"503": {
					"message": "Message.IPSecNetworkConflict",
					"url": "/vpn/CISCOVPNClientConfiguration.html?mode=300&operation=344"
				},
				"507": {
					"message": "Message.IPSecLocalidColision"
				},
				"517": {
					"message": "Message.L2TPWithIKEv2NotSupported"
				}
			}
		}
	},
	"amazonvpc":{
		 "uniqueName": "",
		 "statusMappings":{
		 	"ADD":{
				"200":{"message":"Language.SetupVPC"},
				"518":{"message":"Message.AWSXFRMIfaceNotCreated"},
				"508":{"message":"Message.AWSLocalGWNotWAN"},
				"540":{"message":"Message.AWSListeningIfaceNotFound"},
				"545":{"message":"Message.AWSGatewayIPNotFound"},
				"507":{"message":"Message.AWSIncompatibleVPNPolicy"},
				"502":{"message":"Message.AWSURLReplyError"},
				"501":{"message":"Message.AWSURLReplyError"},
				"500":{"message":"Message.AWSIPSecRecordMissing"},
				"503":{"message":"Message.AWSLocalGWIPNotSame"},
				"541":{"message":"Message.AWSFIPSNotComplientVPC"}
			},
			"DELETE":{
				"200":{"message":"Language.AWSVPNDeleteSuccess"},
				"518":{"message":"Message.AWSConnIdNotFound"},
				"508":{"message":"Message.AWSBGPNeighDelFailed"},
				"540":{"message":"Message.AWSConnIdNotFound"}

			}




		 }




	},

	"customview": {
		"uniqueName": "",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "reportprofile.Custom_View_Added_Successfully_"
				},
				"500": {
					"message": "reportprofile.Failed_to_add_Custom_View"
				},
				"502": {
					"message": "reportprofile.Failed_Add_Custom_View_Name_Exist"
				}
			},
			"UPDATE": {
				"200": {
					"message": "reportprofile.Custom_View_Updated_Successfully_"
				},
				"500": {
					"message": "reportprofile.Error_while_updating_Custom_View_"
				}
			}
		}
	},
	"vpnauthentication": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.VPNAuthSuccess",
					"url": "/identity/VPNAuthSetting.html?mode=300&operation=552"
				},
				"500": {
					"message": "Message.VPNAuthFail"
				}
			}
		}
	},
	"applicationfilterpolicyrules": {
		"uniqueName": "policyid",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.AFPDeleteDetailSuccess"
				},
				"500": {
					"message": "Message.AFPDeleteDetailFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.AFPAddRuleSuccess"
				},
				"500": {
					"message": "Message.AFPAddRuleFail"
				},
				"511": {
					"message": "Message.AppServiceAddRunFail"
				},
				"503": {
					"message": "Message.AFPRuleExists"
				},
				"504": {
					"message": "Message.AppCriteriaNotAvail"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.AFPUpdateRuleSuccess"
				},
				"500": {
					"message": "Message.AFPUpdateRuleFail"
				},
				"203": {
					"message": "Message.AppServiceUpdateRunFail"
				},
				"503": {
					"message": "Message.AFPRuleExists"
				},
				"504": {
					"message": "Message.AppCriteriaNotAvail"
				}
			}
		}
	},
	"antivirusconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AVGeneralConfUpdateSuccess",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation=78"
				},
				"500": {
					"message": "Message.AVGeneralConfUpdateFail"
				},
				"503": {
					"message": "Message.AVGeneralConfCertValidity"
				},
				"505": {
					"message": "Message.ASConfigSubOperationFail"
				}
			}
		}
	},
	"ipsrulelistupdate": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.IPSUpdateOrderSuccess",
					"url": "/webpages/ips/IpsPolicyEdit.jsp"
				},
				"500": {
					"message": "Message.IPSUpdateRuleOrderFail"
				}
			}
		}
	},
	"services": {
		"uniqueName": "servicename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ServiceDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=39&mode=301"
				},
				"500": {
					"message": "Message.ServiceDeleteFailed"
				},
				"504": {
					"message": "Message.ServiceFirewallRuleExists"
				},
				"505": {
					"message": "Message.ServiceServiceGroupExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ServiceAddSuccess"
				},
				"500": {
					"message": "Message.ServiceAddFail"
				},
				"502": {
					"message": "Message.ServiceRecordExist"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ServiceUpdateSuccess"
				},
				"202": {
					"message": "Message.ServiceUpdateWithRename"
				},
				"500": {
					"message": "Message.ServiceupdateFail"
				},
				"502": {
					"message": "Message.ServiceRecordUpdateExist"
				}
			}
		}
	},
	"webfiltercategory": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"uniqueName": "webcategoryid",
				"200": {
					"message": "Message.WFCDeleteSuccess"
				},
				"201": {
					"message": "Message.WFCRelationExists"
				},
				"500": {
					"message": "Message.WFCDeleteFailed"
				},
				"203": {
					"message": "Message.WFCSomeCategoryCannotDeleted"
				}
			},
			"ADD": {
				"220": {
					"message": "Message.AllURLsAreSuccessfullyDownloaded"
				},
				"221": {
					"message": "Message.YouCannotAddAnyMoreURLs"
				},
				"200": {
					"message": "Message.WFCAddSuccess"
				},
				"201": {
					"message": "Message.WFCCategoryDetailCannotAdded"
				},
				"202": {
					"message": "Message.WFCAddSuccess"
				},
				"500": {
					"message": "Message.WFCAddFailed"
				},
				"522": {
					"message": "Message.WFCMaxFiveURL"
				},
				"523": {
					"message": "Message.WFCMaxFiveKeyword"
				},
				"502": {
					"message": "Message.WFCRecordExist"
				},
				"216": {
					"message": "Message.CategoryAddedSuccessfully"
				},
				"217": {
					"message": "Message.URLsCouldNotBeDownloaded"
				},
				"218": {
					"message": "Message.URLsPartiallyDownloaded"
				},
				"219": {
					"message": "Message.URLsAreInvalid"
				},
				"222": {
					"message": "Message.URLsAreInvalidCheckLog"
				}
			},
			"UPDATE": {
				"220": {
					"message": "Message.AllURLsAreSuccessfullyDownloaded"
				},
				"221": {
					"message": "Message.YouCannotAddAnyMoreURLs"
				},
				"200": {
					"message": "Message.WFCEditSuccess"
				},
				"201": {
					"message": "Message.WFCCategoryDetailCannotUpdated"
				},
				"500": {
					"message": "Message.WFCEditFailed"
				},
				"502": {
					"message": "Message.WFCRecordExist"
				},
				"216": {
					"message": "Message.CategoryDatabaseUpToDate"
				},
				"503": {
					"message": "Message.WFCMaxFiveURL"
				},
				"217": {
					"message": "Message.URLsCouldNotBeDownloaded"
				},
				"504": {
					"message": "Message.WFCMaxFiveKeyword"
				},
				"218": {
					"message": "Message.URLsPartiallyDownloaded"
				},
				"219": {
					"message": "Message.URLsAreInvalid"
				},
				"222": {
					"message": "Message.URLsAreInvalidCheckLog"
				}
			}
		}
	},
	"sslvpnpolicyuser": {
		"uniqueName": "userids",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.SSLVPNpolicyAddSuccess"
				},
				"500": {
					"message": "Message.SSLVPNpolicyAddFailure"
				}
			}
		}
	},
	"filetypedetails": {
		"uniqueName": "filetypedetail",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.FileTypeDelMIMEHeaderSuccess"
				},
				"500": {
					"message": "Message.FileTypeDelMIMEHeaderFailed",
					"url": "/webpages/objects/FileTypeCategoryEdit.jsp"
				},
				"504": {
					"message": "Message.FileTypeOneExtMIMEHeaderRequired",
					"url": "/webpages/objects/FileTypeCategoryEdit.jsp"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.FileTypeAddMIMEHeaderSuccess"
				},
				"500": {
					"message": "Message.FileTypeAddMIMEHeaderFailed",
					"url": "/webpages/objects/FileTypeCategoryEdit.jsp"
				},
				"502": {
					"message": "Message.FileTypeAddMIMEHeaderAlreadyExists",
					"url": "/webpages/objects/FileTypeCategoryEdit.jsp"
				}
			}
		}
	},
	"sslvpnpolicy": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.SSLVPNpolicyDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=15&mode=301"
				},
				"500": {
					"message": "Message.SSLVPNpolicyDeleteFailed"
				},
				"504": {
					"message": "Message.SSLVPNpolicyRelationExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.SSLVPNpolicyInserted",
					"url": "/includes/ManagePage.jsp?datagridid=15&mode=301&operation=203"
				},
				"500": {
					"message": "Message.SSLVPNpolicyNotInserted"
				},
				"502": {
					"message": "Message.SSLVPNpolicyRecordExist"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.SSLVPNpolicyUpdated",
					"url": "/includes/ManagePage.jsp?datagridid=15&mode=301&operation=203"
				},
				"500": {
					"message": "Message.SSLVPNpolicyNotUpdated"
				},
				"502": {
					"message": "Message.SSLVPNpolicyRecordExist"
				}
			}
		}
	},
	"dynamicdns": {
		"uniqueName": "accountids",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.DDNSDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=20&mode=301&operation=307"
				},
				"500": {
					"message": "Message.DDNSDeleteFailed"
				},
				"503": {
					"message": "Message.DDNSServiceUnavailable"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DDNSCreatedSuccessFully",
					"url": "/includes/ManagePage.jsp?datagridid=20&mode=301&operation=307"
				},
				"500": {
					"message": "Message.DDNSCreateFailed"
				},
				"502": {
					"message": "Message.DDNSRecordAlreadyExists"
				},
				"503": {
					"message": "Message.DDNSServiceUnavailable"
				},
				"504": {
					"message": "Message.DDNSNameExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.DDNSUpdatedSuccessFully",
					"url": "/includes/ManagePage.jsp?datagridid=20&mode=301&operation=307"
				},
				"500": {
					"message": "Message.DDNSUpdateFailed"
				},
				"502": {
					"message": "Message.DDNSRecordAlreadyExists"
				},
				"503": {
					"message": "Message.DDNSServiceUnavailable"
				},
				"504": {
					"message": "Message.DDNSNameExists"
				}
			}
		}
	},
	"filetype":{
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.FileTypeAddSuccess","url":"/includes/ManagePage.jsp?datagridid=10&mode=301&operation=" + Modes.FILE_CATEGORY_DELETE},
				"500":{"message":"Message.FileTypeAddFailed"},
				"502":{"message":"Message.FileTypeRecordExists"},
				"503":{"message":"Message.FileTypeSameDetailRecordExists"},
				"505":{"message":"Message.FileTypeInvalidExtensionOrMIMEHeader"}
			},
			"UPDATE":{
				"200":{"message":"Message.FileTypeUpdateSuccess","url":"/includes/ManagePage.jsp?datagridid=10&mode=301&operation=" + Modes.FILE_CATEGORY_DELETE},
				"202":{"message":"Message.FileTypeUpdateWithRename"},
				"500":{"message":"Message.FileTypeUpdateFailed"},
				"502":{"message":"Message.FileTypeUpdateRecordExists"},
				"503":{"message":"Message.FileTypeSameDetailRecordExists"},
				"505":{"message":"Message.FileTypeInvalidExtensionOrMIMEHeader"}
			},
			"DELETE":{
				"200":{"message":"Message.FileTypeDeleteSuccess","url":"/includes/ManagePage.jsp?datagridid=10&mode=301&operation=" + Modes.FILE_CATEGORY_DELETE},
				"500":{"message":"Message.FileTypeDeleteFailed"},
				"504":{"message":"Message.FileTypeForeignKeyExists"}
			}
		}
	},
	"arpupdateneighbourentry": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ARPARPCacheDeleted"
				},
				"500": {
					"message": "Message.ARPARPCacheNotDeleted"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ARPAddSuccess",
					"url": "/network/ARPManage.jsp"
				},
				"541": {
					"message": "Message.ARPTrustedEntryConfilct"
				},
				"500": {
					"message": "Message.ARPAddFailed"
				},
				"502": {
					"message": "Message.ARPRecordExists"
				},
				"503": {
					"message": "Message.ARPGatewayExists"
				},
				"504": {
					"message": "Message.ARPMax16Address"
				},
				"505": {
					"message": "Message.ARPIPTypeConfilct"
				},
				"516": {
					"message": "Message.ARPTrustedEntryConfilct"
				}
			},
			"UPDATE": {
				"541": {
					"message": "Message.ARPTrustedEntryConfilct"
				},
				"200": {
					"message": "Message.ARPUpdateSuccess",
					"url": "/network/ARPManage.jsp"
				},
				"500": {
					"message": "Message.ARPUpdateFailed"
				},
				"502": {
					"message": "Message.ARPRecordExists"
				},
				"503": {
					"message": "Message.ARPGatewayExists"
				},
				"504": {
					"message": "Message.ARPMax16Address"
				},
				"505": {
					"message": "Message.ARPIPTypeConfilct"
				},
				"506": {
					"message": "Message.ARPTrustedListNotEmpty"
				}
			}
		}
	},
	"bridgepair": {
		"uniqueName": "interface",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.InterfaceAddBridgePairSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"541": {
					"message": "Message.AddBridgePairHAConfigured"
				},
				"542": {
					"message": "Message.AddBridgePairAddMonitorPort"
				},
				"543": {
					"message": "Message.BrPairEditAddBridgePairFailed"
				},
				"510": {
					"message": "Message.BrPairEditMemInterfaceAlreadyPaired"
				},
				"544": {
					"message": "Message.BrPairEditOnlyOneZoneCanbeWAN"
				},
				"500": {
					"message": "Message.BrPairEditAddBridgePairFailed"
				},
				"502": {
					"message": "Message.BrPairEditBridgePairNameConflict"
				},
				"503": {
					"message": "Message.InterfaceGatewayAlreadyExists"
				},
				"504": {
					"message": "Message.InterfaceIPAlreadyInUsed"
				},
				"508": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.InterfaceEditBridgePairSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"541": {
					"message": "Message.UpdateBridgePairHAConfigured"
				},
				"542": {
					"message": "Message.UpdateBridgePairUpdateMonitorPort"
				},
				"543": {
					"message": "Message.BrPairEditAddBridgePairFailed"
				},
				"510": {
					"message": "Message.BrPairEditMemInterfaceAlreadyPaired"
				},
				"500": {
					"message": "Message.BrPairEditEditBridgePairFailed"
				},
				"544": {
					"message": "Message.BrPairEditOnlyOneZoneCanbeWAN"
				},
				"545": {
					"message": "Message.BrPairEditGWBasedRuleExist"
				},
				"546": {
					"message": "Message.InterfaceIntBaseVHExist"
				},
				"503": {
					"message": "Message.InterfaceGatewayAlreadyExists"
				},
				"504": {
					"message": "Message.InterfaceIPAlreadyInUsed"
				},
				"508": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				},
				"550": {
					"message": "Message.BrPairEditRemoveOldMemberFailed"
				},
				"552": {
					"message": "Message.UpdateBridgePairAdministrationLink"
				}
			}
		}
	},
	"adminpassword": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AdminPasswdSucc",
					"url": "/system/ChangeAdminPassword.html?mode=300&operation=479"
				},
				"510": {
					"message": "Message.AdminPasswdWrongPasswd"
				},
				"500": {
					"message": "Message.AdminPasswdFail"
				}
			}
		}
	},
	"dhcpipv6server": {
		"uniqueName": "dhcpname",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.DHCPServerAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=53&mode=301&operation=114"
				},
				"541": {
					"message": "Message.DHCPServerStacicLeaseEntryNotUnique"
				},
				"542": {
					"message": "Message.DHCPServerNotConfWANSubnet"
				},
				"543": {
					"message": "Message.DHCPServerDHCPServerIPCanNotBeInterfaceIP"
				},
				"500": {
					"message": "Message.DHCPServerAddFailed"
				},
				"544": {
					"message": "Message.DHCPServerLease_IP_Not_Fall_In_Range"
				},
				"545": {
					"message": "Message.DHCPServerLease_IP_Already_Assigned"
				},
				"502": {
					"message": "Message.DHCPServerRecordExists"
				},
				"546": {
					"message": "Message.DHCPv6ServerNotConf"
				},
				"547": {
					"message": "Message.DHCPSERverNotConfwithDiffSubnet"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.DHCPServerEditSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=53&mode=301&operation=114"
				},
				"541": {
					"message": "Message.DHCPServerStacicLeaseEntryNotUnique"
				},
				"542": {
					"message": "Message.DHCPServerNotConfWANSubnet"
				},
				"543": {
					"message": "Message.DHCPServerDHCPServerIPCanNotBeInterfaceIP"
				},
				"500": {
					"message": "Message.DHCPServerEditFailed"
				},
				"544": {
					"message": "Message.DHCPServerLease_IP_Not_Fall_In_Range"
				},
				"545": {
					"message": "Message.DHCPServerLease_IP_Already_Assigned"
				},
				"546": {
					"message": "Message.DHCPv6ServerNotConf"
				},
				"547": {
					"message": "Message.DHCPSERverNotConfwithDiffSubnet"
				}
			}
		}
	},
	"httpsscanningexceptions": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.HTTPSDeleteSuccess"
				},
				"500": {
					"message": "Message.HTTPSDeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.HTTPSAddSuccess"
				},
				"500": {
					"message": "Message.HTTPSAddFailure"
				},
				"502": {
					"message": "Message.HTTPSRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.HTTPSEditSuccess"
				},
				"500": {
					"message": "Message.HTTPSEditFailure"
				}
			}
		}
	},
	"antispamrules": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.SpamRuleDeleteSuccess"
				},
				"500": {
					"message": "Message.SpamRuleDeleteFail"
				}
			},
			"REORDER": {
				"200": {
					"message": "Message.SpamRuleUpdateRuleOrderSuccess"
				},
				"500": {
					"message": "Message.SpamRuleUpdateRuleOrderFail"
				},
				"505": {
					"message": "Message.SpamRuleUpdateRuleOrderFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.SpamRuleAddSuccess"
				},
				"500": {
					"message": "Message.SpamRuleAddFail"
				},
				"502": {
					"message": "Message.SpamRuleRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.SpamRuleUpdateSuccess"
				},
				"500": {
					"message": "Message.SpamRuleUpdateFail"
				}
			}
		}
	},
	"uploadaddressgroupemaillist": {
		"uniqueName": "listid",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.AddrGrpUploadSuccess"
				},
				"541": {
					"message": "Message.AddrGrpAllEmailNotImported"
				},
				"542": {
					"message": "Message.AddrGrpEmptyFile2"
				},
				"543": {
					"message": "Message.SomeEmailNotImported"
				},
				"500": {
					"message": "Message.AddrGrpUploadFailed"
				},
				"522": {
					"message": "Message.AddrGrpMaxLimitExceed"
				}
			}
		}
	},
	"guestuserssmsgateway": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.SMSGWdeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=305&mode=301"
				},
				"500": {
					"message": "Message.SMSGWDeleteFailed"
				},
				"504": {
					"message": "Message.RecordIsInUse"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.SMSGWAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=200&mode=301&operation=750"
				},
				"500": {
					"message": "Message.SMSGWAddFailed"
				},
				"502": {
					"message": "Message.SMSGWRecordAlreadyExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.SMSGWEditSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=200&mode=301&operation=750"
				},
				"500": {
					"message": "Message.SMSGWEditFailed"
				}
			}
		}
	},
	"adsserver": {
		"uniqueName": "srvname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.AuthServerSucc",
					"url": "/includes/ManagePage.jsp?datagridid=253&mode=301"
				},
				"500": {
					"message": "Message.AuthServerFail"
				},
				"504": {
					"message": "Message.AuthServerServerInUse"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ADAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=253&mode=301&operation=473"
				},
				"500": {
					"message": "Message.ADAddFail"
				},
				"502": {
					"message": "Message.ADRecordNameExists"
				},
				"503": {
					"message": "Message.ADRecordNameIPExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ADUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=253&mode=301&operation=473"
				},
				"500": {
					"message": "Message.ADUpdateFail"
				},
				"503": {
					"message": "Message.ADUpdateFailDetail"
				}
			}
		}
	},
	"timeconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.TimeConfUpdateSuccess",
					"url": "/system/SystemTimeManage.html?mode=300&operation=271"
				},
				"201": {
					"message": "Message.TimeConfUpdateSuccess"
				},
				"500": {
					"message": "Message.TimeConfUpdateFailed"
				}
			}
		}
	},
	"sslvpnpolicyusermanage": {
		"uniqueName": "userids",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.SSLVPNpolicyUpdateSuccess"
				},
				"500": {
					"message": "Message.SSLVPNpolicyUpdateFailure",
					"url": "/includes/ManagePage.jsp?datagridid=176&mode=301"
				}
			}
		}
	},
	"myaccountpersonaldetails": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.PersonalInfoUpdateSuccess"
				},
				"500": {
					"message": "Message.PersonalInfoUpdateFail"
				}
			}
		}
	},
	"authenticationmethods": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.FWAuthSettingsSuccess",
					"url": "/identity/FirewallAuthSetting.html?mode=300&operation=553"
				},
				"500": {
					"message": "Message.FWAuthSettingsFail"
				}
			}
		}
	},
	"users": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.UserDelIPaddressSuccess"
				},
				"541": {
					"message": "Message.UserOneIPAddressRequired"
				},
				"500": {
					"message": "Message.UserDelIPaddressFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.UserAddIPaddressSuccess"
				},
				"500": {
					"message": "Message.UserAddIPaddressFailed"
				},
				"502": {
					"message": "Message.UserAddIPaddressAlreadyExists"
				}
			}
		}
	},
	"virtualhostfirewallrule": {
		"uniqueName": "rulename",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.VHRSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=7&mode=301"
				},
				"500": {
					"message": "Message.VHRNotCreated"
				},
				"522": {
					"message": "Message.VHRNATpolicyMaxLimit"
				},
				"502": {
					"message": "Message.VHRExist"
				},
				"503": {
					"message": "Message.VHRNATpolicyExist"
				},
				"504": {
					"message": "Message.VHRNATpolicyNotAdded"
				},
				"516": {
					"message": "Message.VHRErrorCreatingFirewall"
				}
			}
		}
	},
	"admineditpasswordemail": {
		"uniqueName": "name",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.UserUpdateSuccess"
				},
				"500": {
					"message": "Message.UserUpdateFail"
				},
				"504": {
					"message": "Message.PasswdComplexityMisMatch"
				},
				"505": {
					"message": "Message.NotAllowedToChangePassword"
				}

			}
		}
	},
	"gatewayfailover": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.GatewayTimeoutConfUpdateSuccess",
					"url": "/network/GatewayManage.jsp"
				},
				"500": {
					"message": "Message.GatewayTimeoutConfUpdateFail"
				}
			}
		}
	},
	"toggleclientlessuserstatus": {
		"uniqueName": "userIds",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.UserChangeStatusSuccess"
				},
				"201": {
					"message": "Message.UserChangeStatusSuccess"
				},
				"500": {
					"message": "Message.UserChangeStatusFail"
				}
			}
		}
	},
	"imwebcamrule": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IMRule4DeleteSuccess"
				},
				"500": {
					"message": "Message.IMRule4DeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IMRule4AddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=206&mode=301&operation=99"
				},
				"500": {
					"message": "Message.IMRule4AddFailed"
				},
				"502": {
					"message": "Message.IMRuleRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IMRule4UpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=206&mode=301&operation=99"
				},
				"500": {
					"message": "Message.IMRule4UpdateFailed"
				},
				"502": {
					"message": "Message.IMRuleRecordExists"
				}
			}
		}
	},
	"loginsecurity": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.LoginSecuritySuccess"
				},
				"500": {
					"message": "Message.LoginSecurityFail"
				}
			}
		}
	},
	"smtpscanningrules": {
		"uniqueName": "policyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.MailScanRuleSuccess"
				},
				"500": {
					"message": "Message.MailScanRuleFailed"
				},
				"504": {

				}
			},
			"REORDER": {
				"200": {
					"message": "Message.HTTPRuleUpdateRuleOrderSuccess"
				},
				"500": {
					"message": "Message.HTTPRuleUpdateRuleOrderFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.MailScanRuleAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=152&mode=301&operation=231"
				},
				"500": {
					"message": "Message.MailScanRuleAddFailed"
				},
				"502": {
					"message": "Message.MailScanRuleRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.MailScanRuleUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=152&mode=301&operation=231"
				},
				"500": {
					"message": "Message.MailScanRuleUpdateFail"
				}
			}
		}
	},
	"iphost": {
		"uniqueName": "hostname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.HostDeleteSuccess"
				},
				"541": {
					"message": "Message.HostSelectedInATP"
				},
				"500": {
					"message": "Message.HostDeleteFailed"
				},
				"504": {
					"message": "Message.HostFirewallRuleExists"
				},
				"505": {
					"message": "Message.HostVirtualHostExists"
				},
				"506": {
					"message": "Message.HostNATPolicyExists"
				},
				"507": {
					"message": "Message.HostWebServerExists"
				},
				"508": {
					"message": "Message.HostIPSecConnectionExists"
				},
				"509": {
					"message": "Message.HostHostgroupExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IPHostAddSuccess"
				},
				"500": {
					"message": "Message.IPHostAddFailed"
				},
				"522": {
					"message": "Message.CsvIPHostAddLimit"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				},
				"503": {
					"message": "Message.IPHostRecordExistsWithSameDetail"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IPHosthostUpdateSuccessfully"
				},
				"541": {
					"message": "Message.IPHostFAIL_VIRTUL_HOST_CONFLICT"
				},
				"542": {
					"message": "Message.HostVHExceed255"
				},
				"202": {
					"message": "Message.IPHostUpdateWithRename"
				},
				"543": {
					"message": "Message.HostVHExceed128"
				},
				"500": {
					"message": "Message.IPHostupdateFail"
				},
				"522": {
					"message": "Message.CsvIPHostUpdateLimit"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				},
				"503": {
					"message": "Message.IPHostRecordExistsWithSameDetail"
				}
			}
		}
	},
	"webfilterprotectionsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {"message": "Message.WFSettingsUpdateSuccess"},
				"598": {"message": "Message.WFSettingsUpdatePartialSuccess"},
				"500": {"message": "Message.WFSettingsUpdateFailed"}
			}
		}
	},
	"webfilterusernotificationsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WFSettingsUpdateSuccess",
					"url": "/webfilter/WebSettingUserNotificationsEdit.html?mode=300&operation=259"
				},
				"598": {"message": "Message.WFSettingsUpdatePartialSuccess"},
				"500": {"message": "Message.WFSettingsUpdateFailed"}
			}
		}
	},
	"webfilteradvancedsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {"message": "Message.WFSettingsUpdateSuccess"},
				"598": {"message": "Message.WFSettingsUpdatePartialSuccess"},
				"500": {"message": "Message.WFSettingsUpdateFailed"}
			}
		}
	},
	"overridepolicy": {
		"uniqueName":"session_name",
		"statusMappings": {
			"UPDATE": {
				"200": {"message": "Message.WFSettingsUpdateSuccess"},
				"500": {"message": "Message.WFSettingsUpdateFailed"}
			}
		}
	},
	"overridepolicytokenlist": {
		"uniqueName": "",
		"statusMappings": {
			"ADD": {
				"200": {"message": "Message.WFPOAddSuccess"},
				"500": {"message": "Message.WFPOAddFailed"},
                                "501": {"message": "Message.WFPOInvalidRequest"},
				"502": {"message": "Message.WFPOFailedDuplicate"}
			},
			"UPDATE": {
				"200": {"message": "Message.WFPOUpdateSuccess"},
				"500": {"message": "Message.WFPOUpdateFailed"},
                                "501": {"message": "Message.WFPOInvalidRequest"},
				"502": {"message": "Message.WFPOFailedDuplicate"}
			},
			"DELETE": {
				"200": {"message": "Message.WFPODeleteSuccess"},
				"500": {"message": "Message.WFPODeleteFailed"}
			}
		}
	},
	"overridepolicytokenlistadm": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {"message": "Message.WFPOUpdateSuccess"},
				"500": {"message": "Message.WFPOUpdateFailed"},
			},
			"DELETE": {
				"200": {"message": "Message.WFPODeleteSuccess"},
				"500": {"message": "Message.WFPODeleteFailed"}
			}
		}
	},
	"webfiltersettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {"message": "Message.WFSettingsUpdateSuccess"},
				"598": {"message": "Message.WFSettingsUpdatePartialSuccess"},
				"500": {"message": "Message.WFSettingsUpdateFailed"}
			}
		}
	},
	"sandboxsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {"message": "Language.SandboxSettingsUpdateSuccess"},
				"500": {"message": "Language.SandboxSettingsUpdateFailed"},
				"502": {"message": "Language.SandboxSettingsFileTypesExceeded"}
			}
		}
	},
	"interface": {
		"uniqueName": "interfacename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.InterfaceDELETE_SUCCESS",
					"url": "/network/InterfaceManage.html"
				},
				"541": {
					"message": "Message.BridgePairDeleteAdministrationLink"
				},
				"542": {
					"message": "Message.BridgePairDeleteMonitorPort"
				},
				"510": {
					"message": "Message.InterfaceFAIL_UNICAST_ROUTE_EXIST",
					"url": "/network/InterfaceManage.html"
				},
				"543": {
					"message": "Message.LAGInterfaceDeleteFail"
				},
				"500": {
					"message": "Message.InterfaceDELETE_FAIL",
					"url": "/network/InterfaceManage.html"
				},
				"511": {
					"message": "Message.InterfaceFAIL_MULTICAST_ROUTE_EXIST",
					"url": "/network/InterfaceManage.html"
				},
				"544": {
					"message": "Message.InterfaceDELETE_LAST_IFACE"
				},
				"512": {
					"message": "Message.InterfaceFAIL_DHCP_RELAY_EXIST",
					"url": "/network/InterfaceManage.html"
				},
				"503": {
					"message": "Message.InterfaceFAIL_BINDED_ZONE",
					"url": "/network/InterfaceManage.html"
				},
				"504": {
					"message": "Message.InterfaceFAIL_HOST_IN_FIREWALL",
					"url": "/network/InterfaceManage.html"
				},
				"505": {
					"message": "Message.InterfaceFAIL_HOST_IN_GROUP",
					"url": "/network/InterfaceManage.html"
				},
				"506": {
					"message": "Message.InterfaceFAIL_ARP_EXIST",
					"url": "/network/InterfaceManage.html"
				},
				"507": {
					"message": "Message.InterfaceFAIL_DHCP_SERVER_EXIST",
					"url": "/network/InterfaceManage.html"
				},
				"508": {
					"message": "Message.InterfaceFAIL_VIRTUAL_HOST_EXIT",
					"url": "/network/InterfaceManage.html"
				},
				"509": {
					"message": "Message.InterfaceFAIL_NAT_POLICY_EXIST",
					"url": "/network/InterfaceManage.html"
				},"516": {
					"message": "Message.REDDeleteCertificateError",
					"url": "/network/InterfaceManage.html"
				},"519": {
					"message": "Message.REDDeleteTunnelFailed",
					"url": "/network/InterfaceManage.html"
				},"520": {
					"message": "Message.REDInternalError",
					"url": "/network/InterfaceManage.html"
				},"550": {
					"message": "Message.LastInterfaceDelete",
					"url": "/network/InterfaceManage.html"
				},"521": {
					"message": "Message.VlanOfBridgePairMembersExist"
				},"522": {
					"message": "Message.LAG_VLAN_EXIST_IN_BRIDGE"
				},"523": {
					"message": "Message.RED_VLAN_EXIST_IN_BRIDGE"
				}
			},
			"UPDATE": {
				"550": {
					"message": "Language.HAIsConfigured"
				},
				"551": {
					"message": "Message.InterfaceIPAssignmentChangeNotAllowed "
				},
				"200": {
					"message": "Message.InterfaceUpdateSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"541": {
					"message": "Message.InterfaceFailedWhileDeleteDHCPServer"
				},
				"552": {
					"message": "Message.DHCPPPPoEDetailsNotUpdated"
				},
				"542": {
					"message": "Message.InterfaceFailedWhileUnbinding"
				},
				"520": {
					"message": "Message.InterfaceFailedToUnbindInterfaceRunConfig"
				},
				"553": {
					"message": "Message.DHCPRADetailsNotUpdated"
				},
				"510": {
					"message": "Message.InterfaceOneWANRequired"
				},
				"543": {
					"message": "Message.InterfaceFailedWhileDeletePPPoE"
				},
				"500": {
					"message": "Message.InterfaceUpdateFail"
				},
				"544": {
					"message": "Message.InterfaceFailedWhileDeleteGateway"
				},
				"545": {
					"message": "Message.InterfaceFailedToUnbindInterface"
				},
				"502": {
					"message": "Message.InterfaceIPAlreadyInUsed"
				},
				"513": {
					"message": "Message.InterfaceFailedWhileDeleteDHCPRelay"
				},
				"546": {
					"message": "Message.InterfaceInvalidMACAddress"
				},
				"503": {
					"message": "Message.InterfaceGatewayAlreadyExists"
				},
				"547": {
					"message": "Message.InterfaceMACConflictWithSystemMAC"
				},
				"548": {
					"message": "Message.InterfaceMACConflictwithReservedHAMAC"
				},
				"505": {
					"message": "Message.InterfaceGWBasedRuleExist"
				},
				"549": {
					"message": "Message.InterfaceMACChangeFailedDueToPPPOE"
				},
				"507": {
					"message": "Message.VLANIntBasedVHExist"
				},
				"508": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				}
			}
		}
	},
	"captiveportal": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WebClientPortalUpdated",
					"url": "/identity/WebAuthenticationEdit.html?mode=300&operation=324"
				},
				"500": {
					"message": "Message.WebClientPortalFailed"
				}
			}
		}
	},
	"fqdnhostgroup": {
		"uniqueName": "hostgroupname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.FQDNHGDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=302&mode=301"
				},
				"500": {
					"message": "Message.FQDNHGDeleteFailed"
				},
				"504": {
					"message": "Message.FQDNHGFirewallRuleExists"
				},
				"505": {
					"message": "Message.HostGroupSelectedInATP"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.HGAddSuccess"
				},
				"500": {
					"message": "Message.HGAddFail"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.HGUpdateSuccess"
				},
				"202": {
					"message": "Message.HGUpdateWithRename"
				},
				"500": {
					"message": "Message.HGUpdateFail"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				}
			}
		}
	},
	"wirelessnetworks": {
		"uniqueName": "ap_interfacename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.WPNetworkDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=512&mode=301&operation=806"
				},
				"500": {
					"message": "Message.WPNetworkDeleteFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.WPNetworkSuccess"
				},
				"541": {
					"message": "Message.WPNetworkFail"
				},
				"542": {
					"message": "Message.WPNetworkInterfaceIPExists"
				},
				"500": {
					"message": "Message.WPNetworkFail"
				},
				"544": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				},
				"545": {
					"message": "Message.WPNetworkFail"
				},
				"548": {
					"message": "Message.InterfaceReservedName"
				},
				"502": {
					"message": "Message.WPNetworkExists"
				},
				"503": {
					"message": "Message.WPNetworkInterfaceExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.WPNetworkUpdateSuccessfully",
					"url": "/includes/ManagePage.jsp?datagridid=512&mode=301&operation=806"
				},
				"541": {
					"message": "Message.WPNetworkUpdateFail"
				},
				"542": {
					"message": "Message.WPNetworkInterfaceIPExistsForUpdate"
				},
				"543": {
					"message": "Message.WPNetworkUpdateFail"
				},
				"500": {
					"message": "Message.WPNetworkUpdateFail"
				},
				"544": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				},
				"548": {
					"message": "Message.InterfaceReservedName"
				},
				"545": {
					"message": "Message.WPNetworkUpdateFail"
				},
				"503": {
					"message": "Message.WPNetworkInterfaceExistsForUpdate"
				}
			}
		}
	},
	"routeradvertisement": {
		"uniqueName": "AdvInterface",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.SLAACDeleteSuccess"
				},
				"500": {
					"message": "Message.SLAACDeleteUnsuccess"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.SLAACADDEditSuccess"
				},
				"541": {
					"message": "Message.DHCPInterfaceNotConfRA"
				},
				"500": {
					"message": "Message.SLAACADDEditUnsuccess"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.SLAACADDEditSuccess"
				},
				"541": {
					"message": "Message.DHCPInterfaceNotConfRA"
				},
				"500": {
					"message": "Message.SLAACADDEditUnsuccess"
				}
			}
		}
	},
	"imfiletransferrule": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IMRule2DeleteSuccess"
				},
				"500": {
					"message": "Message.IMRule2DeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IMRule2AddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=205&mode=301&operation=96"
				},
				"500": {
					"message": "Message.IMRule2AddFailed"
				},
				"502": {
					"message": "Message.IMRuleRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IMRule2UpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=205&mode=301&operation=96"
				},
				"500": {
					"message": "Message.IMRule2UpdateFailed"
				},
				"502": {
					"message": "Message.IMRuleRecordExists"
				}
			}
		}
	},
	"wirelessglobalsetting": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WPGlobalSettingsSuccessfully",
					"url": "/wirelessProtection/WPGlobalSetting.html?mode=300&operation=805"
				},
				"500": {
					"message": "Message.WPGlobalSettingsFail"
				}
			}
		}
	},
	"vpnconnectionactivation_deactivation": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.L2TPSuccessDeactive"
				},
				"500": {
					"message": "Message.L2TPFailedDeactive"
				}
			}
		}
	},
	"iptunnel": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IPTunnelDeleteSucc",
					"url": "/includes/ManagePage.jsp?datagridid=215&mode=301&operation=430"
				},
				"500": {
					"message": "Message.IPTunnelDeleteFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IPTunnelAddSuccess"
				},
				"500": {
					"message": "Message.IPTunnelAddFail"
				},
				"502": {
					"message": "Message.IPTunnelRecordExists"
				},
				"503": {
					"message": "Message.IPTunnelSameLocalRemoteAdd"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IPTunnelUpdateSucc",
					"url": "/includes/ManagePage.jsp?datagridid=215&mode=301&operation=430"
				},
				"500": {
					"message": "Message.IPTunnelUpdateFail"
				},
				"503": {
					"message": "Message.IPTunnelSameLocalRemoteUpdate"
				}
			}
		}
	},
	"myaccountchangepassword": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AdminPasswdSucc"
				},
				"500": {
					"message": "Message.AdminPasswdWrongPasswd"
				},
				"507": {
					"message": "Message.AdminPasswdWrongPasswd"
				}
			}
		}
	},
	"myaccountdisconnectliveuser": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.LiveUserSuccessDisconnect"
				},
				"500": {
					"message": "Message.LiveUserFailDisconnect"
				}
			}
		}
	},
	"icapserver": {
		"uniqueName": "servername",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ICAPServerDeleteSuccess"
				},
				"500": {
					"message": "Message.ICAPServerDeleteFail"
				},
				"504": {
					"message": "Message.ICAPServerDeleteBinded"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ICAPServerAddSuccess"
				},
				"500": {
					"message": "Message.ICAPServerAddFail"
				},
				"502": {
					"message": "Message.ICAPServerConfExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ICAPServerUpdateSuccess"
				},
				"211": {
					"message": "Message.ICAPServerConf"
				},
				"500": {
					"message": "Message.ICAPServerUpdateFail"
				},
				"502": {
					"message": "Message.ICAPUniqueServer"
				}
			}
		}
	},
	"natpolicy": {
		"uniqueName": "natprofilename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.NATDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=2&mode=301"
				},
				"500": {
					"message": "Message.NATDeleteFailed"
				},
				"504": {
					"message": "Message.NATFirewallRuleExists"
				},
				"505": {
					"message": "Message.NATPolicyGatewayExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.NATAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=2&mode=301&operation=303"
				},
				"500": {
					"message": "Message.NATAddFailed"
				},
				"522": {
					"message": "Message.MaxLimitReached"
				},
				"502": {
					"message": "Message.NATRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.NATUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=2&mode=301&operation=303"
				},
				"500": {
					"message": "Message.NATUpdateFailed"
				}
			}
		}
	},
	"applicationclassificationassignment": {
		"uniqueName": "name",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AppClassificationUpdateSuccess"
				},
				"500": {
					"message": "Message.AppClassificationUpdateFail"
				}
			}
		}
	},
	"applicationfilterpolicy": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.AFPDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=71&mode=301"
				},
				"500": {
					"message": "Message.AFPDeleteFail",
					"url": "/includes/ManagePage.jsp?datagridid=71&mode=301"
				},
				"504": {
					"message": "Message.AFPForeignKeyExists",
					"url": "/includes/ManagePage.jsp?datagridid=71&mode=301"
				},
				"505": {
					"message": "Message.AFPForeignKeyFWExists",
					"url": "/includes/ManagePage.jsp?datagridid=71&mode=301"
				}
			},
			"REORDER": {
				"200": {
					"message": "Message.AFPUpdateRuleOrderSuccess",
					"url": "/webpages/appfilter/AppFilterPolicyEdit.jsp"
				},
				"500": {
					"message": "Message.AFPUpdateRuleOrderFail",
					"url": "/webpages/appfilter/AppFilterPolicyEdit.jsp"
				}
			},
			"ADD": {

			},
			"UPDATE": {
				"200": {
					"message": "Message.AFPUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=71&mode=301&operation=40"
				},
				"500": {
					"message": "Message.AFPUpdateFail"
				},
				"502": {
					"message": "Message.AFPRecordExists"
				}
			}
		}
	},
	"ctassettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "OEM.STASSettingSuccessMsg",
					"url": "/identity/STAS.jsp?mode=200"
				},
				"500": {
					"message": "OEM.STASSettingFailMsg"
				}
			}
		}
	},
	"sourceroute": {
		"uniqueName": "network",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.SrcRouteAddSuccess",
					"url": "/network/ExplicitSourceRouteManage.jsp"
				},
				"500": {
					"message": "Message.SrcRouteAddFailed"
				},
				"502": {
					"message": "Message.SrcRouteRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.SrcRouteDeleteSuccess",
					"url": "/network/ExplicitSourceRouteManage.jsp"
				},
				"500": {
					"message": "Message.SrcRouteDeleteFailed"
				}
			}
		}
	},
	"schedule": {
		"uniqueName": "schedulename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ScheduleDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=11&mode=301"
				},
				"500": {
					"message": "Message.ScheduleDeleteFailed"
				},
				"503": {
					"message": "Message.ScheduleForeignKeyExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ScheduleAddSuccess"
				},
				"500": {
					"message": "Message.ScheduleAddFailed"
				},
				"502": {
					"message": "Message.ScheduleRecordExists"
				},
				"503": {
					"message": "Message.ScheduleSchedule_Overlapping"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ScheduleUpdateSuccess"
				},
				"202": {
					"message": "Message.ScheduleUpdateWithRename"
				},
				"500": {
					"message": "Message.ScheduleUpdateFailed"
				},
				"502": {
					"message": "Message.ScheduleUpdateRecordExists"
				},
				"503": {
					"message": "Message.ScheduleSchedule_Overlapping"
				}
			}
		}
	},
	"certificateauthority": {
		"uniqueName": "uploadcaname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.CAManageDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=21&mode=301"
				},
				"500": {
					"message": "Message.CAManageDeleteFailed"
				},
				"504": {
					"message": "Message.CAManageDeleteFailCAisUsed"
				},
				"505": {
					"message": "Message.CAManageDeleteFailCAisUsedSMTP"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.CAManageUploadedSuccessFully",
					"url": "/includes/ManagePage.jsp?datagridid=21&mode=301&operation=308"
				},
				"541": {
					"message": "Message.CAEditUploadedFileCurrupted"
				},
				"510": {
					"message": "Message.CAKeyNotProper"
				},
				"500": {
					"message": "Message.CAEditUploadCAFailed"
				},
				"502": {
					"message": "Message.CAEditRecordAlreadyExists"
				},
				"503": {
					"message": "Message.CACertAlreadyExist"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.CAManageUpdatedSuccessFully"
				},
				"541": {
					"message": "Message.CAEditUploadedFileCurrupted"
				},
				"510": {
					"message": "Message.CAKeyNotProper"
				},
				"500": {
					"message": "Message.CAEditUpdateFailed"
				},
				"502": {
					"message": "Message.CAEditRecordAlreadyExists"
				},
				"503": {
					"message": "Message.CACertAlreadyExist"
				},
				"504": {
					"message": "Message.CAKeyMustSupport"
				}
			}
		}
	},
	"dnshostentry": {
		"uniqueName": "fqdn",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.DNSStaticDelSuccess"
				},
				"541": {
					"message": "Message.DNSStaticDelFailSpe"
				},
				"500": {
					"message": "Message.DNSStaticDelFail"
				},
				"502": {
					"message": "Message.DNSStaticRecordNotExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DNSStaticAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=180&mode=301&operation=144"
				},
				"541": {
					"message": "Message.DNSStaticAddFailSpe"
				},
				"510": {
					"message": "Message.DNSStaticAddFailMaximum"
				},
				"500": {
					"message": "Message.DNSStaticAddFail"
				},
				"502": {
					"message": "Message.DNSStaticRecordExists"
				},
				"503": {
					"message": "Message.DNSStaticFailReverseResolve"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.DNSStaticUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=180&mode=301&operation=144"
				},
				"500": {
					"message": "Message.DNSStaticUpdateFail"
				},
				"502": {
					"message": "Message.DNSStaticUpdateFailSpe"
				},
				"503": {
					"message": "Message.DNSStaticFailReverseResolve"
				}
			}
		}
	},
	"ipsruleadd": {
		"uniqueName": "rulename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IPSDeleteDetailSuccess"
				},
				"500": {
					"message": "IPSDeleteDetailFail"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IPSDetailSuccess"
				},
				"500": {
					"message": "Message.IPSDetailFail"
				},
				"502": {
					"message": "Message.IPSPolicyRecordExists"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IPSDetailUpdateSuccess"
				},
				"500": {
					"message": "Message.IPSDetailUpdateFail"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				}
			}
		}
	},
	"gateway": {
		"uniqueName": "gatewayname",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.GatewayUpdateSuccess",
					"url": "/network/GatewayManage.jsp"
				},
				"202": {
					"message": "Message.GatewayUpdateWithRename",
					"url": "/network/GatewayManage.jsp"
				},
				"500": {
					"message": "Message.GatewayUpdateFail"
				},
				"502": {
					"message": "Message.InterfaceGatewayAlreadyExists"
				}
			}
		}
	},
	"failovergroupconnection": {
		"uniqueName": "connectiongroupname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IPSecGrpGroupDeleteSuccess"
				},
				"500": {
					"message": "Message.IPSecGrpGroupDeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IPSecGrpGroupInserted",
					"url": "/includes/ManagePage.jsp?datagridid=501&mode=301&operation=221"
				},
				"500": {
					"message": "Message.ConnGrpNotInserted"
				},
				"502": {
					"message": "Message.ConnGrpRecordExist"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IPSecGrpGroupUpdated",
					"url": "/includes/ManagePage.jsp?datagridid=501&mode=301&operation=221"
				},
				"500": {
					"message": "Message.ConnGrpNotUpdated"
				},
				"502": {
					"message": "Message.ConnGrpRecordExist"
				}
			}
		}
	},
	"servicegroup": {
		"uniqueName": "servicegroupname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ServiceGrpDeleteSuccess"
				},
				"500": {
					"message": "Message.ServiceGrpDeleteFailed"
				},
				"504": {
					"message": "Message.ServiceGrpFirewallRuleExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ServiceGrpAddSuccess"
				},
				"500": {
					"message": "Message.ServiceGrpAddFail"
				},
				"502": {
					"message": "Message.ServiceGrpRecordExist"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ServiceGrpUpdateSuccess"
				},
				"202": {
					"message": "Message.ServiceGrpUpdateWithRename"
				},
				"500": {
					"message": "Message.ServiceGrpUpdateFail"
				},
				"502": {
					"message": "Message.ServiceGrpUpdateRecordExist"
				}
			}
		}
	},
	"iphostgroup": {
		"uniqueName": "hostgroupname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.HGDeleteSuccess"
				},
				"500": {
					"message": "Message.HGDeleteFailed"
				},
				"504": {
					"message": "Message.HGFirewallRuleExists"
				},
				"505": {
					"message": "Message.HostGroupSelectedInATP"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.HGAddSuccess"
				},
				"500": {
					"message": "Message.HGAddFail"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.HGUpdateSuccess"
				},
				"202": {
					"message": "Message.HGUpdateWithRename"
				},
				"500": {
					"message": "Message.HGUpdateFail"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				}
			}
		}
	},
	"webcategoryurlgroup":{
		"uniqueName": "urlgroupname",
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.URLgrpInsertedSuccessfully","url":"/includes/ManagePage.jsp?datagridid=173&mode=301&operation=" + Modes.URL_GROUP_DELETE},
				"500":{"message":"Message.URLgrpNotInserted"},
				"502":{"message":"Message.URLgrpRecordExist"}
			},
			"UPDATE":{
				"200":{"message":"Message.URLgrpUpdatedSuccessfully","url":"/includes/ManagePage.jsp?datagridid=173&mode=301&operation=" + Modes.URL_GROUP_DELETE},
				"500":{"message":"Message.URLgrpNotUpdated"}
			},
			"DELETE":{
				"200":{"message":"Message.URLgrpDeleteSuccess","url":"/includes/ManagePage.jsp?datagridid=173&mode=301&operation=" + Modes.URL_GROUP_DELETE},
				"500":{"message":"Message.URLgrpDeleteFailed"},
				"504":{"message":"Message.URLgrpChildRecordExists"}
			}
		}
	},
	"failovergroupconnectionactivate_deactivate": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.IPSecGrpGroupSuccessDeactive"
				},
				"500": {
					"message": "Message.IPSecGrpGroupFailedDeactive"
				}
			}
		}
	},
	"httpscanningrules": {
		"uniqueName": "rulename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.HTTPRuleSuccessDelete"
				},
				"500": {
					"message": "Message.HTTPRuleFailedDelete"
				},
				"505": {
					"message": "Message.HTTPRuleCantDelete"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.HTTPRuleAddSuccess"
				},
				"500": {
					"message": "Message.HTTPRuleAddFail"
				},
				"502": {
					"message": "Message.HTTPRuleRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.HTTPRuleUpdateSuccess"
				},
				"500": {
					"message": "Message.HTTPRuleUpdateFailMessage"
				}
			}
		}
	},
	"antispamquarantinearea": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Language.ReleaseSuccMsg1",
					"url": "/antispam/CorporateASQuarantineArea.jsp"
				},
				"541": {
					"message": "Message.FailToConnectMailServer"
				},
				"542": {
					"message": "Message.SMTPServerFailed"
				},
				"543": {
					"message": "Message.SMTPPasswordMismatch"
				},
				"500": {
					"message": "Language.ReleaseFailMsg"
				},
				"544": {
					"message": "Message.SMTPAuthMismatch"
				},
				"545": {
					"message": "Message.ConnectSecurityMethodNotSupported"
				},
				"546": {
					"message": "Message.MailServerRefuseCommunicate"
				}
			}
		}
	},
	"bridgestaticentry": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.BridgeStaticEntrySuccess"
				},
				"500": {
					"message": "Message.BridgeStaticEntryFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.BridgeStaticEntrySuccess"
				},
				"500": {
					"message": "Message.BridgeStaticEntryFailed"
				}
			}
		}
	},
	"webadminsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WebAdminSettingSuccess"
				},
				"541": {
					"message": "Message.AdminSettingsHTTPPortConflict"
				},
				"542": {
					"message": "Message.AdminSettingsHTTPSPortConflict"
				},
				"500": {
					"message": "Message.WebAdminSettingFail"
				}
			}
		}
	},
	"signatureautoupdates": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.UpdatesApplySucc"
				},
				"500": {
					"message": "Message.UpdatesApplyFail"
				}
			}
		}
	},
	"sslvpnportal": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.UserPortalUpdated"
				},
				"500": {
					"message": "Message.UserPortalFailed"
				}
			}
		}
	},
	"dns": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.DNSDNS_Configuration_Success_",
					"url": "/network/DNSManage.html?mode=300&operation=118"
				},
				"500": {
					"message": "Message.DNSDNS_Configuration_Fail_"
				}
			}
		}
	},
	"ipspolicy": {
		"uniqueName": "idppolicyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IPSpolicyDeleteSuccess",
					"url": "/dashboard/IpsPolicy.html?mode=300&operation=" + Modes.IPS_SWITCH_STATUS_NOTIFY
				},
				"500": {
					"message": "Message.IPSpolicyDeleteFailed"
				},
				"503": {
					"message": "Message.IPSpolicyDeleteFailedChildExists"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IPSpolicyAddSuccess",
					"url": "/dashboard/IpsPolicy.html?mode=300&operation=" + Modes.IPS_SWITCH_STATUS_NOTIFY
				},
				"500": {
					"message": "Message.IPSpolicyAddFailed"
				},
				"522": {
					"message": "Message.IPSpolicyMaxLimit"
				},
				"502": {
					"message": "Message.IPSpolicyRecordExists"
				},
				"503": {
					"message": "Message.IPSPolicySwitchOff"
				},
				"505": {
					"message": "Message.IPSpolicyEngineRestartFail"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IPSpolicyRuleUpdateSuccess"
				},
				"500": {
					"message": "Message.IPSpolicyRuleUpdateFailed"
				},
				"503": {
					"message": "Message.IPSPolicySwitchOff"
				},
				"506": {
					"message": "Message.CustomSignatureIpsOff"
				}
			}
		}
	},
	"surfingquotapolicy": {
		"uniqueName": "policyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.SQPDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=8&mode=301&operation=304"
				},
				"500": {
					"message": "Message.SQPDeleteFailed"
				},
				"504": {
					"message": "Message.SQPFirewallRuleExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.SQPAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=8&mode=301"
				},
				"500": {
					"message": "Message.SQPAddFailed"
				},
				"502": {
					"message": "Message.SQPRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.SQPUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=8&mode=301"
				},
				"500": {
					"message": "Message.SQPUpdateFailed"
				},
				"502": {
					"message": "Message.SQPRecordExists"
				}
			}
		}
	},
	"decryptionprofile": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.DecryptionProfileDeleteSuccess"
				},
				"500": {
					"message": "Message.DecryptionProfileDeleteFailed"
				},
				"504": {
					"message": "Message.DecryptionProfileExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DecryptionProfileAddSuccess"
				},
				"500": {
					"message": "Message.DecryptionProfileAddFailed"
				},
				"502": {
					"message": "Message.DecryptionProfileRecordExists"
				},
				"522": {
					"message": "Message.DecryptionProfilesLimit"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.DecryptionProfileUpdateSuccess"
				},
				"500": {
					"message": "Message.DecryptionProfileUpdateFailed"
				},
				"502": {
					"message": "Message.DecryptionProfileUpdateRecordExists"
				}
			}
		}
	},
	"tlsRule": {
		"uniqueName": "name",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.TlsRuleAddSuccess"
				},
				"500": {
					"message": "Message.TlsRuleAddFailed"
				},
				"502": {
					"message": "Message.TlsRuleRecordExists"
				},
				"555": {
					"message": "Message.TlsRuleServiceNotSupported"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.TlsRuleUpdateSuccess"
				},
				"500": {
					"message": "Message.TlsRuleUpdateFailed"
				},
				"502": {
					"message": "Message.TlsRuleUpdateRecordExists"
				},
				"555": {
					"message": "Message.TlsRuleUpdateServiceNotSupported"
				}
			}
		}
	},
	"tlsSettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.TlsSettingsUpdateSuccess"
				},
				"500": {
					"message": "Message.TlsSettingsUpdateFailed"
				}
			}
		}
	},
    "spoofpreventionsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.SpoofUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=170&mode=301&operation=249"
				},
				"500": {
					"message": "Message.SpoofUpdateFailed"
				}
			}
		}
	},
	"wirelessaccesspoints": {
		"uniqueName": "id",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.WPAccessPointDeleteSuccess",
					"url": "/wirelessProtection/WPAccessPointManage.jsp"
				},
				"500": {
					"message": "Message.WPAccessPointDeleteFail"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.WPAPkUpdateSuccessfully",
					"url": "/wirelessProtection/WPAccessPointManage.jsp"
				},
				"541": {
					"message": "Message.WPAPUpdateFail"
				},
				"542": {
					"message": "Message.WPAccessPointMesh"
				},
				"543": {
					"message": "Message.WPAPUpdateFail"
				},
				"500": {
					"message": "Message.WPAPUpdateFail"
				},
				"544": {
					"message": "Message.WPAPUpdateFail"
				},
				"523": {
					"message": "Message.WPNetworkGroupMax"
				},
				"545": {
					"message": "Message.WPAPUpdateFail"
				},
				"524": {
					"message": "Message.WPAccessPointMax"
				},
				"216": {
					"message": "Message.WPAPkUpdateSuccessfully",
					"url": "/wirelessProtection/WPAccessPointManage.jsp"
				}
			},
			"ADD": {

			}
		}
	},
	"sslvpnauthentication": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.SSLVPNAuthSuccess",
					"url": "/identity/VPNAuthSetting.html?mode=300&operation=552"
				},
				"500": {
					"message": "Message.SSLVPNAuthFail"
				}
			}
		}
	},
	"iptunnelroute": {
		"uniqueName": "",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.IPTunnelUnicastAddSucc"
				},
				"500": {
					"message": "Message.IPTunnelUnicastAddFail"
				},
				"502": {
					"message": "Message.IPTunnelUnicastAddFail"
				}
			}
		}
	},
	"usergroup": {
		"uniqueName": "groupname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.UserGroupDeleteSuccess"
				},
				"541": {
					"message": "Message.UserGroupIMRuleExists"
				},
				"500": {
					"message": "Message.UserGroupDeleteFailed"
				},
				"504": {
					"message": "Message.UserGroupL2TPUsersExists"
				},
				"505": {
					"message": "Message.UserGroupXAUTHUsersExists"
				},
				"506": {
					"message": "Message.UserGroupExternalAuthSelected"
				},
				"507": {
					"message": "Message.UserGroupUsersExists"
				},
				"508": {
					"message": "Message.UserGroupFirewallRuleExists"
				},
				"509": {
					"message": "Message.UserGroupGuestUserDefGrp"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.UserGroupAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=201&mode=301&operation=286"
				},
				"500": {
					"message": "Message.UserGroupAddFail"
				},
				"502": {
					"message": "Message.UserGroupRecordExists"
				},
				"503": {
					"message": "Message.UserGroupDuplicateIPInLoginRestriction"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.UserGroupUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=201&mode=301&operation=286"
				},
				"500": {
					"message": "Message.UserGroupUpdateFail"
				},
				"502": {
					"message": "Message.UserGroupRecordExists"
				},
				"503": {
					"message": "Message.UserGroupDuplicateIPInLoginRestriction"
				}
			}
		}
	},
	"dhcpserver": {
		"uniqueName": "dhcpname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.DHCPServerDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=53&mode=301&operation=114"
				},
				"500": {
					"message": "Message.DHCPServerDeleteFailed"
				},
				"505": {
					"message": "Message.DHCPServerChildExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DHCPServerAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=53&mode=301&operation=114"
				},
				"541": {
					"message": "Message.DHCPServerStacicLeaseEntryNotUnique"
				},
				"542": {
					"message": "Message.DHCPServerNotConfWANSubnet"
				},
				"543": {
					"message": "Message.DHCPServerDHCPServerIPCanNotBeInterfaceIP"
				},
				"500": {
					"message": "Message.DHCPServerAddFailed"
				},
				"544": {
					"message": "Message.DHCPServerLease_IP_Not_Fall_In_Range"
				},
				"545": {
					"message": "Message.DHCPServerLease_IP_Already_Assigned"
				},
				"546": {
					"message": "Message.DHCPServerGateway_IP_Not_Fall_In_Range"
				},
				"502": {
					"message": "Message.DHCPServerRecordAlreadyExists"
				},
				"547": {
					"message": "Message.DHCPServerCanNotBeAuxiliaryInterfaceIP"
				},
				"503": {
					"message": "Language.DHCPRelayAlreadyConfiguredIPv4"
				},
				"548": {
					"message": "Message.DHCPv4ServerNotConf"
				},
				"505": {
					"message": "Message.DHCPServerChildExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.DHCPServerEditSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=53&mode=301&operation=114"
				},
				"541": {
					"message": "Message.DHCPServerStacicLeaseEntryNotUnique"
				},
				"542": {
					"message": "Message.DHCPServerNotConfWANSubnet"
				},
				"543": {
					"message": "Message.DHCPServerDHCPServerIPCanNotBeInterfaceIP"
				},
				"500": {
					"message": "Message.DHCPServerEditFailed"
				},
				"544": {
					"message": "Message.DHCPServerLease_IP_Not_Fall_In_Range"
				},
				"545": {
					"message": "Message.DHCPServerLease_IP_Already_Assigned"
				},
				"546": {
					"message": "Message.DHCPServerGateway_IP_Not_Fall_In_Range"
				},
				"547": {
					"message": "Message.DHCPServerCanNotBeAuxiliaryInterfaceIP"
				},
				"548": {
					"message": "Message.DHCPv4ServerNotConf"
				},
				"505": {
					"message": "Message.DHCPServerChildExists"
				}
			}
		}
	},
	"wwan": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WWANSettingSavedSuccessful",
					"url": "/network/WirelessWANStatus.html?mode=300&page=1&operation=185"
				},
				"201": {
					"message": "Message.WWANConnectedSuccessfully",
					"url": "/network/WirelessWANStatus.html?mode=300&page=1&operation=185"
				},
				"202": {
					"message": "Message.WWANDisconnectedSuccessfully",
					"url": "/network/WirelessWANStatus.html?mode=300&page=1&operation=185"
				},
				"510": {
					"message": "Message.ModemNotConnect"
				},
				"521": {
					"message": "Message.InterfaceInvalidMACAddress"
				},
				"500": {
					"message": "Message.WWANSettingSavedFailed"
				},
				"522": {
					"message": "Message.InterfaceMACConflictWithSystemMAC"
				},
				"523": {
					"message": "Message.InterfaceMACConflictwithReservedHAMAC"
				},
				"502": {
					"message": "Message.WWANDeviceNotFound"
				},
				"524": {
					"message": "Message.InterfaceGatewayAlreadyExists"
				},
				"504": {
					"message": "Message.WWANConnectFailed"
				},
				"505": {
					"message": "Message.WWANDisconnectFailed"
				},
				"528": {
					"message": "Message.WWANDeviceNotSupported"
				},
				"506": {
					"message": "Message.ConfSuccessModemFail"
				},
				"507": {
					"message": "Message.DialupMethodNotSupport"
				},
				"508": {
					"message": "Message.NetworkAdapterNotSupport"
				},
				"509": {
					"message": "Message.ModemPortNotResponding"
				}
			}
		}
	},
	"addressgroup": {
		"uniqueName": "listname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.AddrGrpDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=203&mode=301&operation=1726"
				},
				"500": {
					"message": "Message.AddrGrpDeleteFail"
				},
				"504": {
					"message": "Message.AddrGrpForeignKeyExists"
				},
				"505": {
					"message": "Message.AddrGrpForeignKeyExists"
				},
				"506": {
					"message": "Message.AddrGrpForeignKeyExists"
				},
				"507": {
					"message": "Message.AddrGrpEmailArcKeyExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.AddrGrpAddSuccess"
				},
				"541": {
					"message": "Message.AddrGrpImportFailed"
				},
				"542": {
					"message": "Message.AddrGrpEmptyFile1"
				},
				"543": {
					"message": "Message.AddrGrpSomeEmailNotImported"
				},
				"500": {
					"message": "Message.AddrGrpAddFail"
				},
				"502": {
					"message": "Message.AddrGrpRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.AddrGrpUpdateSuccess"
				},
				"500": {
					"message": "Message.AddrGrpUpdateFail"
				}
			}
		}
	},
	"updateunknownnetworkstatus": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.UnknownNetworkStatusSuccess"
				},
				"500": {
					"message": "Message.UnknownNetworkStatusFailed"
				}
			}
		}
	},
	"foureyeauthenticationsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.FourEyeAuthUpdateSuccess"
				},
				"541": {
					"message": "Message.FourEyeAuthAuthorizationFailed"
				},
				"542": {
					"message": "Message.FourEyeAuthAuthorizationFailedDueToIP"
				},
				"543": {
					"message": "Message.FourEyeAuthAuthFailedDueToSchedule"
				},
				"500": {
					"message": "Message.FourEyeAuthUpdateFailed"
				}
			}
		}
	},
	"datamanagement": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "configdatabase.Setting_Applied_Successfully"
				},
				"500": {
					"message": "configdatabase.Setting_Not_Applied_Successfully"
				}
			}
		}
	},
	"syslogservers": {
		"uniqueName": "syslogconfname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.SyslogDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=202&mode=301"
				},
				"500": {
					"message": "Message.SyslogDeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.SyslogAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=202&mode=301&operation=291"
				},
				"541": {
					"message": "Message.SysServerReservedName"
				},
				"500": {
					"message": "Message.SyslogAddFailed"
				},
				"522": {
					"message": "Message.SyslogMaxLimit"
				},
				"502": {
					"message": "Message.SyslogRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.SyslogUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=202&mode=301&operation=291"
				},
				"500": {
					"message": "Message.SyslogUpdateFailed"
				},
				"502": {
					"message": "Message.SyslogRecordExists"
				}
			}
		}
	},
	"vpnprofile": {
		"uniqueName": "policyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.VPNPolicyDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=23&mode=301"
				},
				"500": {
					"message": "Message.VPNPolicyDeleteFailed"
				},
				"504": {
					"message": "Message.VPNPolicyRelationExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.VPNPolicyInserted",
					"url": "/includes/ManagePage.jsp?datagridid=23&mode=301&operation=208"
				},
				"500": {
					"message": "Message.VPNPolicyNotInserted"
				},
				"502": {
					"message": "Message.VPNPolicyRecordExist"
                },
                "503": {
                    "message": "Message.VPNPolicyPartialBlank"
                },
                "504": {
                    "message": "Message.VPNPolicySecondBlank"
                },
                "505": {
                    "message": "Message.VPNPolicyEqualAlgo"
                },
                "506": {
                    "message": "Message.VPNPolicyKeyLife"
                },
                "507": {
                    "message": "Message.VPNPolicyDpdKeylife"
                },
                "508": {
                    "message": "Message.VPNPolicyKeyMargin"
                },
                "509": {
                    "message": "Message.VPNPolicyKeyFuzz"
                },
                "510": {
                    "message": "Message.VPNPolicyDpdTimeout"
                },
                "511": {
                    "message": "Message.VPNPolicyDupAeadAlgo"
                }
            },
			"UPDATE": {
				"200": {
					"message": "Message.VPNPolicyUpdated",
					"url": "/includes/ManagePage.jsp?datagridid=23&mode=301&operation=208"
				},
				"500": {
					"message": "Message.VPNPolicyNotUpdated"
				},
				"203": {
					"message": "Message.VPNPolicyRewriteConnectFail"
				},
				"502": {
					"message": "Message.VPNPolicyRecordExist"
				},
                "503": {
                    "message": "Message.VPNPolicyPartialBlank"
                },
                "504": {
                    "message": "Message.VPNPolicySecondBlank"
                },
                "505": {
                    "message": "Message.VPNPolicyEqualAlgo"
                },
                "506": {
                    "message": "Message.VPNPolicyKeyLife"
                },
                "507": {
                    "message": "Message.VPNPolicyDpdKeylife"
                },
                "508": {
                    "message": "Message.VPNPolicyKeyMargin"
                },
                "509": {
                    "message": "Message.VPNPolicyKeyFuzz"
                },
                "510": {
                    "message": "Message.VPNPolicyDpdTimeout"
                },
                "511": {
                    "message": "Message.VPNPolicyDupAeadAlgo"
                }
			}
		}
	},
	"rogueapscanconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.RogueAPScanUpdateScanSettingsSuccess"
				},
				"500": {
					"message": "Message.RogueAPScanUpdateScanSettingsFailed"
				}
			}
		}
	},
	"guestusersgeneralsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.SMSAuthSettingsAddSuccess",
					"url": "/identity/GuestUserSettings.html?mode=300&operation=951"
				},
				"500": {
					"message": "Message.SMSAuthSettingsAddFailed"
				}
			}
		}
	},
	"wafglobalsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WAFGlobalSettingSuccess",
					"url": "/waf/WebAppFirewallSettings.html?mode=300&operation=198"
				},
				"500": {
					"message": "Message.WAFGlobalSettingFail"
				}
			}
		}
	},
	"waf_slow_http": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WAFSlowHTTPSettingSuccess",
				},
				"500": {
					"message": "Message.WAFSlowHTTPSettingFail"
				}
			}
		}
	},
	"waf_tls": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WAFTLSVersionSettingsSuccess",
				},
				"500": {
					"message": "Message.WAFTLSVersionSettingsFail"
				},
				"538": {
					"message": "Message.WAFTLSVersionSettingsProtocolFail"
				},
				"539": {
					"message": "Message.WAFTLSVersionSettingsCiphersuiteFail"
				},
				"540": {
					"message": "Message.WAFTLSVersionSettings13SpecificCiphersuiteFail"
				}
			}
		}
	},
	"vlan": {
		"uniqueName": "txtInterface",
		"statusMappings": {
			"ADD": {
				"550": {
					"message": "Language.HAIsConfigured"
				},
				"200": {
					"message": "Message.InterfaceAddVLANSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"510": {
					"message": "Message.VLANZoneRequired"
				},
				"500": {
					"message": "Message.VLANAddFailed"
				},
				"502": {
					"message": "Message.VLANRecordExists"
				},
				"503": {
					"message": "Message.InterfaceGatewayAlreadyExists "
				},
				"508": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				}
			},
			"UPDATE": {
				"550": {
					"message": "Language.HAIsConfigured"
				},
				"200": {
					"message": "Message.VLANUpdateSuccessMessage",
					"url": "/network/InterfaceManage.html"
				},
				"520": {
					"message": "Message.VLANFailedToUnbindVLANRunConfig"
				},
				"500": {
					"message": "Message.VLANUpdateFail"
				},
				"511": {
					"message": "Message.VLANFailedWhileUnbinding"
				},
				"512": {
					"message": "Message.VLANFailedWhileDeleteDHCPServer"
				},
				"502": {
					"message": "Message.VLANRecordExists"
				},
				"513": {
					"message": "Message.VLANFailedWhileDeleteDHCPRelay"
				},
				"503": {
					"message": "Message.InterfaceGatewayAlreadyExists"
				},
				"514": {
					"message": "Message.VLANFailedWhileDeletePPPoE"
				},
				"515": {
					"message": "Message.VLANFailedWhileDeleteGateway"
				},
				"505": {
					"message": "Message.VLANGWBasedRuleExist"
				},
				"516": {
					"message": "Message.VLANFailedToUnbindVLAN"
				},
				"507": {
					"message": "Message.VLANIntBasedVHExist"
				},
				"508": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				}
			}
		}
	},
	"ioswebclientsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.IOSSettingSuccessMsg",
					"url": "/identity/FirewallAuthSetting.html?mode=300&operation=553"
				},
				"500": {
					"message": "Message.IOSSettingFailMsg"
				}
			}
		}
	},
	"webproxyconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WebProxyApplySuccess",
					"url": "/system/WebProxyManage.html?mode=300&operation=258"
				},
				"500": {
					"message": "Message.WebProxyApplyFailed"
				},
				"504": {
					"message": "Message.WebProxyCachePortInUse"
				}
			}
		}
	},
	"sslvpnbookmarkgroup": {
		"uniqueName": "bookmarkgroupname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.BookMarkGroupDeleteSuccess",
					"url": "/sslvpn/ClientlessRemoteAccess.html"
				},
				"500": {
					"message": "Message.BookMarkGroupDeleteFailed"
				},
				"504": {
					"message": "Message.BookMarkGroupDeleteRelationExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.BookMarkGroupInserted",
					"url": "/sslvpn/ClientlessRemoteAccess.html"
				},
				"500": {
					"message": "Message.BookMarkGroupNotInserted"
				},
				"502": {
					"message": "Message.BookMarkGroupRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.BookMarkGroupUpdated",
					"url": "/sslvpn/ClientlessRemoteAccess.html"
				},
				"500": {
					"message": "Message.BookMarkGroupNotUpdated"
				},
				"502": {
					"message": "Message.BookMarkGroupRecordExists"
				}
			}
		}
	},
	"gatewayfailoverrule": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.DGDDeleteSuccess"
				},
				"500": {
					"message": "Message.DGDDeleteFailMessage"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DGDAddSuccess"
				},
				"500": {
					"message": "Message.DGDAddFail"
				}
			}
		}
	},
	"contentfilter": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.IMFilterEditSuccess"
				},
				"500": {
					"message": "Message.IMFilterEditFailed"
				}
			}
		}
	},
	"sslvpnsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.SSLVPNSettingSuccess"
				},
				"500": {
					"message": "Message.SSLVPNSettingFail"
				},
				"503": {
					"message": "Message.AdminSettingsSSLVPNPortConflict"
				},
				"541": {
					"message": "Message.FailedSSLVPNUpdation"
				},
				"542": {
					"message": "Message.SSLVPNConfNetConflictStart"
				},
				"543": {
					"message": "Message.SSLVPNConfNetConflictEnd"
				},
				"544": {
					"message": "Message.SSLVPNConfNotValidRange"
				},
				"545": {
					"message": "Message.InvalidPortRange"
				},
				"546": {
					"message": "Message.SSLVPNPortAlreadyInUse"
				}
			}
		}
	},
	"ldapserver": {
		"uniqueName": "srvname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.LDAPDeleteSuccess",
					"url": "/webpages/identity/UserAuthenticationSettings.jsp"
				},
				"500": {
					"message": "Message.LDAPDeleteFailed",
					"url": "/webpages/identity/UserAuthenticationSettings.jsp"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.LDAPAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=253&mode=301&operation=473"
				},
				"500": {
					"message": "Message.LDAPAddFail"
				},
				"502": {
					"message": "Message.LDAPRecordExist"
				},
				"503": {
					"message": "Message.LDAPRecordNameIPExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.LDAPUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=253&mode=301&operation=473"
				},
				"500": {
					"message": "Message.LDAPUpdateFail"
				},
				"503": {
					"message": "Message.LDAPUpdateFailDetail"
				}
			}
		}
	},
	"digestsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.CorpSpamDigestUpdateSucc"
				},
				"500": {
					"message": "Message.CorpSpamDigestUpdateFail"
				}
			}
		}
	},
	"wafwebserver": {
		"uniqueName": "webservername",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.WebServerDeleteSucc",
					"url": "/includes/ManagePage.jsp?datagridid=210&mode=301&operation=296"
				},
				"500": {
					"message": "Message.WebServerDeleteFail"
				},
				"504": {
					"message": "Message.WebServerFwRuleExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.WebServerAddSucc",
					"url": "/includes/ManagePage.jsp?datagridid=210&mode=301&operation=296"
				},
				"541": {
					"message": "Message.WAFCreate255PrivateIP"
				},
				"500": {
					"message": "Message.WebServerAddFail"
				},
				"503": {
					"message": "Message.IPHostRecordExists"
				},
				"504": {
					"message": "Message.WebServerSamePorts"
				},
				"505": {
					"message": "Message.WebServerSamePublicIP"
				},
				"506": {
					"message": "Message.WebServerIPConflict"
				},
				"507": {
					"message": "Message.WebServerPortConflict"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.WebServerUpdateSucc",
					"url": "/includes/ManagePage.jsp?datagridid=210&mode=301&operation=296"
				},
				"541": {
					"message": "Message.WAFUpdate255PrivateIP"
				},
				"500": {
					"message": "Message.WebServerUpdateFail"
				},
				"503": {
					"message": "Message.IPHostRecordExists"
				},
				"504": {
					"message": "Message.WebServerUpdateSamePorts"
				},
				"505": {
					"message": "Message.WebServerUpdateSamePublicIP"
				},
				"506": {
					"message": "Message.WebServerUpdateIPConflict"
				},
				"507": {
					"message": "Message.WebServerUpdatePortConflict"
				}
			}
		}
	},
	"webfilterpolicyrules": {
		"uniqueName": "webcategoryid",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.WFPDeleteSuccess"
				},
				"500": {
					"message": "Message.WFPUpdateFailed"
				},
				"203": {
					"message": "Message.WFPDeleteRunConfigFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.WFPAddRuleSuccess"
				},
				"500": {
					"message": "Message.WFPAddRuleFailed"
				},
				"502": {
					"message": "Message.WFPRuleExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.WFPEditRuleSuccess"
				},
				"500": {
					"message": "Message.WFPEditRuleFailed"
				},
				"511": {
					"message": "Message.WFPEditRuleFailed"
				}
			}
		}
	},
	"parentproxy": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.ParentProxyApplySuccess",
					"url": "/system/ParentProxyManage.html?mode=300&operation=411"
				},
				"500": {
					"message": "Message.ParentProxyApplyFailed"
				}
			}
		}
	},
	"bookmarkgroup": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "managebookmark.DelBookmarkGrpSuccessMsg"
				},
				"500": {
					"message": "managebookmark.DelBookmarkGrpfail"
				},
				"504": {
					"message": "managebookmark.DelBookmarkGrpFailMsg"
				}
			},
			"ADD": {
				"200": {
					"message": "addbookmarkgroup.AddBookmarkGrpSuccessMsg"
				},
				"502": {
					"message": "addbookmarkgroup.BookmarkGrpExistMsg"
				}
			}
		}
	},
	"defaultconfigurationlanguage": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.LanguageUpdateFail"
				},
				"531": {
					"message": "Message.ProcessUsingSameResources"
				},
				"500": {
					"message": "Message.LanguageUpdateSuccess"
				}
			}
		}
	},
	"ntlmsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.NTLMSettingSuccessMsg"
				},
				"500": {
					"message": "Message.NTLMSettingFailMsg"
				}
			}
		}
	},
	"servicesmanage": {
		"uniqueName": "servicename",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.ServiceActionSuccess",
					"url": "/system/ServerManage.html?mode=300&operation=257"
				},
				"500": {
					"message": "Message.ServiceActionFailed",
					"url": "/system/ServerManage.html?mode=300&operation=257"
				},
				"528": {
					"message": "Message.ServiceServiceUnregistered",
					"url": "/system/ServerManage.html?mode=300&operation=257"
				}
			}
		}
	},
	"pptpusers": {
		"uniqueName": "",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.PPTPUserAdded"
				},
				"500": {
					"message": "Message.UserAddedFailed"
				}
			}
		}
	},
	"fqdnhost": {
		"uniqueName": "hostname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.FQDNDeleteSuccess"
				},
				"541": {
					"message": "Message.HostSelectedInATP"
				},
				"500": {
					"message": "Message.FQDNDeleteFailed"
				},
				"504": {
					"message": "Message.FQDNFirewallRuleExists"
				},
				"505": {
					"message": "Message.HostVirtualHostExists"
				},
				"507": {
					"message": "Message.FQDNWebServerExists"
				},
				"509": {
					"message": "Message.FQDNHostgroupExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.FQDNAddSuccess"
				},
				"500": {
					"message": "Message.FQDNAddFailed"
				},
				"502": {
					"message": "Message.FQDNRecordExists"
				},
				"503": {
					"message": "Message.FQDNHostLimit"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.FQDNUpdateSuccess"
				},
				"202": {
					"message": "Message.FQDNUpdateWithRename"
				},
				"500": {
					"message": "Message.FQDNUpdateFailed"
				},
				"502": {
					"message": "Message.FQDNUpdateRecordExists"
				}
			}
		}
	},
	"bridgemember": {
		"uniqueName": "interfacename",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.InterfaceEditBridgeMemSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"500": {
					"message": "Message.InterfaceEditBridgeMemFailed"
				},
				"546": {
					"message": "Message.InterfaceInvalidMACAddress"
				},
				"547": {
					"message": "Message.InterfaceInvalidMACAddress"
				},
				"548": {
					"message": "Message.InterfaceMACConflictwithReservedHAMAC"
				}
			}
		}
	},
	"radiusserver": {
		"uniqueName": "txtServerName",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.RadiusAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=253&mode=301&operation=473"
				},
				"500": {
					"message": "Message.RadiusAddFail"
				},
				"502": {
					"message": "Message.RadiusRecordExists"
				},
				"503": {
					"message": "Message.RadiusAddFailDetail"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.RadiusUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=253&mode=301&operation=473"
				},
				"500": {
					"message": "Message.RadiusUpdateFail"
				},
				"502": {
					"message": "Message.RadiusUpdateFailDetail"
				}
			}
		}
	},
	"digestuser": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.SpamDigestUpdateSuccess"
				},
				"500": {
					"message": "Message.SpamDigestUpdateFailure"
				}
			}
		}
	},
	"globalsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.FWAuthSettingsUserSessionSuccess",
					"url": "/identity/FirewallAuthSetting.html?mode=300&operation=553"
				},
				"500": {
					"message": "Message.FWAuthSettingsUserSessionFail"
				}
			}
		}
	},
	"authadmin": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AdminAuthServerSuccess",
					"url": "/identity/AdminAuthServerManage.html?mode=300&operation=551"
				},
				"500": {
					"message": "Message.AdminAuthServerFail"
				}
			}
		}
	},
	"notification": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.MailServerApplySuccessful",
					"url": "/system/MailServerSetting.html?mode=300&operation=482"
				},
				"500": {
					"message": "Message.MailServerApplyFailed"
				}
			}
		}
	},
	"dhcprelay": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"uniqueName": "confids",
				"200": {
					"message": "Message.DHCPRelayDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=52&mode=301&operation=117"
				},
				"500": {
					"message": "Message.DHCPRelayDeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DHCPRelayAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=52&mode=301&operation=117"
				},
				"541": {
					"message": "Message.DHCPRelayNotConf"
				},
				"510": {
					"message": "Message.DHCPRelayDHCPServerIPCanNotBeInterfaceIP"
				},
				"500": {
					"message": "Message.DHCPRelayAddFailed"
				},
				"502": {
					"message": "Message.DHCPRelayRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.DHCPRelayEditSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=52&mode=301&operation=117"
				},
				"541": {
					"message": "Message.DHCPRelayNotConf"
				},
				"510": {
					"message": "Message.DHCPRelayDHCPServerIPCanNotBeInterfaceIP"
				},
				"500": {
					"message": "Message.DHCPRelayEditFailed"
				},
				"502": {
					"message": "Message.DHCPRelayRecordExists"
				}
			}
		}
	},
	"lag": {
		"uniqueName": "interface",
		"statusMappings": {
			"ADD": {
				"550": {
					"message": "Language.HAIsConfigured"
				},
				"200": {
					"message": "Message.BondAddSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"541": {
					"message": "Message.BondMemberMinRequired"
				},
				"542": {
					"message": "Message.BondMemberMaxRequired"
				},
				"543": {
					"message": "Message.BondMemberNotPhysical"
				},
				"510": {
					"message": "Message.LAGNameConflict"
				},
				"544": {
					"message": "Message.BondMemberAlreadyEnslaved"
				},
				"500": {
					"message": "Message.BondAddFailed"
				},
				"545": {
					"message": "Message.BondMemberUnbound"
				},
				"546": {
					"message": "Message.InterfaceInvalidMACAddress"
				},
				"502": {
					"message": "Message.InterfaceIPAlreadyInUsed"
				},
				"547": {
					"message": "Message.InterfaceMACConflictWithSystemMAC"
				},
				"503": {
					"message": "Message.InterfaceGatewayAlreadyExists"
				},
				"548": {
					"message": "Message.InterfaceMACConflictwithReservedHAMAC"
				},
				"504": {
					"message": "Message.BondExists"
				},
				"509": {
					"message": "Message.AddLinkAggFail"
				},
				"530": {
					"message": "Message.LAGMemberInterfaceVlaninBridgeExists"
				}
			},
			"UPDATE": {
				"550": {
					"message": "Language.HAIsConfigured"
				},
				"200": {
					"message": "Message.BondUpdateSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"541": {
					"message": "Message.BondMemberMinRequired"
				},
				"542": {
					"message": "Message.BondMemberMaxRequired"
				},
				"543": {
					"message": "Message.BondMemberNotPhysical"
				},
				"500": {
					"message": "Message.BondUpdateFailed"
				},
				"544": {
					"message": "Message.BondMemberAlreadyEnslaved"
				},
				"546": {
					"message": "Message.InterfaceInvalidMACAddress"
				},
				"502": {
					"message": "Message.InterfaceIPAlreadyInUsed"
				},
				"503": {
					"message": "Message.InterfaceGatewayAlreadyExists"
				},
				"547": {
					"message": "Message.InterfaceMACConflictWithSystemMAC"
				},
				"548": {
					"message": "Message.InterfaceMACConflictwithReservedHAMAC"
				},
				"549": {
					"message": "Message.LAGMemberInterfaceUpdateFail"
				},
				"505": {
					"message": "Message.LAGGWBasedRuleExist"
				},
				"507": {
					"message": "Message.CanNotUnbindInterface"
				},
				"530": {
					"message": "Message.LAGMemberInterfaceVlaninBridgeExists"
				}
			}
		}
	},
	"zone": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.ZoneDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=41&mode=301"
				},
				"500": {
					"message": "Message.ZoneDeleteFailed"
				},
				"503": {
					"message": "Message.ZoneInterfaceExists"
				},
				"504": {
					"message": "Message.ZoneFirewallRuleExists"
				},
				"505": {
					"message": "Message.ZoneVirtualHostExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.ZoneAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=41&mode=301&operation=155"
				},
				"510": {
					"message": "Message.ZoneAddFailMAXLimit"
				},
				"500": {
					"message": "Message.ZoneAddFail"
				},
				"502": {
					"message": "Message.ZoneRecordExist"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ZoneUpdateSuccess"
				},
				"500": {
					"message": "Message.ZoneUpdateFail"
				}
			}
		}
	},
	"pim": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.PIMConfigurationSuccess",
					"url": "/network/PIMSettings.html?mode=300&operation=619"
				},
				"500": {
					"message": "Message.PIMConfigurationFail"
				},
				"504": {
					"message": "Message.PIMConfigurationFail1"
				}
			}
		}
	},
	"logindisclaimer": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.LoginDisclaimerSettingSuccess"
				},
				"500": {
					"message": "Message.LoginDisclaimerSettingFail"
				}
			}
		}
	},
	"guestusers": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"210": {
					"message": "Message.UserIMRuleExists"
				},
				"200": {
					"message": "Message.UserDeleteSuccess"
				},
				"500": {
					"message": "Message.UserDeleteFailed"
				},
				"203": {
					"message": "Message.UserForeignKeyExists"
				},
				"204": {
					"message": "Message.UserAdminOrCurrentUserNotDeleted"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.GuestUserAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=306&mode=301&operation=747"
				},
				"500": {
					"message": "Message.GuestUserAddFail",
					"url": "/identity/GenerateGuestUser.html"
				}
			}
		}
	},
	"captiveportalsettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.WebAuthSettingsCapPortalSuccess",
					"url": "/identity/FirewallAuthSetting.html?mode=300&operation=553"
				},
				"500": {
					"message": "Message.WebAuthSettingsCapPortalFail"
				}
			}
		}
	},
	"centralmanagement": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.CCCUpdateSuccess",
					"url": "/system/CentralManagement.html?mode=300&operation=765"
				},
				"500": {
					"message": "Message.CCCUpdateFail"
				}
			}
		}
	},
	"mailscheduler": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "managemailschedule.Report_Not_Del_Successfully_"
				},
				"541": {
					"message": "managemailschedule.ConnWise_disable_for_del"
				},
				"500": {
					"message": "managemailschedule.Error_in_Report_Not_Deleting_"
				}
			},
			"UPDATE": {
				"200": {
					"message": "managemailschedule.Report_Notifi_Edit_Success_"
				},
				"500": {
					"message": "managemailschedule.Report_Notifi_Edit_Adding_"
				}
			},
			"ADD": {
				"200": {
					"message": "managemailschedule.Report_Notifi_Add_Successful_"
				},
				"500": {
					"message": "managemailschedule.Error_in_Report_Notifi_Adding_"
				},
				"502": {
					"message": "managemailschedule.Failed_to_add_Report_Notifi"
				},
				"503": {
					"message": "managemailschedule.Failed_to_add_Rep_Not_rep"
				}
			}
		}
	},
	"snmpagentconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.SNMPApplySuccess"
				},
				"500": {
					"message": "Message.SNMPApplyFailed",
					"url": "/webpages/system/SNMPAgentConfiguration.jsp"
				},
				"511": {
					"message": "Message.SNMPPortConflict",
					"url": "/webpages/system/SNMPAgentConfiguration.jsp"
				}
			}
		}
	},
	"applicationfiltercategory": {
		"uniqueName": "appname",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AppQosPolicyEditSuccess",
					"url": "/appfilter/AppFilterCategoryManage.jsp?operation=499"
				},
				"500": {
					"message": "Message.AppQosPolicyEditFailed",
					"url": "/appfilter/AppFilterCategoryManage.jsp?operation=499"
				}
			}
		}
	},
	"trusteddomain": {
		"uniqueName": "localdomain",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.LocalACLDeleteSuccess",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation="+ Modes.UPDATE_AV_GENERAL_CONF
				},
				"500": {
					"message": "Message.LocalACLDeleteFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.LocalACLAddSuccess",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation="+ Modes.UPDATE_AV_GENERAL_CONF
				},
				"500": {
					"message": "Message.LocalACLAddFail",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation="+ Modes.UPDATE_AV_GENERAL_CONF
				},
				"502": {
					"message": "Message.DuplicateLocalDomain"
				}
			}
		}
	},
	"dosbypassrule": {
		"uniqueName": "rulebypassname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.DoSDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=51&mode=301"
				},
				"500": {
					"message": "Message.DoSDeleteFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DoSAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=51&mode=301&operation=111"
				},
				"500": {
					"message": "Message.DoSAddFailed"
				},
				"502": {
					"message": "Message.DoSRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.DoSEditSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=51&mode=301&operation=111"
				},
				"500": {
					"message": "Message.DoSEditFailed"
				},
				"502": {
					"message": "Message.DoSRecordExists"
				}
			}
		}
	},
	"httpsconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AVHTTPConfUpdateSuccess"
				},
				"500": {
					"message": "Message.AVHTTPConfUpdateFail"
				}
			}
		}
	},
	"liveusers": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.LiveUserSuccessDisconnect"
				},
				"500": {
					"message": "Message.LiveUserFailDisconnect"
				}
			}
		}
	},
	"sslvpntunnel": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"541": {
					"message": "Message.SSLVPNConfInvalidClientCert"
				},
				"200": {
					"message": "Message.SSLVPNConfUpdated"
				},
				"542": {
					"message": "Message.SSLVPNConfNetConflictStart"
				},
				"543": {
					"message": "Message.SSLVPNConfNetConflictEnd"
				},
				"500": {
					"message": "Message.SSLVPNConfNotUpdated"
				},
				"544": {
					"message": "Message.SSLVPNConfNotValidRange"
				}
			}
		}
	},
	"certificate": {
		"uniqueName": "certificatename",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.CertManageDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=27&mode=301"
				},
				"500": {
					"message": "Message.CertManageDeleteFailed"
				},
				"504": {
					"message": "Message.CertWebServerChildExists"
				},
				"505": {
					"message": "Message.CertSMTPChildExists"
				},
				"506": {
					"message": "Message.CertManageChildExists"
				},
				"507": {
					"message": "Message.CertManageDeleteFailedSMTP"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.CertManageGenerateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=27&mode=301&operation=310"
				},
				"541": {
					"message": "Message.InvalidCertificateFile"
				},
				"510": {
					"message": "Message.CertEditKeyCertMismatch"
				},
				"500": {
					"message": "Message.CertEditGenerateFailed"
				},
				"502": {
					"message": "Message.CertEditRecordAlreadyExists"
				},
				"503": {
					"message": "Message.CertSubjectExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.CertManageUpdatedSuccessFully",
					"url": "/includes/ManagePage.jsp?datagridid=27&mode=301&operation=310"
				},
				"201": {
					"message": "Message.CertManageUpdatedSuccessFullyReload"
				},
				"541": {
					"message": "Message.InvalidCertificateFile"
				},
				"510": {
					"message": "Message.CertEditKeyCertMismatch"
				},
				"500": {
					"message": "Message.CertEditUpdateCertFailed"
				},
				"503": {
					"message": "Message.CertSubjectExists"
				}
			}
		}
	},
	"accesspoint": {
		"uniqueName": "",
		"statusMappings": {
			"null": {
				"200": {
					"message": "Message.WebClientPortalUpdated",
					"url": "/identity/WebAuthenticationEdit.html?mode=300&operation=324"
				},
				"500": {
					"message": "Message.WebClientPortalFailed"
				}
			}
		}
	},
	"connectionactivation_deactivation": {
		"uniqueName": "connectionid",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.IPSecConnectionSuccess",
					"url": "/webpages/vpn/L2TPConnectionManage.jsp"
				},
				"500": {
					"message": "Message.IPSecConnectionFailed",
					"url": "/webpages/vpn/L2TPConnectionManage.jsp"
				}
			}
		}
	},
	"thememanage": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.ThemeApplySuccessMessage"
				},
				"500": {
					"message": "Message.ThemeApplyFailMessage"
				}
			}
		}
	},
	"alias": {
		"uniqueName": "interface",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.InterfaceAddAliasSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"500": {
					"message": "Message.AliasAddFailed"
				},
				"522": {
					"message": "Message.AliasTooManyAliasIP6"
				},
				"523": {
					"message": "Message.AliasTooManyAlias"
				},
				"502": {
					"message": "Message.AliasRecordExists"
				},
				"507": {
					"message": "Message.IPConflictWithSSLVPNOnADD"
				},
				"508": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.InterfaceUpdateAliasSuccess",
					"url": "/network/InterfaceManage.html"
				},
				"510": {
					"message": "Message.AliasIntBasedVHExist"
				},
				"500": {
					"message": "Message.AliasUpdateFail"
				},
				"502": {
					"message": "Message.AliasRecordExists"
				},
				"507": {
					"message": "Message.IPConflictWithSSLVPNOnEdit"
				},
				"508": {
					"message": "Message.InterfaceIPAssignedToPeerAdminIP"
				}
			}
		}
	},
	"l2tpconnection": {
		"uniqueName": "connectionname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.L2TPDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=103&mode=301"
				},
				"500": {
					"message": "Message.L2TPDeleteFail"
				},
				"203": {
					"message": "Message.L2TPConnInUse"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.L2TPInserted",
					"url": "/includes/ManagePage.jsp?datagridid=103&mode=301"
				},
				"541": {
					"message": "Message.IPSecPSKNOTSAME"
				},
				"201": {
					"message": "Message.L2TPL2TPdisableAdd",
					"url": "/includes/ManagePage.jsp?datagridid=103&mode=301"
				},
				"500": {
					"message": "Message.L2TPNotInserted"
				},
				"502": {
					"message": "Message.L2TPRecordExist"
				},
				"505": {
					"message": "Message.L2TPRewriteFailed"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.L2TPUpdated",
					"url": "/includes/ManagePage.jsp?datagridid=103&mode=301"
				},
				"541": {
					"message": "Message.IPSecPSKNOTSAME"
				},
				"201": {
					"message": "Message.L2TPL2TPdisableEdit",
					"url": "/includes/ManagePage.jsp?datagridid=103&mode=301"
				},
				"500": {
					"message": "Message.L2TPNotUpdated"
				},
				"502": {
					"message": "Message.L2TPRecordExist"
				},
				"503": {
					"message": "Message.L2TPNetworkConflict"
				},
				"505": {
					"message": "Message.L2TPRewriteFailed"
				}
			}
		}
	},
	"applianceaccess": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.LocalACLUpdateSuccess"
				},
				"500": {
					"message": "Message.LocalACLUpdateFail"
				},
				"541":{
					"message":"Message.LocalServiceACLEnforceFail"
				}
			}
		}
	},
	"virtualhost": {
		"uniqueName": "virtualhostname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.VHDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=7&mode=301"
				},
				"500": {
					"message": "Message.VHDeleteFailed"
				},
				"504": {
					"message": "Message.VHFirewallRuleExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.VHAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=7&mode=301&operation=103"
				},
				"541": {
					"message": "Message.VHIPRangeConflict"
				},
				"542": {
					"message": "Message.VHZoneNotBind"
				},
				"543": {
					"message": "Message.VHv4Create255IP"
				},
				"500": {
					"message": "Message.VHAddFail"
				},
				"522": {
					"message": "Message.MaximumRangeOfExternalAdd"
				},
				"544": {
					"message": "Message.VHv6Create128IP"
				},
				"523": {
					"message": "Message.MaximumRangeOfMappedAdd"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				},
				"503": {
					"message": "Message.VHIPConflict"
				},
				"504": {
					"message": "Message.VHPortConflict"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.VHEditSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=7&mode=301&operation=103"
				},
				"541": {
					"message": "Message.VHIPRangeConflict"
				},
				"202": {
					"message": "Message.VHUpdateWithRename",
					"url": "/includes/ManagePage.jsp?datagridid=7&mode=301&operation=103"
				},
				"543": {
					"message": "Message.VHv4Update255IP"
				},
				"500": {
					"message": "Message.VHEditFail"
				},
				"522": {
					"message": "Message.MaximumRangeOfExternalUpdate"
				},
				"544": {
					"message": "Message.VHv6Update128IP"
				},
				"523": {
					"message": "Message.MaximumRangeOfMappedUpdate"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				},
				"503": {
					"message": "Message.VHIPConflict"
				},
				"504": {
					"message": "Message.VHPortConflict"
				}
			}
		}
	},
	"imcontactgroup": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IMContactGrpDeleteSucc"
				},
				"500": {
					"message": "Message.IMContactGrpDeleteFailGen"
				},
				"504": {
					"message": "Message.IMContactGrpIMRuleExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IMContactGrpSucc"
				},
				"500": {
					"message": "Message.IMContactGrpError"
				},
				"502": {
					"message": "Message.IMContactGrpDuplicateRecord"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IMContactGrpUpdateSucc"
				},
				"500": {
					"message": "Message.IMContactGrpUpdateError"
				},
				"502": {
					"message": "Message.IMContactGrpDuplicateRecord"
				}
			}
		}
	},
	"imloginrule": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.IMRule3DeleteSuccess"
				},
				"500": {
					"message": "Message.IMRule3DeleteFailed"
				}
			},
			"REORDER": {
				"200": {
					"message": "Message.IMRuleUpdateRuleOrderSuccess"
				},
				"500": {
					"message": "Message.IMRuleUpdateRuleOrderFailed"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.IMRule3AddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=254&mode=301&operation=1005"
				},
				"500": {
					"message": "Message.IMRule3AddFailed"
				},
				"502": {
					"message": "Message.IMRule3RecordAlreadyExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.IMRule3UpdateRuleOrderSuccess"
				},
				"500": {
					"message": "Message.IMRule3UpdateRuleOrderFailed"
				}
			}
		}
	},
	"passwordcomplexitysettings": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AdminPasswordComplexitySettingSuccess"
				},
				"500": {
					"message": "Message.AdminPasswordComplexitySettingFail"
				}
			}
		}
	},
	"revokecertificate": {
		"uniqueName": "",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.CertManageRevokeSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=27&mode=301&operation=310"
				},
				"500": {
					"message": "Message.CertManageRevokeFailed"
				},
				"504": {
					"message": "Message.CertManageRevokeChildExists"
				},
				"505": {
					"message": "Message.CertWebServerRevokeChildExists"
				}
			}
		}
	},
	"multicast": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.MulticastEnableSuccess",
					"url": "/network/MulticastRouteManage.jsp"
				},
				"500": {
					"message": "Message.MulticastEnableFail",
					"url": "/network/MulticastRouteManage.jsp"
				},
				"203": {
					"message": "Message.MulticastDisableSuccess",
					"url": "/network/MulticastRouteManage.jsp"
				},
				"504": {
					"message": "Message.MulticastEnableFail1"
				}
			}
		}
	},
	"disconnectliveipsecconnection": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.VPNConnDisconnectSuccessful",
					"url": "/includes/ManagePage.jsp?datagridid=42&mode=301"
				},
				"500": {
					"message": "Message.VPNConnDisconnectFailed"
				}
			}
		}
	},
	"antivirusftp": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.AVFTPConfigUpdateSuccess"
				},
				"500": {
					"message": "Message.AVFTPConfigUpdateFail"
				}
			}
		}
	},
	"countryhostgroup": {
		"uniqueName": "hostgroupname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.CountryGrpDelSuccessMsg",
					"url": "/includes/ManagePage.jsp?datagridid=304&mode=301&operation=744"
				},
				"500": {
					"message": "Message.CountryGrpDelFailedMsg"
				},
				"504": {
					"message": "Message.CountryGrpFWRuleExistsMessage"
				},
				"506": {
					"message": "Message.CountryGrpWAFRuleExistsMessage"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.HGAddSuccess"
				},
				"500": {
					"message": "Message.HGAddFail"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.HGUpdateSuccess"
				},
				"202": {
					"message": "Message.HGUpdateWithRename"
				},
				"500": {
					"message": "Message.HGUpdateFail"
				},
				"502": {
					"message": "Message.IPHostRecordExists"
				}
			}
		}
	},
	"multicastroute": {
		"uniqueName": "multicastid",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.MulticastDeleteSuccess",
					"url": "/network/MulticastRouteManage.jsp"
				},
				"500": {
					"message": "Message.MulticastDeleteFailed",
					"url": "/network/MulticastRouteManage.jsp"
				},
				"527": {
					"message": "Message.SomeRoutesNotDeleted",
					"url": "/network/MulticastRouteManage.jsp"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.MulticastAddSuccess",
					"url": "/network/MulticastRouteManage.jsp"
				},
				"541": {
					"message": "Message.RouteNotAdded"
				},
				"211": {
					"message": "Message.SrcInterfaceNotVerified"
				},
				"542": {
					"message": "Message.InvalidDstIDAddr"
				},
				"212": {
					"message": "Message.SrcInterfaceNotFetch"
				},
				"543": {
					"message": "Language.SrcDestiNotSame"
				},
				"213": {
					"message": "Message.DstInterfaceNotCheck"
				},
				"500": {
					"message": "Message.MulticastAddFailed"
				},
				"544": {
					"message": "Message.DiffInputInterfaceForSameSrcDst"
				},
				"214": {
					"message": "Message.ConfSavedSuccessfully"
				},
				"502": {
					"message": "Message.RouteExistsMsg"
				},
				"547": {
					"message": "Message.InvalidSrcIDAddr"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.MulticastUpdateSuccess",
					"url": "/network/MulticastRouteManage.jsp"
				},
				"541": {
					"message": "Message.FailedToRemoveOldRoute"
				},
				"211": {
					"message": "Message.SrcInterfaceNotVerified"
				},
				"542": {
					"message": "Message.InvalidDstIDAddr"
				},
				"212": {
					"message": "Message.SrcInterfaceNotFetch"
				},
				"543": {
					"message": "Language.SrcDestiNotSame"
				},
				"213": {
					"message": "Message.DstInterfaceNotCheck"
				},
				"500": {
					"message": "Message.MulticastUpdateFailed"
				},
				"544": {
					"message": "Message.DiffInputInterfaceForSameSrcDst"
				},
				"214": {
					"message": "Message.ConfSavedSuccessfully"
				},
				"546": {
					"message": "Message.FailedToAddNewRoute"
				},
				"502": {
					"message": "Message.RouteExistsMsg"
				},
				"547": {
					"message": "Message.InvalidSrcIDAddr"
				}
			}
		}
	},
	"certificatecrl": {
		"uniqueName": "crlname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.CRLDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=22&mode=301"
				},
				"500": {
					"message": "Message.CRLDeleteFailed",
					"url": "/webpages/objects/CRLManage.jsp"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.CRLCreateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=22&mode=301&operation=309"
				},
				"500": {
					"message": "Message.CRLCreateFailed"
				},
				"502": {
					"message": "Message.CRLRecordAlreadyExists"
				},
				"503": {
					"message": "Message.CRLExpired"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.CRLUpdatedSuccessFully",
					"url": "/includes/ManagePage.jsp?datagridid=22&mode=301&operation=309"
				},
				"500": {
					"message": "Message.CRLUpdateFailed"
				}
			}
		}
	},
	"letsencrypt": {
		"uniqueName": "letsencrypt",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.CertLetsencryptEnableSuccess"
				},
				"500": {
					"message": "Message.CertLetsencryptEnableFailed"
				},
				"501": {
					"message": "Message.CertLetsencryptACMEServerUnreachable"
				},
				"502": {
					"message": "Message.CertLetsencryptAccountCreationLimit"
				}
			}
		}
	},
	"wlan": {
		"uniqueName": "",
		"statusMappings": {
			"null": {
				"200": {
					"message": "Message.WebClientPortalUpdated",
					"url": "/identity/WebAuthenticationEdit.html?mode=300&operation=324"
				},
				"500": {
					"message": "Message.WebClientPortalFailed"
				}
			}
		}
	},
	"l2tpusers": {
		"uniqueName": "",
		"statusMappings": {
			"ADD": {
				"200": {
					"message": "Message.L2TPUserUserAdded"
				},
				"500": {
					"message": "Message.UserAddedFailed"
				}
			}
		}
	},
	"wirelessgrouping": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.WPGroupDeleteSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=513&mode=301&operation=811"
				},
				"500": {
					"message": "Message.WPGroupDeleteFail"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.WPGroupSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=513&mode=301&operation=811"
				},
				"541": {
					"message": "Message.WPGroupCreated"
				},
				"543": {
					"message": "Message.WPGroupCreated"
				},
				"500": {
					"message": "Message.WPGroupCreated"
				},
				"523": {
					"message": "Message.WPGroupMax"
				},
				"545": {
					"message": "Message.WPGroupCreated"
				},
				"502": {
					"message": "Message.WPGroupExists"
				},
				"216": {
					"message": "Message.WPGroupSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=513&mode=301&operation=811"
				},
				"524": {
					"message": "Message.WPGroupMaxAP"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.WPGroupUpdateSuccessfully",
					"url": "/includes/ManagePage.jsp?datagridid=513&mode=301&operation=811"
				},
				"541": {
					"message": "Message.WPGroupUpdateFail"
				},
				"543": {
					"message": "Message.WPGroupUpdateFail"
				},
				"500": {
					"message": "Message.WPGroupUpdateFail"
				},
				"523": {
					"message": "Message.WPGroupMaxForUpdate"
				},
				"545": {
					"message": "Message.WPGroupUpdateFail"
				},
				"216": {
					"message": "Message.WPGroupUpdateSuccessfully",
					"url": "/includes/ManagePage.jsp?datagridid=513&mode=301&operation=811"
				},
				"524": {
					"message": "Message.WPGroupMaxAPForUpdate"
				}
			}
		}
	},
	"contentconditionlist": {
		"uniqueName": "name",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.CCLDeleteSuccess"
				},
				"500": {
					"message": "Message.CCLInUse"
				},
				"504": {
					"message": "Message.CCLDeleted"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.CCLAddSuccess"
				},
				"500": {
					"message": "Message.CCLAddFail"
				},
				"502": {
					"message": "Message.CCLRecordExists"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.CCLUpdateSuccess"
				},
				"500": {
					"message": "Message.CCLUpdateFail"
				},
				"502": {
					"message": "Message.CCLUpdateRecordExists"
				}
			}
		}
	},
	"webfilterpolicy": {
		"uniqueName": "securitypolicyname",
		"statusMappings": {
			"DELETE": {
				"200": {
					"message": "Message.WFPDeleteSuccess"
				},
				"500": {
					"message": "Message.WFPDeleteFailed"
				},
				"504": {
					"message": "Message.WFPRecordInUse"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.WFPAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=34&mode=301&operation=318"
				},
				"500": {
					"message": "Message.WFPAddFail"
				},
				"502": {
					"message": "Message.WFPRecordExists"
				},
				"522": {
					"message": "Message.WebPoliciesLimit"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.WFPUpdateSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=34&mode=301&operation=318"
				},
				"500": {
					"message": "Message.WFPUpdateFail"
				},
				"502": {
					"message": "Message.WFPUpdateRecordExists"
				},
				"503": {
					"message": "Message.WFPQuotaLimitInvalid"
				}
			}
		}
	},
	"user": {
		"uniqueName": "username",
		"statusMappings": {
			"DELETE": {
				"210": {
					"message": "Message.UserIMRuleExists"
				},
				"200": {
					"message": "Message.UserDeleteSuccess"
				},
				"500": {
					"message": "Message.UserDeleteFailed"
				},
				"204": {
					"message": "Message.UserAdminOrCurrentUserNotDeleted"
				},
				"205": {
					"message": "Message.AuthorizerExists",
					"url": "/includes/ManagePage.jsp?datagridid=29&mode=301"
				},
				"206": {
					"message": "Message.UserForeignKeyExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.UserAddSuccess",
					"url": "/includes/ManagePage.jsp?datagridid=29&mode=301&operation=33"
				},
				"510": {
					"message": "Message.PasswdComplexityMisMatch"
				},
				"500": {
					"message": "Message.UserAddFail"
				},
				"502": {
					"message": "Message.UserRecordExists"
				},
				"503": {
					"message": "Message.L2TPPPTPIPAddressAlreadyExistUserAdd"
				},
				"505": {
					"message": "Message.NotAllowedToChangePassword"
				}
			},
			"UPDATE": {
				"200": {
					"message": "Message.UserUpdateSuccess"
				},
				"500": {
					"message": "Message.UserUpdateFail"
				},
				"502": {
					"message": "Message.UserRecordExists"
				},
				"503": {
					"message": "Message.L2TPPPTPIPAddressAlreadyExistUserUpdate"
				},
				"510": {
					"message": "Message.PasswdComplexityMisMatch"
				},
				"541": {
					"message": "Message.UserAtleastOneAdmin"
				},
				"542": {
					"message": "Message.UserAtleastOneProfileAdmin"
				},
				"505": {
					"message": "Message.NotAllowedToChangePassword"
				}
			}
		}
	},"toggleuserstatus": {
        "uniqueName": "userIds",
        "statusMappings": {
                "UPDATE": {
                        "200": {
                                "message": "Message.UserChangeStatusSuccess"
                        },
                        "201": {
                                "message": "Message.UserChangeStatusSuccess"
                        },
                        "500": {
                                "message": "Message.UserChangeStatusFail"
                        }
                }
        }
	},
	"haconfiguration": {
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"550": {
					"message": "Message.HAPeerIPClashWithSysIP"
				},
				"551": {
					"message": "Message.HAPeerHAIPConflict"
				},
				"200": {
					"message": "Message.HAEnableHASuccess",
					"url": "/system/HAConfiguration.html?mode=300&operation=134"
				},
				"541": {
					"message": "Message.HASanityChk"
				},
				"211": {
					"message": "Message.HAEnableHASuccessCheckPeer"
				},
				"542": {
					"message": "Message.HAAppActiveFail"
				},
				"543": {
					"message": "Message.HADedicatedPortDown"
				},
				"500": {
					"message": "Message.HAEnableHAFail"
				},
				"544": {
					"message": "Message.HAInterfaceDown"
				},
				"545": {
					"message": "Message.HAPeerAppConnectFailed"
				},
				"546": {
					"message": "Message.HAPeerAppActiveFailed"
				},
				"502": {
					"message": "Message.HAPeerSysRunningInHA"
				},
				"216": {
					"message": "Message.HALoadBalanceDisabled"
				},
				"547": {
					"message": "Message.HAPeerDedicatedPortDown"
				},
				"548": {
					"message": "Message.HAFirmwareMismatch "
				},
				"504": {
					"message": "Message.HADedicatedLinkWithVLAN"
				},
				"505": {
					"message": "Message.HAOverrideMACOnDedicatedPort"
				},
				"549": {
					"message": "Message.HAPeerIPLinkPort"
				},
				"554": {
					"message": "Message.HARegistrationDeferred"
				}
			}
		}
	},
	"atp":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.ATPUpdateSuccess","url":"/firewall/ATPSettings.html?mode=300&operation="+Modes.UPDATE_ATP_SETTINGS},
				"500":{"message":"Message.ATPUpdateFail"}
			}
		}
	},
	"mdrthreatfeed":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.XstreamMDRSuccess","url":"/firewall/XstreamMDRSettings.html?mode=300&operation="+Modes.UPDATE_MDR_SETTINGS},
				"500":{"message":"Message.XstreamMDRFail"}
			}
		}
	},
	"sslvpnserverconnection":{
		"uniqueName" : "name",
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.ServerConnectionAddSuccess","url":"/sslvpn/SitetoSiteSSLConnectionManage.jsp?mode=301&operation="+Modes.SSL_VPN_SITETOSITE},
				"500":{"message":"Message.ServerConnectionAddFail"},
				"502":{"message":"Message.ServerConnectionRecordExist"}

			},
			"UPDATE":{
				"200":{"message":"Message.ServerConnectionUpdateSuccess","url":"/sslvpn/SitetoSiteSSLConnectionManage.jsp?mode=301&operation="+Modes.SSL_VPN_SITETOSITE},
				"500":{"message":"Message.ServerConnectionUpdateFail"}
			},
			"DELETE":{
				"200":{"message":"Message.ServerConnectionDeleteSuccess","url":"/sslvpn/SitetoSiteSSLConnectionManage.jsp?mode=301&operation="+Modes.SSL_VPN_SITETOSITE},
				"500":{"message":"Message.ServerConnectionDeleteFail"}
			}
		}
	},
	"securitypolicy":{
		"uniqueName": "rulename",
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.UserPolicyAddSuccess"},
				"201":{"message":"Message.UserPolicyGroupAddSuccess"},
				"500":{"message":"Message.UserPolicyAddFail"},
				"502":{"message":"Message.UserPolicyRecordExists"},
				"504":{"message": "Message.LimitExceed"},
				"505":{"message":"Message.VirtualHostExistWithSameName"},
				"542":{"message":"Message.CannotUseTypeHTTP"},
				"543":{"message":"Message.CannotSetupRedirectionFromHTTP"},
				"544":{"message":"Message.CannotUseDefaultPort"},
				"541":{"message":"Message.VHIPRangeConflict"},
				"545":{"message":"Message.PortAlreadyExists"},
				"546":{"message":"Message.CannotConfigureDomainWithAddrTypePort"},
				"547":{"message":"Message.warn_update_business_policy"},
				"548":{"message":"Message.MaxIPv4ForAppServerAllowed"},
				"549":{"message":"Message.MaxIPv4ForAppServerAllowed"},
				"550":{"message":"Message.PortUsedInUserPortal"},
				"551":{"message":"Message.CannotSelectDestHBIfWANSelected"},
				"553":{"message":"Message.CannotConfigureDomainWithHTTPSRedirection"},
				"554":{"message":"Message.CannotUseFQDNWildCardAsProtectedServer"}
			},
			"UPDATE":{
				"200":{"message":"Message.UserPolicyUpdateSuccess"},
				"201":{"message":"Message.UserPolicyGroupUpdateSuccess"},
				"500":{"message":"Message.UserPolicyUpdateFail"},
				"502":{"message":"Message.FWRuleUpdateRecordExist"},
				"504":{"message": "Message.LimitExceed"},
				"505":{"message":"Message.UpdateFailVirtualHostExistWithSameName"},
				"542":{"message":"Message.CannotUseTypeHTTP"},
				"543":{"message":"Message.CannotSetupRedirectionFromHTTP"},
				"544":{"message":"Message.CannotUseDefaultPort"},
				"541":{"message":"Message.VHIPRangeConflict"},
				"545":{"message":"Message.PortAlreadyExists"},
				"546":{"message":"Message.CannotConfigureDomainWithAddrTypePort"},
				"547":{"message":"Message.warn_update_business_policy"},
				"548":{"message":"Message.MaxIPv4ForAppServerAllowed"},
				"549":{"message":"Message.MaxIPv4ForAppServerAllowed"},
				"550":{"message":"Message.PortUsedInUserPortal"},
				"551":{"message":"Message.CannotSelectDestHBIfWANSelected"},
				"552":{"message":"Message.CannotImportDiffPolicytypeWithSameName"},
				"553":{"message":"Message.CannotConfigureDomainWithHTTPSRedirection"},
				"554":{"message":"Message.CannotUpdateFQDNWildCardAsProtectedServer"}
			},
			"DELETE":{
				"200":{"message":"Message.UserPolicyDeleteSuccess"},
				"500":{"message":"Message.UserPolicyDeleteFail"}
			}
		}
	},
	"natrule":{
		"uniqueName": "rulename",
		"statusMappings":{
			"ADD":{
				"500":{"message":"Message.NATPolicyAddFail"},
				"502":{"message":"Message.NATPolicyRecordExists"},
				"548":{"message":"Message.MaxIPv4ForAppServerAllowed"},
				"549":{"message":"Message.MaxIPv4ForAppServerAllowed"},
				"523":{"message":"Message.MaximumRangeOfMappedAdd"},
				"522":{"message":"Message.MaximumRangeOfExternalAdd"},
				"541":{"message":"Message.NATIPRangeConflict"},
				"503":{"message":"Message.VHIPConflict"},
				"504":{"message":"Message.VHPortConflict"}
			},
			"UPDATE":{
				"500":{"message":"Message.NATPolicyUpdateFail"},
				"502":{"message":"Message.NATRuleUpdateRecordExist"},
				"548":{"message":"Message.MaxIPv4ForAppServerAllowed"},
				"549":{"message":"Message.MaxIPv4ForAppServerAllowed"},
				"523":{"message":"Message.MaximumRangeOfMappedAdd"},
				"522":{"message":"Message.MaximumRangeOfExternalAdd"},
				"541":{"message":"Message.NATIPRangeConflict"},
				"503":{"message":"Message.VHIPConflict"},
				"504":{"message":"Message.VHPortConflict"}
			},
			"DELETE":{
				"200":{"message":"Message.NATDelSuccess"},
				"500":{"message":"Message.NATRuleDeleteFail"}
			}
		}
	},
	"reddevice":{
		"uniqueName" : "red_id",
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.REDDeviceSuccess"},
				"500":{"message":"Message.REDDeviceFail"},
				"501":{"message":"Message.REDZone"},
				"502":{"message":"Message.RequestRoutingExisted"},
				"503":{"message":"Message.REDRecodExist"},
				"504":{"message":"Message.REDIDInvalid"},
				"512":{"message":"Message.REDUnlockCodeNotMatch"},
				"513":{"message":"Message.REDCanNotReachProvServer"},
				"514":{"message":"Message.REDProvServerError"},
				"515":{"message":"Message.REDCreateCertificateError"},
				"516":{"message":"Message.REDDeleteCertificateError"},
				"517":{"message":"Message.REDConfigNotUpdatedServiceNotRunning"},
				"518":{"message":"Message.REDCreateTunnelFailed"},
				"519":{"message":"Message.REDDeleteTunnelFailed"},
				"520":{"message":"Message.REDInternalError"},
				"521":{"message":"Message.REDProvNotRegistered"},
				"522":{"message":"Message.REDTunnelInUse"},
				"526":{"message":"Message.REDRecodNotExist"},
				"541":{"message":"Message.REDEntryNotUnique"},
				"542":{"message":"Message.REDIPAddress"},
				"544":{"message":"Message.DHCPREDIPNotInRange"},
				"543":{"message":"Message.REDIPCanNotBeInterfaceIP"},
				"545":{"message":"Message.DHCPServerLease_IP_Already_Assigned"},
				"546":{"message":"Message.REDDHCPRelayAlreadyConfiguredIPv4"},
                "547":{"message":"Message.REDFirewallClientInvalidProvFile"},
                "548":{"message":"OEM.REDFirewallLegacyModeOnlyForUTM"},
                "549":{"message":"Message.REDFirewallLegacyClientOnlyForUTMserver"},
                "560":{"message":"Message.DHCPIPRangeConfig"},
                "561":{"message":"Message.RedipAndBridgeipRangeCheck"}
			},
			"UPDATE":{
				"200":{"message":"Message.REDDeviceUpdateSuccess"},
				"500":{"message":"Message.REDDeviceUpdateFail"},
				"501":{"message":"Message.REDZone"},
				"502":{"message":"Message.RequestRoutingExisted"},
				"503":{"message":"Message.REDRecodExist"},
				"504":{"message":"Message.REDIDInvalid"},
				"511":{"message":"Message.REDInternalError"},
				"512":{"message":"Message.REDUnlockCodeNotMatch"},
				"513":{"message":"Message.REDCanNotReachProvServer"},
				"514":{"message":"Message.REDProvServerError"},
				"515":{"message":"Message.REDCreateCertificateError"},
				"516":{"message":"Message.REDDeleteCertificateError"},
				"517":{"message":"Message.REDConfigNotUpdatedServiceNotRunning"},
				"518":{"message":"Message.REDCreateTunnelFailed"},
				"519":{"message":"Message.REDDeleteTunnelFailed"},
				"520":{"message":"Message.REDInternalError"},
				"526":{"message":"Message.REDRecodNotExist"},
				"541":{"message":"Message.REDEntryNotUnique"},
				"542":{"message":"Message.REDIPAddress"},
				"544":{"message":"Message.DHCPREDIPNotInRange"},
				"543":{"message":"Message.REDIPCanNotBeInterfaceIP"},
				"545":{"message":"Message.DHCPServerLease_IP_Already_Assigned"},
				"546":{"message":"Message.REDDHCPRelayAlreadyConfiguredIPv4"},
				"560":{"message":"Message.DHCPIPRangeConfig"},
				"561":{"message":"Message.RedipAndBridgeipRangeCheck"}
			}
		}
	},
	"backend":{
		"uniqueName" : "name",
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.RealServerAddSuccess"},
				"500":{"message":"Message.RealServerAddFail"},
				"502":{"message":"Message.RealServerRecodExist"}
			},
			"UPDATE":{
				"200":{"message":"Message.RealServerUpdateSuccess"},
				"500":{"message":"Message.RealServerUpdateFail"},
				"503":{"message":"Message.MaxAllowedCharactersForFQDNOnWebserver"}
			},
			"DELETE":{
				"200":{"message":"Message.RealServerDeleteSuccess"},
				"204":{"message":"Message.RealServerDeletePartialFail"},
				"500":{"message":"Message.RealServerDeleteFail"},
				"504":{"message":"Message.RealServerInUse"}
			}
		}
	},
	"redconfiguration":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.REDConfigSuccess","url":"/red/REDGlobalSettings.html?mode=300&operation=" + Modes.RED_GLOBAL_SETTINGS},
				"500":{"message":"Message.REDConfigFailed"},
				"511":{"message":"Message.REDInternalError"},
				"512":{"message":"Message.REDUnlockCodeNotMatch"},
				"513":{"message":"Message.REDCanNotReachProvServer"},
				"514":{"message":"Message.REDProvServerError"},
				"515":{"message":"Message.REDCreateCertificateError"},
				"516":{"message":"Message.REDDeleteCertificateError"},
				"517":{"message":"Message.REDConfigNotUpdatedServiceNotRunning"},
				"518":{"message":"Message.REDCreateTunnelFailed"},
				"519":{"message":"Message.REDDeleteTunnelFailed"},
				"520":{"message":"Message.REDInternalError"},
				"541":{"message":"Message.REDdeviceisMemberOf"}
			}
		}
	},
	"automaticdevicedeauthorization":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.AutomaticDDSuccess","url":"/red/REDGlobalSettings.html?mode=300&operation=" + Modes.RED_GLOBAL_SETTINGS},
				"500":{"message":"Message.AutomaticDDFailed"},
				"517":{"message":"Message.REDConfigNotUpdatedServiceNotRunning"},
				"520":{"message":"Message.REDInternalError"},
			}
		}
	},
	"forcetls":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.ForceTLSSuccess","url":"/red/REDGlobalSettings.html?mode=300&operation=" + Modes.RED_GLOBAL_SETTINGS},
				"500":{"message":"Message.ForceTLSFailed"},
				"517":{"message":"Message.REDConfigNotUpdatedServiceNotRunning"},
				"520":{"message":"Message.REDInternalError"},
			}
		}
	},
	"runbetafirmware":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.UseBetaFWSuccess","url":"/red/REDGlobalSettings.html?mode=300&operation=" + Modes.RED_GLOBAL_SETTINGS},
			}
		}
	},
	"SecurityProfile":{
		"uniqueName" : "name",
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.ProtocolSecurityAddSuccess"},
				"500":{"message":"Message.ProtocolSecurityAddFail"},
				"502":{"message":"Message.ProtocolSecurityRecodExist"}
			},
			"UPDATE":{
				"200":{"message":"Message.ProtocolSecurityUpdateSuccess"},
				"500":{"message":"Message.ProtocolSecurityUpdateFail"}
			},
			"DELETE":{
				"200":{"message":"Message.ProtocolSecurityDeleteSuccess"},
				"204":{"message":"Message.ProtocolSecurityDeletePartialFail"},
				"500":{"message":"Message.ProtocolSecurityDeleteFail"},
				"504":{"message":"Message.ProtocolSecurityInUse"}
			}
		}
	},
	"webfilterexception":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.WebFilterExceptionUpdateSuccess"},
				"500":{"message":"Message.WebFilterExceptionUpdateFail"},
				"502":{"message":"Message.WebFilterExceptionRecordExist"}
			},
			"DELETE":{
				"200":{"message":"Message.WebFilterExceptionDeleteSuccess"},
				"500":{"message":"Message.WebFilterExceptionDeleteFail"}
			},
			"ADD":{
				"200":{"message":"Message.WebFilterExceptionAddSuccess"},
				"500":{"message":"Message.WebFilterExceptionAddFail"},
				"502":{"message":"Message.WebFilterExceptionRecordExist"},
                "522":{"message":"Message.WebExceptionsLimit"}
			},
		}
    },
	"useractivity":{
		"statusMappings":{
			"ADD":{
				"200":{ "message":"Message.UserActivityAddSuccess"},
				"500":{"message":"Message.UserActivityAddFail"},
				"502":{"message":"Message.UserActivityRecodExist"}
			},
			"UPDATE":{
				"200":{ "message":"Message.UserActivityUpdateSuccess"},
				"500":{"message":"Message.UserActivityUpdateFail"},
				"502":{"message":"Message.UserActivityRecodExist"}
			},
			"DELETE":{
				"200":{ "message":"Message.UserActivityDeleteSuccess"},
				"500":{"message":"Message.UserActivityInUse"},
				"504":{"message":"Message.UserActivityDeleteFail"}
			}
		}
	},
	"authprofile":{
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.ReverseAuthAddSuccess"},
				"500":{"message":"Message.ReverseAuthAddFail"},
				"502":{"message":"Message.ReverseAuthRecodExist"}
			},
			"UPDATE":{
				"200":{"message":"Message.ReverseAuthUpdateSuccess"},
				"500":{"message":"Message.ReverseAuthUpdateFail"}
			},
			"DELETE":{
				"200":{"message":"Message.ReverseAuthDeleteSuccess"},
				"204":{"message":"Message.ReverseAuthPartiallyInUse"},
				"500":{"message":"Message.ReverseAuthDeleteFail"},
				"504":{"message":"Message.ReverseAuthInUse"}
			}
		}
	},
	"formtemplate":{
		"uniqueName" : "name",
		"statusMappings":{
			"ADD":{
                  "200":{"message":"Message.FormTemplateAddSuccess"},
                  "500":{"message":"Message.FormTemplateAddFail"},
                  "502":{"message":"Message.FormTemplateRecodExist"}
			},
			"UPDATE":{
                  "200":{"message":"Message.FormTemplateUpdateSuccess"},
                  "500":{"message":"Message.FormTemplateUpdateFail"}
          	},
			"DELETE":{
				"200":{"message":"Message.FormTemplateDeleteSuccess","url":"/includes/ManagePage.jsp?datagridid=952&mode=301&operation=" +Modes.REVERSE_AUTH_FORM_TEMPLATE_DELTE},
				"204":{"message":"Message.FormTemplateDeletePartialFail","url":"/includes/ManagePage.jsp?datagridid=952&mode=301&operation=" +Modes.REVERSE_AUTH_FORM_TEMPLATE_DELTE},
				"500":{"message":"Message.FormTemplateDeleteFail"},
				"504":{"message":"Message.FormTemplateInUse"}
			}
		}
	},
        "SecurityHBGlobalConfiguration": {
                "statusMappings": {
                        "UPDATE": {
                                "200": {"message": "Message.HeartbeatSettingUpdated"},
                                "500": {"message": "Message.HeartbeatSettingUpdateFailed"}
                         }
                }
	},
  "EACAppConfiguration":{
    "statusMappings": {
      "UPDATE": {
        "200": {"message": "Message.EACAppModifySuccess"},
        "500": {"message": "Message.EACAppModifyFail"}
      }
    }
  },
	"up2date":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.PatternIntervalUpdateSuccess","url":"/system/Updates.html?mode=300&operation=" + Modes.AUTO_UPDATE_SETTING},
				"500":{"message":"Message.PatternIntervalUpdateFail"}
			}
		}
	},
	"adminserviceaccess":{
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.LocalServiceACLAddSuccess"},
				"500":{"message":"Message.LocalServiceACLAddFail"},
				"502":{"message":"Message.LocalServiceACLRecodExist"},
				"541":{"message":"Message.LocalServiceACLEnforceFail"}
			},
			"UPDATE":{
				"200":{"message":"Message.LocalServiceACLUpdateSuccess"},
				"500":{"message":"Message.LocalServiceACLUpdateFail"},
				"541":{"message":"Message.LocalServiceACLEnforceFail"}
			},
			"DELETE":{
				"200":{"message":"Message.LocalServiceACLDeleteSuccess"},
				"500":{"message":"Message.LocalServiceACLDeleteFail"}
			}
		}
	},
	"otptokens":{
		"uniqueName":"tokenid",
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.OTPAddSuccess","url":"/includes/ManagePage.jsp?datagridid=1719&mode=301&operation=" + Modes.DELETE_OTP_TOKEN},
				"500":{"message":"Message.OTPAddFail"}
			},
			"UPDATE":{
				"200":{"message":"Message.OTPUpdateSuccess","url":"/includes/ManagePage.jsp?datagridid=1719&mode=301&operation=" + Modes.DELETE_OTP_TOKEN},
				"500":{"message":"Message.OTPUpdateFail"}
			},
			"DELETE":{
				"200":{"message":"Message.OTPDeleteSuccess"},
				"500":{"message":"Message.OTPDeleteFail"}
			}
		}
	},
	"otpsettings": {
		"statusMappings": {
			"UPDATE": {
				"200": {"message": "Message.OTPUpdateSettingsSuccess", "url": "/includes/ManagePage.jsp?datagridid=1719&mode=301&operation=" + Modes.DELETE_OTP_TOKEN},
				"500": {"message": "Message.OTPUpdateSettingsFailure"}
			}
		}
	},
	"supportaccesssettings":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.SupportAccessUpdateSuccess"},
				"500":{"message":"Message.SupportAccessUpdateFail"}
		}
        }
    },
    "PublicKeyAuth":{
    	"statusMappings":{
            "UPDATE":{
            	"200":{"message":"Message.PubKeyAuthConfSuccess","url":"/system/LocalACL.jsp?mode=300&operation="+ Modes.DEFAULT_ADMIN_PASSWORD_CHANGE},
		"201":{"message":"Message.PubKeyAuthConfSuccess"},
		"202":{"message":"Message.PubKeyAuthConfSuccess"},
                "500":{"message":"Message.PubKeyAuthConfFail"},
                "505":{"message":"Message.InvalidPubKey"},
                "510":{"message":"Message.OneOrMoreInvalidPubKey"},
		"511":{"message":"Message.ED25519KeyNotSupported"},
                "515":{"message":"Language.IncorrectPassword"}
            }
        }
    },
    "advancedsmtpsetting":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.AdvancedSMTPSettingUpdateSuccess"},
				"545":{"message":"Message.MTAModeDisableCheck"},
				"500":{"message":"Message.AdvancedSMTPSettingUpdateFail"}
			}
        }
    },
    "smarthostsetting":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.SmarthostSettingUpdateSuccess"},
				"500":{"message":"Message.SmarthostSettingUpdateFail"},
				"541":{"message":"Message.SmarthostIPConflictWithInterfaceIP"}
			}
        }
    },
    "policyroute":{
    	"statusMappings":{
    		"ADD":{
				"200":{"message":"Message.PolicyRouteSuccess"},
				"500":{"message":"Message.PolicyRouteFailed"},
				"502":{"message":"Message.PolicyRouteExists"}
			},
			"UPDATE":{
				"200":{"message":"Message.PolicyRouteUpdateSuccess"},
				"500":{"message":"Message.PolicyRouteUpdateFailed"}
			},
			"DELETE":{
				"200":{"message":"Message.PolicyRouteDeleteSuccess","url":"/network/PolicyRoutingManage.jsp"},
				"500":{"message":"Message.PolicyRouteDeleteFail"}
			}
        }
    },
    "sdwanprofile":{
    	"statusMappings":{
    		"ADD":{
				"200":{"message":"Message.SDWANProfileSuccess"},
				"500":{"message":"Message.SDWANProfileFailed"},
				"502":{"message":"Message.SDWANProfileExists"},
				"503":{"message":"Message.SDWANProfileMaxLimit"}
			},
			"UPDATE":{
				"200":{"message":"Message.SDWANProfileUpdateSuccess"},
				"500":{"message":"Message.SDWANProfileUpdateFailed"}
			},
			"DELETE":{
				"200":{"message":"Message.SDWANProfileDeleteSuccess"},
				"500":{"message":"Message.SDWANProfileDeleteFail"},
				"504":{"message":"Message.SdWANProfileCanNotBeDeleted"},
			}
        }
    },
    "monitorobject":{
    	"statusMappings":{
    		"ADD":{
				"200":{"message":"Message.MonitorSDWANProfileSuccess"},
				"500":{"message":"Message.MonitorSDWANProfileFailed"},
				"502":{"message":"Message.MonitorSDWANProfileExists"},
				"503":{"message":"Message.SDWANProfileMaxLimit"},
				"504":{"message":"Message.SDWANProfileFailoverRules"}
			},
			"UPDATE":{
				"200":{"message":"Message.MonitorSDWANProfileUpdateSuccess"},
				"500":{"message":"Message.MonitorSDWANProfileUpdateFailed"},
				"504":{"message":"Message.SDWANProfileFailoverRules"}
			},
			"DELETE":{
				"200":{"message":"Message.SDWANProfileDeleteSuccess"},
				"204":{"message":"Message.SDWANProfilePartialDeleted"},
				"500":{"message":"Message.SDWANProfileDeleteFail"},
			}
        }
    },
    "migratedpolicyroute":{
    	"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.PolicyRouteMigratedUpdateSuccess","url":"/network/PolicyRoutingManage.jsp"},
				"500":{"message":"Message.PolicyRouteMigratedUpdateFailed"}
			},
			"DELETE":{
				"200":{"message":"Message.PolicyRouteMigratedDeleteSuccess","url":"/network/PolicyRoutingManage.jsp"},
				"500":{"message":"Message.PolicyRouteMigratedDeleteFail"}
			}
        }
    },
    "internetscheme":{
		"statusMappings":{
			"ADD":{
				"200":{"message":"Message.InternetSchemeAddSuccess"},
				"500":{"message":"Message.InternetSchemeAddFail"},
				"502":{"message":"Message.InternetSchemeRecodExist"}
			},
			"UPDATE":{
				"200":{"message":"Message.InternetSchemeUpdateSuccess"},
				"500":{"message":"Message.InternetSchemeUpdateFail"},
				"502":{"message":"Message.InternetSchemeRecodExist"}
			},
			"DELETE":{
				"200":{"message":"Message.InternetSchemeDeleteSuccess"},
				"500":{"message":"Message.InternetSchemeDeleteFail"}
			}
		}
	},
	"defaultinternetscheme":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.DefaultInternetSchemeUpdateSuccess"},
					"500":{"message":"Message.DefaultInternetSchemeUpdateFail"},
			}
		}
	},
	"firewallgroup": {
		"uniqueName":"groupname",
		"statusMappings": {
			"ADD": {
				"200": {"message": "Message.FWGroupAddSuccess",},
				"500": {"message": "Message.FWGroupAddFail"},
				"502": {"message": "Message.FWGroupRecordExists"},
				"503": {"message": "Message.FWDetachAndAddToGroup"},
				"504":{"message": "Message.LimitExceed"}
			},
			"UPDATE":{
				"200":{"message":"Message.RuleAddedSuccess"},
				"500":{"message":"Message.RuleAddFail"},
				"502":{"message":"Message.FWGroupRecordExists"},
				"503": {"message": "Message.FWDetachAndAddToGroup"},
				"504":{"message": "Message.LimitExceed"}
			},
			"DELETE": {
				"200": {"message": "Message.FWGroupDelSuccess",},
				"500": {"message": "Message.FWGroupRuleDeleteFail"}
			}
		}
	},
	"exceptionpolicy":{
		"statusMappings": {
			"ADD":{
				"200":{"message":"Message.ExceptionPolicyAddSuccess","url":"/emails/EmailRulesManage.jsp"},
				"500":{"message":"Message.ExceptionPolicyAddFailed"},
				"502":{"message":"Message.ExceptionPolicyduplicateName"},
				"541":{"message":"Message.EmailExceptionEmptySkip"},
				"542":{"message":"Message.EmailExceptionIPFQDNEmptyChk"},
				"543":{"message":"Message.EmailExceptionSenderChk"},
				"544":{"message":"Message.EmailExceptionRecipientChk"},
				"545":{"message":"Message.EmailExceptionIPSenderRcptChk"},
				"546":{"message":"Message.MTAModeDisableCheck"}
			},
			"UPDATE": {
				"200": {
					"message": "Message.ExceptionPolicyUpdateSuccess",
					"url": "/emails/EmailRulesManage.jsp"
				},
				"500": {
					"message": "Message.ExceptionPolicyUpdateFail"
				},
				"541":{"message":"Message.EmailExceptionEmptySkip"},
				"542":{"message":"Message.EmailExceptionIPFQDNEmptyChk"},
				"543":{"message":"Message.EmailExceptionSenderChk"},
				"544":{"message":"Message.EmailExceptionRecipientChk"},
				"545":{"message":"Message.EmailExceptionIPSenderRcptChk"},
				"546":{"message":"Message.MTAModeDisableCheck"}
			},
			"DELETE":{
				"200":{"message":"Message.ExceptionPolicyDeleteSuccess","url":"/emails/EmailRulesManage.jsp"},
				"500":{"message":"Message.ExceptionPolicyDeleteFailed"}
			}
		}
	},
	"smtpblockedemailaddresses":{
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.ExceptionUpdatedSuccess",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation=78"
				},
				"500": {
					"message": "Message.ExceptionUpdateFail"
				}
			}
		}
	},
	"dkimsigning":{
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.DKIMSigningUpdateSuccess",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation=78"
				},
				"500": {
					"message": "Message.DKIMSigningUpdateFail"
				},
				"502": {
					"message": "Message.DkimSigningRecordExists"
				}
			},
			"ADD": {
				"200": {
					"message": "Message.DKIMSigningAddSuccess",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation=78"
				},
				"500": {
					"message": "Message.DKIMSigningAddFail"
				},
				"502": {
					"message": "Message.DkimSigningRecordExists"
				}
			},
			"DELETE": {
				"200": {
					"message": "Message.DKIMSigningDeleteSuccess",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation=78"
				},
				"500": {
					"message": "Message.DKIMSigningDeleteFail"
				}
			}
		}
	},
	"dkimverification":{
		"uniqueName": "",
		"statusMappings": {
			"UPDATE": {
				"200": {
					"message": "Message.DKIMVerificationUpdateSuccess",
					"url": "/antivirus/AVGeneralConfiguration.jsp?mode=300&operation=78"
				},
				"500": {
					"message": "Message.DKIMVerificationUpdateFail"
				}
			}
		}
	},
	"chromebookssologin": {
		"statusMappings": {
			"UPDATE": {
				"200": {"message": "Message.ChromebookSSOSuccess"},
				"500": {"message": "Message.ChromebookSSOValidationFailed"},
				"501": {"message": "Message.ChromebookSSOInternalError"},
				"502": {"message": "Message.ChromebookSSOInternalError"},
				"503": {"message": "Message.ChromebookSSOValidationFailed"},
				"504": {"message": "Message.PortAlreadyExists"},
				"505": {"message": "Message.ChromebookSSOValidationFailed"},
				"506": {"message": "Message.ChromebookSSOValidationFailed"},
				"507": {"message": "Message.ChromebookSSOValidationFailed"},
				"508": {"message": "Message.ChromebookSSOValidationFailed"},
				"509": {"message": "Message.ChromebookSSOValidationFailed"},
				"510": {"message": "Message.ChromebookSSOInternalError"},
				"511": {"message": "Message.ChromebookSSOInternalError"}
			}
		}
	},
	"hotspotuserportal":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.PasswordUpdateSuccess"},
				"500":{"message":"Message.PasswordUpdateFail"}
			}
		}
	},
	"PerConnectionAuth":{
		"statusMappings":{
			"UPDATE":{
				"200":{"message":"Message.PerConnectionAuthUpdateSuccess"},
				"500":{"message":"Message.PerConnectionAuthUpdateFail"}
			}
		}
	}
};
