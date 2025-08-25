Events.on(ClientLoadEvent, e => {
let voidPl = Vars.content.getByName(ContentType.planet, "nihil-void-pl")
voidPl.campaignRuleDefaults.fog = true;
voidPl.campaignRuleDefaults.showSpawns = true;
voidPl.campaignRuleDefaults.rtsAI = true;
});