const voidF = extend(Floor, "void", {});
const voidWall = extend(StaticWall, "void-wall", {});
const voidPit = extend(Floor, "void-pit", {
    icons: function(){
        return [
            Core.atlas.find(this.name + "-icon")
		];
    }
});
const voidPlate = extend(SteamVent, "void-plate", {});
const FallenPlate = extend(Floor, "fallen-plate", {});
const bloodinumOre = extend(OreBlock, "bloodinum-ore", {});
const demisiteOre = extend(OreBlock, "demisite-ore", {});
const suffelinOre = extend(OreBlock, "suffelin-ore", {});