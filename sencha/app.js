Ext.Loader.setPath({
    'Ext': 'touch/src',
    'grapefruit': 'app'
});

Ext.application({
    name: 'grapefruit',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    controllers: [
        'EventController'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    launch: function() {
        var scope = this;
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('grapefruit.view.Main'));

        //Create admob
        grapefruit.app.getController('EventController').createAdMob();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
