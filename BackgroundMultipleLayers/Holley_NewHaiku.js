(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Holley_NewHaiku_atlas_1", frames: [[0,0,1526,97]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Holley_NewHaiku_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.circlebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("AUNAAQAAIXl7F7Ql6F7oYAAQoXAAl6l7Ql7l7AAoXQAAoXF7l6QF6l7IXAAQIYAAF6F7QF7F6AAIXg");
	this.shape.setTransform(22.25,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuROSQl6l6gBoYQABoXF6l6QF7l6IWAAQIYAAF6F6QF6F6AAIXQAAIYl6F6Ql6F7oYgBQoWABl7l7g");
	this.shape_1.setTransform(22.25,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC33FF").s().p("AuROSQl6l6gBoYQABoXF6l6QF7l6IWAAQIYAAF6F6QF6F6AAIXQAAIYl6F6Ql6F7oYgBQoWABl7l7g");
	this.shape_2.setTransform(22.25,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-131.9,260.5,260.5);


(lib.Candle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AAFByQgKgDgHgIQgKgMgEgbQgDgcgHgNIgIgNQgGgIgCgFQgDgKADgXIANhOQAhA3ApAwQATAWABAPQAAAJgFANIgJAWIgFAWQgEANgIAGQgFAEgHAAIgHgBg");
	this.shape.setTransform(11.0829,-106.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AAUKKIgmgHQgagGgNgBQgbgEhYACQhIABgpgNIgigMIAAgGQAEhPgHhyQgKiAgDhAQgIiMAFjEIALlSIAAgCQCEgKCCgfIArgJQAUgDAQAAQAHAGAJABQAHABAIgDIAVAGQAjALAMACQAjAHAvgIIBIgOQApgFAcAKIAEABQgCAOABASQABAbAEA1QAFA1ABAbQABAogEAzQgCAbgIBAQgZDYgDCRQgEC+AdCdIgKADIg5AWQhNAehVAJQgWACgTAAQgYAAgUgDgAlLo8QAKgNAIgDQAEgCAOgBQBdAABIgLQACANADAKQhuAVhyADQAHgDALgOgABxpDQgLgDgVgHIgBg9QAhgDAfACQAdACARAHQAJAEAiAWQAaAQATABQgxAThHADIgRAAQgQAAgMgCg");
	this.shape_1.setTransform(10.4938,-1.9196);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOQbIgkgHQgYgFgNgBQgUgDgpAAQhNABgfgBQg8gDgtgOQgdgIgMgNQgHgHgDgKQgLgEgGgKQgGgKgCgPQgBgKABgSQAFhdgJiNIgOjpQgEhwAHi/QAIjVgBhUQgRgMgFggQgIg3AggyQAggyA1gQQAbgIBDgBQA4AAAogFIAOgCIAGgpIAViCIAEgZQgDgKgBgYQgBgggJgRQgDgHgJgMQgJgMgDgHQgGgOABgVQAAgVAEgfIANhKQAEgZAAgKQgBgHgGgbQgLgzARgcQAJgNAWgPQAZgQAQABQAMACAKAKQAJAJAEANQAGARgDAhQgBAOACAGQADAHAGAGIAOAJQAVAPAXAkQAdAuAJAKIAXAYQAOAPAGAMQANAXAAAeQAAAYgHAdQgEAQgMAjQgMAkgMAOQgMAQgWAKQAJAQAAAgIAAA4QBegLA9AiIAbAQQAQAKAKAFQAIADAvANQAhAIAQAPQAcAaABA+QAAAXgDAOQAGAIACAKQADALABAQIgBAcQgBAYAFAnIAGA+QACAxgIBZIgSDDQgRC5gBBeQgCCbAdB5QAKAqgDAVQgCAJgEAHIgCAFQgIAUgTAGQgJADgOABIgYACQgLACgNAGIgYALQgkARg4AMQhSAUhAAAQgbAAgYgEgAg3OyQANABAaAGIAmAHQAkAFAxgEQBUgJBNgeIA6gWIAKgDQgeicAEi/QADiRAajZQAHhAACgbQAFgzgCgoQAAgagFg1QgFg1gBgbQAAgSACgOIgEgBQgdgKgpAFIhHAOQgwAIgjgHQgMgCgigLIgVgGQgIADgIgBQgIgBgIgFQgPgBgVADIgrAJQiBAgiEAJIAAACIgLFRQgFDFAHCMQAEBAAJCAQAHBygDBPIgBAHIAjALQApANBIgBIAzgBQAtAAATADgAkmkZQgOABgDACQgIADgLANQgLAOgGADQBygDBugVQgDgKgCgMQhJAKhdAAgABSlUIAAA9QAVAIAMACQASAEAagCQBIgDAxgTQgTgBgagQQgigWgJgEQgSgHgcgCIgaAAQgTAAgTABgAgtsCQgDAXAEAKQABAGAGAIIAJANQAGANADAcQAEAbAKAMQAGAIALADQALADAJgGQAHgGAEgNIAFgWIAJgWQAGgNgBgJQAAgPgUgXQgpgwghg3g");
	this.shape_2.setTransform(10.3224,-32.9492);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Candle, new cjs.Rectangle(-33.8,-138.4,88.3,210.9), null);


(lib.BirthdayCake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AwfM5QiogChmgKQiTgPhzgnQiHgshnhTQhwhZg0h2Qg6iFAQikQAGhJAYgrQAfg3BIgjQAxgXBZgWIM0jPQA1gNAEgcQACgPgLgNQgKgNgQgEQgHgCgKAAQA2gkBKgWIBIgTQAugLAZgIQAbgJBUgiQBFgcAsgKIAvgKQAcgGASgHIAwgXQAdgPAUgEQAMgCAXgBIAagBQgTBYgOA3QgdBsglBTQgPAjgiBFQgeA+gNAsQgIAbgLA3QgMA1gIAbIgGAVQgNAKgHATIgCAEQgIALgBAMQgBAKAFAJIAAAHIACBGQAAAogEAdQgDAQgGAbIgKArQgIAoAABRIAADlQAAAvAGAWIAGATQhFAFhIAEQidAIi/AAIhhAAgAC2JHQC8iLBihEQCihwCIhPQB0hCA5giQBkg8BBg1QA2gwAdgWQAxglAsgNQAPgEAugIQAmgHAWgJQAagMANgYQAHgOAAgLQAPgBAMgNQAQgRgEgVQgCgMgJgPIgSgZQgQgbgFgrQgEgzgDgZIgFgZQAKgYgCgZQgBgagNgRIgBgDQgBgKgEgQIgGgaQgJgvABhLIAAgrQCygDCyAYQAlAEAWAHQAfAKASATQALANAKATQAFAMAJAYIBaECQAYBDAJAkQAPA6AAAvQACCRh6CbQiBCljOB3Qi0BojoBCQirAwkHAqIm3BGIjoAtIiFAZQBbg2Chh2g");
	this.shape.setTransform(-27.3375,132.2365);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AtzT2QgFgYAAgyIAAjSQAAg4AEgcQADgRAKgpQAJglADgVQACgVgBgvQgBgcABgUIAQACIAhADQAQACB4AiQBRAYAzgUQAggMAdgfQAUgWAZgnQBUiOAiifIFZALQAoABAVgCQAjgCAZgMQAagMAZgZQASgSAXghQA6hQAxhUIEiAnQA/AIAgABQA0ABAogNIAWgIIALBWQAEAcAFAMQAHATAPARIgIABQhjAQhTAwQgoAXgzAoIhYBFQhEA0hhA6Qg5AjhzBCQj3CPjRCdQjzC2g0AgQihBmiRAcIgJgagAptJ2QgMgCgYgHQg+gThBgMQCyiyDMiWQgJBIgYBGQggBdg4BPQgfAtggAIQgIACgJAAQgJAAgJgBgAspHsQANg6AOgpQANglAbg3IAshbQAnhYAdh1QAShEAbiQIDNxAIACAAQCQAmCZB5QA1ApBMBFIB/BxQBmBXCJBhQBRA6CpBwICEBYIAAAAIgLAHQh2BMi5BQIjdBcQgKgLgNgGQgYgLgTALQgSAKgEAZQgCAKABALIgEACQkKB4jzCkQjzCljRDLIgQAQIAAgBgAjqDeQgqgIgZgYQDvijEFh4QARAhAcAcQAUAUADAMQACAPgPAYQgmA+grA7QgcAmgVALQgPAIgVADQgMACgaAAIjMAEIgQAAQgoAAgYgEgALrAJIkCgaQg2gFgdgJQgsgNgZgcQgRgUgRgrIgBgEQBhgpCag/QCXhBBrg8QgFBgAPCOIAFAyIAHA9IgDAHQgLAQgZAEQgKACgNAAIgYgBg");
	this.shape_1.setTransform(22.4,80.6875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AzXWDQiggLh/ghQiWgmh4hJQiEhQhRhyQg6hRgfhhQgfhhABhkQABiLA+hYQA2hPBtgyQBIghCHghIJ7idQgGgKABgMQABgXAigbQBAgwBKgcQAmgPBDgSQBPgVAagJQAfgKBCgbQA/gZAjgLIA/gRQAogLAXgJIBPggQAvgSAigBQAUAAAPAFQBtoZBWofQAFggAOgWQARgbAZAEQALACAIAHQAQABAVAGQCdAsCuCIQA4AsBYBOQBsBfAjAeQBoBXCMBiQBUA7CqBvQBHAvApAVQAUAKAJAHQAOALADAOQAEATgRAQIgBACQABAPgMAPQADAJACANQC0AACwAWQA9AIAkAMQAzARAeAfQAaAbASAuQAGASATBBQAbBdBEC7QAxClgcB2QgQBBgpBDQghA2g3A/QhwB+iJBkQiJBkibBDQjSBbk/A3Qi1AfluA1QhJANjOAqQivAkhoAQQiqAajKALQicAJjaACIg6AAQiMAAhegGgAjTikQgXABgMACQgUAEgdAPIgwAXQgSAHgcAGIgvAKQgsAKhFAcQhUAigbAJQgZAIguAKIhIATQhKAXg3AjQAKAAAIACQAQAEAKANQALANgCAPQgEAcg1ANIs0DPQhZAWgxAXQhIAjgfA4QgYArgGBJQgQCkA6CFQA0B2BwBZQBnBTCHAsQBzAnCTAPQBmAKCoACQD4ACDFgKQBIgDBFgGIgGgTQgGgWAAgvIAAjlQAAhRAIgoIAKgrQAGgbADgQQAEgdAAgoIgChGIAAgHQgFgJABgKQABgLAIgLIACgFQAHgTANgKIAGgVQAIgbAMg2QALg3AIgbQANgsAeg+QAihFAPgjQAlhTAdhrQAOg3AThYIgaABgAllK9QABAwgCAUQgDAWgJAkQgKApgCARQgFAcAAA4IAADTQAAAyAGAXIAIAbQCRgcCihnQAzggDzi2QDQicD4iQQBzhCA5giQBhg7BEgzIBYhFQAzgoAogXQBTgxBjgPIAJgBQgQgRgHgTQgFgNgEgcIgLhVIgVAIQgoANg1gBQgggBg+gJIkjgnQgxBVg5BQQgYAggSASQgZAagaAMQgZALgiADQgWACgogCIlZgLQgjCghUCNQgYAngVAXQgcAfggAMQgyAThSgXQh3gigRgCIghgDIgPgCQgBATAAAcgAV6lFIAAArQgBBLAJAvIAGAaQAEAQABAKIAAAEQANAQACAaQACAagKAXIAFAYQADAZAEAzQAFArAQAbIASAZQAJAPACAMQAEAVgQARQgNANgPABQABAMgHANQgNAYgaAMQgWAJgmAHQguAIgPAEQgsANgxAlQgdAWg2AwQhBA2hkA8Qg5Aih0BCQiIBPiiBwQhiBEi8CLQihB3hbA2ICFgaIDogtIG3hGQEHgqCrgwQDohCC0hoQDOh3CBilQB6icgCiRQAAgvgPg6QgJgkgYhDIhakBQgJgYgFgMQgKgTgLgNQgSgTgfgKQgWgHglgEQiggVifAAIglAAgAkbI9QBBANA/ASQAXAHAMACQAUAEAQgEQAfgIAfguQA3hPAghcQAYhGAJhIQjKCWizCxgAhUjfQgbCPgRBFQgdB0goBYIgsBbQgaA3gOAmQgOAogNA7IAAABIAQgQQDSjMDyilQDyikELh3IAEgCQgBgLACgLQAFgZARgKQATgKAYALQANAGAKALIDdhdQC5hQB2hLIALgHIAAgBIiEhXQiohxhSg5QiJhihmhXIh/hwQhNhGg0goQiah5iQgmIgCgBgADHCuQAZAYArAHQAcAFAzgBIDNgDQAagBAMgBQAVgDAPgIQAWgMAbglQArg7Amg/QAQgWgDgPQgDgNgUgUQgbgcgSghQkFB4jwCjgAQekEQiaA/hhAqIABADQARAsARAUQAZAbAsAOQAeAIA1AGIECAaQAdADASgDQAZgFALgRIADgGIgHg9IgFgzQgPiNAFhgQhrA8iXBAg");
	this.shape_2.setTransform(-27.7175,82.3117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BirthdayCake, new cjs.Rectangle(-240.6,-59.4,425.79999999999995,283.5), null);


(lib.Balloon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHVM4QgJgGgegfQgKgKgXgSQgWgSgLgLQgQgRgHgUQgIgWAHgUQAJgaAhgPQAUgIArgJQBTgQBHgpQBKgrAyg/QAQgTgCgPQgDgTgcgLQgggOg9gGQhFgIgagIQgqgNgjgdQgjgegUgnQgUgogCgtQgDguAPgpQAOgpAbgOQAQgIAXAAQANAAAcAEQCLAUCQgKQgYi5hGisQgKgbgJgOQgOgWgRgLQgUgMgfgCQgMAAgsACQhKAEgYglQgPgWAEgvQAFg1ANgzQAQhAAdgkIAHgIQAVgYAbgMQAegMAdAFQAUAEAOANQAPAOABASQAAAHgDAGQgCAHgFAHQgJAMgOAGQgWAJglgDQgoBNgEBXQA/gDAoAGQA4AJAiAeQAZAVATAlQANAXAQAtQAjBiATBGQAaBdAKBQQAHA4gSAbQgOAVgfAKQgXAGgkABQiPAFiOgSQgUAYAFAlQAEAiAYAZQAlAoBRAOQAVAEAsAGQAnAGAZAIQAiALAZAVQAbAWAKAeQANApgWAwQgSAngnAmQg/A+hQApQhPAqhXAQQAKALAbAUQAZATALANQAQAUgBAaQgBAcgVAIQgHADgHAAQgPAAgQgMgAgZMPQgZgCgngZQgqgagVgVQgfgfgFgiQgGgnAeg4QA3hnBbhLIA4gsQAhgbASgYQAcgnANg7QAIgpADhDQADg5gFggQgGgxgWghQgRgagfgYQgTgNgpgYQhEgogmghQg2gvgWg1QgRgpgDg7IAAhnIABhCQADglAJgbQAFgRAIgOQAJgOAMgLQAZgZAfgDQATgCASAIQASAJAGARQAFAMgEAPIgBAEQgGAQgOAHIgTAHQgMADgFAFQgPAMgBAkIgDByQgBArADAWQADAkAMAZQAZA2BUAxQBrA+AZAYQBkBigTDVQgHBKgRA2QgVBDgoAsQgTAWgiAaIg4AsQhIA8gsBVQgLAUAAAOQABAjA/AaQAbAMAOAPQATATgEAVQgDAQgRAKQgNAIgQAAIgEAAgApnK0QgSgCgKgMQgNgPAIgYQAGgUASgTQA1g5BFgeQAvgSAWgKQAmgSAUgYQAWgbAFgsQAEgcgDgzQgCgcgKgKQgIgIgPgCQgGgBgVAAQg2AAg9gXQgqgQhBgkQhpg6gzgzQgkglgUgoQgXgtgCguQgChAAog4QAng4A9gSIBCgPQAngJAVgRQAQgMANgUQAJgNALgZQAghDAUg1QAWg5ABghQACg2gigfQgKgJgVgLQgbgNgHgFQgLgIgIgKIgHgLQgJgTAHgQQAFgLAMgHQALgGAOgBQAVAAAcAPQAfAQAYAXQARAQAOATQAlAxADA2QADAygcBMQgeBQglBGQgaAzgaAeQgjAogpANQgMADgxAGQgmAFgUAMQgiAUgKAsQgJAqARAnQAPAiAgAeQAYAYAoAbQB9BTBoANQAsAEAVAEQAlAHAWASQAaAVAKAqQAGAcABAxQAAAwgDAaQgEAogQAdQgcAzhZAsQhsA2gdAaIgXAYQgOANgMAHQgPAIgQAAIgCAAg");
	this.shape.setTransform(-0.5068,136.2889);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AjHJhQgOgDgKgNQgJgNgBgQQgBgXASgiIAPgaQAIgPAEgMIACgLIgRgCQhEgIgpgmQgXgVgLgcQgKgXACgXIABgMQADgYAPgNQANgKAQABQAGgMAQgYQAKgQAPgbIAbg3IAEgIIgBgCIgCgHQgFgVAKgeIAKgcIAKgbIAFghIAGgrIABgLQAHguAGgZQAGgUABgJQACgQgGgLQgEgHgIgGIgPgLQgPgLgUgSIgOgOQgYgWgDgQIgBgCQgCgJADgJQgQgMgRgRQgSgRgKgHIgEgCQgGgBgFgDQgGgDgEgGIgGgFQgGgHgCgJIgBgJQgEgOABgSQABg2AXgeQAbghA2gGQATgDAbACIAuADQAlADBKADQBBAEArANQA8ARBAArQAnAaBIA8QApAiAUAVQAfAhAOAhQATArgDA7QgCAlgPBEQgcB+gQA2QgUBCgeBMQgRAqg2B8QgKAWgHALQgLARgOAJQgMAIgSADQgLACgWABIhNADQAWAbAZAbQATAVAHAOQALAWgHARQgGAMgNAHQgMAGgOAAQgLABgOgDQACgHAAgHQgBgSgPgOQgOgNgTgDQgdgGgeANQgbAMgVAXIgHAJQgNABgHACIgYAHQgKAEgIAAIgGgBg");
	this.shape_1.setTransform(60.9696,1.5026);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9966FF").s().p("AhXKFQgRgHgHgUQgIgSAFgUQAGgeAjghIAUgQQg0gDgfgFQg6gKgpgXQgrgZgmgwQgYgfglg+QgyhUgWgsQglhJgOg/QgPhAgBhkQgBguADgeQADgqAMghQAWg8A/hBQBihmCCg9QCBg+CMgMQBQgGA/AOQAyALA+AfQBsA2AvBGQASAZAFAXQADARgEAPQgFAVgUAMQgVANgTgKQgFgDgEgFIg8AxQgjAdgRASQgaAbgKAdQgOAnAJA1QAFAaAUBBQAMAkAcBnQAZBYASAzQAKAeAMAaIAHADQAQAIAIAQQAIAQgGAPIgCAGQgJAPgXAHQgEABguAHQglAGg1AeQhHAngQAHIgCAAIAUALIAeAPQATAJAKAJQAOALAHARQAHARgHAPQgLAagzAIQgZgXgfgQQgcgPgVAAQgOAAgLAGQgMAHgFAMQgHAQAJATIAIALIiEAOIgWABQgNgBgJgEg");
	this.shape_2.setTransform(-69.0445,-3.678);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033CC").s().p("AgsI0QgGgQgSgJQgSgJgTACQgfADgZAZQgMAMgJAOQgfgKgIgVQgLgaAWgeQAHgKANgMIAWgUQANgNATgZIgNgMQg2gygqhNIADgGQAGgPgIgQQgIgQgQgIIgHgDQgMgagKgeQgSgzgZhYQgchmgMglQgUhBgFgaQgJg1AOgnQAKgdAagbQARgSAjgdIA7gxQAFAFAFADQATAKAVgNQAUgMAFgVQAEgPgEgRQAZgSATgLQA+gmA5gJQAxgHAzAPQAyAPAmAhQAVASAcAjIABABQACAJAGAHIAGAFQAEAGAGADIAVAYIAjAjIATASIABACQADAQAYAWIAOAOQARAdALAhQASA2AAA7IAAAFIgBALIgGArIgFAhIgKAcIgKAbQgKAeAFAVIgJAYQgKAagKAWQgOAbgKAQQgRAYgFAMQgRgBgMAKQgPANgDAYIgCAMQgjAgg6AjQhkA8gSAOIgLAIIAIAKIAUAZQAZAigEAaQgDAYgaAVQgkAeg2AJQAEgPgFgNg");
	this.shape_3.setTransform(0.3992,5.1011);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Balloon, new cjs.Rectangle(-120.8,-68.6,220.5,288.5), null);


// stage content:
(lib.Holley_NewHaiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		stage.enableMouseOver();
		this.stop();
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1")
			root.line01_txt.text = line01;
		}
		
		var line01 = "March 4th is my day"
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2")
			root.line02_txt.text = line02;
		}
		
		var line02 = "Celebrating all the way"
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3")
			root.line03_txt.text = line03;
		}
		
		var line03 = "Delicious birthday cake"
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndPlay(2);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.circlebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(912.75,932.4);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.toFrame02_btn).wait(2));

	// Balloon
	this.instance = new lib.Balloon();
	this.instance.setTransform(865.4,474.05,1,1,0,0,0,-10.6,75.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Candle
	this.instance_1 = new lib.Candle();
	this.instance_1.setTransform(1122,539.25,1,1,0,0,0,10.3,-33);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// BirthdayCake
	this.instance_2 = new lib.BirthdayCake();
	this.instance_2.setTransform(1085,684.95,1,1,0,0,0,-27.8,82.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line Three", "bold 40px 'Arial'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 47;
	this.line03_txt.lineWidth = 620;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(936.1,211.7);

	this.line02_txt = new cjs.Text("Line Two", "bold 40px 'Arial'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 47;
	this.line02_txt.lineWidth = 616;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(938.2,144.3);

	this.line01_txt = new cjs.Text("Line One", "bold 40px 'Arial'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 47;
	this.line01_txt.lineWidth = 616;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(938.35,70.4);

	this.text = new cjs.Text("Birthday Haiku", "bold 40px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 759;
	this.text.parent = this;
	this.text.setTransform(920.95,11.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(0.3,1,1).p("AqAgBIUAAAIAAADI0AAAg");
	this.shape.setTransform(1183.9,258.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#038BFF"],[0.227,0.749],-64,0,64.1,0).s().p("Ap/ACIAAgDIT/AAIAAADg");
	this.shape_1.setTransform(1183.9,258.575);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(539.45,7.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.line01_txt,p:{y:70.4}},{t:this.line02_txt,p:{y:144.3}},{t:this.line03_txt,p:{y:211.7}}]}).to({state:[{t:this.instance_3},{t:this.line01_txt,p:{y:68.25}},{t:this.line02_txt,p:{y:142.15}},{t:this.line03_txt,p:{y:209.55}}]},1).wait(1));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006600").ss(1,1,1).p("EiefhXpME8/AAAMAAACvTMk8/AAAg");
	this.shape_2.setTransform(966.55,552.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("EieeBXqMAAAivTME8+AAAMAAACvTg");
	this.shape_3.setTransform(966.55,552.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#006600").ss(1,1,1).p("EinUhfoMFOpAAAMAAAC/RMlOpAAAg");
	this.shape_4.setTransform(981.775,588.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#038BFF"],[0.227,0.749],-1070.8,0,1070.9,0).s().p("EinUBfpMAAAi/RMFOpAAAMAAAC/Rg");
	this.shape_5.setTransform(981.775,588.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(869.9,515.1,1183.7999999999997,686.1999999999999);
// library properties:
lib.properties = {
	id: 'AA111918C21B494F976BBBB73D6D4AAC',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Holley_NewHaiku_atlas_1.png?1772514298618", id:"Holley_NewHaiku_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AA111918C21B494F976BBBB73D6D4AAC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;