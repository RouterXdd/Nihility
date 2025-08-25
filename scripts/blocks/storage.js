const coreJustice = extend(CoreBlock, "core-justice", {
    icons: function(){
        return [
            Core.atlas.find(this.name + "-icon")
		];
    }
});

const coreVesselTurret = extend(PowerTurret, "core-vessel-turret", {});
const coreVessel = extend(CoreBlock, "core-vessel", {
	drawPlace(x, y, rotation, valid) {
		this.super$drawPlace(x, y, rotation, valid);
		Drawf.dashCircle(x * 8 + this.offset, y * 8 + this.offset, 200, Pal.accent);
	},
    icons: function(){
        return [
            Core.atlas.find(this.name + "-icon")
		];
    }
});

coreVessel.buildType = prov(() => {
	const p = new BuildPayload(coreVesselTurret, Team.derelict);
	return extend(CoreBlock.CoreBuild, coreVessel, {
		updateTile() {
			this.super$updateTile();
			if (p.build.team != this.team) {
				p.build.team = this.team;
			}
			p.update(null, this);
			p.set(this.x, this.y, p.build.payloadRotation);
		},
		draw() {
			this.super$draw();
				p.draw();
		},
		drawSelect() {
			this.super$drawSelect();
			Drawf.dashCircle(this.x, this.y, 200, Pal.accent);
		}
	})
});