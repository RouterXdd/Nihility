const charged = extend(StatusEffect, "charged", {});
const powerout = extend(StatusEffect, "powerout", {
    init() {
        this.opposite(charged);
    }
});
const bloodshred = extend(StatusEffect, "bloodshred", {});
const fading = extend(StatusEffect, "fading", {});