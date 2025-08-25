const nullWall = extend(Wall, "nullyte-wall", {});
const nullWallLarge = extend(Wall, "nullyte-wall-large", {});

const sufferFrag = extend(BasicBulletType, {
    speed: 4,
    lifetime: 25,
    width: 10,
    height: 14,
	damage: 18,
    backColor: Color.valueOf("210a41"),
    frontColor: Color.valueOf("292668"),
    trailColor: Color.valueOf("210a41"),
    trailWidth: 2,
    trailLength: 8,
    homingPower: 0.05,
    homingRange: 55,
});
var bullet = new Stat("bullet", StatCat.function);
var bulletChance = new Stat("bulletChance", StatCat.function);
var bulletsAmount = new Stat("bulletsAmount", StatCat.function);
const sufferingWall = extend(Wall, "suffering-wall", {
    setStats() {
		this.super$setStats();
		this.stats.add(bulletChance, (0.1 * 100), StatUnit.percent);
		this.stats.add(bulletsAmount, 6, StatUnit.none);
		this.stats.add(bullet, StatValues.ammo(ObjectMap.of(this, sufferFrag)));
	}
});
sufferingWall.buildType = () => extend(Wall.WallBuild, sufferingWall, {
	collision(bullet) {
        this.super$collision(bullet);
        if(Mathf.chance(0.1)) {
            Sounds.shootSnap.at(this);
            for(var i = 0; i < 6; i++) {
                sufferFrag.create(this, this.x, this.y, 60 * i);
            }
        }
        return true;
    }
});
const sufferingWallLarge = extend(Wall, "suffering-wall-large", {
    setStats() {
		this.super$setStats();
		this.stats.add(bulletChance, (0.1 * 100), StatUnit.percent);
		this.stats.add(bulletsAmount, 6, StatUnit.none);
		this.stats.add(bullet, StatValues.ammo(ObjectMap.of(this, sufferFrag)));
	}
});
sufferingWallLarge.buildType = () => extend(Wall.WallBuild, sufferingWallLarge, {
	collision(bullet) {
        this.super$collision(bullet);
        if(Mathf.chance(0.1)) {
            Sounds.shootSnap.at(this);
            for(var i = 0; i < 6; i++) {
                sufferFrag.create(this, this.x, this.y, 60 * i);
            }
        }
        return true;
    }
});