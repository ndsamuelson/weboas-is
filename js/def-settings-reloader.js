const DEF_SETTINGS_RELOADER = {};

DEF_SETTINGS_RELOADER._settings = {
	_timeOffset: (86400000)*90	//90 days since last update, in milliseconds
	,_lastCheckedAtID: "last-updated-at"	//ID for the localStorage key
}

/**
 * @description Gets the last time it was checked
 * @returns Will return the timestamp if it has been set; else, it will return 0.
 */
DEF_SETTINGS_RELOADER._getLastCheckedAt =  function(){
	let localSValue = localStorage.getItem(DEF_SETTINGS_RELOADER._settings._lastCheckedAtID);
	return (localSValue) ? parseInt(localSValue) : 0;
}

/**
 * @description Gets the last time since the last settings set-up
 * @returns Milliseconds since the last call
 */
DEF_SETTINGS_RELOADER._getTimeSinceLastCheck = function(){
	return (new Date().getTime() - DEF_SETTINGS_RELOADER._getLastCheckedAt());
}

/**
 * @description Wether it has passed enough time for the set-up
 * @returns true if more time than the one set in _timeOffset has passed; false otherwise.
 */
DEF_SETTINGS_RELOADER._hasTimePassed = function(){
	let lastTimeChecked = DEF_SETTINGS_RELOADER._getTimeSinceLastCheck();
	let offset = DEF_SETTINGS_RELOADER._settings._timeOffset;

	if(DEF_SETTINGS_RELOADER._getLastCheckedAt() == 0){
		//Hasn't been set. Set as of now, so we start counting from now on.
		DEF_SETTINGS_RELOADER._setLastUpdatedAt();
		return false;
	}
	return (lastTimeChecked > offset);
}

/**
 * @description Sets the last updated-at time for the user into localStorage
 */
DEF_SETTINGS_RELOADER._setLastUpdatedAt = function(){
	localStorage.setItem(DEF_SETTINGS_RELOADER._settings._lastCheckedAtID, new Date().getTime()+"");
}

/**
 * @description Sets the required settings back to default.
 */
DEF_SETTINGS_RELOADER._setDefaultSettings = function(){
	//+Handling the menu settings
	localStorage.setItem("menu-items", JSON.stringify(defaultLinkMenu));
	DEF_SETTINGS_RELOADER._setLastUpdatedAt();
	buildMenu();
	//-Handling the menu settings
}

/**
 * @description Sets the settings module and attaches to the required methods
 * - Will update when a menu link is removed
 * - Will update when a menu link is added
 */
DEF_SETTINGS_RELOADER._init = ()=>{

	let definedWindowFunctions = [
		'addLinkToMenu','removeLinkFromMenu'
	];
	let checkInterval = setInterval(()=>{	//Interval that checks for each link to execute
		let hasUndefinedFunction = definedWindowFunctions.find((funcName)=>{	//Defined window function
			if(typeof window[funcName] !== "function"){
				return true;
			}
		});

		if(!hasUndefinedFunction){	//If all elements are defined functions
			//When a link is added
			let _origin_addLinkToMenu = window.addLinkToMenu;
			window.addLinkToMenu = (...args)=>{
				DEF_SETTINGS_RELOADER._setLastUpdatedAt();
				return _origin_addLinkToMenu(...args);
			}
		
			//When a link is removed
			let _origin_removeLinkFromMenu = window.removeLinkFromMenu;			
			window.removeLinkFromMenu = (...args)=>{
				DEF_SETTINGS_RELOADER._setLastUpdatedAt();
				return _origin_removeLinkFromMenu(...args);
			}
		
			if(DEF_SETTINGS_RELOADER._hasTimePassed()){
				DEF_SETTINGS_RELOADER._setDefaultSettings();
			}
			clearInterval(checkInterval);
		}
	},50);
}

DEF_SETTINGS_RELOADER._init();