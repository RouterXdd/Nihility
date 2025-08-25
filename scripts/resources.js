const bloodinum = extend(Item, "bloodinum", {}); //mineable material
const demisite = extend(Item, "demisite", {}); //mineable material
const nullyte = extend(Item, "nullyte", {});
const suffelin = extend(Item, "suffelin", {}); //mineable material
const zeroAlloy = extend(Item, "zero-alloy", {});
const sufferingMetal = extend(Item, "suffering-metal", {});
const expositron = extend(Item, "expositron", {}); //mineable material
const annihilationMass = extend(Item, "anni-mass", {});
const pureVoid = extend(Item, "pure-void", {});
const emptynessAlloy = extend(Item, "emptyness-alloy", {});
const lifeElement = extend(Item, "life-element", {});
//Faded items
const fallenFragment = extend(Item, "fallen-fragment", {});
//Windingers items
const winding = extend(Item, "winding", {});

//Liquids
const blood = extend(Liquid, "blood", {});
const plasma = extend(Liquid, "plasma", {});

const determination = extend(Liquid, "determination", {});

module.exports = {
    bloodinum: bloodinum,
    demisite: demisite,
    nullyte: nullyte,
    suffelin: suffelin,
    zeroAlloy: zeroAlloy,
    sufferingMetal: sufferingMetal,
    expositron: expositron,
    annihilationMass: annihilationMass,
    pureVoid: pureVoid,
    emptynessAlloy: emptynessAlloy,
    lifeElement: lifeElement,
    fallenFragment: fallenFragment,
    winding: winding,
    blood: blood,
    
    determination: determination,
}