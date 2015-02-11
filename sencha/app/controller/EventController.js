Ext.define('grapefruit.controller.EventController', {
    extend: 'Ext.app.Controller',

    config: {
    	refs: {

    	},
    	control: {

    	}
    },

    createAdMob: function() {
        console.log('trying');
        try {
            var admobid = {
                banner : 'ca-app-pub-9388389228333668/9907026960'
            };
            console.log('still trying');
            if(window.AdMob) {
                console.log('success?');
                window.AdMob.createBanner({
                    adId: admobid.banner,
                    position: AdMob.AD_POSITION.BOTTOM_CENTER,
                    autoShow: true
                });
            } else {
                console.log('mother fucker');
            }
        } catch (e) {
            console.log(e);
        }
    }
});
