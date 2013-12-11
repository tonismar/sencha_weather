Ext.define('Dinmu.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'main',
            settingsView: 'settingsview',

            btnSettings: 'main button[action=settings]',
            btnRefresh: 'settingsview button[action=refresh]',
            btnBack: 'main button[action=back]',

            toggleGeo: 'settingsview togglefield',
            fieldCity: 'settingsview textfield[name=city]',
            fieldCountry: 'settingsview textfield[name=country]',
            fieldUnits: 'settingsview selectedfield',

            stores: 'Dinmu.store.Settings'

        },
        control: {
            'btnRefresh': {
                tap: 'onRefresh'
            },
            'btnSettings': {
                tap: 'onSettingsBtnTap'
            },
            'btnBack': {
                tap: 'onBackBtnTap'
            },
            'toggleGeo': {
                change: 'onToggle'
            },
            'mainView': {
                activeitemchange: 'onCarouselChange'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    }
});
