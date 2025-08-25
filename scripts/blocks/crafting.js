const nuller = extend(GenericCrafter, "nuller", {});
const bloodStomper = extend(GenericCrafter, "blood-stomper", {});
const alloyCutter = extend(GenericCrafter, "alloy-cutter", {});
const steelForge = extend(GenericCrafter, "steel-forge", {
    icons: function(){
        return [
            Core.atlas.find(this.name + "-icon")
		];
    }
});