goog.provide('npfTransition.CssAnimation');

goog.require('npf.fx.KeyframeAnimation');
goog.require('npf.fx.css3.easing');


/**
 * @param {Element} element
 * @param {number} time
 * @param {Array.<number>|string=} opt_acc
 * @constructor
 * @extends {npf.fx.KeyframeAnimation}
 */
npfTransition.CssAnimation = function(element, time, opt_acc) {
	goog.base(this, element, time, this._getEasing(opt_acc));
};
goog.inherits(npfTransition.CssAnimation, npf.fx.KeyframeAnimation);


/**
 * @enum {Array.<number>}
 */
npfTransition.CssAnimation.Easing = {
	'linear': npf.fx.css3.easing.LINEAR,
	'ease': npf.fx.css3.easing.EASE,
	'easeIn': npf.fx.css3.easing.EASE_IN,
	'easeOut': npf.fx.css3.easing.EASE_OUT,
	'easeInOut': npf.fx.css3.easing.EASE_IN_OUT,
	'easeInQuad': npf.fx.css3.easing.EASE_IN_QUAD,
	'easeInCubic': npf.fx.css3.easing.EASE_IN_CUBIC,
	'easeInQuart': npf.fx.css3.easing.EASE_IN_QUART,
	'easeInQuint': npf.fx.css3.easing.EASE_IN_QUINT,
	'easeInSine': npf.fx.css3.easing.EASE_IN_SINE,
	'easeInExpo': npf.fx.css3.easing.EASE_IN_EXPO,
	'easeInCirc': npf.fx.css3.easing.EASE_IN_CIRC,
	'easeInBack': npf.fx.css3.easing.EASE_IN_BACK,
	'easeOutQuad': npf.fx.css3.easing.EASE_OUT_QUAD,
	'easeOutCubic': npf.fx.css3.easing.EASE_OUT_CUBIC,
	'easeOutQuart': npf.fx.css3.easing.EASE_OUT_QUART,
	'easeOutQuint': npf.fx.css3.easing.EASE_OUT_QUINT,
	'easeOutSine': npf.fx.css3.easing.EASE_OUT_SINE,
	'easeOutExpo': npf.fx.css3.easing.EASE_OUT_EXPO,
	'easeOutCirc': npf.fx.css3.easing.EASE_OUT_CIRC,
	'easeOutBack': npf.fx.css3.easing.EASE_OUT_BACK,
	'easeInOutQuad': npf.fx.css3.easing.EASE_IN_OUT_QUAD,
	'easeInOutCubic': npf.fx.css3.easing.EASE_IN_OUT_CUBIC,
	'easeInOutQuart': npf.fx.css3.easing.EASE_IN_OUT_QUART,
	'easeInOutQuint': npf.fx.css3.easing.EASE_IN_OUT_QUINT,
	'easeInOutSine': npf.fx.css3.easing.EASE_IN_OUT_SINE,
	'easeInOutExpo': npf.fx.css3.easing.EASE_IN_OUT_EXPO,
	'easeInOutCirc': npf.fx.css3.easing.EASE_IN_OUT_CIRC,
	'easeInOutBack': npf.fx.css3.easing.EASE_IN_OUT_BACK
};

/**
 * @type {?function(number, Element)}
 */
npfTransition.CssAnimation.prototype.onBeginHandler = null;

/**
 * @type {?function(number, Element)}
 */
npfTransition.CssAnimation.prototype.onEndHandler = null;

/**
 * @type {?function(number, Element)}
 */
npfTransition.CssAnimation.prototype.onFinishHandler = null;

/**
 * @type {?function(number, Element)}
 */
npfTransition.CssAnimation.prototype.onPauseHandler = null;

/**
 * @type {?function(number, Element)}
 */
npfTransition.CssAnimation.prototype.onPlayHandler = null;

/**
 * @type {?function(number, Element)}
 */
npfTransition.CssAnimation.prototype.onResumeHandler = null;

/**
 * @type {?function(number, Element)}
 */
npfTransition.CssAnimation.prototype.onStopHandler = null;

/**
 * @type {?function(number, Element)}
 */
npfTransition.CssAnimation.prototype.onIterationHandler = null;


/** @inheritDoc */
npfTransition.CssAnimation.prototype.disposeInternal = function() {
	goog.base(this, 'disposeInternal');

	delete this.onBeginHandler;
	delete this.onEndHandler;
	delete this.onFinishHandler;
	delete this.onPauseHandler;
	delete this.onPlayHandler;
	delete this.onResumeHandler;
	delete this.onStopHandler;
	delete this.onIterationHandler;
};

/**
 * @param {boolean=} opt_restart
 * @return {npf.fx.KeyframeAnimation}
 */
npfTransition.CssAnimation.prototype.play = function(opt_restart) {
	goog.base(this, 'play', opt_restart);

	return this;
};

/**
 * @return {npf.fx.KeyframeAnimation}
 */
npfTransition.CssAnimation.prototype.pause = function() {
	goog.base(this, 'pause');

	return this;
};

/**
 * @param {boolean=} opt_gotoEnd
 * @return {npf.fx.KeyframeAnimation}
 */
npfTransition.CssAnimation.prototype.stop = function(opt_gotoEnd) {
	goog.base(this, 'stop', !!opt_gotoEnd);

	return this;
};

/**
 * @param {Array.<number>|string=} opt_easing
 * @return {Array.<number>?}
 * @private
 */
npfTransition.CssAnimation.prototype._getEasing = function(opt_easing) {
	if (goog.isString(opt_easing)) {
		return /** @type {Array.<number>} */ (npfTransition.CssAnimation.Easing[opt_easing] || null);
	} else if (goog.isArray(opt_easing)) {
		return opt_easing;
	}

	return null;
};

/**
 * @param {number} count 0 — infinite
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.setIterationCount = function(count) {
	goog.base(this, 'setIterationCount', count);

	return this;
};

/**
 * @param {number} delay in ms
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.setDelay = function(delay) {
	goog.base(this, 'setDelay', delay);

	return this;
};

/**
 * @param {string} direction
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.setDirection = function(direction) {
	/** @type {npf.fx.KeyframeAnimation.Direction} */
	var d = '' == direction ? npf.fx.KeyframeAnimation.Direction.ALTERNATE : npf.fx.KeyframeAnimation.Direction.NORMAL;

	goog.base(this, 'setDirection', d);

	return this;
};

/**
 * @param {Object.<string,string|number>} fromRules
 * @param {Object.<string,string|number>} toRules
 * @param {string|Array.<number>=} opt_fromAcc
 * @param {string|Array.<number>=} opt_toAcc
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.fromTo = function(fromRules, toRules, opt_fromAcc, opt_toAcc) {
  this.from(fromRules, opt_fromAcc);

  return this.to(toRules, opt_toAcc);
};

/**
 * @param {Object.<string,string|number>} rules
 * @param {string|Array.<number>=} opt_acc
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.from = function(rules, opt_acc) {
	return this.insertKeyframe(rules, 0, opt_acc);
};

/**
 * @param {Object.<string,string|number>} rules
 * @param {string|Array.<number>=} opt_acc
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.to = function(rules, opt_acc) {
	return this.insertKeyframe(rules, 100, opt_acc);
};

/**
 * @param {Object.<string,string|number>} rules
 * @param {number} position from 0 to 100
 * @param {string|Array.<number>=} opt_acc
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.insertKeyframe = function(rules, position, opt_acc) {
	goog.base(this, 'insertKeyframe', rules, position, this._getEasing(opt_acc));

	return this;
};

/**
 * @param {string} fromTransform
 * @param {string} toTransform
 * @param {string|Array.<number>=} opt_fromAcc
 * @param {string|Array.<number>=} opt_toAcc
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.fromToTransformRule = function(fromTransform, toTransform, opt_fromAcc, opt_toAcc) {
	goog.base(this, 'fromToTransformRule', fromTransform, toTransform, this._getEasing(opt_fromAcc), this._getEasing(opt_toAcc));

	return this;
};

/**
 * @param {string} transform
 * @param {string|Array.<number>=} opt_acc
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.fromTransformRule = function(transform, opt_acc) {
	goog.base(this, 'fromTransformRule', transform, this._getEasing(opt_acc));

	return this;
};

/**
 * @param {string} transform
 * @param {string|Array.<number>=} opt_acc
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.toTransformRule = function(transform, opt_acc) {
	goog.base(this, 'toTransformRule', transform, this._getEasing(opt_acc));

	return this;
};

/**
 * @param {string} transform
 * @param {number} position
 * @param {string|Array.<number>=} opt_acc
 * @return {!npfTransition.CssAnimation}
 */
npfTransition.CssAnimation.prototype.setTransformRule = function(transform, position, opt_acc) {
	goog.base(this, 'setTransformRule', transform, position, this._getEasing(opt_acc));

	return this;
};

/** @inheritDoc */
npfTransition.CssAnimation.prototype.onBegin = function() {
	goog.base(this, 'onBegin');

	this._runHandler(this.onBeginHandler);
};

/** @inheritDoc */
npfTransition.CssAnimation.prototype.onEnd = function() {
	goog.base(this, 'onEnd');

	this._runHandler(this.onEndHandler);
};

/** @inheritDoc */
npfTransition.CssAnimation.prototype.onFinish = function() {
	goog.base(this, 'onFinish');

	this._runHandler(this.onFinishHandler);
};

/** @inheritDoc */
npfTransition.CssAnimation.prototype.onPause = function() {
	goog.base(this, 'onPause');

	this._runHandler(this.onPauseHandler);
};

/** @inheritDoc */
npfTransition.CssAnimation.prototype.onPlay = function() {
	goog.base(this, 'onPlay');

	this._runHandler(this.onPlayHandler);
};

/** @inheritDoc */
npfTransition.CssAnimation.prototype.onResume = function() {
	goog.base(this, 'onResume');

	this._runHandler(this.onResumeHandler);
};

/** @inheritDoc */
npfTransition.CssAnimation.prototype.onStop = function() {
	goog.base(this, 'onStop');

	this._runHandler(this.onStopHandler);
};

/** @inheritDoc */
npfTransition.CssAnimation.prototype.onIteration = function() {
	goog.base(this, 'onIteration');

	this._runHandler(this.onIterationHandler);
};

/**
 * @param {function(number,Element)?} handler
 * @private
 */
npfTransition.CssAnimation.prototype._runHandler = function(handler) {
	if (goog.isFunction(handler)) {
		handler(this.duration, this.element);
	}
};
