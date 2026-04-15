class Panel {
	/**
	 * Creates a new Panel consisting of a sign and an exit tab.
	 * @param {string} color - Background color of the sign and exit tab.
	 * @param {Sign} sign - Sign to make up the panel.
	 * @param {String} corner - Choice of Sharp or Rounded Corners on the Panel
	 * @param {ExitTab} [exitTab=null] - Optional exit tab to include in the panel.
	 */
	constructor(sign, color, exitTab = null, corner, aspectRatio) {
		if (Object.keys(lib.colors).includes(color)) {
			this.color = color;
		} else {
			this.color = "Green";
		}
		if (Object.keys(this.cornerType).includes(corner)) {
			this.corner = corner;
		} else {
			this.corner = this.cornerType[0];
		}
		if (this.aspectRatios.includes(aspectRatio)) {
			this.aspectRatio = aspectRatio;
		} else {
			this.aspectRatio = "Auto";
		}
		this.sign = sign;
		this.exitTab = exitTab;
	}
}
Panel.prototype.cornerType = ["Round", "Sharp"];
Panel.prototype.aspectRatios = [
	"Auto",
	"1:1",
	"4:3",
	"3:4",
	"16:9",
	"9:16",
	"16:10",
	"10:16",
	"5:4",
	"4:5",
	"16:20",
	"20:16",
	"2:1",
	"1:2"
];
