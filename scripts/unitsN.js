const clover = extend(UnitType, "clover", {});
clover.constructor = () => extend(LegsUnit, {});

const prospect = extend(UnitType, "prospect", {});
prospect.constructor = () => extend(UnitEntity, {});

const glaive = extend(UnitType, "glaive", {});
glaive.constructor = () => extend(LegsUnit, {});

const recharge = extend(UnitType, "recharge", {});
recharge.constructor = () => extend(LegsUnit, {});

const symbol = extend(UnitType, "symbol", {});
symbol.constructor = () => extend(MechUnit, {});

const letter = extend(UnitType, "letter", {});
letter.constructor = () => extend(MechUnit, {});

const blaster = extend(UnitType, "blaster", {});
blaster.constructor = () => extend(UnitEntity, {});

const plane = extend(UnitType, "plane", {});
plane.constructor = () => extend(UnitEntity, {});

const bomb = extend(UnitType, "bomb", {});
bomb.constructor = () => extend(MechUnit, {});

const turret = extend(UnitType, "turret", {});
turret.constructor = () => extend(TankUnit, {});