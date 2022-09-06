const SupportWindow = WindowComponent.extend({
    name: "SupportWindow",
    computed: {
        socialBoost(){
            return game.prestige.upgrades.socialBoost.apply();
        }
    },
    template: `<window class="support-window" title="Support Me">
        <p class="text-xl padding-l center">Thanks for playing! Your Matter production is increased by x{{socialBoost | ftnum}}!</p>
    </window>`
});